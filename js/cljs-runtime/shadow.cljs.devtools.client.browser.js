goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___51144 = arguments.length;
var i__4865__auto___51145 = (0);
while(true){
if((i__4865__auto___51145 < len__4864__auto___51144)){
args__4870__auto__.push((arguments[i__4865__auto___51145]));

var G__51146 = (i__4865__auto___51145 + (1));
i__4865__auto___51145 = G__51146;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq50250){
var G__50251 = cljs.core.first(seq50250);
var seq50250__$1 = cljs.core.next(seq50250);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50251,seq50250__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__50257 = cljs.core.seq(sources);
var chunk__50258 = null;
var count__50259 = (0);
var i__50260 = (0);
while(true){
if((i__50260 < count__50259)){
var map__50272 = chunk__50258.cljs$core$IIndexed$_nth$arity$2(null,i__50260);
var map__50272__$1 = cljs.core.__destructure_map(map__50272);
var src = map__50272__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50272__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50272__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50272__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50272__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e50274){var e_51154 = e50274;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_51154);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_51154.message)].join('')));
}

var G__51157 = seq__50257;
var G__51158 = chunk__50258;
var G__51159 = count__50259;
var G__51160 = (i__50260 + (1));
seq__50257 = G__51157;
chunk__50258 = G__51158;
count__50259 = G__51159;
i__50260 = G__51160;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50257);
if(temp__5753__auto__){
var seq__50257__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50257__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__50257__$1);
var G__51165 = cljs.core.chunk_rest(seq__50257__$1);
var G__51166 = c__4679__auto__;
var G__51167 = cljs.core.count(c__4679__auto__);
var G__51168 = (0);
seq__50257 = G__51165;
chunk__50258 = G__51166;
count__50259 = G__51167;
i__50260 = G__51168;
continue;
} else {
var map__50275 = cljs.core.first(seq__50257__$1);
var map__50275__$1 = cljs.core.__destructure_map(map__50275);
var src = map__50275__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50275__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50275__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50275__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50275__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e50276){var e_51186 = e50276;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_51186);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_51186.message)].join('')));
}

var G__51190 = cljs.core.next(seq__50257__$1);
var G__51191 = null;
var G__51192 = (0);
var G__51193 = (0);
seq__50257 = G__51190;
chunk__50258 = G__51191;
count__50259 = G__51192;
i__50260 = G__51193;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__50277 = cljs.core.seq(js_requires);
var chunk__50278 = null;
var count__50279 = (0);
var i__50280 = (0);
while(true){
if((i__50280 < count__50279)){
var js_ns = chunk__50278.cljs$core$IIndexed$_nth$arity$2(null,i__50280);
var require_str_51199 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_51199);


var G__51201 = seq__50277;
var G__51202 = chunk__50278;
var G__51203 = count__50279;
var G__51204 = (i__50280 + (1));
seq__50277 = G__51201;
chunk__50278 = G__51202;
count__50279 = G__51203;
i__50280 = G__51204;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50277);
if(temp__5753__auto__){
var seq__50277__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50277__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__50277__$1);
var G__51205 = cljs.core.chunk_rest(seq__50277__$1);
var G__51206 = c__4679__auto__;
var G__51207 = cljs.core.count(c__4679__auto__);
var G__51208 = (0);
seq__50277 = G__51205;
chunk__50278 = G__51206;
count__50279 = G__51207;
i__50280 = G__51208;
continue;
} else {
var js_ns = cljs.core.first(seq__50277__$1);
var require_str_51209 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_51209);


var G__51210 = cljs.core.next(seq__50277__$1);
var G__51211 = null;
var G__51212 = (0);
var G__51213 = (0);
seq__50277 = G__51210;
chunk__50278 = G__51211;
count__50279 = G__51212;
i__50280 = G__51213;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__50284){
var map__50285 = p__50284;
var map__50285__$1 = cljs.core.__destructure_map(map__50285);
var msg = map__50285__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50285__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50285__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50288(s__50289){
return (new cljs.core.LazySeq(null,(function (){
var s__50289__$1 = s__50289;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__50289__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__50294 = cljs.core.first(xs__6308__auto__);
var map__50294__$1 = cljs.core.__destructure_map(map__50294);
var src = map__50294__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50294__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50294__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__50289__$1,map__50294,map__50294__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__50285,map__50285__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50288_$_iter__50290(s__50291){
return (new cljs.core.LazySeq(null,((function (s__50289__$1,map__50294,map__50294__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__50285,map__50285__$1,msg,info,reload_info){
return (function (){
var s__50291__$1 = s__50291;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__50291__$1);
if(temp__5753__auto____$1){
var s__50291__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50291__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__50291__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__50293 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__50292 = (0);
while(true){
if((i__50292 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__50292);
cljs.core.chunk_append(b__50293,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__51216 = (i__50292 + (1));
i__50292 = G__51216;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50293),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50288_$_iter__50290(cljs.core.chunk_rest(s__50291__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50293),null);
}
} else {
var warning = cljs.core.first(s__50291__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50288_$_iter__50290(cljs.core.rest(s__50291__$2)));
}
} else {
return null;
}
break;
}
});})(s__50289__$1,map__50294,map__50294__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__50285,map__50285__$1,msg,info,reload_info))
,null,null));
});})(s__50289__$1,map__50294,map__50294__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__50285,map__50285__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50288(cljs.core.rest(s__50289__$1)));
} else {
var G__51218 = cljs.core.rest(s__50289__$1);
s__50289__$1 = G__51218;
continue;
}
} else {
var G__51219 = cljs.core.rest(s__50289__$1);
s__50289__$1 = G__51219;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__50297_51220 = cljs.core.seq(warnings);
var chunk__50298_51221 = null;
var count__50299_51222 = (0);
var i__50300_51223 = (0);
while(true){
if((i__50300_51223 < count__50299_51222)){
var map__50303_51224 = chunk__50298_51221.cljs$core$IIndexed$_nth$arity$2(null,i__50300_51223);
var map__50303_51225__$1 = cljs.core.__destructure_map(map__50303_51224);
var w_51226 = map__50303_51225__$1;
var msg_51227__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50303_51225__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_51228 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50303_51225__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_51229 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50303_51225__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_51230 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50303_51225__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_51230)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51228),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_51229),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_51227__$1)].join(''));


var G__51231 = seq__50297_51220;
var G__51232 = chunk__50298_51221;
var G__51233 = count__50299_51222;
var G__51234 = (i__50300_51223 + (1));
seq__50297_51220 = G__51231;
chunk__50298_51221 = G__51232;
count__50299_51222 = G__51233;
i__50300_51223 = G__51234;
continue;
} else {
var temp__5753__auto___51235 = cljs.core.seq(seq__50297_51220);
if(temp__5753__auto___51235){
var seq__50297_51236__$1 = temp__5753__auto___51235;
if(cljs.core.chunked_seq_QMARK_(seq__50297_51236__$1)){
var c__4679__auto___51237 = cljs.core.chunk_first(seq__50297_51236__$1);
var G__51238 = cljs.core.chunk_rest(seq__50297_51236__$1);
var G__51239 = c__4679__auto___51237;
var G__51240 = cljs.core.count(c__4679__auto___51237);
var G__51241 = (0);
seq__50297_51220 = G__51238;
chunk__50298_51221 = G__51239;
count__50299_51222 = G__51240;
i__50300_51223 = G__51241;
continue;
} else {
var map__50304_51242 = cljs.core.first(seq__50297_51236__$1);
var map__50304_51243__$1 = cljs.core.__destructure_map(map__50304_51242);
var w_51244 = map__50304_51243__$1;
var msg_51245__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50304_51243__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_51246 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50304_51243__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_51247 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50304_51243__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_51248 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50304_51243__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_51248)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51246),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_51247),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_51245__$1)].join(''));


var G__51249 = cljs.core.next(seq__50297_51236__$1);
var G__51250 = null;
var G__51251 = (0);
var G__51252 = (0);
seq__50297_51220 = G__51249;
chunk__50298_51221 = G__51250;
count__50299_51222 = G__51251;
i__50300_51223 = G__51252;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__50283_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__50283_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__50305){
var map__50306 = p__50305;
var map__50306__$1 = cljs.core.__destructure_map(map__50306);
var msg = map__50306__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50306__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50306__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__50307 = cljs.core.seq(updates);
var chunk__50309 = null;
var count__50310 = (0);
var i__50311 = (0);
while(true){
if((i__50311 < count__50310)){
var path = chunk__50309.cljs$core$IIndexed$_nth$arity$2(null,i__50311);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__50517_51256 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__50521_51257 = null;
var count__50522_51258 = (0);
var i__50523_51259 = (0);
while(true){
if((i__50523_51259 < count__50522_51258)){
var node_51260 = chunk__50521_51257.cljs$core$IIndexed$_nth$arity$2(null,i__50523_51259);
if(cljs.core.not(node_51260.shadow$old)){
var path_match_51261 = shadow.cljs.devtools.client.browser.match_paths(node_51260.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51261)){
var new_link_51262 = (function (){var G__50550 = node_51260.cloneNode(true);
G__50550.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51261),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50550;
})();
(node_51260.shadow$old = true);

(new_link_51262.onload = ((function (seq__50517_51256,chunk__50521_51257,count__50522_51258,i__50523_51259,seq__50307,chunk__50309,count__50310,i__50311,new_link_51262,path_match_51261,node_51260,path,map__50306,map__50306__$1,msg,updates,reload_info){
return (function (e){
var seq__50552_51264 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__50554_51265 = null;
var count__50555_51266 = (0);
var i__50556_51267 = (0);
while(true){
if((i__50556_51267 < count__50555_51266)){
var map__50565_51268 = chunk__50554_51265.cljs$core$IIndexed$_nth$arity$2(null,i__50556_51267);
var map__50565_51269__$1 = cljs.core.__destructure_map(map__50565_51268);
var task_51270 = map__50565_51269__$1;
var fn_str_51271 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50565_51269__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51272 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50565_51269__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51274 = goog.getObjectByName(fn_str_51271,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51272)].join(''));

(fn_obj_51274.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51274.cljs$core$IFn$_invoke$arity$2(path,new_link_51262) : fn_obj_51274.call(null,path,new_link_51262));


var G__51275 = seq__50552_51264;
var G__51276 = chunk__50554_51265;
var G__51277 = count__50555_51266;
var G__51278 = (i__50556_51267 + (1));
seq__50552_51264 = G__51275;
chunk__50554_51265 = G__51276;
count__50555_51266 = G__51277;
i__50556_51267 = G__51278;
continue;
} else {
var temp__5753__auto___51279 = cljs.core.seq(seq__50552_51264);
if(temp__5753__auto___51279){
var seq__50552_51280__$1 = temp__5753__auto___51279;
if(cljs.core.chunked_seq_QMARK_(seq__50552_51280__$1)){
var c__4679__auto___51281 = cljs.core.chunk_first(seq__50552_51280__$1);
var G__51282 = cljs.core.chunk_rest(seq__50552_51280__$1);
var G__51283 = c__4679__auto___51281;
var G__51284 = cljs.core.count(c__4679__auto___51281);
var G__51285 = (0);
seq__50552_51264 = G__51282;
chunk__50554_51265 = G__51283;
count__50555_51266 = G__51284;
i__50556_51267 = G__51285;
continue;
} else {
var map__50566_51286 = cljs.core.first(seq__50552_51280__$1);
var map__50566_51287__$1 = cljs.core.__destructure_map(map__50566_51286);
var task_51288 = map__50566_51287__$1;
var fn_str_51289 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50566_51287__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51290 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50566_51287__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51291 = goog.getObjectByName(fn_str_51289,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51290)].join(''));

(fn_obj_51291.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51291.cljs$core$IFn$_invoke$arity$2(path,new_link_51262) : fn_obj_51291.call(null,path,new_link_51262));


var G__51293 = cljs.core.next(seq__50552_51280__$1);
var G__51294 = null;
var G__51295 = (0);
var G__51296 = (0);
seq__50552_51264 = G__51293;
chunk__50554_51265 = G__51294;
count__50555_51266 = G__51295;
i__50556_51267 = G__51296;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_51260);
});})(seq__50517_51256,chunk__50521_51257,count__50522_51258,i__50523_51259,seq__50307,chunk__50309,count__50310,i__50311,new_link_51262,path_match_51261,node_51260,path,map__50306,map__50306__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51261], 0));

goog.dom.insertSiblingAfter(new_link_51262,node_51260);


var G__51298 = seq__50517_51256;
var G__51299 = chunk__50521_51257;
var G__51300 = count__50522_51258;
var G__51301 = (i__50523_51259 + (1));
seq__50517_51256 = G__51298;
chunk__50521_51257 = G__51299;
count__50522_51258 = G__51300;
i__50523_51259 = G__51301;
continue;
} else {
var G__51302 = seq__50517_51256;
var G__51303 = chunk__50521_51257;
var G__51304 = count__50522_51258;
var G__51305 = (i__50523_51259 + (1));
seq__50517_51256 = G__51302;
chunk__50521_51257 = G__51303;
count__50522_51258 = G__51304;
i__50523_51259 = G__51305;
continue;
}
} else {
var G__51306 = seq__50517_51256;
var G__51307 = chunk__50521_51257;
var G__51308 = count__50522_51258;
var G__51309 = (i__50523_51259 + (1));
seq__50517_51256 = G__51306;
chunk__50521_51257 = G__51307;
count__50522_51258 = G__51308;
i__50523_51259 = G__51309;
continue;
}
} else {
var temp__5753__auto___51310 = cljs.core.seq(seq__50517_51256);
if(temp__5753__auto___51310){
var seq__50517_51311__$1 = temp__5753__auto___51310;
if(cljs.core.chunked_seq_QMARK_(seq__50517_51311__$1)){
var c__4679__auto___51312 = cljs.core.chunk_first(seq__50517_51311__$1);
var G__51313 = cljs.core.chunk_rest(seq__50517_51311__$1);
var G__51314 = c__4679__auto___51312;
var G__51315 = cljs.core.count(c__4679__auto___51312);
var G__51316 = (0);
seq__50517_51256 = G__51313;
chunk__50521_51257 = G__51314;
count__50522_51258 = G__51315;
i__50523_51259 = G__51316;
continue;
} else {
var node_51317 = cljs.core.first(seq__50517_51311__$1);
if(cljs.core.not(node_51317.shadow$old)){
var path_match_51318 = shadow.cljs.devtools.client.browser.match_paths(node_51317.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51318)){
var new_link_51319 = (function (){var G__50567 = node_51317.cloneNode(true);
G__50567.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51318),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50567;
})();
(node_51317.shadow$old = true);

(new_link_51319.onload = ((function (seq__50517_51256,chunk__50521_51257,count__50522_51258,i__50523_51259,seq__50307,chunk__50309,count__50310,i__50311,new_link_51319,path_match_51318,node_51317,seq__50517_51311__$1,temp__5753__auto___51310,path,map__50306,map__50306__$1,msg,updates,reload_info){
return (function (e){
var seq__50568_51320 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__50570_51321 = null;
var count__50571_51322 = (0);
var i__50572_51323 = (0);
while(true){
if((i__50572_51323 < count__50571_51322)){
var map__50576_51324 = chunk__50570_51321.cljs$core$IIndexed$_nth$arity$2(null,i__50572_51323);
var map__50576_51325__$1 = cljs.core.__destructure_map(map__50576_51324);
var task_51326 = map__50576_51325__$1;
var fn_str_51327 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50576_51325__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51328 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50576_51325__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51329 = goog.getObjectByName(fn_str_51327,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51328)].join(''));

(fn_obj_51329.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51329.cljs$core$IFn$_invoke$arity$2(path,new_link_51319) : fn_obj_51329.call(null,path,new_link_51319));


var G__51330 = seq__50568_51320;
var G__51331 = chunk__50570_51321;
var G__51332 = count__50571_51322;
var G__51333 = (i__50572_51323 + (1));
seq__50568_51320 = G__51330;
chunk__50570_51321 = G__51331;
count__50571_51322 = G__51332;
i__50572_51323 = G__51333;
continue;
} else {
var temp__5753__auto___51334__$1 = cljs.core.seq(seq__50568_51320);
if(temp__5753__auto___51334__$1){
var seq__50568_51335__$1 = temp__5753__auto___51334__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50568_51335__$1)){
var c__4679__auto___51336 = cljs.core.chunk_first(seq__50568_51335__$1);
var G__51337 = cljs.core.chunk_rest(seq__50568_51335__$1);
var G__51338 = c__4679__auto___51336;
var G__51339 = cljs.core.count(c__4679__auto___51336);
var G__51340 = (0);
seq__50568_51320 = G__51337;
chunk__50570_51321 = G__51338;
count__50571_51322 = G__51339;
i__50572_51323 = G__51340;
continue;
} else {
var map__50577_51341 = cljs.core.first(seq__50568_51335__$1);
var map__50577_51342__$1 = cljs.core.__destructure_map(map__50577_51341);
var task_51343 = map__50577_51342__$1;
var fn_str_51344 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50577_51342__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51345 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50577_51342__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51346 = goog.getObjectByName(fn_str_51344,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51345)].join(''));

(fn_obj_51346.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51346.cljs$core$IFn$_invoke$arity$2(path,new_link_51319) : fn_obj_51346.call(null,path,new_link_51319));


var G__51347 = cljs.core.next(seq__50568_51335__$1);
var G__51348 = null;
var G__51349 = (0);
var G__51350 = (0);
seq__50568_51320 = G__51347;
chunk__50570_51321 = G__51348;
count__50571_51322 = G__51349;
i__50572_51323 = G__51350;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_51317);
});})(seq__50517_51256,chunk__50521_51257,count__50522_51258,i__50523_51259,seq__50307,chunk__50309,count__50310,i__50311,new_link_51319,path_match_51318,node_51317,seq__50517_51311__$1,temp__5753__auto___51310,path,map__50306,map__50306__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51318], 0));

goog.dom.insertSiblingAfter(new_link_51319,node_51317);


var G__51351 = cljs.core.next(seq__50517_51311__$1);
var G__51352 = null;
var G__51353 = (0);
var G__51354 = (0);
seq__50517_51256 = G__51351;
chunk__50521_51257 = G__51352;
count__50522_51258 = G__51353;
i__50523_51259 = G__51354;
continue;
} else {
var G__51355 = cljs.core.next(seq__50517_51311__$1);
var G__51356 = null;
var G__51357 = (0);
var G__51358 = (0);
seq__50517_51256 = G__51355;
chunk__50521_51257 = G__51356;
count__50522_51258 = G__51357;
i__50523_51259 = G__51358;
continue;
}
} else {
var G__51359 = cljs.core.next(seq__50517_51311__$1);
var G__51360 = null;
var G__51361 = (0);
var G__51362 = (0);
seq__50517_51256 = G__51359;
chunk__50521_51257 = G__51360;
count__50522_51258 = G__51361;
i__50523_51259 = G__51362;
continue;
}
}
} else {
}
}
break;
}


var G__51363 = seq__50307;
var G__51364 = chunk__50309;
var G__51365 = count__50310;
var G__51366 = (i__50311 + (1));
seq__50307 = G__51363;
chunk__50309 = G__51364;
count__50310 = G__51365;
i__50311 = G__51366;
continue;
} else {
var G__51367 = seq__50307;
var G__51368 = chunk__50309;
var G__51369 = count__50310;
var G__51370 = (i__50311 + (1));
seq__50307 = G__51367;
chunk__50309 = G__51368;
count__50310 = G__51369;
i__50311 = G__51370;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50307);
if(temp__5753__auto__){
var seq__50307__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50307__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__50307__$1);
var G__51371 = cljs.core.chunk_rest(seq__50307__$1);
var G__51372 = c__4679__auto__;
var G__51373 = cljs.core.count(c__4679__auto__);
var G__51374 = (0);
seq__50307 = G__51371;
chunk__50309 = G__51372;
count__50310 = G__51373;
i__50311 = G__51374;
continue;
} else {
var path = cljs.core.first(seq__50307__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__50584_51375 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__50588_51376 = null;
var count__50589_51377 = (0);
var i__50590_51378 = (0);
while(true){
if((i__50590_51378 < count__50589_51377)){
var node_51379 = chunk__50588_51376.cljs$core$IIndexed$_nth$arity$2(null,i__50590_51378);
if(cljs.core.not(node_51379.shadow$old)){
var path_match_51380 = shadow.cljs.devtools.client.browser.match_paths(node_51379.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51380)){
var new_link_51381 = (function (){var G__50621 = node_51379.cloneNode(true);
G__50621.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51380),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50621;
})();
(node_51379.shadow$old = true);

(new_link_51381.onload = ((function (seq__50584_51375,chunk__50588_51376,count__50589_51377,i__50590_51378,seq__50307,chunk__50309,count__50310,i__50311,new_link_51381,path_match_51380,node_51379,path,seq__50307__$1,temp__5753__auto__,map__50306,map__50306__$1,msg,updates,reload_info){
return (function (e){
var seq__50623_51382 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__50625_51383 = null;
var count__50626_51384 = (0);
var i__50627_51385 = (0);
while(true){
if((i__50627_51385 < count__50626_51384)){
var map__50638_51386 = chunk__50625_51383.cljs$core$IIndexed$_nth$arity$2(null,i__50627_51385);
var map__50638_51387__$1 = cljs.core.__destructure_map(map__50638_51386);
var task_51388 = map__50638_51387__$1;
var fn_str_51389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50638_51387__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51390 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50638_51387__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51391 = goog.getObjectByName(fn_str_51389,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51390)].join(''));

(fn_obj_51391.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51391.cljs$core$IFn$_invoke$arity$2(path,new_link_51381) : fn_obj_51391.call(null,path,new_link_51381));


var G__51392 = seq__50623_51382;
var G__51393 = chunk__50625_51383;
var G__51394 = count__50626_51384;
var G__51395 = (i__50627_51385 + (1));
seq__50623_51382 = G__51392;
chunk__50625_51383 = G__51393;
count__50626_51384 = G__51394;
i__50627_51385 = G__51395;
continue;
} else {
var temp__5753__auto___51396__$1 = cljs.core.seq(seq__50623_51382);
if(temp__5753__auto___51396__$1){
var seq__50623_51397__$1 = temp__5753__auto___51396__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50623_51397__$1)){
var c__4679__auto___51398 = cljs.core.chunk_first(seq__50623_51397__$1);
var G__51399 = cljs.core.chunk_rest(seq__50623_51397__$1);
var G__51400 = c__4679__auto___51398;
var G__51401 = cljs.core.count(c__4679__auto___51398);
var G__51402 = (0);
seq__50623_51382 = G__51399;
chunk__50625_51383 = G__51400;
count__50626_51384 = G__51401;
i__50627_51385 = G__51402;
continue;
} else {
var map__50641_51403 = cljs.core.first(seq__50623_51397__$1);
var map__50641_51404__$1 = cljs.core.__destructure_map(map__50641_51403);
var task_51405 = map__50641_51404__$1;
var fn_str_51406 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50641_51404__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51407 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50641_51404__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51408 = goog.getObjectByName(fn_str_51406,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51407)].join(''));

(fn_obj_51408.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51408.cljs$core$IFn$_invoke$arity$2(path,new_link_51381) : fn_obj_51408.call(null,path,new_link_51381));


var G__51409 = cljs.core.next(seq__50623_51397__$1);
var G__51410 = null;
var G__51411 = (0);
var G__51412 = (0);
seq__50623_51382 = G__51409;
chunk__50625_51383 = G__51410;
count__50626_51384 = G__51411;
i__50627_51385 = G__51412;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_51379);
});})(seq__50584_51375,chunk__50588_51376,count__50589_51377,i__50590_51378,seq__50307,chunk__50309,count__50310,i__50311,new_link_51381,path_match_51380,node_51379,path,seq__50307__$1,temp__5753__auto__,map__50306,map__50306__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51380], 0));

goog.dom.insertSiblingAfter(new_link_51381,node_51379);


var G__51413 = seq__50584_51375;
var G__51414 = chunk__50588_51376;
var G__51415 = count__50589_51377;
var G__51416 = (i__50590_51378 + (1));
seq__50584_51375 = G__51413;
chunk__50588_51376 = G__51414;
count__50589_51377 = G__51415;
i__50590_51378 = G__51416;
continue;
} else {
var G__51417 = seq__50584_51375;
var G__51418 = chunk__50588_51376;
var G__51419 = count__50589_51377;
var G__51420 = (i__50590_51378 + (1));
seq__50584_51375 = G__51417;
chunk__50588_51376 = G__51418;
count__50589_51377 = G__51419;
i__50590_51378 = G__51420;
continue;
}
} else {
var G__51421 = seq__50584_51375;
var G__51422 = chunk__50588_51376;
var G__51423 = count__50589_51377;
var G__51424 = (i__50590_51378 + (1));
seq__50584_51375 = G__51421;
chunk__50588_51376 = G__51422;
count__50589_51377 = G__51423;
i__50590_51378 = G__51424;
continue;
}
} else {
var temp__5753__auto___51425__$1 = cljs.core.seq(seq__50584_51375);
if(temp__5753__auto___51425__$1){
var seq__50584_51426__$1 = temp__5753__auto___51425__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50584_51426__$1)){
var c__4679__auto___51427 = cljs.core.chunk_first(seq__50584_51426__$1);
var G__51428 = cljs.core.chunk_rest(seq__50584_51426__$1);
var G__51429 = c__4679__auto___51427;
var G__51430 = cljs.core.count(c__4679__auto___51427);
var G__51431 = (0);
seq__50584_51375 = G__51428;
chunk__50588_51376 = G__51429;
count__50589_51377 = G__51430;
i__50590_51378 = G__51431;
continue;
} else {
var node_51432 = cljs.core.first(seq__50584_51426__$1);
if(cljs.core.not(node_51432.shadow$old)){
var path_match_51433 = shadow.cljs.devtools.client.browser.match_paths(node_51432.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51433)){
var new_link_51435 = (function (){var G__50643 = node_51432.cloneNode(true);
G__50643.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51433),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50643;
})();
(node_51432.shadow$old = true);

(new_link_51435.onload = ((function (seq__50584_51375,chunk__50588_51376,count__50589_51377,i__50590_51378,seq__50307,chunk__50309,count__50310,i__50311,new_link_51435,path_match_51433,node_51432,seq__50584_51426__$1,temp__5753__auto___51425__$1,path,seq__50307__$1,temp__5753__auto__,map__50306,map__50306__$1,msg,updates,reload_info){
return (function (e){
var seq__50644_51436 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__50646_51437 = null;
var count__50647_51438 = (0);
var i__50648_51439 = (0);
while(true){
if((i__50648_51439 < count__50647_51438)){
var map__50661_51440 = chunk__50646_51437.cljs$core$IIndexed$_nth$arity$2(null,i__50648_51439);
var map__50661_51441__$1 = cljs.core.__destructure_map(map__50661_51440);
var task_51442 = map__50661_51441__$1;
var fn_str_51443 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50661_51441__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51444 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50661_51441__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51445 = goog.getObjectByName(fn_str_51443,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51444)].join(''));

(fn_obj_51445.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51445.cljs$core$IFn$_invoke$arity$2(path,new_link_51435) : fn_obj_51445.call(null,path,new_link_51435));


var G__51446 = seq__50644_51436;
var G__51447 = chunk__50646_51437;
var G__51448 = count__50647_51438;
var G__51449 = (i__50648_51439 + (1));
seq__50644_51436 = G__51446;
chunk__50646_51437 = G__51447;
count__50647_51438 = G__51448;
i__50648_51439 = G__51449;
continue;
} else {
var temp__5753__auto___51450__$2 = cljs.core.seq(seq__50644_51436);
if(temp__5753__auto___51450__$2){
var seq__50644_51451__$1 = temp__5753__auto___51450__$2;
if(cljs.core.chunked_seq_QMARK_(seq__50644_51451__$1)){
var c__4679__auto___51452 = cljs.core.chunk_first(seq__50644_51451__$1);
var G__51453 = cljs.core.chunk_rest(seq__50644_51451__$1);
var G__51454 = c__4679__auto___51452;
var G__51455 = cljs.core.count(c__4679__auto___51452);
var G__51456 = (0);
seq__50644_51436 = G__51453;
chunk__50646_51437 = G__51454;
count__50647_51438 = G__51455;
i__50648_51439 = G__51456;
continue;
} else {
var map__50662_51457 = cljs.core.first(seq__50644_51451__$1);
var map__50662_51458__$1 = cljs.core.__destructure_map(map__50662_51457);
var task_51459 = map__50662_51458__$1;
var fn_str_51460 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50662_51458__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51461 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50662_51458__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51462 = goog.getObjectByName(fn_str_51460,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51461)].join(''));

(fn_obj_51462.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51462.cljs$core$IFn$_invoke$arity$2(path,new_link_51435) : fn_obj_51462.call(null,path,new_link_51435));


var G__51463 = cljs.core.next(seq__50644_51451__$1);
var G__51464 = null;
var G__51465 = (0);
var G__51466 = (0);
seq__50644_51436 = G__51463;
chunk__50646_51437 = G__51464;
count__50647_51438 = G__51465;
i__50648_51439 = G__51466;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_51432);
});})(seq__50584_51375,chunk__50588_51376,count__50589_51377,i__50590_51378,seq__50307,chunk__50309,count__50310,i__50311,new_link_51435,path_match_51433,node_51432,seq__50584_51426__$1,temp__5753__auto___51425__$1,path,seq__50307__$1,temp__5753__auto__,map__50306,map__50306__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51433], 0));

goog.dom.insertSiblingAfter(new_link_51435,node_51432);


var G__51467 = cljs.core.next(seq__50584_51426__$1);
var G__51468 = null;
var G__51469 = (0);
var G__51470 = (0);
seq__50584_51375 = G__51467;
chunk__50588_51376 = G__51468;
count__50589_51377 = G__51469;
i__50590_51378 = G__51470;
continue;
} else {
var G__51471 = cljs.core.next(seq__50584_51426__$1);
var G__51472 = null;
var G__51473 = (0);
var G__51474 = (0);
seq__50584_51375 = G__51471;
chunk__50588_51376 = G__51472;
count__50589_51377 = G__51473;
i__50590_51378 = G__51474;
continue;
}
} else {
var G__51475 = cljs.core.next(seq__50584_51426__$1);
var G__51476 = null;
var G__51477 = (0);
var G__51478 = (0);
seq__50584_51375 = G__51475;
chunk__50588_51376 = G__51476;
count__50589_51377 = G__51477;
i__50590_51378 = G__51478;
continue;
}
}
} else {
}
}
break;
}


var G__51480 = cljs.core.next(seq__50307__$1);
var G__51481 = null;
var G__51482 = (0);
var G__51483 = (0);
seq__50307 = G__51480;
chunk__50309 = G__51481;
count__50310 = G__51482;
i__50311 = G__51483;
continue;
} else {
var G__51485 = cljs.core.next(seq__50307__$1);
var G__51486 = null;
var G__51487 = (0);
var G__51488 = (0);
seq__50307 = G__51485;
chunk__50309 = G__51486;
count__50310 = G__51487;
i__50311 = G__51488;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__50664){
var map__50665 = p__50664;
var map__50665__$1 = cljs.core.__destructure_map(map__50665);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50665__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__50687){
var map__50688 = p__50687;
var map__50688__$1 = cljs.core.__destructure_map(map__50688);
var _ = map__50688__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50688__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__50690,done,error){
var map__50691 = p__50690;
var map__50691__$1 = cljs.core.__destructure_map(map__50691);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50691__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__50693,done,error){
var map__50694 = p__50693;
var map__50694__$1 = cljs.core.__destructure_map(map__50694);
var msg = map__50694__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50694__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50694__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50694__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__50695){
var map__50696 = p__50695;
var map__50696__$1 = cljs.core.__destructure_map(map__50696);
var src = map__50696__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50696__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__50697 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__50697) : done.call(null,G__50697));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__50698){
var map__50699 = p__50698;
var map__50699__$1 = cljs.core.__destructure_map(map__50699);
var msg__$1 = map__50699__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50699__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e50700){var ex = e50700;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__51010){
var map__51012 = p__51010;
var map__51012__$1 = cljs.core.__destructure_map(map__51012);
var env = map__51012__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51012__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__51054){
var map__51055 = p__51054;
var map__51055__$1 = cljs.core.__destructure_map(map__51055);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51055__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51055__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__51110){
var map__51112 = p__51110;
var map__51112__$1 = cljs.core.__destructure_map(map__51112);
var svc = map__51112__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51112__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
