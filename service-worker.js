!function(){"use strict";const e=["client/Title.28974d27.js","client/[slug].73de4887.js","client/index.80f46c7a.js","client/MoreAbout.ce4dce3a.js","client/index.92f2f0b9.js","client/index.3055b2ba.js","client/client.44fef3ab.js"].concat(["service-worker-index.html","favicon.png","fonts/nunito-sans-v5-latin-900italic.woff","fonts/nunito-sans-v5-latin-900italic.woff2","fonts/nunito-sans-v5-latin-regular.woff","fonts/nunito-sans-v5-latin-regular.woff2","global.css","me.webp"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1594873473511").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1594873473511"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&t.has(n.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1594873473511").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const s=await t.match(e.request);if(s)return s;throw n}}))))})}();
