(ns ^{:doc "The top level Datomic (and friends, e.g. DataScript) namespace"}
  quantum.db.datomic
  (:require-quantum [ns err core-async pr log logic fn cbase tpred async])
  (:require
   #?(:clj  [clojure.core                     :as c        ]
      :cljs [cljs.core                        :as c        ])
   #?(:cljs [cljs-uuid-utils.core             :as uuid     ])
   #?(:clj  [datomic.api                      :as bdb      ]
      :cljs [datomic-cljs.api                 :as bdb      ])
            [datascript.core                  :as mdb      ]
            [quantum.db.datomic.core          :as db       ]
            [quantum.db.datomic.reactive.core :as rx-db    ]
    #?(:clj [quantum.core.collections.base
              :refer [kmap]                                ])
   ;#?(:clj [quantum.deploy.amazon            :as amz      ])
            [com.stuartsierra.component       :as component]
            [quantum.core.collections         :as coll     ]
            [quantum.core.resources           :as res      ]
    #?(:clj [quantum.core.process             :as proc     ]))
  #?(:cljs (:require-macros
            [datomic-cljs.macros   
              :refer [<?]                                  ]
            [quantum.core.collections.base
              :refer [kmap]                                ]))
  #?(:clj (:import datomic.Peer
                   [datomic.peer LocalConnection Connection]
                   java.util.concurrent.ConcurrentHashMap)))

; CORE FUNCTIONS

(defn rx-q
  "Reactive |q|. Must be called within a Reagent component and will only
   update the component whenever the data it is querying has changed."
  {:todo ["Add Clojure support"]}
  ([query] (rx-q query @db/conn*))
  ([query conn & args] (apply rx-db/q conn query args)))

(defn rx-pull
  "Reactive |pull|. Only attempts to pull any new data if there has been a
   transaction of any datoms that might have changed the data it is looking at."
  {:todo ["Add Clojure support"]}
  ([selector eid] (rx-pull @db/conn* selector eid))
  ([conn selector eid] (rx-db/pull conn selector eid)))

(defn rx-transact!
  "Buffers its transactions in 1/60 second intervals, passes them through
   any handlers set up in |rx-db/before-tx!|, then batch transacts them to the database."
  {:todo ["Add (better) Clojure support"]}
  ([tx-data]      (rx-transact! @db/conn* tx-data))
  ([conn tx-data] (rx-db/transact! conn tx-data)))

; RECORDS

(defrecord
  ^{:doc "Ephemeral (in-memory) database. Currently implemented as
          DataScript database. Once the reference to @conn is lost,
          the database is garbage-collected.

          @conn, while also a 'connection', is really an atom with the current DataScript DB value."}
  EphemeralDatabase [conn history history-limit reactive?]
  component/Lifecycle
    (start [this]
      (log/pr :user "Starting Ephemeral database...")
      (let [; Maintain DB history.
            history (when (pos? history-limit) (atom []))
            conn-f (mdb/create-conn)
            _ (when (pos? history-limit)
                (log/pr :user "Ephemeral database history set up.")
                (mdb/listen! conn-f :history1 ; just ":history" doesn't work
                  (fn [tx-report]
                    (log/pr :user "Adding to history")
                    (let [{:keys [db-before db-after]} tx-report]
                      (when (and db-before db-after)
                        (swap! history (fn [h]
                          (-> h
                              (coll/drop-tail #(identical? % db-before))
                              (c/conj db-after)
                              (coll/trim-head history-limit)))))))))
            ; Sets up the tx-report listener for a conn
            #?@(:cljs [_ (when reactive? (rx-db/react! conn-f))]) ; Is this enough? See also quantum.system
            _ (log/pr :user "Ephemeral database reactivity set up.")]
        (c/assoc this :conn    conn-f
                      :history history)))
    (stop [this]
      (reset! conn nil) ; TODO is this wise?
      this))

(defrecord
  ^{:doc "Datomic database.

          @start-txr? is a boolean which defines whether the transactor should be started.
          @partitions is a seq (preferably set) of keywords identifying partitions"
    :todo ["Decompose this"]}
  BackendDatabase
  [type
   name db-name table-name instance-name ; <- TODO disambiguate these three
   host port rest-port uri conn create-if-not-present?
   start-txr? txr-bin-path txr-props-path txr-dir txr-process txr-alias
   init-partitions? partitions
   default-partition
   init-schemas? schemas]
  component/Lifecycle
    (start [this]
      ; Set all transactor logs to WARN 
      #?(:clj (try
                (doseq [^ch.qos.logback.classic.Logger logger
                          (->> (ch.qos.logback.classic.util.ContextSelectorStaticBinder/getSingleton)
                               (.getContextSelector)
                               (.getLoggerContext)
                               (.getLoggerList))]
                  (.setLevel logger ch.qos.logback.classic.Level/WARN))
                (catch NullPointerException e)))
      (let [uri-f (condp = type
                            :free
                              (str "datomic:" (c/name type)
                                   "://" host ":" port "/" name)
                            :mem
                              (str "datomic:" (c/name type)
                                   "://" name)
                            :http
                              (str "http://" host ":" rest-port "/" txr-alias "/" name)
                            :dynamo nil
                              #_(str "datomic:ddb://"    (amz/get-server-region instance-name)
                                   "/" db-name
                                   "/" table-name
                                   "?aws_access_key_id=" (amz/get-aws-id     instance-name)
                                   "&aws_secret_key="    (amz/get-aws-secret instance-name))
                            (throw (->ex :illegal-argument
                                         "Database type not supported"
                                         type)))
            txr-process-f
              (when start-txr?
                #?(:clj (let [proc (component/start
                                     (proc/->proc txr-bin-path
                                       [txr-props-path]
                                       {:pr-to-out? true
                                        :dir        txr-dir}))]
                          (log/pr :debug "Starting transactor..." (kmap txr-bin-path txr-props-path txr-dir))
                          (async/sleep 3000)
                          proc)))
            connect (fn [] (log/pr :debug "Trying to connect with" uri-f)
                           (let [conn-f (do #?(:clj  (bdb/connect uri-f)
                                               :cljs (bdb/connect host rest-port txr-alias name)))]
                             (log/pr :debug "Connection successful.")
                             conn-f))
            conn-f  (try 
                      (try-times 5 1000
                        (try (connect)
                          (catch #?(:clj RuntimeException :cljs js/Error) e
                            (log/pr :warn "RuntimeException while trying to connect:" e)
                            (when (and #?(:clj
                                           (-> e .getMessage
                                               (=  (str "Could not find " name " in catalog")))
                                          :cljs "TODO")
                                       create-if-not-present?)
                              (log/pr :warn "Creating database...")
                              #?(:clj  (Peer/createDatabase uri-f)
                                 :cljs (go (<? (bdb/create-database host rest-port txr-alias name)))))
                            (throw e))
                          (catch #?(:clj Throwable :cljs js/Error) e
                            (log/pr :warn "Error while trying to connect:" e)
                            (throw e))))
                      (catch #?(:clj Throwable :cljs js/Error) e
                        (log/pr :warn "Failed to connect:" e)
                        (throw e)))
            _ (reset! conn conn-f)
            _ (when init-schemas?
                (assert (nempty? schemas) #{schemas})
        
                (log/pr :debug "Initializing database with schemas...")
                (db/transact!    conn-f (db/->partition :db.part/test))
                (db/add-schemas! conn-f (db/block->schemas schemas))
                (log/pr :debug "Schema initialization complete."))]

      (c/assoc this
        :uri         uri-f
        :txr-process txr-process-f)))
    (stop [this]
      #?(:clj (do (when (and (atom? conn) (nnil? @conn))
                        (bdb/release @conn))
                  (when txr-process
                    (component/stop txr-process))))
      (reset! conn nil)
      this))

(defrecord
  ^{:doc "Database-system consisting of an EphemeralDatabase (e.g. DataScript),
          BackendDatabase (e.g. Datomic), and a reconciler which constantly
          pushes diffs from the EphemeralDatabase to the BackendDatabase
          and pulls new data from the BackendDatabase.

          A Datomic subscription model would be really nice for performance
          (ostensibly) to avoid the constant backend polling of the reconciler,
          but unfortunately Datomic does not have this.

          @backend
            Can be one of three things:
              1) A direct connection to a Datomic database using the Datomic Peer API
                 - This option is for Clojure (e.g. server) only, not ClojureScript
              2) A direct connection to a Datomic database using the Datomic HTTP API
                 - This option is currently not proven to be secure and is awaiting
                   further developments by the Cognitect team.
              3) A REST endpoint pair:
                 - One for pushing, e.g. 'POST /db'
                 - One for pulling, e.g. 'GET  /db'
                 - This way the Datomic database is not directly exposed to the client,
                   but rather the server is able to use access control and other
                   security measures when handling queries from the client.
                   This is the (currently) recommended option.
          @reconciler
            is"}
  Database
  [ephemeral reconciler backend]
  ; TODO code pattern here
  component/Lifecycle
    (start [this]
      (let [ephemeral-f  (when ephemeral  (component/start ephemeral ))
            backend-f    (when backend    (component/start backend   ))
            reconciler-f (when reconciler (component/start reconciler))]
        (c/assoc this
          :ephemeral  ephemeral-f
          :reconciler reconciler-f
          :backend    backend-f)))
    (stop [this]
      (let [reconciler-f (when reconciler (component/stop reconciler))
            ephemeral-f  (when ephemeral  (component/stop ephemeral ))
            backend-f    (when backend    (component/stop backend   ))]
        (c/assoc this
          :ephemeral  ephemeral-f
          :reconciler reconciler-f
          :backend    backend-f))))

(defn ->db
  "Constructor for |Database|."
  [{{:keys [type name host port rest-port txr-alias create-if-not-present?] :as backend}
    :backend
    {:keys [] :as reconciler}
    :reconciler
    {:keys [history-limit] :as ephemeral}
    :ephemeral
    :as config}]
  (log/pr :user (kmap config))
  (when backend
    (assert (contains? #{:free :http} type)) ; TODO for now
    (assert ((fn-and string? nempty?) name))
    (assert ((fn-and string? nempty?) host))
    (assert (integer? port))
    (assert ((fn-or nil? integer?) port))
    (assert ((fn-or nil? string?)  txr-alias))
    (assert ((fn-or nil? boolean?) create-if-not-present?)))

  (when ephemeral
    (assert ((fn-or nil? integer?) history-limit)))

  (Database.
    (when ephemeral
      (map->EphemeralDatabase
        (c/assoc ephemeral :history-limit (or history-limit 0))))
    reconciler
    (when backend
      (map->BackendDatabase 
        (c/assoc backend :uri  (atom nil)
                         :conn (atom nil))))))
