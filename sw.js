if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise((async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},i=(i,a)=>{Promise.all(i.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(i)};self.define=(i,t,s)=>{a[i]||(a[i]=Promise.resolve().then((()=>{let a={};const o={uri:location.origin+i.slice(1)};return Promise.all(t.map((i=>{switch(i){case"exports":return a;case"module":return o;default:return e(i)}}))).then((e=>{const i=s(...e);return a.default||(a.default=i),a}))})))}}define("./sw.js",["./workbox-21b21c9a"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/framework-895f067827ebe11ffe45.js",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/chunks/main-58d18ecbbda52ff1c1b6.js",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/chunks/pages/_app-f3bc205f07a99ed05ec0.js",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/chunks/pages/getting-started-9a4d4ab2a53a9fb4c5e7.js",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/chunks/pages/index-af8e7d0fb4ae453d6bb7.js",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/chunks/webpack-ddd010a953737b6e3536.js",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/css/10dbae4a1d2e9b5c80cf.css",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/css/4a52eb9bcc565c88f267.css",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/css/6377d22dca656e8e0369.css",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/ko9ogetRkYB7WgkjiIfCR/_buildManifest.js",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/ko9ogetRkYB7WgkjiIfCR/_ssgManifest.js",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/RedHatDisplay-Bold.24515e9b56a0ccb45480745371340bf3.woff",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/RedHatDisplay-Bold.7b7bb91c0af148738090dc9e9e5f298b.woff2",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/RedHatDisplay-Medium.09bac349bc9aa9b72bbea76d57dd19a8.woff2",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/RedHatDisplay-Medium.732b5ddbe8d56f5462b65b1d3dd8c623.woff",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/RedHatDisplay-Regular.4e58e730f447f9d6a422e4910b5c9127.woff2",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/RedHatDisplay-Regular.77929aa7a8bd4b6672291e36a2dbba50.woff",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/RedHatText-Medium.0227c8bb038eaf0264f71e3f33222a68.woff2",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/RedHatText-Medium.47a03d213b0b35080e32a228d03a9b7b.woff",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/RedHatText-Regular.4a43a00f1c0c63f396ee893a876f7eb9.woff2",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/RedHatText-Regular.81aade5a7b362566b19989503d7db8e6.woff",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/overpass-bold-italic.89a09f63411d174b18eaf96cf12e6b45.woff2",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/overpass-bold-italic.e7bea4af7086ce0144fcfd9bac2b4db8.woff",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/overpass-bold.8aae586c8c4d72be50c1c63bfc5e9a0c.woff",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/overpass-bold.cf06a52fa81e76cc6b012dda91c73a0a.woff2",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/overpass-extrabold-italic.190776b0696119b93c713b03022c2aea.woff2",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/overpass-extrabold-italic.800277ea3e98b616b60fd7d58b68c5de.woff",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/overpass-extrabold.3cd11726d843ff40c40b787e1713d88d.woff",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/overpass-extrabold.8584d6d2426caac44a12cbdcffb3242f.woff2",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/overpass-extralight-italic.269ca6c83388f975ccfa735f3fdd202a.woff2",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/overpass-extralight-italic.bc0502ffc24dc33b8c5ab9b2e9f975aa.woff",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/overpass-extralight.60cc25d4be2d99536ede155e87e70497.woff2",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/overpass-extralight.c0276d79b017a9c2476b21c0b455e799.woff",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/overpass-heavy-italic.23fc486b36786bafb3d3f98ed9112b16.woff",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/overpass-heavy-italic.95fdf61ffc45f12737c2d8486cd01cc7.woff2",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/overpass-heavy.11855d3f3f99709dfac5b4602a2a40df.woff2",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/overpass-heavy.e9d4a1e9285e4454ef7ede0bde9d91c8.woff",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/overpass-italic.35d01efdc213d0af0d00076e16120b03.woff",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/overpass-italic.ab4371a522c3fce8ad2deb09c8441f03.woff2",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/overpass-light-italic.59058fe454d37a189fb9f60dc97d4911.woff2",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/overpass-light-italic.ac78b4f2e64edfb5859ad0a12204d8bc.woff",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/overpass-light.549231141115a61fa57d85de91606632.woff",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/overpass-light.675eb11fb9e055cea6a4fd14456b988a.woff2",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/overpass-mono-bold.69bf841bb989a00109720150d8579072.woff2",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/overpass-mono-bold.7799d9401910e36d7bb25fe666ff8f82.woff",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/overpass-mono-light.99464515aba730eab16cd5afc359342e.woff2",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/overpass-mono-light.d6b6f0c7a2af826d139da6f980d3a399.woff",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/overpass-mono-regular.7150021df2ae6bcf6c175dcea3598a26.woff2",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/overpass-mono-regular.db4223ab0faaec898da7e21ef4a4171a.woff",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/overpass-mono-semibold.54b2e33870ba270ba774f1c800d25d18.woff2",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/overpass-mono-semibold.88ade95ac9a035be71684bc35ae7538f.woff",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/overpass-regular.246cf166b6945bf1c584952a414d820d.woff2",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/overpass-regular.817d3df17057373e2c4645b790bb7c49.woff",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/overpass-semibold-italic.323f30b3399fdc516b30cad3835a8635.woff2",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/overpass-semibold-italic.8d723ad7cfca2dfffacbf2984ab800f8.woff",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/overpass-semibold.164a0ab4c909b911c99b5a333ed399c9.woff",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/overpass-semibold.61142d93d0198cb3c1608a39fd7d2cbe.woff2",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/overpass-thin-italic.3278ae4a3a97d92b639c68528ff29738.woff2",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/overpass-thin-italic.ac4ae66cc059959cf8b7b85c7eb13260.woff",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/overpass-thin.06037ca2cf8525d353a1ce4183a8cb95.woff2",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/overpass-thin.1904b4e1c18b4fc19778b6a2a57edc6e.woff",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/pfbg_2000.3b693db01ef2135e3f14fd3604f355aa.jpg",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/pfbg_576.b64efab6836e719c0e314a6193789170.jpg",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/pfbg_576@2x.08322afb8640616a622814aa8f714b84.jpg",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/pfbg_768.56faebeaec23b1c7d7d387f000025996.jpg",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/pfbg_768@2x.eea28e73c0df6dbbb1ff0ffde38c6c0e.jpg",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/pfbg_992@2x.30e8d31f821a144fe52cf00417648038.jpg",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/pficon.601b0337e9999b5d15e8d867937f1fb7.woff2",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/_next/static/media/pficon.a32f4243559e9d762e0177bfdac7fe6a.woff",revision:"ko9ogetRkYB7WgkjiIfCR"},{url:"/images/blueprint.svg",revision:"eeaff04f58ca6a4e11e66065bf3d7237"},{url:"/images/community.svg",revision:"b62ee75f0d14029f39669c3be454c5a6"},{url:"/images/config.svg",revision:"f027d21982d56fc7737206110b337254"},{url:"/images/devfileLogo.svg",revision:"130dcd05a052b81b5d19e157675cb4f5"},{url:"/images/icons/favicon.ico",revision:"2566337e16b3bb246c7b10b424461243"},{url:"/images/icons/pwa-192x192.png",revision:"57459f9c0ff56c9e06dc1df9ba2dacac"},{url:"/images/icons/pwa-512x512.png",revision:"a3dcc8a347ff8e499d380cc181ed6585"},{url:"/images/lifecycle.svg",revision:"d2925a33ceb4ac207859e43048ce2f9d"},{url:"/images/parent.svg",revision:"cad60e36ab623bd170a826d66173c62a"},{url:"/images/projects.svg",revision:"8f19089e2806f83999a40af45a3f7eaa"},{url:"/images/registry.svg",revision:"c81901f95c795d2d22a493b85a5e4e69"},{url:"/images/stacks.svg",revision:"d5c56bd81df11b2588741197ef5a197b"},{url:"/manifest.json",revision:"15307d3894ad8830abaec9581c22bc89"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:a,state:t})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
