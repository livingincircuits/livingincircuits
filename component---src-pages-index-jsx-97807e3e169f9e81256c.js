(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{218:function(e,t,a){"use strict";a.r(t);var i=a(1),r=a.n(i),s=a(232),n=a.n(s),l=a(0),o=a.n(l),d=a(225),c=a(230),u=a(253),f=a.n(u),p=a(236),m=a(229),h=a.n(m),g=function(e){var t=e.cover,a=e.path,i=e.title;return r.a.createElement("div",{className:"card"},r.a.createElement(d.Link,{className:"card__link",to:a},r.a.createElement(f.a,{className:"card__img",fluid:t}),r.a.createElement("h2",{className:"card__project"},i),r.a.createElement("div",{className:"card__title"},r.a.createElement("svg",{viewBox:"0 0 400 90",version:"1.1",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("defs",null,r.a.createElement("mask",{id:"mask",x:"0",y:"0",width:"100%",height:"100%"},r.a.createElement("rect",{id:"alpha",x:"0",y:"0",width:"100%",height:"100%"}),r.a.createElement("text",{className:"title",dx:"50%",dy:"1.3em"},"Case Study"))),r.a.createElement("rect",{id:"base",x:"0",y:"0",width:"100%",height:"100%"})))))},y=g;g.propTypes={cover:o.a.any.isRequired,path:o.a.string.isRequired,title:o.a.string.isRequired};var b=function(e){var t=e.path,a=(e.category,e.date),i=e.title;return r.a.createElement(d.Link,{className:"featured-post__item",to:t},r.a.createElement("h2",null,i),r.a.createElement("div",null,r.a.createElement("h3",null,a)))},v=b;b.propTypes={path:o.a.string.isRequired,date:o.a.string.isRequired,title:o.a.string.isRequired},b.defaultProps={category:"User Experience"},a.d(t,"pageQuery",function(){return E});var w=function(e){var t=e.data,a=t.projects.edges,i=t.posts.edges;return r.a.createElement(c.b,null,r.a.createElement(n.a,{title:"Emily Young | "+h.a.siteTitle}),r.a.createElement(p.a,{title:"Emily Young"},"Emily Young"),r.a.createElement("section",{className:"page-inner"},r.a.createElement("p",null,"A UX Designer who loves to create clean, simple & inclusive experiences for everyone. I enjoy creating something simple from a complex problem and love creating human experiences on the web."),r.a.createElement("div",{className:"card-column"},a.map(function(e){return r.a.createElement(y,{key:e.node.frontmatter.title,cover:e.node.frontmatter.cover.childImageSharp.fluid,customer:e.node.frontmatter.customer,path:e.node.fields.slug,title:e.node.frontmatter.title})})),r.a.createElement("div",{className:"featured-post"},i.map(function(e){return r.a.createElement(v,{key:e.node.frontmatter.title,date:e.node.frontmatter.date,path:e.node.fields.slug,title:e.node.frontmatter.title,category:e.node.frontmatter.category})}))))};t.default=w,w.propTypes={data:o.a.shape({projects:o.a.shape({edges:o.a.array.isRequired}),posts:o.a.shape({edges:o.a.array.isRequired})}).isRequired};var E="2962740148"},253:function(e,t,a){"use strict";var i=a(5);t.__esModule=!0,t.default=void 0;var r,s=i(a(33)),n=i(a(50)),l=i(a(268)),o=i(a(51)),d=i(a(1)),c=i(a(0)),u=function(e){var t=(0,o.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return!!f[a]||(f[a]=!0,!1)},m=[],h=null,g=function(){if(null!==h)return h;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return h=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},y=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',n=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",o=e.opacity?e.opacity:"1";return"<img "+n+l+t+a+s+r+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+o+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},b=function(e){var t=e.style,a=e.onLoad,i=(0,l.default)(e,["style","onLoad"]);return d.default.createElement("img",(0,o.default)({},i,{onLoad:a,style:(0,o.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};b.propTypes={style:c.default.object,onLoad:c.default.func};var v=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,r=!0,s=!1;return!p(t)&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,r=!1,s=!0),"undefined"==typeof window&&(i=!1,r=!1),a.state={isVisible:i,imgLoaded:r,IOSupported:s},a.handleRef=a.handleRef.bind((0,n.default)((0,n.default)(a))),a}(0,s.default)(t,e);var a=t.prototype;return a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){m.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),m.push([e,t])}(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},a.render=function(){var e,t=this,a=u(this.props),i=a.title,r=a.alt,s=a.className,n=a.outerWrapperClassName,l=a.style,c=void 0===l?{}:l,f=a.imgStyle,p=void 0===f?{}:f,m=a.placeholderStyle,h=void 0===m?{}:m,v=a.fluid,w=a.fixed,E=a.backgroundColor,S=a.Tag;e="boolean"==typeof E?"lightgray":E;var R=(0,o.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},p,h),L=(0,o.default)({opacity:this.state.imgLoaded||!1===this.props.fadeIn?1:0},p);if(v){var x=v;return x.srcWebp&&x.srcSetWebp&&g()&&(x.src=x.srcWebp,x.srcSet=x.srcSetWebp),d.default.createElement(S,{className:(n||"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===c.position?"initial":"relative"}},d.default.createElement(S,{className:(s||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},c),ref:this.handleRef},d.default.createElement(S,{style:{width:"100%",paddingBottom:100/x.aspectRatio+"%"}}),x.base64&&d.default.createElement(b,{alt:r,title:i,src:x.base64,style:R}),x.tracedSVG&&d.default.createElement(b,{alt:r,title:i,src:x.tracedSVG,style:R}),e&&d.default.createElement(S,{title:i,style:{backgroundColor:e,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement(b,{alt:r,title:i,srcSet:x.srcSet,src:x.src,sizes:x.sizes,style:L,onLoad:function(){t.state.IOSupported&&t.setState({imgLoaded:!0}),t.props.onLoad&&t.props.onLoad()}}),d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:y((0,o.default)({alt:r,title:i},x))}})))}if(w){var N=w,q=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:N.width,height:N.height},c);return"inherit"===c.display&&delete q.display,N.srcWebp&&N.srcSetWebp&&g()&&(N.src=N.srcWebp,N.srcSet=N.srcSetWebp),d.default.createElement(S,{className:(n||"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===c.position?"initial":"relative"}},d.default.createElement(S,{className:(s||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef},N.base64&&d.default.createElement(b,{alt:r,title:i,src:N.base64,style:R}),N.tracedSVG&&d.default.createElement(b,{alt:r,title:i,src:N.tracedSVG,style:R}),e&&d.default.createElement(S,{title:i,style:{backgroundColor:e,width:N.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:N.height}}),this.state.isVisible&&d.default.createElement(b,{alt:r,title:i,width:N.width,height:N.height,srcSet:N.srcSet,src:N.src,style:L,onLoad:function(){t.setState({imgLoaded:!0}),t.props.onLoad&&t.props.onLoad()}}),d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:y((0,o.default)({alt:r,title:i,width:N.width,height:N.height},N))}})))}return null},t}(d.default.Component);v.defaultProps={fadeIn:!0,alt:"",Tag:"div"};var w=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),E=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});v.propTypes={resolutions:w,sizes:E,fixed:w,fluid:E,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),outerWrapperClassName:c.default.oneOfType([c.default.string,c.default.object]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,position:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,Tag:c.default.string};var S=v;t.default=S}}]);
//# sourceMappingURL=component---src-pages-index-jsx-97807e3e169f9e81256c.js.map