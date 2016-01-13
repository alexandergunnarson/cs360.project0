// Compiled by ClojureScript 1.7.170 {}
goog.provide('quantum.core.ns.reg_utils');
goog.require('cljs.core');
/**
 * Merges the content of @colls into a set.
 */
quantum.core.ns.reg_utils.set_merge = (function quantum$core$ns$reg_utils$set_merge(var_args){
var args__18590__auto__ = [];
var len__18583__auto___36638 = arguments.length;
var i__18584__auto___36639 = (0);
while(true){
if((i__18584__auto___36639 < len__18583__auto___36638)){
args__18590__auto__.push((arguments[i__18584__auto___36639]));

var G__36640 = (i__18584__auto___36639 + (1));
i__18584__auto___36639 = G__36640;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.core.ns.reg_utils.set_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.core.ns.reg_utils.set_merge.cljs$core$IFn$_invoke$arity$variadic = (function (colls){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.apply.call(null,cljs.core.concat,colls));
});

quantum.core.ns.reg_utils.set_merge.cljs$lang$maxFixedArity = (0);

quantum.core.ns.reg_utils.set_merge.cljs$lang$applyTo = (function (seq36637){
return quantum.core.ns.reg_utils.set_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36637));
});
quantum.core.ns.reg_utils.ex = (function quantum$core$ns$reg_utils$ex(arg){
return Error(arg);
});

//# sourceMappingURL=reg_utils.js.map?rel=1452702553564