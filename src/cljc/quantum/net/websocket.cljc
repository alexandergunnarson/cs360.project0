(ns quantum.net.websocket
  (:require-quantum [ns log fn logic err res async core-async])
  (:require        [taoensso.sente               :as ws    ]
                   [quantum.core.core                
                     :refer [lens deref*]                  ]
           #?(:clj [quantum.core.collections.base
                     :refer [kmap]                         ]))
  #?(:cljs
  (:require-macros [quantum.core.collections.base
                     :refer [kmap]                         ])))

(defmulti event-msg-handler :id) ; Dispatch on event-id
(def send-msg! (lens res/systems (fn-> :epimaxsa.match424.common.system/system :sys-map deref* :connection :send-fn)))

; Wrap for logging, catching, etc.:
(defn     event-msg-handler* [{:as ev-msg :keys [id ?data event]}]
  (event-msg-handler ev-msg))

(declare put!)

#?(:clj
(defmethod event-msg-handler :default ; Fallback
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
  (let [session (:session ring-req)
        uid     (:uid     session)]
    (log/pr :debug "Unhandled event:" ev-msg)
    (log/pr :debug "Responding" "reply-fn?" ?reply-fn)
  
    (when ?reply-fn
      (?reply-fn {:unhandled-event event})))))

#?(:clj
(defmethod event-msg-handler :chsk/uidport-open
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
  (log/pr :debug "uidport-open")))

#?(:clj
(defmethod event-msg-handler :chsk/uidport-close
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
  (log/pr :debug "uidport-close")))

#?(:clj
(defmethod event-msg-handler :chsk/ws-ping
  [ev-msg]
  ; Do nothing
  ))

; ------> Add your (defmethod event-msg-handler <event-id> [ev-msg] <body>)s here <------

#?(:cljs
(defmethod event-msg-handler :default ; Fallback
  [{:as ev-msg :keys [event]}]
  (log/pr :debug "Unhandled event:" event)))

#?(:clj
(defmethod event-msg-handler :chan/datomic
  [{:as event [id data] :event :keys [?reply-fn]}]
  (log/pr :debug :chan/datomic)
  (when ?reply-fn
    (?reply-fn
      [:chan/datomic {:msg "Acknowledged Datomic"}]))))

#?(:cljs
(defmethod event-msg-handler :chsk/state
  [{:as ev-msg :keys [?data]}]
  (if (= ?data {:first-open? true})
      (log/pr :debug "Channel socket successfully established!")
      (log/pr :debug "Channel socket state change:" ?data))))

#?(:cljs
(defmethod event-msg-handler :chsk/recv
  [{:as ev-msg :keys [?data]}]
  (log/pr :debug "Push event from server:" ?data)))

#?(:cljs
(defmethod event-msg-handler :chsk/handshake
  [{:as ev-msg :keys [?data]}]
  (let [[?uid ?csrf-token ?handshake-data] ?data]
    (log/pr :debug "Handshake:" ?data))))

; ------> Add your (defmethod handle-event-msg! <event-id> [ev-msg] <body>)s here <------

(defn put!
  "Sends a message @msg across via a WebSocket connection."
  {:usage '(put! :my/button {:my-key1 "Data1"
                             :my-key2 "Data2"}
                 (fn [resp] (println "Response is" resp))
                 100)}
  [#?(:clj uid) [msg-id msg] callback & [timeout]]
  (let [f @send-msg!]
    (assert (nnil? f))
    (@send-msg! #?(:clj uid) [msg-id msg] (or timeout 200) callback)))

(defn try-put!
  "Try to send messsage @?times times with intervals of @?sleep
   milliseconds. As soon as message send is successful, no further
   messages are tried to be sent."
  [?times ?sleep & args]
  (let [times (when (integer? ?times) ?times)
        sleep (when (number?  ?sleep) ?sleep)
        args-f (cond (and times sleep) args
                     times             (cons ?sleep args)
                     :else             (concat (list ?times ?sleep) args))]
    (go (try-times (or times 3) (or sleep 500)
          (when (nil? (apply put! args-f))
            (throw (->ex nil "WebSocket apparently not open for message")))))))