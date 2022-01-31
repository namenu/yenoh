goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__45984,res){
var map__45986 = p__45984;
var map__45986__$1 = cljs.core.__destructure_map(map__45986);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45986__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45986__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__46001 = res;
var G__46001__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46001,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__46001);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46001__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__46001__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__46007 = arguments.length;
switch (G__46007) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__46011,msg,handlers,timeout_after_ms){
var map__46012 = p__46011;
var map__46012__$1 = cljs.core.__destructure_map(map__46012);
var runtime = map__46012__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46012__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___46331 = arguments.length;
var i__4865__auto___46332 = (0);
while(true){
if((i__4865__auto___46332 < len__4864__auto___46331)){
args__4870__auto__.push((arguments[i__4865__auto___46332]));

var G__46333 = (i__4865__auto___46332 + (1));
i__4865__auto___46332 = G__46333;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__46027,ev,args){
var map__46028 = p__46027;
var map__46028__$1 = cljs.core.__destructure_map(map__46028);
var runtime = map__46028__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46028__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__46029 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__46032 = null;
var count__46033 = (0);
var i__46034 = (0);
while(true){
if((i__46034 < count__46033)){
var ext = chunk__46032.cljs$core$IIndexed$_nth$arity$2(null,i__46034);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__46356 = seq__46029;
var G__46357 = chunk__46032;
var G__46358 = count__46033;
var G__46359 = (i__46034 + (1));
seq__46029 = G__46356;
chunk__46032 = G__46357;
count__46033 = G__46358;
i__46034 = G__46359;
continue;
} else {
var G__46360 = seq__46029;
var G__46361 = chunk__46032;
var G__46362 = count__46033;
var G__46363 = (i__46034 + (1));
seq__46029 = G__46360;
chunk__46032 = G__46361;
count__46033 = G__46362;
i__46034 = G__46363;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46029);
if(temp__5753__auto__){
var seq__46029__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46029__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__46029__$1);
var G__46364 = cljs.core.chunk_rest(seq__46029__$1);
var G__46365 = c__4679__auto__;
var G__46366 = cljs.core.count(c__4679__auto__);
var G__46367 = (0);
seq__46029 = G__46364;
chunk__46032 = G__46365;
count__46033 = G__46366;
i__46034 = G__46367;
continue;
} else {
var ext = cljs.core.first(seq__46029__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__46372 = cljs.core.next(seq__46029__$1);
var G__46373 = null;
var G__46374 = (0);
var G__46375 = (0);
seq__46029 = G__46372;
chunk__46032 = G__46373;
count__46033 = G__46374;
i__46034 = G__46375;
continue;
} else {
var G__46376 = cljs.core.next(seq__46029__$1);
var G__46377 = null;
var G__46378 = (0);
var G__46379 = (0);
seq__46029 = G__46376;
chunk__46032 = G__46377;
count__46033 = G__46378;
i__46034 = G__46379;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq46024){
var G__46025 = cljs.core.first(seq46024);
var seq46024__$1 = cljs.core.next(seq46024);
var G__46026 = cljs.core.first(seq46024__$1);
var seq46024__$2 = cljs.core.next(seq46024__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46025,G__46026,seq46024__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__46072,p__46073){
var map__46077 = p__46072;
var map__46077__$1 = cljs.core.__destructure_map(map__46077);
var runtime = map__46077__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46077__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__46078 = p__46073;
var map__46078__$1 = cljs.core.__destructure_map(map__46078);
var msg = map__46078__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46078__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__46096 = cljs.core.deref(state_ref);
var map__46096__$1 = cljs.core.__destructure_map(map__46096);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46096__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46096__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__46126){
var map__46127 = p__46126;
var map__46127__$1 = cljs.core.__destructure_map(map__46127);
var runtime = map__46127__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46127__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__46129,msg){
var map__46130 = p__46129;
var map__46130__$1 = cljs.core.__destructure_map(map__46130);
var runtime = map__46130__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46130__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__46148,key,p__46149){
var map__46152 = p__46148;
var map__46152__$1 = cljs.core.__destructure_map(map__46152);
var state = map__46152__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46152__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__46154 = p__46149;
var map__46154__$1 = cljs.core.__destructure_map(map__46154);
var spec = map__46154__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46154__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__46185,key,spec){
var map__46186 = p__46185;
var map__46186__$1 = cljs.core.__destructure_map(map__46186);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46186__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__46192_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__46192_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__46193_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__46193_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__46194_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__46194_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__46196_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__46196_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__46197_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__46197_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__46206,key){
var map__46207 = p__46206;
var map__46207__$1 = cljs.core.__destructure_map(map__46207);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46207__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__46208,msg){
var map__46209 = p__46208;
var map__46209__$1 = cljs.core.__destructure_map(map__46209);
var runtime = map__46209__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46209__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__46277,p__46278){
var map__46279 = p__46277;
var map__46279__$1 = cljs.core.__destructure_map(map__46279);
var runtime = map__46279__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46279__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__46280 = p__46278;
var map__46280__$1 = cljs.core.__destructure_map(map__46280);
var msg = map__46280__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46280__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46280__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__46298 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__46300 = null;
var count__46301 = (0);
var i__46302 = (0);
while(true){
if((i__46302 < count__46301)){
var map__46317 = chunk__46300.cljs$core$IIndexed$_nth$arity$2(null,i__46302);
var map__46317__$1 = cljs.core.__destructure_map(map__46317);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46317__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__46460 = seq__46298;
var G__46461 = chunk__46300;
var G__46462 = count__46301;
var G__46463 = (i__46302 + (1));
seq__46298 = G__46460;
chunk__46300 = G__46461;
count__46301 = G__46462;
i__46302 = G__46463;
continue;
} else {
var G__46466 = seq__46298;
var G__46467 = chunk__46300;
var G__46468 = count__46301;
var G__46469 = (i__46302 + (1));
seq__46298 = G__46466;
chunk__46300 = G__46467;
count__46301 = G__46468;
i__46302 = G__46469;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46298);
if(temp__5753__auto__){
var seq__46298__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46298__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__46298__$1);
var G__46470 = cljs.core.chunk_rest(seq__46298__$1);
var G__46471 = c__4679__auto__;
var G__46472 = cljs.core.count(c__4679__auto__);
var G__46473 = (0);
seq__46298 = G__46470;
chunk__46300 = G__46471;
count__46301 = G__46472;
i__46302 = G__46473;
continue;
} else {
var map__46318 = cljs.core.first(seq__46298__$1);
var map__46318__$1 = cljs.core.__destructure_map(map__46318);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46318__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__46474 = cljs.core.next(seq__46298__$1);
var G__46475 = null;
var G__46476 = (0);
var G__46477 = (0);
seq__46298 = G__46474;
chunk__46300 = G__46475;
count__46301 = G__46476;
i__46302 = G__46477;
continue;
} else {
var G__46478 = cljs.core.next(seq__46298__$1);
var G__46479 = null;
var G__46480 = (0);
var G__46481 = (0);
seq__46298 = G__46478;
chunk__46300 = G__46479;
count__46301 = G__46480;
i__46302 = G__46481;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
