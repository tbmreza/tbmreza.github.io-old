import{_ as t,a as n,b as r,c as s,i as e,s as a,d as o,S as c,f,t as u,e as i,k as l,l as h,n as v,h as p,j as g,o as d,r as m,u as y,D as E,q as R,C as b,w as j,G as D}from"./client.43512821.js";function k(t){var s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,a=n(t);if(s){var o=n(this).constructor;e=Reflect.construct(a,arguments,o)}else e=a.apply(this,arguments);return r(this,e)}}function x(t,n,r){var s=t.slice();return s[1]=n[r],s}function z(t){var n,r,s,e,a,o=t[1].title+"";return{c:function(){n=f("li"),r=f("a"),s=u(o),a=i(),this.h()},l:function(t){n=l(t,"LI",{});var e=h(n);r=l(e,"A",{rel:!0,href:!0});var c=h(r);s=v(c,o),c.forEach(p),a=g(e),e.forEach(p),this.h()},h:function(){d(r,"rel","prefetch"),d(r,"href",e="blog/"+t[1].slug)},m:function(t,e){m(t,n,e),y(n,r),y(r,s),y(n,a)},p:function(t,n){1&n&&o!==(o=t[1].title+"")&&E(s,o),1&n&&e!==(e="blog/"+t[1].slug)&&d(r,"href",e)},d:function(t){t&&p(n)}}}function A(t){for(var n,r,s,e,a,o,c=t[0],E=[],k=0;k<c.length;k+=1)E[k]=z(x(t,c,k));return{c:function(){n=i(),r=f("div"),s=f("h2"),e=u("All posts"),a=i(),o=f("ul");for(var t=0;t<E.length;t+=1)E[t].c();this.h()},l:function(t){R('[data-svelte="svelte-kh390v"]',document.head).forEach(p),n=g(t),r=l(t,"DIV",{class:!0});var c=h(r);s=l(c,"H2",{});var f=h(s);e=v(f,"All posts"),f.forEach(p),a=g(c),o=l(c,"UL",{class:!0});for(var u=h(o),i=0;i<E.length;i+=1)E[i].l(u);u.forEach(p),c.forEach(p),this.h()},h:function(){document.title="Reza Handzalah online: Blog",d(o,"class","svelte-1uzksw3"),d(r,"class","main")},m:function(t,c){m(t,n,c),m(t,r,c),y(r,s),y(s,e),y(r,a),y(r,o);for(var f=0;f<E.length;f+=1)E[f].m(o,null)},p:function(t,n){var r=b(n,1)[0];if(1&r){var s;for(c=t[0],s=0;s<c.length;s+=1){var e=x(t,c,s);E[s]?E[s].p(e,r):(E[s]=z(e),E[s].c(),E[s].m(o,null))}for(;s<E.length;s+=1)E[s].d(1);E.length=c.length}},i:j,o:j,d:function(t){t&&p(n),t&&p(r),D(E,t)}}}function q(t){t.params,t.query;return this.fetch("blog.json").then((function(t){return t.json()})).then((function(t){return{posts:t}}))}function w(t,n,r){var s=n.posts;return t.$set=function(t){"posts"in t&&r(0,s=t.posts)},[s]}var H=function(n){t(f,c);var r=k(f);function f(t){var n;return s(this,f),n=r.call(this),e(o(n),t,w,A,a,{posts:0}),n}return f}();export default H;export{q as preload};
