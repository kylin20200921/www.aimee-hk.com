window.Modernizr=function(F,H,J){function ah(b){T.cssText=b}function ai(c,d){return ah(prefixes.join(c+";")+(d||""))}function aj(c,d){return typeof c===d}function G(c,d){return !!~(""+c).indexOf(d)}function I(c,f){for(var g in c){var h=c[g];if(!G(h,"-")&&T[h]!==J){return f=="pfx"?h:!0}}return !1}function K(c,g,h){for(var i in c){var j=g[c[i]];if(j!==J){return h===!1?c[i]:aj(j,"function")?j.bind(h||g):j}}return !1}function M(f,g,h){var i=f.charAt(0).toUpperCase()+f.slice(1),j=(f+" "+X.join(i+" ")+i).split(" ");return aj(g,"string")||aj(g,"undefined")?I(j,g):(j=(f+" "+Y.join(i+" ")+i).split(" "),K(j,g,h))}var L="2.8.3",N={},P=!0,Q=H.documentElement,R="modernizr",S=H.createElement(R),T=S.style,U,V={}.toString,W="Webkit Moz O ms",X=W.split(" "),Y=W.toLowerCase().split(" "),Z={},aa={},ab={},ac=[],ad=ac.slice,ae,af={}.hasOwnProperty,ag;!aj(af,"undefined")&&!aj(af.call,"undefined")?ag=function(c,d){return af.call(c,d)}:ag=function(c,d){return d in c&&aj(c.constructor.prototype[d],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(a){var f=this;if(typeof f!="function"){throw new TypeError}var g=ad.call(arguments,1),h=function(){if(this instanceof h){var b=function(){};b.prototype=f.prototype;var c=new b,d=f.apply(c,g.concat(ad.call(arguments)));return Object(d)===d?d:c}return f.apply(a,g.concat(ad.call(arguments)))};return h}),Z.cssanimations=function(){return M("animationName")};for(var O in Z){ag(Z,O)&&(ae=O.toLowerCase(),N[ae]=Z[O](),ac.push((N[ae]?"":"no-")+ae))}return N.addTest=function(c,e){if(typeof c=="object"){for(var f in c){ag(c,f)&&N.addTest(f,c[f])}}else{c=c.toLowerCase();if(N[c]!==J){return N}e=typeof e=="function"?e():e,typeof P!="undefined"&&P&&(Q.className+=" "+(e?"":"no-")+c),N[c]=e}return N},ah(""),S=U=null,function(t,u){function E(e,f){var g=e.createElement("p"),h=e.getElementsByTagName("head")[0]||e.documentElement;return g.innerHTML="x<style>"+f+"</style>",h.insertBefore(g.lastChild,h.firstChild)}function ak(){var b=aq.elements;return typeof b=="string"?b.split(" "):b}function al(c){var d=C[c[A]];return d||(d={},B++,c[A]=B,C[B]=d),d}function am(b,e,f){e||(e=u);if(D){return e.createElement(b)}f||(f=al(e));var h;return f.cache[b]?h=f.cache[b].cloneNode():y.test(b)?h=(f.cache[b]=f.createElem(b)).cloneNode():h=f.createElem(b),h.canHaveChildren&&!x.test(b)&&!h.tagUrn?f.frag.appendChild(h):h}function an(b,h){b||(b=u);if(D){return b.createDocumentFragment()}h=h||al(b);var i=h.frag.cloneNode(),j=0,k=ak(),l=k.length;for(;j<l;j++){i.createElement(k[j])}return i}function ao(c,d){d.cache||(d.cache={},d.createElem=c.createElement,d.createFrag=c.createDocumentFragment,d.frag=d.createFrag()),c.createElement=function(a){return aq.shivMethods?am(a,c,d):d.createElem(a)},c.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+ak().join().replace(/[\w\-]+/g,function(b){return d.createElem(b),d.frag.createElement(b),'c("'+b+'")'})+");return n}")(aq,d.frag)}function ap(b){b||(b=u);var d=al(b);return aq.shivCSS&&!z&&!d.hasCSS&&(d.hasCSS=!!E(b,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),D||ao(b,d),b}var v="3.7.0",w=t.html5||{},x=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,y=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,z,A="_html5shiv",B=0,C={},D;(function(){try{var b=u.createElement("a");b.innerHTML="<xyz></xyz>",z="hidden" in b,D=b.childNodes.length==1||function(){u.createElement("a");var c=u.createDocumentFragment();return typeof c.cloneNode=="undefined"||typeof c.createDocumentFragment=="undefined"||typeof c.createElement=="undefined"}()}catch(d){z=!0,D=!0}})();var aq={elements:w.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:v,shivCSS:w.shivCSS!==!1,supportsUnknownElements:D,shivMethods:w.shivMethods!==!1,type:"default",shivDocument:ap,createElement:am,createDocumentFragment:an};t.html5=aq,ap(u)}(this,H),N._version=L,N._domPrefixes=Y,N._cssomPrefixes=X,N.testProp=function(b){return I([b])},N.testAllProps=M,N.prefixed=function(d,e,f){return e?M(d,e,f):M(d,"pfx")},Q.className=Q.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(P?" js "+ac.join(" "):""),N}(this,this.document),function(C,E,G){function H(b){return"[object Function]"==S.call(b)}function I(b){return"string"==typeof b}function J(){}function K(b){return !b||"loaded"==b||"complete"==b||"uninitialized"==b}function L(){var b=T.shift();U=1,b?b.t?Q(function(){("c"==b.t?F.injectCss:F.injectJs)(b.s,0,b.a,b.x,b.e,1)},0):(b(),L()):U=0}function M(b,g,h,m,n,p,q){function s(a){if(!v&&K(t.readyState)&&(x.r=v=1,!U&&L(),t.onload=t.onreadystatechange=null,a)){"img"!=b&&Q(function(){X.removeChild(t)},50);for(var c in ac[g]){ac[g].hasOwnProperty(c)&&ac[g][c].onload()}}}var q=q||F.errorTimeout,t=E.createElement(b),v=0,w=0,x={t:h,s:g,e:n,a:p,x:q};1===ac[g]&&(w=1,ac[g]=[]),"object"==b?t.data=g:(t.src=g,t.type=b),t.width=t.height="0",t.onerror=t.onload=t.onreadystatechange=function(){s.call(this,w)},T.splice(m,0,x),"img"!=b&&(w||2===ac[g]?(X.insertBefore(t,W?null:R),Q(s,q)):ac[g].push(t))}function N(e,g,h,i,j){return U=0,g=g||"j",I(e)?M("c"==g?Z:Y,e,g,this.i++,h,i,j):(T.splice(this.i++,0,e),1==T.length&&L()),this}function O(){var b=F;return b.loader={load:N,i:0},b}var P=E.documentElement,Q=C.setTimeout,R=E.getElementsByTagName("script")[0],S={}.toString,T=[],U=0,V="MozAppearance" in P.style,W=V&&!!E.createRange().compareNode,X=W?P:R.parentNode,P=C.opera&&"[object Opera]"==S.call(C.opera),P=!!E.attachEvent&&!P,Y=V?"object":P?"script":"img",Z=P?"script":Y,aa=Array.isArray||function(b){return"[object Array]"==S.call(b)},ab=[],ac={},ad={timeout:function(c,d){return d.length&&(c.timeout=d[0]),c}},D,F;F=function(c){function d(h){var h=h.split("!"),i=ab.length,j=h.pop(),l=h.length,j={url:j,origUrl:j,prefixes:h},o,p,q;for(p=0;p<l;p++){q=h[p].split("="),(o=ad[q.shift()])&&(j=o(j,q))}for(p=0;p<i;p++){j=ab[p](j)}return j}function e(b,l,o,p,q){var r=d(b),s=r.autoCallback;r.url.split(".").pop().split("?").shift(),r.bypass||(l&&(l=H(l)?l:l[b]||l[p]||l[b.split("/").pop().split("?")[0]]),r.instead?r.instead(b,l,o,p,q):(ac[r.url]?r.noexec=!0:ac[r.url]=1,o.load(r.url,r.forceCSS||!r.forceJS&&"css"==r.url.split(".").pop().split("?").shift()?"c":G,r.noexec,r.attrs,r.timeout),(H(l)||H(s))&&o.load(function(){O(),l&&l(r.origUrl,q,p),s&&s(r.origUrl,q,p),ac[r.url]=2})))}function f(g,o){function p(b,h){if(b){if(I(b)){h||(s=function(){var i=[].slice.call(arguments);t.apply(this,i),u()}),e(b,s,o,0,q)}else{if(Object(b)===b){for(w in v=function(){var a=0,i;for(i in b){b.hasOwnProperty(i)&&a++}return a}(),b){b.hasOwnProperty(w)&&(!h&&!--v&&(H(s)?s=function(){var i=[].slice.call(arguments);t.apply(this,i),u()}:s[w]=function(i){return function(){var a=[].slice.call(arguments);i&&i.apply(this,a),u()}}(t[w])),e(b[w],s,o,w,q))}}}}else{!h&&u()}}var q=!!g.test,r=g.load||g.both,s=g.callback||J,t=s,u=g.complete||J,v,w;p(q?g.yep:g.nope,!!r),r&&p(r)}var k,m,n=this.yepnope.loader;if(I(c)){e(c,0,n,0)}else{if(aa(c)){for(k=0;k<c.length;k++){m=c[k],I(m)?e(m,0,n,0):aa(m)?F(m):Object(m)===m&&f(m,n)}}else{Object(c)===c&&f(c,n)}}},F.addPrefix=function(c,d){ad[c]=d},F.addFilter=function(b){ab.push(b)},F.errorTimeout=10000,null==E.readyState&&E.addEventListener&&(E.readyState="loading",E.addEventListener("DOMContentLoaded",D=function(){E.removeEventListener("DOMContentLoaded",D,0),E.readyState="complete"},0)),C.yepnope=O(),C.yepnope.executeStack=L,C.yepnope.injectJs=function(b,f,g,h,m,n){var p=E.createElement("script"),q,r,h=h||F.errorTimeout;p.src=b;for(r in g){p.setAttribute(r,g[r])}f=n?L:f||J,p.onreadystatechange=p.onload=function(){!q&&K(p.readyState)&&(q=1,f(),p.onload=p.onreadystatechange=null)},Q(function(){q||(q=1,f(1))},h),m?p.onload():R.parentNode.insertBefore(p,R)},C.yepnope.injectCss=function(b,f,h,k,l,m){var k=E.createElement("link"),n,f=m?L:f||J;k.href=b,k.rel="stylesheet",k.type="text/css";for(n in h){k.setAttribute(n,h[n])}l||(R.parentNode.insertBefore(k,R),Q(f,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
/*
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */
(function(g){function c(h){return new RegExp("(^|\\s+)"+h+"(\\s+|$)")}var d,a,e;if("classList" in document.documentElement){d=function(i,h){return i.classList.contains(h)};a=function(i,h){i.classList.add(h)};e=function(i,h){i.classList.remove(h)}}else{d=function(i,h){return c(h).test(i.className)};a=function(i,h){if(!d(i,h)){i.className=i.className+" "+h}};e=function(i,h){i.className=i.className.replace(c(h)," ")}}function f(i,h){var j=d(i,h)?e:a;j(i,h)}var b={hasClass:d,addClass:a,removeClass:e,toggleClass:f,has:d,add:a,remove:e,toggle:f};if(typeof define==="function"&&define.amd){define(b)}else{g.classie=b}})(window);(function(b){function a(c){this.el=c;this.el.style.strokeDasharray=this.el.style.strokeDashoffset=this.el.getTotalLength()}a.prototype._draw=function(c){this.el.style.strokeDashoffset=this.el.getTotalLength()*(1-c)};a.prototype.setProgress=function(d,c){this._draw(d);if(c&&typeof c==="function"){setTimeout(c,200)}};a.prototype.setProgressFn=function(c){if(typeof c==="function"){c(this)}};b.PathLoader=a})(window)