// Compiled by ClojureScript 1.7.170 {}

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns err log fn]
*/
goog.provide('quantum.core.numeric.combinatorics');
goog.require('cljs.core');
goog.require('clojure.core.rrb_vector');
goog.require('quantum.core.log');
goog.require('cljs.core');
goog.require('quantum.core.function$');
goog.require('quantum.core.ns');
goog.require('quantum.core.error');
/**
 * Annoyingly, the built-in distinct? doesn't handle 0 args, so we need
 * to write our own version that considers the empty-list to be distinct
 */
quantum.core.numeric.combinatorics.all_different_QMARK_ = (function quantum$core$numeric$combinatorics$all_different_QMARK_(s){
if(cljs.core.seq.call(null,s)){
return cljs.core.apply.call(null,cljs.core.distinct_QMARK_,s);
} else {
return true;
}
});
quantum.core.numeric.combinatorics.plus = cljs.core._PLUS_;
quantum.core.numeric.combinatorics.mult = cljs.core._STAR_;
quantum.core.numeric.combinatorics.index_combinations = (function quantum$core$numeric$combinatorics$index_combinations(n,cnt){
return (new cljs.core.LazySeq(null,(function (){
var c = cljs.core.vec.call(null,cljs.core.cons.call(null,null,(function (){var iter__18297__auto__ = (function quantum$core$numeric$combinatorics$index_combinations_$_iter__31926(s__31927){
return (new cljs.core.LazySeq(null,(function (){
var s__31927__$1 = s__31927;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__31927__$1);
if(temp__4425__auto__){
var s__31927__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31927__$2)){
var c__18295__auto__ = cljs.core.chunk_first.call(null,s__31927__$2);
var size__18296__auto__ = cljs.core.count.call(null,c__18295__auto__);
var b__31929 = cljs.core.chunk_buffer.call(null,size__18296__auto__);
if((function (){var i__31928 = (0);
while(true){
if((i__31928 < size__18296__auto__)){
var j = cljs.core._nth.call(null,c__18295__auto__,i__31928);
cljs.core.chunk_append.call(null,b__31929,((j + cnt) + (- (n + (1)))));

var G__31930 = (i__31928 + (1));
i__31928 = G__31930;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31929),quantum$core$numeric$combinatorics$index_combinations_$_iter__31926.call(null,cljs.core.chunk_rest.call(null,s__31927__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31929),null);
}
} else {
var j = cljs.core.first.call(null,s__31927__$2);
return cljs.core.cons.call(null,((j + cnt) + (- (n + (1)))),quantum$core$numeric$combinatorics$index_combinations_$_iter__31926.call(null,cljs.core.rest.call(null,s__31927__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__18297__auto__.call(null,cljs.core.range.call(null,(1),(n + (1))));
})()));
var iter_comb = ((function (c){
return (function quantum$core$numeric$combinatorics$index_combinations_$_iter_comb(c__$1,j){
if((j > n)){
return null;
} else {
var c__$2 = cljs.core.assoc.call(null,c__$1,j,(c__$1.call(null,j) - (1)));
if((c__$2.call(null,j) < j)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$2,(j + (1))], null);
} else {
var c__$3 = c__$2;
var j__$1 = j;
while(true){
if(cljs.core._EQ_.call(null,j__$1,(1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$3,j__$1], null);
} else {
var G__31931 = cljs.core.assoc.call(null,c__$3,(j__$1 - (1)),(c__$3.call(null,j__$1) - (1)));
var G__31932 = (j__$1 - (1));
c__$3 = G__31931;
j__$1 = G__31932;
continue;
}
break;
}
}
}
});})(c))
;
var step = ((function (c,iter_comb){
return (function quantum$core$numeric$combinatorics$index_combinations_$_step(c__$1,j){
return cljs.core.cons.call(null,cljs.core.rseq.call(null,cljs.core.subvec.call(null,c__$1,(1),(n + (1)))),(new cljs.core.LazySeq(null,((function (c,iter_comb){
return (function (){
var next_step = iter_comb.call(null,c__$1,j);
if(cljs.core.truth_(next_step)){
return quantum$core$numeric$combinatorics$index_combinations_$_step.call(null,next_step.call(null,(0)),next_step.call(null,(1)));
} else {
return null;
}
});})(c,iter_comb))
,null,null)));
});})(c,iter_comb))
;
return step.call(null,c,(1));
}),null,null));
});
quantum.core.numeric.combinatorics.distribute = (function quantum$core$numeric$combinatorics$distribute(m,index,total,distribution,already_distributed){
var distribution__$1 = distribution;
var index__$1 = index;
var already_distributed__$1 = already_distributed;
while(true){
if((index__$1 >= cljs.core.count.call(null,m))){
return null;
} else {
var quantity_to_distribute = (total - already_distributed__$1);
var mi = m.call(null,index__$1);
if((quantity_to_distribute <= mi)){
return cljs.core.conj.call(null,distribution__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,quantity_to_distribute,total], null));
} else {
var G__31933 = cljs.core.conj.call(null,distribution__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,mi,(already_distributed__$1 + mi)], null));
var G__31934 = (index__$1 + (1));
var G__31935 = (already_distributed__$1 + mi);
distribution__$1 = G__31933;
index__$1 = G__31934;
already_distributed__$1 = G__31935;
continue;
}
}
break;
}
});
quantum.core.numeric.combinatorics.next_distribution = (function quantum$core$numeric$combinatorics$next_distribution(m,total,distribution){
var vec__31938 = cljs.core.peek.call(null,distribution);
var index = cljs.core.nth.call(null,vec__31938,(0),null);
var this_bucket = cljs.core.nth.call(null,vec__31938,(1),null);
var this_and_to_the_left = cljs.core.nth.call(null,vec__31938,(2),null);
if((index < (cljs.core.count.call(null,m) - (1)))){
if(cljs.core._EQ_.call(null,this_bucket,(1))){
return cljs.core.conj.call(null,cljs.core.pop.call(null,distribution),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(index + (1)),(1),this_and_to_the_left], null));
} else {
return cljs.core.conj.call(null,cljs.core.pop.call(null,distribution),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,(this_bucket - (1)),(this_and_to_the_left - (1))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(index + (1)),(1),this_and_to_the_left], null));
}
} else {
if(cljs.core._EQ_.call(null,this_bucket,total)){
return null;
} else {
var distribution__$1 = cljs.core.pop.call(null,distribution);
while(true){
var vec__31939 = cljs.core.peek.call(null,distribution__$1);
var index__$1 = cljs.core.nth.call(null,vec__31939,(0),null);
var this_bucket__$1 = cljs.core.nth.call(null,vec__31939,(1),null);
var this_and_to_the_left__$1 = cljs.core.nth.call(null,vec__31939,(2),null);
var distribution__$2 = ((cljs.core._EQ_.call(null,this_bucket__$1,(1)))?cljs.core.pop.call(null,distribution__$1):cljs.core.conj.call(null,cljs.core.pop.call(null,distribution__$1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,(this_bucket__$1 - (1)),(this_and_to_the_left__$1 - (1))], null)));
if(((total - (this_and_to_the_left__$1 - (1))) <= cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.subvec.call(null,m,(index__$1 + (1)))))){
return quantum.core.numeric.combinatorics.distribute.call(null,m,(index__$1 + (1)),total,distribution__$2,(this_and_to_the_left__$1 - (1)));
} else {
if(cljs.core.seq.call(null,distribution__$2)){
var G__31940 = distribution__$2;
distribution__$1 = G__31940;
continue;
} else {
return null;

}
}
break;
}

}
}
});
quantum.core.numeric.combinatorics.bounded_distributions = (function quantum$core$numeric$combinatorics$bounded_distributions(m,t){
var step = (function quantum$core$numeric$combinatorics$bounded_distributions_$_step(distribution){
return cljs.core.cons.call(null,distribution,(new cljs.core.LazySeq(null,(function (){
var temp__4425__auto__ = quantum.core.numeric.combinatorics.next_distribution.call(null,m,t,distribution);
if(cljs.core.truth_(temp__4425__auto__)){
var next_step = temp__4425__auto__;
return quantum$core$numeric$combinatorics$bounded_distributions_$_step.call(null,next_step);
} else {
return null;
}
}),null,null)));
});
return step.call(null,quantum.core.numeric.combinatorics.distribute.call(null,m,(0),t,cljs.core.PersistentVector.EMPTY,(0)));
});
/**
 * Handles the case when you want the combinations of a list with duplicate items.
 */
quantum.core.numeric.combinatorics.multi_comb = (function quantum$core$numeric$combinatorics$multi_comb(l,t){
var f = cljs.core.frequencies.call(null,l);
var v = cljs.core.vec.call(null,cljs.core.distinct.call(null,l));
var domain = cljs.core.range.call(null,cljs.core.count.call(null,v));
var m = cljs.core.vec.call(null,(function (){var iter__18297__auto__ = ((function (f,v,domain){
return (function quantum$core$numeric$combinatorics$multi_comb_$_iter__31981(s__31982){
return (new cljs.core.LazySeq(null,((function (f,v,domain){
return (function (){
var s__31982__$1 = s__31982;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__31982__$1);
if(temp__4425__auto__){
var s__31982__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31982__$2)){
var c__18295__auto__ = cljs.core.chunk_first.call(null,s__31982__$2);
var size__18296__auto__ = cljs.core.count.call(null,c__18295__auto__);
var b__31984 = cljs.core.chunk_buffer.call(null,size__18296__auto__);
if((function (){var i__31983 = (0);
while(true){
if((i__31983 < size__18296__auto__)){
var i = cljs.core._nth.call(null,c__18295__auto__,i__31983);
cljs.core.chunk_append.call(null,b__31984,f.call(null,v.call(null,i)));

var G__32021 = (i__31983 + (1));
i__31983 = G__32021;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31984),quantum$core$numeric$combinatorics$multi_comb_$_iter__31981.call(null,cljs.core.chunk_rest.call(null,s__31982__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31984),null);
}
} else {
var i = cljs.core.first.call(null,s__31982__$2);
return cljs.core.cons.call(null,f.call(null,v.call(null,i)),quantum$core$numeric$combinatorics$multi_comb_$_iter__31981.call(null,cljs.core.rest.call(null,s__31982__$2)));
}
} else {
return null;
}
break;
}
});})(f,v,domain))
,null,null));
});})(f,v,domain))
;
return iter__18297__auto__.call(null,domain);
})());
var qs = quantum.core.numeric.combinatorics.bounded_distributions.call(null,m,t);
var iter__18297__auto__ = ((function (f,v,domain,m,qs){
return (function quantum$core$numeric$combinatorics$multi_comb_$_iter__31985(s__31986){
return (new cljs.core.LazySeq(null,((function (f,v,domain,m,qs){
return (function (){
var s__31986__$1 = s__31986;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__31986__$1);
if(temp__4425__auto__){
var s__31986__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31986__$2)){
var c__18295__auto__ = cljs.core.chunk_first.call(null,s__31986__$2);
var size__18296__auto__ = cljs.core.count.call(null,c__18295__auto__);
var b__31988 = cljs.core.chunk_buffer.call(null,size__18296__auto__);
if((function (){var i__31987 = (0);
while(true){
if((i__31987 < size__18296__auto__)){
var q = cljs.core._nth.call(null,c__18295__auto__,i__31987);
cljs.core.chunk_append.call(null,b__31988,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__18297__auto__ = ((function (i__31987,q,c__18295__auto__,size__18296__auto__,b__31988,s__31986__$2,temp__4425__auto__,f,v,domain,m,qs){
return (function quantum$core$numeric$combinatorics$multi_comb_$_iter__31985_$_iter__32005(s__32006){
return (new cljs.core.LazySeq(null,((function (i__31987,q,c__18295__auto__,size__18296__auto__,b__31988,s__31986__$2,temp__4425__auto__,f,v,domain,m,qs){
return (function (){
var s__32006__$1 = s__32006;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__32006__$1);
if(temp__4425__auto____$1){
var s__32006__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32006__$2)){
var c__18295__auto____$1 = cljs.core.chunk_first.call(null,s__32006__$2);
var size__18296__auto____$1 = cljs.core.count.call(null,c__18295__auto____$1);
var b__32008 = cljs.core.chunk_buffer.call(null,size__18296__auto____$1);
if((function (){var i__32007 = (0);
while(true){
if((i__32007 < size__18296__auto____$1)){
var vec__32011 = cljs.core._nth.call(null,c__18295__auto____$1,i__32007);
var index = cljs.core.nth.call(null,vec__32011,(0),null);
var this_bucket = cljs.core.nth.call(null,vec__32011,(1),null);
var _ = cljs.core.nth.call(null,vec__32011,(2),null);
cljs.core.chunk_append.call(null,b__32008,cljs.core.repeat.call(null,this_bucket,v.call(null,index)));

var G__32022 = (i__32007 + (1));
i__32007 = G__32022;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32008),quantum$core$numeric$combinatorics$multi_comb_$_iter__31985_$_iter__32005.call(null,cljs.core.chunk_rest.call(null,s__32006__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32008),null);
}
} else {
var vec__32012 = cljs.core.first.call(null,s__32006__$2);
var index = cljs.core.nth.call(null,vec__32012,(0),null);
var this_bucket = cljs.core.nth.call(null,vec__32012,(1),null);
var _ = cljs.core.nth.call(null,vec__32012,(2),null);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,this_bucket,v.call(null,index)),quantum$core$numeric$combinatorics$multi_comb_$_iter__31985_$_iter__32005.call(null,cljs.core.rest.call(null,s__32006__$2)));
}
} else {
return null;
}
break;
}
});})(i__31987,q,c__18295__auto__,size__18296__auto__,b__31988,s__31986__$2,temp__4425__auto__,f,v,domain,m,qs))
,null,null));
});})(i__31987,q,c__18295__auto__,size__18296__auto__,b__31988,s__31986__$2,temp__4425__auto__,f,v,domain,m,qs))
;
return iter__18297__auto__.call(null,q);
})()));

var G__32023 = (i__31987 + (1));
i__31987 = G__32023;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31988),quantum$core$numeric$combinatorics$multi_comb_$_iter__31985.call(null,cljs.core.chunk_rest.call(null,s__31986__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31988),null);
}
} else {
var q = cljs.core.first.call(null,s__31986__$2);
return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__18297__auto__ = ((function (q,s__31986__$2,temp__4425__auto__,f,v,domain,m,qs){
return (function quantum$core$numeric$combinatorics$multi_comb_$_iter__31985_$_iter__32013(s__32014){
return (new cljs.core.LazySeq(null,((function (q,s__31986__$2,temp__4425__auto__,f,v,domain,m,qs){
return (function (){
var s__32014__$1 = s__32014;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__32014__$1);
if(temp__4425__auto____$1){
var s__32014__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32014__$2)){
var c__18295__auto__ = cljs.core.chunk_first.call(null,s__32014__$2);
var size__18296__auto__ = cljs.core.count.call(null,c__18295__auto__);
var b__32016 = cljs.core.chunk_buffer.call(null,size__18296__auto__);
if((function (){var i__32015 = (0);
while(true){
if((i__32015 < size__18296__auto__)){
var vec__32019 = cljs.core._nth.call(null,c__18295__auto__,i__32015);
var index = cljs.core.nth.call(null,vec__32019,(0),null);
var this_bucket = cljs.core.nth.call(null,vec__32019,(1),null);
var _ = cljs.core.nth.call(null,vec__32019,(2),null);
cljs.core.chunk_append.call(null,b__32016,cljs.core.repeat.call(null,this_bucket,v.call(null,index)));

var G__32024 = (i__32015 + (1));
i__32015 = G__32024;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32016),quantum$core$numeric$combinatorics$multi_comb_$_iter__31985_$_iter__32013.call(null,cljs.core.chunk_rest.call(null,s__32014__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32016),null);
}
} else {
var vec__32020 = cljs.core.first.call(null,s__32014__$2);
var index = cljs.core.nth.call(null,vec__32020,(0),null);
var this_bucket = cljs.core.nth.call(null,vec__32020,(1),null);
var _ = cljs.core.nth.call(null,vec__32020,(2),null);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,this_bucket,v.call(null,index)),quantum$core$numeric$combinatorics$multi_comb_$_iter__31985_$_iter__32013.call(null,cljs.core.rest.call(null,s__32014__$2)));
}
} else {
return null;
}
break;
}
});})(q,s__31986__$2,temp__4425__auto__,f,v,domain,m,qs))
,null,null));
});})(q,s__31986__$2,temp__4425__auto__,f,v,domain,m,qs))
;
return iter__18297__auto__.call(null,q);
})()),quantum$core$numeric$combinatorics$multi_comb_$_iter__31985.call(null,cljs.core.rest.call(null,s__31986__$2)));
}
} else {
return null;
}
break;
}
});})(f,v,domain,m,qs))
,null,null));
});})(f,v,domain,m,qs))
;
return iter__18297__auto__.call(null,qs);
});
/**
 * All the unique ways of taking t different elements from items
 */
quantum.core.numeric.combinatorics.combinations = (function quantum$core$numeric$combinatorics$combinations(items,t){
var v_items = cljs.core.vec.call(null,cljs.core.reverse.call(null,items));
if((t === (0))){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.List.EMPTY);
} else {
var cnt = cljs.core.count.call(null,items);
if((t > cnt)){
return null;
} else {
if(cljs.core._EQ_.call(null,t,(1))){
var iter__18297__auto__ = ((function (cnt,v_items){
return (function quantum$core$numeric$combinatorics$combinations_$_iter__32030(s__32031){
return (new cljs.core.LazySeq(null,((function (cnt,v_items){
return (function (){
var s__32031__$1 = s__32031;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__32031__$1);
if(temp__4425__auto__){
var s__32031__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32031__$2)){
var c__18295__auto__ = cljs.core.chunk_first.call(null,s__32031__$2);
var size__18296__auto__ = cljs.core.count.call(null,c__18295__auto__);
var b__32033 = cljs.core.chunk_buffer.call(null,size__18296__auto__);
if((function (){var i__32032 = (0);
while(true){
if((i__32032 < size__18296__auto__)){
var item = cljs.core._nth.call(null,c__18295__auto__,i__32032);
cljs.core.chunk_append.call(null,b__32033,cljs.core._conj.call(null,cljs.core.List.EMPTY,item));

var G__32034 = (i__32032 + (1));
i__32032 = G__32034;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32033),quantum$core$numeric$combinatorics$combinations_$_iter__32030.call(null,cljs.core.chunk_rest.call(null,s__32031__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32033),null);
}
} else {
var item = cljs.core.first.call(null,s__32031__$2);
return cljs.core.cons.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,item),quantum$core$numeric$combinatorics$combinations_$_iter__32030.call(null,cljs.core.rest.call(null,s__32031__$2)));
}
} else {
return null;
}
break;
}
});})(cnt,v_items))
,null,null));
});})(cnt,v_items))
;
return iter__18297__auto__.call(null,cljs.core.distinct.call(null,items));
} else {
if(cljs.core.truth_(quantum.core.numeric.combinatorics.all_different_QMARK_.call(null,items))){
if(cljs.core._EQ_.call(null,t,cnt)){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.seq.call(null,items));
} else {
return cljs.core.map.call(null,((function (cnt,v_items){
return (function (p1__32025_SHARP_){
return cljs.core.map.call(null,v_items,p1__32025_SHARP_);
});})(cnt,v_items))
,quantum.core.numeric.combinatorics.index_combinations.call(null,t,cnt));
}
} else {
return quantum.core.numeric.combinatorics.multi_comb.call(null,items,t);

}
}
}
}
});
/**
 * Given a sequence that may have chunks, return a sequence that is 1-at-a-time
 * lazy with no chunks. Chunks are good for efficiency when the data items are
 * small, but when being processed via map, for example, a reference is kept to
 * every function result in the chunk until the entire chunk has been processed,
 * which increases the amount of memory in use that cannot be garbage
 * collected.
 */
quantum.core.numeric.combinatorics.unchunk = (function quantum$core$numeric$combinatorics$unchunk(s){
return (new cljs.core.LazySeq(null,(function (){
if(cljs.core.seq.call(null,s)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s),quantum$core$numeric$combinatorics$unchunk.call(null,cljs.core.rest.call(null,s)));
} else {
return null;
}
}),null,null));
});
/**
 * All the subsets of items
 */
quantum.core.numeric.combinatorics.subsets = (function quantum$core$numeric$combinatorics$subsets(items){
return cljs.core.mapcat.call(null,(function (n){
return quantum.core.numeric.combinatorics.combinations.call(null,items,n);
}),quantum.core.numeric.combinatorics.unchunk.call(null,cljs.core.range.call(null,(cljs.core.count.call(null,items) + (1)))));
});
/**
 * All the ways to take one item from each sequence
 */
quantum.core.numeric.combinatorics.cartesian_product = (function quantum$core$numeric$combinatorics$cartesian_product(var_args){
var args__18590__auto__ = [];
var len__18583__auto___32036 = arguments.length;
var i__18584__auto___32037 = (0);
while(true){
if((i__18584__auto___32037 < len__18583__auto___32036)){
args__18590__auto__.push((arguments[i__18584__auto___32037]));

var G__32038 = (i__18584__auto___32037 + (1));
i__18584__auto___32037 = G__32038;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.core.numeric.combinatorics.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.core.numeric.combinatorics.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec.call(null,seqs);
var step = ((function (v_original_seqs){
return (function quantum$core$numeric$combinatorics$step(v_seqs){
var increment = ((function (v_original_seqs){
return (function (v_seqs__$1){
var i = (cljs.core.count.call(null,v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.call(null,i,(-1))){
return null;
} else {
var temp__4423__auto__ = cljs.core.next.call(null,v_seqs__$2.call(null,i));
if(temp__4423__auto__){
var rst = temp__4423__auto__;
return cljs.core.assoc.call(null,v_seqs__$2,i,rst);
} else {
var G__32039 = (i - (1));
var G__32040 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__32039;
v_seqs__$2 = G__32040;
continue;
}
}
break;
}
});})(v_original_seqs))
;
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons.call(null,cljs.core.map.call(null,cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,((function (increment,v_original_seqs){
return (function (){
return quantum$core$numeric$combinatorics$step.call(null,increment.call(null,v_seqs));
});})(increment,v_original_seqs))
,null,null)));
} else {
return null;
}
});})(v_original_seqs))
;
if(cljs.core.every_QMARK_.call(null,cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,((function (v_original_seqs,step){
return (function (){
return step.call(null,v_original_seqs);
});})(v_original_seqs,step))
,null,null));
} else {
return null;
}
});

quantum.core.numeric.combinatorics.cartesian_product.cljs$lang$maxFixedArity = (0);

quantum.core.numeric.combinatorics.cartesian_product.cljs$lang$applyTo = (function (seq32035){
return quantum.core.numeric.combinatorics.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32035));
});
/**
 * All the ways of taking n (possibly the same) elements from the sequence of items
 */
quantum.core.numeric.combinatorics.selections = (function quantum$core$numeric$combinatorics$selections(items,n){
return cljs.core.apply.call(null,quantum.core.numeric.combinatorics.cartesian_product,cljs.core.take.call(null,n,cljs.core.repeat.call(null,items)));
});
quantum.core.numeric.combinatorics.iter_perm = (function quantum$core$numeric$combinatorics$iter_perm(v){
var len = cljs.core.count.call(null,v);
var j = (function (){var i = (len - (2));
while(true){
if(cljs.core._EQ_.call(null,i,(-1))){
return null;
} else {
if((v.call(null,i) < v.call(null,(i + (1))))){
return i;
} else {
var G__32041 = (i - (1));
i = G__32041;
continue;

}
}
break;
}
})();
if(cljs.core.truth_(j)){
var vj = v.call(null,j);
var l = (function (){var i = (len - (1));
while(true){
if((vj < v.call(null,i))){
return i;
} else {
var G__32042 = (i - (1));
i = G__32042;
continue;
}
break;
}
})();
var v__$1 = cljs.core.assoc.call(null,v,j,v.call(null,l),l,vj);
var k = (j + (1));
var l__$1 = (len - (1));
while(true){
if((k < l__$1)){
var G__32043 = cljs.core.assoc.call(null,v__$1,k,v__$1.call(null,l__$1),l__$1,v__$1.call(null,k));
var G__32044 = (k + (1));
var G__32045 = (l__$1 - (1));
v__$1 = G__32043;
k = G__32044;
l__$1 = G__32045;
continue;
} else {
return v__$1;
}
break;
}
} else {
return null;
}
});
quantum.core.numeric.combinatorics.vec_lex_permutations = (function quantum$core$numeric$combinatorics$vec_lex_permutations(v){
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,v,(new cljs.core.LazySeq(null,(function (){
return quantum$core$numeric$combinatorics$vec_lex_permutations.call(null,quantum.core.numeric.combinatorics.iter_perm.call(null,v));
}),null,null)));
} else {
return null;
}
});
/**
 * In prior versions of the combinatorics library, there were two similar functions:
 * |permutations| and |lex-permutations|.
 * It was a source of confusion to know which to call.
 * Now, you can always call |permutations|.
 * When appropriate (i.e., when you pass in a sorted sequence of numbers),
 * |permutations| will automatically call lex-permutations as a speed optimization.
 */
quantum.core.numeric.combinatorics.lex_permutations = (function quantum$core$numeric$combinatorics$lex_permutations(c){
return (new cljs.core.LazySeq(null,(function (){
var vec_sorted = cljs.core.vec.call(null,cljs.core.sort.call(null,c));
if((cljs.core.count.call(null,vec_sorted) === (0))){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY);
} else {
return quantum.core.numeric.combinatorics.vec_lex_permutations.call(null,vec_sorted);
}
}),null,null));
});
/**
 * Returns true iff s is a sequence of numbers in non-decreasing order
 */
quantum.core.numeric.combinatorics.sorted_numbers_QMARK_ = (function quantum$core$numeric$combinatorics$sorted_numbers_QMARK_(s){
var and__17513__auto__ = cljs.core.every_QMARK_.call(null,cljs.core.number_QMARK_,s);
if(and__17513__auto__){
var or__17525__auto__ = cljs.core.empty_QMARK_.call(null,s);
if(or__17525__auto__){
return or__17525__auto__;
} else {
return cljs.core.apply.call(null,cljs.core._LT__EQ_,s);
}
} else {
return and__17513__auto__;
}
});
/**
 * Handles the case when you want the permutations of a list with duplicate items.
 */
quantum.core.numeric.combinatorics.multi_perm = (function quantum$core$numeric$combinatorics$multi_perm(l){
var f = cljs.core.frequencies.call(null,l);
var v = cljs.core.vec.call(null,cljs.core.distinct.call(null,l));
var indices = cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__18297__auto__ = ((function (f,v){
return (function quantum$core$numeric$combinatorics$multi_perm_$_iter__32050(s__32051){
return (new cljs.core.LazySeq(null,((function (f,v){
return (function (){
var s__32051__$1 = s__32051;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__32051__$1);
if(temp__4425__auto__){
var s__32051__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32051__$2)){
var c__18295__auto__ = cljs.core.chunk_first.call(null,s__32051__$2);
var size__18296__auto__ = cljs.core.count.call(null,c__18295__auto__);
var b__32053 = cljs.core.chunk_buffer.call(null,size__18296__auto__);
if((function (){var i__32052 = (0);
while(true){
if((i__32052 < size__18296__auto__)){
var i = cljs.core._nth.call(null,c__18295__auto__,i__32052);
cljs.core.chunk_append.call(null,b__32053,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));

var G__32054 = (i__32052 + (1));
i__32052 = G__32054;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32053),quantum$core$numeric$combinatorics$multi_perm_$_iter__32050.call(null,cljs.core.chunk_rest.call(null,s__32051__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32053),null);
}
} else {
var i = cljs.core.first.call(null,s__32051__$2);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),quantum$core$numeric$combinatorics$multi_perm_$_iter__32050.call(null,cljs.core.rest.call(null,s__32051__$2)));
}
} else {
return null;
}
break;
}
});})(f,v))
,null,null));
});})(f,v))
;
return iter__18297__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
})());
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,v),quantum.core.numeric.combinatorics.lex_permutations.call(null,indices));
});
/**
 * All the distinct permutations of items, lexicographic by index 
 * (special handling for duplicate items).
 */
quantum.core.numeric.combinatorics.permutations = (function quantum$core$numeric$combinatorics$permutations(items){
if(cljs.core.truth_(quantum.core.numeric.combinatorics.sorted_numbers_QMARK_.call(null,items))){
return quantum.core.numeric.combinatorics.lex_permutations.call(null,items);
} else {
if(cljs.core.truth_(quantum.core.numeric.combinatorics.all_different_QMARK_.call(null,items))){
var v = cljs.core.vec.call(null,items);
return cljs.core.map.call(null,((function (v){
return (function (p1__32055_SHARP_){
return cljs.core.map.call(null,v,p1__32055_SHARP_);
});})(v))
,quantum.core.numeric.combinatorics.lex_permutations.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v))));
} else {
return quantum.core.numeric.combinatorics.multi_perm.call(null,items);

}
}
});
quantum.core.numeric.combinatorics.factorial = (function quantum$core$numeric$combinatorics$factorial(n){
if(cljs.core.integer_QMARK_.call(null,n)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

if(!((n < (0)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"neg?","neg?",-1902175577,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)))))].join('')));
}

var acc = (1);
var n__$1 = n;
while(true){
if((n__$1 === (0))){
return acc;
} else {
var G__32056 = quantum.core.numeric.combinatorics.mult.call(null,acc,n__$1);
var G__32057 = (n__$1 - (1));
acc = G__32056;
n__$1 = G__32057;
continue;
}
break;
}
});
/**
 * Input is a non-negative base 10 integer, output is the number in the
 * factorial number system (http://en.wikipedia.org/wiki/Factorial_number_system)
 * expressed as a list of 'digits'
 */
quantum.core.numeric.combinatorics.factorial_numbers = (function quantum$core$numeric$combinatorics$factorial_numbers(n){
if(cljs.core.integer_QMARK_.call(null,n)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

if(!((n < (0)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"neg?","neg?",-1902175577,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)))))].join('')));
}

var n__$1 = n;
var digits = cljs.core.List.EMPTY;
var divisor = (1);
while(true){
if((n__$1 === (0))){
return digits;
} else {
var q = cljs.core.quot.call(null,n__$1,divisor);
var r = cljs.core.rem.call(null,n__$1,divisor);
var G__32058 = q;
var G__32059 = cljs.core.cons.call(null,r,digits);
var G__32060 = (divisor + (1));
n__$1 = G__32058;
digits = G__32059;
divisor = G__32060;
continue;
}
break;
}
});
quantum.core.numeric.combinatorics.remove_nth = (function quantum$core$numeric$combinatorics$remove_nth(l,n){
var acc = cljs.core.PersistentVector.EMPTY;
var l__$1 = l;
var n__$1 = n;
while(true){
if((n__$1 === (0))){
return cljs.core.into.call(null,acc,cljs.core.rest.call(null,l__$1));
} else {
var G__32061 = cljs.core.conj.call(null,acc,cljs.core.first.call(null,l__$1));
var G__32062 = cljs.core.rest.call(null,l__$1);
var G__32063 = (n__$1 - (1));
acc = G__32061;
l__$1 = G__32062;
n__$1 = G__32063;
continue;
}
break;
}
});
/**
 * Input should be a sorted sequential collection l of distinct items, 
 * output is nth-permutation (0-based)
 */
quantum.core.numeric.combinatorics.nth_permutation_distinct = (function quantum$core$numeric$combinatorics$nth_permutation_distinct(l,n){
var fact = quantum.core.numeric.combinatorics.factorial.call(null,cljs.core.count.call(null,l));
if((n < fact)){
} else {
throw quantum.core.error.__GT_ex.call(null,[cljs.core.str(n),cljs.core.str(" is too large. Input has only "),cljs.core.str(fact),cljs.core.str(" permutations.")].join(''),"Assertion not satisfied: (< n fact)",cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.keyword,cljs.core.list(new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"l","l",-1258542346,null))),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,l),n)));
}

var length = cljs.core.count.call(null,l);
var fact_nums = quantum.core.numeric.combinatorics.factorial_numbers.call(null,n);
var indices = cljs.core.concat.call(null,cljs.core.repeat.call(null,(length - cljs.core.count.call(null,fact_nums)),(0)),fact_nums);
var l__$1 = l;
var perm = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,indices)){
return perm;
} else {
var i = cljs.core.first.call(null,indices);
var item = cljs.core.nth.call(null,l__$1,i);
var G__32064 = cljs.core.rest.call(null,indices);
var G__32065 = quantum.core.numeric.combinatorics.remove_nth.call(null,l__$1,i);
var G__32066 = cljs.core.conj.call(null,perm,item);
indices = G__32064;
l__$1 = G__32065;
perm = G__32066;
continue;
}
break;
}
});
quantum.core.numeric.combinatorics.count_permutations_from_frequencies = (function quantum$core$numeric$combinatorics$count_permutations_from_frequencies(freqs){
var counts = cljs.core.vals.call(null,freqs);
return cljs.core.reduce.call(null,cljs.core._SLASH_,quantum.core.numeric.combinatorics.factorial.call(null,cljs.core.apply.call(null,cljs.core._PLUS_,counts)),cljs.core.map.call(null,quantum.core.numeric.combinatorics.factorial,counts));
});
/**
 * Counts the number of distinct permutations of l
 */
quantum.core.numeric.combinatorics.count_permutations = (function quantum$core$numeric$combinatorics$count_permutations(l){
if(cljs.core.truth_(quantum.core.numeric.combinatorics.all_different_QMARK_.call(null,l))){
return quantum.core.numeric.combinatorics.factorial.call(null,cljs.core.count.call(null,l));
} else {
return quantum.core.numeric.combinatorics.count_permutations_from_frequencies.call(null,cljs.core.frequencies.call(null,l));
}
});
/**
 * Takes a sorted frequency map and returns how far into the sequence of
 * lexicographic permutations you get by varying the first item
 */
quantum.core.numeric.combinatorics.initial_perm_numbers = (function quantum$core$numeric$combinatorics$initial_perm_numbers(freqs){
return cljs.core.reductions.call(null,cljs.core._PLUS_,(0),(function (){var iter__18297__auto__ = (function quantum$core$numeric$combinatorics$initial_perm_numbers_$_iter__32075(s__32076){
return (new cljs.core.LazySeq(null,(function (){
var s__32076__$1 = s__32076;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__32076__$1);
if(temp__4425__auto__){
var s__32076__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32076__$2)){
var c__18295__auto__ = cljs.core.chunk_first.call(null,s__32076__$2);
var size__18296__auto__ = cljs.core.count.call(null,c__18295__auto__);
var b__32078 = cljs.core.chunk_buffer.call(null,size__18296__auto__);
if((function (){var i__32077 = (0);
while(true){
if((i__32077 < size__18296__auto__)){
var vec__32081 = cljs.core._nth.call(null,c__18295__auto__,i__32077);
var k = cljs.core.nth.call(null,vec__32081,(0),null);
var v = cljs.core.nth.call(null,vec__32081,(1),null);
cljs.core.chunk_append.call(null,b__32078,quantum.core.numeric.combinatorics.count_permutations_from_frequencies.call(null,cljs.core.assoc.call(null,freqs,k,(v - (1)))));

var G__32083 = (i__32077 + (1));
i__32077 = G__32083;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32078),quantum$core$numeric$combinatorics$initial_perm_numbers_$_iter__32075.call(null,cljs.core.chunk_rest.call(null,s__32076__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32078),null);
}
} else {
var vec__32082 = cljs.core.first.call(null,s__32076__$2);
var k = cljs.core.nth.call(null,vec__32082,(0),null);
var v = cljs.core.nth.call(null,vec__32082,(1),null);
return cljs.core.cons.call(null,quantum.core.numeric.combinatorics.count_permutations_from_frequencies.call(null,cljs.core.assoc.call(null,freqs,k,(v - (1)))),quantum$core$numeric$combinatorics$initial_perm_numbers_$_iter__32075.call(null,cljs.core.rest.call(null,s__32076__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__18297__auto__.call(null,freqs);
})());
});
/**
 * Finds the index and remainder from the initial-perm-numbers.
 */
quantum.core.numeric.combinatorics.index_remainder = (function quantum$core$numeric$combinatorics$index_remainder(perm_numbers,n){
var perm_numbers__$1 = perm_numbers;
var index = (0);
while(true){
if(((cljs.core.first.call(null,perm_numbers__$1) <= n)) && ((n < cljs.core.second.call(null,perm_numbers__$1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,(n - cljs.core.first.call(null,perm_numbers__$1))], null);
} else {
var G__32084 = cljs.core.rest.call(null,perm_numbers__$1);
var G__32085 = (index + (1));
perm_numbers__$1 = G__32084;
index = G__32085;
continue;
}
break;
}
});
quantum.core.numeric.combinatorics.dec_key = (function quantum$core$numeric$combinatorics$dec_key(m,k){
if(cljs.core._EQ_.call(null,(1),m.call(null,k))){
return cljs.core.dissoc.call(null,m,k);
} else {
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.dec);
}
});
/**
 * Input is a non-negative base 10 integer n, and a sorted frequency map freqs.
 * Output is a list of 'digits' in this wacky duplicate factorial number system
 */
quantum.core.numeric.combinatorics.factorial_numbers_with_duplicates = (function quantum$core$numeric$combinatorics$factorial_numbers_with_duplicates(n,freqs){
var n__$1 = n;
var digits = cljs.core.PersistentVector.EMPTY;
var freqs__$1 = freqs;
while(true){
if((n__$1 === (0))){
return cljs.core.into.call(null,digits,cljs.core.repeat.call(null,cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,freqs__$1)),(0)));
} else {
var vec__32087 = quantum.core.numeric.combinatorics.index_remainder.call(null,quantum.core.numeric.combinatorics.initial_perm_numbers.call(null,freqs__$1),n__$1);
var index = cljs.core.nth.call(null,vec__32087,(0),null);
var remainder = cljs.core.nth.call(null,vec__32087,(1),null);
var G__32088 = remainder;
var G__32089 = cljs.core.conj.call(null,digits,index);
var G__32090 = (function (){var nth_key = cljs.core.nth.call(null,cljs.core.keys.call(null,freqs__$1),index);
return quantum.core.numeric.combinatorics.dec_key.call(null,freqs__$1,nth_key);
})();
n__$1 = G__32088;
digits = G__32089;
freqs__$1 = G__32090;
continue;
}
break;
}
});
/**
 * Input should be a sorted sequential collection l of distinct items, 
 * output is nth-permutation (0-based)
 */
quantum.core.numeric.combinatorics.nth_permutation_duplicates = (function quantum$core$numeric$combinatorics$nth_permutation_duplicates(l,n){
var ct = quantum.core.numeric.combinatorics.count_permutations.call(null,l);
if((n < ct)){
} else {
throw quantum.core.error.__GT_ex.call(null,[cljs.core.str(n),cljs.core.str(" is too large. Input has only "),cljs.core.str(ct),cljs.core.str(" permutations.")].join(''),"Assertion not satisfied: (< n ct)",cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.keyword,cljs.core.list(new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"l","l",-1258542346,null))),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,l),n)));
}

var freqs = cljs.core.into.call(null,cljs.core.sorted_map.call(null),cljs.core.frequencies.call(null,l));
var indices = quantum.core.numeric.combinatorics.factorial_numbers_with_duplicates.call(null,n,freqs);
var perm = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,indices)){
return perm;
} else {
var i = cljs.core.first.call(null,indices);
var item = cljs.core.nth.call(null,cljs.core.keys.call(null,freqs),i);
var G__32091 = quantum.core.numeric.combinatorics.dec_key.call(null,freqs,item);
var G__32092 = cljs.core.rest.call(null,indices);
var G__32093 = cljs.core.conj.call(null,perm,item);
freqs = G__32091;
indices = G__32092;
perm = G__32093;
continue;
}
break;
}
});
/**
 * (nth (permutations items)) but calculated more directly.
 */
quantum.core.numeric.combinatorics.nth_permutation = (function quantum$core$numeric$combinatorics$nth_permutation(items,n){
if(cljs.core.truth_(quantum.core.numeric.combinatorics.sorted_numbers_QMARK_.call(null,items))){
if(cljs.core.truth_(quantum.core.numeric.combinatorics.all_different_QMARK_.call(null,items))){
return quantum.core.numeric.combinatorics.nth_permutation_distinct.call(null,items,n);
} else {
return quantum.core.numeric.combinatorics.nth_permutation_duplicates.call(null,items,n);
}
} else {
if(cljs.core.truth_(quantum.core.numeric.combinatorics.all_different_QMARK_.call(null,items))){
var v = cljs.core.vec.call(null,items);
var perm_indices = quantum.core.numeric.combinatorics.nth_permutation_distinct.call(null,cljs.core.range.call(null,cljs.core.count.call(null,items)),n);
return cljs.core.vec.call(null,cljs.core.map.call(null,v,perm_indices));
} else {
var v = cljs.core.vec.call(null,cljs.core.distinct.call(null,items));
var f = cljs.core.frequencies.call(null,items);
var indices = cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__18297__auto__ = ((function (v,f){
return (function quantum$core$numeric$combinatorics$nth_permutation_$_iter__32098(s__32099){
return (new cljs.core.LazySeq(null,((function (v,f){
return (function (){
var s__32099__$1 = s__32099;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__32099__$1);
if(temp__4425__auto__){
var s__32099__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32099__$2)){
var c__18295__auto__ = cljs.core.chunk_first.call(null,s__32099__$2);
var size__18296__auto__ = cljs.core.count.call(null,c__18295__auto__);
var b__32101 = cljs.core.chunk_buffer.call(null,size__18296__auto__);
if((function (){var i__32100 = (0);
while(true){
if((i__32100 < size__18296__auto__)){
var i = cljs.core._nth.call(null,c__18295__auto__,i__32100);
cljs.core.chunk_append.call(null,b__32101,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));

var G__32102 = (i__32100 + (1));
i__32100 = G__32102;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32101),quantum$core$numeric$combinatorics$nth_permutation_$_iter__32098.call(null,cljs.core.chunk_rest.call(null,s__32099__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32101),null);
}
} else {
var i = cljs.core.first.call(null,s__32099__$2);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),quantum$core$numeric$combinatorics$nth_permutation_$_iter__32098.call(null,cljs.core.rest.call(null,s__32099__$2)));
}
} else {
return null;
}
break;
}
});})(v,f))
,null,null));
});})(v,f))
;
return iter__18297__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
})());
return cljs.core.vec.call(null,cljs.core.map.call(null,v,quantum.core.numeric.combinatorics.nth_permutation_duplicates.call(null,indices,n)));
}
}
});
/**
 * (drop n (permutations items)) but calculated more directly.
 */
quantum.core.numeric.combinatorics.drop_permutations = (function quantum$core$numeric$combinatorics$drop_permutations(items,n){
if((n === (0))){
return quantum.core.numeric.combinatorics.permutations.call(null,items);
} else {
if(cljs.core._EQ_.call(null,n,quantum.core.numeric.combinatorics.count_permutations.call(null,items))){
return cljs.core.List.EMPTY;
} else {
if(cljs.core.truth_(quantum.core.numeric.combinatorics.sorted_numbers_QMARK_.call(null,items))){
if(cljs.core.truth_(quantum.core.numeric.combinatorics.all_different_QMARK_.call(null,items))){
return quantum.core.numeric.combinatorics.vec_lex_permutations.call(null,quantum.core.numeric.combinatorics.nth_permutation_distinct.call(null,items,n));
} else {
return quantum.core.numeric.combinatorics.vec_lex_permutations.call(null,quantum.core.numeric.combinatorics.nth_permutation_duplicates.call(null,items,n));
}
} else {
if(cljs.core.truth_(quantum.core.numeric.combinatorics.all_different_QMARK_.call(null,items))){
var v = cljs.core.vec.call(null,items);
var perm_indices = quantum.core.numeric.combinatorics.nth_permutation_distinct.call(null,cljs.core.range.call(null,cljs.core.count.call(null,items)),n);
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,v),quantum.core.numeric.combinatorics.vec_lex_permutations.call(null,perm_indices));
} else {
var v = cljs.core.vec.call(null,cljs.core.distinct.call(null,items));
var f = cljs.core.frequencies.call(null,items);
var indices = cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__18297__auto__ = ((function (v,f){
return (function quantum$core$numeric$combinatorics$drop_permutations_$_iter__32107(s__32108){
return (new cljs.core.LazySeq(null,((function (v,f){
return (function (){
var s__32108__$1 = s__32108;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__32108__$1);
if(temp__4425__auto__){
var s__32108__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32108__$2)){
var c__18295__auto__ = cljs.core.chunk_first.call(null,s__32108__$2);
var size__18296__auto__ = cljs.core.count.call(null,c__18295__auto__);
var b__32110 = cljs.core.chunk_buffer.call(null,size__18296__auto__);
if((function (){var i__32109 = (0);
while(true){
if((i__32109 < size__18296__auto__)){
var i = cljs.core._nth.call(null,c__18295__auto__,i__32109);
cljs.core.chunk_append.call(null,b__32110,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));

var G__32111 = (i__32109 + (1));
i__32109 = G__32111;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32110),quantum$core$numeric$combinatorics$drop_permutations_$_iter__32107.call(null,cljs.core.chunk_rest.call(null,s__32108__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32110),null);
}
} else {
var i = cljs.core.first.call(null,s__32108__$2);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),quantum$core$numeric$combinatorics$drop_permutations_$_iter__32107.call(null,cljs.core.rest.call(null,s__32108__$2)));
}
} else {
return null;
}
break;
}
});})(v,f))
,null,null));
});})(v,f))
;
return iter__18297__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
})());
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,v),quantum.core.numeric.combinatorics.vec_lex_permutations.call(null,quantum.core.numeric.combinatorics.nth_permutation_duplicates.call(null,indices,n)));
}
}

}
}
});
quantum.core.numeric.combinatorics.n_take_k = (function quantum$core$numeric$combinatorics$n_take_k(n,k){
while(true){
if((k < (0))){
return (0);
} else {
if((k > n)){
return (0);
} else {
if((k === (0))){
return (1);
} else {
if(cljs.core._EQ_.call(null,k,(1))){
return n;
} else {
if((k > cljs.core.quot.call(null,n,(2)))){
var G__32112 = n;
var G__32113 = (n - k);
n = G__32112;
k = G__32113;
continue;
} else {
return (cljs.core.apply.call(null,quantum.core.numeric.combinatorics.mult,cljs.core.range.call(null,((n - k) + (1)),(n + (1)))) / cljs.core.apply.call(null,quantum.core.numeric.combinatorics.mult,cljs.core.range.call(null,(1),(k + (1)))));

}
}
}
}
}
break;
}
});
quantum.core.numeric.combinatorics.count_combinations_from_frequencies = (function quantum$core$numeric$combinatorics$count_combinations_from_frequencies(freqs,t){
var counts = cljs.core.vals.call(null,freqs);
var sum = cljs.core.apply.call(null,cljs.core._PLUS_,counts);
if((t === (0))){
return (1);
} else {
if(cljs.core._EQ_.call(null,t,(1))){
return cljs.core.count.call(null,freqs);
} else {
if(cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null),counts)){
return quantum.core.numeric.combinatorics.n_take_k.call(null,cljs.core.count.call(null,freqs),t);
} else {
if((t > sum)){
return (0);
} else {
if(cljs.core._EQ_.call(null,t,sum)){
return (1);
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,freqs),(1))){
return (1);
} else {
var new_freqs = quantum.core.numeric.combinatorics.dec_key.call(null,freqs,cljs.core.first.call(null,cljs.core.keys.call(null,freqs)));
return quantum.core.numeric.combinatorics.plus.call(null,quantum$core$numeric$combinatorics$count_combinations_from_frequencies.call(null,new_freqs,(t - (1))),quantum$core$numeric$combinatorics$count_combinations_from_frequencies.call(null,cljs.core.dissoc.call(null,freqs,cljs.core.first.call(null,cljs.core.keys.call(null,freqs))),t));

}
}
}
}
}
}
});
/**
 * We need an internal version that doesn't memoize each call to count-combinations-from-frequencies
 * so that we can memoize over a series of calls.
 */
quantum.core.numeric.combinatorics.count_combinations_unmemoized = (function quantum$core$numeric$combinatorics$count_combinations_unmemoized(items,t){
if(cljs.core.truth_(quantum.core.numeric.combinatorics.all_different_QMARK_.call(null,items))){
return quantum.core.numeric.combinatorics.n_take_k.call(null,cljs.core.count.call(null,items),t);
} else {
return quantum.core.numeric.combinatorics.count_combinations_from_frequencies.call(null,cljs.core.frequencies.call(null,items),t);
}
});
/**
 * (count (combinations items t)) but computed more directly
 */
quantum.core.numeric.combinatorics.count_combinations = (function quantum$core$numeric$combinatorics$count_combinations(items,t){
var count_combinations_from_frequencies32115 = quantum.core.numeric.combinatorics.count_combinations_from_frequencies;
quantum.core.numeric.combinatorics.count_combinations_from_frequencies = cljs.core.memoize.call(null,quantum.core.numeric.combinatorics.count_combinations_from_frequencies);

try{return quantum.core.numeric.combinatorics.count_combinations_unmemoized.call(null,items,t);
}finally {quantum.core.numeric.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies32115;
}});
quantum.core.numeric.combinatorics.expt_int = (function quantum$core$numeric$combinatorics$expt_int(base,pow){
var n = pow;
var y = (1);
var z = base;
while(true){
var t = cljs.core.even_QMARK_.call(null,n);
var n__$1 = cljs.core.quot.call(null,n,(2));
if(t){
var G__32116 = n__$1;
var G__32117 = y;
var G__32118 = quantum.core.numeric.combinatorics.mult.call(null,z,z);
n = G__32116;
y = G__32117;
z = G__32118;
continue;
} else {
if((n__$1 === (0))){
return quantum.core.numeric.combinatorics.mult.call(null,z,y);
} else {
var G__32119 = n__$1;
var G__32120 = quantum.core.numeric.combinatorics.mult.call(null,z,y);
var G__32121 = quantum.core.numeric.combinatorics.mult.call(null,z,z);
n = G__32119;
y = G__32120;
z = G__32121;
continue;

}
}
break;
}
});
quantum.core.numeric.combinatorics.count_subsets_unmemoized = (function quantum$core$numeric$combinatorics$count_subsets_unmemoized(items){
if(cljs.core.empty_QMARK_.call(null,items)){
return (1);
} else {
if(cljs.core.truth_(quantum.core.numeric.combinatorics.all_different_QMARK_.call(null,items))){
return quantum.core.numeric.combinatorics.expt_int.call(null,(2),cljs.core.count.call(null,items));
} else {
return cljs.core.apply.call(null,quantum.core.numeric.combinatorics.plus,(function (){var iter__18297__auto__ = (function quantum$core$numeric$combinatorics$count_subsets_unmemoized_$_iter__32126(s__32127){
return (new cljs.core.LazySeq(null,(function (){
var s__32127__$1 = s__32127;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__32127__$1);
if(temp__4425__auto__){
var s__32127__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32127__$2)){
var c__18295__auto__ = cljs.core.chunk_first.call(null,s__32127__$2);
var size__18296__auto__ = cljs.core.count.call(null,c__18295__auto__);
var b__32129 = cljs.core.chunk_buffer.call(null,size__18296__auto__);
if((function (){var i__32128 = (0);
while(true){
if((i__32128 < size__18296__auto__)){
var i = cljs.core._nth.call(null,c__18295__auto__,i__32128);
cljs.core.chunk_append.call(null,b__32129,quantum.core.numeric.combinatorics.count_combinations_unmemoized.call(null,items,i));

var G__32130 = (i__32128 + (1));
i__32128 = G__32130;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32129),quantum$core$numeric$combinatorics$count_subsets_unmemoized_$_iter__32126.call(null,cljs.core.chunk_rest.call(null,s__32127__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32129),null);
}
} else {
var i = cljs.core.first.call(null,s__32127__$2);
return cljs.core.cons.call(null,quantum.core.numeric.combinatorics.count_combinations_unmemoized.call(null,items,i),quantum$core$numeric$combinatorics$count_subsets_unmemoized_$_iter__32126.call(null,cljs.core.rest.call(null,s__32127__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__18297__auto__.call(null,cljs.core.range.call(null,(0),(cljs.core.count.call(null,items) + (1))));
})());

}
}
});
/**
 * |(count (subsets items))| but computed more directly
 */
quantum.core.numeric.combinatorics.count_subsets = (function quantum$core$numeric$combinatorics$count_subsets(items){
var count_combinations_from_frequencies32132 = quantum.core.numeric.combinatorics.count_combinations_from_frequencies;
quantum.core.numeric.combinatorics.count_combinations_from_frequencies = cljs.core.memoize.call(null,quantum.core.numeric.combinatorics.count_combinations_from_frequencies);

try{return quantum.core.numeric.combinatorics.count_subsets_unmemoized.call(null,items);
}finally {quantum.core.numeric.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies32132;
}});
/**
 * The nth element of the sequence of t-combinations of items,
 * where items is a collection of distinct elements
 */
quantum.core.numeric.combinatorics.nth_combination_distinct = (function quantum$core$numeric$combinatorics$nth_combination_distinct(items,t,n){
var comb = cljs.core.PersistentVector.EMPTY;
var items__$1 = items;
var t__$1 = t;
var n__$1 = n;
while(true){
if(((n__$1 === (0))) || (cljs.core.empty_QMARK_.call(null,items__$1))){
return cljs.core.into.call(null,comb,cljs.core.take.call(null,t__$1,items__$1));
} else {
var dc_dt = quantum.core.numeric.combinatorics.n_take_k.call(null,(cljs.core.count.call(null,items__$1) - (1)),(t__$1 - (1)));
if((n__$1 < dc_dt)){
var G__32133 = cljs.core.conj.call(null,comb,cljs.core.first.call(null,items__$1));
var G__32134 = cljs.core.rest.call(null,items__$1);
var G__32135 = (t__$1 - (1));
var G__32136 = n__$1;
comb = G__32133;
items__$1 = G__32134;
t__$1 = G__32135;
n__$1 = G__32136;
continue;
} else {
var G__32137 = comb;
var G__32138 = cljs.core.rest.call(null,items__$1);
var G__32139 = t__$1;
var G__32140 = (n__$1 - dc_dt);
comb = G__32137;
items__$1 = G__32138;
t__$1 = G__32139;
n__$1 = G__32140;
continue;
}
}
break;
}
});
/**
 * The nth element of the sequence of t-combinations of the multiset
 * represented by freqs
 */
quantum.core.numeric.combinatorics.nth_combination_freqs = (function quantum$core$numeric$combinatorics$nth_combination_freqs(freqs,t,n){
var comb = cljs.core.PersistentVector.EMPTY;
var freqs__$1 = freqs;
var t__$1 = t;
var n__$1 = n;
while(true){
if(((n__$1 === (0))) || (cljs.core.empty_QMARK_.call(null,freqs__$1))){
return cljs.core.into.call(null,comb,cljs.core.take.call(null,t__$1,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__18297__auto__ = ((function (comb,freqs__$1,t__$1,n__$1){
return (function quantum$core$numeric$combinatorics$nth_combination_freqs_$_iter__32149(s__32150){
return (new cljs.core.LazySeq(null,((function (comb,freqs__$1,t__$1,n__$1){
return (function (){
var s__32150__$1 = s__32150;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__32150__$1);
if(temp__4425__auto__){
var s__32150__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32150__$2)){
var c__18295__auto__ = cljs.core.chunk_first.call(null,s__32150__$2);
var size__18296__auto__ = cljs.core.count.call(null,c__18295__auto__);
var b__32152 = cljs.core.chunk_buffer.call(null,size__18296__auto__);
if((function (){var i__32151 = (0);
while(true){
if((i__32151 < size__18296__auto__)){
var vec__32155 = cljs.core._nth.call(null,c__18295__auto__,i__32151);
var k = cljs.core.nth.call(null,vec__32155,(0),null);
var v = cljs.core.nth.call(null,vec__32155,(1),null);
cljs.core.chunk_append.call(null,b__32152,cljs.core.repeat.call(null,v,k));

var G__32157 = (i__32151 + (1));
i__32151 = G__32157;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32152),quantum$core$numeric$combinatorics$nth_combination_freqs_$_iter__32149.call(null,cljs.core.chunk_rest.call(null,s__32150__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32152),null);
}
} else {
var vec__32156 = cljs.core.first.call(null,s__32150__$2);
var k = cljs.core.nth.call(null,vec__32156,(0),null);
var v = cljs.core.nth.call(null,vec__32156,(1),null);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,v,k),quantum$core$numeric$combinatorics$nth_combination_freqs_$_iter__32149.call(null,cljs.core.rest.call(null,s__32150__$2)));
}
} else {
return null;
}
break;
}
});})(comb,freqs__$1,t__$1,n__$1))
,null,null));
});})(comb,freqs__$1,t__$1,n__$1))
;
return iter__18297__auto__.call(null,freqs__$1);
})())));
} else {
var first_key = cljs.core.first.call(null,cljs.core.keys.call(null,freqs__$1));
var remove_one_key = quantum.core.numeric.combinatorics.dec_key.call(null,freqs__$1,first_key);
var dc_dt = quantum.core.numeric.combinatorics.count_combinations_from_frequencies.call(null,remove_one_key,(t__$1 - (1)));
if((n__$1 < dc_dt)){
var G__32158 = cljs.core.conj.call(null,comb,first_key);
var G__32159 = remove_one_key;
var G__32160 = (t__$1 - (1));
var G__32161 = n__$1;
comb = G__32158;
freqs__$1 = G__32159;
t__$1 = G__32160;
n__$1 = G__32161;
continue;
} else {
var G__32162 = comb;
var G__32163 = cljs.core.dissoc.call(null,freqs__$1,first_key);
var G__32164 = t__$1;
var G__32165 = (n__$1 - dc_dt);
comb = G__32162;
freqs__$1 = G__32163;
t__$1 = G__32164;
n__$1 = G__32165;
continue;
}
}
break;
}
});
/**
 * The nth element of the sequence of t-combinations of items
 */
quantum.core.numeric.combinatorics.nth_combination = (function quantum$core$numeric$combinatorics$nth_combination(items,t,n){
if((n < quantum.core.numeric.combinatorics.count_combinations.call(null,items,t))){
} else {
throw quantum.core.error.__GT_ex.call(null,[cljs.core.str(n),cljs.core.str(" is too large. Input has only "),cljs.core.str(quantum.core.numeric.combinatorics.count_combinations_unmemoized.call(null,items,t)),cljs.core.str(" combinations.")].join(''),"Assertion not satisfied: (< n (count-combinations items t))",cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.keyword,cljs.core.list(new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"items","items",-1622480831,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,n),items),t)));
}

if(cljs.core.truth_(quantum.core.numeric.combinatorics.all_different_QMARK_.call(null,items))){
return quantum.core.numeric.combinatorics.nth_combination_distinct.call(null,items,t,n);
} else {
var count_combinations_from_frequencies32171 = quantum.core.numeric.combinatorics.count_combinations_from_frequencies;
quantum.core.numeric.combinatorics.count_combinations_from_frequencies = cljs.core.memoize.call(null,quantum.core.numeric.combinatorics.count_combinations_from_frequencies);

try{var v = cljs.core.vec.call(null,cljs.core.distinct.call(null,items));
var f = cljs.core.frequencies.call(null,items);
var indices = cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__18297__auto__ = ((function (v,f,count_combinations_from_frequencies32171){
return (function quantum$core$numeric$combinatorics$nth_combination_$_iter__32172(s__32173){
return (new cljs.core.LazySeq(null,((function (v,f,count_combinations_from_frequencies32171){
return (function (){
var s__32173__$1 = s__32173;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__32173__$1);
if(temp__4425__auto__){
var s__32173__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32173__$2)){
var c__18295__auto__ = cljs.core.chunk_first.call(null,s__32173__$2);
var size__18296__auto__ = cljs.core.count.call(null,c__18295__auto__);
var b__32175 = cljs.core.chunk_buffer.call(null,size__18296__auto__);
if((function (){var i__32174 = (0);
while(true){
if((i__32174 < size__18296__auto__)){
var i = cljs.core._nth.call(null,c__18295__auto__,i__32174);
cljs.core.chunk_append.call(null,b__32175,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));

var G__32176 = (i__32174 + (1));
i__32174 = G__32176;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32175),quantum$core$numeric$combinatorics$nth_combination_$_iter__32172.call(null,cljs.core.chunk_rest.call(null,s__32173__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32175),null);
}
} else {
var i = cljs.core.first.call(null,s__32173__$2);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),quantum$core$numeric$combinatorics$nth_combination_$_iter__32172.call(null,cljs.core.rest.call(null,s__32173__$2)));
}
} else {
return null;
}
break;
}
});})(v,f,count_combinations_from_frequencies32171))
,null,null));
});})(v,f,count_combinations_from_frequencies32171))
;
return iter__18297__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
})());
var indices_freqs = cljs.core.into.call(null,cljs.core.sorted_map.call(null),cljs.core.frequencies.call(null,indices));
return cljs.core.vec.call(null,cljs.core.map.call(null,v,quantum.core.numeric.combinatorics.nth_combination_freqs.call(null,indices_freqs,t,n)));
}finally {quantum.core.numeric.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies32171;
}}
});
quantum.core.numeric.combinatorics.nth_subset = (function quantum$core$numeric$combinatorics$nth_subset(items,n){
var ct = quantum.core.numeric.combinatorics.count_subsets.call(null,items);
if((n < ct)){
} else {
throw quantum.core.error.__GT_ex.call(null,[cljs.core.str(n),cljs.core.str(" is too large. Input has only "),cljs.core.str(ct),cljs.core.str(" subsets.")].join(''),"Assertion not satisfied: (< n ct)",cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.keyword,cljs.core.list(new cljs.core.Symbol(null,"items","items",-1622480831,null),new cljs.core.Symbol(null,"ct","ct",-517996828,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,n),ct),items)));
}

var size = (0);
var n__$1 = n;
while(true){
var num_combinations = quantum.core.numeric.combinatorics.count_combinations.call(null,items,size);
if((n__$1 < num_combinations)){
return quantum.core.numeric.combinatorics.nth_combination.call(null,items,size,n__$1);
} else {
var G__32177 = (size + (1));
var G__32178 = (n__$1 - num_combinations);
size = G__32177;
n__$1 = G__32178;
continue;
}
break;
}
});
/**
 * The opposite of nth, i.e., from an item in a list, find the n
 */
quantum.core.numeric.combinatorics.list_index = (function quantum$core$numeric$combinatorics$list_index(l,item){
var l__$1 = l;
var n = (0);
while(true){
if(cljs.core.seq.call(null,l__$1)){
} else {
throw quantum.core.error.__GT_ex.call(null,new cljs.core.Keyword(null,"assertion-error","assertion-error",1846873368),"Assertion not satisfied: (seq l)",cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.keyword,cljs.core.list(new cljs.core.Symbol(null,"l","l",-1258542346,null))),cljs.core._conj.call(null,cljs.core.List.EMPTY,l__$1)));
}

if(cljs.core._EQ_.call(null,item,cljs.core.first.call(null,l__$1))){
return n;
} else {
var G__32179 = cljs.core.rest.call(null,l__$1);
var G__32180 = (n + (1));
l__$1 = G__32179;
n = G__32180;
continue;
}
break;
}
});
quantum.core.numeric.combinatorics.permutation_index_distinct = (function quantum$core$numeric$combinatorics$permutation_index_distinct(l){
var l__$1 = l;
var index = (0);
var n = (cljs.core.count.call(null,l__$1) - (1));
while(true){
if(cljs.core.empty_QMARK_.call(null,l__$1)){
return index;
} else {
var G__32181 = cljs.core.rest.call(null,l__$1);
var G__32182 = (index + (quantum.core.numeric.combinatorics.factorial.call(null,n) * quantum.core.numeric.combinatorics.list_index.call(null,cljs.core.sort.call(null,l__$1),cljs.core.first.call(null,l__$1))));
var G__32183 = (n - (1));
l__$1 = G__32181;
index = G__32182;
n = G__32183;
continue;
}
break;
}
});
quantum.core.numeric.combinatorics.permutation_index_duplicates = (function quantum$core$numeric$combinatorics$permutation_index_duplicates(l){
var l__$1 = l;
var index = (0);
var freqs = cljs.core.into.call(null,cljs.core.sorted_map.call(null),cljs.core.frequencies.call(null,l__$1));
while(true){
if(cljs.core.empty_QMARK_.call(null,l__$1)){
return index;
} else {
var G__32193 = cljs.core.rest.call(null,l__$1);
var G__32194 = cljs.core.reduce.call(null,cljs.core._PLUS_,index,(function (){var iter__18297__auto__ = ((function (l__$1,index,freqs){
return (function quantum$core$numeric$combinatorics$permutation_index_duplicates_$_iter__32189(s__32190){
return (new cljs.core.LazySeq(null,((function (l__$1,index,freqs){
return (function (){
var s__32190__$1 = s__32190;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__32190__$1);
if(temp__4425__auto__){
var s__32190__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32190__$2)){
var c__18295__auto__ = cljs.core.chunk_first.call(null,s__32190__$2);
var size__18296__auto__ = cljs.core.count.call(null,c__18295__auto__);
var b__32192 = cljs.core.chunk_buffer.call(null,size__18296__auto__);
if((function (){var i__32191 = (0);
while(true){
if((i__32191 < size__18296__auto__)){
var k = cljs.core._nth.call(null,c__18295__auto__,i__32191);
cljs.core.chunk_append.call(null,b__32192,quantum.core.numeric.combinatorics.count_permutations_from_frequencies.call(null,quantum.core.numeric.combinatorics.dec_key.call(null,freqs,k)));

var G__32196 = (i__32191 + (1));
i__32191 = G__32196;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32192),quantum$core$numeric$combinatorics$permutation_index_duplicates_$_iter__32189.call(null,cljs.core.chunk_rest.call(null,s__32190__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32192),null);
}
} else {
var k = cljs.core.first.call(null,s__32190__$2);
return cljs.core.cons.call(null,quantum.core.numeric.combinatorics.count_permutations_from_frequencies.call(null,quantum.core.numeric.combinatorics.dec_key.call(null,freqs,k)),quantum$core$numeric$combinatorics$permutation_index_duplicates_$_iter__32189.call(null,cljs.core.rest.call(null,s__32190__$2)));
}
} else {
return null;
}
break;
}
});})(l__$1,index,freqs))
,null,null));
});})(l__$1,index,freqs))
;
return iter__18297__auto__.call(null,cljs.core.take_while.call(null,((function (l__$1,index,freqs,iter__18297__auto__){
return (function (p1__32184_SHARP_){
return (cljs.core.compare.call(null,p1__32184_SHARP_,cljs.core.first.call(null,l__$1)) < (0));
});})(l__$1,index,freqs,iter__18297__auto__))
,cljs.core.keys.call(null,freqs)));
})());
var G__32195 = quantum.core.numeric.combinatorics.dec_key.call(null,freqs,cljs.core.first.call(null,l__$1));
l__$1 = G__32193;
index = G__32194;
freqs = G__32195;
continue;
}
break;
}
});
/**
 * Input must be a sortable collection of items.  Returns the n such that
 *  (nth-permutation (sort items) n) is items.
 */
quantum.core.numeric.combinatorics.permutation_index = (function quantum$core$numeric$combinatorics$permutation_index(items){
if(cljs.core.truth_(quantum.core.numeric.combinatorics.all_different_QMARK_.call(null,items))){
return quantum.core.numeric.combinatorics.permutation_index_distinct.call(null,items);
} else {
return quantum.core.numeric.combinatorics.permutation_index_duplicates.call(null,items);
}
});
quantum.core.numeric.combinatorics.update = (function quantum$core$numeric$combinatorics$update(vec,index,f){
var item = vec.call(null,index);
return cljs.core.assoc.call(null,vec,index,f.call(null,item));
});
quantum.core.numeric.combinatorics.bool__GT_num = (function quantum$core$numeric$combinatorics$bool__GT_num(x){
if(cljs.core.truth_(x)){
return (1);
} else {
return (0);
}
});
quantum.core.numeric.combinatorics.init = (function quantum$core$numeric$combinatorics$init(n,s){
if(cljs.core.truth_(s)){
return cljs.core.vec.call(null,(function (){var iter__18297__auto__ = (function quantum$core$numeric$combinatorics$init_$_iter__32201(s__32202){
return (new cljs.core.LazySeq(null,(function (){
var s__32202__$1 = s__32202;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__32202__$1);
if(temp__4425__auto__){
var s__32202__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32202__$2)){
var c__18295__auto__ = cljs.core.chunk_first.call(null,s__32202__$2);
var size__18296__auto__ = cljs.core.count.call(null,c__18295__auto__);
var b__32204 = cljs.core.chunk_buffer.call(null,size__18296__auto__);
if((function (){var i__32203 = (0);
while(true){
if((i__32203 < size__18296__auto__)){
var i = cljs.core._nth.call(null,c__18295__auto__,i__32203);
cljs.core.chunk_append.call(null,b__32204,(function (){var x__17856__auto__ = (0);
var y__17857__auto__ = (i - ((n - s) - (-1)));
return ((x__17856__auto__ > y__17857__auto__) ? x__17856__auto__ : y__17857__auto__);
})());

var G__32205 = (i__32203 + (1));
i__32203 = G__32205;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32204),quantum$core$numeric$combinatorics$init_$_iter__32201.call(null,cljs.core.chunk_rest.call(null,s__32202__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32204),null);
}
} else {
var i = cljs.core.first.call(null,s__32202__$2);
return cljs.core.cons.call(null,(function (){var x__17856__auto__ = (0);
var y__17857__auto__ = (i - ((n - s) - (-1)));
return ((x__17856__auto__ > y__17857__auto__) ? x__17856__auto__ : y__17857__auto__);
})(),quantum$core$numeric$combinatorics$init_$_iter__32201.call(null,cljs.core.rest.call(null,s__32202__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__18297__auto__.call(null,cljs.core.range.call(null,(1),(n + (1))));
})());
} else {
return cljs.core.vec.call(null,cljs.core.repeat.call(null,n,(0)));
}
});
quantum.core.numeric.combinatorics.growth_strings_H = (function quantum$core$numeric$combinatorics$growth_strings_H(var_args){
var args32206 = [];
var len__18583__auto___32210 = arguments.length;
var i__18584__auto___32211 = (0);
while(true){
if((i__18584__auto___32211 < len__18583__auto___32210)){
args32206.push((arguments[i__18584__auto___32211]));

var G__32212 = (i__18584__auto___32211 + (1));
i__18584__auto___32211 = G__32212;
continue;
} else {
}
break;
}

var G__32208 = args32206.length;
switch (G__32208) {
case 3:
return quantum.core.numeric.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return quantum.core.numeric.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32206.length)].join('')));

}
});

quantum.core.numeric.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$3 = (function (n,r,s){
return quantum.core.numeric.combinatorics.growth_strings_H.call(null,n,quantum.core.numeric.combinatorics.init.call(null,n,s),cljs.core.vec.call(null,cljs.core.repeat.call(null,n,(1))),r,s);
});

quantum.core.numeric.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5 = (function (n,a,b,r,s){
return cljs.core.cons.call(null,a,(new cljs.core.LazySeq(null,(function (){
if((function (){var and__17513__auto__ = (cljs.core.peek.call(null,b) > cljs.core.peek.call(null,a));
if(and__17513__auto__){
if(cljs.core.truth_(r)){
return (cljs.core.peek.call(null,a) < (r - (1)));
} else {
return true;
}
} else {
return and__17513__auto__;
}
})()){
return quantum.core.numeric.combinatorics.growth_strings_H.call(null,n,quantum.core.numeric.combinatorics.update.call(null,a,(n - (1)),cljs.core.inc),b,r,s);
} else {
var j = (function (){var j = (n - (2));
while(true){
if((function (){var and__17513__auto__ = (a.call(null,j) < b.call(null,j));
if(and__17513__auto__){
var and__17513__auto____$1 = (cljs.core.truth_(r)?(a.call(null,j) < (r - (1))):true);
if(and__17513__auto____$1){
if(cljs.core.truth_(s)){
return (((s - b.call(null,j)) - quantum.core.numeric.combinatorics.bool__GT_num.call(null,((a.call(null,j) + (1)) === b.call(null,j)))) <= (n - j));
} else {
return true;
}
} else {
return and__17513__auto____$1;
}
} else {
return and__17513__auto__;
}
})()){
return j;
} else {
var G__32214 = (j - (1));
j = G__32214;
continue;
}
break;
}
})();
if((j === (0))){
return cljs.core.List.EMPTY;
} else {
var a__$1 = quantum.core.numeric.combinatorics.update.call(null,a,j,cljs.core.inc);
var x = (cljs.core.truth_(s)?(s - (b.call(null,j) + quantum.core.numeric.combinatorics.bool__GT_num.call(null,cljs.core._EQ_.call(null,a__$1.call(null,j),b.call(null,j))))):null);
var vec__32209 = (function (){var a__$2 = a__$1;
var b__$1 = b;
var i = (j + (1));
var current_max = (b__$1.call(null,j) + quantum.core.numeric.combinatorics.bool__GT_num.call(null,(b__$1.call(null,j) === a__$2.call(null,j))));
while(true){
if((i === n)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$2,b__$1], null);
} else {
if(cljs.core.truth_((function (){var and__17513__auto__ = s;
if(cljs.core.truth_(and__17513__auto__)){
return (i > ((n - x) - (1)));
} else {
return and__17513__auto__;
}
})())){
var new_a_i = ((i - n) + s);
var G__32215 = cljs.core.assoc.call(null,a__$2,i,new_a_i);
var G__32216 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__32217 = (i + (1));
var G__32218 = (function (){var x__17856__auto__ = current_max;
var y__17857__auto__ = (new_a_i + (1));
return ((x__17856__auto__ > y__17857__auto__) ? x__17856__auto__ : y__17857__auto__);
})();
a__$2 = G__32215;
b__$1 = G__32216;
i = G__32217;
current_max = G__32218;
continue;
} else {
var G__32219 = cljs.core.assoc.call(null,a__$2,i,(0));
var G__32220 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__32221 = (i + (1));
var G__32222 = current_max;
a__$2 = G__32219;
b__$1 = G__32220;
i = G__32221;
current_max = G__32222;
continue;

}
}
break;
}
})();
var a__$2 = cljs.core.nth.call(null,vec__32209,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__32209,(1),null);
return quantum.core.numeric.combinatorics.growth_strings_H.call(null,n,a__$2,b__$1,r,s);
}
}
}),null,null)));
});

quantum.core.numeric.combinatorics.growth_strings_H.cljs$lang$maxFixedArity = 5;
quantum.core.numeric.combinatorics.lex_partitions_H = (function quantum$core$numeric$combinatorics$lex_partitions_H(var_args){
var args__18590__auto__ = [];
var len__18583__auto___32232 = arguments.length;
var i__18584__auto___32233 = (0);
while(true){
if((i__18584__auto___32233 < len__18583__auto___32232)){
args__18590__auto__.push((arguments[i__18584__auto___32233]));

var G__32234 = (i__18584__auto___32233 + (1));
i__18584__auto___32233 = G__32234;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((1) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((1)),(0))):null);
return quantum.core.numeric.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18591__auto__);
});

quantum.core.numeric.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = (function (N,p__32225){
var map__32226 = p__32225;
var map__32226__$1 = ((((!((map__32226 == null)))?((((map__32226.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32226.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32226):map__32226);
var from = cljs.core.get.call(null,map__32226__$1,new cljs.core.Keyword(null,"min","min",444991522));
var to = cljs.core.get.call(null,map__32226__$1,new cljs.core.Keyword(null,"max","max",61366548));
if(cljs.core._EQ_.call(null,N,(0))){
if((((function (){var or__17525__auto__ = from;
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return (0);
}
})() <= (0))) && (((0) <= (function (){var or__17525__auto__ = to;
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return (0);
}
})()))){
return cljs.core.list(cljs.core.List.EMPTY);
} else {
return cljs.core.List.EMPTY;
}
} else {
var from__$1 = (cljs.core.truth_((function (){var and__17513__auto__ = from;
if(cljs.core.truth_(and__17513__auto__)){
return (from <= (1));
} else {
return and__17513__auto__;
}
})())?null:from);
var to__$1 = (cljs.core.truth_((function (){var and__17513__auto__ = to;
if(cljs.core.truth_(and__17513__auto__)){
return (to >= N);
} else {
return and__17513__auto__;
}
})())?null:to);
if(!((((1) <= (function (){var or__17525__auto__ = from__$1;
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return (1);
}
})())) && ((((function (){var or__17525__auto__ = from__$1;
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return (1);
}
})() <= (function (){var or__17525__auto__ = to__$1;
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return N;
}
})())) && (((function (){var or__17525__auto__ = to__$1;
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return N;
}
})() <= N))))){
return cljs.core.List.EMPTY;
} else {
if(cljs.core._EQ_.call(null,N,(0))){
return cljs.core.list(cljs.core.List.EMPTY);
} else {
if(cljs.core._EQ_.call(null,N,(1))){
return cljs.core.list(cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)));
} else {
if(cljs.core._EQ_.call(null,to__$1,(1))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.range.call(null,N)))))))));
} else {
var growth_strings = quantum.core.numeric.combinatorics.growth_strings_H.call(null,N,to__$1,from__$1);
var iter__18297__auto__ = ((function (growth_strings,from__$1,to__$1,map__32226,map__32226__$1,from,to){
return (function quantum$core$numeric$combinatorics$iter__32228(s__32229){
return (new cljs.core.LazySeq(null,((function (growth_strings,from__$1,to__$1,map__32226,map__32226__$1,from,to){
return (function (){
var s__32229__$1 = s__32229;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__32229__$1);
if(temp__4425__auto__){
var s__32229__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32229__$2)){
var c__18295__auto__ = cljs.core.chunk_first.call(null,s__32229__$2);
var size__18296__auto__ = cljs.core.count.call(null,c__18295__auto__);
var b__32231 = cljs.core.chunk_buffer.call(null,size__18296__auto__);
if((function (){var i__32230 = (0);
while(true){
if((i__32230 < size__18296__auto__)){
var growth_string = cljs.core._nth.call(null,c__18295__auto__,i__32230);
var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));
cljs.core.chunk_append.call(null,b__32231,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))));

var G__32235 = (i__32230 + (1));
i__32230 = G__32235;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32231),quantum$core$numeric$combinatorics$iter__32228.call(null,cljs.core.chunk_rest.call(null,s__32229__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32231),null);
}
} else {
var growth_string = cljs.core.first.call(null,s__32229__$2);
var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));
return cljs.core.cons.call(null,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))),quantum$core$numeric$combinatorics$iter__32228.call(null,cljs.core.rest.call(null,s__32229__$2)));
}
} else {
return null;
}
break;
}
});})(growth_strings,from__$1,to__$1,map__32226,map__32226__$1,from,to))
,null,null));
});})(growth_strings,from__$1,to__$1,map__32226,map__32226__$1,from,to))
;
return iter__18297__auto__.call(null,growth_strings);

}
}
}
}
}
});

quantum.core.numeric.combinatorics.lex_partitions_H.cljs$lang$maxFixedArity = (1);

quantum.core.numeric.combinatorics.lex_partitions_H.cljs$lang$applyTo = (function (seq32223){
var G__32224 = cljs.core.first.call(null,seq32223);
var seq32223__$1 = cljs.core.next.call(null,seq32223);
return quantum.core.numeric.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic(G__32224,seq32223__$1);
});
quantum.core.numeric.combinatorics.partitions_H = (function quantum$core$numeric$combinatorics$partitions_H(var_args){
var args__18590__auto__ = [];
var len__18583__auto___32258 = arguments.length;
var i__18584__auto___32259 = (0);
while(true){
if((i__18584__auto___32259 < len__18583__auto___32258)){
args__18590__auto__.push((arguments[i__18584__auto___32259]));

var G__32260 = (i__18584__auto___32259 + (1));
i__18584__auto___32259 = G__32260;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((1) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((1)),(0))):null);
return quantum.core.numeric.combinatorics.partitions_H.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18591__auto__);
});

quantum.core.numeric.combinatorics.partitions_H.cljs$core$IFn$_invoke$arity$variadic = (function (items,args){
var items__$1 = cljs.core.vec.call(null,items);
var N = cljs.core.count.call(null,items__$1);
var lex = cljs.core.apply.call(null,quantum.core.numeric.combinatorics.lex_partitions_H,N,args);
var iter__18297__auto__ = ((function (items__$1,N,lex){
return (function quantum$core$numeric$combinatorics$iter__32238(s__32239){
return (new cljs.core.LazySeq(null,((function (items__$1,N,lex){
return (function (){
var s__32239__$1 = s__32239;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__32239__$1);
if(temp__4425__auto__){
var s__32239__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32239__$2)){
var c__18295__auto__ = cljs.core.chunk_first.call(null,s__32239__$2);
var size__18296__auto__ = cljs.core.count.call(null,c__18295__auto__);
var b__32241 = cljs.core.chunk_buffer.call(null,size__18296__auto__);
if((function (){var i__32240 = (0);
while(true){
if((i__32240 < size__18296__auto__)){
var parts = cljs.core._nth.call(null,c__18295__auto__,i__32240);
cljs.core.chunk_append.call(null,b__32241,(function (){var iter__18297__auto__ = ((function (i__32240,parts,c__18295__auto__,size__18296__auto__,b__32241,s__32239__$2,temp__4425__auto__,items__$1,N,lex){
return (function quantum$core$numeric$combinatorics$iter__32238_$_iter__32250(s__32251){
return (new cljs.core.LazySeq(null,((function (i__32240,parts,c__18295__auto__,size__18296__auto__,b__32241,s__32239__$2,temp__4425__auto__,items__$1,N,lex){
return (function (){
var s__32251__$1 = s__32251;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__32251__$1);
if(temp__4425__auto____$1){
var s__32251__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32251__$2)){
var c__18295__auto____$1 = cljs.core.chunk_first.call(null,s__32251__$2);
var size__18296__auto____$1 = cljs.core.count.call(null,c__18295__auto____$1);
var b__32253 = cljs.core.chunk_buffer.call(null,size__18296__auto____$1);
if((function (){var i__32252 = (0);
while(true){
if((i__32252 < size__18296__auto____$1)){
var part = cljs.core._nth.call(null,c__18295__auto____$1,i__32252);
cljs.core.chunk_append.call(null,b__32253,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__32252,i__32240,part,c__18295__auto____$1,size__18296__auto____$1,b__32253,s__32251__$2,temp__4425__auto____$1,parts,c__18295__auto__,size__18296__auto__,b__32241,s__32239__$2,temp__4425__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__32252,i__32240,part,c__18295__auto____$1,size__18296__auto____$1,b__32253,s__32251__$2,temp__4425__auto____$1,parts,c__18295__auto__,size__18296__auto__,b__32241,s__32239__$2,temp__4425__auto__,items__$1,N,lex))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));

var G__32261 = (i__32252 + (1));
i__32252 = G__32261;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32253),quantum$core$numeric$combinatorics$iter__32238_$_iter__32250.call(null,cljs.core.chunk_rest.call(null,s__32251__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32253),null);
}
} else {
var part = cljs.core.first.call(null,s__32251__$2);
return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__32240,part,s__32251__$2,temp__4425__auto____$1,parts,c__18295__auto__,size__18296__auto__,b__32241,s__32239__$2,temp__4425__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__32240,part,s__32251__$2,temp__4425__auto____$1,parts,c__18295__auto__,size__18296__auto__,b__32241,s__32239__$2,temp__4425__auto__,items__$1,N,lex))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),quantum$core$numeric$combinatorics$iter__32238_$_iter__32250.call(null,cljs.core.rest.call(null,s__32251__$2)));
}
} else {
return null;
}
break;
}
});})(i__32240,parts,c__18295__auto__,size__18296__auto__,b__32241,s__32239__$2,temp__4425__auto__,items__$1,N,lex))
,null,null));
});})(i__32240,parts,c__18295__auto__,size__18296__auto__,b__32241,s__32239__$2,temp__4425__auto__,items__$1,N,lex))
;
return iter__18297__auto__.call(null,parts);
})());

var G__32262 = (i__32240 + (1));
i__32240 = G__32262;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32241),quantum$core$numeric$combinatorics$iter__32238.call(null,cljs.core.chunk_rest.call(null,s__32239__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32241),null);
}
} else {
var parts = cljs.core.first.call(null,s__32239__$2);
return cljs.core.cons.call(null,(function (){var iter__18297__auto__ = ((function (parts,s__32239__$2,temp__4425__auto__,items__$1,N,lex){
return (function quantum$core$numeric$combinatorics$iter__32238_$_iter__32254(s__32255){
return (new cljs.core.LazySeq(null,((function (parts,s__32239__$2,temp__4425__auto__,items__$1,N,lex){
return (function (){
var s__32255__$1 = s__32255;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__32255__$1);
if(temp__4425__auto____$1){
var s__32255__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32255__$2)){
var c__18295__auto__ = cljs.core.chunk_first.call(null,s__32255__$2);
var size__18296__auto__ = cljs.core.count.call(null,c__18295__auto__);
var b__32257 = cljs.core.chunk_buffer.call(null,size__18296__auto__);
if((function (){var i__32256 = (0);
while(true){
if((i__32256 < size__18296__auto__)){
var part = cljs.core._nth.call(null,c__18295__auto__,i__32256);
cljs.core.chunk_append.call(null,b__32257,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__32256,part,c__18295__auto__,size__18296__auto__,b__32257,s__32255__$2,temp__4425__auto____$1,parts,s__32239__$2,temp__4425__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__32256,part,c__18295__auto__,size__18296__auto__,b__32257,s__32255__$2,temp__4425__auto____$1,parts,s__32239__$2,temp__4425__auto__,items__$1,N,lex))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));

var G__32263 = (i__32256 + (1));
i__32256 = G__32263;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32257),quantum$core$numeric$combinatorics$iter__32238_$_iter__32254.call(null,cljs.core.chunk_rest.call(null,s__32255__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32257),null);
}
} else {
var part = cljs.core.first.call(null,s__32255__$2);
return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (part,s__32255__$2,temp__4425__auto____$1,parts,s__32239__$2,temp__4425__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(part,s__32255__$2,temp__4425__auto____$1,parts,s__32239__$2,temp__4425__auto__,items__$1,N,lex))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),quantum$core$numeric$combinatorics$iter__32238_$_iter__32254.call(null,cljs.core.rest.call(null,s__32255__$2)));
}
} else {
return null;
}
break;
}
});})(parts,s__32239__$2,temp__4425__auto__,items__$1,N,lex))
,null,null));
});})(parts,s__32239__$2,temp__4425__auto__,items__$1,N,lex))
;
return iter__18297__auto__.call(null,parts);
})(),quantum$core$numeric$combinatorics$iter__32238.call(null,cljs.core.rest.call(null,s__32239__$2)));
}
} else {
return null;
}
break;
}
});})(items__$1,N,lex))
,null,null));
});})(items__$1,N,lex))
;
return iter__18297__auto__.call(null,lex);
});

quantum.core.numeric.combinatorics.partitions_H.cljs$lang$maxFixedArity = (1);

quantum.core.numeric.combinatorics.partitions_H.cljs$lang$applyTo = (function (seq32236){
var G__32237 = cljs.core.first.call(null,seq32236);
var seq32236__$1 = cljs.core.next.call(null,seq32236);
return quantum.core.numeric.combinatorics.partitions_H.cljs$core$IFn$_invoke$arity$variadic(G__32237,seq32236__$1);
});
quantum.core.numeric.combinatorics.m5;

quantum.core.numeric.combinatorics.m6;
quantum.core.numeric.combinatorics.multiset_partitions_M = (function quantum$core$numeric$combinatorics$multiset_partitions_M(var_args){
var args32264 = [];
var len__18583__auto___32289 = arguments.length;
var i__18584__auto___32290 = (0);
while(true){
if((i__18584__auto___32290 < len__18583__auto___32289)){
args32264.push((arguments[i__18584__auto___32290]));

var G__32291 = (i__18584__auto___32290 + (1));
i__18584__auto___32290 = G__32291;
continue;
} else {
}
break;
}

var G__32266 = args32264.length;
switch (G__32266) {
case 3:
return quantum.core.numeric.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 11:
return quantum.core.numeric.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32264.length)].join('')));

}
});

quantum.core.numeric.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$3 = (function (multiset,r,s){
var n = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,multiset));
var m = cljs.core.count.call(null,multiset);
var f = cljs.core.PersistentVector.EMPTY;
var c = cljs.core.PersistentVector.EMPTY;
var u = cljs.core.PersistentVector.EMPTY;
var v = cljs.core.PersistentVector.EMPTY;
var vec__32267 = (function (){var j = (0);
var c__$1 = c;
var u__$1 = u;
var v__$1 = v;
while(true){
if(cljs.core._EQ_.call(null,j,m)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else {
var G__32293 = (j + (1));
var G__32294 = cljs.core.assoc.call(null,c__$1,j,(j + (1)));
var G__32295 = cljs.core.assoc.call(null,u__$1,j,multiset.call(null,(j + (1))));
var G__32296 = cljs.core.assoc.call(null,v__$1,j,multiset.call(null,(j + (1))));
j = G__32293;
c__$1 = G__32294;
u__$1 = G__32295;
v__$1 = G__32296;
continue;
}
break;
}
})();
var c__$1 = cljs.core.nth.call(null,vec__32267,(0),null);
var u__$1 = cljs.core.nth.call(null,vec__32267,(1),null);
var v__$1 = cljs.core.nth.call(null,vec__32267,(2),null);
var a = (0);
var b = m;
var l = (0);
var f__$1 = cljs.core.assoc.call(null,f,(0),(0),(1),m);
var stack = cljs.core.List.EMPTY;
return quantum.core.numeric.combinatorics.multiset_partitions_M.call(null,n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
});

quantum.core.numeric.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11 = (function (n,m,f,c,u,v,a,b,l,r,s){
while(true){
var vec__32268 = (function (){var j = a;
var k = b;
var x = false;
var u__$1 = u;
var v__$1 = v;
var c__$1 = c;
while(true){
if((j >= b)){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,v__$1,c__$1,j,k], null);
} else {
var u__$2 = cljs.core.assoc.call(null,u__$1,k,(u__$1.call(null,j) - v__$1.call(null,j)));
if(cljs.core._EQ_.call(null,u__$2.call(null,k),(0))){
var G__32297 = (j + (1));
var G__32298 = k;
var G__32299 = true;
var G__32300 = u__$2;
var G__32301 = v__$1;
var G__32302 = c__$1;
j = G__32297;
k = G__32298;
x = G__32299;
u__$1 = G__32300;
v__$1 = G__32301;
c__$1 = G__32302;
continue;
} else {
if(!(x)){
var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));
var v__$2 = cljs.core.assoc.call(null,v__$1,k,(function (){var x__17863__auto__ = v__$1.call(null,j);
var y__17864__auto__ = u__$2.call(null,k);
return ((x__17863__auto__ < y__17864__auto__) ? x__17863__auto__ : y__17864__auto__);
})());
var x__$1 = (u__$2.call(null,k) < v__$2.call(null,j));
var k__$1 = (k + (1));
var j__$1 = (j + (1));
var G__32303 = j__$1;
var G__32304 = k__$1;
var G__32305 = x__$1;
var G__32306 = u__$2;
var G__32307 = v__$2;
var G__32308 = c__$2;
j = G__32303;
k = G__32304;
x = G__32305;
u__$1 = G__32306;
v__$1 = G__32307;
c__$1 = G__32308;
continue;
} else {
var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));
var v__$2 = cljs.core.assoc.call(null,v__$1,k,u__$2.call(null,k));
var k__$1 = (k + (1));
var j__$1 = (j + (1));
var G__32309 = j__$1;
var G__32310 = k__$1;
var G__32311 = x;
var G__32312 = u__$2;
var G__32313 = v__$2;
var G__32314 = c__$2;
j = G__32309;
k = G__32310;
x = G__32311;
u__$1 = G__32312;
v__$1 = G__32313;
c__$1 = G__32314;
continue;
}
}
}
break;
}
})();
var u__$1 = cljs.core.nth.call(null,vec__32268,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__32268,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__32268,(2),null);
var j = cljs.core.nth.call(null,vec__32268,(3),null);
var k = cljs.core.nth.call(null,vec__32268,(4),null);
if(cljs.core.truth_((function (){var and__17513__auto__ = r;
if(cljs.core.truth_(and__17513__auto__)){
return ((k > b)) && (cljs.core._EQ_.call(null,l,(r - (1))));
} else {
return and__17513__auto__;
}
})())){
return quantum.core.numeric.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else {
if(cljs.core.truth_((function (){var and__17513__auto__ = s;
if(cljs.core.truth_(and__17513__auto__)){
return ((k <= b)) && (((l + (1)) < s));
} else {
return and__17513__auto__;
}
})())){
return quantum.core.numeric.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else {
if((k > b)){
var a__$1 = b;
var b__$1 = k;
var l__$1 = (l + (1));
var f__$1 = cljs.core.assoc.call(null,f,(l__$1 + (1)),b__$1);
var G__32315 = n;
var G__32316 = m;
var G__32317 = f__$1;
var G__32318 = c__$1;
var G__32319 = u__$1;
var G__32320 = v__$1;
var G__32321 = a__$1;
var G__32322 = b__$1;
var G__32323 = l__$1;
var G__32324 = r;
var G__32325 = s;
n = G__32315;
m = G__32316;
f = G__32317;
c = G__32318;
u = G__32319;
v = G__32320;
a = G__32321;
b = G__32322;
l = G__32323;
r = G__32324;
s = G__32325;
continue;
} else {
var part = (function (){var iter__18297__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,vec__32268,u__$1,v__$1,c__$1,j,k){
return (function quantum$core$numeric$combinatorics$iter__32269(s__32270){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,vec__32268,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__32270__$1 = s__32270;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__32270__$1);
if(temp__4425__auto__){
var s__32270__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32270__$2)){
var c__18295__auto__ = cljs.core.chunk_first.call(null,s__32270__$2);
var size__18296__auto__ = cljs.core.count.call(null,c__18295__auto__);
var b__32272 = cljs.core.chunk_buffer.call(null,size__18296__auto__);
if((function (){var i__32271 = (0);
while(true){
if((i__32271 < size__18296__auto__)){
var y = cljs.core._nth.call(null,c__18295__auto__,i__32271);
cljs.core.chunk_append.call(null,b__32272,(function (){var first_col = f.call(null,y);
var last_col = (f.call(null,(y + (1))) - (1));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__18297__auto__ = ((function (i__32271,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__18295__auto__,size__18296__auto__,b__32272,s__32270__$2,temp__4425__auto__,vec__32268,u__$1,v__$1,c__$1,j,k){
return (function quantum$core$numeric$combinatorics$iter__32269_$_iter__32281(s__32282){
return (new cljs.core.LazySeq(null,((function (i__32271,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__18295__auto__,size__18296__auto__,b__32272,s__32270__$2,temp__4425__auto__,vec__32268,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__32282__$1 = s__32282;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__32282__$1);
if(temp__4425__auto____$1){
var s__32282__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32282__$2)){
var c__18295__auto____$1 = cljs.core.chunk_first.call(null,s__32282__$2);
var size__18296__auto____$1 = cljs.core.count.call(null,c__18295__auto____$1);
var b__32284 = cljs.core.chunk_buffer.call(null,size__18296__auto____$1);
if((function (){var i__32283 = (0);
while(true){
if((i__32283 < size__18296__auto____$1)){
var z = cljs.core._nth.call(null,c__18295__auto____$1,i__32283);
if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),(0))){
cljs.core.chunk_append.call(null,b__32284,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));

var G__32326 = (i__32283 + (1));
i__32283 = G__32326;
continue;
} else {
var G__32327 = (i__32283 + (1));
i__32283 = G__32327;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32284),quantum$core$numeric$combinatorics$iter__32269_$_iter__32281.call(null,cljs.core.chunk_rest.call(null,s__32282__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32284),null);
}
} else {
var z = cljs.core.first.call(null,s__32282__$2);
if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),(0))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),quantum$core$numeric$combinatorics$iter__32269_$_iter__32281.call(null,cljs.core.rest.call(null,s__32282__$2)));
} else {
var G__32328 = cljs.core.rest.call(null,s__32282__$2);
s__32282__$1 = G__32328;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__32271,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__18295__auto__,size__18296__auto__,b__32272,s__32270__$2,temp__4425__auto__,vec__32268,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(i__32271,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__18295__auto__,size__18296__auto__,b__32272,s__32270__$2,temp__4425__auto__,vec__32268,u__$1,v__$1,c__$1,j,k))
;
return iter__18297__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + (1))));
})());
})());

var G__32329 = (i__32271 + (1));
i__32271 = G__32329;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32272),quantum$core$numeric$combinatorics$iter__32269.call(null,cljs.core.chunk_rest.call(null,s__32270__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32272),null);
}
} else {
var y = cljs.core.first.call(null,s__32270__$2);
return cljs.core.cons.call(null,(function (){var first_col = f.call(null,y);
var last_col = (f.call(null,(y + (1))) - (1));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__18297__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__32270__$2,temp__4425__auto__,vec__32268,u__$1,v__$1,c__$1,j,k){
return (function quantum$core$numeric$combinatorics$iter__32269_$_iter__32285(s__32286){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__32270__$2,temp__4425__auto__,vec__32268,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__32286__$1 = s__32286;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__32286__$1);
if(temp__4425__auto____$1){
var s__32286__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32286__$2)){
var c__18295__auto__ = cljs.core.chunk_first.call(null,s__32286__$2);
var size__18296__auto__ = cljs.core.count.call(null,c__18295__auto__);
var b__32288 = cljs.core.chunk_buffer.call(null,size__18296__auto__);
if((function (){var i__32287 = (0);
while(true){
if((i__32287 < size__18296__auto__)){
var z = cljs.core._nth.call(null,c__18295__auto__,i__32287);
if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),(0))){
cljs.core.chunk_append.call(null,b__32288,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));

var G__32330 = (i__32287 + (1));
i__32287 = G__32330;
continue;
} else {
var G__32331 = (i__32287 + (1));
i__32287 = G__32331;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32288),quantum$core$numeric$combinatorics$iter__32269_$_iter__32285.call(null,cljs.core.chunk_rest.call(null,s__32286__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32288),null);
}
} else {
var z = cljs.core.first.call(null,s__32286__$2);
if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),(0))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),quantum$core$numeric$combinatorics$iter__32269_$_iter__32285.call(null,cljs.core.rest.call(null,s__32286__$2)));
} else {
var G__32332 = cljs.core.rest.call(null,s__32286__$2);
s__32286__$1 = G__32332;
continue;
}
}
} else {
return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__32270__$2,temp__4425__auto__,vec__32268,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__32270__$2,temp__4425__auto__,vec__32268,u__$1,v__$1,c__$1,j,k))
;
return iter__18297__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + (1))));
})());
})(),quantum$core$numeric$combinatorics$iter__32269.call(null,cljs.core.rest.call(null,s__32270__$2)));
}
} else {
return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,vec__32268,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,vec__32268,u__$1,v__$1,c__$1,j,k))
;
return iter__18297__auto__.call(null,cljs.core.range.call(null,(l + (1))));
})();
return cljs.core.cons.call(null,part,(new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,part,vec__32268,u__$1,v__$1,c__$1,j,k){
return (function (){
return quantum.core.numeric.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
});})(n,m,f,c,u,v,a,b,l,r,s,part,vec__32268,u__$1,v__$1,c__$1,j,k))
,null,null)));

}
}
}
break;
}
});

quantum.core.numeric.combinatorics.multiset_partitions_M.cljs$lang$maxFixedArity = 11;
quantum.core.numeric.combinatorics.m5 = (function quantum$core$numeric$combinatorics$m5(n,m,f,c,u,v,a,b,l,r,s){
var j = (function (){var j = (b - (1));
while(true){
if(cljs.core.not_EQ_.call(null,v.call(null,j),(0))){
return j;
} else {
var G__32341 = (j - (1));
j = G__32341;
continue;
}
break;
}
})();
if(cljs.core.truth_((function (){var and__17513__auto__ = r;
if(cljs.core.truth_(and__17513__auto__)){
return (cljs.core._EQ_.call(null,j,a)) && ((((v.call(null,j) - (1)) * (r - l)) < u.call(null,j)));
} else {
return and__17513__auto__;
}
})())){
return quantum.core.numeric.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else {
if((cljs.core._EQ_.call(null,j,a)) && (cljs.core._EQ_.call(null,v.call(null,j),(1)))){
return quantum.core.numeric.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else {
var v__$1 = quantum.core.numeric.combinatorics.update.call(null,v,j,cljs.core.dec);
var diff_uv = (cljs.core.truth_(s)?cljs.core.apply.call(null,cljs.core._PLUS_,(function (){var iter__18297__auto__ = ((function (v__$1,j){
return (function quantum$core$numeric$combinatorics$m5_$_iter__32337(s__32338){
return (new cljs.core.LazySeq(null,((function (v__$1,j){
return (function (){
var s__32338__$1 = s__32338;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__32338__$1);
if(temp__4425__auto__){
var s__32338__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32338__$2)){
var c__18295__auto__ = cljs.core.chunk_first.call(null,s__32338__$2);
var size__18296__auto__ = cljs.core.count.call(null,c__18295__auto__);
var b__32340 = cljs.core.chunk_buffer.call(null,size__18296__auto__);
if((function (){var i__32339 = (0);
while(true){
if((i__32339 < size__18296__auto__)){
var i = cljs.core._nth.call(null,c__18295__auto__,i__32339);
cljs.core.chunk_append.call(null,b__32340,(u.call(null,i) - v__$1.call(null,i)));

var G__32342 = (i__32339 + (1));
i__32339 = G__32342;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32340),quantum$core$numeric$combinatorics$m5_$_iter__32337.call(null,cljs.core.chunk_rest.call(null,s__32338__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32340),null);
}
} else {
var i = cljs.core.first.call(null,s__32338__$2);
return cljs.core.cons.call(null,(u.call(null,i) - v__$1.call(null,i)),quantum$core$numeric$combinatorics$m5_$_iter__32337.call(null,cljs.core.rest.call(null,s__32338__$2)));
}
} else {
return null;
}
break;
}
});})(v__$1,j))
,null,null));
});})(v__$1,j))
;
return iter__18297__auto__.call(null,cljs.core.range.call(null,a,(j + (1))));
})()):null);
var v__$2 = (function (){var ks = cljs.core.range.call(null,(j + (1)),b);
var v__$2 = v__$1;
while(true){
if(cljs.core.empty_QMARK_.call(null,ks)){
return v__$2;
} else {
var k = cljs.core.first.call(null,ks);
var G__32343 = cljs.core.rest.call(null,ks);
var G__32344 = cljs.core.assoc.call(null,v__$2,k,u.call(null,k));
ks = G__32343;
v__$2 = G__32344;
continue;
}
break;
}
})();
var min_partitions_after_this = (cljs.core.truth_(s)?(s - (l + (1))):(0));
var amount_to_dec = (cljs.core.truth_(s)?(function (){var x__17856__auto__ = (0);
var y__17857__auto__ = (min_partitions_after_this - diff_uv);
return ((x__17856__auto__ > y__17857__auto__) ? x__17856__auto__ : y__17857__auto__);
})():(0));
var v__$3 = ((cljs.core._EQ_.call(null,amount_to_dec,(0)))?v__$2:(function (){var k_1 = (b - (1));
var v__$3 = v__$2;
var amount = amount_to_dec;
while(true){
var vk = v__$3.call(null,k_1);
if((amount > vk)){
var G__32345 = (k_1 - (1));
var G__32346 = cljs.core.assoc.call(null,v__$3,k_1,(0));
var G__32347 = (amount - vk);
k_1 = G__32345;
v__$3 = G__32346;
amount = G__32347;
continue;
} else {
return cljs.core.assoc.call(null,v__$3,k_1,(vk - amount));
}
break;
}
})());
return quantum.core.numeric.combinatorics.multiset_partitions_M.call(null,n,m,f,c,u,v__$3,a,b,l,r,s);

}
}
});
quantum.core.numeric.combinatorics.m6 = (function quantum$core$numeric$combinatorics$m6(n,m,f,c,u,v,a,b,l,r,s){
if(cljs.core._EQ_.call(null,l,(0))){
return cljs.core.List.EMPTY;
} else {
var l__$1 = (l - (1));
var b__$1 = a;
var a__$1 = f.call(null,l__$1);
return quantum.core.numeric.combinatorics.m5.call(null,n,m,f,c,u,v,a__$1,b__$1,l__$1,r,s);
}
});
quantum.core.numeric.combinatorics.partitions_M = (function quantum$core$numeric$combinatorics$partitions_M(var_args){
var args__18590__auto__ = [];
var len__18583__auto___32409 = arguments.length;
var i__18584__auto___32410 = (0);
while(true){
if((i__18584__auto___32410 < len__18583__auto___32409)){
args__18590__auto__.push((arguments[i__18584__auto___32410]));

var G__32411 = (i__18584__auto___32410 + (1));
i__18584__auto___32410 = G__32411;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((1) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((1)),(0))):null);
return quantum.core.numeric.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18591__auto__);
});

quantum.core.numeric.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic = (function (items,p__32350){
var map__32351 = p__32350;
var map__32351__$1 = ((((!((map__32351 == null)))?((((map__32351.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32351.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32351):map__32351);
var from = cljs.core.get.call(null,map__32351__$1,new cljs.core.Keyword(null,"min","min",444991522));
var to = cljs.core.get.call(null,map__32351__$1,new cljs.core.Keyword(null,"max","max",61366548));
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,items),(0))){
if((((function (){var or__17525__auto__ = from;
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return (0);
}
})() <= (0))) && (((0) <= (function (){var or__17525__auto__ = to;
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return (0);
}
})()))){
return cljs.core.list(cljs.core.List.EMPTY);
} else {
return cljs.core.List.EMPTY;
}
} else {
var items__$1 = cljs.core.vec.call(null,items);
var ditems = cljs.core.vec.call(null,cljs.core.distinct.call(null,items__$1));
var freqs = cljs.core.frequencies.call(null,items__$1);
var N = cljs.core.count.call(null,items__$1);
var M = cljs.core.count.call(null,ditems);
var from__$1 = (cljs.core.truth_((function (){var and__17513__auto__ = from;
if(cljs.core.truth_(and__17513__auto__)){
return (from <= (1));
} else {
return and__17513__auto__;
}
})())?null:from);
var to__$1 = (cljs.core.truth_((function (){var and__17513__auto__ = to;
if(cljs.core.truth_(and__17513__auto__)){
return (to >= N);
} else {
return and__17513__auto__;
}
})())?null:to);
if(!((((1) <= (function (){var or__17525__auto__ = from__$1;
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return (1);
}
})())) && ((((function (){var or__17525__auto__ = from__$1;
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return (1);
}
})() <= (function (){var or__17525__auto__ = to__$1;
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return N;
}
})())) && (((function (){var or__17525__auto__ = to__$1;
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return N;
}
})() <= N))))){
return cljs.core.List.EMPTY;
} else {
if(cljs.core._EQ_.call(null,N,(1))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.first.call(null,items__$1))))))))))))));
} else {
var start_multiset = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__18297__auto__ = ((function (items__$1,ditems,freqs,N,M,from__$1,to__$1,map__32351,map__32351__$1,from,to){
return (function quantum$core$numeric$combinatorics$iter__32353(s__32354){
return (new cljs.core.LazySeq(null,((function (items__$1,ditems,freqs,N,M,from__$1,to__$1,map__32351,map__32351__$1,from,to){
return (function (){
var s__32354__$1 = s__32354;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__32354__$1);
if(temp__4425__auto__){
var s__32354__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32354__$2)){
var c__18295__auto__ = cljs.core.chunk_first.call(null,s__32354__$2);
var size__18296__auto__ = cljs.core.count.call(null,c__18295__auto__);
var b__32356 = cljs.core.chunk_buffer.call(null,size__18296__auto__);
if((function (){var i__32355 = (0);
while(true){
if((i__32355 < size__18296__auto__)){
var i = cljs.core._nth.call(null,c__18295__auto__,i__32355);
var j = (i + (1));
cljs.core.chunk_append.call(null,b__32356,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null));

var G__32412 = (i__32355 + (1));
i__32355 = G__32412;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32356),quantum$core$numeric$combinatorics$iter__32353.call(null,cljs.core.chunk_rest.call(null,s__32354__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32356),null);
}
} else {
var i = cljs.core.first.call(null,s__32354__$2);
var j = (i + (1));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null),quantum$core$numeric$combinatorics$iter__32353.call(null,cljs.core.rest.call(null,s__32354__$2)));
}
} else {
return null;
}
break;
}
});})(items__$1,ditems,freqs,N,M,from__$1,to__$1,map__32351,map__32351__$1,from,to))
,null,null));
});})(items__$1,ditems,freqs,N,M,from__$1,to__$1,map__32351,map__32351__$1,from,to))
;
return iter__18297__auto__.call(null,cljs.core.range.call(null,M));
})());
var parts = quantum.core.numeric.combinatorics.multiset_partitions_M.call(null,start_multiset,to__$1,from__$1);
var iter__18297__auto__ = ((function (start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__32351,map__32351__$1,from,to){
return (function quantum$core$numeric$combinatorics$iter__32357(s__32358){
return (new cljs.core.LazySeq(null,((function (start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__32351,map__32351__$1,from,to){
return (function (){
var s__32358__$1 = s__32358;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__32358__$1);
if(temp__4425__auto__){
var s__32358__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32358__$2)){
var c__18295__auto__ = cljs.core.chunk_first.call(null,s__32358__$2);
var size__18296__auto__ = cljs.core.count.call(null,c__18295__auto__);
var b__32360 = cljs.core.chunk_buffer.call(null,size__18296__auto__);
if((function (){var i__32359 = (0);
while(true){
if((i__32359 < size__18296__auto__)){
var part = cljs.core._nth.call(null,c__18295__auto__,i__32359);
cljs.core.chunk_append.call(null,b__32360,(function (){var iter__18297__auto__ = ((function (i__32359,part,c__18295__auto__,size__18296__auto__,b__32360,s__32358__$2,temp__4425__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__32351,map__32351__$1,from,to){
return (function quantum$core$numeric$combinatorics$iter__32357_$_iter__32385(s__32386){
return (new cljs.core.LazySeq(null,((function (i__32359,part,c__18295__auto__,size__18296__auto__,b__32360,s__32358__$2,temp__4425__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__32351,map__32351__$1,from,to){
return (function (){
var s__32386__$1 = s__32386;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__32386__$1);
if(temp__4425__auto____$1){
var s__32386__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32386__$2)){
var c__18295__auto____$1 = cljs.core.chunk_first.call(null,s__32386__$2);
var size__18296__auto____$1 = cljs.core.count.call(null,c__18295__auto____$1);
var b__32388 = cljs.core.chunk_buffer.call(null,size__18296__auto____$1);
if((function (){var i__32387 = (0);
while(true){
if((i__32387 < size__18296__auto____$1)){
var multiset = cljs.core._nth.call(null,c__18295__auto____$1,i__32387);
cljs.core.chunk_append.call(null,b__32388,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__32387,i__32359,multiset,c__18295__auto____$1,size__18296__auto____$1,b__32388,s__32386__$2,temp__4425__auto____$1,part,c__18295__auto__,size__18296__auto__,b__32360,s__32358__$2,temp__4425__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__32351,map__32351__$1,from,to){
return (function (p__32393){
var vec__32394 = p__32393;
var index = cljs.core.nth.call(null,vec__32394,(0),null);
var numtimes = cljs.core.nth.call(null,vec__32394,(1),null);
return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - (1))));
});})(i__32387,i__32359,multiset,c__18295__auto____$1,size__18296__auto____$1,b__32388,s__32386__$2,temp__4425__auto____$1,part,c__18295__auto__,size__18296__auto__,b__32360,s__32358__$2,temp__4425__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__32351,map__32351__$1,from,to))
,multiset)));

var G__32413 = (i__32387 + (1));
i__32387 = G__32413;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32388),quantum$core$numeric$combinatorics$iter__32357_$_iter__32385.call(null,cljs.core.chunk_rest.call(null,s__32386__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32388),null);
}
} else {
var multiset = cljs.core.first.call(null,s__32386__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__32359,multiset,s__32386__$2,temp__4425__auto____$1,part,c__18295__auto__,size__18296__auto__,b__32360,s__32358__$2,temp__4425__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__32351,map__32351__$1,from,to){
return (function (p__32395){
var vec__32396 = p__32395;
var index = cljs.core.nth.call(null,vec__32396,(0),null);
var numtimes = cljs.core.nth.call(null,vec__32396,(1),null);
return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - (1))));
});})(i__32359,multiset,s__32386__$2,temp__4425__auto____$1,part,c__18295__auto__,size__18296__auto__,b__32360,s__32358__$2,temp__4425__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__32351,map__32351__$1,from,to))
,multiset)),quantum$core$numeric$combinatorics$iter__32357_$_iter__32385.call(null,cljs.core.rest.call(null,s__32386__$2)));
}
} else {
return null;
}
break;
}
});})(i__32359,part,c__18295__auto__,size__18296__auto__,b__32360,s__32358__$2,temp__4425__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__32351,map__32351__$1,from,to))
,null,null));
});})(i__32359,part,c__18295__auto__,size__18296__auto__,b__32360,s__32358__$2,temp__4425__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__32351,map__32351__$1,from,to))
;
return iter__18297__auto__.call(null,part);
})());

var G__32414 = (i__32359 + (1));
i__32359 = G__32414;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32360),quantum$core$numeric$combinatorics$iter__32357.call(null,cljs.core.chunk_rest.call(null,s__32358__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32360),null);
}
} else {
var part = cljs.core.first.call(null,s__32358__$2);
return cljs.core.cons.call(null,(function (){var iter__18297__auto__ = ((function (part,s__32358__$2,temp__4425__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__32351,map__32351__$1,from,to){
return (function quantum$core$numeric$combinatorics$iter__32357_$_iter__32397(s__32398){
return (new cljs.core.LazySeq(null,((function (part,s__32358__$2,temp__4425__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__32351,map__32351__$1,from,to){
return (function (){
var s__32398__$1 = s__32398;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__32398__$1);
if(temp__4425__auto____$1){
var s__32398__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32398__$2)){
var c__18295__auto__ = cljs.core.chunk_first.call(null,s__32398__$2);
var size__18296__auto__ = cljs.core.count.call(null,c__18295__auto__);
var b__32400 = cljs.core.chunk_buffer.call(null,size__18296__auto__);
if((function (){var i__32399 = (0);
while(true){
if((i__32399 < size__18296__auto__)){
var multiset = cljs.core._nth.call(null,c__18295__auto__,i__32399);
cljs.core.chunk_append.call(null,b__32400,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__32399,multiset,c__18295__auto__,size__18296__auto__,b__32400,s__32398__$2,temp__4425__auto____$1,part,s__32358__$2,temp__4425__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__32351,map__32351__$1,from,to){
return (function (p__32405){
var vec__32406 = p__32405;
var index = cljs.core.nth.call(null,vec__32406,(0),null);
var numtimes = cljs.core.nth.call(null,vec__32406,(1),null);
return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - (1))));
});})(i__32399,multiset,c__18295__auto__,size__18296__auto__,b__32400,s__32398__$2,temp__4425__auto____$1,part,s__32358__$2,temp__4425__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__32351,map__32351__$1,from,to))
,multiset)));

var G__32415 = (i__32399 + (1));
i__32399 = G__32415;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32400),quantum$core$numeric$combinatorics$iter__32357_$_iter__32397.call(null,cljs.core.chunk_rest.call(null,s__32398__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32400),null);
}
} else {
var multiset = cljs.core.first.call(null,s__32398__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (multiset,s__32398__$2,temp__4425__auto____$1,part,s__32358__$2,temp__4425__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__32351,map__32351__$1,from,to){
return (function (p__32407){
var vec__32408 = p__32407;
var index = cljs.core.nth.call(null,vec__32408,(0),null);
var numtimes = cljs.core.nth.call(null,vec__32408,(1),null);
return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - (1))));
});})(multiset,s__32398__$2,temp__4425__auto____$1,part,s__32358__$2,temp__4425__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__32351,map__32351__$1,from,to))
,multiset)),quantum$core$numeric$combinatorics$iter__32357_$_iter__32397.call(null,cljs.core.rest.call(null,s__32398__$2)));
}
} else {
return null;
}
break;
}
});})(part,s__32358__$2,temp__4425__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__32351,map__32351__$1,from,to))
,null,null));
});})(part,s__32358__$2,temp__4425__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__32351,map__32351__$1,from,to))
;
return iter__18297__auto__.call(null,part);
})(),quantum$core$numeric$combinatorics$iter__32357.call(null,cljs.core.rest.call(null,s__32358__$2)));
}
} else {
return null;
}
break;
}
});})(start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__32351,map__32351__$1,from,to))
,null,null));
});})(start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__32351,map__32351__$1,from,to))
;
return iter__18297__auto__.call(null,parts);

}
}
}
});

quantum.core.numeric.combinatorics.partitions_M.cljs$lang$maxFixedArity = (1);

quantum.core.numeric.combinatorics.partitions_M.cljs$lang$applyTo = (function (seq32348){
var G__32349 = cljs.core.first.call(null,seq32348);
var seq32348__$1 = cljs.core.next.call(null,seq32348);
return quantum.core.numeric.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic(G__32349,seq32348__$1);
});
/**
 * All the lexicographic distinct partitions of items.
 *  Optionally pass in :min and/or :max to specify inclusive bounds on the number of parts the items can be split into.
 */
quantum.core.numeric.combinatorics.partitions = (function quantum$core$numeric$combinatorics$partitions(var_args){
var args__18590__auto__ = [];
var len__18583__auto___32418 = arguments.length;
var i__18584__auto___32419 = (0);
while(true){
if((i__18584__auto___32419 < len__18583__auto___32418)){
args__18590__auto__.push((arguments[i__18584__auto___32419]));

var G__32420 = (i__18584__auto___32419 + (1));
i__18584__auto___32419 = G__32420;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((1) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((1)),(0))):null);
return quantum.core.numeric.combinatorics.partitions.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18591__auto__);
});

quantum.core.numeric.combinatorics.partitions.cljs$core$IFn$_invoke$arity$variadic = (function (items,args){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,items),(0))){
return cljs.core.apply.call(null,quantum.core.numeric.combinatorics.partitions_H,items,args);
} else {
if(cljs.core.truth_(quantum.core.numeric.combinatorics.all_different_QMARK_.call(null,items))){
return cljs.core.apply.call(null,quantum.core.numeric.combinatorics.partitions_H,items,args);
} else {
return cljs.core.apply.call(null,quantum.core.numeric.combinatorics.partitions_M,items,args);

}
}
});

quantum.core.numeric.combinatorics.partitions.cljs$lang$maxFixedArity = (1);

quantum.core.numeric.combinatorics.partitions.cljs$lang$applyTo = (function (seq32416){
var G__32417 = cljs.core.first.call(null,seq32416);
var seq32416__$1 = cljs.core.next.call(null,seq32416);
return quantum.core.numeric.combinatorics.partitions.cljs$core$IFn$_invoke$arity$variadic(G__32417,seq32416__$1);
});

//# sourceMappingURL=combinatorics.js.map?rel=1452702630053
/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns err log fn]
*/
