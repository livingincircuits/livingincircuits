(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{148:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return g}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return d});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=a(157),o=a.n(c);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var s=a(180),m=a.n(s);a.d(t,"PageRenderer",function(){return m.a});var u=a(45);a.d(t,"parsePath",function(){return u.a});var p=r.a.createContext({}),d=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},152:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=function(e){var t=e.input;return r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}})},o=c;c.propTypes={input:l.a.any.isRequired};var s=a(148),m=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"inner"},r.a.createElement("a",{href:"/",className:"link"},r.a.createElement("img",{src:"../me.jpg",className:"round",alt:"Emily Young",width:"60",height:"60"})),r.a.createElement("nav",{className:"nav"},r.a.createElement("ul",null,r.a.createElement("li",{className:"item"},r.a.createElement(s.Link,{to:"/about"},"About")),r.a.createElement("li",{className:"item"},r.a.createElement(s.Link,{to:"/process"},"Process")),r.a.createElement("li",{className:"item"},r.a.createElement(s.Link,{to:"/blog"},"Writing"))))))},u=function(e){e.children;return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"page-inner"},r.a.createElement("p",null,r.a.createElement("img",{src:"../cute-cat.gif",alt:"Cat",width:"30"})," Crafted by Emily Young"),r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/livingincircuits/portfolio"},"Source")," · ",r.a.createElement("a",{href:"https://www.linkedin.com/in/emily-jane-young/"},"LinkedIn")," · ",r.a.createElement("a",{href:"https://dribbble.com/livingincircuits"},"Dribbble")," · ",r.a.createElement("a",{href:"mailto:emily@emily-young.com?subject=Hello"},"Email"))))},p=u;u.propTypes={children:l.a.any},u.defaultProps={children:!1};a(186),a(187),a(188),a(189),a(190);var d=function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null),r.a.createElement("div",{className:"page-body"},r.a.createElement(m,null),r.a.createElement("main",{className:"page"},t),r.a.createElement(p,null))))},g=d;d.propTypes={children:l.a.any.isRequired};var h=a(153),f=a.n(h),E=a(154),y=a.n(E),v=function(e){var t,a,n,i,l=e.postNode,c=e.postPath,o=e.postSEO;o?(t=l.frontmatter.title+" | "+y.a.siteTitleAlt,a=l.excerpt,i=y.a.siteUrl+c):(t=y.a.siteTitle,a=y.a.siteDescription,n=y.a.siteBanner);var s="/"===y.a.pathPrefix?"":y.a.pathPrefix;n=y.a.siteUrl+s+n;var m=y.a.siteUrl+y.a.pathPrefix,u=[{"@context":"http://schema.org","@type":"WebSite",url:m,name:t,alternateName:y.a.siteTitleAlt?y.a.siteTitleAlt:""}];return o&&u.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":i,name:t,image:n}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:m,name:t,alternateName:y.a.siteTitleAlt,headline:t,image:{"@type":"ImageObject",url:n},description:a}),r.a.createElement(f.a,null,r.a.createElement("html",{lang:"en_GB"}),r.a.createElement("title",null,t),r.a.createElement("meta",{name:"description",content:a}),r.a.createElement("meta",{name:"image",content:n}),r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge,chrome=1"}),r.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),r.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicons/apple-touch-icon.png"}),r.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicons/favicon-32x32.png"}),r.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicons/favicon-16x16.png"}),r.a.createElement("script",{type:"application/ld+json"},JSON.stringify(u)),r.a.createElement("meta",{property:"og:locale",content:"en_GB"}),r.a.createElement("meta",{property:"og:url",content:o?i:m}),o?r.a.createElement("meta",{property:"og:type",content:"article"}):null,r.a.createElement("meta",{property:"og:title",content:t}),r.a.createElement("meta",{property:"og:description",content:a}),r.a.createElement("meta",{property:"og:image",content:n}),r.a.createElement("meta",{name:"google-site-verification",content:"K2IZiKagWwqNsK3TK4SHJrJ5xqj3HkSSJPqH-yG_Zpg"}))},b=v;v.propTypes={postNode:l.a.object,postPath:l.a.string,postSEO:l.a.bool},a.d(t,"a",function(){return o}),a.d(t,"b",function(){return g}),a.d(t,"c",function(){return b})},154:function(e,t){e.exports={blogPostDir:"blog",projectPostDir:"projects",siteTitle:"Emily Young - UX Researcher",siteTitleAlt:"EmilyYoung",siteShortName:"EmilyYoung",siteLogo:"/social/avatar.png",siteBanner:"/social/banner.jpg",siteUrl:"https://livingincircuits.co.uk",pathPrefix:"/",siteDescription:"Emily Young is a UX Researcher from Yorkshire who loves to create clean, simple and inclusive experiences",googleAnalyticsID:"UA-100446901-1"}},180:function(e,t,a){var n;e.exports=(n=a(185))&&n.default||n},185:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=a(70),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},186:function(e,t,a){},187:function(e,t,a){},188:function(e,t,a){},189:function(e,t,a){},190:function(e,t,a){}}]);
//# sourceMappingURL=0-b5e1d1bc6e37be41c741.js.map