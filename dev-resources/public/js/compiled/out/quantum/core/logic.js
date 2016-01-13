// Compiled by ClojureScript 1.7.170 {}

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn cmacros]
*/
goog.provide('quantum.core.logic');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('quantum.core.macros.core');
goog.require('quantum.core.function$');
goog.require('quantum.core.ns');
goog.require('clojure.core.rrb_vector');
quantum.core.logic.nnil_QMARK_ = cljs.core.comp.call(null,cljs.core.not,cljs.core.nil_QMARK_);
quantum.core.logic.nempty_QMARK_ = cljs.core.comp.call(null,cljs.core.not,cljs.core.empty_QMARK_);
quantum.core.logic.nseq_QMARK_ = cljs.core.comp.call(null,cljs.core.not,cljs.core.seq_QMARK_);
quantum.core.logic.iff = (function quantum$core$logic$iff(pred,const$,else$){
if(cljs.core.truth_(pred.call(null,const$))){
return const$;
} else {
return else$;
}
});
quantum.core.logic.iffn = (function quantum$core$logic$iffn(pred,const$,else_fn){
if(cljs.core.truth_(pred.call(null,const$))){
return const$;
} else {
return else_fn.call(null,const$);
}
});
quantum.core.logic.any_QMARK_ = cljs.core.some;
quantum.core.logic.apply_and = (function quantum$core$logic$apply_and(arg_list){
return cljs.core.every_QMARK_.call(null,cljs.core.identity,arg_list);
});
quantum.core.logic.apply_or = (function quantum$core$logic$apply_or(arg_list){
return quantum.core.logic.any_QMARK_.call(null,cljs.core.identity,arg_list);
});
quantum.core.logic.dor = (function quantum$core$logic$dor(var_args){
var args__18590__auto__ = [];
var len__18583__auto___37085 = arguments.length;
var i__18584__auto___37086 = (0);
while(true){
if((i__18584__auto___37086 < len__18583__auto___37085)){
args__18590__auto__.push((arguments[i__18584__auto___37086]));

var G__37087 = (i__18584__auto___37086 + (1));
i__18584__auto___37086 = G__37087;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.core.logic.dor.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.core.logic.dor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var and__17513__auto__ = quantum.core.logic.apply_or.call(null,args);
if(cljs.core.truth_(and__17513__auto__)){
return cljs.core.not.call(null,quantum.core.logic.apply_and.call(null,args));
} else {
return and__17513__auto__;
}
});

quantum.core.logic.dor.cljs$lang$maxFixedArity = (0);

quantum.core.logic.dor.cljs$lang$applyTo = (function (seq37084){
return quantum.core.logic.dor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37084));
});
quantum.core.logic.pred_or = (function quantum$core$logic$pred_or(pred,obj,args){
return quantum.core.logic.apply_or.call(null,cljs.core.map.call(null,pred.call(null,obj),args));
});
quantum.core.logic.pred_and = (function quantum$core$logic$pred_and(pred,obj,args){
return quantum.core.logic.apply_and.call(null,cljs.core.map.call(null,pred.call(null,obj),args));
});
quantum.core.logic.splice_or = (function quantum$core$logic$splice_or(var_args){
var args__18590__auto__ = [];
var len__18583__auto___37091 = arguments.length;
var i__18584__auto___37092 = (0);
while(true){
if((i__18584__auto___37092 < len__18583__auto___37091)){
args__18590__auto__.push((arguments[i__18584__auto___37092]));

var G__37093 = (i__18584__auto___37092 + (1));
i__18584__auto___37092 = G__37093;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((2) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((2)),(0))):null);
return quantum.core.logic.splice_or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18591__auto__);
});

quantum.core.logic.splice_or.cljs$core$IFn$_invoke$arity$variadic = (function (obj,compare_fn,coll){
return quantum.core.logic.any_QMARK_.call(null,cljs.core.partial.call(null,compare_fn,obj),coll);
});

quantum.core.logic.splice_or.cljs$lang$maxFixedArity = (2);

quantum.core.logic.splice_or.cljs$lang$applyTo = (function (seq37088){
var G__37089 = cljs.core.first.call(null,seq37088);
var seq37088__$1 = cljs.core.next.call(null,seq37088);
var G__37090 = cljs.core.first.call(null,seq37088__$1);
var seq37088__$2 = cljs.core.next.call(null,seq37088__$1);
return quantum.core.logic.splice_or.cljs$core$IFn$_invoke$arity$variadic(G__37089,G__37090,seq37088__$2);
});
quantum.core.logic.splice_and = (function quantum$core$logic$splice_and(var_args){
var args__18590__auto__ = [];
var len__18583__auto___37097 = arguments.length;
var i__18584__auto___37098 = (0);
while(true){
if((i__18584__auto___37098 < len__18583__auto___37097)){
args__18590__auto__.push((arguments[i__18584__auto___37098]));

var G__37099 = (i__18584__auto___37098 + (1));
i__18584__auto___37098 = G__37099;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((2) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((2)),(0))):null);
return quantum.core.logic.splice_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18591__auto__);
});

quantum.core.logic.splice_and.cljs$core$IFn$_invoke$arity$variadic = (function (obj,compare_fn,coll){
return cljs.core.every_QMARK_.call(null,cljs.core.partial.call(null,compare_fn,obj),coll);
});

quantum.core.logic.splice_and.cljs$lang$maxFixedArity = (2);

quantum.core.logic.splice_and.cljs$lang$applyTo = (function (seq37094){
var G__37095 = cljs.core.first.call(null,seq37094);
var seq37094__$1 = cljs.core.next.call(null,seq37094);
var G__37096 = cljs.core.first.call(null,seq37094__$1);
var seq37094__$2 = cljs.core.next.call(null,seq37094__$1);
return quantum.core.logic.splice_and.cljs$core$IFn$_invoke$arity$variadic(G__37095,G__37096,seq37094__$2);
});
quantum.core.logic.bool = (function quantum$core$logic$bool(v){
if(cljs.core._EQ_.call(null,v,(0))){
return false;
} else {
if(cljs.core._EQ_.call(null,v,(1))){
return true;
} else {
throw (new Error([cljs.core.str("Value not booleanizable: "),cljs.core.str(v)].join('')));

}
}
});
/**
 * Reverse comparator.
 */
quantum.core.logic.rcompare = (function quantum$core$logic$rcompare(x,y){
return cljs.core.compare.call(null,y,x);
});
quantum.core.logic.is_QMARK_ = (function quantum$core$logic$is_QMARK_(p1__37112_SHARP_,p2__37113_SHARP_){
return p1__37112_SHARP_.call(null,p2__37113_SHARP_);
});

//# sourceMappingURL=logic.js.map?rel=1452702556955
/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn cmacros]
*/
