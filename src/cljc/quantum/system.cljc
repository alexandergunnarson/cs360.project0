(ns ^{:doc "A namespace for bootstrapping/streamlining system creation."}
  quantum.system
  (:require-quantum [ns async log err logic fn res debug])
  (:require [com.stuartsierra.component       :as component]
   #?(:cljs [reagent.core                     :as rx       ])
            [quantum.core.core                   
              :refer [deref* lens]                         ]
            [quantum.db.datomic               :as db       ]
            [quantum.db.datomic.core          :as dbc      ]
            [quantum.db.datomic.reactive.core :as db-rx    ]
            [quantum.net.http                 :as http     ]
            [quantum.net.websocket            :as conn     ]))

(defn default-config
  "A decent default configuration for a web app.
   TODO More default configs to follow.

   @frontend-init : a frontend init function"
  {:usage '(default-config
             {:server     {:routes         (*var router/routes)
                           :key-password   "password"
                           :trust-password "password"}
              :db         {:schemas        {:my/schema [:string :one {:unique? true}]}}
              :connection {:msg-handler    conn/ws-msg-handler}
              :frontend   {:init           init-ui!
                           :render         ui-render-fn
                           :root-id        "app"}})}
  [& [{:as config
       {:keys [routes key-password trust-password]              } :server
       {:keys [uri msg-handler]                   :as connection} :connection
       {:keys [js-source-file]                                  } :deployment
       {:keys [schemas]                                         } :db
       {:keys [render root-id]                                  } :frontend
       {                                          :as backend   } :backend}]]
  (let [host             "0.0.0.0"
        server-port      8080
        server-type      :immutant
        js-source-file-f (or js-source-file "system")
        frontend-init    (-> config :frontend :init)]
  {:log
     {:levels                   #{:debug :warn}}
   #?@(:clj
  [:server
     {:host                     host
      :port                     server-port
      :ssl-port                 9999
      :routes                   routes
      :type                     server-type
      :http2?                   true
      :key-password             key-password
      :key-store-path           "./resources/server.keystore"
      :trust-password           trust-password
      :trust-store-path         "./resources/server.keystore"}])
   :connection
     (when connection
       {:uri                      (or uri "/chan")
        #?@(:cljs
       [:host                     (str host ":" server-port)])
        :packer                   :edn
        #?@(:clj
       [:server-type              server-type])
        :msg-handler              msg-handler})
   :frontend
     {:init                     frontend-init
      :render                   render
      :root-id                  (or root-id "root")}
   :db
     {:backend 
       (when backend
         {:type                   :free
          :name                   "test"
          :host                   "localhost"
          :port                   4334
          :create-if-not-present? true
          :txr-alias              "local"
          :default-partition      :db.part/test
          :init-schemas?          true
          :schemas                schemas
          #?@(:clj
         [:start-txr?             true
          :txr-dir                (str (System/getProperty "user.dir")
                                       "/../datomic-free-0.9.5344")
          :txr-bin-path           "./bin/transactor"
          :txr-props-path         "./config/samples/free-transactor-template.properties"])})
      #?@(:cljs
         [:ephemeral {:history-limit js/Number.MAX_SAFE_INTEGER
                      :reactive?     true
                      :schemas       schemas}])}
   #?@(:cljs
    [:threadpool
        {:thread-ct 2
         ; This is whatever the name of the compiled JavaScript will be
         :script-src (str "./js/compiled/" js-source-file-f ".js")}])
        }))

(defn gen-system-creator [system-kw config]
  (delay
    (res/register-system!
      system-kw
      config
      (fn [{:as config-0 :keys [connection]}]
        (apply component/system-map
          :log           (log/->log-initializer     (:log        config-0))
    #?@(:cljs
         [:threadpool
                         (component/using 
                           (async/->threadpool      (:threadpool config-0))
                           [:log])])
          :db            (component/using 
                           (db/->db                 (:db         config-0))
                           [:log #?(:cljs :threadpool)])
    #?@(:clj
         [:server        (component/using 
                           (http/map->Server        (:server     config-0))
                           [:log])])
         (when connection
           [:connection
            (component/using 
              (http/map->ChannelSocket (:connection config-0))
              [:log])]))))))

(defn gen-main
  "Creates a standard |-main| function.
   For Clojure, this is for JAR packaging.
   For ClojureScript, this can be used e.g. with Figwheel's :main."
  [config system-creator system sys-map]
  (fn [& [port]]
    @system-creator
    (when-not #?(:clj  false
                 :cljs (async/web-worker?))
      (res/reload! @system)
    
      (reset! dbc/conn* (-> @sys-map :db #?(:clj :backend :cljs :ephemeral)
                           :conn deref))
      #?(:clj (reset! dbc/part* (-> @sys-map :db :backend :default-partition)))
      
      #?(:cljs (when (-> @sys-map :db :ephemeral :reactive?)
                 (db-rx/react! @dbc/conn*))) ; Is this necessary?
      #?(:cljs (when-let [frontend-init (-> config :frontend :init)]
                 (assert (fn? frontend-init) #{frontend-init})
                 (frontend-init)))
      #?(:cljs (let [render-fn (-> config :frontend :render)
                     root-id   (-> config :frontend :root-id)]
                 (assert (fn? render-fn) #{render-fn})
                 (assert (string? root-id) #{root-id})
                 (log/pr :debug "Now rendering on root node, id" root-id)
                 (rx/render [render-fn]
                   (js/document.getElementById root-id)))))))

#?(:clj
(defmacro create-system-vars
  "Generally @system-kw should be simply ::system.
   @config : A config-map."
  [system-kw config]
  (let [main-sym (with-meta '-main {:export true})
        system-code `(lens res/systems ~system-kw)]
    `(do (def ~'system  ~system-code)
         (def ~'sys-map (lens ~'system (fn-> :sys-map deref*)))
         
         (when (deref* ~system-code)
           (res/stop! @~system-code)
           (when-let [sys-map# (-> res/systems deref ~system-kw :sys-map deref)]
             (component/stop sys-map#)))
         
         ; In CLJS, ~main-sym content can't refer to e.g. ~'sys-map unless
         ; it has been previously declared outside of the macro
         (defn ~main-sym [& args#]
           (let [system-kw# ~system-kw
                 system#    (lens res/systems system-kw#)
                 sys-map#   (lens system# (fn-> :sys-map deref*))
                 config#    ~config]
             (apply (gen-main config#
                              (gen-system-creator system-kw# config#)
                              system#
                              sys-map#)
                    args#)))))))
