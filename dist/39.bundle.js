(self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[]).push([[39],{314:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(o[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&o[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),t.push(u))}},t}},354:e=>{"use strict";e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(a," */");return[t].concat([i]).join("\n")}return[t].join("\n")}},879:e=>{!function(t){var n=function(e,t,n){"use strict";var r,a;if(function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(t in a=e.lazySizesConfig||e.lazysizesConfig||{},n)t in a||(a[t]=n[t])}(),!t||!t.getElementsByClassName)return{init:function(){},cfg:a,noSupport:!0};var i=t.documentElement,o=e.HTMLPictureElement,s="addEventListener",c="getAttribute",l=e[s].bind(e),u=e.setTimeout,d=e.requestAnimationFrame||u,f=e.requestIdleCallback,p=/^picture$/i,g=["load","error","lazyincluded","_lazyloaded"],h={},v=Array.prototype.forEach,m=function(e,t){return h[t]||(h[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),h[t].test(e[c]("class")||"")&&h[t]},y=function(e,t){m(e,t)||e.setAttribute("class",(e[c]("class")||"").trim()+" "+t)},b=function(e,t){var n;(n=m(e,t))&&e.setAttribute("class",(e[c]("class")||"").replace(n," "))},z=function(e,t,n){var r=n?s:"removeEventListener";n&&z(e,t),g.forEach((function(n){e[r](n,t)}))},C=function(e,n,a,i,o){var s=t.createEvent("Event");return a||(a={}),a.instance=r,s.initEvent(n,!i,!o),s.detail=a,e.dispatchEvent(s),s},w=function(t,n){var r;!o&&(r=e.picturefill||a.pf)?(n&&n.src&&!t[c]("srcset")&&t.setAttribute("srcset",n.src),r({reevaluate:!0,elements:[t]})):n&&n.src&&(t.src=n.src)},E=function(e,t){return(getComputedStyle(e,null)||{})[t]},A=function(e,t,n){for(n=n||e.offsetWidth;n<a.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},I=(ye=[],be=[],ze=ye,Ce=function(){var e=ze;for(ze=ye.length?be:ye,ve=!0,me=!1;e.length;)e.shift()();ve=!1},we=function(e,n){ve&&!n?e.apply(this,arguments):(ze.push(e),me||(me=!0,(t.hidden?u:d)(Ce)))},we._lsFlush=Ce,we),B=function(e,t){return t?function(){I(e)}:function(){var t=this,n=arguments;I((function(){e.apply(t,n)}))}},D=function(e){var t,r=0,i=a.throttleDelay,o=a.ricTimeout,s=function(){t=!1,r=n.now(),e()},c=f&&o>49?function(){f(s,{timeout:o}),o!==a.ricTimeout&&(o=a.ricTimeout)}:B((function(){u(s)}),!0);return function(e){var a;(e=!0===e)&&(o=33),t||(t=!0,(a=i-(n.now()-r))<0&&(a=0),e||a<9?c():u(c,a))}},L=function(e){var t,r,a=99,i=function(){t=null,e()},o=function(){var e=n.now()-r;e<a?u(o,a-e):(f||i)(i)};return function(){r=n.now(),t||(t=u(o,a))}},M=(Q=/^img$/i,J=/^iframe$/i,G="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),X=0,Y=0,Z=0,ee=-1,te=function(e){Z--,(!e||Z<0||!e.target)&&(Z=0)},ne=function(e){return null==U&&(U="hidden"==E(t.body,"visibility")),U||!("hidden"==E(e.parentNode,"visibility")&&"hidden"==E(e,"visibility"))},re=function(e,n){var r,a=e,o=ne(e);for(q-=n,K+=n,H-=n,V+=n;o&&(a=a.offsetParent)&&a!=t.body&&a!=i;)(o=(E(a,"opacity")||1)>0)&&"visible"!=E(a,"overflow")&&(r=a.getBoundingClientRect(),o=V>r.left&&H<r.right&&K>r.top-1&&q<r.bottom+1);return o},ae=function(){var e,n,o,s,l,u,d,f,p,g,h,v,m=r.elements;if((R=a.loadMode)&&Z<8&&(e=m.length)){for(n=0,ee++;n<e;n++)if(m[n]&&!m[n]._lazyRace)if(!G||r.prematureUnveil&&r.prematureUnveil(m[n]))fe(m[n]);else if((f=m[n][c]("data-expand"))&&(u=1*f)||(u=Y),g||(g=!a.expand||a.expand<1?i.clientHeight>500&&i.clientWidth>500?500:370:a.expand,r._defEx=g,h=g*a.expFactor,v=a.hFac,U=null,Y<h&&Z<1&&ee>2&&R>2&&!t.hidden?(Y=h,ee=0):Y=R>1&&ee>1&&Z<6?g:X),p!==u&&(O=innerWidth+u*v,$=innerHeight+u,d=-1*u,p=u),o=m[n].getBoundingClientRect(),(K=o.bottom)>=d&&(q=o.top)<=$&&(V=o.right)>=d*v&&(H=o.left)<=O&&(K||V||H||q)&&(a.loadHidden||ne(m[n]))&&(F&&Z<3&&!f&&(R<3||ee<4)||re(m[n],u))){if(fe(m[n]),l=!0,Z>9)break}else!l&&F&&!s&&Z<4&&ee<4&&R>2&&(W[0]||a.preloadAfterLoad)&&(W[0]||!f&&(K||V||H||q||"auto"!=m[n][c](a.sizesAttr)))&&(s=W[0]||m[n]);s&&!l&&fe(s)}},ie=D(ae),oe=function(e){var t=e.target;t._lazyCache?delete t._lazyCache:(te(e),y(t,a.loadedClass),b(t,a.loadingClass),z(t,ce),C(t,"lazyloaded"))},se=B(oe),ce=function(e){se({target:e.target})},le=function(e,t){var n=e.getAttribute("data-load-mode")||a.iframeLoadMode;0==n?e.contentWindow.location.replace(t):1==n&&(e.src=t)},ue=function(e){var t,n=e[c](a.srcsetAttr);(t=a.customMedia[e[c]("data-media")||e[c]("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},de=B((function(e,t,n,r,i){var o,s,l,d,f,g;(f=C(e,"lazybeforeunveil",t)).defaultPrevented||(r&&(n?y(e,a.autosizesClass):e.setAttribute("sizes",r)),s=e[c](a.srcsetAttr),o=e[c](a.srcAttr),i&&(d=(l=e.parentNode)&&p.test(l.nodeName||"")),g=t.firesLoad||"src"in e&&(s||o||d),f={target:e},y(e,a.loadingClass),g&&(clearTimeout(j),j=u(te,2500),z(e,ce,!0)),d&&v.call(l.getElementsByTagName("source"),ue),s?e.setAttribute("srcset",s):o&&!d&&(J.test(e.nodeName)?le(e,o):e.src=o),i&&(s||d)&&w(e,{src:o})),e._lazyRace&&delete e._lazyRace,b(e,a.lazyClass),I((function(){var t=e.complete&&e.naturalWidth>1;g&&!t||(t&&y(e,a.fastLoadedClass),oe(f),e._lazyCache=!0,u((function(){"_lazyCache"in e&&delete e._lazyCache}),9)),"lazy"==e.loading&&Z--}),!0)})),fe=function(e){if(!e._lazyRace){var t,n=Q.test(e.nodeName),r=n&&(e[c](a.sizesAttr)||e[c]("sizes")),i="auto"==r;(!i&&F||!n||!e[c]("src")&&!e.srcset||e.complete||m(e,a.errorClass)||!m(e,a.lazyClass))&&(t=C(e,"lazyunveilread").detail,i&&_.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,Z++,de(e,t,i,r,n))}},pe=L((function(){a.loadMode=3,ie()})),ge=function(){3==a.loadMode&&(a.loadMode=2),pe()},he=function(){F||(n.now()-T<999?u(he,999):(F=!0,a.loadMode=3,ie(),l("scroll",ge,!0)))},{_:function(){T=n.now(),r.elements=t.getElementsByClassName(a.lazyClass),W=t.getElementsByClassName(a.lazyClass+" "+a.preloadClass),l("scroll",ie,!0),l("resize",ie,!0),l("pageshow",(function(e){if(e.persisted){var n=t.querySelectorAll("."+a.loadingClass);n.length&&n.forEach&&d((function(){n.forEach((function(e){e.complete&&fe(e)}))}))}})),e.MutationObserver?new MutationObserver(ie).observe(i,{childList:!0,subtree:!0,attributes:!0}):(i[s]("DOMNodeInserted",ie,!0),i[s]("DOMAttrModified",ie,!0),setInterval(ie,999)),l("hashchange",ie,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach((function(e){t[s](e,ie,!0)})),/d$|^c/.test(t.readyState)?he():(l("load",he),t[s]("DOMContentLoaded",ie),u(he,2e4)),r.elements.length?(ae(),I._lsFlush()):ie()},checkElems:ie,unveil:fe,_aLSL:ge}),_=(N=B((function(e,t,n,r){var a,i,o;if(e._lazysizesWidth=r,r+="px",e.setAttribute("sizes",r),p.test(t.nodeName||""))for(i=0,o=(a=t.getElementsByTagName("source")).length;i<o;i++)a[i].setAttribute("sizes",r);n.detail.dataAttr||w(e,n.detail)})),k=function(e,t,n){var r,a=e.parentNode;a&&(n=A(e,a,n),(r=C(e,"lazybeforesizes",{width:n,dataAttr:!!t})).defaultPrevented||(n=r.detail.width)&&n!==e._lazysizesWidth&&N(e,a,r,n))},P=L((function(){var e,t=S.length;if(t)for(e=0;e<t;e++)k(S[e])})),{_:function(){S=t.getElementsByClassName(a.autosizesClass),l("resize",P)},checkElems:P,updateElem:k}),x=function(){!x.i&&t.getElementsByClassName&&(x.i=!0,_._(),M._())};var S,N,k,P;var W,F,j,R,T,O,$,q,H,V,K,U,Q,J,G,X,Y,Z,ee,te,ne,re,ae,ie,oe,se,ce,le,ue,de,fe,pe,ge,he;var ve,me,ye,be,ze,Ce,we;return u((function(){a.init&&x()})),r={cfg:a,autoSizer:_,loader:M,init:x,uP:w,aC:y,rC:b,hC:m,fire:C,gW:A,rAF:I}}(t,t.document,Date);t.lazySizes=n,e.exports&&(e.exports=n)}("undefined"!=typeof window?window:{})},552:(e,t,n)=>{var r,a,i;!function(o,s){if(o){s=s.bind(null,o,o.document),e.exports?s(n(879)):(a=[n(879)],void 0===(i="function"==typeof(r=s)?r.apply(t,a):r)||(e.exports=i))}}("undefined"!=typeof window?window:0,(function(e,t,n){"use strict";if(e.addEventListener){var r=/\s+(\d+)(w|h)\s+(\d+)(w|h)/,a=/parent-fit["']*\s*:\s*["']*(contain|cover|width)/,i=/parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/,o=/^picture$/i,s=n.cfg,c={getParent:function(t,n){var r=t,a=t.parentNode;return n&&"prev"!=n||!a||!o.test(a.nodeName||"")||(a=a.parentNode),"self"!=n&&(r="prev"==n?t.previousElementSibling:n&&(a.closest||e.jQuery)&&(a.closest?a.closest(n):jQuery(a).closest(n)[0])||a),r},getFit:function(e){var t,n,r=getComputedStyle(e,null)||{},o=r.content||r.fontFamily,s={fit:e._lazysizesParentFit||e.getAttribute("data-parent-fit")};return!s.fit&&o&&(t=o.match(a))&&(s.fit=t[1]),s.fit?(!(n=e._lazysizesParentContainer||e.getAttribute("data-parent-container"))&&o&&(t=o.match(i))&&(n=t[1]),s.parent=c.getParent(e,n)):s.fit=r.objectFit,s},getImageRatio:function(t){var n,a,i,c,l,u,d,f=t.parentNode,p=f&&o.test(f.nodeName||"")?f.querySelectorAll("source, img"):[t];for(n=0;n<p.length;n++)if(a=(t=p[n]).getAttribute(s.srcsetAttr)||t.getAttribute("srcset")||t.getAttribute("data-pfsrcset")||t.getAttribute("data-risrcset")||"",i=t._lsMedia||t.getAttribute("media"),i=s.customMedia[t.getAttribute("data-media")||i]||i,a&&(!i||(e.matchMedia&&matchMedia(i)||{}).matches)){(c=parseFloat(t.getAttribute("data-aspectratio")))||((l=a.match(r))?"w"==l[2]?(u=l[1],d=l[3]):(u=l[3],d=l[1]):(u=t.getAttribute("width"),d=t.getAttribute("height")),c=u/d);break}return c},calculateSize:function(e,t){var n,r,a,i=this.getFit(e),o=i.fit,s=i.parent;return"width"==o||("contain"==o||"cover"==o)&&(r=this.getImageRatio(e))?(s?t=s.clientWidth:s=e,a=t,"width"==o?a=t:(n=t/s.clientHeight)&&("cover"==o&&n<r||"contain"==o&&n>r)&&(a=t*(r/n)),a):t}};n.parentFit=c,t.addEventListener("lazybeforesizes",(function(e){if(!e.defaultPrevented&&e.detail.instance==n){var t=e.target;e.detail.width=c.calculateSize(t,e.detail.width)}}))}}))},602:(e,t,n)=>{"use strict";n.d(t,{P2:()=>h});const r=(e,t)=>t.some((t=>e instanceof t));let a,i;const o=new WeakMap,s=new WeakMap,c=new WeakMap;let l={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return o.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return p(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function u(e){l=e(l)}function d(e){return(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(g(this),t),p(this.request)}:function(...t){return p(e.apply(g(this),t))}}function f(e){return"function"==typeof e?d(e):(e instanceof IDBTransaction&&function(e){if(o.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",i),e.removeEventListener("abort",i)},a=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",a),e.addEventListener("error",i),e.addEventListener("abort",i)}));o.set(e,t)}(e),r(e,a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,l):e)}function p(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",a),e.removeEventListener("error",i)},a=()=>{t(p(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",a),e.addEventListener("error",i)}));return c.set(t,e),t}(e);if(s.has(e))return s.get(e);const t=f(e);return t!==e&&(s.set(e,t),c.set(t,e)),t}const g=e=>c.get(e);function h(e,t,{blocked:n,upgrade:r,blocking:a,terminated:i}={}){const o=indexedDB.open(e,t),s=p(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(p(o.result),e.oldVersion,e.newVersion,p(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),s.then((e=>{i&&e.addEventListener("close",(()=>i())),a&&e.addEventListener("versionchange",(e=>a(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),s}const v=["get","getKey","getAll","getAllKeys","count"],m=["put","add","delete","clear"],y=new Map;function b(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(y.get(t))return y.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,a=m.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!a&&!v.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,a?"readwrite":"readonly");let o=i.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),a&&i.done]))[0]};return y.set(t,i),i}u((e=>({...e,get:(t,n,r)=>b(t,n)||e.get(t,n,r),has:(t,n)=>!!b(t,n)||e.has(t,n)})));const z=["continue","continuePrimaryKey","advance"],C={},w=new WeakMap,E=new WeakMap,A={get(e,t){if(!z.includes(t))return e[t];let n=C[t];return n||(n=C[t]=function(...e){w.set(this,E.get(this)[t](...e))}),n}};async function*I(...e){let t=this;if(t instanceof IDBCursor||(t=await t.openCursor(...e)),!t)return;const n=new Proxy(t,A);for(E.set(n,t),c.set(n,g(t));t;)yield n,t=await(w.get(n)||t.continue()),w.delete(n)}function B(e,t){return t===Symbol.asyncIterator&&r(e,[IDBIndex,IDBObjectStore,IDBCursor])||"iterate"===t&&r(e,[IDBIndex,IDBObjectStore])}u((e=>({...e,get:(t,n,r)=>B(t,n)?I:e.get(t,n,r),has:(t,n)=>B(t,n)||e.has(t,n)})))}}]);
//# sourceMappingURL=39.bundle.js.map