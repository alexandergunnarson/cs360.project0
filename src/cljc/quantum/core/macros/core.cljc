(ns ^{:doc "Macro-building helper functions."}
  quantum.core.macros.core)

; ===== GENERAL =====

(defn- cljs-env?
  "Take the &env from a macro, and tell whether it is expanding into CLJS."
  [env]
  (boolean (:ns env)))

#?(:clj
(defmacro if-cljs*
  "Return @then if the macro is generating CLJS code and @else for CLJ code.

   Make sure to use |if-cljs| within backticked/quoted macro code."
  {:from "https://groups.google.com/d/msg/clojurescript/iBY5HaQda4A/w1lAQi9_AwsJ"}
  ([then else]
    (if (cljs-env? &env) then else))))

(defn if-cljs
  ([env then else]
    (if (cljs-env? env) then else)))

#?(:clj
(defmacro tag
  "Doesn't really work unless print-dup is defined for all local vars."
  [obj tag-]
  `(ns/c-eval (ns/context) (with-meta '~obj {:tag '~tag-}))))

#?(:clj
(defmacro resolve-local
  "Expands to sym if it names a local in the current environment or
  nil otherwise"
  [sym]
  (if (contains? &env sym) sym)))

#?(:clj
(defmacro compile-if [test then else]
  (if (eval test)
      then
      else)))

; ===== SYMBOLS =====

(defn hint-meta [sym hint] (with-meta sym {:tag hint}))

