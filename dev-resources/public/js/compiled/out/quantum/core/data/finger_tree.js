// Compiled by ClojureScript 1.7.170 {}

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns map cmacros]
*/

/* WARNING: Runtime eval with |mfn| via quantum.core.ns/ns-exclude
*/

/* WARNING: Runtime eval with |mfn| via import
*/
goog.provide('quantum.core.data.finger_tree');
goog.require('cljs.core');
goog.require('quantum.core.core');
goog.require('clojure.core.rrb_vector');
goog.require('quantum.core.data.map');
goog.require('quantum.core.macros.core');
goog.require('cljs.core');
goog.require('quantum.core.ns');
goog.require('cljs.analyzer');
quantum.core.data.finger_tree.hashcode = (function quantum$core$data$finger_tree$hashcode(x){
return cljs.core.hash.call(null,x);
});
quantum.core.data.finger_tree.hash_ordered = (function quantum$core$data$finger_tree$hash_ordered(coll){
return cljs.core.hash_ordered_coll.call(null,coll);
});
quantum.core.data.finger_tree.hash_unordered = (function quantum$core$data$finger_tree$hash_unordered(coll){
return cljs.core.hash_unordered_coll.call(null,coll);
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
quantum.core.data.finger_tree.IndexOutOfBoundsException = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
quantum.core.data.finger_tree.IndexOutOfBoundsException.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18139__auto__,k__18140__auto__){
var self__ = this;
var this__18139__auto____$1 = this;
return cljs.core._lookup.call(null,this__18139__auto____$1,k__18140__auto__,null);
});

quantum.core.data.finger_tree.IndexOutOfBoundsException.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18141__auto__,k38727,else__18142__auto__){
var self__ = this;
var this__18141__auto____$1 = this;
var G__38729 = k38727;
switch (G__38729) {
default:
return cljs.core.get.call(null,self__.__extmap,k38727,else__18142__auto__);

}
});

quantum.core.data.finger_tree.IndexOutOfBoundsException.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18153__auto__,writer__18154__auto__,opts__18155__auto__){
var self__ = this;
var this__18153__auto____$1 = this;
var pr_pair__18156__auto__ = ((function (this__18153__auto____$1){
return (function (keyval__18157__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,cljs.core.pr_writer,""," ","",opts__18155__auto__,keyval__18157__auto__);
});})(this__18153__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,pr_pair__18156__auto__,"#quantum.core.data.finger-tree.IndexOutOfBoundsException{",", ","}",opts__18155__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

quantum.core.data.finger_tree.IndexOutOfBoundsException.prototype.cljs$core$IIterable$ = true;

quantum.core.data.finger_tree.IndexOutOfBoundsException.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38726){
var self__ = this;
var G__38726__$1 = this;
return (new cljs.core.RecordIter((0),G__38726__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

quantum.core.data.finger_tree.IndexOutOfBoundsException.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18137__auto__){
var self__ = this;
var this__18137__auto____$1 = this;
return self__.__meta;
});

quantum.core.data.finger_tree.IndexOutOfBoundsException.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18133__auto__){
var self__ = this;
var this__18133__auto____$1 = this;
return (new quantum.core.data.finger_tree.IndexOutOfBoundsException(self__.__meta,self__.__extmap,self__.__hash));
});

quantum.core.data.finger_tree.IndexOutOfBoundsException.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18143__auto__){
var self__ = this;
var this__18143__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

quantum.core.data.finger_tree.IndexOutOfBoundsException.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18134__auto__){
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

quantum.core.data.finger_tree.IndexOutOfBoundsException.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18135__auto__,other__18136__auto__){
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

quantum.core.data.finger_tree.IndexOutOfBoundsException.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18148__auto__,k__18149__auto__){
var self__ = this;
var this__18148__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__18149__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18148__auto____$1),self__.__meta),k__18149__auto__);
} else {
return (new quantum.core.data.finger_tree.IndexOutOfBoundsException(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18149__auto__)),null));
}
});

quantum.core.data.finger_tree.IndexOutOfBoundsException.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18146__auto__,k__18147__auto__,G__38726){
var self__ = this;
var this__18146__auto____$1 = this;
var pred__38730 = cljs.core.keyword_identical_QMARK_;
var expr__38731 = k__18147__auto__;
return (new quantum.core.data.finger_tree.IndexOutOfBoundsException(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18147__auto__,G__38726),null));
});

quantum.core.data.finger_tree.IndexOutOfBoundsException.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18151__auto__){
var self__ = this;
var this__18151__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

quantum.core.data.finger_tree.IndexOutOfBoundsException.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18138__auto__,G__38726){
var self__ = this;
var this__18138__auto____$1 = this;
return (new quantum.core.data.finger_tree.IndexOutOfBoundsException(G__38726,self__.__extmap,self__.__hash));
});

quantum.core.data.finger_tree.IndexOutOfBoundsException.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18144__auto__,entry__18145__auto__){
var self__ = this;
var this__18144__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18145__auto__)){
return cljs.core._assoc.call(null,this__18144__auto____$1,cljs.core._nth.call(null,entry__18145__auto__,(0)),cljs.core._nth.call(null,entry__18145__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18144__auto____$1,entry__18145__auto__);
}
});

quantum.core.data.finger_tree.IndexOutOfBoundsException.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

quantum.core.data.finger_tree.IndexOutOfBoundsException.cljs$lang$type = true;

quantum.core.data.finger_tree.IndexOutOfBoundsException.cljs$lang$ctorPrSeq = (function (this__18173__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"quantum.core.data.finger-tree/IndexOutOfBoundsException");
});

quantum.core.data.finger_tree.IndexOutOfBoundsException.cljs$lang$ctorPrWriter = (function (this__18173__auto__,writer__18174__auto__){
return cljs.core._write.call(null,writer__18174__auto__,"quantum.core.data.finger-tree/IndexOutOfBoundsException");
});

quantum.core.data.finger_tree.__GT_IndexOutOfBoundsException = (function quantum$core$data$finger_tree$__GT_IndexOutOfBoundsException(){
return (new quantum.core.data.finger_tree.IndexOutOfBoundsException(null,null,null));
});

quantum.core.data.finger_tree.map__GT_IndexOutOfBoundsException = (function quantum$core$data$finger_tree$map__GT_IndexOutOfBoundsException(G__38728){
return (new quantum.core.data.finger_tree.IndexOutOfBoundsException(null,cljs.core.dissoc.call(null,G__38728),null));
});


/**
 * @interface
 */
quantum.core.data.finger_tree.ConjL = function(){};

/**
 * Append a to the left-hand side of s
 */
quantum.core.data.finger_tree.conjl = (function quantum$core$data$finger_tree$conjl(s,a){
if((!((s == null))) && (!((s.quantum$core$data$finger_tree$ConjL$conjl$arity$2 == null)))){
return s.quantum$core$data$finger_tree$ConjL$conjl$arity$2(s,a);
} else {
var x__18180__auto__ = (((s == null))?null:s);
var m__18181__auto__ = (quantum.core.data.finger_tree.conjl[goog.typeOf(x__18180__auto__)]);
if(!((m__18181__auto__ == null))){
return m__18181__auto__.call(null,s,a);
} else {
var m__18181__auto____$1 = (quantum.core.data.finger_tree.conjl["_"]);
if(!((m__18181__auto____$1 == null))){
return m__18181__auto____$1.call(null,s,a);
} else {
throw cljs.core.missing_protocol.call(null,"ConjL.conjl",s);
}
}
}
});


/**
 * Object for annotating tree elements.  idElem and op together form a Monoid.
 * @interface
 */
quantum.core.data.finger_tree.ObjMeter = function(){};

/**
 * Return the measured value of o (same type as idElem)
 */
quantum.core.data.finger_tree.measure = (function quantum$core$data$finger_tree$measure(_,o){
if((!((_ == null))) && (!((_.quantum$core$data$finger_tree$ObjMeter$measure$arity$2 == null)))){
return _.quantum$core$data$finger_tree$ObjMeter$measure$arity$2(_,o);
} else {
var x__18180__auto__ = (((_ == null))?null:_);
var m__18181__auto__ = (quantum.core.data.finger_tree.measure[goog.typeOf(x__18180__auto__)]);
if(!((m__18181__auto__ == null))){
return m__18181__auto__.call(null,_,o);
} else {
var m__18181__auto____$1 = (quantum.core.data.finger_tree.measure["_"]);
if(!((m__18181__auto____$1 == null))){
return m__18181__auto____$1.call(null,_,o);
} else {
throw cljs.core.missing_protocol.call(null,"ObjMeter.measure",_);
}
}
}
});

/**
 * Return the identity element for this meter
 */
quantum.core.data.finger_tree.idElem = (function quantum$core$data$finger_tree$idElem(_){
if((!((_ == null))) && (!((_.quantum$core$data$finger_tree$ObjMeter$idElem$arity$1 == null)))){
return _.quantum$core$data$finger_tree$ObjMeter$idElem$arity$1(_);
} else {
var x__18180__auto__ = (((_ == null))?null:_);
var m__18181__auto__ = (quantum.core.data.finger_tree.idElem[goog.typeOf(x__18180__auto__)]);
if(!((m__18181__auto__ == null))){
return m__18181__auto__.call(null,_);
} else {
var m__18181__auto____$1 = (quantum.core.data.finger_tree.idElem["_"]);
if(!((m__18181__auto____$1 == null))){
return m__18181__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ObjMeter.idElem",_);
}
}
}
});

/**
 * Return an associative function of two args for combining measures
 */
quantum.core.data.finger_tree.opfn = (function quantum$core$data$finger_tree$opfn(_){
if((!((_ == null))) && (!((_.quantum$core$data$finger_tree$ObjMeter$opfn$arity$1 == null)))){
return _.quantum$core$data$finger_tree$ObjMeter$opfn$arity$1(_);
} else {
var x__18180__auto__ = (((_ == null))?null:_);
var m__18181__auto__ = (quantum.core.data.finger_tree.opfn[goog.typeOf(x__18180__auto__)]);
if(!((m__18181__auto__ == null))){
return m__18181__auto__.call(null,_);
} else {
var m__18181__auto____$1 = (quantum.core.data.finger_tree.opfn["_"]);
if(!((m__18181__auto____$1 == null))){
return m__18181__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ObjMeter.opfn",_);
}
}
}
});


/**
 * @interface
 */
quantum.core.data.finger_tree.Measured = function(){};

/**
 * Return the measured value of o
 */
quantum.core.data.finger_tree.measured = (function quantum$core$data$finger_tree$measured(o){
if((!((o == null))) && (!((o.quantum$core$data$finger_tree$Measured$measured$arity$1 == null)))){
return o.quantum$core$data$finger_tree$Measured$measured$arity$1(o);
} else {
var x__18180__auto__ = (((o == null))?null:o);
var m__18181__auto__ = (quantum.core.data.finger_tree.measured[goog.typeOf(x__18180__auto__)]);
if(!((m__18181__auto__ == null))){
return m__18181__auto__.call(null,o);
} else {
var m__18181__auto____$1 = (quantum.core.data.finger_tree.measured["_"]);
if(!((m__18181__auto____$1 == null))){
return m__18181__auto____$1.call(null,o);
} else {
throw cljs.core.missing_protocol.call(null,"Measured.measured",o);
}
}
}
});

/**
 * Return the meter object for o
 */
quantum.core.data.finger_tree.getMeter = (function quantum$core$data$finger_tree$getMeter(o){
if((!((o == null))) && (!((o.quantum$core$data$finger_tree$Measured$getMeter$arity$1 == null)))){
return o.quantum$core$data$finger_tree$Measured$getMeter$arity$1(o);
} else {
var x__18180__auto__ = (((o == null))?null:o);
var m__18181__auto__ = (quantum.core.data.finger_tree.getMeter[goog.typeOf(x__18180__auto__)]);
if(!((m__18181__auto__ == null))){
return m__18181__auto__.call(null,o);
} else {
var m__18181__auto____$1 = (quantum.core.data.finger_tree.getMeter["_"]);
if(!((m__18181__auto____$1 == null))){
return m__18181__auto____$1.call(null,o);
} else {
throw cljs.core.missing_protocol.call(null,"Measured.getMeter",o);
}
}
}
});


/**
 * @interface
 */
quantum.core.data.finger_tree.Splittable = function(){};

/**
 * Return [pre m post] where pre and post are trees
 */
quantum.core.data.finger_tree.split = (function quantum$core$data$finger_tree$split(o,pred,acc){
if((!((o == null))) && (!((o.quantum$core$data$finger_tree$Splittable$split$arity$3 == null)))){
return o.quantum$core$data$finger_tree$Splittable$split$arity$3(o,pred,acc);
} else {
var x__18180__auto__ = (((o == null))?null:o);
var m__18181__auto__ = (quantum.core.data.finger_tree.split[goog.typeOf(x__18180__auto__)]);
if(!((m__18181__auto__ == null))){
return m__18181__auto__.call(null,o,pred,acc);
} else {
var m__18181__auto____$1 = (quantum.core.data.finger_tree.split["_"]);
if(!((m__18181__auto____$1 == null))){
return m__18181__auto____$1.call(null,o,pred,acc);
} else {
throw cljs.core.missing_protocol.call(null,"Splittable.split",o);
}
}
}
});


/**
 * @interface
 */
quantum.core.data.finger_tree.SplitAt = function(){};

/**
 * Return [pre m post] where pre and post are trees
 */
quantum.core.data.finger_tree.ft_split_at = (function quantum$core$data$finger_tree$ft_split_at(var_args){
var args38734 = [];
var len__18583__auto___38737 = arguments.length;
var i__18584__auto___38738 = (0);
while(true){
if((i__18584__auto___38738 < len__18583__auto___38737)){
args38734.push((arguments[i__18584__auto___38738]));

var G__38739 = (i__18584__auto___38738 + (1));
i__18584__auto___38738 = G__38739;
continue;
} else {
}
break;
}

var G__38736 = args38734.length;
switch (G__38736) {
case 3:
return quantum.core.data.finger_tree.ft_split_at.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return quantum.core.data.finger_tree.ft_split_at.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38734.length)].join('')));

}
});

quantum.core.data.finger_tree.ft_split_at.cljs$core$IFn$_invoke$arity$3 = (function (o,k,notfound){
if((!((o == null))) && (!((o.quantum$core$data$finger_tree$SplitAt$ft_split_at$arity$3 == null)))){
return o.quantum$core$data$finger_tree$SplitAt$ft_split_at$arity$3(o,k,notfound);
} else {
var x__18180__auto__ = (((o == null))?null:o);
var m__18181__auto__ = (quantum.core.data.finger_tree.ft_split_at[goog.typeOf(x__18180__auto__)]);
if(!((m__18181__auto__ == null))){
return m__18181__auto__.call(null,o,k,notfound);
} else {
var m__18181__auto____$1 = (quantum.core.data.finger_tree.ft_split_at["_"]);
if(!((m__18181__auto____$1 == null))){
return m__18181__auto____$1.call(null,o,k,notfound);
} else {
throw cljs.core.missing_protocol.call(null,"SplitAt.ft-split-at",o);
}
}
}
});

quantum.core.data.finger_tree.ft_split_at.cljs$core$IFn$_invoke$arity$2 = (function (o,k){
if((!((o == null))) && (!((o.quantum$core$data$finger_tree$SplitAt$ft_split_at$arity$2 == null)))){
return o.quantum$core$data$finger_tree$SplitAt$ft_split_at$arity$2(o,k);
} else {
var x__18180__auto__ = (((o == null))?null:o);
var m__18181__auto__ = (quantum.core.data.finger_tree.ft_split_at[goog.typeOf(x__18180__auto__)]);
if(!((m__18181__auto__ == null))){
return m__18181__auto__.call(null,o,k);
} else {
var m__18181__auto____$1 = (quantum.core.data.finger_tree.ft_split_at["_"]);
if(!((m__18181__auto____$1 == null))){
return m__18181__auto____$1.call(null,o,k);
} else {
throw cljs.core.missing_protocol.call(null,"SplitAt.ft-split-at",o);
}
}
}
});

quantum.core.data.finger_tree.ft_split_at.cljs$lang$maxFixedArity = 3;


/**
 * @interface
 */
quantum.core.data.finger_tree.Tree = function(){};

/**
 * Append ts and (possibly deep) t2 to tree t1
 */
quantum.core.data.finger_tree.app3 = (function quantum$core$data$finger_tree$app3(t1,ts,t2){
if((!((t1 == null))) && (!((t1.quantum$core$data$finger_tree$Tree$app3$arity$3 == null)))){
return t1.quantum$core$data$finger_tree$Tree$app3$arity$3(t1,ts,t2);
} else {
var x__18180__auto__ = (((t1 == null))?null:t1);
var m__18181__auto__ = (quantum.core.data.finger_tree.app3[goog.typeOf(x__18180__auto__)]);
if(!((m__18181__auto__ == null))){
return m__18181__auto__.call(null,t1,ts,t2);
} else {
var m__18181__auto____$1 = (quantum.core.data.finger_tree.app3["_"]);
if(!((m__18181__auto____$1 == null))){
return m__18181__auto____$1.call(null,t1,ts,t2);
} else {
throw cljs.core.missing_protocol.call(null,"Tree.app3",t1);
}
}
}
});

/**
 * Append ts and t2 to deep tree t1
 */
quantum.core.data.finger_tree.app3deep = (function quantum$core$data$finger_tree$app3deep(t2,ts,t1){
if((!((t2 == null))) && (!((t2.quantum$core$data$finger_tree$Tree$app3deep$arity$3 == null)))){
return t2.quantum$core$data$finger_tree$Tree$app3deep$arity$3(t2,ts,t1);
} else {
var x__18180__auto__ = (((t2 == null))?null:t2);
var m__18181__auto__ = (quantum.core.data.finger_tree.app3deep[goog.typeOf(x__18180__auto__)]);
if(!((m__18181__auto__ == null))){
return m__18181__auto__.call(null,t2,ts,t1);
} else {
var m__18181__auto____$1 = (quantum.core.data.finger_tree.app3deep["_"]);
if(!((m__18181__auto____$1 == null))){
return m__18181__auto____$1.call(null,t2,ts,t1);
} else {
throw cljs.core.missing_protocol.call(null,"Tree.app3deep",t2);
}
}
}
});

/**
 * Return the measure of o not including the leftmost item
 */
quantum.core.data.finger_tree.measureMore = (function quantum$core$data$finger_tree$measureMore(o){
if((!((o == null))) && (!((o.quantum$core$data$finger_tree$Tree$measureMore$arity$1 == null)))){
return o.quantum$core$data$finger_tree$Tree$measureMore$arity$1(o);
} else {
var x__18180__auto__ = (((o == null))?null:o);
var m__18181__auto__ = (quantum.core.data.finger_tree.measureMore[goog.typeOf(x__18180__auto__)]);
if(!((m__18181__auto__ == null))){
return m__18181__auto__.call(null,o);
} else {
var m__18181__auto____$1 = (quantum.core.data.finger_tree.measureMore["_"]);
if(!((m__18181__auto____$1 == null))){
return m__18181__auto____$1.call(null,o);
} else {
throw cljs.core.missing_protocol.call(null,"Tree.measureMore",o);
}
}
}
});

/**
 * Return the measure of o not including the rightmost item
 */
quantum.core.data.finger_tree.measurePop = (function quantum$core$data$finger_tree$measurePop(o){
if((!((o == null))) && (!((o.quantum$core$data$finger_tree$Tree$measurePop$arity$1 == null)))){
return o.quantum$core$data$finger_tree$Tree$measurePop$arity$1(o);
} else {
var x__18180__auto__ = (((o == null))?null:o);
var m__18181__auto__ = (quantum.core.data.finger_tree.measurePop[goog.typeOf(x__18180__auto__)]);
if(!((m__18181__auto__ == null))){
return m__18181__auto__.call(null,o);
} else {
var m__18181__auto____$1 = (quantum.core.data.finger_tree.measurePop["_"]);
if(!((m__18181__auto____$1 == null))){
return m__18181__auto____$1.call(null,o);
} else {
throw cljs.core.missing_protocol.call(null,"Tree.measurePop",o);
}
}
}
});

(quantum.core.data.finger_tree.ObjMeter["null"] = true);

(quantum.core.data.finger_tree.measure["null"] = (function (_,___$1){
return null;
}));

(quantum.core.data.finger_tree.idElem["null"] = (function (_){
return null;
}));

(quantum.core.data.finger_tree.opfn["null"] = (function (_){
return null;
}));

(quantum.core.data.finger_tree.Measured["null"] = true);

(quantum.core.data.finger_tree.measured["null"] = (function (_){
return null;
}));

(quantum.core.data.finger_tree.getMeter["null"] = (function (_){
return null;
}));
quantum.core.data.finger_tree.newEmptyTree;

quantum.core.data.finger_tree.newSingleTree;

quantum.core.data.finger_tree.newDeepTree;

quantum.core.data.finger_tree.digit;

quantum.core.data.finger_tree.deep;

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IEquiv}
 * @implements {quantum.core.data.finger_tree.ConjL}
 * @implements {cljs.core.ICollection}
 * @implements {quantum.core.data.finger_tree.Measured}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {quantum.core.data.finger_tree.Splittable}
 * @implements {cljs.core.ISeq}
 * @implements {cljs.core.INext}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IStack}
 * @implements {cljs.core.ISequential}
*/
quantum.core.data.finger_tree.Digit1 = (function (a,meter_obj,measure_ref){
this.a = a;
this.meter_obj = meter_obj;
this.measure_ref = measure_ref;
this.cljs$lang$protocol_mask$partition0$ = 27271390;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
quantum.core.data.finger_tree.Digit1.prototype.quantum$core$data$finger_tree$Splittable$ = true;

quantum.core.data.finger_tree.Digit1.prototype.quantum$core$data$finger_tree$Splittable$split$arity$3 = (function (___38676__auto__,p_38742,i_38741){
var self__ = this;
var ___38676__auto____$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,self__.a,null], null);
});

quantum.core.data.finger_tree.Digit1.prototype.quantum$core$data$finger_tree$Measured$ = true;

quantum.core.data.finger_tree.Digit1.prototype.quantum$core$data$finger_tree$Measured$measured$arity$1 = (function (___38676__auto__){
var self__ = this;
var ___38676__auto____$1 = this;
return cljs.core.deref.call(null,self__.measure_ref);
});

quantum.core.data.finger_tree.Digit1.prototype.quantum$core$data$finger_tree$Measured$getMeter$arity$1 = (function (___38676__auto__){
var self__ = this;
var ___38676__auto____$1 = this;
return self__.meter_obj;
});

quantum.core.data.finger_tree.Digit1.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (___38676__auto__,i_38741,notfound__38677__auto__){
var self__ = this;
var ___38676__auto____$1 = this;
if((i_38741 === ((0) | (0)))){
return self__.a;
} else {
return notfound__38677__auto__;

}
});

quantum.core.data.finger_tree.Digit1.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (___38674__auto__,x__38675__auto__){
var self__ = this;
var ___38674__auto____$1 = this;
return false;
});

quantum.core.data.finger_tree.Digit1.prototype.cljs$core$ICounted$_count$arity$1 = (function (___38676__auto__){
var self__ = this;
var ___38676__auto____$1 = this;
return 1;
});

quantum.core.data.finger_tree.Digit1.prototype.cljs$core$IStack$_peek$arity$1 = (function (___38676__auto__){
var self__ = this;
var ___38676__auto____$1 = this;
return self__.a;
});

quantum.core.data.finger_tree.Digit1.prototype.cljs$core$IStack$_pop$arity$1 = (function (___38676__auto__){
var self__ = this;
var ___38676__auto____$1 = this;
return quantum.core.data.finger_tree.newEmptyTree.call(null,self__.meter_obj);
});

quantum.core.data.finger_tree.Digit1.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (___38674__auto__){
var self__ = this;
var ___38674__auto____$1 = this;
return null;
});

quantum.core.data.finger_tree.Digit1.prototype.cljs$core$INext$_next$arity$1 = (function (___38667__auto__){
var self__ = this;
var ___38667__auto____$1 = this;
return null;
});

quantum.core.data.finger_tree.Digit1.prototype.cljs$core$ISeq$_first$arity$1 = (function (___38666__auto__){
var self__ = this;
var ___38666__auto____$1 = this;
return self__.a;
});

quantum.core.data.finger_tree.Digit1.prototype.cljs$core$ISeq$_rest$arity$1 = (function (___38671__auto__){
var self__ = this;
var ___38671__auto____$1 = this;
return quantum.core.data.finger_tree.newEmptyTree.call(null,self__.meter_obj);
});

quantum.core.data.finger_tree.Digit1.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (___38676__auto__){
var self__ = this;
var ___38676__auto____$1 = this;
return cljs.core.cons.call(null,self__.a,null);
});

quantum.core.data.finger_tree.Digit1.prototype.cljs$core$ICollection$_conj$arity$2 = (function (___38674__auto__,x__38675__auto__){
var self__ = this;
var ___38674__auto____$1 = this;
return quantum.core.data.finger_tree.digit.call(null,self__.meter_obj,self__.a,x__38675__auto__);
});

quantum.core.data.finger_tree.Digit1.prototype.quantum$core$data$finger_tree$ConjL$ = true;

quantum.core.data.finger_tree.Digit1.prototype.quantum$core$data$finger_tree$ConjL$conjl$arity$2 = (function (___38676__auto__,x__38678__auto__){
var self__ = this;
var ___38676__auto____$1 = this;
return quantum.core.data.finger_tree.digit.call(null,self__.meter_obj,x__38678__auto__,self__.a);
});

quantum.core.data.finger_tree.Digit1.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"meter-obj","meter-obj",2104917133,null),new cljs.core.Symbol(null,"measure-ref","measure-ref",-236477329,null)], null);
});

quantum.core.data.finger_tree.Digit1.cljs$lang$type = true;

quantum.core.data.finger_tree.Digit1.cljs$lang$ctorStr = "quantum.core.data.finger-tree/Digit1";

quantum.core.data.finger_tree.Digit1.cljs$lang$ctorPrWriter = (function (this__18123__auto__,writer__18124__auto__,opt__18125__auto__){
return cljs.core._write.call(null,writer__18124__auto__,"quantum.core.data.finger-tree/Digit1");
});

quantum.core.data.finger_tree.__GT_Digit1 = (function quantum$core$data$finger_tree$__GT_Digit1(a,meter_obj,measure_ref){
return (new quantum.core.data.finger_tree.Digit1(a,meter_obj,measure_ref));
});


/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IEquiv}
 * @implements {quantum.core.data.finger_tree.ConjL}
 * @implements {cljs.core.ICollection}
 * @implements {quantum.core.data.finger_tree.Measured}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {quantum.core.data.finger_tree.Splittable}
 * @implements {cljs.core.ISeq}
 * @implements {cljs.core.INext}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IStack}
 * @implements {cljs.core.ISequential}
*/
quantum.core.data.finger_tree.Digit2 = (function (a,b,meter_obj,measure_ref){
this.a = a;
this.b = b;
this.meter_obj = meter_obj;
this.measure_ref = measure_ref;
this.cljs$lang$protocol_mask$partition0$ = 27271390;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
quantum.core.data.finger_tree.Digit2.prototype.quantum$core$data$finger_tree$Splittable$ = true;

quantum.core.data.finger_tree.Digit2.prototype.quantum$core$data$finger_tree$Splittable$split$arity$3 = (function (___38676__auto__,p_38745,i_38744){
var self__ = this;
var ___38676__auto____$1 = this;
var i_38744__$1 = quantum.core.data.finger_tree.opfn.call(null,self__.meter_obj).call(null,i_38744,quantum.core.data.finger_tree.measure.call(null,self__.meter_obj,self__.a));
if(cljs.core.truth_(p_38745.call(null,i_38744__$1))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,self__.a,quantum.core.data.finger_tree.digit.call(null,self__.meter_obj,self__.b)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quantum.core.data.finger_tree.digit.call(null,self__.meter_obj,self__.a),self__.b,null], null);
}
});

quantum.core.data.finger_tree.Digit2.prototype.quantum$core$data$finger_tree$Measured$ = true;

quantum.core.data.finger_tree.Digit2.prototype.quantum$core$data$finger_tree$Measured$measured$arity$1 = (function (___38676__auto__){
var self__ = this;
var ___38676__auto____$1 = this;
return cljs.core.deref.call(null,self__.measure_ref);
});

quantum.core.data.finger_tree.Digit2.prototype.quantum$core$data$finger_tree$Measured$getMeter$arity$1 = (function (___38676__auto__){
var self__ = this;
var ___38676__auto____$1 = this;
return self__.meter_obj;
});

quantum.core.data.finger_tree.Digit2.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (___38676__auto__,i_38744,notfound__38677__auto__){
var self__ = this;
var ___38676__auto____$1 = this;
if((i_38744 === ((0) | (0)))){
return self__.a;
} else {
if((i_38744 === ((1) | (0)))){
return self__.b;
} else {
return notfound__38677__auto__;

}
}
});

quantum.core.data.finger_tree.Digit2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (___38674__auto__,x__38675__auto__){
var self__ = this;
var ___38674__auto____$1 = this;
return false;
});

quantum.core.data.finger_tree.Digit2.prototype.cljs$core$ICounted$_count$arity$1 = (function (___38676__auto__){
var self__ = this;
var ___38676__auto____$1 = this;
return 2;
});

quantum.core.data.finger_tree.Digit2.prototype.cljs$core$IStack$_peek$arity$1 = (function (___38676__auto__){
var self__ = this;
var ___38676__auto____$1 = this;
return self__.b;
});

quantum.core.data.finger_tree.Digit2.prototype.cljs$core$IStack$_pop$arity$1 = (function (___38676__auto__){
var self__ = this;
var ___38676__auto____$1 = this;
return quantum.core.data.finger_tree.digit.call(null,self__.meter_obj,self__.a);
});

quantum.core.data.finger_tree.Digit2.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (___38674__auto__){
var self__ = this;
var ___38674__auto____$1 = this;
return null;
});

quantum.core.data.finger_tree.Digit2.prototype.cljs$core$INext$_next$arity$1 = (function (___38667__auto__){
var self__ = this;
var ___38667__auto____$1 = this;
return quantum.core.data.finger_tree.digit.call(null,self__.meter_obj,self__.b);
});

quantum.core.data.finger_tree.Digit2.prototype.cljs$core$ISeq$_first$arity$1 = (function (___38666__auto__){
var self__ = this;
var ___38666__auto____$1 = this;
return self__.a;
});

quantum.core.data.finger_tree.Digit2.prototype.cljs$core$ISeq$_rest$arity$1 = (function (___38671__auto__){
var self__ = this;
var ___38671__auto____$1 = this;
return quantum.core.data.finger_tree.digit.call(null,self__.meter_obj,self__.b);
});

quantum.core.data.finger_tree.Digit2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (___38676__auto__){
var self__ = this;
var ___38676__auto____$1 = this;
return cljs.core.cons.call(null,self__.a,cljs.core.cons.call(null,self__.b,null));
});

quantum.core.data.finger_tree.Digit2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (___38674__auto__,x__38675__auto__){
var self__ = this;
var ___38674__auto____$1 = this;
return quantum.core.data.finger_tree.digit.call(null,self__.meter_obj,self__.a,self__.b,x__38675__auto__);
});

quantum.core.data.finger_tree.Digit2.prototype.quantum$core$data$finger_tree$ConjL$ = true;

quantum.core.data.finger_tree.Digit2.prototype.quantum$core$data$finger_tree$ConjL$conjl$arity$2 = (function (___38676__auto__,x__38678__auto__){
var self__ = this;
var ___38676__auto____$1 = this;
return quantum.core.data.finger_tree.digit.call(null,self__.meter_obj,x__38678__auto__,self__.a,self__.b);
});

quantum.core.data.finger_tree.Digit2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"meter-obj","meter-obj",2104917133,null),new cljs.core.Symbol(null,"measure-ref","measure-ref",-236477329,null)], null);
});

quantum.core.data.finger_tree.Digit2.cljs$lang$type = true;

quantum.core.data.finger_tree.Digit2.cljs$lang$ctorStr = "quantum.core.data.finger-tree/Digit2";

quantum.core.data.finger_tree.Digit2.cljs$lang$ctorPrWriter = (function (this__18123__auto__,writer__18124__auto__,opt__18125__auto__){
return cljs.core._write.call(null,writer__18124__auto__,"quantum.core.data.finger-tree/Digit2");
});

quantum.core.data.finger_tree.__GT_Digit2 = (function quantum$core$data$finger_tree$__GT_Digit2(a,b,meter_obj,measure_ref){
return (new quantum.core.data.finger_tree.Digit2(a,b,meter_obj,measure_ref));
});


/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IEquiv}
 * @implements {quantum.core.data.finger_tree.ConjL}
 * @implements {cljs.core.ICollection}
 * @implements {quantum.core.data.finger_tree.Measured}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {quantum.core.data.finger_tree.Splittable}
 * @implements {cljs.core.ISeq}
 * @implements {cljs.core.INext}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IStack}
 * @implements {cljs.core.ISequential}
*/
quantum.core.data.finger_tree.Digit3 = (function (a,b,c,meter_obj,measure_ref){
this.a = a;
this.b = b;
this.c = c;
this.meter_obj = meter_obj;
this.measure_ref = measure_ref;
this.cljs$lang$protocol_mask$partition0$ = 27271390;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
quantum.core.data.finger_tree.Digit3.prototype.quantum$core$data$finger_tree$Splittable$ = true;

quantum.core.data.finger_tree.Digit3.prototype.quantum$core$data$finger_tree$Splittable$split$arity$3 = (function (___38676__auto__,p_38748,i_38747){
var self__ = this;
var ___38676__auto____$1 = this;
var i_38747__$1 = quantum.core.data.finger_tree.opfn.call(null,self__.meter_obj).call(null,i_38747,quantum.core.data.finger_tree.measure.call(null,self__.meter_obj,self__.a));
if(cljs.core.truth_(p_38748.call(null,i_38747__$1))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,self__.a,quantum.core.data.finger_tree.digit.call(null,self__.meter_obj,self__.b,self__.c)], null);
} else {
var i_38747__$2 = quantum.core.data.finger_tree.opfn.call(null,self__.meter_obj).call(null,i_38747__$1,quantum.core.data.finger_tree.measure.call(null,self__.meter_obj,self__.b));
if(cljs.core.truth_(p_38748.call(null,i_38747__$2))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quantum.core.data.finger_tree.digit.call(null,self__.meter_obj,self__.a),self__.b,quantum.core.data.finger_tree.digit.call(null,self__.meter_obj,self__.c)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quantum.core.data.finger_tree.digit.call(null,self__.meter_obj,self__.a,self__.b),self__.c,null], null);
}
}
});

quantum.core.data.finger_tree.Digit3.prototype.quantum$core$data$finger_tree$Measured$ = true;

quantum.core.data.finger_tree.Digit3.prototype.quantum$core$data$finger_tree$Measured$measured$arity$1 = (function (___38676__auto__){
var self__ = this;
var ___38676__auto____$1 = this;
return cljs.core.deref.call(null,self__.measure_ref);
});

quantum.core.data.finger_tree.Digit3.prototype.quantum$core$data$finger_tree$Measured$getMeter$arity$1 = (function (___38676__auto__){
var self__ = this;
var ___38676__auto____$1 = this;
return self__.meter_obj;
});

quantum.core.data.finger_tree.Digit3.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (___38676__auto__,i_38747,notfound__38677__auto__){
var self__ = this;
var ___38676__auto____$1 = this;
if((i_38747 === ((0) | (0)))){
return self__.a;
} else {
if((i_38747 === ((1) | (0)))){
return self__.b;
} else {
if((i_38747 === ((2) | (0)))){
return self__.c;
} else {
return notfound__38677__auto__;

}
}
}
});

quantum.core.data.finger_tree.Digit3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (___38674__auto__,x__38675__auto__){
var self__ = this;
var ___38674__auto____$1 = this;
return false;
});

quantum.core.data.finger_tree.Digit3.prototype.cljs$core$ICounted$_count$arity$1 = (function (___38676__auto__){
var self__ = this;
var ___38676__auto____$1 = this;
return 3;
});

quantum.core.data.finger_tree.Digit3.prototype.cljs$core$IStack$_peek$arity$1 = (function (___38676__auto__){
var self__ = this;
var ___38676__auto____$1 = this;
return self__.c;
});

quantum.core.data.finger_tree.Digit3.prototype.cljs$core$IStack$_pop$arity$1 = (function (___38676__auto__){
var self__ = this;
var ___38676__auto____$1 = this;
return quantum.core.data.finger_tree.digit.call(null,self__.meter_obj,self__.a,self__.b);
});

quantum.core.data.finger_tree.Digit3.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (___38674__auto__){
var self__ = this;
var ___38674__auto____$1 = this;
return null;
});

quantum.core.data.finger_tree.Digit3.prototype.cljs$core$INext$_next$arity$1 = (function (___38667__auto__){
var self__ = this;
var ___38667__auto____$1 = this;
return quantum.core.data.finger_tree.digit.call(null,self__.meter_obj,self__.b,self__.c);
});

quantum.core.data.finger_tree.Digit3.prototype.cljs$core$ISeq$_first$arity$1 = (function (___38666__auto__){
var self__ = this;
var ___38666__auto____$1 = this;
return self__.a;
});

quantum.core.data.finger_tree.Digit3.prototype.cljs$core$ISeq$_rest$arity$1 = (function (___38671__auto__){
var self__ = this;
var ___38671__auto____$1 = this;
return quantum.core.data.finger_tree.digit.call(null,self__.meter_obj,self__.b,self__.c);
});

quantum.core.data.finger_tree.Digit3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (___38676__auto__){
var self__ = this;
var ___38676__auto____$1 = this;
return cljs.core.cons.call(null,self__.a,cljs.core.cons.call(null,self__.b,cljs.core.cons.call(null,self__.c,null)));
});

quantum.core.data.finger_tree.Digit3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (___38674__auto__,x__38675__auto__){
var self__ = this;
var ___38674__auto____$1 = this;
return quantum.core.data.finger_tree.digit.call(null,self__.meter_obj,self__.a,self__.b,self__.c,x__38675__auto__);
});

quantum.core.data.finger_tree.Digit3.prototype.quantum$core$data$finger_tree$ConjL$ = true;

quantum.core.data.finger_tree.Digit3.prototype.quantum$core$data$finger_tree$ConjL$conjl$arity$2 = (function (___38676__auto__,x__38678__auto__){
var self__ = this;
var ___38676__auto____$1 = this;
return quantum.core.data.finger_tree.digit.call(null,self__.meter_obj,x__38678__auto__,self__.a,self__.b,self__.c);
});

quantum.core.data.finger_tree.Digit3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"c","c",-122660552,null),new cljs.core.Symbol(null,"meter-obj","meter-obj",2104917133,null),new cljs.core.Symbol(null,"measure-ref","measure-ref",-236477329,null)], null);
});

quantum.core.data.finger_tree.Digit3.cljs$lang$type = true;

quantum.core.data.finger_tree.Digit3.cljs$lang$ctorStr = "quantum.core.data.finger-tree/Digit3";

quantum.core.data.finger_tree.Digit3.cljs$lang$ctorPrWriter = (function (this__18123__auto__,writer__18124__auto__,opt__18125__auto__){
return cljs.core._write.call(null,writer__18124__auto__,"quantum.core.data.finger-tree/Digit3");
});

quantum.core.data.finger_tree.__GT_Digit3 = (function quantum$core$data$finger_tree$__GT_Digit3(a,b,c,meter_obj,measure_ref){
return (new quantum.core.data.finger_tree.Digit3(a,b,c,meter_obj,measure_ref));
});


/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IEquiv}
 * @implements {quantum.core.data.finger_tree.ConjL}
 * @implements {cljs.core.ICollection}
 * @implements {quantum.core.data.finger_tree.Measured}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {quantum.core.data.finger_tree.Splittable}
 * @implements {cljs.core.ISeq}
 * @implements {cljs.core.INext}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IStack}
 * @implements {cljs.core.ISequential}
*/
quantum.core.data.finger_tree.Digit4 = (function (a,b,c,d,meter_obj,measure_ref){
this.a = a;
this.b = b;
this.c = c;
this.d = d;
this.meter_obj = meter_obj;
this.measure_ref = measure_ref;
this.cljs$lang$protocol_mask$partition0$ = 27271390;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
quantum.core.data.finger_tree.Digit4.prototype.quantum$core$data$finger_tree$Splittable$ = true;

quantum.core.data.finger_tree.Digit4.prototype.quantum$core$data$finger_tree$Splittable$split$arity$3 = (function (___38676__auto__,p_38751,i_38750){
var self__ = this;
var ___38676__auto____$1 = this;
var i_38750__$1 = quantum.core.data.finger_tree.opfn.call(null,self__.meter_obj).call(null,i_38750,quantum.core.data.finger_tree.measure.call(null,self__.meter_obj,self__.a));
if(cljs.core.truth_(p_38751.call(null,i_38750__$1))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,self__.a,quantum.core.data.finger_tree.digit.call(null,self__.meter_obj,self__.b,self__.c,self__.d)], null);
} else {
var i_38750__$2 = quantum.core.data.finger_tree.opfn.call(null,self__.meter_obj).call(null,i_38750__$1,quantum.core.data.finger_tree.measure.call(null,self__.meter_obj,self__.b));
if(cljs.core.truth_(p_38751.call(null,i_38750__$2))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quantum.core.data.finger_tree.digit.call(null,self__.meter_obj,self__.a),self__.b,quantum.core.data.finger_tree.digit.call(null,self__.meter_obj,self__.c,self__.d)], null);
} else {
var i_38750__$3 = quantum.core.data.finger_tree.opfn.call(null,self__.meter_obj).call(null,i_38750__$2,quantum.core.data.finger_tree.measure.call(null,self__.meter_obj,self__.c));
if(cljs.core.truth_(p_38751.call(null,i_38750__$3))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quantum.core.data.finger_tree.digit.call(null,self__.meter_obj,self__.a,self__.b),self__.c,quantum.core.data.finger_tree.digit.call(null,self__.meter_obj,self__.d)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quantum.core.data.finger_tree.digit.call(null,self__.meter_obj,self__.a,self__.b,self__.c),self__.d,null], null);
}
}
}
});

quantum.core.data.finger_tree.Digit4.prototype.quantum$core$data$finger_tree$Measured$ = true;

quantum.core.data.finger_tree.Digit4.prototype.quantum$core$data$finger_tree$Measured$measured$arity$1 = (function (___38676__auto__){
var self__ = this;
var ___38676__auto____$1 = this;
return cljs.core.deref.call(null,self__.measure_ref);
});

quantum.core.data.finger_tree.Digit4.prototype.quantum$core$data$finger_tree$Measured$getMeter$arity$1 = (function (___38676__auto__){
var self__ = this;
var ___38676__auto____$1 = this;
return self__.meter_obj;
});

quantum.core.data.finger_tree.Digit4.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (___38676__auto__,i_38750,notfound__38677__auto__){
var self__ = this;
var ___38676__auto____$1 = this;
if((i_38750 === ((0) | (0)))){
return self__.a;
} else {
if((i_38750 === ((1) | (0)))){
return self__.b;
} else {
if((i_38750 === ((2) | (0)))){
return self__.c;
} else {
if((i_38750 === ((3) | (0)))){
return self__.d;
} else {
return notfound__38677__auto__;

}
}
}
}
});

quantum.core.data.finger_tree.Digit4.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (___38674__auto__,x__38675__auto__){
var self__ = this;
var ___38674__auto____$1 = this;
return false;
});

quantum.core.data.finger_tree.Digit4.prototype.cljs$core$ICounted$_count$arity$1 = (function (___38676__auto__){
var self__ = this;
var ___38676__auto____$1 = this;
return 4;
});

quantum.core.data.finger_tree.Digit4.prototype.cljs$core$IStack$_peek$arity$1 = (function (___38676__auto__){
var self__ = this;
var ___38676__auto____$1 = this;
return self__.d;
});

quantum.core.data.finger_tree.Digit4.prototype.cljs$core$IStack$_pop$arity$1 = (function (___38676__auto__){
var self__ = this;
var ___38676__auto____$1 = this;
return quantum.core.data.finger_tree.digit.call(null,self__.meter_obj,self__.a,self__.b,self__.c);
});

quantum.core.data.finger_tree.Digit4.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (___38674__auto__){
var self__ = this;
var ___38674__auto____$1 = this;
return null;
});

quantum.core.data.finger_tree.Digit4.prototype.cljs$core$INext$_next$arity$1 = (function (___38667__auto__){
var self__ = this;
var ___38667__auto____$1 = this;
return quantum.core.data.finger_tree.digit.call(null,self__.meter_obj,self__.b,self__.c,self__.d);
});

quantum.core.data.finger_tree.Digit4.prototype.cljs$core$ISeq$_first$arity$1 = (function (___38666__auto__){
var self__ = this;
var ___38666__auto____$1 = this;
return self__.a;
});

quantum.core.data.finger_tree.Digit4.prototype.cljs$core$ISeq$_rest$arity$1 = (function (___38671__auto__){
var self__ = this;
var ___38671__auto____$1 = this;
return quantum.core.data.finger_tree.digit.call(null,self__.meter_obj,self__.b,self__.c,self__.d);
});

quantum.core.data.finger_tree.Digit4.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (___38676__auto__){
var self__ = this;
var ___38676__auto____$1 = this;
return cljs.core.cons.call(null,self__.a,cljs.core.cons.call(null,self__.b,cljs.core.cons.call(null,self__.c,cljs.core.cons.call(null,self__.d,null))));
});

quantum.core.data.finger_tree.Digit4.prototype.cljs$core$ICollection$_conj$arity$2 = (function (___38674__auto__,x__38675__auto__){
var self__ = this;
var ___38674__auto____$1 = this;
return quantum.core.data.finger_tree.digit.call(null,self__.meter_obj,self__.a,self__.b,self__.c,self__.d,x__38675__auto__);
});

quantum.core.data.finger_tree.Digit4.prototype.quantum$core$data$finger_tree$ConjL$ = true;

quantum.core.data.finger_tree.Digit4.prototype.quantum$core$data$finger_tree$ConjL$conjl$arity$2 = (function (___38676__auto__,x__38678__auto__){
var self__ = this;
var ___38676__auto____$1 = this;
return quantum.core.data.finger_tree.digit.call(null,self__.meter_obj,x__38678__auto__,self__.a,self__.b,self__.c,self__.d);
});

quantum.core.data.finger_tree.Digit4.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"c","c",-122660552,null),new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.Symbol(null,"meter-obj","meter-obj",2104917133,null),new cljs.core.Symbol(null,"measure-ref","measure-ref",-236477329,null)], null);
});

quantum.core.data.finger_tree.Digit4.cljs$lang$type = true;

quantum.core.data.finger_tree.Digit4.cljs$lang$ctorStr = "quantum.core.data.finger-tree/Digit4";

quantum.core.data.finger_tree.Digit4.cljs$lang$ctorPrWriter = (function (this__18123__auto__,writer__18124__auto__,opt__18125__auto__){
return cljs.core._write.call(null,writer__18124__auto__,"quantum.core.data.finger-tree/Digit4");
});

quantum.core.data.finger_tree.__GT_Digit4 = (function quantum$core$data$finger_tree$__GT_Digit4(a,b,c,d,meter_obj,measure_ref){
return (new quantum.core.data.finger_tree.Digit4(a,b,c,d,meter_obj,measure_ref));
});

quantum.core.data.finger_tree.digit = (function quantum$core$data$finger_tree$digit(var_args){
var args38753 = [];
var len__18583__auto___38756 = arguments.length;
var i__18584__auto___38757 = (0);
while(true){
if((i__18584__auto___38757 < len__18583__auto___38756)){
args38753.push((arguments[i__18584__auto___38757]));

var G__38758 = (i__18584__auto___38757 + (1));
i__18584__auto___38757 = G__38758;
continue;
} else {
}
break;
}

var G__38755 = args38753.length;
switch (G__38755) {
case 2:
return quantum.core.data.finger_tree.digit.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quantum.core.data.finger_tree.digit.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return quantum.core.data.finger_tree.digit.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return quantum.core.data.finger_tree.digit.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38753.length)].join('')));

}
});

quantum.core.data.finger_tree.digit.cljs$core$IFn$_invoke$arity$2 = (function (meter_obj,a){
var mobj = meter_obj;
var op = quantum.core.data.finger_tree.opfn.call(null,mobj);
return (new quantum.core.data.finger_tree.Digit1(a,mobj,(cljs.core.truth_(op)?(new cljs.core.Delay(((function (mobj,op){
return (function (){
return quantum.core.data.finger_tree.measure.call(null,mobj,a);
});})(mobj,op))
,null)):null)));
});

quantum.core.data.finger_tree.digit.cljs$core$IFn$_invoke$arity$3 = (function (meter_obj,a,b){
var mobj = meter_obj;
var op = quantum.core.data.finger_tree.opfn.call(null,mobj);
return (new quantum.core.data.finger_tree.Digit2(a,b,mobj,(cljs.core.truth_(op)?(new cljs.core.Delay(((function (mobj,op){
return (function (){
return op.call(null,quantum.core.data.finger_tree.measure.call(null,mobj,a),quantum.core.data.finger_tree.measure.call(null,mobj,b));
});})(mobj,op))
,null)):null)));
});

quantum.core.data.finger_tree.digit.cljs$core$IFn$_invoke$arity$4 = (function (meter_obj,a,b,c){
var mobj = meter_obj;
var op = quantum.core.data.finger_tree.opfn.call(null,mobj);
return (new quantum.core.data.finger_tree.Digit3(a,b,c,mobj,(cljs.core.truth_(op)?(new cljs.core.Delay(((function (mobj,op){
return (function (){
return op.call(null,op.call(null,quantum.core.data.finger_tree.measure.call(null,mobj,a),quantum.core.data.finger_tree.measure.call(null,mobj,b)),quantum.core.data.finger_tree.measure.call(null,mobj,c));
});})(mobj,op))
,null)):null)));
});

quantum.core.data.finger_tree.digit.cljs$core$IFn$_invoke$arity$5 = (function (meter_obj,a,b,c,d){
var mobj = meter_obj;
var op = quantum.core.data.finger_tree.opfn.call(null,mobj);
return (new quantum.core.data.finger_tree.Digit4(a,b,c,d,mobj,(cljs.core.truth_(op)?(new cljs.core.Delay(((function (mobj,op){
return (function (){
return op.call(null,op.call(null,op.call(null,quantum.core.data.finger_tree.measure.call(null,mobj,a),quantum.core.data.finger_tree.measure.call(null,mobj,b)),quantum.core.data.finger_tree.measure.call(null,mobj,c)),quantum.core.data.finger_tree.measure.call(null,mobj,d));
});})(mobj,op))
,null)):null)));
});

quantum.core.data.finger_tree.digit.cljs$lang$maxFixedArity = 5;
quantum.core.data.finger_tree.nodes = (function quantum$core$data$finger_tree$nodes(mfns,xs){
var v = cljs.core.vec.call(null,xs);
var c = cljs.core.count.call(null,v);
return cljs.core.seq.call(null,(function (){var i = ((0) | (0));
var nds = cljs.core.PersistentVector.EMPTY;
while(true){
var pred__38763 = cljs.core._EQ__EQ_;
var expr__38764 = (c - i);
if(cljs.core.truth_(pred__38763.call(null,((2) | (0)),expr__38764))){
return cljs.core.conj.call(null,nds,quantum.core.data.finger_tree.digit.call(null,mfns,v.call(null,i),v.call(null,(((1) | (0)) + i))));
} else {
if(cljs.core.truth_(pred__38763.call(null,((3) | (0)),expr__38764))){
return cljs.core.conj.call(null,nds,quantum.core.data.finger_tree.digit.call(null,mfns,v.call(null,i),v.call(null,(((1) | (0)) + i)),v.call(null,(((2) | (0)) + i))));
} else {
if(cljs.core.truth_(pred__38763.call(null,((4) | (0)),expr__38764))){
return cljs.core.conj.call(null,cljs.core.conj.call(null,nds,quantum.core.data.finger_tree.digit.call(null,mfns,v.call(null,i),v.call(null,(((1) | (0)) + i)))),quantum.core.data.finger_tree.digit.call(null,mfns,v.call(null,(((2) | (0)) + i)),v.call(null,(((3) | (0)) + i))));
} else {
var G__38766 = (((3) | (0)) + i);
var G__38767 = cljs.core.conj.call(null,nds,quantum.core.data.finger_tree.digit.call(null,mfns,v.call(null,i),v.call(null,(((1) | (0)) + i)),v.call(null,(((2) | (0)) + i))));
i = G__38766;
nds = G__38767;
continue;
}
}
}
break;
}
})());
});

/**
* @constructor
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IEquiv}
 * @implements {quantum.core.data.finger_tree.ConjL}
 * @implements {cljs.core.ICollection}
 * @implements {quantum.core.data.finger_tree.Measured}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {quantum.core.data.finger_tree.Tree}
 * @implements {cljs.core.ISeq}
 * @implements {cljs.core.INext}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IStack}
 * @implements {cljs.core.ISequential}
*/
quantum.core.data.finger_tree.EmptyTree = (function (meter_obj){
this.meter_obj = meter_obj;
this.cljs$lang$protocol_mask$partition0$ = 161489102;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
quantum.core.data.finger_tree.EmptyTree.prototype.quantum$core$data$finger_tree$Measured$ = true;

quantum.core.data.finger_tree.EmptyTree.prototype.quantum$core$data$finger_tree$Measured$measured$arity$1 = (function (___38783__auto__){
var self__ = this;
var ___38783__auto____$1 = this;
return quantum.core.data.finger_tree.idElem.call(null,self__.meter_obj);
});

quantum.core.data.finger_tree.EmptyTree.prototype.quantum$core$data$finger_tree$Measured$getMeter$arity$1 = (function (___38784__auto__){
var self__ = this;
var ___38784__auto____$1 = this;
return self__.meter_obj;
});

quantum.core.data.finger_tree.EmptyTree.prototype.quantum$core$data$finger_tree$Tree$ = true;

quantum.core.data.finger_tree.EmptyTree.prototype.quantum$core$data$finger_tree$Tree$app3$arity$3 = (function (___38785__auto__,ts__38786__auto__,t2__38787__auto__){
var self__ = this;
var ___38785__auto____$1 = this;
return cljs.core.reduce.call(null,quantum.core.data.finger_tree.conjl,t2__38787__auto__,cljs.core.reverse.call(null,ts__38786__auto__));
});

quantum.core.data.finger_tree.EmptyTree.prototype.quantum$core$data$finger_tree$Tree$app3deep$arity$3 = (function (___38788__auto__,ts__38789__auto__,t1__38790__auto__){
var self__ = this;
var ___38788__auto____$1 = this;
return cljs.core.reduce.call(null,cljs.core.conj,t1__38790__auto__,ts__38789__auto__);
});

quantum.core.data.finger_tree.EmptyTree.prototype.quantum$core$data$finger_tree$Tree$measureMore$arity$1 = (function (___38791__auto__){
var self__ = this;
var ___38791__auto____$1 = this;
return quantum.core.data.finger_tree.idElem.call(null,self__.meter_obj);
});

quantum.core.data.finger_tree.EmptyTree.prototype.quantum$core$data$finger_tree$Tree$measurePop$arity$1 = (function (___38792__auto__){
var self__ = this;
var ___38792__auto____$1 = this;
return quantum.core.data.finger_tree.idElem.call(null,self__.meter_obj);
});

quantum.core.data.finger_tree.EmptyTree.prototype.cljs$core$ICounted$_count$arity$1 = (function (___38780__auto__){
var self__ = this;
var ___38780__auto____$1 = this;
return (0);
});

quantum.core.data.finger_tree.EmptyTree.prototype.cljs$core$IStack$_peek$arity$1 = (function (___38772__auto__){
var self__ = this;
var ___38772__auto____$1 = this;
return null;
});

quantum.core.data.finger_tree.EmptyTree.prototype.cljs$core$IStack$_pop$arity$1 = (function (this__38773__auto__){
var self__ = this;
var this__38773__auto____$1 = this;
return this__38773__auto____$1;
});

quantum.core.data.finger_tree.EmptyTree.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (___38774__auto__){
var self__ = this;
var ___38774__auto____$1 = this;
return null;
});

quantum.core.data.finger_tree.EmptyTree.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this__38775__auto__){
var self__ = this;
var this__38775__auto____$1 = this;
return this__38775__auto____$1;
});

quantum.core.data.finger_tree.EmptyTree.prototype.cljs$core$INext$_next$arity$1 = (function (___38771__auto__){
var self__ = this;
var ___38771__auto____$1 = this;
return null;
});

quantum.core.data.finger_tree.EmptyTree.prototype.cljs$core$ISeq$_first$arity$1 = (function (___38769__auto__){
var self__ = this;
var ___38769__auto____$1 = this;
return null;
});

quantum.core.data.finger_tree.EmptyTree.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this__38770__auto__){
var self__ = this;
var this__38770__auto____$1 = this;
return this__38770__auto____$1;
});

quantum.core.data.finger_tree.EmptyTree.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (___38768__auto__){
var self__ = this;
var ___38768__auto____$1 = this;
return null;
});

quantum.core.data.finger_tree.EmptyTree.prototype.cljs$core$ICollection$_conj$arity$2 = (function (___38778__auto__,b__38779__auto__){
var self__ = this;
var ___38778__auto____$1 = this;
return quantum.core.data.finger_tree.newSingleTree.call(null,self__.meter_obj,b__38779__auto__);
});

quantum.core.data.finger_tree.EmptyTree.prototype.quantum$core$data$finger_tree$ConjL$ = true;

quantum.core.data.finger_tree.EmptyTree.prototype.quantum$core$data$finger_tree$ConjL$conjl$arity$2 = (function (___38781__auto__,a__38782__auto__){
var self__ = this;
var ___38781__auto____$1 = this;
return quantum.core.data.finger_tree.newSingleTree.call(null,self__.meter_obj,a__38782__auto__);
});

quantum.core.data.finger_tree.EmptyTree.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meter-obj","meter-obj",2104917133,null)], null);
});

quantum.core.data.finger_tree.EmptyTree.cljs$lang$type = true;

quantum.core.data.finger_tree.EmptyTree.cljs$lang$ctorStr = "quantum.core.data.finger-tree/EmptyTree";

quantum.core.data.finger_tree.EmptyTree.cljs$lang$ctorPrWriter = (function (this__18123__auto__,writer__18124__auto__,opt__18125__auto__){
return cljs.core._write.call(null,writer__18124__auto__,"quantum.core.data.finger-tree/EmptyTree");
});

quantum.core.data.finger_tree.__GT_EmptyTree = (function quantum$core$data$finger_tree$__GT_EmptyTree(meter_obj){
return (new quantum.core.data.finger_tree.EmptyTree(meter_obj));
});

quantum.core.data.finger_tree.newEmptyTree = (function quantum$core$data$finger_tree$newEmptyTree(meter_obj){
return (new quantum.core.data.finger_tree.EmptyTree(meter_obj));
});
quantum.core.data.finger_tree.finger_meter = (function quantum$core$data$finger_tree$finger_meter(meter_obj){
if(cljs.core.truth_(meter_obj)){
if(typeof quantum.core.data.finger_tree.t_quantum$core$data$finger_tree38803 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {quantum.core.data.finger_tree.ObjMeter}
*/
quantum.core.data.finger_tree.t_quantum$core$data$finger_tree38803 = (function (finger_meter,meter_obj,meta38804){
this.finger_meter = finger_meter;
this.meter_obj = meter_obj;
this.meta38804 = meta38804;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
quantum.core.data.finger_tree.t_quantum$core$data$finger_tree38803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38805,meta38804__$1){
var self__ = this;
var _38805__$1 = this;
return (new quantum.core.data.finger_tree.t_quantum$core$data$finger_tree38803(self__.finger_meter,self__.meter_obj,meta38804__$1));
});

quantum.core.data.finger_tree.t_quantum$core$data$finger_tree38803.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38805){
var self__ = this;
var _38805__$1 = this;
return self__.meta38804;
});

quantum.core.data.finger_tree.t_quantum$core$data$finger_tree38803.prototype.quantum$core$data$finger_tree$ObjMeter$ = true;

quantum.core.data.finger_tree.t_quantum$core$data$finger_tree38803.prototype.quantum$core$data$finger_tree$ObjMeter$measure$arity$2 = (function (___38712__auto__,a__38713__auto__){
var self__ = this;
var ___38712__auto____$1 = this;
return ((function (___38712__auto____$1){
return (function (p1__38799_SHARP_){
return quantum.core.data.finger_tree.measured.call(null,p1__38799_SHARP_);
});})(___38712__auto____$1))
.call(null,a__38713__auto__);
});

quantum.core.data.finger_tree.t_quantum$core$data$finger_tree38803.prototype.quantum$core$data$finger_tree$ObjMeter$idElem$arity$1 = (function (___38712__auto__){
var self__ = this;
var ___38712__auto____$1 = this;
return quantum.core.data.finger_tree.idElem.call(null,self__.meter_obj);
});

quantum.core.data.finger_tree.t_quantum$core$data$finger_tree38803.prototype.quantum$core$data$finger_tree$ObjMeter$opfn$arity$1 = (function (___38712__auto__){
var self__ = this;
var ___38712__auto____$1 = this;
return quantum.core.data.finger_tree.opfn.call(null,self__.meter_obj);
});

quantum.core.data.finger_tree.t_quantum$core$data$finger_tree38803.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"finger-meter","finger-meter",1178396454,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"static","static",1214358571),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meter-obj","meter-obj",2104917133,null)], null)))], null)),new cljs.core.Symbol(null,"meter-obj","meter-obj",2104917133,null),new cljs.core.Symbol(null,"meta38804","meta38804",1230099748,null)], null);
});

quantum.core.data.finger_tree.t_quantum$core$data$finger_tree38803.cljs$lang$type = true;

quantum.core.data.finger_tree.t_quantum$core$data$finger_tree38803.cljs$lang$ctorStr = "quantum.core.data.finger-tree/t_quantum$core$data$finger_tree38803";

quantum.core.data.finger_tree.t_quantum$core$data$finger_tree38803.cljs$lang$ctorPrWriter = (function (this__18123__auto__,writer__18124__auto__,opt__18125__auto__){
return cljs.core._write.call(null,writer__18124__auto__,"quantum.core.data.finger-tree/t_quantum$core$data$finger_tree38803");
});

quantum.core.data.finger_tree.__GT_t_quantum$core$data$finger_tree38803 = (function quantum$core$data$finger_tree$finger_meter_$___GT_t_quantum$core$data$finger_tree38803(finger_meter__$1,meter_obj__$1,meta38804){
return (new quantum.core.data.finger_tree.t_quantum$core$data$finger_tree38803(finger_meter__$1,meter_obj__$1,meta38804));
});

}

return (new quantum.core.data.finger_tree.t_quantum$core$data$finger_tree38803(quantum$core$data$finger_tree$finger_meter,meter_obj,null));
} else {
return null;
}
});
quantum.core.data.finger_tree.split_tree = (function quantum$core$data$finger_tree$split_tree(t,p){
return quantum.core.data.finger_tree.split.call(null,t,p,quantum.core.data.finger_tree.idElem.call(null,quantum.core.data.finger_tree.getMeter.call(null,t)));
});

/**
* @constructor
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IEquiv}
 * @implements {quantum.core.data.finger_tree.ConjL}
 * @implements {cljs.core.ICollection}
 * @implements {quantum.core.data.finger_tree.Measured}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {quantum.core.data.finger_tree.Tree}
 * @implements {cljs.core.ISeq}
 * @implements {cljs.core.INext}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IStack}
 * @implements {cljs.core.ISequential}
*/
quantum.core.data.finger_tree.DelayedTree = (function (tree_ref,mval){
this.tree_ref = tree_ref;
this.mval = mval;
this.cljs$lang$protocol_mask$partition0$ = 161489102;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
quantum.core.data.finger_tree.DelayedTree.prototype.quantum$core$data$finger_tree$Measured$ = true;

quantum.core.data.finger_tree.DelayedTree.prototype.quantum$core$data$finger_tree$Measured$measured$arity$1 = (function (___38821__auto__){
var self__ = this;
var ___38821__auto____$1 = this;
return self__.mval;
});

quantum.core.data.finger_tree.DelayedTree.prototype.quantum$core$data$finger_tree$Measured$getMeter$arity$1 = (function (___38822__auto__){
var self__ = this;
var ___38822__auto____$1 = this;
return quantum.core.data.finger_tree.getMeter.call(null,cljs.core.deref.call(null,self__.tree_ref));
});

quantum.core.data.finger_tree.DelayedTree.prototype.quantum$core$data$finger_tree$Tree$ = true;

quantum.core.data.finger_tree.DelayedTree.prototype.quantum$core$data$finger_tree$Tree$app3$arity$3 = (function (___38826__auto__,ts__38827__auto__,t2__38828__auto__){
var self__ = this;
var ___38826__auto____$1 = this;
return quantum.core.data.finger_tree.app3.call(null,cljs.core.deref.call(null,self__.tree_ref),ts__38827__auto__,t2__38828__auto__);
});

quantum.core.data.finger_tree.DelayedTree.prototype.quantum$core$data$finger_tree$Tree$app3deep$arity$3 = (function (___38829__auto__,ts__38830__auto__,t1__38831__auto__){
var self__ = this;
var ___38829__auto____$1 = this;
return quantum.core.data.finger_tree.app3deep.call(null,cljs.core.deref.call(null,self__.tree_ref),ts__38830__auto__,t1__38831__auto__);
});

quantum.core.data.finger_tree.DelayedTree.prototype.quantum$core$data$finger_tree$Tree$measureMore$arity$1 = (function (___38832__auto__){
var self__ = this;
var ___38832__auto____$1 = this;
return quantum.core.data.finger_tree.measureMore.call(null,cljs.core.deref.call(null,self__.tree_ref));
});

quantum.core.data.finger_tree.DelayedTree.prototype.quantum$core$data$finger_tree$Tree$measurePop$arity$1 = (function (___38833__auto__){
var self__ = this;
var ___38833__auto____$1 = this;
return quantum.core.data.finger_tree.measurePop.call(null,cljs.core.deref.call(null,self__.tree_ref));
});

quantum.core.data.finger_tree.DelayedTree.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (___38815__auto__,x__38816__auto__){
var self__ = this;
var ___38815__auto____$1 = this;
return false;
});

quantum.core.data.finger_tree.DelayedTree.prototype.cljs$core$ICounted$_count$arity$1 = (function (___38813__auto__){
var self__ = this;
var ___38813__auto____$1 = this;
return null;
});

quantum.core.data.finger_tree.DelayedTree.prototype.cljs$core$IStack$_peek$arity$1 = (function (___38810__auto__){
var self__ = this;
var ___38810__auto____$1 = this;
return cljs.core.peek.call(null,cljs.core.deref.call(null,self__.tree_ref));
});

quantum.core.data.finger_tree.DelayedTree.prototype.cljs$core$IStack$_pop$arity$1 = (function (___38811__auto__){
var self__ = this;
var ___38811__auto____$1 = this;
return cljs.core.pop.call(null,cljs.core.deref.call(null,self__.tree_ref));
});

quantum.core.data.finger_tree.DelayedTree.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (___38812__auto__){
var self__ = this;
var ___38812__auto____$1 = this;
return cljs.core.rseq.call(null,cljs.core.deref.call(null,self__.tree_ref));
});

quantum.core.data.finger_tree.DelayedTree.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (___38814__auto__){
var self__ = this;
var ___38814__auto____$1 = this;
return cljs.core.empty.call(null,cljs.core.deref.call(null,self__.tree_ref));
});

quantum.core.data.finger_tree.DelayedTree.prototype.cljs$core$INext$_next$arity$1 = (function (___38809__auto__){
var self__ = this;
var ___38809__auto____$1 = this;
return cljs.core.next.call(null,cljs.core.deref.call(null,self__.tree_ref));
});

quantum.core.data.finger_tree.DelayedTree.prototype.cljs$core$ISeq$_first$arity$1 = (function (___38807__auto__){
var self__ = this;
var ___38807__auto____$1 = this;
return cljs.core.first.call(null,cljs.core.deref.call(null,self__.tree_ref));
});

quantum.core.data.finger_tree.DelayedTree.prototype.cljs$core$ISeq$_rest$arity$1 = (function (___38808__auto__){
var self__ = this;
var ___38808__auto____$1 = this;
return cljs.core.rest.call(null,cljs.core.deref.call(null,self__.tree_ref));
});

quantum.core.data.finger_tree.DelayedTree.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__38806__auto__){
var self__ = this;
var this__38806__auto____$1 = this;
return this__38806__auto____$1;
});

quantum.core.data.finger_tree.DelayedTree.prototype.quantum$core$data$finger_tree$ConjL$ = true;

quantum.core.data.finger_tree.DelayedTree.prototype.quantum$core$data$finger_tree$ConjL$conjl$arity$2 = (function (___38819__auto__,a__38820__auto__){
var self__ = this;
var ___38819__auto____$1 = this;
return quantum.core.data.finger_tree.conjl.call(null,cljs.core.deref.call(null,self__.tree_ref),a__38820__auto__);
});

quantum.core.data.finger_tree.DelayedTree.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tree-ref","tree-ref",-1340362373,null),new cljs.core.Symbol(null,"mval","mval",281105184,null)], null);
});

quantum.core.data.finger_tree.DelayedTree.cljs$lang$type = true;

quantum.core.data.finger_tree.DelayedTree.cljs$lang$ctorStr = "quantum.core.data.finger-tree/DelayedTree";

quantum.core.data.finger_tree.DelayedTree.cljs$lang$ctorPrWriter = (function (this__18123__auto__,writer__18124__auto__,opt__18125__auto__){
return cljs.core._write.call(null,writer__18124__auto__,"quantum.core.data.finger-tree/DelayedTree");
});

quantum.core.data.finger_tree.__GT_DelayedTree = (function quantum$core$data$finger_tree$__GT_DelayedTree(tree_ref,mval){
return (new quantum.core.data.finger_tree.DelayedTree(tree_ref,mval));
});

quantum.core.data.finger_tree.to_tree = (function quantum$core$data$finger_tree$to_tree(meter_obj,coll){
return cljs.core.reduce.call(null,cljs.core.conj,(new quantum.core.data.finger_tree.EmptyTree(meter_obj)),coll);
});
quantum.core.data.finger_tree.deep_left = (function quantum$core$data$finger_tree$deep_left(pre,m,suf){
if(cljs.core.seq.call(null,pre)){
return quantum.core.data.finger_tree.deep.call(null,pre,m,suf);
} else {
if(cljs.core.empty_QMARK_.call(null,cljs.core.first.call(null,m))){
return quantum.core.data.finger_tree.to_tree.call(null,quantum.core.data.finger_tree.getMeter.call(null,suf),suf);
} else {
return quantum.core.data.finger_tree.deep.call(null,cljs.core.first.call(null,m),(new quantum.core.data.finger_tree.DelayedTree((new cljs.core.Delay((function (){
return cljs.core.rest.call(null,m);
}),null)),quantum.core.data.finger_tree.measureMore.call(null,m))),suf);

}
}
});
quantum.core.data.finger_tree.deep_right = (function quantum$core$data$finger_tree$deep_right(pre,m,suf){
if(cljs.core.seq.call(null,suf)){
return quantum.core.data.finger_tree.deep.call(null,pre,m,suf);
} else {
if(cljs.core.empty_QMARK_.call(null,cljs.core.peek.call(null,m))){
return quantum.core.data.finger_tree.to_tree.call(null,quantum.core.data.finger_tree.getMeter.call(null,pre),pre);
} else {
return quantum.core.data.finger_tree.deep.call(null,pre,(new quantum.core.data.finger_tree.DelayedTree((new cljs.core.Delay((function (){
return cljs.core.pop.call(null,m);
}),null)),quantum.core.data.finger_tree.measurePop.call(null,m))),cljs.core.peek.call(null,m));

}
}
});
quantum.core.data.finger_tree.ft_concat = (function quantum$core$data$finger_tree$ft_concat(t1,t2){
if(cljs.core._EQ_.call(null,quantum.core.data.finger_tree.getMeter.call(null,t1),quantum.core.data.finger_tree.getMeter.call(null,t2))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.PersistentHashSet.fromArray([t1,t2], true)),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"getMeter","getMeter",1788748416,null),new cljs.core.Symbol(null,"t1","t1",1665503971,null)),cljs.core.list(new cljs.core.Symbol(null,"getMeter","getMeter",1788748416,null),new cljs.core.Symbol(null,"t2","t2",891676305,null)))))].join('')));
}

return quantum.core.data.finger_tree.app3.call(null,t1,null,t2);
});

/**
* @constructor
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IEquiv}
 * @implements {quantum.core.data.finger_tree.ConjL}
 * @implements {cljs.core.ICollection}
 * @implements {quantum.core.data.finger_tree.Measured}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {quantum.core.data.finger_tree.Tree}
 * @implements {cljs.core.ISeq}
 * @implements {cljs.core.INext}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IStack}
 * @implements {cljs.core.ISequential}
*/
quantum.core.data.finger_tree.SingleTree = (function (meter_obj,x){
this.meter_obj = meter_obj;
this.x = x;
this.cljs$lang$protocol_mask$partition0$ = 161489102;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
quantum.core.data.finger_tree.SingleTree.prototype.quantum$core$data$finger_tree$Measured$ = true;

quantum.core.data.finger_tree.SingleTree.prototype.quantum$core$data$finger_tree$Measured$measured$arity$1 = (function (___38855__auto__){
var self__ = this;
var ___38855__auto____$1 = this;
return quantum.core.data.finger_tree.measure.call(null,self__.meter_obj,self__.x);
});

quantum.core.data.finger_tree.SingleTree.prototype.quantum$core$data$finger_tree$Measured$getMeter$arity$1 = (function (___38856__auto__){
var self__ = this;
var ___38856__auto____$1 = this;
return self__.meter_obj;
});

quantum.core.data.finger_tree.SingleTree.prototype.quantum$core$data$finger_tree$Tree$ = true;

quantum.core.data.finger_tree.SingleTree.prototype.quantum$core$data$finger_tree$Tree$app3$arity$3 = (function (this__38861__auto__,ts__38862__auto__,t2__38863__auto__){
var self__ = this;
var this__38861__auto____$1 = this;
return quantum.core.data.finger_tree.conjl.call(null,quantum.core.data.finger_tree.app3.call(null,cljs.core.empty.call(null,this__38861__auto____$1),ts__38862__auto__,t2__38863__auto__),self__.x);
});

quantum.core.data.finger_tree.SingleTree.prototype.quantum$core$data$finger_tree$Tree$app3deep$arity$3 = (function (___38864__auto__,ts__38865__auto__,t1__38866__auto__){
var self__ = this;
var ___38864__auto____$1 = this;
return cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,t1__38866__auto__,ts__38865__auto__),self__.x);
});

quantum.core.data.finger_tree.SingleTree.prototype.quantum$core$data$finger_tree$Tree$measureMore$arity$1 = (function (___38867__auto__){
var self__ = this;
var ___38867__auto____$1 = this;
return quantum.core.data.finger_tree.idElem.call(null,self__.meter_obj);
});

quantum.core.data.finger_tree.SingleTree.prototype.quantum$core$data$finger_tree$Tree$measurePop$arity$1 = (function (___38868__auto__){
var self__ = this;
var ___38868__auto____$1 = this;
return quantum.core.data.finger_tree.idElem.call(null,self__.meter_obj);
});

quantum.core.data.finger_tree.SingleTree.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (___38849__auto__,x__38850__auto__){
var self__ = this;
var ___38849__auto____$1 = this;
return false;
});

quantum.core.data.finger_tree.SingleTree.prototype.cljs$core$ICounted$_count$arity$1 = (function (___38847__auto__){
var self__ = this;
var ___38847__auto____$1 = this;
return null;
});

quantum.core.data.finger_tree.SingleTree.prototype.cljs$core$IStack$_peek$arity$1 = (function (___38844__auto__){
var self__ = this;
var ___38844__auto____$1 = this;
return self__.x;
});

quantum.core.data.finger_tree.SingleTree.prototype.cljs$core$IStack$_pop$arity$1 = (function (___38845__auto__){
var self__ = this;
var ___38845__auto____$1 = this;
return (new quantum.core.data.finger_tree.EmptyTree(self__.meter_obj));
});

quantum.core.data.finger_tree.SingleTree.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (___38846__auto__){
var self__ = this;
var ___38846__auto____$1 = this;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.x);
});

quantum.core.data.finger_tree.SingleTree.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (___38848__auto__){
var self__ = this;
var ___38848__auto____$1 = this;
return (new quantum.core.data.finger_tree.EmptyTree(self__.meter_obj));
});

quantum.core.data.finger_tree.SingleTree.prototype.cljs$core$INext$_next$arity$1 = (function (___38843__auto__){
var self__ = this;
var ___38843__auto____$1 = this;
return null;
});

quantum.core.data.finger_tree.SingleTree.prototype.cljs$core$ISeq$_first$arity$1 = (function (___38841__auto__){
var self__ = this;
var ___38841__auto____$1 = this;
return self__.x;
});

quantum.core.data.finger_tree.SingleTree.prototype.cljs$core$ISeq$_rest$arity$1 = (function (___38842__auto__){
var self__ = this;
var ___38842__auto____$1 = this;
return (new quantum.core.data.finger_tree.EmptyTree(self__.meter_obj));
});

quantum.core.data.finger_tree.SingleTree.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__38840__auto__){
var self__ = this;
var this__38840__auto____$1 = this;
return this__38840__auto____$1;
});

quantum.core.data.finger_tree.SingleTree.prototype.cljs$core$ICollection$_conj$arity$2 = (function (___38851__auto__,b__38852__auto__){
var self__ = this;
var ___38851__auto____$1 = this;
return quantum.core.data.finger_tree.deep.call(null,quantum.core.data.finger_tree.digit.call(null,self__.meter_obj,self__.x),(new quantum.core.data.finger_tree.EmptyTree(quantum.core.data.finger_tree.finger_meter.call(null,self__.meter_obj))),quantum.core.data.finger_tree.digit.call(null,self__.meter_obj,b__38852__auto__));
});

quantum.core.data.finger_tree.SingleTree.prototype.quantum$core$data$finger_tree$ConjL$ = true;

quantum.core.data.finger_tree.SingleTree.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meter-obj","meter-obj",2104917133,null),new cljs.core.Symbol(null,"x","x",-555367584,null)], null);
});

quantum.core.data.finger_tree.SingleTree.cljs$lang$type = true;

quantum.core.data.finger_tree.SingleTree.cljs$lang$ctorStr = "quantum.core.data.finger-tree/SingleTree";

quantum.core.data.finger_tree.SingleTree.cljs$lang$ctorPrWriter = (function (this__18123__auto__,writer__18124__auto__,opt__18125__auto__){
return cljs.core._write.call(null,writer__18124__auto__,"quantum.core.data.finger-tree/SingleTree");
});

quantum.core.data.finger_tree.__GT_SingleTree = (function quantum$core$data$finger_tree$__GT_SingleTree(meter_obj,x){
return (new quantum.core.data.finger_tree.SingleTree(meter_obj,x));
});

quantum.core.data.finger_tree.newSingleTree = (function quantum$core$data$finger_tree$newSingleTree(meter_obj,x){
return (new quantum.core.data.finger_tree.SingleTree(meter_obj,x));
});
quantum.core.data.finger_tree.measured3 = (function quantum$core$data$finger_tree$measured3(meter_obj,pre,m,suf){
var temp__4425__auto__ = quantum.core.data.finger_tree.opfn.call(null,meter_obj);
if(cljs.core.truth_(temp__4425__auto__)){
var op = temp__4425__auto__;
return op.call(null,op.call(null,quantum.core.data.finger_tree.measured.call(null,pre),quantum.core.data.finger_tree.measured.call(null,m)),quantum.core.data.finger_tree.measured.call(null,suf));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IEquiv}
 * @implements {quantum.core.data.finger_tree.ConjL}
 * @implements {cljs.core.ICollection}
 * @implements {quantum.core.data.finger_tree.Measured}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {quantum.core.data.finger_tree.Tree}
 * @implements {cljs.core.ISeq}
 * @implements {cljs.core.INext}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IStack}
 * @implements {cljs.core.ISequential}
*/
quantum.core.data.finger_tree.DeepTree = (function (meter_obj,pre,mid,suf,mval){
this.meter_obj = meter_obj;
this.pre = pre;
this.mid = mid;
this.suf = suf;
this.mval = mval;
this.cljs$lang$protocol_mask$partition0$ = 161489102;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
quantum.core.data.finger_tree.DeepTree.prototype.quantum$core$data$finger_tree$Measured$ = true;

quantum.core.data.finger_tree.DeepTree.prototype.quantum$core$data$finger_tree$Measured$measured$arity$1 = (function (___38900__auto__){
var self__ = this;
var ___38900__auto____$1 = this;
return cljs.core.deref.call(null,self__.mval);
});

quantum.core.data.finger_tree.DeepTree.prototype.quantum$core$data$finger_tree$Measured$getMeter$arity$1 = (function (___38901__auto__){
var self__ = this;
var ___38901__auto____$1 = this;
return quantum.core.data.finger_tree.getMeter.call(null,self__.pre);
});

quantum.core.data.finger_tree.DeepTree.prototype.quantum$core$data$finger_tree$Tree$ = true;

quantum.core.data.finger_tree.DeepTree.prototype.quantum$core$data$finger_tree$Tree$app3$arity$3 = (function (this__38914__auto__,ts__38915__auto__,t2__38916__auto__){
var self__ = this;
var this__38914__auto____$1 = this;
return quantum.core.data.finger_tree.app3deep.call(null,t2__38916__auto__,ts__38915__auto__,this__38914__auto____$1);
});

quantum.core.data.finger_tree.DeepTree.prototype.quantum$core$data$finger_tree$Tree$app3deep$arity$3 = (function (___38917__auto__,ts__38918__auto__,t1__38919__auto__){
var self__ = this;
var ___38917__auto____$1 = this;
return quantum.core.data.finger_tree.deep.call(null,t1__38919__auto__.pre(),quantum.core.data.finger_tree.app3.call(null,t1__38919__auto__.mid(),quantum.core.data.finger_tree.nodes.call(null,self__.meter_obj,cljs.core.concat.call(null,t1__38919__auto__.suf(),ts__38918__auto__,self__.pre)),self__.mid),self__.suf);
});

quantum.core.data.finger_tree.DeepTree.prototype.quantum$core$data$finger_tree$Tree$measureMore$arity$1 = (function (this__38920__auto__){
var self__ = this;
var this__38920__auto____$1 = this;
return quantum.core.data.finger_tree.measured3.call(null,self__.meter_obj,cljs.core.rest.call(null,self__.pre),self__.mid,self__.suf);
});

quantum.core.data.finger_tree.DeepTree.prototype.quantum$core$data$finger_tree$Tree$measurePop$arity$1 = (function (this__38921__auto__){
var self__ = this;
var this__38921__auto____$1 = this;
return quantum.core.data.finger_tree.measured3.call(null,self__.meter_obj,self__.pre,self__.mid,cljs.core.pop.call(null,self__.suf));
});

quantum.core.data.finger_tree.DeepTree.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (___38884__auto__,x__38885__auto__){
var self__ = this;
var ___38884__auto____$1 = this;
return false;
});

quantum.core.data.finger_tree.DeepTree.prototype.cljs$core$ICounted$_count$arity$1 = (function (___38882__auto__){
var self__ = this;
var ___38882__auto____$1 = this;
return null;
});

quantum.core.data.finger_tree.DeepTree.prototype.cljs$core$IStack$_peek$arity$1 = (function (___38879__auto__){
var self__ = this;
var ___38879__auto____$1 = this;
return cljs.core.peek.call(null,self__.suf);
});

quantum.core.data.finger_tree.DeepTree.prototype.cljs$core$IStack$_pop$arity$1 = (function (___38880__auto__){
var self__ = this;
var ___38880__auto____$1 = this;
return quantum.core.data.finger_tree.deep_right.call(null,self__.pre,self__.mid,cljs.core.pop.call(null,self__.suf));
});

quantum.core.data.finger_tree.DeepTree.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (this__38881__auto__){
var self__ = this;
var this__38881__auto____$1 = this;
return (new cljs.core.LazySeq(null,((function (this__38881__auto____$1){
return (function (){
return cljs.core.cons.call(null,cljs.core.peek.call(null,this__38881__auto____$1),cljs.core.rseq.call(null,cljs.core.pop.call(null,this__38881__auto____$1)));
});})(this__38881__auto____$1))
,null,null));
});

quantum.core.data.finger_tree.DeepTree.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (___38883__auto__){
var self__ = this;
var ___38883__auto____$1 = this;
return quantum.core.data.finger_tree.newEmptyTree.call(null,self__.meter_obj);
});

quantum.core.data.finger_tree.DeepTree.prototype.cljs$core$INext$_next$arity$1 = (function (this__38878__auto__){
var self__ = this;
var this__38878__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.rest.call(null,this__38878__auto____$1));
});

quantum.core.data.finger_tree.DeepTree.prototype.cljs$core$ISeq$_first$arity$1 = (function (___38876__auto__){
var self__ = this;
var ___38876__auto____$1 = this;
return cljs.core.first.call(null,self__.pre);
});

quantum.core.data.finger_tree.DeepTree.prototype.cljs$core$ISeq$_rest$arity$1 = (function (___38877__auto__){
var self__ = this;
var ___38877__auto____$1 = this;
return quantum.core.data.finger_tree.deep_left.call(null,cljs.core.rest.call(null,self__.pre),self__.mid,self__.suf);
});

quantum.core.data.finger_tree.DeepTree.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__38875__auto__){
var self__ = this;
var this__38875__auto____$1 = this;
return this__38875__auto____$1;
});

quantum.core.data.finger_tree.DeepTree.prototype.cljs$core$ICollection$_conj$arity$2 = (function (___38886__auto__,a__38887__auto__){
var self__ = this;
var ___38886__auto____$1 = this;
if((cljs.core.count.call(null,self__.suf) < (4))){
return quantum.core.data.finger_tree.deep.call(null,self__.pre,self__.mid,cljs.core.conj.call(null,self__.suf,a__38887__auto__));
} else {
var vec__38928 = self__.suf;
var e__38888__auto__ = cljs.core.nth.call(null,vec__38928,(0),null);
var d__38889__auto__ = cljs.core.nth.call(null,vec__38928,(1),null);
var c__38890__auto__ = cljs.core.nth.call(null,vec__38928,(2),null);
var b__38891__auto__ = cljs.core.nth.call(null,vec__38928,(3),null);
var n__38892__auto__ = quantum.core.data.finger_tree.digit.call(null,self__.meter_obj,e__38888__auto__,d__38889__auto__,c__38890__auto__);
return quantum.core.data.finger_tree.deep.call(null,self__.pre,cljs.core.conj.call(null,self__.mid,n__38892__auto__),quantum.core.data.finger_tree.digit.call(null,self__.meter_obj,b__38891__auto__,a__38887__auto__));
}
});

quantum.core.data.finger_tree.DeepTree.prototype.quantum$core$data$finger_tree$ConjL$ = true;

quantum.core.data.finger_tree.DeepTree.prototype.quantum$core$data$finger_tree$ConjL$conjl$arity$2 = (function (___38893__auto__,a__38894__auto__){
var self__ = this;
var ___38893__auto____$1 = this;
if((cljs.core.count.call(null,self__.pre) < (4))){
return quantum.core.data.finger_tree.deep.call(null,quantum.core.data.finger_tree.conjl.call(null,self__.pre,a__38894__auto__),self__.mid,self__.suf);
} else {
var vec__38929 = self__.pre;
var b__38895__auto__ = cljs.core.nth.call(null,vec__38929,(0),null);
var c__38896__auto__ = cljs.core.nth.call(null,vec__38929,(1),null);
var d__38897__auto__ = cljs.core.nth.call(null,vec__38929,(2),null);
var e__38898__auto__ = cljs.core.nth.call(null,vec__38929,(3),null);
var n__38899__auto__ = quantum.core.data.finger_tree.digit.call(null,self__.meter_obj,c__38896__auto__,d__38897__auto__,e__38898__auto__);
return quantum.core.data.finger_tree.deep.call(null,quantum.core.data.finger_tree.digit.call(null,self__.meter_obj,a__38894__auto__,b__38895__auto__),quantum.core.data.finger_tree.conjl.call(null,self__.mid,n__38899__auto__),self__.suf);
}
});

quantum.core.data.finger_tree.DeepTree.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meter-obj","meter-obj",2104917133,null),new cljs.core.Symbol(null,"pre","pre",-535978900,null),new cljs.core.Symbol(null,"mid","mid",-482853719,null),new cljs.core.Symbol(null,"suf","suf",-684756062,null),new cljs.core.Symbol(null,"mval","mval",281105184,null)], null);
});

quantum.core.data.finger_tree.DeepTree.cljs$lang$type = true;

quantum.core.data.finger_tree.DeepTree.cljs$lang$ctorStr = "quantum.core.data.finger-tree/DeepTree";

quantum.core.data.finger_tree.DeepTree.cljs$lang$ctorPrWriter = (function (this__18123__auto__,writer__18124__auto__,opt__18125__auto__){
return cljs.core._write.call(null,writer__18124__auto__,"quantum.core.data.finger-tree/DeepTree");
});

quantum.core.data.finger_tree.__GT_DeepTree = (function quantum$core$data$finger_tree$__GT_DeepTree(meter_obj,pre,mid,suf,mval){
return (new quantum.core.data.finger_tree.DeepTree(meter_obj,pre,mid,suf,mval));
});

quantum.core.data.finger_tree.newDeepTree = (function quantum$core$data$finger_tree$newDeepTree(meter_obj,pre,mid,suf,mval){
return (new quantum.core.data.finger_tree.DeepTree(meter_obj,pre,mid,suf,mval));
});
quantum.core.data.finger_tree.deep = (function quantum$core$data$finger_tree$deep(pre,m,suf){
var meter_obj = quantum.core.data.finger_tree.getMeter.call(null,pre);
var op = quantum.core.data.finger_tree.opfn.call(null,meter_obj);
return quantum.core.data.finger_tree.newDeepTree.call(null,meter_obj,pre,m,suf,(cljs.core.truth_(op)?(new cljs.core.Delay(((function (meter_obj,op){
return (function (){
if(cljs.core.seq.call(null,m)){
return quantum.core.data.finger_tree.measured3.call(null,meter_obj,pre,m,suf);
} else {
return op.call(null,quantum.core.data.finger_tree.measured.call(null,pre),quantum.core.data.finger_tree.measured.call(null,suf));
}
});})(meter_obj,op))
,null)):null));
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IEquiv}
 * @implements {quantum.core.data.finger_tree.ConjL}
 * @implements {cljs.core.ICollection}
 * @implements {quantum.core.data.finger_tree.Object}
 * @implements {quantum.core.data.finger_tree.Measured}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {quantum.core.data.finger_tree.Tree}
 * @implements {cljs.core.ISeq}
 * @implements {cljs.core.INext}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IStack}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
quantum.core.data.finger_tree.CountedDoubleList = (function (tree,mdata){
this.tree = tree;
this.mdata = mdata;
this.cljs$lang$protocol_mask$partition0$ = 161883102;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
quantum.core.data.finger_tree.CountedDoubleList.prototype.quantum$core$data$finger_tree$Measured$ = true;

quantum.core.data.finger_tree.CountedDoubleList.prototype.quantum$core$data$finger_tree$Measured$measured$arity$1 = (function (___38980__auto__){
var self__ = this;
var ___38980__auto____$1 = this;
return quantum.core.data.finger_tree.measured.call(null,self__.tree);
});

quantum.core.data.finger_tree.CountedDoubleList.prototype.quantum$core$data$finger_tree$Measured$getMeter$arity$1 = (function (___38981__auto__){
var self__ = this;
var ___38981__auto____$1 = this;
return quantum.core.data.finger_tree.getMeter.call(null,self__.tree);
});

quantum.core.data.finger_tree.CountedDoubleList.prototype.equiv = (function (x__38931__auto__){
var self__ = this;
var ___38930__auto__ = this;
return quantum.core.core.seq_equals.call(null,self__.tree,x__38931__auto__);
});

quantum.core.data.finger_tree.CountedDoubleList.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__38966__auto__,n__38967__auto__,notfound__38968__auto__){
var self__ = this;
var this__38966__auto____$1 = this;
if(cljs.core.truth_(this__38966__auto____$1.containsKey(n__38967__auto__))){
return cljs.core.second.call(null,quantum.core.data.finger_tree.split_tree.call(null,self__.tree,((function (this__38966__auto____$1){
return (function (p1__38965__38969__auto__){
return (p1__38965__38969__auto__ > n__38967__auto__);
});})(this__38966__auto____$1))
));
} else {
return notfound__38968__auto__;
}
});

quantum.core.data.finger_tree.CountedDoubleList.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__38966__auto__,n__38967__auto__){
var self__ = this;
var this__38966__auto____$1 = this;
return this__38966__auto____$1.valAt(n__38967__auto__,null);
});

quantum.core.data.finger_tree.CountedDoubleList.prototype.quantum$core$data$finger_tree$Tree$ = true;

quantum.core.data.finger_tree.CountedDoubleList.prototype.quantum$core$data$finger_tree$Tree$app3$arity$3 = (function (___38982__auto__,ts__38983__auto__,t2__38984__auto__){
var self__ = this;
var ___38982__auto____$1 = this;
return (new quantum.core.data.finger_tree.CountedDoubleList(quantum.core.data.finger_tree.app3.call(null,self__.tree,ts__38983__auto__,t2__38984__auto__.tree()),self__.mdata));
});

quantum.core.data.finger_tree.CountedDoubleList.prototype.quantum$core$data$finger_tree$Tree$app3deep$arity$3 = (function (___38985__auto__,ts__38986__auto__,t1__38987__auto__){
var self__ = this;
var ___38985__auto____$1 = this;
throw (new Error("Not implemented"));
});

quantum.core.data.finger_tree.CountedDoubleList.prototype.quantum$core$data$finger_tree$Tree$measureMore$arity$1 = (function (___38988__auto__){
var self__ = this;
var ___38988__auto____$1 = this;
return quantum.core.data.finger_tree.measureMore.call(null,self__.tree);
});

quantum.core.data.finger_tree.CountedDoubleList.prototype.quantum$core$data$finger_tree$Tree$measurePop$arity$1 = (function (___38989__auto__){
var self__ = this;
var ___38989__auto____$1 = this;
return quantum.core.data.finger_tree.measurePop.call(null,self__.tree);
});

quantum.core.data.finger_tree.CountedDoubleList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this__38972__auto__,n__38973__auto__,notfound__38974__auto__){
var self__ = this;
var this__38972__auto____$1 = this;
if(cljs.core.truth_(this__38972__auto____$1.containsKey(n__38973__auto__))){
return cljs.core.second.call(null,quantum.core.data.finger_tree.split_tree.call(null,self__.tree,((function (this__38972__auto____$1){
return (function (p1__38970__38975__auto__){
return (p1__38970__38975__auto__ > n__38973__auto__);
});})(this__38972__auto____$1))
));
} else {
return notfound__38974__auto__;
}
});

quantum.core.data.finger_tree.CountedDoubleList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this__38972__auto__,n__38973__auto__){
var self__ = this;
var this__38972__auto____$1 = this;
if(cljs.core.truth_(this__38972__auto____$1.containsKey(n__38973__auto__))){
return cljs.core.second.call(null,quantum.core.data.finger_tree.split_tree.call(null,self__.tree,((function (this__38972__auto____$1){
return (function (p1__38971__38976__auto__){
return (p1__38971__38976__auto__ > n__38973__auto__);
});})(this__38972__auto____$1))
));
} else {
throw (new quantum.core.data.finger_tree.IndexOutOfBoundsException(null,null,null));
}
});

quantum.core.data.finger_tree.CountedDoubleList.prototype.cljs$core$ICounted$_count$arity$1 = (function (___38945__auto__){
var self__ = this;
var ___38945__auto____$1 = this;
return quantum.core.data.finger_tree.measured.call(null,self__.tree);
});

quantum.core.data.finger_tree.CountedDoubleList.prototype.cljs$core$IStack$_peek$arity$1 = (function (___38942__auto__){
var self__ = this;
var ___38942__auto____$1 = this;
return cljs.core.peek.call(null,self__.tree);
});

quantum.core.data.finger_tree.CountedDoubleList.prototype.cljs$core$IStack$_pop$arity$1 = (function (___38943__auto__){
var self__ = this;
var ___38943__auto____$1 = this;
return (new quantum.core.data.finger_tree.CountedDoubleList(cljs.core.pop.call(null,self__.tree),self__.mdata));
});

quantum.core.data.finger_tree.CountedDoubleList.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (___38944__auto__){
var self__ = this;
var ___38944__auto____$1 = this;
return cljs.core.rseq.call(null,self__.tree);
});

quantum.core.data.finger_tree.CountedDoubleList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (___38946__auto__){
var self__ = this;
var ___38946__auto____$1 = this;
return (new quantum.core.data.finger_tree.CountedDoubleList(cljs.core.empty.call(null,self__.tree),self__.mdata));
});

quantum.core.data.finger_tree.CountedDoubleList.prototype.cljs$core$INext$_next$arity$1 = (function (___38940__auto__){
var self__ = this;
var ___38940__auto____$1 = this;
var temp__4423__auto__ = cljs.core.next.call(null,self__.tree);
if(temp__4423__auto__){
var t__38941__auto__ = temp__4423__auto__;
return (new quantum.core.data.finger_tree.CountedDoubleList(t__38941__auto__,self__.mdata));
} else {
return null;
}
});

quantum.core.data.finger_tree.CountedDoubleList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (___38934__auto__){
var self__ = this;
var ___38934__auto____$1 = this;
return self__.mdata;
});

quantum.core.data.finger_tree.CountedDoubleList.prototype.cljs$core$ISeq$_first$arity$1 = (function (___38938__auto__){
var self__ = this;
var ___38938__auto____$1 = this;
return cljs.core.first.call(null,self__.tree);
});

quantum.core.data.finger_tree.CountedDoubleList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (___38939__auto__){
var self__ = this;
var ___38939__auto____$1 = this;
return (new quantum.core.data.finger_tree.CountedDoubleList(cljs.core.rest.call(null,self__.tree),self__.mdata));
});

quantum.core.data.finger_tree.CountedDoubleList.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__38952__auto__,k__38953__auto__,v__38954__auto__){
var self__ = this;
var this__38952__auto____$1 = this;
if((k__38953__auto__ === (-1))){
return quantum.core.data.finger_tree.conjl.call(null,this__38952__auto____$1,v__38954__auto__);
} else {
if((k__38953__auto__ === quantum.core.data.finger_tree.measured.call(null,self__.tree))){
return cljs.core.conj.call(null,this__38952__auto____$1,v__38954__auto__);
} else {
if((((-1) < k__38953__auto__)) && ((k__38953__auto__ < quantum.core.data.finger_tree.measured.call(null,self__.tree)))){
var vec__39005 = quantum.core.data.finger_tree.split_tree.call(null,self__.tree,((function (this__38952__auto____$1){
return (function (p1__38951__38958__auto__){
return (p1__38951__38958__auto__ > k__38953__auto__);
});})(this__38952__auto____$1))
);
var pre__38955__auto__ = cljs.core.nth.call(null,vec__39005,(0),null);
var mid__38956__auto__ = cljs.core.nth.call(null,vec__39005,(1),null);
var post__38957__auto__ = cljs.core.nth.call(null,vec__39005,(2),null);
return (new quantum.core.data.finger_tree.CountedDoubleList(quantum.core.data.finger_tree.ft_concat.call(null,cljs.core.conj.call(null,pre__38955__auto__,v__38954__auto__),post__38957__auto__),self__.mdata));
} else {
throw (new quantum.core.data.finger_tree.IndexOutOfBoundsException(null,null,null));

}
}
}
});

quantum.core.data.finger_tree.CountedDoubleList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__38937__auto__){
var self__ = this;
var this__38937__auto____$1 = this;
if(cljs.core.seq.call(null,self__.tree)){
return this__38937__auto____$1;
} else {
return null;
}
});

quantum.core.data.finger_tree.CountedDoubleList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (___38949__auto__,x__38950__auto__){
var self__ = this;
var ___38949__auto____$1 = this;
return (new quantum.core.data.finger_tree.CountedDoubleList(cljs.core.conj.call(null,self__.tree,x__38950__auto__),self__.mdata));
});

quantum.core.data.finger_tree.CountedDoubleList.prototype.quantum$core$data$finger_tree$ConjL$ = true;

quantum.core.data.finger_tree.CountedDoubleList.prototype.quantum$core$data$finger_tree$ConjL$conjl$arity$2 = (function (___38978__auto__,a__38979__auto__){
var self__ = this;
var ___38978__auto____$1 = this;
return (new quantum.core.data.finger_tree.CountedDoubleList(quantum.core.data.finger_tree.conjl.call(null,self__.tree,a__38979__auto__),self__.mdata));
});

quantum.core.data.finger_tree.CountedDoubleList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (___38935__auto__,mdata__38936__auto__){
var self__ = this;
var ___38935__auto____$1 = this;
return (new quantum.core.data.finger_tree.CountedDoubleList(self__.tree,mdata__38936__auto__));
});

quantum.core.data.finger_tree.CountedDoubleList.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tree","tree",1444219499,null),new cljs.core.Symbol(null,"mdata","mdata",-457945152,null)], null);
});

quantum.core.data.finger_tree.CountedDoubleList.cljs$lang$type = true;

quantum.core.data.finger_tree.CountedDoubleList.cljs$lang$ctorStr = "quantum.core.data.finger-tree/CountedDoubleList";

quantum.core.data.finger_tree.CountedDoubleList.cljs$lang$ctorPrWriter = (function (this__18123__auto__,writer__18124__auto__,opt__18125__auto__){
return cljs.core._write.call(null,writer__18124__auto__,"quantum.core.data.finger-tree/CountedDoubleList");
});

quantum.core.data.finger_tree.__GT_CountedDoubleList = (function quantum$core$data$finger_tree$__GT_CountedDoubleList(tree,mdata){
return (new quantum.core.data.finger_tree.CountedDoubleList(tree,mdata));
});

var G__39006_39007 = quantum.core.data.finger_tree.measure_len = cljs.core.constantly.call(null,(1));
cljs.core.alter_meta_BANG_.call(null,G__39006_39007,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"private","private",-558947994),true], null));

var G__39008_39012 = quantum.core.data.finger_tree.len_meter = (function (){
if(typeof quantum.core.data.finger_tree.t_quantum$core$data$finger_tree39009 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {quantum.core.data.finger_tree.ObjMeter}
*/
quantum.core.data.finger_tree.t_quantum$core$data$finger_tree39009 = (function (meta39010){
this.meta39010 = meta39010;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
quantum.core.data.finger_tree.t_quantum$core$data$finger_tree39009.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39011,meta39010__$1){
var self__ = this;
var _39011__$1 = this;
return (new quantum.core.data.finger_tree.t_quantum$core$data$finger_tree39009(meta39010__$1));
});

quantum.core.data.finger_tree.t_quantum$core$data$finger_tree39009.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39011){
var self__ = this;
var _39011__$1 = this;
return self__.meta39010;
});

quantum.core.data.finger_tree.t_quantum$core$data$finger_tree39009.prototype.quantum$core$data$finger_tree$ObjMeter$ = true;

quantum.core.data.finger_tree.t_quantum$core$data$finger_tree39009.prototype.quantum$core$data$finger_tree$ObjMeter$measure$arity$2 = (function (___38712__auto__,a__38713__auto__){
var self__ = this;
var ___38712__auto____$1 = this;
return quantum.core.data.finger_tree.measure_len.call(null,a__38713__auto__);
});

quantum.core.data.finger_tree.t_quantum$core$data$finger_tree39009.prototype.quantum$core$data$finger_tree$ObjMeter$idElem$arity$1 = (function (___38712__auto__){
var self__ = this;
var ___38712__auto____$1 = this;
return (0);
});

quantum.core.data.finger_tree.t_quantum$core$data$finger_tree39009.prototype.quantum$core$data$finger_tree$ObjMeter$opfn$arity$1 = (function (___38712__auto__){
var self__ = this;
var ___38712__auto____$1 = this;
return cljs.core._PLUS_;
});

quantum.core.data.finger_tree.t_quantum$core$data$finger_tree39009.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta39010","meta39010",1843629403,null)], null);
});

quantum.core.data.finger_tree.t_quantum$core$data$finger_tree39009.cljs$lang$type = true;

quantum.core.data.finger_tree.t_quantum$core$data$finger_tree39009.cljs$lang$ctorStr = "quantum.core.data.finger-tree/t_quantum$core$data$finger_tree39009";

quantum.core.data.finger_tree.t_quantum$core$data$finger_tree39009.cljs$lang$ctorPrWriter = (function (this__18123__auto__,writer__18124__auto__,opt__18125__auto__){
return cljs.core._write.call(null,writer__18124__auto__,"quantum.core.data.finger-tree/t_quantum$core$data$finger_tree39009");
});

quantum.core.data.finger_tree.__GT_t_quantum$core$data$finger_tree39009 = (function quantum$core$data$finger_tree$__GT_t_quantum$core$data$finger_tree39009(meta39010){
return (new quantum.core.data.finger_tree.t_quantum$core$data$finger_tree39009(meta39010));
});

}

return (new quantum.core.data.finger_tree.t_quantum$core$data$finger_tree39009(null));
})()
;
cljs.core.alter_meta_BANG_.call(null,G__39008_39012,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"private","private",-558947994),true], null));

quantum.core.data.finger_tree.empty_counted_double_list = (new quantum.core.data.finger_tree.CountedDoubleList((new quantum.core.data.finger_tree.EmptyTree(quantum.core.data.finger_tree.len_meter)),null));
quantum.core.data.finger_tree.counted_double_list = (function quantum$core$data$finger_tree$counted_double_list(var_args){
var args__18590__auto__ = [];
var len__18583__auto___39014 = arguments.length;
var i__18584__auto___39015 = (0);
while(true){
if((i__18584__auto___39015 < len__18583__auto___39014)){
args__18590__auto__.push((arguments[i__18584__auto___39015]));

var G__39016 = (i__18584__auto___39015 + (1));
i__18584__auto___39015 = G__39016;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.core.data.finger_tree.counted_double_list.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.core.data.finger_tree.counted_double_list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.into.call(null,quantum.core.data.finger_tree.empty_counted_double_list,args);
});

quantum.core.data.finger_tree.counted_double_list.cljs$lang$maxFixedArity = (0);

quantum.core.data.finger_tree.counted_double_list.cljs$lang$applyTo = (function (seq39013){
return quantum.core.data.finger_tree.counted_double_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39013));
});

//# sourceMappingURL=finger_tree.js.map?rel=1452702563542
/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns map cmacros]
*/
