// Compiled by ClojureScript 1.7.170 {}

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns cmacros]
*/
goog.provide('quantum.core.error.try_catch');
goog.require('cljs.core');
goog.require('clojure.core.rrb_vector');
goog.require('quantum.core.macros.core');
goog.require('cljs.core');
goog.require('quantum.core.ns');
goog.require('clojure.string');
goog.require('quantum.core.collections.base');
quantum.core.error.try_catch.throw_arg = (function quantum$core$error$try_catch$throw_arg(var_args){
var args__18590__auto__ = [];
var len__18583__auto___37369 = arguments.length;
var i__18584__auto___37370 = (0);
while(true){
if((i__18584__auto___37370 < len__18583__auto___37369)){
args__18590__auto__.push((arguments[i__18584__auto___37370]));

var G__37371 = (i__18584__auto___37370 + (1));
i__18584__auto___37370 = G__37371;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.core.error.try_catch.throw_arg.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.core.error.try_catch.throw_arg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
throw (new Error(cljs.core.apply.call(null,cljs.core.str,args)));
});

quantum.core.error.try_catch.throw_arg.cljs$lang$maxFixedArity = (0);

quantum.core.error.try_catch.throw_arg.cljs$lang$applyTo = (function (seq37368){
return quantum.core.error.try_catch.throw_arg.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37368));
});
/**
 * Makes a throw context from a throwable or explicit arguments
 */
quantum.core.error.try_catch.make_context = (function quantum$core$error$try_catch$make_context(var_args){
var args37372 = [];
var len__18583__auto___37375 = arguments.length;
var i__18584__auto___37376 = (0);
while(true){
if((i__18584__auto___37376 < len__18583__auto___37375)){
args37372.push((arguments[i__18584__auto___37376]));

var G__37377 = (i__18584__auto___37376 + (1));
i__18584__auto___37376 = G__37377;
continue;
} else {
}
break;
}

var G__37374 = args37372.length;
switch (G__37374) {
case 1:
return quantum.core.error.try_catch.make_context.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return quantum.core.error.try_catch.make_context.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37372.length)].join('')));

}
});

quantum.core.error.try_catch.make_context.cljs$core$IFn$_invoke$arity$1 = (function (t){
return quantum.core.error.try_catch.make_context.call(null,t,t.message,"",t.stack);
});

quantum.core.error.try_catch.make_context.cljs$core$IFn$_invoke$arity$4 = (function (object,message,cause,stack_trace){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"object","object",1474613949),object,new cljs.core.Keyword(null,"message","message",-406056002),message,new cljs.core.Keyword(null,"cause","cause",231901252),cause,new cljs.core.Keyword(null,"stack-trace","stack-trace",-1998072032),stack_trace], null);
});

quantum.core.error.try_catch.make_context.cljs$lang$maxFixedArity = 4;
/**
 * Returns a context wrapper given a context
 */
quantum.core.error.try_catch.wrap = (function quantum$core$error$try_catch$wrap(p__37379){
var map__37383 = p__37379;
var map__37383__$1 = ((((!((map__37383 == null)))?((((map__37383.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37383.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37383):map__37383);
var object = cljs.core.get.call(null,map__37383__$1,new cljs.core.Keyword(null,"object","object",1474613949));
var message = cljs.core.get.call(null,map__37383__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var cause = cljs.core.get.call(null,map__37383__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var stack_trace = cljs.core.get.call(null,map__37383__$1,new cljs.core.Keyword(null,"stack-trace","stack-trace",-1998072032));
var data = ((cljs.core.map_QMARK_.call(null,object))?object:cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object","object",1474613949),object], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("quantum.core.error.try-catch","wrapper?","quantum.core.error.try-catch/wrapper?",-1014712782),true], null)));
var G__37385 = cljs.core.ex_info.call(null,message,data,cause);
cljs.core.identity.call(null,G__37385);

return G__37385;
});
/**
 * If t is a context wrapper or other IExceptionInfo, returns the
 *   corresponding context with t assoc'd as the value for :wrapper, else
 *   returns nil
 */
quantum.core.error.try_catch.unwrap = (function quantum$core$error$try_catch$unwrap(t){
var temp__4423__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__4423__auto__)){
var data = temp__4423__auto__;
return cljs.core.assoc.call(null,quantum.core.error.try_catch.make_context.call(null,t),new cljs.core.Keyword(null,"object","object",1474613949),(cljs.core.truth_(new cljs.core.Keyword("quantum.core.error.try-catch","wrapper?","quantum.core.error.try-catch/wrapper?",-1014712782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,data)))?new cljs.core.Keyword(null,"object","object",1474613949).cljs$core$IFn$_invoke$arity$1(data):data),new cljs.core.Keyword(null,"wrapper","wrapper",-969103524),t);
} else {
return null;
}
});
/**
 * Searches Throwable t and its cause chain for a context wrapper or
 *   other IExceptionInfo. If one is found, returns the corresponding
 *   context with the wrapper assoc'd as the value for :wrapper, else
 *   returns nil.
 */
quantum.core.error.try_catch.unwrap_all = (function quantum$core$error$try_catch$unwrap_all(t){
return quantum.core.error.try_catch.unwrap.call(null,t);
});
/**
 * Returns a Throwable given a context: the object in context if it's
 *   a Throwable, else a Throwable context wrapper
 */
quantum.core.error.try_catch.get_throwable = (function quantum$core$error$try_catch$get_throwable(p__37386){
var map__37389 = p__37386;
var map__37389__$1 = ((((!((map__37389 == null)))?((((map__37389.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37389.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37389):map__37389);
var context = map__37389__$1;
var object = cljs.core.get.call(null,map__37389__$1,new cljs.core.Keyword(null,"object","object",1474613949));
if((object instanceof Error)){
return object;
} else {
return quantum.core.error.try_catch.wrap.call(null,context);
}
});
/**
 * Returns a context given a Throwable t. If t or any Throwable in its
 *   cause chain is a context wrapper or other IExceptionInfo, returns
 *   the corresponding context with the wrapper assoc'd as the value
 *   for :wrapper and t assoc'd as the value for :throwable. Otherwise
 *   creates a new context based on t with t assoc'd as the value
 *   for :throwable.
 */
quantum.core.error.try_catch.get_context = (function quantum$core$error$try_catch$get_context(t){
return cljs.core.assoc.call(null,(function (){var or__17525__auto__ = quantum.core.error.try_catch.unwrap_all.call(null,t);
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return quantum.core.error.try_catch.make_context.call(null,t);
}
})(),new cljs.core.Keyword(null,"throwable","throwable",1200921851),t);
});
/**
 * Returns a vector of seqs containing the expressions, catch clauses,
 *   and finally clauses in a try+ body, or throws if the body's structure
 *   is invalid
 */
quantum.core.error.try_catch.parse_try_PLUS_ = (function quantum$core$error$try_catch$parse_try_PLUS_(body){
var item_type = (function quantum$core$error$try_catch$parse_try_PLUS__$_item_type(item){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"catch","catch",-1616370245,null),new cljs.core.Keyword(null,"catch-clause","catch-clause",-1881456833),new cljs.core.Symbol(null,"else","else",132154381,null),new cljs.core.Keyword(null,"else-clause","else-clause",-314048891),new cljs.core.Symbol(null,"finally","finally",-1065347064,null),new cljs.core.Keyword(null,"finally-clause","finally-clause",-1033009960)], null).call(null,(function (){var and__17513__auto__ = cljs.core.seq_QMARK_.call(null,item);
if(and__17513__auto__){
return cljs.core.first.call(null,item);
} else {
return and__17513__auto__;
}
})(),new cljs.core.Keyword(null,"expression","expression",202311876));
});
var match_or_defer = (function quantum$core$error$try_catch$parse_try_PLUS__$_match_or_defer(s,type){
if(cljs.core._EQ_.call(null,item_type.call(null,cljs.core.ffirst.call(null,s)),type)){
return s;
} else {
return cljs.core.cons.call(null,null,s);
}
});
var groups = cljs.core.partition_by.call(null,item_type,body);
var vec__37395 = match_or_defer.call(null,groups,new cljs.core.Keyword(null,"expression","expression",202311876));
var e = cljs.core.nth.call(null,vec__37395,(0),null);
var groups__$1 = cljs.core.nthnext.call(null,vec__37395,(1));
var vec__37396 = match_or_defer.call(null,groups__$1,new cljs.core.Keyword(null,"catch-clause","catch-clause",-1881456833));
var c = cljs.core.nth.call(null,vec__37396,(0),null);
var groups__$2 = cljs.core.nthnext.call(null,vec__37396,(1));
var vec__37397 = match_or_defer.call(null,groups__$2,new cljs.core.Keyword(null,"else-clause","else-clause",-314048891));
var l = cljs.core.nth.call(null,vec__37397,(0),null);
var groups__$3 = cljs.core.nthnext.call(null,vec__37397,(1));
var vec__37398 = match_or_defer.call(null,groups__$3,new cljs.core.Keyword(null,"finally-clause","finally-clause",-1033009960));
var f = cljs.core.nth.call(null,vec__37398,(0),null);
var groups__$4 = cljs.core.nthnext.call(null,vec__37398,(1));
if(cljs.core.every_QMARK_.call(null,cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [groups__$4,cljs.core.next.call(null,l),cljs.core.next.call(null,f)], null))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,c,cljs.core.first.call(null,l),cljs.core.first.call(null,f)], null);
} else {
return quantum.core.error.try_catch.throw_arg.call(null,"try+ form must match: ","(try+ expression* catch-clause* else-clause? finally-clause?)");
}
});
/**
 * https://github.com/scgilardi/slingshot/
 */
quantum.core.error.try_catch._STAR_catch_hook_STAR_ = cljs.core.identity;
/**
 * Returns either nil or a list containing a finally clause for a try
 *   form based on the parsed else and/or finally clause from a try+
 *   form
 */
quantum.core.error.try_catch.gen_finally = (function quantum$core$error$try_catch$gen_finally(else_clause,finally_clause,threw_QMARK__sym){
if(cljs.core.truth_(else_clause)){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"finally","finally",-1065347064,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"try","try",-1273693247,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,threw_QMARK__sym))))),cljs.core.rest.call(null,else_clause))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,(cljs.core.truth_(finally_clause)?finally_clause:null))))))))));
} else {
if(cljs.core.truth_(finally_clause)){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,finally_clause);
} else {
return null;
}
}
});
/**
 * Returns the current stack trace beginning at the caller's frame
 */
quantum.core.error.try_catch.stack_trace = (function quantum$core$error$try_catch$stack_trace(){
return cljs.core.rest.call(null,cljs.core.rest.call(null,clojure.string.split.call(null,(new Error()).stack,"\n")));
});
/**
 * Returns a vector containing the message and cause that result from
 *   processing the arguments to throw+
 */
quantum.core.error.try_catch.parse_throw_PLUS_ = (function quantum$core$error$try_catch$parse_throw_PLUS_(var_args){
var args__18590__auto__ = [];
var len__18583__auto___37404 = arguments.length;
var i__18584__auto___37405 = (0);
while(true){
if((i__18584__auto___37405 < len__18583__auto___37404)){
args__18590__auto__.push((arguments[i__18584__auto___37405]));

var G__37406 = (i__18584__auto___37405 + (1));
i__18584__auto___37405 = G__37406;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((2) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((2)),(0))):null);
return quantum.core.error.try_catch.parse_throw_PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18591__auto__);
});

quantum.core.error.try_catch.parse_throw_PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (object,cause,args){
var vec__37402 = (((cljs.core.empty_QMARK_.call(null,args)) || (typeof cljs.core.first.call(null,args) === 'string'))?cljs.core.cons.call(null,cause,args):args);
var cause__$1 = cljs.core.nth.call(null,vec__37402,(0),null);
var args__$1 = cljs.core.nthnext.call(null,vec__37402,(1));
var vec__37403 = ((cljs.core.next.call(null,args__$1))?args__$1:((cljs.core.seq.call(null,args__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.first.call(null,args__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["throw+: ",cljs.core.pr_str.call(null,object)], null)
));
var fmt = cljs.core.nth.call(null,vec__37403,(0),null);
var args__$2 = cljs.core.nthnext.call(null,vec__37403,(1));
var message = cljs.core.apply.call(null,cljs.core.str,fmt,args__$2);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [message,cause__$1], null);
});

quantum.core.error.try_catch.parse_throw_PLUS_.cljs$lang$maxFixedArity = (2);

quantum.core.error.try_catch.parse_throw_PLUS_.cljs$lang$applyTo = (function (seq37399){
var G__37400 = cljs.core.first.call(null,seq37399);
var seq37399__$1 = cljs.core.next.call(null,seq37399);
var G__37401 = cljs.core.first.call(null,seq37399__$1);
var seq37399__$2 = cljs.core.next.call(null,seq37399__$1);
return quantum.core.error.try_catch.parse_throw_PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__37400,G__37401,seq37399__$2);
});
quantum.core.error.try_catch.default_throw_hook = (function quantum$core$error$try_catch$default_throw_hook(context){
var throwable_obj = quantum.core.error.try_catch.get_throwable.call(null,context);
throw throwable_obj;
});
/**
 * Hook to allow overriding the behavior of throw+. Must be
 *   bound to a function of one argument, a context map. Defaults to
 *   default-throw-hook.
 */
quantum.core.error.try_catch._STAR_throw_hook_STAR_ = quantum.core.error.try_catch.default_throw_hook;
/**
 * Helper to throw a context based on arguments and &env from throw+
 */
quantum.core.error.try_catch.throw_fn = (function quantum$core$error$try_catch$throw_fn(var_args){
var args__18590__auto__ = [];
var len__18583__auto___37415 = arguments.length;
var i__18584__auto___37416 = (0);
while(true){
if((i__18584__auto___37416 < len__18583__auto___37415)){
args__18590__auto__.push((arguments[i__18584__auto___37416]));

var G__37417 = (i__18584__auto___37416 + (1));
i__18584__auto___37416 = G__37417;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((3) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((3)),(0))):null);
return quantum.core.error.try_catch.throw_fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__18591__auto__);
});

quantum.core.error.try_catch.throw_fn.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__37411,stack_trace,args){
var map__37412 = p__37411;
var map__37412__$1 = ((((!((map__37412 == null)))?((((map__37412.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37412.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37412):map__37412);
var cause = cljs.core.get.call(null,map__37412__$1,new cljs.core.Keyword(null,"throwable","throwable",1200921851));
var vec__37414 = cljs.core.apply.call(null,quantum.core.error.try_catch.parse_throw_PLUS_,object,cause,args);
var message = cljs.core.nth.call(null,vec__37414,(0),null);
var cause__$1 = cljs.core.nth.call(null,vec__37414,(1),null);
var context = quantum.core.error.try_catch.make_context.call(null,object,message,cause__$1,stack_trace);
return quantum.core.error.try_catch._STAR_throw_hook_STAR_.call(null,context);
});

quantum.core.error.try_catch.throw_fn.cljs$lang$maxFixedArity = (3);

quantum.core.error.try_catch.throw_fn.cljs$lang$applyTo = (function (seq37407){
var G__37408 = cljs.core.first.call(null,seq37407);
var seq37407__$1 = cljs.core.next.call(null,seq37407);
var G__37409 = cljs.core.first.call(null,seq37407__$1);
var seq37407__$2 = cljs.core.next.call(null,seq37407__$1);
var G__37410 = cljs.core.first.call(null,seq37407__$2);
var seq37407__$3 = cljs.core.next.call(null,seq37407__$2);
return quantum.core.error.try_catch.throw_fn.cljs$core$IFn$_invoke$arity$variadic(G__37408,G__37409,G__37410,seq37407__$3);
});
quantum.core.error.try_catch.get_throw_context = (function quantum$core$error$try_catch$get_throw_context(t){
return quantum.core.error.try_catch.get_context.call(null,t);
});
quantum.core.error.try_catch.get_thrown_object = (function quantum$core$error$try_catch$get_thrown_object(t){
return new cljs.core.Keyword(null,"object","object",1474613949).cljs$core$IFn$_invoke$arity$1(quantum.core.error.try_catch.get_throw_context.call(null,t));
});

//# sourceMappingURL=try_catch.js.map?rel=1452702558683
/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns cmacros]
*/
