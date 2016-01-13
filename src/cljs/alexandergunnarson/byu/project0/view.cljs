(ns alexandergunnarson.byu.project0.view
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
                   [alexandergunnarson.byu.project0.style :refer [style]])
  (:require-macros [quantum.system        :as sys ]
                   [reagent.ratom         :refer [reaction]  ]))

(defonce state
  (rx/atom {:state  :weather
            :width  (css-dom/viewport-w)
            :height (css-dom/viewport-h)
            :weather-item :current}))

(defn top-bar []
  (fn []
    [:div#top-bar
      [:div {:on-click (fn [e] (swap! state assoc :state :weather))}
        "Weather"]
      [:div {:on-click (fn [e] (swap! state assoc :state :about))}
        "About the Maker"]]))

(defn about []
  (fn []
    [:div#resume
      [:h1.name "Alex Gunnarson"]
      [:img.cutout {:src    "./me.jpg"
                    :height 200
                    :width  200}]
      [:h2.resume "My " [:i "(abbreviated)"] " résumé"]
      [:h3.resume "(full resume available " [:a {:href "./resume.pdf"} "here"] ")"]
      [:ul
        [:li [:pre "Used Clojure + ClojureScript, plus Datomic + DataScript"]]
        [:li [:pre "Used reactive expressions, cursors, and lenses"]]
        [:li [:pre "Created isomorphic client-and-server side database syncing"]]
        [:li [:pre "Wrote large shared client/server library called "
                   [:a {:href "https://www.github.com/alexandergunnarson/quantum"}
                   "quantum"]]]
        [:li [:pre "Created several reactive, data-driven web apps"]]]

      [:h2.contact "Contact Me"]
      [:form.contact
        [:textarea {:type "text"}]]]))

(defn weather []
  (fn []
    [:div#weather
      [:div#weather-bar
        [:div.weather-item {:class (when (-> @state :weather-item (= :current)) "selected")
                            :on-click (fn [e] (swap! state assoc :weather-item :current))}
          "Current"]
        [:div.weather-item {:class (when (-> @state :weather-item (= :forecast)) "selected")
                            :on-click (fn [e] (swap! state assoc :weather-item :forecast))}
          "Forecast"]]
      (when (-> @state :weather-item (= :current))  
        [:div#current-weather
          [:div#status "sunny"]
          [:div#status-span
            [:div.caption1 "20° F"]
            [:svg {:height 100 :width 100}
              [:circle#sun]
              [:circle#sun1]
              [:circle#sun2]]
            [:div.caption1 "10% H"]]
          [:p#footer {:class "p5"}
            "Sponsored by "
            [:a.p5 {:href "http://www.weather.com"} "weather.com"]]
          ; pre, a form
          [:table]])
      (when (-> @state :weather-item (= :forecast))  
        [:div#forecast
          [:table
            [:tr [:th "Date"] [:th "Precipitation"] [:th "Chance"]]
            [:tr [:td "1/13"] [:td "Rain"         ] [:td "10%"   ]]
            [:tr [:td "1/14"] [:td "Snow"         ] [:td "50%"   ]]
            [:tr [:td "1/15"] [:td "Sleet"        ] [:td "40%"   ]]]])]))

(set! (.-onresize js/window)
      (fn [e]
        (swap! state assoc
          :width  (css-dom/viewport-w)
          :height (css-dom/viewport-h))))

(defn ui-render-fn [props]
  (fn []
    [:div#div-root {:style {:width  (:width  @state)
                            :height (:height @state)}}
      [top-bar]
      (when (-> @state :state (= :about))
        [about])
      (when (-> @state :state (= :weather))
        [weather])
      ]))