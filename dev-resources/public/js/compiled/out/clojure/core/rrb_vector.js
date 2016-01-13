// Compiled by ClojureScript 1.7.170 {}
goog.provide('clojure.core.rrb_vector');
goog.require('cljs.core');
goog.require('clojure.core.rrb_vector.protocols');
goog.require('clojure.core.rrb_vector.rrbt');
goog.require('clojure.core.rrb_vector.interop');
/**
 * Concatenates the given vectors in logarithmic time.
 */
clojure.core.rrb_vector.catvec = (function clojure$core$rrb_vector$catvec(var_args){
var args36597 = [];
var len__18583__auto___36605 = arguments.length;
var i__18584__auto___36606 = (0);
while(true){
if((i__18584__auto___36606 < len__18583__auto___36605)){
args36597.push((arguments[i__18584__auto___36606]));

var G__36607 = (i__18584__auto___36606 + (1));
i__18584__auto___36606 = G__36607;
continue;
} else {
}
break;
}

var G__36604 = args36597.length;
switch (G__36604) {
case 0:
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__18602__auto__ = (new cljs.core.IndexedSeq(args36597.slice((4)),(0)));
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__18602__auto__);

}
});

clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});

clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$1 = (function (v1){
return v1;
});

clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$2 = (function (v1,v2){
return clojure.core.rrb_vector.protocols._splicev.call(null,v1,v2);
});

clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$3 = (function (v1,v2,v3){
return clojure.core.rrb_vector.protocols._splicev.call(null,clojure.core.rrb_vector.protocols._splicev.call(null,v1,v2),v3);
});

clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$4 = (function (v1,v2,v3,v4){
return clojure.core.rrb_vector.protocols._splicev.call(null,clojure.core.rrb_vector.protocols._splicev.call(null,v1,v2),clojure.core.rrb_vector.protocols._splicev.call(null,v3,v4));
});

clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$variadic = (function (v1,v2,v3,v4,vn){
return clojure.core.rrb_vector.protocols._splicev.call(null,clojure.core.rrb_vector.protocols._splicev.call(null,clojure.core.rrb_vector.protocols._splicev.call(null,v1,v2),clojure.core.rrb_vector.protocols._splicev.call(null,v3,v4)),cljs.core.apply.call(null,clojure.core.rrb_vector.catvec,vn));
});

clojure.core.rrb_vector.catvec.cljs$lang$applyTo = (function (seq36598){
var G__36599 = cljs.core.first.call(null,seq36598);
var seq36598__$1 = cljs.core.next.call(null,seq36598);
var G__36600 = cljs.core.first.call(null,seq36598__$1);
var seq36598__$2 = cljs.core.next.call(null,seq36598__$1);
var G__36601 = cljs.core.first.call(null,seq36598__$2);
var seq36598__$3 = cljs.core.next.call(null,seq36598__$2);
var G__36602 = cljs.core.first.call(null,seq36598__$3);
var seq36598__$4 = cljs.core.next.call(null,seq36598__$3);
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$variadic(G__36599,G__36600,G__36601,G__36602,seq36598__$4);
});

clojure.core.rrb_vector.catvec.cljs$lang$maxFixedArity = (4);
/**
 * Returns a new vector containing the elements of the given vector v
 *   lying between the start (inclusive) and end (exclusive) indices in
 *   logarithmic time. end defaults to end of vector. The resulting
 *   vector shares structure with the original, but does not hold on to
 *   any elements of the original vector lying outside the given index
 *   range.
 */
clojure.core.rrb_vector.subvec = (function clojure$core$rrb_vector$subvec(var_args){
var args36609 = [];
var len__18583__auto___36612 = arguments.length;
var i__18584__auto___36613 = (0);
while(true){
if((i__18584__auto___36613 < len__18583__auto___36612)){
args36609.push((arguments[i__18584__auto___36613]));

var G__36614 = (i__18584__auto___36613 + (1));
i__18584__auto___36613 = G__36614;
continue;
} else {
}
break;
}

var G__36611 = args36609.length;
switch (G__36611) {
case 2:
return clojure.core.rrb_vector.subvec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.rrb_vector.subvec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36609.length)].join('')));

}
});

clojure.core.rrb_vector.subvec.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
return clojure.core.rrb_vector.protocols._slicev.call(null,v,start,cljs.core.count.call(null,v));
});

clojure.core.rrb_vector.subvec.cljs$core$IFn$_invoke$arity$3 = (function (v,start,end){
return clojure.core.rrb_vector.protocols._slicev.call(null,v,start,end);
});

clojure.core.rrb_vector.subvec.cljs$lang$maxFixedArity = 3;
/**
 * Creates a new vector containing the args.
 */
clojure.core.rrb_vector.vector = (function clojure$core$rrb_vector$vector(var_args){
var args36616 = [];
var len__18583__auto___36629 = arguments.length;
var i__18584__auto___36630 = (0);
while(true){
if((i__18584__auto___36630 < len__18583__auto___36629)){
args36616.push((arguments[i__18584__auto___36630]));

var G__36631 = (i__18584__auto___36630 + (1));
i__18584__auto___36630 = G__36631;
continue;
} else {
}
break;
}

var G__36623 = args36616.length;
switch (G__36623) {
case 0:
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__18602__auto__ = (new cljs.core.IndexedSeq(args36616.slice((4)),(0)));
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__18602__auto__);

}
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$0 = (function (){
var arr__36624 = [];
return (new clojure.core.rrb_vector.rrbt.Vector(0,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__36624,null,(0)));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$1 = (function (x1){
var arr__36625 = [null];
(arr__36625[(0)] = x1);

return (new clojure.core.rrb_vector.rrbt.Vector(1,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__36625,null,null));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$2 = (function (x1,x2){
var arr__36626 = [null,null];
(arr__36626[(0)] = x1);

(arr__36626[(1)] = x2);

return (new clojure.core.rrb_vector.rrbt.Vector(2,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__36626,null,null));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$3 = (function (x1,x2,x3){
var arr__36627 = [null,null,null];
(arr__36627[(0)] = x1);

(arr__36627[(1)] = x2);

(arr__36627[(2)] = x3);

return (new clojure.core.rrb_vector.rrbt.Vector(3,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__36627,null,null));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$4 = (function (x1,x2,x3,x4){
var arr__36628 = [null,null,null,null];
(arr__36628[(0)] = x1);

(arr__36628[(1)] = x2);

(arr__36628[(2)] = x3);

(arr__36628[(3)] = x4);

return (new clojure.core.rrb_vector.rrbt.Vector(4,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__36628,null,null));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$variadic = (function (x1,x2,x3,x4,xn){
return cljs.core.into.call(null,clojure.core.rrb_vector.vector.call(null,x1,x2,x3,x4),xn);
});

clojure.core.rrb_vector.vector.cljs$lang$applyTo = (function (seq36617){
var G__36618 = cljs.core.first.call(null,seq36617);
var seq36617__$1 = cljs.core.next.call(null,seq36617);
var G__36619 = cljs.core.first.call(null,seq36617__$1);
var seq36617__$2 = cljs.core.next.call(null,seq36617__$1);
var G__36620 = cljs.core.first.call(null,seq36617__$2);
var seq36617__$3 = cljs.core.next.call(null,seq36617__$2);
var G__36621 = cljs.core.first.call(null,seq36617__$3);
var seq36617__$4 = cljs.core.next.call(null,seq36617__$3);
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$variadic(G__36618,G__36619,G__36620,G__36621,seq36617__$4);
});

clojure.core.rrb_vector.vector.cljs$lang$maxFixedArity = (4);
/**
 * Returns a vector containing the contents of coll.
 * 
 *   If coll is a vector, returns an RRB vector using the internal tree
 *   of coll.
 */
clojure.core.rrb_vector.vec = (function clojure$core$rrb_vector$vec(coll){
if(cljs.core.vector_QMARK_.call(null,coll)){
return clojure.core.rrb_vector.rrbt._as_rrbt.call(null,coll);
} else {
return cljs.core.apply.call(null,clojure.core.rrb_vector.vector,coll);
}
});

//# sourceMappingURL=rrb_vector.js.map?rel=1452702553458