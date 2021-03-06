(defproject alexandergunnarson/byu.project0 "1.0"
  :description      "BYU Project 0 for CS 360."
  :jvm-opts ^:replace
    ["-XX:-OmitStackTraceInFastThrow"
     "-d64" "-server"]
  ;:aot :all ;[quantum.core.macros] ; "^:skip-aot" doesn't work; same with regexes
  :jar-name          "quantum-dep.jar"
  :uberjar-name      "quantum.jar"
  :url               "https://www.github.com/alexandergunnarson/byu.project0"
  :license           {:name "Creative Commons Attribution-ShareAlike 3.0 US (CC-SA) license"
                      :url "https://creativecommons.org/licenses/by-sa/3.0/us/"}
  ; :signing          {:gpg-key "72F3C25A"}
  #_:deploy-repositories #_[;["releases" :clojars]
                        ["clojars" {:creds :gpg}]
                        []]
  :repositories {"sonatype-oss-public"
                 "https://oss.sonatype.org/content/groups/public/"}
  :plugins [#_[s3-wagon-private "1.1.2"]]
  :dependencies
    [[org.clojure/clojure                       "1.8.0-alpha2"    ] ; July 16th (Latest before hard-linking)
     [org.clojure/clojurescript                 "1.7.170"         ] ; Latest (as of 30/12/2015)
     ; ==== PROBLEMATIC DEPS ====
     [potemkin "0.4.1"]
     ; ==== CORE ====
       [proteus                                 "0.1.4"           ]
       [com.taoensso/encore "2.31.3"]
       ; ==== NAMESPACE ====
       [quantum/ns                              "1.0"             ]
       [org.clojure/tools.namespace             "0.2.11"          ] ; Latest (as of 1/2/2016)
       ; ==== ASYNC ====
         [org.clojure/core.async                "0.2.374"         ]
         [servant                               "0.1.3"           ] ; Latest (as of 4/1/2016)
         [co.paralleluniverse/pulsar            "0.7.3"           ] ; If you include it, it conflicts
         [co.paralleluniverse/quasar-core       "0.7.3"           ] ; :classifier "jdk8" 
         ;[com.typesafe.akka/akka-actor_2.11    "2.4.0"           ]
       ; ==== DATA ====
         [com.carrotsearch/hppc                 "0.7.1"           ] ; High performance primitive collections for Java
         [it.unimi.dsi/fastutil                 "7.0.7"           ]
         [seqspert                              "1.7.0-alpha6.1.0"]
         [fast-zip                              "0.6.1"           ]
         ; VECTOR
         [org.clojure/core.rrb-vector           "0.0.11"          ]
         [org.clojure/data.finger-tree          "0.0.2"           ]
         ; MAP / SET     
         [org.flatland/ordered                  "1.5.2"           ]
         [org.clojure/data.avl                  "0.0.12"          ]
         [org.clojure/data.int-map              "0.2.1"           ]
         ; ==== COMPLEX ====
           ; JSON
           [cheshire                            "5.3.1"           ] ; for oauth-clj; uses Jackson 2.3.1 ; JSON parsing
           ; CSV
           [org.clojure/data.csv                "0.1.2"           ]
           ; XML
           [org.clojure/data.xml                "0.0.8"
             :exclusions [org.clojure/clojure]                    ]
     
       ; ==== COLLECTIONS ====
         ; CORE
       ; ==== CONVERT ====
         [byte-streams                          "0.2.0"           ]
         #_[gloss                               "0.2.5"           ] 
       ; ==== CRYPTOGRAPHY ====
         [com.lambdaworks/scrypt                "1.4.0"           ]
         [org.mindrot/jbcrypt                   "0.3m"            ]
         [commons-codec/commons-codec           "1.10"            ]
         [org.bouncycastle/bcprov-jdk15on       "1.53"            ]
       ; ==== ERROR ====
         [slingshot                             "0.12.2"          ]
       ; ==== GRAPH ====
         [aysylu/loom                           "0.5.0"           ]
       ; ==== IO ====
        ;[commons-io/commons-io                 "2.4"             ] ; writing byte arrays to file and such
         [com.taoensso/nippy                    "2.7.0-alpha1"
           :exclusions [org.clojure/tools.reader
                        org.clojure/clojure
                        org.json/json]                            ] ; data serialization
         [iota                                  "1.1.2"       
           :exclusions [org.codehaus.jsr166-mirror/jsr166y
                        org.clojure/clojure]                      ] ; fast/efficient string IO manipulation
         [com.cognitect/transit-clj             "0.8.271"
           :exclusions [com.fasterxml.jackson.core/jackson-core]  ]
       ; ==== JAVA/CLASS ====
         [org.clojure/java.classpath            "0.2.3"           ]
         [alembic                               "0.3.2"           ]
         [org.reflections/reflections           "0.9.10"          ]
         [com.carrotsearch/java-sizeof          "0.0.5"           ] ; Get size of Java Objects
       ; ==== MACROS ====
         [riddley                               "0.1.10"          ]
         #_[potemkin                            "0.3.11"            ; defprotocol+, definterface+, etc.
           :exclusions [riddley]                                  ]
       ; ==== NUMERIC ====              
         [net.jafama/jafama                     "2.1.0"           ]
         [org.clojure/math.combinatorics        "0.1.1"           ]
       ; ==== PRINT ====
         [fipp                                  "0.6.4"           ] ; Latest (as of 2/1/2016)
       ; ==== RESOURCES ====
         [com.stuartsierra/component            "0.3.1"           ] ; Latest (as of 2/1/2016)
       ; ==== STRING ====
         ; REGEX
         [frak                                  "0.1.6"           ]   
       ; ==== TIME ====    
         #_[clj-time                            "0.7.0"           ] ; similar to JODA time
         [com.andrewmcveigh/cljs-time           "0.3.2"
           :exclusions [org.json/json]                            ]
       ; ==== UTIL ====
         ; BENCH      
         [criterium                             "0.4.3"           ]
         ; DEBUG
         [clj-stacktrace                        "0.2.8"           ]
         [debugger                              "0.1.7"           ]
         ; REPL
         [figwheel                              "0.5.0-2-Q"       ]
     ; ==== DB ====
       ; DATOMIC
       [com.datomic/datomic-pro                 "0.9.5206"
         :exclusions [joda-time]                                  ]
       [datascript                              "0.13.3"          ] ; Latest (as of 2/1/2016)
       [datascript-transit                      "0.2.0"           ] ; Latest (as of 5/1/2016)
       [com.zachallaun/datomic-cljs             "0.0.1-alpha-1"   ] ; Latest (as of 2/1/2016)
     ; ==== UI ====
       [fx-clj                                  "0.2.0-alpha1"
         :exclusions [potemkin]                                   ] ; 0.2.0-SNAPSHOT
       [reagent                                 "0.5.0"
         :exclusions [org.json/json]                              ]
       ;[freactive                              "0.1.0"           ] ; a pure ClojureScript answer to react + reagent
       ;[domina                                 "1.0.3"           ] ; DOM manipulation
       ; CSS
       [garden                                  "1.2.5"           ]
     ; ==== UUID ====
       [com.lucasbradstreet/cljs-uuid-utils     "1.0.2"           ] ; Latest (as of 4/1/2016)
       [danlentz/clj-uuid                       "0.1.6"           ] ; Latest (as of 9/1/2016)
     ; ==== HTTP ====      
       [com.taoensso/sente                      "1.7.0"           ] ; Latest (as of 9/1/2016)
       [clj-http                                "1.1.2"
         :exclusions [riddley
                      cheshire
                      org.json/json
                      com.fasterxml.jackson.core/jackson-core
                      commons-codec]                              ]
       ;[cljs-http                              "0.1.27"          ]
       [http-kit                                "2.1.18"
         :exclusions [org.clojure/clojure]                        ] 
       [org.apache.httpcomponents/httpcore      "4.4.1"           ]
       [org.apache.httpcomponents/httpclient    "4.4" 
         :exclusions [commons-codec]                              ]
       [org.apache.httpcomponents/httpmime      "4.4"
         :exclusions [commons-codec]                              ]
       ; ==== ROUTING ====
       [compojure                               "1.4.0"
         :exclusions [org.eclipse.jetty/jetty-server
                      org.eclipse.jetty/jetty-servlet
                      javax.servlet/servlet-api
                      clj-http]                                   ]
       [org.eclipse.jetty/jetty-server          "9.2.10.v20150310"]
       [org.immutant/web                        "2.1.2"             ; Latest (as of 9/1/2016)
         :exclusions [clj-tuple org.jboss.logging/jboss-logging]  ]
       ; ==== AUTH ====
       [com.cemerick/friend                     "0.2.1"
         :exclusions [org.clojure/core.cache]                     ]
       ; ==== MIDDLEWARE ====
       [ring/ring-anti-forgery                  "1.0.0"           ]
     ; WEB
     [com.github.detro/phantomjsdriver          "1.2.0"
       :exclusions [xml-apis
                    commons-codec]                                ]
     ; ==== CODE TRANSFORMATION ====
       ; META (CODE)      
       ;[repetition-hunter                      "1.0.0"           ]
       ; COMPILE/TRANSPILE
       [org.eclipse.jdt/org.eclipse.jdt.core    "3.10.0"          ] ; Format Java source code
       [com.github.javaparser/javaparser-core   "2.1.0"           ] ; Parse Java source code
     ; METADATA EXTRACTION/PARSING
     [org.apache.tika/tika-parsers              "1.9"             ]
     ; DATAGRID
     [org.apache.poi/poi                        "3.9"             ]
     [org.apache.poi/poi-ooxml                  "3.9"             ] ; Conflicts with QB WebConnector stuff (?) as well as HTMLUnit (org.w3c.dom.ElementTraversal)
     ; AUDIO
     ; [net.sourceforge.jvstwrapper/jVSTwRapper "0.9g"            ] ; Creating audio plugin
     ; [net.sourceforge.jvstwrapper/jVSTsYstem  "0.9g"            ] ; Creating audio plugin
     ; ==== MULTIPLE ====
     ; COMPRESSION, HASHING...
     [byte-transforms                           "0.1.3"           ]
     ; ==== MISCELLANEOUS ====
     ]
   :injections [(require '[quantum.core.ns :as ns])
                (reset! ns/externs? false)
                (let [oldv (ns-resolve (doto 'clojure.stacktrace require)
                                       'print-cause-trace)
                      newv (ns-resolve (doto 'clj-stacktrace.repl require)
                                      'pst)]
                  (alter-var-root oldv (constantly (deref newv))))] ; for :aot
   :profiles
   {:dev {:injections []
              ; [(do (ns quanta.main (:gen-class))
              ;      (require '[quantum.core.ns :as ns])
              ;      (clojure.main/repl :print quantum.core.print/!)
              ;      (clojure.main/repl :print clojure.pprint/pprint)
              ; )]
          :resource-paths ["dev-resources"]
          :dependencies   []
          :plugins [;[codox "0.8.8"]
                    ;[lein-cljsbuild                  "1.1.1"]
                    [lein-cljsbuild "1.1.2-Q-SNAPSHOT"]
                    ;[com.cemerick/clojurescript.test "0.3.1" :exclusions [org.json/json]]

                    ; rm -rf ./target && rm -rf ./dev-resources/public/js && lein figwheel dev
                    ; rm -rf ./target && rm -rf ./dev-resources/public/js/compiled/quantum/ && lein figwheel dev
                    [lein-figwheel                   "0.5.0-2-Q"
                      :exclusions [org.clojure/core.async
                                   org.clojure/core.cache]]
                    [jonase/eastwood                 "0.2.1"]
                    ]}}
  :aliases {"all" ["with-profile" "dev:dev,1.5:dev,1.7"]
            "deploy-dev"  ["do" "clean," "install"]
            "deploy-prod" ["do" "clean," "install," "deploy" "clojars"]
            "test"        ["do" "clean," "test," "with-profile" "dev" "cljsbuild" "test"]}
  :auto-clean     false ; is this a mistake?
  :java-source-paths ["src/java"]
  :source-paths      ["src/clj"
                      "src/cljc"
                      "src/cljs"]
  ;:resource-paths ["resources"] ; important for Figwheel
  :test-paths     ["test"]
  :global-vars {*warn-on-reflection* true}
  :java-agents [[co.paralleluniverse/quasar-core    "0.7.3"      ] ;  :classifier "jdk8" 
                ; This for HTTP/2 support
                [kr.motd.javaagent/jetty-alpn-agent "1.0.0.Final"]]
  :cljsbuild
    {:builds
      [{:id "dev"
        :figwheel true
        :source-paths ["src/cljs" "src/cljc" "test/cljs"]
        :compiler {:output-to            "dev-resources/public/js/compiled/system.js"
                   :output-dir           "dev-resources/public/js/compiled/out"
                   :optimizations        :none
                   :main                 alexandergunnarson.byu.project0.system
                   :asset-path           "js/compiled/out"
                   :source-map           true
                   :source-map-timestamp true
                   :cache-analysis       true
                   }}
       {:id "min"
        :source-paths ["src/cljs" "src/cljc"]
        :compiler {:output-to     "dev-resources/public/js/min-compiled/out/system.js"
                   :main          alexandergunnarson.byu.project0.system
                   :optimizations :advanced
                   :asset-path    "js/min-compiled/out"
                   :pretty-print  false}}]}
  :figwheel {:http-server-root "public" ;; default and assumes "resources" 
             :server-port 3449
             :css-dirs ["dev-resources/public/css"]}
  )