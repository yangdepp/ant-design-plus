(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"9kvl":function(e,t,n){"use strict";n.d(t,"a",(function(){return a["b"]}));var a=n("FfOG");n("bCY9"),n("Fghh"),n("k1fw"),n("qVdP"),n("jsC+"),n("0Owb"),n("PpiC"),n("q1tI")},WpQk:function(e,t,n){},dEZW:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),l=n.n(a),r=n("dEAq"),c=n("Hf60"),o=n("dMo/"),u=l.a.memo((e=>{var t=e.demos,n=t["layout-demo1"].component;return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"layout-\u5e03\u5c40"},l.a.createElement(r["AnchorLink"],{to:"#layout-\u5e03\u5c40","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Layout \u5e03\u5c40"),l.a.createElement("h3",{id:"\u4f55\u65f6\u4f7f\u7528"},l.a.createElement(r["AnchorLink"],{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5f02\u6b65\u83b7\u53d6\u83dc\u5355\u540e\uff0c\u81ea\u52a8\u5e03\u5c40\u3002")),l.a.createElement("h3",{id:"\u57fa\u7840\u7528\u6cd5"},l.a.createElement(r["AnchorLink"],{to:"#\u57fa\u7840\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u7528\u6cd5"),l.a.createElement("p",null,"\u9ed8\u8ba4\u5f02\u6b65\u8fd4\u56de\u7684\u6570\u636e\u7ed3\u6784\u4e3a ",l.a.createElement("code",null,"{","label: ReactNode; value: string","}"))),l.a.createElement(c["default"],t["layout-demo1"].previewerProps,l.a.createElement(n,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h3",{id:"api"},l.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"API"),l.a.createElement(o["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u5c5e\u6027"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"request"),l.a.createElement("td",null,"\u83b7\u53d6\u9009\u62e9\u5668\u4e0b\u62c9\u83dc\u5355\u6570\u636e\u7684\u65b9\u6cd5"),l.a.createElement("td",null,l.a.createElement("code",null,"() => Promise<ValueType[] | undefined>")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"customOption"),l.a.createElement("td",null,"\u81ea\u5b9a\u4e49",l.a.createElement("code",null,"Option"),"\u7684\u5c55\u793a"),l.a.createElement("td",null,l.a.createElement("code",null,"(option: ValueType, index: number, options: ValueType[]) => ReactNode")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"customLoading"),l.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u52a0\u8f7d\u6837\u5f0f"),l.a.createElement("td",null,l.a.createElement("code",null,"ReactNode")),l.a.createElement("td",null,"-")))))))}));t["default"]=e=>{var t=l.a.useContext(r["context"]),n=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(u,{demos:n})}},"dMo/":function(e,t,n){"use strict";var a=n("q1tI"),l=n.n(a),r=n("hKI/"),c=n.n(r);n("WpQk");function o(e,t){return s(e)||m(e,t)||i(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e,t){if(e){if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function m(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,l,r=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(a=n.next()).done);c=!0)if(r.push(a.value),t&&r.length===t)break}catch(u){o=!0,l=u}finally{try{c||null==n["return"]||n["return"]()}finally{if(o)throw l}}return r}}function s(e){if(Array.isArray(e))return e}var E=function(e){var t=e.children,n=Object(a["useRef"])(),r=Object(a["useState"])(!1),u=o(r,2),i=u[0],d=u[1],m=Object(a["useState"])(!1),s=o(m,2),E=s[0],f=s[1];return Object(a["useEffect"])((function(){var e=n.current,t=c()((function(){d(e.scrollLeft>0),f(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l.a.createElement("div",{className:"__dumi-default-table"},l.a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":i||void 0,"data-right-folded":E||void 0},l.a.createElement("table",null,t)))};t["a"]=E}}]);