(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{225:function(e,t,a){"use strict";a(55);var n=a(54),i=a(5);t.__esModule=!0,t.graphql=function(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")},t.StaticQuery=t.StaticQueryContext=void 0;var r=i(a(1)),l=i(a(0)),c=n(a(270));t.Link=c.default,t.withPrefix=c.withPrefix,t.push=c.push,t.replace=c.replace,t.navigateTo=c.navigateTo;var o=i(a(267));t.PageRenderer=o.default;var s=r.default.createContext({});t.StaticQueryContext=s;var m=function(e){return r.default.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.default.createElement("div",null,"Loading (StaticQuery)")})};t.StaticQuery=m,m.propTypes={data:l.default.object,query:l.default.string.isRequired,render:l.default.func,children:l.default.func}},229:function(e,t){e.exports={blogPostDir:"blog",projectPostDir:"projects",siteTitle:"Emily Young - UX Designer",siteTitleAlt:"EmilyYoung",siteShortName:"EmilyYoung",siteLogo:"/social/avatar.png",siteBanner:"/social/banner.jpg",siteUrl:"https://livingincircuits.co.uk",pathPrefix:"/",siteDescription:"Emily Young is a UX Designer/Developer from Yorkshire who loves to create clean, simple and inclusive experiences",googleAnalyticsID:"UA-100446901-1"}},230:function(e,t,a){"use strict";var n=a(1),i=a.n(n),r=a(0),l=a.n(r),c=function(e){var t=e.input;return i.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}})},o=c;c.propTypes={input:l.a.any.isRequired};var s=a(225),m=function(){return i.a.createElement("header",{className:"header"},i.a.createElement("div",{className:"inner"},i.a.createElement("a",{href:"/",className:"link"},i.a.createElement("img",{src:"../me.jpg",className:"round",alt:"Emily Young",width:"60",height:"60"})),i.a.createElement("nav",{className:"nav"},i.a.createElement("ul",null,i.a.createElement("li",{className:"item"},i.a.createElement(s.Link,{to:"/about"},"About")),i.a.createElement("li",{className:"item"},i.a.createElement(s.Link,{to:"/projects"},"Projects")),i.a.createElement("li",{className:"item"},i.a.createElement(s.Link,{to:"/blog"},"Blog"))))))},u=function(e){return e.children,i.a.createElement("footer",{className:"footer"},i.a.createElement("div",{className:"page-inner"},i.a.createElement("p",null,i.a.createElement("img",{src:"../cute-cat.gif",alt:"Cat",width:"30"})," Crafted by Emily Young"),i.a.createElement("p",null,i.a.createElement("a",{href:"https://github.com/livingincircuits/portfolio"},"View Source Code")," · ",i.a.createElement("a",{href:"https://www.linkedin.com/in/emily-jane-young/"},"LinkedIn")," · ",i.a.createElement("a",{href:"https://github.com/livingincircuits"},"Github")," · ",i.a.createElement("a",{href:"https://dribbble.com/livingincircuits"},"Dribbble")," · ",i.a.createElement("a",{href:"mailto:emily@emily-young.com?subject=Hello"},"Email Me"))))},p=u;u.propTypes={children:l.a.any},u.defaultProps={children:!1},a(264),a(262),a(260),a(258),a(256);var d=function(e){var t=e.children;return i.a.createElement("div",null,i.a.createElement(i.a.Fragment,null,i.a.createElement(b,null),i.a.createElement("div",{className:"page-body"},i.a.createElement(m,null),i.a.createElement("main",{className:"page"},t),i.a.createElement(p,null))))},g=d;d.propTypes={children:l.a.any.isRequired};var h=a(232),f=a.n(h),E=a(229),y=a.n(E),v=function(e){var t,a,n,r,l=e.postNode,c=e.postPath,o=e.postSEO;o?(t=l.frontmatter.title+" | "+y.a.siteTitleAlt,a=l.excerpt,r=y.a.siteUrl+c):(t=y.a.siteTitle,a=y.a.siteDescription,n=y.a.siteBanner);var s="/"===y.a.pathPrefix?"":y.a.pathPrefix;n=y.a.siteUrl+s+n;var m=y.a.siteUrl+y.a.pathPrefix,u=[{"@context":"http://schema.org","@type":"WebSite",url:m,name:t,alternateName:y.a.siteTitleAlt?y.a.siteTitleAlt:""}];return o&&u.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":r,name:t,image:n}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:m,name:t,alternateName:y.a.siteTitleAlt,headline:t,image:{"@type":"ImageObject",url:n},description:a}),i.a.createElement(f.a,null,i.a.createElement("html",{lang:"en_GB"}),i.a.createElement("title",null,t),i.a.createElement("meta",{name:"description",content:a}),i.a.createElement("meta",{name:"image",content:n}),i.a.createElement("meta",{charSet:"utf-8"}),i.a.createElement("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge,chrome=1"}),i.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),i.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicons/apple-touch-icon.png"}),i.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicons/favicon-32x32.png"}),i.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicons/favicon-16x16.png"}),i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(u)),i.a.createElement("meta",{property:"og:locale",content:"en_GB"}),i.a.createElement("meta",{property:"og:url",content:o?r:m}),o?i.a.createElement("meta",{property:"og:type",content:"article"}):null,i.a.createElement("meta",{property:"og:title",content:t}),i.a.createElement("meta",{property:"og:description",content:a}),i.a.createElement("meta",{property:"og:image",content:n}),i.a.createElement("meta",{name:"google-site-verification",content:"K2IZiKagWwqNsK3TK4SHJrJ5xqj3HkSSJPqH-yG_Zpg"}))},b=v;v.propTypes={postNode:l.a.object,postPath:l.a.string,postSEO:l.a.bool},a.d(t,"a",function(){return o}),a.d(t,"b",function(){return g}),a.d(t,"c",function(){return b})},236:function(e,t,a){"use strict";var n=a(1),i=a.n(n),r=a(0),l=a.n(r),c=function(e){e.children;var t=e.title;return i.a.createElement("h1",{className:"pinline"},i.a.createElement("svg",{className:"pinline__svg pinline__svg--top",width:"80",height:"60",viewBox:"5 0 80 60"},i.a.createElement("path",{className:"wave",fill:"none",stroke:"#FFF",strokeWidth:"4",strokeLinecap:"round",d:"M 0 37.5 c 7.684299348848887 0 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15"})),i.a.createElement("span",null,t),i.a.createElement("svg",{className:"pinline__svg pinline__svg--bottom",width:"80",height:"40",viewBox:"5 0 80 40"},i.a.createElement("path",{className:"wave",fill:"none",stroke:"#FFF",strokeWidth:"4",strokeLinecap:"round",d:"M 0 37.5 c 7.684299348848887 0 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15"})))};t.a=c,c.propTypes={children:l.a.any,title:l.a.oneOfType([l.a.string,l.a.object]).isRequired},c.defaultProps={children:!1}},256:function(e,t,a){},258:function(e,t,a){},260:function(e,t,a){},262:function(e,t,a){},264:function(e,t,a){},266:function(e,t,a){"use strict";var n=a(5);t.__esModule=!0,t.default=void 0;var i=n(a(1)),r=n(a(0)),l=n(a(105)),c=n(a(52)),o=function(e){var t=e.location,a=c.default.getResourcesForPathname(t.pathname);return i.default.createElement(l.default,{location:t,pageResources:a})};o.propTypes={location:r.default.shape({pathname:r.default.string.isRequired}).isRequired};var s=o;t.default=s},267:function(e,t,a){"use strict";var n;e.exports=(n=a(266))&&n.default||n}}]);
//# sourceMappingURL=1-d244acf6f8989dd31ffc.js.map