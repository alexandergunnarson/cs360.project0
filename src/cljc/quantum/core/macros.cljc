(ns
  ^{:doc "Some useful macros, like de-repetitivizing protocol extensions.
          Also some plumbing macros for |for| loops and the like."
    :attribution "Alex Gunnarson"}
  quantum.core.macros
  (:refer-clojure :exclude [name macroexpand macroexpand-all])
  ; (:require-quantum [ns log pr err map set vec logic fn list cbase classes cmacros])
  ; (:require
  ;   [quantum.core.collections.base           :as cbase
  ;     :refer [name default-zipper camelcase ns-qualify
  ;             zip-reduce ensure-set update-first update-val]]
  ;   [quantum.core.macros.core
  ;     :refer [hint-meta]]
  ;   [quantum.core.type.core                  :as tcore]
  ;   [quantum.core.type.bootstrap             :as tboot]
  ;   [quantum.core.analyze.clojure.predicates :as anap
  ;     :refer [type-hint unqualify]]
  ;   [quantum.core.numeric.combinatorics      :as combo]
  ;   [clojure.string                          :as str  ]
  ;   [clojure.walk :refer [postwalk prewalk]]
  ;   #?(:clj [riddley.walk])
  ;  )
  )

; ===== QUOTE+ =====

; #?(:clj
; (defmacro unquote-replacement
;   "Replaces all duple-lists: (clojure.core/unquote ___) with the unquoted version of the inner content."
;   [sym-map quoted-form]
;   `(prewalk
;      (fn [obj#]
;        (if (and (seq? obj#)
;                 (-> obj# count   (= 2))
;                 (-> obj# (nth 0) (= 'clojure.core/unquote)))
;            (if (->> obj# (<- nth 1) (contains? ~sym-map))
;                (get ~sym-map (-> obj# (nth 1)))
;                (throw (->ex nil "Symbol does not evaluate to anything:" (-> obj# (nth 1)))))
;            obj#))
;      ~quoted-form)))

; #?(:clj
; (defmacro quote+
;   "Normal quoting with unquoting that works as in |syntax-quote|."
;   {:in '[(let [a 1]
;            (for [b 2] (inc ~a)))]
;    :out '(for [a 1] (inc 1))}
;   [form]
;  `(let [sym-map# (ns/context)]
;     (unquote-replacement sym-map# '~form))))



; #?(:clj
; (defmacro inline-replace
;   "TODO IMPLEMENT
;    Can use it like so:
;    (quantum.core.macros/inline-replace (~f ret# elem# @i#)).
;    Must be given a function definition. Will replace the arguments
;    accordingly.
;    Currently just yields identity."
;   [obj] obj))

; #?(:clj
; (defmacro fn+*
;   ([sym doc- meta- arglist body [unk & rest-unk]]
;     (if unk
;         (cond
;           (string? unk)
;             `(fn+* ~sym ~unk  ~meta- ~arglist ~body                ~rest-unk)
;           (map?    unk)     
;             `(fn+* ~sym ~doc- ~unk   ~arglist ~body                ~rest-unk)
;           (vector? unk)
;             `(fn+* ~sym ~doc- ~meta- ~unk     ~rest-unk            nil      )
;           (list?   unk)
;             `(fn+* ~sym ~doc- ~meta- nil      ~(cons unk rest-unk) nil      )
;           :else
;             `(throw (->ex :illegal-argument "Invalid arguments to |fn+|. " ~unk)))
;         (let [_        (log/ppr :macro-expand "ORIG BODY:" body)
;               ret-type (->> sym meta :tag)
;               suspendable?   (->> sym meta :suspendable)
;               interruptible? (->> sym meta :interruptible)
;               ret-type-quoted (list 'quote ret-type)
;               ;pre-args (->> (list meta-) (remove nil?))
;               meta-f   (assoc (or meta- {})
;                                :doc doc-)
;               meta-f   (if ret-type
;                            (assoc meta-f :tag ret-type-quoted)
;                            meta-f)
;               sym-f    (-> sym
;                            (with-meta meta-f))
;               externs  (atom [])
;               body-f   (if arglist (list (cons arglist body)) body)
;               body-f   (->> body-f
;                             (clojure.walk/postwalk
;                               (whenf*n quantum.core.cljs.deps.macros/extern?
;                                 (fn [[extern-sym obj]]
;                                   (let [sym (gensym "externed")]
;                                     (log/pr :macro-expand "EXTERNED" sym "IN FN+")
;                                     (swap! externs conj (list 'def sym obj))
;                                     sym)))))
;               _        (log/ppr :macro-expand "OPTIMIZED BODY:" body-f)
;               args-f
;                 (for [[arglist-n & body-n] body-f]
;                   (list arglist-n
;                     (list 'let
;                       [`pre#  (list 'log/pr :trace (str "IN "             sym-f))
;                        'ret_genned123  (if interruptible?
;                                            `(if (quantum.core.thread.async/interrupted?)
;                                                 (throw (InterruptedException.))
;                                                 (do ~@body-n))
;                                            `(do ~@body-n))
;                        `post# (list 'log/pr :trace (str "RETURNING FROM " sym-f))]
;                       'ret_genned123)))
;               _ (log/ppr :macro-expand "FINAL ARGS TO |defn|:" args-f)]
;            `(do ~@(deref externs)
;                 (let [;~sym-f (with-meta '~sym-f
;                       ;         (assoc (or ~meta- {}) :doc ~doc-))
;                       meta-f# ~meta-f
;                       f# (with-meta
;                            (fn ~sym-f ~@args-f)
;                            meta-f#)]
;                  [(if (and ~suspendable? (System/getProperty "quantum.core.async:allow-suspendable?"))
;                       (pulsar/suspendable! f#)
;                       f#)
;                   meta-f#])) ; May greatly increase the compilation time depending on how long the fn is.
;                    ; avoids eval-list stuff
;            )))))
; #?(:clj
; (defmacro fn+ [sym & body]
;   `(first (quantum.core.cljs.deps.macros/fn+* ~sym nil nil nil nil ~body))))
; #?(:clj
; (defmacro defn+ [sym & body]
;   `(let [[f# meta#] (quantum.core.cljs.deps.macros/fn+* ~sym nil nil nil nil ~body)
;          var# (doto (def ~sym f#)
;                 (alter-meta! map/merge meta#))]
;      var#)))
; #?(:clj
; (defn hint-body-with-arglist
;   ([body arglist lang] (hint-body-with-arglist body arglist lang nil))
;   ([body arglist lang body-type]
;   (let [arglist-set (into #{} arglist)
;         body-hinted 
;           (postwalk 
;             (condf*n
;               symbol?
;                 (fn [sym]
;                   (if-let [arg (get arglist-set sym)]
;                     (if (tcore/primitive? (type-hint arg)) ; Because "Can't type hint a primitive local"
;                         sym
;                         arg)
;                     sym)) ; replace it
;               anap/new-scope?
;                 (fn [scope]
;                   (if-let [sym (->> arglist-set (filter (partial anap/shadows-var? (second scope))) first)]
;                     (throw (->ex :unsupported "Arglist in |let| shadows hinted arg." sym))
;                     scope))
;               :else identity)
;             body)
;         body-unboxed
;           (if (= body-type :protocol)
;               body-hinted ; TODO? add (let [x (long x)] ...) unboxing
;               body-hinted)]
;     body-unboxed))))
; (defn protocol-extension-arities [arities class-sym-n lang]
;   (->> (list arities)
;        (map (fn [[arglist-n & body-n]]
;               (log/ppr :macro-expand "[arglist-n & body-n]" [arglist-n body-n])
;               (let [; apparently arglist-hinting isn't enough... 
;                     first-variadic-n? (anap/first-variadic? arglist-n)
;                     arg-hinted
;                       (-> arglist-n first
;                           (hint-meta
;                             (str class-sym-n)))
;                     _ (log/ppr :macro-expand "arg-hinted-meta" (meta arg-hinted))
;                     arglist-hinted
;                       (whenf arglist-n (fn-not anap/first-variadic?)
;                         (f*n assoc 0 arg-hinted))
;                     body-n
;                       (if first-variadic-n?
;                           body-n
;                           #?(:clj  (hint-body-with-arglist body-n [arg-hinted] lang)
;                              :cljs body-n))]
;                      (log/ppr :macro-expand "arglist-hinted" arglist-hinted)
;                 (cons arglist-hinted body-n))))
;        doall))
; #?(:clj 
; (defmacro extend-protocol-for-all
;   {:usage
;     '(extend-protocol-for-all
;        AbcdeProtocol
;        [java.util.List clojure.lang.PersistentList]
;        (abcde ([a] (println a))))}
;   [prot & body]
;   (loop [code-n '(do) body-n body loop-ct 0]
;     (log/ppr :macro-expand "BODY-N" body-n)
;     (if (empty? body-n)
;         code-n
;         (let [classes   (first body-n)
;               fns       (->> body-n rest (take-while (fn-not core/vector?)))
;               rest-body (->> body-n rest (drop (count fns)))
;               extensions-n
;                 (for [class-n classes]
;                   (let [fns-hinted
;                          (->> fns
;                               (map (fn [[f-sym arities]]
;                                      (log/ppr :macro-expand "f-sym|arities" f-sym arities)
;                                      (let [arities-hinted (quantum.core.cljs.deps.macros/protocol-extension-arities arities class-n :clj)]
;                                        (log/ppr :macro-expand "arities-hinted"
;                                          (cons f-sym arities-hinted))
;                                        (cons f-sym arities-hinted))))
;                               doall) 
;                         extension-n
;                           (apply list 'extend-protocol prot class-n fns-hinted)
;                         _# (log/ppr :macro-expand "EXTENDING PROTOCOL:" extension-n)]
;                     extension-n))]
;           (recur (concat code-n extensions-n) rest-body (inc loop-ct)))))))



; #?(:clj (defmacro maptemplate
;   [template-fn coll]
;   `(do ~@(map `~#((eval template-fn) %) coll))))
; (defn let-alias* [bindings body]
;   (cons 'do
;     (postwalk
;       (whenf*n (fn-and symbol? (partial contains? bindings))
;         (partial get bindings))
;       body)))
; #?(:clj
; (defmacro let-alias
;   {:todo ["Deal with closures"]}
;   [bindings & body]
;   (quantum.core.cljs.deps.macros/let-alias* (apply hash-map bindings) body)))
; #?(:clj
; (defmacro compile-if
;   "Evaluate `exp` and if it returns logical true and doesn't error, expand to
;   `then`.  Else expand to `else`.

;   (compile-if (Class/forName \"java.util.concurrent.ForkJoinTask\")
;     (do-cool-stuff-with-fork-join)
;     (fall-back-to-executor-services))"
;   {:attribution "clojure.core.reducers"}
;   [exp then else]
;   (if (try (eval exp)
;            (catch Throwable _ false))
;      `(do ~then)
;      `(do ~else))))
; #?(:clj
; (defmacro variadic-proxy
;   "Creates left-associative variadic forms for any operator."
;   {:attribution "ztellman/primitive-math"}
;   ([name fn]
;      `(variadic-proxy ~name ~fn ~(str "A primitive macro version of `" name "`")))
;   ([name fn doc]
;      `(variadic-proxy ~name ~fn ~doc identity))
;   ([name fn doc single-arg-form]
;      (let [x-sym (gensym "x")]
;        `(defmacro ~name
;           ~doc
;           ([~x-sym]
;              ~((eval single-arg-form) x-sym))
;           ([x# y#]
;              (list '~fn x# y#))
;           ([x# y# ~'& rest#]
;              (list* '~name (list '~name x# y#) rest#)))))))
; #?(:clj
; (defmacro variadic-predicate-proxy
;   "Turns variadic predicates into multiple pair-wise comparisons."
;   {:attribution "ztellman/primitive-math"}
;   ([name fn]
;      `(variadic-predicate-proxy ~name ~fn ~(str "A primitive macro version of |" name "|")))
;   ([name fn doc]
;      `(variadic-predicate-proxy ~name ~fn ~doc (constantly true)))
;   ([name fn doc single-arg-form]
;      (let [x-sym (gensym "x")]
;        `(defmacro ~name
;           ~doc
;           ([~x-sym]
;              ~((eval single-arg-form) x-sym))
;           ([x# y#]
;              (list '~fn x# y#))
;           ([x# y# ~'& rest#]
;              (list 'quantum.core.Numeric/and (list '~name x# y#) (list* '~name y# rest#))))))))

; #?(:clj
; (defn param-arg-match
;   "Checks if the second argument can be used as the first argument.
;    Perhaps an .isAssignableFrom call might be better"
;   {:source "zcaudate/hara.reflect.util"}
;   [^Class param-type ^Class arg-type]
;   (cond (nil? arg-type)
;         (-> param-type .isPrimitive not)

;         (or (= param-type arg-type)
;             (-> param-type (.isAssignableFrom arg-type)))
;         true

;         :else
;         (condp = param-type
;           Integer/TYPE (or (= arg-type Integer)
;                            (= arg-type Long)
;                            (= arg-type Long/TYPE)
;                            (= arg-type Short/TYPE)
;                            (= arg-type Byte/TYPE))
;           Float/TYPE   (or (= arg-type Float)
;                            (= arg-type Double/TYPE))
;           Double/TYPE  (or (= arg-type Double)
;                            (= arg-type Float/TYPE))
;           Long/TYPE    (or (= arg-type Long)
;                            (= arg-type Integer/TYPE)
;                            (= arg-type Short/TYPE)
;                            (= arg-type Byte/TYPE))
;           Character/TYPE (= arg-type Character)
;           Short/TYPE     (= arg-type Short)
;           Byte/TYPE      (= arg-type Byte)
;           Boolean/TYPE   (= arg-type Boolean)
;           false))))


; ; If you use (sorted-set+) in macro code you get "can't resolve type hint: IPersistentMap"
; ; (class/all-implementing-leaf-classes 'clojure.lang.ILookup)

; (def special-defnt-keywords
;   '#{:first :else :elem})

; (defn special-defnt-keyword? [x]
;   (contains? special-defnt-keywords x))

; (defn classes-for-type-predicate
;   ([pred lang] (classes-for-type-predicate pred lang nil))
;   ([pred lang type-arglist]
;   (throw-unless ((fn-or symbol? keyword?) pred) "Type predicate must be a symbol or keyword.")
;   (cond
;     (and (symbol? pred) (anap/possible-type-predicate? pred))
;       (->> tcore/types-unevaled 
;            (<- get lang)
;            (<- get pred)
;            (assertf->> nempty? "No classes match the predicate provided.")
;            (into []))
;     :else [pred])))

; #?(:clj (defalias hint-body-with-arglist deps/hint-body-with-arglist))

; (def default-hint (f*n hint-meta 'Object))

; #?(:clj
; (defn default-hint-if-needed
;   {:todo ["Eliminate |eval| via |resolve|"]}
;   [x]
;   (condf x
;     (fn-or anap/hinted-literal?
;            (fn-and seq?
;              (fn-> first symbol?)
;              (fn-> first resolve type-hint)))
;                     identity
;     symbol?         (whenf*n (fn-> meta :tag nil?) default-hint)
;     seq?            default-hint
;     keyword?        default-hint
;     set?            default-hint
;     map?            default-hint
;     :else           (constantly (->ex nil "Don't know how to make hint from" x)))))



; (def qualified-class-name-map
;   (->> tcore/primitive-types
;        (repeat 2)
;        (apply zipmap)
;        atom))

; (defn get-qualified-class-name [class-sym]
;   #?(:clj  (whenf class-sym (fn-not special-defnt-keyword?)
;              (whencf*n symbol?
;                (if-let [qualified-class-name (get @qualified-class-name-map class-sym)]
;                  qualified-class-name
;                  (let [new-qualified-class-name (symbol (.getName ^Class (eval class-sym)))]
;                    (swap! qualified-class-name-map assoc class-sym new-qualified-class-name)
;                    new-qualified-class-name))))
;      :cljs class-sym))

; (defn expand-classes-for-type-hint
;   ([x lang] (expand-classes-for-type-hint x lang nil))
;   ([x lang arglist]
;     (condf x
;       (fn-or symbol? keyword?)
;         (if*n (fn-or special-defnt-keyword? anap/possible-type-predicate?)
;               (fn-> hash-set (expand-classes-for-type-hint lang arglist))
;               hash-set)
;       set?    (fn->> (map (f*n classes-for-type-predicate lang arglist))
;                      (apply concat)
;                      (map get-qualified-class-name)
;                      (into #{}))
;       string? (fn-> symbol hash-set)
;       ;nil?    (constantly #{'Object})
;      (constantly (throw (->ex nil "Not a type hint." x))))))



; (defn extract-type-hints-from-arglist [arglist]
;   (zip-reduce
;     (fn [type-hints z]
;       (let [type-hint-n
;              (cond
;                (-> z zip/node symbol?)
;                  (when-not ((fn-and nnil? (fn-or (fn-> zip/node set?)
;                                                  (fn-> zip/node keyword?)))
;                             (-> z zip/left))
;                    (whenc (-> z zip/node meta :tag) nil?
;                      'Object)) ; Used to be :any... creates too many fns though
;                (or (-> z zip/node set?)
;                    (-> z zip/node keyword?))
;                  (zip/node z))]
;         (if type-hint-n
;             (conj type-hints type-hint-n)
;             type-hints)))
;     []
;     (-> arglist default-zipper)))


; (defn hint-arglist-with [arglist hints]
;   (loop [n 0 
;          arglist-n arglist
;          arglist-f []]
;     (if (empty? arglist-n)
;         arglist-f
;         (let [hint-n (get hints n)  ;#_(whenc (get hints n) (eq? :first) (first hints))
;               arg-hinted (hint-meta (first arglist-n) hint-n)]
;           (recur (inc n)
;                  (rest arglist-n)
;                  (conj arglist-f arg-hinted))))))

; (def vec-classes-for-count
;   '{0 clojure.lang.Tuple$T0
;     1 clojure.lang.Tuple$T1
;     2 clojure.lang.Tuple$T2
;     3 clojure.lang.Tuple$T3
;     4 clojure.lang.Tuple$T4
;     5 clojure.lang.Tuple$T5
;     6 clojure.lang.Tuple$T6})

; (defn try-hint-args
;   {:todo ["Symbol resolution and hinting, etc."]}
;   ([args lang] (try-hint-args args lang nil))
;   ([args lang env]
;     (for [arg args]
;       (cond
;         (seq? arg)
;           (if-let [hint (get-in [lang (first arg)] tcore/type-casts-map)]
;             (hint-meta arg hint)
;             arg)
;         (vector? arg)
;           ; Otherwise the tag meta is assumed to be 
;           ; clojure.lang.IPersistentVector, etc.
;           (hint-meta (list 'identity arg)
;             (or (get vec-classes-for-count (count arg))
;                 'clojure.lang.PersistentVector))
;         :else arg))))

; (defn gen-arglist
;   {:in  '[abcde hru1 fhacbd]
;    :out '[a0 a1 a2]}
;   [v]
;   (->> v (map-indexed (fn [i elem] (symbol (str "a" i)))) (into [])))

; (defn positioned-types-for-arglist
;   {:todo "The shape of this (reducei) is probably useful and can be reused"}
;   [arglist types]
;   (loop [i 0 arglist-n arglist types-n types]
;     (let [type-n (first arglist-n)]
;       (if (empty? arglist-n) 
;           types-n
;           (recur (inc i) (rest arglist-n)
;                  (update types-n i
;                    (fn [type-map]
;                      (let [new-map (zipmap (ensure-set type-n) (repeat #{(count arglist)}))]
;                      (if (nil? type-map)
;                          new-map
;                          (merge-with set/union type-map new-map))))))))))

; (defn gen-protocol-from-interface
;   {:in '[[[Func [String IPersistentVector] long]]
;          [[Func [String ITransientVector ] long]]]}
;   [gen-interface-code-body-expanded protocol-name method-name]
;   (let [protocol-def-body
;           (->> gen-interface-code-body-expanded
;                (map (fn-> first second))
;                (group-by count)
;                (map (fn-> val first gen-arglist))
;                (cons method-name))
;         protocol-def 
;           (list 'defprotocol protocol-name protocol-def-body)]
;     protocol-def))

; #?(:clj
; (defn ensure-protocol-appropriate-type-hint [i hint]
;   (when-not (and (> i 0) (= hint 'Object)) ; The extra object hints mess things up
;     (if-let [protocol-appropriate-type-hint (get protocol-type-hint-map hint)]
;       protocol-appropriate-type-hint
;       hint))))

; #?(:clj
; (defn ensure-protocol-appropriate-arglist [arglist-0]
;   (->> arglist-0
;        (map-indexed
;          (fn [i arg]
;            (hint-meta arg
;              (ensure-protocol-appropriate-type-hint i (type-hint arg)))))
;        (into []))))

; #?(:clj 
; (defn gen-extend-protocol-from-interface
;   ; Original Interface:         ([#{number?} x #{number?} y #{char? Object} z] ~@body)
;   ; Expanded Interface Arity 1: ([^long      x ^int       y ^char           z] ~@body)
;   ; Protocol Arity 1:           ([^long      x ^Integer   y ^Character      z]
;   ;                               (let [y (int y) z (char z)] ; TODO ->int y, ->charz
;   ;                                 ~@body)
  
;   ; (def abcde 0)
;   ; ((fn [^"[B" x ^long n] (clojure.lang.RT/aget x n)) my-byte-array abcde) => 0, no reflection
;   [reify-body lang protocol-name method-name first-types]
;   (log/ppr-hints :macro-expand-protocol "REIFY BODY" reify-body)
;   (log/pr :macro-expand "protocol-name method-name" protocol-name method-name)
;   (let [body-sorted
;           (->> reify-body rest rest
;                (map (fn [[sym & body]]
;                       (-> body (update-first (f*n hint-meta (type-hint sym))))))) ; remove reify method names
;         body-filtered body-sorted
;         _ (log/ppr-hints :macro-expand-protocol "BODY SORTED" body-sorted)
;         body-mapped
;           (->> body-filtered
;                (map (fn [[arglist & body :as method]]
;                       (let [first-type         (-> arglist second type-hint)
;                             first-type-unboxed (-> first-type tcore/->unboxed)
;                             unboxed-version-exists? (get-in first-types [first-type-unboxed (-> arglist count dec)])]
;                         (if ; Unboxed version of arity already exists? Skip generation of that type/arity
;                             (and (tcore/boxed? first-type) unboxed-version-exists?) ; |dec| because 'this' is the first arg
;                             [] ; Empty so concat gets nothing
;                             (let [boxed-first-type (-> first-type tcore/->boxed) 
;                                              ; (whenc (-> arglist second type-hint tcore/->boxed)
;                                              ;        (fn-> name (= "[Ljava.lang.Object;"))
;                                              ;   '(Class/forName "[Ljava.lang.Object;"))
;                                   return-type (->> arglist type-hint
;                                                    (ensure-protocol-appropriate-type-hint 0))
;                                   arglist-f (-> arglist rest ensure-protocol-appropriate-arglist)
;                                   arglist-f (if return-type
;                                                 arglist-f
;                                                 (hint-meta arglist-f return-type) )
;                                   body-f (hint-body-with-arglist body arglist-f lang :protocol)
;                                   extension-f [boxed-first-type (cons method-name (cons arglist-f body-f))]]
;                               (if (or (= boxed-first-type 'Object)
;                                       (= boxed-first-type 'java.lang.Object))
;                                   (into ['nil (-> extension-f rest first)] extension-f)
;                                   extension-f))))))
;                (apply concat)
;                (partition 2))
;         body-grouped
;           (->> body-mapped
;                (group-by first)
;                (map (fn [[k v]] (->> v (map (fn->> second rest)) (cons method-name) (list k))))
;                (map (partial into [])))
;         _ (log/ppr-hints :macro-expand-protocol "BODY GROUPED" body-grouped)
;         extend-protocol-def
;          (apply concat (list 'extend-protocol protocol-name) body-grouped)]
;     extend-protocol-def)))
  
; (defn protocol-verify-arglists
;   {:in '[[[int  string?   ] int   ]
;          [[long #{vector?}] float ]]}
;   [arglists lang]
;   (doseq [[arglist ret-type] arglists]
;     (doseq [arg (rest arglist)] ; No need to check the first arg; it doesn't matter
;       (let [arg-set (ensure-set arg)
;             arg1    (first arg-set)]
;         (throw-unless (and (-> arg-set count (<= 1))
;                            (if (anap/possible-type-predicate? arg1)
;                                (or (= arg1 'pinteger?) (= arg1 :any)
;                                    (not (-> tcore/types-unevaled (get lang) (contains? arg1))))
;                                true))
;           (->ex nil "Only |pinteger?|, singleton primitives, and non-predicate classes supported in protocols"
;                     {:arg1 arg1 :arg-set arg-set :pinteger? (= arg1 'pinteger?)}))))))

; #?(:clj
; (defn any-hint-unresolved?
;   ([args lang] (any-hint-unresolved? args lang nil))
;   ([args lang env]
;     (any? (fn-not (fn-or anap/hinted-literal?
;                          (f*n anap/type-cast? lang)
;                          anap/constructor?
;                          type-hint
;                          (fn [sym]
;                            (when env
;                              (log/ppr :macro-expand (str "TRYING TO RESOLVE HINT FOR SYM FROM &env " sym) env)
;                              (log/pr  :macro-expand "SYM" sym "IN ENV?" (contains? env sym))
;                              (log/pr  :macro-expand "ENV TYPE HINT" (-> env (find sym) first type-hint)))
;                            (-> env (find sym) first type-hint))))
;           args))))

; (defn protocol-verify-unique-first-hint
;   "Not allowed same arity and same first hint

;    Protocols can't dispatch on non-first args.
;    ([^long x ^int    y ^char z] (+ x y) (str z))
;    ([^long x ^String y ^char z] (str x z y))"
;   {:in '[[Abcde [#{int } #{String               }] int  ]
;          [Abcde [#{long} #{APersistentVector ...}] float]]
;    :todo ["Allow for implicitly convertible types (e.g. long and Long) with the same codebase to
;            pass through this verification"]}
;   [arglists]
;   (log/ppr-hints :macro-expand "ARGLISTS" arglists)
;   (let [cached-arglists (atom {})]
;     (doseq [[method-sym arglist ret-type] arglists]
;       (doseq [first-hint (first arglist)]
;         (when (nnil? first-hint)
;           (swap! cached-arglists update (count arglist)
;             (fn [first-hints-set]
;               (let [hints-set-ensured (ensure-set first-hints-set)]
;                 (if (contains? hints-set-ensured first-hint)
;                     (throw (->ex nil "Not allowed same arity and same first hint:" arglist))
;                     (conj hints-set-ensured first-hint))))))))))

; #?(:clj (defalias quote+ deps/quote+))
; #?(:clj (defalias extern- deps/extern-))
; #?(:clj (defalias identity* deps/identity*))
; #?(:clj (defalias inline-replace deps/inline-replace))



; ; ===== MACROEXPANSION =====

; #?(:clj (def macroexpand-1! (fn-> macroexpand-1 pr/pprint-hints)))

; #?(:clj (defalias macroexpand     riddley.walk/macroexpand))
; #?(:clj (defalias macroexpand-all riddley.walk/macroexpand-all))
; #?(:clj (def macroexpand!     (fn-> macroexpand     pr/pprint-hints)))
; #?(:clj (def macroexpand-all! (fn-> macroexpand-all pr/pprint-hints)))

; #?(:clj (def assert-args #'clojure.core/assert-args))

; #?(:clj
; (defn emit-comprehension
;   {:attribution "clojure.core, via Christophe Grand - https://gist.github.com/cgrand/5643767"
;    :todo ["Transientize the |reduce|s"]}
;   [&form {:keys [emit-other emit-inner]} seq-exprs body-expr]
;   (assert-args
;      (vector? seq-exprs) "a vector for its binding"
;      (even? (count seq-exprs)) "an even number of forms in binding vector")
;   (let [groups (reduce (fn [groups [k v]]
;                          (if (keyword? k)
;                               (conj (pop groups) (conj (peek groups) [k v]))
;                               (conj groups [k v])))
;                  [] (partition 2 seq-exprs)) ; /partition/... hmm...
;         inner-group (peek groups)
;         other-groups (pop groups)]
;     (reduce emit-other (emit-inner body-expr inner-group) other-groups))))

; (defn do-mod [mod-pairs cont & {:keys [skip stop]}]
;   (let [err (fn [& msg] (throw #?(:clj  (IllegalArgumentException. ^String (apply str msg))
;                                   :cljs (js/Error.                         (apply str msg)))))]
;     (reduce 
;       (fn [cont [k v]]
;         (cond 
;           (= k :let)   `(let ~v ~cont)
;           (= k :while) `(if  ~v ~cont ~stop)
;           (= k :when)  `(if  ~v ~cont ~skip)
;           :else (err "Invalid 'for' keyword " k)))
;       cont (reverse mod-pairs)))) ; this is terrible

; (defn log!   [] (log/enable! :macro-expand))
; (defn unlog! [] (log/disable! :macro-expand))


; #?(:clj (defalias defn+                    deps/defn+))
; #?(:clj (defalias fn+                      deps/fn+  ))

; #?(:clj
; (defmacro defmethod+
;   "Like |defmethod| but creates a named function called |this|
;    for purposes of cross-arity recursion."
;   {:attribution "Alex Gunnarson"}
;   [sym type & arities]
;   (let [sym* (with-meta sym {:tag "clojure.lang.MultiFn"})]
;     `(.addMethod ^MultiFn ~sym* ~type
;        (fn+ this ~@arities)))))

; #?(:clj
; (defmacro defmethods+
;   "Like |defmethod+| but uses the same fn for multiple dispatches."
;   [sym dispatches & args]
;   `(do ~@(for [dispatch dispatches]
;          `(defmethod+ ~sym ~dispatch ~@args)))))

; #?(:clj (defalias extend-protocol-for-all  deps/extend-protocol-for-all))
; #?(:clj (defalias defnt                    quantum.core.macros.defnt/defnt))
; #?(:clj (defalias defnt'                   quantum.core.macros.defnt/defnt'))
; #?(:clj (defalias let-alias                deps/let-alias ))
; #?(:clj (defalias maptemplate              deps/maptemplate))
; #?(:clj (defalias compile-if               deps/compile-if))
; #?(:clj (defalias variadic-proxy           deps/variadic-proxy))
; #?(:clj (defalias variadic-predicate-proxy deps/variadic-predicate-proxy))

; ; VerifyError (class: quantum/core/collections/core$eval97981$reify__97982, method: Getr signature: ([Ljava/lang/Object;JJ)[Ljava/lang/Object;) Incompatible object argument for function call  quantum.core.collections.core/eval97981 (form-init2072781766827208197.clj:54252)
; ; (^"[Ljava.lang.Object;" Getr
; ;   [this ^"[Ljava.lang.Object;" coll ^long a  ^long b]
; ;   (let
; ;    [^"[Ljava.lang.Object;" arr-f (array-of-type coll (inc (- b a)))]
; ;    (println "arr-f" arr-f "a" (class a) a "b" (class b) b)
; ;    (System/arraycopy coll a arr-f 0 (inc (- b a)))
; ;    arr-f coll)))

; ; (Executes)
; ; (reify
; ;  quantum.core.collections.core.GetrInterface (^"[Ljava.lang.Object;" Getr
; ;   [this ^"[Ljava.lang.Object;" coll ^long a  ^long b]
; ;   (let
; ;    [^"[Ljava.lang.Object;" arr-f (array-of-type ^"[Ljava.lang.Object;" coll ^long (inc (- b a)))]
; ;    (println "arr-f" arr-f "a" (class a) a "b" (class b) b)
; ;    (System/arraycopy coll a arr-f 0 (inc (- b a)))
; ;    arr-f coll)))

; ; VerifyError (class: quantum/core/collections/core$eval107420, method: invoke signature: ()Ljava/lang/Object;) Incompatible object argument for function call  java.lang.Class.getDeclaredConstructors0 (Class.java:-2)
; ; (getr (doto (object-array 3) (aset 0 1) (aset 1 2) (aset 2 3)) 0 1)

; ; (Executes)
; ; (getr ^"[Ljava.Lang.Object;" (doto (object-array 3) (aset 0 1) (aset 1 2) (aset 2 3)) 0 1)
; ; (getr (doto (object-array 3) (aset 0 1) (aset 1 2) (aset 2 3)) 0 1)



; ; You might check to see if you have a situation similar to the following:

; ; (ns a.b)

; ; (defprotocol P1
; ;   (pm [a]))
; ; then either

; ; (ns a.c
; ;   (:import (a.b P1))

; ; (defrecord R []
; ;   P1
; ;   (pm [x] x))
; ; or

; ; (ns a.c)

; ; (defrecord R []
; ;   a.b.P1
; ;   (pm [x] x))
; ; in both examples defrecord is actually getting the class behind the protocol instead of the protocol, the correct thing to do is

; ; (ns a.c
; ;   (:require [a.b :refer [P1]]))

; ; (defrecord R []
; ;   P1
; ;   (pm [x] x))
; ; This is an extremely common mistake people make when using protocols, unfortunately the flexibility of using interfaces directly in defrecord forms, and protocols being backed by interfaces means it is very easy to unwittingly make such a mistake. Both of the mistake examples could result in missing classes/namespace problems.


; ; AOT COMPILATION

; ; AOT-compilation is transitive?
; ; Clojure does not support separate compilation

1