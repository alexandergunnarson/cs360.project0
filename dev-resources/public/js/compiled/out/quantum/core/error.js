// Compiled by ClojureScript 1.7.170 {}

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns log map fn cmacros]
*/
goog.provide('quantum.core.error');
goog.require('cljs.core');
goog.require('clojure.core.rrb_vector');
goog.require('quantum.core.error.try_catch');
goog.require('quantum.core.log');
goog.require('quantum.core.data.map');
goog.require('quantum.core.macros.core');
goog.require('cljs.core');
goog.require('quantum.core.function$');
goog.require('quantum.core.ns');
goog.require('quantum.core.collections.base');
goog.require('clojure.string');

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
quantum.core.error.Err = (function (type,msg,objs,__meta,__extmap,__hash){
this.type = type;
this.msg = msg;
this.objs = objs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
quantum.core.error.Err.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18139__auto__,k__18140__auto__){
var self__ = this;
var this__18139__auto____$1 = this;
return cljs.core._lookup.call(null,this__18139__auto____$1,k__18140__auto__,null);
});

quantum.core.error.Err.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18141__auto__,k44006,else__18142__auto__){
var self__ = this;
var this__18141__auto____$1 = this;
var G__44008 = (((k44006 instanceof cljs.core.Keyword))?k44006.fqn:null);
switch (G__44008) {
case "type":
return self__.type;

break;
case "msg":
return self__.msg;

break;
case "objs":
return self__.objs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k44006,else__18142__auto__);

}
});

quantum.core.error.Err.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18153__auto__,writer__18154__auto__,opts__18155__auto__){
var self__ = this;
var this__18153__auto____$1 = this;
var pr_pair__18156__auto__ = ((function (this__18153__auto____$1){
return (function (keyval__18157__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,cljs.core.pr_writer,""," ","",opts__18155__auto__,keyval__18157__auto__);
});})(this__18153__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,pr_pair__18156__auto__,"#quantum.core.error.Err{",", ","}",opts__18155__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"msg","msg",-1386103444),self__.msg],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"objs","objs",-1810725634),self__.objs],null))], null),self__.__extmap));
});

quantum.core.error.Err.prototype.cljs$core$IIterable$ = true;

quantum.core.error.Err.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44005){
var self__ = this;
var G__44005__$1 = this;
return (new cljs.core.RecordIter((0),G__44005__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"msg","msg",-1386103444),new cljs.core.Keyword(null,"objs","objs",-1810725634)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

quantum.core.error.Err.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18137__auto__){
var self__ = this;
var this__18137__auto____$1 = this;
return self__.__meta;
});

quantum.core.error.Err.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18133__auto__){
var self__ = this;
var this__18133__auto____$1 = this;
return (new quantum.core.error.Err(self__.type,self__.msg,self__.objs,self__.__meta,self__.__extmap,self__.__hash));
});

quantum.core.error.Err.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18143__auto__){
var self__ = this;
var this__18143__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

quantum.core.error.Err.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18134__auto__){
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

quantum.core.error.Err.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18135__auto__,other__18136__auto__){
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

quantum.core.error.Err.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18148__auto__,k__18149__auto__){
var self__ = this;
var this__18148__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"msg","msg",-1386103444),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"objs","objs",-1810725634),null], null), null),k__18149__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18148__auto____$1),self__.__meta),k__18149__auto__);
} else {
return (new quantum.core.error.Err(self__.type,self__.msg,self__.objs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18149__auto__)),null));
}
});

quantum.core.error.Err.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18146__auto__,k__18147__auto__,G__44005){
var self__ = this;
var this__18146__auto____$1 = this;
var pred__44009 = cljs.core.keyword_identical_QMARK_;
var expr__44010 = k__18147__auto__;
if(cljs.core.truth_(pred__44009.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__44010))){
return (new quantum.core.error.Err(G__44005,self__.msg,self__.objs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44009.call(null,new cljs.core.Keyword(null,"msg","msg",-1386103444),expr__44010))){
return (new quantum.core.error.Err(self__.type,G__44005,self__.objs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44009.call(null,new cljs.core.Keyword(null,"objs","objs",-1810725634),expr__44010))){
return (new quantum.core.error.Err(self__.type,self__.msg,G__44005,self__.__meta,self__.__extmap,null));
} else {
return (new quantum.core.error.Err(self__.type,self__.msg,self__.objs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18147__auto__,G__44005),null));
}
}
}
});

quantum.core.error.Err.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18151__auto__){
var self__ = this;
var this__18151__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"msg","msg",-1386103444),self__.msg],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"objs","objs",-1810725634),self__.objs],null))], null),self__.__extmap));
});

quantum.core.error.Err.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18138__auto__,G__44005){
var self__ = this;
var this__18138__auto____$1 = this;
return (new quantum.core.error.Err(self__.type,self__.msg,self__.objs,G__44005,self__.__extmap,self__.__hash));
});

quantum.core.error.Err.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18144__auto__,entry__18145__auto__){
var self__ = this;
var this__18144__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18145__auto__)){
return cljs.core._assoc.call(null,this__18144__auto____$1,cljs.core._nth.call(null,entry__18145__auto__,(0)),cljs.core._nth.call(null,entry__18145__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18144__auto____$1,entry__18145__auto__);
}
});

quantum.core.error.Err.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"msg","msg",254428083,null),new cljs.core.Symbol(null,"objs","objs",-170194107,null)], null);
});

quantum.core.error.Err.cljs$lang$type = true;

quantum.core.error.Err.cljs$lang$ctorPrSeq = (function (this__18173__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"quantum.core.error/Err");
});

quantum.core.error.Err.cljs$lang$ctorPrWriter = (function (this__18173__auto__,writer__18174__auto__){
return cljs.core._write.call(null,writer__18174__auto__,"quantum.core.error/Err");
});

quantum.core.error.__GT_Err = (function quantum$core$error$__GT_Err(type,msg,objs){
return (new quantum.core.error.Err(type,msg,objs,null,null,null));
});

quantum.core.error.map__GT_Err = (function quantum$core$error$map__GT_Err(G__44007){
return (new quantum.core.error.Err(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__44007),new cljs.core.Keyword(null,"msg","msg",-1386103444).cljs$core$IFn$_invoke$arity$1(G__44007),new cljs.core.Keyword(null,"objs","objs",-1810725634).cljs$core$IFn$_invoke$arity$1(G__44007),null,cljs.core.dissoc.call(null,G__44007,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"msg","msg",-1386103444),new cljs.core.Keyword(null,"objs","objs",-1810725634)),null));
});

/**
 * Constructor for |Err|.
 */
quantum.core.error.__GT_err = (function quantum$core$error$__GT_err(var_args){
var args44013 = [];
var len__18583__auto___44016 = arguments.length;
var i__18584__auto___44017 = (0);
while(true){
if((i__18584__auto___44017 < len__18583__auto___44016)){
args44013.push((arguments[i__18584__auto___44017]));

var G__44018 = (i__18584__auto___44017 + (1));
i__18584__auto___44017 = G__44018;
continue;
} else {
}
break;
}

var G__44015 = args44013.length;
switch (G__44015) {
case 1:
return quantum.core.error.__GT_err.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quantum.core.error.__GT_err.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quantum.core.error.__GT_err.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44013.length)].join('')));

}
});

quantum.core.error.__GT_err.cljs$core$IFn$_invoke$arity$1 = (function (type){
if(cljs.core.map_QMARK_.call(null,type)){
return quantum.core.error.map__GT_Err.call(null,type);
} else {
return (new quantum.core.error.Err(type,null,null,null,null,null));
}
});

quantum.core.error.__GT_err.cljs$core$IFn$_invoke$arity$2 = (function (type,msg){
return (new quantum.core.error.Err(type,msg,null,null,null,null));
});

quantum.core.error.__GT_err.cljs$core$IFn$_invoke$arity$3 = (function (type,msg,objs){
return (new quantum.core.error.Err(type,msg,objs,null,null,null));
});

quantum.core.error.__GT_err.cljs$lang$maxFixedArity = 3;
/**
 * Creates an exception.
 */
quantum.core.error.__GT_ex = (function quantum$core$error$__GT_ex(var_args){
var args44020 = [];
var len__18583__auto___44023 = arguments.length;
var i__18584__auto___44024 = (0);
while(true){
if((i__18584__auto___44024 < len__18583__auto___44023)){
args44020.push((arguments[i__18584__auto___44024]));

var G__44025 = (i__18584__auto___44024 + (1));
i__18584__auto___44024 = G__44025;
continue;
} else {
}
break;
}

var G__44022 = args44020.length;
switch (G__44022) {
case 1:
return quantum.core.error.__GT_ex.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quantum.core.error.__GT_ex.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quantum.core.error.__GT_ex.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44020.length)].join('')));

}
});

quantum.core.error.__GT_ex.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cljs.core.ex_info.call(null,type,quantum.core.error.__GT_err.call(null,type));
});

quantum.core.error.__GT_ex.cljs$core$IFn$_invoke$arity$2 = (function (type,msg){
return cljs.core.ex_info.call(null,msg,quantum.core.error.__GT_err.call(null,type,msg));
});

quantum.core.error.__GT_ex.cljs$core$IFn$_invoke$arity$3 = (function (type,msg,objs){
return cljs.core.ex_info.call(null,msg,quantum.core.error.__GT_err.call(null,type,msg,objs));
});

quantum.core.error.__GT_ex.cljs$lang$maxFixedArity = 3;
quantum.core.error.error_QMARK_ = cljs.core.partial.call(null,cljs.core.instance_QMARK_,Error);

//# sourceMappingURL=error.js.map?rel=1452702572606
/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns log map fn cmacros]
*/
