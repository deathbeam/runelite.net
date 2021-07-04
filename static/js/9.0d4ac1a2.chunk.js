(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[9],{458:function(t,e,n){"use strict";function c(t,e){if(null==t)return{};var n,c,i=function(t,e){if(null==t)return{};var n,c,i={},a=Object.keys(t);for(c=0;c<a.length;c++)n=a[c],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(c=0;c<a.length;c++)n=a[c],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}n.d(e,"a",(function(){return c}))},459:function(t,e,n){"use strict";var c=n(2),i=n(458),a=n(0),s=n(55),r=function(){return Object(a.h)("section",{id:"footer"},Object(a.h)("div",{class:"content-section"},Object(a.h)("footer",null,Object(a.h)("hr",null),"Developed with ",Object(a.h)("i",{class:"fas fa-heart"})," and"," ",Object(a.h)("i",{class:"fas fa-coffee"})," using"," ",Object(a.h)("a",{href:"https://getbootstrap.com/"},"Bootstrap"),","," ",Object(a.h)("a",{href:"https://reactjs.org/"},"React")," and"," ",Object(a.h)("a",{href:"https://fontawesome.com/"},"Font Awesome"),Object(a.h)("a",{href:"".concat(Object(s.c)(),"/atom.xml"),class:"float-right"},Object(a.h)("i",{class:"fas fa-rss"})," Subscribe via RSS"))))};e.a=function(t){var e=t.children,n=t.fullWidth,s=Object(i.a)(t,["children","fullWidth"]);return s.class=s.class?"container "+s.class:"container",s.style=Object(c.a)(Object(c.a)({},s.style||{}),{},{maxWidth:n?"100%":""}),Object(a.h)("div",Object.assign({},s,{id:"layout"}),e,Object(a.h)(r,null))}},460:function(t,e,n){"use strict";var c=n(94),i=n(95),a=n(100),s=n(99),r=n(0),l=function(){return Object(r.h)("div",{style:{display:"table",width:"100%",height:"100%"}},Object(r.h)("div",{style:{display:"table-cell",verticalAlign:"middle"}},Object(r.h)("div",{style:{marginLeft:"auto",marginRight:"auto",textAlign:"center",fontWeight:700,color:"white"}},Object(r.h)("div",{class:"fa-4x"},Object(r.h)("i",{class:"fas fa-spinner fa-spin"})))))};e.a=function(t){return function(e){return function(n){Object(a.a)(o,n);var u=Object(s.a)(o);function o(){var t;return Object(c.a)(this,o),(t=u.call(this)).state={loading:!0},t}return Object(i.a)(o,[{key:"componentDidMount",value:function(){var e=this,n=t(this.props);n instanceof Promise?n.then((function(){return e.setState({loading:!1})})):this.setState({loading:!1})}},{key:"render",value:function(t){return this.state.loading?Object(r.h)(l,null):Object(r.h)(e,t)}}]),o}(r.a)}}},466:function(t,e,n){},598:function(t,e,n){"use strict";var c=n(0);n(604);e.a=function(t){var e=t.value,n=t.onInput;return Object(c.h)("div",{class:"search input-group mb-3"},Object(c.h)("div",{class:"input-group-prepend"},Object(c.h)("span",{class:"input-group-text"},Object(c.h)("i",{class:"fas fa-search"}))),Object(c.h)("input",{type:"text",class:"form-control",placeholder:"Search...",value:e,onInput:n,ref:function(t){return t&&t.focus()}}))}},604:function(t,e,n){},605:function(t,e,n){"use strict";var c=n(0);e.a=function(t){var e=t.prefix,n=t.choices,i=t.value,a=t.onClick;return Object(c.h)("div",{class:"dropdown"},Object(c.h)("button",{class:"dropdown-toggle btn btn-block btn-dark",id:"choice"+e},e," ",i),Object(c.h)("div",{class:"dropdown-menu"},n.map((function(t){return Object(c.h)("button",{class:"dropdown-item",onClick:function(){return a(t)}},e," ",t)}))))}},760:function(t,e,n){"use strict";n.r(e);var c=n(4),i=n.n(c),a=n(9),s=n(2),r=n(0),l=n(96),u=n(34),o=n(460),b=n(459),h=(n(466),n(55)),d=function(t){var e=t.displayName,n=t.author,c=t.description,i=t.internalName,a=t.imageUrl,s=t.installed,l=t.count;return Object(r.h)("div",{class:"col-md-4 col-sm-6 col-xs-12 mb-2"},Object(r.h)("div",{class:"card"},Object(r.h)("div",{class:"card-body d-flex align-self-stretch"},Object(r.h)("div",{class:"m-2"},Object(r.h)("img",{width:"36",alt:"",src:a||"/img/plugin-hub/missingicon.png"})),Object(r.h)("div",null,Object(r.h)("h5",{class:"card-title"},Object(r.h)("a",{href:"/plugin-hub/show/".concat(i)},e)),Object(r.h)("h6",{class:"card-subtitle mb-2 text-muted"},Object(r.h)("a",{href:"/plugin-hub/".concat(n)},n)),l>0&&Object(r.h)("p",{class:"card-text"},Object(r.h)("span",{class:"badge badge-primary"},Object(h.d)(l)," ",l>1?"active installs":"active install")," ",s&&Object(r.h)("span",{class:"badge badge-success"},"installed")),Object(r.h)("p",{class:"card-text"},c)))))},f=n(97),O=n.n(f),j=n(155),p=n(20),g=n(160),v=n(598),m=n(98),y=n(605),w="The Plugin Hub is a repository of plugins that are created and maintained by members of the community who are not officially affiliated with RuneLite. These plugins are verified by RuneLite Developers to ensure they comply with Jagex's 3rd party client rules and are not malicious in some other way.",x=function(){var t=Object(a.a)(i.a.mark((function t(e){var n,c,a,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.fetchBootstrap,c=e.fetchConfig,a=e.fetchExternalPlugins,s=e.fetchPluginHubStats,t.next=3,n();case 3:return t.next=5,c();case 5:return t.next=7,a();case 7:return t.next=9,s();case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();e.default=Object(l.b)((function(t,e){return Object(s.a)(Object(s.a)({},e),{},{externalPlugins:Object(g.h)(t),pluginFilter:Object(g.f)(t),pluginSorting:Object(g.g)(t)})}),(function(t){return Object(u.b)({fetchBootstrap:p.b,fetchConfig:m.c,fetchExternalPlugins:g.c,fetchPluginHubStats:g.d,setPluginFilter:g.i,setPluginSorting:g.j},t)}))(Object(o.a)(x)((function(t){var e=t.author,n=t.externalPlugins,c=t.pluginFilter,i=t.pluginSorting,a=t.setPluginFilter,s=t.setPluginSorting,l=(n=n.filter((function(t){return!e||t.author===e}))).length,u=n.filter((function(t){return t.installed})).length,o=n.reduce((function(t,e){return t+e.count}),0),f=["active installs","name","time updated","time added"];return u>0&&f.push("installed"),Object(r.h)(b.a,null,Object(r.h)(j.a,{title:"".concat(e?e+" ":"","Plugin Hub - ").concat(O.a.title),description:w}),Object(r.h)("section",{id:"externalPlugins"},Object(r.h)("div",{class:"content-section"},Object(r.h)("h1",{class:"page-header"},e?e+" ":"","Plugin Hub"),Object(r.h)("div",{class:"row"},Object(r.h)("div",{class:"col-sm-8"},Object(r.h)("p",null,w),Object(r.h)("p",null,"For more information about the Plugin Hub and how to install these plugins, read the"," ",Object(r.h)("a",{href:"https://github.com/runelite/runelite/wiki/Information-about-the-Plugin-Hub"},"guide on our wiki"),".")),Object(r.h)("div",{class:"col-sm-4"},o>0&&Object(r.h)("div",{class:"btn btn-block btn-dark disabled"},Object(r.h)("b",null,Object(h.d)(o))," ",o>1?"active installs":"active install"),l>0&&Object(r.h)("div",{class:"btn btn-block btn-dark disabled"},Object(r.h)("b",null,Object(h.d)(l))," ",l>1?"plugins":"plugin"),u>0&&Object(r.h)("div",{class:"btn btn-block btn-dark disabled"},Object(r.h)("b",null,Object(h.d)(u))," ",u>1?"installed plugins":"installed plugin"))),Object(r.h)("div",{class:"row"},Object(r.h)("div",{class:"col-sm-8"},Object(r.h)(v.a,{value:c.name,onInput:function(t){return function(t,e){return e({name:t.target.value})}(t,a)}})),Object(r.h)("div",{class:"col-sm-4"},Object(r.h)(y.a,{prefix:"Sort by",value:i,choices:f,onClick:s}))),Object(r.h)("div",{class:"row"},n.map((function(t){return Object(r.h)(d,Object.assign({key:t.internalName},t))}))))))})))}}]);
//# sourceMappingURL=9.0d4ac1a2.chunk.js.map