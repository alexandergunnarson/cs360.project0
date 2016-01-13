(ns quantum.net.http
  (:require-quantum [ns err logic fn casync])
  (:require        [com.stuartsierra.component              :as component]
                   [taoensso.sente                          :as ws       ]
           #?(:clj [immutant.web                            :as imm      ])
           #?(:clj [taoensso.sente.server-adapters.immutant :as a-imm    ])))

(defn valid-port? [x]
  (and (integer? x) (>= x 0) (<= x 65536)))

(defrecord 
  ^{:doc "A WebSocket-channel abstraction of Sente's functionality.

          Creates a Sente WebSocket channel and Sente WebSocket channel
          message router.

          @chan-recv  : ChannelSocket's receive channel
          @chan-send! : ChannelSocket's send API fn
          @chan-state : Watchable, read-only atom
          @packer     : Client<->server serialization format"
    :usage '(map->ChannelSocket {:uri         "/chan"
                                 :packer      :edn
                                 :msg-handler my-msg-handler})}
  ChannelSocket
  [uri host chan chan-recv send-fn chan-state type server-type packer
   stop-fn ajax-post-fn ajax-get-or-ws-handshake-fn msg-handler
   connected-uids]
  component/Lifecycle
    (start [this]
      (assert (string? uri) #{uri})
      (assert (fn? msg-handler))
      (assert (or (nil? type) (contains? #{:auto :ajax :ws} type)))
    #?(:clj 
      (assert (contains? #{:immutant #_:http-kit} server-type) #{server-type}))
      (assert (keyword? packer))

      (let [{:keys [chsk ch-recv send-fn state] :as socket}
             (ws/make-channel-socket!
               #?(:clj (condp = server-type
                         ;:http-kit a-http-kit/sente-web-server-adapter
                         :immutant a-imm/sente-web-server-adapter
                         )
                  :cljs uri)
               {:type   (or type :auto)
                :packer packer
                #?@(:cljs
                [:host host])})
            stop-fn-f (ws/start-chsk-router! ch-recv msg-handler)]
        (assoc this
          :chan                        chsk
          :chan-recv                   ch-recv
          :send-fn                     send-fn
          :chan-state                  state
          :stop-fn                     stop-fn-f
          :ajax-post-fn                (:ajax-post-fn                socket)
          :ajax-get-or-ws-handshake-fn (:ajax-get-or-ws-handshake-fn socket)
          :connected-uids              (:connected-uids              socket))))
    (stop [this]
      (when stop-fn (stop-fn))
      ; TODO should assoc other vals as nil?
      this))

#?(:clj
(defrecord
  ^{:doc "A web server. Currently only the :http-kit server @type is supported."}
  Server
  [routes server type host port ssl-port http2?
   key-store-path key-password trust-store-path trust-password
   stop-fn stop-timeout ran]
  component/Lifecycle
    (start [this]
      (err/assert (valid-port? port) #{port})
      (err/assert (contains? #{:immutant #_:http-kit} type) #{type})

      (let [server (condp = type
                        ;:http-kit (http-kit/run-server routes {:port (or port 0)})
                        :immutant (imm/run routes
                                    {:host           (or host     "localhost")
                                     :port           (or port     8080)
                                     :ssl-port       (or ssl-port 443)
                                     :http2?         (or http2?   false)
                                     :keystore       (or key-store-path   "resources/server.keystore")
                                     :key-password   key-password
                                     :truststore     (or trust-store-path "resources/server.truststore")
                                     :trust-password trust-password}))]
        (assoc this
          :ran     server
          :server  (condp = type
                     :http-kit nil ; http-kit doesn't expose this
                     :immutant (imm/server server))
          :port    (condp = type
                     :http-kit (:local-port (meta server))
                     port)
          :stop-fn (condp = type
                     :http-kit server
                     :immutant #(do (when (nnil? server)
                                      (imm/stop server)))))))
    (stop [this]
      (condp = type
        :http-kit (stop-fn :timeout (or stop-timeout 100))
        :immutant (stop-fn))
      (assoc this
        :stop-fn nil))))