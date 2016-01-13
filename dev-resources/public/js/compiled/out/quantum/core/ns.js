// Compiled by ClojureScript 1.7.170 {}
goog.provide('quantum.core.ns');
goog.require('cljs.core');
goog.require('quantum.core.ns.reg_utils');
goog.require('quantum.core.ns.reg');
goog.require('cljs.core');
goog.require('clojure.string');
quantum.core.ns.lang = new cljs.core.Keyword(null,"cljs","cljs",1492417629);
quantum.core.ns.debug_QMARK_ = cljs.core.atom.call(null,false);
quantum.core.ns.externs_QMARK_ = cljs.core.atom.call(null,true);
quantum.core.ns.js_println = (function quantum$core$ns$js_println(var_args){
var args__18590__auto__ = [];
var len__18583__auto___36757 = arguments.length;
var i__18584__auto___36758 = (0);
while(true){
if((i__18584__auto___36758 < len__18583__auto___36757)){
args__18590__auto__.push((arguments[i__18584__auto___36758]));

var G__36759 = (i__18584__auto___36758 + (1));
i__18584__auto___36758 = G__36759;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.core.ns.js_println.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.core.ns.js_println.cljs$core$IFn$_invoke$arity$variadic = (function (args){
cljs.core.print.call(null,"\n/* ");

cljs.core.apply.call(null,cljs.core.println,args);

return cljs.core.println.call(null,"*/");
});

quantum.core.ns.js_println.cljs$lang$maxFixedArity = (0);

quantum.core.ns.js_println.cljs$lang$applyTo = (function (seq36756){
return quantum.core.ns.js_println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36756));
});
quantum.core.ns.this_fn_name = (function quantum$core$ns$this_fn_name(var_args){
var args36760 = [];
var len__18583__auto___36766 = arguments.length;
var i__18584__auto___36767 = (0);
while(true){
if((i__18584__auto___36767 < len__18583__auto___36766)){
args36760.push((arguments[i__18584__auto___36767]));

var G__36768 = (i__18584__auto___36767 + (1));
i__18584__auto___36767 = G__36768;
continue;
} else {
}
break;
}

var G__36762 = args36760.length;
switch (G__36762) {
case 0:
return quantum.core.ns.this_fn_name.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return quantum.core.ns.this_fn_name.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36760.length)].join('')));

}
});

quantum.core.ns.this_fn_name.cljs$core$IFn$_invoke$arity$0 = (function (){
return quantum.core.ns.this_fn_name.call(null,new cljs.core.Keyword(null,"curr","curr",-1092372808));
});

quantum.core.ns.this_fn_name.cljs$core$IFn$_invoke$arity$1 = (function (k){
var st = cljs.core.identity.call(null,clojure.string.split.call(null,Error().stack,"\n    at "));
var elem = (function (){var pred__36763 = cljs.core._EQ_;
var expr__36764 = k;
if(cljs.core.truth_(pred__36763.call(null,new cljs.core.Keyword(null,"curr","curr",-1092372808),expr__36764))){
return cljs.core.nth.call(null,st,(function (){var x__17863__auto__ = (4);
var y__17864__auto__ = (cljs.core.count.call(null,st) - (1));
return ((x__17863__auto__ < y__17864__auto__) ? x__17863__auto__ : y__17864__auto__);
})());
} else {
if(cljs.core.truth_(pred__36763.call(null,new cljs.core.Keyword(null,"prev","prev",-1597069226),expr__36764))){
return cljs.core.nth.call(null,st,(function (){var x__17863__auto__ = (5);
var y__17864__auto__ = (cljs.core.count.call(null,st) - (1));
return ((x__17863__auto__ < y__17864__auto__) ? x__17863__auto__ : y__17864__auto__);
})());
} else {
throw (new Error("Unrecognized key."));
}
}
})();
return cljs.core.demunge_str.call(null,cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.trim.call(null,elem)," ")));
});

quantum.core.ns.this_fn_name.cljs$lang$maxFixedArity = 1;
/**
 * Handles optional docstrings & attr maps for a macro def's name.
 */
quantum.core.ns.name_with_attrs = (function quantum$core$ns$name_with_attrs(name,macro_args){
var vec__36774 = ((typeof cljs.core.first.call(null,macro_args) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,macro_args),cljs.core.next.call(null,macro_args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,macro_args], null));
var docstring = cljs.core.nth.call(null,vec__36774,(0),null);
var macro_args__$1 = cljs.core.nth.call(null,vec__36774,(1),null);
var vec__36775 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,macro_args__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,macro_args__$1),cljs.core.next.call(null,macro_args__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,macro_args__$1], null));
var attr = cljs.core.nth.call(null,vec__36775,(0),null);
var macro_args__$2 = cljs.core.nth.call(null,vec__36775,(1),null);
var attr__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.call(null,attr,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):attr);
var attr__$2 = (cljs.core.truth_(cljs.core.meta.call(null,name))?cljs.core.conj.call(null,cljs.core.meta.call(null,name),attr__$1):attr__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta.call(null,name,attr__$2),macro_args__$2], null);
});
quantum.core.ns.ANil = null;
quantum.core.ns.AKey = cljs.core.Keyword;
quantum.core.ns.ANum = Number;
quantum.core.ns.AExactNum = Number;
quantum.core.ns.AInt = Number;
quantum.core.ns.ADouble = Number;
quantum.core.ns.ADecimal = Number;
quantum.core.ns.ASet = cljs.core.PersistentHashSet;
quantum.core.ns.ABool = Boolean;
quantum.core.ns.AArrList = cljs.core.ArrayList;
quantum.core.ns.ATreeMap = cljs.core.PersistentTreeMap;
quantum.core.ns.ALSeq = cljs.core.LazySeq;
quantum.core.ns.AVec = cljs.core.PersistentVector;
quantum.core.ns.AMEntry = cljs.core.Vec;
quantum.core.ns.ARegex = RegExp;
quantum.core.ns.AEditable = cljs.core.IEditableCollection;
quantum.core.ns.ATransient = cljs.core.ITransientCollection;
quantum.core.ns.AQueue = cljs.core.PersistentQueue;
quantum.core.ns.AMap = cljs.core.IMap;
quantum.core.ns.AError = Error;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
quantum.core.ns.Exception = (function (msg,__meta,__extmap,__hash){
this.msg = msg;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
quantum.core.ns.Exception.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18139__auto__,k__18140__auto__){
var self__ = this;
var this__18139__auto____$1 = this;
return cljs.core._lookup.call(null,this__18139__auto____$1,k__18140__auto__,null);
});

quantum.core.ns.Exception.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18141__auto__,k36783,else__18142__auto__){
var self__ = this;
var this__18141__auto____$1 = this;
var G__36785 = (((k36783 instanceof cljs.core.Keyword))?k36783.fqn:null);
switch (G__36785) {
case "msg":
return self__.msg;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k36783,else__18142__auto__);

}
});

quantum.core.ns.Exception.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18153__auto__,writer__18154__auto__,opts__18155__auto__){
var self__ = this;
var this__18153__auto____$1 = this;
var pr_pair__18156__auto__ = ((function (this__18153__auto____$1){
return (function (keyval__18157__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,cljs.core.pr_writer,""," ","",opts__18155__auto__,keyval__18157__auto__);
});})(this__18153__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,pr_pair__18156__auto__,"#quantum.core.ns.Exception{",", ","}",opts__18155__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"msg","msg",-1386103444),self__.msg],null))], null),self__.__extmap));
});

quantum.core.ns.Exception.prototype.cljs$core$IIterable$ = true;

quantum.core.ns.Exception.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36782){
var self__ = this;
var G__36782__$1 = this;
return (new cljs.core.RecordIter((0),G__36782__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg","msg",-1386103444)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

quantum.core.ns.Exception.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18137__auto__){
var self__ = this;
var this__18137__auto____$1 = this;
return self__.__meta;
});

quantum.core.ns.Exception.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18133__auto__){
var self__ = this;
var this__18133__auto____$1 = this;
return (new quantum.core.ns.Exception(self__.msg,self__.__meta,self__.__extmap,self__.__hash));
});

quantum.core.ns.Exception.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18143__auto__){
var self__ = this;
var this__18143__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

quantum.core.ns.Exception.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18134__auto__){
var self__ = this;
var this__18134__auto____$1 = this;
var h__17960__auto__ = self__.__hash;
if(!((h__17960__auto__ == null))){
return h__17960__auto__;
} else {
var h__17960__auto____$1 = cljs.core.hash_imap.call(null,this__18134__auto____$1);
self__.__hash = h__17960__auto____$1;

return h__17960__auto____$1;
}
});

quantum.core.ns.Exception.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18135__auto__,other__18136__auto__){
var self__ = this;
var this__18135__auto____$1 = this;
if(cljs.core.truth_((function (){var and__17513__auto__ = other__18136__auto__;
if(cljs.core.truth_(and__17513__auto__)){
var and__17513__auto____$1 = (this__18135__auto____$1.constructor === other__18136__auto__.constructor);
if(and__17513__auto____$1){
return cljs.core.equiv_map.call(null,this__18135__auto____$1,other__18136__auto__);
} else {
return and__17513__auto____$1;
}
} else {
return and__17513__auto__;
}
})())){
return true;
} else {
return false;
}
});

quantum.core.ns.Exception.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18148__auto__,k__18149__auto__){
var self__ = this;
var this__18148__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",-1386103444),null], null), null),k__18149__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18148__auto____$1),self__.__meta),k__18149__auto__);
} else {
return (new quantum.core.ns.Exception(self__.msg,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18149__auto__)),null));
}
});

quantum.core.ns.Exception.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18146__auto__,k__18147__auto__,G__36782){
var self__ = this;
var this__18146__auto____$1 = this;
var pred__36786 = cljs.core.keyword_identical_QMARK_;
var expr__36787 = k__18147__auto__;
if(cljs.core.truth_(pred__36786.call(null,new cljs.core.Keyword(null,"msg","msg",-1386103444),expr__36787))){
return (new quantum.core.ns.Exception(G__36782,self__.__meta,self__.__extmap,null));
} else {
return (new quantum.core.ns.Exception(self__.msg,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18147__auto__,G__36782),null));
}
});

quantum.core.ns.Exception.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18151__auto__){
var self__ = this;
var this__18151__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"msg","msg",-1386103444),self__.msg],null))], null),self__.__extmap));
});

quantum.core.ns.Exception.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18138__auto__,G__36782){
var self__ = this;
var this__18138__auto____$1 = this;
return (new quantum.core.ns.Exception(self__.msg,G__36782,self__.__extmap,self__.__hash));
});

quantum.core.ns.Exception.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18144__auto__,entry__18145__auto__){
var self__ = this;
var this__18144__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18145__auto__)){
return cljs.core._assoc.call(null,this__18144__auto____$1,cljs.core._nth.call(null,entry__18145__auto__,(0)),cljs.core._nth.call(null,entry__18145__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18144__auto____$1,entry__18145__auto__);
}
});

quantum.core.ns.Exception.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"msg","msg",254428083,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"String","String",-2070057435,null)], null))], null);
});

quantum.core.ns.Exception.cljs$lang$type = true;

quantum.core.ns.Exception.cljs$lang$ctorPrSeq = (function (this__18173__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"quantum.core.ns/Exception");
});

quantum.core.ns.Exception.cljs$lang$ctorPrWriter = (function (this__18173__auto__,writer__18174__auto__){
return cljs.core._write.call(null,writer__18174__auto__,"quantum.core.ns/Exception");
});

quantum.core.ns.__GT_Exception = (function quantum$core$ns$__GT_Exception(msg){
return (new quantum.core.ns.Exception(msg,null,null,null));
});

quantum.core.ns.map__GT_Exception = (function quantum$core$ns$map__GT_Exception(G__36784){
return (new quantum.core.ns.Exception(new cljs.core.Keyword(null,"msg","msg",-1386103444).cljs$core$IFn$_invoke$arity$1(G__36784),null,cljs.core.dissoc.call(null,G__36784,new cljs.core.Keyword(null,"msg","msg",-1386103444)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
quantum.core.ns.IllegalArgumentException = (function (msg,__meta,__extmap,__hash){
this.msg = msg;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
quantum.core.ns.IllegalArgumentException.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18139__auto__,k__18140__auto__){
var self__ = this;
var this__18139__auto____$1 = this;
return cljs.core._lookup.call(null,this__18139__auto____$1,k__18140__auto__,null);
});

quantum.core.ns.IllegalArgumentException.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18141__auto__,k36791,else__18142__auto__){
var self__ = this;
var this__18141__auto____$1 = this;
var G__36793 = (((k36791 instanceof cljs.core.Keyword))?k36791.fqn:null);
switch (G__36793) {
case "msg":
return self__.msg;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k36791,else__18142__auto__);

}
});

quantum.core.ns.IllegalArgumentException.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18153__auto__,writer__18154__auto__,opts__18155__auto__){
var self__ = this;
var this__18153__auto____$1 = this;
var pr_pair__18156__auto__ = ((function (this__18153__auto____$1){
return (function (keyval__18157__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,cljs.core.pr_writer,""," ","",opts__18155__auto__,keyval__18157__auto__);
});})(this__18153__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,pr_pair__18156__auto__,"#quantum.core.ns.IllegalArgumentException{",", ","}",opts__18155__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"msg","msg",-1386103444),self__.msg],null))], null),self__.__extmap));
});

quantum.core.ns.IllegalArgumentException.prototype.cljs$core$IIterable$ = true;

quantum.core.ns.IllegalArgumentException.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36790){
var self__ = this;
var G__36790__$1 = this;
return (new cljs.core.RecordIter((0),G__36790__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg","msg",-1386103444)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

quantum.core.ns.IllegalArgumentException.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18137__auto__){
var self__ = this;
var this__18137__auto____$1 = this;
return self__.__meta;
});

quantum.core.ns.IllegalArgumentException.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18133__auto__){
var self__ = this;
var this__18133__auto____$1 = this;
return (new quantum.core.ns.IllegalArgumentException(self__.msg,self__.__meta,self__.__extmap,self__.__hash));
});

quantum.core.ns.IllegalArgumentException.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18143__auto__){
var self__ = this;
var this__18143__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

quantum.core.ns.IllegalArgumentException.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18134__auto__){
var self__ = this;
var this__18134__auto____$1 = this;
var h__17960__auto__ = self__.__hash;
if(!((h__17960__auto__ == null))){
return h__17960__auto__;
} else {
var h__17960__auto____$1 = cljs.core.hash_imap.call(null,this__18134__auto____$1);
self__.__hash = h__17960__auto____$1;

return h__17960__auto____$1;
}
});

quantum.core.ns.IllegalArgumentException.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18135__auto__,other__18136__auto__){
var self__ = this;
var this__18135__auto____$1 = this;
if(cljs.core.truth_((function (){var and__17513__auto__ = other__18136__auto__;
if(cljs.core.truth_(and__17513__auto__)){
var and__17513__auto____$1 = (this__18135__auto____$1.constructor === other__18136__auto__.constructor);
if(and__17513__auto____$1){
return cljs.core.equiv_map.call(null,this__18135__auto____$1,other__18136__auto__);
} else {
return and__17513__auto____$1;
}
} else {
return and__17513__auto__;
}
})())){
return true;
} else {
return false;
}
});

quantum.core.ns.IllegalArgumentException.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18148__auto__,k__18149__auto__){
var self__ = this;
var this__18148__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",-1386103444),null], null), null),k__18149__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18148__auto____$1),self__.__meta),k__18149__auto__);
} else {
return (new quantum.core.ns.IllegalArgumentException(self__.msg,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18149__auto__)),null));
}
});

quantum.core.ns.IllegalArgumentException.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18146__auto__,k__18147__auto__,G__36790){
var self__ = this;
var this__18146__auto____$1 = this;
var pred__36794 = cljs.core.keyword_identical_QMARK_;
var expr__36795 = k__18147__auto__;
if(cljs.core.truth_(pred__36794.call(null,new cljs.core.Keyword(null,"msg","msg",-1386103444),expr__36795))){
return (new quantum.core.ns.IllegalArgumentException(G__36790,self__.__meta,self__.__extmap,null));
} else {
return (new quantum.core.ns.IllegalArgumentException(self__.msg,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18147__auto__,G__36790),null));
}
});

quantum.core.ns.IllegalArgumentException.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18151__auto__){
var self__ = this;
var this__18151__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"msg","msg",-1386103444),self__.msg],null))], null),self__.__extmap));
});

quantum.core.ns.IllegalArgumentException.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18138__auto__,G__36790){
var self__ = this;
var this__18138__auto____$1 = this;
return (new quantum.core.ns.IllegalArgumentException(self__.msg,G__36790,self__.__extmap,self__.__hash));
});

quantum.core.ns.IllegalArgumentException.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18144__auto__,entry__18145__auto__){
var self__ = this;
var this__18144__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18145__auto__)){
return cljs.core._assoc.call(null,this__18144__auto____$1,cljs.core._nth.call(null,entry__18145__auto__,(0)),cljs.core._nth.call(null,entry__18145__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18144__auto____$1,entry__18145__auto__);
}
});

quantum.core.ns.IllegalArgumentException.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"msg","msg",254428083,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"String","String",-2070057435,null)], null))], null);
});

quantum.core.ns.IllegalArgumentException.cljs$lang$type = true;

quantum.core.ns.IllegalArgumentException.cljs$lang$ctorPrSeq = (function (this__18173__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"quantum.core.ns/IllegalArgumentException");
});

quantum.core.ns.IllegalArgumentException.cljs$lang$ctorPrWriter = (function (this__18173__auto__,writer__18174__auto__){
return cljs.core._write.call(null,writer__18174__auto__,"quantum.core.ns/IllegalArgumentException");
});

quantum.core.ns.__GT_IllegalArgumentException = (function quantum$core$ns$__GT_IllegalArgumentException(msg){
return (new quantum.core.ns.IllegalArgumentException(msg,null,null,null));
});

quantum.core.ns.map__GT_IllegalArgumentException = (function quantum$core$ns$map__GT_IllegalArgumentException(G__36792){
return (new quantum.core.ns.IllegalArgumentException(new cljs.core.Keyword(null,"msg","msg",-1386103444).cljs$core$IFn$_invoke$arity$1(G__36792),null,cljs.core.dissoc.call(null,G__36792,new cljs.core.Keyword(null,"msg","msg",-1386103444)),null));
});


//# sourceMappingURL=ns.js.map?rel=1452702555003