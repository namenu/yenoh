goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__51050 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__51051 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__51051);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__51052 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__51053 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__51053);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__51052);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__51050);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__51081 = arguments.length;
switch (G__51081) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__51082 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51082,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51082,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__51086_51161 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__51087_51162 = null;
var count__51088_51163 = (0);
var i__51089_51164 = (0);
while(true){
if((i__51089_51164 < count__51088_51163)){
var vec__51106_51169 = chunk__51087_51162.cljs$core$IIndexed$_nth$arity$2(null,i__51089_51164);
var container_51170 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51106_51169,(0),null);
var comp_51171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51106_51169,(1),null);
reagent.dom.re_render_component(comp_51171,container_51170);


var G__51172 = seq__51086_51161;
var G__51173 = chunk__51087_51162;
var G__51174 = count__51088_51163;
var G__51175 = (i__51089_51164 + (1));
seq__51086_51161 = G__51172;
chunk__51087_51162 = G__51173;
count__51088_51163 = G__51174;
i__51089_51164 = G__51175;
continue;
} else {
var temp__5753__auto___51179 = cljs.core.seq(seq__51086_51161);
if(temp__5753__auto___51179){
var seq__51086_51180__$1 = temp__5753__auto___51179;
if(cljs.core.chunked_seq_QMARK_(seq__51086_51180__$1)){
var c__4679__auto___51181 = cljs.core.chunk_first(seq__51086_51180__$1);
var G__51182 = cljs.core.chunk_rest(seq__51086_51180__$1);
var G__51183 = c__4679__auto___51181;
var G__51184 = cljs.core.count(c__4679__auto___51181);
var G__51185 = (0);
seq__51086_51161 = G__51182;
chunk__51087_51162 = G__51183;
count__51088_51163 = G__51184;
i__51089_51164 = G__51185;
continue;
} else {
var vec__51116_51187 = cljs.core.first(seq__51086_51180__$1);
var container_51188 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51116_51187,(0),null);
var comp_51189 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51116_51187,(1),null);
reagent.dom.re_render_component(comp_51189,container_51188);


var G__51194 = cljs.core.next(seq__51086_51180__$1);
var G__51195 = null;
var G__51196 = (0);
var G__51197 = (0);
seq__51086_51161 = G__51194;
chunk__51087_51162 = G__51195;
count__51088_51163 = G__51196;
i__51089_51164 = G__51197;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
