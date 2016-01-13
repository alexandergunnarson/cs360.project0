// Compiled by ClojureScript 1.7.170 {}

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn err logic vec log res core-async async]
*/
goog.provide('quantum.core.thread');
goog.require('cljs.core');
goog.require('quantum.core.resources');
goog.require('cljs.core.async');
goog.require('clojure.core.rrb_vector');
goog.require('quantum.core.logic');
goog.require('quantum.core.log');
goog.require('quantum.core.thread.async');
goog.require('cljs.core');
goog.require('quantum.core.function$');
goog.require('quantum.core.data.vector');
goog.require('quantum.core.ns');
goog.require('quantum.core.error');
goog.require('quantum.core.collections.base');
if(typeof quantum.core.thread.reg !== 'undefined'){
} else {
/**
 * Thread registry
 */
quantum.core.thread.reg = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
quantum.core.thread.ids = (function quantum$core$thread$ids(){
return cljs.core.sort.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,quantum.core.thread.reg)));
});
if(typeof quantum.core.thread.reg_tree !== 'undefined'){
} else {
quantum.core.thread.reg_tree = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
quantum.core.thread.gen_proc_id = (function quantum$core$thread$gen_proc_id(id,parent,name_){
if(cljs.core.truth_(id)){
return id;
} else {
return cljs.core.keyword.call(null,cljs.core.gensym.call(null,(cljs.core.truth_((function (){var and__17513__auto__ = parent;
if(cljs.core.truth_(and__17513__auto__)){
return name_;
} else {
return and__17513__auto__;
}
})())?[cljs.core.str(cljs.core.name.call(null,parent)),cljs.core.str("$"),cljs.core.str(cljs.core.name.call(null,name_)),cljs.core.str(".")].join(''):(cljs.core.truth_(name_)?[cljs.core.str("$"),cljs.core.str(cljs.core.name.call(null,name_)),cljs.core.str(".")].join(''):(cljs.core.truth_(parent)?[cljs.core.str(cljs.core.name.call(null,parent)),cljs.core.str("$")].join(''):""
)))));
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
quantum.core.thread.Distributor = (function (name,work_queue,cache,max_threads,thread_registrar,threadpool,distributor_fn,interrupted_QMARK_,log,__meta,__extmap,__hash){
this.name = name;
this.work_queue = work_queue;
this.cache = cache;
this.max_threads = max_threads;
this.thread_registrar = thread_registrar;
this.threadpool = threadpool;
this.distributor_fn = distributor_fn;
this.interrupted_QMARK_ = interrupted_QMARK_;
this.log = log;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
quantum.core.thread.Distributor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18139__auto__,k__18140__auto__){
var self__ = this;
var this__18139__auto____$1 = this;
return cljs.core._lookup.call(null,this__18139__auto____$1,k__18140__auto__,null);
});

quantum.core.thread.Distributor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18141__auto__,k44155,else__18142__auto__){
var self__ = this;
var this__18141__auto____$1 = this;
var G__44157 = (((k44155 instanceof cljs.core.Keyword))?k44155.fqn:null);
switch (G__44157) {
case "name":
return self__.name;

break;
case "work-queue":
return self__.work_queue;

break;
case "cache":
return self__.cache;

break;
case "max-threads":
return self__.max_threads;

break;
case "thread-registrar":
return self__.thread_registrar;

break;
case "threadpool":
return self__.threadpool;

break;
case "distributor-fn":
return self__.distributor_fn;

break;
case "interrupted?":
return self__.interrupted_QMARK_;

break;
case "log":
return self__.log;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k44155,else__18142__auto__);

}
});

quantum.core.thread.Distributor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18153__auto__,writer__18154__auto__,opts__18155__auto__){
var self__ = this;
var this__18153__auto____$1 = this;
var pr_pair__18156__auto__ = ((function (this__18153__auto____$1){
return (function (keyval__18157__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,cljs.core.pr_writer,""," ","",opts__18155__auto__,keyval__18157__auto__);
});})(this__18153__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,pr_pair__18156__auto__,"#quantum.core.thread.Distributor{",", ","}",opts__18155__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"work-queue","work-queue",593505361),self__.work_queue],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cache","cache",-1237023054),self__.cache],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-threads","max-threads",1547220122),self__.max_threads],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"thread-registrar","thread-registrar",2146025447),self__.thread_registrar],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"threadpool","threadpool",-1760002601),self__.threadpool],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"distributor-fn","distributor-fn",1804967988),self__.distributor_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"interrupted?","interrupted?",-1326131325),self__.interrupted_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"log","log",-1595516004),self__.log],null))], null),self__.__extmap));
});

quantum.core.thread.Distributor.prototype.cljs$core$IIterable$ = true;

quantum.core.thread.Distributor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44154){
var self__ = this;
var G__44154__$1 = this;
return (new cljs.core.RecordIter((0),G__44154__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"work-queue","work-queue",593505361),new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"max-threads","max-threads",1547220122),new cljs.core.Keyword(null,"thread-registrar","thread-registrar",2146025447),new cljs.core.Keyword(null,"threadpool","threadpool",-1760002601),new cljs.core.Keyword(null,"distributor-fn","distributor-fn",1804967988),new cljs.core.Keyword(null,"interrupted?","interrupted?",-1326131325),new cljs.core.Keyword(null,"log","log",-1595516004)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

quantum.core.thread.Distributor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18137__auto__){
var self__ = this;
var this__18137__auto____$1 = this;
return self__.__meta;
});

quantum.core.thread.Distributor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18133__auto__){
var self__ = this;
var this__18133__auto____$1 = this;
return (new quantum.core.thread.Distributor(self__.name,self__.work_queue,self__.cache,self__.max_threads,self__.thread_registrar,self__.threadpool,self__.distributor_fn,self__.interrupted_QMARK_,self__.log,self__.__meta,self__.__extmap,self__.__hash));
});

quantum.core.thread.Distributor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18143__auto__){
var self__ = this;
var this__18143__auto____$1 = this;
return (9 + cljs.core.count.call(null,self__.__extmap));
});

quantum.core.thread.Distributor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18134__auto__){
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

quantum.core.thread.Distributor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18135__auto__,other__18136__auto__){
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

quantum.core.thread.Distributor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18148__auto__,k__18149__auto__){
var self__ = this;
var this__18148__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"interrupted?","interrupted?",-1326131325),null,new cljs.core.Keyword(null,"thread-registrar","thread-registrar",2146025447),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"work-queue","work-queue",593505361),null,new cljs.core.Keyword(null,"cache","cache",-1237023054),null,new cljs.core.Keyword(null,"distributor-fn","distributor-fn",1804967988),null,new cljs.core.Keyword(null,"threadpool","threadpool",-1760002601),null,new cljs.core.Keyword(null,"max-threads","max-threads",1547220122),null,new cljs.core.Keyword(null,"log","log",-1595516004),null], null), null),k__18149__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18148__auto____$1),self__.__meta),k__18149__auto__);
} else {
return (new quantum.core.thread.Distributor(self__.name,self__.work_queue,self__.cache,self__.max_threads,self__.thread_registrar,self__.threadpool,self__.distributor_fn,self__.interrupted_QMARK_,self__.log,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18149__auto__)),null));
}
});

quantum.core.thread.Distributor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18146__auto__,k__18147__auto__,G__44154){
var self__ = this;
var this__18146__auto____$1 = this;
var pred__44158 = cljs.core.keyword_identical_QMARK_;
var expr__44159 = k__18147__auto__;
if(cljs.core.truth_(pred__44158.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__44159))){
return (new quantum.core.thread.Distributor(G__44154,self__.work_queue,self__.cache,self__.max_threads,self__.thread_registrar,self__.threadpool,self__.distributor_fn,self__.interrupted_QMARK_,self__.log,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44158.call(null,new cljs.core.Keyword(null,"work-queue","work-queue",593505361),expr__44159))){
return (new quantum.core.thread.Distributor(self__.name,G__44154,self__.cache,self__.max_threads,self__.thread_registrar,self__.threadpool,self__.distributor_fn,self__.interrupted_QMARK_,self__.log,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44158.call(null,new cljs.core.Keyword(null,"cache","cache",-1237023054),expr__44159))){
return (new quantum.core.thread.Distributor(self__.name,self__.work_queue,G__44154,self__.max_threads,self__.thread_registrar,self__.threadpool,self__.distributor_fn,self__.interrupted_QMARK_,self__.log,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44158.call(null,new cljs.core.Keyword(null,"max-threads","max-threads",1547220122),expr__44159))){
return (new quantum.core.thread.Distributor(self__.name,self__.work_queue,self__.cache,G__44154,self__.thread_registrar,self__.threadpool,self__.distributor_fn,self__.interrupted_QMARK_,self__.log,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44158.call(null,new cljs.core.Keyword(null,"thread-registrar","thread-registrar",2146025447),expr__44159))){
return (new quantum.core.thread.Distributor(self__.name,self__.work_queue,self__.cache,self__.max_threads,G__44154,self__.threadpool,self__.distributor_fn,self__.interrupted_QMARK_,self__.log,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44158.call(null,new cljs.core.Keyword(null,"threadpool","threadpool",-1760002601),expr__44159))){
return (new quantum.core.thread.Distributor(self__.name,self__.work_queue,self__.cache,self__.max_threads,self__.thread_registrar,G__44154,self__.distributor_fn,self__.interrupted_QMARK_,self__.log,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44158.call(null,new cljs.core.Keyword(null,"distributor-fn","distributor-fn",1804967988),expr__44159))){
return (new quantum.core.thread.Distributor(self__.name,self__.work_queue,self__.cache,self__.max_threads,self__.thread_registrar,self__.threadpool,G__44154,self__.interrupted_QMARK_,self__.log,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44158.call(null,new cljs.core.Keyword(null,"interrupted?","interrupted?",-1326131325),expr__44159))){
return (new quantum.core.thread.Distributor(self__.name,self__.work_queue,self__.cache,self__.max_threads,self__.thread_registrar,self__.threadpool,self__.distributor_fn,G__44154,self__.log,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44158.call(null,new cljs.core.Keyword(null,"log","log",-1595516004),expr__44159))){
return (new quantum.core.thread.Distributor(self__.name,self__.work_queue,self__.cache,self__.max_threads,self__.thread_registrar,self__.threadpool,self__.distributor_fn,self__.interrupted_QMARK_,G__44154,self__.__meta,self__.__extmap,null));
} else {
return (new quantum.core.thread.Distributor(self__.name,self__.work_queue,self__.cache,self__.max_threads,self__.thread_registrar,self__.threadpool,self__.distributor_fn,self__.interrupted_QMARK_,self__.log,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18147__auto__,G__44154),null));
}
}
}
}
}
}
}
}
}
});

quantum.core.thread.Distributor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18151__auto__){
var self__ = this;
var this__18151__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"work-queue","work-queue",593505361),self__.work_queue],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cache","cache",-1237023054),self__.cache],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-threads","max-threads",1547220122),self__.max_threads],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"thread-registrar","thread-registrar",2146025447),self__.thread_registrar],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"threadpool","threadpool",-1760002601),self__.threadpool],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"distributor-fn","distributor-fn",1804967988),self__.distributor_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"interrupted?","interrupted?",-1326131325),self__.interrupted_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"log","log",-1595516004),self__.log],null))], null),self__.__extmap));
});

quantum.core.thread.Distributor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18138__auto__,G__44154){
var self__ = this;
var this__18138__auto____$1 = this;
return (new quantum.core.thread.Distributor(self__.name,self__.work_queue,self__.cache,self__.max_threads,self__.thread_registrar,self__.threadpool,self__.distributor_fn,self__.interrupted_QMARK_,self__.log,G__44154,self__.__extmap,self__.__hash));
});

quantum.core.thread.Distributor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18144__auto__,entry__18145__auto__){
var self__ = this;
var this__18144__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18145__auto__)){
return cljs.core._assoc.call(null,this__18144__auto____$1,cljs.core._nth.call(null,entry__18145__auto__,(0)),cljs.core._nth.call(null,entry__18145__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18144__auto____$1,entry__18145__auto__);
}
});

quantum.core.thread.Distributor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"work-queue","work-queue",-2060930408,null),new cljs.core.Symbol(null,"cache","cache",403508473,null),new cljs.core.Symbol(null,"max-threads","max-threads",-1107215647,null),new cljs.core.Symbol(null,"thread-registrar","thread-registrar",-508410322,null),new cljs.core.Symbol(null,"threadpool","threadpool",-119471074,null),new cljs.core.Symbol(null,"distributor-fn","distributor-fn",-849467781,null),new cljs.core.Symbol(null,"interrupted?","interrupted?",314400202,null),new cljs.core.Symbol(null,"log","log",45015523,null)], null);
});

quantum.core.thread.Distributor.cljs$lang$type = true;

quantum.core.thread.Distributor.cljs$lang$ctorPrSeq = (function (this__18173__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"quantum.core.thread/Distributor");
});

quantum.core.thread.Distributor.cljs$lang$ctorPrWriter = (function (this__18173__auto__,writer__18174__auto__){
return cljs.core._write.call(null,writer__18174__auto__,"quantum.core.thread/Distributor");
});

quantum.core.thread.__GT_Distributor = (function quantum$core$thread$__GT_Distributor(name,work_queue,cache,max_threads,thread_registrar,threadpool,distributor_fn,interrupted_QMARK_,log){
return (new quantum.core.thread.Distributor(name,work_queue,cache,max_threads,thread_registrar,threadpool,distributor_fn,interrupted_QMARK_,log,null,null,null));
});

quantum.core.thread.map__GT_Distributor = (function quantum$core$thread$map__GT_Distributor(G__44156){
return (new quantum.core.thread.Distributor(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__44156),new cljs.core.Keyword(null,"work-queue","work-queue",593505361).cljs$core$IFn$_invoke$arity$1(G__44156),new cljs.core.Keyword(null,"cache","cache",-1237023054).cljs$core$IFn$_invoke$arity$1(G__44156),new cljs.core.Keyword(null,"max-threads","max-threads",1547220122).cljs$core$IFn$_invoke$arity$1(G__44156),new cljs.core.Keyword(null,"thread-registrar","thread-registrar",2146025447).cljs$core$IFn$_invoke$arity$1(G__44156),new cljs.core.Keyword(null,"threadpool","threadpool",-1760002601).cljs$core$IFn$_invoke$arity$1(G__44156),new cljs.core.Keyword(null,"distributor-fn","distributor-fn",1804967988).cljs$core$IFn$_invoke$arity$1(G__44156),new cljs.core.Keyword(null,"interrupted?","interrupted?",-1326131325).cljs$core$IFn$_invoke$arity$1(G__44156),new cljs.core.Keyword(null,"log","log",-1595516004).cljs$core$IFn$_invoke$arity$1(G__44156),null,cljs.core.dissoc.call(null,G__44156,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"work-queue","work-queue",593505361),new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"max-threads","max-threads",1547220122),new cljs.core.Keyword(null,"thread-registrar","thread-registrar",2146025447),new cljs.core.Keyword(null,"threadpool","threadpool",-1760002601),new cljs.core.Keyword(null,"distributor-fn","distributor-fn",1804967988),new cljs.core.Keyword(null,"interrupted?","interrupted?",-1326131325),new cljs.core.Keyword(null,"log","log",-1595516004)),null));
});


//# sourceMappingURL=thread.js.map?rel=1452702573249
/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn err logic vec log res core-async async]
*/
