(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{215:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),u=n(225),o=n(0),i=n.n(o),f=n(232),c=n.n(f),l=n(230),d=n(229),s=n.n(d),x=n(236),p=(n(252),function(e){e.category;var t=e.path,n=e.title,r=e.date,o=e.timeToRead,i=e.excerpt;return a.a.createElement("article",{className:"article-item"},a.a.createElement(u.Link,{to:t},a.a.createElement("h2",{className:"article-item__title"},n),a.a.createElement("p",{className:"article-item__ttr"},r," — Time to Read: ",o," Min"),a.a.createElement("p",{className:"article-item__text"},i)))}),g=p;p.propTypes={category:i.a.string.isRequired,path:i.a.string.isRequired,title:i.a.string.isRequired,date:i.a.string.isRequired,timeToRead:i.a.number.isRequired,excerpt:i.a.string.isRequired},n.d(t,"pageQuery",function(){return v});var m=function(e){var t=e.pageContext.category,n=e.data.allMarkdownRemark,r=n.edges;return n.totalCount,a.a.createElement(l.b,null,a.a.createElement(c.a,{title:t+" | "+s.a.siteTitle}),a.a.createElement(x.a,{title:t},"Category"),a.a.createElement("section",{className:"page-inner"},r.map(function(e){return a.a.createElement(g,{key:e.node.frontmatter.title,title:e.node.frontmatter.title,category:e.node.frontmatter.category,path:e.node.fields.slug,date:e.node.frontmatter.date,timeToRead:e.node.timeToRead,excerpt:e.node.excerpt})})),a.a.createElement("div",{className:"align-central"},a.a.createElement(u.Link,{className:"btn",to:"/categories/"},"View all Categories")))};t.default=m,m.propTypes={pageContext:i.a.shape({category:i.a.string.isRequired}).isRequired,data:i.a.shape({allMarkdownRemark:i.a.shape({edges:i.a.array.isRequired})}).isRequired};var v="2194718145"},226:function(e,t,n){var r=n(228).Symbol;e.exports=r},228:function(e,t,n){var r=n(245),a="object"==typeof self&&self&&self.Object===Object&&self,u=r||a||Function("return this")();e.exports=u},231:function(e,t,n){var r=n(246);e.exports=function(e){return null==e?"":r(e)}},233:function(e,t,n){var r=n(226),a=n(242),u=n(241),o=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":o&&o in Object(e)?a(e):u(e)}},234:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},235:function(e,t){var n=Array.isArray;e.exports=n},237:function(e,t){var n="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",r="["+n+"]",a="\\d+",u="[a-z\\xdf-\\xf6\\xf8-\\xff]",o="[^\\ud800-\\udfff"+n+a+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",i="(?:\\ud83c[\\udde6-\\uddff]){2}",f="[\\ud800-\\udbff][\\udc00-\\udfff]",c="[A-Z\\xc0-\\xd6\\xd8-\\xde]",l="(?:"+u+"|"+o+")",d="(?:"+c+"|"+o+")",s="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",x="[\\ufe0e\\ufe0f]?"+s+"(?:\\u200d(?:"+["[^\\ud800-\\udfff]",i,f].join("|")+")[\\ufe0e\\ufe0f]?"+s+")*",p="(?:"+["[\\u2700-\\u27bf]",i,f].join("|")+")"+x,g=RegExp([c+"?"+u+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[r,c,"$"].join("|")+")",d+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[r,c+l,"$"].join("|")+")",c+"?"+l+"+(?:['’](?:d|ll|m|re|s|t|ve))?",c+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",a,p].join("|"),"g");e.exports=function(e){return e.match(g)||[]}},238:function(e,t){var n=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return n.test(e)}},239:function(e,t){var n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(n)||[]}},240:function(e,t,n){var r=n(239),a=n(238),u=n(231),o=n(237);e.exports=function(e,t,n){return e=u(e),void 0===(t=n?void 0:t)?a(e)?o(e):r(e):e.match(t)||[]}},241:function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},242:function(e,t,n){var r=n(226),a=Object.prototype,u=a.hasOwnProperty,o=a.toString,i=r?r.toStringTag:void 0;e.exports=function(e){var t=u.call(e,i),n=e[i];try{e[i]=void 0;var r=!0}catch(e){}var a=o.call(e);return r&&(t?e[i]=n:delete e[i]),a}},243:function(e,t,n){var r=n(233),a=n(234);e.exports=function(e){return"symbol"==typeof e||a(e)&&"[object Symbol]"==r(e)}},244:function(e,t){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a}},245:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(265))},246:function(e,t,n){var r=n(226),a=n(244),u=n(235),o=n(243),i=r?r.prototype:void 0,f=i?i.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(u(t))return a(t,e)+"";if(o(t))return f?f.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n}},247:function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},248:function(e,t,n){var r=n(247)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=r},249:function(e,t,n){var r=n(248),a=n(231),u=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,o=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=a(e))&&e.replace(u,r).replace(o,"")}},250:function(e,t){e.exports=function(e,t,n,r){var a=-1,u=null==e?0:e.length;for(r&&u&&(n=e[++a]);++a<u;)n=t(n,e[a],a,e);return n}},251:function(e,t,n){var r=n(250),a=n(249),u=n(240),o=RegExp("['’]","g");e.exports=function(e){return function(t){return r(u(a(t).replace(o,"")),e,"")}}},252:function(e,t,n){var r=n(251)(function(e,t,n){return e+(n?"-":"")+t.toLowerCase()});e.exports=r}}]);
//# sourceMappingURL=component---src-templates-category-jsx-41973c476fe8a29e8fe1.js.map