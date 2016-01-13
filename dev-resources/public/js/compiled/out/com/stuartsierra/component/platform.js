// Compiled by ClojureScript 1.7.170 {}
goog.provide('com.stuartsierra.component.platform');
goog.require('cljs.core');
com.stuartsierra.component.platform.argument_error = (function com$stuartsierra$component$platform$argument_error(message){
return cljs.core.ex_info.call(null,message,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("com.stuartsierra.component.platform","illegal-argument","com.stuartsierra.component.platform/illegal-argument",-1074189374)], null));
});
/**
 * Returns a string name for the type/class of x.
 */
com.stuartsierra.component.platform.type_name = (function com$stuartsierra$component$platform$type_name(x){
return cljs.core.type__GT_str.call(null,cljs.core.type.call(null,x));
});
/**
 * Returns a new ExceptionInfo with the same details as error and
 *   ex-data as the result of (apply f (ex-data throwable) args).
 */
com.stuartsierra.component.platform.alter_ex_data = (function com$stuartsierra$component$platform$alter_ex_data(var_args){
var args__18590__auto__ = [];
var len__18583__auto___42277 = arguments.length;
var i__18584__auto___42278 = (0);
while(true){
if((i__18584__auto___42278 < len__18583__auto___42277)){
args__18590__auto__.push((arguments[i__18584__auto___42278]));

var G__42279 = (i__18584__auto___42278 + (1));
i__18584__auto___42278 = G__42279;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((2) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((2)),(0))):null);
return com.stuartsierra.component.platform.alter_ex_data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18591__auto__);
});

com.stuartsierra.component.platform.alter_ex_data.cljs$core$IFn$_invoke$arity$variadic = (function (error,f,args){
var ex = cljs.core.ex_info.call(null,cljs.core.ex_message.call(null,error),cljs.core.apply.call(null,f,cljs.core.ex_data.call(null,error),args),cljs.core.ex_cause.call(null,error));
ex.name = error.name;

ex.description = error.description;

ex.number = error.number;

ex.fileName = error.fileName;

ex.lineNumber = error.lineNumber;

ex.columnNumber = error.columnNumber;

ex.stack = error.stack;

return ex;
});

com.stuartsierra.component.platform.alter_ex_data.cljs$lang$maxFixedArity = (2);

com.stuartsierra.component.platform.alter_ex_data.cljs$lang$applyTo = (function (seq42274){
var G__42275 = cljs.core.first.call(null,seq42274);
var seq42274__$1 = cljs.core.next.call(null,seq42274);
var G__42276 = cljs.core.first.call(null,seq42274__$1);
var seq42274__$2 = cljs.core.next.call(null,seq42274__$1);
return com.stuartsierra.component.platform.alter_ex_data.cljs$core$IFn$_invoke$arity$variadic(G__42275,G__42276,seq42274__$2);
});

//# sourceMappingURL=platform.js.map?rel=1452702568122