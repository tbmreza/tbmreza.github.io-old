function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function i(t,e,n,r,o,s,a){const i=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(i){const o=c(e,n,r,a);t.p(o,i)}}function l(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function h(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function m(t){return document.createTextNode(t)}function g(){return m(" ")}function $(){return m("")}function v(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function b(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t){return Array.from(t.childNodes)}function _(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return r?h(e):d(e)}function E(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return m(e)}function S(t){return E(t," ")}function x(t,e){e=""+e,t.data!==e&&(t.data=e)}function w(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function A(t,e,n){t.classList[n?"add":"remove"](e)}function P(t,e=document.body){return Array.from(e.querySelectorAll(t))}let R;function L(t){R=t}function j(){if(!R)throw new Error("Function called outside component initialization");return R}const C=[],N=[],O=[],q=[],k=Promise.resolve();let U=!1;function D(t){O.push(t)}let H=!1;const I=new Set;function T(){if(!H){H=!0;do{for(let t=0;t<C.length;t+=1){const e=C[t];L(e),B(e.$$)}for(C.length=0;N.length;)N.pop()();for(let t=0;t<O.length;t+=1){const e=O[t];I.has(e)||(I.add(e),e())}O.length=0}while(C.length);for(;q.length;)q.pop()();U=!1,H=!1,I.clear()}}function B(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}const M=new Set;let J;function V(){J={r:0,c:[],p:J}}function K(){J.r||o(J.c),J=J.p}function z(t,e){t&&t.i&&(M.delete(t),t.i(e))}function G(t,e,n,r){if(t&&t.o){if(M.has(t))return;M.add(t),J.c.push(()=>{M.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function Y(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const a=t[s],c=e[s];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[s]=c}else for(const t in a)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function F(t){return"object"==typeof t&&null!==t?t:{}}function W(t){t&&t.c()}function X(t,e){t&&t.l(e)}function Q(t,e,r){const{fragment:a,on_mount:c,on_destroy:i,after_update:l}=t.$$;a&&a.m(e,r),D(()=>{const e=c.map(n).filter(s);i?i.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(D)}function Z(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function tt(t,e){-1===t.$$.dirty[0]&&(C.push(t),U||(U=!0,k.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function et(e,n,s,a,c,i,l=[-1]){const u=R;L(e);const p=n.props||{},d=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l};let h=!1;if(d.ctx=s?s(e,p,(t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&c(d.ctx[t],d.ctx[t]=o)&&(d.bound[t]&&d.bound[t](o),h&&tt(e,t)),n}):[],d.update(),h=!0,o(d.before_update),d.fragment=!!a&&a(d.ctx),n.target){if(n.hydrate){const t=y(n.target);d.fragment&&d.fragment.l(t),t.forEach(f)}else d.fragment&&d.fragment.c();n.intro&&z(e.$$.fragment),Q(e,n.target,n.anchor),T()}L(u)}class nt{$destroy(){Z(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const rt=[];function ot(e,n=t){let r;const o=[];function s(t){if(a(e,t)&&(e=t,r)){const t=!rt.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),rt.push(n,e)}if(t){for(let t=0;t<rt.length;t+=2)rt[t][0](rt[t+1]);rt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(a,c=t){const i=[a,c];return o.push(i),1===o.length&&(r=n(s)||t),a(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const st={},at=()=>({});function ct(e){let n,r,o,s,a,c,i,p,h,$,v;return{c(){n=d("nav"),r=d("ul"),o=d("li"),s=d("a"),a=m("about"),i=g(),p=d("li"),h=d("a"),$=m("résumé"),this.h()},l(t){n=_(t,"NAV",{class:!0});var e=y(n);r=_(e,"UL",{class:!0});var c=y(r);o=_(c,"LI",{class:!0});var l=y(o);s=_(l,"A",{"aria-current":!0,href:!0,class:!0});var u=y(s);a=E(u,"about"),u.forEach(f),l.forEach(f),i=S(c),p=_(c,"LI",{class:!0});var d=y(p);h=_(d,"A",{rel:!0,"aria-current":!0,href:!0,class:!0});var m=y(h);$=E(m,"résumé"),m.forEach(f),d.forEach(f),c.forEach(f),e.forEach(f),this.h()},h(){b(s,"aria-current",c=void 0===e[0]?"page":void 0),b(s,"href","."),b(s,"class","svelte-125otdc"),b(o,"class","svelte-125otdc"),b(h,"rel","prefetch"),b(h,"aria-current",v="resume"===e[0]?"page":void 0),b(h,"href","resume"),b(h,"class","svelte-125otdc"),b(p,"class","svelte-125otdc"),b(r,"class","svelte-125otdc"),b(n,"class","svelte-125otdc")},m(t,e){u(t,n,e),l(n,r),l(r,o),l(o,s),l(s,a),l(r,i),l(r,p),l(p,h),l(h,$)},p(t,[e]){1&e&&c!==(c=void 0===t[0]?"page":void 0)&&b(s,"aria-current",c),1&e&&v!==(v="resume"===t[0]?"page":void 0)&&b(h,"aria-current",v)},i:t,o:t,d(t){t&&f(n)}}}function it(t,e,n){let{segment:r}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class lt extends nt{constructor(t){super(),et(this,t,it,ct,a,{segment:0})}}function ut(t){let e,n,r,o;e=new lt({props:{segment:t[0]}});const s=t[2].default,a=function(t,e,n,r){if(t){const o=c(t,e,n,r);return t[0](o)}}(s,t,t[1],null);return{c(){W(e.$$.fragment),n=g(),r=d("main"),a&&a.c(),this.h()},l(t){X(e.$$.fragment,t),n=S(t),r=_(t,"MAIN",{class:!0});var o=y(r);a&&a.l(o),o.forEach(f),this.h()},h(){b(r,"class","svelte-svipg9")},m(t,s){Q(e,t,s),u(t,n,s),u(t,r,s),a&&a.m(r,null),o=!0},p(t,[n]){const r={};1&n&&(r.segment=t[0]),e.$set(r),a&&a.p&&2&n&&i(a,s,t,t[1],n,null,null)},i(t){o||(z(e.$$.fragment,t),z(a,t),o=!0)},o(t){G(e.$$.fragment,t),G(a,t),o=!1},d(t){Z(e,t),t&&f(n),t&&f(r),a&&a.d(t)}}}function ft(t,e,n){let{segment:r}=e,{$$slots:o={},$$scope:s}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,s=t.$$scope)},[r,s,o]}class pt extends nt{constructor(t){super(),et(this,t,ft,ut,a,{segment:0})}}function dt(t){let e,n,r=t[1].stack+"";return{c(){e=d("pre"),n=m(r)},l(t){e=_(t,"PRE",{});var o=y(e);n=E(o,r),o.forEach(f)},m(t,r){u(t,e,r),l(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&x(n,r)},d(t){t&&f(e)}}}function ht(e){let n,r,o,s,a,c,i,p,h,v=e[1].message+"";document.title=n=e[0];let w=e[2]&&e[1].stack&&dt(e);return{c(){r=g(),o=d("h1"),s=m(e[0]),a=g(),c=d("p"),i=m(v),p=g(),w&&w.c(),h=$(),this.h()},l(t){P('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(f),r=S(t),o=_(t,"H1",{class:!0});var n=y(o);s=E(n,e[0]),n.forEach(f),a=S(t),c=_(t,"P",{class:!0});var l=y(c);i=E(l,v),l.forEach(f),p=S(t),w&&w.l(t),h=$(),this.h()},h(){b(o,"class","svelte-8od9u6"),b(c,"class","svelte-8od9u6")},m(t,e){u(t,r,e),u(t,o,e),l(o,s),u(t,a,e),u(t,c,e),l(c,i),u(t,p,e),w&&w.m(t,e),u(t,h,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&x(s,t[0]),2&e&&v!==(v=t[1].message+"")&&x(i,v),t[2]&&t[1].stack?w?w.p(t,e):(w=dt(t),w.c(),w.m(h.parentNode,h)):w&&(w.d(1),w=null)},i:t,o:t,d(t){t&&f(r),t&&f(o),t&&f(a),t&&f(c),t&&f(p),w&&w.d(t),t&&f(h)}}}function mt(t,e,n){let{status:r}=e,{error:o}=e;return t.$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,!1]}class gt extends nt{constructor(t){super(),et(this,t,mt,ht,a,{status:0,error:1})}}function $t(t){let n,r,o;const s=[t[4].props];var a=t[4].component;function c(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return a&&(n=new a(c())),{c(){n&&W(n.$$.fragment),r=$()},l(t){n&&X(n.$$.fragment,t),r=$()},m(t,e){n&&Q(n,t,e),u(t,r,e),o=!0},p(t,e){const o=16&e?Y(s,[F(t[4].props)]):{};if(a!==(a=t[4].component)){if(n){V();const t=n;G(t.$$.fragment,1,0,()=>{Z(t,1)}),K()}a?(n=new a(c()),W(n.$$.fragment),z(n.$$.fragment,1),Q(n,r.parentNode,r)):n=null}else a&&n.$set(o)},i(t){o||(n&&z(n.$$.fragment,t),o=!0)},o(t){n&&G(n.$$.fragment,t),o=!1},d(t){t&&f(r),n&&Z(n,t)}}}function vt(t){let e,n;return e=new gt({props:{error:t[0],status:t[1]}}),{c(){W(e.$$.fragment)},l(t){X(e.$$.fragment,t)},m(t,r){Q(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(z(e.$$.fragment,t),n=!0)},o(t){G(e.$$.fragment,t),n=!1},d(t){Z(e,t)}}}function bt(t){let e,n,r,o;const s=[vt,$t],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=s[e](t),{c(){n.c(),r=$()},l(t){n.l(t),r=$()},m(t,n){a[e].m(t,n),u(t,r,n),o=!0},p(t,o){let i=e;e=c(t),e===i?a[e].p(t,o):(V(),G(a[i],1,1,()=>{a[i]=null}),K(),n=a[e],n||(n=a[e]=s[e](t),n.c()),z(n,1),n.m(r.parentNode,r))},i(t){o||(z(n),o=!0)},o(t){G(n),o=!1},d(t){a[e].d(t),t&&f(r)}}}function yt(t){let n,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[bt]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new pt({props:s}),{c(){W(n.$$.fragment)},l(t){X(n.$$.fragment,t)},m(t,e){Q(n,t,e),r=!0},p(t,[e]){const r=12&e?Y(o,[4&e&&{segment:t[2][0]},8&e&&F(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(z(n.$$.fragment,t),r=!0)},o(t){G(n.$$.fragment,t),r=!1},d(t){Z(n,t)}}}function _t(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:a}=e,{level0:c}=e,{level1:i=null}=e,{notify:l}=e;var u,f,p;return u=l,j().$$.after_update.push(u),f=st,p=r,j().$$.context.set(f,p),t.$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,i=t.level1),"notify"in t&&n(6,l=t.notify)},[o,s,a,c,i,r,l]}class Et extends nt{constructor(t){super(),et(this,t,_t,yt,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const St=[/^\/blog\.json$/,/^\/blog\/stories\/Gojek_Clone\/?$/,/^\/blog\/stories\/New_Blog\/?$/,/^\/blog\/stories\/Ramble1\/?$/,/^\/blog\/([^\/]+?)\.json$/],xt=[{js:()=>import("./index.77624d23.js"),css:[]},{js:()=>import("./index.aed6a523.js"),css:[]},{js:()=>import("./MoreAbout.30ab1bf8.js"),css:[]},{js:()=>import("./Title.93fffd9d.js"),css:[]},{js:()=>import("./index.1071ce2c.js"),css:[]},{js:()=>import("./index.72f99308.js"),css:[]},{js:()=>import("./[slug].f14bbd86.js"),css:[]}],wt=(At=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/resume\/?$/,parts:[{i:1}]},{pattern:/^\/about\/MoreAbout\/?$/,parts:[null,{i:2}]},{pattern:/^\/about\/Title\/?$/,parts:[null,{i:3}]},{pattern:/^\/works\/?$/,parts:[{i:4}]},{pattern:/^\/blog\/?$/,parts:[{i:5}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:6,params:t=>({slug:At(t[1])})}]}]);var At;const Pt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Rt,Lt,jt,Ct=!1,Nt=[],Ot="{}";const qt={page:function(t){const e=ot(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:ot(null),session:ot(Pt&&Pt.session)};let kt,Ut;qt.session.subscribe(async t=>{if(kt=t,!Ct)return;Ut=!0;const e=Vt(new URL(location.href)),n=Lt={},{redirect:r,props:o,branch:s}=await Yt(e);n===Lt&&await Gt(r,s,o,e.page)});let Dt,Ht=null;let It,Tt=1;const Bt="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Mt={};function Jt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Vt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Pt.baseUrl))return null;let e=t.pathname.slice(Pt.baseUrl.length);if(""===e&&(e="/"),!St.some(t=>t.test(e)))for(let n=0;n<wt.length;n+=1){const r=wt[n],o=r.pattern.exec(e);if(o){const n=Jt(t.search),s=r.parts[r.parts.length-1],a=s.params?s.params(o):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:o,page:c}}}}function Kt(){return{x:pageXOffset,y:pageYOffset}}async function zt(t,e,n,r){if(e)It=e;else{const t=Kt();Mt[It]=t,e=It=++Tt,Mt[It]=n?t:{x:0,y:0}}It=e,Rt&&qt.preloading.set(!0);const o=Ht&&Ht.href===t.href?Ht.promise:Yt(t);Ht=null;const s=Lt={},{redirect:a,props:c,branch:i}=await o;if(s===Lt&&(await Gt(a,i,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Mt[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}Mt[It]=t,t&&scrollTo(t.x,t.y)}}async function Gt(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=Vt(new URL(t,document.baseURI));return n?(Bt[e.replaceState?"replaceState":"pushState"]({id:It},"",t),zt(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(qt.page.set(r),qt.preloading.set(!1),Rt)Rt.$set(n);else{n.stores={page:{subscribe:qt.page.subscribe},preloading:{subscribe:qt.preloading.subscribe},session:qt.session},n.level0={props:await jt},n.notify=qt.page.notify;const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)Wt(t.nextSibling);Wt(t),Wt(e)}Rt=new Et({target:Dt,props:n,hydrate:!0})}Nt=e,Ot=JSON.stringify(r.query),Ct=!0,Ut=!1}async function Yt(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};let c;jt||(jt=Pt.preloaded[0]||at.call(a,{host:n.host,path:n.path,query:n.query,params:{}},kt));let i=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==Ot)return!0;const o=Nt[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(c,f,l,o)&&(u=!0),s.segments[i]=r[c+1],!e)return{segment:f};const p=i++;if(!Ut&&!u&&Nt[c]&&Nt[c].part===e.i)return Nt[c];u=!1;const{default:d,preload:h}=await function(t){const e="string"==typeof t.css?[]:t.css.map(Ft);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(xt[e.i]);let m;return m=Ct||!Pt.preloaded[c+1]?h?await h.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},kt):{}:Pt.preloaded[c+1],s["level"+p]={component:d,props:m,segment:f,match:l,part:e.i}}))}catch(t){s.error=t,s.status=500,c=[]}return{redirect:o,props:s,branch:c}}function Ft(t){const e="client/"+t;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function Wt(t){t.parentNode.removeChild(t)}function Xt(t){const e=Vt(new URL(t,document.baseURI));if(e)return Ht&&t===Ht.href||function(t,e){Ht={href:t,promise:e}}(t,Yt(e)),Ht.promise}let Qt;function Zt(t){clearTimeout(Qt),Qt=setTimeout(()=>{te(t)},20)}function te(t){const e=ne(t.target);e&&"prefetch"===e.rel&&Xt(e.href)}function ee(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=ne(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Vt(o);if(s){zt(s,null,e.hasAttribute("sapper-noscroll"),o.hash),t.preventDefault(),Bt.pushState({id:It},"",o.href)}}function ne(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function re(t){if(Mt[It]=Kt(),t.state){const e=Vt(new URL(location.href));e?zt(e,t.state.id):location.href=location.href}else Tt=Tt+1,function(t){It=t}(Tt),Bt.replaceState({id:It},"",location.href)}var oe;oe={target:document.querySelector("#sapper")},"scrollRestoration"in Bt&&(Bt.scrollRestoration="manual"),addEventListener("beforeunload",()=>{Bt.scrollRestoration="auto"}),addEventListener("load",()=>{Bt.scrollRestoration="manual"}),function(t){Dt=t}(oe.target),addEventListener("click",ee),addEventListener("popstate",re),addEventListener("touchstart",te),addEventListener("mousemove",Zt),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Bt.replaceState({id:Tt},"",e);const n=new URL(location.href);if(Pt.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:o,preloaded:s,status:a,error:c}=Pt;jt||(jt=s&&s[0]),Gt(null,[],{error:c,status:a,session:o,level0:{props:jt},level1:{props:{status:a,error:c},component:gt},segments:s},{host:e,path:n,query:Jt(r),params:{}})}();const r=Vt(n);return r?zt(r,Tt,!0,t):void 0});export{h as A,p as B,nt as S,g as a,S as b,W as c,f as d,d as e,_ as f,y as g,X as h,et as i,E as j,b as k,w as l,u as m,l as n,Q as o,t as p,P as q,z as r,a as s,m as t,G as u,Z as v,A as w,v as x,x as y,o as z};
