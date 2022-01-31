
shadow.cljs.devtools.client.env.module_loaded('main');

try { yenoh.ui.init(); } catch (e) { console.error("An error occurred when calling (yenoh.ui/init)"); throw(e); }