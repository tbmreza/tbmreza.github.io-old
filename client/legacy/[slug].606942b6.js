import{D as t,E as n,_ as s,a as e,b as r,c as a,i as c,s as o,d as i,S as u,f,e as l,t as h,r as p,k as v,l as d,g as m,h as y,j as g,m as b,n as x,o as k,B as D,A as E,p as R}from"./client.15533896.js";function j(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var s,a=e(t);if(n){var c=e(this).constructor;s=Reflect.construct(a,arguments,c)}else s=a.apply(this,arguments);return r(this,s)}}function w(t){var n,s,e,r,a,c,o,i,u,j=t[0].title+"",w=t[0].html+"";return document.title=n=t[0].title,{c:function(){s=f(),e=l("div"),r=l("h1"),a=h(j),c=f(),o=l("div"),i=f(),u=l("div"),this.h()},l:function(t){p('[data-svelte="svelte-iu3vwn"]',document.head).forEach(v),s=d(t),e=m(t,"DIV",{class:!0});var n=y(e);r=m(n,"H1",{});var f=y(r);a=g(f,j),f.forEach(v),c=d(n),o=m(n,"DIV",{class:!0}),y(o).forEach(v),n.forEach(v),i=d(t),u=m(t,"DIV",{class:!0}),y(u).forEach(v),this.h()},h:function(){b(o,"class","content svelte-b2tk9g"),b(e,"class","main svelte-b2tk9g"),b(u,"class","footer svelte-b2tk9g")},m:function(t,n){x(t,s,n),x(t,e,n),k(e,r),k(r,a),k(e,c),k(e,o),o.innerHTML=w,x(t,i,n),x(t,u,n)},p:function(t,s){var e=D(s,1)[0];1&e&&n!==(n=t[0].title)&&(document.title=n),1&e&&j!==(j=t[0].title+"")&&E(a,j),1&e&&w!==(w=t[0].html+"")&&(o.innerHTML=w)},i:R,o:R,d:function(t){t&&v(s),t&&v(e),t&&v(i),t&&v(u)}}}function H(t){return I.apply(this,arguments)}function I(){return(I=t(n.mark((function t(s){var e,r,a;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=s.params,s.query,t.next=3,this.fetch("blog/".concat(e.slug,".json"));case 3:return r=t.sent,t.next=6,r.json();case 6:if(a=t.sent,200!==r.status){t.next=11;break}return t.abrupt("return",{post:a});case 11:this.error(r.status,a.message);case 12:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function V(t,n,s){var e=n.post;return t.$set=function(t){"post"in t&&s(0,e=t.post)},[e]}var L=function(t){s(e,u);var n=j(e);function e(t){var s;return a(this,e),s=n.call(this),c(i(s),t,V,w,o,{post:0}),s}return e}();export default L;export{H as preload};
