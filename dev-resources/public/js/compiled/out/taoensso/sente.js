// Compiled by ClojureScript 1.7.170 {}
goog.provide('taoensso.sente');
goog.require('cljs.core');
goog.require('taoensso.timbre');
goog.require('taoensso.sente.interfaces');
goog.require('cljs.core.async');
goog.require('taoensso.encore');
goog.require('clojure.string');
if(cljs.core.vector_QMARK_.call(null,taoensso.encore.encore_version)){
taoensso.encore.assert_min_encore_version.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(11),(0)], null));
} else {
taoensso.encore.assert_min_encore_version.call(null,2.11);
}
taoensso.sente.validate_event = (function taoensso$sente$validate_event(x){
if(!(cljs.core.vector_QMARK_.call(null,x))){
return new cljs.core.Keyword(null,"wrong-type","wrong-type",929556915);
} else {
if(cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null).call(null,cljs.core.count.call(null,x)))){
return new cljs.core.Keyword(null,"wrong-length","wrong-length",1367572281);
} else {
var vec__22909 = x;
var ev_id = cljs.core.nth.call(null,vec__22909,(0),null);
var _ = cljs.core.nth.call(null,vec__22909,(1),null);
if(!((ev_id instanceof cljs.core.Keyword))){
return new cljs.core.Keyword(null,"wrong-id-type","wrong-id-type",-1213601689);
} else {
if(cljs.core.not.call(null,cljs.core.namespace.call(null,ev_id))){
return new cljs.core.Keyword(null,"unnamespaced-id","unnamespaced-id",1976189772);
} else {
return null;

}
}

}
}
});
/**
 * Valid [ev-id ?ev-data] form?
 */
taoensso.sente.event_QMARK_ = (function taoensso$sente$event_QMARK_(x){
return (taoensso.sente.validate_event.call(null,x) == null);
});
taoensso.sente.as_event = (function taoensso$sente$as_event(x){
if(cljs.core.truth_(taoensso.sente.event_QMARK_.call(null,x))){
return x;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-event","chsk/bad-event",-565206930),x], null);
}
});
taoensso.sente.assert_event = (function taoensso$sente$assert_event(x){
var temp__4425__auto__ = taoensso.sente.validate_event.call(null,x);
if(cljs.core.truth_(temp__4425__auto__)){
var _QMARK_err = temp__4425__auto__;
var err_fmt = [cljs.core.str((function (){var G__22911 = (((_QMARK_err instanceof cljs.core.Keyword))?_QMARK_err.fqn:null);
switch (G__22911) {
case "wrong-type":
return "Malformed event (wrong type).";

break;
case "wrong-length":
return "Malformed event (wrong length).";

break;
case "wrong-id-type":
return "Malformed event (`ev-id` should be a namespaced keyword).";

break;
case "unnamespaced-id":
return "Malformed event (`ev-id` should be a namespaced keyword).";

break;
case "else":
return "Malformed event (unknown error).";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(_QMARK_err)].join('')));

}
})()),cljs.core.str(" Event should be of `[ev-id ?ev-data]` form: %s")].join('');
throw cljs.core.ex_info.call(null,taoensso.encore.format.call(null,err_fmt,[cljs.core.str(x)].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"malformed-event","malformed-event",-2090896605),x], null));
} else {
return null;
}
});
taoensso.sente.event_msg_QMARK_ = (function taoensso$sente$event_msg_QMARK_(x){
var and__17513__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__17513__auto__){
var and__17513__auto____$1 = taoensso.encore.keys_EQ_.call(null,x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null));
if(cljs.core.truth_(and__17513__auto____$1)){
var map__22915 = x;
var map__22915__$1 = ((((!((map__22915 == null)))?((((map__22915.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22915.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22915):map__22915);
var ch_recv = cljs.core.get.call(null,map__22915__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__22915__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.call(null,map__22915__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.call(null,map__22915__$1,new cljs.core.Keyword(null,"event","event",301435442));
var and__17513__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(cljs.core.truth_(and__17513__auto____$2)){
var and__17513__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__17513__auto____$3){
var and__17513__auto____$4 = taoensso.encore.atom_QMARK_.call(null,state);
if(cljs.core.truth_(and__17513__auto____$4)){
return taoensso.sente.event_QMARK_.call(null,event);
} else {
return and__17513__auto____$4;
}
} else {
return and__17513__auto____$3;
}
} else {
return and__17513__auto____$2;
}
} else {
return and__17513__auto____$1;
}
} else {
return and__17513__auto__;
}
});
taoensso.sente.cb_error_QMARK_ = (function taoensso$sente$cb_error_QMARK_(cb_reply_clj){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264),null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439),null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489),null], null), null).call(null,cb_reply_clj);
});
taoensso.sente.cb_success_QMARK_ = (function taoensso$sente$cb_success_QMARK_(cb_reply_clj){
return cljs.core.not.call(null,taoensso.sente.cb_error_QMARK_.call(null,cb_reply_clj));
});
/**
 * pstr->clj
 */
taoensso.sente.unpack_STAR_ = (function taoensso$sente$unpack_STAR_(packer,pstr){
try{return taoensso.sente.interfaces.unpack.call(null,packer,(function (){var __x = pstr;
try{if(typeof __x === 'string'){
return __x;
} else {
return taoensso.encore._invar_violation_BANG_.call(null);
}
}catch (e22920){if((e22920 instanceof Error)){
var __t = e22920;
return taoensso.encore._invar_violation_BANG_.call(null,true,"taoensso.sente",170,"(string? pstr)",__x,__t,null);
} else {
throw e22920;

}
}})());
}catch (e22919){var t = e22919;
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/Users/alexandergunnarson/Development/Source Code Projects/byu/CS 360/Project0/a6c4897b5f1efd4f6c99900178172208f24f6d28-init.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (t){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad package: %s (%s)",pstr,t], null);
});})(t))
,null)),null);

throw t;
}});
taoensso.sente.with__QMARK_meta = (function taoensso$sente$with__QMARK_meta(x,_QMARK_m){
if(cljs.core.seq.call(null,_QMARK_m)){
return cljs.core.with_meta.call(null,x,_QMARK_m);
} else {
return x;
}
});
/**
 * clj->prefixed-pstr
 */
taoensso.sente.pack_STAR_ = (function taoensso$sente$pack_STAR_(var_args){
var args22921 = [];
var len__18583__auto___22924 = arguments.length;
var i__18584__auto___22925 = (0);
while(true){
if((i__18584__auto___22925 < len__18583__auto___22924)){
args22921.push((arguments[i__18584__auto___22925]));

var G__22926 = (i__18584__auto___22925 + (1));
i__18584__auto___22925 = G__22926;
continue;
} else {
}
break;
}

var G__22923 = args22921.length;
switch (G__22923) {
case 3:
return taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22921.length)].join('')));

}
});

taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (packer,_QMARK_packer_meta,clj){
return [cljs.core.str("-"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,clj,_QMARK_packer_meta)))].join('');
});

taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (packer,_QMARK_packer_meta,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,_QMARK_cb_uuid,new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321)))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
return [cljs.core.str("+"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,wrapped_clj,_QMARK_packer_meta)))].join('');
});

taoensso.sente.pack_STAR_.cljs$lang$maxFixedArity = 4;
taoensso.sente.pack = (function taoensso$sente$pack(var_args){
var args__18590__auto__ = [];
var len__18583__auto___22929 = arguments.length;
var i__18584__auto___22930 = (0);
while(true){
if((i__18584__auto___22930 < len__18583__auto___22929)){
args__18590__auto__.push((arguments[i__18584__auto___22930]));

var G__22931 = (i__18584__auto___22930 + (1));
i__18584__auto___22930 = G__22931;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var pstr = cljs.core.apply.call(null,taoensso.sente.pack_STAR_,args);
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/alexandergunnarson/Development/Source Code Projects/byu/CS 360/Project0/a6c4897b5f1efd4f6c99900178172208f24f6d28-init.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing: %s -> %s",args,pstr], null);
});})(pstr))
,null)),null);

return pstr;
});

taoensso.sente.pack.cljs$lang$maxFixedArity = (0);

taoensso.sente.pack.cljs$lang$applyTo = (function (seq22928){
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22928));
});
/**
 * prefixed-pstr->[clj ?cb-uuid]
 */
taoensso.sente.unpack = (function taoensso$sente$unpack(packer,prefixed_pstr){
var __x_22938 = prefixed_pstr;
try{if(typeof __x_22938 === 'string'){
} else {
taoensso.encore._invar_violation_BANG_.call(null);
}
}catch (e22935){if((e22935 instanceof Error)){
var __t_22939 = e22935;
taoensso.encore._invar_violation_BANG_.call(null,true,"taoensso.sente",197,"(string? prefixed-pstr)",__x_22938,__t_22939,null);
} else {
throw e22935;

}
}
var prefix = taoensso.encore.substr.call(null,prefixed_pstr,(0),(1));
var pstr = taoensso.encore.substr.call(null,prefixed_pstr,(1));
var clj = taoensso.sente.unpack_STAR_.call(null,packer,pstr);
var wrapped_QMARK_ = (function (){var G__22937 = prefix;
switch (G__22937) {
case "-":
return false;

break;
case "+":
return true;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(prefix)].join('')));

}
})();
var vec__22936 = (cljs.core.truth_(wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.call(null,vec__22936,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__22936,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,(0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/alexandergunnarson/Development/Source Code Projects/byu/CS 360/Project0/a6c4897b5f1efd4f6c99900178172208f24f6d28-init.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (prefix,pstr,clj,wrapped_QMARK_,vec__22936,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
});})(prefix,pstr,clj,wrapped_QMARK_,vec__22936,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1))
,null)),null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});

/**
 * @interface
 */
taoensso.sente.IChSocket = function(){};

/**
 * Implementation detail.
 */
taoensso.sente.chsk_init_BANG_ = (function taoensso$sente$chsk_init_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$chsk_init_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$chsk_init_BANG_$arity$1(chsk);
} else {
var x__18180__auto__ = (((chsk == null))?null:chsk);
var m__18181__auto__ = (taoensso.sente.chsk_init_BANG_[goog.typeOf(x__18180__auto__)]);
if(!((m__18181__auto__ == null))){
return m__18181__auto__.call(null,chsk);
} else {
var m__18181__auto____$1 = (taoensso.sente.chsk_init_BANG_["_"]);
if(!((m__18181__auto____$1 == null))){
return m__18181__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-init!",chsk);
}
}
}
});

/**
 * Kills socket, stops auto-reconnects.
 */
taoensso.sente.chsk_destroy_BANG_ = (function taoensso$sente$chsk_destroy_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1(chsk);
} else {
var x__18180__auto__ = (((chsk == null))?null:chsk);
var m__18181__auto__ = (taoensso.sente.chsk_destroy_BANG_[goog.typeOf(x__18180__auto__)]);
if(!((m__18181__auto__ == null))){
return m__18181__auto__.call(null,chsk);
} else {
var m__18181__auto____$1 = (taoensso.sente.chsk_destroy_BANG_["_"]);
if(!((m__18181__auto____$1 == null))){
return m__18181__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-destroy!",chsk);
}
}
}
});

/**
 * Drops connection, allows auto-reconnect. Useful for reauthenticating after login/logout.
 */
taoensso.sente.chsk_reconnect_BANG_ = (function taoensso$sente$chsk_reconnect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1(chsk);
} else {
var x__18180__auto__ = (((chsk == null))?null:chsk);
var m__18181__auto__ = (taoensso.sente.chsk_reconnect_BANG_[goog.typeOf(x__18180__auto__)]);
if(!((m__18181__auto__ == null))){
return m__18181__auto__.call(null,chsk);
} else {
var m__18181__auto____$1 = (taoensso.sente.chsk_reconnect_BANG_["_"]);
if(!((m__18181__auto____$1 == null))){
return m__18181__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-reconnect!",chsk);
}
}
}
});

/**
 * Implementation detail.
 */
taoensso.sente.chsk_send_BANG__STAR_ = (function taoensso$sente$chsk_send_BANG__STAR_(chsk,ev,opts){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$chsk_send_BANG__STAR_$arity$3 == null)))){
return chsk.taoensso$sente$IChSocket$chsk_send_BANG__STAR_$arity$3(chsk,ev,opts);
} else {
var x__18180__auto__ = (((chsk == null))?null:chsk);
var m__18181__auto__ = (taoensso.sente.chsk_send_BANG__STAR_[goog.typeOf(x__18180__auto__)]);
if(!((m__18181__auto__ == null))){
return m__18181__auto__.call(null,chsk,ev,opts);
} else {
var m__18181__auto____$1 = (taoensso.sente.chsk_send_BANG__STAR_["_"]);
if(!((m__18181__auto____$1 == null))){
return m__18181__auto____$1.call(null,chsk,ev,opts);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-send!*",chsk);
}
}
}
});

/**
 * Sends `[ev-id ev-?data :as event]`, returns true on apparent success.
 */
taoensso.sente.chsk_send_BANG_ = (function taoensso$sente$chsk_send_BANG_(var_args){
var args22941 = [];
var len__18583__auto___22944 = arguments.length;
var i__18584__auto___22945 = (0);
while(true){
if((i__18584__auto___22945 < len__18583__auto___22944)){
args22941.push((arguments[i__18584__auto___22945]));

var G__22946 = (i__18584__auto___22945 + (1));
i__18584__auto___22945 = G__22946;
continue;
} else {
}
break;
}

var G__22943 = args22941.length;
switch (G__22943) {
case 2:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22941.length)].join('')));

}
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/alexandergunnarson/Development/Source Code Projects/byu/CS 360/Project0/a6c4897b5f1efd4f6c99900178172208f24f6d28-init.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null);

return taoensso.sente.chsk_send_BANG__STAR_.call(null,chsk,ev,opts);
});

taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4;
taoensso.sente.assert_send_args = (function taoensso$sente$assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event.call(null,x);

if(cljs.core.truth_((function (){var or__17525__auto__ = ((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null));
if(or__17525__auto__){
return or__17525__auto__;
} else {
return taoensso.encore.nneg_int_QMARK_.call(null,_QMARK_timeout_ms);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(taoensso.encore.format.call(null,"cb requires a timeout; timeout-ms should be a +ive integer: %s",_QMARK_timeout_ms)),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"?timeout-ms","?timeout-ms",-651193632,null)),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null))),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol("enc","nneg-int?","enc/nneg-int?",803640858,null),new cljs.core.Symbol(null,"?timeout-ms","?timeout-ms",-651193632,null))))))].join('')));
}

if(cljs.core.truth_((function (){var or__17525__auto__ = (_QMARK_cb == null);
if(or__17525__auto__){
return or__17525__auto__;
} else {
var or__17525__auto____$1 = cljs.core.ifn_QMARK_.call(null,_QMARK_cb);
if(or__17525__auto____$1){
return or__17525__auto____$1;
} else {
return taoensso.encore.chan_QMARK_.call(null,_QMARK_cb);
}
}
})())){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(taoensso.encore.format.call(null,"cb should be nil, an ifn, or a channel: %s",cljs.core.type.call(null,_QMARK_cb))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null)),cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null)),cljs.core.list(new cljs.core.Symbol("enc","chan?","enc/chan?",1377166,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null)))))].join('')));
}
});
taoensso.sente.pull_unused_cb_fn_BANG_ = (function taoensso$sente$pull_unused_cb_fn_BANG_(cbs_waiting_,_QMARK_cb_uuid){
var temp__4425__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4425__auto__)){
var cb_uuid = temp__4425__auto__;
return taoensso.encore.swap_in_BANG_.call(null,cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid], null),((function (cb_uuid,temp__4425__auto__){
return (function (_QMARK_f){
return taoensso.encore.swapped.call(null,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),_QMARK_f);
});})(cb_uuid,temp__4425__auto__))
);
} else {
return null;
}
});
taoensso.sente.merge_GT_chsk_state_BANG_ = (function taoensso$sente$merge_GT_chsk_state_BANG_(p__22948,merge_state){
var map__22952 = p__22948;
var map__22952__$1 = ((((!((map__22952 == null)))?((((map__22952.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22952.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22952):map__22952);
var chsk = map__22952__$1;
var chs = cljs.core.get.call(null,map__22952__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var state_ = cljs.core.get.call(null,map__22952__$1,new cljs.core.Keyword(null,"state_","state_",957667102));
var vec__22954 = taoensso.encore.swap_in_BANG_.call(null,state_,cljs.core.PersistentVector.EMPTY,((function (map__22952,map__22952__$1,chsk,chs,state_){
return (function (old_state){
var new_state = cljs.core.merge.call(null,old_state,merge_state);
var new_state__$1 = ((cljs.core.not.call(null,(function (){var and__17513__auto__ = new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116).cljs$core$IFn$_invoke$arity$1(old_state);
if(cljs.core.truth_(and__17513__auto__)){
var and__17513__auto____$1 = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state);
if(cljs.core.truth_(and__17513__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(old_state));
} else {
return and__17513__auto____$1;
}
} else {
return and__17513__auto__;
}
})()))?new_state:cljs.core.assoc.call(null,cljs.core.dissoc.call(null,new_state,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116)),new cljs.core.Keyword(null,"requested-reconnect?","requested-reconnect?",-1504983666),true));
return taoensso.encore.swapped.call(null,new_state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$1], null));
});})(map__22952,map__22952__$1,chsk,chs,state_))
);
var old_state = cljs.core.nth.call(null,vec__22954,(0),null);
var new_state = cljs.core.nth.call(null,vec__22954,(1),null);
if(cljs.core.not_EQ_.call(null,old_state,new_state)){
cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(chs),new_state);

return new_state;
} else {
return null;
}
});
/**
 * Experimental, undocumented. Allows a core.async channel to be provided
 *   instead of a cb-fn. The channel will receive values of form
 *   [<event-id>.cb <reply>].
 */
taoensso.sente.cb_chan_as_fn = (function taoensso$sente$cb_chan_as_fn(_QMARK_cb,ev){
if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_cb))){
return _QMARK_cb;
} else {
var __x_22959 = _QMARK_cb;
try{if(cljs.core.truth_(taoensso.encore.chan_QMARK_.call(null,__x_22959))){
} else {
taoensso.encore._invar_violation_BANG_.call(null);
}
}catch (e22957){if((e22957 instanceof Error)){
var __t_22960 = e22957;
taoensso.encore._invar_violation_BANG_.call(null,true,"taoensso.sente",691,"(enc/chan? ?cb)",__x_22959,__t_22960,null);
} else {
throw e22957;

}
}
taoensso.sente.assert_event.call(null,ev);

var vec__22958 = ev;
var ev_id = cljs.core.nth.call(null,vec__22958,(0),null);
var _ = cljs.core.nth.call(null,vec__22958,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__22958,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.call(null,cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str(taoensso.encore.fq_name.call(null,ev_id)),cljs.core.str(".cb")].join('')),reply], null));
});
;})(vec__22958,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/alexandergunnarson/Development/Source Code Projects/byu/CS 360/Project0/a6c4897b5f1efd4f6c99900178172208f24f6d28-init.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null);

var buffered_evs = (function (){var __x = clj;
try{if(cljs.core.vector_QMARK_.call(null,__x)){
return __x;
} else {
return taoensso.encore._invar_violation_BANG_.call(null);
}
}catch (e22966){if((e22966 instanceof Error)){
var __t = e22966;
return taoensso.encore._invar_violation_BANG_.call(null,true,"taoensso.sente",702,"(vector? clj)",__x,__t,null);
} else {
throw e22966;

}
}})();
var seq__22967 = cljs.core.seq.call(null,buffered_evs);
var chunk__22968 = null;
var count__22969 = (0);
var i__22970 = (0);
while(true){
if((i__22970 < count__22969)){
var ev = cljs.core._nth.call(null,chunk__22968,i__22970);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__22971 = seq__22967;
var G__22972 = chunk__22968;
var G__22973 = count__22969;
var G__22974 = (i__22970 + (1));
seq__22967 = G__22971;
chunk__22968 = G__22972;
count__22969 = G__22973;
i__22970 = G__22974;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22967);
if(temp__4425__auto__){
var seq__22967__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22967__$1)){
var c__18328__auto__ = cljs.core.chunk_first.call(null,seq__22967__$1);
var G__22975 = cljs.core.chunk_rest.call(null,seq__22967__$1);
var G__22976 = c__18328__auto__;
var G__22977 = cljs.core.count.call(null,c__18328__auto__);
var G__22978 = (0);
seq__22967 = G__22975;
chunk__22968 = G__22976;
count__22969 = G__22977;
i__22970 = G__22978;
continue;
} else {
var ev = cljs.core.first.call(null,seq__22967__$1);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__22979 = cljs.core.next.call(null,seq__22967__$1);
var G__22980 = null;
var G__22981 = (0);
var G__22982 = (0);
seq__22967 = G__22979;
chunk__22968 = G__22980;
count__22969 = G__22981;
i__22970 = G__22982;
continue;
}
} else {
return null;
}
}
break;
}
});
taoensso.sente.handle_when_handshake_BANG_ = (function taoensso$sente$handle_when_handshake_BANG_(chsk,chs,clj){
var handshake_QMARK_ = (cljs.core.vector_QMARK_.call(null,clj)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,clj),new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686)));
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/alexandergunnarson/Development/Source Code Projects/byu/CS 360/Project0/a6c4897b5f1efd4f6c99900178172208f24f6d28-init.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (handshake_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["handle-when-handshake (%s): %s",((handshake_QMARK_)?new cljs.core.Keyword(null,"handshake","handshake",68079331):new cljs.core.Keyword(null,"non-handshake","non-handshake",576986062)),clj], null);
});})(handshake_QMARK_))
,null)),null);

if(handshake_QMARK_){
var vec__22985 = clj;
var _ = cljs.core.nth.call(null,vec__22985,(0),null);
var vec__22986 = cljs.core.nth.call(null,vec__22985,(1),null);
var _QMARK_uid = cljs.core.nth.call(null,vec__22986,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__22986,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__22986,(2),null);
var handshake_ev = vec__22985;
if(clojure.string.blank_QMARK_.call(null,_QMARK_csrf_token)){
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/alexandergunnarson/Development/Source Code Projects/byu/CS 360/Project0/a6c4897b5f1efd4f6c99900178172208f24f6d28-init.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (vec__22985,_,vec__22986,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,handshake_ev,handshake_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SECURITY WARNING: no CSRF token available for use by Sente"], null);
});})(vec__22985,_,vec__22986,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,handshake_ev,handshake_QMARK_))
,null)),null);
} else {
}

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"uid","uid",-1447769400),_QMARK_uid,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),_QMARK_csrf_token], null));

taoensso.sente.assert_event.call(null,handshake_ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(chs),handshake_ev);

return new cljs.core.Keyword(null,"handled","handled",1889700151);
} else {
return null;
}
});
taoensso.sente.set_exp_backoff_timeout_BANG_ = (function taoensso$sente$set_exp_backoff_timeout_BANG_(var_args){
var args__18590__auto__ = [];
var len__18583__auto___22992 = arguments.length;
var i__18584__auto___22993 = (0);
while(true){
if((i__18584__auto___22993 < len__18583__auto___22992)){
args__18590__auto__.push((arguments[i__18584__auto___22993]));

var G__22994 = (i__18584__auto___22993 + (1));
i__18584__auto___22993 = G__22994;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((2) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((2)),(0))):null);
return taoensso.sente.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18591__auto__);
});

taoensso.sente.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (nullary_f,nattempt,p__22990){
var vec__22991 = p__22990;
var backoff_ms_fn = cljs.core.nth.call(null,vec__22991,(0),null);
var timeout_ms = backoff_ms_fn.call(null,(function (){var or__17525__auto__ = nattempt;
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return (0);
}
})());
return window.setTimeout(nullary_f,timeout_ms);
});

taoensso.sente.set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (seq22987){
var G__22988 = cljs.core.first.call(null,seq22987);
var seq22987__$1 = cljs.core.next.call(null,seq22987);
var G__22989 = cljs.core.first.call(null,seq22987__$1);
var seq22987__$2 = cljs.core.next.call(null,seq22987__$1);
return taoensso.sente.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22988,G__22989,seq22987__$2);
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
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChWebSocket = (function (client_id,url,params,chs,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,nattempt_,cbs_waiting_,state_,packer,backoff_ms_fn,__meta,__extmap,__hash){
this.client_id = client_id;
this.url = url;
this.params = params;
this.chs = chs;
this.socket_ = socket_;
this.kalive_ms = kalive_ms;
this.kalive_timer_ = kalive_timer_;
this.kalive_due_QMARK__ = kalive_due_QMARK__;
this.nattempt_ = nattempt_;
this.cbs_waiting_ = cbs_waiting_;
this.state_ = state_;
this.packer = packer;
this.backoff_ms_fn = backoff_ms_fn;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18139__auto__,k__18140__auto__){
var self__ = this;
var this__18139__auto____$1 = this;
return cljs.core._lookup.call(null,this__18139__auto____$1,k__18140__auto__,null);
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18141__auto__,k22996,else__18142__auto__){
var self__ = this;
var this__18141__auto____$1 = this;
var G__22998 = (((k22996 instanceof cljs.core.Keyword))?k22996.fqn:null);
switch (G__22998) {
case "client-id":
return self__.client_id;

break;
case "kalive-ms":
return self__.kalive_ms;

break;
case "nattempt_":
return self__.nattempt_;

break;
case "packer":
return self__.packer;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "socket_":
return self__.socket_;

break;
case "url":
return self__.url;

break;
case "kalive-due?_":
return self__.kalive_due_QMARK__;

break;
case "cbs-waiting_":
return self__.cbs_waiting_;

break;
case "kalive-timer_":
return self__.kalive_timer_;

break;
case "state_":
return self__.state_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22996,else__18142__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18153__auto__,writer__18154__auto__,opts__18155__auto__){
var self__ = this;
var this__18153__auto____$1 = this;
var pr_pair__18156__auto__ = ((function (this__18153__auto____$1){
return (function (keyval__18157__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,cljs.core.pr_writer,""," ","",opts__18155__auto__,keyval__18157__auto__);
});})(this__18153__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,pr_pair__18156__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__18155__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),self__.nattempt_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22995){
var self__ = this;
var G__22995__$1 = this;
return (new cljs.core.RecordIter((0),G__22995__$1,13,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18137__auto__){
var self__ = this;
var this__18137__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18133__auto__){
var self__ = this;
var this__18133__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.params,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18143__auto__){
var self__ = this;
var this__18143__auto____$1 = this;
return (13 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18134__auto__){
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

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18135__auto__,other__18136__auto__){
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

taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18148__auto__,k__18149__auto__){
var self__ = this;
var this__18148__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),null,new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__18149__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18148__auto____$1),self__.__meta),k__18149__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.params,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18149__auto__)),null));
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18146__auto__,k__18147__auto__,G__22995){
var self__ = this;
var this__18146__auto____$1 = this;
var pred__22999 = cljs.core.keyword_identical_QMARK_;
var expr__23000 = k__18147__auto__;
if(cljs.core.truth_(pred__22999.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__23000))){
return (new taoensso.sente.ChWebSocket(G__22995,self__.url,self__.params,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22999.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__23000))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__22995,self__.params,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22999.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__23000))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,G__22995,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22999.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__23000))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.params,G__22995,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22999.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__23000))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.params,self__.chs,G__22995,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22999.call(null,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),expr__23000))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.params,self__.chs,self__.socket_,G__22995,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22999.call(null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),expr__23000))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.params,self__.chs,self__.socket_,self__.kalive_ms,G__22995,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22999.call(null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),expr__23000))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.params,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,G__22995,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22999.call(null,new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),expr__23000))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.params,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,G__22995,self__.cbs_waiting_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22999.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__23000))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.params,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,G__22995,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22999.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__23000))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.params,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,G__22995,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22999.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__23000))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.params,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,G__22995,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22999.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__23000))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.params,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,G__22995,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.params,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18147__auto__,G__22995),null));
}
}
}
}
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

taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18151__auto__){
var self__ = this;
var this__18151__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),self__.nattempt_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18138__auto__,G__22995){
var self__ = this;
var this__18138__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.params,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.backoff_ms_fn,G__22995,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18144__auto__,entry__18145__auto__){
var self__ = this;
var this__18144__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18145__auto__)){
return cljs.core._assoc.call(null,this__18144__auto____$1,cljs.core._nth.call(null,entry__18145__auto__,(0)),cljs.core._nth.call(null,entry__18145__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18144__auto____$1,entry__18145__auto__);
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_send_BANG__STAR_$arity$3 = (function (chsk,ev,p__23002){
var self__ = this;
var map__23003 = p__23002;
var map__23003__$1 = ((((!((map__23003 == null)))?((((map__23003.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23003.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23003):map__23003);
var opts = map__23003__$1;
var _QMARK_timeout_ms = cljs.core.get.call(null,map__23003__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__23003__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__23003__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var chsk__$1 = this;
taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);

var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/alexandergunnarson/Development/Source Code Projects/byu/CS 360/Project0/a6c4897b5f1efd4f6c99900178172208f24f6d28-init.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (_QMARK_cb_fn,chsk__$1,map__23003,map__23003__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
});})(_QMARK_cb_fn,chsk__$1,map__23003,map__23003__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
return null;
}
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.call(null,(6)):null);
var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,_QMARK_cb_uuid);
var temp__4425__auto___23039 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4425__auto___23039)){
var cb_uuid_23040 = temp__4425__auto___23039;
taoensso.encore.reset_in_BANG_.call(null,self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_23040], null),(function (){var __x = _QMARK_cb_fn;
try{if(cljs.core.truth_(taoensso.encore.nnil_QMARK_.call(null,__x))){
return __x;
} else {
return taoensso.encore._invar_violation_BANG_.call(null);
}
}catch (e23005){if((e23005 instanceof Error)){
var __t = e23005;
return taoensso.encore._invar_violation_BANG_.call(null,true,"taoensso.sente",768,"(taoensso.encore/nnil? ?cb-fn)",__x,__t,null);
} else {
throw e23005;

}
}})());

var temp__4425__auto___23041__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__4425__auto___23041__$1)){
var timeout_ms_23042 = temp__4425__auto___23041__$1;
var c__22863__auto___23043 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22863__auto___23043,timeout_ms_23042,temp__4425__auto___23041__$1,cb_uuid_23040,temp__4425__auto___23039,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__23003,map__23003__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
var f__22864__auto__ = (function (){var switch__22842__auto__ = ((function (c__22863__auto___23043,timeout_ms_23042,temp__4425__auto___23041__$1,cb_uuid_23040,temp__4425__auto___23039,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__23003,map__23003__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (state_23016){
var state_val_23017 = (state_23016[(1)]);
if((state_val_23017 === (1))){
var inst_23006 = cljs.core.async.timeout.call(null,timeout_ms_23042);
var state_23016__$1 = state_23016;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23016__$1,(2),inst_23006);
} else {
if((state_val_23017 === (2))){
var inst_23009 = (state_23016[(7)]);
var inst_23008 = (state_23016[(2)]);
var inst_23009__$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);
var state_23016__$1 = (function (){var statearr_23018 = state_23016;
(statearr_23018[(8)] = inst_23008);

(statearr_23018[(7)] = inst_23009__$1);

return statearr_23018;
})();
if(cljs.core.truth_(inst_23009__$1)){
var statearr_23019_23044 = state_23016__$1;
(statearr_23019_23044[(1)] = (3));

} else {
var statearr_23020_23045 = state_23016__$1;
(statearr_23020_23045[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23017 === (3))){
var inst_23009 = (state_23016[(7)]);
var inst_23011 = inst_23009.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_23016__$1 = state_23016;
var statearr_23021_23046 = state_23016__$1;
(statearr_23021_23046[(2)] = inst_23011);

(statearr_23021_23046[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23017 === (4))){
var state_23016__$1 = state_23016;
var statearr_23022_23047 = state_23016__$1;
(statearr_23022_23047[(2)] = null);

(statearr_23022_23047[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23017 === (5))){
var inst_23014 = (state_23016[(2)]);
var state_23016__$1 = state_23016;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23016__$1,inst_23014);
} else {
return null;
}
}
}
}
}
});})(c__22863__auto___23043,timeout_ms_23042,temp__4425__auto___23041__$1,cb_uuid_23040,temp__4425__auto___23039,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__23003,map__23003__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
;
return ((function (switch__22842__auto__,c__22863__auto___23043,timeout_ms_23042,temp__4425__auto___23041__$1,cb_uuid_23040,temp__4425__auto___23039,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__23003,map__23003__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function() {
var taoensso$sente$state_machine__22843__auto__ = null;
var taoensso$sente$state_machine__22843__auto____0 = (function (){
var statearr_23026 = [null,null,null,null,null,null,null,null,null];
(statearr_23026[(0)] = taoensso$sente$state_machine__22843__auto__);

(statearr_23026[(1)] = (1));

return statearr_23026;
});
var taoensso$sente$state_machine__22843__auto____1 = (function (state_23016){
while(true){
var ret_value__22844__auto__ = (function (){try{while(true){
var result__22845__auto__ = switch__22842__auto__.call(null,state_23016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22845__auto__;
}
break;
}
}catch (e23027){if((e23027 instanceof Object)){
var ex__22846__auto__ = e23027;
var statearr_23028_23048 = state_23016;
(statearr_23028_23048[(5)] = ex__22846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23027;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23049 = state_23016;
state_23016 = G__23049;
continue;
} else {
return ret_value__22844__auto__;
}
break;
}
});
taoensso$sente$state_machine__22843__auto__ = function(state_23016){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__22843__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__22843__auto____1.call(this,state_23016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__22843__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__22843__auto____0;
taoensso$sente$state_machine__22843__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__22843__auto____1;
return taoensso$sente$state_machine__22843__auto__;
})()
;})(switch__22842__auto__,c__22863__auto___23043,timeout_ms_23042,temp__4425__auto___23041__$1,cb_uuid_23040,temp__4425__auto___23039,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__23003,map__23003__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
})();
var state__22865__auto__ = (function (){var statearr_23029 = f__22864__auto__.call(null);
(statearr_23029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22863__auto___23043);

return statearr_23029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22865__auto__);
});})(c__22863__auto___23043,timeout_ms_23042,temp__4425__auto___23041__$1,cb_uuid_23040,temp__4425__auto___23039,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__23003,map__23003__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
);

} else {
}
} else {
}

try{cljs.core.deref.call(null,self__.socket_).send(ppstr);

cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,false);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e23030){if((e23030 instanceof Error)){
var e = e23030;
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/Users/alexandergunnarson/Development/Source Code Projects/byu/CS 360/Project0/a6c4897b5f1efd4f6c99900178172208f24f6d28-init.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (e,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__23003,map__23003__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk send error"], null);
});})(e,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__23003,map__23003__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);

var temp__4425__auto___23050 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4425__auto___23050)){
var cb_uuid_23051 = temp__4425__auto___23050;
var cb_fn_STAR__23052 = (function (){var or__17525__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid_23051);
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
var __x = _QMARK_cb_fn;
try{if(cljs.core.truth_(taoensso.encore.nnil_QMARK_.call(null,__x))){
return __x;
} else {
return taoensso.encore._invar_violation_BANG_.call(null);
}
}catch (e23031){if((e23031 instanceof Error)){
var __t = e23031;
return taoensso.encore._invar_violation_BANG_.call(null,true,"taoensso.sente",782,"(taoensso.encore/nnil? ?cb-fn)",__x,__t,null);
} else {
throw e23031;

}
}}
})();
cb_fn_STAR__23052.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
}

return false;
} else {
throw e23030;

}
}}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116),true], null));

var temp__4425__auto__ = cljs.core.deref.call(null,self__.socket_);
if(cljs.core.truth_(temp__4425__auto__)){
var s = temp__4425__auto__;
return s.close((3000),"SENTE_RECONNECT");
} else {
return null;
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064),true], null));

var temp__4425__auto__ = cljs.core.deref.call(null,self__.socket_);
if(cljs.core.truth_(temp__4425__auto__)){
var s = temp__4425__auto__;
return s.close((1000),"CLOSE_NORMAL");
} else {
return null;
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_init_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4425__auto__ = (function (){var or__17525__auto__ = taoensso.encore.oget.call(null,window,"WebSocket");
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return taoensso.encore.oget.call(null,window,"MozWebSocket");
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var WebSocket = temp__4425__auto__;
((function (WebSocket,temp__4425__auto__,chsk__$1){
return (function taoensso$sente$connect_BANG_(){
if(cljs.core.truth_(new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return null;
} else {
var retry_BANG_ = ((function (WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
var nattempt_STAR_ = cljs.core.swap_BANG_.call(null,self__.nattempt_,cljs.core.inc);
window.clearInterval(cljs.core.deref.call(null,self__.kalive_timer_));

taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/alexandergunnarson/Development/Source Code Projects/byu/CS 360/Project0/a6c4897b5f1efd4f6c99900178172208f24f6d28-init.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (nattempt_STAR_,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect (%s).",nattempt_STAR_], null);
});})(nattempt_STAR_,WebSocket,temp__4425__auto__,chsk__$1))
,null)),null);

return taoensso.sente.set_exp_backoff_timeout_BANG_.call(null,taoensso$sente$connect_BANG_,nattempt_STAR_,self__.backoff_ms_fn);
});})(WebSocket,temp__4425__auto__,chsk__$1))
;
var temp__4423__auto__ = (function (){try{return (new WebSocket(taoensso.encore.merge_url_with_query_string.call(null,self__.url,cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null)))));
}catch (e23035){if((e23035 instanceof Error)){
var e = e23035;
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/Users/alexandergunnarson/Development/Source Code Projects/byu/CS 360/Project0/a6c4897b5f1efd4f6c99900178172208f24f6d28-init.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (e,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"WebSocket js/Error"], null);
});})(e,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1))
,null)),null);

return null;
} else {
throw e23035;

}
}})();
if(cljs.core.truth_(temp__4423__auto__)){
var socket = temp__4423__auto__;
return cljs.core.reset_BANG_.call(null,self__.socket_,(function (){var G__23036 = socket;
(G__23036["onerror"] = ((function (G__23036,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1){
return (function (ws_ev){
return taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/Users/alexandergunnarson/Development/Source Code Projects/byu/CS 360/Project0/a6c4897b5f1efd4f6c99900178172208f24f6d28-init.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (G__23036,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",ws_ev], null);
});})(G__23036,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1))
,null)),null);
});})(G__23036,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1))
);

(G__23036["onmessage"] = ((function (G__23036,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = taoensso.encore.oget.call(null,ws_ev,"data");
var vec__23037 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__23037,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__23037,(1),null);
var or__17525__auto__ = (function (){var and__17513__auto__ = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,self__.chs,clj);
if(cljs.core.truth_(and__17513__auto__)){
return cljs.core.reset_BANG_.call(null,self__.nattempt_,(0));
} else {
return and__17513__auto__;
}
})();
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
var temp__4423__auto____$1 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4423__auto____$1)){
var cb_uuid = temp__4423__auto____$1;
var temp__4423__auto____$2 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__4423__auto____$2)){
var cb_fn = temp__4423__auto____$2;
return cb_fn.call(null,clj);
} else {
return taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/alexandergunnarson/Development/Source Code Projects/byu/CS 360/Project0/a6c4897b5f1efd4f6c99900178172208f24f6d28-init.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (temp__4423__auto____$2,cb_uuid,temp__4423__auto____$1,or__17525__auto__,ppstr,vec__23037,clj,_QMARK_cb_uuid,G__23036,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
});})(temp__4423__auto____$2,cb_uuid,temp__4423__auto____$1,or__17525__auto__,ppstr,vec__23037,clj,_QMARK_cb_uuid,G__23036,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1))
,null)),null);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
});})(G__23036,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1))
);

(G__23036["onopen"] = ((function (G__23036,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1){
return (function (_ws_ev){
return cljs.core.reset_BANG_.call(null,self__.kalive_timer_,window.setInterval(((function (G__23036,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,self__.kalive_due_QMARK__))){
taoensso.sente.chsk_send_BANG_.call(null,chsk__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));
} else {
}

return cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,true);
});})(G__23036,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1))
,self__.kalive_ms));
});})(G__23036,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1))
);

(G__23036["onclose"] = ((function (G__23036,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1){
return (function (_ws_ev){
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return retry_BANG_.call(null);
});})(G__23036,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1))
);

return G__23036;
})());
} else {
return retry_BANG_.call(null);
}
}
});})(WebSocket,temp__4425__auto__,chsk__$1))
.call(null);

return chsk__$1;
} else {
return null;
}
});

taoensso.sente.ChWebSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"socket_","socket_",1279482619,null),new cljs.core.Symbol(null,"kalive-ms","kalive-ms",1851265548,null),new cljs.core.Symbol(null,"kalive-timer_","kalive-timer_",-1096022620,null),new cljs.core.Symbol(null,"kalive-due?_","kalive-due?_",1679969599,null),new cljs.core.Symbol(null,"nattempt_","nattempt_",-674239217,null),new cljs.core.Symbol(null,"cbs-waiting_","cbs-waiting_",121502466,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null)], null);
});

taoensso.sente.ChWebSocket.cljs$lang$type = true;

taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__18173__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChWebSocket");
});

taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__18173__auto__,writer__18174__auto__){
return cljs.core._write.call(null,writer__18174__auto__,"taoensso.sente/ChWebSocket");
});

taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,url,params,chs,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,nattempt_,cbs_waiting_,state_,packer,backoff_ms_fn){
return (new taoensso.sente.ChWebSocket(client_id,url,params,chs,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,nattempt_,cbs_waiting_,state_,packer,backoff_ms_fn,null,null,null));
});

taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__22997){
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__22997),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__22997),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__22997),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__22997),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__22997),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021).cljs$core$IFn$_invoke$arity$1(G__22997),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149).cljs$core$IFn$_invoke$arity$1(G__22997),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072).cljs$core$IFn$_invoke$arity$1(G__22997),new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552).cljs$core$IFn$_invoke$arity$1(G__22997),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__22997),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__22997),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__22997),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__22997),null,cljs.core.dissoc.call(null,G__22997,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955)),null));
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
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAjaxSocket = (function (client_id,url,params,chs,timeout_ms,ajax_opts,curr_xhr_,state_,packer,backoff_ms_fn,__meta,__extmap,__hash){
this.client_id = client_id;
this.url = url;
this.params = params;
this.chs = chs;
this.timeout_ms = timeout_ms;
this.ajax_opts = ajax_opts;
this.curr_xhr_ = curr_xhr_;
this.state_ = state_;
this.packer = packer;
this.backoff_ms_fn = backoff_ms_fn;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18139__auto__,k__18140__auto__){
var self__ = this;
var this__18139__auto____$1 = this;
return cljs.core._lookup.call(null,this__18139__auto____$1,k__18140__auto__,null);
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18141__auto__,k23054,else__18142__auto__){
var self__ = this;
var this__18141__auto____$1 = this;
var G__23056 = (((k23054 instanceof cljs.core.Keyword))?k23054.fqn:null);
switch (G__23056) {
case "curr-xhr_":
return self__.curr_xhr_;

break;
case "client-id":
return self__.client_id;

break;
case "packer":
return self__.packer;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "url":
return self__.url;

break;
case "ajax-opts":
return self__.ajax_opts;

break;
case "timeout-ms":
return self__.timeout_ms;

break;
case "state_":
return self__.state_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23054,else__18142__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18153__auto__,writer__18154__auto__,opts__18155__auto__){
var self__ = this;
var this__18153__auto____$1 = this;
var pr_pair__18156__auto__ = ((function (this__18153__auto____$1){
return (function (keyval__18157__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,cljs.core.pr_writer,""," ","",opts__18155__auto__,keyval__18157__auto__);
});})(this__18153__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,pr_pair__18156__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__18155__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23053){
var self__ = this;
var G__23053__$1 = this;
return (new cljs.core.RecordIter((0),G__23053__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18137__auto__){
var self__ = this;
var this__18137__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18133__auto__){
var self__ = this;
var this__18133__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.params,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18143__auto__){
var self__ = this;
var this__18143__auto____$1 = this;
return (10 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18134__auto__){
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18135__auto__,other__18136__auto__){
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18148__auto__,k__18149__auto__){
var self__ = this;
var this__18148__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),null,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__18149__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18148__auto____$1),self__.__meta),k__18149__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.params,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18149__auto__)),null));
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18146__auto__,k__18147__auto__,G__23053){
var self__ = this;
var this__18146__auto____$1 = this;
var pred__23057 = cljs.core.keyword_identical_QMARK_;
var expr__23058 = k__18147__auto__;
if(cljs.core.truth_(pred__23057.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__23058))){
return (new taoensso.sente.ChAjaxSocket(G__23053,self__.url,self__.params,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23057.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__23058))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__23053,self__.params,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23057.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__23058))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,G__23053,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23057.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__23058))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.params,G__23053,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23057.call(null,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),expr__23058))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.params,self__.chs,G__23053,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23057.call(null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__23058))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.params,self__.chs,self__.timeout_ms,G__23053,self__.curr_xhr_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23057.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__23058))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.params,self__.chs,self__.timeout_ms,self__.ajax_opts,G__23053,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23057.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__23058))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.params,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,G__23053,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23057.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__23058))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.params,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,G__23053,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23057.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__23058))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.params,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,G__23053,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.params,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18147__auto__,G__23053),null));
}
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18151__auto__){
var self__ = this;
var this__18151__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18138__auto__,G__23053){
var self__ = this;
var this__18138__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.params,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.backoff_ms_fn,G__23053,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18144__auto__,entry__18145__auto__){
var self__ = this;
var this__18144__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18145__auto__)){
return cljs.core._assoc.call(null,this__18144__auto____$1,cljs.core._nth.call(null,entry__18145__auto__,(0)),cljs.core._nth.call(null,entry__18145__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18144__auto____$1,entry__18145__auto__);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_send_BANG__STAR_$arity$3 = (function (chsk,ev,p__23060){
var self__ = this;
var map__23061 = p__23060;
var map__23061__$1 = ((((!((map__23061 == null)))?((((map__23061.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23061.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23061):map__23061);
var opts = map__23061__$1;
var _QMARK_timeout_ms = cljs.core.get.call(null,map__23061__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__23061__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__23061__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var chsk__$1 = this;
taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);

var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/alexandergunnarson/Development/Source Code Projects/byu/CS 360/Project0/a6c4897b5f1efd4f6c99900178172208f24f6d28-init.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (_QMARK_cb_fn,chsk__$1,map__23061,map__23061__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
});})(_QMARK_cb_fn,chsk__$1,map__23061,map__23061__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
return null;
}
} else {
taoensso.encore.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),(function (){var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,(cljs.core.truth_(_QMARK_cb_fn)?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):null));
return cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"_","_",1453416199),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)),new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252),ppstr], null));
})()], null)),((function (_QMARK_cb_fn,chsk__$1,map__23061,map__23061__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function taoensso$sente$ajax_cb(p__23063){
var map__23067 = p__23063;
var map__23067__$1 = ((((!((map__23067 == null)))?((((map__23067.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23067.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23067):map__23067);
var _QMARK_error = cljs.core.get.call(null,map__23067__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__23067__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
} else {
return null;
}
} else {
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
return null;
}
}
} else {
var content = _QMARK_content;
var resp_ppstr = content;
var vec__23069 = taoensso.sente.unpack.call(null,self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.call(null,vec__23069,(0),null);
var _ = cljs.core.nth.call(null,vec__23069,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,resp_clj);
} else {
if(cljs.core.not_EQ_.call(null,resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/alexandergunnarson/Development/Source Code Projects/byu/CS 360/Project0/a6c4897b5f1efd4f6c99900178172208f24f6d28-init.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (content,resp_ppstr,vec__23069,resp_clj,_,map__23067,map__23067__$1,_QMARK_error,_QMARK_content,_QMARK_cb_fn,chsk__$1,map__23061,map__23061__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
});})(content,resp_ppstr,vec__23069,resp_clj,_,map__23067,map__23067__$1,_QMARK_error,_QMARK_content,_QMARK_cb_fn,chsk__$1,map__23061,map__23061__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);
} else {
}
}

return taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));
}
});})(_QMARK_cb_fn,chsk__$1,map__23061,map__23061__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116),true], null));

var temp__4425__auto__ = cljs.core.deref.call(null,self__.curr_xhr_);
if(cljs.core.truth_(temp__4425__auto__)){
var x = temp__4425__auto__;
return x.abort();
} else {
return null;
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064),true], null));

var temp__4425__auto__ = cljs.core.deref.call(null,self__.curr_xhr_);
if(cljs.core.truth_(temp__4425__auto__)){
var x = temp__4425__auto__;
return x.abort();
} else {
return null;
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_init_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
((function (chsk__$1){
return (function taoensso$sente$async_poll_for_update_BANG_(nattempt){
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/alexandergunnarson/Development/Source Code Projects/byu/CS 360/Project0/a6c4897b5f1efd4f6c99900178172208f24f6d28-init.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
});})(chsk__$1))
,null)),null);

if(cljs.core.truth_(new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return null;
} else {
var retry_BANG_ = ((function (chsk__$1){
return (function (){
var nattempt_STAR_ = (nattempt + (1));
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/alexandergunnarson/Development/Source Code Projects/byu/CS 360/Project0/a6c4897b5f1efd4f6c99900178172208f24f6d28-init.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (nattempt_STAR_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect (%s).",nattempt_STAR_], null);
});})(nattempt_STAR_,chsk__$1))
,null)),null);

return taoensso.sente.set_exp_backoff_timeout_BANG_.call(null,cljs.core.partial.call(null,taoensso$sente$async_poll_for_update_BANG_,nattempt_STAR_),nattempt_STAR_,self__.backoff_ms_fn);
});})(chsk__$1))
;
return cljs.core.reset_BANG_.call(null,self__.curr_xhr_,taoensso.encore.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"_","_",1453416199),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handshake?","handshake?",-423743093),true], null)))], null)),((function (retry_BANG_,chsk__$1){
return (function taoensso$sente$async_poll_for_update_BANG__$_ajax_cb(p__23077){
var map__23081 = p__23077;
var map__23081__$1 = ((((!((map__23081 == null)))?((((map__23081.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23081.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23081):map__23081);
var _QMARK_error = cljs.core.get.call(null,map__23081__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__23081__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return taoensso$sente$async_poll_for_update_BANG_.call(null,(0));
} else {
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return retry_BANG_.call(null);

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__23083 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__23083,(0),null);
var _ = cljs.core.nth.call(null,vec__23083,(1),null);
var or__17525__auto___23085 = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,self__.chs,clj);
if(cljs.core.truth_(or__17525__auto___23085)){
} else {
var buffered_evs_23086 = clj;
taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs_23086);

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));
}

return taoensso$sente$async_poll_for_update_BANG_.call(null,(0));
}
});})(retry_BANG_,chsk__$1))
));
}
});})(chsk__$1))
.call(null,(0));

return chsk__$1;
});

taoensso.sente.ChAjaxSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"timeout-ms","timeout-ms",-1900214363,null),new cljs.core.Symbol(null,"ajax-opts","ajax-opts",1122292418,null),new cljs.core.Symbol(null,"curr-xhr_","curr-xhr_",321757831,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null)], null);
});

taoensso.sente.ChAjaxSocket.cljs$lang$type = true;

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__18173__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__18173__auto__,writer__18174__auto__){
return cljs.core._write.call(null,writer__18174__auto__,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,url,params,chs,timeout_ms,ajax_opts,curr_xhr_,state_,packer,backoff_ms_fn){
return (new taoensso.sente.ChAjaxSocket(client_id,url,params,chs,timeout_ms,ajax_opts,curr_xhr_,state_,packer,backoff_ms_fn,null,null,null));
});

taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__23055){
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__23055),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__23055),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__23055),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__23055),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(G__23055),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__23055),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__23055),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__23055),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__23055),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__23055),null,cljs.core.dissoc.call(null,G__23055,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955)),null));
});

taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,chsk_host,chsk_path,type){
var protocol__$1 = (function (){var G__23088 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23088) {
case "ajax":
return protocol;

break;
case "ws":
if(cljs.core._EQ_.call(null,protocol,"https:")){
return "wss:";
} else {
return "ws:";
}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
return [cljs.core.str(protocol__$1),cljs.core.str("//"),cljs.core.str(taoensso.encore.path.call(null,chsk_host,chsk_path))].join('');
});
/**
 * Returns a map with keys:
 *  :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
 *           ; May `put!` (inject) arbitrary `event`s to this channel.
 *  :send-fn ; (fn [event & [?timeout-ms ?cb-fn]]) for client>server send.
 *  :state   ; Watchable, read-only (atom {:type _ :open? _ :uid _ :csrf-token _}).
 *  :chsk    ; IChSocket implementer. You can usu. ignore this.
 * 
 *   Common options:
 *  :type           ; e/o #{:auto :ws :ajax}. You'll usually want the default (:auto)
 *  :host           ; Server host (defaults to current page's host)
 *  :params         ; Map of any params to incl. in chsk Ring requests (handy for
 *                  ; application-level auth, etc.)
 *  :ws-kalive-ms   ; Ping to keep a WebSocket conn alive if no activity w/in given
 *                  ; number of milliseconds
 *  :lp-timeout-ms  ; Ping to keep a long-polling (Ajax) conn alive '' [1]
 *  :packer         ; :edn (default), or an IPacker implementation (experimental)
 *  :ajax-opts      ; Base opts map provided to `taoensso.encore/ajax-lite`
 *  :wrap-recv-evs? ; Should events from server be wrapped in [:chsk/recv _]?
 * 
 *   [1] If you're using Immutant and override the default :lp-timeout-ms, you'll
 *    need to provide the same timeout value to
 *    `taoensso.sente.server-adapters.immutant/make-immutant-adapter` and use
 *    the result of that function as the web server adapter to your server-side
 *    `make-channel-socket!`.
 */
taoensso.sente.make_channel_socket_BANG_ = (function taoensso$sente$make_channel_socket_BANG_(var_args){
var args__18590__auto__ = [];
var len__18583__auto___23104 = arguments.length;
var i__18584__auto___23105 = (0);
while(true){
if((i__18584__auto___23105 < len__18583__auto___23104)){
args__18590__auto__.push((arguments[i__18584__auto___23105]));

var G__23106 = (i__18584__auto___23105 + (1));
i__18584__auto___23105 = G__23106;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((1) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((1)),(0))):null);
return taoensso.sente.make_channel_socket_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18591__auto__);
});

taoensso.sente.make_channel_socket_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__23093){
var vec__23094 = p__23093;
var map__23095 = cljs.core.nth.call(null,vec__23094,(0),null);
var map__23095__$1 = ((((!((map__23095 == null)))?((((map__23095.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23095.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23095):map__23095);
var opts = map__23095__$1;
var ajax_opts = cljs.core.get.call(null,map__23095__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var ws_kalive_ms = cljs.core.get.call(null,map__23095__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),(25000));
var lp_timeout_ms = cljs.core.get.call(null,map__23095__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),(25000));
var client_id = cljs.core.get.call(null,map__23095__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__17525__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return taoensso.encore.uuid_str.call(null);
}
})());
var packer = cljs.core.get.call(null,map__23095__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var params = cljs.core.get.call(null,map__23095__$1,new cljs.core.Keyword(null,"params","params",710516235));
var type = cljs.core.get.call(null,map__23095__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var host = cljs.core.get.call(null,map__23095__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var recv_buf_or_n = cljs.core.get.call(null,map__23095__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(2048)));
var backoff_ms_fn = cljs.core.get.call(null,map__23095__$1,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.call(null,map__23095__$1,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),true);
var _deprecated_more_opts = cljs.core.nth.call(null,vec__23094,(1),null);
if(cljs.core.truth_((function (){var __x = type;
try{if(cljs.core.truth_(taoensso.encore._invar_pred.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)], null)).call(null,__x))){
return true;
} else {
return taoensso.encore._invar_violation_BANG_.call(null);
}
}catch (e23097){if((e23097 instanceof Error)){
var __t = e23097;
return taoensso.encore._invar_violation_BANG_.call(null,true,"taoensso.sente",1029,"([:in #{:ws :ajax :auto}] type)",__x,__t,null);
} else {
throw e23097;

}
}})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)], null),new cljs.core.Symbol(null,"type","type",-1480165421,null))))].join('')));
}

if(cljs.core.truth_((function (){var __x = client_id;
try{if(cljs.core.truth_(taoensso.encore.nblank_str_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.encore._invar_violation_BANG_.call(null);
}
}catch (e23103){if((e23103 instanceof Error)){
var __t = e23103;
return taoensso.encore._invar_violation_BANG_.call(null,true,"taoensso.sente",1030,"(enc/nblank-str? client-id)",__x,__t,null);
} else {
throw e23103;

}
}})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol("enc","nblank-str?","enc/nblank-str?",19952870,null),new cljs.core.Symbol(null,"client-id","client-id",1175909387,null))))].join('')));
}

if(!((_deprecated_more_opts == null))){
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/alexandergunnarson/Development/Source Code Projects/byu/CS 360/Project0/a6c4897b5f1efd4f6c99900178172208f24f6d28-init.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (vec__23094,map__23095,map__23095__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket!` fn signature CHANGED with Sente v0.10.0."], null);
});})(vec__23094,map__23095,map__23095__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null);
} else {
}

if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/alexandergunnarson/Development/Source Code Projects/byu/CS 360/Project0/a6c4897b5f1efd4f6c99900178172208f24f6d28-init.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (vec__23094,map__23095,map__23095__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
});})(vec__23094,map__23095,map__23095__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null);
} else {
}

var packer__$1 = taoensso.sente.interfaces.coerce_packer.call(null,packer);
var win_location = taoensso.encore.get_window_location.call(null);
var win_protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(win_location);
var host__$1 = (function (){var or__17525__auto__ = host;
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(win_location);
}
})();
var path__$1 = (function (){var or__17525__auto__ = path;
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return new cljs.core.Keyword(null,"pathname","pathname",-1420497528).cljs$core$IFn$_invoke$arity$1(win_location);
}
})();
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),cljs.core.async.chan.call(null,recv_buf_or_n)], null);
var ever_opened_QMARK__ = cljs.core.atom.call(null,false);
var state_STAR_ = ((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,vec__23094,map__23095,map__23095__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (state){
if(cljs.core.truth_((function (){var or__17525__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state));
if(or__17525__auto__){
return or__17525__auto__;
} else {
return cljs.core.deref.call(null,ever_opened_QMARK__);
}
})())){
return state;
} else {
cljs.core.reset_BANG_.call(null,ever_opened_QMARK__,true);

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),true);
}
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,vec__23094,map__23095,map__23095__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
;
var public_ch_recv = cljs.core.async.merge.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs),cljs.core.async.map_LT_.call(null,((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__23094,map__23095,map__23095__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),state_STAR_.call(null,state)], null);
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__23094,map__23095,map__23095__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(private_chs)),(function (){var _LT_server_ch = new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(private_chs);
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.map_LT_.call(null,((function (_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__23094,map__23095,map__23095__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
});})(_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__23094,map__23095,map__23095__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,_LT_server_ch);
} else {
return cljs.core.async.map_LT_.call(null,((function (_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__23094,map__23095,map__23095__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
var vec__23098 = ev;
var id = cljs.core.nth.call(null,vec__23098,(0),null);
var _QMARK_data = cljs.core.nth.call(null,vec__23098,(1),null);
var __x_23107 = (function (){try{return cljs.core.namespace.call(null,id);
}catch (e23099){if((e23099 instanceof Error)){
var __t = e23099;
return taoensso.encore._invar_violation_BANG_.call(null,true,"taoensso.sente",1069,"((fn* [p1__23090#] (not= p1__23090# \"chsk\")) (namespace id))",taoensso.encore._invar_undefined_val,__t,null);
} else {
throw e23099;

}
}})();
try{if(((function (__x_23107,vec__23098,id,_QMARK_data,_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__23094,map__23095,map__23095__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (p1__23090_SHARP_){
return cljs.core.not_EQ_.call(null,p1__23090_SHARP_,"chsk");
});})(__x_23107,vec__23098,id,_QMARK_data,_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__23094,map__23095,map__23095__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
.call(null,__x_23107)){
} else {
taoensso.encore._invar_violation_BANG_.call(null);
}
}catch (e23100){if((e23100 instanceof Error)){
var __t_23108 = e23100;
taoensso.encore._invar_violation_BANG_.call(null,true,"taoensso.sente",1069,"((fn* [p1__23090#] (not= p1__23090# \"chsk\")) (namespace id))",__x_23107,__t_23108,null);
} else {
throw e23100;

}
}
return ev;
});})(_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__23094,map__23095,map__23095__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,_LT_server_ch);
}
})()], null));
var chsk = (function (){var or__17525__auto__ = (function (){var and__17513__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ajax","ajax",814345549));
if(and__17513__auto__){
return taoensso.sente.chsk_init_BANG_.call(null,taoensso.sente.map__GT_ChWebSocket.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"state_","state_",957667102)],[client_id,ws_kalive_ms,cljs.core.atom.call(null,(0)),packer__$1,private_chs,params,backoff_ms_fn,cljs.core.atom.call(null,null),(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return f.call(null,path__$1,win_location,new cljs.core.Keyword(null,"ws","ws",86841443));
} else {
return taoensso.sente.get_chsk_url.call(null,win_protocol,host__$1,path__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
}
})(),cljs.core.atom.call(null,true),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.call(null,null),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064),false], null))])));
} else {
return and__17513__auto__;
}
})();
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
var and__17513__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ws","ws",86841443));
if(and__17513__auto__){
return taoensso.sente.chsk_init_BANG_.call(null,taoensso.sente.map__GT_ChAjaxSocket.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"state_","state_",957667102)],[cljs.core.atom.call(null,null),client_id,packer__$1,private_chs,params,backoff_ms_fn,(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return f.call(null,path__$1,win_location,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
return taoensso.sente.get_chsk_url.call(null,win_protocol,host__$1,path__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
}
})(),ajax_opts,lp_timeout_ms,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064),false], null))])));
} else {
return and__17513__auto__;
}
}
})();
var _ = (cljs.core.truth_(chsk)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Failed to create channel socket"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"chsk","chsk",776828446,null)))].join('')))})());
var send_fn = cljs.core.partial.call(null,taoensso.sente.chsk_send_BANG_,chsk);
var public_ch_recv__$1 = cljs.core.async.map_LT_.call(null,((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__23094,map__23095,map__23095__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function taoensso$sente$ev__GT_ev_msg(ev){
var vec__23102 = taoensso.sente.as_event.call(null,ev);
var ev_id = cljs.core.nth.call(null,vec__23102,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__23102,(1),null);
var ev__$1 = vec__23102;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__23094,map__23095,map__23095__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,public_ch_recv);
if(cljs.core.truth_(chsk)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return null;
}
});

taoensso.sente.make_channel_socket_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_BANG_.cljs$lang$applyTo = (function (seq23091){
var G__23092 = cljs.core.first.call(null,seq23091);
var seq23091__$1 = cljs.core.next.call(null,seq23091);
return taoensso.sente.make_channel_socket_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23092,seq23091__$1);
});
/**
 * Creates a go-loop to call `(event-msg-handler <event-msg>)` and returns a
 *   `(fn stop! [])`. Catches & logs errors. Advanced users may choose to instead
 *   write their own loop against `ch-recv`.
 */
taoensso.sente.start_chsk_router_BANG_ = (function taoensso$sente$start_chsk_router_BANG_(var_args){
var args__18590__auto__ = [];
var len__18583__auto___23291 = arguments.length;
var i__18584__auto___23292 = (0);
while(true){
if((i__18584__auto___23292 < len__18583__auto___23291)){
args__18590__auto__.push((arguments[i__18584__auto___23292]));

var G__23293 = (i__18584__auto___23292 + (1));
i__18584__auto___23292 = G__23293;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((2) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((2)),(0))):null);
return taoensso.sente.start_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18591__auto__);
});

taoensso.sente.start_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__23112){
var vec__23113 = p__23112;
var map__23114 = cljs.core.nth.call(null,vec__23113,(0),null);
var map__23114__$1 = ((((!((map__23114 == null)))?((((map__23114.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23114.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23114):map__23114);
var opts = map__23114__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__23114__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__23114__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var ch_ctrl = cljs.core.async.chan.call(null);
var c__22863__auto___23294 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22863__auto___23294,ch_ctrl,vec__23113,map__23114,map__23114__$1,opts,trace_evs_QMARK_,error_handler){
return (function (){
var f__22864__auto__ = (function (){var switch__22842__auto__ = ((function (c__22863__auto___23294,ch_ctrl,vec__23113,map__23114,map__23114__$1,opts,trace_evs_QMARK_,error_handler){
return (function (state_23227){
var state_val_23228 = (state_23227[(1)]);
if((state_val_23228 === (7))){
var inst_23223 = (state_23227[(2)]);
var state_23227__$1 = state_23227;
var statearr_23229_23295 = state_23227__$1;
(statearr_23229_23295[(2)] = inst_23223);

(statearr_23229_23295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (20))){
var inst_23124 = (state_23227[(7)]);
var inst_23125 = (state_23227[(8)]);
var inst_23150 = (state_23227[(9)]);
var inst_23123 = (state_23227[(10)]);
var inst_23122 = (state_23227[(11)]);
var inst_23149 = (state_23227[(12)]);
var inst_23160 = (function (){var vec__23117 = inst_23122;
var v = inst_23123;
var p = inst_23124;
var stop_QMARK_ = inst_23125;
var map__23128 = inst_23149;
var event_msg = inst_23149;
var event = inst_23150;
return ((function (vec__23117,v,p,stop_QMARK_,map__23128,event_msg,event,inst_23124,inst_23125,inst_23150,inst_23123,inst_23122,inst_23149,state_val_23228,c__22863__auto___23294,ch_ctrl,vec__23113,map__23114,map__23114__$1,opts,trace_evs_QMARK_,error_handler){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
});
;})(vec__23117,v,p,stop_QMARK_,map__23128,event_msg,event,inst_23124,inst_23125,inst_23150,inst_23123,inst_23122,inst_23149,state_val_23228,c__22863__auto___23294,ch_ctrl,vec__23113,map__23114,map__23114__$1,opts,trace_evs_QMARK_,error_handler))
})();
var inst_23161 = (new cljs.core.Delay(inst_23160,null));
var inst_23162 = taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/alexandergunnarson/Development/Source Code Projects/byu/CS 360/Project0/a6c4897b5f1efd4f6c99900178172208f24f6d28-init.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),inst_23161,null);
var state_23227__$1 = state_23227;
var statearr_23230_23296 = state_23227__$1;
(statearr_23230_23296[(2)] = inst_23162);

(statearr_23230_23296[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (27))){
var inst_23175 = taoensso.encore._invar_violation_BANG_.call(null);
var state_23227__$1 = state_23227;
var statearr_23231_23297 = state_23227__$1;
(statearr_23231_23297[(2)] = inst_23175);

(statearr_23231_23297[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (1))){
var state_23227__$1 = state_23227;
var statearr_23232_23298 = state_23227__$1;
(statearr_23232_23298[(2)] = null);

(statearr_23232_23298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (24))){
var inst_23149 = (state_23227[(12)]);
var inst_23166 = (state_23227[(2)]);
var inst_23167 = "(event-msg? event-msg)";
var inst_23168 = taoensso.encore._invar_violation_BANG_.call(null,false,"taoensso.sente",1154,inst_23167,inst_23149,inst_23166,null);
var state_23227__$1 = state_23227;
var statearr_23233_23299 = state_23227__$1;
(statearr_23233_23299[(2)] = inst_23168);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23227__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (39))){
var state_23227__$1 = state_23227;
var statearr_23234_23300 = state_23227__$1;
(statearr_23234_23300[(2)] = null);

(statearr_23234_23300[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (4))){
var inst_23124 = (state_23227[(7)]);
var inst_23125 = (state_23227[(8)]);
var inst_23122 = (state_23227[(11)]);
var inst_23122__$1 = (state_23227[(2)]);
var inst_23123 = cljs.core.nth.call(null,inst_23122__$1,(0),null);
var inst_23124__$1 = cljs.core.nth.call(null,inst_23122__$1,(1),null);
var inst_23125__$1 = taoensso.encore.kw_identical_QMARK_.call(null,inst_23124__$1,ch_ctrl);
var state_23227__$1 = (function (){var statearr_23235 = state_23227;
(statearr_23235[(7)] = inst_23124__$1);

(statearr_23235[(8)] = inst_23125__$1);

(statearr_23235[(10)] = inst_23123);

(statearr_23235[(11)] = inst_23122__$1);

return statearr_23235;
})();
if(cljs.core.truth_(inst_23125__$1)){
var statearr_23236_23301 = state_23227__$1;
(statearr_23236_23301[(1)] = (5));

} else {
var statearr_23237_23302 = state_23227__$1;
(statearr_23237_23302[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (15))){
var inst_23123 = (state_23227[(10)]);
var state_23227__$1 = state_23227;
var statearr_23238_23303 = state_23227__$1;
(statearr_23238_23303[(2)] = inst_23123);

(statearr_23238_23303[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (21))){
var state_23227__$1 = state_23227;
var statearr_23239_23304 = state_23227__$1;
(statearr_23239_23304[(2)] = null);

(statearr_23239_23304[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (31))){
var inst_23220 = (state_23227[(2)]);
var state_23227__$1 = (function (){var statearr_23240 = state_23227;
(statearr_23240[(13)] = inst_23220);

return statearr_23240;
})();
var statearr_23241_23305 = state_23227__$1;
(statearr_23241_23305[(2)] = null);

(statearr_23241_23305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (32))){
var inst_23210 = (state_23227[(14)]);
var inst_23208 = (state_23227[(15)]);
var inst_23208__$1 = (state_23227[(2)]);
var inst_23209 = cljs.core.nth.call(null,inst_23208__$1,(0),null);
var inst_23210__$1 = cljs.core.nth.call(null,inst_23208__$1,(1),null);
var state_23227__$1 = (function (){var statearr_23242 = state_23227;
(statearr_23242[(14)] = inst_23210__$1);

(statearr_23242[(15)] = inst_23208__$1);

(statearr_23242[(16)] = inst_23209);

return statearr_23242;
})();
if(cljs.core.truth_(inst_23210__$1)){
var statearr_23243_23306 = state_23227__$1;
(statearr_23243_23306[(1)] = (38));

} else {
var statearr_23244_23307 = state_23227__$1;
(statearr_23244_23307[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (40))){
var inst_23217 = (state_23227[(2)]);
var state_23227__$1 = state_23227;
var statearr_23245_23308 = state_23227__$1;
(statearr_23245_23308[(2)] = inst_23217);

(statearr_23245_23308[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (33))){
var inst_23189 = (state_23227[(2)]);
var inst_23190 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23191 = [null,inst_23189];
var inst_23192 = (new cljs.core.PersistentVector(null,2,(5),inst_23190,inst_23191,null));
var state_23227__$1 = state_23227;
var statearr_23246_23309 = state_23227__$1;
(statearr_23246_23309[(2)] = inst_23192);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23227__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (13))){
var inst_23141 = (state_23227[(2)]);
var state_23227__$1 = state_23227;
var statearr_23247_23310 = state_23227__$1;
(statearr_23247_23310[(2)] = inst_23141);

(statearr_23247_23310[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (22))){
var inst_23165 = (state_23227[(2)]);
var state_23227__$1 = (function (){var statearr_23248 = state_23227;
(statearr_23248[(17)] = inst_23165);

return statearr_23248;
})();
var statearr_23249_23311 = state_23227__$1;
(statearr_23249_23311[(2)] = null);

(statearr_23249_23311[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (36))){
var inst_23124 = (state_23227[(7)]);
var inst_23125 = (state_23227[(8)]);
var inst_23150 = (state_23227[(9)]);
var inst_23123 = (state_23227[(10)]);
var inst_23186 = (state_23227[(18)]);
var inst_23122 = (state_23227[(11)]);
var inst_23185 = (state_23227[(19)]);
var inst_23184 = (state_23227[(20)]);
var inst_23149 = (state_23227[(12)]);
var inst_23200 = (function (){var vec__23129 = inst_23184;
var p = inst_23124;
var _QMARK_error = inst_23186;
var temp__4425__auto__ = inst_23186;
var v = inst_23123;
var temp__4423__auto__ = error_handler;
var _ = inst_23185;
var vec__23117 = inst_23122;
var event_msg = inst_23149;
var e = inst_23186;
var map__23128 = inst_23149;
var event = inst_23150;
var stop_QMARK_ = inst_23125;
return ((function (vec__23129,p,_QMARK_error,temp__4425__auto__,v,temp__4423__auto__,_,vec__23117,event_msg,e,map__23128,event,stop_QMARK_,inst_23124,inst_23125,inst_23150,inst_23123,inst_23186,inst_23122,inst_23185,inst_23184,inst_23149,state_val_23228,c__22863__auto___23294,ch_ctrl,vec__23113,map__23114,map__23114__$1,opts,trace_evs_QMARK_,error_handler){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk router `event-msg-handler` error: %s",event], null);
});
;})(vec__23129,p,_QMARK_error,temp__4425__auto__,v,temp__4423__auto__,_,vec__23117,event_msg,e,map__23128,event,stop_QMARK_,inst_23124,inst_23125,inst_23150,inst_23123,inst_23186,inst_23122,inst_23185,inst_23184,inst_23149,state_val_23228,c__22863__auto___23294,ch_ctrl,vec__23113,map__23114,map__23114__$1,opts,trace_evs_QMARK_,error_handler))
})();
var inst_23201 = (new cljs.core.Delay(inst_23200,null));
var inst_23202 = taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/Users/alexandergunnarson/Development/Source Code Projects/byu/CS 360/Project0/a6c4897b5f1efd4f6c99900178172208f24f6d28-init.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),inst_23201,null);
var state_23227__$1 = state_23227;
var statearr_23250_23312 = state_23227__$1;
(statearr_23250_23312[(2)] = inst_23202);

(statearr_23250_23312[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (29))){
var state_23227__$1 = state_23227;
var statearr_23251_23313 = state_23227__$1;
(statearr_23251_23313[(2)] = null);

(statearr_23251_23313[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (6))){
var inst_23123 = (state_23227[(10)]);
var inst_23131 = (inst_23123 == null);
var inst_23132 = cljs.core.not.call(null,inst_23131);
var state_23227__$1 = state_23227;
if(inst_23132){
var statearr_23252_23314 = state_23227__$1;
(statearr_23252_23314[(1)] = (8));

} else {
var statearr_23253_23315 = state_23227__$1;
(statearr_23253_23315[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (28))){
var inst_23177 = (state_23227[(2)]);
var state_23227__$1 = state_23227;
var statearr_23254_23316 = state_23227__$1;
(statearr_23254_23316[(2)] = inst_23177);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23227__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (25))){
var inst_23149 = (state_23227[(12)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23227,(24),Error,null,(23));
var inst_23172 = taoensso.sente.event_msg_QMARK_.call(null,inst_23149);
var state_23227__$1 = state_23227;
if(cljs.core.truth_(inst_23172)){
var statearr_23255_23317 = state_23227__$1;
(statearr_23255_23317[(1)] = (26));

} else {
var statearr_23256_23318 = state_23227__$1;
(statearr_23256_23318[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (34))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23227,(33),Error,null,(32));
var inst_23196 = cljs.core.PersistentVector.EMPTY_NODE;
var state_23227__$1 = (function (){var statearr_23257 = state_23227;
(statearr_23257[(21)] = inst_23196);

return statearr_23257;
})();
if(cljs.core.truth_(error_handler)){
var statearr_23258_23319 = state_23227__$1;
(statearr_23258_23319[(1)] = (35));

} else {
var statearr_23259_23320 = state_23227__$1;
(statearr_23259_23320[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (17))){
var inst_23186 = (state_23227[(18)]);
var inst_23184 = (state_23227[(20)]);
var inst_23184__$1 = (state_23227[(2)]);
var inst_23185 = cljs.core.nth.call(null,inst_23184__$1,(0),null);
var inst_23186__$1 = cljs.core.nth.call(null,inst_23184__$1,(1),null);
var state_23227__$1 = (function (){var statearr_23260 = state_23227;
(statearr_23260[(18)] = inst_23186__$1);

(statearr_23260[(19)] = inst_23185);

(statearr_23260[(20)] = inst_23184__$1);

return statearr_23260;
})();
if(cljs.core.truth_(inst_23186__$1)){
var statearr_23261_23321 = state_23227__$1;
(statearr_23261_23321[(1)] = (29));

} else {
var statearr_23262_23322 = state_23227__$1;
(statearr_23262_23322[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (3))){
var inst_23225 = (state_23227[(2)]);
var state_23227__$1 = state_23227;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23227__$1,inst_23225);
} else {
if((state_val_23228 === (12))){
var state_23227__$1 = state_23227;
var statearr_23263_23323 = state_23227__$1;
(statearr_23263_23323[(2)] = false);

(statearr_23263_23323[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (2))){
var inst_23118 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23119 = [ch_recv,ch_ctrl];
var inst_23120 = (new cljs.core.PersistentVector(null,2,(5),inst_23118,inst_23119,null));
var state_23227__$1 = state_23227;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23227__$1,(4),inst_23120);
} else {
if((state_val_23228 === (23))){
var inst_23158 = (state_23227[(22)]);
var inst_23179 = (state_23227[(2)]);
var inst_23180 = event_msg_handler.call(null,inst_23179);
var inst_23181 = [inst_23180,null];
var inst_23182 = (new cljs.core.PersistentVector(null,2,(5),inst_23158,inst_23181,null));
var state_23227__$1 = state_23227;
var statearr_23264_23324 = state_23227__$1;
(statearr_23264_23324[(2)] = inst_23182);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23227__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (35))){
var inst_23186 = (state_23227[(18)]);
var inst_23149 = (state_23227[(12)]);
var inst_23198 = error_handler.call(null,inst_23186,inst_23149);
var state_23227__$1 = state_23227;
var statearr_23265_23325 = state_23227__$1;
(statearr_23265_23325[(2)] = inst_23198);

(statearr_23265_23325[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (19))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23227,(18),Error,null,(17));
var inst_23158 = cljs.core.PersistentVector.EMPTY_NODE;
var state_23227__$1 = (function (){var statearr_23266 = state_23227;
(statearr_23266[(22)] = inst_23158);

return statearr_23266;
})();
if(cljs.core.truth_(trace_evs_QMARK_)){
var statearr_23267_23326 = state_23227__$1;
(statearr_23267_23326[(1)] = (20));

} else {
var statearr_23268_23327 = state_23227__$1;
(statearr_23268_23327[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (11))){
var state_23227__$1 = state_23227;
var statearr_23269_23328 = state_23227__$1;
(statearr_23269_23328[(2)] = true);

(statearr_23269_23328[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (9))){
var state_23227__$1 = state_23227;
var statearr_23270_23329 = state_23227__$1;
(statearr_23270_23329[(2)] = false);

(statearr_23270_23329[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (5))){
var state_23227__$1 = state_23227;
var statearr_23271_23330 = state_23227__$1;
(statearr_23271_23330[(2)] = null);

(statearr_23271_23330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (14))){
var inst_23123 = (state_23227[(10)]);
var inst_23146 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23123);
var state_23227__$1 = state_23227;
var statearr_23272_23331 = state_23227__$1;
(statearr_23272_23331[(2)] = inst_23146);

(statearr_23272_23331[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (26))){
var inst_23149 = (state_23227[(12)]);
var state_23227__$1 = state_23227;
var statearr_23273_23332 = state_23227__$1;
(statearr_23273_23332[(2)] = inst_23149);

(statearr_23273_23332[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (16))){
var inst_23149 = (state_23227[(12)]);
var inst_23149__$1 = (state_23227[(2)]);
var inst_23150 = cljs.core.get.call(null,inst_23149__$1,new cljs.core.Keyword(null,"event","event",301435442));
var state_23227__$1 = (function (){var statearr_23274 = state_23227;
(statearr_23274[(9)] = inst_23150);

(statearr_23274[(12)] = inst_23149__$1);

return statearr_23274;
})();
var statearr_23275_23333 = state_23227__$1;
(statearr_23275_23333[(2)] = null);

(statearr_23275_23333[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (38))){
var inst_23124 = (state_23227[(7)]);
var inst_23125 = (state_23227[(8)]);
var inst_23210 = (state_23227[(14)]);
var inst_23208 = (state_23227[(15)]);
var inst_23150 = (state_23227[(9)]);
var inst_23123 = (state_23227[(10)]);
var inst_23186 = (state_23227[(18)]);
var inst_23122 = (state_23227[(11)]);
var inst_23209 = (state_23227[(16)]);
var inst_23184 = (state_23227[(20)]);
var inst_23149 = (state_23227[(12)]);
var inst_23212 = (function (){var vec__23188 = inst_23208;
var vec__23129 = inst_23184;
var p = inst_23124;
var _QMARK_error = inst_23186;
var temp__4425__auto__ = inst_23210;
var v = inst_23123;
var _ = inst_23209;
var e2 = inst_23210;
var vec__23117 = inst_23122;
var _QMARK_error2 = inst_23210;
var event_msg = inst_23149;
var e = inst_23186;
var map__23128 = inst_23149;
var event = inst_23150;
var stop_QMARK_ = inst_23125;
return ((function (vec__23188,vec__23129,p,_QMARK_error,temp__4425__auto__,v,_,e2,vec__23117,_QMARK_error2,event_msg,e,map__23128,event,stop_QMARK_,inst_23124,inst_23125,inst_23210,inst_23208,inst_23150,inst_23123,inst_23186,inst_23122,inst_23209,inst_23184,inst_23149,state_val_23228,c__22863__auto___23294,ch_ctrl,vec__23113,map__23114,map__23114__$1,opts,trace_evs_QMARK_,error_handler){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
});
;})(vec__23188,vec__23129,p,_QMARK_error,temp__4425__auto__,v,_,e2,vec__23117,_QMARK_error2,event_msg,e,map__23128,event,stop_QMARK_,inst_23124,inst_23125,inst_23210,inst_23208,inst_23150,inst_23123,inst_23186,inst_23122,inst_23209,inst_23184,inst_23149,state_val_23228,c__22863__auto___23294,ch_ctrl,vec__23113,map__23114,map__23114__$1,opts,trace_evs_QMARK_,error_handler))
})();
var inst_23213 = (new cljs.core.Delay(inst_23212,null));
var inst_23214 = taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/Users/alexandergunnarson/Development/Source Code Projects/byu/CS 360/Project0/a6c4897b5f1efd4f6c99900178172208f24f6d28-init.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),inst_23213,null);
var state_23227__$1 = state_23227;
var statearr_23276_23334 = state_23227__$1;
(statearr_23276_23334[(2)] = inst_23214);

(statearr_23276_23334[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (30))){
var state_23227__$1 = state_23227;
var statearr_23277_23335 = state_23227__$1;
(statearr_23277_23335[(2)] = null);

(statearr_23277_23335[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (10))){
var inst_23144 = (state_23227[(2)]);
var state_23227__$1 = state_23227;
if(cljs.core.truth_(inst_23144)){
var statearr_23278_23336 = state_23227__$1;
(statearr_23278_23336[(1)] = (14));

} else {
var statearr_23279_23337 = state_23227__$1;
(statearr_23279_23337[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (18))){
var inst_23151 = (state_23227[(2)]);
var inst_23152 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23153 = [null,inst_23151];
var inst_23154 = (new cljs.core.PersistentVector(null,2,(5),inst_23152,inst_23153,null));
var state_23227__$1 = state_23227;
var statearr_23280_23338 = state_23227__$1;
(statearr_23280_23338[(2)] = inst_23154);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23227__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (37))){
var inst_23196 = (state_23227[(21)]);
var inst_23204 = (state_23227[(2)]);
var inst_23205 = [inst_23204,null];
var inst_23206 = (new cljs.core.PersistentVector(null,2,(5),inst_23196,inst_23205,null));
var state_23227__$1 = state_23227;
var statearr_23281_23339 = state_23227__$1;
(statearr_23281_23339[(2)] = inst_23206);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23227__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (8))){
var inst_23123 = (state_23227[(10)]);
var inst_23134 = inst_23123.cljs$lang$protocol_mask$partition0$;
var inst_23135 = (inst_23134 & (64));
var inst_23136 = inst_23123.cljs$core$ISeq$;
var inst_23137 = (inst_23135) || (inst_23136);
var state_23227__$1 = state_23227;
if(cljs.core.truth_(inst_23137)){
var statearr_23282_23340 = state_23227__$1;
(statearr_23282_23340[(1)] = (11));

} else {
var statearr_23283_23341 = state_23227__$1;
(statearr_23283_23341[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22863__auto___23294,ch_ctrl,vec__23113,map__23114,map__23114__$1,opts,trace_evs_QMARK_,error_handler))
;
return ((function (switch__22842__auto__,c__22863__auto___23294,ch_ctrl,vec__23113,map__23114,map__23114__$1,opts,trace_evs_QMARK_,error_handler){
return (function() {
var taoensso$sente$state_machine__22843__auto__ = null;
var taoensso$sente$state_machine__22843__auto____0 = (function (){
var statearr_23287 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23287[(0)] = taoensso$sente$state_machine__22843__auto__);

(statearr_23287[(1)] = (1));

return statearr_23287;
});
var taoensso$sente$state_machine__22843__auto____1 = (function (state_23227){
while(true){
var ret_value__22844__auto__ = (function (){try{while(true){
var result__22845__auto__ = switch__22842__auto__.call(null,state_23227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22845__auto__;
}
break;
}
}catch (e23288){if((e23288 instanceof Object)){
var ex__22846__auto__ = e23288;
var statearr_23289_23342 = state_23227;
(statearr_23289_23342[(5)] = ex__22846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23343 = state_23227;
state_23227 = G__23343;
continue;
} else {
return ret_value__22844__auto__;
}
break;
}
});
taoensso$sente$state_machine__22843__auto__ = function(state_23227){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__22843__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__22843__auto____1.call(this,state_23227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__22843__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__22843__auto____0;
taoensso$sente$state_machine__22843__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__22843__auto____1;
return taoensso$sente$state_machine__22843__auto__;
})()
;})(switch__22842__auto__,c__22863__auto___23294,ch_ctrl,vec__23113,map__23114,map__23114__$1,opts,trace_evs_QMARK_,error_handler))
})();
var state__22865__auto__ = (function (){var statearr_23290 = f__22864__auto__.call(null);
(statearr_23290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22863__auto___23294);

return statearr_23290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22865__auto__);
});})(c__22863__auto___23294,ch_ctrl,vec__23113,map__23114,map__23114__$1,opts,trace_evs_QMARK_,error_handler))
);


return ((function (ch_ctrl,vec__23113,map__23114,map__23114__$1,opts,trace_evs_QMARK_,error_handler){
return (function taoensso$sente$stop_BANG_(){
return cljs.core.async.close_BANG_.call(null,ch_ctrl);
});
;})(ch_ctrl,vec__23113,map__23114,map__23114__$1,opts,trace_evs_QMARK_,error_handler))
});

taoensso.sente.start_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_chsk_router_BANG_.cljs$lang$applyTo = (function (seq23109){
var G__23110 = cljs.core.first.call(null,seq23109);
var seq23109__$1 = cljs.core.next.call(null,seq23109);
var G__23111 = cljs.core.first.call(null,seq23109__$1);
var seq23109__$2 = cljs.core.next.call(null,seq23109__$1);
return taoensso.sente.start_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23110,G__23111,seq23109__$2);
});
/**
 * DEPRECATED: Please use `start-chsk-router!` instead.
 */
taoensso.sente.start_chsk_router_loop_BANG_ = (function taoensso$sente$start_chsk_router_loop_BANG_(event_handler,ch_recv){
return taoensso.sente.start_chsk_router_BANG_.call(null,ch_recv,(function (ev_msg){
return event_handler.call(null,new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(ev_msg),new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861).cljs$core$IFn$_invoke$arity$1(ev_msg));
}));
});
/**
 * DEPRECATED. Please use `timbre/set-level!` instead.
 */
taoensso.sente.set_logging_level_BANG_ = (function taoensso$sente$set_logging_level_BANG_(level){
return taoensso.timbre.set_level_BANG_.call(null,level);
});
/**
 * DEPRECATED. Please use `taoensso.encore/ajax-lite` instead.
 */
taoensso.sente.ajax_call = taoensso.encore.ajax_lite;
/**
 * DEPRECATED.
 */
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__23344,websocket_QMARK_){
var map__23347 = p__23344;
var map__23347__$1 = ((((!((map__23347 == null)))?((((map__23347.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23347.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23347):map__23347);
var location = map__23347__$1;
var adjusted_protocol = cljs.core.get.call(null,map__23347__$1,new cljs.core.Keyword(null,"adjusted-protocol","adjusted-protocol",37431492));
var host = cljs.core.get.call(null,map__23347__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.call(null,map__23347__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
return [cljs.core.str(adjusted_protocol),cljs.core.str("//"),cljs.core.str(host),cljs.core.str((function (){var or__17525__auto__ = path;
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return pathname;
}
})())].join('');
});

//# sourceMappingURL=sente.js.map?rel=1452702620285