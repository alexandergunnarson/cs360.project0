// Compiled by ClojureScript 1.7.170 {}

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn logic]
*/
goog.provide('quantum.core.analyze.clojure.predicates');
goog.require('cljs.core');
goog.require('clojure.core.rrb_vector');
goog.require('quantum.core.logic');
goog.require('cljs.core');
goog.require('quantum.core.function$');
goog.require('quantum.core.ns');
goog.require('quantum.core.type.core');
goog.require('clojure.string');
quantum.core.analyze.clojure.predicates.name = (function quantum$core$analyze$clojure$predicates$name(x){
if((x == null)){
return null;
} else {
return cljs.core.name.call(null,x);
}
});
/**
 * Returns a symbol representing the tagged class of the symbol, or |nil| if none exists.
 */
quantum.core.analyze.clojure.predicates.type_hint = (function quantum$core$analyze$clojure$predicates$type_hint(x){
var temp__4425__auto__ = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,x));
if(cljs.core.truth_(temp__4425__auto__)){
var tag = temp__4425__auto__;
var sym = cljs.core.symbol.call(null,quantum.core.analyze.clojure.predicates.name.call(null,tag)
);
return sym;

} else {
return null;
}
});
quantum.core.analyze.clojure.predicates.symbol_eq_QMARK_ = (function quantum$core$analyze$clojure$predicates$symbol_eq_QMARK_(s1,s2){
return cljs.core._EQ_.call(null,quantum.core.analyze.clojure.predicates.name.call(null,s1),quantum.core.analyze.clojure.predicates.name.call(null,s2));
});
quantum.core.analyze.clojure.predicates.qualified_QMARK_ = (function quantum$core$analyze$clojure$predicates$qualified_QMARK_(sym){
return cljs.core.not_EQ_.call(null,[cljs.core.str(sym)].join('').indexOf("/"),(-1));
});
quantum.core.analyze.clojure.predicates.unqualify = (function quantum$core$analyze$clojure$predicates$unqualify(sym){
return cljs.core.symbol.call(null,quantum.core.analyze.clojure.predicates.name.call(null,sym));
});
quantum.core.analyze.clojure.predicates.auto_genned_QMARK_ = (function quantum$core$analyze$clojure$predicates$auto_genned_QMARK_(sym){
return quantum.core.analyze.clojure.predicates.name.call(null,sym).endsWith("__auto__");
});
quantum.core.analyze.clojure.predicates.possible_type_predicate_QMARK_ = (function quantum$core$analyze$clojure$predicates$possible_type_predicate_QMARK_(G__33651){
var or__17525__auto__ = (G__33651 instanceof cljs.core.Keyword);
if(or__17525__auto__){
return or__17525__auto__;
} else {
return ((function (or__17525__auto__){
return (function (G__33655){
var and__17513__auto__ = (G__33655 instanceof cljs.core.Symbol);
if(and__17513__auto__){
return ((function (and__17513__auto__,or__17525__auto__){
return (function (x__25385__auto__){
return quantum.core.analyze.clojure.predicates.name.call(null,x__25385__auto__).contains("?");
});})(and__17513__auto__,or__17525__auto__))
.call(null,G__33655);
} else {
return and__17513__auto__;
}
});})(or__17525__auto__))
.call(null,G__33651);
}
});
quantum.core.analyze.clojure.predicates.hinted_literal_QMARK_ = (function quantum$core$analyze$clojure$predicates$hinted_literal_QMARK_(G__33656){
return (typeof G__33656 === 'number') || (typeof G__33656 === 'string') || (cljs.core.vector_QMARK_.call(null,G__33656)) || (cljs.core.map_QMARK_.call(null,G__33656)) || ((G__33656 == null)) || ((G__33656 instanceof cljs.core.Keyword));
});
quantum.core.analyze.clojure.predicates.shadows_var_QMARK_ = (function quantum$core$analyze$clojure$predicates$shadows_var_QMARK_(bindings,v){
return cljs.core.contains_QMARK_.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,quantum.core.analyze.clojure.predicates.name,cljs.core.keys.call(null,cljs.core.apply.call(null,cljs.core.hash_map,bindings)))),quantum.core.analyze.clojure.predicates.name.call(null,v));
});
quantum.core.analyze.clojure.predicates.new_scope_QMARK_ = (function quantum$core$analyze$clojure$predicates$new_scope_QMARK_(G__33657){
return (cljs.core.seq_QMARK_.call(null,G__33657)) && ((function (x__25385__auto__){
return (cljs.core.first.call(null,x__25385__auto__) instanceof cljs.core.Symbol);
}).call(null,G__33657)) && ((function (x__25385__auto__){
return cljs.core._EQ_.call(null,quantum.core.analyze.clojure.predicates.name.call(null,cljs.core.first.call(null,x__25385__auto__)),"let");
}).call(null,G__33657));
});
quantum.core.analyze.clojure.predicates.first_variadic_QMARK_ = (function quantum$core$analyze$clojure$predicates$first_variadic_QMARK_(x__25385__auto__){
return cljs.core._EQ_.call(null,quantum.core.analyze.clojure.predicates.name.call(null,cljs.core.first.call(null,x__25385__auto__)),"&");
});
quantum.core.analyze.clojure.predicates.variadic_arglist_QMARK_ = (function quantum$core$analyze$clojure$predicates$variadic_arglist_QMARK_(x__25385__auto__){
return cljs.core._EQ_.call(null,(function (){var obj_f__25705__auto__ = cljs.core.last.call(null,cljs.core.butlast.call(null,x__25385__auto__));
if((obj_f__25705__auto__ == null)){
return cljs.core.constantly.call(null,null).call(null,obj_f__25705__auto__);
} else {
return quantum.core.analyze.clojure.predicates.name.call(null,obj_f__25705__auto__);
}
})(),"&");
});
quantum.core.analyze.clojure.predicates.arity_type = (function quantum$core$analyze$clojure$predicates$arity_type(arglist){
if(cljs.core.truth_(quantum.core.analyze.clojure.predicates.variadic_arglist_QMARK_.call(null,arglist))){
return new cljs.core.Keyword(null,"variadic","variadic",882626057);
} else {
return new cljs.core.Keyword(null,"fixed","fixed",-562004358);
}
});
quantum.core.analyze.clojure.predicates.arglist_arity = (function quantum$core$analyze$clojure$predicates$arglist_arity(arg__25729__auto__){
var obj_f__25705__auto__ = arg__25729__auto__;
if(cljs.core.truth_(quantum.core.analyze.clojure.predicates.variadic_arglist_QMARK_.call(null,obj_f__25705__auto__))){
return ((function (obj_f__25705__auto__){
return (function (x__25385__auto__){
return (cljs.core.count.call(null,x__25385__auto__) - (1));
});})(obj_f__25705__auto__))
.call(null,obj_f__25705__auto__);
} else {
return cljs.core.count.call(null,obj_f__25705__auto__);
}
});
quantum.core.analyze.clojure.predicates.form_and_begins_with_QMARK_ = (function quantum$core$analyze$clojure$predicates$form_and_begins_with_QMARK_(sym){
return (function (G__33659){
return (cljs.core.seq_QMARK_.call(null,G__33659)) && ((function (x__25385__auto__){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,x__25385__auto__),sym);
}).call(null,G__33659));
});
});
quantum.core.analyze.clojure.predicates.form_and_begins_with_any_QMARK_ = (function quantum$core$analyze$clojure$predicates$form_and_begins_with_any_QMARK_(set_n){
return (function (G__33661){
var and__17513__auto__ = cljs.core.seq_QMARK_.call(null,G__33661);
if(and__17513__auto__){
return ((function (and__17513__auto__){
return (function (x){
return cljs.core.apply.call(null,quantum.core.logic.splice_or,cljs.core.first.call(null,x),cljs.core._EQ_,set_n);
});})(and__17513__auto__))
.call(null,G__33661);
} else {
return and__17513__auto__;
}
});
});
quantum.core.analyze.clojure.predicates.else_pred_QMARK_ = (function quantum$core$analyze$clojure$predicates$else_pred_QMARK_(G__33662){
return ((function (x__25385__auto__){
return cljs.core._EQ_.call(null,x__25385__auto__,new cljs.core.Keyword(null,"else","else",-1508377146));
}).call(null,G__33662)) || ((function (x__25385__auto__){
return cljs.core._EQ_.call(null,x__25385__auto__,true);
}).call(null,G__33662));
});
quantum.core.analyze.clojure.predicates.str_expression_QMARK_ = (function quantum$core$analyze$clojure$predicates$str_expression_QMARK_(G__33663){
return (cljs.core.seq_QMARK_.call(null,G__33663)) && ((function (x__25385__auto__){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,x__25385__auto__),new cljs.core.Symbol(null,"str","str",-1564826950,null));
}).call(null,G__33663));
});
quantum.core.analyze.clojure.predicates.string_concatable_QMARK_ = (function quantum$core$analyze$clojure$predicates$string_concatable_QMARK_(G__33664){
var or__17525__auto__ = typeof G__33664 === 'string';
if(or__17525__auto__){
return or__17525__auto__;
} else {
return quantum.core.analyze.clojure.predicates.str_expression_QMARK_.call(null,G__33664);
}
});
quantum.core.analyze.clojure.predicates.sym_call_QMARK_ = (function quantum$core$analyze$clojure$predicates$sym_call_QMARK_(G__33665){
return (cljs.core.seq_QMARK_.call(null,G__33665)) && ((function (x__25385__auto__){
return (cljs.core.first.call(null,x__25385__auto__) instanceof cljs.core.Symbol);
}).call(null,G__33665));
});
var orig_var__2273__auto___33666 = new cljs.core.Var(function(){return quantum.core.analyze.clojure.predicates.sym_call_QMARK_;},new cljs.core.Symbol("quantum.core.analyze.clojure.predicates","sym-call?","quantum.core.analyze.clojure.predicates/sym-call?",-125479735,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"quantum.core.analyze.clojure.predicates","quantum.core.analyze.clojure.predicates",-741097361,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Clojure (and variants) code analysis namespace.\n            Required for quantum.core.macros."], null)),new cljs.core.Symbol(null,"sym-call?","sym-call?",225112933,null),"src/cljc/quantum/core/analyze/clojure/predicates.cljc",15,1,85,85,cljs.core.List.EMPTY,null,(cljs.core.truth_(quantum.core.analyze.clojure.predicates.sym_call_QMARK_)?quantum.core.analyze.clojure.predicates.sym_call_QMARK_.cljs$lang$test:null)]));
quantum.core.analyze.clojure.predicates.s_expr_QMARK_ = cljs.core.with_meta.call(null,cljs.core.deref.call(null,new cljs.core.Var(function(){return quantum.core.analyze.clojure.predicates.sym_call_QMARK_;},new cljs.core.Symbol("quantum.core.analyze.clojure.predicates","sym-call?","quantum.core.analyze.clojure.predicates/sym-call?",-125479735,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"quantum.core.analyze.clojure.predicates","quantum.core.analyze.clojure.predicates",-741097361,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Clojure (and variants) code analysis namespace.\n            Required for quantum.core.macros."], null)),new cljs.core.Symbol(null,"sym-call?","sym-call?",225112933,null),"src/cljc/quantum/core/analyze/clojure/predicates.cljc",15,1,85,85,cljs.core.List.EMPTY,null,(cljs.core.truth_(quantum.core.analyze.clojure.predicates.sym_call_QMARK_)?quantum.core.analyze.clojure.predicates.sym_call_QMARK_.cljs$lang$test:null)]))),cljs.core.meta.call(null,new cljs.core.Var(function(){return quantum.core.analyze.clojure.predicates.sym_call_QMARK_;},new cljs.core.Symbol("quantum.core.analyze.clojure.predicates","sym-call?","quantum.core.analyze.clojure.predicates/sym-call?",-125479735,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"quantum.core.analyze.clojure.predicates","quantum.core.analyze.clojure.predicates",-741097361,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Clojure (and variants) code analysis namespace.\n            Required for quantum.core.macros."], null)),new cljs.core.Symbol(null,"sym-call?","sym-call?",225112933,null),"src/cljc/quantum/core/analyze/clojure/predicates.cljc",15,1,85,85,cljs.core.List.EMPTY,null,(cljs.core.truth_(quantum.core.analyze.clojure.predicates.sym_call_QMARK_)?quantum.core.analyze.clojure.predicates.sym_call_QMARK_.cljs$lang$test:null)]))));

if(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,orig_var__2273__auto___33666)) === true){
cljs.core.alter_meta_BANG_.call(null,new cljs.core.Var(function(){return quantum.core.analyze.clojure.predicates.s_expr_QMARK_;},new cljs.core.Symbol("quantum.core.analyze.clojure.predicates","s-expr?","quantum.core.analyze.clojure.predicates/s-expr?",1734753735,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"quantum.core.analyze.clojure.predicates","quantum.core.analyze.clojure.predicates",-741097361,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Clojure (and variants) code analysis namespace.\n            Required for quantum.core.macros."], null)),new cljs.core.Symbol(null,"s-expr?","s-expr?",1950997091,null),"src/cljc/quantum/core/analyze/clojure/predicates.cljc",18,1,86,86,cljs.core.List.EMPTY,null,(cljs.core.truth_(quantum.core.analyze.clojure.predicates.s_expr_QMARK_)?quantum.core.analyze.clojure.predicates.s_expr_QMARK_.cljs$lang$test:null)])),cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
} else {
}


new cljs.core.Var(function(){return quantum.core.analyze.clojure.predicates.s_expr_QMARK_;},new cljs.core.Symbol("quantum.core.analyze.clojure.predicates","s-expr?","quantum.core.analyze.clojure.predicates/s-expr?",1734753735,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"quantum.core.analyze.clojure.predicates","quantum.core.analyze.clojure.predicates",-741097361,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Clojure (and variants) code analysis namespace.\n            Required for quantum.core.macros."], null)),new cljs.core.Symbol(null,"s-expr?","s-expr?",1950997091,null),"src/cljc/quantum/core/analyze/clojure/predicates.cljc",18,1,86,86,cljs.core.List.EMPTY,null,(cljs.core.truth_(quantum.core.analyze.clojure.predicates.s_expr_QMARK_)?quantum.core.analyze.clojure.predicates.s_expr_QMARK_.cljs$lang$test:null)]));
quantum.core.analyze.clojure.predicates.constructor_QMARK_ = (function quantum$core$analyze$clojure$predicates$constructor_QMARK_(G__33667){
var and__17513__auto__ = quantum.core.analyze.clojure.predicates.sym_call_QMARK_.call(null,G__33667);
if(cljs.core.truth_(and__17513__auto__)){
return ((function (and__17513__auto__){
return (function (x__25385__auto__){
return quantum.core.analyze.clojure.predicates.name.call(null,cljs.core.first.call(null,x__25385__auto__)).endsWith(".");
});})(and__17513__auto__))
.call(null,G__33667);
} else {
return and__17513__auto__;
}
});
quantum.core.analyze.clojure.predicates.return_statement_QMARK_ = quantum.core.analyze.clojure.predicates.form_and_begins_with_QMARK_.call(null,new cljs.core.Symbol(null,"return","return",-250970578,null));
quantum.core.analyze.clojure.predicates.defn_statement_QMARK_ = quantum.core.analyze.clojure.predicates.form_and_begins_with_QMARK_.call(null,new cljs.core.Symbol(null,"defn","defn",-126010802,null));
quantum.core.analyze.clojure.predicates.fn_statement_QMARK_ = quantum.core.analyze.clojure.predicates.form_and_begins_with_QMARK_.call(null,new cljs.core.Symbol(null,"fn","fn",465265323,null));
quantum.core.analyze.clojure.predicates.function_statement_QMARK_ = (function quantum$core$analyze$clojure$predicates$function_statement_QMARK_(G__33668){
var or__17525__auto__ = quantum.core.analyze.clojure.predicates.defn_statement_QMARK_.call(null,G__33668);
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return quantum.core.analyze.clojure.predicates.fn_statement_QMARK_.call(null,G__33668);
}
});
quantum.core.analyze.clojure.predicates.scope_QMARK_ = quantum.core.analyze.clojure.predicates.form_and_begins_with_any_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol(null,"while","while",-1691317983,null),null,new cljs.core.Symbol(null,"doseq","doseq",221164135,null),null,new cljs.core.Symbol(null,"fn","fn",465265323,null),null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,new cljs.core.Symbol(null,"when","when",1064114221,null),null,new cljs.core.Symbol(null,"defn","defn",-126010802,null),null,new cljs.core.Symbol(null,"for","for",316745208,null),null], null), null));
quantum.core.analyze.clojure.predicates.let_statement_QMARK_ = quantum.core.analyze.clojure.predicates.form_and_begins_with_QMARK_.call(null,new cljs.core.Symbol(null,"let","let",358118826,null));
quantum.core.analyze.clojure.predicates.do_statement_QMARK_ = quantum.core.analyze.clojure.predicates.form_and_begins_with_QMARK_.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null));
quantum.core.analyze.clojure.predicates.if_statement_QMARK_ = quantum.core.analyze.clojure.predicates.form_and_begins_with_QMARK_.call(null,new cljs.core.Symbol(null,"if","if",1181717262,null));
quantum.core.analyze.clojure.predicates.cond_statement_QMARK_ = quantum.core.analyze.clojure.predicates.form_and_begins_with_QMARK_.call(null,new cljs.core.Symbol(null,"cond","cond",1606708055,null));
quantum.core.analyze.clojure.predicates.when_statement_QMARK_ = quantum.core.analyze.clojure.predicates.form_and_begins_with_QMARK_.call(null,new cljs.core.Symbol(null,"when","when",1064114221,null));
quantum.core.analyze.clojure.predicates.throw_statement_QMARK_ = quantum.core.analyze.clojure.predicates.form_and_begins_with_QMARK_.call(null,new cljs.core.Symbol(null,"throw","throw",595905694,null));
quantum.core.analyze.clojure.predicates.branching_syms = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"case","case",-1510733573,null),null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,new cljs.core.Symbol(null,"when","when",1064114221,null),null,new cljs.core.Symbol(null,"cond","cond",1606708055,null),null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null], null), null);
quantum.core.analyze.clojure.predicates.branching_expr_QMARK_ = (function quantum$core$analyze$clojure$predicates$branching_expr_QMARK_(G__33669){
var and__17513__auto__ = quantum.core.analyze.clojure.predicates.s_expr_QMARK_.call(null,G__33669);
if(cljs.core.truth_(and__17513__auto__)){
return ((function (and__17513__auto__){
return (function (x__25391__auto__){
return cljs.core.contains_QMARK_.call(null,quantum.core.analyze.clojure.predicates.branching_syms,cljs.core.first.call(null,x__25391__auto__));
});})(and__17513__auto__))
.call(null,G__33669);
} else {
return and__17513__auto__;
}
});
quantum.core.analyze.clojure.predicates.one_branched_QMARK_ = (function quantum$core$analyze$clojure$predicates$one_branched_QMARK_(G__33670){
var or__17525__auto__ = quantum.core.analyze.clojure.predicates.when_statement_QMARK_.call(null,G__33670);
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
var or__17525__auto____$1 = ((function (or__17525__auto__){
return (function (G__33675){
var and__17513__auto__ = quantum.core.analyze.clojure.predicates.if_statement_QMARK_.call(null,G__33675);
if(cljs.core.truth_(and__17513__auto__)){
return ((function (and__17513__auto__,or__17525__auto__){
return (function (x__25385__auto__){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,x__25385__auto__),(3));
});})(and__17513__auto__,or__17525__auto__))
.call(null,G__33675);
} else {
return and__17513__auto__;
}
});})(or__17525__auto__))
.call(null,G__33670);
if(cljs.core.truth_(or__17525__auto____$1)){
return or__17525__auto____$1;
} else {
return ((function (or__17525__auto____$1,or__17525__auto__){
return (function (G__33676){
var and__17513__auto__ = quantum.core.analyze.clojure.predicates.cond_statement_QMARK_.call(null,G__33676);
if(cljs.core.truth_(and__17513__auto__)){
return ((function (and__17513__auto__,or__17525__auto____$1,or__17525__auto__){
return (function (x__25385__auto__){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,x__25385__auto__),(3));
});})(and__17513__auto__,or__17525__auto____$1,or__17525__auto__))
.call(null,G__33676);
} else {
return and__17513__auto__;
}
});})(or__17525__auto____$1,or__17525__auto__))
.call(null,G__33670);
}
}
});
quantum.core.analyze.clojure.predicates.two_branched_QMARK_ = (function quantum$core$analyze$clojure$predicates$two_branched_QMARK_(G__33677){
var or__17525__auto__ = (function (G__33682){
var and__17513__auto__ = quantum.core.analyze.clojure.predicates.if_statement_QMARK_.call(null,G__33682);
if(cljs.core.truth_(and__17513__auto__)){
return ((function (and__17513__auto__){
return (function (x__25385__auto__){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,x__25385__auto__),(4));
});})(and__17513__auto__))
.call(null,G__33682);
} else {
return and__17513__auto__;
}
}).call(null,G__33677);
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return ((function (or__17525__auto__){
return (function (G__33683){
var and__17513__auto__ = quantum.core.analyze.clojure.predicates.cond_statement_QMARK_.call(null,G__33683);
if(cljs.core.truth_(and__17513__auto__)){
var and__17513__auto____$1 = ((function (and__17513__auto__,or__17525__auto__){
return (function (x__25385__auto__){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,x__25385__auto__),(5));
});})(and__17513__auto__,or__17525__auto__))
.call(null,G__33683);
if(and__17513__auto____$1){
return ((function (and__17513__auto____$1,and__17513__auto__,or__17525__auto__){
return (function (x__25385__auto__){
return quantum.core.analyze.clojure.predicates.else_pred_QMARK_.call(null,cljs.core.nth.call(null,x__25385__auto__,(3)));
});})(and__17513__auto____$1,and__17513__auto__,or__17525__auto__))
.call(null,G__33683);
} else {
return and__17513__auto____$1;
}
} else {
return and__17513__auto__;
}
});})(or__17525__auto__))
.call(null,G__33677);
}
});
quantum.core.analyze.clojure.predicates.many_branched_QMARK_ = (function quantum$core$analyze$clojure$predicates$many_branched_QMARK_(G__33684){
var and__17513__auto__ = quantum.core.analyze.clojure.predicates.cond_statement_QMARK_.call(null,G__33684);
if(cljs.core.truth_(and__17513__auto__)){
return ((function (and__17513__auto__){
return (function (G__33688){
return (((function (and__17513__auto__){
return (function (G__33690){
return (((function (and__17513__auto__){
return (function (x__25385__auto__){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,x__25385__auto__),(5));
});})(and__17513__auto__))
.call(null,G__33690)) && (((function (and__17513__auto__){
return (function (x__25385__auto__){
return cljs.core.not.call(null,quantum.core.analyze.clojure.predicates.else_pred_QMARK_.call(null,cljs.core.nth.call(null,x__25385__auto__,(3))));
});})(and__17513__auto__))
.call(null,G__33690));
});})(and__17513__auto__))
.call(null,G__33688)) || (((function (and__17513__auto__){
return (function (x__25385__auto__){
return (cljs.core.count.call(null,x__25385__auto__) > (5));
});})(and__17513__auto__))
.call(null,G__33688));
});})(and__17513__auto__))
.call(null,G__33684);
} else {
return and__17513__auto__;
}
});
quantum.core.analyze.clojure.predicates.conditional_statement_QMARK_ = (function quantum$core$analyze$clojure$predicates$conditional_statement_QMARK_(G__33691){
var or__17525__auto__ = quantum.core.analyze.clojure.predicates.cond_statement_QMARK_.call(null,G__33691);
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
var or__17525__auto____$1 = quantum.core.analyze.clojure.predicates.if_statement_QMARK_.call(null,G__33691);
if(cljs.core.truth_(or__17525__auto____$1)){
return or__17525__auto____$1;
} else {
return quantum.core.analyze.clojure.predicates.when_statement_QMARK_.call(null,G__33691);
}
}
});
quantum.core.analyze.clojure.predicates.cond_foldable_QMARK_ = (function quantum$core$analyze$clojure$predicates$cond_foldable_QMARK_(G__33692){
var and__17513__auto__ = quantum.core.analyze.clojure.predicates.two_branched_QMARK_.call(null,G__33692);
if(cljs.core.truth_(and__17513__auto__)){
return ((function (and__17513__auto__){
return (function (G__33697){
var or__17525__auto__ = ((function (and__17513__auto__){
return (function (G__33699){
var and__17513__auto____$1 = quantum.core.analyze.clojure.predicates.if_statement_QMARK_.call(null,G__33699);
if(cljs.core.truth_(and__17513__auto____$1)){
return ((function (and__17513__auto____$1,and__17513__auto__){
return (function (x__25385__auto__){
return quantum.core.analyze.clojure.predicates.conditional_statement_QMARK_.call(null,cljs.core.nth.call(null,x__25385__auto__,(3)));
});})(and__17513__auto____$1,and__17513__auto__))
.call(null,G__33699);
} else {
return and__17513__auto____$1;
}
});})(and__17513__auto__))
.call(null,G__33697);
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return ((function (or__17525__auto__,and__17513__auto__){
return (function (G__33700){
var and__17513__auto____$1 = quantum.core.analyze.clojure.predicates.cond_statement_QMARK_.call(null,G__33700);
if(cljs.core.truth_(and__17513__auto____$1)){
return ((function (and__17513__auto____$1,or__17525__auto__,and__17513__auto__){
return (function (x__25385__auto__){
return quantum.core.analyze.clojure.predicates.conditional_statement_QMARK_.call(null,cljs.core.nth.call(null,x__25385__auto__,(4)));
});})(and__17513__auto____$1,or__17525__auto__,and__17513__auto__))
.call(null,G__33700);
} else {
return and__17513__auto____$1;
}
});})(or__17525__auto__,and__17513__auto__))
.call(null,G__33697);
}
});})(and__17513__auto__))
.call(null,G__33692);
} else {
return and__17513__auto__;
}
});

//# sourceMappingURL=predicates.js.map?rel=1452702631483
/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn logic]
*/
