webpackJsonp([0xd2a57dc1d8840000],{"./.cache/api-runner-browser.js":function(e,o,n){"use strict";var t=[{plugin:n("./node_modules/gatsby-plugin-catch-links/gatsby-browser.js"),options:{plugins:[]}},{plugin:n("./node_modules/gatsby-remark-autolink-headers/gatsby-browser.js"),options:{plugins:[]}},{plugin:n("./node_modules/gatsby-plugin-offline/gatsby-browser.js"),options:{plugins:[]}},{plugin:n("./node_modules/gatsby-plugin-google-analytics/gatsby-browser.js"),options:{plugins:[],trackingId:"UA-102928446-2"}},{plugin:n("./node_modules/gatsby-plugin-offline/gatsby-browser.js"),options:{plugins:[]}}];e.exports=function(e,o,n){var s=t.map(function(n){if(n.plugin[e]){var t=n.plugin[e](o,n.options);return t}});return s=s.filter(function(e){return"undefined"!=typeof e}),s.length>0?s:n?[n]:[]}},"./.cache/async-requires.js":function(e,o,n){"use strict";o.components={"page-component---node-modules-gatsby-plugin-offline-app-shell-js":n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---node-modules-gatsby-plugin-offline-app-shell-js!./node_modules/gatsby-plugin-offline/app-shell.js"),"page-component---src-templates-tags-js":n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-templates-tags-js!./src/templates/tags.js"),"page-component---src-templates-blog-post-js":n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-templates-blog-post-js!./src/templates/blog-post.js"),"page-component---src-pages-404-js":n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-404-js!./src/pages/404.js"),"page-component---src-pages-index-js":n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-index-js!./src/pages/index.js")},o.json={"offline-plugin-app-shell-fallback.json":n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---offline-plugin-app-shell-fallback!./.cache/json/offline-plugin-app-shell-fallback.json"),"tags.json":n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---tags!./.cache/json/tags.json"),"tags-tech-stack.json":n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---tags-tech-stack!./.cache/json/tags-tech-stack.json"),"tags-colophon.json":n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---tags-colophon!./.cache/json/tags-colophon.json"),"tags-about.json":n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---tags-about!./.cache/json/tags-about.json"),"tags-intro.json":n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---tags-intro!./.cache/json/tags-intro.json"),"tags-gatsby.json":n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---tags-gatsby!./.cache/json/tags-gatsby.json"),"tags-react.json":n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---tags-react!./.cache/json/tags-react.json"),"tags-javascript.json":n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---tags-javascript!./.cache/json/tags-javascript.json"),"about.json":n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---about!./.cache/json/about.json"),"hello-world.json":n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---hello-world!./.cache/json/hello-world.json"),"getting-started-with-gatsby.json":n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---getting-started-with-gatsby!./.cache/json/getting-started-with-gatsby.json"),"404.json":n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---404!./.cache/json/404.json"),"index.json":n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json"),"404-html.json":n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---404-html!./.cache/json/404-html.json")},o.layouts={index:n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=layout-component---index!./src/layouts/index.js")}},"./.cache/component-renderer.js":function(e,o,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(o,"__esModule",{value:!0});var s=n("./node_modules/babel-runtime/helpers/extends.js"),a=t(s),l=n("./node_modules/babel-runtime/core-js/object/get-prototype-of.js"),r=t(l),d=n("./node_modules/babel-runtime/helpers/classCallCheck.js"),u=t(d),i=n("./node_modules/babel-runtime/helpers/createClass.js"),c=t(i),g=n("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),m=t(g),p=n("./node_modules/babel-runtime/helpers/inherits.js"),b=t(p),h=n("./node_modules/react/react.js"),f=t(h),j=n("./.cache/loader.js"),y=t(j),_=n("./.cache/emitter.js"),x=t(_),v=function(e){function o(e){(0,u.default)(this,o);var n=(0,m.default)(this,(o.__proto__||(0,r.default)(o)).call(this));return n.state={location:e.location,pageResources:y.default.getResourcesForPathname(e.location.pathname)},n}return(0,b.default)(o,e),(0,c.default)(o,[{key:"componentWillReceiveProps",value:function(e){var o=this;if(this.state.location.pathname!==e.location.pathname){var n=y.default.getResourcesForPathname(e.location.pathname);n?this.setState({location:e.location,pageResources:n}):y.default.getResourcesForPathname(e.location.pathname,function(n){o.setState({location:e.location,pageResources:n})})}}},{key:"componentDidMount",value:function(){var e=this;x.default.on("onPostLoadPageResources",function(o){o.page.path===y.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:o.pageResources})})}},{key:"shouldComponentUpdate",value:function(e,o){return this.state.pageResources.component!==o.pageResources.component||(this.state.pageResources.json!==o.pageResources.json||!(this.state.location.key===o.location.key||!o.pageResources.page||!o.pageResources.page.matchPath))}},{key:"render",value:function(){return this.state.pageResources?(0,h.createElement)(this.state.pageResources.component,(0,a.default)({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null}}]),o}(f.default.Component);o.default=v},"./.cache/emitter.js":function(e,o,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var s=n("./node_modules/mitt/dist/mitt.js"),a=t(s),l=(0,a.default)();e.exports=l},"./.cache/find-page.js":function(e,o,n){"use strict";var t=n("./node_modules/react-router-dom/index.js"),s={};e.exports=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(n){var a=n.slice(o.length);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),s[a])return s[a];var l=void 0;return e.some(function(e){if(e.matchPath){if((0,t.matchPath)(a,{path:e.path})||(0,t.matchPath)(a,{path:e.matchPath}))return l=e,s[a]=e,!0}else if((0,t.matchPath)(a,{path:e.path,exact:!0}))return l=e,s[a]=e,!0;return!1}),l}}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---404-html!./.cache/json/404-html.json":function(e,o,n){n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0xa2868bfb69fc9000,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/404-html.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---404!./.cache/json/404.json":function(e,o,n){n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0xe70826b53c045000,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/404.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---about!./.cache/json/about.json":function(e,o,n){n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0xf927f89000063000,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/about.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---getting-started-with-gatsby!./.cache/json/getting-started-with-gatsby.json":function(e,o,n){n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0xe911b570598fa000,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/getting-started-with-gatsby.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---hello-world!./.cache/json/hello-world.json":function(e,o,n){n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x834755aae49e4800,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/hello-world.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json":function(e,o,n){n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x81b8806e42603000,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/index.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---offline-plugin-app-shell-fallback!./.cache/json/offline-plugin-app-shell-fallback.json":function(e,o,n){n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0xbf4c176e203a5800,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/offline-plugin-app-shell-fallback.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---tags-about!./.cache/json/tags-about.json":function(e,o,n){n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x74d34a9253180400,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/tags-about.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---tags-colophon!./.cache/json/tags-colophon.json":function(e,o,n){n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x41eb46d3fc04d40,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/tags-colophon.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---tags-gatsby!./.cache/json/tags-gatsby.json":function(e,o,n){n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x7ab76f7a7e614000,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/tags-gatsby.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---tags-intro!./.cache/json/tags-intro.json":function(e,o,n){n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x50424004c77a5000,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/tags-intro.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---tags-javascript!./.cache/json/tags-javascript.json":function(e,o,n){n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x3d3dba1a480c1200,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/tags-javascript.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---tags-react!./.cache/json/tags-react.json":function(e,o,n){n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x4cee46c5c5030000,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/tags-react.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---tags-tech-stack!./.cache/json/tags-tech-stack.json":function(e,o,n){n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0xed336ef378d6b000,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/tags-tech-stack.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---tags!./.cache/json/tags.json":function(e,o,n){n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x32a939904c83d000,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/tags.json")})})}},"./.cache/loader.js":function(e,o,n){(function(o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var s=n("./node_modules/babel-runtime/core-js/get-iterator.js"),a=t(s),l=n("./.cache/find-page.js"),r=t(l),d=n("./.cache/emitter.js"),u=t(d),i=void 0,c={},g={},m={},p={},b={},h=[],f=[],j={},y=[],_={},x=function(e){return e&&e.default||e},v=void 0,w=!0;v=n("./.cache/prefetcher.js")({getNextQueuedResources:function(){return y.slice(-1)[0]},createResourceDownload:function(e){N(e,function(){y=y.filter(function(o){return o!==e}),v.onResourcedFinished(e)})}}),u.default.on("onPreLoadPageResources",function(e){v.onPreLoadPageResources(e)}),u.default.on("onPostLoadPageResources",function(e){v.onPostLoadPageResources(e)});var k=function(e,o){return _[e]>_[o]?1:_[e]<_[o]?-1:0},R=function(e,o){return j[e]>j[o]?1:j[e]<j[o]?-1:0},N=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(p[e])o.nextTick(function(){n(null,p[e])});else{var t="page-c"===e.slice(0,6)?g.components[e]:g.json[e];t(function(o,t){p[e]=t,n(o,t)})}},P=function(e,n){b[e]?o.nextTick(function(){n(null,b[e])}):N(e,function(o,t){if(o)n(o);else{var s=x(t());b[e]=s,n(o,s)}})},S=1,D={empty:function(){f=[],j={},_={},y=[],h=[]},addPagesArray:function(e){h=e;var o="";o="/blog",i=(0,r.default)(e,o)},addDevRequires:function(e){c=e},addProdRequires:function(e){g=e},dequeue:function(e){return f.pop()},enqueue:function(e){if(!h.some(function(o){return o.path===e}))return!1;var o=1/S;S+=1,j[e]?j[e]+=1:j[e]=1,D.has(e)||f.unshift(e),f.sort(R);var n=i(e);return n.jsonName&&(_[n.jsonName]?_[n.jsonName]+=1+o:_[n.jsonName]=1+o,y.indexOf(n.jsonName)!==-1||p[n.jsonName]||y.unshift(n.jsonName)),n.componentChunkName&&(_[n.componentChunkName]?_[n.componentChunkName]+=1+o:_[n.componentChunkName]=1+o,y.indexOf(n.componentChunkName)!==-1||p[n.jsonName]||y.unshift(n.componentChunkName)),y.sort(k),v.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:y,resourcesCount:_}},getPages:function(){return{pathArray:f,pathCount:j}},getPage:function(e){return i(e)},has:function(e){return f.some(function(o){return o===e})},getResourcesForPathname:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};w&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(i(e)||navigator.serviceWorker.getRegistrations().then(function(e){var o=!0,n=!1,t=void 0;try{for(var s,l=(0,a.default)(e);!(o=(s=l.next()).done);o=!0){var r=s.value;r.unregister()}}catch(e){n=!0,t=e}finally{try{!o&&l.return&&l.return()}finally{if(n)throw t}}window.location.reload()})),w=!1;var t=i(e);if(!t)return void console.log("A page wasn't found for \""+e+'"');if(e=t.path,m[e])return o.nextTick(function(){n(m[e]),u.default.emit("onPostLoadPageResources",{page:t,pageResources:m[e]})}),m[e];u.default.emit("onPreLoadPageResources",{path:e});var s=void 0,l=void 0,r=function(){if(s&&l){m[e]={component:s,json:l,page:t};var o={component:s,json:l,page:t};n(o),u.default.emit("onPostLoadPageResources",{page:t,pageResources:o})}};return P(t.componentChunkName,function(e,o){e&&console.log("Loading the component for "+t.path+" failed"),s=o,r()}),void P(t.jsonName,function(e,o){e&&console.log("Loading the JSON for "+t.path+" failed"),l=o,r()})},peek:function(e){return f.slice(-1)[0]},length:function(){return f.length},indexOf:function(e){return f.length-f.indexOf(e)-1}};e.exports=D}).call(o,n("./node_modules/process/browser.js"))},"./.cache/pages.json":function(e,o){e.exports=[{componentChunkName:"page-component---node-modules-gatsby-plugin-offline-app-shell-js",jsonName:"offline-plugin-app-shell-fallback.json",path:"/offline-plugin-app-shell-fallback"},{componentChunkName:"page-component---src-templates-tags-js",jsonName:"tags.json",path:"/tags"},{componentChunkName:"page-component---src-templates-tags-js",jsonName:"tags-tech-stack.json",path:"/tags/tech stack"},{componentChunkName:"page-component---src-templates-tags-js",jsonName:"tags-colophon.json",path:"/tags/colophon"},{componentChunkName:"page-component---src-templates-tags-js",jsonName:"tags-about.json",path:"/tags/about"},{componentChunkName:"page-component---src-templates-tags-js",jsonName:"tags-intro.json",path:"/tags/intro"},{componentChunkName:"page-component---src-templates-tags-js",jsonName:"tags-gatsby.json",path:"/tags/gatsby"},{componentChunkName:"page-component---src-templates-tags-js",jsonName:"tags-react.json",path:"/tags/react"},{componentChunkName:"page-component---src-templates-tags-js",jsonName:"tags-javascript.json",path:"/tags/javascript"},{componentChunkName:"page-component---src-templates-blog-post-js",jsonName:"about.json",path:"/about"},{componentChunkName:"page-component---src-templates-blog-post-js",jsonName:"hello-world.json",path:"/hello-world"},{componentChunkName:"page-component---src-templates-blog-post-js",jsonName:"getting-started-with-gatsby.json",path:"/getting-started-with-gatsby"},{componentChunkName:"page-component---src-pages-404-js",jsonName:"404.json",path:"/404"},{componentChunkName:"page-component---src-pages-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"page-component---src-pages-404-js",jsonName:"404-html.json",path:"/404.html"}]},"./.cache/prefetcher.js":function(e,o){"use strict";e.exports=function(e){var o=e.getNextQueuedResources,n=e.createResourceDownload,t=[],s=[],a=function(){var e=o();e&&(s.push(e),n(e))},l=function(e){switch(e.type){case"RESOURCE_FINISHED":s=s.filter(function(o){return o!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":t.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":t=t.filter(function(o){return o!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===s.length&&0===t.length&&a()},0)};return{onResourcedFinished:function(e){l({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){l({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){l({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){l({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:t,resourcesDownloading:s}},empty:function(){t=[],s=[]}}}},0:function(e,o,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function s(e){window.___history||(window.___history=e,e.listen(function(e,o){(0,u.default)("onRouteUpdate",{location:e,action:o})}))}function a(e,o){var n=o.location.pathname,t=(0,u.default)("shouldUpdateScroll",{prevRouterProps:e,pathname:n});if(t.length>0)return t[0];if(e){var s=e.location.pathname;if(s===n)return!1}return!0}var l=n("./node_modules/babel-runtime/helpers/extends.js"),r=t(l),d=n("./.cache/api-runner-browser.js"),u=t(d),i=n("./node_modules/react/react.js"),c=t(i),g=n("./node_modules/react-dom/index.js"),m=t(g),p=n("./node_modules/react-router-dom/index.js"),b=n("./node_modules/react-router-scroll/lib/index.js"),h=n("./node_modules/history/createBrowserHistory.js"),f=t(h),j=n("./.cache/emitter.js"),y=t(j),_=n("./.cache/pages.json"),x=t(_),v=n("./.cache/component-renderer.js"),w=t(v),k=n("./.cache/async-requires.js"),R=t(k),N=n("./.cache/loader.js"),P=t(N);window.___emitter=y.default,P.default.addPagesArray(x.default),P.default.addProdRequires(R.default),window.asyncRequires=R.default,window.___loader=P.default,window.matchPath=p.matchPath,(0,u.default)("onClientEntry"),(0,u.default)("registerServiceWorker").length>0&&n("./.cache/register-service-worker.js");var S=function(e){function o(t){t.page.path===P.default.getPage(e).path&&(y.default.off("onPostLoadPageResources",o),clearTimeout(n),window.___history.push(e))}if(window.location.pathname!==e){var n=setTimeout(function(){y.default.off("onPostLoadPageResources",o),y.default.emit("onDelayedLoadPageResources",{pathname:e}),window.___history.push(e)},1e3);P.default.getResourcesForPathname(e)?(clearTimeout(n),window.___history.push(e)):y.default.on("onPostLoadPageResources",o)}};window.___navigateTo=S;var D=(0,f.default)();(0,u.default)("onRouteUpdate",{location:D.location,action:D.action});var C=(0,u.default)("replaceRouterComponent",{history:D})[0],E=function(e){var o=e.children;return c.default.createElement(p.BrowserRouter,{history:D},o)},O=function(e){R.default.layouts.index?R.default.layouts.index(function(o,n){var t=n();e(t)}):e(function(e){return c.default.createElement("div",null,e.children())})};O(function(e){P.default.getResourcesForPathname(window.location.pathname,function(){var o=function(){return(0,i.createElement)(C?C:E,null,(0,i.createElement)(b.ScrollContext,{shouldUpdateScroll:a},(0,i.createElement)((0,p.withRouter)(e),{children:function(e){return(0,i.createElement)(p.Route,{render:function(o){s(o.history);var n=e?e:o;return P.default.getPage(n.location.pathname)?(0,i.createElement)(w.default,(0,r.default)({},n)):(0,i.createElement)(w.default,{location:{pathname:"/404.html"}})}})}})))},n=(0,u.default)("wrapRootComponent",{Root:o},o)[0];m.default.render(c.default.createElement(n,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,u.default)("onInitialClientRender")})})})},"./.cache/register-service-worker.js":function(e,o,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var s=n("./.cache/emitter.js"),a=t(s),l="/";l="/blog/","serviceWorker"in navigator&&navigator.serviceWorker.register(l+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var o=e.installing;console.log("installingWorker",o),o.addEventListener("statechange",function(){switch(o.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},"./node_modules/gatsby-plugin-catch-links/catch-links.js":function(e,o){"use strict";e.exports=function(e,o){e.addEventListener("click",function(e){if(e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||e.defaultPrevented)return!0;for(var n=null,t=e.target;t.parentNode;t=t.parentNode)if("A"===t.nodeName){n=t;break}if(!n)return!0;if(n.target&&"_self"!==n.target.toLowerCase())return!0;if(n.pathname===window.location.pathname&&""!==n.target.hash)return!0;if(n.pathname.search(/^.*\.((?!htm)[a-z0-9]{1,5})$/i)!==-1)return!0;var s=document.createElement("a");s.href=n.href;var a=document.createElement("a");return a.href=window.location.href,s.host!==a.host||(e.preventDefault(),o(n.getAttribute("href")),!1)})}},"./node_modules/gatsby-plugin-catch-links/gatsby-browser.js":function(e,o,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var s=n("./node_modules/gatsby-link/index.js"),a=n("./node_modules/gatsby-plugin-catch-links/catch-links.js"),l=t(a);(0,l.default)(window,function(e){(0,s.navigateTo)(e)})},"./node_modules/gatsby-plugin-google-analytics/gatsby-browser.js":function(e,o,n){"use strict";o.onRouteUpdate=function(e){var o=e.location;"function"==typeof ga&&(ga("set","page",(o||{}).pathname),ga("send","pageview"))}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---node-modules-gatsby-plugin-offline-app-shell-js!./node_modules/gatsby-plugin-offline/app-shell.js":function(e,o,n){n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x737bb7e987a92800,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/gatsby-plugin-offline/app-shell.js")})})}},"./node_modules/gatsby-plugin-offline/gatsby-browser.js":function(e,o){"use strict";o.registerServiceWorker=function(){return!0}},"./node_modules/gatsby-remark-autolink-headers/gatsby-browser.js":function(e,o,n){"use strict";var t=function(e){setTimeout(function(){var o=window.location.hash.replace("#","");if(""!==o){var n=document.getElementById(o);if(n){var t=n.offsetTop;window.scrollTo(0,t-e)}}},10)};o.onClientEntry=function(e,o){var n=0;o.offsetY&&(n=o.offsetY)},o.onRouteUpdate=function(e,o){var n=0;o.offsetY&&(n=o.offsetY),t(n)}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js":function(e,o,n){"use strict";function t(){function e(e){var o=t.lastChild;return"SCRIPT"!==o.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",o)):void(o.onload=o.onerror=function(){o.onload=o.onerror=null,setTimeout(e,0)})}var o,t=document.querySelector("head"),s=n.e,a=n.s;n.e=function(t,l){var r=!1,d=!0,u=function(e){l&&(l(n,e),l=null)};return!a&&o&&o[t]?void u(!0):(s(t,function(){r||(r=!0,d?setTimeout(function(){u()}):u())}),void(r||(d=!1,e(function(){r||(r=!0,a?a[t]=void 0:(o||(o={}),o[t]=!0),u(!0))}))))}}t()},"./node_modules/mitt/dist/mitt.js":function(e,o){function n(e){return e=e||Object.create(null),{on:function(o,n){(e[o]||(e[o]=[])).push(n)},off:function(o,n){e[o]&&e[o].splice(e[o].indexOf(n)>>>0,1)},emit:function(o,n){(e[o]||[]).map(function(e){e(n)}),(e["*"]||[]).map(function(e){e(o,n)})}}}e.exports=n},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=layout-component---index!./src/layouts/index.js":function(e,o,n){n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0xef47e37750d80000,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/home/travis/build/DSchau/blog/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/home/travis/build/DSchau/blog/node_modules/babel-plugin-add-module-exports/lib/index.js","/home/travis/build/DSchau/blog/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/home/travis/build/DSchau/blog/node_modules/babel-preset-env/lib/index.js","/home/travis/build/DSchau/blog/node_modules/babel-preset-stage-0/lib/index.js","/home/travis/build/DSchau/blog/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/layouts/index.js')})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-404-js!./src/pages/404.js":function(e,o,n){n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x7107efd8fd846000,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/home/travis/build/DSchau/blog/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/home/travis/build/DSchau/blog/node_modules/babel-plugin-add-module-exports/lib/index.js","/home/travis/build/DSchau/blog/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/home/travis/build/DSchau/blog/node_modules/babel-preset-env/lib/index.js","/home/travis/build/DSchau/blog/node_modules/babel-preset-stage-0/lib/index.js","/home/travis/build/DSchau/blog/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/404.js')})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-index-js!./src/pages/index.js":function(e,o,n){n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x37beb808d31a9600,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/home/travis/build/DSchau/blog/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/home/travis/build/DSchau/blog/node_modules/babel-plugin-add-module-exports/lib/index.js","/home/travis/build/DSchau/blog/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/home/travis/build/DSchau/blog/node_modules/babel-preset-env/lib/index.js","/home/travis/build/DSchau/blog/node_modules/babel-preset-stage-0/lib/index.js","/home/travis/build/DSchau/blog/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/index.js')})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-templates-blog-post-js!./src/templates/blog-post.js":function(e,o,n){n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x4d422fad1a8d8000,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/home/travis/build/DSchau/blog/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/home/travis/build/DSchau/blog/node_modules/babel-plugin-add-module-exports/lib/index.js","/home/travis/build/DSchau/blog/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/home/travis/build/DSchau/blog/node_modules/babel-preset-env/lib/index.js","/home/travis/build/DSchau/blog/node_modules/babel-preset-stage-0/lib/index.js","/home/travis/build/DSchau/blog/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/templates/blog-post.js')})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-templates-tags-js!./src/templates/tags.js":function(e,o,n){n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0xabf735f094be3000,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/home/travis/build/DSchau/blog/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/home/travis/build/DSchau/blog/node_modules/babel-plugin-add-module-exports/lib/index.js","/home/travis/build/DSchau/blog/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/home/travis/build/DSchau/blog/node_modules/babel-preset-env/lib/index.js","/home/travis/build/DSchau/blog/node_modules/babel-preset-stage-0/lib/index.js","/home/travis/build/DSchau/blog/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/templates/tags.js')})})}}});
//# sourceMappingURL=app-229f2cc41a8409627365.js.map