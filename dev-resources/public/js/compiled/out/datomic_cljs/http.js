// Compiled by ClojureScript 1.7.170 {}
goog.provide('datomic_cljs.http');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('clojure.string');
datomic_cljs.http.node_context_QMARK_ = (typeof exports !== 'undefined') && (cljs.core.not_EQ_.call(null,exports,(function (){var context = this;
return context.exports;
})()));
datomic_cljs.http.urlencode_kvs = (function datomic_cljs$http$urlencode_kvs(kvs){
return clojure.string.join.call(null,"&",(function (){var iter__18297__auto__ = (function datomic_cljs$http$urlencode_kvs_$_iter__46172(s__46173){
return (new cljs.core.LazySeq(null,(function (){
var s__46173__$1 = s__46173;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__46173__$1);
if(temp__4425__auto__){
var s__46173__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__46173__$2)){
var c__18295__auto__ = cljs.core.chunk_first.call(null,s__46173__$2);
var size__18296__auto__ = cljs.core.count.call(null,c__18295__auto__);
var b__46175 = cljs.core.chunk_buffer.call(null,size__18296__auto__);
if((function (){var i__46174 = (0);
while(true){
if((i__46174 < size__18296__auto__)){
var vec__46178 = cljs.core._nth.call(null,c__18295__auto__,i__46174);
var k = cljs.core.nth.call(null,vec__46178,(0),null);
var v = cljs.core.nth.call(null,vec__46178,(1),null);
if(!((v == null))){
cljs.core.chunk_append.call(null,b__46175,[cljs.core.str(encodeURIComponent(cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(encodeURIComponent(v))].join(''));

var G__46180 = (i__46174 + (1));
i__46174 = G__46180;
continue;
} else {
var G__46181 = (i__46174 + (1));
i__46174 = G__46181;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46175),datomic_cljs$http$urlencode_kvs_$_iter__46172.call(null,cljs.core.chunk_rest.call(null,s__46173__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46175),null);
}
} else {
var vec__46179 = cljs.core.first.call(null,s__46173__$2);
var k = cljs.core.nth.call(null,vec__46179,(0),null);
var v = cljs.core.nth.call(null,vec__46179,(1),null);
if(!((v == null))){
return cljs.core.cons.call(null,[cljs.core.str(encodeURIComponent(cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(encodeURIComponent(v))].join(''),datomic_cljs$http$urlencode_kvs_$_iter__46172.call(null,cljs.core.rest.call(null,s__46173__$2)));
} else {
var G__46182 = cljs.core.rest.call(null,s__46173__$2);
s__46173__$1 = G__46182;
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
return iter__18297__auto__.call(null,kvs);
})());
});
datomic_cljs.http.urlencode_qs = (function datomic_cljs$http$urlencode_qs(qs_kvs){
return [cljs.core.str("?"),cljs.core.str(datomic_cljs.http.urlencode_kvs.call(null,qs_kvs))].join('');
});
datomic_cljs.http.parse_headers = (function datomic_cljs$http$parse_headers(header_str){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__18297__auto__ = (function datomic_cljs$http$parse_headers_$_iter__46195(s__46196){
return (new cljs.core.LazySeq(null,(function (){
var s__46196__$1 = s__46196;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__46196__$1);
if(temp__4425__auto__){
var s__46196__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__46196__$2)){
var c__18295__auto__ = cljs.core.chunk_first.call(null,s__46196__$2);
var size__18296__auto__ = cljs.core.count.call(null,c__18295__auto__);
var b__46198 = cljs.core.chunk_buffer.call(null,size__18296__auto__);
if((function (){var i__46197 = (0);
while(true){
if((i__46197 < size__18296__auto__)){
var header = cljs.core._nth.call(null,c__18295__auto__,i__46197);
var vec__46203 = clojure.string.split.call(null,header,/:/);
var k = cljs.core.nth.call(null,vec__46203,(0),null);
var v = cljs.core.nth.call(null,vec__46203,(1),null);
var vec__46204 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.trim.call(null,k),clojure.string.trim.call(null,v)], null);
var k__$1 = cljs.core.nth.call(null,vec__46204,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__46204,(1),null);
cljs.core.chunk_append.call(null,b__46198,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,clojure.string.lower_case.call(null,k__$1)),v__$1], null));

var G__46207 = (i__46197 + (1));
i__46197 = G__46207;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46198),datomic_cljs$http$parse_headers_$_iter__46195.call(null,cljs.core.chunk_rest.call(null,s__46196__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46198),null);
}
} else {
var header = cljs.core.first.call(null,s__46196__$2);
var vec__46205 = clojure.string.split.call(null,header,/:/);
var k = cljs.core.nth.call(null,vec__46205,(0),null);
var v = cljs.core.nth.call(null,vec__46205,(1),null);
var vec__46206 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.trim.call(null,k),clojure.string.trim.call(null,v)], null);
var k__$1 = cljs.core.nth.call(null,vec__46206,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__46206,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,clojure.string.lower_case.call(null,k__$1)),v__$1], null),datomic_cljs$http$parse_headers_$_iter__46195.call(null,cljs.core.rest.call(null,s__46196__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__18297__auto__.call(null,clojure.string.split_lines.call(null,header_str));
})());
});
datomic_cljs.http.browser_request = (function datomic_cljs$http$browser_request(p__46208,callback){
var map__46217 = p__46208;
var map__46217__$1 = ((((!((map__46217 == null)))?((((map__46217.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46217.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46217):map__46217);
var opts = map__46217__$1;
var method = cljs.core.get.call(null,map__46217__$1,new cljs.core.Keyword(null,"method","method",55703592),"GET");
var uri = cljs.core.get.call(null,map__46217__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var headers = cljs.core.get.call(null,map__46217__$1,new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY);
var qs = cljs.core.get.call(null,map__46217__$1,new cljs.core.Keyword(null,"qs","qs",-1900687691));
var form = cljs.core.get.call(null,map__46217__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var js_req = (new XMLHttpRequest());
var query_str = (cljs.core.truth_(qs)?datomic_cljs.http.urlencode_qs.call(null,qs):"");
var url = [cljs.core.str(uri),cljs.core.str(query_str)].join('');
var headers__$1 = (cljs.core.truth_(form)?cljs.core.assoc.call(null,headers,"Content-Type","application/x-www-form-urlencoded"):headers);
js_req.addEventListener("load",((function (js_req,query_str,url,headers__$1,map__46217,map__46217__$1,opts,method,uri,headers,qs,form){
return (function (){
js_req.headers = datomic_cljs.http.parse_headers.call(null,js_req.getAllResponseHeaders());

js_req.statusCode = js_req.status;

return callback.call(null,null,js_req,js_req.response);
});})(js_req,query_str,url,headers__$1,map__46217,map__46217__$1,opts,method,uri,headers,qs,form))
);

js_req.addEventListener("error",((function (js_req,query_str,url,headers__$1,map__46217,map__46217__$1,opts,method,uri,headers,qs,form){
return (function (e){
e.preventDefault();

return callback.call(null,e,js_req,null);
});})(js_req,query_str,url,headers__$1,map__46217,map__46217__$1,opts,method,uri,headers,qs,form))
);

js_req.open(method,url,true);

var seq__46219_46225 = cljs.core.seq.call(null,(function (){var or__17525__auto__ = headers__$1;
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
var chunk__46220_46226 = null;
var count__46221_46227 = (0);
var i__46222_46228 = (0);
while(true){
if((i__46222_46228 < count__46221_46227)){
var vec__46223_46229 = cljs.core._nth.call(null,chunk__46220_46226,i__46222_46228);
var k_46230 = cljs.core.nth.call(null,vec__46223_46229,(0),null);
var v_46231 = cljs.core.nth.call(null,vec__46223_46229,(1),null);
js_req.setRequestHeader(cljs.core.name.call(null,k_46230),v_46231);

var G__46232 = seq__46219_46225;
var G__46233 = chunk__46220_46226;
var G__46234 = count__46221_46227;
var G__46235 = (i__46222_46228 + (1));
seq__46219_46225 = G__46232;
chunk__46220_46226 = G__46233;
count__46221_46227 = G__46234;
i__46222_46228 = G__46235;
continue;
} else {
var temp__4425__auto___46236 = cljs.core.seq.call(null,seq__46219_46225);
if(temp__4425__auto___46236){
var seq__46219_46237__$1 = temp__4425__auto___46236;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46219_46237__$1)){
var c__18328__auto___46238 = cljs.core.chunk_first.call(null,seq__46219_46237__$1);
var G__46239 = cljs.core.chunk_rest.call(null,seq__46219_46237__$1);
var G__46240 = c__18328__auto___46238;
var G__46241 = cljs.core.count.call(null,c__18328__auto___46238);
var G__46242 = (0);
seq__46219_46225 = G__46239;
chunk__46220_46226 = G__46240;
count__46221_46227 = G__46241;
i__46222_46228 = G__46242;
continue;
} else {
var vec__46224_46243 = cljs.core.first.call(null,seq__46219_46237__$1);
var k_46244 = cljs.core.nth.call(null,vec__46224_46243,(0),null);
var v_46245 = cljs.core.nth.call(null,vec__46224_46243,(1),null);
js_req.setRequestHeader(cljs.core.name.call(null,k_46244),v_46245);

var G__46246 = cljs.core.next.call(null,seq__46219_46237__$1);
var G__46247 = null;
var G__46248 = (0);
var G__46249 = (0);
seq__46219_46225 = G__46246;
chunk__46220_46226 = G__46247;
count__46221_46227 = G__46248;
i__46222_46228 = G__46249;
continue;
}
} else {
}
}
break;
}

js_req.responseType = "text";

if(cljs.core.truth_(form)){
return js_req.send(datomic_cljs.http.urlencode_kvs.call(null,form));
} else {
return js_req.send();
}
});
datomic_cljs.http.js_request = null;
if(cljs.core.truth_(datomic_cljs.http.node_context_QMARK_)){
datomic_cljs.http.js_request = (function (){var req = (function (){try{return require("request");
}catch (e46250){if((e46250 instanceof Error)){
var e = e46250;
console.log("Error: Cannot find module 'request'.\nSee datomic-cljs README for installation and dependency notes.");

return process.exit((1));
} else {
throw e46250;

}
}})();
return ((function (req){
return (function (opts,cb){
return req.call(null,cljs.core.clj__GT_js.call(null,opts),cb);
});
;})(req))
})();
} else {
datomic_cljs.http.js_request = datomic_cljs.http.browser_request;
}
datomic_cljs.http.response_handler = (function datomic_cljs$http$response_handler(c_resp,edn_QMARK_){
return (function (err,resp,body){
return cljs.core.async.put_BANG_.call(null,c_resp,(function (){var or__17525__auto__ = err;
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
var headers = cljs.core.js__GT_clj.call(null,resp.headers,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),resp.statusCode,new cljs.core.Keyword(null,"headers","headers",-835030129),headers,new cljs.core.Keyword(null,"body","body",-2049205669),(cljs.core.truth_((function (){var and__17513__auto__ = edn_QMARK_;
if(cljs.core.truth_(and__17513__auto__)){
return cljs.core.re_find.call(null,/edn/,new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(headers));
} else {
return and__17513__auto__;
}
})())?cljs.reader.read_string.call(null,body):body),new cljs.core.Keyword(null,"js-resp","js-resp",-1733799650),resp], null);
}
})(),(function (){
return cljs.core.async.close_BANG_.call(null,c_resp);
}));
});
});
/**
 * Make an async request to the given uri, returning a core.async
 * channel eventually containing either an error or a response map
 * containing the following:
 * 
 *   :status, the HTTP status code;
 *   :headers, a map of HTTP response headers;
 *   :body, the response body;
 *   :js-resp, the original JS response object.
 * 
 * opts is the same options map described in the Request docs:
 * https://github.com/mikeal/request#requestoptions-callback
 * 
 * Additionally, opts supports {:edn true} which sets the Accept
 * header to application/edn and parses the response body as edn
 * if the response content-type is application/edn.
 */
datomic_cljs.http.request = (function datomic_cljs$http$request(var_args){
var args46251 = [];
var len__18583__auto___46257 = arguments.length;
var i__18584__auto___46258 = (0);
while(true){
if((i__18584__auto___46258 < len__18583__auto___46257)){
args46251.push((arguments[i__18584__auto___46258]));

var G__46259 = (i__18584__auto___46258 + (1));
i__18584__auto___46258 = G__46259;
continue;
} else {
}
break;
}

var G__46253 = args46251.length;
switch (G__46253) {
case 2:
return datomic_cljs.http.request.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datomic_cljs.http.request.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46251.length)].join('')));

}
});

datomic_cljs.http.request.cljs$core$IFn$_invoke$arity$2 = (function (method,uri){
return datomic_cljs.http.request.call(null,method,uri,cljs.core.PersistentArrayMap.EMPTY);
});

datomic_cljs.http.request.cljs$core$IFn$_invoke$arity$3 = (function (method,uri,opts){
var c_resp = cljs.core.async.chan.call(null,(1));
var map__46254 = opts;
var map__46254__$1 = ((((!((map__46254 == null)))?((((map__46254.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46254.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46254):map__46254);
var edn_QMARK_ = cljs.core.get.call(null,map__46254__$1,new cljs.core.Keyword(null,"edn","edn",1317840885));
var headers = cljs.core.get.call(null,map__46254__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"method","method",55703592),(function (){var G__46256 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__46256) {
case "get":
return "GET";

break;
case "post":
return "POST";

break;
case "put":
return "PUT";

break;
case "head":
return "HEAD";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(method)].join('')));

}
})(),new cljs.core.Keyword(null,"headers","headers",-835030129),(cljs.core.truth_(edn_QMARK_)?cljs.core.assoc.call(null,(function (){var or__17525__auto__ = headers;
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword(null,"accept","accept",1874130431),"application/edn"):headers));
datomic_cljs.http.js_request.call(null,cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"uri","uri",-774711847),uri),datomic_cljs.http.response_handler.call(null,c_resp,edn_QMARK_));

return c_resp;
});

datomic_cljs.http.request.cljs$lang$maxFixedArity = 3;
/**
 * Expects a response channel, and returns a channel that will
 * eventually contain either the response body (on successful status
 * code) or an error (if the request fails or an unsuccessful status
 * code was returned).
 */
datomic_cljs.http.body = (function datomic_cljs$http$body(c_resp){
var c_body = cljs.core.async.chan.call(null,(1));
var c__19849__auto___46366 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19849__auto___46366,c_body){
return (function (){
var f__19850__auto__ = (function (){var switch__19828__auto__ = ((function (c__19849__auto___46366,c_body){
return (function (state_46343){
var state_val_46344 = (state_46343[(1)]);
if((state_val_46344 === (7))){
var inst_46315 = (state_46343[(7)]);
var inst_46326 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_46315);
var inst_46327 = [cljs.core.str("Unsuccessful HTTP status code returned: "),cljs.core.str(inst_46326)].join('');
var inst_46328 = (new Error(inst_46327));
var state_46343__$1 = state_46343;
var statearr_46345_46367 = state_46343__$1;
(statearr_46345_46367[(2)] = inst_46328);

(statearr_46345_46367[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (1))){
var state_46343__$1 = state_46343;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46343__$1,(2),c_resp);
} else {
if((state_val_46344 === (4))){
var inst_46315 = (state_46343[(7)]);
var state_46343__$1 = state_46343;
var statearr_46346_46368 = state_46343__$1;
(statearr_46346_46368[(2)] = inst_46315);

(statearr_46346_46368[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (6))){
var inst_46338 = (state_46343[(2)]);
var state_46343__$1 = state_46343;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46343__$1,(3),c_body,inst_46338);
} else {
if((state_val_46344 === (3))){
var inst_46340 = (state_46343[(2)]);
var inst_46341 = cljs.core.async.close_BANG_.call(null,c_body);
var state_46343__$1 = (function (){var statearr_46347 = state_46343;
(statearr_46347[(8)] = inst_46340);

return statearr_46347;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46343__$1,inst_46341);
} else {
if((state_val_46344 === (12))){
var inst_46334 = (state_46343[(2)]);
var state_46343__$1 = state_46343;
var statearr_46348_46369 = state_46343__$1;
(statearr_46348_46369[(2)] = inst_46334);

(statearr_46348_46369[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (2))){
var inst_46315 = (state_46343[(7)]);
var inst_46315__$1 = (state_46343[(2)]);
var inst_46316 = (inst_46315__$1 instanceof Error);
var state_46343__$1 = (function (){var statearr_46349 = state_46343;
(statearr_46349[(7)] = inst_46315__$1);

return statearr_46349;
})();
if(cljs.core.truth_(inst_46316)){
var statearr_46350_46370 = state_46343__$1;
(statearr_46350_46370[(1)] = (4));

} else {
var statearr_46351_46371 = state_46343__$1;
(statearr_46351_46371[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (11))){
var state_46343__$1 = state_46343;
var statearr_46352_46372 = state_46343__$1;
(statearr_46352_46372[(2)] = null);

(statearr_46352_46372[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (9))){
var inst_46336 = (state_46343[(2)]);
var state_46343__$1 = state_46343;
var statearr_46353_46373 = state_46343__$1;
(statearr_46353_46373[(2)] = inst_46336);

(statearr_46353_46373[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (5))){
var inst_46315 = (state_46343[(7)]);
var inst_46319 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_46315);
var inst_46320 = ((200) <= inst_46319);
var inst_46321 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_46315);
var inst_46322 = (inst_46321 <= (299));
var inst_46323 = (inst_46320) && (inst_46322);
var inst_46324 = cljs.core.not.call(null,inst_46323);
var state_46343__$1 = state_46343;
if(inst_46324){
var statearr_46354_46374 = state_46343__$1;
(statearr_46354_46374[(1)] = (7));

} else {
var statearr_46355_46375 = state_46343__$1;
(statearr_46355_46375[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (10))){
var inst_46315 = (state_46343[(7)]);
var inst_46331 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_46315);
var state_46343__$1 = state_46343;
var statearr_46356_46376 = state_46343__$1;
(statearr_46356_46376[(2)] = inst_46331);

(statearr_46356_46376[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (8))){
var state_46343__$1 = state_46343;
var statearr_46357_46377 = state_46343__$1;
(statearr_46357_46377[(1)] = (10));



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
});})(c__19849__auto___46366,c_body))
;
return ((function (switch__19828__auto__,c__19849__auto___46366,c_body){
return (function() {
var datomic_cljs$http$body_$_state_machine__19829__auto__ = null;
var datomic_cljs$http$body_$_state_machine__19829__auto____0 = (function (){
var statearr_46362 = [null,null,null,null,null,null,null,null,null];
(statearr_46362[(0)] = datomic_cljs$http$body_$_state_machine__19829__auto__);

(statearr_46362[(1)] = (1));

return statearr_46362;
});
var datomic_cljs$http$body_$_state_machine__19829__auto____1 = (function (state_46343){
while(true){
var ret_value__19830__auto__ = (function (){try{while(true){
var result__19831__auto__ = switch__19828__auto__.call(null,state_46343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19831__auto__;
}
break;
}
}catch (e46363){if((e46363 instanceof Object)){
var ex__19832__auto__ = e46363;
var statearr_46364_46378 = state_46343;
(statearr_46364_46378[(5)] = ex__19832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46363;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46379 = state_46343;
state_46343 = G__46379;
continue;
} else {
return ret_value__19830__auto__;
}
break;
}
});
datomic_cljs$http$body_$_state_machine__19829__auto__ = function(state_46343){
switch(arguments.length){
case 0:
return datomic_cljs$http$body_$_state_machine__19829__auto____0.call(this);
case 1:
return datomic_cljs$http$body_$_state_machine__19829__auto____1.call(this,state_46343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datomic_cljs$http$body_$_state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$0 = datomic_cljs$http$body_$_state_machine__19829__auto____0;
datomic_cljs$http$body_$_state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$1 = datomic_cljs$http$body_$_state_machine__19829__auto____1;
return datomic_cljs$http$body_$_state_machine__19829__auto__;
})()
;})(switch__19828__auto__,c__19849__auto___46366,c_body))
})();
var state__19851__auto__ = (function (){var statearr_46365 = f__19850__auto__.call(null);
(statearr_46365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19849__auto___46366);

return statearr_46365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19851__auto__);
});})(c__19849__auto___46366,c_body))
);


return c_body;
});

//# sourceMappingURL=http.js.map?rel=1452702580550