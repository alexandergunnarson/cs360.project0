// Compiled by ClojureScript 1.7.170 {}
goog.provide('quantum.core.convert');
goog.require('cljs.core');
goog.require('datascript.transit');
goog.require('datascript.core');
quantum.core.convert.__GT_name = (function quantum$core$convert$__GT_name(x){
if(typeof x === 'string'){
return cljs.core.name.call(null,x);
} else {
if((x instanceof cljs.core.Symbol)){
return cljs.core.name.call(null,x);
} else {
if((x instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,x);
} else {
return [cljs.core.str(x)].join('');

}
}
}
});
quantum.core.convert.__GT_symbol = (function quantum$core$convert$__GT_symbol(x){
if(typeof x === 'string'){
return cljs.core.symbol.call(null,x);
} else {
return quantum$core$convert$__GT_symbol.call(null,quantum.core.convert.__GT_name.call(null,x));

}
});
quantum.core.convert.__GT_str = (function quantum$core$convert$__GT_str(x){
if((x instanceof datascript.db.DB)){
return datascript.transit.write_transit_str.call(null,x);
} else {
return [cljs.core.str(x)].join('');

}
});
quantum.core.convert.__GT_mdb = (function quantum$core$convert$__GT_mdb(x){
if(typeof x === 'string'){
return datascript.transit.read_transit_str.call(null,x);
} else {
return null;
}
});

//# sourceMappingURL=convert.js.map?rel=1452702580375