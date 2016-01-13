(ns quantum.core.type.predicates
  (:refer-clojure :exclude [#?(:clj boolean?) #?(:cljs seqable?)])
  (:require-quantum [ns fn logic])
  (:require [quantum.core.core :as c]))

(defalias atom?    c/atom?   )
(defalias seqable? c/seqable?)
(defalias boolean? c/boolean?)

(defn derefable? [obj]
  (satisfies? #?(:clj clojure.lang.IDeref :cljs core/IDeref) obj))

(def map-entry?  #?(:clj  (partial instance? clojure.lang.MapEntry)
                    :cljs (fn-and vector? (fn-> count (= 2)))))

(defn listy? [obj] (seq? obj)
  #_(->> obj class
         (contains? (get types 'listy?))))
