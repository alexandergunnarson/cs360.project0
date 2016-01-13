(ns quantum.core.collections
  (:require-quantum [ns fn set]))

(defn drop-tail
  {:from "tonsky/datascript-todo.util"
   :todo ["It doesn't seem like this actually does anything"]}
  [xs pred]
  (loop [acc []
         xs  xs]
    (let [x (first xs)]
      (cond
        (nil? x) acc
        (pred x) (conj acc x)
        :else  (recur (conj acc x) (next xs))))))

(defn trim-head
  {:from "tonsky/datascript-todo.util"}
  [xs n]
  (->> xs
       (drop (- (count xs) n))
       vec))

(defn take-until
  {:from "mpdairy/posh.q-pattern-gen"}
  [stop-at? ls]
  (if (or
       (empty? ls)
       (stop-at? (first ls)))
    []
    (cons (first ls) (take-until stop-at? (rest ls)))))

(defn rest-at
  {:from "mpdairy/posh.q-pattern-gen"}
  [rest-at? ls]
  (if (or (empty? ls) (rest-at? (first ls)))
    ls
    (recur rest-at? (rest ls))))

(defn split-list-at
  {:from "mpdairy/posh.q-pattern-gen"}
  [split-at? ls]
  (if (empty? ls)
    {}
    (merge {(first ls) (take-until split-at? (take-until split-at? (rest ls)))}
           (split-list-at split-at? (rest-at split-at? (rest ls))))))

(defn deep-list?
  {:from "mpdairy/posh.core"}
  [x]
  (cond (list? x) true
        (coll? x) (if (empty? x) false
                      (or (deep-list? (first x))
                          (deep-list? (vec (rest x)))))))

(defn deep-find
  {:from "mpdairy/posh.core"}
  [f x]
  (if (coll? x)
      (if (empty? x)
        false
        (or (deep-find f (first x))
             (deep-find f (rest x))))
      (f x)))

(defn deep-map [f x]
  {:from "mpdairy/posh.core"}
  (cond
   (map? x) (let [r (map (partial deep-map f) x)]
              (zipmap (map first r) (map second r)))
   (coll? x) (vec (map (partial deep-map f) x))
   :else (f x)))

(defn wrap-delay [f]
  (if (delay? f) f (delay ((or f fn-nil)))))

(defn merge-with-set [m1 m2]
  (merge-with (fn [v1 v2] (if (set? v1)
                              (if (set? v2)
                                  (set/union v1 v2)
                                  (conj v1 v2))
                              (if (set? v2)
                                  (conj v2 v1)
                                  #{v1 v2}))) m1 m2))
