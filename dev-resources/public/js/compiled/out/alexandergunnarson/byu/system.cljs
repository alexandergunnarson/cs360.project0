(ns alexandergunnarson.byu.system
  (:require-quantum [ns fn logic err log pr res])
  (:require        [quantum.system        :as sys    ]
                   [quantum.net.websocket :as conn   ]
                   [quantum.ui.style.css.dom    :as css-dom]
                   [quantum.ui.style.css.core   :as css    ]
                   [quantum.ui.style.fonts      :as fonts  ]
                   [reagent.core          :as rx     ]
                   [garden.core                  :refer [css]]
                   [clojure.walk                 :refer [postwalk]]
                   [quantum.core.type.predicates :refer [map-entry?]]
                   [garden.selectors :as s]
                   [quantum.ui.features :refer [browser]]
                   [alexandergunnarson.byu.view :as view]
                   [alexandergunnarson.byu.style :refer [style]])
  (:require-macros [quantum.system        :as sys ]
                   [reagent.ratom         :refer [reaction]  ]))

(enable-console-print!)
(println "Something to the console!")

; TODO move this in subsequent versions
; (def style-compatibilized
;   (->> style
;        (postwalk
;          (whenf*n map?
;            (fn [m]
;              (->> m
;                   (reduce
;                     (fn [ret [k v]]
;                       (let [any-compat (->> css/compatibility-chart
;                                             (<- get k)
;                                             (<- get css/ANY)
;                                             (<- get @browser)
;                                             (map first)
;                                             (<- zipmap (repeat v)))
;                             this-compat (->> css/compatibility-chart
;                                              (<- get k)
;                                              (<- get v)
;                                              (<- get @browser)
;                                              (apply array-map))
;                             compat (merge any-compat this-compat)]
                        
;                         (if (nempty? compat)
;                             (do (println "K FOUND!" k)
;                                 (merge ret compat))
;                             ret))
;                     m))))))))

; (def css-string
;   (delay (css {:vendors ["moz" "webkit"]} style-compatibilized)))

; (defn init-ui! []
;   (css-dom/add-link!
;     (fonts/link :montserrat))
;   (css-dom/add-link!
;     (fonts/link :lato))

;   (css-dom/replace-css-at! "dynamic" @css-string)
;   (println "CSS-STRING:" @css-string)
;   (log/pr :debug "UI inited."))

; (sys/create-system-vars
;   ::system
;   (sys/default-config
;     {;:server     {:routes         (*var router/routes)
;      ;             :key-password   "password"
;      ;             :trust-password "password"}
;      :db         {:backend        false
;                   :schemas        {:my/schema [:string :one {:unique? true}]}}
;      :connection false ;{:msg-handler    conn/event-msg-handler*}
;      :frontend   {:init           init-ui!
;                   :render         view/ui-render-fn}}))

; (-main)