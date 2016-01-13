// Compiled by ClojureScript 1.7.170 {}

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns log fn logic err res async core-async]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn err logic vec err log cmacros]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn log err logic vec log core-async async tpred]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn log err logic vec log core-async async tpred]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn err logic vec err log cmacros]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn log err logic vec log core-async async tpred]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn log err logic vec log core-async async tpred]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn log err logic vec log core-async async tpred]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn log err logic vec log core-async async tpred]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn log err logic vec log core-async async tpred]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn log err logic vec log core-async async tpred]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn err logic vec err log cmacros]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn err logic vec err log cmacros]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn err logic vec err log cmacros]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn err logic vec err log cmacros]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn err logic vec err log cmacros]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn err logic vec err log cmacros]
*/

/* WARNING: Runtime eval with |mfn| via quantum.core.ns/ns-exclude
*/

/* WARNING: Runtime eval with |mfn| via import
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn err logic vec err log cmacros]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn err logic vec err log cmacros]
*/

/* WARNING: Runtime eval with |mfn| via quantum.core.ns/ns-exclude
*/

/* WARNING: Runtime eval with |mfn| via import
*/
goog.provide('quantum.net.websocket');
goog.require('cljs.core');
goog.require('quantum.core.core');
goog.require('quantum.core.resources');
goog.require('cljs.core.async');
goog.require('clojure.core.rrb_vector');
goog.require('quantum.core.logic');
goog.require('quantum.core.log');
goog.require('quantum.core.thread.async');
goog.require('cljs.core');
goog.require('taoensso.sente');
goog.require('quantum.core.function$');
goog.require('quantum.core.ns');
goog.require('quantum.core.error');
if(typeof quantum.net.websocket.event_msg_handler !== 'undefined'){
} else {
quantum.net.websocket.event_msg_handler = (function (){var method_table__18438__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18439__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18440__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18441__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18442__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"quantum.net.websocket","event-msg-handler"),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18442__auto__,method_table__18438__auto__,prefer_table__18439__auto__,method_cache__18440__auto__,cached_hierarchy__18441__auto__));
})();
}
quantum.net.websocket.send_msg_BANG_ = quantum.core.core.lens.call(null,quantum.core.resources.systems,(function (x__25385__auto__){
return new cljs.core.Keyword(null,"send-fn","send-fn",351002041).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"connection","connection",-123599300).cljs$core$IFn$_invoke$arity$1(quantum.core.core.deref_STAR_.call(null,new cljs.core.Keyword(null,"sys-map","sys-map",-1178077595).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("epimaxsa.match424.common.system","system","epimaxsa.match424.common.system/system",1363320437).cljs$core$IFn$_invoke$arity$1(x__25385__auto__)))));
}));
quantum.net.websocket.event_msg_handler_STAR_ = (function quantum$net$websocket$event_msg_handler_STAR_(p__28874){
var map__28877 = p__28874;
var map__28877__$1 = ((((!((map__28877 == null)))?((((map__28877.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28877.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28877):map__28877);
var ev_msg = map__28877__$1;
var id = cljs.core.get.call(null,map__28877__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var _QMARK_data = cljs.core.get.call(null,map__28877__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var event = cljs.core.get.call(null,map__28877__$1,new cljs.core.Keyword(null,"event","event",301435442));
return quantum.net.websocket.event_msg_handler.call(null,ev_msg);
});
quantum.net.websocket.put_BANG_;
cljs.core._add_method.call(null,quantum.net.websocket.event_msg_handler,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__28879){
var map__28880 = p__28879;
var map__28880__$1 = ((((!((map__28880 == null)))?((((map__28880.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28880.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28880):map__28880);
var ev_msg = map__28880__$1;
var event = cljs.core.get.call(null,map__28880__$1,new cljs.core.Keyword(null,"event","event",301435442));
return quantum.core.log.pr_STAR_.call(null,true,false,cljs.core.println,new cljs.core.Keyword(null,"debug","debug",-1608172596),(new cljs.core.Delay(((function (map__28880,map__28880__$1,ev_msg,event){
return (function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,event),"Unhandled event:");
});})(map__28880,map__28880__$1,ev_msg,event))
,null)),null);
}));
cljs.core._add_method.call(null,quantum.net.websocket.event_msg_handler,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),(function (p__28882){
var map__28883 = p__28882;
var map__28883__$1 = ((((!((map__28883 == null)))?((((map__28883.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28883.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28883):map__28883);
var ev_msg = map__28883__$1;
var _QMARK_data = cljs.core.get.call(null,map__28883__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
if(cljs.core._EQ_.call(null,_QMARK_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"first-open?","first-open?",396686530),true], null))){
return quantum.core.log.pr_STAR_.call(null,true,false,cljs.core.println,new cljs.core.Keyword(null,"debug","debug",-1608172596),(new cljs.core.Delay(((function (map__28883,map__28883__$1,ev_msg,_QMARK_data){
return (function (){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"Channel socket successfully established!");
});})(map__28883,map__28883__$1,ev_msg,_QMARK_data))
,null)),null);
} else {
return quantum.core.log.pr_STAR_.call(null,true,false,cljs.core.println,new cljs.core.Keyword(null,"debug","debug",-1608172596),(new cljs.core.Delay(((function (map__28883,map__28883__$1,ev_msg,_QMARK_data){
return (function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,_QMARK_data),"Channel socket state change:");
});})(map__28883,map__28883__$1,ev_msg,_QMARK_data))
,null)),null);
}
}));
cljs.core._add_method.call(null,quantum.net.websocket.event_msg_handler,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),(function (p__28885){
var map__28886 = p__28885;
var map__28886__$1 = ((((!((map__28886 == null)))?((((map__28886.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28886.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28886):map__28886);
var ev_msg = map__28886__$1;
var _QMARK_data = cljs.core.get.call(null,map__28886__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
return quantum.core.log.pr_STAR_.call(null,true,false,cljs.core.println,new cljs.core.Keyword(null,"debug","debug",-1608172596),(new cljs.core.Delay(((function (map__28886,map__28886__$1,ev_msg,_QMARK_data){
return (function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,_QMARK_data),"Push event from server:");
});})(map__28886,map__28886__$1,ev_msg,_QMARK_data))
,null)),null);
}));
cljs.core._add_method.call(null,quantum.net.websocket.event_msg_handler,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),(function (p__28888){
var map__28889 = p__28888;
var map__28889__$1 = ((((!((map__28889 == null)))?((((map__28889.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28889.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28889):map__28889);
var ev_msg = map__28889__$1;
var _QMARK_data = cljs.core.get.call(null,map__28889__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var vec__28891 = _QMARK_data;
var _QMARK_uid = cljs.core.nth.call(null,vec__28891,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__28891,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__28891,(2),null);
return quantum.core.log.pr_STAR_.call(null,true,false,cljs.core.println,new cljs.core.Keyword(null,"debug","debug",-1608172596),(new cljs.core.Delay(((function (vec__28891,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__28889,map__28889__$1,ev_msg,_QMARK_data){
return (function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,_QMARK_data),"Handshake:");
});})(vec__28891,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__28889,map__28889__$1,ev_msg,_QMARK_data))
,null)),null);
}));
/**
 * Sends a message @msg across via a WebSocket connection.
 */
quantum.net.websocket.put_BANG_ = (function quantum$net$websocket$put_BANG_(var_args){
var args__18590__auto__ = [];
var len__18583__auto___28899 = arguments.length;
var i__18584__auto___28900 = (0);
while(true){
if((i__18584__auto___28900 < len__18583__auto___28899)){
args__18590__auto__.push((arguments[i__18584__auto___28900]));

var G__28901 = (i__18584__auto___28900 + (1));
i__18584__auto___28900 = G__28901;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((2) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((2)),(0))):null);
return quantum.net.websocket.put_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18591__auto__);
});

quantum.net.websocket.put_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__28895,callback,p__28896){
var vec__28897 = p__28895;
var msg_id = cljs.core.nth.call(null,vec__28897,(0),null);
var msg = cljs.core.nth.call(null,vec__28897,(1),null);
var vec__28898 = p__28896;
var timeout = cljs.core.nth.call(null,vec__28898,(0),null);
var f = cljs.core.deref.call(null,quantum.net.websocket.send_msg_BANG_);
if(cljs.core.truth_(quantum.core.logic.nnil_QMARK_.call(null,f))){
} else {
throw quantum.core.error.__GT_ex.call(null,new cljs.core.Keyword(null,"assertion-error","assertion-error",1846873368),"Assertion not satisfied: (nnil? f)",cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.keyword,null),cljs.core.List.EMPTY));
}

return cljs.core.deref.call(null,quantum.net.websocket.send_msg_BANG_).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg_id,msg], null),(function (){var or__17525__auto__ = timeout;
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return (200);
}
})(),callback);
});

quantum.net.websocket.put_BANG_.cljs$lang$maxFixedArity = (2);

quantum.net.websocket.put_BANG_.cljs$lang$applyTo = (function (seq28892){
var G__28893 = cljs.core.first.call(null,seq28892);
var seq28892__$1 = cljs.core.next.call(null,seq28892);
var G__28894 = cljs.core.first.call(null,seq28892__$1);
var seq28892__$2 = cljs.core.next.call(null,seq28892__$1);
return quantum.net.websocket.put_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28893,G__28894,seq28892__$2);
});
/**
 * Try to send messsage @?times times with intervals of @?sleep
 * milliseconds. As soon as message send is successful, no further
 * messages are tried to be sent.
 */
quantum.net.websocket.try_put_BANG_ = (function quantum$net$websocket$try_put_BANG_(var_args){
var args__18590__auto__ = [];
var len__18583__auto___29000 = arguments.length;
var i__18584__auto___29001 = (0);
while(true){
if((i__18584__auto___29001 < len__18583__auto___29000)){
args__18590__auto__.push((arguments[i__18584__auto___29001]));

var G__29002 = (i__18584__auto___29001 + (1));
i__18584__auto___29001 = G__29002;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((2) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((2)),(0))):null);
return quantum.net.websocket.try_put_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18591__auto__);
});

quantum.net.websocket.try_put_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_QMARK_times,_QMARK_sleep,args){
var times = ((cljs.core.integer_QMARK_.call(null,_QMARK_times))?_QMARK_times:null);
var sleep = ((typeof _QMARK_sleep === 'number')?_QMARK_sleep:null);
var args_f = (cljs.core.truth_((function (){var and__17513__auto__ = times;
if(cljs.core.truth_(and__17513__auto__)){
return sleep;
} else {
return and__17513__auto__;
}
})())?args:(cljs.core.truth_(times)?cljs.core.cons.call(null,_QMARK_sleep,args):cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,_QMARK_sleep),_QMARK_times),args)
));
var c__22863__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22863__auto__,times,sleep,args_f){
return (function (){
var f__22864__auto__ = (function (){var switch__22842__auto__ = ((function (c__22863__auto__,times,sleep,args_f){
return (function (state_28960){
var state_val_28961 = (state_28960[(1)]);
if((state_val_28961 === (7))){
var inst_28912 = (state_28960[(2)]);
var inst_28913 = (0);
var inst_28914 = null;
var state_28960__$1 = (function (){var statearr_28962 = state_28960;
(statearr_28962[(7)] = inst_28913);

(statearr_28962[(10)] = inst_28914);

(statearr_28962[(11)] = inst_28912);

return statearr_28962;
})();
var statearr_28963_29003 = state_28960__$1;
(statearr_28963_29003[(2)] = null);

(statearr_28963_29003[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28961 === (20))){
var inst_28948 = (state_28960[(8)]);
var state_28960__$1 = state_28960;
var statearr_28964_29004 = state_28960__$1;
(statearr_28964_29004[(2)] = inst_28948);

(statearr_28964_29004[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28961 === (1))){
var state_28960__$1 = state_28960;
if(cljs.core.truth_(times)){
var statearr_28965_29005 = state_28960__$1;
(statearr_28965_29005[(1)] = (2));

} else {
var statearr_28966_29006 = state_28960__$1;
(statearr_28966_29006[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28961 === (4))){
var inst_28908 = (state_28960[(2)]);
var state_28960__$1 = (function (){var statearr_28967 = state_28960;
(statearr_28967[(9)] = inst_28908);

return statearr_28967;
})();
if(cljs.core.truth_(sleep)){
var statearr_28968_29007 = state_28960__$1;
(statearr_28968_29007[(1)] = (5));

} else {
var statearr_28969_29008 = state_28960__$1;
(statearr_28969_29008[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28961 === (15))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28960,(14),Error,null,(13));
var inst_28934 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28935 = cljs.core.apply.call(null,quantum.net.websocket.put_BANG_,args_f);
var inst_28936 = (inst_28935 == null);
var state_28960__$1 = (function (){var statearr_28970 = state_28960;
(statearr_28970[(12)] = inst_28934);

return statearr_28970;
})();
if(cljs.core.truth_(inst_28936)){
var statearr_28971_29009 = state_28960__$1;
(statearr_28971_29009[(1)] = (16));

} else {
var statearr_28972_29010 = state_28960__$1;
(statearr_28972_29010[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28961 === (21))){
var inst_28954 = (state_28960[(2)]);
var state_28960__$1 = state_28960;
var statearr_28973_29011 = state_28960__$1;
(statearr_28973_29011[(2)] = inst_28954);

(statearr_28973_29011[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28961 === (13))){
var inst_28947 = (state_28960[(13)]);
var inst_28946 = (state_28960[(2)]);
var inst_28947__$1 = cljs.core.nth.call(null,inst_28946,(0),null);
var inst_28948 = cljs.core.nth.call(null,inst_28946,(1),null);
var state_28960__$1 = (function (){var statearr_28974 = state_28960;
(statearr_28974[(13)] = inst_28947__$1);

(statearr_28974[(8)] = inst_28948);

return statearr_28974;
})();
if(cljs.core.truth_(inst_28947__$1)){
var statearr_28975_29012 = state_28960__$1;
(statearr_28975_29012[(1)] = (19));

} else {
var statearr_28976_29013 = state_28960__$1;
(statearr_28976_29013[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28961 === (6))){
var state_28960__$1 = state_28960;
var statearr_28977_29014 = state_28960__$1;
(statearr_28977_29014[(2)] = (500));

(statearr_28977_29014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28961 === (17))){
var state_28960__$1 = state_28960;
var statearr_28978_29015 = state_28960__$1;
(statearr_28978_29015[(2)] = null);

(statearr_28978_29015[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28961 === (3))){
var state_28960__$1 = state_28960;
var statearr_28979_29016 = state_28960__$1;
(statearr_28979_29016[(2)] = (3));

(statearr_28979_29016[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28961 === (12))){
var inst_28956 = (state_28960[(2)]);
var state_28960__$1 = state_28960;
var statearr_28980_29017 = state_28960__$1;
(statearr_28980_29017[(2)] = inst_28956);

(statearr_28980_29017[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28961 === (2))){
var state_28960__$1 = state_28960;
var statearr_28981_29018 = state_28960__$1;
(statearr_28981_29018[(2)] = times);

(statearr_28981_29018[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28961 === (19))){
var inst_28913 = (state_28960[(7)]);
var inst_28947 = (state_28960[(13)]);
var inst_28950 = (inst_28913 + (1));
var inst_28913__$1 = inst_28950;
var inst_28914 = inst_28947;
var state_28960__$1 = (function (){var statearr_28982 = state_28960;
(statearr_28982[(7)] = inst_28913__$1);

(statearr_28982[(10)] = inst_28914);

return statearr_28982;
})();
var statearr_28983_29019 = state_28960__$1;
(statearr_28983_29019[(2)] = null);

(statearr_28983_29019[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28961 === (11))){
var state_28960__$1 = state_28960;
var statearr_28984_29020 = state_28960__$1;
(statearr_28984_29020[(2)] = null);

(statearr_28984_29020[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28961 === (9))){
var inst_28958 = (state_28960[(2)]);
var state_28960__$1 = state_28960;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28960__$1,inst_28958);
} else {
if((state_val_28961 === (5))){
var state_28960__$1 = state_28960;
var statearr_28985_29021 = state_28960__$1;
(statearr_28985_29021[(2)] = sleep);

(statearr_28985_29021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28961 === (14))){
var inst_28912 = (state_28960[(11)]);
var inst_28925 = (state_28960[(2)]);
var inst_28926 = quantum.core.thread.async.timeout.call(null,inst_28912);
var inst_28927 = quantum.core.thread.async._LT__BANG_.call(null,inst_28926);
var inst_28928 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28929 = [inst_28925,null];
var inst_28930 = (new cljs.core.PersistentVector(null,2,(5),inst_28928,inst_28929,null));
var state_28960__$1 = (function (){var statearr_28986 = state_28960;
(statearr_28986[(14)] = inst_28927);

return statearr_28986;
})();
var statearr_28987_29022 = state_28960__$1;
(statearr_28987_29022[(2)] = inst_28930);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28960__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28961 === (16))){
var inst_28938 = quantum.core.error.__GT_ex.call(null,null,"WebSocket apparently not open for message");
var inst_28939 = (function(){throw inst_28938})();
var state_28960__$1 = state_28960;
var statearr_28988_29023 = state_28960__$1;
(statearr_28988_29023[(2)] = inst_28939);

(statearr_28988_29023[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28961 === (10))){
var inst_28913 = (state_28960[(7)]);
var inst_28914 = (state_28960[(10)]);
var inst_28918 = [new cljs.core.Keyword(null,"tries","tries",425666016),new cljs.core.Keyword(null,"last-error","last-error",1848699973)];
var inst_28919 = [inst_28913,inst_28914];
var inst_28920 = cljs.core.PersistentHashMap.fromArrays(inst_28918,inst_28919);
var inst_28921 = quantum.core.error.__GT_ex.call(null,new cljs.core.Keyword(null,"max-tries-exceeded","max-tries-exceeded",917262637),null,inst_28920);
var inst_28922 = (function(){throw inst_28921})();
var state_28960__$1 = state_28960;
var statearr_28989_29024 = state_28960__$1;
(statearr_28989_29024[(2)] = inst_28922);

(statearr_28989_29024[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28961 === (18))){
var inst_28934 = (state_28960[(12)]);
var inst_28942 = (state_28960[(2)]);
var inst_28943 = [null,inst_28942];
var inst_28944 = (new cljs.core.PersistentVector(null,2,(5),inst_28934,inst_28943,null));
var state_28960__$1 = state_28960;
var statearr_28990_29025 = state_28960__$1;
(statearr_28990_29025[(2)] = inst_28944);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28960__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28961 === (8))){
var inst_28908 = (state_28960[(9)]);
var inst_28913 = (state_28960[(7)]);
var inst_28916 = (inst_28913 > inst_28908);
var state_28960__$1 = state_28960;
if(cljs.core.truth_(inst_28916)){
var statearr_28991_29026 = state_28960__$1;
(statearr_28991_29026[(1)] = (10));

} else {
var statearr_28992_29027 = state_28960__$1;
(statearr_28992_29027[(1)] = (11));

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
});})(c__22863__auto__,times,sleep,args_f))
;
return ((function (switch__22842__auto__,c__22863__auto__,times,sleep,args_f){
return (function() {
var quantum$net$websocket$state_machine__22843__auto__ = null;
var quantum$net$websocket$state_machine__22843__auto____0 = (function (){
var statearr_28996 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28996[(0)] = quantum$net$websocket$state_machine__22843__auto__);

(statearr_28996[(1)] = (1));

return statearr_28996;
});
var quantum$net$websocket$state_machine__22843__auto____1 = (function (state_28960){
while(true){
var ret_value__22844__auto__ = (function (){try{while(true){
var result__22845__auto__ = switch__22842__auto__.call(null,state_28960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22845__auto__;
}
break;
}
}catch (e28997){if((e28997 instanceof Object)){
var ex__22846__auto__ = e28997;
var statearr_28998_29028 = state_28960;
(statearr_28998_29028[(5)] = ex__22846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28997;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29029 = state_28960;
state_28960 = G__29029;
continue;
} else {
return ret_value__22844__auto__;
}
break;
}
});
quantum$net$websocket$state_machine__22843__auto__ = function(state_28960){
switch(arguments.length){
case 0:
return quantum$net$websocket$state_machine__22843__auto____0.call(this);
case 1:
return quantum$net$websocket$state_machine__22843__auto____1.call(this,state_28960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
quantum$net$websocket$state_machine__22843__auto__.cljs$core$IFn$_invoke$arity$0 = quantum$net$websocket$state_machine__22843__auto____0;
quantum$net$websocket$state_machine__22843__auto__.cljs$core$IFn$_invoke$arity$1 = quantum$net$websocket$state_machine__22843__auto____1;
return quantum$net$websocket$state_machine__22843__auto__;
})()
;})(switch__22842__auto__,c__22863__auto__,times,sleep,args_f))
})();
var state__22865__auto__ = (function (){var statearr_28999 = f__22864__auto__.call(null);
(statearr_28999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22863__auto__);

return statearr_28999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22865__auto__);
});})(c__22863__auto__,times,sleep,args_f))
);

return c__22863__auto__;
});

quantum.net.websocket.try_put_BANG_.cljs$lang$maxFixedArity = (2);

quantum.net.websocket.try_put_BANG_.cljs$lang$applyTo = (function (seq28902){
var G__28903 = cljs.core.first.call(null,seq28902);
var seq28902__$1 = cljs.core.next.call(null,seq28902);
var G__28904 = cljs.core.first.call(null,seq28902__$1);
var seq28902__$2 = cljs.core.next.call(null,seq28902__$1);
return quantum.net.websocket.try_put_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28903,G__28904,seq28902__$2);
});

//# sourceMappingURL=websocket.js.map?rel=1452702625656
/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns log fn logic err res async core-async]
*/
