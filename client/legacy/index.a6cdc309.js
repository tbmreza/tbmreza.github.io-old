import{_ as t,a as n,b as r,c as e,i as s,s as a,d as o,S as c,e as f,t as u,f as i,g as l,h,j as v,k as p,l as g,m as d,o as m,p as R,D as y,w as E,r as b,u as j,F as D}from"./client.41004cce.js";function k(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var s,a=n(t);if(e){var o=n(this).constructor;s=Reflect.construct(a,arguments,o)}else s=a.apply(this,arguments);return r(this,s)}}function x(t,n,r){var e=t.slice();return e[1]=n[r],e}function z(t){var n,r,e,s,a,o=t[1].title+"";return{c:function(){n=f("li"),r=f("a"),e=u(o),a=i(),this.h()},l:function(t){n=l(t,"LI",{});var s=h(n);r=l(s,"A",{rel:!0,href:!0});var c=h(r);e=v(c,o),c.forEach(p),a=g(s),s.forEach(p),this.h()},h:function(){d(r,"rel","prefetch"),d(r,"href",s="blog/"+t[1].slug)},m:function(t,s){m(t,n,s),R(n,r),R(r,e),R(n,a)},p:function(t,n){1&n&&o!==(o=t[1].title+"")&&y(e,o),1&n&&s!==(s="blog/"+t[1].slug)&&d(r,"href",s)},d:function(t){t&&p(n)}}}function w(t){for(var n,r,e,s,a,o,c=t[0],y=[],k=0;k<c.length;k+=1)y[k]=z(x(t,c,k));return{c:function(){n=i(),r=f("div"),e=f("h2"),s=u("Recent posts"),a=i(),o=f("ul");for(var t=0;t<y.length;t+=1)y[t].c();this.h()},l:function(t){E('[data-svelte="svelte-kh390v"]',document.head).forEach(p),n=g(t),r=l(t,"DIV",{class:!0});var c=h(r);e=l(c,"H2",{});var f=h(e);s=v(f,"Recent posts"),f.forEach(p),a=g(c),o=l(c,"UL",{class:!0});for(var u=h(o),i=0;i<y.length;i+=1)y[i].l(u);u.forEach(p),c.forEach(p),this.h()},h:function(){document.title="Reza Handzalah online: Blog",d(o,"class","svelte-1uzksw3"),d(r,"class","main")},m:function(t,c){m(t,n,c),m(t,r,c),R(r,e),R(e,s),R(r,a),R(r,o);for(var f=0;f<y.length;f+=1)y[f].m(o,null)},p:function(t,n){var r=b(n,1)[0];if(1&r){var e;for(c=t[0],e=0;e<c.length;e+=1){var s=x(t,c,e);y[e]?y[e].p(s,r):(y[e]=z(s),y[e].c(),y[e].m(o,null))}for(;e<y.length;e+=1)y[e].d(1);y.length=c.length}},i:j,o:j,d:function(t){t&&p(n),t&&p(r),D(y,t)}}}function H(t){t.params,t.query;return this.fetch("blog.json").then((function(t){return t.json()})).then((function(t){return{posts:t}}))}function I(t,n,r){var e=n.posts;return t.$set=function(t){"posts"in t&&r(0,e=t.posts)},[e]}var L=function(n){t(f,c);var r=k(f);function f(t){var n;return e(this,f),n=r.call(this),s(o(n),t,I,w,a,{posts:0}),n}return f}();export default L;export{H as preload};
