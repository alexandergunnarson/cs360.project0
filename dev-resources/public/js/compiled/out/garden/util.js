// Compiled by ClojureScript 1.7.170 {}
goog.provide('garden.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('garden.types');
goog.require('goog.string');
goog.require('goog.string.format');
/**
 * Formats a string using goog.string.format.
 */
garden.util.format = (function garden$util$format(var_args){
var args__18590__auto__ = [];
var len__18583__auto___39050 = arguments.length;
var i__18584__auto___39051 = (0);
while(true){
if((i__18584__auto___39051 < len__18583__auto___39050)){
args__18590__auto__.push((arguments[i__18584__auto___39051]));

var G__39052 = (i__18584__auto___39051 + (1));
i__18584__auto___39051 = G__39052;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((1) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((1)),(0))):null);
return garden.util.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18591__auto__);
});

garden.util.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

garden.util.format.cljs$lang$maxFixedArity = (1);

garden.util.format.cljs$lang$applyTo = (function (seq39048){
var G__39049 = cljs.core.first.call(null,seq39048);
var seq39048__$1 = cljs.core.next.call(null,seq39048);
return garden.util.format.cljs$core$IFn$_invoke$arity$variadic(G__39049,seq39048__$1);
});

/**
 * @interface
 */
garden.util.ToString = function(){};

/**
 * Convert a value into a string.
 */
garden.util.to_str = (function garden$util$to_str(this$){
if((!((this$ == null))) && (!((this$.garden$util$ToString$to_str$arity$1 == null)))){
return this$.garden$util$ToString$to_str$arity$1(this$);
} else {
var x__18180__auto__ = (((this$ == null))?null:this$);
var m__18181__auto__ = (garden.util.to_str[goog.typeOf(x__18180__auto__)]);
if(!((m__18181__auto__ == null))){
return m__18181__auto__.call(null,this$);
} else {
var m__18181__auto____$1 = (garden.util.to_str["_"]);
if(!((m__18181__auto____$1 == null))){
return m__18181__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ToString.to-str",this$);
}
}
}
});

cljs.core.Keyword.prototype.garden$util$ToString$ = true;

cljs.core.Keyword.prototype.garden$util$ToString$to_str$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name.call(null,this$__$1);
});

(garden.util.ToString["_"] = true);

(garden.util.to_str["_"] = (function (this$){
return [cljs.core.str(this$)].join('');
}));

(garden.util.ToString["null"] = true);

(garden.util.to_str["null"] = (function (this$){
return "";
}));
/**
 * Convert a variable number of values into strings.
 */
garden.util.as_str = (function garden$util$as_str(var_args){
var args__18590__auto__ = [];
var len__18583__auto___39054 = arguments.length;
var i__18584__auto___39055 = (0);
while(true){
if((i__18584__auto___39055 < len__18583__auto___39054)){
args__18590__auto__.push((arguments[i__18584__auto___39055]));

var G__39056 = (i__18584__auto___39055 + (1));
i__18584__auto___39055 = G__39056;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,garden.util.to_str,args));
});

garden.util.as_str.cljs$lang$maxFixedArity = (0);

garden.util.as_str.cljs$lang$applyTo = (function (seq39053){
return garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39053));
});
/**
 * Convert a string to an integer with optional base.
 */
garden.util.string__GT_int = (function garden$util$string__GT_int(var_args){
var args__18590__auto__ = [];
var len__18583__auto___39061 = arguments.length;
var i__18584__auto___39062 = (0);
while(true){
if((i__18584__auto___39062 < len__18583__auto___39061)){
args__18590__auto__.push((arguments[i__18584__auto___39062]));

var G__39063 = (i__18584__auto___39062 + (1));
i__18584__auto___39062 = G__39063;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((1) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((1)),(0))):null);
return garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18591__auto__);
});

garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__39059){
var vec__39060 = p__39059;
var radix = cljs.core.nth.call(null,vec__39060,(0),null);
var radix__$1 = (function (){var or__17525__auto__ = radix;
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return (10);
}
})();
return parseInt(s,radix__$1);
});

garden.util.string__GT_int.cljs$lang$maxFixedArity = (1);

garden.util.string__GT_int.cljs$lang$applyTo = (function (seq39057){
var G__39058 = cljs.core.first.call(null,seq39057);
var seq39057__$1 = cljs.core.next.call(null,seq39057);
return garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic(G__39058,seq39057__$1);
});
/**
 * Convert an integer to a string with optional base.
 */
garden.util.int__GT_string = (function garden$util$int__GT_string(var_args){
var args__18590__auto__ = [];
var len__18583__auto___39068 = arguments.length;
var i__18584__auto___39069 = (0);
while(true){
if((i__18584__auto___39069 < len__18583__auto___39068)){
args__18590__auto__.push((arguments[i__18584__auto___39069]));

var G__39070 = (i__18584__auto___39069 + (1));
i__18584__auto___39069 = G__39070;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((1) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((1)),(0))):null);
return garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18591__auto__);
});

garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic = (function (i,p__39066){
var vec__39067 = p__39066;
var radix = cljs.core.nth.call(null,vec__39067,(0),null);
var radix__$1 = (function (){var or__17525__auto__ = radix;
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return (10);
}
})();
return i.toString(radix__$1);
});

garden.util.int__GT_string.cljs$lang$maxFixedArity = (1);

garden.util.int__GT_string.cljs$lang$applyTo = (function (seq39064){
var G__39065 = cljs.core.first.call(null,seq39064);
var seq39064__$1 = cljs.core.next.call(null,seq39064);
return garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic(G__39065,seq39064__$1);
});
/**
 * Return a space separated list of values.
 */
garden.util.space_join = (function garden$util$space_join(xs){
return clojure.string.join.call(null," ",cljs.core.map.call(null,garden.util.to_str,xs));
});
/**
 * Return a comma separated list of values. Subsequences are joined with
 * spaces.
 */
garden.util.comma_join = (function garden$util$comma_join(xs){
var ys = (function (){var iter__18297__auto__ = (function garden$util$comma_join_$_iter__39075(s__39076){
return (new cljs.core.LazySeq(null,(function (){
var s__39076__$1 = s__39076;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__39076__$1);
if(temp__4425__auto__){
var s__39076__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39076__$2)){
var c__18295__auto__ = cljs.core.chunk_first.call(null,s__39076__$2);
var size__18296__auto__ = cljs.core.count.call(null,c__18295__auto__);
var b__39078 = cljs.core.chunk_buffer.call(null,size__18296__auto__);
if((function (){var i__39077 = (0);
while(true){
if((i__39077 < size__18296__auto__)){
var x = cljs.core._nth.call(null,c__18295__auto__,i__39077);
cljs.core.chunk_append.call(null,b__39078,((cljs.core.sequential_QMARK_.call(null,x))?garden.util.space_join.call(null,x):garden.util.to_str.call(null,x)));

var G__39079 = (i__39077 + (1));
i__39077 = G__39079;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39078),garden$util$comma_join_$_iter__39075.call(null,cljs.core.chunk_rest.call(null,s__39076__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39078),null);
}
} else {
var x = cljs.core.first.call(null,s__39076__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?garden.util.space_join.call(null,x):garden.util.to_str.call(null,x)),garden$util$comma_join_$_iter__39075.call(null,cljs.core.rest.call(null,s__39076__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__18297__auto__.call(null,xs);
})();
return clojure.string.join.call(null,", ",ys);
});
/**
 * Wrap a string with double quotes.
 */
garden.util.wrap_quotes = (function garden$util$wrap_quotes(s){
return [cljs.core.str("\""),cljs.core.str(s),cljs.core.str("\"")].join('');
});
/**
 * True if x is an instance of or satisfies clojure.lang.IRecord.
 */
garden.util.record_QMARK_ = (function garden$util$record_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (67108864))) || (x.cljs$core$IRecord$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,x);
}
});
/**
 * True if `(map? x)` and `x` does not satisfy `clojure.lang.IRecord`.
 */
garden.util.hash_map_QMARK_ = (function garden$util$hash_map_QMARK_(x){
return (cljs.core.map_QMARK_.call(null,x)) && (cljs.core.not.call(null,garden.util.record_QMARK_.call(null,x)));
});
/**
 * Alias to `vector?`.
 */
garden.util.rule_QMARK_ = cljs.core.vector_QMARK_;
/**
 * Alias to `hash-map?`.
 */
garden.util.declaration_QMARK_ = garden.util.hash_map_QMARK_;
garden.util.at_rule_QMARK_ = (function garden$util$at_rule_QMARK_(x){
return (x instanceof garden.types.CSSAtRule);
});
/**
 * True if `x` is a CSS `@media` rule.
 */
garden.util.at_media_QMARK_ = (function garden$util$at_media_QMARK_(x){
var and__17513__auto__ = garden.util.at_rule_QMARK_.call(null,x);
if(cljs.core.truth_(and__17513__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"media","media",-1066138403));
} else {
return and__17513__auto__;
}
});
/**
 * True if `x` is a CSS `@keyframes` rule.
 */
garden.util.at_keyframes_QMARK_ = (function garden$util$at_keyframes_QMARK_(x){
var and__17513__auto__ = garden.util.at_rule_QMARK_.call(null,x);
if(cljs.core.truth_(and__17513__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012));
} else {
return and__17513__auto__;
}
});
/**
 * True if `x` is a CSS `@import` rule.
 */
garden.util.at_import_QMARK_ = (function garden$util$at_import_QMARK_(x){
var and__17513__auto__ = garden.util.at_rule_QMARK_.call(null,x);
if(cljs.core.truth_(and__17513__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"import","import",-1399500709));
} else {
return and__17513__auto__;
}
});
/**
 * Attach a CSS style prefix to s.
 */
garden.util.prefix = (function garden$util$prefix(p,s){
var p__$1 = garden.util.to_str.call(null,p);
if(cljs.core._EQ_.call(null,"-",cljs.core.last.call(null,p__$1))){
return [cljs.core.str(p__$1),cljs.core.str(s)].join('');
} else {
return [cljs.core.str(p__$1),cljs.core.str("-"),cljs.core.str(s)].join('');
}
});
/**
 * Attach a CSS vendor prefix to s.
 */
garden.util.vendor_prefix = (function garden$util$vendor_prefix(p,s){
var p__$1 = garden.util.to_str.call(null,p);
if(cljs.core._EQ_.call(null,"-",cljs.core.first.call(null,p__$1))){
return garden.util.prefix.call(null,p__$1,s);
} else {
return garden.util.prefix.call(null,[cljs.core.str("-"),cljs.core.str(p__$1)].join(''),s);
}
});
/**
 * True if n is a natural number.
 */
garden.util.natural_QMARK_ = (function garden$util$natural_QMARK_(n){
return (cljs.core.integer_QMARK_.call(null,n)) && ((n > (0)));
});
/**
 * True if n is a number between a and b.
 */
garden.util.between_QMARK_ = (function garden$util$between_QMARK_(n,a,b){
var bottom = (function (){var x__17863__auto__ = a;
var y__17864__auto__ = b;
return ((x__17863__auto__ < y__17864__auto__) ? x__17863__auto__ : y__17864__auto__);
})();
var top = (function (){var x__17856__auto__ = a;
var y__17857__auto__ = b;
return ((x__17856__auto__ > y__17857__auto__) ? x__17856__auto__ : y__17857__auto__);
})();
return ((n >= bottom)) && ((n <= top));
});
/**
 * Return a number such that n is no less than a and no more than b.
 */
garden.util.clip = (function garden$util$clip(a,b,n){
var vec__39083 = (((a <= b))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null));
var a__$1 = cljs.core.nth.call(null,vec__39083,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__39083,(1),null);
var x__17856__auto__ = a__$1;
var y__17857__auto__ = (function (){var x__17863__auto__ = b__$1;
var y__17864__auto__ = n;
return ((x__17863__auto__ < y__17864__auto__) ? x__17863__auto__ : y__17864__auto__);
})();
return ((x__17856__auto__ > y__17857__auto__) ? x__17856__auto__ : y__17857__auto__);
});
/**
 * Return the average of two or more numbers.
 */
garden.util.average = (function garden$util$average(var_args){
var args__18590__auto__ = [];
var len__18583__auto___39087 = arguments.length;
var i__18584__auto___39088 = (0);
while(true){
if((i__18584__auto___39088 < len__18583__auto___39087)){
args__18590__auto__.push((arguments[i__18584__auto___39088]));

var G__39089 = (i__18584__auto___39088 + (1));
i__18584__auto___39088 = G__39089;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((2) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((2)),(0))):null);
return garden.util.average.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18591__auto__);
});

garden.util.average.cljs$core$IFn$_invoke$arity$variadic = (function (n,m,more){
return (cljs.core.apply.call(null,cljs.core._PLUS_,n,m,more) / (2.0 + cljs.core.count.call(null,more)));
});

garden.util.average.cljs$lang$maxFixedArity = (2);

garden.util.average.cljs$lang$applyTo = (function (seq39084){
var G__39085 = cljs.core.first.call(null,seq39084);
var seq39084__$1 = cljs.core.next.call(null,seq39084);
var G__39086 = cljs.core.first.call(null,seq39084__$1);
var seq39084__$2 = cljs.core.next.call(null,seq39084__$1);
return garden.util.average.cljs$core$IFn$_invoke$arity$variadic(G__39085,G__39086,seq39084__$2);
});
/**
 * All the ways to take one item from each sequence.
 */
garden.util.cartesian_product = (function garden$util$cartesian_product(var_args){
var args__18590__auto__ = [];
var len__18583__auto___39091 = arguments.length;
var i__18584__auto___39092 = (0);
while(true){
if((i__18584__auto___39092 < len__18583__auto___39091)){
args__18590__auto__.push((arguments[i__18584__auto___39092]));

var G__39093 = (i__18584__auto___39092 + (1));
i__18584__auto___39092 = G__39093;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec.call(null,seqs);
var step = ((function (v_original_seqs){
return (function garden$util$step(v_seqs){
var increment = ((function (v_original_seqs){
return (function (v_seqs__$1){
var i = (cljs.core.count.call(null,v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.call(null,i,(-1))){
return null;
} else {
var temp__4423__auto__ = cljs.core.next.call(null,v_seqs__$2.call(null,i));
if(temp__4423__auto__){
var rst = temp__4423__auto__;
return cljs.core.assoc.call(null,v_seqs__$2,i,rst);
} else {
var G__39094 = (i - (1));
var G__39095 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__39094;
v_seqs__$2 = G__39095;
continue;
}
}
break;
}
});})(v_original_seqs))
;
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons.call(null,cljs.core.map.call(null,cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,((function (increment,v_original_seqs){
return (function (){
return garden$util$step.call(null,increment.call(null,v_seqs));
});})(increment,v_original_seqs))
,null,null)));
} else {
return null;
}
});})(v_original_seqs))
;
if(cljs.core.every_QMARK_.call(null,cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,((function (v_original_seqs,step){
return (function (){
return step.call(null,v_original_seqs);
});})(v_original_seqs,step))
,null,null));
} else {
return null;
}
});

garden.util.cartesian_product.cljs$lang$maxFixedArity = (0);

garden.util.cartesian_product.cljs$lang$applyTo = (function (seq39090){
return garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39090));
});

//# sourceMappingURL=util.js.map?rel=1452702564025