// Compiled by ClojureScript 1.7.170 {}
goog.provide('datascript.pull_parser');
goog.require('cljs.core');
goog.require('datascript.db');

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
datascript.pull_parser.PullSpec = (function (wildcard_QMARK_,attrs,__meta,__extmap,__hash){
this.wildcard_QMARK_ = wildcard_QMARK_;
this.attrs = attrs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.pull_parser.PullSpec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18139__auto__,k__18140__auto__){
var self__ = this;
var this__18139__auto____$1 = this;
return cljs.core._lookup.call(null,this__18139__auto____$1,k__18140__auto__,null);
});

datascript.pull_parser.PullSpec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18141__auto__,k45061,else__18142__auto__){
var self__ = this;
var this__18141__auto____$1 = this;
var G__45063 = (((k45061 instanceof cljs.core.Keyword))?k45061.fqn:null);
switch (G__45063) {
case "wildcard?":
return self__.wildcard_QMARK_;

break;
case "attrs":
return self__.attrs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k45061,else__18142__auto__);

}
});

datascript.pull_parser.PullSpec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18153__auto__,writer__18154__auto__,opts__18155__auto__){
var self__ = this;
var this__18153__auto____$1 = this;
var pr_pair__18156__auto__ = ((function (this__18153__auto____$1){
return (function (keyval__18157__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,cljs.core.pr_writer,""," ","",opts__18155__auto__,keyval__18157__auto__);
});})(this__18153__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,pr_pair__18156__auto__,"#datascript.pull-parser.PullSpec{",", ","}",opts__18155__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),self__.wildcard_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs],null))], null),self__.__extmap));
});

datascript.pull_parser.PullSpec.prototype.cljs$core$IIterable$ = true;

datascript.pull_parser.PullSpec.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45060){
var self__ = this;
var G__45060__$1 = this;
return (new cljs.core.RecordIter((0),G__45060__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),new cljs.core.Keyword(null,"attrs","attrs",-2090668713)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.pull_parser.PullSpec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18137__auto__){
var self__ = this;
var this__18137__auto____$1 = this;
return self__.__meta;
});

datascript.pull_parser.PullSpec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18133__auto__){
var self__ = this;
var this__18133__auto____$1 = this;
return (new datascript.pull_parser.PullSpec(self__.wildcard_QMARK_,self__.attrs,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullSpec.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18143__auto__){
var self__ = this;
var this__18143__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.pull_parser.PullSpec.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18134__auto__){
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

datascript.pull_parser.PullSpec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18135__auto__,other__18136__auto__){
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

datascript.pull_parser.PullSpec.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18148__auto__,k__18149__auto__){
var self__ = this;
var this__18148__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),null,new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),null], null), null),k__18149__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18148__auto____$1),self__.__meta),k__18149__auto__);
} else {
return (new datascript.pull_parser.PullSpec(self__.wildcard_QMARK_,self__.attrs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18149__auto__)),null));
}
});

datascript.pull_parser.PullSpec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18146__auto__,k__18147__auto__,G__45060){
var self__ = this;
var this__18146__auto____$1 = this;
var pred__45064 = cljs.core.keyword_identical_QMARK_;
var expr__45065 = k__18147__auto__;
if(cljs.core.truth_(pred__45064.call(null,new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),expr__45065))){
return (new datascript.pull_parser.PullSpec(G__45060,self__.attrs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__45064.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__45065))){
return (new datascript.pull_parser.PullSpec(self__.wildcard_QMARK_,G__45060,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_parser.PullSpec(self__.wildcard_QMARK_,self__.attrs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18147__auto__,G__45060),null));
}
}
});

datascript.pull_parser.PullSpec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18151__auto__){
var self__ = this;
var this__18151__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),self__.wildcard_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs],null))], null),self__.__extmap));
});

datascript.pull_parser.PullSpec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18138__auto__,G__45060){
var self__ = this;
var this__18138__auto____$1 = this;
return (new datascript.pull_parser.PullSpec(self__.wildcard_QMARK_,self__.attrs,G__45060,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullSpec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18144__auto__,entry__18145__auto__){
var self__ = this;
var this__18144__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18145__auto__)){
return cljs.core._assoc.call(null,this__18144__auto____$1,cljs.core._nth.call(null,entry__18145__auto__,(0)),cljs.core._nth.call(null,entry__18145__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18144__auto____$1,entry__18145__auto__);
}
});

datascript.pull_parser.PullSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"wildcard?","wildcard?",954487426,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null)], null);
});

datascript.pull_parser.PullSpec.cljs$lang$type = true;

datascript.pull_parser.PullSpec.cljs$lang$ctorPrSeq = (function (this__18173__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.pull-parser/PullSpec");
});

datascript.pull_parser.PullSpec.cljs$lang$ctorPrWriter = (function (this__18173__auto__,writer__18174__auto__){
return cljs.core._write.call(null,writer__18174__auto__,"datascript.pull-parser/PullSpec");
});

datascript.pull_parser.__GT_PullSpec = (function datascript$pull_parser$__GT_PullSpec(wildcard_QMARK_,attrs){
return (new datascript.pull_parser.PullSpec(wildcard_QMARK_,attrs,null,null,null));
});

datascript.pull_parser.map__GT_PullSpec = (function datascript$pull_parser$map__GT_PullSpec(G__45062){
return (new datascript.pull_parser.PullSpec(new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101).cljs$core$IFn$_invoke$arity$1(G__45062),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(G__45062),null,cljs.core.dissoc.call(null,G__45062,new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),new cljs.core.Keyword(null,"attrs","attrs",-2090668713)),null));
});


/**
 * @interface
 */
datascript.pull_parser.IPullSpecComponent = function(){};

datascript.pull_parser._as_spec = (function datascript$pull_parser$_as_spec(this$){
if((!((this$ == null))) && (!((this$.datascript$pull_parser$IPullSpecComponent$_as_spec$arity$1 == null)))){
return this$.datascript$pull_parser$IPullSpecComponent$_as_spec$arity$1(this$);
} else {
var x__18180__auto__ = (((this$ == null))?null:this$);
var m__18181__auto__ = (datascript.pull_parser._as_spec[goog.typeOf(x__18180__auto__)]);
if(!((m__18181__auto__ == null))){
return m__18181__auto__.call(null,this$);
} else {
var m__18181__auto____$1 = (datascript.pull_parser._as_spec["_"]);
if(!((m__18181__auto____$1 == null))){
return m__18181__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IPullSpecComponent.-as-spec",this$);
}
}
}
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
 * @implements {datascript.pull_parser.IPullSpecComponent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.pull_parser.PullAttrName = (function (attr,__meta,__extmap,__hash){
this.attr = attr;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.pull_parser.PullAttrName.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18139__auto__,k__18140__auto__){
var self__ = this;
var this__18139__auto____$1 = this;
return cljs.core._lookup.call(null,this__18139__auto____$1,k__18140__auto__,null);
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18141__auto__,k45069,else__18142__auto__){
var self__ = this;
var this__18141__auto____$1 = this;
var G__45071 = (((k45069 instanceof cljs.core.Keyword))?k45069.fqn:null);
switch (G__45071) {
case "attr":
return self__.attr;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k45069,else__18142__auto__);

}
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18153__auto__,writer__18154__auto__,opts__18155__auto__){
var self__ = this;
var this__18153__auto____$1 = this;
var pr_pair__18156__auto__ = ((function (this__18153__auto____$1){
return (function (keyval__18157__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,cljs.core.pr_writer,""," ","",opts__18155__auto__,keyval__18157__auto__);
});})(this__18153__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,pr_pair__18156__auto__,"#datascript.pull-parser.PullAttrName{",", ","}",opts__18155__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr],null))], null),self__.__extmap));
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$IIterable$ = true;

datascript.pull_parser.PullAttrName.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45068){
var self__ = this;
var G__45068__$1 = this;
return (new cljs.core.RecordIter((0),G__45068__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18137__auto__){
var self__ = this;
var this__18137__auto____$1 = this;
return self__.__meta;
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18133__auto__){
var self__ = this;
var this__18133__auto____$1 = this;
return (new datascript.pull_parser.PullAttrName(self__.attr,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18143__auto__){
var self__ = this;
var this__18143__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18134__auto__){
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

datascript.pull_parser.PullAttrName.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18135__auto__,other__18136__auto__){
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

datascript.pull_parser.PullAttrName.prototype.datascript$pull_parser$IPullSpecComponent$ = true;

datascript.pull_parser.PullAttrName.prototype.datascript$pull_parser$IPullSpecComponent$_as_spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr], null)], null);
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18148__auto__,k__18149__auto__){
var self__ = this;
var this__18148__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attr","attr",-604132353),null], null), null),k__18149__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18148__auto____$1),self__.__meta),k__18149__auto__);
} else {
return (new datascript.pull_parser.PullAttrName(self__.attr,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18149__auto__)),null));
}
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18146__auto__,k__18147__auto__,G__45068){
var self__ = this;
var this__18146__auto____$1 = this;
var pred__45072 = cljs.core.keyword_identical_QMARK_;
var expr__45073 = k__18147__auto__;
if(cljs.core.truth_(pred__45072.call(null,new cljs.core.Keyword(null,"attr","attr",-604132353),expr__45073))){
return (new datascript.pull_parser.PullAttrName(G__45068,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_parser.PullAttrName(self__.attr,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18147__auto__,G__45068),null));
}
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18151__auto__){
var self__ = this;
var this__18151__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr],null))], null),self__.__extmap));
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18138__auto__,G__45068){
var self__ = this;
var this__18138__auto____$1 = this;
return (new datascript.pull_parser.PullAttrName(self__.attr,G__45068,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18144__auto__,entry__18145__auto__){
var self__ = this;
var this__18144__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18145__auto__)){
return cljs.core._assoc.call(null,this__18144__auto____$1,cljs.core._nth.call(null,entry__18145__auto__,(0)),cljs.core._nth.call(null,entry__18145__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18144__auto____$1,entry__18145__auto__);
}
});

datascript.pull_parser.PullAttrName.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null)], null);
});

datascript.pull_parser.PullAttrName.cljs$lang$type = true;

datascript.pull_parser.PullAttrName.cljs$lang$ctorPrSeq = (function (this__18173__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.pull-parser/PullAttrName");
});

datascript.pull_parser.PullAttrName.cljs$lang$ctorPrWriter = (function (this__18173__auto__,writer__18174__auto__){
return cljs.core._write.call(null,writer__18174__auto__,"datascript.pull-parser/PullAttrName");
});

datascript.pull_parser.__GT_PullAttrName = (function datascript$pull_parser$__GT_PullAttrName(attr){
return (new datascript.pull_parser.PullAttrName(attr,null,null,null));
});

datascript.pull_parser.map__GT_PullAttrName = (function datascript$pull_parser$map__GT_PullAttrName(G__45070){
return (new datascript.pull_parser.PullAttrName(new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(G__45070),null,cljs.core.dissoc.call(null,G__45070,new cljs.core.Keyword(null,"attr","attr",-604132353)),null));
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
 * @implements {datascript.pull_parser.IPullSpecComponent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.pull_parser.PullReverseAttrName = (function (attr,rattr,__meta,__extmap,__hash){
this.attr = attr;
this.rattr = rattr;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18139__auto__,k__18140__auto__){
var self__ = this;
var this__18139__auto____$1 = this;
return cljs.core._lookup.call(null,this__18139__auto____$1,k__18140__auto__,null);
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18141__auto__,k45077,else__18142__auto__){
var self__ = this;
var this__18141__auto____$1 = this;
var G__45079 = (((k45077 instanceof cljs.core.Keyword))?k45077.fqn:null);
switch (G__45079) {
case "attr":
return self__.attr;

break;
case "rattr":
return self__.rattr;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k45077,else__18142__auto__);

}
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18153__auto__,writer__18154__auto__,opts__18155__auto__){
var self__ = this;
var this__18153__auto____$1 = this;
var pr_pair__18156__auto__ = ((function (this__18153__auto____$1){
return (function (keyval__18157__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,cljs.core.pr_writer,""," ","",opts__18155__auto__,keyval__18157__auto__);
});})(this__18153__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,pr_pair__18156__auto__,"#datascript.pull-parser.PullReverseAttrName{",", ","}",opts__18155__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rattr","rattr",-1122345563),self__.rattr],null))], null),self__.__extmap));
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$IIterable$ = true;

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45076){
var self__ = this;
var G__45076__$1 = this;
return (new cljs.core.RecordIter((0),G__45076__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"rattr","rattr",-1122345563)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18137__auto__){
var self__ = this;
var this__18137__auto____$1 = this;
return self__.__meta;
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18133__auto__){
var self__ = this;
var this__18133__auto____$1 = this;
return (new datascript.pull_parser.PullReverseAttrName(self__.attr,self__.rattr,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18143__auto__){
var self__ = this;
var this__18143__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18134__auto__){
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

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18135__auto__,other__18136__auto__){
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

datascript.pull_parser.PullReverseAttrName.prototype.datascript$pull_parser$IPullSpecComponent$ = true;

datascript.pull_parser.PullReverseAttrName.prototype.datascript$pull_parser$IPullSpecComponent$_as_spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.rattr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr], null)], null);
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18148__auto__,k__18149__auto__){
var self__ = this;
var this__18148__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rattr","rattr",-1122345563),null,new cljs.core.Keyword(null,"attr","attr",-604132353),null], null), null),k__18149__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18148__auto____$1),self__.__meta),k__18149__auto__);
} else {
return (new datascript.pull_parser.PullReverseAttrName(self__.attr,self__.rattr,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18149__auto__)),null));
}
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18146__auto__,k__18147__auto__,G__45076){
var self__ = this;
var this__18146__auto____$1 = this;
var pred__45080 = cljs.core.keyword_identical_QMARK_;
var expr__45081 = k__18147__auto__;
if(cljs.core.truth_(pred__45080.call(null,new cljs.core.Keyword(null,"attr","attr",-604132353),expr__45081))){
return (new datascript.pull_parser.PullReverseAttrName(G__45076,self__.rattr,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__45080.call(null,new cljs.core.Keyword(null,"rattr","rattr",-1122345563),expr__45081))){
return (new datascript.pull_parser.PullReverseAttrName(self__.attr,G__45076,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_parser.PullReverseAttrName(self__.attr,self__.rattr,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18147__auto__,G__45076),null));
}
}
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18151__auto__){
var self__ = this;
var this__18151__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rattr","rattr",-1122345563),self__.rattr],null))], null),self__.__extmap));
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18138__auto__,G__45076){
var self__ = this;
var this__18138__auto____$1 = this;
return (new datascript.pull_parser.PullReverseAttrName(self__.attr,self__.rattr,G__45076,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18144__auto__,entry__18145__auto__){
var self__ = this;
var this__18144__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18145__auto__)){
return cljs.core._assoc.call(null,this__18144__auto____$1,cljs.core._nth.call(null,entry__18145__auto__,(0)),cljs.core._nth.call(null,entry__18145__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18144__auto____$1,entry__18145__auto__);
}
});

datascript.pull_parser.PullReverseAttrName.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"rattr","rattr",518185964,null)], null);
});

datascript.pull_parser.PullReverseAttrName.cljs$lang$type = true;

datascript.pull_parser.PullReverseAttrName.cljs$lang$ctorPrSeq = (function (this__18173__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.pull-parser/PullReverseAttrName");
});

datascript.pull_parser.PullReverseAttrName.cljs$lang$ctorPrWriter = (function (this__18173__auto__,writer__18174__auto__){
return cljs.core._write.call(null,writer__18174__auto__,"datascript.pull-parser/PullReverseAttrName");
});

datascript.pull_parser.__GT_PullReverseAttrName = (function datascript$pull_parser$__GT_PullReverseAttrName(attr,rattr){
return (new datascript.pull_parser.PullReverseAttrName(attr,rattr,null,null,null));
});

datascript.pull_parser.map__GT_PullReverseAttrName = (function datascript$pull_parser$map__GT_PullReverseAttrName(G__45078){
return (new datascript.pull_parser.PullReverseAttrName(new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(G__45078),new cljs.core.Keyword(null,"rattr","rattr",-1122345563).cljs$core$IFn$_invoke$arity$1(G__45078),null,cljs.core.dissoc.call(null,G__45078,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"rattr","rattr",-1122345563)),null));
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
 * @implements {datascript.pull_parser.IPullSpecComponent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.pull_parser.PullLimitExpr = (function (attr,limit,__meta,__extmap,__hash){
this.attr = attr;
this.limit = limit;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.pull_parser.PullLimitExpr.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18139__auto__,k__18140__auto__){
var self__ = this;
var this__18139__auto____$1 = this;
return cljs.core._lookup.call(null,this__18139__auto____$1,k__18140__auto__,null);
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18141__auto__,k45085,else__18142__auto__){
var self__ = this;
var this__18141__auto____$1 = this;
var G__45087 = (((k45085 instanceof cljs.core.Keyword))?k45085.fqn:null);
switch (G__45087) {
case "attr":
return self__.attr;

break;
case "limit":
return self__.limit;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k45085,else__18142__auto__);

}
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18153__auto__,writer__18154__auto__,opts__18155__auto__){
var self__ = this;
var this__18153__auto____$1 = this;
var pr_pair__18156__auto__ = ((function (this__18153__auto____$1){
return (function (keyval__18157__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,cljs.core.pr_writer,""," ","",opts__18155__auto__,keyval__18157__auto__);
});})(this__18153__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,pr_pair__18156__auto__,"#datascript.pull-parser.PullLimitExpr{",", ","}",opts__18155__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"limit","limit",-1355822363),self__.limit],null))], null),self__.__extmap));
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$IIterable$ = true;

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45084){
var self__ = this;
var G__45084__$1 = this;
return (new cljs.core.RecordIter((0),G__45084__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"limit","limit",-1355822363)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18137__auto__){
var self__ = this;
var this__18137__auto____$1 = this;
return self__.__meta;
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18133__auto__){
var self__ = this;
var this__18133__auto____$1 = this;
return (new datascript.pull_parser.PullLimitExpr(self__.attr,self__.limit,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18143__auto__){
var self__ = this;
var this__18143__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18134__auto__){
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

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18135__auto__,other__18136__auto__){
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

datascript.pull_parser.PullLimitExpr.prototype.datascript$pull_parser$IPullSpecComponent$ = true;

datascript.pull_parser.PullLimitExpr.prototype.datascript$pull_parser$IPullSpecComponent$_as_spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc_in.call(null,datascript.pull_parser._as_spec.call(null,self__.attr),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"limit","limit",-1355822363)], null),self__.limit);
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18148__auto__,k__18149__auto__){
var self__ = this;
var this__18148__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"limit","limit",-1355822363),null,new cljs.core.Keyword(null,"attr","attr",-604132353),null], null), null),k__18149__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18148__auto____$1),self__.__meta),k__18149__auto__);
} else {
return (new datascript.pull_parser.PullLimitExpr(self__.attr,self__.limit,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18149__auto__)),null));
}
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18146__auto__,k__18147__auto__,G__45084){
var self__ = this;
var this__18146__auto____$1 = this;
var pred__45088 = cljs.core.keyword_identical_QMARK_;
var expr__45089 = k__18147__auto__;
if(cljs.core.truth_(pred__45088.call(null,new cljs.core.Keyword(null,"attr","attr",-604132353),expr__45089))){
return (new datascript.pull_parser.PullLimitExpr(G__45084,self__.limit,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__45088.call(null,new cljs.core.Keyword(null,"limit","limit",-1355822363),expr__45089))){
return (new datascript.pull_parser.PullLimitExpr(self__.attr,G__45084,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_parser.PullLimitExpr(self__.attr,self__.limit,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18147__auto__,G__45084),null));
}
}
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18151__auto__){
var self__ = this;
var this__18151__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"limit","limit",-1355822363),self__.limit],null))], null),self__.__extmap));
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18138__auto__,G__45084){
var self__ = this;
var this__18138__auto____$1 = this;
return (new datascript.pull_parser.PullLimitExpr(self__.attr,self__.limit,G__45084,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18144__auto__,entry__18145__auto__){
var self__ = this;
var this__18144__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18145__auto__)){
return cljs.core._assoc.call(null,this__18144__auto____$1,cljs.core._nth.call(null,entry__18145__auto__,(0)),cljs.core._nth.call(null,entry__18145__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18144__auto____$1,entry__18145__auto__);
}
});

datascript.pull_parser.PullLimitExpr.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"limit","limit",284709164,null)], null);
});

datascript.pull_parser.PullLimitExpr.cljs$lang$type = true;

datascript.pull_parser.PullLimitExpr.cljs$lang$ctorPrSeq = (function (this__18173__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.pull-parser/PullLimitExpr");
});

datascript.pull_parser.PullLimitExpr.cljs$lang$ctorPrWriter = (function (this__18173__auto__,writer__18174__auto__){
return cljs.core._write.call(null,writer__18174__auto__,"datascript.pull-parser/PullLimitExpr");
});

datascript.pull_parser.__GT_PullLimitExpr = (function datascript$pull_parser$__GT_PullLimitExpr(attr,limit){
return (new datascript.pull_parser.PullLimitExpr(attr,limit,null,null,null));
});

datascript.pull_parser.map__GT_PullLimitExpr = (function datascript$pull_parser$map__GT_PullLimitExpr(G__45086){
return (new datascript.pull_parser.PullLimitExpr(new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(G__45086),new cljs.core.Keyword(null,"limit","limit",-1355822363).cljs$core$IFn$_invoke$arity$1(G__45086),null,cljs.core.dissoc.call(null,G__45086,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"limit","limit",-1355822363)),null));
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
 * @implements {datascript.pull_parser.IPullSpecComponent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.pull_parser.PullDefaultExpr = (function (attr,value,__meta,__extmap,__hash){
this.attr = attr;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18139__auto__,k__18140__auto__){
var self__ = this;
var this__18139__auto____$1 = this;
return cljs.core._lookup.call(null,this__18139__auto____$1,k__18140__auto__,null);
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18141__auto__,k45093,else__18142__auto__){
var self__ = this;
var this__18141__auto____$1 = this;
var G__45095 = (((k45093 instanceof cljs.core.Keyword))?k45093.fqn:null);
switch (G__45095) {
case "attr":
return self__.attr;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k45093,else__18142__auto__);

}
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18153__auto__,writer__18154__auto__,opts__18155__auto__){
var self__ = this;
var this__18153__auto____$1 = this;
var pr_pair__18156__auto__ = ((function (this__18153__auto____$1){
return (function (keyval__18157__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,cljs.core.pr_writer,""," ","",opts__18155__auto__,keyval__18157__auto__);
});})(this__18153__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,pr_pair__18156__auto__,"#datascript.pull-parser.PullDefaultExpr{",", ","}",opts__18155__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$IIterable$ = true;

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45092){
var self__ = this;
var G__45092__$1 = this;
return (new cljs.core.RecordIter((0),G__45092__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"value","value",305978217)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18137__auto__){
var self__ = this;
var this__18137__auto____$1 = this;
return self__.__meta;
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18133__auto__){
var self__ = this;
var this__18133__auto____$1 = this;
return (new datascript.pull_parser.PullDefaultExpr(self__.attr,self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18143__auto__){
var self__ = this;
var this__18143__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18134__auto__){
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

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18135__auto__,other__18136__auto__){
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

datascript.pull_parser.PullDefaultExpr.prototype.datascript$pull_parser$IPullSpecComponent$ = true;

datascript.pull_parser.PullDefaultExpr.prototype.datascript$pull_parser$IPullSpecComponent$_as_spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc_in.call(null,datascript.pull_parser._as_spec.call(null,self__.attr),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"default","default",-1987822328)], null),self__.value);
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18148__auto__,k__18149__auto__){
var self__ = this;
var this__18148__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"attr","attr",-604132353),null], null), null),k__18149__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18148__auto____$1),self__.__meta),k__18149__auto__);
} else {
return (new datascript.pull_parser.PullDefaultExpr(self__.attr,self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18149__auto__)),null));
}
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18146__auto__,k__18147__auto__,G__45092){
var self__ = this;
var this__18146__auto____$1 = this;
var pred__45096 = cljs.core.keyword_identical_QMARK_;
var expr__45097 = k__18147__auto__;
if(cljs.core.truth_(pred__45096.call(null,new cljs.core.Keyword(null,"attr","attr",-604132353),expr__45097))){
return (new datascript.pull_parser.PullDefaultExpr(G__45092,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__45096.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__45097))){
return (new datascript.pull_parser.PullDefaultExpr(self__.attr,G__45092,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_parser.PullDefaultExpr(self__.attr,self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18147__auto__,G__45092),null));
}
}
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18151__auto__){
var self__ = this;
var this__18151__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18138__auto__,G__45092){
var self__ = this;
var this__18138__auto____$1 = this;
return (new datascript.pull_parser.PullDefaultExpr(self__.attr,self__.value,G__45092,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18144__auto__,entry__18145__auto__){
var self__ = this;
var this__18144__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18145__auto__)){
return cljs.core._assoc.call(null,this__18144__auto____$1,cljs.core._nth.call(null,entry__18145__auto__,(0)),cljs.core._nth.call(null,entry__18145__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18144__auto____$1,entry__18145__auto__);
}
});

datascript.pull_parser.PullDefaultExpr.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

datascript.pull_parser.PullDefaultExpr.cljs$lang$type = true;

datascript.pull_parser.PullDefaultExpr.cljs$lang$ctorPrSeq = (function (this__18173__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.pull-parser/PullDefaultExpr");
});

datascript.pull_parser.PullDefaultExpr.cljs$lang$ctorPrWriter = (function (this__18173__auto__,writer__18174__auto__){
return cljs.core._write.call(null,writer__18174__auto__,"datascript.pull-parser/PullDefaultExpr");
});

datascript.pull_parser.__GT_PullDefaultExpr = (function datascript$pull_parser$__GT_PullDefaultExpr(attr,value){
return (new datascript.pull_parser.PullDefaultExpr(attr,value,null,null,null));
});

datascript.pull_parser.map__GT_PullDefaultExpr = (function datascript$pull_parser$map__GT_PullDefaultExpr(G__45094){
return (new datascript.pull_parser.PullDefaultExpr(new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(G__45094),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__45094),null,cljs.core.dissoc.call(null,G__45094,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"value","value",305978217)),null));
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
datascript.pull_parser.PullWildcard = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.pull_parser.PullWildcard.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18139__auto__,k__18140__auto__){
var self__ = this;
var this__18139__auto____$1 = this;
return cljs.core._lookup.call(null,this__18139__auto____$1,k__18140__auto__,null);
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18141__auto__,k45101,else__18142__auto__){
var self__ = this;
var this__18141__auto____$1 = this;
var G__45103 = k45101;
switch (G__45103) {
default:
return cljs.core.get.call(null,self__.__extmap,k45101,else__18142__auto__);

}
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18153__auto__,writer__18154__auto__,opts__18155__auto__){
var self__ = this;
var this__18153__auto____$1 = this;
var pr_pair__18156__auto__ = ((function (this__18153__auto____$1){
return (function (keyval__18157__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,cljs.core.pr_writer,""," ","",opts__18155__auto__,keyval__18157__auto__);
});})(this__18153__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,pr_pair__18156__auto__,"#datascript.pull-parser.PullWildcard{",", ","}",opts__18155__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$IIterable$ = true;

datascript.pull_parser.PullWildcard.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45100){
var self__ = this;
var G__45100__$1 = this;
return (new cljs.core.RecordIter((0),G__45100__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18137__auto__){
var self__ = this;
var this__18137__auto____$1 = this;
return self__.__meta;
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18133__auto__){
var self__ = this;
var this__18133__auto____$1 = this;
return (new datascript.pull_parser.PullWildcard(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18143__auto__){
var self__ = this;
var this__18143__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18134__auto__){
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

datascript.pull_parser.PullWildcard.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18135__auto__,other__18136__auto__){
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

datascript.pull_parser.PullWildcard.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18148__auto__,k__18149__auto__){
var self__ = this;
var this__18148__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__18149__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18148__auto____$1),self__.__meta),k__18149__auto__);
} else {
return (new datascript.pull_parser.PullWildcard(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18149__auto__)),null));
}
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18146__auto__,k__18147__auto__,G__45100){
var self__ = this;
var this__18146__auto____$1 = this;
var pred__45104 = cljs.core.keyword_identical_QMARK_;
var expr__45105 = k__18147__auto__;
return (new datascript.pull_parser.PullWildcard(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18147__auto__,G__45100),null));
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18151__auto__){
var self__ = this;
var this__18151__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18138__auto__,G__45100){
var self__ = this;
var this__18138__auto____$1 = this;
return (new datascript.pull_parser.PullWildcard(G__45100,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18144__auto__,entry__18145__auto__){
var self__ = this;
var this__18144__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18145__auto__)){
return cljs.core._assoc.call(null,this__18144__auto____$1,cljs.core._nth.call(null,entry__18145__auto__,(0)),cljs.core._nth.call(null,entry__18145__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18144__auto____$1,entry__18145__auto__);
}
});

datascript.pull_parser.PullWildcard.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.pull_parser.PullWildcard.cljs$lang$type = true;

datascript.pull_parser.PullWildcard.cljs$lang$ctorPrSeq = (function (this__18173__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.pull-parser/PullWildcard");
});

datascript.pull_parser.PullWildcard.cljs$lang$ctorPrWriter = (function (this__18173__auto__,writer__18174__auto__){
return cljs.core._write.call(null,writer__18174__auto__,"datascript.pull-parser/PullWildcard");
});

datascript.pull_parser.__GT_PullWildcard = (function datascript$pull_parser$__GT_PullWildcard(){
return (new datascript.pull_parser.PullWildcard(null,null,null));
});

datascript.pull_parser.map__GT_PullWildcard = (function datascript$pull_parser$map__GT_PullWildcard(G__45102){
return (new datascript.pull_parser.PullWildcard(null,cljs.core.dissoc.call(null,G__45102),null));
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
 * @implements {datascript.pull_parser.IPullSpecComponent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.pull_parser.PullRecursionLimit = (function (limit,__meta,__extmap,__hash){
this.limit = limit;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18139__auto__,k__18140__auto__){
var self__ = this;
var this__18139__auto____$1 = this;
return cljs.core._lookup.call(null,this__18139__auto____$1,k__18140__auto__,null);
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18141__auto__,k45109,else__18142__auto__){
var self__ = this;
var this__18141__auto____$1 = this;
var G__45111 = (((k45109 instanceof cljs.core.Keyword))?k45109.fqn:null);
switch (G__45111) {
case "limit":
return self__.limit;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k45109,else__18142__auto__);

}
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18153__auto__,writer__18154__auto__,opts__18155__auto__){
var self__ = this;
var this__18153__auto____$1 = this;
var pr_pair__18156__auto__ = ((function (this__18153__auto____$1){
return (function (keyval__18157__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,cljs.core.pr_writer,""," ","",opts__18155__auto__,keyval__18157__auto__);
});})(this__18153__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,pr_pair__18156__auto__,"#datascript.pull-parser.PullRecursionLimit{",", ","}",opts__18155__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"limit","limit",-1355822363),self__.limit],null))], null),self__.__extmap));
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$IIterable$ = true;

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45108){
var self__ = this;
var G__45108__$1 = this;
return (new cljs.core.RecordIter((0),G__45108__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"limit","limit",-1355822363)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18137__auto__){
var self__ = this;
var this__18137__auto____$1 = this;
return self__.__meta;
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18133__auto__){
var self__ = this;
var this__18133__auto____$1 = this;
return (new datascript.pull_parser.PullRecursionLimit(self__.limit,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18143__auto__){
var self__ = this;
var this__18143__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18134__auto__){
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

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18135__auto__,other__18136__auto__){
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

datascript.pull_parser.PullRecursionLimit.prototype.datascript$pull_parser$IPullSpecComponent$ = true;

datascript.pull_parser.PullRecursionLimit.prototype.datascript$pull_parser$IPullSpecComponent$_as_spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recursion","recursion",-749738765),self__.limit], null);
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18148__auto__,k__18149__auto__){
var self__ = this;
var this__18148__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"limit","limit",-1355822363),null], null), null),k__18149__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18148__auto____$1),self__.__meta),k__18149__auto__);
} else {
return (new datascript.pull_parser.PullRecursionLimit(self__.limit,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18149__auto__)),null));
}
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18146__auto__,k__18147__auto__,G__45108){
var self__ = this;
var this__18146__auto____$1 = this;
var pred__45112 = cljs.core.keyword_identical_QMARK_;
var expr__45113 = k__18147__auto__;
if(cljs.core.truth_(pred__45112.call(null,new cljs.core.Keyword(null,"limit","limit",-1355822363),expr__45113))){
return (new datascript.pull_parser.PullRecursionLimit(G__45108,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_parser.PullRecursionLimit(self__.limit,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18147__auto__,G__45108),null));
}
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18151__auto__){
var self__ = this;
var this__18151__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"limit","limit",-1355822363),self__.limit],null))], null),self__.__extmap));
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18138__auto__,G__45108){
var self__ = this;
var this__18138__auto____$1 = this;
return (new datascript.pull_parser.PullRecursionLimit(self__.limit,G__45108,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18144__auto__,entry__18145__auto__){
var self__ = this;
var this__18144__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18145__auto__)){
return cljs.core._assoc.call(null,this__18144__auto____$1,cljs.core._nth.call(null,entry__18145__auto__,(0)),cljs.core._nth.call(null,entry__18145__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18144__auto____$1,entry__18145__auto__);
}
});

datascript.pull_parser.PullRecursionLimit.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"limit","limit",284709164,null)], null);
});

datascript.pull_parser.PullRecursionLimit.cljs$lang$type = true;

datascript.pull_parser.PullRecursionLimit.cljs$lang$ctorPrSeq = (function (this__18173__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.pull-parser/PullRecursionLimit");
});

datascript.pull_parser.PullRecursionLimit.cljs$lang$ctorPrWriter = (function (this__18173__auto__,writer__18174__auto__){
return cljs.core._write.call(null,writer__18174__auto__,"datascript.pull-parser/PullRecursionLimit");
});

datascript.pull_parser.__GT_PullRecursionLimit = (function datascript$pull_parser$__GT_PullRecursionLimit(limit){
return (new datascript.pull_parser.PullRecursionLimit(limit,null,null,null));
});

datascript.pull_parser.map__GT_PullRecursionLimit = (function datascript$pull_parser$map__GT_PullRecursionLimit(G__45110){
return (new datascript.pull_parser.PullRecursionLimit(new cljs.core.Keyword(null,"limit","limit",-1355822363).cljs$core$IFn$_invoke$arity$1(G__45110),null,cljs.core.dissoc.call(null,G__45110,new cljs.core.Keyword(null,"limit","limit",-1355822363)),null));
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
 * @implements {datascript.pull_parser.IPullSpecComponent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.pull_parser.PullMapSpecEntry = (function (attr,porrl,__meta,__extmap,__hash){
this.attr = attr;
this.porrl = porrl;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18139__auto__,k__18140__auto__){
var self__ = this;
var this__18139__auto____$1 = this;
return cljs.core._lookup.call(null,this__18139__auto____$1,k__18140__auto__,null);
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18141__auto__,k45117,else__18142__auto__){
var self__ = this;
var this__18141__auto____$1 = this;
var G__45119 = (((k45117 instanceof cljs.core.Keyword))?k45117.fqn:null);
switch (G__45119) {
case "attr":
return self__.attr;

break;
case "porrl":
return self__.porrl;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k45117,else__18142__auto__);

}
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18153__auto__,writer__18154__auto__,opts__18155__auto__){
var self__ = this;
var this__18153__auto____$1 = this;
var pr_pair__18156__auto__ = ((function (this__18153__auto____$1){
return (function (keyval__18157__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,cljs.core.pr_writer,""," ","",opts__18155__auto__,keyval__18157__auto__);
});})(this__18153__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,pr_pair__18156__auto__,"#datascript.pull-parser.PullMapSpecEntry{",", ","}",opts__18155__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"porrl","porrl",-1693905102),self__.porrl],null))], null),self__.__extmap));
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$IIterable$ = true;

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45116){
var self__ = this;
var G__45116__$1 = this;
return (new cljs.core.RecordIter((0),G__45116__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"porrl","porrl",-1693905102)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18137__auto__){
var self__ = this;
var this__18137__auto____$1 = this;
return self__.__meta;
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18133__auto__){
var self__ = this;
var this__18133__auto____$1 = this;
return (new datascript.pull_parser.PullMapSpecEntry(self__.attr,self__.porrl,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18143__auto__){
var self__ = this;
var this__18143__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18134__auto__){
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

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18135__auto__,other__18136__auto__){
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

datascript.pull_parser.PullMapSpecEntry.prototype.datascript$pull_parser$IPullSpecComponent$ = true;

datascript.pull_parser.PullMapSpecEntry.prototype.datascript$pull_parser$IPullSpecComponent$_as_spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.update.call(null,datascript.pull_parser._as_spec.call(null,self__.attr),(1),cljs.core.conj,datascript.pull_parser._as_spec.call(null,self__.porrl));
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18148__auto__,k__18149__auto__){
var self__ = this;
var this__18148__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"porrl","porrl",-1693905102),null,new cljs.core.Keyword(null,"attr","attr",-604132353),null], null), null),k__18149__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18148__auto____$1),self__.__meta),k__18149__auto__);
} else {
return (new datascript.pull_parser.PullMapSpecEntry(self__.attr,self__.porrl,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18149__auto__)),null));
}
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18146__auto__,k__18147__auto__,G__45116){
var self__ = this;
var this__18146__auto____$1 = this;
var pred__45120 = cljs.core.keyword_identical_QMARK_;
var expr__45121 = k__18147__auto__;
if(cljs.core.truth_(pred__45120.call(null,new cljs.core.Keyword(null,"attr","attr",-604132353),expr__45121))){
return (new datascript.pull_parser.PullMapSpecEntry(G__45116,self__.porrl,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__45120.call(null,new cljs.core.Keyword(null,"porrl","porrl",-1693905102),expr__45121))){
return (new datascript.pull_parser.PullMapSpecEntry(self__.attr,G__45116,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_parser.PullMapSpecEntry(self__.attr,self__.porrl,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18147__auto__,G__45116),null));
}
}
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18151__auto__){
var self__ = this;
var this__18151__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"porrl","porrl",-1693905102),self__.porrl],null))], null),self__.__extmap));
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18138__auto__,G__45116){
var self__ = this;
var this__18138__auto____$1 = this;
return (new datascript.pull_parser.PullMapSpecEntry(self__.attr,self__.porrl,G__45116,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18144__auto__,entry__18145__auto__){
var self__ = this;
var this__18144__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18145__auto__)){
return cljs.core._assoc.call(null,this__18144__auto____$1,cljs.core._nth.call(null,entry__18145__auto__,(0)),cljs.core._nth.call(null,entry__18145__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18144__auto____$1,entry__18145__auto__);
}
});

datascript.pull_parser.PullMapSpecEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"porrl","porrl",-53373575,null)], null);
});

datascript.pull_parser.PullMapSpecEntry.cljs$lang$type = true;

datascript.pull_parser.PullMapSpecEntry.cljs$lang$ctorPrSeq = (function (this__18173__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.pull-parser/PullMapSpecEntry");
});

datascript.pull_parser.PullMapSpecEntry.cljs$lang$ctorPrWriter = (function (this__18173__auto__,writer__18174__auto__){
return cljs.core._write.call(null,writer__18174__auto__,"datascript.pull-parser/PullMapSpecEntry");
});

datascript.pull_parser.__GT_PullMapSpecEntry = (function datascript$pull_parser$__GT_PullMapSpecEntry(attr,porrl){
return (new datascript.pull_parser.PullMapSpecEntry(attr,porrl,null,null,null));
});

datascript.pull_parser.map__GT_PullMapSpecEntry = (function datascript$pull_parser$map__GT_PullMapSpecEntry(G__45118){
return (new datascript.pull_parser.PullMapSpecEntry(new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(G__45118),new cljs.core.Keyword(null,"porrl","porrl",-1693905102).cljs$core$IFn$_invoke$arity$1(G__45118),null,cljs.core.dissoc.call(null,G__45118,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"porrl","porrl",-1693905102)),null));
});

datascript.pull_parser.aggregate_specs = (function datascript$pull_parser$aggregate_specs(res,part){
if((part instanceof datascript.pull_parser.PullWildcard)){
return cljs.core.assoc.call(null,res,new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),true);
} else {
return cljs.core.update.call(null,res,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.conj_BANG_,datascript.pull_parser._as_spec.call(null,part));
}
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
 * @implements {datascript.pull_parser.IPullSpecComponent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.pull_parser.PullPattern = (function (specs,__meta,__extmap,__hash){
this.specs = specs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.pull_parser.PullPattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18139__auto__,k__18140__auto__){
var self__ = this;
var this__18139__auto____$1 = this;
return cljs.core._lookup.call(null,this__18139__auto____$1,k__18140__auto__,null);
});

datascript.pull_parser.PullPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18141__auto__,k45125,else__18142__auto__){
var self__ = this;
var this__18141__auto____$1 = this;
var G__45127 = (((k45125 instanceof cljs.core.Keyword))?k45125.fqn:null);
switch (G__45127) {
case "specs":
return self__.specs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k45125,else__18142__auto__);

}
});

datascript.pull_parser.PullPattern.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18153__auto__,writer__18154__auto__,opts__18155__auto__){
var self__ = this;
var this__18153__auto____$1 = this;
var pr_pair__18156__auto__ = ((function (this__18153__auto____$1){
return (function (keyval__18157__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,cljs.core.pr_writer,""," ","",opts__18155__auto__,keyval__18157__auto__);
});})(this__18153__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,pr_pair__18156__auto__,"#datascript.pull-parser.PullPattern{",", ","}",opts__18155__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"specs","specs",1426570741),self__.specs],null))], null),self__.__extmap));
});

datascript.pull_parser.PullPattern.prototype.cljs$core$IIterable$ = true;

datascript.pull_parser.PullPattern.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45124){
var self__ = this;
var G__45124__$1 = this;
return (new cljs.core.RecordIter((0),G__45124__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"specs","specs",1426570741)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.pull_parser.PullPattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18137__auto__){
var self__ = this;
var this__18137__auto____$1 = this;
return self__.__meta;
});

datascript.pull_parser.PullPattern.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18133__auto__){
var self__ = this;
var this__18133__auto____$1 = this;
return (new datascript.pull_parser.PullPattern(self__.specs,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullPattern.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18143__auto__){
var self__ = this;
var this__18143__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.pull_parser.PullPattern.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18134__auto__){
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

datascript.pull_parser.PullPattern.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18135__auto__,other__18136__auto__){
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

datascript.pull_parser.PullPattern.prototype.datascript$pull_parser$IPullSpecComponent$ = true;

datascript.pull_parser.PullPattern.prototype.datascript$pull_parser$IPullSpecComponent$_as_spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var init = (new datascript.pull_parser.PullSpec(false,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),null,null,null));
var spec = cljs.core.reduce.call(null,datascript.pull_parser.aggregate_specs,init,self__.specs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subpattern","subpattern",45002743),cljs.core.update.call(null,spec,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.persistent_BANG_)], null);
});

datascript.pull_parser.PullPattern.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18148__auto__,k__18149__auto__){
var self__ = this;
var this__18148__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"specs","specs",1426570741),null], null), null),k__18149__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18148__auto____$1),self__.__meta),k__18149__auto__);
} else {
return (new datascript.pull_parser.PullPattern(self__.specs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18149__auto__)),null));
}
});

datascript.pull_parser.PullPattern.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18146__auto__,k__18147__auto__,G__45124){
var self__ = this;
var this__18146__auto____$1 = this;
var pred__45128 = cljs.core.keyword_identical_QMARK_;
var expr__45129 = k__18147__auto__;
if(cljs.core.truth_(pred__45128.call(null,new cljs.core.Keyword(null,"specs","specs",1426570741),expr__45129))){
return (new datascript.pull_parser.PullPattern(G__45124,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_parser.PullPattern(self__.specs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18147__auto__,G__45124),null));
}
});

datascript.pull_parser.PullPattern.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18151__auto__){
var self__ = this;
var this__18151__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"specs","specs",1426570741),self__.specs],null))], null),self__.__extmap));
});

datascript.pull_parser.PullPattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18138__auto__,G__45124){
var self__ = this;
var this__18138__auto____$1 = this;
return (new datascript.pull_parser.PullPattern(self__.specs,G__45124,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullPattern.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18144__auto__,entry__18145__auto__){
var self__ = this;
var this__18144__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18145__auto__)){
return cljs.core._assoc.call(null,this__18144__auto____$1,cljs.core._nth.call(null,entry__18145__auto__,(0)),cljs.core._nth.call(null,entry__18145__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18144__auto____$1,entry__18145__auto__);
}
});

datascript.pull_parser.PullPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"specs","specs",-1227865028,null)], null);
});

datascript.pull_parser.PullPattern.cljs$lang$type = true;

datascript.pull_parser.PullPattern.cljs$lang$ctorPrSeq = (function (this__18173__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.pull-parser/PullPattern");
});

datascript.pull_parser.PullPattern.cljs$lang$ctorPrWriter = (function (this__18173__auto__,writer__18174__auto__){
return cljs.core._write.call(null,writer__18174__auto__,"datascript.pull-parser/PullPattern");
});

datascript.pull_parser.__GT_PullPattern = (function datascript$pull_parser$__GT_PullPattern(specs){
return (new datascript.pull_parser.PullPattern(specs,null,null,null));
});

datascript.pull_parser.map__GT_PullPattern = (function datascript$pull_parser$map__GT_PullPattern(G__45126){
return (new datascript.pull_parser.PullPattern(new cljs.core.Keyword(null,"specs","specs",1426570741).cljs$core$IFn$_invoke$arity$1(G__45126),null,cljs.core.dissoc.call(null,G__45126,new cljs.core.Keyword(null,"specs","specs",1426570741)),null));
});

datascript.pull_parser.parse_pattern;
datascript.pull_parser.wildcard_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"*","*",-1294732318),null,"*",null,new cljs.core.Symbol(null,"*","*",345799209,null),null], null), null);
datascript.pull_parser.parse_wildcard = (function datascript$pull_parser$parse_wildcard(spec){
if(cljs.core.truth_(datascript.pull_parser.wildcard_QMARK_.call(null,spec))){
return (new datascript.pull_parser.PullWildcard(null,null,null));
} else {
return null;
}
});
datascript.pull_parser.parse_attr_name = (function datascript$pull_parser$parse_attr_name(spec){
if(((spec instanceof cljs.core.Keyword)) || (typeof spec === 'string')){
if(datascript.db.reverse_ref_QMARK_.call(null,spec)){
return (new datascript.pull_parser.PullReverseAttrName(datascript.db.reverse_ref.call(null,spec),spec,null,null,null));
} else {
return (new datascript.pull_parser.PullAttrName(spec,null,null,null));
}
} else {
return null;
}
});
datascript.pull_parser.unlimited_recursion_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["...",null,new cljs.core.Symbol(null,"...","...",-1926939749,null),null], null), null);
datascript.pull_parser.parse_recursion_limit = (function datascript$pull_parser$parse_recursion_limit(spec){
if(cljs.core.truth_(datascript.pull_parser.unlimited_recursion_QMARK_.call(null,spec))){
return (new datascript.pull_parser.PullRecursionLimit(null,null,null,null));
} else {
if((typeof spec === 'number') && ((spec > (0)))){
return (new datascript.pull_parser.PullRecursionLimit(spec,null,null,null));
} else {
return null;
}
}
});
datascript.pull_parser.maybe_attr_expr_QMARK_ = (function datascript$pull_parser$maybe_attr_expr_QMARK_(spec){
return (cljs.core.sequential_QMARK_.call(null,spec)) && (cljs.core._EQ_.call(null,(3),cljs.core.count.call(null,spec)));
});
datascript.pull_parser.limit_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"limit","limit",284709164,null),null,new cljs.core.Keyword(null,"limit","limit",-1355822363),null,"limit",null], null), null);
datascript.pull_parser.parse_limit_expr = (function datascript$pull_parser$parse_limit_expr(spec){
var vec__45133 = spec;
var limit_sym = cljs.core.nth.call(null,vec__45133,(0),null);
var attr_name_spec = cljs.core.nth.call(null,vec__45133,(1),null);
var pos_num = cljs.core.nth.call(null,vec__45133,(2),null);
if(cljs.core.truth_(datascript.pull_parser.limit_QMARK_.call(null,limit_sym))){
var temp__4423__auto__ = (function (){var and__17513__auto__ = ((pos_num == null)) || ((typeof pos_num === 'number') && ((pos_num > (0))));
if(and__17513__auto__){
return datascript.pull_parser.parse_attr_name.call(null,attr_name_spec);
} else {
return and__17513__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var attr_name = temp__4423__auto__;
return (new datascript.pull_parser.PullLimitExpr(attr_name,pos_num,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Expected [\"limit\" attr-name (positive-number | nil)]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","pull","parser/pull",-2147427204),new cljs.core.Keyword(null,"fragment","fragment",826775688),spec], null));
}
} else {
return null;
}
});
datascript.pull_parser.default_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"default","default",-347290801,null),null,new cljs.core.Keyword(null,"default","default",-1987822328),null,"default",null], null), null);
datascript.pull_parser.parse_default_expr = (function datascript$pull_parser$parse_default_expr(spec){
var vec__45135 = spec;
var default_sym = cljs.core.nth.call(null,vec__45135,(0),null);
var attr_name_spec = cljs.core.nth.call(null,vec__45135,(1),null);
var default_val = cljs.core.nth.call(null,vec__45135,(2),null);
if(cljs.core.truth_(datascript.pull_parser.default_QMARK_.call(null,default_sym))){
var temp__4423__auto__ = (function (){var and__17513__auto__ = datascript.pull_parser.default_QMARK_.call(null,default_sym);
if(cljs.core.truth_(and__17513__auto__)){
return datascript.pull_parser.parse_attr_name.call(null,attr_name_spec);
} else {
return and__17513__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var attr_name = temp__4423__auto__;
return (new datascript.pull_parser.PullDefaultExpr(attr_name,default_val,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Expected [\"default\" attr-name any-value]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","pull","parser/pull",-2147427204),new cljs.core.Keyword(null,"fragment","fragment",826775688),spec], null));
}
} else {
return null;
}
});
datascript.pull_parser.parse_map_spec_entry = (function datascript$pull_parser$parse_map_spec_entry(p__45136){
var vec__45138 = p__45136;
var k = cljs.core.nth.call(null,vec__45138,(0),null);
var v = cljs.core.nth.call(null,vec__45138,(1),null);
var temp__4423__auto__ = (function (){var or__17525__auto__ = datascript.pull_parser.parse_attr_name.call(null,k);
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
if(cljs.core.truth_(datascript.pull_parser.maybe_attr_expr_QMARK_.call(null,k))){
return datascript.pull_parser.parse_limit_expr.call(null,k);
} else {
return null;
}
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var attr_name = temp__4423__auto__;
var temp__4423__auto____$1 = (function (){var or__17525__auto__ = datascript.pull_parser.parse_recursion_limit.call(null,v);
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return datascript.pull_parser.parse_pattern.call(null,v);
}
})();
if(cljs.core.truth_(temp__4423__auto____$1)){
var pattern_or_rec = temp__4423__auto____$1;
return (new datascript.pull_parser.PullMapSpecEntry(attr_name,pattern_or_rec,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Expected (pattern | recursion-limit)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","pull","parser/pull",-2147427204),new cljs.core.Keyword(null,"fragment","fragment",826775688),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Expected (attr-name | limit-expr)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","pull","parser/pull",-2147427204),new cljs.core.Keyword(null,"fragment","fragment",826775688),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)], null));
}
});
datascript.pull_parser.parse_map_spec = (function datascript$pull_parser$parse_map_spec(spec){
if(cljs.core.map_QMARK_.call(null,spec)){
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,spec))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Maps should contain exactly 1 entry"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null)))))].join('')));
}

return datascript.pull_parser.parse_map_spec_entry.call(null,cljs.core.first.call(null,spec));
} else {
return null;
}
});
datascript.pull_parser.parse_attr_expr = (function datascript$pull_parser$parse_attr_expr(spec){
if(cljs.core.truth_(datascript.pull_parser.maybe_attr_expr_QMARK_.call(null,spec))){
var or__17525__auto__ = datascript.pull_parser.parse_limit_expr.call(null,spec);
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return datascript.pull_parser.parse_default_expr.call(null,spec);
}
} else {
return null;
}
});
datascript.pull_parser.parse_attr_spec = (function datascript$pull_parser$parse_attr_spec(spec){
var or__17525__auto__ = datascript.pull_parser.parse_attr_name.call(null,spec);
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
var or__17525__auto____$1 = datascript.pull_parser.parse_wildcard.call(null,spec);
if(cljs.core.truth_(or__17525__auto____$1)){
return or__17525__auto____$1;
} else {
var or__17525__auto____$2 = datascript.pull_parser.parse_map_spec.call(null,spec);
if(cljs.core.truth_(or__17525__auto____$2)){
return or__17525__auto____$2;
} else {
var or__17525__auto____$3 = datascript.pull_parser.parse_attr_expr.call(null,spec);
if(cljs.core.truth_(or__17525__auto____$3)){
return or__17525__auto____$3;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse attr-spec, expected: (attr-name | wildcard | map-spec | attr-expr)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","pull","parser/pull",-2147427204),new cljs.core.Keyword(null,"fragment","fragment",826775688),spec], null));
}
}
}
}
});
datascript.pull_parser.pattern_clause_type = (function datascript$pull_parser$pattern_clause_type(clause){
if(cljs.core.map_QMARK_.call(null,clause)){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if(cljs.core.truth_(datascript.pull_parser.wildcard_QMARK_.call(null,clause))){
return new cljs.core.Keyword(null,"wildcard","wildcard",-622473020);
} else {
return new cljs.core.Keyword(null,"other","other",995793544);

}
}
});
datascript.pull_parser.expand_map_clause = (function datascript$pull_parser$expand_map_clause(clause){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__45139_SHARP_){
return cljs.core.conj.call(null,cljs.core.PersistentArrayMap.EMPTY,p1__45139_SHARP_);
})),clause);
});
datascript.pull_parser.simplify_pattern_clauses = (function datascript$pull_parser$simplify_pattern_clauses(pattern){
var groups = cljs.core.group_by.call(null,datascript.pull_parser.pattern_clause_type,pattern);
var base = (cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.get.call(null,groups,new cljs.core.Keyword(null,"wildcard","wildcard",-622473020))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null):cljs.core.PersistentVector.EMPTY);
return cljs.core.into.call(null,cljs.core.into.call(null,base,cljs.core.get.call(null,groups,new cljs.core.Keyword(null,"other","other",995793544))),cljs.core.mapcat.call(null,datascript.pull_parser.expand_map_clause),cljs.core.get.call(null,groups,new cljs.core.Keyword(null,"map","map",1371690461)));
});
/**
 * Parse an EDN pull pattern into a tree of records using the following
 * grammar:
 * 
 * ```
 * pattern            = [attr-spec+]
 * attr-spec          = attr-name | wildcard | map-spec | attr-expr
 * attr-name          = an edn keyword that names an attr
 * wildcard           = "*" or '*'
 * map-spec           = { ((attr-name | limit-expr) (pattern | recursion-limit))+ }
 * attr-expr          = limit-expr | default-expr
 * limit-expr         = ["limit" attr-name (positive-number | nil)]
 * default-expr       = ["default" attr-name any-value]
 * recursion-limit    = positive-number | '...'
 * ```
 */
datascript.pull_parser.parse_pattern = (function datascript$pull_parser$parse_pattern(pattern){
if(cljs.core.sequential_QMARK_.call(null,pattern)){
return (new datascript.pull_parser.PullPattern(cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,datascript.pull_parser.parse_attr_spec),datascript.pull_parser.simplify_pattern_clauses.call(null,pattern)),null,null,null));
} else {
return null;
}
});
/**
 * Convert a parsed tree of pull pattern records into a `PullSpec` instance,
 * a record type containing two keys:
 * 
 * * `:wildcard?` - a boolean indicating if the pattern contains a wildcard.
 * * `:attrs` - a map of attribute specifications.
 * 
 * The attribute specification map consists of keys which will become the keys
 * in the result map, and values which are themselves maps describing the
 * attribute:
 * 
 * * `:attr`       (required) - The attr name to pull; for reverse attributes
 *                           this will be the normalized attribute name.
 * * `:limit`      (optional) - If present, specifies a custom limit for this
 *                           attribute; Either `nil`, indicating no limit,
 *                           or a positive integer.
 * * `:default`    (optional) - If present, specifies a default value for this
 *                           attribute
 * * `:recursion`  (optional) - If present, specifies a recursion limit for this
 *                           attribute; Either `nil`, indicating no limit, or
 *                           a positive integer.
 * * `:subpattern` (optional) - If present, specifies a sub `PullSpec` instance
 *                           to be applied to entities matched by this
 *                           attribute.
 */
datascript.pull_parser.pattern__GT_spec = (function datascript$pull_parser$pattern__GT_spec(pattern){
return cljs.core.nth.call(null,datascript.pull_parser._as_spec.call(null,pattern),(1));
});
/**
 * Parse EDN pull `pattern` specification (see `parse-pattern`), and
 * convert the resulting tree into a `PullSpec` instance (see `pattern->spec`).
 * Throws an error if the supplied `pattern` cannot be parsed.
 */
datascript.pull_parser.parse_pull = (function datascript$pull_parser$parse_pull(pattern){
var or__17525__auto__ = (function (){var G__45143 = pattern;
var G__45143__$1 = (((G__45143 == null))?null:datascript.pull_parser.parse_pattern.call(null,G__45143));
if((G__45143__$1 == null)){
return null;
} else {
return datascript.pull_parser.pattern__GT_spec.call(null,G__45143__$1);
}
})();
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse pull pattern, expected: [attr-spec+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","pull","parser/pull",-2147427204),new cljs.core.Keyword(null,"fragment","fragment",826775688),pattern], null));
}
});

//# sourceMappingURL=pull_parser.js.map?rel=1452702577862