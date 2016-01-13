// Compiled by ClojureScript 1.7.170 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__46008_46012 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__46009_46013 = null;
var count__46010_46014 = (0);
var i__46011_46015 = (0);
while(true){
if((i__46011_46015 < count__46010_46014)){
var k_46016 = cljs.core._nth.call(null,chunk__46009_46013,i__46011_46015);
var v_46017 = (b[k_46016]);
(a[k_46016] = v_46017);

var G__46018 = seq__46008_46012;
var G__46019 = chunk__46009_46013;
var G__46020 = count__46010_46014;
var G__46021 = (i__46011_46015 + (1));
seq__46008_46012 = G__46018;
chunk__46009_46013 = G__46019;
count__46010_46014 = G__46020;
i__46011_46015 = G__46021;
continue;
} else {
var temp__4425__auto___46022 = cljs.core.seq.call(null,seq__46008_46012);
if(temp__4425__auto___46022){
var seq__46008_46023__$1 = temp__4425__auto___46022;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46008_46023__$1)){
var c__18328__auto___46024 = cljs.core.chunk_first.call(null,seq__46008_46023__$1);
var G__46025 = cljs.core.chunk_rest.call(null,seq__46008_46023__$1);
var G__46026 = c__18328__auto___46024;
var G__46027 = cljs.core.count.call(null,c__18328__auto___46024);
var G__46028 = (0);
seq__46008_46012 = G__46025;
chunk__46009_46013 = G__46026;
count__46010_46014 = G__46027;
i__46011_46015 = G__46028;
continue;
} else {
var k_46029 = cljs.core.first.call(null,seq__46008_46023__$1);
var v_46030 = (b[k_46029]);
(a[k_46029] = v_46030);

var G__46031 = cljs.core.next.call(null,seq__46008_46023__$1);
var G__46032 = null;
var G__46033 = (0);
var G__46034 = (0);
seq__46008_46012 = G__46031;
chunk__46009_46013 = G__46032;
count__46010_46014 = G__46033;
i__46011_46015 = G__46034;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__18123__auto__,writer__18124__auto__,opt__18125__auto__){
return cljs.core._write.call(null,writer__18124__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__18123__auto__,writer__18124__auto__,opt__18125__auto__){
return cljs.core._write.call(null,writer__18124__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args46035 = [];
var len__18583__auto___46038 = arguments.length;
var i__18584__auto___46039 = (0);
while(true){
if((i__18584__auto___46039 < len__18583__auto___46038)){
args46035.push((arguments[i__18584__auto___46039]));

var G__46040 = (i__18584__auto___46039 + (1));
i__18584__auto___46039 = G__46040;
continue;
} else {
}
break;
}

var G__46037 = args46035.length;
switch (G__46037) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46035.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__46042 = (i + (2));
var G__46043 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__46042;
ret = G__46043;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__18123__auto__,writer__18124__auto__,opt__18125__auto__){
return cljs.core._write.call(null,writer__18124__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__18123__auto__,writer__18124__auto__,opt__18125__auto__){
return cljs.core._write.call(null,writer__18124__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__46044_46048 = cljs.core.seq.call(null,v);
var chunk__46045_46049 = null;
var count__46046_46050 = (0);
var i__46047_46051 = (0);
while(true){
if((i__46047_46051 < count__46046_46050)){
var x_46052 = cljs.core._nth.call(null,chunk__46045_46049,i__46047_46051);
ret.push(x_46052);

var G__46053 = seq__46044_46048;
var G__46054 = chunk__46045_46049;
var G__46055 = count__46046_46050;
var G__46056 = (i__46047_46051 + (1));
seq__46044_46048 = G__46053;
chunk__46045_46049 = G__46054;
count__46046_46050 = G__46055;
i__46047_46051 = G__46056;
continue;
} else {
var temp__4425__auto___46057 = cljs.core.seq.call(null,seq__46044_46048);
if(temp__4425__auto___46057){
var seq__46044_46058__$1 = temp__4425__auto___46057;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46044_46058__$1)){
var c__18328__auto___46059 = cljs.core.chunk_first.call(null,seq__46044_46058__$1);
var G__46060 = cljs.core.chunk_rest.call(null,seq__46044_46058__$1);
var G__46061 = c__18328__auto___46059;
var G__46062 = cljs.core.count.call(null,c__18328__auto___46059);
var G__46063 = (0);
seq__46044_46048 = G__46060;
chunk__46045_46049 = G__46061;
count__46046_46050 = G__46062;
i__46047_46051 = G__46063;
continue;
} else {
var x_46064 = cljs.core.first.call(null,seq__46044_46058__$1);
ret.push(x_46064);

var G__46065 = cljs.core.next.call(null,seq__46044_46058__$1);
var G__46066 = null;
var G__46067 = (0);
var G__46068 = (0);
seq__46044_46048 = G__46065;
chunk__46045_46049 = G__46066;
count__46046_46050 = G__46067;
i__46047_46051 = G__46068;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__18123__auto__,writer__18124__auto__,opt__18125__auto__){
return cljs.core._write.call(null,writer__18124__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__18123__auto__,writer__18124__auto__,opt__18125__auto__){
return cljs.core._write.call(null,writer__18124__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__46069_46073 = cljs.core.seq.call(null,v);
var chunk__46070_46074 = null;
var count__46071_46075 = (0);
var i__46072_46076 = (0);
while(true){
if((i__46072_46076 < count__46071_46075)){
var x_46077 = cljs.core._nth.call(null,chunk__46070_46074,i__46072_46076);
ret.push(x_46077);

var G__46078 = seq__46069_46073;
var G__46079 = chunk__46070_46074;
var G__46080 = count__46071_46075;
var G__46081 = (i__46072_46076 + (1));
seq__46069_46073 = G__46078;
chunk__46070_46074 = G__46079;
count__46071_46075 = G__46080;
i__46072_46076 = G__46081;
continue;
} else {
var temp__4425__auto___46082 = cljs.core.seq.call(null,seq__46069_46073);
if(temp__4425__auto___46082){
var seq__46069_46083__$1 = temp__4425__auto___46082;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46069_46083__$1)){
var c__18328__auto___46084 = cljs.core.chunk_first.call(null,seq__46069_46083__$1);
var G__46085 = cljs.core.chunk_rest.call(null,seq__46069_46083__$1);
var G__46086 = c__18328__auto___46084;
var G__46087 = cljs.core.count.call(null,c__18328__auto___46084);
var G__46088 = (0);
seq__46069_46073 = G__46085;
chunk__46070_46074 = G__46086;
count__46071_46075 = G__46087;
i__46072_46076 = G__46088;
continue;
} else {
var x_46089 = cljs.core.first.call(null,seq__46069_46083__$1);
ret.push(x_46089);

var G__46090 = cljs.core.next.call(null,seq__46069_46083__$1);
var G__46091 = null;
var G__46092 = (0);
var G__46093 = (0);
seq__46069_46073 = G__46090;
chunk__46070_46074 = G__46091;
count__46071_46075 = G__46092;
i__46072_46076 = G__46093;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__18123__auto__,writer__18124__auto__,opt__18125__auto__){
return cljs.core._write.call(null,writer__18124__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__46094_46098 = cljs.core.seq.call(null,v);
var chunk__46095_46099 = null;
var count__46096_46100 = (0);
var i__46097_46101 = (0);
while(true){
if((i__46097_46101 < count__46096_46100)){
var x_46102 = cljs.core._nth.call(null,chunk__46095_46099,i__46097_46101);
ret.push(x_46102);

var G__46103 = seq__46094_46098;
var G__46104 = chunk__46095_46099;
var G__46105 = count__46096_46100;
var G__46106 = (i__46097_46101 + (1));
seq__46094_46098 = G__46103;
chunk__46095_46099 = G__46104;
count__46096_46100 = G__46105;
i__46097_46101 = G__46106;
continue;
} else {
var temp__4425__auto___46107 = cljs.core.seq.call(null,seq__46094_46098);
if(temp__4425__auto___46107){
var seq__46094_46108__$1 = temp__4425__auto___46107;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46094_46108__$1)){
var c__18328__auto___46109 = cljs.core.chunk_first.call(null,seq__46094_46108__$1);
var G__46110 = cljs.core.chunk_rest.call(null,seq__46094_46108__$1);
var G__46111 = c__18328__auto___46109;
var G__46112 = cljs.core.count.call(null,c__18328__auto___46109);
var G__46113 = (0);
seq__46094_46098 = G__46110;
chunk__46095_46099 = G__46111;
count__46096_46100 = G__46112;
i__46097_46101 = G__46113;
continue;
} else {
var x_46114 = cljs.core.first.call(null,seq__46094_46108__$1);
ret.push(x_46114);

var G__46115 = cljs.core.next.call(null,seq__46094_46108__$1);
var G__46116 = null;
var G__46117 = (0);
var G__46118 = (0);
seq__46094_46098 = G__46115;
chunk__46095_46099 = G__46116;
count__46096_46100 = G__46117;
i__46097_46101 = G__46118;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__18123__auto__,writer__18124__auto__,opt__18125__auto__){
return cljs.core._write.call(null,writer__18124__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__18123__auto__,writer__18124__auto__,opt__18125__auto__){
return cljs.core._write.call(null,writer__18124__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args46119 = [];
var len__18583__auto___46130 = arguments.length;
var i__18584__auto___46131 = (0);
while(true){
if((i__18584__auto___46131 < len__18583__auto___46130)){
args46119.push((arguments[i__18584__auto___46131]));

var G__46132 = (i__18584__auto___46131 + (1));
i__18584__auto___46131 = G__46132;
continue;
} else {
}
break;
}

var G__46121 = args46119.length;
switch (G__46121) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46119.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__46122 = obj;
G__46122.push(kfn.call(null,k),vfn.call(null,v));

return G__46122;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x46123 = cljs.core.clone.call(null,handlers);
x46123.forEach = ((function (x46123,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__46124 = cljs.core.seq.call(null,coll);
var chunk__46125 = null;
var count__46126 = (0);
var i__46127 = (0);
while(true){
if((i__46127 < count__46126)){
var vec__46128 = cljs.core._nth.call(null,chunk__46125,i__46127);
var k = cljs.core.nth.call(null,vec__46128,(0),null);
var v = cljs.core.nth.call(null,vec__46128,(1),null);
f.call(null,v,k);

var G__46134 = seq__46124;
var G__46135 = chunk__46125;
var G__46136 = count__46126;
var G__46137 = (i__46127 + (1));
seq__46124 = G__46134;
chunk__46125 = G__46135;
count__46126 = G__46136;
i__46127 = G__46137;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__46124);
if(temp__4425__auto__){
var seq__46124__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46124__$1)){
var c__18328__auto__ = cljs.core.chunk_first.call(null,seq__46124__$1);
var G__46138 = cljs.core.chunk_rest.call(null,seq__46124__$1);
var G__46139 = c__18328__auto__;
var G__46140 = cljs.core.count.call(null,c__18328__auto__);
var G__46141 = (0);
seq__46124 = G__46138;
chunk__46125 = G__46139;
count__46126 = G__46140;
i__46127 = G__46141;
continue;
} else {
var vec__46129 = cljs.core.first.call(null,seq__46124__$1);
var k = cljs.core.nth.call(null,vec__46129,(0),null);
var v = cljs.core.nth.call(null,vec__46129,(1),null);
f.call(null,v,k);

var G__46142 = cljs.core.next.call(null,seq__46124__$1);
var G__46143 = null;
var G__46144 = (0);
var G__46145 = (0);
seq__46124 = G__46142;
chunk__46125 = G__46143;
count__46126 = G__46144;
i__46127 = G__46145;
continue;
}
} else {
return null;
}
}
break;
}
});})(x46123,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x46123;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args46146 = [];
var len__18583__auto___46152 = arguments.length;
var i__18584__auto___46153 = (0);
while(true){
if((i__18584__auto___46153 < len__18583__auto___46152)){
args46146.push((arguments[i__18584__auto___46153]));

var G__46154 = (i__18584__auto___46153 + (1));
i__18584__auto___46153 = G__46154;
continue;
} else {
}
break;
}

var G__46148 = args46146.length;
switch (G__46148) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46146.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit46149 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit46149 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta46150){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta46150 = meta46150;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit46149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46151,meta46150__$1){
var self__ = this;
var _46151__$1 = this;
return (new cognitect.transit.t_cognitect$transit46149(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta46150__$1));
});

cognitect.transit.t_cognitect$transit46149.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46151){
var self__ = this;
var _46151__$1 = this;
return self__.meta46150;
});

cognitect.transit.t_cognitect$transit46149.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit46149.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit46149.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit46149.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit46149.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta46150","meta46150",-159871722,null)], null);
});

cognitect.transit.t_cognitect$transit46149.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit46149.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit46149";

cognitect.transit.t_cognitect$transit46149.cljs$lang$ctorPrWriter = (function (this__18123__auto__,writer__18124__auto__,opt__18125__auto__){
return cljs.core._write.call(null,writer__18124__auto__,"cognitect.transit/t_cognitect$transit46149");
});

cognitect.transit.__GT_t_cognitect$transit46149 = (function cognitect$transit$__GT_t_cognitect$transit46149(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta46150){
return (new cognitect.transit.t_cognitect$transit46149(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta46150));
});

}

return (new cognitect.transit.t_cognitect$transit46149(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__17525__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1452702580330