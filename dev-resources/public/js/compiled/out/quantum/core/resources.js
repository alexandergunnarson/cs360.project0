// Compiled by ClojureScript 1.7.170 {}

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn log err logic vec log core-async async tpred]
*/
goog.provide('quantum.core.resources');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.core.rrb_vector');
goog.require('quantum.core.logic');
goog.require('quantum.core.log');
goog.require('quantum.core.type.predicates');
goog.require('quantum.core.thread.async');
goog.require('cljs.core');
goog.require('quantum.core.function$');
goog.require('quantum.core.data.vector');
goog.require('quantum.core.ns');
goog.require('quantum.core.error');
goog.require('com.stuartsierra.component');
quantum.core.resources.open_QMARK_;
quantum.core.resources.closed_QMARK_ = (function quantum$core$resources$closed_QMARK_(G__44101){
return cljs.core.not.call(null,quantum.core.resources.open_QMARK_.call(null,G__44101));
});
quantum.core.resources.close_BANG_;
quantum.core.resources.cleanup_BANG_;
quantum.core.resources.with_cleanup = (function quantum$core$resources$with_cleanup(obj,cleanup_seq){
cljs.core.swap_BANG_.call(null,cleanup_seq,cljs.core.conj,(function (){
return quantum.core.resources.close_BANG_.call(null,obj);
}));

return obj;
});
if(typeof quantum.core.resources.systems !== 'undefined'){
} else {
quantum.core.resources.systems = cljs.core.atom.call(null,null);
}

/**
 * @interface
 */
quantum.core.resources.ISystem = function(){};

quantum.core.resources.init_BANG_ = (function quantum$core$resources$init_BANG_(this$){
if((!((this$ == null))) && (!((this$.quantum$core$resources$ISystem$init_BANG_$arity$1 == null)))){
return this$.quantum$core$resources$ISystem$init_BANG_$arity$1(this$);
} else {
var x__18180__auto__ = (((this$ == null))?null:this$);
var m__18181__auto__ = (quantum.core.resources.init_BANG_[goog.typeOf(x__18180__auto__)]);
if(!((m__18181__auto__ == null))){
return m__18181__auto__.call(null,this$);
} else {
var m__18181__auto____$1 = (quantum.core.resources.init_BANG_["_"]);
if(!((m__18181__auto____$1 == null))){
return m__18181__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ISystem.init!",this$);
}
}
}
});

quantum.core.resources.start_BANG_ = (function quantum$core$resources$start_BANG_(this$){
if((!((this$ == null))) && (!((this$.quantum$core$resources$ISystem$start_BANG_$arity$1 == null)))){
return this$.quantum$core$resources$ISystem$start_BANG_$arity$1(this$);
} else {
var x__18180__auto__ = (((this$ == null))?null:this$);
var m__18181__auto__ = (quantum.core.resources.start_BANG_[goog.typeOf(x__18180__auto__)]);
if(!((m__18181__auto__ == null))){
return m__18181__auto__.call(null,this$);
} else {
var m__18181__auto____$1 = (quantum.core.resources.start_BANG_["_"]);
if(!((m__18181__auto____$1 == null))){
return m__18181__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ISystem.start!",this$);
}
}
}
});

quantum.core.resources.stop_BANG_ = (function quantum$core$resources$stop_BANG_(this$){
if((!((this$ == null))) && (!((this$.quantum$core$resources$ISystem$stop_BANG_$arity$1 == null)))){
return this$.quantum$core$resources$ISystem$stop_BANG_$arity$1(this$);
} else {
var x__18180__auto__ = (((this$ == null))?null:this$);
var m__18181__auto__ = (quantum.core.resources.stop_BANG_[goog.typeOf(x__18180__auto__)]);
if(!((m__18181__auto__ == null))){
return m__18181__auto__.call(null,this$);
} else {
var m__18181__auto____$1 = (quantum.core.resources.stop_BANG_["_"]);
if(!((m__18181__auto____$1 == null))){
return m__18181__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ISystem.stop!",this$);
}
}
}
});

quantum.core.resources.go_BANG_ = (function quantum$core$resources$go_BANG_(this$){
if((!((this$ == null))) && (!((this$.quantum$core$resources$ISystem$go_BANG_$arity$1 == null)))){
return this$.quantum$core$resources$ISystem$go_BANG_$arity$1(this$);
} else {
var x__18180__auto__ = (((this$ == null))?null:this$);
var m__18181__auto__ = (quantum.core.resources.go_BANG_[goog.typeOf(x__18180__auto__)]);
if(!((m__18181__auto__ == null))){
return m__18181__auto__.call(null,this$);
} else {
var m__18181__auto____$1 = (quantum.core.resources.go_BANG_["_"]);
if(!((m__18181__auto____$1 == null))){
return m__18181__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ISystem.go!",this$);
}
}
}
});

quantum.core.resources.reload_BANG_ = (function quantum$core$resources$reload_BANG_(var_args){
var args44103 = [];
var len__18583__auto___44106 = arguments.length;
var i__18584__auto___44107 = (0);
while(true){
if((i__18584__auto___44107 < len__18583__auto___44106)){
args44103.push((arguments[i__18584__auto___44107]));

var G__44108 = (i__18584__auto___44107 + (1));
i__18584__auto___44107 = G__44108;
continue;
} else {
}
break;
}

var G__44105 = args44103.length;
switch (G__44105) {
case 1:
return quantum.core.resources.reload_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quantum.core.resources.reload_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44103.length)].join('')));

}
});

quantum.core.resources.reload_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.quantum$core$resources$ISystem$reload_BANG_$arity$1 == null)))){
return this$.quantum$core$resources$ISystem$reload_BANG_$arity$1(this$);
} else {
var x__18180__auto__ = (((this$ == null))?null:this$);
var m__18181__auto__ = (quantum.core.resources.reload_BANG_[goog.typeOf(x__18180__auto__)]);
if(!((m__18181__auto__ == null))){
return m__18181__auto__.call(null,this$);
} else {
var m__18181__auto____$1 = (quantum.core.resources.reload_BANG_["_"]);
if(!((m__18181__auto____$1 == null))){
return m__18181__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ISystem.reload!",this$);
}
}
}
});

quantum.core.resources.reload_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,ns_){
if((!((this$ == null))) && (!((this$.quantum$core$resources$ISystem$reload_BANG_$arity$2 == null)))){
return this$.quantum$core$resources$ISystem$reload_BANG_$arity$2(this$,ns_);
} else {
var x__18180__auto__ = (((this$ == null))?null:this$);
var m__18181__auto__ = (quantum.core.resources.reload_BANG_[goog.typeOf(x__18180__auto__)]);
if(!((m__18181__auto__ == null))){
return m__18181__auto__.call(null,this$,ns_);
} else {
var m__18181__auto____$1 = (quantum.core.resources.reload_BANG_["_"]);
if(!((m__18181__auto____$1 == null))){
return m__18181__auto____$1.call(null,this$,ns_);
} else {
throw cljs.core.missing_protocol.call(null,"ISystem.reload!",this$);
}
}
}
});

quantum.core.resources.reload_BANG_.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {quantum.core.resources.ISystem}
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
quantum.core.resources.System = (function (config,sys_map,make_system,running_QMARK_,__meta,__extmap,__hash){
this.config = config;
this.sys_map = sys_map;
this.make_system = make_system;
this.running_QMARK_ = running_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
quantum.core.resources.System.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18139__auto__,k__18140__auto__){
var self__ = this;
var this__18139__auto____$1 = this;
return cljs.core._lookup.call(null,this__18139__auto____$1,k__18140__auto__,null);
});

quantum.core.resources.System.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18141__auto__,k44111,else__18142__auto__){
var self__ = this;
var this__18141__auto____$1 = this;
var G__44113 = (((k44111 instanceof cljs.core.Keyword))?k44111.fqn:null);
switch (G__44113) {
case "config":
return self__.config;

break;
case "sys-map":
return self__.sys_map;

break;
case "make-system":
return self__.make_system;

break;
case "running?":
return self__.running_QMARK_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k44111,else__18142__auto__);

}
});

quantum.core.resources.System.prototype.quantum$core$resources$ISystem$ = true;

quantum.core.resources.System.prototype.quantum$core$resources$ISystem$init_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,self__.running_QMARK_))){
return quantum.core.log.pr_STAR_.call(null,true,false,cljs.core.println,new cljs.core.Keyword(null,"warn","warn",-436710552),(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"System already created.");
});})(this$__$1))
,null)),null);
} else {
cljs.core.reset_BANG_.call(null,self__.sys_map,self__.make_system.call(null,self__.config));

return quantum.core.log.pr_STAR_.call(null,true,false,cljs.core.println,new cljs.core.Keyword(null,"user","user",1532431356),(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"System created.");
});})(this$__$1))
,null)),null);
}
});

quantum.core.resources.System.prototype.quantum$core$resources$ISystem$start_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,self__.running_QMARK_))){
return quantum.core.log.pr_STAR_.call(null,true,false,cljs.core.println,new cljs.core.Keyword(null,"warn","warn",-436710552),(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"System already running.");
});})(this$__$1))
,null)),null);
} else {
cljs.core.swap_BANG_.call(null,self__.sys_map,com.stuartsierra.component.start);

cljs.core.reset_BANG_.call(null,self__.running_QMARK_,true);

return quantum.core.log.pr_STAR_.call(null,true,false,cljs.core.println,new cljs.core.Keyword(null,"user","user",1532431356),(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"System started.");
});})(this$__$1))
,null)),null);
}
});

quantum.core.resources.System.prototype.quantum$core$resources$ISystem$stop_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__17513__auto__ = cljs.core.deref.call(null,self__.sys_map);
if(cljs.core.truth_(and__17513__auto__)){
return cljs.core.deref.call(null,self__.running_QMARK_);
} else {
return and__17513__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,self__.sys_map,((function (this$__$1){
return (function (s){
quantum.core.log.pr_STAR_.call(null,true,false,cljs.core.println,new cljs.core.Keyword(null,"user","user",1532431356),(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"======== STOPPING SYSTEM ========");
});})(this$__$1))
,null)),null);

var G__44114 = s;
com.stuartsierra.component.stop.call(null,G__44114);

return G__44114;
});})(this$__$1))
);

cljs.core.reset_BANG_.call(null,self__.running_QMARK_,false);

return quantum.core.log.pr_STAR_.call(null,true,false,cljs.core.println,new cljs.core.Keyword(null,"user","user",1532431356),(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"System stopped.");
});})(this$__$1))
,null)),null);
} else {
return quantum.core.log.pr_STAR_.call(null,true,false,cljs.core.println,new cljs.core.Keyword(null,"warn","warn",-436710552),(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"System cannot be stopped; system is not running.");
});})(this$__$1))
,null)),null);
}
});

quantum.core.resources.System.prototype.quantum$core$resources$ISystem$go_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
quantum.core.resources.init_BANG_.call(null,this$__$1);

return quantum.core.resources.start_BANG_.call(null,this$__$1);
});

quantum.core.resources.System.prototype.quantum$core$resources$ISystem$reload_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return quantum.core.resources.reload_BANG_.call(null,this$__$1,null);
});

quantum.core.resources.System.prototype.quantum$core$resources$ISystem$reload_BANG_$arity$2 = (function (this$,ns_){
var self__ = this;
var this$__$1 = this;
quantum.core.resources.stop_BANG_.call(null,this$__$1);

return quantum.core.resources.go_BANG_.call(null,this$__$1);
});

quantum.core.resources.System.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18153__auto__,writer__18154__auto__,opts__18155__auto__){
var self__ = this;
var this__18153__auto____$1 = this;
var pr_pair__18156__auto__ = ((function (this__18153__auto____$1){
return (function (keyval__18157__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,cljs.core.pr_writer,""," ","",opts__18155__auto__,keyval__18157__auto__);
});})(this__18153__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,pr_pair__18156__auto__,"#quantum.core.resources.System{",", ","}",opts__18155__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sys-map","sys-map",-1178077595),self__.sys_map],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"make-system","make-system",1097332953),self__.make_system],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"running?","running?",-257884763),self__.running_QMARK_],null))], null),self__.__extmap));
});

quantum.core.resources.System.prototype.cljs$core$IIterable$ = true;

quantum.core.resources.System.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44110){
var self__ = this;
var G__44110__$1 = this;
return (new cljs.core.RecordIter((0),G__44110__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"sys-map","sys-map",-1178077595),new cljs.core.Keyword(null,"make-system","make-system",1097332953),new cljs.core.Keyword(null,"running?","running?",-257884763)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

quantum.core.resources.System.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18137__auto__){
var self__ = this;
var this__18137__auto____$1 = this;
return self__.__meta;
});

quantum.core.resources.System.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18133__auto__){
var self__ = this;
var this__18133__auto____$1 = this;
return (new quantum.core.resources.System(self__.config,self__.sys_map,self__.make_system,self__.running_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
});

quantum.core.resources.System.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18143__auto__){
var self__ = this;
var this__18143__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

quantum.core.resources.System.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18134__auto__){
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

quantum.core.resources.System.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18135__auto__,other__18136__auto__){
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

quantum.core.resources.System.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18148__auto__,k__18149__auto__){
var self__ = this;
var this__18148__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"running?","running?",-257884763),null,new cljs.core.Keyword(null,"sys-map","sys-map",-1178077595),null,new cljs.core.Keyword(null,"config","config",994861415),null,new cljs.core.Keyword(null,"make-system","make-system",1097332953),null], null), null),k__18149__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18148__auto____$1),self__.__meta),k__18149__auto__);
} else {
return (new quantum.core.resources.System(self__.config,self__.sys_map,self__.make_system,self__.running_QMARK_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18149__auto__)),null));
}
});

quantum.core.resources.System.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18146__auto__,k__18147__auto__,G__44110){
var self__ = this;
var this__18146__auto____$1 = this;
var pred__44115 = cljs.core.keyword_identical_QMARK_;
var expr__44116 = k__18147__auto__;
if(cljs.core.truth_(pred__44115.call(null,new cljs.core.Keyword(null,"config","config",994861415),expr__44116))){
return (new quantum.core.resources.System(G__44110,self__.sys_map,self__.make_system,self__.running_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44115.call(null,new cljs.core.Keyword(null,"sys-map","sys-map",-1178077595),expr__44116))){
return (new quantum.core.resources.System(self__.config,G__44110,self__.make_system,self__.running_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44115.call(null,new cljs.core.Keyword(null,"make-system","make-system",1097332953),expr__44116))){
return (new quantum.core.resources.System(self__.config,self__.sys_map,G__44110,self__.running_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44115.call(null,new cljs.core.Keyword(null,"running?","running?",-257884763),expr__44116))){
return (new quantum.core.resources.System(self__.config,self__.sys_map,self__.make_system,G__44110,self__.__meta,self__.__extmap,null));
} else {
return (new quantum.core.resources.System(self__.config,self__.sys_map,self__.make_system,self__.running_QMARK_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18147__auto__,G__44110),null));
}
}
}
}
});

quantum.core.resources.System.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18151__auto__){
var self__ = this;
var this__18151__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sys-map","sys-map",-1178077595),self__.sys_map],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"make-system","make-system",1097332953),self__.make_system],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"running?","running?",-257884763),self__.running_QMARK_],null))], null),self__.__extmap));
});

quantum.core.resources.System.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18138__auto__,G__44110){
var self__ = this;
var this__18138__auto____$1 = this;
return (new quantum.core.resources.System(self__.config,self__.sys_map,self__.make_system,self__.running_QMARK_,G__44110,self__.__extmap,self__.__hash));
});

quantum.core.resources.System.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18144__auto__,entry__18145__auto__){
var self__ = this;
var this__18144__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18145__auto__)){
return cljs.core._assoc.call(null,this__18144__auto____$1,cljs.core._nth.call(null,entry__18145__auto__,(0)),cljs.core._nth.call(null,entry__18145__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18144__auto____$1,entry__18145__auto__);
}
});

quantum.core.resources.System.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"config","config",-1659574354,null),new cljs.core.Symbol(null,"sys-map","sys-map",462453932,null),new cljs.core.Symbol(null,"make-system","make-system",-1557102816,null),new cljs.core.Symbol(null,"running?","running?",1382646764,null)], null);
});

quantum.core.resources.System.cljs$lang$type = true;

quantum.core.resources.System.cljs$lang$ctorPrSeq = (function (this__18173__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"quantum.core.resources/System");
});

quantum.core.resources.System.cljs$lang$ctorPrWriter = (function (this__18173__auto__,writer__18174__auto__){
return cljs.core._write.call(null,writer__18174__auto__,"quantum.core.resources/System");
});

quantum.core.resources.__GT_System = (function quantum$core$resources$__GT_System(config,sys_map,make_system,running_QMARK_){
return (new quantum.core.resources.System(config,sys_map,make_system,running_QMARK_,null,null,null));
});

quantum.core.resources.map__GT_System = (function quantum$core$resources$map__GT_System(G__44112){
return (new quantum.core.resources.System(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__44112),new cljs.core.Keyword(null,"sys-map","sys-map",-1178077595).cljs$core$IFn$_invoke$arity$1(G__44112),new cljs.core.Keyword(null,"make-system","make-system",1097332953).cljs$core$IFn$_invoke$arity$1(G__44112),new cljs.core.Keyword(null,"running?","running?",-257884763).cljs$core$IFn$_invoke$arity$1(G__44112),null,cljs.core.dissoc.call(null,G__44112,new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"sys-map","sys-map",-1178077595),new cljs.core.Keyword(null,"make-system","make-system",1097332953),new cljs.core.Keyword(null,"running?","running?",-257884763)),null));
});

/**
 * Constructor for |System|.
 */
quantum.core.resources.__GT_system = (function quantum$core$resources$__GT_system(config,make_system){
if(cljs.core.truth_((function (G__44120){
var or__17525__auto__ = quantum.core.type.predicates.atom_QMARK_.call(null,G__44120);
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return cljs.core.map_QMARK_.call(null,G__44120);
}
}).call(null,config))){
} else {
throw quantum.core.error.__GT_ex.call(null,new cljs.core.Keyword(null,"assertion-error","assertion-error",1846873368),"Assertion not satisfied: ((fn-or atom? map?) config)",cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.keyword,cljs.core.list(new cljs.core.Symbol(null,"config","config",-1659574354,null))),cljs.core._conj.call(null,cljs.core.List.EMPTY,config)));
}

if(cljs.core.fn_QMARK_.call(null,make_system)){
} else {
throw quantum.core.error.__GT_ex.call(null,new cljs.core.Keyword(null,"assertion-error","assertion-error",1846873368),"Assertion not satisfied: (fn? make-system)",cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.keyword,cljs.core.list(new cljs.core.Symbol(null,"make-system","make-system",-1557102816,null))),cljs.core._conj.call(null,cljs.core.List.EMPTY,make_system)));
}

return (new quantum.core.resources.System(config,cljs.core.atom.call(null,null),make_system,cljs.core.atom.call(null,false),null,null,null));
});
/**
 * Registers a system with the global system registry.
 */
quantum.core.resources.register_system_BANG_ = (function quantum$core$resources$register_system_BANG_(ident,config,make_system){
return cljs.core.swap_BANG_.call(null,quantum.core.resources.systems,cljs.core.assoc,ident,quantum.core.resources.__GT_system.call(null,config,make_system));
});

//# sourceMappingURL=resources.js.map?rel=1452702573095
/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn log err logic vec log core-async async tpred]
*/
