goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_47818 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_47818(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_47820 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_47820(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__46930 = coll;
var G__46931 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__46930,G__46931) : shadow.dom.lazy_native_coll_seq.call(null,G__46930,G__46931));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__46984 = arguments.length;
switch (G__46984) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__46995 = arguments.length;
switch (G__46995) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__47003 = arguments.length;
switch (G__47003) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__47015 = arguments.length;
switch (G__47015) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__47031 = arguments.length;
switch (G__47031) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__47052 = arguments.length;
switch (G__47052) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e47056){if((e47056 instanceof Object)){
var e = e47056;
return console.log("didnt support attachEvent",el,e);
} else {
throw e47056;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__47060 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__47061 = null;
var count__47062 = (0);
var i__47063 = (0);
while(true){
if((i__47063 < count__47062)){
var el = chunk__47061.cljs$core$IIndexed$_nth$arity$2(null,i__47063);
var handler_47862__$1 = ((function (seq__47060,chunk__47061,count__47062,i__47063,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47060,chunk__47061,count__47062,i__47063,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_47862__$1);


var G__47863 = seq__47060;
var G__47864 = chunk__47061;
var G__47865 = count__47062;
var G__47866 = (i__47063 + (1));
seq__47060 = G__47863;
chunk__47061 = G__47864;
count__47062 = G__47865;
i__47063 = G__47866;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47060);
if(temp__5753__auto__){
var seq__47060__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47060__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__47060__$1);
var G__47869 = cljs.core.chunk_rest(seq__47060__$1);
var G__47870 = c__4679__auto__;
var G__47871 = cljs.core.count(c__4679__auto__);
var G__47872 = (0);
seq__47060 = G__47869;
chunk__47061 = G__47870;
count__47062 = G__47871;
i__47063 = G__47872;
continue;
} else {
var el = cljs.core.first(seq__47060__$1);
var handler_47874__$1 = ((function (seq__47060,chunk__47061,count__47062,i__47063,el,seq__47060__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47060,chunk__47061,count__47062,i__47063,el,seq__47060__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_47874__$1);


var G__47878 = cljs.core.next(seq__47060__$1);
var G__47879 = null;
var G__47880 = (0);
var G__47881 = (0);
seq__47060 = G__47878;
chunk__47061 = G__47879;
count__47062 = G__47880;
i__47063 = G__47881;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__47080 = arguments.length;
switch (G__47080) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__47086 = cljs.core.seq(events);
var chunk__47087 = null;
var count__47088 = (0);
var i__47089 = (0);
while(true){
if((i__47089 < count__47088)){
var vec__47098 = chunk__47087.cljs$core$IIndexed$_nth$arity$2(null,i__47089);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47098,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47098,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__47890 = seq__47086;
var G__47891 = chunk__47087;
var G__47892 = count__47088;
var G__47893 = (i__47089 + (1));
seq__47086 = G__47890;
chunk__47087 = G__47891;
count__47088 = G__47892;
i__47089 = G__47893;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47086);
if(temp__5753__auto__){
var seq__47086__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47086__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__47086__$1);
var G__47895 = cljs.core.chunk_rest(seq__47086__$1);
var G__47896 = c__4679__auto__;
var G__47897 = cljs.core.count(c__4679__auto__);
var G__47898 = (0);
seq__47086 = G__47895;
chunk__47087 = G__47896;
count__47088 = G__47897;
i__47089 = G__47898;
continue;
} else {
var vec__47107 = cljs.core.first(seq__47086__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47107,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47107,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__47899 = cljs.core.next(seq__47086__$1);
var G__47900 = null;
var G__47901 = (0);
var G__47902 = (0);
seq__47086 = G__47899;
chunk__47087 = G__47900;
count__47088 = G__47901;
i__47089 = G__47902;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__47122 = cljs.core.seq(styles);
var chunk__47123 = null;
var count__47124 = (0);
var i__47125 = (0);
while(true){
if((i__47125 < count__47124)){
var vec__47152 = chunk__47123.cljs$core$IIndexed$_nth$arity$2(null,i__47125);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47152,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47152,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__47907 = seq__47122;
var G__47908 = chunk__47123;
var G__47909 = count__47124;
var G__47910 = (i__47125 + (1));
seq__47122 = G__47907;
chunk__47123 = G__47908;
count__47124 = G__47909;
i__47125 = G__47910;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47122);
if(temp__5753__auto__){
var seq__47122__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47122__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__47122__$1);
var G__47911 = cljs.core.chunk_rest(seq__47122__$1);
var G__47912 = c__4679__auto__;
var G__47913 = cljs.core.count(c__4679__auto__);
var G__47914 = (0);
seq__47122 = G__47911;
chunk__47123 = G__47912;
count__47124 = G__47913;
i__47125 = G__47914;
continue;
} else {
var vec__47160 = cljs.core.first(seq__47122__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47160,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47160,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__47917 = cljs.core.next(seq__47122__$1);
var G__47918 = null;
var G__47919 = (0);
var G__47920 = (0);
seq__47122 = G__47917;
chunk__47123 = G__47918;
count__47124 = G__47919;
i__47125 = G__47920;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__47173_47924 = key;
var G__47173_47925__$1 = (((G__47173_47924 instanceof cljs.core.Keyword))?G__47173_47924.fqn:null);
switch (G__47173_47925__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_47929 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_47929,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_47929,"aria-");
}
})())){
el.setAttribute(ks_47929,value);
} else {
(el[ks_47929] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__47186){
var map__47187 = p__47186;
var map__47187__$1 = cljs.core.__destructure_map(map__47187);
var props = map__47187__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47187__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__47188 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47188,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47188,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47188,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__47191 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__47191,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__47191;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__47194 = arguments.length;
switch (G__47194) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__47195){
var vec__47196 = p__47195;
var seq__47197 = cljs.core.seq(vec__47196);
var first__47198 = cljs.core.first(seq__47197);
var seq__47197__$1 = cljs.core.next(seq__47197);
var nn = first__47198;
var first__47198__$1 = cljs.core.first(seq__47197__$1);
var seq__47197__$2 = cljs.core.next(seq__47197__$1);
var np = first__47198__$1;
var nc = seq__47197__$2;
var node = vec__47196;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47201 = nn;
var G__47202 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47201,G__47202) : create_fn.call(null,G__47201,G__47202));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47205 = nn;
var G__47206 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47205,G__47206) : create_fn.call(null,G__47205,G__47206));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__47210 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47210,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47210,(1),null);
var seq__47213_47951 = cljs.core.seq(node_children);
var chunk__47214_47952 = null;
var count__47215_47953 = (0);
var i__47216_47954 = (0);
while(true){
if((i__47216_47954 < count__47215_47953)){
var child_struct_47955 = chunk__47214_47952.cljs$core$IIndexed$_nth$arity$2(null,i__47216_47954);
var children_47956 = shadow.dom.dom_node(child_struct_47955);
if(cljs.core.seq_QMARK_(children_47956)){
var seq__47295_47957 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_47956));
var chunk__47297_47958 = null;
var count__47298_47959 = (0);
var i__47299_47960 = (0);
while(true){
if((i__47299_47960 < count__47298_47959)){
var child_47961 = chunk__47297_47958.cljs$core$IIndexed$_nth$arity$2(null,i__47299_47960);
if(cljs.core.truth_(child_47961)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47961);


var G__47962 = seq__47295_47957;
var G__47963 = chunk__47297_47958;
var G__47964 = count__47298_47959;
var G__47965 = (i__47299_47960 + (1));
seq__47295_47957 = G__47962;
chunk__47297_47958 = G__47963;
count__47298_47959 = G__47964;
i__47299_47960 = G__47965;
continue;
} else {
var G__47966 = seq__47295_47957;
var G__47967 = chunk__47297_47958;
var G__47968 = count__47298_47959;
var G__47969 = (i__47299_47960 + (1));
seq__47295_47957 = G__47966;
chunk__47297_47958 = G__47967;
count__47298_47959 = G__47968;
i__47299_47960 = G__47969;
continue;
}
} else {
var temp__5753__auto___47970 = cljs.core.seq(seq__47295_47957);
if(temp__5753__auto___47970){
var seq__47295_47971__$1 = temp__5753__auto___47970;
if(cljs.core.chunked_seq_QMARK_(seq__47295_47971__$1)){
var c__4679__auto___47972 = cljs.core.chunk_first(seq__47295_47971__$1);
var G__47973 = cljs.core.chunk_rest(seq__47295_47971__$1);
var G__47974 = c__4679__auto___47972;
var G__47975 = cljs.core.count(c__4679__auto___47972);
var G__47976 = (0);
seq__47295_47957 = G__47973;
chunk__47297_47958 = G__47974;
count__47298_47959 = G__47975;
i__47299_47960 = G__47976;
continue;
} else {
var child_47977 = cljs.core.first(seq__47295_47971__$1);
if(cljs.core.truth_(child_47977)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47977);


var G__47978 = cljs.core.next(seq__47295_47971__$1);
var G__47979 = null;
var G__47980 = (0);
var G__47981 = (0);
seq__47295_47957 = G__47978;
chunk__47297_47958 = G__47979;
count__47298_47959 = G__47980;
i__47299_47960 = G__47981;
continue;
} else {
var G__47982 = cljs.core.next(seq__47295_47971__$1);
var G__47983 = null;
var G__47984 = (0);
var G__47985 = (0);
seq__47295_47957 = G__47982;
chunk__47297_47958 = G__47983;
count__47298_47959 = G__47984;
i__47299_47960 = G__47985;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_47956);
}


var G__47986 = seq__47213_47951;
var G__47987 = chunk__47214_47952;
var G__47988 = count__47215_47953;
var G__47989 = (i__47216_47954 + (1));
seq__47213_47951 = G__47986;
chunk__47214_47952 = G__47987;
count__47215_47953 = G__47988;
i__47216_47954 = G__47989;
continue;
} else {
var temp__5753__auto___47990 = cljs.core.seq(seq__47213_47951);
if(temp__5753__auto___47990){
var seq__47213_47991__$1 = temp__5753__auto___47990;
if(cljs.core.chunked_seq_QMARK_(seq__47213_47991__$1)){
var c__4679__auto___47992 = cljs.core.chunk_first(seq__47213_47991__$1);
var G__47993 = cljs.core.chunk_rest(seq__47213_47991__$1);
var G__47994 = c__4679__auto___47992;
var G__47995 = cljs.core.count(c__4679__auto___47992);
var G__47996 = (0);
seq__47213_47951 = G__47993;
chunk__47214_47952 = G__47994;
count__47215_47953 = G__47995;
i__47216_47954 = G__47996;
continue;
} else {
var child_struct_47997 = cljs.core.first(seq__47213_47991__$1);
var children_47998 = shadow.dom.dom_node(child_struct_47997);
if(cljs.core.seq_QMARK_(children_47998)){
var seq__47334_47999 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_47998));
var chunk__47336_48000 = null;
var count__47337_48001 = (0);
var i__47338_48002 = (0);
while(true){
if((i__47338_48002 < count__47337_48001)){
var child_48003 = chunk__47336_48000.cljs$core$IIndexed$_nth$arity$2(null,i__47338_48002);
if(cljs.core.truth_(child_48003)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48003);


var G__48004 = seq__47334_47999;
var G__48005 = chunk__47336_48000;
var G__48006 = count__47337_48001;
var G__48007 = (i__47338_48002 + (1));
seq__47334_47999 = G__48004;
chunk__47336_48000 = G__48005;
count__47337_48001 = G__48006;
i__47338_48002 = G__48007;
continue;
} else {
var G__48008 = seq__47334_47999;
var G__48009 = chunk__47336_48000;
var G__48010 = count__47337_48001;
var G__48011 = (i__47338_48002 + (1));
seq__47334_47999 = G__48008;
chunk__47336_48000 = G__48009;
count__47337_48001 = G__48010;
i__47338_48002 = G__48011;
continue;
}
} else {
var temp__5753__auto___48012__$1 = cljs.core.seq(seq__47334_47999);
if(temp__5753__auto___48012__$1){
var seq__47334_48013__$1 = temp__5753__auto___48012__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47334_48013__$1)){
var c__4679__auto___48014 = cljs.core.chunk_first(seq__47334_48013__$1);
var G__48015 = cljs.core.chunk_rest(seq__47334_48013__$1);
var G__48016 = c__4679__auto___48014;
var G__48017 = cljs.core.count(c__4679__auto___48014);
var G__48018 = (0);
seq__47334_47999 = G__48015;
chunk__47336_48000 = G__48016;
count__47337_48001 = G__48017;
i__47338_48002 = G__48018;
continue;
} else {
var child_48019 = cljs.core.first(seq__47334_48013__$1);
if(cljs.core.truth_(child_48019)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48019);


var G__48020 = cljs.core.next(seq__47334_48013__$1);
var G__48021 = null;
var G__48022 = (0);
var G__48023 = (0);
seq__47334_47999 = G__48020;
chunk__47336_48000 = G__48021;
count__47337_48001 = G__48022;
i__47338_48002 = G__48023;
continue;
} else {
var G__48024 = cljs.core.next(seq__47334_48013__$1);
var G__48025 = null;
var G__48026 = (0);
var G__48027 = (0);
seq__47334_47999 = G__48024;
chunk__47336_48000 = G__48025;
count__47337_48001 = G__48026;
i__47338_48002 = G__48027;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_47998);
}


var G__48028 = cljs.core.next(seq__47213_47991__$1);
var G__48029 = null;
var G__48030 = (0);
var G__48031 = (0);
seq__47213_47951 = G__48028;
chunk__47214_47952 = G__48029;
count__47215_47953 = G__48030;
i__47216_47954 = G__48031;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__47367 = cljs.core.seq(node);
var chunk__47368 = null;
var count__47369 = (0);
var i__47370 = (0);
while(true){
if((i__47370 < count__47369)){
var n = chunk__47368.cljs$core$IIndexed$_nth$arity$2(null,i__47370);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48032 = seq__47367;
var G__48033 = chunk__47368;
var G__48034 = count__47369;
var G__48035 = (i__47370 + (1));
seq__47367 = G__48032;
chunk__47368 = G__48033;
count__47369 = G__48034;
i__47370 = G__48035;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47367);
if(temp__5753__auto__){
var seq__47367__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47367__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__47367__$1);
var G__48036 = cljs.core.chunk_rest(seq__47367__$1);
var G__48037 = c__4679__auto__;
var G__48038 = cljs.core.count(c__4679__auto__);
var G__48039 = (0);
seq__47367 = G__48036;
chunk__47368 = G__48037;
count__47369 = G__48038;
i__47370 = G__48039;
continue;
} else {
var n = cljs.core.first(seq__47367__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48040 = cljs.core.next(seq__47367__$1);
var G__48041 = null;
var G__48042 = (0);
var G__48043 = (0);
seq__47367 = G__48040;
chunk__47368 = G__48041;
count__47369 = G__48042;
i__47370 = G__48043;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__47381 = arguments.length;
switch (G__47381) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__47385 = arguments.length;
switch (G__47385) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__47388 = arguments.length;
switch (G__47388) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___48047 = arguments.length;
var i__4865__auto___48048 = (0);
while(true){
if((i__4865__auto___48048 < len__4864__auto___48047)){
args__4870__auto__.push((arguments[i__4865__auto___48048]));

var G__48049 = (i__4865__auto___48048 + (1));
i__4865__auto___48048 = G__48049;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__47397_48050 = cljs.core.seq(nodes);
var chunk__47398_48051 = null;
var count__47399_48052 = (0);
var i__47400_48053 = (0);
while(true){
if((i__47400_48053 < count__47399_48052)){
var node_48054 = chunk__47398_48051.cljs$core$IIndexed$_nth$arity$2(null,i__47400_48053);
fragment.appendChild(shadow.dom._to_dom(node_48054));


var G__48055 = seq__47397_48050;
var G__48056 = chunk__47398_48051;
var G__48057 = count__47399_48052;
var G__48058 = (i__47400_48053 + (1));
seq__47397_48050 = G__48055;
chunk__47398_48051 = G__48056;
count__47399_48052 = G__48057;
i__47400_48053 = G__48058;
continue;
} else {
var temp__5753__auto___48059 = cljs.core.seq(seq__47397_48050);
if(temp__5753__auto___48059){
var seq__47397_48060__$1 = temp__5753__auto___48059;
if(cljs.core.chunked_seq_QMARK_(seq__47397_48060__$1)){
var c__4679__auto___48061 = cljs.core.chunk_first(seq__47397_48060__$1);
var G__48062 = cljs.core.chunk_rest(seq__47397_48060__$1);
var G__48063 = c__4679__auto___48061;
var G__48064 = cljs.core.count(c__4679__auto___48061);
var G__48065 = (0);
seq__47397_48050 = G__48062;
chunk__47398_48051 = G__48063;
count__47399_48052 = G__48064;
i__47400_48053 = G__48065;
continue;
} else {
var node_48066 = cljs.core.first(seq__47397_48060__$1);
fragment.appendChild(shadow.dom._to_dom(node_48066));


var G__48067 = cljs.core.next(seq__47397_48060__$1);
var G__48068 = null;
var G__48069 = (0);
var G__48070 = (0);
seq__47397_48050 = G__48067;
chunk__47398_48051 = G__48068;
count__47399_48052 = G__48069;
i__47400_48053 = G__48070;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq47392){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47392));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__47404_48071 = cljs.core.seq(scripts);
var chunk__47405_48072 = null;
var count__47406_48073 = (0);
var i__47407_48074 = (0);
while(true){
if((i__47407_48074 < count__47406_48073)){
var vec__47416_48075 = chunk__47405_48072.cljs$core$IIndexed$_nth$arity$2(null,i__47407_48074);
var script_tag_48076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47416_48075,(0),null);
var script_body_48077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47416_48075,(1),null);
eval(script_body_48077);


var G__48078 = seq__47404_48071;
var G__48079 = chunk__47405_48072;
var G__48080 = count__47406_48073;
var G__48081 = (i__47407_48074 + (1));
seq__47404_48071 = G__48078;
chunk__47405_48072 = G__48079;
count__47406_48073 = G__48080;
i__47407_48074 = G__48081;
continue;
} else {
var temp__5753__auto___48082 = cljs.core.seq(seq__47404_48071);
if(temp__5753__auto___48082){
var seq__47404_48083__$1 = temp__5753__auto___48082;
if(cljs.core.chunked_seq_QMARK_(seq__47404_48083__$1)){
var c__4679__auto___48084 = cljs.core.chunk_first(seq__47404_48083__$1);
var G__48085 = cljs.core.chunk_rest(seq__47404_48083__$1);
var G__48086 = c__4679__auto___48084;
var G__48087 = cljs.core.count(c__4679__auto___48084);
var G__48088 = (0);
seq__47404_48071 = G__48085;
chunk__47405_48072 = G__48086;
count__47406_48073 = G__48087;
i__47407_48074 = G__48088;
continue;
} else {
var vec__47421_48089 = cljs.core.first(seq__47404_48083__$1);
var script_tag_48090 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47421_48089,(0),null);
var script_body_48091 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47421_48089,(1),null);
eval(script_body_48091);


var G__48092 = cljs.core.next(seq__47404_48083__$1);
var G__48093 = null;
var G__48094 = (0);
var G__48095 = (0);
seq__47404_48071 = G__48092;
chunk__47405_48072 = G__48093;
count__47406_48073 = G__48094;
i__47407_48074 = G__48095;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__47424){
var vec__47425 = p__47424;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47425,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47425,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__47433 = arguments.length;
switch (G__47433) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__47458 = cljs.core.seq(style_keys);
var chunk__47459 = null;
var count__47460 = (0);
var i__47461 = (0);
while(true){
if((i__47461 < count__47460)){
var it = chunk__47459.cljs$core$IIndexed$_nth$arity$2(null,i__47461);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48097 = seq__47458;
var G__48098 = chunk__47459;
var G__48099 = count__47460;
var G__48100 = (i__47461 + (1));
seq__47458 = G__48097;
chunk__47459 = G__48098;
count__47460 = G__48099;
i__47461 = G__48100;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47458);
if(temp__5753__auto__){
var seq__47458__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47458__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__47458__$1);
var G__48101 = cljs.core.chunk_rest(seq__47458__$1);
var G__48102 = c__4679__auto__;
var G__48103 = cljs.core.count(c__4679__auto__);
var G__48104 = (0);
seq__47458 = G__48101;
chunk__47459 = G__48102;
count__47460 = G__48103;
i__47461 = G__48104;
continue;
} else {
var it = cljs.core.first(seq__47458__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48105 = cljs.core.next(seq__47458__$1);
var G__48106 = null;
var G__48107 = (0);
var G__48108 = (0);
seq__47458 = G__48105;
chunk__47459 = G__48106;
count__47460 = G__48107;
i__47461 = G__48108;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k47478,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__47487 = k47478;
var G__47487__$1 = (((G__47487 instanceof cljs.core.Keyword))?G__47487.fqn:null);
switch (G__47487__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47478,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__47488){
var vec__47489 = p__47488;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47489,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47489,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47477){
var self__ = this;
var G__47477__$1 = this;
return (new cljs.core.RecordIter((0),G__47477__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47479,other47480){
var self__ = this;
var this47479__$1 = this;
return (((!((other47480 == null)))) && ((((this47479__$1.constructor === other47480.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47479__$1.x,other47480.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47479__$1.y,other47480.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47479__$1.__extmap,other47480.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k47478){
var self__ = this;
var this__4509__auto____$1 = this;
var G__47492 = k47478;
var G__47492__$1 = (((G__47492 instanceof cljs.core.Keyword))?G__47492.fqn:null);
switch (G__47492__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k47478);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__47477){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__47494 = cljs.core.keyword_identical_QMARK_;
var expr__47495 = k__4511__auto__;
if(cljs.core.truth_((pred__47494.cljs$core$IFn$_invoke$arity$2 ? pred__47494.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__47495) : pred__47494.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__47495)))){
return (new shadow.dom.Coordinate(G__47477,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47494.cljs$core$IFn$_invoke$arity$2 ? pred__47494.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__47495) : pred__47494.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__47495)))){
return (new shadow.dom.Coordinate(self__.x,G__47477,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__47477),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__47477){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__47477,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__47483){
var extmap__4542__auto__ = (function (){var G__47497 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47483,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__47483)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47497);
} else {
return G__47497;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__47483),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__47483),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k47505,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__47515 = k47505;
var G__47515__$1 = (((G__47515 instanceof cljs.core.Keyword))?G__47515.fqn:null);
switch (G__47515__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47505,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__47519){
var vec__47521 = p__47519;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47521,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47521,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47504){
var self__ = this;
var G__47504__$1 = this;
return (new cljs.core.RecordIter((0),G__47504__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47507,other47508){
var self__ = this;
var this47507__$1 = this;
return (((!((other47508 == null)))) && ((((this47507__$1.constructor === other47508.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47507__$1.w,other47508.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47507__$1.h,other47508.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47507__$1.__extmap,other47508.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k47505){
var self__ = this;
var this__4509__auto____$1 = this;
var G__47547 = k47505;
var G__47547__$1 = (((G__47547 instanceof cljs.core.Keyword))?G__47547.fqn:null);
switch (G__47547__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k47505);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__47504){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__47552 = cljs.core.keyword_identical_QMARK_;
var expr__47553 = k__4511__auto__;
if(cljs.core.truth_((pred__47552.cljs$core$IFn$_invoke$arity$2 ? pred__47552.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__47553) : pred__47552.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__47553)))){
return (new shadow.dom.Size(G__47504,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47552.cljs$core$IFn$_invoke$arity$2 ? pred__47552.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__47553) : pred__47552.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__47553)))){
return (new shadow.dom.Size(self__.w,G__47504,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__47504),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__47504){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__47504,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__47511){
var extmap__4542__auto__ = (function (){var G__47561 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47511,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__47511)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47561);
} else {
return G__47561;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__47511),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__47511),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__48115 = (i + (1));
var G__48116 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__48115;
ret = G__48116;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47597){
var vec__47598 = p__47597;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47598,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47598,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__47607 = arguments.length;
switch (G__47607) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__48118 = ps;
var G__48119 = (i + (1));
el__$1 = G__48118;
i = G__48119;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__47630 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47630,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47630,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47630,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__47633_48120 = cljs.core.seq(props);
var chunk__47634_48121 = null;
var count__47635_48122 = (0);
var i__47636_48123 = (0);
while(true){
if((i__47636_48123 < count__47635_48122)){
var vec__47644_48124 = chunk__47634_48121.cljs$core$IIndexed$_nth$arity$2(null,i__47636_48123);
var k_48125 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47644_48124,(0),null);
var v_48126 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47644_48124,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_48125);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48125),v_48126);


var G__48127 = seq__47633_48120;
var G__48128 = chunk__47634_48121;
var G__48129 = count__47635_48122;
var G__48130 = (i__47636_48123 + (1));
seq__47633_48120 = G__48127;
chunk__47634_48121 = G__48128;
count__47635_48122 = G__48129;
i__47636_48123 = G__48130;
continue;
} else {
var temp__5753__auto___48131 = cljs.core.seq(seq__47633_48120);
if(temp__5753__auto___48131){
var seq__47633_48132__$1 = temp__5753__auto___48131;
if(cljs.core.chunked_seq_QMARK_(seq__47633_48132__$1)){
var c__4679__auto___48133 = cljs.core.chunk_first(seq__47633_48132__$1);
var G__48134 = cljs.core.chunk_rest(seq__47633_48132__$1);
var G__48135 = c__4679__auto___48133;
var G__48136 = cljs.core.count(c__4679__auto___48133);
var G__48137 = (0);
seq__47633_48120 = G__48134;
chunk__47634_48121 = G__48135;
count__47635_48122 = G__48136;
i__47636_48123 = G__48137;
continue;
} else {
var vec__47647_48138 = cljs.core.first(seq__47633_48132__$1);
var k_48139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47647_48138,(0),null);
var v_48140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47647_48138,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_48139);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48139),v_48140);


var G__48141 = cljs.core.next(seq__47633_48132__$1);
var G__48142 = null;
var G__48143 = (0);
var G__48144 = (0);
seq__47633_48120 = G__48141;
chunk__47634_48121 = G__48142;
count__47635_48122 = G__48143;
i__47636_48123 = G__48144;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__47652 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47652,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47652,(1),null);
var seq__47655_48145 = cljs.core.seq(node_children);
var chunk__47657_48146 = null;
var count__47658_48147 = (0);
var i__47659_48148 = (0);
while(true){
if((i__47659_48148 < count__47658_48147)){
var child_struct_48153 = chunk__47657_48146.cljs$core$IIndexed$_nth$arity$2(null,i__47659_48148);
if((!((child_struct_48153 == null)))){
if(typeof child_struct_48153 === 'string'){
var text_48156 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48156),child_struct_48153].join(''));
} else {
var children_48157 = shadow.dom.svg_node(child_struct_48153);
if(cljs.core.seq_QMARK_(children_48157)){
var seq__47676_48158 = cljs.core.seq(children_48157);
var chunk__47678_48159 = null;
var count__47679_48160 = (0);
var i__47680_48161 = (0);
while(true){
if((i__47680_48161 < count__47679_48160)){
var child_48163 = chunk__47678_48159.cljs$core$IIndexed$_nth$arity$2(null,i__47680_48161);
if(cljs.core.truth_(child_48163)){
node.appendChild(child_48163);


var G__48164 = seq__47676_48158;
var G__48165 = chunk__47678_48159;
var G__48166 = count__47679_48160;
var G__48167 = (i__47680_48161 + (1));
seq__47676_48158 = G__48164;
chunk__47678_48159 = G__48165;
count__47679_48160 = G__48166;
i__47680_48161 = G__48167;
continue;
} else {
var G__48169 = seq__47676_48158;
var G__48170 = chunk__47678_48159;
var G__48171 = count__47679_48160;
var G__48172 = (i__47680_48161 + (1));
seq__47676_48158 = G__48169;
chunk__47678_48159 = G__48170;
count__47679_48160 = G__48171;
i__47680_48161 = G__48172;
continue;
}
} else {
var temp__5753__auto___48174 = cljs.core.seq(seq__47676_48158);
if(temp__5753__auto___48174){
var seq__47676_48175__$1 = temp__5753__auto___48174;
if(cljs.core.chunked_seq_QMARK_(seq__47676_48175__$1)){
var c__4679__auto___48176 = cljs.core.chunk_first(seq__47676_48175__$1);
var G__48177 = cljs.core.chunk_rest(seq__47676_48175__$1);
var G__48178 = c__4679__auto___48176;
var G__48179 = cljs.core.count(c__4679__auto___48176);
var G__48180 = (0);
seq__47676_48158 = G__48177;
chunk__47678_48159 = G__48178;
count__47679_48160 = G__48179;
i__47680_48161 = G__48180;
continue;
} else {
var child_48181 = cljs.core.first(seq__47676_48175__$1);
if(cljs.core.truth_(child_48181)){
node.appendChild(child_48181);


var G__48182 = cljs.core.next(seq__47676_48175__$1);
var G__48183 = null;
var G__48184 = (0);
var G__48185 = (0);
seq__47676_48158 = G__48182;
chunk__47678_48159 = G__48183;
count__47679_48160 = G__48184;
i__47680_48161 = G__48185;
continue;
} else {
var G__48186 = cljs.core.next(seq__47676_48175__$1);
var G__48187 = null;
var G__48188 = (0);
var G__48189 = (0);
seq__47676_48158 = G__48186;
chunk__47678_48159 = G__48187;
count__47679_48160 = G__48188;
i__47680_48161 = G__48189;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48157);
}
}


var G__48190 = seq__47655_48145;
var G__48191 = chunk__47657_48146;
var G__48192 = count__47658_48147;
var G__48193 = (i__47659_48148 + (1));
seq__47655_48145 = G__48190;
chunk__47657_48146 = G__48191;
count__47658_48147 = G__48192;
i__47659_48148 = G__48193;
continue;
} else {
var G__48194 = seq__47655_48145;
var G__48195 = chunk__47657_48146;
var G__48196 = count__47658_48147;
var G__48197 = (i__47659_48148 + (1));
seq__47655_48145 = G__48194;
chunk__47657_48146 = G__48195;
count__47658_48147 = G__48196;
i__47659_48148 = G__48197;
continue;
}
} else {
var temp__5753__auto___48198 = cljs.core.seq(seq__47655_48145);
if(temp__5753__auto___48198){
var seq__47655_48199__$1 = temp__5753__auto___48198;
if(cljs.core.chunked_seq_QMARK_(seq__47655_48199__$1)){
var c__4679__auto___48200 = cljs.core.chunk_first(seq__47655_48199__$1);
var G__48201 = cljs.core.chunk_rest(seq__47655_48199__$1);
var G__48202 = c__4679__auto___48200;
var G__48203 = cljs.core.count(c__4679__auto___48200);
var G__48204 = (0);
seq__47655_48145 = G__48201;
chunk__47657_48146 = G__48202;
count__47658_48147 = G__48203;
i__47659_48148 = G__48204;
continue;
} else {
var child_struct_48205 = cljs.core.first(seq__47655_48199__$1);
if((!((child_struct_48205 == null)))){
if(typeof child_struct_48205 === 'string'){
var text_48206 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48206),child_struct_48205].join(''));
} else {
var children_48207 = shadow.dom.svg_node(child_struct_48205);
if(cljs.core.seq_QMARK_(children_48207)){
var seq__47683_48209 = cljs.core.seq(children_48207);
var chunk__47685_48210 = null;
var count__47686_48211 = (0);
var i__47687_48212 = (0);
while(true){
if((i__47687_48212 < count__47686_48211)){
var child_48213 = chunk__47685_48210.cljs$core$IIndexed$_nth$arity$2(null,i__47687_48212);
if(cljs.core.truth_(child_48213)){
node.appendChild(child_48213);


var G__48214 = seq__47683_48209;
var G__48215 = chunk__47685_48210;
var G__48216 = count__47686_48211;
var G__48217 = (i__47687_48212 + (1));
seq__47683_48209 = G__48214;
chunk__47685_48210 = G__48215;
count__47686_48211 = G__48216;
i__47687_48212 = G__48217;
continue;
} else {
var G__48218 = seq__47683_48209;
var G__48219 = chunk__47685_48210;
var G__48220 = count__47686_48211;
var G__48221 = (i__47687_48212 + (1));
seq__47683_48209 = G__48218;
chunk__47685_48210 = G__48219;
count__47686_48211 = G__48220;
i__47687_48212 = G__48221;
continue;
}
} else {
var temp__5753__auto___48222__$1 = cljs.core.seq(seq__47683_48209);
if(temp__5753__auto___48222__$1){
var seq__47683_48224__$1 = temp__5753__auto___48222__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47683_48224__$1)){
var c__4679__auto___48225 = cljs.core.chunk_first(seq__47683_48224__$1);
var G__48226 = cljs.core.chunk_rest(seq__47683_48224__$1);
var G__48227 = c__4679__auto___48225;
var G__48228 = cljs.core.count(c__4679__auto___48225);
var G__48229 = (0);
seq__47683_48209 = G__48226;
chunk__47685_48210 = G__48227;
count__47686_48211 = G__48228;
i__47687_48212 = G__48229;
continue;
} else {
var child_48230 = cljs.core.first(seq__47683_48224__$1);
if(cljs.core.truth_(child_48230)){
node.appendChild(child_48230);


var G__48232 = cljs.core.next(seq__47683_48224__$1);
var G__48233 = null;
var G__48234 = (0);
var G__48235 = (0);
seq__47683_48209 = G__48232;
chunk__47685_48210 = G__48233;
count__47686_48211 = G__48234;
i__47687_48212 = G__48235;
continue;
} else {
var G__48236 = cljs.core.next(seq__47683_48224__$1);
var G__48237 = null;
var G__48238 = (0);
var G__48239 = (0);
seq__47683_48209 = G__48236;
chunk__47685_48210 = G__48237;
count__47686_48211 = G__48238;
i__47687_48212 = G__48239;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48207);
}
}


var G__48240 = cljs.core.next(seq__47655_48199__$1);
var G__48241 = null;
var G__48242 = (0);
var G__48243 = (0);
seq__47655_48145 = G__48240;
chunk__47657_48146 = G__48241;
count__47658_48147 = G__48242;
i__47659_48148 = G__48243;
continue;
} else {
var G__48244 = cljs.core.next(seq__47655_48199__$1);
var G__48245 = null;
var G__48246 = (0);
var G__48247 = (0);
seq__47655_48145 = G__48244;
chunk__47657_48146 = G__48245;
count__47658_48147 = G__48246;
i__47659_48148 = G__48247;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___48248 = arguments.length;
var i__4865__auto___48249 = (0);
while(true){
if((i__4865__auto___48249 < len__4864__auto___48248)){
args__4870__auto__.push((arguments[i__4865__auto___48249]));

var G__48250 = (i__4865__auto___48249 + (1));
i__4865__auto___48249 = G__48250;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq47690){
var G__47691 = cljs.core.first(seq47690);
var seq47690__$1 = cljs.core.next(seq47690);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47691,seq47690__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__47697 = arguments.length;
switch (G__47697) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__44271__auto___48252 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44278__auto__ = (function (){var switch__43837__auto__ = (function (state_47704){
var state_val_47705 = (state_47704[(1)]);
if((state_val_47705 === (1))){
var state_47704__$1 = state_47704;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47704__$1,(2),once_or_cleanup);
} else {
if((state_val_47705 === (2))){
var inst_47701 = (state_47704[(2)]);
var inst_47702 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_47704__$1 = (function (){var statearr_47712 = state_47704;
(statearr_47712[(7)] = inst_47701);

return statearr_47712;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47704__$1,inst_47702);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__43838__auto__ = null;
var shadow$dom$state_machine__43838__auto____0 = (function (){
var statearr_47716 = [null,null,null,null,null,null,null,null];
(statearr_47716[(0)] = shadow$dom$state_machine__43838__auto__);

(statearr_47716[(1)] = (1));

return statearr_47716;
});
var shadow$dom$state_machine__43838__auto____1 = (function (state_47704){
while(true){
var ret_value__43839__auto__ = (function (){try{while(true){
var result__43840__auto__ = switch__43837__auto__(state_47704);
if(cljs.core.keyword_identical_QMARK_(result__43840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43840__auto__;
}
break;
}
}catch (e47725){var ex__43841__auto__ = e47725;
var statearr_47727_48253 = state_47704;
(statearr_47727_48253[(2)] = ex__43841__auto__);


if(cljs.core.seq((state_47704[(4)]))){
var statearr_47731_48254 = state_47704;
(statearr_47731_48254[(1)] = cljs.core.first((state_47704[(4)])));

} else {
throw ex__43841__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48255 = state_47704;
state_47704 = G__48255;
continue;
} else {
return ret_value__43839__auto__;
}
break;
}
});
shadow$dom$state_machine__43838__auto__ = function(state_47704){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__43838__auto____0.call(this);
case 1:
return shadow$dom$state_machine__43838__auto____1.call(this,state_47704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__43838__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__43838__auto____0;
shadow$dom$state_machine__43838__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__43838__auto____1;
return shadow$dom$state_machine__43838__auto__;
})()
})();
var state__44279__auto__ = (function (){var statearr_47741 = f__44278__auto__();
(statearr_47741[(6)] = c__44271__auto___48252);

return statearr_47741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44279__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
