// Compiled by ClojureScript 1.7.170 {}
goog.provide('servant.worker');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.reader');
servant.worker.worker_fn_map = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
servant.worker.register_servant_fn = (function servant$worker$register_servant_fn(fn_name,f){
return cljs.core.swap_BANG_.call(null,servant.worker.worker_fn_map,cljs.core.assoc,cljs.core.keyword.call(null,fn_name),f);
});
servant.worker.run_function_name = (function servant$worker$run_function_name(message_data){
var fn_key = cljs.reader.read_string.call(null,(message_data["fn"]));
var f = cljs.core.get.call(null,cljs.core.deref.call(null,servant.worker.worker_fn_map),fn_key);
var args = (message_data["args"]);
return cljs.core.apply.call(null,f,args);
});
/**
 * In order to send back an array buffer, your function should return 
 *   a vector with the result as the first item and the arraybuffers to transfer as the second.
 *   an array of array buffers
 */
servant.worker.post_array_buffer = (function servant$worker$post_array_buffer(p__43573){
var vec__43575 = p__43573;
var result = cljs.core.nth.call(null,vec__43575,(0),null);
var arraybuffers = cljs.core.nth.call(null,vec__43575,(1),null);
return self.postMessage(result,cljs.core.clj__GT_js.call(null,arraybuffers));
});
servant.worker.decode_message = (function servant$worker$decode_message(event){
var pred__43579 = cljs.core._EQ_;
var expr__43580 = (event.data["command"]);
if(cljs.core.truth_(pred__43579.call(null,"channel",expr__43580))){
return self.postMessage(servant.worker.run_function_name.call(null,event.data));
} else {
if(cljs.core.truth_(pred__43579.call(null,"channel-arraybuffer",expr__43580))){
return servant.worker.post_array_buffer.call(null,servant.worker.run_function_name.call(null,event.data));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__43580)].join('')));
}
}
});
servant.worker.bootstrap = (function servant$worker$bootstrap(){
return self.onmessage = servant.worker.decode_message;
});

//# sourceMappingURL=worker.js.map?rel=1452702572267