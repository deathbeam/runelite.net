(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[1],{459:function(t,e,o){"use strict";var a=o(2),n=o(458),r=o(0),i=o(55),l=function(){return Object(r.h)("section",{id:"footer"},Object(r.h)("div",{class:"content-section"},Object(r.h)("footer",null,Object(r.h)("hr",null),"Developed with ",Object(r.h)("i",{class:"fas fa-heart"})," and"," ",Object(r.h)("i",{class:"fas fa-coffee"})," using"," ",Object(r.h)("a",{href:"https://getbootstrap.com/"},"Bootstrap"),","," ",Object(r.h)("a",{href:"https://reactjs.org/"},"React")," and"," ",Object(r.h)("a",{href:"https://fontawesome.com/"},"Font Awesome"),Object(r.h)("a",{href:"".concat(Object(i.c)(),"/atom.xml"),class:"float-right"},Object(r.h)("i",{class:"fas fa-rss"})," Subscribe via RSS"))))};e.a=function(t){var e=t.children,o=t.fullWidth,i=Object(n.a)(t,["children","fullWidth"]);return i.class=i.class?"container "+i.class:"container",i.style=Object(a.a)(Object(a.a)({},i.style||{}),{},{maxWidth:o?"100%":""}),Object(r.h)("div",Object.assign({},i,{id:"layout"}),e,Object(r.h)(l,null))}},461:function(t,e,o){},606:function(t,e,o){"use strict";var a=o(67),n=o(54),r=o(0),i=o(464),l=o(753),c=o(761),s=o(754),u=o(755),f=o(756),h=o(157),d=(o(607),[3225,3219]),p=i.TileLayer.extend({initialize:function(t,e){this._url=t,Object(i.setOptions)(this,e)},getTileUrl:function(t){return i.Util.template(this._url,{source:this.options.source,mapId:-1,zoom:t.z,plane:this.options.plane,x:t.x,y:-(1+t.y)})},createTile:function(t,e){var o=i.TileLayer.prototype.createTile.call(this,t,e);return o.onerror=function(t){return t.preventDefault()},o}}),b=function(t){return{x:parseInt(t.lng),y:parseInt(t.lat)}},m=function(t,e){return[e,t]},v=function(t){var e,o=t.regionId,a=t.regionX,n=t.regionY,r="#ffffff";if(t.color){var i=t.color.value;if(i)e=i,r="rgba("+[(16711680&(e>>>=0))>>>16,(65280&e)>>>8,255&e,((4278190080&e)>>>24)/255].join(",")+")";else if(t.color){var l=t.color;r="#"+l.slice(3,9)+l[1]+l[2]}}return{x:(o>>>8<<6)+a,y:((255&o)<<6)+n,z:t.z,label:t.label,color:r}},j=function(t){var e=m(d[0],d[1]);t.setView(e),t.locked=!0;var o=Object(i.rectangle)([[0,0],[1,1]],{color:"#1e1e1e",fillColor:"#1e1e1e",fillOpacity:.3,weight:1,interactive:!1});o.addTo(t),t.on("mousemove",(function(t){var e=b(t.latlng);o.setBounds([m(e.x,e.y),m(e.x+1,e.y+1)])}));var a=new i.Control({position:"topright"});a.onAdd=function(t){var e=i.DomUtil.create("div","leaflet-bar leaflet-control"),o=i.DomUtil.create("span","leaflet-custom-control",e),a=function(){var e=function(t){var e,o=t.getCenter(),a=b(o),r=a.x>>6<<8|a.y>>6,i=Object(n.a)(h.a);try{for(i.s();!(e=i.n()).done;){var l=e.value;if(l.regions.includes(r))return l.name}}catch(c){i.e(c)}finally{i.f()}return""}(t);o.hidden=!e,o.innerHTML=e};return a(),t.on("move",a),e},a.addTo(t);var r=new i.Control({position:"topleft"});r.onAdd=function(t){var o=i.DomUtil.create("div","leaflet-bar leaflet-control"),a=i.DomUtil.create("a","fas fa-redo",o);return i.DomEvent.disableClickPropagation(a).addListener(a,"click",(function(){return t.viewport?t.fitBounds(t.viewport):t.setView(e,0)}),a),o},r.addTo(t);var l=new i.Control({position:"topleft"});l.onAdd=function(t){var o=i.DomUtil.create("div","leaflet-bar leaflet-control"),a=i.DomUtil.create("a","fas fa-lock",o);return i.DomEvent.disableClickPropagation(a).addListener(a,"click",(function(){t.locked?(t.setMaxBounds(e),t.locked=!1,i.DomUtil.removeClass(a,"fa-lock"),i.DomUtil.addClass(a,"fa-lock-open")):t.viewport&&(t.fitBounds(t.viewport),t.setMaxBounds(t.viewport),t.locked=!0,i.DomUtil.removeClass(a,"fa-lock-open"),i.DomUtil.addClass(a,"fa-lock"))})),o},l.addTo(t)},O=function(t){var e=t.tiles,o=t.plane,n=Object(l.a)(),i=new p("https://raw.githubusercontent.com/mejrs/mejrs.github.io/master/layers/{source}/-1/{zoom}/{plane}_{x}_{y}.png",{noWrap:!0,plane:o,source:"map_squares_osrs",minZoom:-4,maxNativeZoom:2,maxZoom:8,errorTileUrl:"https://raw.githubusercontent.com/mejrs/mejrs.github.io/master/layers/alpha_pixel.png"});if(n.tileLayer&&n.tileLayer.removeFrom(n),n.tileLayer=i,n.tileLayer.addTo(n).bringToBack(),e.length>0){var f=e.map((function(t){return t.x})),h=e.map((function(t){return t.y})),d=Math.min.apply(Math,Object(a.a)(f))-4,b=Math.max.apply(Math,Object(a.a)(f))+4,v=Math.min.apply(Math,Object(a.a)(h))-4,j=Math.max.apply(Math,Object(a.a)(h))+4,O=[m(d,v),m(b,j)];n.viewport=O,n.fitBounds(O),(n.locked||void 0===n.locked)&&n.setMaxBounds(O)}return e.map((function(t){var e=[m(t.x,t.y),m(t.x+1,t.y+1)];return Object(r.h)(r.b,null,t.label&&Object(r.h)(c.a,{bounds:e,url:"/img/tile-text.png"}),Object(r.h)(s.a,{bounds:e,pathOptions:{color:t.color,fillColor:t.color,fillOpacity:.3,weight:1,interactive:!1}},t.label&&Object(r.h)(u.a,null,t.label)))}))};e.a=function(t){var e=t.tiles;e||(e=[]);var o=(e=e.map(v)).length>0?e[0].z:0;return Object(r.h)(r.b,null,Object(r.h)(f.a,{minZoom:-4,maxZoom:8,maxBounds:[[-1e3,-1e3],[13800,13800]],maxBoundsViscosity:.5,zoom:0,attributionControl:!1,whenCreated:j,crs:i.CRS.Simple},Object(r.h)(O,{tiles:e,plane:o})))}},607:function(t,e,o){},752:function(t,e,o){"use strict";o.r(e);var a=o(0),n=o(459),r=o(97),i=o.n(r),l=o(155),c=o(96),s=o(606);o(461);e.default=Object(c.b)((function(t,e){var o=e.b64,a="",n=[];try{var r=o||window.location.hash.substring(1);a=atob(r),n=JSON.parse(a)}catch(i){}return{data:a,tiles:n}}))((function(t){var e=t.data,o=t.tiles;return Object(a.h)(n.a,null,Object(a.h)(l.a,{title:"Tile markers - ".concat(i.a.title),description:e}),Object(a.h)("section",{id:"tiles"},Object(a.h)("div",{class:"content-section tag-container"},Object(a.h)(s.a,{tiles:o}),Object(a.h)("pre",{class:"pre-select"},e))))}))}}]);
//# sourceMappingURL=1.a475e88b.chunk.js.map