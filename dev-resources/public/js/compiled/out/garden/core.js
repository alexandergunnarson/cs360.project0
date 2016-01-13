// Compiled by ClojureScript 1.7.170 {}
goog.provide('garden.core');
goog.require('cljs.core');
goog.require('garden.compiler');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
garden.core.css = (function garden$core$css(var_args){
var args__18590__auto__ = [];
var len__18583__auto___31836 = arguments.length;
var i__18584__auto___31837 = (0);
while(true){
if((i__18584__auto___31837 < len__18583__auto___31836)){
args__18590__auto__.push((arguments[i__18584__auto___31837]));

var G__31838 = (i__18584__auto___31837 + (1));
i__18584__auto___31837 = G__31838;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.call(null,garden.compiler.compile_css,rules);
});

garden.core.css.cljs$lang$maxFixedArity = (0);

garden.core.css.cljs$lang$applyTo = (function (seq31835){
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31835));
});
/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
garden.core.style = (function garden$core$style(var_args){
var args__18590__auto__ = [];
var len__18583__auto___31840 = arguments.length;
var i__18584__auto___31841 = (0);
while(true){
if((i__18584__auto___31841 < len__18583__auto___31840)){
args__18590__auto__.push((arguments[i__18584__auto___31841]));

var G__31842 = (i__18584__auto___31841 + (1));
i__18584__auto___31841 = G__31842;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return garden.compiler.compile_style.call(null,maps);
});

garden.core.style.cljs$lang$maxFixedArity = (0);

garden.core.style.cljs$lang$applyTo = (function (seq31839){
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31839));
});

//# sourceMappingURL=core.js.map?rel=1452702628346