// Compiled by ClojureScript 1.7.170 {}

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn logic vec]
*/
goog.provide('quantum.core.print');
goog.require('cljs.core');
goog.require('clojure.core.rrb_vector');
goog.require('quantum.core.logic');
goog.require('cljs.core');
goog.require('quantum.core.function$');
goog.require('quantum.core.data.vector');
goog.require('quantum.core.ns');
goog.require('cljs.pprint');
if(typeof quantum.core.print.max_length !== 'undefined'){
} else {
quantum.core.print.max_length = cljs.core.atom.call(null,(1000));
}
if(typeof quantum.core.print.blacklist !== 'undefined'){
} else {
/**
 * A set of classes not to print
 */
quantum.core.print.blacklist = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
}
/**
 * Fast pretty print using brandonbloom/fipp.
 * At least 5 times faster than |clojure.pprint/pprint|.
 * Prints no later than having consumed the bound amount of memory,
 * so you see your first few lines of output instantaneously.
 */
quantum.core.print._BANG_ = (function quantum$core$print$_BANG_(var_args){
var args43421 = [];
var len__18583__auto___43431 = arguments.length;
var i__18584__auto___43432 = (0);
while(true){
if((i__18584__auto___43432 < len__18583__auto___43431)){
args43421.push((arguments[i__18584__auto___43432]));

var G__43433 = (i__18584__auto___43432 + (1));
i__18584__auto___43432 = G__43433;
continue;
} else {
}
break;
}

var G__43425 = args43421.length;
switch (G__43425) {
case 1:
return quantum.core.print._BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__18602__auto__ = (new cljs.core.IndexedSeq(args43421.slice((1)),(0)));
return quantum.core.print._BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18602__auto__);

}
});

quantum.core.print._BANG_.cljs$core$IFn$_invoke$arity$1 = (function (obj){
var ct_43435 = cljs.core.long$.call(null,(function (){try{return cljs.core.count.call(null,obj);
}catch (e43426){if((e43426 instanceof Error)){
var _ = e43426;
return (1);
} else {
throw e43426;

}
}})());
if((ct_43435 > cljs.core.long$.call(null,cljs.core.deref.call(null,quantum.core.print.max_length)))){
cljs.core.println.call(null,[cljs.core.str("Object is too long to print ("),cljs.core.str([cljs.core.str(ct_43435),cljs.core.str(" elements")].join('')),cljs.core.str(").")].join(''),"|max-length| is set at",[cljs.core.str(cljs.core.deref.call(null,quantum.core.print.max_length)),cljs.core.str(".")].join(''));
} else {
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,quantum.core.print.blacklist),cljs.core.type.call(null,obj))){
cljs.core.println.call(null,"Object's class",[cljs.core.str(cljs.core.type.call(null,obj)),cljs.core.str("("),cljs.core.str(")")].join(''),"is blacklisted for printing.");
} else {
cljs.pprint.pprint.call(null,obj);

}
}

return null;
});

quantum.core.print._BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,objs){
var seq__43427 = cljs.core.seq.call(null,cljs.core.cons.call(null,obj,objs));
var chunk__43428 = null;
var count__43429 = (0);
var i__43430 = (0);
while(true){
if((i__43430 < count__43429)){
var obj_n = cljs.core._nth.call(null,chunk__43428,i__43430);
quantum.core.print._BANG_.call(null,obj_n);

var G__43436 = seq__43427;
var G__43437 = chunk__43428;
var G__43438 = count__43429;
var G__43439 = (i__43430 + (1));
seq__43427 = G__43436;
chunk__43428 = G__43437;
count__43429 = G__43438;
i__43430 = G__43439;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__43427);
if(temp__4425__auto__){
var seq__43427__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43427__$1)){
var c__18328__auto__ = cljs.core.chunk_first.call(null,seq__43427__$1);
var G__43440 = cljs.core.chunk_rest.call(null,seq__43427__$1);
var G__43441 = c__18328__auto__;
var G__43442 = cljs.core.count.call(null,c__18328__auto__);
var G__43443 = (0);
seq__43427 = G__43440;
chunk__43428 = G__43441;
count__43429 = G__43442;
i__43430 = G__43443;
continue;
} else {
var obj_n = cljs.core.first.call(null,seq__43427__$1);
quantum.core.print._BANG_.call(null,obj_n);

var G__43444 = cljs.core.next.call(null,seq__43427__$1);
var G__43445 = null;
var G__43446 = (0);
var G__43447 = (0);
seq__43427 = G__43444;
chunk__43428 = G__43445;
count__43429 = G__43446;
i__43430 = G__43447;
continue;
}
} else {
return null;
}
}
break;
}
});

quantum.core.print._BANG_.cljs$lang$applyTo = (function (seq43422){
var G__43423 = cljs.core.first.call(null,seq43422);
var seq43422__$1 = cljs.core.next.call(null,seq43422);
return quantum.core.print._BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43423,seq43422__$1);
});

quantum.core.print._BANG_.cljs$lang$maxFixedArity = (1);
quantum.core.print.suppress = cljs.core.partial.call(null,cljs.core.constantly.call(null,null));
/**
 * Gets the first element of every collection, until it returns empty.
 * 
 * Useful for printing out representative samples of large collections
 * which would be undesirable to print in whole.
 */
quantum.core.print.representative_coll = (function quantum$core$print$representative_coll(source_0){
if((function (G__43457){
return ((function (G__43459){
return !(cljs.core.coll_QMARK_.call(null,G__43459));
}).call(null,G__43457)) || (cljs.core.empty_QMARK_.call(null,G__43457));
}).call(null,source_0)){
return source_0;
} else {
var source_n = source_0;
var assoc_keys = cljs.core.PersistentVector.EMPTY;
var ret = null;
while(true){
if(((function (source_n,assoc_keys,ret){
return (function (G__43460){
return (((function (source_n,assoc_keys,ret){
return (function (G__43462){
return !(cljs.core.coll_QMARK_.call(null,G__43462));
});})(source_n,assoc_keys,ret))
.call(null,G__43460)) || (cljs.core.empty_QMARK_.call(null,G__43460));
});})(source_n,assoc_keys,ret))
.call(null,source_n)){
return ret;
} else {
var ret_n_PLUS_1_0 = (function (){var obj__43463 = source_n;
if((false) || (cljs.core.map_QMARK_.call(null,obj__43463))){
return ((function (source_n,assoc_keys,ret,obj__43463){
return (function (x__21934__auto__){
return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.first.call(null,x__21934__auto__));
});})(source_n,assoc_keys,ret,obj__43463))
.call(null,obj__43463);
} else {
if((false) || (cljs.core.vector_QMARK_.call(null,obj__43463))){
return ((function (source_n,assoc_keys,ret,obj__43463){
return (function (x__21934__auto__){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.first.call(null,x__21934__auto__)],null));
});})(source_n,assoc_keys,ret,obj__43463))
.call(null,obj__43463);
} else {
throw Error([cljs.core.str("No matching clause for "),cljs.core.str(obj__43463)].join(''));
}
}
})();
var assoc_key_n_PLUS_1 = (function (){var obj__43464 = ret_n_PLUS_1_0;
if((false) || (cljs.core.map_QMARK_.call(null,obj__43464))){
return ((function (source_n,assoc_keys,ret,obj__43464,ret_n_PLUS_1_0){
return (function (x__21928__auto__){
return cljs.core.first.call(null,cljs.core.keys.call(null,x__21928__auto__));
});})(source_n,assoc_keys,ret,obj__43464,ret_n_PLUS_1_0))
.call(null,obj__43464);
} else {
if((false) || (cljs.core.vector_QMARK_.call(null,obj__43464))){
return cljs.core.constantly.call(null,(0)).call(null,obj__43464);
} else {
throw Error([cljs.core.str("No matching clause for "),cljs.core.str(obj__43464)].join(''));
}
}
})();
var assoc_keys_n_PLUS_1 = cljs.core.conj.call(null,assoc_keys,assoc_key_n_PLUS_1);
var ret_n_PLUS_1 = (((ret == null))?ret_n_PLUS_1_0:cljs.core.assoc_in.call(null,ret,assoc_keys,ret_n_PLUS_1_0));
var source_n_PLUS_1 = (function (){var obj__43465 = ret_n_PLUS_1_0;
if((false) || (cljs.core.map_QMARK_.call(null,obj__43465))){
return cljs.core.first.call(null,cljs.core.vals).call(null,obj__43465);
} else {
if((false) || (cljs.core.vector_QMARK_.call(null,obj__43465))){
return cljs.core.first.call(null,obj__43465);
} else {
throw Error([cljs.core.str("No matching clause for "),cljs.core.str(obj__43465)].join(''));
}
}
})();
var G__43466 = source_n_PLUS_1;
var G__43467 = assoc_keys_n_PLUS_1;
var G__43468 = ret_n_PLUS_1;
source_n = G__43466;
assoc_keys = G__43467;
ret = G__43468;
continue;
}
break;
}
}
});
quantum.core.print._BANG__STAR_ = (function quantum$core$print$_BANG__STAR_(obj){
return quantum.core.print._BANG_.call(null,quantum.core.print.representative_coll.call(null,obj));
});
quantum.core.print.pprint_symbol = (function quantum$core$print$pprint_symbol(x){
var temp__4425__auto___43472 = cljs.core.contains_QMARK_.call(null,cljs.core.meta.call(null,x),new cljs.core.Keyword(null,"tag","tag",-1290361223));
if(temp__4425__auto___43472){
var has_hint_QMARK__43473 = temp__4425__auto___43472;
cljs.core.print.call(null,"^");

cljs.core.print.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,x)));

cljs.core.print.call(null," ");
} else {
}

var temp__4425__auto___43474 = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(temp__4425__auto___43474)){
var ns__43475 = temp__4425__auto___43474;
cljs.core.print.call(null,ns__43475);

cljs.core.print.call(null,"/");
} else {
}

return cljs.core.print.call(null,cljs.core.name.call(null,x));
});
quantum.core.print.pprint_hints = (function quantum$core$print$pprint_hints(x){
return quantum.core.print._BANG_.call(null,x);
});

//# sourceMappingURL=print.js.map?rel=1452702571899
/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn logic vec]
*/
