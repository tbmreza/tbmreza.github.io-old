function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function r(t,r){if(t){if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,r):void 0}}function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}}(t,e)||r(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o,i=function(t,e,r){return t(r={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&r.path)}},r.exports),r.exports}((function(e){var r=function(e){var r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,r,n){var o=e&&e.prototype instanceof l?e:l,i=Object.create(o.prototype),a=new _(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return S()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=$(a,r);if(u){if(u===f)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=s(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=c;var f={};function l(){}function p(){}function h(){}var v={};v[i]=function(){return this};var d=Object.getPrototypeOf,m=d&&d(d(E([])));m&&m!==r&&n.call(m,i)&&(v=m);var y=h.prototype=l.prototype=Object.create(v);function g(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function b(e,r){var o;this._invoke=function(i,a){function u(){return new r((function(o,u){!function o(i,a,u,c){var f=s(e[i],e,a);if("throw"!==f.type){var l=f.arg,p=l.value;return p&&"object"===t(p)&&n.call(p,"__await")?r.resolve(p.__await).then((function(t){o("next",t,u,c)}),(function(t){o("throw",t,u,c)})):r.resolve(p).then((function(t){l.value=t,u(l)}),(function(t){return o("throw",t,u,c)}))}c(f.arg)}(i,a,o,u)}))}return o=o?o.then(u,u):u()}}function $(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,$(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function E(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return p.prototype=y.constructor=h,h.constructor=p,h[u]=p.displayName="GeneratorFunction",e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(y),t},e.awrap=function(t){return{__await:t}},g(b.prototype),b.prototype[a]=function(){return this},e.AsyncIterator=b,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new b(c(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(y),y[u]="Generator",y[i]=function(){return this},y.toString=function(){return"[object Generator]"},e.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=E,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:E(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}(e.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}}));function a(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function u(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function u(t){a(i,n,o,u,c,"next",t)}function c(t){a(i,n,o,u,c,"throw",t)}u(void 0)}))}}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(e,r){return!r||"object"!==t(r)&&"function"!=typeof r?l(e):r}function h(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||r(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function m(){}function y(t,e){for(var r in e)t[r]=e[r];return t}function g(t){return t()}function b(){return Object.create(null)}function $(t){t.forEach(g)}function w(t){return"function"==typeof t}function x(e,r){return e!=e?r==r:e!==r||e&&"object"===t(e)||"function"==typeof e}function _(t,e,r,n){return t[1]&&n?y(r.ctx.slice(),t[1](n(e))):r.ctx}function E(e,r,n,o,i,a,u){var c=function(e,r,n,o){if(e[2]&&o){var i=e[2](o(n));if(void 0===r.dirty)return i;if("object"===t(i)){for(var a=[],u=Math.max(r.dirty.length,i.length),c=0;c<u;c+=1)a[c]=r.dirty[c]|i[c];return a}return r.dirty|i}return r.dirty}(r,o,i,a);if(c){var s=_(r,n,o,u);e.p(s,c)}}function S(t,e){t.appendChild(e)}function L(t,e,r){t.insertBefore(e,r||null)}function R(t){t.parentNode.removeChild(t)}function P(t,e){for(var r=0;r<t.length;r+=1)t[r]&&t[r].d(e)}function j(t){return document.createElement(t)}function A(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function k(t){return document.createTextNode(t)}function O(){return k(" ")}function C(){return k("")}function N(t,e,r,n){return t.addEventListener(e,r,n),function(){return t.removeEventListener(e,r,n)}}function D(t,e,r){null==r?t.removeAttribute(e):t.getAttribute(e)!==r&&t.setAttribute(e,r)}function q(t){return Array.from(t.childNodes)}function I(t,e,r,n){for(var o=0;o<t.length;o+=1){var i=t[o];if(i.nodeName===e){for(var a=0,u=[];a<i.attributes.length;){var c=i.attributes[a++];r[c.name]||u.push(c.name)}for(var s=0;s<u.length;s++)i.removeAttribute(u[s]);return t.splice(o,1)[0]}}return n?A(e):j(e)}function T(t,e){for(var r=0;r<t.length;r+=1){var n=t[r];if(3===n.nodeType)return n.data=""+e,t.splice(r,1)[0]}return k(e)}function U(t){return T(t," ")}function G(t,e){e=""+e,t.data!==e&&(t.data=e)}function H(t,e,r,n){t.style.setProperty(e,r,n?"important":"")}function F(t,e,r){t.classList[r?"add":"remove"](e)}function M(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;return Array.from(e.querySelectorAll(t))}function B(t){o=t}function J(){if(!o)throw new Error("Function called outside component initialization");return o}var V=[],Y=[],K=[],z=[],W=Promise.resolve(),X=!1;function Q(t){K.push(t)}var Z=!1,tt=new Set;function et(){if(!Z){Z=!0;do{for(var t=0;t<V.length;t+=1){var e=V[t];B(e),rt(e.$$)}for(V.length=0;Y.length;)Y.pop()();for(var r=0;r<K.length;r+=1){var n=K[r];tt.has(n)||(tt.add(n),n())}K.length=0}while(V.length);for(;z.length;)z.pop()();X=!1,Z=!1,tt.clear()}}function rt(t){if(null!==t.fragment){t.update(),$(t.before_update);var e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Q)}}var nt,ot=new Set;function it(){nt={r:0,c:[],p:nt}}function at(){nt.r||$(nt.c),nt=nt.p}function ut(t,e){t&&t.i&&(ot.delete(t),t.i(e))}function ct(t,e,r,n){if(t&&t.o){if(ot.has(t))return;ot.add(t),nt.c.push((function(){ot.delete(t),n&&(r&&t.d(1),n())})),t.o(e)}}function st(t,e){for(var r={},n={},o={$$scope:1},i=t.length;i--;){var a=t[i],u=e[i];if(u){for(var c in a)c in u||(n[c]=1);for(var s in u)o[s]||(r[s]=u[s],o[s]=1);t[i]=u}else for(var f in a)o[f]=1}for(var l in n)l in r||(r[l]=void 0);return r}function ft(e){return"object"===t(e)&&null!==e?e:{}}function lt(t){t&&t.c()}function pt(t,e){t&&t.l(e)}function ht(t,e,r){var n=t.$$,o=n.fragment,i=n.on_mount,a=n.on_destroy,u=n.after_update;o&&o.m(e,r),Q((function(){var e=i.map(g).filter(w);a?a.push.apply(a,h(e)):$(e),t.$$.on_mount=[]})),u.forEach(Q)}function vt(t,e){var r=t.$$;null!==r.fragment&&($(r.on_destroy),r.fragment&&r.fragment.d(e),r.on_destroy=r.fragment=null,r.ctx=[])}function dt(t,e){-1===t.$$.dirty[0]&&(V.push(t),X||(X=!0,W.then(et)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function mt(t,e,r,n,i,a){var u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],c=o;B(t);var s=e.props||{},f=t.$$={fragment:null,ctx:null,props:a,update:m,not_equal:i,bound:b(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(c?c.$$.context:[]),callbacks:b(),dirty:u},l=!1;if(f.ctx=r?r(t,s,(function(e,r){var n=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:r;return f.ctx&&i(f.ctx[e],f.ctx[e]=n)&&(f.bound[e]&&f.bound[e](n),l&&dt(t,e)),r})):[],f.update(),l=!0,$(f.before_update),f.fragment=!!n&&n(f.ctx),e.target){if(e.hydrate){var p=q(e.target);f.fragment&&f.fragment.l(p),p.forEach(R)}else f.fragment&&f.fragment.c();e.intro&&ut(t.$$.fragment),ht(t,e.target,e.anchor),et()}B(c)}var yt=function(){function t(){v(this,t)}var e,r,n;return e=t,(r=[{key:"$destroy",value:function(){vt(this,1),this.$destroy=m}},{key:"$on",value:function(t,e){var r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(e),function(){var t=r.indexOf(e);-1!==t&&r.splice(t,1)}}},{key:"$set",value:function(){}}])&&d(e.prototype,r),n&&d(e,n),t}(),gt=[];function bt(t){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,n=[];function o(r){if(x(t,r)&&(t=r,e)){for(var o=!gt.length,i=0;i<n.length;i+=1){var a=n[i];a[1](),gt.push(a,t)}if(o){for(var u=0;u<gt.length;u+=2)gt[u][0](gt[u+1]);gt.length=0}}}function i(e){o(e(t))}function a(i){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,u=[i,a];return n.push(u),1===n.length&&(e=r(o)||m),i(t),function(){var t=n.indexOf(u);-1!==t&&n.splice(t,1),0===n.length&&(e(),e=null)}}return{set:o,update:i,subscribe:a}}var $t={},wt=function(){return{}};function xt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=c(t);if(e){var o=c(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function _t(t){var e,r,o,i,a,u,c,s,f,l,p;return{c:function(){e=j("nav"),r=j("ul"),o=j("li"),i=j("a"),a=k("about"),c=O(),s=j("li"),f=j("a"),l=k("résumé"),this.h()},l:function(t){var n=q(e=I(t,"NAV",{class:!0})),u=q(r=I(n,"UL",{class:!0})),p=q(o=I(u,"LI",{class:!0})),h=q(i=I(p,"A",{"aria-current":!0,href:!0,class:!0}));a=T(h,"about"),h.forEach(R),p.forEach(R),c=U(u);var v=q(s=I(u,"LI",{class:!0})),d=q(f=I(v,"A",{rel:!0,"aria-current":!0,href:!0,class:!0}));l=T(d,"résumé"),d.forEach(R),v.forEach(R),u.forEach(R),n.forEach(R),this.h()},h:function(){D(i,"aria-current",u=void 0===t[0]?"page":void 0),D(i,"href","."),D(i,"class","svelte-125otdc"),D(o,"class","svelte-125otdc"),D(f,"rel","prefetch"),D(f,"aria-current",p="resume"===t[0]?"page":void 0),D(f,"href","resume"),D(f,"class","svelte-125otdc"),D(s,"class","svelte-125otdc"),D(r,"class","svelte-125otdc"),D(e,"class","svelte-125otdc")},m:function(t,n){L(t,e,n),S(e,r),S(r,o),S(o,i),S(i,a),S(r,c),S(r,s),S(s,f),S(f,l)},p:function(t,e){var r=n(e,1)[0];1&r&&u!==(u=void 0===t[0]?"page":void 0)&&D(i,"aria-current",u),1&r&&p!==(p="resume"===t[0]?"page":void 0)&&D(f,"aria-current",p)},i:m,o:m,d:function(t){t&&R(e)}}}function Et(t,e,r){var n=e.segment;return t.$set=function(t){"segment"in t&&r(0,n=t.segment)},[n]}var St=function(t){f(r,yt);var e=xt(r);function r(t){var n;return v(this,r),mt(l(n=e.call(this)),t,Et,_t,x,{segment:0}),n}return r}();function Lt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=c(t);if(e){var o=c(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function Rt(t){var e,r,o,i;e=new St({props:{segment:t[0]}});var a=t[2].default,u=function(t,e,r,n){if(t){var o=_(t,e,r,n);return t[0](o)}}(a,t,t[1],null);return{c:function(){lt(e.$$.fragment),r=O(),o=j("main"),u&&u.c(),this.h()},l:function(t){pt(e.$$.fragment,t),r=U(t);var n=q(o=I(t,"MAIN",{class:!0}));u&&u.l(n),n.forEach(R),this.h()},h:function(){D(o,"class","svelte-svipg9")},m:function(t,n){ht(e,t,n),L(t,r,n),L(t,o,n),u&&u.m(o,null),i=!0},p:function(t,r){var o=n(r,1)[0],i={};1&o&&(i.segment=t[0]),e.$set(i),u&&u.p&&2&o&&E(u,a,t,t[1],o,null,null)},i:function(t){i||(ut(e.$$.fragment,t),ut(u,t),i=!0)},o:function(t){ct(e.$$.fragment,t),ct(u,t),i=!1},d:function(t){vt(e,t),t&&R(r),t&&R(o),u&&u.d(t)}}}function Pt(t,e,r){var n=e.segment,o=e.$$slots,i=void 0===o?{}:o,a=e.$$scope;return t.$set=function(t){"segment"in t&&r(0,n=t.segment),"$$scope"in t&&r(1,a=t.$$scope)},[n,a,i]}var jt=function(t){f(r,yt);var e=Lt(r);function r(t){var n;return v(this,r),mt(l(n=e.call(this)),t,Pt,Rt,x,{segment:0}),n}return r}();function At(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=c(t);if(e){var o=c(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function kt(t){var e,r,n=t[1].stack+"";return{c:function(){e=j("pre"),r=k(n)},l:function(t){var o=q(e=I(t,"PRE",{}));r=T(o,n),o.forEach(R)},m:function(t,n){L(t,e,n),S(e,r)},p:function(t,e){2&e&&n!==(n=t[1].stack+"")&&G(r,n)},d:function(t){t&&R(e)}}}function Ot(t){var e,r,o,i,a,u,c,s,f,l=t[1].message+"";document.title=e=t[0];var p=t[2]&&t[1].stack&&kt(t);return{c:function(){r=O(),o=j("h1"),i=k(t[0]),a=O(),u=j("p"),c=k(l),s=O(),p&&p.c(),f=C(),this.h()},l:function(e){M('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(R),r=U(e);var n=q(o=I(e,"H1",{class:!0}));i=T(n,t[0]),n.forEach(R),a=U(e);var h=q(u=I(e,"P",{class:!0}));c=T(h,l),h.forEach(R),s=U(e),p&&p.l(e),f=C(),this.h()},h:function(){D(o,"class","svelte-8od9u6"),D(u,"class","svelte-8od9u6")},m:function(t,e){L(t,r,e),L(t,o,e),S(o,i),L(t,a,e),L(t,u,e),S(u,c),L(t,s,e),p&&p.m(t,e),L(t,f,e)},p:function(t,r){var o=n(r,1)[0];1&o&&e!==(e=t[0])&&(document.title=e),1&o&&G(i,t[0]),2&o&&l!==(l=t[1].message+"")&&G(c,l),t[2]&&t[1].stack?p?p.p(t,o):((p=kt(t)).c(),p.m(f.parentNode,f)):p&&(p.d(1),p=null)},i:m,o:m,d:function(t){t&&R(r),t&&R(o),t&&R(a),t&&R(u),t&&R(s),p&&p.d(t),t&&R(f)}}}function Ct(t,e,r){var n=e.status,o=e.error;return t.$set=function(t){"status"in t&&r(0,n=t.status),"error"in t&&r(1,o=t.error)},[n,o,!1]}var Nt=function(t){f(r,yt);var e=At(r);function r(t){var n;return v(this,r),mt(l(n=e.call(this)),t,Ct,Ot,x,{status:0,error:1}),n}return r}();function Dt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=c(t);if(e){var o=c(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function qt(t){var e,r,n,o=[t[4].props],i=t[4].component;function a(t){for(var e={},r=0;r<o.length;r+=1)e=y(e,o[r]);return{props:e}}return i&&(e=new i(a())),{c:function(){e&&lt(e.$$.fragment),r=C()},l:function(t){e&&pt(e.$$.fragment,t),r=C()},m:function(t,o){e&&ht(e,t,o),L(t,r,o),n=!0},p:function(t,n){var u=16&n?st(o,[ft(t[4].props)]):{};if(i!==(i=t[4].component)){if(e){it();var c=e;ct(c.$$.fragment,1,0,(function(){vt(c,1)})),at()}i?(lt((e=new i(a())).$$.fragment),ut(e.$$.fragment,1),ht(e,r.parentNode,r)):e=null}else i&&e.$set(u)},i:function(t){n||(e&&ut(e.$$.fragment,t),n=!0)},o:function(t){e&&ct(e.$$.fragment,t),n=!1},d:function(t){t&&R(r),e&&vt(e,t)}}}function It(t){var e,r;return e=new Nt({props:{error:t[0],status:t[1]}}),{c:function(){lt(e.$$.fragment)},l:function(t){pt(e.$$.fragment,t)},m:function(t,n){ht(e,t,n),r=!0},p:function(t,r){var n={};1&r&&(n.error=t[0]),2&r&&(n.status=t[1]),e.$set(n)},i:function(t){r||(ut(e.$$.fragment,t),r=!0)},o:function(t){ct(e.$$.fragment,t),r=!1},d:function(t){vt(e,t)}}}function Tt(t){var e,r,n,o,i=[It,qt],a=[];function u(t,e){return t[0]?0:1}return e=u(t),r=a[e]=i[e](t),{c:function(){r.c(),n=C()},l:function(t){r.l(t),n=C()},m:function(t,r){a[e].m(t,r),L(t,n,r),o=!0},p:function(t,o){var c=e;(e=u(t))===c?a[e].p(t,o):(it(),ct(a[c],1,1,(function(){a[c]=null})),at(),(r=a[e])||(r=a[e]=i[e](t)).c(),ut(r,1),r.m(n.parentNode,n))},i:function(t){o||(ut(r),o=!0)},o:function(t){ct(r),o=!1},d:function(t){a[e].d(t),t&&R(n)}}}function Ut(t){for(var e,r,o=[{segment:t[2][0]},t[3].props],i={$$slots:{default:[Tt]},$$scope:{ctx:t}},a=0;a<o.length;a+=1)i=y(i,o[a]);return e=new jt({props:i}),{c:function(){lt(e.$$.fragment)},l:function(t){pt(e.$$.fragment,t)},m:function(t,n){ht(e,t,n),r=!0},p:function(t,r){var i=n(r,1)[0],a=12&i?st(o,[4&i&&{segment:t[2][0]},8&i&&ft(t[3].props)]):{};147&i&&(a.$$scope={dirty:i,ctx:t}),e.$set(a)},i:function(t){r||(ut(e.$$.fragment,t),r=!0)},o:function(t){ct(e.$$.fragment,t),r=!1},d:function(t){vt(e,t)}}}function Gt(t,e,r){var n,o,i,a=e.stores,u=e.error,c=e.status,s=e.segments,f=e.level0,l=e.level1,p=void 0===l?null:l,h=e.notify;return n=h,J().$$.after_update.push(n),o=$t,i=a,J().$$.context.set(o,i),t.$set=function(t){"stores"in t&&r(5,a=t.stores),"error"in t&&r(0,u=t.error),"status"in t&&r(1,c=t.status),"segments"in t&&r(2,s=t.segments),"level0"in t&&r(3,f=t.level0),"level1"in t&&r(4,p=t.level1),"notify"in t&&r(6,h=t.notify)},[u,c,s,f,p,a,h]}var Ht,Ft=function(t){f(r,yt);var e=Dt(r);function r(t){var n;return v(this,r),mt(l(n=e.call(this)),t,Gt,Ut,x,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6}),n}return r}(),Mt=[/^\/blog\.json$/,/^\/blog\/stories\/Gojek_Clone\/?$/,/^\/blog\/stories\/New_Blog\/?$/,/^\/blog\/stories\/Ramble1\/?$/,/^\/blog\/([^\/]+?)\.json$/],Bt=[{js:function(){return import("./index.c8ac7236.js")},css:[]},{js:function(){return import("./index.5a5b9cb1.js")},css:[]},{js:function(){return import("./MoreAbout.a631e213.js")},css:[]},{js:function(){return import("./Title.1e69dcfe.js")},css:[]},{js:function(){return import("./index.cc904dc1.js")},css:[]},{js:function(){return import("./index.ab6a57f0.js")},css:[]},{js:function(){return import("./[slug].fcf24ebc.js")},css:[]}],Jt=(Ht=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/resume\/?$/,parts:[{i:1}]},{pattern:/^\/about\/MoreAbout\/?$/,parts:[null,{i:2}]},{pattern:/^\/about\/Title\/?$/,parts:[null,{i:3}]},{pattern:/^\/works\/?$/,parts:[{i:4}]},{pattern:/^\/blog\/?$/,parts:[{i:5}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:6,params:function(t){return{slug:Ht(t[1])}}}]}]);function Vt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{replaceState:!1},r=pe(new URL(t,document.baseURI));return r?(se[e.replaceState?"replaceState":"pushState"]({id:ie},"",t),ve(r,null).then((function(){}))):(location.href=t,new Promise((function(t){})))}var Yt,Kt,zt,Wt,Xt,Qt="undefined"!=typeof __SAPPER__&&__SAPPER__,Zt=!1,te=[],ee="{}",re={page:function(t){var e=bt(t),r=!0;return{notify:function(){r=!0,e.update((function(t){return t}))},set:function(t){r=!1,e.set(t)},subscribe:function(t){var n;return e.subscribe((function(e){(void 0===n||r&&e!==n)&&t(n=e)}))}}}({}),preloading:bt(null),session:bt(Qt&&Qt.session)};re.session.subscribe(function(){var t=u(i.mark((function t(e){var r,n,o,a,u,c;return i.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Wt=e,Zt){t.next=3;break}return t.abrupt("return");case 3:return Xt=!0,r=pe(new URL(location.href)),n=Kt={},t.next=8,be(r);case 8:if(o=t.sent,a=o.redirect,u=o.props,c=o.branch,n===Kt){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,me(a,c,u,r.page);case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());var ne,oe=null;var ie,ae=1;var ue,ce,se="undefined"!=typeof history?history:{pushState:function(t,e,r){},replaceState:function(t,e,r){},scrollRestoration:""},fe={};function le(e){var r=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach((function(e){var o=n(/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," "))),3),i=o[1],a=o[2],u=void 0===a?"":a;"string"==typeof r[i]&&(r[i]=[r[i]]),"object"===t(r[i])?r[i].push(u):r[i]=u})),r}function pe(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Qt.baseUrl))return null;var e=t.pathname.slice(Qt.baseUrl.length);if(""===e&&(e="/"),!Mt.some((function(t){return t.test(e)})))for(var r=0;r<Jt.length;r+=1){var n=Jt[r],o=n.pattern.exec(e);if(o){var i=le(t.search),a=n.parts[n.parts.length-1],u=a.params?a.params(o):{},c={host:location.host,path:e,query:i,params:u};return{href:t.href,route:n,match:o,page:c}}}}function he(){return{x:pageXOffset,y:pageYOffset}}function ve(t,e,r,n){return de.apply(this,arguments)}function de(){return(de=u(i.mark((function t(e,r,n,o){var a,u,c,s,f,l,p,h,v;return i.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r?ie=r:(a=he(),fe[ie]=a,r=ie=++ae,fe[ie]=n?a:{x:0,y:0}),ie=r,Yt&&re.preloading.set(!0),u=oe&&oe.href===e.href?oe.promise:be(e),oe=null,c=Kt={},t.next=8,u;case 8:if(s=t.sent,f=s.redirect,l=s.props,p=s.branch,c===Kt){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,me(f,p,l,e.page);case 16:document.activeElement&&document.activeElement.blur(),n||(h=fe[r],o&&(v=document.getElementById(o.slice(1)))&&(h={x:0,y:v.getBoundingClientRect().top+scrollY}),fe[ie]=h,h&&scrollTo(h.x,h.y));case 18:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function me(t,e,r,n){return ye.apply(this,arguments)}function ye(){return(ye=u(i.mark((function t(e,r,n,o){var a,u;return i.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=2;break}return t.abrupt("return",Vt(e.location,{replaceState:!0}));case 2:if(re.page.set(o),re.preloading.set(!1),!Yt){t.next=8;break}Yt.$set(n),t.next=18;break;case 8:return n.stores={page:{subscribe:re.page.subscribe},preloading:{subscribe:re.preloading.subscribe},session:re.session},t.next=11,zt;case 11:if(t.t0=t.sent,n.level0={props:t.t0},n.notify=re.page.notify,a=document.querySelector("#sapper-head-start"),u=document.querySelector("#sapper-head-end"),a&&u){for(;a.nextSibling!==u;)_e(a.nextSibling);_e(a),_e(u)}Yt=new Ft({target:ne,props:n,hydrate:!0});case 18:te=r,ee=JSON.stringify(o.query),Zt=!0,Xt=!1;case 22:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function ge(t,e,r,n){if(n!==ee)return!0;var o=te[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(r.slice(1,t+2)))||void 0))}function be(t){return $e.apply(this,arguments)}function $e(){return($e=u(i.mark((function t(e){var r,n,o,a,c,s,f,l,p,h,v;return i.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.route,n=e.page,o=n.path.split("/").filter(Boolean),a=null,c={error:null,status:200,segments:[o[0]]},s={fetch:function(t){function e(e,r){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){return fetch(t,e)})),redirect:function(t,e){if(a&&(a.statusCode!==t||a.location!==e))throw new Error("Conflicting redirects");a={statusCode:t,location:e}},error:function(t,e){c.error="string"==typeof e?new Error(e):e,c.status=t}},zt||(zt=Qt.preloaded[0]||wt.call(s,{host:n.host,path:n.path,query:n.query,params:{}},Wt)),l=1,t.prev=7,p=JSON.stringify(n.query),h=r.pattern.exec(n.path),v=!1,t.next=13,Promise.all(r.parts.map(function(){var t=u(i.mark((function t(r,a){var u,f,d,m,y,g;return i.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(u=o[a],ge(a,u,h,p)&&(v=!0),c.segments[l]=o[a+1],r){t.next=5;break}return t.abrupt("return",{segment:u});case 5:if(f=l++,Xt||v||!te[a]||te[a].part!==r.i){t.next=8;break}return t.abrupt("return",te[a]);case 8:return v=!1,t.next=11,xe(Bt[r.i]);case 11:if(d=t.sent,m=d.default,y=d.preload,!Zt&&Qt.preloaded[a+1]){t.next=25;break}if(!y){t.next=21;break}return t.next=18,y.call(s,{host:n.host,path:n.path,query:n.query,params:r.params?r.params(e.match):{}},Wt);case 18:t.t0=t.sent,t.next=22;break;case 21:t.t0={};case 22:g=t.t0,t.next=26;break;case 25:g=Qt.preloaded[a+1];case 26:return t.abrupt("return",c["level".concat(f)]={component:m,props:g,segment:u,match:h,part:r.i});case 27:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()));case 13:f=t.sent,t.next=21;break;case 16:t.prev=16,t.t0=t.catch(7),c.error=t.t0,c.status=500,f=[];case 21:return t.abrupt("return",{redirect:a,props:c,branch:f});case 22:case"end":return t.stop()}}),t,null,[[7,16]])})))).apply(this,arguments)}function we(t){var e="client/".concat(t);if(!document.querySelector('link[href="'.concat(e,'"]')))return new Promise((function(t,r){var n=document.createElement("link");n.rel="stylesheet",n.href=e,n.onload=function(){return t()},n.onerror=r,document.head.appendChild(n)}))}function xe(t){var e="string"==typeof t.css?[]:t.css.map(we);return e.unshift(t.js()),Promise.all(e).then((function(t){return t[0]}))}function _e(t){t.parentNode.removeChild(t)}function Ee(t){var e=pe(new URL(t,document.baseURI));if(e)return oe&&t===oe.href||function(t,e){oe={href:t,promise:e}}(t,be(e)),oe.promise}function Se(t){clearTimeout(ue),ue=setTimeout((function(){Le(t)}),20)}function Le(t){var e=Pe(t.target);e&&"prefetch"===e.rel&&Ee(e.href)}function Re(e){if(1===function(t){return null===t.which?t.button:t.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)){var r=Pe(e.target);if(r&&r.href){var n="object"===t(r.href)&&"SVGAnimatedString"===r.href.constructor.name,o=String(n?r.href.baseVal:r.href);if(o!==location.href){if(!r.hasAttribute("download")&&"external"!==r.getAttribute("rel")&&!(n?r.target.baseVal:r.target)){var i=new URL(o);if(i.pathname!==location.pathname||i.search!==location.search){var a=pe(i);if(a)ve(a,null,r.hasAttribute("sapper-noscroll"),i.hash),e.preventDefault(),se.pushState({id:ie},"",i.href)}}}else location.hash||e.preventDefault()}}}function Pe(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function je(t){if(fe[ie]=he(),t.state){var e=pe(new URL(location.href));e?ve(e,t.state.id):location.href=location.href}else(function(t){ie=t})(ae=ae+1),se.replaceState({id:ie},"",location.href)}ce={target:document.querySelector("#sapper")},"scrollRestoration"in se&&(se.scrollRestoration="manual"),addEventListener("beforeunload",(function(){se.scrollRestoration="auto"})),addEventListener("load",(function(){se.scrollRestoration="manual"})),function(t){ne=t}(ce.target),addEventListener("click",Re),addEventListener("popstate",je),addEventListener("touchstart",Le),addEventListener("mousemove",Se),Promise.resolve().then((function(){var t=location,e=t.hash,r=t.href;se.replaceState({id:ae},"",r);var n,o,i,a,u,c,s,f,l=new URL(location.href);if(Qt.error)return n=location,o=n.host,i=n.pathname,a=n.search,u=Qt.session,c=Qt.preloaded,s=Qt.status,f=Qt.error,zt||(zt=c&&c[0]),void me(null,[],{error:f,status:s,session:u,level0:{props:zt},level1:{props:{status:s,error:f},component:Nt},segments:c},{host:o,path:i,query:le(a),params:{}});var p=pe(l);return p?ve(p,ae,!0,e):void 0}));export{F as A,N as B,n as C,G as D,$ as E,A as F,P as G,u as H,i as I,yt as S,f as _,c as a,p as b,v as c,l as d,O as e,j as f,lt as g,R as h,mt as i,U as j,I as k,q as l,pt as m,T as n,D as o,H as p,M as q,L as r,x as s,k as t,S as u,ht as v,m as w,ut as x,ct as y,vt as z};
