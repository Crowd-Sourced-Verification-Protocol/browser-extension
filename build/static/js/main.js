!function(e){function t(t){for(var r,o,i=t[0],s=t[1],u=t[2],p=0,d=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(l&&l(t);d.length;)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(r=!1)}r&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={2:0},c=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.src=function(e){return o.p+"static/js/"+({}[e]||e)+"."+{4:"a86d1205"}[e]+".chunk.js"}(e);var s=new Error;c=function(t){i.onerror=i.onload=null,clearTimeout(u);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",s.name="ChunkLoadError",s.type=r,s.request=c,n[1](s)}a[e]=void 0}};var u=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(t)},o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var i=this["webpackJsonpchrome-react-extension-example"]=this["webpackJsonpchrome-react-extension-example"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=s;c.push([106,3]),n()}({106:function(e,t,n){e.exports=n(137)},112:function(e,t,n){},135:function(e,t,n){},137:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n(0),c=n.n(a),o=n(22),i=n.n(o),s=(n(112),n(7)),u=function(){var e=Object(s.f)().push;return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)("header",{className:"App-header",children:[Object(r.jsx)("p",{children:"About"}),Object(r.jsx)("button",{onClick:function(){e("/")},children:"Home page"})]})})},l=n(51),p=n(37),d=n.n(p),j=n(46),f=n(38),h=n(57),b=n(142),v=n(102),x=n(61),O=n.n(x),g=n(143),m=n(144),y=n(140);function w(){var e=Object(l.a)(["\n  box-sizing: border-box;\n  overflow: hidden;\n  .center_it{\n    padding-top: 20px;\n    padding-left: 50px;\n  }\n  .bottomPortion{\n    margin-top: 20px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n"]);return w=function(){return e},e}var S=function(e){var t=e.setReportFlag,n=e.id,a=c.a.useState(1),o=Object(f.a)(a,2),i=o[0],s=o[1],u=c.a.useState(""),l=Object(f.a)(u,2),p=l[0],h=l[1],b=function(){var e=Object(j.a)(d.a.mark((function e(){var r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="",1===i&&(r="It's Spam"),2===i&&(r="Nudity or sexual activity"),3===i&&(r="Fake News"),4===i&&(r="Copyright"),5===i&&(r=p),a={reportReason:r,userId:n,url:window.location.href,reasonType:i},e.prev=7,e.next=10,O()({url:"https://icdrive-backend.herokuapp.com/addReport",method:"POST",headers:{"Content-Type":"application/json;charset=UTF-8",Accept:"application/json"},data:a});case 10:e.sent,t(0),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(7),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[7,14]])})));return function(){return e.apply(this,arguments)}}();return Object(r.jsxs)(k,{children:[Object(r.jsx)("div",{className:"center_it",children:Object(r.jsx)(g.a.Group,{onChange:function(e){return s(e.target.value)},value:i,children:Object(r.jsxs)(m.b,{direction:"vertical",children:[Object(r.jsx)(g.a,{value:1,children:"It's Spam"}),Object(r.jsx)(g.a,{value:2,children:"Nudity or sexual activity"}),Object(r.jsx)(g.a,{value:3,children:"Fake News"}),Object(r.jsx)(g.a,{value:4,children:"Copyright"}),Object(r.jsxs)(g.a,{value:5,children:["More...",5===i?Object(r.jsx)(y.a,{text:p,onChange:h,style:{width:100,marginLeft:10}}):null]})]})})}),Object(r.jsxs)("div",{className:"bottomPortion",children:[Object(r.jsx)(v.a,{type:"primary",onClick:function(){t(0)},children:"Back"}),"\xa0\xa0",Object(r.jsx)(v.a,{type:"primary",onClick:b,danger:!0,children:"Submit"})]})]})},k=h.a.div(w()),C=function(e){chrome.tabs&&chrome.tabs.query({active:!0,lastFocusedWindow:!0},(function(t){e(t[0].url)}))},P=function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(n){console.error("Error saving state",n)}},N=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){}};function F(){var e=Object(l.a)(["\n  \n  .heading{\n    padding-top: 10px;\n    font-size: 18px;\n  }\n  .cent{\n    text-align: center;\n  }\n  .token{\n    font-weight: 600;\n    font-size: 18px;\n  }\n  .centerPortion{\n    padding-top: 5px;\n  }\n  .bottomPortion{\n    margin-top: 20px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n"]);return F=function(){return e},e}var T=function(){var e=c.a.useState(!1),t=Object(f.a)(e,2),n=t[0],a=t[1],o=c.a.useState(""),i=Object(f.a)(o,2),s=i[0],u=i[1],l=c.a.useState(0),p=Object(f.a)(l,2),h=p[0],x=p[1],O=c.a.useState(""),g=Object(f.a)(O,2),m=g[0],y=g[1],w=function(){var e=new Uint8Array(32);crypto.getRandomValues(e);for(var t="",n=0;n<e.length;++n)t+=e[n].toString(16);return t.toString()};c.a.useEffect(Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C((function(e){u(e||"undefined")})),t=N(),console.log(t),t||(t=w(),console.log(t),P(t)),y(t);case 5:case"end":return e.stop()}}),e)}))),[]);var k=function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={userId:m,url:s,rating:h},console.log(t);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.jsx)(I,{children:Object(r.jsx)("div",{className:"landing",children:n?Object(r.jsx)(S,{setReportFlag:a,id:m}):Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{className:"heading cent",children:"0xC88C....CE7b"}),Object(r.jsxs)("div",{className:"centerPortion",children:[Object(r.jsx)("p",{className:"token cent",children:"100.0"}),Object(r.jsx)("p",{className:"cent",children:"$1.0"})]}),Object(r.jsx)("p",{className:"cent",children:Object(r.jsx)(b.a,{value:h,onChange:x})}),Object(r.jsxs)("div",{className:"bottomPortion",children:[Object(r.jsx)(v.a,{type:"primary",onClick:k,children:"Rate"}),"\xa0\xa0",Object(r.jsx)(v.a,{type:"primary",onClick:function(){return a(1)},danger:!0,children:"Report"})]})]})})})},I=h.a.div(F()),_=(n(134),n(135),function(){return Object(r.jsxs)(s.c,{children:[Object(r.jsx)(s.a,{path:"/about",children:Object(r.jsx)(u,{})}),Object(r.jsx)(s.a,{path:"/",children:Object(r.jsx)(T,{})})]})}),E=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,145)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))},R=n(50);i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(R.a,{children:Object(r.jsx)(_,{})})}),document.getElementById("root")),E()}});
//# sourceMappingURL=main.js.map