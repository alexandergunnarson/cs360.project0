// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__40226 = cljs.core._EQ_;
var expr__40227 = (function (){var or__17525__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__40226.call(null,"true",expr__40227))){
return true;
} else {
if(cljs.core.truth_(pred__40226.call(null,"false",expr__40227))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__40227)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__18590__auto__ = [];
var len__18583__auto___40230 = arguments.length;
var i__18584__auto___40231 = (0);
while(true){
if((i__18584__auto___40231 < len__18583__auto___40230)){
args__18590__auto__.push((arguments[i__18584__auto___40231]));

var G__40232 = (i__18584__auto___40231 + (1));
i__18584__auto___40231 = G__40232;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq40229){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40229));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__40233){
var map__40236 = p__40233;
var map__40236__$1 = ((((!((map__40236 == null)))?((((map__40236.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40236.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40236):map__40236);
var message = cljs.core.get.call(null,map__40236__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__40236__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__17525__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__17513__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__17513__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__17513__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__22863__auto___40398 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22863__auto___40398,ch){
return (function (){
var f__22864__auto__ = (function (){var switch__22842__auto__ = ((function (c__22863__auto___40398,ch){
return (function (state_40367){
var state_val_40368 = (state_40367[(1)]);
if((state_val_40368 === (7))){
var inst_40363 = (state_40367[(2)]);
var state_40367__$1 = state_40367;
var statearr_40369_40399 = state_40367__$1;
(statearr_40369_40399[(2)] = inst_40363);

(statearr_40369_40399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40368 === (1))){
var state_40367__$1 = state_40367;
var statearr_40370_40400 = state_40367__$1;
(statearr_40370_40400[(2)] = null);

(statearr_40370_40400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40368 === (4))){
var inst_40320 = (state_40367[(7)]);
var inst_40320__$1 = (state_40367[(2)]);
var state_40367__$1 = (function (){var statearr_40371 = state_40367;
(statearr_40371[(7)] = inst_40320__$1);

return statearr_40371;
})();
if(cljs.core.truth_(inst_40320__$1)){
var statearr_40372_40401 = state_40367__$1;
(statearr_40372_40401[(1)] = (5));

} else {
var statearr_40373_40402 = state_40367__$1;
(statearr_40373_40402[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40368 === (15))){
var inst_40327 = (state_40367[(8)]);
var inst_40342 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_40327);
var inst_40343 = cljs.core.first.call(null,inst_40342);
var inst_40344 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_40343);
var inst_40345 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_40344)].join('');
var inst_40346 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_40345);
var state_40367__$1 = state_40367;
var statearr_40374_40403 = state_40367__$1;
(statearr_40374_40403[(2)] = inst_40346);

(statearr_40374_40403[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40368 === (13))){
var inst_40351 = (state_40367[(2)]);
var state_40367__$1 = state_40367;
var statearr_40375_40404 = state_40367__$1;
(statearr_40375_40404[(2)] = inst_40351);

(statearr_40375_40404[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40368 === (6))){
var state_40367__$1 = state_40367;
var statearr_40376_40405 = state_40367__$1;
(statearr_40376_40405[(2)] = null);

(statearr_40376_40405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40368 === (17))){
var inst_40349 = (state_40367[(2)]);
var state_40367__$1 = state_40367;
var statearr_40377_40406 = state_40367__$1;
(statearr_40377_40406[(2)] = inst_40349);

(statearr_40377_40406[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40368 === (3))){
var inst_40365 = (state_40367[(2)]);
var state_40367__$1 = state_40367;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40367__$1,inst_40365);
} else {
if((state_val_40368 === (12))){
var inst_40326 = (state_40367[(9)]);
var inst_40340 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_40326,opts);
var state_40367__$1 = state_40367;
if(cljs.core.truth_(inst_40340)){
var statearr_40378_40407 = state_40367__$1;
(statearr_40378_40407[(1)] = (15));

} else {
var statearr_40379_40408 = state_40367__$1;
(statearr_40379_40408[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40368 === (2))){
var state_40367__$1 = state_40367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40367__$1,(4),ch);
} else {
if((state_val_40368 === (11))){
var inst_40327 = (state_40367[(8)]);
var inst_40332 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40333 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_40327);
var inst_40334 = cljs.core.async.timeout.call(null,(1000));
var inst_40335 = [inst_40333,inst_40334];
var inst_40336 = (new cljs.core.PersistentVector(null,2,(5),inst_40332,inst_40335,null));
var state_40367__$1 = state_40367;
return cljs.core.async.ioc_alts_BANG_.call(null,state_40367__$1,(14),inst_40336);
} else {
if((state_val_40368 === (9))){
var inst_40327 = (state_40367[(8)]);
var inst_40353 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_40354 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_40327);
var inst_40355 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_40354);
var inst_40356 = [cljs.core.str("Not loading: "),cljs.core.str(inst_40355)].join('');
var inst_40357 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_40356);
var state_40367__$1 = (function (){var statearr_40380 = state_40367;
(statearr_40380[(10)] = inst_40353);

return statearr_40380;
})();
var statearr_40381_40409 = state_40367__$1;
(statearr_40381_40409[(2)] = inst_40357);

(statearr_40381_40409[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40368 === (5))){
var inst_40320 = (state_40367[(7)]);
var inst_40322 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_40323 = (new cljs.core.PersistentArrayMap(null,2,inst_40322,null));
var inst_40324 = (new cljs.core.PersistentHashSet(null,inst_40323,null));
var inst_40325 = figwheel.client.focus_msgs.call(null,inst_40324,inst_40320);
var inst_40326 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_40325);
var inst_40327 = cljs.core.first.call(null,inst_40325);
var inst_40328 = figwheel.client.autoload_QMARK_.call(null);
var state_40367__$1 = (function (){var statearr_40382 = state_40367;
(statearr_40382[(9)] = inst_40326);

(statearr_40382[(8)] = inst_40327);

return statearr_40382;
})();
if(cljs.core.truth_(inst_40328)){
var statearr_40383_40410 = state_40367__$1;
(statearr_40383_40410[(1)] = (8));

} else {
var statearr_40384_40411 = state_40367__$1;
(statearr_40384_40411[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40368 === (14))){
var inst_40338 = (state_40367[(2)]);
var state_40367__$1 = state_40367;
var statearr_40385_40412 = state_40367__$1;
(statearr_40385_40412[(2)] = inst_40338);

(statearr_40385_40412[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40368 === (16))){
var state_40367__$1 = state_40367;
var statearr_40386_40413 = state_40367__$1;
(statearr_40386_40413[(2)] = null);

(statearr_40386_40413[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40368 === (10))){
var inst_40359 = (state_40367[(2)]);
var state_40367__$1 = (function (){var statearr_40387 = state_40367;
(statearr_40387[(11)] = inst_40359);

return statearr_40387;
})();
var statearr_40388_40414 = state_40367__$1;
(statearr_40388_40414[(2)] = null);

(statearr_40388_40414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40368 === (8))){
var inst_40326 = (state_40367[(9)]);
var inst_40330 = figwheel.client.reload_file_state_QMARK_.call(null,inst_40326,opts);
var state_40367__$1 = state_40367;
if(cljs.core.truth_(inst_40330)){
var statearr_40389_40415 = state_40367__$1;
(statearr_40389_40415[(1)] = (11));

} else {
var statearr_40390_40416 = state_40367__$1;
(statearr_40390_40416[(1)] = (12));

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
});})(c__22863__auto___40398,ch))
;
return ((function (switch__22842__auto__,c__22863__auto___40398,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22843__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22843__auto____0 = (function (){
var statearr_40394 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40394[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22843__auto__);

(statearr_40394[(1)] = (1));

return statearr_40394;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22843__auto____1 = (function (state_40367){
while(true){
var ret_value__22844__auto__ = (function (){try{while(true){
var result__22845__auto__ = switch__22842__auto__.call(null,state_40367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22845__auto__;
}
break;
}
}catch (e40395){if((e40395 instanceof Object)){
var ex__22846__auto__ = e40395;
var statearr_40396_40417 = state_40367;
(statearr_40396_40417[(5)] = ex__22846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40395;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40418 = state_40367;
state_40367 = G__40418;
continue;
} else {
return ret_value__22844__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22843__auto__ = function(state_40367){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22843__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22843__auto____1.call(this,state_40367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22843__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22843__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22843__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22843__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22843__auto__;
})()
;})(switch__22842__auto__,c__22863__auto___40398,ch))
})();
var state__22865__auto__ = (function (){var statearr_40397 = f__22864__auto__.call(null);
(statearr_40397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22863__auto___40398);

return statearr_40397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22865__auto__);
});})(c__22863__auto___40398,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__40419_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__40419_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_40426 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_40426){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_40424 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_40425 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_40425;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_40424;
}}catch (e40423){if((e40423 instanceof Error)){
var e = e40423;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_40426], null));
} else {
var e = e40423;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_40426))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__40427){
var map__40434 = p__40427;
var map__40434__$1 = ((((!((map__40434 == null)))?((((map__40434.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40434.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40434):map__40434);
var opts = map__40434__$1;
var build_id = cljs.core.get.call(null,map__40434__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__40434,map__40434__$1,opts,build_id){
return (function (p__40436){
var vec__40437 = p__40436;
var map__40438 = cljs.core.nth.call(null,vec__40437,(0),null);
var map__40438__$1 = ((((!((map__40438 == null)))?((((map__40438.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40438.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40438):map__40438);
var msg = map__40438__$1;
var msg_name = cljs.core.get.call(null,map__40438__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__40437,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__40437,map__40438,map__40438__$1,msg,msg_name,_,map__40434,map__40434__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__40437,map__40438,map__40438__$1,msg,msg_name,_,map__40434,map__40434__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__40434,map__40434__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__40444){
var vec__40445 = p__40444;
var map__40446 = cljs.core.nth.call(null,vec__40445,(0),null);
var map__40446__$1 = ((((!((map__40446 == null)))?((((map__40446.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40446.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40446):map__40446);
var msg = map__40446__$1;
var msg_name = cljs.core.get.call(null,map__40446__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__40445,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__40448){
var map__40458 = p__40448;
var map__40458__$1 = ((((!((map__40458 == null)))?((((map__40458.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40458.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40458):map__40458);
var on_compile_warning = cljs.core.get.call(null,map__40458__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__40458__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__40458,map__40458__$1,on_compile_warning,on_compile_fail){
return (function (p__40460){
var vec__40461 = p__40460;
var map__40462 = cljs.core.nth.call(null,vec__40461,(0),null);
var map__40462__$1 = ((((!((map__40462 == null)))?((((map__40462.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40462.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40462):map__40462);
var msg = map__40462__$1;
var msg_name = cljs.core.get.call(null,map__40462__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__40461,(1));
var pred__40464 = cljs.core._EQ_;
var expr__40465 = msg_name;
if(cljs.core.truth_(pred__40464.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__40465))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__40464.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__40465))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__40458,map__40458__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22863__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22863__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22864__auto__ = (function (){var switch__22842__auto__ = ((function (c__22863__auto__,msg_hist,msg_names,msg){
return (function (state_40681){
var state_val_40682 = (state_40681[(1)]);
if((state_val_40682 === (7))){
var inst_40605 = (state_40681[(2)]);
var state_40681__$1 = state_40681;
if(cljs.core.truth_(inst_40605)){
var statearr_40683_40729 = state_40681__$1;
(statearr_40683_40729[(1)] = (8));

} else {
var statearr_40684_40730 = state_40681__$1;
(statearr_40684_40730[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40682 === (20))){
var inst_40675 = (state_40681[(2)]);
var state_40681__$1 = state_40681;
var statearr_40685_40731 = state_40681__$1;
(statearr_40685_40731[(2)] = inst_40675);

(statearr_40685_40731[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40682 === (27))){
var inst_40671 = (state_40681[(2)]);
var state_40681__$1 = state_40681;
var statearr_40686_40732 = state_40681__$1;
(statearr_40686_40732[(2)] = inst_40671);

(statearr_40686_40732[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40682 === (1))){
var inst_40598 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_40681__$1 = state_40681;
if(cljs.core.truth_(inst_40598)){
var statearr_40687_40733 = state_40681__$1;
(statearr_40687_40733[(1)] = (2));

} else {
var statearr_40688_40734 = state_40681__$1;
(statearr_40688_40734[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40682 === (24))){
var inst_40673 = (state_40681[(2)]);
var state_40681__$1 = state_40681;
var statearr_40689_40735 = state_40681__$1;
(statearr_40689_40735[(2)] = inst_40673);

(statearr_40689_40735[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40682 === (4))){
var inst_40679 = (state_40681[(2)]);
var state_40681__$1 = state_40681;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40681__$1,inst_40679);
} else {
if((state_val_40682 === (15))){
var inst_40677 = (state_40681[(2)]);
var state_40681__$1 = state_40681;
var statearr_40690_40736 = state_40681__$1;
(statearr_40690_40736[(2)] = inst_40677);

(statearr_40690_40736[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40682 === (21))){
var inst_40636 = (state_40681[(2)]);
var state_40681__$1 = state_40681;
var statearr_40691_40737 = state_40681__$1;
(statearr_40691_40737[(2)] = inst_40636);

(statearr_40691_40737[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40682 === (31))){
var inst_40660 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_40681__$1 = state_40681;
if(cljs.core.truth_(inst_40660)){
var statearr_40692_40738 = state_40681__$1;
(statearr_40692_40738[(1)] = (34));

} else {
var statearr_40693_40739 = state_40681__$1;
(statearr_40693_40739[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40682 === (32))){
var inst_40669 = (state_40681[(2)]);
var state_40681__$1 = state_40681;
var statearr_40694_40740 = state_40681__$1;
(statearr_40694_40740[(2)] = inst_40669);

(statearr_40694_40740[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40682 === (33))){
var inst_40658 = (state_40681[(2)]);
var state_40681__$1 = state_40681;
var statearr_40695_40741 = state_40681__$1;
(statearr_40695_40741[(2)] = inst_40658);

(statearr_40695_40741[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40682 === (13))){
var inst_40619 = figwheel.client.heads_up.clear.call(null);
var state_40681__$1 = state_40681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40681__$1,(16),inst_40619);
} else {
if((state_val_40682 === (22))){
var inst_40640 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40641 = figwheel.client.heads_up.append_message.call(null,inst_40640);
var state_40681__$1 = state_40681;
var statearr_40696_40742 = state_40681__$1;
(statearr_40696_40742[(2)] = inst_40641);

(statearr_40696_40742[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40682 === (36))){
var inst_40667 = (state_40681[(2)]);
var state_40681__$1 = state_40681;
var statearr_40697_40743 = state_40681__$1;
(statearr_40697_40743[(2)] = inst_40667);

(statearr_40697_40743[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40682 === (29))){
var inst_40651 = (state_40681[(2)]);
var state_40681__$1 = state_40681;
var statearr_40698_40744 = state_40681__$1;
(statearr_40698_40744[(2)] = inst_40651);

(statearr_40698_40744[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40682 === (6))){
var inst_40600 = (state_40681[(7)]);
var state_40681__$1 = state_40681;
var statearr_40699_40745 = state_40681__$1;
(statearr_40699_40745[(2)] = inst_40600);

(statearr_40699_40745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40682 === (28))){
var inst_40647 = (state_40681[(2)]);
var inst_40648 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40649 = figwheel.client.heads_up.display_warning.call(null,inst_40648);
var state_40681__$1 = (function (){var statearr_40700 = state_40681;
(statearr_40700[(8)] = inst_40647);

return statearr_40700;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40681__$1,(29),inst_40649);
} else {
if((state_val_40682 === (25))){
var inst_40645 = figwheel.client.heads_up.clear.call(null);
var state_40681__$1 = state_40681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40681__$1,(28),inst_40645);
} else {
if((state_val_40682 === (34))){
var inst_40662 = figwheel.client.heads_up.flash_loaded.call(null);
var state_40681__$1 = state_40681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40681__$1,(37),inst_40662);
} else {
if((state_val_40682 === (17))){
var inst_40627 = (state_40681[(2)]);
var state_40681__$1 = state_40681;
var statearr_40701_40746 = state_40681__$1;
(statearr_40701_40746[(2)] = inst_40627);

(statearr_40701_40746[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40682 === (3))){
var inst_40617 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_40681__$1 = state_40681;
if(cljs.core.truth_(inst_40617)){
var statearr_40702_40747 = state_40681__$1;
(statearr_40702_40747[(1)] = (13));

} else {
var statearr_40703_40748 = state_40681__$1;
(statearr_40703_40748[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40682 === (12))){
var inst_40613 = (state_40681[(2)]);
var state_40681__$1 = state_40681;
var statearr_40704_40749 = state_40681__$1;
(statearr_40704_40749[(2)] = inst_40613);

(statearr_40704_40749[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40682 === (2))){
var inst_40600 = (state_40681[(7)]);
var inst_40600__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_40681__$1 = (function (){var statearr_40705 = state_40681;
(statearr_40705[(7)] = inst_40600__$1);

return statearr_40705;
})();
if(cljs.core.truth_(inst_40600__$1)){
var statearr_40706_40750 = state_40681__$1;
(statearr_40706_40750[(1)] = (5));

} else {
var statearr_40707_40751 = state_40681__$1;
(statearr_40707_40751[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40682 === (23))){
var inst_40643 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_40681__$1 = state_40681;
if(cljs.core.truth_(inst_40643)){
var statearr_40708_40752 = state_40681__$1;
(statearr_40708_40752[(1)] = (25));

} else {
var statearr_40709_40753 = state_40681__$1;
(statearr_40709_40753[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40682 === (35))){
var state_40681__$1 = state_40681;
var statearr_40710_40754 = state_40681__$1;
(statearr_40710_40754[(2)] = null);

(statearr_40710_40754[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40682 === (19))){
var inst_40638 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_40681__$1 = state_40681;
if(cljs.core.truth_(inst_40638)){
var statearr_40711_40755 = state_40681__$1;
(statearr_40711_40755[(1)] = (22));

} else {
var statearr_40712_40756 = state_40681__$1;
(statearr_40712_40756[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40682 === (11))){
var inst_40609 = (state_40681[(2)]);
var state_40681__$1 = state_40681;
var statearr_40713_40757 = state_40681__$1;
(statearr_40713_40757[(2)] = inst_40609);

(statearr_40713_40757[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40682 === (9))){
var inst_40611 = figwheel.client.heads_up.clear.call(null);
var state_40681__$1 = state_40681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40681__$1,(12),inst_40611);
} else {
if((state_val_40682 === (5))){
var inst_40602 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_40681__$1 = state_40681;
var statearr_40714_40758 = state_40681__$1;
(statearr_40714_40758[(2)] = inst_40602);

(statearr_40714_40758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40682 === (14))){
var inst_40629 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_40681__$1 = state_40681;
if(cljs.core.truth_(inst_40629)){
var statearr_40715_40759 = state_40681__$1;
(statearr_40715_40759[(1)] = (18));

} else {
var statearr_40716_40760 = state_40681__$1;
(statearr_40716_40760[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40682 === (26))){
var inst_40653 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_40681__$1 = state_40681;
if(cljs.core.truth_(inst_40653)){
var statearr_40717_40761 = state_40681__$1;
(statearr_40717_40761[(1)] = (30));

} else {
var statearr_40718_40762 = state_40681__$1;
(statearr_40718_40762[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40682 === (16))){
var inst_40621 = (state_40681[(2)]);
var inst_40622 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40623 = figwheel.client.format_messages.call(null,inst_40622);
var inst_40624 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40625 = figwheel.client.heads_up.display_error.call(null,inst_40623,inst_40624);
var state_40681__$1 = (function (){var statearr_40719 = state_40681;
(statearr_40719[(9)] = inst_40621);

return statearr_40719;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40681__$1,(17),inst_40625);
} else {
if((state_val_40682 === (30))){
var inst_40655 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40656 = figwheel.client.heads_up.display_warning.call(null,inst_40655);
var state_40681__$1 = state_40681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40681__$1,(33),inst_40656);
} else {
if((state_val_40682 === (10))){
var inst_40615 = (state_40681[(2)]);
var state_40681__$1 = state_40681;
var statearr_40720_40763 = state_40681__$1;
(statearr_40720_40763[(2)] = inst_40615);

(statearr_40720_40763[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40682 === (18))){
var inst_40631 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40632 = figwheel.client.format_messages.call(null,inst_40631);
var inst_40633 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40634 = figwheel.client.heads_up.display_error.call(null,inst_40632,inst_40633);
var state_40681__$1 = state_40681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40681__$1,(21),inst_40634);
} else {
if((state_val_40682 === (37))){
var inst_40664 = (state_40681[(2)]);
var state_40681__$1 = state_40681;
var statearr_40721_40764 = state_40681__$1;
(statearr_40721_40764[(2)] = inst_40664);

(statearr_40721_40764[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40682 === (8))){
var inst_40607 = figwheel.client.heads_up.flash_loaded.call(null);
var state_40681__$1 = state_40681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40681__$1,(11),inst_40607);
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
});})(c__22863__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22842__auto__,c__22863__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22843__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22843__auto____0 = (function (){
var statearr_40725 = [null,null,null,null,null,null,null,null,null,null];
(statearr_40725[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22843__auto__);

(statearr_40725[(1)] = (1));

return statearr_40725;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22843__auto____1 = (function (state_40681){
while(true){
var ret_value__22844__auto__ = (function (){try{while(true){
var result__22845__auto__ = switch__22842__auto__.call(null,state_40681);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22845__auto__;
}
break;
}
}catch (e40726){if((e40726 instanceof Object)){
var ex__22846__auto__ = e40726;
var statearr_40727_40765 = state_40681;
(statearr_40727_40765[(5)] = ex__22846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40766 = state_40681;
state_40681 = G__40766;
continue;
} else {
return ret_value__22844__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22843__auto__ = function(state_40681){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22843__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22843__auto____1.call(this,state_40681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22843__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22843__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22843__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22843__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22843__auto__;
})()
;})(switch__22842__auto__,c__22863__auto__,msg_hist,msg_names,msg))
})();
var state__22865__auto__ = (function (){var statearr_40728 = f__22864__auto__.call(null);
(statearr_40728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22863__auto__);

return statearr_40728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22865__auto__);
});})(c__22863__auto__,msg_hist,msg_names,msg))
);

return c__22863__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22863__auto___40829 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22863__auto___40829,ch){
return (function (){
var f__22864__auto__ = (function (){var switch__22842__auto__ = ((function (c__22863__auto___40829,ch){
return (function (state_40812){
var state_val_40813 = (state_40812[(1)]);
if((state_val_40813 === (1))){
var state_40812__$1 = state_40812;
var statearr_40814_40830 = state_40812__$1;
(statearr_40814_40830[(2)] = null);

(statearr_40814_40830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40813 === (2))){
var state_40812__$1 = state_40812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40812__$1,(4),ch);
} else {
if((state_val_40813 === (3))){
var inst_40810 = (state_40812[(2)]);
var state_40812__$1 = state_40812;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40812__$1,inst_40810);
} else {
if((state_val_40813 === (4))){
var inst_40800 = (state_40812[(7)]);
var inst_40800__$1 = (state_40812[(2)]);
var state_40812__$1 = (function (){var statearr_40815 = state_40812;
(statearr_40815[(7)] = inst_40800__$1);

return statearr_40815;
})();
if(cljs.core.truth_(inst_40800__$1)){
var statearr_40816_40831 = state_40812__$1;
(statearr_40816_40831[(1)] = (5));

} else {
var statearr_40817_40832 = state_40812__$1;
(statearr_40817_40832[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40813 === (5))){
var inst_40800 = (state_40812[(7)]);
var inst_40802 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_40800);
var state_40812__$1 = state_40812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40812__$1,(8),inst_40802);
} else {
if((state_val_40813 === (6))){
var state_40812__$1 = state_40812;
var statearr_40818_40833 = state_40812__$1;
(statearr_40818_40833[(2)] = null);

(statearr_40818_40833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40813 === (7))){
var inst_40808 = (state_40812[(2)]);
var state_40812__$1 = state_40812;
var statearr_40819_40834 = state_40812__$1;
(statearr_40819_40834[(2)] = inst_40808);

(statearr_40819_40834[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40813 === (8))){
var inst_40804 = (state_40812[(2)]);
var state_40812__$1 = (function (){var statearr_40820 = state_40812;
(statearr_40820[(8)] = inst_40804);

return statearr_40820;
})();
var statearr_40821_40835 = state_40812__$1;
(statearr_40821_40835[(2)] = null);

(statearr_40821_40835[(1)] = (2));


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
});})(c__22863__auto___40829,ch))
;
return ((function (switch__22842__auto__,c__22863__auto___40829,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22843__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22843__auto____0 = (function (){
var statearr_40825 = [null,null,null,null,null,null,null,null,null];
(statearr_40825[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22843__auto__);

(statearr_40825[(1)] = (1));

return statearr_40825;
});
var figwheel$client$heads_up_plugin_$_state_machine__22843__auto____1 = (function (state_40812){
while(true){
var ret_value__22844__auto__ = (function (){try{while(true){
var result__22845__auto__ = switch__22842__auto__.call(null,state_40812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22845__auto__;
}
break;
}
}catch (e40826){if((e40826 instanceof Object)){
var ex__22846__auto__ = e40826;
var statearr_40827_40836 = state_40812;
(statearr_40827_40836[(5)] = ex__22846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40826;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40837 = state_40812;
state_40812 = G__40837;
continue;
} else {
return ret_value__22844__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22843__auto__ = function(state_40812){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22843__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22843__auto____1.call(this,state_40812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22843__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22843__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22843__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22843__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22843__auto__;
})()
;})(switch__22842__auto__,c__22863__auto___40829,ch))
})();
var state__22865__auto__ = (function (){var statearr_40828 = f__22864__auto__.call(null);
(statearr_40828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22863__auto___40829);

return statearr_40828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22865__auto__);
});})(c__22863__auto___40829,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__22863__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22863__auto__){
return (function (){
var f__22864__auto__ = (function (){var switch__22842__auto__ = ((function (c__22863__auto__){
return (function (state_40858){
var state_val_40859 = (state_40858[(1)]);
if((state_val_40859 === (1))){
var inst_40853 = cljs.core.async.timeout.call(null,(3000));
var state_40858__$1 = state_40858;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40858__$1,(2),inst_40853);
} else {
if((state_val_40859 === (2))){
var inst_40855 = (state_40858[(2)]);
var inst_40856 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_40858__$1 = (function (){var statearr_40860 = state_40858;
(statearr_40860[(7)] = inst_40855);

return statearr_40860;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40858__$1,inst_40856);
} else {
return null;
}
}
});})(c__22863__auto__))
;
return ((function (switch__22842__auto__,c__22863__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22843__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22843__auto____0 = (function (){
var statearr_40864 = [null,null,null,null,null,null,null,null];
(statearr_40864[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22843__auto__);

(statearr_40864[(1)] = (1));

return statearr_40864;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22843__auto____1 = (function (state_40858){
while(true){
var ret_value__22844__auto__ = (function (){try{while(true){
var result__22845__auto__ = switch__22842__auto__.call(null,state_40858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22845__auto__;
}
break;
}
}catch (e40865){if((e40865 instanceof Object)){
var ex__22846__auto__ = e40865;
var statearr_40866_40868 = state_40858;
(statearr_40866_40868[(5)] = ex__22846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40865;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40869 = state_40858;
state_40858 = G__40869;
continue;
} else {
return ret_value__22844__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22843__auto__ = function(state_40858){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22843__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22843__auto____1.call(this,state_40858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22843__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22843__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22843__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22843__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22843__auto__;
})()
;})(switch__22842__auto__,c__22863__auto__))
})();
var state__22865__auto__ = (function (){var statearr_40867 = f__22864__auto__.call(null);
(statearr_40867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22863__auto__);

return statearr_40867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22865__auto__);
});})(c__22863__auto__))
);

return c__22863__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__40870){
var map__40877 = p__40870;
var map__40877__$1 = ((((!((map__40877 == null)))?((((map__40877.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40877.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40877):map__40877);
var ed = map__40877__$1;
var formatted_exception = cljs.core.get.call(null,map__40877__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__40877__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__40877__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__40879_40883 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__40880_40884 = null;
var count__40881_40885 = (0);
var i__40882_40886 = (0);
while(true){
if((i__40882_40886 < count__40881_40885)){
var msg_40887 = cljs.core._nth.call(null,chunk__40880_40884,i__40882_40886);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40887);

var G__40888 = seq__40879_40883;
var G__40889 = chunk__40880_40884;
var G__40890 = count__40881_40885;
var G__40891 = (i__40882_40886 + (1));
seq__40879_40883 = G__40888;
chunk__40880_40884 = G__40889;
count__40881_40885 = G__40890;
i__40882_40886 = G__40891;
continue;
} else {
var temp__4425__auto___40892 = cljs.core.seq.call(null,seq__40879_40883);
if(temp__4425__auto___40892){
var seq__40879_40893__$1 = temp__4425__auto___40892;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40879_40893__$1)){
var c__18328__auto___40894 = cljs.core.chunk_first.call(null,seq__40879_40893__$1);
var G__40895 = cljs.core.chunk_rest.call(null,seq__40879_40893__$1);
var G__40896 = c__18328__auto___40894;
var G__40897 = cljs.core.count.call(null,c__18328__auto___40894);
var G__40898 = (0);
seq__40879_40883 = G__40895;
chunk__40880_40884 = G__40896;
count__40881_40885 = G__40897;
i__40882_40886 = G__40898;
continue;
} else {
var msg_40899 = cljs.core.first.call(null,seq__40879_40893__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40899);

var G__40900 = cljs.core.next.call(null,seq__40879_40893__$1);
var G__40901 = null;
var G__40902 = (0);
var G__40903 = (0);
seq__40879_40883 = G__40900;
chunk__40880_40884 = G__40901;
count__40881_40885 = G__40902;
i__40882_40886 = G__40903;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__40904){
var map__40907 = p__40904;
var map__40907__$1 = ((((!((map__40907 == null)))?((((map__40907.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40907.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40907):map__40907);
var w = map__40907__$1;
var message = cljs.core.get.call(null,map__40907__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__17513__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__17513__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__17513__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__40915 = cljs.core.seq.call(null,plugins);
var chunk__40916 = null;
var count__40917 = (0);
var i__40918 = (0);
while(true){
if((i__40918 < count__40917)){
var vec__40919 = cljs.core._nth.call(null,chunk__40916,i__40918);
var k = cljs.core.nth.call(null,vec__40919,(0),null);
var plugin = cljs.core.nth.call(null,vec__40919,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40921 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40915,chunk__40916,count__40917,i__40918,pl_40921,vec__40919,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_40921.call(null,msg_hist);
});})(seq__40915,chunk__40916,count__40917,i__40918,pl_40921,vec__40919,k,plugin))
);
} else {
}

var G__40922 = seq__40915;
var G__40923 = chunk__40916;
var G__40924 = count__40917;
var G__40925 = (i__40918 + (1));
seq__40915 = G__40922;
chunk__40916 = G__40923;
count__40917 = G__40924;
i__40918 = G__40925;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__40915);
if(temp__4425__auto__){
var seq__40915__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40915__$1)){
var c__18328__auto__ = cljs.core.chunk_first.call(null,seq__40915__$1);
var G__40926 = cljs.core.chunk_rest.call(null,seq__40915__$1);
var G__40927 = c__18328__auto__;
var G__40928 = cljs.core.count.call(null,c__18328__auto__);
var G__40929 = (0);
seq__40915 = G__40926;
chunk__40916 = G__40927;
count__40917 = G__40928;
i__40918 = G__40929;
continue;
} else {
var vec__40920 = cljs.core.first.call(null,seq__40915__$1);
var k = cljs.core.nth.call(null,vec__40920,(0),null);
var plugin = cljs.core.nth.call(null,vec__40920,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40930 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40915,chunk__40916,count__40917,i__40918,pl_40930,vec__40920,k,plugin,seq__40915__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_40930.call(null,msg_hist);
});})(seq__40915,chunk__40916,count__40917,i__40918,pl_40930,vec__40920,k,plugin,seq__40915__$1,temp__4425__auto__))
);
} else {
}

var G__40931 = cljs.core.next.call(null,seq__40915__$1);
var G__40932 = null;
var G__40933 = (0);
var G__40934 = (0);
seq__40915 = G__40931;
chunk__40916 = G__40932;
count__40917 = G__40933;
i__40918 = G__40934;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args40935 = [];
var len__18583__auto___40938 = arguments.length;
var i__18584__auto___40939 = (0);
while(true){
if((i__18584__auto___40939 < len__18583__auto___40938)){
args40935.push((arguments[i__18584__auto___40939]));

var G__40940 = (i__18584__auto___40939 + (1));
i__18584__auto___40939 = G__40940;
continue;
} else {
}
break;
}

var G__40937 = args40935.length;
switch (G__40937) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40935.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__18590__auto__ = [];
var len__18583__auto___40946 = arguments.length;
var i__18584__auto___40947 = (0);
while(true){
if((i__18584__auto___40947 < len__18583__auto___40946)){
args__18590__auto__.push((arguments[i__18584__auto___40947]));

var G__40948 = (i__18584__auto___40947 + (1));
i__18584__auto___40947 = G__40948;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__40943){
var map__40944 = p__40943;
var map__40944__$1 = ((((!((map__40944 == null)))?((((map__40944.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40944.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40944):map__40944);
var opts = map__40944__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq40942){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40942));
});

//# sourceMappingURL=client.js.map?rel=1452702639335