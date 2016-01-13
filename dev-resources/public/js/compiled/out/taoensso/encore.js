// Compiled by ClojureScript 1.7.170 {}
goog.provide('taoensso.encore');
goog.require('cljs.core');
goog.require('goog.net.XhrIoPool');
goog.require('goog.events');
goog.require('clojure.set');
goog.require('cljs.tools.reader.edn');
goog.require('goog.net.XhrIo');
goog.require('goog.Uri.QueryData');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.string.StringBuffer');
goog.require('goog.net.EventType');
goog.require('goog.structs');
goog.require('goog.string.format');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.net.ErrorCode');
taoensso.encore.as__QMARK_int;
/**
 * Used for lib-consumer version assertions
 */
taoensso.encore.encore_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(31),(3)], null);
taoensso.encore.assert_min_encore_version = (function taoensso$encore$assert_min_encore_version(min_version){
var vec__20422 = taoensso.encore.encore_version;
var xc = cljs.core.nth.call(null,vec__20422,(0),null);
var yc = cljs.core.nth.call(null,vec__20422,(1),null);
var zc = cljs.core.nth.call(null,vec__20422,(2),null);
var vec__20423 = ((cljs.core.vector_QMARK_.call(null,min_version))?min_version:cljs.core.re_seq.call(null,/\d+/,[cljs.core.str(min_version)].join('')));
var xm = cljs.core.nth.call(null,vec__20423,(0),null);
var ym = cljs.core.nth.call(null,vec__20423,(1),null);
var zm = cljs.core.nth.call(null,vec__20423,(2),null);
var vec__20424 = cljs.core.mapv.call(null,((function (vec__20422,xc,yc,zc,vec__20423,xm,ym,zm){
return (function (p1__20418_SHARP_){
var or__17525__auto__ = taoensso.encore.as__QMARK_int.call(null,p1__20418_SHARP_);
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return (0);
}
});})(vec__20422,xc,yc,zc,vec__20423,xm,ym,zm))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm,ym,zm], null));
var xm__$1 = cljs.core.nth.call(null,vec__20424,(0),null);
var ym__$1 = cljs.core.nth.call(null,vec__20424,(1),null);
var zm__$1 = cljs.core.nth.call(null,vec__20424,(2),null);
if(((xc > xm__$1)) || ((cljs.core._EQ_.call(null,xc,xm__$1)) && (((yc > ym__$1)) || ((cljs.core._EQ_.call(null,yc,ym__$1)) && ((zc >= zm__$1)))))){
return null;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Insufficient com.taoensso/encore version. You may have a Leiningen dependency conflict (see http://goo.gl/qBbLvC for solution).")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-version","min-version",-1697197126),clojure.string.join.call(null,".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm__$1,ym__$1,zm__$1], null)),new cljs.core.Keyword(null,"your-version","your-version",-351781765),clojure.string.join.call(null,".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xc,yc,zc], null))], null));
}
});
/**
 * Handles optional docstrings & attr maps for a macro def's name.
 *   Stolen from `clojure.tools.macro`.
 */
taoensso.encore.name_with_attrs = (function taoensso$encore$name_with_attrs(name,macro_args){
var vec__20427 = ((typeof cljs.core.first.call(null,macro_args) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,macro_args),cljs.core.next.call(null,macro_args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,macro_args], null));
var docstring = cljs.core.nth.call(null,vec__20427,(0),null);
var macro_args__$1 = cljs.core.nth.call(null,vec__20427,(1),null);
var vec__20428 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,macro_args__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,macro_args__$1),cljs.core.next.call(null,macro_args__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,macro_args__$1], null));
var attr = cljs.core.nth.call(null,vec__20428,(0),null);
var macro_args__$2 = cljs.core.nth.call(null,vec__20428,(1),null);
var attr__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.call(null,attr,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):attr);
var attr__$2 = (cljs.core.truth_(cljs.core.meta.call(null,name))?cljs.core.conj.call(null,cljs.core.meta.call(null,name),attr__$1):attr__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta.call(null,name,attr__$2),macro_args__$2], null);
});
taoensso.encore.map_keys;

taoensso.encore.kw_identical_QMARK_;
/**
 * Experimental. Attempts to pave over differences in:
 *  `clojure.edn/read-string`, `clojure.tools.edn/read-string`,
 *  `cljs.reader/read-string`, `cljs.tools.reader/read-string`.
 * `cljs.reader` in particular can be a bit of a pain.
 */
taoensso.encore.read_edn = (function taoensso$encore$read_edn(var_args){
var args20429 = [];
var len__18583__auto___20432 = arguments.length;
var i__18584__auto___20433 = (0);
while(true){
if((i__18584__auto___20433 < len__18583__auto___20432)){
args20429.push((arguments[i__18584__auto___20433]));

var G__20434 = (i__18584__auto___20433 + (1));
i__18584__auto___20433 = G__20434;
continue;
} else {
}
break;
}

var G__20431 = args20429.length;
switch (G__20431) {
case 1:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20429.length)].join('')));

}
});

taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1 = (function (s){
return taoensso.encore.read_edn.call(null,null,s);
});

taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
if(((s == null)) || ((s === ""))){
return null;
} else {
if(!(typeof s === 'string')){
throw cljs.core.ex_info.call(null,"`read-edn` attempt against non-nil, non-string arg",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arg","arg",-1747261837),s,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,s)], null));
} else {
var readers = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"readers","readers",-2118263030),new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399));
var default$ = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399));
var readers__$1 = ((cljs.core.not.call(null,taoensso.encore.kw_identical_QMARK_.call(null,readers,new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399))))?readers:taoensso.encore.map_keys.call(null,cljs.core.symbol,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_)));
var default$__$1 = ((cljs.core.not.call(null,taoensso.encore.kw_identical_QMARK_.call(null,default$,new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399))))?default$:cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_));
var opts__$1 = cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"readers","readers",-2118263030),readers__$1,new cljs.core.Keyword(null,"default","default",-1987822328),default$__$1], null));
return cljs.tools.reader.edn.read_string.call(null,opts__$1,s);
}
}
});

taoensso.encore.read_edn.cljs$lang$maxFixedArity = 2;
taoensso.encore.pr_edn = (function taoensso$encore$pr_edn(var_args){
var args20436 = [];
var len__18583__auto___20441 = arguments.length;
var i__18584__auto___20442 = (0);
while(true){
if((i__18584__auto___20442 < len__18583__auto___20441)){
args20436.push((arguments[i__18584__auto___20442]));

var G__20443 = (i__18584__auto___20442 + (1));
i__18584__auto___20442 = G__20443;
continue;
} else {
}
break;
}

var G__20438 = args20436.length;
switch (G__20438) {
case 1:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20436.length)].join('')));

}
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.pr_edn.call(null,null,x);
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2 = (function (_opts,x){
var _STAR_print_level_STAR_20439 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR_20440 = cljs.core._STAR_print_length_STAR_;
cljs.core._STAR_print_level_STAR_ = null;

cljs.core._STAR_print_length_STAR_ = null;

try{return cljs.core.pr_str.call(null,x);
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_20440;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_20439;
}});

taoensso.encore.pr_edn.cljs$lang$maxFixedArity = 2;
taoensso.encore.kw_identical_QMARK_ = cljs.core.keyword_identical_QMARK_;
taoensso.encore.stringy_QMARK_ = (function taoensso$encore$stringy_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || (typeof x === 'string');
});
taoensso.encore.atom_QMARK_ = (function taoensso$encore$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});
taoensso.encore.named_QMARK_ = (function taoensso$encore$named_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4096))) || (x.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
taoensso.encore.chan_QMARK_ = (function taoensso$encore$chan_QMARK_(x){
return (x instanceof cljs.core.async.impl.channels.ManyToManyChannel);
});
taoensso.encore.lazy_seq_QMARK_ = (function taoensso$encore$lazy_seq_QMARK_(x){
return (x instanceof cljs.core.LazySeq);
});
taoensso.encore.re_pattern_QMARK_ = (function taoensso$encore$re_pattern_QMARK_(x){
return (x instanceof RegExp);
});
taoensso.encore.error_QMARK_ = (function taoensso$encore$error_QMARK_(x){
return (x instanceof Error);
});
/**
 * Returns data map iff `x` is an error of any type on platform
 */
taoensso.encore.error_data = (function taoensso$encore$error_data(x){
var temp__4425__auto__ = (function (){var or__17525__auto__ = cljs.core.ex_data.call(null,x);
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
if((x instanceof Error)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return null;
}
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var data_map = temp__4425__auto__;
return cljs.core.merge.call(null,(function (){var err = x;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"err-type","err-type",-116717722),cljs.core.type.call(null,err),new cljs.core.Keyword(null,"err-msg","err-msg",-1158512684),err.message,new cljs.core.Keyword(null,"err-cause","err-cause",897008749),err.cause], null);
})(),data_map);
} else {
return null;
}
});
taoensso.encore.nnil_QMARK_ = (function taoensso$encore$nnil_QMARK_(x){
return !((x == null));
});
taoensso.encore.nblank_QMARK_ = (function taoensso$encore$nblank_QMARK_(x){
return !(clojure.string.blank_QMARK_.call(null,x));
});
taoensso.encore.nneg_QMARK_ = (function taoensso$encore$nneg_QMARK_(x){
return !((x < (0)));
});
taoensso.encore.pos_int_QMARK_ = (function taoensso$encore$pos_int_QMARK_(x){
return (cljs.core.integer_QMARK_.call(null,x)) && ((x > (0)));
});
taoensso.encore.nneg_int_QMARK_ = (function taoensso$encore$nneg_int_QMARK_(x){
return (cljs.core.integer_QMARK_.call(null,x)) && (!((x < (0))));
});
taoensso.encore.nvec_QMARK_ = (function taoensso$encore$nvec_QMARK_(n,x){
return (cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),n));
});
taoensso.encore.set_STAR_;
taoensso.encore.udt_QMARK_ = taoensso.encore.nneg_int_QMARK_;
taoensso.encore.vec2_QMARK_ = (function taoensso$encore$vec2_QMARK_(x){
return taoensso.encore.nvec_QMARK_.call(null,(2),x);
});
taoensso.encore.vec3_QMARK_ = (function taoensso$encore$vec3_QMARK_(x){
return taoensso.encore.nvec_QMARK_.call(null,(3),x);
});
taoensso.encore.distinct_elements_QMARK_ = (function taoensso$encore$distinct_elements_QMARK_(x){
return (cljs.core.set_QMARK_.call(null,x)) || (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,taoensso.encore.set_STAR_.call(null,x))));
});
taoensso.encore.nblank_str_QMARK_ = (function taoensso$encore$nblank_str_QMARK_(x){
return (typeof x === 'string') && (!(clojure.string.blank_QMARK_.call(null,x)));
});
taoensso.encore.nneg_num_QMARK_ = (function taoensso$encore$nneg_num_QMARK_(x){
return (typeof x === 'number') && (!((x < (0))));
});
taoensso.encore.pos_num_QMARK_ = (function taoensso$encore$pos_num_QMARK_(x){
return (typeof x === 'number') && ((x > (0)));
});
taoensso.encore.zero_num_QMARK_ = (function taoensso$encore$zero_num_QMARK_(x){
return cljs.core._EQ_.call(null,(0),x);
});
taoensso.encore.as__QMARK_nblank = (function taoensso$encore$as__QMARK_nblank(x){
if(typeof x === 'string'){
if(clojure.string.blank_QMARK_.call(null,x)){
return null;
} else {
return x;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_kw = (function taoensso$encore$as__QMARK_kw(x){
if((x instanceof cljs.core.Keyword)){
return x;
} else {
if(typeof x === 'string'){
return cljs.core.keyword.call(null,x);
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_name = (function taoensso$encore$as__QMARK_name(x){
if(cljs.core.truth_(taoensso.encore.named_QMARK_.call(null,x))){
return cljs.core.name.call(null,x);
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_qname = (function taoensso$encore$as__QMARK_qname(x){
if(cljs.core.truth_(taoensso.encore.named_QMARK_.call(null,x))){
var n = cljs.core.name.call(null,x);
var temp__4423__auto__ = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(temp__4423__auto__)){
var ns = temp__4423__auto__;
return [cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(n)].join('');
} else {
return n;
}
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_int = (function taoensso$encore$as__QMARK_int(x){
if((x == null)){
return null;
} else {
if(typeof x === 'number'){
return cljs.core.long$.call(null,x);
} else {
if(typeof x === 'string'){
var x__$1 = parseInt(x,(10));
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
}
});
taoensso.encore.as__QMARK_float = (function taoensso$encore$as__QMARK_float(x){
if((x == null)){
return null;
} else {
if(typeof x === 'number'){
return x;
} else {
if(typeof x === 'string'){
var x__$1 = parseFloat(x);
if(cljs.core.truth_(isNan(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
}
});
taoensso.encore.as__QMARK_bool = (function taoensso$encore$as__QMARK_bool(x){
if((x == null)){
return null;
} else {
if((x === true) || (x === false)){
return x;
} else {
if((cljs.core._EQ_.call(null,x,(0))) || (cljs.core._EQ_.call(null,x,"false")) || (cljs.core._EQ_.call(null,x,"FALSE")) || (cljs.core._EQ_.call(null,x,"0"))){
return false;
} else {
if((cljs.core._EQ_.call(null,x,(1))) || (cljs.core._EQ_.call(null,x,"true")) || (cljs.core._EQ_.call(null,x,"TRUE")) || (cljs.core._EQ_.call(null,x,"1"))){
return true;
} else {
return null;
}
}
}
}
});
taoensso.encore.as__QMARK_email = (function taoensso$encore$as__QMARK_email(_QMARK_s){
if(cljs.core.truth_(_QMARK_s)){
return cljs.core.re_find.call(null,/^[^\s@]+@[^\s@]+\.\S*[^\.]$/,clojure.string.trim.call(null,_QMARK_s));
} else {
return null;
}
});
taoensso.encore.as__QMARK_nemail = (function taoensso$encore$as__QMARK_nemail(_QMARK_s){
var temp__4425__auto__ = taoensso.encore.as__QMARK_email.call(null,_QMARK_s);
if(cljs.core.truth_(temp__4425__auto__)){
var email = temp__4425__auto__;
return clojure.string.lower_case.call(null,email);
} else {
return null;
}
});
taoensso.encore._QMARK_as_throw = (function taoensso$encore$_QMARK_as_throw(as_name,x){
throw cljs.core.ex_info.call(null,[cljs.core.str("nil as-?"),cljs.core.str(cljs.core.name.call(null,as_name)),cljs.core.str(" against arg: "),cljs.core.str(cljs.core.pr_str.call(null,x))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arg","arg",-1747261837),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
});
taoensso.encore.as_nblank = (function taoensso$encore$as_nblank(x){
var or__17525__auto__ = taoensso.encore.as__QMARK_nblank.call(null,x);
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"nblank","nblank",626815585),x);
}
});
taoensso.encore.as_kw = (function taoensso$encore$as_kw(x){
var or__17525__auto__ = taoensso.encore.as__QMARK_kw.call(null,x);
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"kw","kw",1158308175),x);
}
});
taoensso.encore.as_name = (function taoensso$encore$as_name(x){
var or__17525__auto__ = taoensso.encore.as__QMARK_name.call(null,x);
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"name","name",1843675177),x);
}
});
taoensso.encore.as_qname = (function taoensso$encore$as_qname(x){
var or__17525__auto__ = taoensso.encore.as__QMARK_qname.call(null,x);
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"qname","qname",-1983612179),x);
}
});
taoensso.encore.as_bool = (function taoensso$encore$as_bool(x){
var _QMARK_b = taoensso.encore.as__QMARK_bool.call(null,x);
if(!((_QMARK_b == null))){
return _QMARK_b;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"bool","bool",1444635321),x);
}
});
taoensso.encore.as_int = (function taoensso$encore$as_int(x){
var or__17525__auto__ = taoensso.encore.as__QMARK_int.call(null,x);
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"int","int",-1741416922),x);
}
});
taoensso.encore.as_float = (function taoensso$encore$as_float(x){
var or__17525__auto__ = taoensso.encore.as__QMARK_float.call(null,x);
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"float","float",-1732389368),x);
}
});
taoensso.encore.as_email = (function taoensso$encore$as_email(x){
var or__17525__auto__ = taoensso.encore.as__QMARK_email.call(null,x);
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"email","email",1415816706),x);
}
});
taoensso.encore.as_nemail = (function taoensso$encore$as_nemail(x){
var or__17525__auto__ = taoensso.encore.as__QMARK_nemail.call(null,x);
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"nemail","nemail",318708381),x);
}
});
taoensso.encore.nnil_EQ_ = (function taoensso$encore$nnil_EQ_(var_args){
var args20449 = [];
var len__18583__auto___20455 = arguments.length;
var i__18584__auto___20456 = (0);
while(true){
if((i__18584__auto___20456 < len__18583__auto___20455)){
args20449.push((arguments[i__18584__auto___20456]));

var G__20457 = (i__18584__auto___20456 + (1));
i__18584__auto___20456 = G__20457;
continue;
} else {
}
break;
}

var G__20454 = args20449.length;
switch (G__20454) {
case 2:
return taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__18602__auto__ = (new cljs.core.IndexedSeq(args20449.slice((2)),(0)));
return taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18602__auto__);

}
});

taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
var and__17513__auto__ = taoensso.encore.nnil_QMARK_.call(null,x);
if(cljs.core.truth_(and__17513__auto__)){
return cljs.core._EQ_.call(null,x,y);
} else {
return and__17513__auto__;
}
});

taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
var and__17513__auto__ = taoensso.encore.nnil_QMARK_.call(null,x);
if(cljs.core.truth_(and__17513__auto__)){
return cljs.core.apply.call(null,cljs.core._EQ_,x,y,more);
} else {
return and__17513__auto__;
}
});

taoensso.encore.nnil_EQ_.cljs$lang$applyTo = (function (seq20450){
var G__20451 = cljs.core.first.call(null,seq20450);
var seq20450__$1 = cljs.core.next.call(null,seq20450);
var G__20452 = cljs.core.first.call(null,seq20450__$1);
var seq20450__$2 = cljs.core.next.call(null,seq20450__$1);
return taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic(G__20451,G__20452,seq20450__$2);
});

taoensso.encore.nnil_EQ_.cljs$lang$maxFixedArity = (2);
taoensso.encore.vec_STAR_ = (function taoensso$encore$vec_STAR_(x){
if(cljs.core.vector_QMARK_.call(null,x)){
return x;
} else {
return cljs.core.vec.call(null,x);
}
});
taoensso.encore.set_STAR_ = (function taoensso$encore$set_STAR_(x){
if(cljs.core.set_QMARK_.call(null,x)){
return x;
} else {
return cljs.core.set.call(null,x);
}
});
taoensso.encore.rsome;

taoensso.encore.revery_QMARK_;
taoensso.encore.ks_EQ_ = (function taoensso$encore$ks_EQ_(ks,m){
return cljs.core._EQ_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.ks_LT__EQ_ = (function taoensso$encore$ks_LT__EQ_(ks,m){
return clojure.set.subset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.ks_GT__EQ_ = (function taoensso$encore$ks_GT__EQ_(ks,m){
return clojure.set.superset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.ks_nnil_QMARK_ = (function taoensso$encore$ks_nnil_QMARK_(ks,m){
return taoensso.encore.revery_QMARK_.call(null,(function (p1__20459_SHARP_){
return taoensso.encore.nnil_QMARK_.call(null,cljs.core.get.call(null,m,p1__20459_SHARP_));
}),ks);
});
taoensso.encore.non_throwing = (function taoensso$encore$non_throwing(pred){
return (function (x){
try{return pred.call(null,x);
}catch (e20461){if((e20461 instanceof Error)){
var _ = e20461;
return null;
} else {
throw e20461;

}
}});
});
taoensso.encore._invar_pred = (function taoensso$encore$_invar_pred(pred_form){
if(!(cljs.core.vector_QMARK_.call(null,pred_form))){
return pred_form;
} else {
var vec__20467 = pred_form;
var type = cljs.core.nth.call(null,vec__20467,(0),null);
var p1 = cljs.core.nth.call(null,vec__20467,(1),null);
var p2 = cljs.core.nth.call(null,vec__20467,(2),null);
var more = cljs.core.nthnext.call(null,vec__20467,(3));
var G__20468 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20468) {
case "el":
return ((function (G__20468,vec__20467,type,p1,p2,more){
return (function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.encore.set_STAR_.call(null,p1),x);
});
;})(G__20468,vec__20467,type,p1,p2,more))

break;
case "ks-nnil?":
return ((function (G__20468,vec__20467,type,p1,p2,more){
return (function (x){
return taoensso.encore.ks_nnil_QMARK_.call(null,p1,x);
});
;})(G__20468,vec__20467,type,p1,p2,more))

break;
case "ks<=":
return ((function (G__20468,vec__20467,type,p1,p2,more){
return (function (x){
return taoensso.encore.ks_LT__EQ_.call(null,p1,x);
});
;})(G__20468,vec__20467,type,p1,p2,more))

break;
case "or":
return ((function (G__20468,vec__20467,type,p1,p2,more){
return (function (x){
var or__17525__auto__ = (cljs.core.truth_(p1)?taoensso.encore.non_throwing.call(null,taoensso$encore$_invar_pred.call(null,p1)).call(null,x):null);
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
var or__17525__auto____$1 = (cljs.core.truth_(p2)?taoensso.encore.non_throwing.call(null,taoensso$encore$_invar_pred.call(null,p2)).call(null,x):null);
if(cljs.core.truth_(or__17525__auto____$1)){
return or__17525__auto____$1;
} else {
return taoensso.encore.rsome.call(null,((function (or__17525__auto____$1,or__17525__auto__,G__20468,vec__20467,type,p1,p2,more){
return (function (p1__20463_SHARP_){
return taoensso.encore.non_throwing.call(null,taoensso$encore$_invar_pred.call(null,p1__20463_SHARP_)).call(null,x);
});})(or__17525__auto____$1,or__17525__auto__,G__20468,vec__20467,type,p1,p2,more))
,more);
}
}
});
;})(G__20468,vec__20467,type,p1,p2,more))

break;
case "not":
return ((function (G__20468,vec__20467,type,p1,p2,more){
return (function (x){
var and__17513__auto__ = ((cljs.core.not.call(null,p1))?true:cljs.core.not.call(null,taoensso$encore$_invar_pred.call(null,p1).call(null,x)));
if(and__17513__auto__){
var and__17513__auto____$1 = ((cljs.core.not.call(null,p2))?true:cljs.core.not.call(null,taoensso$encore$_invar_pred.call(null,p2).call(null,x)));
if(and__17513__auto____$1){
return taoensso.encore.revery_QMARK_.call(null,((function (and__17513__auto____$1,and__17513__auto__,G__20468,vec__20467,type,p1,p2,more){
return (function (p1__20462_SHARP_){
return cljs.core.not.call(null,taoensso$encore$_invar_pred.call(null,p1__20462_SHARP_).call(null,x));
});})(and__17513__auto____$1,and__17513__auto__,G__20468,vec__20467,type,p1,p2,more))
,more);
} else {
return and__17513__auto____$1;
}
} else {
return and__17513__auto__;
}
});
;})(G__20468,vec__20467,type,p1,p2,more))

break;
case "ks=":
return ((function (G__20468,vec__20467,type,p1,p2,more){
return (function (x){
return taoensso.encore.ks_EQ_.call(null,p1,x);
});
;})(G__20468,vec__20467,type,p1,p2,more))

break;
case "and":
return ((function (G__20468,vec__20467,type,p1,p2,more){
return (function (x){
var and__17513__auto__ = ((cljs.core.not.call(null,p1))?true:taoensso$encore$_invar_pred.call(null,p1).call(null,x));
if(cljs.core.truth_(and__17513__auto__)){
var and__17513__auto____$1 = ((cljs.core.not.call(null,p2))?true:taoensso$encore$_invar_pred.call(null,p2).call(null,x));
if(cljs.core.truth_(and__17513__auto____$1)){
return taoensso.encore.revery_QMARK_.call(null,((function (and__17513__auto____$1,and__17513__auto__,G__20468,vec__20467,type,p1,p2,more){
return (function (p1__20464_SHARP_){
return taoensso$encore$_invar_pred.call(null,p1__20464_SHARP_).call(null,x);
});})(and__17513__auto____$1,and__17513__auto__,G__20468,vec__20467,type,p1,p2,more))
,more);
} else {
return and__17513__auto____$1;
}
} else {
return and__17513__auto__;
}
});
;})(G__20468,vec__20467,type,p1,p2,more))

break;
case "ks>=":
return ((function (G__20468,vec__20467,type,p1,p2,more){
return (function (x){
return taoensso.encore.ks_GT__EQ_.call(null,p1,x);
});
;})(G__20468,vec__20467,type,p1,p2,more))

break;
case "not-in":
return ((function (G__20468,vec__20467,type,p1,p2,more){
return (function (x){
return !(cljs.core.contains_QMARK_.call(null,taoensso.encore.set_STAR_.call(null,p1),x));
});
;})(G__20468,vec__20467,type,p1,p2,more))

break;
case "not-el":
return ((function (G__20468,vec__20467,type,p1,p2,more){
return (function (x){
return !(cljs.core.contains_QMARK_.call(null,taoensso.encore.set_STAR_.call(null,p1),x));
});
;})(G__20468,vec__20467,type,p1,p2,more))

break;
case "set<=":
return ((function (G__20468,vec__20467,type,p1,p2,more){
return (function (x){
return clojure.set.subset_QMARK_.call(null,taoensso.encore.set_STAR_.call(null,x),taoensso.encore.set_STAR_.call(null,p1));
});
;})(G__20468,vec__20467,type,p1,p2,more))

break;
case "set>=":
return ((function (G__20468,vec__20467,type,p1,p2,more){
return (function (x){
return clojure.set.superset_QMARK_.call(null,taoensso.encore.set_STAR_.call(null,x),taoensso.encore.set_STAR_.call(null,p1));
});
;})(G__20468,vec__20467,type,p1,p2,more))

break;
case "set=":
return ((function (G__20468,vec__20467,type,p1,p2,more){
return (function (x){
return cljs.core._EQ_.call(null,taoensso.encore.set_STAR_.call(null,x),taoensso.encore.set_STAR_.call(null,p1));
});
;})(G__20468,vec__20467,type,p1,p2,more))

break;
case "in":
return ((function (G__20468,vec__20467,type,p1,p2,more){
return (function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.encore.set_STAR_.call(null,p1),x);
});
;})(G__20468,vec__20467,type,p1,p2,more))

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
}
});
taoensso.encore.format;

taoensso.encore.now_udt;

taoensso.encore.str_starts_with_QMARK_;
taoensso.encore.without_meta = (function taoensso$encore$without_meta(x){
if(cljs.core.truth_(cljs.core.meta.call(null,x))){
return cljs.core.with_meta.call(null,x,null);
} else {
return x;
}
});
taoensso.encore.assertion_error = (function taoensso$encore$assertion_error(msg){
return (new Error(msg));
});
taoensso.encore._invar_undefined_val = new cljs.core.Keyword("invariant","undefined-val","invariant/undefined-val",-906909938);
taoensso.encore._invar_violation_BANG_ = (function taoensso$encore$_invar_violation_BANG_(var_args){
var args20470 = [];
var len__18583__auto___20474 = arguments.length;
var i__18584__auto___20475 = (0);
while(true){
if((i__18584__auto___20475 < len__18583__auto___20474)){
args20470.push((arguments[i__18584__auto___20475]));

var G__20476 = (i__18584__auto___20475 + (1));
i__18584__auto___20475 = G__20476;
continue;
} else {
}
break;
}

var G__20472 = args20470.length;
switch (G__20472) {
case 0:
return taoensso.encore._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 7:
return taoensso.encore._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20470.length)].join('')));

}
});

taoensso.encore._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
throw cljs.core.ex_info.call(null,"Invariant violation",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"invariant-violation?","invariant-violation?",-356256378),true], null));
});

taoensso.encore._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$7 = (function (assertion_QMARK_,ns_str,_QMARK_line,form,val,_QMARK_err,_QMARK_data_fn){
var pattern = "Invariant violation in `%s:%s` [pred-form, val]:\n [%s, %s]";
var line_str = (function (){var or__17525__auto__ = _QMARK_line;
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return "?";
}
})();
var form_str = [cljs.core.str(form)].join('');
var undefn_val_QMARK_ = cljs.core._EQ_.call(null,val,taoensso.encore._invar_undefined_val);
var val_str = ((undefn_val_QMARK_)?"<undefined>":[cljs.core.str((function (){var or__17525__auto__ = val;
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return "<nil>";
}
})())].join(''));
var dummy_err_QMARK_ = new cljs.core.Keyword(null,"invariant-violation?","invariant-violation?",-356256378).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,_QMARK_err));
var _QMARK_err__$1 = (cljs.core.truth_(dummy_err_QMARK_)?null:_QMARK_err);
var _QMARK_err_str = (function (){var temp__4425__auto__ = _QMARK_err__$1;
if(cljs.core.truth_(temp__4425__auto__)){
var e = temp__4425__auto__;
return [cljs.core.str(_QMARK_err__$1)].join('');
} else {
return null;
}
})();
var msg = (function (){var msg = taoensso.encore.format.call(null,pattern,ns_str,line_str,form_str,val_str);
if(cljs.core.not.call(null,_QMARK_err__$1)){
return msg;
} else {
if(undefn_val_QMARK_){
return [cljs.core.str(msg),cljs.core.str("\n`val` error: "),cljs.core.str(_QMARK_err_str)].join('');
} else {
return [cljs.core.str(msg),cljs.core.str("\n`pred-form` error: "),cljs.core.str(_QMARK_err_str)].join('');

}
}
})();
var _QMARK_data = (function (){var temp__4425__auto__ = _QMARK_data_fn;
if(cljs.core.truth_(temp__4425__auto__)){
var data_fn = temp__4425__auto__;
try{return data_fn.call(null);
}catch (e20473){if((e20473 instanceof Error)){
var e = e20473;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-error","data-error",-1058016301),e], null);
} else {
throw e20473;

}
}} else {
return null;
}
})();
throw cljs.core.ex_info.call(null,msg,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"?form","?form",-827526074),new cljs.core.Keyword(null,"instant","instant",655498374),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"elidable?","elidable?",248362249),new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"val-type","val-type",-279850094),new cljs.core.Keyword(null,"?err","?err",549653299),new cljs.core.Keyword(null,"*assert*","*assert*",-160895053),new cljs.core.Keyword(null,"?data","?data",-9471433),new cljs.core.Keyword(null,"?line","?line",-631853385),new cljs.core.Keyword(null,"form-str","form-str",871608859)],[((typeof form === 'string')?null:form),taoensso.encore.now_udt.call(null),ns_str,assertion_QMARK_,((undefn_val_QMARK_)?new cljs.core.Symbol("undefined","threw-error","undefined/threw-error",-2085122794,null):val),((undefn_val_QMARK_)?new cljs.core.Symbol("undefined","threw-error","undefined/threw-error",-2085122794,null):cljs.core.type.call(null,val)),_QMARK_err__$1,cljs.core._STAR_assert_STAR_,_QMARK_data,_QMARK_line,form_str]))
;
});

taoensso.encore._invar_violation_BANG_.cljs$lang$maxFixedArity = 7;
taoensso.encore.try_pred = (function taoensso$encore$try_pred(pred,x){
try{return pred.call(null,x);
}catch (e20480){if((e20480 instanceof Error)){
var _ = e20480;
return false;
} else {
throw e20480;

}
}});
/**
 * Experimental. Cheaper `have!` alt that provides less diagnostic info.
 */
taoensso.encore.is_BANG_ = (function taoensso$encore$is_BANG_(var_args){
var args20481 = [];
var len__18583__auto___20484 = arguments.length;
var i__18584__auto___20485 = (0);
while(true){
if((i__18584__auto___20485 < len__18583__auto___20484)){
args20481.push((arguments[i__18584__auto___20485]));

var G__20486 = (i__18584__auto___20485 + (1));
i__18584__auto___20485 = G__20486;
continue;
} else {
}
break;
}

var G__20483 = args20481.length;
switch (G__20483) {
case 1:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20481.length)].join('')));

}
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(cljs.core.truth_(x)){
return x;
} else {
return taoensso.encore.is_BANG_.call(null,cljs.core.identity,x);
}
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
if(cljs.core.truth_(taoensso.encore.try_pred.call(null,pred,x))){
return x;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("`is!` "),cljs.core.str([cljs.core.str(pred)].join('')),cljs.core.str(" failure against arg: "),cljs.core.str(cljs.core.pr_str.call(null,x))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arg","arg",-1747261837),x,new cljs.core.Keyword(null,"arg-type","arg-type",-2020167363),cljs.core.type.call(null,x)], null));
}
});

taoensso.encore.is_BANG_.cljs$lang$maxFixedArity = 2;
/**
 * Experimental. For use with `if-let`s, `when-let`s, etc.
 */
taoensso.encore.when_QMARK_ = (function taoensso$encore$when_QMARK_(pred,x){
if(cljs.core.truth_(taoensso.encore.try_pred.call(null,pred,x))){
return x;
} else {
return null;
}
});
/**
 * Like `name` but includes keyword namespaces in name string
 */
taoensso.encore.qname = taoensso.encore.as_qname;
taoensso.encore.explode_keyword = (function taoensso$encore$explode_keyword(k){
return clojure.string.split.call(null,taoensso.encore.qname.call(null,k),/[\.\/]/);
});
taoensso.encore.merge_keywords = (function taoensso$encore$merge_keywords(var_args){
var args__18590__auto__ = [];
var len__18583__auto___20492 = arguments.length;
var i__18584__auto___20493 = (0);
while(true){
if((i__18584__auto___20493 < len__18583__auto___20492)){
args__18590__auto__.push((arguments[i__18584__auto___20493]));

var G__20494 = (i__18584__auto___20493 + (1));
i__18584__auto___20493 = G__20494;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((1) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((1)),(0))):null);
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18591__auto__);
});

taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__20490){
var vec__20491 = p__20490;
var no_slash_QMARK_ = cljs.core.nth.call(null,vec__20491,(0),null);
var parts = cljs.core.reduce.call(null,((function (vec__20491,no_slash_QMARK_){
return (function (acc,in$){
if(cljs.core.truth_(in$)){
return cljs.core.into.call(null,acc,taoensso.encore.explode_keyword.call(null,in$));
} else {
return acc;
}
});})(vec__20491,no_slash_QMARK_))
,cljs.core.PersistentVector.EMPTY,ks);
if(cljs.core.empty_QMARK_.call(null,parts)){
return null;
} else {
if(cljs.core.truth_(no_slash_QMARK_)){
return cljs.core.keyword.call(null,clojure.string.join.call(null,".",parts));
} else {
var ppop = cljs.core.pop.call(null,parts);
return cljs.core.keyword.call(null,((cljs.core.empty_QMARK_.call(null,ppop))?null:clojure.string.join.call(null,".",ppop)),cljs.core.peek.call(null,parts));
}
}
});

taoensso.encore.merge_keywords.cljs$lang$maxFixedArity = (1);

taoensso.encore.merge_keywords.cljs$lang$applyTo = (function (seq20488){
var G__20489 = cljs.core.first.call(null,seq20488);
var seq20488__$1 = cljs.core.next.call(null,seq20488);
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic(G__20489,seq20488__$1);
});
taoensso.encore.clamp = (function taoensso$encore$clamp(nmin,nmax,n){
if((n < nmin)){
return nmin;
} else {
if((n > nmax)){
return nmax;
} else {
return n;
}
}
});
taoensso.encore.pow = (function taoensso$encore$pow(n,exp){
return Math.pow(n,exp);
});
taoensso.encore.abs = (function taoensso$encore$abs(n){
if((n < (0))){
return (- n);
} else {
return n;
}
});
taoensso.encore.round_STAR_ = (function taoensso$encore$round_STAR_(var_args){
var args20495 = [];
var len__18583__auto___20499 = arguments.length;
var i__18584__auto___20500 = (0);
while(true){
if((i__18584__auto___20500 < len__18583__auto___20499)){
args20495.push((arguments[i__18584__auto___20500]));

var G__20501 = (i__18584__auto___20500 + (1));
i__18584__auto___20500 = G__20501;
continue;
} else {
}
break;
}

var G__20497 = args20495.length;
switch (G__20497) {
case 1:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20495.length)].join('')));

}
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (n){
return taoensso.encore.round_STAR_.call(null,new cljs.core.Keyword(null,"round","round",2009433328),null,n);
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,n){
return taoensso.encore.round_STAR_.call(null,type,null,n);
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,nplaces,n){
var n__$1 = n;
var modifier = (cljs.core.truth_(nplaces)?Math.pow(10.0,nplaces):null);
var n_STAR_ = ((cljs.core.not.call(null,modifier))?n__$1:(n__$1 * modifier));
var rounded = (function (){var G__20498 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20498) {
case "round":
return Math.round(n_STAR_);

break;
case "floor":
return Math.floor(n_STAR_);

break;
case "ceil":
return Math.ceil(n_STAR_);

break;
case "trunc":
return cljs.core.long$.call(null,n_STAR_);

break;
default:
throw cljs.core.ex_info.call(null,"Unknown round type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),type], null));

}
})();
if(cljs.core.not.call(null,modifier)){
return cljs.core.long$.call(null,rounded);
} else {
return (rounded / modifier);
}
});

taoensso.encore.round_STAR_.cljs$lang$maxFixedArity = 3;
taoensso.encore.round0 = (function taoensso$encore$round0(n){
return Math.round(n);
});
taoensso.encore.round1 = (function taoensso$encore$round1(n){
return (Math.round((n * 10.0)) / 10.0);
});
taoensso.encore.round2 = (function taoensso$encore$round2(n){
return (Math.round((n * 100.0)) / 100.0);
});
/**
 * Returns binary exponential backoff value.
 */
taoensso.encore.exp_backoff = (function taoensso$encore$exp_backoff(var_args){
var args__18590__auto__ = [];
var len__18583__auto___20510 = arguments.length;
var i__18584__auto___20511 = (0);
while(true){
if((i__18584__auto___20511 < len__18583__auto___20510)){
args__18590__auto__.push((arguments[i__18584__auto___20511]));

var G__20512 = (i__18584__auto___20511 + (1));
i__18584__auto___20511 = G__20512;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((1) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((1)),(0))):null);
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18591__auto__);
});

taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic = (function (nattempt,p__20506){
var vec__20507 = p__20506;
var map__20508 = cljs.core.nth.call(null,vec__20507,(0),null);
var map__20508__$1 = ((((!((map__20508 == null)))?((((map__20508.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20508.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20508):map__20508);
var min_SINGLEQUOTE_ = cljs.core.get.call(null,map__20508__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max_SINGLEQUOTE_ = cljs.core.get.call(null,map__20508__$1,new cljs.core.Keyword(null,"max","max",61366548));
var factor = cljs.core.get.call(null,map__20508__$1,new cljs.core.Keyword(null,"factor","factor",-2103172748),(1000));
var binary_exp = Math.pow((2),(nattempt - (1)));
var time = (((binary_exp + cljs.core.rand.call(null,binary_exp)) * 0.5) * factor);
return cljs.core.long$.call(null,(function (){var time__$1 = (cljs.core.truth_(min_SINGLEQUOTE_)?(function (){var x__17856__auto__ = cljs.core.long$.call(null,min_SINGLEQUOTE_);
var y__17857__auto__ = cljs.core.long$.call(null,time);
return ((x__17856__auto__ > y__17857__auto__) ? x__17856__auto__ : y__17857__auto__);
})():time);
var time__$2 = (cljs.core.truth_(max_SINGLEQUOTE_)?(function (){var x__17863__auto__ = cljs.core.long$.call(null,max_SINGLEQUOTE_);
var y__17864__auto__ = cljs.core.long$.call(null,time__$1);
return ((x__17863__auto__ < y__17864__auto__) ? x__17863__auto__ : y__17864__auto__);
})():time__$1);
return time__$2;
})());
});

taoensso.encore.exp_backoff.cljs$lang$maxFixedArity = (1);

taoensso.encore.exp_backoff.cljs$lang$applyTo = (function (seq20504){
var G__20505 = cljs.core.first.call(null,seq20504);
var seq20504__$1 = cljs.core.next.call(null,seq20504);
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic(G__20505,seq20504__$1);
});
taoensso.encore.now_dt = (function taoensso$encore$now_dt(){
return (new Date());
});
taoensso.encore.now_udt = (function taoensso$encore$now_udt(){
return (new Date()).getTime();
});
taoensso.encore.secs__GT_ms = (function taoensso$encore$secs__GT_ms(secs){
return (cljs.core.long$.call(null,secs) * (1000));
});
taoensso.encore.ms__GT_secs = (function taoensso$encore$ms__GT_secs(ms){
return cljs.core.quot.call(null,cljs.core.long$.call(null,ms),(1000));
});
/**
 * Returns ~number of milliseconds in period defined by given args
 */
taoensso.encore.ms = (function taoensso$encore$ms(var_args){
var args__18590__auto__ = [];
var len__18583__auto___20530 = arguments.length;
var i__18584__auto___20531 = (0);
while(true){
if((i__18584__auto___20531 < len__18583__auto___20530)){
args__18590__auto__.push((arguments[i__18584__auto___20531]));

var G__20532 = (i__18584__auto___20531 + (1));
i__18584__auto___20531 = G__20532;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic = (function (p__20526){
var map__20527 = p__20526;
var map__20527__$1 = ((((!((map__20527 == null)))?((((map__20527.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20527.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20527):map__20527);
var opts = map__20527__$1;
var years = cljs.core.get.call(null,map__20527__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var months = cljs.core.get.call(null,map__20527__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var weeks = cljs.core.get.call(null,map__20527__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var days = cljs.core.get.call(null,map__20527__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var hours = cljs.core.get.call(null,map__20527__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var mins = cljs.core.get.call(null,map__20527__$1,new cljs.core.Keyword(null,"mins","mins",467369676));
var secs = cljs.core.get.call(null,map__20527__$1,new cljs.core.Keyword(null,"secs","secs",1532330091));
var msecs = cljs.core.get.call(null,map__20527__$1,new cljs.core.Keyword(null,"msecs","msecs",1711980553));
var ms = cljs.core.get.call(null,map__20527__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
if(cljs.core.truth_(cljs.core.mapv.call(null,((function (map__20527,map__20527__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms){
return (function (__in){
var __x = __in;
try{if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null).call(null,__x))){
return __x;
} else {
return taoensso.encore._invar_violation_BANG_.call(null);
}
}catch (e20529){if((e20529 instanceof Error)){
var __t = e20529;
return taoensso.encore._invar_violation_BANG_.call(null,true,"taoensso.encore",882,"(#{:msecs :secs :months :days :mins :hours :years :ms :weeks} __in)",__x,__t,null);
} else {
throw e20529;

}
}});})(map__20527,map__20527__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms))
,cljs.core.keys.call(null,opts)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have","have",574419306,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null),new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)))))].join('')));
}

return taoensso.encore.round_STAR_.call(null,(((((((((cljs.core.truth_(years)?(years * (31536000000)):0.0) + (cljs.core.truth_(months)?(months * 2.551392E9):0.0)) + (cljs.core.truth_(weeks)?(weeks * (604800000)):0.0)) + (cljs.core.truth_(days)?(days * (86400000)):0.0)) + (cljs.core.truth_(hours)?(hours * (3600000)):0.0)) + (cljs.core.truth_(mins)?(mins * (60000)):0.0)) + (cljs.core.truth_(secs)?(secs * (1000)):0.0)) + (cljs.core.truth_(msecs)?msecs:0.0)) + (cljs.core.truth_(ms)?ms:0.0)));
});

taoensso.encore.ms.cljs$lang$maxFixedArity = (0);

taoensso.encore.ms.cljs$lang$applyTo = (function (seq20525){
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20525));
});
taoensso.encore.secs = cljs.core.comp.call(null,taoensso.encore.ms__GT_secs,taoensso.encore.ms);
/**
 * Like `aget` for JS objects, Ref. https://goo.gl/eze8hY.
 *   Unlike `aget`, returns nil for missing keys instead of throwing.
 */
taoensso.encore.oget = (function taoensso$encore$oget(var_args){
var args20537 = [];
var len__18583__auto___20544 = arguments.length;
var i__18584__auto___20545 = (0);
while(true){
if((i__18584__auto___20545 < len__18583__auto___20544)){
args20537.push((arguments[i__18584__auto___20545]));

var G__20546 = (i__18584__auto___20545 + (1));
i__18584__auto___20545 = G__20546;
continue;
} else {
}
break;
}

var G__20543 = args20537.length;
switch (G__20543) {
case 2:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__18602__auto__ = (new cljs.core.IndexedSeq(args20537.slice((3)),(0)));
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__18602__auto__);

}
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2 = (function (o,k){
if(cljs.core.truth_(o)){
return goog.object.get(o,k,null);
} else {
return null;
}
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3 = (function (o,k1,k2){
var temp__4425__auto__ = taoensso.encore.oget.call(null,o,k1);
if(cljs.core.truth_(temp__4425__auto__)){
var o__$1 = temp__4425__auto__;
return goog.object.get(o__$1,k2,null);
} else {
return null;
}
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$variadic = (function (o,k1,k2,ks){
var temp__4425__auto__ = taoensso.encore.oget.call(null,o,k1,k2);
if(cljs.core.truth_(temp__4425__auto__)){
var o__$1 = temp__4425__auto__;
return cljs.core.apply.call(null,taoensso.encore.oget,o__$1,ks);
} else {
return null;
}
});

taoensso.encore.oget.cljs$lang$applyTo = (function (seq20538){
var G__20539 = cljs.core.first.call(null,seq20538);
var seq20538__$1 = cljs.core.next.call(null,seq20538);
var G__20540 = cljs.core.first.call(null,seq20538__$1);
var seq20538__$2 = cljs.core.next.call(null,seq20538__$1);
var G__20541 = cljs.core.first.call(null,seq20538__$2);
var seq20538__$3 = cljs.core.next.call(null,seq20538__$2);
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$variadic(G__20539,G__20540,G__20541,seq20538__$3);
});

taoensso.encore.oget.cljs$lang$maxFixedArity = (3);
taoensso.encore.singleton_QMARK_ = (function taoensso$encore$singleton_QMARK_(coll){
if(cljs.core.counted_QMARK_.call(null,coll)){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),(1));
} else {
return cljs.core.not.call(null,cljs.core.next.call(null,coll));
}
});
taoensso.encore.__GT__QMARK_singleton = (function taoensso$encore$__GT__QMARK_singleton(coll){
if(cljs.core.truth_(taoensso.encore.singleton_QMARK_.call(null,coll))){
var vec__20549 = coll;
var c1 = cljs.core.nth.call(null,vec__20549,(0),null);
return c1;
} else {
return null;
}
});
taoensso.encore.__GT_vec = (function taoensso$encore$__GT_vec(x){
if(cljs.core.vector_QMARK_.call(null,x)){
return x;
} else {
if(cljs.core.sequential_QMARK_.call(null,x)){
return cljs.core.vec.call(null,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);

}
}
});
taoensso.encore.vsplit_last = (function taoensso$encore$vsplit_last(v){
var c = cljs.core.count.call(null,v);
if((c > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((c > (1)))?cljs.core.pop.call(null,v):null),cljs.core.peek.call(null,v)], null);
} else {
return null;
}
});
taoensso.encore.vsplit_first = (function taoensso$encore$vsplit_first(v){
var c = cljs.core.count.call(null,v);
if((c > (0))){
var vec__20551 = v;
var v1 = cljs.core.nth.call(null,vec__20551,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v1,(((c > (1)))?cljs.core.subvec.call(null,v,(1)):null)], null);
} else {
return null;
}
});
taoensso.encore.nnil_set = (function taoensso$encore$nnil_set(x){
return cljs.core.disj.call(null,taoensso.encore.set_STAR_.call(null,x),null);
});
taoensso.encore.conj_some = (function taoensso$encore$conj_some(var_args){
var args20552 = [];
var len__18583__auto___20558 = arguments.length;
var i__18584__auto___20559 = (0);
while(true){
if((i__18584__auto___20559 < len__18583__auto___20558)){
args20552.push((arguments[i__18584__auto___20559]));

var G__20560 = (i__18584__auto___20559 + (1));
i__18584__auto___20559 = G__20560;
continue;
} else {
}
break;
}

var G__20557 = args20552.length;
switch (G__20557) {
case 0:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__18602__auto__ = (new cljs.core.IndexedSeq(args20552.slice((2)),(0)));
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18602__auto__);

}
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return coll;
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2 = (function (coll,_QMARK_x){
if(cljs.core.truth_(taoensso.encore.nnil_QMARK_.call(null,_QMARK_x))){
return cljs.core.conj.call(null,coll,_QMARK_x);
} else {
return coll;
}
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic = (function (coll,_QMARK_x,_QMARK_xs){
return cljs.core.reduce.call(null,taoensso.encore.conj_some,taoensso.encore.conj_some.call(null,coll,_QMARK_x),_QMARK_xs);
});

taoensso.encore.conj_some.cljs$lang$applyTo = (function (seq20553){
var G__20554 = cljs.core.first.call(null,seq20553);
var seq20553__$1 = cljs.core.next.call(null,seq20553);
var G__20555 = cljs.core.first.call(null,seq20553__$1);
var seq20553__$2 = cljs.core.next.call(null,seq20553__$1);
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic(G__20554,G__20555,seq20553__$2);
});

taoensso.encore.conj_some.cljs$lang$maxFixedArity = (2);
/**
 * As `clojure.core/preserving-reduced`
 */
taoensso.encore.preserve_reduced = (function taoensso$encore$preserve_reduced(rf){
return (function (acc,in$){
var result = rf.call(null,acc,in$);
if(cljs.core.reduced_QMARK_.call(null,result)){
return cljs.core.reduced.call(null,result);
} else {
return result;
}
});
});
taoensso.encore.run_kv_BANG_ = (function taoensso$encore$run_kv_BANG_(proc,m){
cljs.core.reduce_kv.call(null,(function (p1__20564_SHARP_,p2__20562_SHARP_,p3__20563_SHARP_){
return proc.call(null,p2__20562_SHARP_,p3__20563_SHARP_);
}),null,m);

return null;
});
taoensso.encore.run_BANG__STAR_ = (function taoensso$encore$run_BANG__STAR_(proc,coll){
cljs.core.reduce.call(null,(function (p1__20566_SHARP_,p2__20565_SHARP_){
return proc.call(null,p2__20565_SHARP_);
}),null,coll);

return null;
});
/**
 * Faster `some` based on `reduce`
 */
taoensso.encore.rsome = (function taoensso$encore$rsome(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
var temp__4425__auto__ = pred.call(null,in$);
if(cljs.core.truth_(temp__4425__auto__)){
var p = temp__4425__auto__;
return cljs.core.reduced.call(null,p);
} else {
return null;
}
}),null,coll);
});
/**
 * Faster `every?` based on `reduce`
 */
taoensso.encore.revery_QMARK_ = (function taoensso$encore$revery_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
if(cljs.core.truth_(pred.call(null,in$))){
return true;
} else {
return cljs.core.reduced.call(null,null);
}
}),true,coll);
});
/**
 * Like `update-in` but faster, more flexible, and simpler (less ambiguous)
 */
taoensso.encore.update_in_STAR_ = (function taoensso$encore$update_in_STAR_(m,ks,f){
if(cljs.core.empty_QMARK_.call(null,ks)){
return f.call(null,m);
} else {
var vec__20568 = ks;
var k = cljs.core.nth.call(null,vec__20568,(0),null);
var ks__$1 = cljs.core.nthnext.call(null,vec__20568,(1));
if(cljs.core.truth_(ks__$1)){
return cljs.core.assoc.call(null,m,k,taoensso$encore$update_in_STAR_.call(null,cljs.core.get.call(null,m,k),ks__$1,f));
} else {
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
}
}
});
taoensso.encore.translate_signed_idx = (function taoensso$encore$translate_signed_idx(signed_idx,max_idx){
if((signed_idx >= (0))){
var x__17863__auto__ = signed_idx;
var y__17864__auto__ = max_idx;
return ((x__17863__auto__ < y__17864__auto__) ? x__17863__auto__ : y__17864__auto__);
} else {
var x__17856__auto__ = (0);
var y__17857__auto__ = (signed_idx + max_idx);
return ((x__17856__auto__ > y__17857__auto__) ? x__17856__auto__ : y__17857__auto__);
}
});
/**
 * Returns [<inclusive-start-idx*> <exclusive-end-idx*>] for counted 0-indexed
 *   input (str, vec, etc.) with support for:
 *  * Clamping of indexes beyond limits.
 *  * Max-length -> end-index.
 *  * -ive indexes (as +ive indexes but work from back of input):
 *    (+0) (+1) (+2) (+3) (+4)  ; inclusive +ive indexes
 *      h    e    l    l    o   ; 5 count
 *    (-5) (-4) (-3) (-2) (-1)  ; inclusive -ive indexes
 */
taoensso.encore.sub_indexes = (function taoensso$encore$sub_indexes(var_args){
var args__18590__auto__ = [];
var len__18583__auto___20576 = arguments.length;
var i__18584__auto___20577 = (0);
while(true){
if((i__18584__auto___20577 < len__18583__auto___20576)){
args__18590__auto__.push((arguments[i__18584__auto___20577]));

var G__20578 = (i__18584__auto___20577 + (1));
i__18584__auto___20577 = G__20578;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((2) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((2)),(0))):null);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18591__auto__);
});

taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic = (function (x,start_idx,p__20572){
var map__20573 = p__20572;
var map__20573__$1 = ((((!((map__20573 == null)))?((((map__20573.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20573.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20573):map__20573);
var max_len = cljs.core.get.call(null,map__20573__$1,new cljs.core.Keyword(null,"max-len","max-len",-18846016));
var end_idx = cljs.core.get.call(null,map__20573__$1,new cljs.core.Keyword(null,"end-idx","end-idx",-85750788));
if(cljs.core.truth_((function (){var __x = max_len;
try{if(cljs.core.truth_(taoensso.encore._invar_pred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,taoensso.encore.nneg_int_QMARK_], null)).call(null,__x))){
return true;
} else {
return taoensso.encore._invar_violation_BANG_.call(null);
}
}catch (e20575){if((e20575 instanceof Error)){
var __t = e20575;
return taoensso.encore._invar_violation_BANG_.call(null,true,"taoensso.encore",1037,"([:or nil? nneg-int?] max-len)",__x,__t,null);
} else {
throw e20575;

}
}})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"nneg-int?","nneg-int?",803479360,null)], null),new cljs.core.Symbol(null,"max-len","max-len",1621685511,null))))].join('')));
}

var start_idx__$1 = start_idx;
var xlen = cljs.core.count.call(null,x);
var start_idx_STAR_ = taoensso.encore.translate_signed_idx.call(null,start_idx__$1,xlen);
var end_idx_STAR_ = cljs.core.long$.call(null,(cljs.core.truth_(max_len)?(function (){var n1__19682__auto__ = (start_idx_STAR_ + max_len);
var n2__19683__auto__ = xlen;
if((n1__19682__auto__ > n2__19683__auto__)){
return n2__19683__auto__;
} else {
return n1__19682__auto__;
}
})():(cljs.core.truth_(end_idx)?(taoensso.encore.translate_signed_idx.call(null,end_idx,xlen) + (1)):xlen
)));
if((start_idx_STAR_ > end_idx_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_idx_STAR_,end_idx_STAR_], null);
}
});

taoensso.encore.sub_indexes.cljs$lang$maxFixedArity = (2);

taoensso.encore.sub_indexes.cljs$lang$applyTo = (function (seq20569){
var G__20570 = cljs.core.first.call(null,seq20569);
var seq20569__$1 = cljs.core.next.call(null,seq20569);
var G__20571 = cljs.core.first.call(null,seq20569__$1);
var seq20569__$2 = cljs.core.next.call(null,seq20569__$1);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(G__20570,G__20571,seq20569__$2);
});
/**
 * Like `subvec` but uses `sub-indexes`
 */
taoensso.encore.subvec_STAR_ = (function taoensso$encore$subvec_STAR_(var_args){
var args__18590__auto__ = [];
var len__18583__auto___20586 = arguments.length;
var i__18584__auto___20587 = (0);
while(true){
if((i__18584__auto___20587 < len__18583__auto___20586)){
args__18590__auto__.push((arguments[i__18584__auto___20587]));

var G__20588 = (i__18584__auto___20587 + (1));
i__18584__auto___20587 = G__20588;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((2) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((2)),(0))):null);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18591__auto__);
});

taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (v,start_idx,p__20582){
var vec__20583 = p__20582;
var _QMARK_max_len = cljs.core.nth.call(null,vec__20583,(0),null);
if(cljs.core.truth_((function (){var __x = v;
try{if(cljs.core.vector_QMARK_.call(null,__x)){
return true;
} else {
return taoensso.encore._invar_violation_BANG_.call(null);
}
}catch (e20584){if((e20584 instanceof Error)){
var __t = e20584;
return taoensso.encore._invar_violation_BANG_.call(null,true,"taoensso.encore",1074,"(vector? v)",__x,__t,null);
} else {
throw e20584;

}
}})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"v","v",1661996586,null))))].join('')));
}

var vec__20585 = taoensso.encore.sub_indexes.call(null,v,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__20585,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__20585,(1),null);
return cljs.core.subvec.call(null,v,start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.subvec_STAR_.cljs$lang$maxFixedArity = (2);

taoensso.encore.subvec_STAR_.cljs$lang$applyTo = (function (seq20579){
var G__20580 = cljs.core.first.call(null,seq20579);
var seq20579__$1 = cljs.core.next.call(null,seq20579);
var G__20581 = cljs.core.first.call(null,seq20579__$1);
var seq20579__$2 = cljs.core.next.call(null,seq20579__$1);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__20580,G__20581,seq20579__$2);
});
taoensso.encore.into_BANG_ = (function taoensso$encore$into_BANG_(var_args){
var args20593 = [];
var len__18583__auto___20596 = arguments.length;
var i__18584__auto___20597 = (0);
while(true){
if((i__18584__auto___20597 < len__18583__auto___20596)){
args20593.push((arguments[i__18584__auto___20597]));

var G__20598 = (i__18584__auto___20597 + (1));
i__18584__auto___20597 = G__20598;
continue;
} else {
}
break;
}

var G__20595 = args20593.length;
switch (G__20595) {
case 2:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20593.length)].join('')));

}
});

taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.reduce.call(null,cljs.core.conj_BANG_,to,from);
});

taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (to,xform,from){
return cljs.core.transduce.call(null,xform,cljs.core.conj_BANG_,to,from);
});

taoensso.encore.into_BANG_.cljs$lang$maxFixedArity = 3;
taoensso.encore.sentinel = {};

taoensso.encore.sentinel_QMARK_ = (function taoensso$encore$sentinel_QMARK_(x){
return (x === taoensso.encore.sentinel);
});

taoensso.encore.nil__GT_sentinel = (function taoensso$encore$nil__GT_sentinel(x){
if((x == null)){
return taoensso.encore.sentinel;
} else {
return x;
}
});

taoensso.encore.sentinel__GT_nil = (function taoensso$encore$sentinel__GT_nil(x){
if(cljs.core.truth_(taoensso.encore.sentinel_QMARK_.call(null,x))){
return null;
} else {
return x;
}
});
taoensso.encore.repeatedly_into;
/**
 * Returns a sorted vector of the top n items from coll of N items in O(N.logn)
 *   time. (take n (sort-by ...)) is O(N.logN) time, so much slower when n << N.
 *   Ref. http://stevehanov.ca/blog/index.php?id=122
 */
taoensso.encore.top = (function taoensso$encore$top(var_args){
var args20602 = [];
var len__18583__auto___20605 = arguments.length;
var i__18584__auto___20606 = (0);
while(true){
if((i__18584__auto___20606 < len__18583__auto___20605)){
args20602.push((arguments[i__18584__auto___20606]));

var G__20607 = (i__18584__auto___20606 + (1));
i__18584__auto___20606 = G__20607;
continue;
} else {
}
break;
}

var G__20604 = args20602.length;
switch (G__20604) {
case 2:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20602.length)].join('')));

}
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return taoensso.encore.top.call(null,n,cljs.core.identity,cljs.core.compare,coll);
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$3 = (function (n,keyfn,coll){
return taoensso.encore.top.call(null,n,keyfn,cljs.core.compare,coll);
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$4 = (function (n,keyfn,cmp,coll){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take.call(null,n),cljs.core.sort_by.call(null,keyfn,cmp,coll));
});

taoensso.encore.top.cljs$lang$maxFixedArity = 4;

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
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.encore.Swapped = (function (new_val,return_val,__meta,__extmap,__hash){
this.new_val = new_val;
this.return_val = return_val;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18139__auto__,k__18140__auto__){
var self__ = this;
var this__18139__auto____$1 = this;
return cljs.core._lookup.call(null,this__18139__auto____$1,k__18140__auto__,null);
});

taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18141__auto__,k20610,else__18142__auto__){
var self__ = this;
var this__18141__auto____$1 = this;
var G__20612 = (((k20610 instanceof cljs.core.Keyword))?k20610.fqn:null);
switch (G__20612) {
case "new-val":
return self__.new_val;

break;
case "return-val":
return self__.return_val;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20610,else__18142__auto__);

}
});

taoensso.encore.Swapped.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18153__auto__,writer__18154__auto__,opts__18155__auto__){
var self__ = this;
var this__18153__auto____$1 = this;
var pr_pair__18156__auto__ = ((function (this__18153__auto____$1){
return (function (keyval__18157__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,cljs.core.pr_writer,""," ","",opts__18155__auto__,keyval__18157__auto__);
});})(this__18153__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,pr_pair__18156__auto__,"#taoensso.encore.Swapped{",", ","}",opts__18155__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-val","new-val",-738158599),self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"return-val","return-val",-512772489),self__.return_val],null))], null),self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IIterable$ = true;

taoensso.encore.Swapped.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20609){
var self__ = this;
var G__20609__$1 = this;
return (new cljs.core.RecordIter((0),G__20609__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-val","new-val",-738158599),new cljs.core.Keyword(null,"return-val","return-val",-512772489)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.encore.Swapped.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18137__auto__){
var self__ = this;
var this__18137__auto____$1 = this;
return self__.__meta;
});

taoensso.encore.Swapped.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18133__auto__){
var self__ = this;
var this__18133__auto____$1 = this;
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.encore.Swapped.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18143__auto__){
var self__ = this;
var this__18143__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18134__auto__){
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

taoensso.encore.Swapped.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18135__auto__,other__18136__auto__){
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

taoensso.encore.Swapped.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18148__auto__,k__18149__auto__){
var self__ = this;
var this__18148__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"return-val","return-val",-512772489),null,new cljs.core.Keyword(null,"new-val","new-val",-738158599),null], null), null),k__18149__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18148__auto____$1),self__.__meta),k__18149__auto__);
} else {
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18149__auto__)),null));
}
});

taoensso.encore.Swapped.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18146__auto__,k__18147__auto__,G__20609){
var self__ = this;
var this__18146__auto____$1 = this;
var pred__20613 = cljs.core.keyword_identical_QMARK_;
var expr__20614 = k__18147__auto__;
if(cljs.core.truth_(pred__20613.call(null,new cljs.core.Keyword(null,"new-val","new-val",-738158599),expr__20614))){
return (new taoensso.encore.Swapped(G__20609,self__.return_val,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20613.call(null,new cljs.core.Keyword(null,"return-val","return-val",-512772489),expr__20614))){
return (new taoensso.encore.Swapped(self__.new_val,G__20609,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18147__auto__,G__20609),null));
}
}
});

taoensso.encore.Swapped.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18151__auto__){
var self__ = this;
var this__18151__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-val","new-val",-738158599),self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"return-val","return-val",-512772489),self__.return_val],null))], null),self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18138__auto__,G__20609){
var self__ = this;
var this__18138__auto____$1 = this;
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,G__20609,self__.__extmap,self__.__hash));
});

taoensso.encore.Swapped.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18144__auto__,entry__18145__auto__){
var self__ = this;
var this__18144__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18145__auto__)){
return cljs.core._assoc.call(null,this__18144__auto____$1,cljs.core._nth.call(null,entry__18145__auto__,(0)),cljs.core._nth.call(null,entry__18145__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18144__auto____$1,entry__18145__auto__);
}
});

taoensso.encore.Swapped.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-val","new-val",902372928,null),new cljs.core.Symbol(null,"return-val","return-val",1127759038,null)], null);
});

taoensso.encore.Swapped.cljs$lang$type = true;

taoensso.encore.Swapped.cljs$lang$ctorPrSeq = (function (this__18173__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.encore/Swapped");
});

taoensso.encore.Swapped.cljs$lang$ctorPrWriter = (function (this__18173__auto__,writer__18174__auto__){
return cljs.core._write.call(null,writer__18174__auto__,"taoensso.encore/Swapped");
});

taoensso.encore.__GT_Swapped = (function taoensso$encore$__GT_Swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val,null,null,null));
});

taoensso.encore.map__GT_Swapped = (function taoensso$encore$map__GT_Swapped(G__20611){
return (new taoensso.encore.Swapped(new cljs.core.Keyword(null,"new-val","new-val",-738158599).cljs$core$IFn$_invoke$arity$1(G__20611),new cljs.core.Keyword(null,"return-val","return-val",-512772489).cljs$core$IFn$_invoke$arity$1(G__20611),null,cljs.core.dissoc.call(null,G__20611,new cljs.core.Keyword(null,"new-val","new-val",-738158599),new cljs.core.Keyword(null,"return-val","return-val",-512772489)),null));
});

taoensso.encore.swapped = (function taoensso$encore$swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val,null,null,null));
});
taoensso.encore.swapped_QMARK_ = (function taoensso$encore$swapped_QMARK_(x){
return (x instanceof taoensso.encore.Swapped);
});
taoensso.encore.swapped_STAR_ = (function taoensso$encore$swapped_STAR_(x){
if(cljs.core.truth_(taoensso.encore.swapped_QMARK_.call(null,x))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-val","new-val",-738158599).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"return-val","return-val",-512772489).cljs$core$IFn$_invoke$arity$1(x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null);
}
});
taoensso.encore.dissoc_in;
/**
 * [<new-val> <return-val>]
 */
taoensso.encore.swapped_STAR__in = (function taoensso$encore$swapped_STAR__in(m,ks,f){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,f,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))){
return taoensso.encore.swapped_STAR_.call(null,taoensso.encore.dissoc_in.call(null,m,cljs.core.butlast.call(null,ks),cljs.core.last.call(null,ks)));
} else {
var old_val_in = cljs.core.get_in.call(null,m,ks);
var vec__20618 = taoensso.encore.swapped_STAR_.call(null,f.call(null,old_val_in));
var new_val_in = cljs.core.nth.call(null,vec__20618,(0),null);
var return_val = cljs.core.nth.call(null,vec__20618,(1),null);
var new_val = (cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,new_val_in,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))?taoensso.encore.dissoc_in.call(null,m,cljs.core.butlast.call(null,ks),cljs.core.last.call(null,ks)):cljs.core.assoc_in.call(null,m,ks,new_val_in));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_val,return_val], null);
}
});
/**
 * Reduces input with
 *   [<type> <ks> <reset-val-or-swap-fn>] or
 *       [<ks> <reset-val-or-swap-fn>] ops
 */
taoensso.encore.replace_in_STAR_ = (function taoensso$encore$replace_in_STAR_(_QMARK_vf_type,m,ops){
return cljs.core.reduce.call(null,(function (accum,_QMARK_op){
if(cljs.core.not.call(null,_QMARK_op)){
return accum;
} else {
var vec__20621 = ((cljs.core.not.call(null,_QMARK_vf_type))?_QMARK_op:cljs.core.cons.call(null,_QMARK_vf_type,_QMARK_op));
var vf_type = cljs.core.nth.call(null,vec__20621,(0),null);
var ks = cljs.core.nth.call(null,vec__20621,(1),null);
var valf = cljs.core.nth.call(null,vec__20621,(2),null);
var G__20622 = (((vf_type instanceof cljs.core.Keyword))?vf_type.fqn:null);
switch (G__20622) {
case "reset":
if(cljs.core.empty_QMARK_.call(null,ks)){
return valf;
} else {
return cljs.core.assoc_in.call(null,accum,ks,valf);
}

break;
case "swap":
if((valf == null)){
return accum;
} else {
if(cljs.core.empty_QMARK_.call(null,ks)){
return valf.call(null,accum);
} else {
return cljs.core.nth.call(null,taoensso.encore.swapped_STAR__in.call(null,accum,ks,valf),(0));
}
}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(vf_type)].join('')));

}
}
}),m,ops);
});
/**
 * Experimental. For use with `swap!`, etc.
 */
taoensso.encore.replace_in = (function taoensso$encore$replace_in(var_args){
var args__18590__auto__ = [];
var len__18583__auto___20626 = arguments.length;
var i__18584__auto___20627 = (0);
while(true){
if((i__18584__auto___20627 < len__18583__auto___20626)){
args__18590__auto__.push((arguments[i__18584__auto___20627]));

var G__20628 = (i__18584__auto___20627 + (1));
i__18584__auto___20627 = G__20628;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((1) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((1)),(0))):null);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18591__auto__);
});

taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ops){
return taoensso.encore.replace_in_STAR_.call(null,null,m,ops);
});

taoensso.encore.replace_in.cljs$lang$maxFixedArity = (1);

taoensso.encore.replace_in.cljs$lang$applyTo = (function (seq20624){
var G__20625 = cljs.core.first.call(null,seq20624);
var seq20624__$1 = cljs.core.next.call(null,seq20624);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic(G__20625,seq20624__$1);
});
/**
 * More powerful version of `swap!`:
 *  * Supports optional `update-in` semantics.
 *  * Swap fn can return `(swapped <new-val> <return-val>)` rather than just
 *    <new-val>. This is useful when writing atomic pull fns, etc.
 */
taoensso.encore.swap_in_BANG_ = (function taoensso$encore$swap_in_BANG_(var_args){
var args20629 = [];
var len__18583__auto___20640 = arguments.length;
var i__18584__auto___20641 = (0);
while(true){
if((i__18584__auto___20641 < len__18583__auto___20640)){
args20629.push((arguments[i__18584__auto___20641]));

var G__20642 = (i__18584__auto___20641 + (1));
i__18584__auto___20641 = G__20642;
continue;
} else {
}
break;
}

var G__20635 = args20629.length;
switch (G__20635) {
case 3:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__18602__auto__ = (new cljs.core.IndexedSeq(args20629.slice((3)),(0)));
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__18602__auto__);

}
});

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,f){
if(cljs.core.empty_QMARK_.call(null,ks)){
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var vec__20636 = taoensso.encore.swapped_STAR_.call(null,f.call(null,old_val));
var new_val = cljs.core.nth.call(null,vec__20636,(0),null);
var return_val = cljs.core.nth.call(null,vec__20636,(1),null);
if(cljs.core.not.call(null,cljs.core.compare_and_set_BANG_.call(null,atom_,old_val,new_val))){
continue;
} else {
return return_val;
}
break;
}
} else {
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var vec__20637 = taoensso.encore.swapped_STAR__in.call(null,old_val,ks,f);
var new_val = cljs.core.nth.call(null,vec__20637,(0),null);
var return_val = cljs.core.nth.call(null,vec__20637,(1),null);
if(cljs.core.not.call(null,cljs.core.compare_and_set_BANG_.call(null,atom_,old_val,new_val))){
continue;
} else {
return return_val;
}
break;
}
}
});

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom_,ks,f,more){
if(cljs.core.truth_((function (){var __x = (function (){try{return cljs.core.count.call(null,more);
}catch (e20638){if((e20638 instanceof Error)){
var __t = e20638;
return taoensso.encore._invar_violation_BANG_.call(null,true,"taoensso.encore",1218,"(even? (count more))",taoensso.encore._invar_undefined_val,__t,null);
} else {
throw e20638;

}
}})();
try{if(cljs.core.even_QMARK_.call(null,__x)){
return true;
} else {
return taoensso.encore._invar_violation_BANG_.call(null);
}
}catch (e20639){if((e20639 instanceof Error)){
var __t = e20639;
return taoensso.encore._invar_violation_BANG_.call(null,true,"taoensso.encore",1218,"(even? (count more))",__x,__t,null);
} else {
throw e20639;

}
}})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"more","more",-418290273,null)))))].join('')));
}

var pairs = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ks,f], null)], null),cljs.core.partition.call(null,(2),more));
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var new_val = taoensso.encore.replace_in_STAR_.call(null,new cljs.core.Keyword(null,"swap","swap",228675637),old_val,pairs);
if(cljs.core.not.call(null,cljs.core.compare_and_set_BANG_.call(null,atom_,old_val,new_val))){
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old_val,new cljs.core.Keyword(null,"new","new",-2085437848),new_val], null);
}
break;
}
});

taoensso.encore.swap_in_BANG_.cljs$lang$applyTo = (function (seq20630){
var G__20631 = cljs.core.first.call(null,seq20630);
var seq20630__$1 = cljs.core.next.call(null,seq20630);
var G__20632 = cljs.core.first.call(null,seq20630__$1);
var seq20630__$2 = cljs.core.next.call(null,seq20630__$1);
var G__20633 = cljs.core.first.call(null,seq20630__$2);
var seq20630__$3 = cljs.core.next.call(null,seq20630__$2);
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20631,G__20632,G__20633,seq20630__$3);
});

taoensso.encore.swap_in_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Is to `reset!` as `swap-in!` is to `swap!`
 */
taoensso.encore.reset_in_BANG_ = (function taoensso$encore$reset_in_BANG_(var_args){
var args20644 = [];
var len__18583__auto___20653 = arguments.length;
var i__18584__auto___20654 = (0);
while(true){
if((i__18584__auto___20654 < len__18583__auto___20653)){
args20644.push((arguments[i__18584__auto___20654]));

var G__20655 = (i__18584__auto___20654 + (1));
i__18584__auto___20654 = G__20655;
continue;
} else {
}
break;
}

var G__20650 = args20644.length;
switch (G__20650) {
case 3:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__18602__auto__ = (new cljs.core.IndexedSeq(args20644.slice((3)),(0)));
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__18602__auto__);

}
});

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,new_val){
if(cljs.core.empty_QMARK_.call(null,ks)){
return cljs.core.reset_BANG_.call(null,atom_,new_val);
} else {
return cljs.core.swap_BANG_.call(null,atom_,(function (old_val){
return cljs.core.assoc_in.call(null,old_val,ks,new_val);
}));
}
});

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom_,ks,new_val,more){
if(cljs.core.truth_((function (){var __x = (function (){try{return cljs.core.count.call(null,more);
}catch (e20651){if((e20651 instanceof Error)){
var __t = e20651;
return taoensso.encore._invar_violation_BANG_.call(null,true,"taoensso.encore",1234,"(even? (count more))",taoensso.encore._invar_undefined_val,__t,null);
} else {
throw e20651;

}
}})();
try{if(cljs.core.even_QMARK_.call(null,__x)){
return true;
} else {
return taoensso.encore._invar_violation_BANG_.call(null);
}
}catch (e20652){if((e20652 instanceof Error)){
var __t = e20652;
return taoensso.encore._invar_violation_BANG_.call(null,true,"taoensso.encore",1234,"(even? (count more))",__x,__t,null);
} else {
throw e20652;

}
}})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"more","more",-418290273,null)))))].join('')));
}

var pairs = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ks,new_val], null)], null),cljs.core.partition.call(null,(2),more));
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var new_val__$1 = taoensso.encore.replace_in_STAR_.call(null,new cljs.core.Keyword(null,"reset","reset",-800929946),old_val,pairs);
if(cljs.core.not.call(null,cljs.core.compare_and_set_BANG_.call(null,atom_,old_val,new_val__$1))){
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old_val,new cljs.core.Keyword(null,"new","new",-2085437848),new_val__$1], null);
}
break;
}
});

taoensso.encore.reset_in_BANG_.cljs$lang$applyTo = (function (seq20645){
var G__20646 = cljs.core.first.call(null,seq20645);
var seq20645__$1 = cljs.core.next.call(null,seq20645);
var G__20647 = cljs.core.first.call(null,seq20645__$1);
var seq20645__$2 = cljs.core.next.call(null,seq20645__$1);
var G__20648 = cljs.core.first.call(null,seq20645__$2);
var seq20645__$3 = cljs.core.next.call(null,seq20645__$2);
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20646,G__20647,G__20648,seq20645__$3);
});

taoensso.encore.reset_in_BANG_.cljs$lang$maxFixedArity = (3);
taoensso.encore.contains_in_QMARK_ = (function taoensso$encore$contains_in_QMARK_(coll,ks){
return cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,coll,cljs.core.butlast.call(null,ks)),cljs.core.last.call(null,ks));
});
taoensso.encore.dissoc_in = (function taoensso$encore$dissoc_in(var_args){
var args__18590__auto__ = [];
var len__18583__auto___20660 = arguments.length;
var i__18584__auto___20661 = (0);
while(true){
if((i__18584__auto___20661 < len__18583__auto___20660)){
args__18590__auto__.push((arguments[i__18584__auto___20661]));

var G__20662 = (i__18584__auto___20661 + (1));
i__18584__auto___20661 = G__20662;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((2) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((2)),(0))):null);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18591__auto__);
});

taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,dissoc_ks){
return taoensso.encore.update_in_STAR_.call(null,m,ks,(function (m__$1){
return cljs.core.apply.call(null,cljs.core.dissoc,m__$1,dissoc_ks);
}));
});

taoensso.encore.dissoc_in.cljs$lang$maxFixedArity = (2);

taoensso.encore.dissoc_in.cljs$lang$applyTo = (function (seq20657){
var G__20658 = cljs.core.first.call(null,seq20657);
var seq20657__$1 = cljs.core.next.call(null,seq20657);
var G__20659 = cljs.core.first.call(null,seq20657__$1);
var seq20657__$2 = cljs.core.next.call(null,seq20657__$1);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic(G__20658,G__20659,seq20657__$2);
});
/**
 * Assocs each kv iff its value is not nil
 */
taoensso.encore.assoc_some = (function taoensso$encore$assoc_some(var_args){
var args__18590__auto__ = [];
var len__18583__auto___20675 = arguments.length;
var i__18584__auto___20676 = (0);
while(true){
if((i__18584__auto___20676 < len__18583__auto___20675)){
args__18590__auto__.push((arguments[i__18584__auto___20676]));

var G__20677 = (i__18584__auto___20676 + (1));
i__18584__auto___20676 = G__20677;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((1) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((1)),(0))):null);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18591__auto__);
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.truth_((function (){var __x = (function (){try{return cljs.core.count.call(null,kvs);
}catch (e20665){if((e20665 instanceof Error)){
var __t = e20665;
return taoensso.encore._invar_violation_BANG_.call(null,true,"taoensso.encore",1284,"(even? (count kvs))",taoensso.encore._invar_undefined_val,__t,null);
} else {
throw e20665;

}
}})();
try{if(cljs.core.even_QMARK_.call(null,__x)){
return true;
} else {
return taoensso.encore._invar_violation_BANG_.call(null);
}
}catch (e20666){if((e20666 instanceof Error)){
var __t = e20666;
return taoensso.encore._invar_violation_BANG_.call(null,true,"taoensso.encore",1284,"(even? (count kvs))",__x,__t,null);
} else {
throw e20666;

}
}})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

return cljs.core.into.call(null,(function (){var or__17525__auto__ = m;
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__18297__auto__ = (function taoensso$encore$iter__20667(s__20668){
return (new cljs.core.LazySeq(null,(function (){
var s__20668__$1 = s__20668;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__20668__$1);
if(temp__4425__auto__){
var s__20668__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20668__$2)){
var c__18295__auto__ = cljs.core.chunk_first.call(null,s__20668__$2);
var size__18296__auto__ = cljs.core.count.call(null,c__18295__auto__);
var b__20670 = cljs.core.chunk_buffer.call(null,size__18296__auto__);
if((function (){var i__20669 = (0);
while(true){
if((i__20669 < size__18296__auto__)){
var vec__20673 = cljs.core._nth.call(null,c__18295__auto__,i__20669);
var k = cljs.core.nth.call(null,vec__20673,(0),null);
var v = cljs.core.nth.call(null,vec__20673,(1),null);
if(!((v == null))){
cljs.core.chunk_append.call(null,b__20670,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__20678 = (i__20669 + (1));
i__20669 = G__20678;
continue;
} else {
var G__20679 = (i__20669 + (1));
i__20669 = G__20679;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20670),taoensso$encore$iter__20667.call(null,cljs.core.chunk_rest.call(null,s__20668__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20670),null);
}
} else {
var vec__20674 = cljs.core.first.call(null,s__20668__$2);
var k = cljs.core.nth.call(null,vec__20674,(0),null);
var v = cljs.core.nth.call(null,vec__20674,(1),null);
if(!((v == null))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),taoensso$encore$iter__20667.call(null,cljs.core.rest.call(null,s__20668__$2)));
} else {
var G__20680 = cljs.core.rest.call(null,s__20668__$2);
s__20668__$1 = G__20680;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__18297__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

taoensso.encore.assoc_some.cljs$lang$maxFixedArity = (1);

taoensso.encore.assoc_some.cljs$lang$applyTo = (function (seq20663){
var G__20664 = cljs.core.first.call(null,seq20663);
var seq20663__$1 = cljs.core.next.call(null,seq20663);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic(G__20664,seq20663__$1);
});
/**
 * Assocs each kv iff its val is truthy
 */
taoensso.encore.assoc_when = (function taoensso$encore$assoc_when(var_args){
var args__18590__auto__ = [];
var len__18583__auto___20693 = arguments.length;
var i__18584__auto___20694 = (0);
while(true){
if((i__18584__auto___20694 < len__18583__auto___20693)){
args__18590__auto__.push((arguments[i__18584__auto___20694]));

var G__20695 = (i__18584__auto___20694 + (1));
i__18584__auto___20694 = G__20695;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((1) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((1)),(0))):null);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18591__auto__);
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.truth_((function (){var __x = (function (){try{return cljs.core.count.call(null,kvs);
}catch (e20683){if((e20683 instanceof Error)){
var __t = e20683;
return taoensso.encore._invar_violation_BANG_.call(null,true,"taoensso.encore",1288,"(even? (count kvs))",taoensso.encore._invar_undefined_val,__t,null);
} else {
throw e20683;

}
}})();
try{if(cljs.core.even_QMARK_.call(null,__x)){
return true;
} else {
return taoensso.encore._invar_violation_BANG_.call(null);
}
}catch (e20684){if((e20684 instanceof Error)){
var __t = e20684;
return taoensso.encore._invar_violation_BANG_.call(null,true,"taoensso.encore",1288,"(even? (count kvs))",__x,__t,null);
} else {
throw e20684;

}
}})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

return cljs.core.into.call(null,(function (){var or__17525__auto__ = m;
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__18297__auto__ = (function taoensso$encore$iter__20685(s__20686){
return (new cljs.core.LazySeq(null,(function (){
var s__20686__$1 = s__20686;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__20686__$1);
if(temp__4425__auto__){
var s__20686__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20686__$2)){
var c__18295__auto__ = cljs.core.chunk_first.call(null,s__20686__$2);
var size__18296__auto__ = cljs.core.count.call(null,c__18295__auto__);
var b__20688 = cljs.core.chunk_buffer.call(null,size__18296__auto__);
if((function (){var i__20687 = (0);
while(true){
if((i__20687 < size__18296__auto__)){
var vec__20691 = cljs.core._nth.call(null,c__18295__auto__,i__20687);
var k = cljs.core.nth.call(null,vec__20691,(0),null);
var v = cljs.core.nth.call(null,vec__20691,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__20688,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__20696 = (i__20687 + (1));
i__20687 = G__20696;
continue;
} else {
var G__20697 = (i__20687 + (1));
i__20687 = G__20697;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20688),taoensso$encore$iter__20685.call(null,cljs.core.chunk_rest.call(null,s__20686__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20688),null);
}
} else {
var vec__20692 = cljs.core.first.call(null,s__20686__$2);
var k = cljs.core.nth.call(null,vec__20692,(0),null);
var v = cljs.core.nth.call(null,vec__20692,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),taoensso$encore$iter__20685.call(null,cljs.core.rest.call(null,s__20686__$2)));
} else {
var G__20698 = cljs.core.rest.call(null,s__20686__$2);
s__20686__$1 = G__20698;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__18297__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

taoensso.encore.assoc_when.cljs$lang$maxFixedArity = (1);

taoensso.encore.assoc_when.cljs$lang$applyTo = (function (seq20681){
var G__20682 = cljs.core.first.call(null,seq20681);
var seq20681__$1 = cljs.core.next.call(null,seq20681);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__20682,seq20681__$1);
});
taoensso.encore.queue_QMARK_ = (function taoensso$encore$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
/**
 * Returns a PersistentQueue
 */
taoensso.encore.queue = (function taoensso$encore$queue(var_args){
var args20699 = [];
var len__18583__auto___20702 = arguments.length;
var i__18584__auto___20703 = (0);
while(true){
if((i__18584__auto___20703 < len__18583__auto___20702)){
args20699.push((arguments[i__18584__auto___20703]));

var G__20704 = (i__18584__auto___20703 + (1));
i__18584__auto___20703 = G__20704;
continue;
} else {
}
break;
}

var G__20701 = args20699.length;
switch (G__20701) {
case 1:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20699.length)].join('')));

}
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.into.call(null,taoensso.encore.queue.call(null),coll);
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
});

taoensso.encore.queue.cljs$lang$maxFixedArity = 1;
taoensso.encore.queue_STAR_ = (function taoensso$encore$queue_STAR_(var_args){
var args__18590__auto__ = [];
var len__18583__auto___20707 = arguments.length;
var i__18584__auto___20708 = (0);
while(true){
if((i__18584__auto___20708 < len__18583__auto___20707)){
args__18590__auto__.push((arguments[i__18584__auto___20708]));

var G__20709 = (i__18584__auto___20708 + (1));
i__18584__auto___20708 = G__20709;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (items){
return taoensso.encore.queue.call(null,items);
});

taoensso.encore.queue_STAR_.cljs$lang$maxFixedArity = (0);

taoensso.encore.queue_STAR_.cljs$lang$applyTo = (function (seq20706){
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20706));
});
/**
 * (seq     {:a :A}) => ([:a :A])
 * (seq-kvs {:a :A}) => (:a :A)
 */
taoensso.encore.seq_kvs = cljs.core.partial.call(null,cljs.core.reduce,cljs.core.concat);
/**
 * Like `apply` but assumes last arg is a map whose elements should be applied
 *   to `f` as an unpaired seq:
 *  (mapply (fn [x & {:keys [y z]}] (str x y z)) 1 {:y 2 :z 3})
 *    where fn will receive args as: `(1 :y 2 :z 3)`.
 */
taoensso.encore.mapply = (function taoensso$encore$mapply(var_args){
var args__18590__auto__ = [];
var len__18583__auto___20712 = arguments.length;
var i__18584__auto___20713 = (0);
while(true){
if((i__18584__auto___20713 < len__18583__auto___20712)){
args__18590__auto__.push((arguments[i__18584__auto___20713]));

var G__20714 = (i__18584__auto___20713 + (1));
i__18584__auto___20713 = G__20714;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((1) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((1)),(0))):null);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18591__auto__);
});

taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,f,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),taoensso.encore.seq_kvs.call(null,cljs.core.last.call(null,args))));
});

taoensso.encore.mapply.cljs$lang$maxFixedArity = (1);

taoensso.encore.mapply.cljs$lang$applyTo = (function (seq20710){
var G__20711 = cljs.core.first.call(null,seq20710);
var seq20710__$1 = cljs.core.next.call(null,seq20710);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic(G__20711,seq20710__$1);
});
taoensso.encore.map_kvs = (function taoensso$encore$map_kvs(kf,vf,m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var vf__$1 = (((vf == null))?(function (_,v){
return v;
}):vf
);
var kf__$1 = (((kf == null))?((function (vf__$1){
return (function (k,_){
return k;
});})(vf__$1))
:(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758)))?((function (vf__$1){
return (function (k,_){
return cljs.core.keyword.call(null,k);
});})(vf__$1))
:kf
));
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (vf__$1,kf__$1){
return (function (m__$1,k,v){
return cljs.core.assoc_BANG_.call(null,m__$1,kf__$1.call(null,k,v),vf__$1.call(null,k,v));
});})(vf__$1,kf__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
}
});
taoensso.encore.map_vals = (function taoensso$encore$map_vals(f,m){
return taoensso.encore.map_kvs.call(null,null,(function (_,v){
return f.call(null,v);
}),m);
});
taoensso.encore.map_keys = (function taoensso$encore$map_keys(f,m){
return taoensso.encore.map_kvs.call(null,(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,f,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758)))?new cljs.core.Keyword(null,"keywordize","keywordize",1381210758):(function (k,_){
return f.call(null,k);
})),null,m);
});
taoensso.encore.filter_kvs = (function taoensso$encore$filter_kvs(predk,predv,m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_((function (){var and__17513__auto__ = predk.call(null,k);
if(cljs.core.truth_(and__17513__auto__)){
return predv.call(null,v);
} else {
return and__17513__auto__;
}
})())){
return m__$1;
} else {
return cljs.core.dissoc.call(null,m__$1,k);
}
}),m,m);
}
});
taoensso.encore.filter_keys = (function taoensso$encore$filter_keys(pred,m){
return taoensso.encore.filter_kvs.call(null,pred,cljs.core.constantly.call(null,true),m);
});
taoensso.encore.filter_vals = (function taoensso$encore$filter_vals(pred,m){
return taoensso.encore.filter_kvs.call(null,cljs.core.constantly.call(null,true),pred,m);
});
/**
 * Smaller, common-case version of `filter-vals`. Esp useful with `nil?`/`blank?`
 *   pred when constructing maps: {:foo (when _ <...>) :bar (when _ <...>)} in a
 *   way that preservers :or semantics.
 */
taoensso.encore.remove_vals = (function taoensso$encore$remove_vals(pred,m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,v))){
return cljs.core.dissoc.call(null,m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});
taoensso.encore.keywordize_map = (function taoensso$encore$keywordize_map(m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
return cljs.core.assoc.call(null,m__$1,cljs.core.keyword.call(null,k),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
}
});
taoensso.encore.as_map_STAR_ = (function taoensso$encore$as_map_STAR_(kf,vf,kvs){
return cljs.core.transduce.call(null,cljs.core.partition_all.call(null,(2)),cljs.core.completing.call(null,(function (acc,p__20721){
var vec__20722 = p__20721;
var k = cljs.core.nth.call(null,vec__20722,(0),null);
var v = cljs.core.nth.call(null,vec__20722,(1),null);
return cljs.core.assoc_BANG_.call(null,acc,kf.call(null,k,v),vf.call(null,k,v));
}),cljs.core.persistent_BANG_),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),kvs);
});
/**
 * Cross between `hash-map` & `map-kvs`
 */
taoensso.encore.as_map = (function taoensso$encore$as_map(var_args){
var args__18590__auto__ = [];
var len__18583__auto___20727 = arguments.length;
var i__18584__auto___20728 = (0);
while(true){
if((i__18584__auto___20728 < len__18583__auto___20727)){
args__18590__auto__.push((arguments[i__18584__auto___20728]));

var G__20729 = (i__18584__auto___20728 + (1));
i__18584__auto___20728 = G__20729;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((1) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((1)),(0))):null);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18591__auto__);
});

taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic = (function (kvs,p__20725){
var vec__20726 = p__20725;
var kf = cljs.core.nth.call(null,vec__20726,(0),null);
var vf = cljs.core.nth.call(null,vec__20726,(1),null);
if(cljs.core.empty_QMARK_.call(null,kvs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var vf__$1 = (((vf == null))?((function (vec__20726,kf,vf){
return (function (_,v){
return v;
});})(vec__20726,kf,vf))
:vf
);
var kf__$1 = (((kf == null))?((function (vf__$1,vec__20726,kf,vf){
return (function (k,_){
return k;
});})(vf__$1,vec__20726,kf,vf))
:(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758)))?((function (vf__$1,vec__20726,kf,vf){
return (function (k,_){
return cljs.core.keyword.call(null,k);
});})(vf__$1,vec__20726,kf,vf))
:kf
));
return taoensso.encore.as_map_STAR_.call(null,kf__$1,vf__$1,kvs);
}
});

taoensso.encore.as_map.cljs$lang$maxFixedArity = (1);

taoensso.encore.as_map.cljs$lang$applyTo = (function (seq20723){
var G__20724 = cljs.core.first.call(null,seq20723);
var seq20723__$1 = cljs.core.next.call(null,seq20723);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic(G__20724,seq20723__$1);
});
/**
 * Faster `zipmap` using transients
 */
taoensso.encore.fzipmap = (function taoensso$encore$fzipmap(ks,vs){
var m = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ks__$1 = cljs.core.seq.call(null,ks);
var vs__$1 = cljs.core.seq.call(null,vs);
while(true){
if(!((ks__$1) && (vs__$1))){
return cljs.core.persistent_BANG_.call(null,m);
} else {
var G__20730 = cljs.core.assoc_BANG_.call(null,m,cljs.core.first.call(null,ks__$1),cljs.core.first.call(null,vs__$1));
var G__20731 = cljs.core.next.call(null,ks__$1);
var G__20732 = cljs.core.next.call(null,vs__$1);
m = G__20730;
ks__$1 = G__20731;
vs__$1 = G__20732;
continue;
}
break;
}
});
/**
 * Like `into` but supports multiple "from"s
 */
taoensso.encore.into_all = (function taoensso$encore$into_all(var_args){
var args20733 = [];
var len__18583__auto___20739 = arguments.length;
var i__18584__auto___20740 = (0);
while(true){
if((i__18584__auto___20740 < len__18583__auto___20739)){
args20733.push((arguments[i__18584__auto___20740]));

var G__20741 = (i__18584__auto___20740 + (1));
i__18584__auto___20740 = G__20741;
continue;
} else {
}
break;
}

var G__20738 = args20733.length;
switch (G__20738) {
case 2:
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__18602__auto__ = (new cljs.core.IndexedSeq(args20733.slice((2)),(0)));
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18602__auto__);

}
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.into.call(null,to,from);
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic = (function (to,from,more){
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.into.call(null,to,from),more);
});

taoensso.encore.into_all.cljs$lang$applyTo = (function (seq20734){
var G__20735 = cljs.core.first.call(null,seq20734);
var seq20734__$1 = cljs.core.next.call(null,seq20734);
var G__20736 = cljs.core.first.call(null,seq20734__$1);
var seq20734__$2 = cljs.core.next.call(null,seq20734__$1);
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic(G__20735,G__20736,seq20734__$2);
});

taoensso.encore.into_all.cljs$lang$maxFixedArity = (2);
/**
 * Greedy version of `interleave`, Ref. http://goo.gl/KvzqWb
 */
taoensso.encore.interleave_all = (function taoensso$encore$interleave_all(var_args){
var args20743 = [];
var len__18583__auto___20749 = arguments.length;
var i__18584__auto___20750 = (0);
while(true){
if((i__18584__auto___20750 < len__18583__auto___20749)){
args20743.push((arguments[i__18584__auto___20750]));

var G__20751 = (i__18584__auto___20750 + (1));
i__18584__auto___20750 = G__20751;
continue;
} else {
}
break;
}

var G__20748 = args20743.length;
switch (G__20748) {
case 0:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__18602__auto__ = (new cljs.core.IndexedSeq(args20743.slice((2)),(0)));
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18602__auto__);

}
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.List.EMPTY;
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1 = (function (c1){
return (new cljs.core.LazySeq(null,(function (){
return c1;
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq.call(null,c1);
var s2 = cljs.core.seq.call(null,c2);
if((s1) && (s2)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s1),cljs.core.cons.call(null,cljs.core.first.call(null,s2),taoensso.encore.interleave_all.call(null,cljs.core.rest.call(null,s1),cljs.core.rest.call(null,s2))));
} else {
if(s1){
return s1;
} else {
if(s2){
return s2;
} else {
return null;
}
}
}
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1)));
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss),cljs.core.apply.call(null,taoensso.encore.interleave_all,cljs.core.map.call(null,cljs.core.rest,ss)));
}),null,null));
});

taoensso.encore.interleave_all.cljs$lang$applyTo = (function (seq20744){
var G__20745 = cljs.core.first.call(null,seq20744);
var seq20744__$1 = cljs.core.next.call(null,seq20744);
var G__20746 = cljs.core.first.call(null,seq20744__$1);
var seq20744__$2 = cljs.core.next.call(null,seq20744__$1);
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic(G__20745,G__20746,seq20744__$2);
});

taoensso.encore.interleave_all.cljs$lang$maxFixedArity = (2);
taoensso.encore.distinct_by = (function taoensso$encore$distinct_by(keyfn,coll){
var step = (function taoensso$encore$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__20759,seen__$1){
while(true){
var vec__20760 = p__20759;
var v = cljs.core.nth.call(null,vec__20760,(0),null);
var xs__$1 = vec__20760;
var temp__4425__auto__ = cljs.core.seq.call(null,xs__$1);
if(temp__4425__auto__){
var s = temp__4425__auto__;
var v_STAR_ = keyfn.call(null,v);
if(cljs.core.contains_QMARK_.call(null,seen__$1,v_STAR_)){
var G__20761 = cljs.core.rest.call(null,s);
var G__20762 = seen__$1;
p__20759 = G__20761;
seen__$1 = G__20762;
continue;
} else {
return cljs.core.cons.call(null,v,taoensso$encore$distinct_by_$_step.call(null,cljs.core.rest.call(null,s),cljs.core.conj.call(null,seen__$1,v_STAR_)));
}
} else {
return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});
return step.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
taoensso.encore.xdistinct = (function taoensso$encore$xdistinct(var_args){
var args20767 = [];
var len__18583__auto___20770 = arguments.length;
var i__18584__auto___20771 = (0);
while(true){
if((i__18584__auto___20771 < len__18583__auto___20770)){
args20767.push((arguments[i__18584__auto___20771]));

var G__20772 = (i__18584__auto___20771 + (1));
i__18584__auto___20771 = G__20772;
continue;
} else {
}
break;
}

var G__20769 = args20767.length;
switch (G__20769) {
case 0:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20767.length)].join('')));

}
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.distinct.call(null);
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1 = (function (keyfn){
return (function (rf){
var seen_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return ((function (seen_){
return (function() {
var G__20774 = null;
var G__20774__0 = (function (){
return rf.call(null);
});
var G__20774__1 = (function (acc){
return rf.call(null,acc);
});
var G__20774__2 = (function (acc,input){
var k = keyfn.call(null,input);
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,seen_),k)){
return acc;
} else {
cljs.core._vreset_BANG_.call(null,seen_,cljs.core.conj.call(null,cljs.core._deref.call(null,seen_),k));

return rf.call(null,acc,input);
}
});
G__20774 = function(acc,input){
switch(arguments.length){
case 0:
return G__20774__0.call(this);
case 1:
return G__20774__1.call(this,acc);
case 2:
return G__20774__2.call(this,acc,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20774.cljs$core$IFn$_invoke$arity$0 = G__20774__0;
G__20774.cljs$core$IFn$_invoke$arity$1 = G__20774__1;
G__20774.cljs$core$IFn$_invoke$arity$2 = G__20774__2;
return G__20774;
})()
;})(seen_))
});
});

taoensso.encore.xdistinct.cljs$lang$maxFixedArity = 1;
taoensso.encore.takev = (function taoensso$encore$takev(n,coll){
if(cljs.core.vector_QMARK_.call(null,coll)){
return taoensso.encore.subvec_STAR_.call(null,coll,(0),n);
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take.call(null,n),coll);
}
});
taoensso.encore.removev = (function taoensso$encore$removev(pred,coll){
return cljs.core.filterv.call(null,cljs.core.complement.call(null,pred),coll);
});
taoensso.encore.distinctv = (function taoensso$encore$distinctv(var_args){
var args20779 = [];
var len__18583__auto___20784 = arguments.length;
var i__18584__auto___20785 = (0);
while(true){
if((i__18584__auto___20785 < len__18583__auto___20784)){
args20779.push((arguments[i__18584__auto___20785]));

var G__20786 = (i__18584__auto___20785 + (1));
i__18584__auto___20785 = G__20786;
continue;
} else {
}
break;
}

var G__20781 = args20779.length;
switch (G__20781) {
case 1:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20779.length)].join('')));

}
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.distinctv.call(null,cljs.core.identity,coll);
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,coll){
var tr = cljs.core.reduce.call(null,(function (p__20782,in$){
var vec__20783 = p__20782;
var v = cljs.core.nth.call(null,vec__20783,(0),null);
var seen = cljs.core.nth.call(null,vec__20783,(1),null);
var in_STAR_ = keyfn.call(null,in$);
if(!(cljs.core.contains_QMARK_.call(null,seen,in_STAR_))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,v,in$),cljs.core.conj.call(null,seen,in_STAR_)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll);
return cljs.core.persistent_BANG_.call(null,cljs.core.nth.call(null,tr,(0)));
});

taoensso.encore.distinctv.cljs$lang$maxFixedArity = 2;
/**
 * Reverse comparator
 */
taoensso.encore.rcompare = (function taoensso$encore$rcompare(x,y){
return cljs.core.compare.call(null,y,x);
});
taoensso.encore.nested_merge_with = (function taoensso$encore$nested_merge_with(var_args){
var args__18590__auto__ = [];
var len__18583__auto___20790 = arguments.length;
var i__18584__auto___20791 = (0);
while(true){
if((i__18584__auto___20791 < len__18583__auto___20790)){
args__18590__auto__.push((arguments[i__18584__auto___20791]));

var G__20792 = (i__18584__auto___20791 + (1));
i__18584__auto___20791 = G__20792;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((1) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((1)),(0))):null);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18591__auto__);
});

taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps))){
var merge_entry = (function (m,e){
var k = cljs.core.key.call(null,e);
var rv = cljs.core.val.call(null,e);
if(!(cljs.core.contains_QMARK_.call(null,m,k))){
return cljs.core.assoc.call(null,m,k,rv);
} else {
var lv = cljs.core.get.call(null,m,k);
if((cljs.core.map_QMARK_.call(null,lv)) && (cljs.core.map_QMARK_.call(null,rv))){
return cljs.core.assoc.call(null,m,k,taoensso.encore.nested_merge_with.call(null,f,lv,rv));
} else {
return cljs.core.assoc.call(null,m,k,f.call(null,lv,rv));
}
}
});
var merge2 = ((function (merge_entry){
return (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry,(function (){var or__17525__auto__ = m1;
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});})(merge_entry))
;
return cljs.core.reduce.call(null,merge2,maps);
} else {
return null;
}
});

taoensso.encore.nested_merge_with.cljs$lang$maxFixedArity = (1);

taoensso.encore.nested_merge_with.cljs$lang$applyTo = (function (seq20788){
var G__20789 = cljs.core.first.call(null,seq20788);
var seq20788__$1 = cljs.core.next.call(null,seq20788);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic(G__20789,seq20788__$1);
});
taoensso.encore.nested_merge = cljs.core.partial.call(null,taoensso.encore.nested_merge_with,(function (x,y){
if((cljs.core.map_QMARK_.call(null,x)) && ((y == null))){
return x;
} else {
return y;
}
}));
/**
 * Like `repeatedly` but faster and `conj`s items into given collection
 */
taoensso.encore.repeatedly_into = (function taoensso$encore$repeatedly_into(coll,n,f){
if((function (){var and__17513__auto__ = (n > (10));
if(and__17513__auto__){
if(!((coll == null))){
if(((coll.cljs$lang$protocol_mask$partition1$ & (4))) || (coll.cljs$core$IEditableCollection$)){
return true;
} else {
return false;
}
} else {
return false;
}
} else {
return and__17513__auto__;
}
})()){
var v = cljs.core.transient$.call(null,coll);
var idx = (0);
while(true){
if((idx === n)){
return cljs.core.persistent_BANG_.call(null,v);
} else {
var G__20797 = cljs.core.conj_BANG_.call(null,v,f.call(null));
var G__20798 = (idx + (1));
v = G__20797;
idx = G__20798;
continue;
}
break;
}
} else {
var v = coll;
var idx = (0);
while(true){
if((idx === n)){
return v;
} else {
var G__20799 = cljs.core.conj.call(null,v,f.call(null));
var G__20800 = (idx + (1));
v = G__20799;
idx = G__20800;
continue;
}
break;
}
}
});
taoensso.encore.str_builder_QMARK_ = (function taoensso$encore$str_builder_QMARK_(x){
return (x instanceof goog.string.StringBuffer);
});
/**
 * For cross-platform string building
 */
taoensso.encore.str_builder = (function() {
var taoensso$encore$str_builder = null;
var taoensso$encore$str_builder__0 = (function (){
return (new goog.string.StringBuffer());
});
var taoensso$encore$str_builder__1 = (function (s_init){
return (new goog.string.StringBuffer(s_init));
});
taoensso$encore$str_builder = function(s_init){
switch(arguments.length){
case 0:
return taoensso$encore$str_builder__0.call(this);
case 1:
return taoensso$encore$str_builder__1.call(this,s_init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_builder__0;
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_builder__1;
return taoensso$encore$str_builder;
})()
;
/**
 * For cross-platform string building
 */
taoensso.encore.sb_append = (function taoensso$encore$sb_append(str_builder,s){
return str_builder.append(s);
});
/**
 * String builder reducing fn
 */
taoensso.encore.str_rf = (function() {
var taoensso$encore$str_rf = null;
var taoensso$encore$str_rf__0 = (function (){
return taoensso.encore.str_builder.call(null);
});
var taoensso$encore$str_rf__1 = (function (acc){
if(cljs.core.truth_(taoensso.encore.str_builder_QMARK_.call(null,acc))){
return acc;
} else {
return taoensso.encore.str_builder.call(null,[cljs.core.str(acc)].join(''));
}
});
var taoensso$encore$str_rf__2 = (function (acc,in$){
return taoensso.encore.sb_append.call(null,(cljs.core.truth_(taoensso.encore.str_builder_QMARK_.call(null,acc))?acc:taoensso.encore.str_builder.call(null,[cljs.core.str(acc)].join(''))),[cljs.core.str(in$)].join(''));
});
taoensso$encore$str_rf = function(acc,in$){
switch(arguments.length){
case 0:
return taoensso$encore$str_rf__0.call(this);
case 1:
return taoensso$encore$str_rf__1.call(this,acc);
case 2:
return taoensso$encore$str_rf__2.call(this,acc,in$);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_rf__0;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_rf__1;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$str_rf__2;
return taoensso$encore$str_rf;
})()
;
taoensso.encore.undefined__GT_nil = (function taoensso$encore$undefined__GT_nil(x){
if((void 0 === x)){
return null;
} else {
return x;
}
});
taoensso.encore.nil__GT_str = (function taoensso$encore$nil__GT_str(x){
if(((void 0 === x)) || ((x == null))){
return "nil";
} else {
return x;
}
});
/**
 * Faster, transducer-based generalization of `clojure.string/join` with `xform`
 *  support
 */
taoensso.encore.str_join = (function taoensso$encore$str_join(var_args){
var args20805 = [];
var len__18583__auto___20808 = arguments.length;
var i__18584__auto___20809 = (0);
while(true){
if((i__18584__auto___20809 < len__18583__auto___20808)){
args20805.push((arguments[i__18584__auto___20809]));

var G__20810 = (i__18584__auto___20809 + (1));
i__18584__auto___20809 = G__20810;
continue;
} else {
}
break;
}

var G__20807 = args20805.length;
switch (G__20807) {
case 1:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20805.length)].join('')));

}
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.str_join.call(null,null,null,coll);
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2 = (function (separator,coll){
return taoensso.encore.str_join.call(null,separator,null,coll);
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3 = (function (separator,xform,coll){
if(cljs.core.truth_((function (){var and__17513__auto__ = separator;
if(cljs.core.truth_(and__17513__auto__)){
return cljs.core.not_EQ_.call(null,separator,"");
} else {
return and__17513__auto__;
}
})())){
var sep_xform = cljs.core.interpose.call(null,separator);
var str_rf_STAR_ = cljs.core.completing.call(null,taoensso.encore.str_rf,cljs.core.str);
if(cljs.core.truth_(xform)){
return cljs.core.transduce.call(null,cljs.core.comp.call(null,xform,sep_xform),str_rf_STAR_,coll);
} else {
return cljs.core.transduce.call(null,sep_xform,str_rf_STAR_,coll);
}
} else {
if(cljs.core.truth_(xform)){
return cljs.core.transduce.call(null,xform,cljs.core.completing.call(null,taoensso.encore.str_rf,cljs.core.str),coll);
} else {
return [cljs.core.str(cljs.core.reduce.call(null,taoensso.encore.str_rf,coll))].join('');
}
}
});

taoensso.encore.str_join.cljs$lang$maxFixedArity = 3;
taoensso.encore.format_STAR_ = (function taoensso$encore$format_STAR_(fmt,args){
var fmt__$1 = (function (){var or__17525__auto__ = fmt;
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return "";
}
})();
var args__$1 = cljs.core.mapv.call(null,taoensso.encore.nil__GT_str,args);
return cljs.core.apply.call(null,goog.string.format,fmt__$1,args__$1);
});
/**
 * Like `clojure.core/format` but:
 *  * Returns "" when fmt is nil rather than throwing an NPE.
 *  * Formats nil as "nil" rather than "null".
 *  * Provides ClojureScript support via goog.string.format (this has fewer
 *    formatting options than Clojure's `format`!).
 */
taoensso.encore.format = (function taoensso$encore$format(var_args){
var args__18590__auto__ = [];
var len__18583__auto___20814 = arguments.length;
var i__18584__auto___20815 = (0);
while(true){
if((i__18584__auto___20815 < len__18583__auto___20814)){
args__18590__auto__.push((arguments[i__18584__auto___20815]));

var G__20816 = (i__18584__auto___20815 + (1));
i__18584__auto___20815 = G__20816;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((1) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((1)),(0))):null);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18591__auto__);
});

taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return taoensso.encore.format_STAR_.call(null,fmt,args);
});

taoensso.encore.format.cljs$lang$maxFixedArity = (1);

taoensso.encore.format.cljs$lang$applyTo = (function (seq20812){
var G__20813 = cljs.core.first.call(null,seq20812);
var seq20812__$1 = cljs.core.next.call(null,seq20812);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic(G__20813,seq20812__$1);
});
/**
 * Workaround for http://dev.clojure.org/jira/browse/CLJS-794,
 *                http://dev.clojure.org/jira/browse/CLJS-911.
 * 
 *   Note that ClojureScript 1.7.145 technically introduced a breaking "fix" for
 *   CLJS-911 (Ref. https://goo.gl/bk5hcT) but it's a mess in an attempt to keep
 *   some compatibility with the previous broken behaviour. The merged CLJS-911 fix
 *   provides only inconsistent (single-match) and error-prone compatibility with
 *   Clojure's `str/replace`. CLJS-794 is also still unresolved.
 * 
 *   This util provides proper consistent Clojure/Script replace behaviour.
 */
taoensso.encore.str_replace = (function taoensso$encore$str_replace(s,match,replacement){
if(typeof match === 'string'){
return s.replace((new RegExp(goog.string.regExpEscape(match),"g")),replacement);
} else {
if((match instanceof RegExp)){
var flags = [cljs.core.str("g"),cljs.core.str((cljs.core.truth_(match.ignoreCase)?"i":null)),cljs.core.str((cljs.core.truth_(match.multiline)?"m":null))].join('');
var replacement__$1 = ((typeof replacement === 'string')?replacement:((function (flags){
return (function() { 
var G__20817__delegate = function (args){
return replacement.call(null,cljs.core.vec.call(null,args));
};
var G__20817 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20818__i = 0, G__20818__a = new Array(arguments.length -  0);
while (G__20818__i < G__20818__a.length) {G__20818__a[G__20818__i] = arguments[G__20818__i + 0]; ++G__20818__i;}
  args = new cljs.core.IndexedSeq(G__20818__a,0);
} 
return G__20817__delegate.call(this,args);};
G__20817.cljs$lang$maxFixedArity = 0;
G__20817.cljs$lang$applyTo = (function (arglist__20819){
var args = cljs.core.seq(arglist__20819);
return G__20817__delegate(args);
});
G__20817.cljs$core$IFn$_invoke$arity$variadic = G__20817__delegate;
return G__20817;
})()
;})(flags))
);
return s.replace((new RegExp(match.source,flags)),replacement__$1);
} else {
throw [cljs.core.str("Invalid match arg: "),cljs.core.str(match)].join('');

}
}
});
/**
 * Gives a consistent, flexible, cross-platform substring API built on
 *   `sub-indexes`
 */
taoensso.encore.substr = (function taoensso$encore$substr(var_args){
var args__18590__auto__ = [];
var len__18583__auto___20827 = arguments.length;
var i__18584__auto___20828 = (0);
while(true){
if((i__18584__auto___20828 < len__18583__auto___20827)){
args__18590__auto__.push((arguments[i__18584__auto___20828]));

var G__20829 = (i__18584__auto___20828 + (1));
i__18584__auto___20828 = G__20829;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((2) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((2)),(0))):null);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18591__auto__);
});

taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic = (function (s,start_idx,p__20823){
var vec__20824 = p__20823;
var _QMARK_max_len = cljs.core.nth.call(null,vec__20824,(0),null);
if(cljs.core.truth_((function (){var __x = s;
try{if(typeof __x === 'string'){
return true;
} else {
return taoensso.encore._invar_violation_BANG_.call(null);
}
}catch (e20825){if((e20825 instanceof Error)){
var __t = e20825;
return taoensso.encore._invar_violation_BANG_.call(null,true,"taoensso.encore",1637,"(string? s)",__x,__t,null);
} else {
throw e20825;

}
}})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"s","s",-948495851,null))))].join('')));
}

var vec__20826 = taoensso.encore.sub_indexes.call(null,s,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__20826,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__20826,(1),null);
return s.substring(start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.substr.cljs$lang$maxFixedArity = (2);

taoensso.encore.substr.cljs$lang$applyTo = (function (seq20820){
var G__20821 = cljs.core.first.call(null,seq20820);
var seq20820__$1 = cljs.core.next.call(null,seq20820);
var G__20822 = cljs.core.first.call(null,seq20820__$1);
var seq20820__$2 = cljs.core.next.call(null,seq20820__$1);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic(G__20821,G__20822,seq20820__$2);
});
taoensso.encore.str_contains_QMARK_ = (function taoensso$encore$str_contains_QMARK_(s,substr){
return cljs.core.not_EQ_.call(null,(-1),s.indexOf(substr));
});
taoensso.encore.str_starts_with_QMARK_ = (function taoensso$encore$str_starts_with_QMARK_(s,substr){
return (s.indexOf(substr) === (0));
});
taoensso.encore.str_ends_with_QMARK_ = (function taoensso$encore$str_ends_with_QMARK_(s,substr){
var s_len = s.length;
var substr_len = substr.length;
if((s_len >= substr_len)){
return cljs.core.not_EQ_.call(null,(-1),s.indexOf(substr,(s_len - substr_len)));
} else {
return null;
}
});
taoensso.encore.str__QMARK_index = (function taoensso$encore$str__QMARK_index(var_args){
var args__18590__auto__ = [];
var len__18583__auto___20835 = arguments.length;
var i__18584__auto___20836 = (0);
while(true){
if((i__18584__auto___20836 < len__18583__auto___20835)){
args__18590__auto__.push((arguments[i__18584__auto___20836]));

var G__20837 = (i__18584__auto___20836 + (1));
i__18584__auto___20836 = G__20837;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((2) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((2)),(0))):null);
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18591__auto__);
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$variadic = (function (s,substr,p__20833){
var vec__20834 = p__20833;
var start_idx = cljs.core.nth.call(null,vec__20834,(0),null);
var last_QMARK_ = cljs.core.nth.call(null,vec__20834,(1),null);
var start_idx__$1 = ((function (){var or__17525__auto__ = start_idx;
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return (0);
}
})() | (0));
var result = ((cljs.core.truth_(last_QMARK_)?s.lastIndexOf(substr,start_idx__$1):s.indexOf(substr,start_idx__$1)) | (0));
if(cljs.core.not_EQ_.call(null,result,(-1))){
return result;
} else {
return null;
}
});

taoensso.encore.str__QMARK_index.cljs$lang$maxFixedArity = (2);

taoensso.encore.str__QMARK_index.cljs$lang$applyTo = (function (seq20830){
var G__20831 = cljs.core.first.call(null,seq20830);
var seq20830__$1 = cljs.core.next.call(null,seq20830);
var G__20832 = cljs.core.first.call(null,seq20830__$1);
var seq20830__$2 = cljs.core.next.call(null,seq20830__$1);
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$variadic(G__20831,G__20832,seq20830__$2);
});
/**
 * Like `clojure.string/join` but ensures no double separators
 */
taoensso.encore.join_once = (function taoensso$encore$join_once(var_args){
var args__18590__auto__ = [];
var len__18583__auto___20840 = arguments.length;
var i__18584__auto___20841 = (0);
while(true){
if((i__18584__auto___20841 < len__18583__auto___20840)){
args__18590__auto__.push((arguments[i__18584__auto___20841]));

var G__20842 = (i__18584__auto___20841 + (1));
i__18584__auto___20841 = G__20842;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((1) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((1)),(0))):null);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18591__auto__);
});

taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic = (function (separator,coll){
return cljs.core.reduce.call(null,(function (s1,s2){
var s1__$1 = [cljs.core.str(s1)].join('');
var s2__$1 = [cljs.core.str(s2)].join('');
if(cljs.core.truth_(taoensso.encore.str_ends_with_QMARK_.call(null,s1__$1,separator))){
if(cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_.call(null,s2__$1,separator))){
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1.substring((1)))].join('');
} else {
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1)].join('');
}
} else {
if(cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_.call(null,s2__$1,separator))){
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1)].join('');
} else {
if((cljs.core._EQ_.call(null,s1__$1,"")) || (cljs.core._EQ_.call(null,s2__$1,""))){
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1)].join('');
} else {
return [cljs.core.str(s1__$1),cljs.core.str(separator),cljs.core.str(s2__$1)].join('');
}
}
}
}),null,coll);
});

taoensso.encore.join_once.cljs$lang$maxFixedArity = (1);

taoensso.encore.join_once.cljs$lang$applyTo = (function (seq20838){
var G__20839 = cljs.core.first.call(null,seq20838);
var seq20838__$1 = cljs.core.next.call(null,seq20838);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic(G__20839,seq20838__$1);
});
/**
 * Joins string paths (URLs, file paths, etc.) ensuring correct "/"
 *   interposition
 */
taoensso.encore.path = (function taoensso$encore$path(var_args){
var args__18590__auto__ = [];
var len__18583__auto___20844 = arguments.length;
var i__18584__auto___20845 = (0);
while(true){
if((i__18584__auto___20845 < len__18583__auto___20844)){
args__18590__auto__.push((arguments[i__18584__auto___20845]));

var G__20846 = (i__18584__auto___20845 + (1));
i__18584__auto___20845 = G__20846;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic = (function (parts){
return cljs.core.apply.call(null,taoensso.encore.join_once,"/",parts);
});

taoensso.encore.path.cljs$lang$maxFixedArity = (0);

taoensso.encore.path.cljs$lang$applyTo = (function (seq20843){
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20843));
});
/**
 * Converts all word breaks of any form and length (including line breaks of any
 *   form, tabs, spaces, etc.) to a single regular space
 */
taoensso.encore.norm_word_breaks = (function taoensso$encore$norm_word_breaks(s){
return clojure.string.replace.call(null,[cljs.core.str(s)].join(''),/\s+/," ");
});
taoensso.encore.count_words = (function taoensso$encore$count_words(s){
if(clojure.string.blank_QMARK_.call(null,s)){
return (0);
} else {
return cljs.core.count.call(null,clojure.string.split.call(null,s,/\s+/));
}
});
/**
 * Returns a UUIDv4 string of form "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",
 *   Ref. http://www.ietf.org/rfc/rfc4122.txt,
 *     https://gist.github.com/franks42/4159427
 */
taoensso.encore.uuid_str = (function taoensso$encore$uuid_str(var_args){
var args20847 = [];
var len__18583__auto___20850 = arguments.length;
var i__18584__auto___20851 = (0);
while(true){
if((i__18584__auto___20851 < len__18583__auto___20850)){
args20847.push((arguments[i__18584__auto___20851]));

var G__20852 = (i__18584__auto___20851 + (1));
i__18584__auto___20851 = G__20852;
continue;
} else {
}
break;
}

var G__20849 = args20847.length;
switch (G__20849) {
case 1:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20847.length)].join('')));

}
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1 = (function (max_length){
return taoensso.encore.substr.call(null,taoensso.encore.uuid_str.call(null),(0),max_length);
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0 = (function (){
var hex = (function (){
return cljs.core.rand_int.call(null,(16)).toString((16));
});
var rhex = ((8) | ((3) & cljs.core.rand_int.call(null,(16)))).toString((16));
return [cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str("4"),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str(rhex),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null))].join('');
});

taoensso.encore.uuid_str.cljs$lang$maxFixedArity = 1;
taoensso.encore.gc_rate = (1.0 / (16000));
taoensso.encore.gc_now_QMARK_ = (function taoensso$encore$gc_now_QMARK_(){
return (cljs.core.rand.call(null) <= taoensso.encore.gc_rate);
});
/**
 * Swaps associative value at key and returns the new value. Specialized, fast
 *   `swap-in!` for use mostly by memoization utils.
 */
taoensso.encore.swap_val_BANG_ = (function taoensso$encore$swap_val_BANG_(atom_,k,f){
while(true){
var old_m = cljs.core.deref.call(null,atom_);
var new_v = f.call(null,cljs.core.get.call(null,old_m,k));
var new_m = cljs.core.assoc.call(null,old_m,k,new_v);
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,atom_,old_m,new_m))){
return new_v;
} else {
continue;
}
break;
}
});
/**
 * Like `clojure.core/memoize` but faster, uses delays to avoid write races
 */
taoensso.encore.memoize_ = (function taoensso$encore$memoize_(f){
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() { 
var G__20854__delegate = function (args){
return cljs.core.deref.call(null,(function (){var or__17525__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),args);
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return taoensso.encore.swap_val_BANG_.call(null,cache_,args,((function (or__17525__auto__,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__17525__auto__,cache_){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(or__17525__auto__,cache_))
,null));
}
});})(or__17525__auto__,cache_))
);
}
})());
};
var G__20854 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20855__i = 0, G__20855__a = new Array(arguments.length -  0);
while (G__20855__i < G__20855__a.length) {G__20855__a[G__20855__i] = arguments[G__20855__i + 0]; ++G__20855__i;}
  args = new cljs.core.IndexedSeq(G__20855__a,0);
} 
return G__20854__delegate.call(this,args);};
G__20854.cljs$lang$maxFixedArity = 0;
G__20854.cljs$lang$applyTo = (function (arglist__20856){
var args = cljs.core.seq(arglist__20856);
return G__20854__delegate(args);
});
G__20854.cljs$core$IFn$_invoke$arity$variadic = G__20854__delegate;
return G__20854;
})()
;
;})(cache_))
});
/**
 * Fastest possible 0-arg `memoize_`
 */
taoensso.encore.a0_memoize_ = (function taoensso$encore$a0_memoize_(f){
var cache_ = cljs.core.atom.call(null,null);
return ((function (cache_){
return (function (){
return cljs.core.deref.call(null,(function (){var or__17525__auto__ = cljs.core.deref.call(null,cache_);
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return cljs.core.swap_BANG_.call(null,cache_,((function (or__17525__auto__,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__17525__auto__,cache_){
return (function (){
return f.call(null);
});})(or__17525__auto__,cache_))
,null));
}
});})(or__17525__auto__,cache_))
);
}
})());
});
;})(cache_))
});
/**
 * Fastest possible 0/1-arg `memoize_`
 */
taoensso.encore.a1_memoize_ = (function taoensso$encore$a1_memoize_(f){
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() {
var G__20857 = null;
var G__20857__0 = (function (){
return cljs.core.deref.call(null,(function (){var or__17525__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),taoensso.encore.sentinel);
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return taoensso.encore.swap_val_BANG_.call(null,cache_,taoensso.encore.sentinel,((function (or__17525__auto__,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__17525__auto__,cache_){
return (function (){
return f.call(null);
});})(or__17525__auto__,cache_))
,null));
}
});})(or__17525__auto__,cache_))
);
}
})());
});
var G__20857__1 = (function (x){
return cljs.core.deref.call(null,(function (){var or__17525__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),x);
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return taoensso.encore.swap_val_BANG_.call(null,cache_,x,((function (or__17525__auto__,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__17525__auto__,cache_){
return (function (){
return f.call(null,x);
});})(or__17525__auto__,cache_))
,null));
}
});})(or__17525__auto__,cache_))
);
}
})());
});
G__20857 = function(x){
switch(arguments.length){
case 0:
return G__20857__0.call(this);
case 1:
return G__20857__1.call(this,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20857.cljs$core$IFn$_invoke$arity$0 = G__20857__0;
G__20857.cljs$core$IFn$_invoke$arity$1 = G__20857__1;
return G__20857;
})()
;})(cache_))
});
/**
 * Great for Reactjs render op caching on mobile devices, etc.
 */
taoensso.encore.memoize1 = (function taoensso$encore$memoize1(f){
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() { 
var G__20858__delegate = function (args){
return cljs.core.deref.call(null,(function (){var or__17525__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),args);
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,cache_,((function (or__17525__auto__,cache_){
return (function (cache){
if(cljs.core.truth_(cljs.core.get.call(null,cache,args))){
return cache;
} else {
return cljs.core.PersistentArrayMap.fromArray([args,(new cljs.core.Delay(((function (or__17525__auto__,cache_){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(or__17525__auto__,cache_))
,null))], true, false);
}
});})(or__17525__auto__,cache_))
),args);
}
})());
};
var G__20858 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20859__i = 0, G__20859__a = new Array(arguments.length -  0);
while (G__20859__i < G__20859__a.length) {G__20859__a[G__20859__i] = arguments[G__20859__i + 0]; ++G__20859__i;}
  args = new cljs.core.IndexedSeq(G__20859__a,0);
} 
return G__20858__delegate.call(this,args);};
G__20858.cljs$lang$maxFixedArity = 0;
G__20858.cljs$lang$applyTo = (function (arglist__20860){
var args = cljs.core.seq(arglist__20860);
return G__20858__delegate(args);
});
G__20858.cljs$core$IFn$_invoke$arity$variadic = G__20858__delegate;
return G__20858;
})()
;
;})(cache_))
});
/**
 * Like `(memoize* f)` but takes an explicit cache atom (possibly nil)
 *   and immediately applies memoized f to given arguments
 */
taoensso.encore.memoized = (function taoensso$encore$memoized(var_args){
var args__18590__auto__ = [];
var len__18583__auto___20864 = arguments.length;
var i__18584__auto___20865 = (0);
while(true){
if((i__18584__auto___20865 < len__18583__auto___20864)){
args__18590__auto__.push((arguments[i__18584__auto___20865]));

var G__20866 = (i__18584__auto___20865 + (1));
i__18584__auto___20865 = G__20866;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((2) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((2)),(0))):null);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18591__auto__);
});

taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic = (function (cache,f,args){
if(cljs.core.not.call(null,cache)){
return cljs.core.apply.call(null,f,args);
} else {
return cljs.core.deref.call(null,taoensso.encore.swap_val_BANG_.call(null,cache,args,(function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,f,args);
}),null));
}
})));
}
});

taoensso.encore.memoized.cljs$lang$maxFixedArity = (2);

taoensso.encore.memoized.cljs$lang$applyTo = (function (seq20861){
var G__20862 = cljs.core.first.call(null,seq20861);
var seq20861__$1 = cljs.core.next.call(null,seq20861);
var G__20863 = cljs.core.first.call(null,seq20861__$1);
var seq20861__$2 = cljs.core.next.call(null,seq20861__$1);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic(G__20862,G__20863,seq20861__$2);
});
/**
 * Like `clojure.core/memoize` but:
 *  * Uses delays to prevent race conditions on writes.
 *  * Supports auto invalidation & gc with `ttl-ms` option.
 *  * Supports manual invalidation by prepending args with `:mem/del` or `:mem/fresh`.
 *  * Supports cache size limit & gc with `cache-size` option.
 * 
 *   Much faster than `clojure.core.memoize`.
 */
taoensso.encore.memoize_STAR_ = (function taoensso$encore$memoize_STAR_(var_args){
var args20867 = [];
var len__18583__auto___20891 = arguments.length;
var i__18584__auto___20892 = (0);
while(true){
if((i__18584__auto___20892 < len__18583__auto___20891)){
args20867.push((arguments[i__18584__auto___20892]));

var G__20893 = (i__18584__auto___20892 + (1));
i__18584__auto___20892 = G__20893;
continue;
} else {
}
break;
}

var G__20869 = args20867.length;
switch (G__20869) {
case 1:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20867.length)].join('')));

}
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() { 
var G__20895__delegate = function (p__20870){
var vec__20871 = p__20870;
var arg1 = cljs.core.nth.call(null,vec__20871,(0),null);
var argn = cljs.core.nthnext.call(null,vec__20871,(1));
var args = vec__20871;
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","get","mem/get",1683009136)))){
return cljs.core.deref.call(null,cache_);
} else {
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.first.call(null,argn),new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,cache_,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core.swap_BANG_.call(null,cache_,cljs.core.dissoc,argn);
}

return null;
} else {
var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);
return cljs.core.deref.call(null,(function (){var or__17525__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),args__$1);
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return taoensso.encore.swap_val_BANG_.call(null,cache_,args__$1,((function (or__17525__auto__,fresh_QMARK_,args__$1,vec__20871,arg1,argn,args,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_((function (){var and__17513__auto__ = _QMARK_dv;
if(cljs.core.truth_(and__17513__auto__)){
return cljs.core.not.call(null,fresh_QMARK_);
} else {
return and__17513__auto__;
}
})())){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__17525__auto__,fresh_QMARK_,args__$1,vec__20871,arg1,argn,args,cache_){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(or__17525__auto__,fresh_QMARK_,args__$1,vec__20871,arg1,argn,args,cache_))
,null));
}
});})(or__17525__auto__,fresh_QMARK_,args__$1,vec__20871,arg1,argn,args,cache_))
);
}
})());

}
}
};
var G__20895 = function (var_args){
var p__20870 = null;
if (arguments.length > 0) {
var G__20896__i = 0, G__20896__a = new Array(arguments.length -  0);
while (G__20896__i < G__20896__a.length) {G__20896__a[G__20896__i] = arguments[G__20896__i + 0]; ++G__20896__i;}
  p__20870 = new cljs.core.IndexedSeq(G__20896__a,0);
} 
return G__20895__delegate.call(this,p__20870);};
G__20895.cljs$lang$maxFixedArity = 0;
G__20895.cljs$lang$applyTo = (function (arglist__20897){
var p__20870 = cljs.core.seq(arglist__20897);
return G__20895__delegate(p__20870);
});
G__20895.cljs$core$IFn$_invoke$arity$variadic = G__20895__delegate;
return G__20895;
})()
;
;})(cache_))
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (ttl_ms,f){
var __x_20898 = ttl_ms;
try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_.call(null,__x_20898))){
} else {
taoensso.encore._invar_violation_BANG_.call(null);
}
}catch (e20872){if((e20872 instanceof Error)){
var __t_20899 = e20872;
taoensso.encore._invar_violation_BANG_.call(null,true,"taoensso.encore",1890,"(pos-int? ttl-ms)",__x_20898,__t_20899,null);
} else {
throw e20872;

}
}
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var gc_running_QMARK__ = cljs.core.atom.call(null,false);
var ttl_ms__$1 = cljs.core.long$.call(null,ttl_ms);
var gc_fn = ((function (cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (){
if(cljs.core.truth_((function (){var and__17513__auto__ = taoensso.encore.gc_now_QMARK_.call(null);
if(cljs.core.truth_(and__17513__auto__)){
return taoensso.encore.swap_in_BANG_.call(null,gc_running_QMARK__,cljs.core.PersistentVector.EMPTY,((function (and__17513__auto__,cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (b){
return taoensso.encore.swapped.call(null,true,cljs.core.not.call(null,b));
});})(and__17513__auto__,cache_,gc_running_QMARK__,ttl_ms__$1))
);
} else {
return and__17513__auto__;
}
})())){
var instant = taoensso.encore.now_udt.call(null);
var snapshot = cljs.core.deref.call(null,cache_);
var ks_to_gc = cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (instant,snapshot,cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (acc,k,p__20873){
var vec__20874 = p__20873;
var dv = cljs.core.nth.call(null,vec__20874,(0),null);
var udt = cljs.core.nth.call(null,vec__20874,(1),null);
var cv = vec__20874;
if(((instant - udt) > ttl_ms__$1)){
return cljs.core.conj_BANG_.call(null,acc,k);
} else {
return acc;
}
});})(instant,snapshot,cache_,gc_running_QMARK__,ttl_ms__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),snapshot));
cljs.core.swap_BANG_.call(null,cache_,((function (instant,snapshot,ks_to_gc,cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (instant,snapshot,ks_to_gc,cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (acc,in$){
return cljs.core.dissoc_BANG_.call(null,acc,in$);
});})(instant,snapshot,ks_to_gc,cache_,gc_running_QMARK__,ttl_ms__$1))
,cljs.core.transient$.call(null,m),ks_to_gc));
});})(instant,snapshot,ks_to_gc,cache_,gc_running_QMARK__,ttl_ms__$1))
);

return cljs.core.reset_BANG_.call(null,gc_running_QMARK__,false);
} else {
return null;
}
});})(cache_,gc_running_QMARK__,ttl_ms__$1))
;
return ((function (cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn){
return (function() { 
var G__20900__delegate = function (p__20875){
var vec__20876 = p__20875;
var arg1 = cljs.core.nth.call(null,vec__20876,(0),null);
var argn = cljs.core.nthnext.call(null,vec__20876,(1));
var args = vec__20876;
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","get","mem/get",1683009136)))){
return cljs.core.deref.call(null,cache_);
} else {
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.first.call(null,argn),new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,cache_,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core.swap_BANG_.call(null,cache_,cljs.core.dissoc,argn);
}

return null;
} else {
gc_fn.call(null);

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);
var instant = taoensso.encore.now_udt.call(null);
var vec__20877 = taoensso.encore.swap_val_BANG_.call(null,cache_,args__$1,((function (fresh_QMARK_,args__$1,instant,vec__20876,arg1,argn,args,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__17513__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__17513__auto__)){
var and__17513__auto____$1 = cljs.core.not.call(null,fresh_QMARK_);
if(and__17513__auto____$1){
var vec__20879 = _QMARK_cv;
var _dv = cljs.core.nth.call(null,vec__20879,(0),null);
var udt = cljs.core.nth.call(null,vec__20879,(1),null);
return ((instant - udt) < ttl_ms__$1);
} else {
return and__17513__auto____$1;
}
} else {
return and__17513__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (fresh_QMARK_,args__$1,instant,vec__20876,arg1,argn,args,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,instant,vec__20876,arg1,argn,args,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn))
,null)),instant], null);
}
});})(fresh_QMARK_,args__$1,instant,vec__20876,arg1,argn,args,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn))
);
var dv = cljs.core.nth.call(null,vec__20877,(0),null);
return cljs.core.deref.call(null,dv);

}
}
};
var G__20900 = function (var_args){
var p__20875 = null;
if (arguments.length > 0) {
var G__20901__i = 0, G__20901__a = new Array(arguments.length -  0);
while (G__20901__i < G__20901__a.length) {G__20901__a[G__20901__i] = arguments[G__20901__i + 0]; ++G__20901__i;}
  p__20875 = new cljs.core.IndexedSeq(G__20901__a,0);
} 
return G__20900__delegate.call(this,p__20875);};
G__20900.cljs$lang$maxFixedArity = 0;
G__20900.cljs$lang$applyTo = (function (arglist__20902){
var p__20875 = cljs.core.seq(arglist__20902);
return G__20900__delegate(p__20875);
});
G__20900.cljs$core$IFn$_invoke$arity$variadic = G__20900__delegate;
return G__20900;
})()
;
;})(cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn))
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (cache_size,ttl_ms,f){
var __x_20903 = ttl_ms;
try{if(cljs.core.truth_(taoensso.encore._invar_pred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,taoensso.encore.pos_int_QMARK_], null)).call(null,__x_20903))){
} else {
taoensso.encore._invar_violation_BANG_.call(null);
}
}catch (e20880){if((e20880 instanceof Error)){
var __t_20904 = e20880;
taoensso.encore._invar_violation_BANG_.call(null,true,"taoensso.encore",1943,"([:or nil? pos-int?] ttl-ms)",__x_20903,__t_20904,null);
} else {
throw e20880;

}
}
var __x_20905 = cache_size;
try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_.call(null,__x_20905))){
} else {
taoensso.encore._invar_violation_BANG_.call(null);
}
}catch (e20890){if((e20890 instanceof Error)){
var __t_20906 = e20890;
taoensso.encore._invar_violation_BANG_.call(null,true,"taoensso.encore",1944,"(pos-int? cache-size)",__x_20905,__t_20906,null);
} else {
throw e20890;

}
}
var state_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(0)], null));
var gc_running_QMARK__ = cljs.core.atom.call(null,false);
var ttl_ms_QMARK_ = !((ttl_ms == null));
var ttl_ms__$1 = cljs.core.long$.call(null,(function (){var or__17525__auto__ = ttl_ms;
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return (0);
}
})());
var cache_size__$1 = cljs.core.long$.call(null,cache_size);
var gc_fn = ((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (){
if(cljs.core.truth_((function (){var and__17513__auto__ = taoensso.encore.gc_now_QMARK_.call(null);
if(cljs.core.truth_(and__17513__auto__)){
return taoensso.encore.swap_in_BANG_.call(null,gc_running_QMARK__,cljs.core.PersistentVector.EMPTY,((function (and__17513__auto__,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (b){
return taoensso.encore.swapped.call(null,true,cljs.core.not.call(null,b));
});})(and__17513__auto__,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
);
} else {
return and__17513__auto__;
}
})())){
var instant = taoensso.encore.now_udt.call(null);
if(ttl_ms_QMARK_){
var snapshot_20907 = cljs.core.dissoc.call(null,cljs.core.deref.call(null,state_),new cljs.core.Keyword(null,"tick","tick",-835886976));
var ks_to_gc_20908 = cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (snapshot_20907,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (acc,k,p__20881){
var vec__20882 = p__20881;
var dv = cljs.core.nth.call(null,vec__20882,(0),null);
var udt = cljs.core.nth.call(null,vec__20882,(1),null);
var _ = cljs.core.nth.call(null,vec__20882,(2),null);
var ___$1 = cljs.core.nth.call(null,vec__20882,(3),null);
var cv = vec__20882;
if(((instant - udt) > ttl_ms__$1)){
return cljs.core.conj_BANG_.call(null,acc,k);
} else {
return acc;
}
});})(snapshot_20907,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),snapshot_20907));
cljs.core.swap_BANG_.call(null,state_,((function (snapshot_20907,ks_to_gc_20908,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (snapshot_20907,ks_to_gc_20908,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (acc,in$){
return cljs.core.dissoc_BANG_.call(null,acc,in$);
});})(snapshot_20907,ks_to_gc_20908,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.transient$.call(null,m),ks_to_gc_20908));
});})(snapshot_20907,ks_to_gc_20908,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
);
} else {
}

var snapshot_20909 = cljs.core.dissoc.call(null,cljs.core.deref.call(null,state_),new cljs.core.Keyword(null,"tick","tick",-835886976));
var n_to_gc_20910 = (cljs.core.count.call(null,snapshot_20909) - cache_size__$1);
if((n_to_gc_20910 > (64))){
var ks_to_gc_20911 = taoensso.encore.top.call(null,n_to_gc_20910,((function (snapshot_20909,n_to_gc_20910,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (k){
var vec__20883 = snapshot_20909.call(null,k);
var _ = cljs.core.nth.call(null,vec__20883,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__20883,(1),null);
var tick_lru = cljs.core.nth.call(null,vec__20883,(2),null);
var tick_lfu = cljs.core.nth.call(null,vec__20883,(3),null);
return (tick_lru + tick_lfu);
});})(snapshot_20909,n_to_gc_20910,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.keys.call(null,snapshot_20909));
cljs.core.swap_BANG_.call(null,state_,((function (ks_to_gc_20911,snapshot_20909,n_to_gc_20910,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (ks_to_gc_20911,snapshot_20909,n_to_gc_20910,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (acc,in$){
return cljs.core.dissoc_BANG_.call(null,acc,in$);
});})(ks_to_gc_20911,snapshot_20909,n_to_gc_20910,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.transient$.call(null,m),ks_to_gc_20911));
});})(ks_to_gc_20911,snapshot_20909,n_to_gc_20910,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
);
} else {
}

return cljs.core.reset_BANG_.call(null,gc_running_QMARK__,false);
} else {
return null;
}
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
;
var cv_fn = ((!(ttl_ms_QMARK_))?((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (args,fresh_QMARK_,tick){
return taoensso.encore.swap_val_BANG_.call(null,state_,args,((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__17513__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__17513__auto__)){
return cljs.core.not.call(null,fresh_QMARK_);
} else {
return and__17513__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
,null)),null,tick,(1)], null);
}
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
);
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
:((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (args,fresh_QMARK_,tick){
var instant = taoensso.encore.now_udt.call(null);
return taoensso.encore.swap_val_BANG_.call(null,state_,args,((function (instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__17513__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__17513__auto__)){
var and__17513__auto____$1 = cljs.core.not.call(null,fresh_QMARK_);
if(and__17513__auto____$1){
var vec__20885 = _QMARK_cv;
var _dv = cljs.core.nth.call(null,vec__20885,(0),null);
var udt = cljs.core.nth.call(null,vec__20885,(1),null);
return ((instant - udt) < ttl_ms__$1);
} else {
return and__17513__auto____$1;
}
} else {
return and__17513__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
,null)),instant,tick,(1)], null);
}
});})(instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
);
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
);
return ((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn,cv_fn){
return (function() { 
var G__20912__delegate = function (p__20886){
var vec__20887 = p__20886;
var arg1 = cljs.core.nth.call(null,vec__20887,(0),null);
var argn = cljs.core.nthnext.call(null,vec__20887,(1));
var args = vec__20887;
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","get","mem/get",1683009136)))){
return cljs.core.deref.call(null,state_);
} else {
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.first.call(null,argn),new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,state_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(0)], null));
} else {
cljs.core.swap_BANG_.call(null,state_,cljs.core.dissoc,argn);
}

return null;
} else {
gc_fn.call(null);

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);
var tick = new cljs.core.Keyword(null,"tick","tick",-835886976).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_));
var vec__20888 = cv_fn.call(null,args__$1,fresh_QMARK_,tick);
var dv = cljs.core.nth.call(null,vec__20888,(0),null);
cljs.core.swap_BANG_.call(null,state_,((function (fresh_QMARK_,args__$1,tick,vec__20888,dv,vec__20887,arg1,argn,args,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn,cv_fn){
return (function (m){
var temp__4423__auto__ = cljs.core.get.call(null,m,args__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__20889 = temp__4423__auto__;
var dv__$1 = cljs.core.nth.call(null,vec__20889,(0),null);
var _QMARK_udt = cljs.core.nth.call(null,vec__20889,(1),null);
var tick_lru = cljs.core.nth.call(null,vec__20889,(2),null);
var tick_lfu = cljs.core.nth.call(null,vec__20889,(3),null);
var cv = vec__20889;
return cljs.core.merge.call(null,m,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"tick","tick",-835886976),(tick + (1)),args__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dv__$1,_QMARK_udt,tick,(tick_lfu + (1))], null)], true, false));
} else {
return cljs.core.merge.call(null,m,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(tick + (1))], null));
}
});})(fresh_QMARK_,args__$1,tick,vec__20888,dv,vec__20887,arg1,argn,args,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn,cv_fn))
);

return cljs.core.deref.call(null,dv);

}
}
};
var G__20912 = function (var_args){
var p__20886 = null;
if (arguments.length > 0) {
var G__20913__i = 0, G__20913__a = new Array(arguments.length -  0);
while (G__20913__i < G__20913__a.length) {G__20913__a[G__20913__i] = arguments[G__20913__i + 0]; ++G__20913__i;}
  p__20886 = new cljs.core.IndexedSeq(G__20913__a,0);
} 
return G__20912__delegate.call(this,p__20886);};
G__20912.cljs$lang$maxFixedArity = 0;
G__20912.cljs$lang$applyTo = (function (arglist__20914){
var p__20886 = cljs.core.seq(arglist__20914);
return G__20912__delegate(p__20886);
});
G__20912.cljs$core$IFn$_invoke$arity$variadic = G__20912__delegate;
return G__20912;
})()
;
;})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn,cv_fn))
});

taoensso.encore.memoize_STAR_.cljs$lang$maxFixedArity = 3;
/**
 * Takes one or more rate specs of form [ncalls-limit window-ms ?spec-id] and
 *   returns a (fn [& [req-id])) that returns `nil` (=> all rate limits passed), or
 *   [<ms-wait> <worst-offending-spec-id>] / <ms-wait>.
 */
taoensso.encore.rate_limiter_STAR_ = (function taoensso$encore$rate_limiter_STAR_(specs){
if(cljs.core.empty_QMARK_.call(null,specs)){
return cljs.core.constantly.call(null,null);
} else {
var vspecs = cljs.core.vec.call(null,specs);
var vstates_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var max_win_ms = cljs.core.long$.call(null,cljs.core.reduce.call(null,cljs.core.max,(0),cljs.core.mapv.call(null,((function (vspecs,vstates_){
return (function (p__20950){
var vec__20951 = p__20950;
var _ = cljs.core.nth.call(null,vec__20951,(0),null);
var win_ms = cljs.core.nth.call(null,vec__20951,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__20951,(2),null);
var spec = vec__20951;
return win_ms;
});})(vspecs,vstates_))
,vspecs)));
var nspecs = cljs.core.count.call(null,vspecs);
var nid_specs = cljs.core.count.call(null,cljs.core.filterv.call(null,((function (vspecs,vstates_,max_win_ms,nspecs){
return (function (p__20952){
var vec__20953 = p__20952;
var _ = cljs.core.nth.call(null,vec__20953,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__20953,(1),null);
var id = cljs.core.nth.call(null,vec__20953,(2),null);
return id;
});})(vspecs,vstates_,max_win_ms,nspecs))
,vspecs));
var _ = ((((nid_specs === (0))) || (cljs.core._EQ_.call(null,nid_specs,nspecs)))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),new cljs.core.Symbol(null,"nid-specs","nid-specs",-1204406222,null)),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"nid-specs","nid-specs",-1204406222,null),new cljs.core.Symbol(null,"nspecs","nspecs",-1621596945,null)))))].join('')))})());
var return_ids_QMARK_ = !((nid_specs === (0)));
return ((function (vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function() { 
var taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate = function (p__20954){
var vec__20970 = p__20954;
var req_id = cljs.core.nth.call(null,vec__20970,(0),null);
var instant = taoensso.encore.now_udt.call(null);
if(cljs.core.truth_((function (){var and__17513__auto__ = req_id;
if(cljs.core.truth_(and__17513__auto__)){
return taoensso.encore.gc_now_QMARK_.call(null);
} else {
return and__17513__auto__;
}
})())){
taoensso.encore.swap_in_BANG_.call(null,vstates_,cljs.core.PersistentVector.EMPTY,((function (instant,vec__20970,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function taoensso$encore$rate_limiter_STAR__$_check_rate_limits_$_gc(m){
return cljs.core.reduce_kv.call(null,((function (instant,vec__20970,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (m_STAR_,req_id__$1,vstate){
var max_udt_win_start = cljs.core.reduce.call(null,((function (instant,vec__20970,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (acc,p__20973){
var vec__20974 = p__20973;
var ___$1 = cljs.core.nth.call(null,vec__20974,(0),null);
var udt = cljs.core.nth.call(null,vec__20974,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__20974,(2),null);
var x__17856__auto__ = acc;
var y__17857__auto__ = udt;
return ((x__17856__auto__ > y__17857__auto__) ? x__17856__auto__ : y__17857__auto__);
});})(instant,vec__20970,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,(0),vstate);
var min_win_ms_elapsed = (instant - max_udt_win_start);
if((min_win_ms_elapsed > max_win_ms)){
return cljs.core.dissoc.call(null,m_STAR_,req_id__$1);
} else {
return m_STAR_;
}
});})(instant,vec__20970,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,m,m);
});})(instant,vec__20970,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
);
} else {
}

return taoensso.encore.swap_in_BANG_.call(null,vstates_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [req_id], null),((function (instant,vec__20970,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (_QMARK_vstate){
if(cljs.core.not.call(null,_QMARK_vstate)){
return taoensso.encore.swapped.call(null,cljs.core.vec.call(null,cljs.core.repeat.call(null,nspecs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),instant], null))),null);
} else {
var vec__20975 = (function (){var in_vspecs = vspecs;
var in_vstate = _QMARK_vstate;
var out_vstate = cljs.core.PersistentVector.EMPTY;
var _QMARK_worst_limit_offence = null;
while(true){
var vec__20976 = in_vspecs;
var vec__20977 = cljs.core.nth.call(null,vec__20976,(0),null);
var ncalls_limit = cljs.core.nth.call(null,vec__20977,(0),null);
var win_ms = cljs.core.nth.call(null,vec__20977,(1),null);
var _QMARK_spec_id = cljs.core.nth.call(null,vec__20977,(2),null);
var next_in_vspecs = cljs.core.nthnext.call(null,vec__20976,(1));
var vec__20978 = in_vstate;
var vec__20979 = cljs.core.nth.call(null,vec__20978,(0),null);
var ncalls = cljs.core.nth.call(null,vec__20979,(0),null);
var udt_win_start = cljs.core.nth.call(null,vec__20979,(1),null);
var next_in_vstate = cljs.core.nthnext.call(null,vec__20978,(1));
var win_ms_elapsed = (instant - udt_win_start);
var reset_due_QMARK_ = (win_ms_elapsed >= win_ms);
var rate_limited_QMARK_ = (!(reset_due_QMARK_)) && ((ncalls >= ncalls_limit));
var new_out_vstate = cljs.core.conj.call(null,out_vstate,((reset_due_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),instant], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls,udt_win_start], null)));
var new__QMARK_worst_limit_offence = ((!(rate_limited_QMARK_))?_QMARK_worst_limit_offence:(function (){var ms_wait = (win_ms - win_ms_elapsed);
if((function (){var or__17525__auto__ = (_QMARK_worst_limit_offence == null);
if(or__17525__auto__){
return or__17525__auto__;
} else {
var vec__20981 = _QMARK_worst_limit_offence;
var max_ms_wait = cljs.core.nth.call(null,vec__20981,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__20981,(1),null);
return (ms_wait > max_ms_wait);
}
})()){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms_wait,_QMARK_spec_id], null);
} else {
return _QMARK_worst_limit_offence;
}
})());
if(cljs.core.not.call(null,next_in_vspecs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_out_vstate,new__QMARK_worst_limit_offence], null);
} else {
var G__20985 = next_in_vspecs;
var G__20986 = next_in_vstate;
var G__20987 = new_out_vstate;
var G__20988 = new__QMARK_worst_limit_offence;
in_vspecs = G__20985;
in_vstate = G__20986;
out_vstate = G__20987;
_QMARK_worst_limit_offence = G__20988;
continue;
}
break;
}
})();
var vstate_with_resets = cljs.core.nth.call(null,vec__20975,(0),null);
var _QMARK_worst_limit_offence = cljs.core.nth.call(null,vec__20975,(1),null);
var all_limits_pass_QMARK_ = (_QMARK_worst_limit_offence == null);
var new_vstate = ((!(all_limits_pass_QMARK_))?vstate_with_resets:cljs.core.mapv.call(null,((function (vec__20975,vstate_with_resets,_QMARK_worst_limit_offence,all_limits_pass_QMARK_,instant,vec__20970,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (p__20982){
var vec__20983 = p__20982;
var ncalls = cljs.core.nth.call(null,vec__20983,(0),null);
var udt_win_start = cljs.core.nth.call(null,vec__20983,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ncalls + (1)),udt_win_start], null);
});})(vec__20975,vstate_with_resets,_QMARK_worst_limit_offence,all_limits_pass_QMARK_,instant,vec__20970,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,vstate_with_resets));
var result = (function (){var temp__4425__auto__ = _QMARK_worst_limit_offence;
if(cljs.core.truth_(temp__4425__auto__)){
var wlo = temp__4425__auto__;
if(return_ids_QMARK_){
return wlo;
} else {
var vec__20984 = wlo;
var ms_wait = cljs.core.nth.call(null,vec__20984,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__20984,(1),null);
return ms_wait;
}
} else {
return null;
}
})();
return taoensso.encore.swapped.call(null,new_vstate,result);
}
});})(instant,vec__20970,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
);
};
var taoensso$encore$rate_limiter_STAR__$_check_rate_limits = function (var_args){
var p__20954 = null;
if (arguments.length > 0) {
var G__20989__i = 0, G__20989__a = new Array(arguments.length -  0);
while (G__20989__i < G__20989__a.length) {G__20989__a[G__20989__i] = arguments[G__20989__i + 0]; ++G__20989__i;}
  p__20954 = new cljs.core.IndexedSeq(G__20989__a,0);
} 
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate.call(this,p__20954);};
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$lang$maxFixedArity = 0;
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$lang$applyTo = (function (arglist__20990){
var p__20954 = cljs.core.seq(arglist__20990);
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate(p__20954);
});
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate;
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits;
})()
;
;})(vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
}
});
taoensso.encore.rate_limit = (function taoensso$encore$rate_limit(specs,f){
var rl = taoensso.encore.rate_limiter_STAR_.call(null,specs);
return ((function (rl){
return (function() { 
var G__20991__delegate = function (args){
var temp__4423__auto__ = rl.call(null);
if(cljs.core.truth_(temp__4423__auto__)){
var backoff = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,backoff], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null),null], null);
}
};
var G__20991 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20992__i = 0, G__20992__a = new Array(arguments.length -  0);
while (G__20992__i < G__20992__a.length) {G__20992__a[G__20992__i] = arguments[G__20992__i + 0]; ++G__20992__i;}
  args = new cljs.core.IndexedSeq(G__20992__a,0);
} 
return G__20991__delegate.call(this,args);};
G__20991.cljs$lang$maxFixedArity = 0;
G__20991.cljs$lang$applyTo = (function (arglist__20993){
var args = cljs.core.seq(arglist__20993);
return G__20991__delegate(args);
});
G__20991.cljs$core$IFn$_invoke$arity$variadic = G__20991__delegate;
return G__20991;
})()
;
;})(rl))
});
taoensso.encore.nano_time = (function (){var temp__4423__auto__ = (function (){var and__17513__auto__ = typeof window !== 'undefined';
if(and__17513__auto__){
return (window["performance"]);
} else {
return and__17513__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var perf = temp__4423__auto__;
var temp__4423__auto____$1 = (function (){var or__17525__auto__ = (perf["now"]);
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
var or__17525__auto____$1 = (perf["mozNow"]);
if(cljs.core.truth_(or__17525__auto____$1)){
return or__17525__auto____$1;
} else {
var or__17525__auto____$2 = (perf["msNow"]);
if(cljs.core.truth_(or__17525__auto____$2)){
return or__17525__auto____$2;
} else {
var or__17525__auto____$3 = (perf["oNow"]);
if(cljs.core.truth_(or__17525__auto____$3)){
return or__17525__auto____$3;
} else {
return (perf["webkitNow"]);
}
}
}
}
})();
if(cljs.core.truth_(temp__4423__auto____$1)){
var f = temp__4423__auto____$1;
return ((function (f,temp__4423__auto____$1,perf,temp__4423__auto__){
return (function (){
return cljs.core.long$.call(null,(1000000.0 * f.call(perf)));
});
;})(f,temp__4423__auto____$1,perf,temp__4423__auto__))
} else {
return ((function (temp__4423__auto____$1,perf,temp__4423__auto__){
return (function (){
return (1000000.0 * taoensso.encore.now_udt.call(null));
});
;})(temp__4423__auto____$1,perf,temp__4423__auto__))
}
} else {
return ((function (temp__4423__auto__){
return (function (){
return (1000000.0 * taoensso.encore.now_udt.call(null));
});
;})(temp__4423__auto__))
}
})();
taoensso.encore.spaced_str_with_nils;
taoensso.encore.console_log = (function (){var temp__4423__auto__ = (function (){var and__17513__auto__ = typeof console !== 'undefined';
if(and__17513__auto__){
return console.log;
} else {
return and__17513__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return ((function (f,temp__4423__auto__){
return (function (xs){
return f.apply(console,cljs.core.into_array.call(null,xs));
});
;})(f,temp__4423__auto__))
} else {
return ((function (temp__4423__auto__){
return (function (xs){
return null;
});
;})(temp__4423__auto__))
}
})();

taoensso.encore.log = (function taoensso$encore$log(var_args){
var args__18590__auto__ = [];
var len__18583__auto___21001 = arguments.length;
var i__18584__auto___21002 = (0);
while(true){
if((i__18584__auto___21002 < len__18583__auto___21001)){
args__18590__auto__.push((arguments[i__18584__auto___21002]));

var G__21003 = (i__18584__auto___21002 + (1));
i__18584__auto___21002 = G__21003;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.encore.console_log.call(null,xs);
});

taoensso.encore.log.cljs$lang$maxFixedArity = (0);

taoensso.encore.log.cljs$lang$applyTo = (function (seq20996){
return taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20996));
});

taoensso.encore.logp = (function taoensso$encore$logp(var_args){
var args__18590__auto__ = [];
var len__18583__auto___21004 = arguments.length;
var i__18584__auto___21005 = (0);
while(true){
if((i__18584__auto___21005 < len__18583__auto___21004)){
args__18590__auto__.push((arguments[i__18584__auto___21005]));

var G__21006 = (i__18584__auto___21005 + (1));
i__18584__auto___21005 = G__21006;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.encore.console_log.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.spaced_str_with_nils.call(null,xs)], null));
});

taoensso.encore.logp.cljs$lang$maxFixedArity = (0);

taoensso.encore.logp.cljs$lang$applyTo = (function (seq20997){
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20997));
});

taoensso.encore.logf = (function taoensso$encore$logf(var_args){
var args__18590__auto__ = [];
var len__18583__auto___21007 = arguments.length;
var i__18584__auto___21008 = (0);
while(true){
if((i__18584__auto___21008 < len__18583__auto___21007)){
args__18590__auto__.push((arguments[i__18584__auto___21008]));

var G__21009 = (i__18584__auto___21008 + (1));
i__18584__auto___21008 = G__21009;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((1) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((1)),(0))):null);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18591__auto__);
});

taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return taoensso.encore.console_log.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.format_STAR_.call(null,fmt,xs)], null));
});

taoensso.encore.logf.cljs$lang$maxFixedArity = (1);

taoensso.encore.logf.cljs$lang$applyTo = (function (seq20998){
var G__20999 = cljs.core.first.call(null,seq20998);
var seq20998__$1 = cljs.core.next.call(null,seq20998);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic(G__20999,seq20998__$1);
});

taoensso.encore.sayp = (function taoensso$encore$sayp(var_args){
var args__18590__auto__ = [];
var len__18583__auto___21010 = arguments.length;
var i__18584__auto___21011 = (0);
while(true){
if((i__18584__auto___21011 < len__18583__auto___21010)){
args__18590__auto__.push((arguments[i__18584__auto___21011]));

var G__21012 = (i__18584__auto___21011 + (1));
i__18584__auto___21011 = G__21012;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return alert(taoensso.encore.spaced_str_with_nils.call(null,xs));
});

taoensso.encore.sayp.cljs$lang$maxFixedArity = (0);

taoensso.encore.sayp.cljs$lang$applyTo = (function (seq21000){
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21000));
});

taoensso.encore.sayf = (function taoensso$encore$sayf(var_args){
var args__18590__auto__ = [];
var len__18583__auto___21013 = arguments.length;
var i__18584__auto___21014 = (0);
while(true){
if((i__18584__auto___21014 < len__18583__auto___21013)){
args__18590__auto__.push((arguments[i__18584__auto___21014]));

var G__21015 = (i__18584__auto___21014 + (1));
i__18584__auto___21014 = G__21015;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((1) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((1)),(0))):null);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18591__auto__);
});

taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return alert(taoensso.encore.format_STAR_.call(null,fmt,xs));
});

taoensso.encore.sayf.cljs$lang$maxFixedArity = (1);

taoensso.encore.sayf.cljs$lang$applyTo = (function (seq20994){
var G__20995 = cljs.core.first.call(null,seq20994);
var seq20994__$1 = cljs.core.next.call(null,seq20994);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic(G__20995,seq20994__$1);
});
/**
 * Returns browser window's current location. These details can be forged!
 */
taoensso.encore.get_window_location = (function taoensso$encore$get_window_location(){
var loc_STAR_ = window.location;
var loc = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"href","href",-793805698),loc_STAR_.href,new cljs.core.Keyword(null,"protocol","protocol",652470118),loc_STAR_.protocol,new cljs.core.Keyword(null,"hostname","hostname",2105669933),loc_STAR_.hostname,new cljs.core.Keyword(null,"host","host",-1558485167),loc_STAR_.host,new cljs.core.Keyword(null,"pathname","pathname",-1420497528),loc_STAR_.pathname,new cljs.core.Keyword(null,"search","search",1564939822),loc_STAR_.search,new cljs.core.Keyword(null,"hash","hash",-13781596),loc_STAR_.hash], null);
return loc;
});
taoensso.encore.xhr_pool_ = (new cljs.core.Delay((function (){
return (new goog.net.XhrIoPool());
}),null));
/**
 * Returns an immediately available XhrIo instance, or nil. The instance must be
 *   released back to pool manually.
 */
taoensso.encore.get_pooled_xhr_BANG_ = (function taoensso$encore$get_pooled_xhr_BANG_(){
var result = cljs.core.deref.call(null,taoensso.encore.xhr_pool_).getObject();
if((void 0 === result)){
return null;
} else {
return result;
}
});
/**
 * [uri method get-or-post-params] -> [uri post-content]
 */
taoensso.encore.coerce_xhr_params = (function taoensso$encore$coerce_xhr_params(uri,method,params){
if(cljs.core.truth_((function (){var __x = params;
try{if(cljs.core.truth_(taoensso.encore._invar_pred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,cljs.core.map_QMARK_], null)).call(null,__x))){
return true;
} else {
return taoensso.encore._invar_violation_BANG_.call(null);
}
}catch (e21018){if((e21018 instanceof Error)){
var __t = e21018;
return taoensso.encore._invar_violation_BANG_.call(null,true,"taoensso.encore",2340,"([:or nil? map?] params)",__x,__t,null);
} else {
throw e21018;

}
}})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)], null),new cljs.core.Symbol(null,"params","params",-1943919534,null))))].join('')));
}

var _QMARK_pstr = ((cljs.core.empty_QMARK_.call(null,params))?null:(function (){var s = goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
if(clojure.string.blank_QMARK_.call(null,s)){
return null;
} else {
return s;
}
})());
var G__21019 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__21019) {
case "get":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(_QMARK_pstr)?[cljs.core.str(uri),cljs.core.str("?"),cljs.core.str(_QMARK_pstr)].join(''):uri),null], null);

break;
case "post":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,_QMARK_pstr], null);

break;
case "put":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,_QMARK_pstr], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(method)].join('')));

}
});
/**
 * Alpha - subject to change.
 *   Simple+lightweight Ajax via Google Closure. Returns nil, or the xhr instance.
 *   Ref. https://developers.google.com/closure/library/docs/xhrio.
 * 
 *   (ajax-lite "/my-post-route"
 *  {:method     :post
 *   :params     {:username "Rich Hickey"
 *                :type     "Awesome"}
 *   :headers    {"Foo" "Bar"}
 *   :resp-type  :text
 *   :timeout-ms 7000
 *   :with-credentials? false ; Enable if using CORS (requires xhr v2+)
 *  }
 *  (fn async-callback [resp-map]
 *    (let [{:keys [success? ?status ?error ?content ?content-type]} resp-map]
 *      ;; ?status  - 200, 404, ..., or nil on no response
 *      ;; ?error   - e/o #{:xhr-pool-depleted :exception :http-error :abort
 *      ;;                  :timeout :no-content <http-error-status> nil}
 *      (js/alert (str "Ajax response: " resp-map)))))
 */
taoensso.encore.ajax_lite = (function taoensso$encore$ajax_lite(uri,p__21023,callback){
var map__21042 = p__21023;
var map__21042__$1 = ((((!((map__21042 == null)))?((((map__21042.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21042.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21042):map__21042);
var opts = map__21042__$1;
var method = cljs.core.get.call(null,map__21042__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755));
var params = cljs.core.get.call(null,map__21042__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__21042__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout_ms = cljs.core.get.call(null,map__21042__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(10000));
var resp_type = cljs.core.get.call(null,map__21042__$1,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"auto","auto",-566279492));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__21042__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var progress_fn = cljs.core.get.call(null,map__21042__$1,new cljs.core.Keyword(null,"progress-fn","progress-fn",-1146547855));
var errorf = cljs.core.get.call(null,map__21042__$1,new cljs.core.Keyword(null,"errorf","errorf",-620376044),taoensso.encore.logf);
if(cljs.core.truth_((function (){var __x = timeout_ms;
try{if(cljs.core.truth_(taoensso.encore._invar_pred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,taoensso.encore.nneg_int_QMARK_], null)).call(null,__x))){
return true;
} else {
return taoensso.encore._invar_violation_BANG_.call(null);
}
}catch (e21044){if((e21044 instanceof Error)){
var __t = e21044;
return taoensso.encore._invar_violation_BANG_.call(null,true,"taoensso.encore",2380,"([:or nil? nneg-int?] timeout-ms)",__x,__t,null);
} else {
throw e21044;

}
}})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"nneg-int?","nneg-int?",803479360,null)], null),new cljs.core.Symbol(null,"timeout-ms","timeout-ms",-1900214363,null))))].join('')));
}

var temp__4423__auto__ = taoensso.encore.get_pooled_xhr_BANG_.call(null);
if(cljs.core.truth_(temp__4423__auto__)){
var xhr = temp__4423__auto__;
try{var timeout_ms__$1 = (function (){var or__17525__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return timeout_ms;
}
})();
var method_STAR_ = (function (){var G__21047 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__21047) {
case "get":
return "GET";

break;
case "post":
return "POST";

break;
case "put":
return "PUT";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(method)].join('')));

}
})();
var params__$1 = taoensso.encore.map_keys.call(null,cljs.core.name,params);
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["X-Requested-With","XMLHTTPRequest"], null),taoensso.encore.map_keys.call(null,cljs.core.name,headers));
var vec__21046 = taoensso.encore.coerce_xhr_params.call(null,uri,method,params__$1);
var uri_STAR_ = cljs.core.nth.call(null,vec__21046,(0),null);
var post_content_STAR_ = cljs.core.nth.call(null,vec__21046,(1),null);
var headers_STAR_ = cljs.core.clj__GT_js.call(null,((cljs.core.not.call(null,post_content_STAR_))?headers__$1:cljs.core.assoc.call(null,headers__$1,"Content-Type","application/x-www-form-urlencoded; charset=UTF-8")));
var G__21048_21061 = xhr;
goog.events.listenOnce(G__21048_21061,goog.net.EventType.READY,((function (G__21048_21061,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__21046,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__21042,map__21042__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (_){
return cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);
});})(G__21048_21061,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__21046,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__21042,map__21042__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
);

goog.events.listenOnce(G__21048_21061,goog.net.EventType.COMPLETE,((function (G__21048_21061,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__21046,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__21042,map__21042__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function taoensso$encore$ajax_lite_$_wrapped_callback(resp){
var status = xhr.getStatus();
var success_QMARK_ = xhr.isSuccess();
var _QMARK_http_status = ((cljs.core.not_EQ_.call(null,status,(-1)))?status:null);
var _QMARK_content_type = (cljs.core.truth_(_QMARK_http_status)?xhr.getResponseHeader("Content-Type"):null);
var _QMARK_content = (cljs.core.truth_(_QMARK_http_status)?(function (){var resp_type__$1 = ((!(cljs.core._EQ_.call(null,resp_type,new cljs.core.Keyword(null,"auto","auto",-566279492))))?resp_type:(function (){var pred__21054 = ((function (status,success_QMARK_,_QMARK_http_status,_QMARK_content_type,G__21048_21061,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__21046,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__21042,map__21042__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (p1__21022_SHARP_,p2__21021_SHARP_){
return taoensso.encore.str_contains_QMARK_.call(null,p2__21021_SHARP_,p1__21022_SHARP_);
});})(status,success_QMARK_,_QMARK_http_status,_QMARK_content_type,G__21048_21061,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__21046,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__21042,map__21042__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
;
var expr__21055 = [cljs.core.str(_QMARK_content_type)].join('');
if(cljs.core.truth_(pred__21054.call(null,"/edn",expr__21055))){
return new cljs.core.Keyword(null,"edn","edn",1317840885);
} else {
if(cljs.core.truth_(pred__21054.call(null,"/json",expr__21055))){
return new cljs.core.Keyword(null,"json","json",1279968570);
} else {
if(cljs.core.truth_(pred__21054.call(null,"/xml",expr__21055))){
return new cljs.core.Keyword(null,"xml","xml",-1170142052);
} else {
if(cljs.core.truth_(pred__21054.call(null,"/html",expr__21055))){
return new cljs.core.Keyword(null,"text","text",-1790561697);
} else {
return new cljs.core.Keyword(null,"text","text",-1790561697);
}
}
}
}
})());
try{var G__21058 = (((resp_type__$1 instanceof cljs.core.Keyword))?resp_type__$1.fqn:null);
switch (G__21058) {
case "text":
return xhr.getResponseText();

break;
case "json":
return xhr.getResponseJson();

break;
case "xml":
return xhr.getResponseXml();

break;
case "edn":
return taoensso.encore.read_edn.call(null,xhr.getResponseText());

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(resp_type__$1)].join('')));

}
}catch (e21057){if((e21057 instanceof Error)){
var e = e21057;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ajax","bad-response-type","ajax/bad-response-type",789441015),resp_type__$1,new cljs.core.Keyword("ajax","resp-as-text","ajax/resp-as-text",141416819),xhr.getResponseText()], null);
} else {
throw e21057;

}
}})():null);
var cb_arg = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"raw-resp","raw-resp",-1924342506),resp,new cljs.core.Keyword(null,"xhr","xhr",-177710851),xhr,new cljs.core.Keyword(null,"success?","success?",-122854052),success_QMARK_,new cljs.core.Keyword(null,"?content-type","?content-type",-2129759049),(cljs.core.truth_(_QMARK_http_status)?_QMARK_content_type:null),new cljs.core.Keyword(null,"?content","?content",1697782054),_QMARK_content,new cljs.core.Keyword(null,"?status","?status",938730360),_QMARK_http_status,new cljs.core.Keyword(null,"?error","?error",1070752222),(function (){var or__17525__auto__ = (cljs.core.truth_(_QMARK_http_status)?(function (){var n = _QMARK_http_status;
if(cljs.core.truth_(success_QMARK_)){
return null;
} else {
return _QMARK_http_status;
}
})():cljs.core.get.call(null,cljs.core.PersistentArrayMap.fromArray([goog.net.ErrorCode.EXCEPTION,new cljs.core.Keyword(null,"exception","exception",-335277064),goog.net.ErrorCode.HTTP_ERROR,new cljs.core.Keyword(null,"http-error","http-error",-1040049553),goog.net.ErrorCode.ABORT,new cljs.core.Keyword(null,"abort","abort",521193198),goog.net.ErrorCode.TIMEOUT,new cljs.core.Keyword(null,"timeout","timeout",-318625318)], true, false),xhr.getLastErrorCode(),new cljs.core.Keyword(null,"unknown","unknown",-935977881)));
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
if(((_QMARK_content == null)) && (cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(204),null,(1223),null], null), null).call(null,_QMARK_http_status)))){
return new cljs.core.Keyword(null,"no-content","no-content",-1860206018);
} else {
return null;
}
}
})()], null);
return callback.call(null,cb_arg);
});})(G__21048_21061,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__21046,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__21042,map__21042__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
);


var temp__4425__auto___21063 = progress_fn;
if(cljs.core.truth_(temp__4425__auto___21063)){
var pf_21064 = temp__4425__auto___21063;
goog.events.listen(xhr,goog.net.EventType.PROGRESS,((function (pf_21064,temp__4425__auto___21063,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__21046,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__21042,map__21042__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (ev){
var length_computable_QMARK_ = ev.lengthComputable;
var loaded = ev.loaded;
var total = ev.total;
var _QMARK_ratio = (cljs.core.truth_((function (){var and__17513__auto__ = length_computable_QMARK_;
if(cljs.core.truth_(and__17513__auto__)){
return cljs.core.not_EQ_.call(null,total,(0));
} else {
return and__17513__auto__;
}
})())?(loaded / total):null);
return pf_21064.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"?ratio","?ratio",-1275760831),_QMARK_ratio,new cljs.core.Keyword(null,"length-computable?","length-computable?",1915473276),length_computable_QMARK_,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),loaded,new cljs.core.Keyword(null,"total","total",1916810418),total,new cljs.core.Keyword(null,"ev","ev",-406827324),ev], null));
});})(pf_21064,temp__4425__auto___21063,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__21046,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__21042,map__21042__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
);
} else {
}

var G__21059_21065 = xhr;
var temp__4425__auto___21066 = new cljs.core.Keyword(null,"always","always",-1772028770);
if(cljs.core.truth_(temp__4425__auto___21066)){
var x_21067 = temp__4425__auto___21066;
G__21059_21065.setTimeoutInterval((function (){var or__17525__auto__ = timeout_ms__$1;
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return (0);
}
})());
} else {
}

var temp__4425__auto___21068 = with_credentials_QMARK_;
if(cljs.core.truth_(temp__4425__auto___21068)){
var x_21069 = temp__4425__auto___21068;
G__21059_21065.setWithCredentials(true);
} else {
}

var temp__4425__auto___21070 = new cljs.core.Keyword(null,"always","always",-1772028770);
if(cljs.core.truth_(temp__4425__auto___21070)){
var x_21071 = temp__4425__auto___21070;
G__21059_21065.send(uri_STAR_,method_STAR_,post_content_STAR_,headers_STAR_);
} else {
}


return xhr;
}catch (e21045){if((e21045 instanceof Error)){
var e = e21045;
cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);

return null;
} else {
throw e21045;

}
}} else {
callback.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?error","?error",1070752222),new cljs.core.Keyword(null,"xhr-pool-depleted","xhr-pool-depleted",-1812092376)], null));

return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1
 */
taoensso.encore.url_encode = (function taoensso$encore$url_encode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace.call(null,clojure.string.replace.call(null,encodeURIComponent([cljs.core.str(s)].join(''),s),"*","%2A"),"'","%27");
} else {
return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1
 */
taoensso.encore.url_decode = (function taoensso$encore$url_decode(var_args){
var args__18590__auto__ = [];
var len__18583__auto___21076 = arguments.length;
var i__18584__auto___21077 = (0);
while(true){
if((i__18584__auto___21077 < len__18583__auto___21076)){
args__18590__auto__.push((arguments[i__18584__auto___21077]));

var G__21078 = (i__18584__auto___21077 + (1));
i__18584__auto___21077 = G__21078;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((1) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((1)),(0))):null);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18591__auto__);
});

taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__21074){
var vec__21075 = p__21074;
var encoding = cljs.core.nth.call(null,vec__21075,(0),null);
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
});

taoensso.encore.url_decode.cljs$lang$maxFixedArity = (1);

taoensso.encore.url_decode.cljs$lang$applyTo = (function (seq21072){
var G__21073 = cljs.core.first.call(null,seq21072);
var seq21072__$1 = cljs.core.next.call(null,seq21072);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(G__21073,seq21072__$1);
});
taoensso.encore.format_query_string = (function taoensso$encore$format_query_string(m){
var param = (function (k,v){
return [cljs.core.str(taoensso.encore.url_encode.call(null,taoensso.encore.qname.call(null,k))),cljs.core.str("="),cljs.core.str(taoensso.encore.url_encode.call(null,(function (){var or__17525__auto__ = taoensso.encore.as__QMARK_qname.call(null,v);
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return [cljs.core.str(v)].join('');
}
})()))].join('');
});
var join = ((function (param){
return (function (strs){
return clojure.string.join.call(null,"&",strs);
});})(param))
;
if(cljs.core.empty_QMARK_.call(null,m)){
return "";
} else {
return join.call(null,(function (){var iter__18297__auto__ = ((function (param,join){
return (function taoensso$encore$format_query_string_$_iter__21087(s__21088){
return (new cljs.core.LazySeq(null,((function (param,join){
return (function (){
var s__21088__$1 = s__21088;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__21088__$1);
if(temp__4425__auto__){
var s__21088__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21088__$2)){
var c__18295__auto__ = cljs.core.chunk_first.call(null,s__21088__$2);
var size__18296__auto__ = cljs.core.count.call(null,c__18295__auto__);
var b__21090 = cljs.core.chunk_buffer.call(null,size__18296__auto__);
if((function (){var i__21089 = (0);
while(true){
if((i__21089 < size__18296__auto__)){
var vec__21093 = cljs.core._nth.call(null,c__18295__auto__,i__21089);
var k = cljs.core.nth.call(null,vec__21093,(0),null);
var v = cljs.core.nth.call(null,vec__21093,(1),null);
if(cljs.core.truth_(taoensso.encore.nnil_QMARK_.call(null,v))){
cljs.core.chunk_append.call(null,b__21090,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__17525__auto__ = cljs.core.seq.call(null,v);
if(or__17525__auto__){
return or__17525__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)));

var G__21095 = (i__21089 + (1));
i__21089 = G__21095;
continue;
} else {
var G__21096 = (i__21089 + (1));
i__21089 = G__21096;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21090),taoensso$encore$format_query_string_$_iter__21087.call(null,cljs.core.chunk_rest.call(null,s__21088__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21090),null);
}
} else {
var vec__21094 = cljs.core.first.call(null,s__21088__$2);
var k = cljs.core.nth.call(null,vec__21094,(0),null);
var v = cljs.core.nth.call(null,vec__21094,(1),null);
if(cljs.core.truth_(taoensso.encore.nnil_QMARK_.call(null,v))){
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__17525__auto__ = cljs.core.seq.call(null,v);
if(or__17525__auto__){
return or__17525__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)),taoensso$encore$format_query_string_$_iter__21087.call(null,cljs.core.rest.call(null,s__21088__$2)));
} else {
var G__21097 = cljs.core.rest.call(null,s__21088__$2);
s__21088__$1 = G__21097;
continue;
}
}
} else {
return null;
}
break;
}
});})(param,join))
,null,null));
});})(param,join))
;
return iter__18297__auto__.call(null,m);
})());
}
});
taoensso.encore.assoc_conj = (function taoensso$encore$assoc_conj(m,k,v){
return cljs.core.assoc.call(null,m,k,(function (){var temp__4423__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__4423__auto__)){
var cur = temp__4423__auto__;
if(cljs.core.vector_QMARK_.call(null,cur)){
return cljs.core.conj.call(null,cur,v);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur,v], null);
}
} else {
return v;
}
})());
});
/**
 * Based on `ring-codec/form-decode`
 */
taoensso.encore.parse_query_params = (function taoensso$encore$parse_query_params(var_args){
var args__18590__auto__ = [];
var len__18583__auto___21104 = arguments.length;
var i__18584__auto___21105 = (0);
while(true){
if((i__18584__auto___21105 < len__18583__auto___21104)){
args__18590__auto__.push((arguments[i__18584__auto___21105]));

var G__21106 = (i__18584__auto___21105 + (1));
i__18584__auto___21105 = G__21106;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((1) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((1)),(0))):null);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18591__auto__);
});

taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__21100){
var vec__21101 = p__21100;
var keywordize_QMARK_ = cljs.core.nth.call(null,vec__21101,(0),null);
var encoding = cljs.core.nth.call(null,vec__21101,(1),null);
var _PERCENT_ = ((clojure.string.blank_QMARK_.call(null,s))?cljs.core.PersistentArrayMap.EMPTY:(function (){var s__$1 = (cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_.call(null,s,"?"))?taoensso.encore.substr.call(null,s,(1)):s);
if(cljs.core.not.call(null,taoensso.encore.str_contains_QMARK_.call(null,s__$1,"="))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var m = cljs.core.reduce.call(null,((function (s__$1,vec__21101,keywordize_QMARK_,encoding){
return (function (m,param){
var temp__4423__auto__ = clojure.string.split.call(null,param,/=/,(2));
if(cljs.core.truth_(temp__4423__auto__)){
var vec__21102 = temp__4423__auto__;
var k = cljs.core.nth.call(null,vec__21102,(0),null);
var v = cljs.core.nth.call(null,vec__21102,(1),null);
return taoensso.encore.assoc_conj.call(null,m,taoensso.encore.url_decode.call(null,k,encoding),taoensso.encore.url_decode.call(null,v,encoding));
} else {
return m;
}
});})(s__$1,vec__21101,keywordize_QMARK_,encoding))
,cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,s__$1,/&/));
if(cljs.core.not.call(null,keywordize_QMARK_)){
return m;
} else {
return taoensso.encore.keywordize_map.call(null,m);
}
}
})());
if(cljs.core.truth_((function (){var __x = _PERCENT_;
try{if(cljs.core.map_QMARK_.call(null,__x)){
return true;
} else {
return taoensso.encore._invar_violation_BANG_.call(null);
}
}catch (e21103){if((e21103 instanceof Error)){
var __t = e21103;
return taoensso.encore._invar_violation_BANG_.call(null,true,"taoensso.encore",2585,"(map? %)",__x,__t,null);
} else {
throw e21103;

}
}})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))].join('')));
}

return _PERCENT_;
});

taoensso.encore.parse_query_params.cljs$lang$maxFixedArity = (1);

taoensso.encore.parse_query_params.cljs$lang$applyTo = (function (seq21098){
var G__21099 = cljs.core.first.call(null,seq21098);
var seq21098__$1 = cljs.core.next.call(null,seq21098);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic(G__21099,seq21098__$1);
});
taoensso.encore.merge_url_with_query_string = (function taoensso$encore$merge_url_with_query_string(url,m){
var vec__21108 = clojure.string.split.call(null,[cljs.core.str(url)].join(''),/\?/,(2));
var url__$1 = cljs.core.nth.call(null,vec__21108,(0),null);
var _QMARK_qstr = cljs.core.nth.call(null,vec__21108,(1),null);
var qmap = cljs.core.merge.call(null,(cljs.core.truth_(_QMARK_qstr)?taoensso.encore.keywordize_map.call(null,taoensso.encore.parse_query_params.call(null,_QMARK_qstr)):null),taoensso.encore.keywordize_map.call(null,m));
var _QMARK_qstr__$1 = taoensso.encore.as__QMARK_nblank.call(null,taoensso.encore.format_query_string.call(null,qmap));
var temp__4423__auto__ = _QMARK_qstr__$1;
if(cljs.core.truth_(temp__4423__auto__)){
var qstr = temp__4423__auto__;
return [cljs.core.str(url__$1),cljs.core.str("?"),cljs.core.str(qstr)].join('');
} else {
return url__$1;
}
});
taoensso.encore.spaced_str_with_nils = (function taoensso$encore$spaced_str_with_nils(xs){
return clojure.string.join.call(null," ",cljs.core.mapv.call(null,taoensso.encore.nil__GT_str,xs));
});
taoensso.encore.spaced_str = (function taoensso$encore$spaced_str(xs){
return clojure.string.join.call(null," ",cljs.core.mapv.call(null,taoensso.encore.undefined__GT_nil,xs));
});
taoensso.encore.backport_run_BANG_ = taoensso.encore.run_BANG__STAR_;
taoensso.encore.fq_name = taoensso.encore.qname;
taoensso.encore.memoize_1 = taoensso.encore.memoize1;
taoensso.encore.round = (function taoensso$encore$round(var_args){
var args__18590__auto__ = [];
var len__18583__auto___21113 = arguments.length;
var i__18584__auto___21114 = (0);
while(true){
if((i__18584__auto___21114 < len__18583__auto___21113)){
args__18590__auto__.push((arguments[i__18584__auto___21114]));

var G__21115 = (i__18584__auto___21114 + (1));
i__18584__auto___21114 = G__21115;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((1) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((1)),(0))):null);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18591__auto__);
});

taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__21111){
var vec__21112 = p__21111;
var type = cljs.core.nth.call(null,vec__21112,(0),null);
var nplaces = cljs.core.nth.call(null,vec__21112,(1),null);
return taoensso.encore.round_STAR_.call(null,(function (){var or__17525__auto__ = type;
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return new cljs.core.Keyword(null,"round","round",2009433328);
}
})(),nplaces,n);
});

taoensso.encore.round.cljs$lang$maxFixedArity = (1);

taoensso.encore.round.cljs$lang$applyTo = (function (seq21109){
var G__21110 = cljs.core.first.call(null,seq21109);
var seq21109__$1 = cljs.core.next.call(null,seq21109);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic(G__21110,seq21109__$1);
});
taoensso.encore.logging_level = cljs.core.atom.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596));
taoensso.encore.set_exp_backoff_timeout_BANG_ = (function taoensso$encore$set_exp_backoff_timeout_BANG_(var_args){
var args__18590__auto__ = [];
var len__18583__auto___21120 = arguments.length;
var i__18584__auto___21121 = (0);
while(true){
if((i__18584__auto___21121 < len__18583__auto___21120)){
args__18590__auto__.push((arguments[i__18584__auto___21121]));

var G__21122 = (i__18584__auto___21121 + (1));
i__18584__auto___21121 = G__21122;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((1) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((1)),(0))):null);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18591__auto__);
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (nullary_f,p__21118){
var vec__21119 = p__21118;
var nattempt = cljs.core.nth.call(null,vec__21119,(0),null);
return window.setTimeout(nullary_f,taoensso.encore.exp_backoff.call(null,(function (){var or__17525__auto__ = nattempt;
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return (0);
}
})()));
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (seq21116){
var G__21117 = cljs.core.first.call(null,seq21116);
var seq21116__$1 = cljs.core.next.call(null,seq21116);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21117,seq21116__$1);
});
taoensso.encore.keys_EQ_ = (function taoensso$encore$keys_EQ_(m,ks){
return taoensso.encore.ks_EQ_.call(null,ks,m);
});
taoensso.encore.keys_LT__EQ_ = (function taoensso$encore$keys_LT__EQ_(m,ks){
return taoensso.encore.ks_LT__EQ_.call(null,ks,m);
});
taoensso.encore.keys_GT__EQ_ = (function taoensso$encore$keys_GT__EQ_(m,ks){
return taoensso.encore.ks_GT__EQ_.call(null,ks,m);
});
taoensso.encore.keys_EQ_nnil_QMARK_ = (function taoensso$encore$keys_EQ_nnil_QMARK_(m,ks){
return taoensso.encore.ks_nnil_QMARK_.call(null,ks,m);
});
taoensso.encore.parse_bool = taoensso.encore.as__QMARK_bool;
taoensso.encore.parse_int = taoensso.encore.as__QMARK_int;
taoensso.encore.parse_float = taoensso.encore.as__QMARK_float;
taoensso.encore.merge_deep_with = taoensso.encore.nested_merge_with;
taoensso.encore.merge_deep = taoensso.encore.nested_merge;
taoensso.encore.rate_limiter = (function taoensso$encore$rate_limiter(ncalls_limit,window_ms){
return taoensso.encore.rate_limiter_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
});
taoensso.encore.rate_limited = (function taoensso$encore$rate_limited(ncalls_limit,window_ms,f){
var rl = taoensso.encore.rate_limiter_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
return ((function (rl){
return (function() { 
var G__21123__delegate = function (args){
var temp__4423__auto__ = rl.call(null);
if(cljs.core.truth_(temp__4423__auto__)){
var backoff_ms = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backoff-ms","backoff-ms",1679281507),backoff_ms], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),f.call(null)], null);
}
};
var G__21123 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21124__i = 0, G__21124__a = new Array(arguments.length -  0);
while (G__21124__i < G__21124__a.length) {G__21124__a[G__21124__i] = arguments[G__21124__i + 0]; ++G__21124__i;}
  args = new cljs.core.IndexedSeq(G__21124__a,0);
} 
return G__21123__delegate.call(this,args);};
G__21123.cljs$lang$maxFixedArity = 0;
G__21123.cljs$lang$applyTo = (function (arglist__21125){
var args = cljs.core.seq(arglist__21125);
return G__21123__delegate(args);
});
G__21123.cljs$core$IFn$_invoke$arity$variadic = G__21123__delegate;
return G__21123;
})()
;
;})(rl))
});
if(typeof taoensso.encore._STAR_log_level_STAR_ !== 'undefined'){
} else {
/**
 * DEPRECATED
 */
taoensso.encore._STAR_log_level_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596);
}

taoensso.encore.log_QMARK_ = (function (){var __GT_n = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"trace","trace",-1082747415),(1),new cljs.core.Keyword(null,"debug","debug",-1608172596),(2),new cljs.core.Keyword(null,"info","info",-317069002),(3),new cljs.core.Keyword(null,"warn","warn",-436710552),(4),new cljs.core.Keyword(null,"error","error",-978969032),(5),new cljs.core.Keyword(null,"fatal","fatal",1874419888),(6),new cljs.core.Keyword(null,"report","report",1394055010),(7)], null);
return ((function (__GT_n){
return (function (level){
return (__GT_n.call(null,level) >= __GT_n.call(null,taoensso.encore._STAR_log_level_STAR_));
});
;})(__GT_n))
})();

taoensso.encore.tracef = (function taoensso$encore$tracef(var_args){
var args__18590__auto__ = [];
var len__18583__auto___21140 = arguments.length;
var i__18584__auto___21141 = (0);
while(true){
if((i__18584__auto___21141 < len__18583__auto___21140)){
args__18590__auto__.push((arguments[i__18584__auto___21141]));

var G__21142 = (i__18584__auto___21141 + (1));
i__18584__auto___21141 = G__21142;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((1) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((1)),(0))):null);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18591__auto__);
});

taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"trace","trace",-1082747415)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.tracef.cljs$lang$maxFixedArity = (1);

taoensso.encore.tracef.cljs$lang$applyTo = (function (seq21126){
var G__21127 = cljs.core.first.call(null,seq21126);
var seq21126__$1 = cljs.core.next.call(null,seq21126);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic(G__21127,seq21126__$1);
});

taoensso.encore.debugf = (function taoensso$encore$debugf(var_args){
var args__18590__auto__ = [];
var len__18583__auto___21143 = arguments.length;
var i__18584__auto___21144 = (0);
while(true){
if((i__18584__auto___21144 < len__18583__auto___21143)){
args__18590__auto__.push((arguments[i__18584__auto___21144]));

var G__21145 = (i__18584__auto___21144 + (1));
i__18584__auto___21144 = G__21145;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((1) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((1)),(0))):null);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18591__auto__);
});

taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.debugf.cljs$lang$maxFixedArity = (1);

taoensso.encore.debugf.cljs$lang$applyTo = (function (seq21128){
var G__21129 = cljs.core.first.call(null,seq21128);
var seq21128__$1 = cljs.core.next.call(null,seq21128);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic(G__21129,seq21128__$1);
});

taoensso.encore.infof = (function taoensso$encore$infof(var_args){
var args__18590__auto__ = [];
var len__18583__auto___21146 = arguments.length;
var i__18584__auto___21147 = (0);
while(true){
if((i__18584__auto___21147 < len__18583__auto___21146)){
args__18590__auto__.push((arguments[i__18584__auto___21147]));

var G__21148 = (i__18584__auto___21147 + (1));
i__18584__auto___21147 = G__21148;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((1) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((1)),(0))):null);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18591__auto__);
});

taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"info","info",-317069002)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.infof.cljs$lang$maxFixedArity = (1);

taoensso.encore.infof.cljs$lang$applyTo = (function (seq21130){
var G__21131 = cljs.core.first.call(null,seq21130);
var seq21130__$1 = cljs.core.next.call(null,seq21130);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic(G__21131,seq21130__$1);
});

taoensso.encore.warnf = (function taoensso$encore$warnf(var_args){
var args__18590__auto__ = [];
var len__18583__auto___21149 = arguments.length;
var i__18584__auto___21150 = (0);
while(true){
if((i__18584__auto___21150 < len__18583__auto___21149)){
args__18590__auto__.push((arguments[i__18584__auto___21150]));

var G__21151 = (i__18584__auto___21150 + (1));
i__18584__auto___21150 = G__21151;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((1) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((1)),(0))):null);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18591__auto__);
});

taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552)))){
return cljs.core.apply.call(null,taoensso.encore.logf,[cljs.core.str("WARN: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.warnf.cljs$lang$maxFixedArity = (1);

taoensso.encore.warnf.cljs$lang$applyTo = (function (seq21132){
var G__21133 = cljs.core.first.call(null,seq21132);
var seq21132__$1 = cljs.core.next.call(null,seq21132);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic(G__21133,seq21132__$1);
});

taoensso.encore.errorf = (function taoensso$encore$errorf(var_args){
var args__18590__auto__ = [];
var len__18583__auto___21152 = arguments.length;
var i__18584__auto___21153 = (0);
while(true){
if((i__18584__auto___21153 < len__18583__auto___21152)){
args__18590__auto__.push((arguments[i__18584__auto___21153]));

var G__21154 = (i__18584__auto___21153 + (1));
i__18584__auto___21153 = G__21154;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((1) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((1)),(0))):null);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18591__auto__);
});

taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"error","error",-978969032)))){
return cljs.core.apply.call(null,taoensso.encore.logf,[cljs.core.str("ERROR: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.errorf.cljs$lang$maxFixedArity = (1);

taoensso.encore.errorf.cljs$lang$applyTo = (function (seq21134){
var G__21135 = cljs.core.first.call(null,seq21134);
var seq21134__$1 = cljs.core.next.call(null,seq21134);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic(G__21135,seq21134__$1);
});

taoensso.encore.fatalf = (function taoensso$encore$fatalf(var_args){
var args__18590__auto__ = [];
var len__18583__auto___21155 = arguments.length;
var i__18584__auto___21156 = (0);
while(true){
if((i__18584__auto___21156 < len__18583__auto___21155)){
args__18590__auto__.push((arguments[i__18584__auto___21156]));

var G__21157 = (i__18584__auto___21156 + (1));
i__18584__auto___21156 = G__21157;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((1) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((1)),(0))):null);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18591__auto__);
});

taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"fatal","fatal",1874419888)))){
return cljs.core.apply.call(null,taoensso.encore.logf,[cljs.core.str("FATAL: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.fatalf.cljs$lang$maxFixedArity = (1);

taoensso.encore.fatalf.cljs$lang$applyTo = (function (seq21136){
var G__21137 = cljs.core.first.call(null,seq21136);
var seq21136__$1 = cljs.core.next.call(null,seq21136);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic(G__21137,seq21136__$1);
});

taoensso.encore.reportf = (function taoensso$encore$reportf(var_args){
var args__18590__auto__ = [];
var len__18583__auto___21158 = arguments.length;
var i__18584__auto___21159 = (0);
while(true){
if((i__18584__auto___21159 < len__18583__auto___21158)){
args__18590__auto__.push((arguments[i__18584__auto___21159]));

var G__21160 = (i__18584__auto___21159 + (1));
i__18584__auto___21159 = G__21160;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((1) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((1)),(0))):null);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18591__auto__);
});

taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"report","report",1394055010)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.reportf.cljs$lang$maxFixedArity = (1);

taoensso.encore.reportf.cljs$lang$applyTo = (function (seq21138){
var G__21139 = cljs.core.first.call(null,seq21138);
var seq21138__$1 = cljs.core.next.call(null,seq21138);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic(G__21139,seq21138__$1);
});
/**
 * Deprecated
 */
taoensso.encore.greatest = (function taoensso$encore$greatest(var_args){
var args__18590__auto__ = [];
var len__18583__auto___21167 = arguments.length;
var i__18584__auto___21168 = (0);
while(true){
if((i__18584__auto___21168 < len__18583__auto___21167)){
args__18590__auto__.push((arguments[i__18584__auto___21168]));

var G__21169 = (i__18584__auto___21168 + (1));
i__18584__auto___21168 = G__21169;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((1) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((1)),(0))):null);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18591__auto__);
});

taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__21165){
var vec__21166 = p__21165;
var _QMARK_comparator = cljs.core.nth.call(null,vec__21166,(0),null);
var comparator = (function (){var or__17525__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__21166,_QMARK_comparator){
return (function (p1__21161_SHARP_,p2__21162_SHARP_){
if((comparator.call(null,p1__21161_SHARP_,p2__21162_SHARP_) > (0))){
return p2__21162_SHARP_;
} else {
return p1__21161_SHARP_;
}
});})(comparator,vec__21166,_QMARK_comparator))
,coll);
});

taoensso.encore.greatest.cljs$lang$maxFixedArity = (1);

taoensso.encore.greatest.cljs$lang$applyTo = (function (seq21163){
var G__21164 = cljs.core.first.call(null,seq21163);
var seq21163__$1 = cljs.core.next.call(null,seq21163);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic(G__21164,seq21163__$1);
});
/**
 * Deprecated
 */
taoensso.encore.least = (function taoensso$encore$least(var_args){
var args__18590__auto__ = [];
var len__18583__auto___21176 = arguments.length;
var i__18584__auto___21177 = (0);
while(true){
if((i__18584__auto___21177 < len__18583__auto___21176)){
args__18590__auto__.push((arguments[i__18584__auto___21177]));

var G__21178 = (i__18584__auto___21177 + (1));
i__18584__auto___21177 = G__21178;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((1) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((1)),(0))):null);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18591__auto__);
});

taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__21174){
var vec__21175 = p__21174;
var _QMARK_comparator = cljs.core.nth.call(null,vec__21175,(0),null);
var comparator = (function (){var or__17525__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__21175,_QMARK_comparator){
return (function (p1__21170_SHARP_,p2__21171_SHARP_){
if((comparator.call(null,p1__21170_SHARP_,p2__21171_SHARP_) < (0))){
return p2__21171_SHARP_;
} else {
return p1__21170_SHARP_;
}
});})(comparator,vec__21175,_QMARK_comparator))
,coll);
});

taoensso.encore.least.cljs$lang$maxFixedArity = (1);

taoensso.encore.least.cljs$lang$applyTo = (function (seq21172){
var G__21173 = cljs.core.first.call(null,seq21172);
var seq21172__$1 = cljs.core.next.call(null,seq21172);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic(G__21173,seq21172__$1);
});
taoensso.encore.clj1098 = (function taoensso$encore$clj1098(x){
var or__17525__auto__ = x;
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

//# sourceMappingURL=encore.js.map?rel=1452702617774