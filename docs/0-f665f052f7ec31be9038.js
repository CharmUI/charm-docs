(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{129:function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.withPrefix=d,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(134)),o=a(n(146)),l=a(n(6)),i=a(n(47)),s=a(n(30)),u=a(n(4)),c=a(n(0)),p=n(20),f=n(130);function d(e){return function(e){return e.replace(/\/+/g,"/")}("/charm-docs/"+e)}var m={activeClassName:u.default.string,activeStyle:u.default.object},v=function(e){function t(t){var n;n=e.call(this)||this,(0,s.default)((0,i.default)((0,i.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,i.default)((0,i.default)(n))),n}(0,l.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,f.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,l=void 0===a?this.defaultGetProps:a,i=t.onClick,s=t.onMouseEnter,u=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),m=t.replace,v=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),h=d(n);return c.default.createElement(p.Link,(0,o.default)({to:h,state:u,getProps:l,innerRef:this.handleRef,onMouseEnter:function(e){s&&s(e),___loader.hovering((0,f.parsePath)(n).pathname)},onClick:function(t){return i&&i(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),b(n,{state:u,replace:m})),!0}},v))},t}(c.default.Component);v.propTypes=(0,o.default)({},m,{innerRef:u.default.func,onClick:u.default.func,to:u.default.string.isRequired,replace:u.default.bool});var h=v;t.default=h;var b=function(e,t){window.___navigate(d(e),t)};t.navigate=b;var y=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(d(e))};t.push=y;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(d(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),y(e)}},132:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(145);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return o(a).default}});var r=n(139);function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return o(r).default}})},133:function(e,t,n){var a=n(22).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||n(15)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},134:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},139:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var a,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=n(0),l=(a=o)&&a.__esModule?a:{default:a};var i=l.default.createContext({}),s=i.Provider,u=i.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,a=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["components"]);return l.default.createElement(u,null,function(t){return l.default.createElement(e,r({components:n||t},a))})}};t.default=function(e){var t=e.components,n=e.children;return l.default.createElement(s,{value:t},n)}},140:function(e,t,n){},141:function(e,t,n){},142:function(e,t,n){"use strict";n(147);var a=n(10),r=n(143),o=n(15),l=/./.toString,i=function(e){n(16)(RegExp.prototype,"toString",e,!0)};n(23)(function(){return"/a/b"!=l.call({source:"a",flags:"b"})})?i(function(){var e=a(this);return"/".concat(e.source,"/","flags"in e?e.flags:!o&&e instanceof RegExp?r.call(e):void 0)}):"toString"!=l.name&&i(function(){return l.call(this)})},143:function(e,t,n){"use strict";var a=n(10);e.exports=function(){var e=a(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},144:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(4),l=n.n(o),i=l.a.shape({bullet:l.a.string,path:l.a.string,exact:l.a.bool,name:l.a.string,lastUpdate:l.a.string}),s=l.a.arrayOf(l.a.shape({bullet:l.a.string,path:l.a.string,exact:l.a.bool,name:l.a.string,lastUpdate:l.a.string,content:l.a.arrayOf(i)})),u=l.a.shape({prevRoute:i,nextRoute:i,onFooterLinkClick:l.a.func}).isRequired,c=l.a.shape({listContents:s,isInner:l.a.bool,onLinkClick:l.a.func,LinkComponent:l.a.element}).isRequired,p=l.a.shape({logo:l.a.oneOfType([l.a.element,l.a.string]),list:l.a.element,listProps:c,isShown:l.a.bool}).isRequired,f=l.a.shape({title:l.a.string,lastUpdate:l.a.string,version:l.a.string,withButton:l.a.bool,onButtonClick:l.a.func,buttonName:l.a.string}).isRequired,d=l.a.shape({children:l.a.node,footer:l.a.element,aside:l.a.element,nav:l.a.element,asideProps:p,navProps:f,footerProps:u}).isRequired;function m(e){var t=e.logo,n=e.list,a=e.listProps,o=e.isShown,l=r.a.createElement(C,a);return r.a.createElement("div",{className:o?"aside is-shown":"aside"},r.a.createElement("div",{className:"aside__logo"},r.a.createElement("small",{className:"small text--bold"},t)),n||l)}m.defaultProps={logo:null,list:null,listProps:null,isShown:!1},m.propTypes=p;var v=m;function h(e){var t=e.prevRoute,n=e.nextRoute,a=e.onFooterLinkClick;return r.a.createElement("footer",{className:"footer"},t?r.a.createElement("button",{className:"button",type:"button",onClick:function(){return a(t.path)}},"Previous",r.a.createElement("br",null),r.a.createElement("span",{className:"text--blue"},"— ",t.name)):r.a.createElement("div",null),n?r.a.createElement("button",{className:"button text--right",type:"button",onClick:function(){return a(n.path)}},"Next",r.a.createElement("br",null),r.a.createElement("span",{className:"text--blue"},n.name," —")):r.a.createElement("div",null))}h.defaultProps={prevRoute:null,nextRoute:null,onFooterLinkClick:function(){}},h.propTypes=u;var b=h;function y(e){var t=e.title,n=e.lastUpdate,a=e.version,o=e.withButton,l=e.buttonName,i=e.onButtonClick;return r.a.createElement("nav",{className:"nav"},r.a.createElement("ul",{className:"list list--inline list--style-none"},o&&r.a.createElement("li",{className:"display-sm--none display--inline-block text--secondary"},r.a.createElement("button",{type:"button",className:"button text--small text--blue",onClick:i},l)),a&&r.a.createElement("li",{className:"text--secondary"},r.a.createElement("small",{className:"small"},"v".concat(a))),t&&r.a.createElement("li",{className:"text--secondary"},r.a.createElement("small",{className:"small"},t)),n&&r.a.createElement("li",{className:"text--light"},r.a.createElement("small",{className:"small"},n))))}y.defaultProps={title:null,lastUpdate:null,version:null,withButton:!0,buttonName:"Menu",onButtonClick:function(){}},y.propTypes=f;var g=y;function w(e){var t=e.children,n=e.footer,a=e.aside,o=e.nav,l=e.asideProps,i=e.navProps,s=e.footerProps;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"layout"},r.a.createElement("main",{className:"content"},t),r.a.createElement("div",{className:"content"},r.a.createElement("hr",null),n||r.a.createElement(b,s))),o||r.a.createElement(g,i),a||r.a.createElement(v,l))}w.defaultProps={children:null,footer:null,aside:null,nav:null,asideProps:{logo:"Charm UI",list:null,isShown:!1,listProps:{onLinkClick:function(){},LinkComponent:null,listContents:[]}},navProps:{version:null,buttonName:"Menu",onButtonClick:function(){},title:null,lastUpdate:null},footerProps:{nextRoute:null,prevRoute:null,onFooterLinkClick:null}},w.propTypes=d;var E=w;function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function _(e){var t=e.listContents,n=e.isInner,o=e.LinkComponent,l=e.onLinkClick;return r.a.createElement("ul",{className:n?"aside__list margin-bottom--1":"aside__list"},t.map(function(t){var i=t.bullet,s=t.content,u=t.isCurrentPath,c=void 0!==u&&u;return r.a.createElement(a.Fragment,{key:i},r.a.createElement("li",{className:n?"":"list-item--style-none"},r.a.createElement(o,P({},t,{onClick:l,className:n?"link_small":""}))),s&&(c||n)?r.a.createElement("li",{className:"list-item--style-none"},r.a.createElement(_,P({},e,{listContents:s,isInner:!0}))):null)}))}_.defaultProps={listContents:[],isInner:!1,LinkComponent:null,onLinkClick:function(){}},_.propTypes=c;var C=_;n.d(t,"a",function(){return v}),n.d(t,"b",function(){return b}),n.d(t,"e",function(){return g}),n.d(t,"c",function(){return E}),n.d(t,"d",function(){return C})},145:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=n(0),i=(a=l)&&a.__esModule?a:{default:a},s=n(139);var u={inlineCode:"code",wrapper:"div"},c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.Component),o(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,a=e.props,o=void 0===a?{}:a,l=e.children,s=e.components,c=void 0===s?{}:s,p=e.Layout,f=e.layoutProps,d=c[n+"."+t]||c[t]||u[t]||t;return p?i.default.createElement(p,r({components:c},f),i.default.createElement(d,o,l)):i.default.createElement(d,o,l)}}]),t}();t.default=(0,s.withMDXComponents)(c)},146:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},147:function(e,t,n){n(15)&&"g"!=/./g.flags&&n(22).f(RegExp.prototype,"flags",{configurable:!0,get:n(143)})}}]);
//# sourceMappingURL=0-f665f052f7ec31be9038.js.map