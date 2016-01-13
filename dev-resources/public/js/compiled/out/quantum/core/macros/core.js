// Compiled by ClojureScript 1.7.170 {}
goog.provide('quantum.core.macros.core');
goog.require('cljs.core');
/**
 * Take the &env from a macro, and tell whether it is expanding into CLJS.
 */
quantum.core.macros.core.cljs_env_QMARK_ = (function quantum$core$macros$core$cljs_env_QMARK_(env){
return cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
});
quantum.core.macros.core.if_cljs = (function quantum$core$macros$core$if_cljs(env,then,else$){
if(cljs.core.truth_(quantum.core.macros.core.cljs_env_QMARK_.call(null,env))){
return then;
} else {
return else$;
}
});
quantum.core.macros.core.hint_meta = (function quantum$core$macros$core$hint_meta(sym,hint){
return cljs.core.with_meta.call(null,sym,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),hint], null));
});

//# sourceMappingURL=core.js.map?rel=1452702553522