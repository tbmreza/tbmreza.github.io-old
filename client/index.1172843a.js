import{S as t,i as s,s as e,e as l,t as a,a as n,c as o,b as r,d as h,f as c,g as f,h as i,k as u,l as p,y as g,q as d,n as m,A as v}from"./client.df2532a3.js";function E(t,s,e){const l=t.slice();return l[1]=s[e],l}function b(t){let s,e,d,m,v,E=t[1].title+"";return{c(){s=l("li"),e=l("a"),d=a(E),v=n(),this.h()},l(t){s=o(t,"LI",{});var l=r(s);e=o(l,"A",{rel:!0,href:!0});var a=r(e);d=h(a,E),a.forEach(c),v=f(l),l.forEach(c),this.h()},h(){i(e,"rel","prefetch"),i(e,"href",m="blog/"+t[1].slug)},m(t,l){u(t,s,l),p(s,e),p(e,d),p(s,v)},p(t,s){1&s&&E!==(E=t[1].title+"")&&g(d,E),1&s&&m!==(m="blog/"+t[1].slug)&&i(e,"href",m)},d(t){t&&c(s)}}}function j(t){let s,e,g,j,k,x,z=t[0],R=[];for(let s=0;s<z.length;s+=1)R[s]=b(E(t,z,s));return{c(){s=n(),e=l("div"),g=l("h2"),j=a("Recent posts"),k=n(),x=l("ul");for(let t=0;t<R.length;t+=1)R[t].c();this.h()},l(t){d('[data-svelte="svelte-kh390v"]',document.head).forEach(c),s=f(t),e=o(t,"DIV",{class:!0});var l=r(e);g=o(l,"H2",{});var a=r(g);j=h(a,"Recent posts"),a.forEach(c),k=f(l),x=o(l,"UL",{class:!0});var n=r(x);for(let t=0;t<R.length;t+=1)R[t].l(n);n.forEach(c),l.forEach(c),this.h()},h(){document.title="Reza Handzalah online: Blog",i(x,"class","svelte-1uzksw3"),i(e,"class","main")},m(t,l){u(t,s,l),u(t,e,l),p(e,g),p(g,j),p(e,k),p(e,x);for(let t=0;t<R.length;t+=1)R[t].m(x,null)},p(t,[s]){if(1&s){let e;for(z=t[0],e=0;e<z.length;e+=1){const l=E(t,z,e);R[e]?R[e].p(l,s):(R[e]=b(l),R[e].c(),R[e].m(x,null))}for(;e<R.length;e+=1)R[e].d(1);R.length=z.length}},i:m,o:m,d(t){t&&c(s),t&&c(e),v(R,t)}}}function k({params:t,query:s}){return this.fetch("blog.json").then(t=>t.json()).then(t=>({posts:t}))}function x(t,s,e){let{posts:l}=s;return t.$set=t=>{"posts"in t&&e(0,l=t.posts)},[l]}export default class extends t{constructor(t){super(),s(this,t,x,j,e,{posts:0})}}export{k as preload};
