// Compiled by ClojureScript 1.7.170 {}
goog.provide('servant.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('servant.worker');
servant.core.webworker_QMARK_ = (function servant$core$webworker_QMARK_(){
return (void 0 === self.document);
});
servant.core.not_webworker_QMARK_ = cljs.core.complement.call(null,servant.core.webworker_QMARK_);
/**
 * Returns a channel that lists available workers
 */
servant.core.spawn_servants = (function servant$core$spawn_servants(worker_count,worker_script){
var servant_channel = cljs.core.async.chan.call(null,worker_count);
var c__19849__auto___43742 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19849__auto___43742,servant_channel){
return (function (){
var f__19850__auto__ = (function (){var switch__19828__auto__ = ((function (c__19849__auto___43742,servant_channel){
return (function (state_43709){
var state_val_43710 = (state_43709[(1)]);
if((state_val_43710 === (7))){
var inst_43670 = (state_43709[(7)]);
var inst_43669 = (state_43709[(8)]);
var inst_43671 = (state_43709[(9)]);
var inst_43672 = (state_43709[(10)]);
var inst_43680 = (state_43709[(2)]);
var inst_43681 = (inst_43672 + (1));
var tmp43711 = inst_43670;
var tmp43712 = inst_43669;
var tmp43713 = inst_43671;
var inst_43669__$1 = tmp43712;
var inst_43670__$1 = tmp43711;
var inst_43671__$1 = tmp43713;
var inst_43672__$1 = inst_43681;
var state_43709__$1 = (function (){var statearr_43714 = state_43709;
(statearr_43714[(7)] = inst_43670__$1);

(statearr_43714[(8)] = inst_43669__$1);

(statearr_43714[(12)] = inst_43680);

(statearr_43714[(9)] = inst_43671__$1);

(statearr_43714[(10)] = inst_43672__$1);

return statearr_43714;
})();
var statearr_43715_43743 = state_43709__$1;
(statearr_43715_43743[(2)] = null);

(statearr_43715_43743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43710 === (1))){
var inst_43667 = cljs.core.range.call(null,worker_count);
var inst_43668 = cljs.core.seq.call(null,inst_43667);
var inst_43669 = inst_43668;
var inst_43670 = null;
var inst_43671 = (0);
var inst_43672 = (0);
var state_43709__$1 = (function (){var statearr_43716 = state_43709;
(statearr_43716[(7)] = inst_43670);

(statearr_43716[(8)] = inst_43669);

(statearr_43716[(9)] = inst_43671);

(statearr_43716[(10)] = inst_43672);

return statearr_43716;
})();
var statearr_43717_43744 = state_43709__$1;
(statearr_43717_43744[(2)] = null);

(statearr_43717_43744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43710 === (4))){
var inst_43670 = (state_43709[(7)]);
var inst_43672 = (state_43709[(10)]);
var inst_43677 = cljs.core._nth.call(null,inst_43670,inst_43672);
var inst_43678 = (new Worker(worker_script));
var state_43709__$1 = (function (){var statearr_43718 = state_43709;
(statearr_43718[(11)] = inst_43677);

return statearr_43718;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43709__$1,(7),servant_channel,inst_43678);
} else {
if((state_val_43710 === (13))){
var inst_43700 = (state_43709[(2)]);
var state_43709__$1 = state_43709;
var statearr_43719_43745 = state_43709__$1;
(statearr_43719_43745[(2)] = inst_43700);

(statearr_43719_43745[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43710 === (6))){
var inst_43705 = (state_43709[(2)]);
var state_43709__$1 = state_43709;
var statearr_43720_43746 = state_43709__$1;
(statearr_43720_43746[(2)] = inst_43705);

(statearr_43720_43746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43710 === (3))){
var inst_43707 = (state_43709[(2)]);
var state_43709__$1 = state_43709;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43709__$1,inst_43707);
} else {
if((state_val_43710 === (12))){
var inst_43684 = (state_43709[(13)]);
var inst_43693 = cljs.core.first.call(null,inst_43684);
var inst_43694 = (new Worker(worker_script));
var state_43709__$1 = (function (){var statearr_43721 = state_43709;
(statearr_43721[(14)] = inst_43693);

return statearr_43721;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43709__$1,(14),servant_channel,inst_43694);
} else {
if((state_val_43710 === (2))){
var inst_43671 = (state_43709[(9)]);
var inst_43672 = (state_43709[(10)]);
var inst_43674 = (inst_43672 < inst_43671);
var inst_43675 = inst_43674;
var state_43709__$1 = state_43709;
if(cljs.core.truth_(inst_43675)){
var statearr_43722_43747 = state_43709__$1;
(statearr_43722_43747[(1)] = (4));

} else {
var statearr_43723_43748 = state_43709__$1;
(statearr_43723_43748[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43710 === (11))){
var inst_43684 = (state_43709[(13)]);
var inst_43688 = cljs.core.chunk_first.call(null,inst_43684);
var inst_43689 = cljs.core.chunk_rest.call(null,inst_43684);
var inst_43690 = cljs.core.count.call(null,inst_43688);
var inst_43669 = inst_43689;
var inst_43670 = inst_43688;
var inst_43671 = inst_43690;
var inst_43672 = (0);
var state_43709__$1 = (function (){var statearr_43724 = state_43709;
(statearr_43724[(7)] = inst_43670);

(statearr_43724[(8)] = inst_43669);

(statearr_43724[(9)] = inst_43671);

(statearr_43724[(10)] = inst_43672);

return statearr_43724;
})();
var statearr_43725_43749 = state_43709__$1;
(statearr_43725_43749[(2)] = null);

(statearr_43725_43749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43710 === (9))){
var state_43709__$1 = state_43709;
var statearr_43726_43750 = state_43709__$1;
(statearr_43726_43750[(2)] = null);

(statearr_43726_43750[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43710 === (5))){
var inst_43669 = (state_43709[(8)]);
var inst_43684 = (state_43709[(13)]);
var inst_43684__$1 = cljs.core.seq.call(null,inst_43669);
var state_43709__$1 = (function (){var statearr_43727 = state_43709;
(statearr_43727[(13)] = inst_43684__$1);

return statearr_43727;
})();
if(inst_43684__$1){
var statearr_43728_43751 = state_43709__$1;
(statearr_43728_43751[(1)] = (8));

} else {
var statearr_43729_43752 = state_43709__$1;
(statearr_43729_43752[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43710 === (14))){
var inst_43684 = (state_43709[(13)]);
var inst_43696 = (state_43709[(2)]);
var inst_43697 = cljs.core.next.call(null,inst_43684);
var inst_43669 = inst_43697;
var inst_43670 = null;
var inst_43671 = (0);
var inst_43672 = (0);
var state_43709__$1 = (function (){var statearr_43730 = state_43709;
(statearr_43730[(15)] = inst_43696);

(statearr_43730[(7)] = inst_43670);

(statearr_43730[(8)] = inst_43669);

(statearr_43730[(9)] = inst_43671);

(statearr_43730[(10)] = inst_43672);

return statearr_43730;
})();
var statearr_43731_43753 = state_43709__$1;
(statearr_43731_43753[(2)] = null);

(statearr_43731_43753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43710 === (10))){
var inst_43703 = (state_43709[(2)]);
var state_43709__$1 = state_43709;
var statearr_43732_43754 = state_43709__$1;
(statearr_43732_43754[(2)] = inst_43703);

(statearr_43732_43754[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43710 === (8))){
var inst_43684 = (state_43709[(13)]);
var inst_43686 = cljs.core.chunked_seq_QMARK_.call(null,inst_43684);
var state_43709__$1 = state_43709;
if(inst_43686){
var statearr_43733_43755 = state_43709__$1;
(statearr_43733_43755[(1)] = (11));

} else {
var statearr_43734_43756 = state_43709__$1;
(statearr_43734_43756[(1)] = (12));

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
});})(c__19849__auto___43742,servant_channel))
;
return ((function (switch__19828__auto__,c__19849__auto___43742,servant_channel){
return (function() {
var servant$core$spawn_servants_$_state_machine__19829__auto__ = null;
var servant$core$spawn_servants_$_state_machine__19829__auto____0 = (function (){
var statearr_43738 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43738[(0)] = servant$core$spawn_servants_$_state_machine__19829__auto__);

(statearr_43738[(1)] = (1));

return statearr_43738;
});
var servant$core$spawn_servants_$_state_machine__19829__auto____1 = (function (state_43709){
while(true){
var ret_value__19830__auto__ = (function (){try{while(true){
var result__19831__auto__ = switch__19828__auto__.call(null,state_43709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19831__auto__;
}
break;
}
}catch (e43739){if((e43739 instanceof Object)){
var ex__19832__auto__ = e43739;
var statearr_43740_43757 = state_43709;
(statearr_43740_43757[(5)] = ex__19832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43758 = state_43709;
state_43709 = G__43758;
continue;
} else {
return ret_value__19830__auto__;
}
break;
}
});
servant$core$spawn_servants_$_state_machine__19829__auto__ = function(state_43709){
switch(arguments.length){
case 0:
return servant$core$spawn_servants_$_state_machine__19829__auto____0.call(this);
case 1:
return servant$core$spawn_servants_$_state_machine__19829__auto____1.call(this,state_43709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
servant$core$spawn_servants_$_state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$0 = servant$core$spawn_servants_$_state_machine__19829__auto____0;
servant$core$spawn_servants_$_state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$1 = servant$core$spawn_servants_$_state_machine__19829__auto____1;
return servant$core$spawn_servants_$_state_machine__19829__auto__;
})()
;})(switch__19828__auto__,c__19849__auto___43742,servant_channel))
})();
var state__19851__auto__ = (function (){var statearr_43741 = f__19850__auto__.call(null);
(statearr_43741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19849__auto___43742);

return statearr_43741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19851__auto__);
});})(c__19849__auto___43742,servant_channel))
);


return servant_channel;
});
/**
 * Kills worker-count # of workers
 */
servant.core.kill_servants = (function servant$core$kill_servants(servant_channel,worker_count){
var c__19849__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19849__auto__){
return (function (){
var f__19850__auto__ = (function (){var switch__19828__auto__ = ((function (c__19849__auto__){
return (function (state_43884){
var state_val_43885 = (state_43884[(1)]);
if((state_val_43885 === (7))){
var inst_43845 = (state_43884[(7)]);
var inst_43844 = (state_43884[(8)]);
var inst_43846 = (state_43884[(9)]);
var inst_43847 = (state_43884[(10)]);
var inst_43854 = (state_43884[(2)]);
var inst_43855 = inst_43854.terminate();
var inst_43856 = (inst_43847 + (1));
var tmp43886 = inst_43845;
var tmp43887 = inst_43844;
var tmp43888 = inst_43846;
var inst_43844__$1 = tmp43887;
var inst_43845__$1 = tmp43886;
var inst_43846__$1 = tmp43888;
var inst_43847__$1 = inst_43856;
var state_43884__$1 = (function (){var statearr_43889 = state_43884;
(statearr_43889[(7)] = inst_43845__$1);

(statearr_43889[(12)] = inst_43855);

(statearr_43889[(8)] = inst_43844__$1);

(statearr_43889[(9)] = inst_43846__$1);

(statearr_43889[(10)] = inst_43847__$1);

return statearr_43889;
})();
var statearr_43890_43917 = state_43884__$1;
(statearr_43890_43917[(2)] = null);

(statearr_43890_43917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43885 === (1))){
var inst_43842 = cljs.core.range.call(null,worker_count);
var inst_43843 = cljs.core.seq.call(null,inst_43842);
var inst_43844 = inst_43843;
var inst_43845 = null;
var inst_43846 = (0);
var inst_43847 = (0);
var state_43884__$1 = (function (){var statearr_43891 = state_43884;
(statearr_43891[(7)] = inst_43845);

(statearr_43891[(8)] = inst_43844);

(statearr_43891[(9)] = inst_43846);

(statearr_43891[(10)] = inst_43847);

return statearr_43891;
})();
var statearr_43892_43918 = state_43884__$1;
(statearr_43892_43918[(2)] = null);

(statearr_43892_43918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43885 === (4))){
var inst_43845 = (state_43884[(7)]);
var inst_43847 = (state_43884[(10)]);
var inst_43852 = cljs.core._nth.call(null,inst_43845,inst_43847);
var state_43884__$1 = (function (){var statearr_43893 = state_43884;
(statearr_43893[(11)] = inst_43852);

return statearr_43893;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43884__$1,(7),servant_channel);
} else {
if((state_val_43885 === (13))){
var inst_43875 = (state_43884[(2)]);
var state_43884__$1 = state_43884;
var statearr_43894_43919 = state_43884__$1;
(statearr_43894_43919[(2)] = inst_43875);

(statearr_43894_43919[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43885 === (6))){
var inst_43880 = (state_43884[(2)]);
var state_43884__$1 = state_43884;
var statearr_43895_43920 = state_43884__$1;
(statearr_43895_43920[(2)] = inst_43880);

(statearr_43895_43920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43885 === (3))){
var inst_43882 = (state_43884[(2)]);
var state_43884__$1 = state_43884;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43884__$1,inst_43882);
} else {
if((state_val_43885 === (12))){
var inst_43859 = (state_43884[(13)]);
var inst_43868 = cljs.core.first.call(null,inst_43859);
var state_43884__$1 = (function (){var statearr_43896 = state_43884;
(statearr_43896[(14)] = inst_43868);

return statearr_43896;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43884__$1,(14),servant_channel);
} else {
if((state_val_43885 === (2))){
var inst_43846 = (state_43884[(9)]);
var inst_43847 = (state_43884[(10)]);
var inst_43849 = (inst_43847 < inst_43846);
var inst_43850 = inst_43849;
var state_43884__$1 = state_43884;
if(cljs.core.truth_(inst_43850)){
var statearr_43897_43921 = state_43884__$1;
(statearr_43897_43921[(1)] = (4));

} else {
var statearr_43898_43922 = state_43884__$1;
(statearr_43898_43922[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43885 === (11))){
var inst_43859 = (state_43884[(13)]);
var inst_43863 = cljs.core.chunk_first.call(null,inst_43859);
var inst_43864 = cljs.core.chunk_rest.call(null,inst_43859);
var inst_43865 = cljs.core.count.call(null,inst_43863);
var inst_43844 = inst_43864;
var inst_43845 = inst_43863;
var inst_43846 = inst_43865;
var inst_43847 = (0);
var state_43884__$1 = (function (){var statearr_43899 = state_43884;
(statearr_43899[(7)] = inst_43845);

(statearr_43899[(8)] = inst_43844);

(statearr_43899[(9)] = inst_43846);

(statearr_43899[(10)] = inst_43847);

return statearr_43899;
})();
var statearr_43900_43923 = state_43884__$1;
(statearr_43900_43923[(2)] = null);

(statearr_43900_43923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43885 === (9))){
var state_43884__$1 = state_43884;
var statearr_43901_43924 = state_43884__$1;
(statearr_43901_43924[(2)] = null);

(statearr_43901_43924[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43885 === (5))){
var inst_43859 = (state_43884[(13)]);
var inst_43844 = (state_43884[(8)]);
var inst_43859__$1 = cljs.core.seq.call(null,inst_43844);
var state_43884__$1 = (function (){var statearr_43902 = state_43884;
(statearr_43902[(13)] = inst_43859__$1);

return statearr_43902;
})();
if(inst_43859__$1){
var statearr_43903_43925 = state_43884__$1;
(statearr_43903_43925[(1)] = (8));

} else {
var statearr_43904_43926 = state_43884__$1;
(statearr_43904_43926[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43885 === (14))){
var inst_43859 = (state_43884[(13)]);
var inst_43870 = (state_43884[(2)]);
var inst_43871 = inst_43870.terminate();
var inst_43872 = cljs.core.next.call(null,inst_43859);
var inst_43844 = inst_43872;
var inst_43845 = null;
var inst_43846 = (0);
var inst_43847 = (0);
var state_43884__$1 = (function (){var statearr_43905 = state_43884;
(statearr_43905[(15)] = inst_43871);

(statearr_43905[(7)] = inst_43845);

(statearr_43905[(8)] = inst_43844);

(statearr_43905[(9)] = inst_43846);

(statearr_43905[(10)] = inst_43847);

return statearr_43905;
})();
var statearr_43906_43927 = state_43884__$1;
(statearr_43906_43927[(2)] = null);

(statearr_43906_43927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43885 === (10))){
var inst_43878 = (state_43884[(2)]);
var state_43884__$1 = state_43884;
var statearr_43907_43928 = state_43884__$1;
(statearr_43907_43928[(2)] = inst_43878);

(statearr_43907_43928[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43885 === (8))){
var inst_43859 = (state_43884[(13)]);
var inst_43861 = cljs.core.chunked_seq_QMARK_.call(null,inst_43859);
var state_43884__$1 = state_43884;
if(inst_43861){
var statearr_43908_43929 = state_43884__$1;
(statearr_43908_43929[(1)] = (11));

} else {
var statearr_43909_43930 = state_43884__$1;
(statearr_43909_43930[(1)] = (12));

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
});})(c__19849__auto__))
;
return ((function (switch__19828__auto__,c__19849__auto__){
return (function() {
var servant$core$kill_servants_$_state_machine__19829__auto__ = null;
var servant$core$kill_servants_$_state_machine__19829__auto____0 = (function (){
var statearr_43913 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43913[(0)] = servant$core$kill_servants_$_state_machine__19829__auto__);

(statearr_43913[(1)] = (1));

return statearr_43913;
});
var servant$core$kill_servants_$_state_machine__19829__auto____1 = (function (state_43884){
while(true){
var ret_value__19830__auto__ = (function (){try{while(true){
var result__19831__auto__ = switch__19828__auto__.call(null,state_43884);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19831__auto__;
}
break;
}
}catch (e43914){if((e43914 instanceof Object)){
var ex__19832__auto__ = e43914;
var statearr_43915_43931 = state_43884;
(statearr_43915_43931[(5)] = ex__19832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43884);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43914;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43932 = state_43884;
state_43884 = G__43932;
continue;
} else {
return ret_value__19830__auto__;
}
break;
}
});
servant$core$kill_servants_$_state_machine__19829__auto__ = function(state_43884){
switch(arguments.length){
case 0:
return servant$core$kill_servants_$_state_machine__19829__auto____0.call(this);
case 1:
return servant$core$kill_servants_$_state_machine__19829__auto____1.call(this,state_43884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
servant$core$kill_servants_$_state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$0 = servant$core$kill_servants_$_state_machine__19829__auto____0;
servant$core$kill_servants_$_state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$1 = servant$core$kill_servants_$_state_machine__19829__auto____1;
return servant$core$kill_servants_$_state_machine__19829__auto__;
})()
;})(switch__19828__auto__,c__19849__auto__))
})();
var state__19851__auto__ = (function (){var statearr_43916 = f__19850__auto__.call(null);
(statearr_43916[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19849__auto__);

return statearr_43916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19851__auto__);
});})(c__19849__auto__))
);

return c__19849__auto__;
});
servant.core.f__GT_key = (function servant$core$f__GT_key(f){
return cljs.core.ffirst.call(null,cljs.core.filter.call(null,(function (p1__43933_SHARP_){
return cljs.core._EQ_.call(null,f,cljs.core.second.call(null,p1__43933_SHARP_));
}),cljs.core.deref.call(null,servant.worker.worker_fn_map)));
});
servant.core.standard_message = (function servant$core$standard_message(worker,fn_key,args){
return worker.postMessage((function (){var obj43937 = {"command":"channel","fn":fn_key,"args":cljs.core.clj__GT_js.call(null,args)};
return obj43937;
})());
});
/**
 * Post message by transferring context of the arraybuffers.
 *   The channel should be fed data like [[normal args] [arraybuffer1 arraybuffer2]].
 *   Tells the worker to expect to return an arraybuffer
 */
servant.core.array_buffer_message = (function servant$core$array_buffer_message(worker,fn_key,args){
var vec__43941 = args;
var args__$1 = cljs.core.nth.call(null,vec__43941,(0),null);
var arraybuffers = cljs.core.nth.call(null,vec__43941,(1),null);
return worker.postMessage((function (){var obj43943 = {"command":"channel-arraybuffer","fn":fn_key,"args":cljs.core.clj__GT_js.call(null,args__$1)};
return obj43943;
})(),cljs.core.clj__GT_js.call(null,arraybuffers));
});
/**
 * Post message by transferring context of the arraybuffers.
 *   The channel should be fed data like [[arg1 arg2] [arraybuffer1 arraybuffer2]].
 *   Tells the worker to return normal data
 */
servant.core.array_buffer_message_standard_reply = (function servant$core$array_buffer_message_standard_reply(worker,fn_key,args){
var vec__43947 = args;
var args__$1 = cljs.core.nth.call(null,vec__43947,(0),null);
var arraybuffers = cljs.core.nth.call(null,vec__43947,(1),null);
return worker.postMessage((function (){var obj43949 = {"command":"channel","fn":fn_key,"args":cljs.core.clj__GT_js.call(null,args__$1)};
return obj43949;
})(),cljs.core.clj__GT_js.call(null,arraybuffers));
});
servant.core.servant_thread_with_key = (function servant$core$servant_thread_with_key(var_args){
var args__18590__auto__ = [];
var len__18583__auto___43988 = arguments.length;
var i__18584__auto___43989 = (0);
while(true){
if((i__18584__auto___43989 < len__18583__auto___43988)){
args__18590__auto__.push((arguments[i__18584__auto___43989]));

var G__43990 = (i__18584__auto___43989 + (1));
i__18584__auto___43989 = G__43990;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((3) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((3)),(0))):null);
return servant.core.servant_thread_with_key.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__18591__auto__);
});

servant.core.servant_thread_with_key.cljs$core$IFn$_invoke$arity$variadic = (function (servant_channel,post_message_fn,fn_key,args){
var out_channel = cljs.core.async.chan.call(null,(1));
var c__19849__auto___43991 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19849__auto___43991,out_channel){
return (function (){
var f__19850__auto__ = (function (){var switch__19828__auto__ = ((function (c__19849__auto___43991,out_channel){
return (function (state_43962){
var state_val_43963 = (state_43962[(1)]);
if((state_val_43963 === (1))){
var state_43962__$1 = state_43962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43962__$1,(2),servant_channel);
} else {
if((state_val_43963 === (2))){
var inst_43956 = (state_43962[(2)]);
var inst_43957 = cljs.core.pr_str.call(null,fn_key);
var inst_43958 = post_message_fn.call(null,inst_43956,inst_43957,args);
var inst_43959 = (function (){var worker = inst_43956;
return ((function (worker,inst_43956,inst_43957,inst_43958,state_val_43963,c__19849__auto___43991,out_channel){
return (function (p1__43950_SHARP_){
var c__19849__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19849__auto____$1,worker,inst_43956,inst_43957,inst_43958,state_val_43963,c__19849__auto___43991,out_channel){
return (function (){
var f__19850__auto__ = (function (){var switch__19828__auto__ = ((function (c__19849__auto____$1,worker,inst_43956,inst_43957,inst_43958,state_val_43963,c__19849__auto___43991,out_channel){
return (function (state_43970){
var state_val_43971 = (state_43970[(1)]);
if((state_val_43971 === (1))){
var inst_43964 = p1__43950_SHARP_.data;
var state_43970__$1 = state_43970;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43970__$1,(2),out_channel,inst_43964);
} else {
if((state_val_43971 === (2))){
var inst_43966 = (state_43970[(2)]);
var state_43970__$1 = (function (){var statearr_43972 = state_43970;
(statearr_43972[(7)] = inst_43966);

return statearr_43972;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43970__$1,(3),servant_channel,worker);
} else {
if((state_val_43971 === (3))){
var inst_43968 = (state_43970[(2)]);
var state_43970__$1 = state_43970;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43970__$1,inst_43968);
} else {
return null;
}
}
}
});})(c__19849__auto____$1,worker,inst_43956,inst_43957,inst_43958,state_val_43963,c__19849__auto___43991,out_channel))
;
return ((function (switch__19828__auto__,c__19849__auto____$1,worker,inst_43956,inst_43957,inst_43958,state_val_43963,c__19849__auto___43991,out_channel){
return (function() {
var servant$core$state_machine__19829__auto__ = null;
var servant$core$state_machine__19829__auto____0 = (function (){
var statearr_43976 = [null,null,null,null,null,null,null,null];
(statearr_43976[(0)] = servant$core$state_machine__19829__auto__);

(statearr_43976[(1)] = (1));

return statearr_43976;
});
var servant$core$state_machine__19829__auto____1 = (function (state_43970){
while(true){
var ret_value__19830__auto__ = (function (){try{while(true){
var result__19831__auto__ = switch__19828__auto__.call(null,state_43970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19831__auto__;
}
break;
}
}catch (e43977){if((e43977 instanceof Object)){
var ex__19832__auto__ = e43977;
var statearr_43978_43992 = state_43970;
(statearr_43978_43992[(5)] = ex__19832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43993 = state_43970;
state_43970 = G__43993;
continue;
} else {
return ret_value__19830__auto__;
}
break;
}
});
servant$core$state_machine__19829__auto__ = function(state_43970){
switch(arguments.length){
case 0:
return servant$core$state_machine__19829__auto____0.call(this);
case 1:
return servant$core$state_machine__19829__auto____1.call(this,state_43970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
servant$core$state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$0 = servant$core$state_machine__19829__auto____0;
servant$core$state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$1 = servant$core$state_machine__19829__auto____1;
return servant$core$state_machine__19829__auto__;
})()
;})(switch__19828__auto__,c__19849__auto____$1,worker,inst_43956,inst_43957,inst_43958,state_val_43963,c__19849__auto___43991,out_channel))
})();
var state__19851__auto__ = (function (){var statearr_43979 = f__19850__auto__.call(null);
(statearr_43979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19849__auto____$1);

return statearr_43979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19851__auto__);
});})(c__19849__auto____$1,worker,inst_43956,inst_43957,inst_43958,state_val_43963,c__19849__auto___43991,out_channel))
);

return c__19849__auto____$1;
});
;})(worker,inst_43956,inst_43957,inst_43958,state_val_43963,c__19849__auto___43991,out_channel))
})();
var inst_43960 = inst_43956.addEventListener("message",inst_43959);
var state_43962__$1 = (function (){var statearr_43980 = state_43962;
(statearr_43980[(7)] = inst_43958);

return statearr_43980;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43962__$1,inst_43960);
} else {
return null;
}
}
});})(c__19849__auto___43991,out_channel))
;
return ((function (switch__19828__auto__,c__19849__auto___43991,out_channel){
return (function() {
var servant$core$state_machine__19829__auto__ = null;
var servant$core$state_machine__19829__auto____0 = (function (){
var statearr_43984 = [null,null,null,null,null,null,null,null];
(statearr_43984[(0)] = servant$core$state_machine__19829__auto__);

(statearr_43984[(1)] = (1));

return statearr_43984;
});
var servant$core$state_machine__19829__auto____1 = (function (state_43962){
while(true){
var ret_value__19830__auto__ = (function (){try{while(true){
var result__19831__auto__ = switch__19828__auto__.call(null,state_43962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19831__auto__;
}
break;
}
}catch (e43985){if((e43985 instanceof Object)){
var ex__19832__auto__ = e43985;
var statearr_43986_43994 = state_43962;
(statearr_43986_43994[(5)] = ex__19832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43985;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43995 = state_43962;
state_43962 = G__43995;
continue;
} else {
return ret_value__19830__auto__;
}
break;
}
});
servant$core$state_machine__19829__auto__ = function(state_43962){
switch(arguments.length){
case 0:
return servant$core$state_machine__19829__auto____0.call(this);
case 1:
return servant$core$state_machine__19829__auto____1.call(this,state_43962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
servant$core$state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$0 = servant$core$state_machine__19829__auto____0;
servant$core$state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$1 = servant$core$state_machine__19829__auto____1;
return servant$core$state_machine__19829__auto__;
})()
;})(switch__19828__auto__,c__19849__auto___43991,out_channel))
})();
var state__19851__auto__ = (function (){var statearr_43987 = f__19850__auto__.call(null);
(statearr_43987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19849__auto___43991);

return statearr_43987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19851__auto__);
});})(c__19849__auto___43991,out_channel))
);


return out_channel;
});

servant.core.servant_thread_with_key.cljs$lang$maxFixedArity = (3);

servant.core.servant_thread_with_key.cljs$lang$applyTo = (function (seq43951){
var G__43952 = cljs.core.first.call(null,seq43951);
var seq43951__$1 = cljs.core.next.call(null,seq43951);
var G__43953 = cljs.core.first.call(null,seq43951__$1);
var seq43951__$2 = cljs.core.next.call(null,seq43951__$1);
var G__43954 = cljs.core.first.call(null,seq43951__$2);
var seq43951__$3 = cljs.core.next.call(null,seq43951__$2);
return servant.core.servant_thread_with_key.cljs$core$IFn$_invoke$arity$variadic(G__43952,G__43953,G__43954,seq43951__$3);
});
servant.core.servant_thread = (function servant$core$servant_thread(var_args){
var args__18590__auto__ = [];
var len__18583__auto___44000 = arguments.length;
var i__18584__auto___44001 = (0);
while(true){
if((i__18584__auto___44001 < len__18583__auto___44000)){
args__18590__auto__.push((arguments[i__18584__auto___44001]));

var G__44002 = (i__18584__auto___44001 + (1));
i__18584__auto___44001 = G__44002;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((3) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((3)),(0))):null);
return servant.core.servant_thread.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__18591__auto__);
});

servant.core.servant_thread.cljs$core$IFn$_invoke$arity$variadic = (function (servant_channel,post_message_fn,f,args){
return cljs.core.apply.call(null,servant.core.servant_thread_with_key,servant_channel,post_message_fn,servant.core.f__GT_key.call(null,f),args);
});

servant.core.servant_thread.cljs$lang$maxFixedArity = (3);

servant.core.servant_thread.cljs$lang$applyTo = (function (seq43996){
var G__43997 = cljs.core.first.call(null,seq43996);
var seq43996__$1 = cljs.core.next.call(null,seq43996);
var G__43998 = cljs.core.first.call(null,seq43996__$1);
var seq43996__$2 = cljs.core.next.call(null,seq43996__$1);
var G__43999 = cljs.core.first.call(null,seq43996__$2);
var seq43996__$3 = cljs.core.next.call(null,seq43996__$2);
return servant.core.servant_thread.cljs$core$IFn$_invoke$arity$variadic(G__43997,G__43998,G__43999,seq43996__$3);
});

//# sourceMappingURL=core.js.map?rel=1452702572507