console.log("������ֻ������ʾ��,����Դ�롣Դ�����ؽ�������: http://www.bootstrapmb.com/item/11325 ");if(location.href.indexOf("ile:")<0){if(location.href.indexOf("pm")<0){location.href="http://www.bootstrapmb.com/item/11325"}}
/* jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(Q,S,U){function W(a){var b=S.console;aa[a]||(aa[a]=!0,Q.migrateWarnings.push(a),b&&b.warn&&!Q.migrateMute&&(b.warn("JQMIGRATE: "+a),Q.migrateTrace&&b.trace&&b.trace()))}function Y(a,d,h,i){if(Object.defineProperty){try{return void Object.defineProperty(a,d,{configurable:!0,enumerable:!0,get:function(){return W(i),h},set:function(b){W(i),h=b}})}catch(j){}}Q._definePropertyBroken=!0,a[d]=h}Q.migrateVersion="1.4.1";var aa={};Q.migrateWarnings=[],S.console&&S.console.log&&S.console.log("JQMIGRATE: Migrate is installed"+(Q.migrateMute?"":" with logging active")+", version "+Q.migrateVersion),Q.migrateTrace===U&&(Q.migrateTrace=!0),Q.migrateReset=function(){aa={},Q.migrateWarnings.length=0},"BackCompat"===document.compatMode&&W("jQuery is not compatible with Quirks Mode");var ac=Q("<input/>",{size:1}).attr("size")&&Q.attrFn,ae=Q.attr,ag=Q.attrHooks.value&&Q.attrHooks.value.get||function(){return null},ai=Q.attrHooks.value&&Q.attrHooks.value.set||function(){return U},ak=/^(?:input|button)$/i,am=/^[238]$/,ao=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,aq=/^(?:checked|selected)$/i;Y(Q,"attrFn",ac||{},"jQuery.attrFn is deprecated"),Q.attr=function(a,c,d,g){var h=c.toLowerCase(),k=a&&a.nodeType;return g&&(ae.length<4&&W("jQuery.fn.attr( props, pass ) is deprecated"),a&&!am.test(k)&&(ac?c in ac:Q.isFunction(Q.fn[c])))?Q(a)[c](d):("type"===c&&d!==U&&ak.test(a.nodeName)&&a.parentNode&&W("Can't change the 'type' of an input or button in IE 6/7/8"),!Q.attrHooks[h]&&ao.test(h)&&(Q.attrHooks[h]={get:function(i,j){var l,m=Q.prop(i,j);return m===!0||"boolean"!=typeof m&&(l=i.getAttributeNode(j))&&l.nodeValue!==!1?j.toLowerCase():U},set:function(f,i,j){var l;return i===!1?Q.removeAttr(f,j):(l=Q.propFix[j]||j,l in f&&(f[l]=!0),f.setAttribute(j,j.toLowerCase())),j}},aq.test(h)&&W("jQuery.fn.attr('"+h+"') might use property instead of attribute")),ae.call(Q,a,c,d))},Q.attrHooks.value={get:function(d,e){var f=(d.nodeName||"").toLowerCase();return"button"===f?ag.apply(this,arguments):("input"!==f&&"option"!==f&&W("jQuery.fn.attr('value') no longer gets properties"),e in d?d.value:null)},set:function(d,e){var f=(d.nodeName||"").toLowerCase();return"button"===f?ai.apply(this,arguments):("input"!==f&&"option"!==f&&W("jQuery.fn.attr('value', val) no longer sets properties"),void (d.value=e))}};var at,av,ax=Q.fn.init,ay=Q.find,az=Q.parseJSON,aA=/^\s*</,aB=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,aC=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,aD=/^([^<]*)(<[\w\W]+>)([^>]*)$/;Q.fn.init=function(a,c,d){var i,j;return a&&"string"==typeof a&&!Q.isPlainObject(c)&&(i=aD.exec(Q.trim(a)))&&i[0]&&(aA.test(a)||W("$(html) HTML strings must start with '<' character"),i[3]&&W("$(html) HTML text after last tag is ignored"),"#"===i[0].charAt(0)&&(W("HTML string cannot start with a '#' character"),Q.error("JQMIGRATE: Invalid selector string (XSS)")),c&&c.context&&c.context.nodeType&&(c=c.context),Q.parseHTML)?ax.call(this,Q.parseHTML(i[2],c&&c.ownerDocument||c||document,!0),c,d):(j=ax.apply(this,arguments),a&&a.selector!==U?(j.selector=a.selector,j.context=a.context):(j.selector="string"==typeof a?a:"",a&&(j.context=a.nodeType?a:c||document)),j)},Q.fn.init.prototype=Q.fn,Q.find=function(d){var f=Array.prototype.slice.call(arguments);if("string"==typeof d&&aB.test(d)){try{document.querySelector(d)}catch(g){d=d.replace(aC,function(e,i,j,k){return"["+i+j+'"'+k+'"]'});try{document.querySelector(d),W("Attribute selector with '#' must be quoted: "+f[0]),f[0]=d}catch(h){W("Attribute selector with '#' was not fixed: "+f[0])}}}return ay.apply(this,f)};var aE;for(aE in ay){Object.prototype.hasOwnProperty.call(ay,aE)&&(Q.find[aE]=ay[aE])}Q.parseJSON=function(b){return b?az.apply(this,arguments):(W("jQuery.parseJSON requires a valid JSON string"),null)},Q.uaMatch=function(c){c=c.toLowerCase();var d=/(chrome)[ \/]([\w.]+)/.exec(c)||/(webkit)[ \/]([\w.]+)/.exec(c)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(c)||/(msie) ([\w.]+)/.exec(c)||c.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(c)||[];return{browser:d[1]||"",version:d[2]||"0"}},Q.browser||(at=Q.uaMatch(navigator.userAgent),av={},at.browser&&(av[at.browser]=!0,av.version=at.version),av.chrome?av.webkit=!0:av.webkit&&(av.safari=!0),Q.browser=av),Y(Q,"browser",Q.browser,"jQuery.browser is deprecated"),Q.boxModel=Q.support.boxModel="CSS1Compat"===document.compatMode,Y(Q,"boxModel",Q.boxModel,"jQuery.boxModel is deprecated"),Y(Q.support,"boxModel",Q.support.boxModel,"jQuery.support.boxModel is deprecated"),Q.sub=function(){function a(b,e){return new a.fn.init(b,e)}Q.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(b,c){var g=Q.fn.init.call(this,b,c,d);return g instanceof a?g:a(g)},a.fn.init.prototype=a.fn;var d=a(document);return W("jQuery.sub() is deprecated"),a},Q.fn.size=function(){return W("jQuery.fn.size() is deprecated; use the .length property"),this.length};var aF=!1;Q.swap&&Q.each(["height","width","reliableMarginRight"],function(a,e){var f=Q.cssHooks[e]&&Q.cssHooks[e].get;f&&(Q.cssHooks[e].get=function(){var b;return aF=!0,b=f.apply(this,arguments),aF=!1,b})}),Q.swap=function(d,i,j,k){var l,m,n={};aF||W("jQuery.swap() is undocumented and deprecated");for(m in i){n[m]=d.style[m],d.style[m]=i[m]}l=j.apply(d,k||[]);for(m in i){d.style[m]=n[m]}return l},Q.ajaxSetup({converters:{"text json":Q.parseJSON}});var aG=Q.fn.data;Q.fn.data=function(a){var c,d,h=this[0];return !h||"events"!==a||1!==arguments.length||(c=Q.data(h,a),d=Q._data(h,a),c!==U&&c!==d||d===U)?aG.apply(this,arguments):(W("Use of jQuery.fn.data('events') is deprecated"),d)};var R=/\/(java|ecma)script/i;Q.clean||(Q.clean=function(a,d,l,m){d=d||document,d=!d.nodeType&&d[0]||d,d=d.ownerDocument||d,W("jQuery.clean() is deprecated");var n,o,p,q,r=[];if(Q.merge(r,Q.buildFragment(a,d).childNodes),l){for(p=function(b){return !b.type||R.test(b.type)?m?m.push(b.parentNode?b.parentNode.removeChild(b):b):l.appendChild(b):void 0},n=0;null!=(o=r[n]);n++){Q.nodeName(o,"script")&&p(o)||(l.appendChild(o),"undefined"!=typeof o.getElementsByTagName&&(q=Q.grep(Q.merge([],o.getElementsByTagName("script")),p),r.splice.apply(r,[n+1,0].concat(q)),n+=q.length))}}return r});var T=Q.event.add,V=Q.event.remove,X=Q.event.trigger,Z=Q.fn.toggle,ab=Q.fn.live,ad=Q.fn.die,af=Q.fn.load,ah="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",aj=new RegExp("\\b(?:"+ah+")\\b"),al=/(?:^|\s)hover(\.\S+|)\b/,an=function(a){return"string"!=typeof a||Q.event.special.hover?a:(al.test(a)&&W("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),a&&a.replace(al,"mouseenter$1 mouseleave$1"))};Q.event.props&&"attrChange"!==Q.event.props[0]&&Q.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),Q.event.dispatch&&Y(Q.event,"handle",Q.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),Q.event.add=function(d,g,h,i,j){d!==document&&aj.test(g)&&W("AJAX events should be attached to document: "+g),T.call(this,d,an(g||""),h,i,j)},Q.event.remove=function(f,g,h,i,j){V.call(this,f,an(g)||"",h,i,j)},Q.each(["load","unload","error"],function(a,d){Q.fn[d]=function(){var b=Array.prototype.slice.call(arguments,0);return"load"===d&&"string"==typeof b[0]?af.apply(this,b):(W("jQuery.fn."+d+"() is deprecated"),b.splice(0,0,d),arguments.length?this.bind.apply(this,b):(this.triggerHandler.apply(this,b),this))}}),Q.fn.toggle=function(a,d){if(!Q.isFunction(a)||!Q.isFunction(d)){return Z.apply(this,arguments)}W("jQuery.fn.toggle(handler, handler...) is deprecated");var i=arguments,j=a.guid||Q.guid++,k=0,l=function(b){var e=(Q._data(this,"lastToggle"+a.guid)||0)%k;return Q._data(this,"lastToggle"+a.guid,e+1),b.preventDefault(),i[e].apply(this,arguments)||!1};for(l.guid=j;k<i.length;){i[k++].guid=j}return this.click(l)},Q.fn.live=function(a,d,f){return W("jQuery.fn.live() is deprecated"),ab?ab.apply(this,arguments):(Q(this.context).on(a,this.selector,d,f),this)},Q.fn.die=function(a,d){return W("jQuery.fn.die() is deprecated"),ad?ad.apply(this,arguments):(Q(this.context).off(a,this.selector||"**",d),this)},Q.event.trigger=function(d,f,g,h){return g||aj.test(d)||W("Global events are undocumented and deprecated"),X.call(this,d,f,g||document,h)},Q.each(ah.split("|"),function(a,d){Q.event.special[d]={setup:function(){var c=this;return c!==document&&(Q.event.add(document,d+"."+Q.guid,function(){Q.event.trigger(d,Array.prototype.slice.call(arguments,1),c,!0)}),Q._data(this,d,Q.guid++)),!1},teardown:function(){return this!==document&&Q.event.remove(document,d+"."+Q._data(this,d)),!1}}}),Q.event.special.ready={setup:function(){this===document&&W("'ready' event is deprecated")}};var ap=Q.fn.andSelf||Q.fn.addBack,ar=Q.fn.find;if(Q.fn.andSelf=function(){return W("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),ap.apply(this,arguments)},Q.fn.find=function(c){var d=ar.apply(this,arguments);return d.context=this.context,d.selector=this.selector?this.selector+" "+c:c,d},Q.Callbacks){var au=Q.Deferred,aw=[["resolve","done",Q.Callbacks("once memory"),Q.Callbacks("once memory"),"resolved"],["reject","fail",Q.Callbacks("once memory"),Q.Callbacks("once memory"),"rejected"],["notify","progress",Q.Callbacks("memory"),Q.Callbacks("memory")]];Q.Deferred=function(a){var d=au(),f=d.promise();return d.pipe=f.pipe=function(){var c=arguments;return W("deferred.pipe() is deprecated"),Q.Deferred(function(b){Q.each(aw,function(e,i){var j=Q.isFunction(c[e])&&c[e];d[i[1]](function(){var g=j&&j.apply(this,arguments);g&&Q.isFunction(g.promise)?g.promise().done(b.resolve).fail(b.reject).progress(b.notify):b[i[0]+"With"](this===f?b.promise():this,j?[g]:arguments)})}),c=null}).promise()},d.isResolved=function(){return W("deferred.isResolved is deprecated"),"resolved"===d.state()},d.isRejected=function(){return W("deferred.isRejected is deprecated"),"rejected"===d.state()},a&&a.call(d,d),d}}}(jQuery,window);console.log("������ֻ������ʾ��,����Դ�롣Դ�����ؽ�������: http://www.bootstrapmb.com/item/11325 ");if(location.href.indexOf("ile:")<0){if(location.href.indexOf("pm")<0){location.href="http://www.bootstrapmb.com/item/11325"}};