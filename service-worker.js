if(!self.define){let e,n={};const t=(t,s)=>(t=new URL(t+".js",s).href,n[t]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=n,document.head.appendChild(e)}else e=t,importScripts(t),n()})).then((()=>{let e=n[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(s,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(n[o])return;let c={};const r=e=>t(e,o),d={module:{uri:o},exports:c,require:r};n[o]=Promise.all(s.map((e=>d[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-f2630e7e"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"49f14179d26d1c97cdbbf0f1c9cd795d"},{url:"css/index.css",revision:"9a94d69cafe824ccfcc73a17610aeba1"},{url:"/",revision:"index-20230812115557446"},{url:"music/",revision:"music-20230812115557446"},{url:"about/",revision:"about-20230812115557446"}],{}),e.registerRoute(/^https:\/\/npm\.elemecdn\.com/,new e.CacheFirst,"GET"),e.registerRoute(/^https:\/\/cdn\.sinzmise\.eu\.org/,new e.CacheFirst,"GET"),e.registerRoute(/^https:\/\/cdn2\.sinzmise\.eu\.org/,new e.CacheFirst,"GET"),e.registerRoute(/^https:\/\/npm\.onmicrosoft\.cn/,new e.CacheFirst,"GET"),e.registerRoute(/^https:\/\/cdn\.staticfile\.org/,new e.CacheFirst,"GET"),e.registerRoute(/^https:\/\/cdn\.staticaly\.com/,new e.CacheFirst,"GET"),e.registerRoute(/^https:\/\/jsd\.cdn\.sininno\.eu\.org/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
