(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"9R+n":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"author":"@devSoyoung","description":"Ego sum operarius studens","disqusShortname":"cuteleeblog","url":"https://devsoyoung.github.io"}}}}')},Ctim:function(e,t,n){e.exports=n.p+"static/profile-78675dd0595e0d1ae6390cda3bae8cc9.jpeg"},J4bc:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return v}));n("91GP");var a=n("q1tI"),r=n.n(a),o=n("Bl7J"),i=n("RPjP"),u=n.n(i),s=n("9R+n"),c=function(){return s.data.site.siteMetadata},l=(n("IOKc"),function(e){var t=e.title,n=e.path,a=c(),o=a.disqusShortname,i=a.url;if(o)return r.a.createElement("div",{style:{marginTop:20}},r.a.createElement(u.a,{shortname:o,identifier:t,title:t,url:i.concat(n)}))}),d=n("Ly7C"),f=n("Ctim"),p=n.n(f),m=(n("7qt6"),function(){var e=d.data.site.siteMetadata,t=e.author,n=e.description;return r.a.createElement("div",{className:"author-info"},r.a.createElement("img",{className:"author-image",alt:"프로필 사진",src:p.a}),r.a.createElement("p",{className:"author-name"},r.a.createElement("a",{href:"https://github.com/devSoyoung",target:"_blank"},t)),r.a.createElement("p",{className:"author-description"},n))}),h=n("PoU3"),g=(n("WiME"),function(e){var t=e.title,n=e.date,o=e.category,i=e.html,u=e.path,s=Object(a.useRef)();return Object(a.useEffect)((function(){s.current.scrollIntoView()}),[]),r.a.createElement("div",{className:"post-container",ref:s},r.a.createElement("div",{className:"post-info-container"},r.a.createElement(h.a,{category:o,date:n}),r.a.createElement("h2",{className:"post-title"},t)),r.a.createElement("div",{className:"post-content",dangerouslySetInnerHTML:{__html:i}}),r.a.createElement(m,null),r.a.createElement(l,{path:u,title:t}))}),y=n("vrFN"),v=(t.default=function(e){var t=e.data.markdownRemark,n=t.frontmatter,a=t.html;return r.a.createElement(o.a,{type:"post"},r.a.createElement(y.a,{title:n.title}),r.a.createElement(g,Object.assign({},n,{html:a})))},"1890482374")},Ly7C:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"author":"@devSoyoung","description":"Ego sum operarius studens"}}}}')},RPjP:function(e,t,n){"use strict";e.exports=n("SLms")},SLms:function(e,t,n){"use strict";n("pIFo"),n("8+KV"),n("dZ+Y"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("DNiP"),n("V+eJ"),n("/SS/"),n("hHhE"),n("91GP"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=u(n("q1tI")),i=u(n("17x9"));function u(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var l=["shortname","identifier","title","url","category_id","onNewComment","language"],d=!1;function f(e,t){var n=t.onNewComment,a=t.language,r=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["onNewComment","language"]);for(var o in r)e.page[o]=r[o];e.language=a,n&&(e.callbacks={onNewComment:[n]})}var p=function(e){function t(){return s(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(e,t){return e.identifier!==this.props.identifier}},{key:"render",value:function(){var e=this,t=Object.keys(this.props).reduce((function(t,n){return l.some((function(e){return e===n}))?t:a({},t,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},n,e.props[n]))}),{});return o.default.createElement("div",t,o.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!d){var e=this.disqus=document.createElement("script"),t=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.async=!0,e.type="text/javascript",e.src="//"+this.props.shortname+".disqus.com/embed.js",t.appendChild(e),d=!0}}},{key:"loadDisqus",value:function(){var e=this,t={};l.forEach((function(n){"shortname"!==n&&e.props[n]&&(t[n]=e.props[n])})),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){f(this,t),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){f(this,t)},this.addDisqusScript())}}]),t}(o.default.Component);p.displayName="DisqusThread",p.propTypes={id:i.default.string,shortname:i.default.string.isRequired,identifier:i.default.string,title:i.default.string,url:i.default.string,category_id:i.default.string,onNewComment:i.default.func,language:i.default.string},p.defaultProps={url:"undefined"==typeof window?null:window.location.href},t.default=p}}]);
//# sourceMappingURL=component---src-templates-post-template-js-5aafe932e1f7418e7beb.js.map