// Compiled by ClojureScript 1.7.170 {}

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns]
*/
goog.provide('quantum.core.core');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('clojure.core.rrb_vector');
goog.require('quantum.core.ns');
quantum.core.core.atom_QMARK_ = (function quantum$core$core$atom_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (16384))) || (x.cljs$core$IAtom$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,x);
}
});
quantum.core.core.boolean_QMARK_ = (function quantum$core$core$boolean_QMARK_(x){
return (x === true) || (x === false);
});
quantum.core.core.seqable_QMARK_ = cljs.core.seqable_QMARK_;
quantum.core.core.deref_STAR_ = (function quantum$core$core$deref_STAR_(a){
if((a == null)){
return null;
} else {
return cljs.core.deref.call(null,a);
}
});
quantum.core.core.lens = (function quantum$core$core$lens(x,getter){
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x))){
} else {
throw (new Error("Argument to |lens| must be an IDeref"));
}

if(typeof quantum.core.core.t_quantum$core$core37158 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
quantum.core.core.t_quantum$core$core37158 = (function (lens,x,getter,meta37159){
this.lens = lens;
this.x = x;
this.getter = getter;
this.meta37159 = meta37159;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
quantum.core.core.t_quantum$core$core37158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37160,meta37159__$1){
var self__ = this;
var _37160__$1 = this;
return (new quantum.core.core.t_quantum$core$core37158(self__.lens,self__.x,self__.getter,meta37159__$1));
});

quantum.core.core.t_quantum$core$core37158.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37160){
var self__ = this;
var _37160__$1 = this;
return self__.meta37159;
});

quantum.core.core.t_quantum$core$core37158.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.getter.call(null,cljs.core.deref.call(null,self__.x));
});

quantum.core.core.t_quantum$core$core37158.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"lens","lens",-984575916,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"getter","getter",1725376382,null)], null)))], null)),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"getter","getter",1725376382,null),new cljs.core.Symbol(null,"meta37159","meta37159",-1756773883,null)], null);
});

quantum.core.core.t_quantum$core$core37158.cljs$lang$type = true;

quantum.core.core.t_quantum$core$core37158.cljs$lang$ctorStr = "quantum.core.core/t_quantum$core$core37158";

quantum.core.core.t_quantum$core$core37158.cljs$lang$ctorPrWriter = (function (this__18123__auto__,writer__18124__auto__,opt__18125__auto__){
return cljs.core._write.call(null,writer__18124__auto__,"quantum.core.core/t_quantum$core$core37158");
});

quantum.core.core.__GT_t_quantum$core$core37158 = (function quantum$core$core$lens_$___GT_t_quantum$core$core37158(lens__$1,x__$1,getter__$1,meta37159){
return (new quantum.core.core.t_quantum$core$core37158(lens__$1,x__$1,getter__$1,meta37159));
});

}

return (new quantum.core.core.t_quantum$core$core37158(quantum$core$core$lens,x,getter,cljs.core.PersistentArrayMap.EMPTY));
});
quantum.core.core.cursor = (function quantum$core$core$cursor(var_args){
var args__18590__auto__ = [];
var len__18583__auto___37176 = arguments.length;
var i__18584__auto___37177 = (0);
while(true){
if((i__18584__auto___37177 < len__18583__auto___37176)){
args__18590__auto__.push((arguments[i__18584__auto___37177]));

var G__37178 = (i__18584__auto___37177 + (1));
i__18584__auto___37177 = G__37178;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((2) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((2)),(0))):null);
return quantum.core.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18591__auto__);
});

quantum.core.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (x,getter,p__37164){
var vec__37165 = p__37164;
var setter = cljs.core.nth.call(null,vec__37165,(0),null);
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x))){
} else {
throw (new Error("Argument to |cursor| must be an IDeref"));
}

if(typeof quantum.core.core.t_quantum$core$core37167 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
quantum.core.core.t_quantum$core$core37167 = (function (x,getter,p__37164,vec__37165,setter,meta37168){
this.x = x;
this.getter = getter;
this.p__37164 = p__37164;
this.vec__37165 = vec__37165;
this.setter = setter;
this.meta37168 = meta37168;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 49154;
})
quantum.core.core.t_quantum$core$core37167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__37165,setter){
return (function (_37169,meta37168__$1){
var self__ = this;
var _37169__$1 = this;
return (new quantum.core.core.t_quantum$core$core37167(self__.x,self__.getter,self__.p__37164,self__.vec__37165,self__.setter,meta37168__$1));
});})(vec__37165,setter))
;

quantum.core.core.t_quantum$core$core37167.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__37165,setter){
return (function (_37169){
var self__ = this;
var _37169__$1 = this;
return self__.meta37168;
});})(vec__37165,setter))
;

quantum.core.core.t_quantum$core$core37167.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (vec__37165,setter){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.getter.call(null,cljs.core.deref.call(null,self__.x));
});})(vec__37165,setter))
;

quantum.core.core.t_quantum$core$core37167.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = ((function (vec__37165,setter){
return (function (this$,newv){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,self__.x,newv);
});})(vec__37165,setter))
;

quantum.core.core.t_quantum$core$core37167.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = ((function (vec__37165,setter){
return (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
var seq__37170_37179 = cljs.core.seq.call(null,self__.x.watches);
var chunk__37171_37180 = null;
var count__37172_37181 = (0);
var i__37173_37182 = (0);
while(true){
if((i__37173_37182 < count__37172_37181)){
var vec__37174_37183 = cljs.core._nth.call(null,chunk__37171_37180,i__37173_37182);
var key_37184 = cljs.core.nth.call(null,vec__37174_37183,(0),null);
var f_37185 = cljs.core.nth.call(null,vec__37174_37183,(1),null);
f_37185.call(null,key_37184,this$__$1,oldval,newval);

var G__37186 = seq__37170_37179;
var G__37187 = chunk__37171_37180;
var G__37188 = count__37172_37181;
var G__37189 = (i__37173_37182 + (1));
seq__37170_37179 = G__37186;
chunk__37171_37180 = G__37187;
count__37172_37181 = G__37188;
i__37173_37182 = G__37189;
continue;
} else {
var temp__4425__auto___37190 = cljs.core.seq.call(null,seq__37170_37179);
if(temp__4425__auto___37190){
var seq__37170_37191__$1 = temp__4425__auto___37190;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37170_37191__$1)){
var c__18328__auto___37192 = cljs.core.chunk_first.call(null,seq__37170_37191__$1);
var G__37193 = cljs.core.chunk_rest.call(null,seq__37170_37191__$1);
var G__37194 = c__18328__auto___37192;
var G__37195 = cljs.core.count.call(null,c__18328__auto___37192);
var G__37196 = (0);
seq__37170_37179 = G__37193;
chunk__37171_37180 = G__37194;
count__37172_37181 = G__37195;
i__37173_37182 = G__37196;
continue;
} else {
var vec__37175_37197 = cljs.core.first.call(null,seq__37170_37191__$1);
var key_37198 = cljs.core.nth.call(null,vec__37175_37197,(0),null);
var f_37199 = cljs.core.nth.call(null,vec__37175_37197,(1),null);
f_37199.call(null,key_37198,this$__$1,oldval,newval);

var G__37200 = cljs.core.next.call(null,seq__37170_37191__$1);
var G__37201 = null;
var G__37202 = (0);
var G__37203 = (0);
seq__37170_37179 = G__37200;
chunk__37171_37180 = G__37201;
count__37172_37181 = G__37202;
i__37173_37182 = G__37203;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(vec__37165,setter))
;

quantum.core.core.t_quantum$core$core37167.prototype.cljs$core$IWatchable$_add_watch$arity$3 = ((function (vec__37165,setter){
return (function (this$,k,f){
var self__ = this;
var this$__$1 = this;
cljs.core.add_watch.call(null,self__.x,k,f);

return this$__$1;
});})(vec__37165,setter))
;

quantum.core.core.t_quantum$core$core37167.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = ((function (vec__37165,setter){
return (function (this$,k){
var self__ = this;
var this$__$1 = this;
cljs.core.remove_watch.call(null,self__.x,k);

return this$__$1;
});})(vec__37165,setter))
;

quantum.core.core.t_quantum$core$core37167.getBasis = ((function (vec__37165,setter){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"getter","getter",1725376382,null),new cljs.core.Symbol(null,"p__37164","p__37164",-1331605137,null),new cljs.core.Symbol(null,"vec__37165","vec__37165",1114387134,null),new cljs.core.Symbol(null,"setter","setter",-706080843,null),new cljs.core.Symbol(null,"meta37168","meta37168",1034470292,null)], null);
});})(vec__37165,setter))
;

quantum.core.core.t_quantum$core$core37167.cljs$lang$type = true;

quantum.core.core.t_quantum$core$core37167.cljs$lang$ctorStr = "quantum.core.core/t_quantum$core$core37167";

quantum.core.core.t_quantum$core$core37167.cljs$lang$ctorPrWriter = ((function (vec__37165,setter){
return (function (this__18123__auto__,writer__18124__auto__,opt__18125__auto__){
return cljs.core._write.call(null,writer__18124__auto__,"quantum.core.core/t_quantum$core$core37167");
});})(vec__37165,setter))
;

quantum.core.core.__GT_t_quantum$core$core37167 = ((function (vec__37165,setter){
return (function quantum$core$core$__GT_t_quantum$core$core37167(x__$1,getter__$1,p__37164__$1,vec__37165__$1,setter__$1,meta37168){
return (new quantum.core.core.t_quantum$core$core37167(x__$1,getter__$1,p__37164__$1,vec__37165__$1,setter__$1,meta37168));
});})(vec__37165,setter))
;

}

return (new quantum.core.core.t_quantum$core$core37167(x,getter,p__37164,vec__37165,setter,cljs.core.PersistentArrayMap.EMPTY));
});

quantum.core.core.cursor.cljs$lang$maxFixedArity = (2);

quantum.core.core.cursor.cljs$lang$applyTo = (function (seq37161){
var G__37162 = cljs.core.first.call(null,seq37161);
var seq37161__$1 = cljs.core.next.call(null,seq37161);
var G__37163 = cljs.core.first.call(null,seq37161__$1);
var seq37161__$2 = cljs.core.next.call(null,seq37161__$1);
return quantum.core.core.cursor.cljs$core$IFn$_invoke$arity$variadic(G__37162,G__37163,seq37161__$2);
});
quantum.core.core.seq_equals = (function quantum$core$core$seq_equals(a,b){
return cljs.core.boolean$.call(null,(((cljs.core.sequential_QMARK_.call(null,b)) || (cljs.core.list_QMARK_.call(null,b)))?(function (){var a__$1 = cljs.core.seq.call(null,a);
var b__$1 = cljs.core.seq.call(null,b);
while(true){
if(cljs.core._EQ_.call(null,(a__$1 == null),(b__$1 == null))){
var or__17525__auto__ = (a__$1 == null);
if(or__17525__auto__){
return or__17525__auto__;
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a__$1),cljs.core.first.call(null,b__$1))){
var G__37204 = cljs.core.next.call(null,a__$1);
var G__37205 = cljs.core.next.call(null,b__$1);
a__$1 = G__37204;
b__$1 = G__37205;
continue;
} else {
return null;
}
}
} else {
return null;
}
break;
}
})():null));
});

//# sourceMappingURL=core.js.map?rel=1452702557420
/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns]
*/
