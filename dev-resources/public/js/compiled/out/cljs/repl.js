// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39932_39936 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39933_39937 = null;
var count__39934_39938 = (0);
var i__39935_39939 = (0);
while(true){
if((i__39935_39939 < count__39934_39938)){
var f_39940 = cljs.core._nth.call(null,chunk__39933_39937,i__39935_39939);
cljs.core.println.call(null,"  ",f_39940);

var G__39941 = seq__39932_39936;
var G__39942 = chunk__39933_39937;
var G__39943 = count__39934_39938;
var G__39944 = (i__39935_39939 + (1));
seq__39932_39936 = G__39941;
chunk__39933_39937 = G__39942;
count__39934_39938 = G__39943;
i__39935_39939 = G__39944;
continue;
} else {
var temp__4425__auto___39945 = cljs.core.seq.call(null,seq__39932_39936);
if(temp__4425__auto___39945){
var seq__39932_39946__$1 = temp__4425__auto___39945;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39932_39946__$1)){
var c__18328__auto___39947 = cljs.core.chunk_first.call(null,seq__39932_39946__$1);
var G__39948 = cljs.core.chunk_rest.call(null,seq__39932_39946__$1);
var G__39949 = c__18328__auto___39947;
var G__39950 = cljs.core.count.call(null,c__18328__auto___39947);
var G__39951 = (0);
seq__39932_39936 = G__39948;
chunk__39933_39937 = G__39949;
count__39934_39938 = G__39950;
i__39935_39939 = G__39951;
continue;
} else {
var f_39952 = cljs.core.first.call(null,seq__39932_39946__$1);
cljs.core.println.call(null,"  ",f_39952);

var G__39953 = cljs.core.next.call(null,seq__39932_39946__$1);
var G__39954 = null;
var G__39955 = (0);
var G__39956 = (0);
seq__39932_39936 = G__39953;
chunk__39933_39937 = G__39954;
count__39934_39938 = G__39955;
i__39935_39939 = G__39956;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39957 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__17525__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_39957);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_39957)))?cljs.core.second.call(null,arglists_39957):arglists_39957));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39922 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39923 = null;
var count__39924 = (0);
var i__39925 = (0);
while(true){
if((i__39925 < count__39924)){
var vec__39926 = cljs.core._nth.call(null,chunk__39923,i__39925);
var name = cljs.core.nth.call(null,vec__39926,(0),null);
var map__39927 = cljs.core.nth.call(null,vec__39926,(1),null);
var map__39927__$1 = ((((!((map__39927 == null)))?((((map__39927.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39927.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39927):map__39927);
var doc = cljs.core.get.call(null,map__39927__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__39927__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__39958 = seq__39922;
var G__39959 = chunk__39923;
var G__39960 = count__39924;
var G__39961 = (i__39925 + (1));
seq__39922 = G__39958;
chunk__39923 = G__39959;
count__39924 = G__39960;
i__39925 = G__39961;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__39922);
if(temp__4425__auto__){
var seq__39922__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39922__$1)){
var c__18328__auto__ = cljs.core.chunk_first.call(null,seq__39922__$1);
var G__39962 = cljs.core.chunk_rest.call(null,seq__39922__$1);
var G__39963 = c__18328__auto__;
var G__39964 = cljs.core.count.call(null,c__18328__auto__);
var G__39965 = (0);
seq__39922 = G__39962;
chunk__39923 = G__39963;
count__39924 = G__39964;
i__39925 = G__39965;
continue;
} else {
var vec__39929 = cljs.core.first.call(null,seq__39922__$1);
var name = cljs.core.nth.call(null,vec__39929,(0),null);
var map__39930 = cljs.core.nth.call(null,vec__39929,(1),null);
var map__39930__$1 = ((((!((map__39930 == null)))?((((map__39930.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39930.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39930):map__39930);
var doc = cljs.core.get.call(null,map__39930__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__39930__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__39966 = cljs.core.next.call(null,seq__39922__$1);
var G__39967 = null;
var G__39968 = (0);
var G__39969 = (0);
seq__39922 = G__39966;
chunk__39923 = G__39967;
count__39924 = G__39968;
i__39925 = G__39969;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1452702638458