(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(3510)}])},8494:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(5893),i=n(6439),a=n.n(i),o=n(7005),l=n(7495),c=n(7294);function s(){let{prefix:e}=(0,c.useContext)(l.ZP),t=n(2703);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:a().supporterArea,children:(0,r.jsxs)(o.Z,{speed:"120",pauseOnHover:"true",children:[(0,r.jsx)("ul",{children:null==t?void 0:t.map((t,n)=>(0,r.jsx)("li",{children:(0,r.jsx)("img",{src:"".concat(e,"/").concat(t.image),alt:t.alt})},n))}),(0,r.jsx)("ul",{children:null==t?void 0:t.map((t,n)=>(0,r.jsx)("li",{children:(0,r.jsx)("img",{src:"".concat(e,"/").concat(t.image),alt:t.alt})},n))})]})})})}},1427:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(5893),i=n(4971),a=n.n(i),o=n(1664),l=n.n(o),c=n(8494),s=n(7294),u=n(7495);function d(){let{prefix:e}=(0,s.useContext)(u.ZP);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.Z,{}),(0,r.jsx)("div",{className:"l-footer",children:(0,r.jsxs)("div",{className:"wrap clearboth",children:[(0,r.jsx)("div",{className:a().footerLogo,children:(0,r.jsx)("img",{src:"".concat(e,"/image/footer_logo.png"),alt:"GOLDEN DISC AWARDS Copyright\xa9Studio JAMM All Right Reserved"})}),(0,r.jsxs)("ul",{className:a().snsArea,children:[(0,r.jsx)("li",{children:(0,r.jsx)(l(),{href:"https://www.instagram.com/golden_disc/",children:(0,r.jsx)("img",{src:"".concat(e,"/image/icon/ico_instagram.svg"),alt:"instagram"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(l(),{href:"https://www.facebook.com/gdajtbcplus/",children:(0,r.jsx)("img",{src:"".concat(e,"/image/icon/ico_facebook.svg"),alt:"facebook"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(l(),{href:"https://twitter.com/GoldenDisc_en",children:(0,r.jsx)("img",{src:"".concat(e,"/image/icon/ico_twitter.svg"),alt:"twitter"})})})]})]})})]})}},7495:function(e,t,n){"use strict";n.d(t,{g3:function(){return a}});var r=n(7294);let i=r.createContext(),a=i.Provider;i.Consumer,t.ZP=i},3991:function(e,t){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return i},ACTION_NAVIGATE:function(){return a},ACTION_RESTORE:function(){return o},ACTION_SERVER_PATCH:function(){return l},ACTION_PREFETCH:function(){return c},ACTION_FAST_REFRESH:function(){return s},ACTION_SERVER_ACTION:function(){return u}});let i="refresh",a="navigate",o="restore",l="server-patch",c="prefetch",s="fast-refresh",u="server-action";(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1516:function(e,t,n){"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(2387),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _}});let r=n(8754),i=r._(n(7294)),a=n(4532),o=n(3353),l=n(1410),c=n(9064),s=n(370),u=n(9955),d=n(4224),f=n(508),p=n(1516),m=n(4266),h=n(3991),g=new Set;function v(e,t,n,r,i,a){if(!a&&!(0,o.isLocalURL)(t))return;if(!r.bypassPrefetchedCheck){let i=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,a=t+"%"+n+"%"+i;if(g.has(a))return;g.add(a)}let l=a?e.prefetch(t,i):e.prefetch(t,n,r);Promise.resolve(l).catch(e=>{})}function x(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}let j=i.default.forwardRef(function(e,t){let n,r;let{href:l,as:g,children:j,prefetch:_=null,passHref:y,replace:b,shallow:C,scroll:E,locale:w,onClick:N,onMouseEnter:O,onTouchStart:k,legacyBehavior:A=!1,...M}=e;n=j,A&&("string"==typeof n||"number"==typeof n)&&(n=i.default.createElement("a",null,n));let R=i.default.useContext(u.RouterContext),T=i.default.useContext(d.AppRouterContext),P=null!=R?R:T,S=!R,I=!1!==_,L=null===_?h.PrefetchKind.AUTO:h.PrefetchKind.FULL,{href:B,as:D}=i.default.useMemo(()=>{if(!R){let e=x(l);return{href:e,as:g?x(g):e}}let[e,t]=(0,a.resolveHref)(R,l,!0);return{href:e,as:g?(0,a.resolveHref)(R,g):t||e}},[R,l,g]),F=i.default.useRef(B),U=i.default.useRef(D);A&&(r=i.default.Children.only(n));let Z=A?r&&"object"==typeof r&&r.ref:t,[H,q,$]=(0,f.useIntersection)({rootMargin:"200px"}),K=i.default.useCallback(e=>{(U.current!==D||F.current!==B)&&($(),U.current=D,F.current=B),H(e),Z&&("function"==typeof Z?Z(e):"object"==typeof Z&&(Z.current=e))},[D,Z,B,$,H]);i.default.useEffect(()=>{P&&q&&I&&v(P,B,D,{locale:w},{kind:L},S)},[D,B,q,w,I,null==R?void 0:R.locale,P,S,L]);let G={ref:K,onClick(e){A||"function"!=typeof N||N(e),A&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),P&&!e.defaultPrevented&&function(e,t,n,r,a,l,c,s,u,d){let{nodeName:f}=e.currentTarget,p="A"===f.toUpperCase();if(p&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u&&!(0,o.isLocalURL)(n)))return;e.preventDefault();let m=()=>{let e=null==c||c;"beforePopState"in t?t[a?"replace":"push"](n,r,{shallow:l,locale:s,scroll:e}):t[a?"replace":"push"](r||n,{forceOptimisticNavigation:!d,scroll:e})};u?i.default.startTransition(m):m()}(e,P,B,D,b,C,E,w,S,I)},onMouseEnter(e){A||"function"!=typeof O||O(e),A&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),P&&(I||!S)&&v(P,B,D,{locale:w,priority:!0,bypassPrefetchedCheck:!0},{kind:L},S)},onTouchStart(e){A||"function"!=typeof k||k(e),A&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),P&&(I||!S)&&v(P,B,D,{locale:w,priority:!0,bypassPrefetchedCheck:!0},{kind:L},S)}};if((0,c.isAbsoluteUrl)(D))G.href=D;else if(!A||y||"a"===r.type&&!("href"in r.props)){let e=void 0!==w?w:null==R?void 0:R.locale,t=(null==R?void 0:R.isLocaleDomain)&&(0,p.getDomainLocale)(D,e,null==R?void 0:R.locales,null==R?void 0:R.domainLocales);G.href=t||(0,m.addBasePath)((0,s.addLocale)(D,e,null==R?void 0:R.defaultLocale))}return A?i.default.cloneElement(r,G):i.default.createElement("a",{...M,...G},n)}),_=j;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return c}});let r=n(7294),i=n(29),a="function"==typeof IntersectionObserver,o=new Map,l=[];function c(e){let{rootRef:t,rootMargin:n,disabled:c}=e,s=c||!a,[u,d]=(0,r.useState)(!1),f=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{f.current=e},[]);(0,r.useEffect)(()=>{if(a){if(s||u)return;let e=f.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:i,elements:a}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=l.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=o.get(r)))return t;let i=new Map,a=new IntersectionObserver(e=>{e.forEach(e=>{let t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:a,elements:i},l.push(n),o.set(n,t),t}(n);return a.set(e,t),i.observe(e),function(){if(a.delete(e),i.unobserve(e),0===a.size){i.disconnect(),o.delete(r);let e=l.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&l.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!u){let e=(0,i.requestIdleCallback)(()=>d(!0));return()=>(0,i.cancelIdleCallback)(e)}},[s,n,t,u,f.current]);let m=(0,r.useCallback)(()=>{d(!1)},[]);return[p,u,m]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3510:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var r=n(5893),i=n(2207),a=n.n(i),o=n(1664),l=n.n(o),c=n(7294),s=n(7495),u=n(1163);function d(e){let{openBtn:t,setOpenBtn:n}=e,{prefix:i}=(0,c.useContext)(s.ZP);(0,u.useRouter)();let[o,d]=(0,c.useState)(!1),f=()=>{d(e=>!e)},p=()=>{n(!1===t)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l(),{href:"/",legacyBehavior:!0,children:(0,r.jsx)("h1",{children:(0,r.jsx)("img",{src:"".concat(i,"/image/logo.png"),alt:"GOLDEN DISC AWARDS"})})}),(0,r.jsxs)("nav",{className:(t?"openMenuActive ":"")+a().nav,children:[(0,r.jsxs)("ul",{className:a().gnb,children:[(0,r.jsx)("li",{children:(0,r.jsx)(l(),{href:"".concat(i,"/about"),onClick:p,children:"ABOUT"})}),(0,r.jsx)("li",{children:(0,r.jsx)(l(),{href:"".concat(i,"/nominees"),onClick:p,children:"NOMINEES"})}),(0,r.jsx)("li",{children:(0,r.jsx)(l(),{href:"".concat(i,"/history"),onClick:p,children:"HISTORY"})}),(0,r.jsx)("li",{children:(0,r.jsx)(l(),{href:"".concat(i,"/gdnnow}"),onClick:p,children:"GDN NOW"})})]}),(0,r.jsxs)("div",{className:a().lang,children:[(0,r.jsx)("button",{className:"kr"+(o?"":" on"),onClick:f,children:(0,r.jsx)("label",{children:"KOR"})}),(0,r.jsx)("button",{className:"en"+(o?" on":""),onClick:f,children:(0,r.jsx)("label",{children:"ENG"})})]})]})]})}function f(){let[e,t]=(0,c.useState)(!1);return(0,r.jsx)("div",{className:"l-header",children:(0,r.jsx)("div",{className:"wrap",children:(0,r.jsxs)("div",{className:a().header,children:[(0,r.jsx)(d,{openBtn:e,setOpenBtn:t}),(0,r.jsxs)("div",{className:(e?"openMenuActive ":"")+a().mobileBtn,onClick:()=>{t(e=>!e)},children:[(0,r.jsx)("span",{}),(0,r.jsx)("span",{}),(0,r.jsx)("span",{})]})]})})})}var p=n(1427);function m(e){let{children:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f,{}),(0,r.jsx)("div",{className:"l-content",children:t}),(0,r.jsx)(p.Z,{})]})}function h(e){let{Component:t,pageProps:n}=e;return(0,r.jsx)(s.g3,{value:{prefix:"https://hiro961227.github.io/gda_clone"},children:(0,r.jsx)(m,{children:(0,r.jsx)(t,{...n})})})}n(5831),n(9436)},9436:function(){},5831:function(){},4971:function(e){e.exports={footerLogo:"footer_footerLogo__Yiybn",snsArea:"footer_snsArea__3POMx"}},2207:function(e){e.exports={header:"header_header__4AzQq",mobileBtn:"header_mobileBtn__Vxkrl",nav:"header_nav__jTjCB",gnb:"header_gnb__SdpiM",lang:"header_lang__wEv5n"}},6439:function(e){e.exports={supporterArea:"supporter_supporterArea__4oNQd"}},1664:function(e,t,n){e.exports=n(5569)},1163:function(e,t,n){e.exports=n(6885)},7005:function(e,t,n){var r=n(7294),i=r&&"object"==typeof r&&"default"in r?r:{default:r};!function(e){if(!e||"undefined"==typeof window)return;let t=document.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t)}('.marquee-container {\n  overflow-x: hidden !important;\n  display: flex !important;\n  flex-direction: row !important;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.overlay::before, .overlay::after {\n  background: linear-gradient(to right, var(--gradient-color));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n}\n.overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n}\n\n.child {\n  transform: var(--transform);\n}');let a=r.forwardRef(function({style:e={},className:t="",autoFill:n=!1,play:a=!0,pauseOnHover:o=!1,pauseOnClick:l=!1,direction:c="left",speed:s=50,delay:u=0,loop:d=0,gradient:f=!1,gradientColor:p=[255,255,255],gradientWidth:m=200,onFinish:h,onCycleComplete:g,onMount:v,children:x},j){let[_,y]=r.useState(0),[b,C]=r.useState(0),[E,w]=r.useState(1),[N,O]=r.useState(!1),k=r.useRef(null),A=j||k,M=r.useRef(null),R=r.useCallback(()=>{if(M.current&&A.current){let e=A.current.getBoundingClientRect(),t=M.current.getBoundingClientRect(),r=e.width,i=t.width;("up"===c||"down"===c)&&(r=e.height,i=t.height),n&&r&&i?w(i<r?Math.ceil(r/i):1):w(1),y(r),C(i)}},[n,A,c]);r.useEffect(()=>{if(N&&(R(),M.current&&A.current)){let e=new ResizeObserver(()=>R());return e.observe(A.current),e.observe(M.current),()=>{e&&e.disconnect()}}},[R,A,N]),r.useEffect(()=>{R()},[R,x]),r.useEffect(()=>{O(!0)},[]),r.useEffect(()=>{"function"==typeof v&&v()},[]);let T=r.useMemo(()=>n?b*E/s:b<_?_/s:b/s,[n,_,b,E,s]),P=`rgba(${p[0]}, ${p[1]}, ${p[2]}`,S=r.useMemo(()=>Object.assign(Object.assign({},e),{"--pause-on-hover":!a||o?"paused":"running","--pause-on-click":!a||o&&!l||l?"paused":"running","--width":"up"===c||"down"===c?"100vh":"100%","--transform":"up"===c?"rotate(-90deg)":"down"===c?"rotate(90deg)":"none"}),[e,a,o,l,c]),I=r.useMemo(()=>({"--gradient-color":`${P}, 1), ${P}, 0)`,"--gradient-width":"number"==typeof m?`${m}px`:m}),[P,m]),L=r.useMemo(()=>({"--play":a?"running":"paused","--direction":"left"===c?"normal":"reverse","--duration":`${T}s`,"--delay":`${u}s`,"--iteration-count":d?`${d}`:"infinite","--min-width":n?"auto":"100%"}),[a,c,T,u,d,n]),B=r.useMemo(()=>({"--transform":"up"===c?"rotate(90deg)":"down"===c?"rotate(-90deg)":"none"}),[c]),D=r.useCallback(e=>[...Array(Number.isFinite(e)&&e>=0?e:0)].map((e,t)=>i.default.createElement(r.Fragment,{key:t},r.Children.map(x,e=>i.default.createElement("div",{style:B,className:"child"},e)))),[B,x]);return N?i.default.createElement("div",{ref:A,style:S,className:"marquee-container "+t},f&&i.default.createElement("div",{style:I,className:"overlay"}),i.default.createElement("div",{className:"marquee",style:L,onAnimationIteration:g,onAnimationEnd:h},i.default.createElement("div",{className:"initial-child-container",ref:M},r.Children.map(x,e=>i.default.createElement("div",{style:B,className:"child"},e))),D(E-1)),i.default.createElement("div",{className:"marquee",style:L},D(E))):null});t.Z=a},2703:function(e){"use strict";e.exports=JSON.parse('[{"image":"/image/supporter/ticker_img01.png","alt":"JTBC"},{"image":"/image/supporter/ticker_img02.png","alt":"JTBC2"},{"image":"/image/supporter/ticker_img03.png","alt":"JTBC4"},{"image":"/image/supporter/ticker_img04.png","alt":"Paravi"},{"image":"/image/supporter/ticker_img05.png","alt":"TikTok"},{"image":"/image/supporter/ticker_img06.png","alt":"TBS"},{"image":"/image/supporter/ticker_img07.png","alt":"HYUNDAI"}]')}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(6885)}),_N_E=e.O()}]);