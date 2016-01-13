// Compiled by ClojureScript 1.7.170 {}

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns]
*/
goog.provide('quantum.core.data.vector');
goog.require('cljs.core');
goog.require('clojure.core.rrb_vector');
goog.require('quantum.core.ns');
goog.require('cljs.core');
quantum.core.data.vector.vec_PLUS_ = clojure.core.rrb_vector.vec;
quantum.core.data.vector.vector_PLUS_ = clojure.core.rrb_vector.vector;
/**
 * |empty| checks to get around StackOverflowErrors inherent in |catvec|
 * (At least in Clojure version)
 */
quantum.core.data.vector.catvec = (function quantum$core$data$vector$catvec(var_args){
var args37325 = [];
var len__18583__auto___37335 = arguments.length;
var i__18584__auto___37336 = (0);
while(true){
if((i__18584__auto___37336 < len__18583__auto___37335)){
args37325.push((arguments[i__18584__auto___37336]));

var G__37337 = (i__18584__auto___37336 + (1));
i__18584__auto___37336 = G__37337;
continue;
} else {
}
break;
}

var G__37334 = args37325.length;
switch (G__37334) {
case 1:
return quantum.core.data.vector.catvec.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quantum.core.data.vector.catvec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quantum.core.data.vector.catvec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return quantum.core.data.vector.catvec.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return quantum.core.data.vector.catvec.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return quantum.core.data.vector.catvec.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var argseq__18602__auto__ = (new cljs.core.IndexedSeq(args37325.slice((6)),(0)));
return quantum.core.data.vector.catvec.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__18602__auto__);

}
});

quantum.core.data.vector.catvec.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

quantum.core.data.vector.catvec.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if(cljs.core.empty_QMARK_.call(null,a)){
if(cljs.core.empty_QMARK_.call(null,b)){
return quantum.core.data.vector.vector_PLUS_.call(null);
} else {
return quantum.core.data.vector.vec_PLUS_.call(null,b);
}
} else {
if(cljs.core.empty_QMARK_.call(null,b)){
return quantum.core.data.vector.vec_PLUS_.call(null,a);
} else {
return clojure.core.rrb_vector.catvec.call(null,a,b);
}
}
});

quantum.core.data.vector.catvec.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
return quantum.core.data.vector.catvec.call(null,quantum.core.data.vector.catvec.call(null,a,b),c);
});

quantum.core.data.vector.catvec.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
return quantum.core.data.vector.catvec.call(null,quantum.core.data.vector.catvec.call(null,a,b,c),d);
});

quantum.core.data.vector.catvec.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
return quantum.core.data.vector.catvec.call(null,quantum.core.data.vector.catvec.call(null,a,b,c,d),e);
});

quantum.core.data.vector.catvec.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
return quantum.core.data.vector.catvec.call(null,quantum.core.data.vector.catvec.call(null,a,b,c,d,e),f);
});

quantum.core.data.vector.catvec.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,f,more){
return cljs.core.reduce.call(null,quantum.core.data.vector.catvec,quantum.core.data.vector.catvec.call(null,a,b,c,d,e,f),more);
});

quantum.core.data.vector.catvec.cljs$lang$applyTo = (function (seq37326){
var G__37327 = cljs.core.first.call(null,seq37326);
var seq37326__$1 = cljs.core.next.call(null,seq37326);
var G__37328 = cljs.core.first.call(null,seq37326__$1);
var seq37326__$2 = cljs.core.next.call(null,seq37326__$1);
var G__37329 = cljs.core.first.call(null,seq37326__$2);
var seq37326__$3 = cljs.core.next.call(null,seq37326__$2);
var G__37330 = cljs.core.first.call(null,seq37326__$3);
var seq37326__$4 = cljs.core.next.call(null,seq37326__$3);
var G__37331 = cljs.core.first.call(null,seq37326__$4);
var seq37326__$5 = cljs.core.next.call(null,seq37326__$4);
var G__37332 = cljs.core.first.call(null,seq37326__$5);
var seq37326__$6 = cljs.core.next.call(null,seq37326__$5);
return quantum.core.data.vector.catvec.cljs$core$IFn$_invoke$arity$variadic(G__37327,G__37328,G__37329,G__37330,G__37331,G__37332,seq37326__$6);
});

quantum.core.data.vector.catvec.cljs$lang$maxFixedArity = (6);
/**
 * Produces a new vector containing the appropriate subrange of the input vector in logarithmic time
 * (in contrast to clojure.core/subvec, which returns a reference to the input vector)
 * clojure.core/subvec is a constant-time operation that prevents the underlying vector
 * from becoming eligible for garbage collection
 */
quantum.core.data.vector.subvec_PLUS_ = (function quantum$core$data$vector$subvec_PLUS_(coll,a,b){
try{return clojure.core.rrb_vector.subvec.call(null,coll,a,b);
}catch (e37340){if((e37340 instanceof Error)){
var _ = e37340;
return cljs.core.subvec.call(null,coll,a,b);
} else {
throw e37340;

}
}});
quantum.core.data.vector.vector_PLUS__QMARK_ = (function quantum$core$data$vector$vector_PLUS__QMARK_(obj){
return (obj instanceof clojure.core.rrb_vector.rrbt.Vector);
});

//# sourceMappingURL=vector.js.map?rel=1452702558380
/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns]
*/
