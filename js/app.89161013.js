(function(e){function t(t){for(var r,c,i=t[0],u=t[1],l=t[2],f=0,s=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&s.push(o[c][0]),o[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(s.length)s.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/map-viewer/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var p=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"116b":function(e,t,n){"use strict";n("54cd")},"54cd":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("HelloWorld")],1)},a=[],c=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"container"}},[n("div",{attrs:{id:"mapContainer"}})])}],u=(n("d81d"),n("6cc5"),n("e11e")),l=n.n(u),p={name:"Map",data:function(){},methods:{setupLeafletMap:function(){var e=l.a.map("mapContainer",{center:[48.85844,2.294555],zoom:18});console.log(e.getCenter()),l.a.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}",{foo:"bar",attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(e),e.on("click",(function(t){alert(t.latlng);var r=new l.a.icon({iconUrl:n("6397"),iconSize:[25,41],iconAnchor:[12.5,41],popupAnchor:[0,-2]});l.a.marker(t.latlng,{icon:r}).addTo(e)}))}},mounted:function(){this.setupLeafletMap()}},f=p,s=(n("116b"),n("2877")),d=Object(s["a"])(f,c,i,!1,null,"e04e7450",null),h=d.exports,b={name:"App",components:{HelloWorld:h}},v=b,m=(n("034f"),Object(s["a"])(v,o,a,!1,null,null,null)),y=m.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(y)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.89161013.js.map