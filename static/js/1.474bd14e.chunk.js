(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[1],{456:function(e,t,a){"use strict";var n=a(2),i=a(455),l=a(0),o=a(52),r=function(){return Object(l.g)("section",{id:"footer"},Object(l.g)("div",{class:"content-section"},Object(l.g)("footer",null,Object(l.g)("hr",null),"Developed with ",Object(l.g)("i",{class:"fas fa-heart"})," and"," ",Object(l.g)("i",{class:"fas fa-coffee"})," using"," ",Object(l.g)("a",{href:"https://getbootstrap.com/"},"Bootstrap"),","," ",Object(l.g)("a",{href:"https://reactjs.org/"},"React")," and"," ",Object(l.g)("a",{href:"https://fontawesome.com/"},"Font Awesome"),Object(l.g)("a",{href:"".concat(Object(o.d)(),"/atom.xml"),class:"float-right"},Object(l.g)("i",{class:"fas fa-rss"})," Subscribe via RSS"))))},c=["children","fullWidth"];t.a=function(e){var t=e.children,a=e.fullWidth,o=Object(i.a)(e,c);return o.class=o.class?"container "+o.class:"container",o.style=Object(n.a)(Object(n.a)({},o.style||{}),{},{maxWidth:a?"100%":""}),Object(l.g)("div",Object.assign({},o,{id:"layout"}),t,Object(l.g)(r,null))}},458:function(e,t,a){},610:function(e,t,a){"use strict";var n=a(76),i=a(100),l=a(0),o=a(461),r=a(763),c=a(772),s=a(764),u=a(765),f=a(766),p=a(162),d=(a(611),[3225,3219]),m=o.TileLayer.extend({initialize:function(e,t){this._url=e,this.originalPlane=t.plane,Object(o.setOptions)(this,t)},getTileUrl:function(e){return o.Util.template(this._url,{source:this.options.source,mapId:-1,zoom:e.z,plane:this.options.plane,x:e.x,y:-(1+e.y)})},resetPlane:function(){this.setPlane(this.originalPlane)},setPlane:function(e){var t=this.getPlane();e=Math.max(e,this.options.minPlane),(e=Math.min(e,this.options.maxPlane))!==t&&(this.options.plane=e,this._map&&this._map.fire("planechange"),this.redraw())},getPlane:function(){return this.options.plane},createTile:function(e,t){var a=o.TileLayer.prototype.createTile.call(this,e,t);return a.onerror=function(e){return e.preventDefault()},a}}),b=function(e){return{x:parseInt(e.lng),y:parseInt(e.lat)}},g=function(e,t){return[t,e]},h=function(e){var t,a=e.regionId,n=e.regionX,i=e.regionY,l="#ffffff";if(e.color){var o=e.color.value;if(o)t=o,l="rgba("+[(16711680&(t>>>=0))>>>16,(65280&t)>>>8,255&t,((4278190080&t)>>>24)/255].join(",")+")";else if(e.color){var r=e.color;l="#"+r.slice(3,9)+r[1]+r[2]}}return{x:(a>>>8<<6)+n,y:((255&a)<<6)+i,z:e.z,label:e.label,color:l}},v=function(e){var t=g(d[0],d[1]);e.setView(t);var a=Object(o.rectangle)([[0,0],[1,1]],{color:"#1e1e1e",fillColor:"#1e1e1e",fillOpacity:.3,weight:1,interactive:!1});a.addTo(e),e.on("mousemove",(function(e){var t=b(e.latlng);a.setBounds([g(t.x,t.y),g(t.x+1,t.y+1)])}));var n=new o.Control({position:"topright"});n.onAdd=function(e){var t=o.DomUtil.create("div","leaflet-bar leaflet-control"),a=o.DomUtil.create("span","leaflet-custom-control",t),n=function(){var t=function(e){var t,a=e.getCenter(),n=b(a),l=n.x>>6<<8|n.y>>6,o=Object(i.a)(p.a);try{for(o.s();!(t=o.n()).done;){var r=t.value;if(r.regions.includes(l))return r.name}}catch(c){o.e(c)}finally{o.f()}return""}(e);a.hidden=!t,a.textContent=t};return n(),e.on("move",n),t},n.addTo(e);var l=new o.Control({position:"topleft"});l.onAdd=function(e){var a=o.DomUtil.create("div","leaflet-bar leaflet-control"),n=o.DomUtil.create("a","fas fa-redo",a);return o.DomEvent.disableClickPropagation(n).addListener(n,"click",(function(){e.viewport?e.fitBounds(e.viewport):e.setView(t,0),e.tileLayer.resetPlane()})),a},l.addTo(e);var r=new o.Control({position:"topright"});r.onAdd=function(e){var t=o.DomUtil.create("div","leaflet-bar leaflet-control"),a=o.DomUtil.create("a","fas fa-sort-amount-up-alt",t),n=o.DomUtil.create("span","leaflet-custom-control",t),i=o.DomUtil.create("a","fas fa-sort-amount-down",t),l=function(){e.tileLayer&&(n.textContent=e.tileLayer.getPlane(),e.tileLayer.getPlane()===e.tileLayer.options.maxPlane?o.DomUtil.addClass(a,"leaflet-disabled"):o.DomUtil.removeClass(a,"leaflet-disabled"),e.tileLayer.getPlane()===e.tileLayer.options.minPlane?o.DomUtil.addClass(i,"leaflet-disabled"):o.DomUtil.removeClass(i,"leaflet-disabled"))};return l(),e.on("planechange",l),o.DomEvent.disableClickPropagation(a).addListener(a,"click",(function(){e.tileLayer.setPlane(e.tileLayer.getPlane()+1)})),o.DomEvent.disableClickPropagation(i).addListener(i,"click",(function(){e.tileLayer.setPlane(e.tileLayer.getPlane()-1)})),t},r.addTo(e),e.viewport&&e.fitBounds(e.viewport)},j=function(e){var t=e.tiles,a=e.selected,i=e.plane,o=Object(r.a)();if(o.tileLayer||(o.tileLayer=new m("https://raw.githubusercontent.com/mejrs/layers_osrs/master/{source}/-1/{zoom}/{plane}_{x}_{y}.png",{noWrap:!0,plane:i,minPlane:0,maxPlane:3,source:"mapsquares",minZoom:-4,maxNativeZoom:2,maxZoom:8,errorTileUrl:"https://raw.githubusercontent.com/mejrs/mejrs.github.io/master/layers/alpha_pixel.png"}),o.tileLayer.addTo(o)),o.tileLayer.originalPlane=i,o.tileLayer.setPlane(i),a.length>0){var f=a.map((function(e){return e.x})),p=a.map((function(e){return e.y})),d=Math.min.apply(Math,Object(n.a)(f))-4,b=Math.max.apply(Math,Object(n.a)(f))+4,h=Math.min.apply(Math,Object(n.a)(p))-4,v=Math.max.apply(Math,Object(n.a)(p))+4,j=[g(d,h),g(b,v)];o.viewport=j,o.fitBounds(j)}return t.map((function(e){var t=[g(e.x,e.y),g(e.x+1,e.y+1)];return Object(l.g)(l.b,null,e.label&&Object(l.g)(c.a,{bounds:t,url:"/img/tile-text.png"}),Object(l.g)(s.a,{bounds:t,pathOptions:{color:e.color,fillColor:e.color,fillOpacity:.3,weight:1,interactive:!1}},e.label&&Object(l.g)(u.a,null,e.label)))}))};t.a=function(e){var t=e.tiles,a=e.selected;t||(t=[]),a||(a=t),t=t.map(h);var n=(a=a.map(h)).length>0&&a[0].z||0;return Object(l.g)(l.b,null,Object(l.g)(f.a,{minZoom:-4,maxZoom:8,maxBounds:[[-1e3,-1e3],[13800,13800]],maxBoundsViscosity:.5,zoom:0,attributionControl:!1,whenCreated:v,crs:o.CRS.Simple},Object(l.g)(j,{tiles:t,selected:a,plane:n})))}},611:function(e,t,a){},762:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a(456),l=a(35),o=a.n(l),r=a(158),c=a(96),s=a(610),u=(a(458),a(159));t.default=Object(c.b)((function(e,t){var a=t.b64,n="",i=[];try{var l=a||window.location.hash.substring(1);n=atob(l),i=JSON.parse(n)}catch(o){}return{data:n,tiles:i}}))((function(e){var t=e.data,a=e.tiles;return a&&0!==a.length?Object(n.g)(i.a,null,Object(n.g)(r.a,{title:"Tile markers - ".concat(o.a.title),description:t}),Object(n.g)("section",{id:"tiles"},Object(n.g)("div",{class:"content-section tag-container"},Object(n.g)(s.a,{tiles:a}),Object(n.g)("pre",{class:"pre-select"},t)))):Object(n.g)(u.a,null)}))}}]);
//# sourceMappingURL=1.474bd14e.chunk.js.map