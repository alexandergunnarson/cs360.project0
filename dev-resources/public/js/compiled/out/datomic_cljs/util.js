// Compiled by ClojureScript 1.7.170 {}
goog.provide('datomic_cljs.util');
goog.require('cljs.core');
goog.require('cljs.core.async');
/**
 * Returns a closed core.async channel containing only element.
 */
datomic_cljs.util.singleton_chan = (function datomic_cljs$util$singleton_chan(element){
var c = cljs.core.async.chan.call(null,(1));
cljs.core.async.put_BANG_.call(null,c,element,((function (c){
return (function (){
return cljs.core.async.close_BANG_.call(null,c);
});})(c))
);

return c;
});

//# sourceMappingURL=util.js.map?rel=1452702580388