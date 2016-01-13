// Compiled by ClojureScript 1.7.170 {}
goog.provide('datascript.impl.entity');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('datascript.db');
datascript.impl.entity.entity;

datascript.impl.entity.__GT_Entity;

datascript.impl.entity.equiv_entity;

datascript.impl.entity.lookup_entity;

datascript.impl.entity.touch;
datascript.impl.entity.entid = (function datascript$impl$entity$entid(db,eid){
if((typeof eid === 'number') || (cljs.core.sequential_QMARK_.call(null,eid))){
return datascript.db.entid.call(null,db,eid);
} else {
return null;
}
});
datascript.impl.entity.entity = (function datascript$impl$entity$entity(db,eid){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("db","db?","db/db?",1715868458,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

var temp__4425__auto__ = datascript.impl.entity.entid.call(null,db,eid);
if(cljs.core.truth_(temp__4425__auto__)){
var e = temp__4425__auto__;
return datascript.impl.entity.__GT_Entity.call(null,db,e,cljs.core.volatile_BANG_.call(null,false),cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY));
} else {
return null;
}
});
datascript.impl.entity.entity_attr = (function datascript$impl$entity$entity_attr(db,a,datoms){
if(datascript.db.multival_QMARK_.call(null,db,a)){
if(datascript.db.ref_QMARK_.call(null,db,a)){
return cljs.core.reduce.call(null,(function (p1__45225_SHARP_,p2__45226_SHARP_){
return cljs.core.conj.call(null,p1__45225_SHARP_,datascript.impl.entity.entity.call(null,db,new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(p2__45226_SHARP_)));
}),cljs.core.PersistentHashSet.EMPTY,datoms);
} else {
return cljs.core.reduce.call(null,(function (p1__45227_SHARP_,p2__45228_SHARP_){
return cljs.core.conj.call(null,p1__45227_SHARP_,new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(p2__45228_SHARP_));
}),cljs.core.PersistentHashSet.EMPTY,datoms);
}
} else {
if(datascript.db.ref_QMARK_.call(null,db,a)){
return datascript.impl.entity.entity.call(null,db,new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,datoms)));
} else {
return new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,datoms));
}
}
});
datascript.impl.entity._lookup_backwards = (function datascript$impl$entity$_lookup_backwards(db,eid,attr,not_found){
var temp__4423__auto__ = cljs.core.not_empty.call(null,datascript.db._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,attr,eid], null)));
if(cljs.core.truth_(temp__4423__auto__)){
var datoms = temp__4423__auto__;
if(datascript.db.component_QMARK_.call(null,db,attr)){
return datascript.impl.entity.entity.call(null,db,new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,datoms)));
} else {
return cljs.core.reduce.call(null,((function (datoms,temp__4423__auto__){
return (function (p1__45229_SHARP_,p2__45230_SHARP_){
return cljs.core.conj.call(null,p1__45229_SHARP_,datascript.impl.entity.entity.call(null,db,new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(p2__45230_SHARP_)));
});})(datoms,temp__4423__auto__))
,cljs.core.PersistentHashSet.EMPTY,datoms);
}
} else {
return not_found;
}
});
datascript.impl.entity.multival__GT_js = (function datascript$impl$entity$multival__GT_js(val){
if(cljs.core.truth_(val)){
return cljs.core.to_array.call(null,val);
} else {
return null;
}
});
datascript.impl.entity.js_seq = (function datascript$impl$entity$js_seq(e){
datascript.impl.entity.touch.call(null,e);

var iter__18297__auto__ = (function datascript$impl$entity$js_seq_$_iter__45239(s__45240){
return (new cljs.core.LazySeq(null,(function (){
var s__45240__$1 = s__45240;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__45240__$1);
if(temp__4425__auto__){
var s__45240__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45240__$2)){
var c__18295__auto__ = cljs.core.chunk_first.call(null,s__45240__$2);
var size__18296__auto__ = cljs.core.count.call(null,c__18295__auto__);
var b__45242 = cljs.core.chunk_buffer.call(null,size__18296__auto__);
if((function (){var i__45241 = (0);
while(true){
if((i__45241 < size__18296__auto__)){
var vec__45245 = cljs.core._nth.call(null,c__18295__auto__,i__45241);
var a = cljs.core.nth.call(null,vec__45245,(0),null);
var v = cljs.core.nth.call(null,vec__45245,(1),null);
cljs.core.chunk_append.call(null,b__45242,((datascript.db.multival_QMARK_.call(null,e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js.call(null,v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)));

var G__45247 = (i__45241 + (1));
i__45241 = G__45247;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45242),datascript$impl$entity$js_seq_$_iter__45239.call(null,cljs.core.chunk_rest.call(null,s__45240__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45242),null);
}
} else {
var vec__45246 = cljs.core.first.call(null,s__45240__$2);
var a = cljs.core.nth.call(null,vec__45246,(0),null);
var v = cljs.core.nth.call(null,vec__45246,(1),null);
return cljs.core.cons.call(null,((datascript.db.multival_QMARK_.call(null,e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js.call(null,v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)),datascript$impl$entity$js_seq_$_iter__45239.call(null,cljs.core.rest.call(null,s__45240__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__18297__auto__.call(null,cljs.core.deref.call(null,e.cache));
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {datascript.impl.entity.Object}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
datascript.impl.entity.Entity = (function (db,eid,touched,cache){
this.db = db;
this.eid = eid;
this.touched = touched;
this.cache = cache;
this.cljs$lang$protocol_mask$partition0$ = 2162164483;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
datascript.impl.entity.Entity.prototype.entry_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array.call(null,cljs.core.map.call(null,cljs.core.to_array,datascript.impl.entity.js_seq.call(null,this$)));
});

datascript.impl.entity.Entity.prototype.forEach = (function() {
var G__45262 = null;
var G__45262__1 = (function (f){
var self__ = this;
var this$ = this;
var seq__45249 = cljs.core.seq.call(null,datascript.impl.entity.js_seq.call(null,this$));
var chunk__45250 = null;
var count__45251 = (0);
var i__45252 = (0);
while(true){
if((i__45252 < count__45251)){
var vec__45253 = cljs.core._nth.call(null,chunk__45250,i__45252);
var a = cljs.core.nth.call(null,vec__45253,(0),null);
var v = cljs.core.nth.call(null,vec__45253,(1),null);
f.call(null,v,a,this$);

var G__45263 = seq__45249;
var G__45264 = chunk__45250;
var G__45265 = count__45251;
var G__45266 = (i__45252 + (1));
seq__45249 = G__45263;
chunk__45250 = G__45264;
count__45251 = G__45265;
i__45252 = G__45266;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__45249);
if(temp__4425__auto__){
var seq__45249__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45249__$1)){
var c__18328__auto__ = cljs.core.chunk_first.call(null,seq__45249__$1);
var G__45267 = cljs.core.chunk_rest.call(null,seq__45249__$1);
var G__45268 = c__18328__auto__;
var G__45269 = cljs.core.count.call(null,c__18328__auto__);
var G__45270 = (0);
seq__45249 = G__45267;
chunk__45250 = G__45268;
count__45251 = G__45269;
i__45252 = G__45270;
continue;
} else {
var vec__45254 = cljs.core.first.call(null,seq__45249__$1);
var a = cljs.core.nth.call(null,vec__45254,(0),null);
var v = cljs.core.nth.call(null,vec__45254,(1),null);
f.call(null,v,a,this$);

var G__45271 = cljs.core.next.call(null,seq__45249__$1);
var G__45272 = null;
var G__45273 = (0);
var G__45274 = (0);
seq__45249 = G__45271;
chunk__45250 = G__45272;
count__45251 = G__45273;
i__45252 = G__45274;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__45262__2 = (function (f,use_as_this){
var self__ = this;
var this$ = this;
var seq__45255 = cljs.core.seq.call(null,datascript.impl.entity.js_seq.call(null,this$));
var chunk__45256 = null;
var count__45257 = (0);
var i__45258 = (0);
while(true){
if((i__45258 < count__45257)){
var vec__45259 = cljs.core._nth.call(null,chunk__45256,i__45258);
var a = cljs.core.nth.call(null,vec__45259,(0),null);
var v = cljs.core.nth.call(null,vec__45259,(1),null);
f.call(use_as_this,v,a,this$);

var G__45275 = seq__45255;
var G__45276 = chunk__45256;
var G__45277 = count__45257;
var G__45278 = (i__45258 + (1));
seq__45255 = G__45275;
chunk__45256 = G__45276;
count__45257 = G__45277;
i__45258 = G__45278;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__45255);
if(temp__4425__auto__){
var seq__45255__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45255__$1)){
var c__18328__auto__ = cljs.core.chunk_first.call(null,seq__45255__$1);
var G__45279 = cljs.core.chunk_rest.call(null,seq__45255__$1);
var G__45280 = c__18328__auto__;
var G__45281 = cljs.core.count.call(null,c__18328__auto__);
var G__45282 = (0);
seq__45255 = G__45279;
chunk__45256 = G__45280;
count__45257 = G__45281;
i__45258 = G__45282;
continue;
} else {
var vec__45260 = cljs.core.first.call(null,seq__45255__$1);
var a = cljs.core.nth.call(null,vec__45260,(0),null);
var v = cljs.core.nth.call(null,vec__45260,(1),null);
f.call(use_as_this,v,a,this$);

var G__45283 = cljs.core.next.call(null,seq__45255__$1);
var G__45284 = null;
var G__45285 = (0);
var G__45286 = (0);
seq__45255 = G__45283;
chunk__45256 = G__45284;
count__45257 = G__45285;
i__45258 = G__45286;
continue;
}
} else {
return null;
}
}
break;
}
});
G__45262 = function(f,use_as_this){
switch(arguments.length){
case 1:
return G__45262__1.call(this,f);
case 2:
return G__45262__2.call(this,f,use_as_this);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45262.cljs$core$IFn$_invoke$arity$1 = G__45262__1;
G__45262.cljs$core$IFn$_invoke$arity$2 = G__45262__2;
return G__45262;
})()
;

datascript.impl.entity.Entity.prototype.get = (function (attr){
var self__ = this;
var this$ = this;
if(cljs.core._EQ_.call(null,attr,":db/id")){
return self__.eid;
} else {
if(datascript.db.reverse_ref_QMARK_.call(null,attr)){
return datascript.impl.entity.multival__GT_js.call(null,datascript.impl.entity._lookup_backwards.call(null,self__.db,self__.eid,datascript.db.reverse_ref.call(null,attr),null));
} else {
var G__45261 = datascript.impl.entity.lookup_entity.call(null,this$,attr);
if(datascript.db.multival_QMARK_.call(null,self__.db,attr)){
return datascript.impl.entity.multival__GT_js.call(null,G__45261);
} else {
return G__45261;
}
}
}
});

datascript.impl.entity.Entity.prototype.key_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array.call(null,cljs.core.keys.call(null,this$));
});

datascript.impl.entity.Entity.prototype.entries = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_entries_iterator.call(null,datascript.impl.entity.js_seq.call(null,this$));
});

datascript.impl.entity.Entity.prototype.value_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array.call(null,cljs.core.map.call(null,cljs.core.second,datascript.impl.entity.js_seq.call(null,this$)));
});

datascript.impl.entity.Entity.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_.call(null,this$);
});

datascript.impl.entity.Entity.prototype.keys = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_iterator.call(null,cljs.core.keys.call(null,this$));
});

datascript.impl.entity.Entity.prototype.values = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_iterator.call(null,cljs.core.map.call(null,cljs.core.second,datascript.impl.entity.js_seq.call(null,this$)));
});

datascript.impl.entity.Entity.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return datascript.impl.entity.equiv_entity.call(null,this$,other);
});

datascript.impl.entity.Entity.prototype.has = (function (attr){
var self__ = this;
var this$ = this;
return !((this$.get(attr) == null));
});

datascript.impl.entity.Entity.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,o){
var self__ = this;
var this$__$1 = this;
return datascript.impl.entity.equiv_entity.call(null,this$__$1,o);
});

datascript.impl.entity.Entity.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.eid);
});

datascript.impl.entity.Entity.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
datascript.impl.entity.touch.call(null,this$__$1);

return cljs.core.seq.call(null,cljs.core.deref.call(null,self__.cache));
});

datascript.impl.entity.Entity.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
datascript.impl.entity.touch.call(null,this$__$1);

return cljs.core.count.call(null,cljs.core.deref.call(null,self__.cache));
});

datascript.impl.entity.Entity.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,attr){
var self__ = this;
var this$__$1 = this;
return datascript.impl.entity.lookup_entity.call(null,this$__$1,attr,null);
});

datascript.impl.entity.Entity.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,attr,not_found){
var self__ = this;
var this$__$1 = this;
return datascript.impl.entity.lookup_entity.call(null,this$__$1,attr,not_found);
});

datascript.impl.entity.Entity.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("datascript.impl.entity","nf","datascript.impl.entity/nf",-953741353),datascript.impl.entity.lookup_entity.call(null,this$__$1,k,new cljs.core.Keyword("datascript.impl.entity","nf","datascript.impl.entity/nf",-953741353)));
});

datascript.impl.entity.Entity.prototype.call = (function() {
var G__45287 = null;
var G__45287__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return datascript.impl.entity.lookup_entity.call(null,this$,k);
});
var G__45287__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return datascript.impl.entity.lookup_entity.call(null,this$,k,not_found);
});
G__45287 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__45287__2.call(this,self__,k);
case 3:
return G__45287__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45287.cljs$core$IFn$_invoke$arity$2 = G__45287__2;
G__45287.cljs$core$IFn$_invoke$arity$3 = G__45287__3;
return G__45287;
})()
;

datascript.impl.entity.Entity.prototype.apply = (function (self__,args45248){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args45248)));
});

datascript.impl.entity.Entity.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return datascript.impl.entity.lookup_entity.call(null,this$,k);
});

datascript.impl.entity.Entity.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return datascript.impl.entity.lookup_entity.call(null,this$,k,not_found);
});

datascript.impl.entity.Entity.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,self__.cache),new cljs.core.Keyword("db","id","db/id",-1388397098),self__.eid),writer,opts);
});

datascript.impl.entity.Entity.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"eid","eid",-2094915839,null),new cljs.core.Symbol(null,"touched","touched",1031397108,null),new cljs.core.Symbol(null,"cache","cache",403508473,null)], null);
});

datascript.impl.entity.Entity.cljs$lang$type = true;

datascript.impl.entity.Entity.cljs$lang$ctorStr = "datascript.impl.entity/Entity";

datascript.impl.entity.Entity.cljs$lang$ctorPrWriter = (function (this__18123__auto__,writer__18124__auto__,opt__18125__auto__){
return cljs.core._write.call(null,writer__18124__auto__,"datascript.impl.entity/Entity");
});

datascript.impl.entity.__GT_Entity = (function datascript$impl$entity$__GT_Entity(db,eid,touched,cache){
return (new datascript.impl.entity.Entity(db,eid,touched,cache));
});

datascript.impl.entity.entity_QMARK_ = (function datascript$impl$entity$entity_QMARK_(x){
return (x instanceof datascript.impl.entity.Entity);
});
datascript.impl.entity.equiv_entity = (function datascript$impl$entity$equiv_entity(this$,that){
return ((that instanceof datascript.impl.entity.Entity)) && (cljs.core._EQ_.call(null,this$.eid,that.eid));
});
datascript.impl.entity.lookup_entity = (function datascript$impl$entity$lookup_entity(var_args){
var args45288 = [];
var len__18583__auto___45291 = arguments.length;
var i__18584__auto___45292 = (0);
while(true){
if((i__18584__auto___45292 < len__18583__auto___45291)){
args45288.push((arguments[i__18584__auto___45292]));

var G__45293 = (i__18584__auto___45292 + (1));
i__18584__auto___45292 = G__45293;
continue;
} else {
}
break;
}

var G__45290 = args45288.length;
switch (G__45290) {
case 2:
return datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45288.length)].join('')));

}
});

datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2 = (function (this$,attr){
return datascript.impl.entity.lookup_entity.call(null,this$,attr,null);
});

datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 = (function (this$,attr,not_found){
if(cljs.core._EQ_.call(null,attr,new cljs.core.Keyword("db","id","db/id",-1388397098))){
return this$.eid;
} else {
if(datascript.db.reverse_ref_QMARK_.call(null,attr)){
return datascript.impl.entity._lookup_backwards.call(null,this$.db,this$.eid,datascript.db.reverse_ref.call(null,attr),not_found);
} else {
var or__17525__auto__ = cljs.core.deref.call(null,this$.cache).call(null,attr);
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
if(cljs.core.truth_(cljs.core.deref.call(null,this$.touched))){
return not_found;
} else {
var temp__4423__auto__ = cljs.core.not_empty.call(null,datascript.db._search.call(null,this$.db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$.eid,attr], null)));
if(cljs.core.truth_(temp__4423__auto__)){
var datoms = temp__4423__auto__;
var value = datascript.impl.entity.entity_attr.call(null,this$.db,attr,datoms);
cljs.core.vreset_BANG_.call(null,this$.cache,cljs.core.assoc.call(null,cljs.core.deref.call(null,this$.cache),attr,value));

return value;
} else {
return not_found;
}
}
}
}
}
});

datascript.impl.entity.lookup_entity.cljs$lang$maxFixedArity = 3;
datascript.impl.entity.touch_components = (function datascript$impl$entity$touch_components(db,a__GT_v){
return cljs.core.reduce_kv.call(null,(function (acc,a,v){
return cljs.core.assoc.call(null,acc,a,((datascript.db.component_QMARK_.call(null,db,a))?((datascript.db.multival_QMARK_.call(null,db,a))?cljs.core.set.call(null,cljs.core.map.call(null,datascript.impl.entity.touch,v)):datascript.impl.entity.touch.call(null,v)):v));
}),cljs.core.PersistentArrayMap.EMPTY,a__GT_v);
});
datascript.impl.entity.datoms__GT_cache = (function datascript$impl$entity$datoms__GT_cache(db,datoms){
return cljs.core.reduce.call(null,(function (acc,part){
var a = new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,part));
return cljs.core.assoc.call(null,acc,a,datascript.impl.entity.entity_attr.call(null,db,a,part));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition_by.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),datoms));
});
datascript.impl.entity.touch = (function datascript$impl$entity$touch(e){
if(cljs.core.truth_(datascript.impl.entity.entity_QMARK_.call(null,e))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"entity?","entity?",555338193,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))].join('')));
}

if(cljs.core.truth_(cljs.core.deref.call(null,e.touched))){
} else {
var temp__4425__auto___45295 = cljs.core.not_empty.call(null,datascript.db._search.call(null,e.db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.eid], null)));
if(cljs.core.truth_(temp__4425__auto___45295)){
var datoms_45296 = temp__4425__auto___45295;
cljs.core.vreset_BANG_.call(null,e.cache,datascript.impl.entity.touch_components.call(null,e.db,datascript.impl.entity.datoms__GT_cache.call(null,e.db,datoms_45296)));

cljs.core.vreset_BANG_.call(null,e.touched,true);
} else {
}
}

return e;
});
goog.exportSymbol("datascript.impl.entity.Entity.prototype.get",datascript.impl.entity.Entity.prototype.get);

goog.exportSymbol("datascript.impl.entity.Entity.prototype.has",datascript.impl.entity.Entity.prototype.has);

goog.exportSymbol("datascript.impl.entity.Entity.prototype.forEach",datascript.impl.entity.Entity.prototype.forEach);

goog.exportSymbol("datascript.impl.entity.Entity.prototype.key_set",datascript.impl.entity.Entity.prototype.key_set);

goog.exportSymbol("datascript.impl.entity.Entity.prototype.value_set",datascript.impl.entity.Entity.prototype.value_set);

goog.exportSymbol("datascript.impl.entity.Entity.prototype.entry_set",datascript.impl.entity.Entity.prototype.entry_set);

goog.exportSymbol("datascript.impl.entity.Entity.prototype.keys",datascript.impl.entity.Entity.prototype.keys);

goog.exportSymbol("datascript.impl.entity.Entity.prototype.values",datascript.impl.entity.Entity.prototype.values);

goog.exportSymbol("datascript.impl.entity.Entity.prototype.entries",datascript.impl.entity.Entity.prototype.entries);

goog.exportSymbol("cljs.core.ES6Iterator.prototype.next",cljs.core.ES6Iterator.prototype.next);

goog.exportSymbol("cljs.core.ES6EntriesIterator.prototype.next",cljs.core.ES6EntriesIterator.prototype.next);

//# sourceMappingURL=entity.js.map?rel=1452702578309