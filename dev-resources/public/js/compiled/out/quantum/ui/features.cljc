(ns ^{:doc "A namespace that checks for availability of CSS features."
      :todo ["Possibly rename 'quantum.ui.platform'?"]}
  quantum.ui.features
  (:require-quantum [ns fn map logic]))

#?(:cljs
(defn flex-test [elem flex-name]
  (-> elem .-style .-display (set! ""))
  (-> elem .-style .-display (set! flex-name))
  (-> elem .-style .-display (not= ""))))

(defn feature-test []
  #?(:clj {:chrome true} ; Because JavaFX will use Chromium via JXBrowser?
     :cljs
      (let [div (.createElement js/document "div")]
        (->> {:chrome  "flex"
              :safari  "-webkit-flex"
              :safari- "-webkit-box" ; (Older)
              :ie      "-ms-flexbox"}
             (map (fn [browser s] (map-entry (whenc browser (eq? :safari-) :safari) (flex-test div s))))
             (into {})))))

#?(:cljs
(defn determine-browser
  {:from "http://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser"
   :contributors {"Alex Gunnarson" "Ported to CLJC"}}
  []
  (let [opera? (or (.-opera js/window)
                   (-> js/navigator .-userAgent (.indexOf " OPR/") (>= 0)))]
    (cond
      ; Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
      opera?
      :opera
      ;  Chrome 1+
      (and (.-chrome js/window)
           (not opera?))
      :chrome
      ; Firefox 1.0+
      (try (when js/InstallTrigger true)
        (catch js/Error e false))
      :firefox 
      ; At least Safari 3+: "[object HTMLElementConstructor]"
      (-> js/Object .-prototype .-toString
          (.call (.-HTMLElement js/window))
          (.indexOf "Constructor")
          (> 0))
      :safari
      ; At least IE6
      (.-documentMode js/document)
      :ie))))

    





#?(:cljs (def browser (delay (determine-browser))))