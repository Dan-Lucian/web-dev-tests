(this["webpackJsonpwebdev-tests-frontend"]=this["webpackJsonpwebdev-tests-frontend"]||[]).push([[0],{15:function(n,e,t){"use strict";var r,o=t(3),c=t(2),i=t(1),a=c.c.h1(r||(r=Object(o.a)(["\n  background: ",";\n  text-align: center;\n  display: block;\n  font-size: 2em;\n  font-weight: 700;\n  padding: 20px 10px;\n"])),(function(n){return n.theme.color.bgAccent}));e.a=function(n){var e=n.level,t=n.style,r=n.children,o="h".concat(e);return Object(i.jsx)(a,{style:t,as:o,children:r})}},17:function(n,e,t){"use strict";t.d(e,"a",(function(){return r})),t.d(e,"b",(function(){return o}));var r=[{main:"internet",secondary:["websites","http","security"],inactive:["internet","websites","http","security"],colorText:"#fff",colorBg:"#2DD4A0"},{main:"html",secondary:["general","tags","attributes","forms","accessibility"],inactive:[]},{main:"css",secondary:["selectors","properties","values","layout"],inactive:[]},{main:"javascript",secondary:["internals","objects","functions","dom","web data"],inactive:["javascript","internals","objects","functions","dom","web data"]},{main:"react",secondary:["concepts","process","classes","hooks","cra"],inactive:["concepts","process","classes","hooks","cra"]}],o=function(n){return r.find((function(e){return e.main===n||e.secondary.includes(n)}))}},22:function(n,e,t){"use strict";t.d(e,"a",(function(){return a}));var r,o=t(3),c=t(2),i=t(1),a=c.c.header(r||(r=Object(o.a)(["\n  margin-bottom: 5em;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: ",";\n"])),(function(n){return n.theme.colorBg}));e.b=function(n){var e=n.children,t=n.style;return Object(i.jsx)(a,{style:t,children:e})}},24:function(n,e,t){"use strict";t.d(e,"a",(function(){return s}));var r,o=t(3),c=t(9),i=t(2),a=t(1),s=i.c.button(r||(r=Object(o.a)(["\n  padding: 0;\n  border: 0;\n  border-radius: 2px;\n  font-size: 1em;\n  font-family: inherit;\n  font-weight: 700;\n  text-align: center;\n  overflow: hidden;\n  cursor: pointer;\n  opacity: var(--btn-opacity, 0.5);\n  background-color: ",";\n  color: ",";\n\n  @media (min-width: ",") {\n    font-weight: 400;\n  }\n\n  // fixes sticky hover on mobile\n  @media (hover: hover) {\n    &:hover {\n      opacity: ",";\n    }\n  }\n"])),(function(n){return n.color.bg}),(function(n){return n.color.text}),(function(n){return n.theme.screen.med}),(function(n){return n.theme.isTouch?"none":"1"}));e.b=function(n){var e=n.text,t=n.color,r=n.pressed,o={pressed:r,onClick:n.onClick,style:{"--btn-opacity":r?"1":"0.5"},color:t||{bg:"#ddd",text:"#000"},type:"button"};return Object(a.jsx)(s,Object(c.a)(Object(c.a)({},o),{},{children:e}))}},25:function(n,e,t){"use strict";var r=t(19),o=t.n(r),c="/api/questions",i={get:function(n,e){var t="?topics=".concat(encodeURIComponent(JSON.stringify(n)),"&limit=").concat(e);return o.a.get("".concat(c).concat(t)).then((function(n){return n.data}))},send:function(n,e){return o.a.post("".concat(c,"?password=").concat(e),n).then((function(n){return n.data}))}};e.a=i},34:function(n,e,t){"use strict";t.d(e,"a",(function(){return a}));var r=t(9),o=t(5),c=t(0),i=function(n,e){switch(e.type){case"pending":return{status:"pending",data:null,error:null};case"resolved":return{status:"resolved",data:e.data,error:null};case"rejected":return{status:"rejected",data:null,error:e.error};default:throw new Error("Unhandled action type: ".concat(e.type))}},a=function(n){var e=Object(c.useReducer)(i,Object(r.a)({status:"idle",data:null,error:null},n)),t=Object(o.a)(e,2),a=t[0],s=function(n){var e=Object(c.useRef)(!1);return Object(c.useLayoutEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),Object(c.useCallback)((function(){return e.current?n.apply(void 0,arguments):void 0}),[n])}(t[1]),l=a.data,u=a.error,d=a.status,f=Object(c.useCallback)((function(n){s({type:"pending"}),n.then((function(n){s({type:"resolved",data:n})}),(function(n){s({type:"rejected",error:n})}))}),[s]),b=Object(c.useCallback)((function(n){return s({type:"resolved",data:n})}),[s]),m=Object(c.useCallback)((function(n){return s({type:"rejected",error:n})}),[s]);return{setData:b,setError:m,error:u,status:d,data:l,run:f}}},67:function(n,e,t){"use strict";t.r(e);var r,o,c,i,a,s,l,u,d,f,b,m,j,h,p,g,x,A,O,v,w,y,B,E,C,I=t(0),k=t.n(I),Q=t(35),S=t.n(Q),M=t(8),T=t(4),z=t(2),F=t(3),J=Object(z.b)(r||(r=Object(F.a)(["\n  ","\n  ","\n  ","\n"])),"\n  /* ibm-plex-mono-regular - latin */\n  @font-face {\n    font-family: 'IBM Plex Mono';\n    font-style: normal;\n    font-weight: 400;\n    src: url('./assets/fonts/ibm-plex-mono-v12-latin-regular.eot'); /* IE9 Compat Modes */\n    src: local(''),\n      url('./assets/fonts/ibm-plex-mono-v12-latin-regular.eot?#iefix')\n        format('embedded-opentype'),\n      /* IE6-IE8 */ url('./assets/fonts/ibm-plex-mono-v12-latin-regular.woff2')\n        format('woff2'),\n      /* Super Modern Browsers */\n        url('./assets/fonts/ibm-plex-mono-v12-latin-regular.woff')\n        format('woff'),\n      /* Modern Browsers */\n        url('./assets/fonts/ibm-plex-mono-v12-latin-regular.ttf')\n        format('truetype'),\n      /* Safari, Android, iOS */\n        url('./assets/fonts/ibm-plex-mono-v12-latin-regular.svg#IBMPlexMono')\n        format('svg'); /* Legacy iOS */\n  }\n\n  /* ibm-plex-mono-700 - latin */\n  @font-face {\n    font-family: 'IBM Plex Mono';\n    font-style: normal;\n    font-weight: 700;\n    src: url('./assets/fonts/ibm-plex-mono-v12-latin-700.eot'); /* IE9 Compat Modes */\n    src: local(''),\n      url('./assets/fonts/ibm-plex-mono-v12-latin-700.eot?#iefix')\n        format('embedded-opentype'),\n      /* IE6-IE8 */ url('./assets/fonts/ibm-plex-mono-v12-latin-700.woff2')\n        format('woff2'),\n      /* Super Modern Browsers */\n        url('./assets/fonts/ibm-plex-mono-v12-latin-700.woff') format('woff'),\n      /* Modern Browsers */\n        url('./assets/fonts/ibm-plex-mono-v12-latin-700.ttf') format('truetype'),\n      /* Safari, Android, iOS */\n        url('./assets/fonts/ibm-plex-mono-v12-latin-700.svg#IBMPlexMono')\n        format('svg'); /* Legacy iOS */\n  }\n","\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n  }\n  ol, ul {\n    list-style: none;\n  }\n  blockquote, q {\n    quotes: none;\n  }\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n    content: '';\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n","\n  html {\n    box-sizing: border-box;\n    color-scheme: dark;\n    theme: dark;\n  }\n\n  *,\n  *:before,\n  *:after {\n    box-sizing: inherit;\n  }\n\n  img {\n    max-height: 100%;\n  }\n\n  button,\n  input,\n  select,\n  textarea {\n    font-family: inherit;\n    font-size: 100%;\n  }\n\n  body {\n    font-family: 'IBM Plex Mono', serif;\n    color: #fff;\n    background: #545e75;\n  }\n\n  html,\n  body,\n  #root {\n    height: 100%;\n  }\n"),U=t(1),L=z.c.div(o||(o=Object(F.a)(["\n  min-height: 100%;\n  position: relative;\n\n  @media (min-width: ",") {\n    font-size: 20px;\n  }\n\n  @media (min-width: ",") {\n    font-size: 22px;\n  }\n\n  @media (min-width: ",") {\n    font-size: 24px;\n  }\n"])),(function(n){return n.theme.screen.med}),(function(n){return n.theme.screen.lg}),(function(n){return n.theme.screen.xlg})),Y=function(n){var e=n.children;return Object(U.jsx)(L,{children:e})},P=t(5),R=z.c.nav(c||(c=Object(F.a)(["\n  position: fixed;\n  z-index: 100;\n  padding: 6px 6%;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: ",";\n  opacity: var(--nav-opacity);\n  pointer-events: var(--nav-pointer-events);\n  transition: opacity 100ms ease-in-out;\n"])),(function(n){return n.theme.color.bgAccent})),D=function(n){var e=n.children,t=function(n){var e=Object(I.useRef)(0),t=Object(I.useState)(n),r=Object(P.a)(t,2),o=r[0],c=r[1];return Object(I.useEffect)((function(){var n=function(){var n=window.pageYOffset||document.documentElement.scrollTop;n>e.current?(e.current=n<=0?0:n,c("down")):(e.current=n<=0?0:n,c("up"))};return window.addEventListener("scroll",n),function(){window.removeEventListener("scroll",n)}}),[]),o}("up");return Object(U.jsx)(R,{style:{"--nav-opacity":"down"===t?"0":"1","--nav-pointer-events":"down"===t?"none":"auto"},children:e})},H=Object(z.c)(M.b)(i||(i=Object(F.a)(["\n  font-size: 0;\n\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.color.text})),X=z.c.img(a||(a=Object(F.a)(["\n  cursor: pointer;\n\n  @media (min-width: ",") {\n    width: 60px;\n    height: 60px;\n  }\n"])),(function(n){return n.theme.screen.xlg})),N=function(){return Object(U.jsx)(H,{to:"/",children:Object(U.jsx)(X,{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},width:"50px",height:"50px",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOTSURBVHgB7d3BbRtXFEDRP3TaCLxLkCrEDgLv1YvpXrgX3IFchrMTXIfJiEGWyU2+YBIjzTnrISBRczV/8fBmWT5/Ow/gH+0G8K8EAkEgEAQCQSAQBAJBIBAEAkEgEAQCQSAQfhprtIzH8/fTl8FmLO92d+M89mNlVhnIX3F8eH8YbMb54emw7Hb7sTKOWBAEAkEgEAQCQSAQBAJBIBAEAkEgEAQCQSAQllssjjv//vMyVubr/f3h+Yf6OPhPzzfIp1+Px8NYmVvcu54gEAQCQSAQBAJBIBAEAkEgEAQCQSAQBAJBIBDm92JZ6rY5yxh3l9m1mc/cYnbrfDp9mrn+JcvppgOx1G2T9s+R7Mecw7i2yfvwJcvpHLEgCASCQCAIBIJAIAgEgkAgCASCQCAIBIJAIKzzLbcv8Mf9/dWXiM1a68K1NX5Xa+UJAkEgEAQCQSAQBAJBIBAEAkEgEAQCQSAQBALhzcxi3cJltmrm+tMYj4NXTSAT1jh4yHU5YkEQCASBQBAIBIFAEAgEgUAQCASBQBAIBIFAEAgEgUAQCASBQBAIBIFAEAgEgUAQCASBQBAIBIFAEAgEgUAQCASBQBAIBIFAEAgEgUAQCASBQBAIBIFAEAiEN/MSz1+Ox2Xm+q/394fnD3wcr9wtfo/L2323+gJTTxAIAoEgEAgCgSAQCAKBIBAIAoEgEAgCgSAQCG9mFmvWaYzHNf53uMxWzVy/jHE3Jl1mq2auv3xXY6M2G8hvx+PjWOEf/hYDlFsdPHwJRywIAoEgEAgCgSAQCAKBIBAIAoEgEAgCgSAQCJudxboFS91eP08QCAKBIBAIAoEgEAgCgSAQCAKBIBAIAoEgEAhmsa7oFsvptrzU7RYEckVrXU7H/+eIBUEgEAQCQSAQBAJBIBAEAkEgEAQCQSAQBALBLNYVWRz3+nmCQBAIBIFAEAgEgUAQCASBQBAIBIFAEAgEgUCYnsVa3u3uzg9Ph5nPjA/vDwN+tMn78HLvXobXZswPK57Hftnt9nMfGYcBP9jzfTg3CDoZx4UjFgSBQBAIBIFAEAgEgUAQCASBQBAIBIFAEAiEZfn87QUTKtd1Pp0+GXDcmIenw/Rs1Q14gkAQCASBQBAIBIFAEAgEgUAQCASBQBAIBIFAWOUs1ljG4/n76ctgM/5e6rYfK7POQGAlHLEgCASCQCAIBIJAIAgEgkAgCASCQCAIBIJAIPwJ+nCONSj/SXkAAAAASUVORK5CYII=",alt:"logo"})})},K=z.c.footer(s||(s=Object(F.a)(["\n  background: ",";\n  padding: 1em;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n\n  address {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n"])),(function(n){return n.theme.color.bgAccent})),q=function(n){var e=n.children;return Object(U.jsx)(K,{children:e})},W=t(20),G=z.c.ul(l||(l=Object(F.a)(["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n\n  li {\n    margin-left: 20px;\n  }\n\n  a:link,\n  a:visited,\n  a:active {\n    color: white;\n  }\n\n  a:hover {\n    opacity: 0.5;\n  }\n"]))),V=function(){return Object(U.jsxs)(G,{children:[Object(U.jsx)("li",{children:Object(U.jsx)("a",{href:"https://github.com/Dan-Lucian",children:Object(U.jsx)(W.a,{size:30})})}),Object(U.jsx)("li",{children:Object(U.jsx)("a",{href:"https://www.linkedin.com/in/dan-lucian-gaina/",children:Object(U.jsx)(W.b,{size:30})})})]})},Z=z.c.ul(u||(u=Object(F.a)(["\n  justify-content: flex-end;\n  display: none;\n\n  @media (min-width: ",") {\n    display: flex;\n  }\n\n  a {\n    margin-left: 60px;\n    padding: 2px;\n  }\n\n  a:link,\n  a:visited {\n    color: ",";\n    text-decoration: none;\n  }\n\n  a:hover {\n    color: ",";\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.screen.med}),(function(n){return n.theme.color.text}),(function(n){return n.theme.color.bgAccent}),(function(n){return n.theme.color.text})),_=function(){return Object(U.jsxs)(Z,{children:[Object(U.jsx)("li",{children:Object(U.jsx)(M.b,{to:"/",children:"_Home"})}),Object(U.jsx)("li",{children:Object(U.jsx)(M.b,{to:"/about",children:"_About"})})]})},$=z.c.div(d||(d=Object(F.a)(["\n  width: 36px;\n  height: 3px;\n  background-color: ",";\n  position: relative;\n  transition: transform 0.075s ease;\n\n  &::before,\n  &::after {\n    content: '';\n    display: block;\n    width: 36px;\n    height: 3px;\n    background-color: ",";\n    position: absolute;\n  }\n\n  &::before {\n    bottom: 10px;\n    transition: bottom 0.075s 0.12s ease;\n  }\n\n  &::after {\n    bottom: -10px;\n    transition: bottom 0.075s 0.12s ease, transform 0.075s ease;\n  }\n\n  ","\n"])),(function(n){return n.theme.color.hamburger}),(function(n){return n.theme.color.hamburger}),(function(n){return n.isMenuOpen&&"\n    transform: rotate(45deg);\n    transition-delay: 0.12s;\n\n    &::before {\n      bottom: 0;\n      transition: bottom 0.075s ease;\n    }\n\n    &::after {\n      bottom: 0;\n      transform: rotate(-90deg);\n      transition: bottom 0.075s ease, transform 0.075s 0.12s ease;\n    }\n  "})),nn=z.c.button(f||(f=Object(F.a)(["\n  height: 40px;\n  width: 50px;\n  background: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  cursor: pointer;\n"]))),en=function(n){var e=n.isMenuOpen,t=n.onClick;return Object(U.jsx)(nn,{onClick:t,children:Object(U.jsx)($,{isMenuOpen:e})})},tn=z.c.div(b||(b=Object(F.a)(["\n  background-color: ",";\n  color: ",";\n  position: absolute;\n  right: 0.5em;\n  top: 80%;\n  display: var(--display-menu, none);\n  flex-direction: column;\n  padding: 1.5em;\n  font-size: 1.3em;\n\n  a {\n    padding: 5px 2px;\n  }\n\n  a:first-child {\n    margin-bottom: 0.8em;\n  }\n\n  a:link,\n  a:visited {\n    color: ",";\n    text-decoration: none;\n  }\n\n  a:hover {\n    color: ",";\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.color.text}),(function(n){return n.theme.color.bgAccent}),(function(n){return n.theme.color.bgAccent}),(function(n){return n.theme.color.text}),(function(n){return n.theme.color.bgAccent})),rn=function(n){var e=n.children,t=n.isMenuOpen;return Object(U.jsx)(tn,{style:{"--display-menu":t?"flex":"none"},children:e})},on=z.c.div(m||(m=Object(F.a)(["\n  @media (min-width: ",") {\n    display: none;\n  }\n"])),(function(n){return n.theme.screen.med})),cn=function(){var n=function(n){var e=Object(I.useState)(n),t=Object(P.a)(e,2),r=t[0],o=t[1];return[r,function(n){o((function(e){return"boolean"===typeof n?n:!e}))}]}(!1),e=Object(P.a)(n,2),t=e[0],r=e[1],o=function(){var n=Object(I.useState)(!1),e=Object(P.a)(n,2),t=e[0],r=e[1],o=Object(I.useRef)(null);return Object(I.useEffect)((function(){if(o.current){var n=function(n){o.current&&!o.current.contains(n.target)?r(!0):r(!1)};return document.addEventListener("pointerdown",n),function(){document.removeEventListener("pointerdown",n)}}}),[o.current]),[o,t]}(),c=Object(P.a)(o,2),i=c[0],a=c[1];return Object(I.useEffect)((function(){a&&r(!1)}),[a,r]),Object(U.jsxs)(on,{ref:i,children:[Object(U.jsx)(en,{isMenuOpen:t,onClick:r}),Object(U.jsxs)(rn,{isMenuOpen:t,toggleMenuOpen:r,children:[Object(U.jsx)(M.b,{onClick:r,to:"/",children:"Home"}),Object(U.jsx)(M.b,{onClick:r,to:"/about",children:"About"})]})]})},an=t(39),sn=t(40),ln=t(43),un=t(41),dn=function(n){Object(ln.a)(t,n);var e=Object(un.a)(t);function t(n){var r;return Object(an.a)(this,t),(r=e.call(this,n)).state={error:null},r}return Object(sn.a)(t,[{key:"componentDidCatch",value:function(n){this.setState({error:n})}},{key:"render",value:function(){var n=this.state.error,e=this.props,t=e.children,r=e.FallbackComponent;if(null!==n){if(r)return Object(U.jsx)(r,{error:n});throw new Error("The Error boundary requires a FallbackComponent prop")}return t}}]),t}(k.a.Component),fn=z.c.div(j||(j=Object(F.a)(["\n  line-height: 1.5;\n  color: ",";\n"])),(function(n){return n.theme.color.red})),bn=function(n){var e=n.error;return Object(U.jsxs)(fn,{role:"alert",children:[Object(U.jsx)("p",{children:"Something went wrong:"}),Object(U.jsx)("pre",{children:e.message})]})},mn=z.c.div(h||(h=Object(F.a)(["\n  padding-top: 8em;\n  display: flex;\n  justify-content: center;\n"]))),jn=z.c.main(p||(p=Object(F.a)(["\n  color: ",";\n  background-color: ",";\n  font-size: 1.3em;\n  padding: 0.5em 1em;\n  animation-name: blink;\n  animation-duration: 2s;\n  animation-iteration-count: infinite;\n\n  @keyframes blink {\n    0% {\n      opacity: 1;\n    }\n    50% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n"])),(function(n){return n.theme.color.green}),(function(n){return n.theme.color.bgAccent})),hn=function(){return Object(U.jsx)(mn,{children:Object(U.jsx)(jn,{children:"Loading the page..."})})},pn={color:{bg:"#545E75",bgAccent:"#364057",hamburger:"#1b202b",text:"#fff",red:"#DA5C5C",green:"#21A179",bgBtnInternet:"#2DD4A0",textBtnInternet:"#fff",bgBtnHtml:"#F16529",textBtnHtml:"#fff",bgBtnCss:"#2965F1",textBtnCss:"#fff",bgBtnJavascript:"#F7DF1E",textBtnJavascript:"#000",bgBtnReact:"#61DAFB",textBtnReact:"#000"},screen:{med:"768px",lg:"1200px",xlg:"1800px"},isTouch:!1},gn=function(){return Object(I.useEffect)((function(){pn.isTouch=!!("ontouchstart"in window)||window.navigator.msMaxTouchPoints>0})),Object(U.jsxs)(z.a,{theme:pn,children:[Object(U.jsx)(J,{}),Object(U.jsxs)(Y,{children:[Object(U.jsxs)(D,{children:[Object(U.jsx)(N,{}),Object(U.jsx)(_,{}),Object(U.jsx)(cn,{})]}),Object(U.jsx)(dn,{FallbackComponent:bn,children:Object(U.jsx)(I.Suspense,{fallback:Object(U.jsx)(hn,{}),children:Object(U.jsx)(T.a,{})})}),Object(U.jsx)(q,{children:Object(U.jsxs)("address",{children:[Object(U.jsx)("p",{children:"Author: "}),Object(U.jsx)(V,{})]})})]})]})},xn=t(15),An=z.c.div(g||(g=Object(F.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),On=function(n){var e=n.children;return Object(U.jsx)(An,{children:e})},vn=z.c.button(x||(x=Object(F.a)(["\n  padding: 10px 30px;\n  text-align: center;\n  font-family: inherit;\n  border: 3px solid ",";\n  color: ",";\n  font-size: 1.5em;\n  background: ",";\n  box-shadow: 0 5px 0 0 rgba(0, 0, 0, 0.25);\n  cursor: pointer;\n\n  @media (hover: hover) {\n    &:hover {\n      background: ",";\n      border: 3px solid ",";\n      color: ",";\n    }\n  }\n\n  &:active {\n    transform: translateY(2px);\n    box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.25);\n  }\n"])),(function(n){return n.theme.color.text}),(function(n){return n.theme.color.text}),(function(n){return n.theme.color.bg}),(function(n){return n.theme.color.text}),(function(n){return n.theme.color.bg}),(function(n){return n.theme.color.bg})),wn=function(n){var e=n.text,t=n.onClick;return Object(U.jsx)(vn,{id:"button-start",onClick:t,children:e})},yn=t(42),Bn=t(24),En=z.c.h3(A||(A=Object(F.a)(["\n  position: absolute;\n  top: -9999px;\n  left: -9999px;\n"]))),Cn=function(n){var e=n.children;return Object(U.jsx)(En,{children:e})},In=z.c.section(O||(O=Object(F.a)(["\n  padding: 10px;\n  display: grid;\n  grid-template-columns: 98px 98px 98px;\n  grid-template-rows: 40px 40px;\n  grid-gap: 20px;\n  flex-grow: 1;\n\n  @media (min-width: ",") {\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(6, 45px);\n  }\n\n  @media (min-width: ",") {\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(6, 60px);\n  }\n\n  @media (min-width: ",") {\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(6, 60px);\n  }\n"])),(function(n){return n.theme.screen.med}),(function(n){return n.theme.screen.lg}),(function(n){return n.theme.screen.xlg})),kn=function(n){var e=n.contents,t=e.main,r=e.secondary,o=e.inactive,c=n.selectedTopics,i=n.getTopicToggler,a=n.color,s=[t].concat(Object(yn.a)(r));return Object(U.jsxs)(In,{children:[Object(U.jsxs)(Cn,{children:["Topics related to ",t]}),s.map((function(n,e){return Object(U.jsx)(Bn.b,{pressed:c.includes(n.toLowerCase()),text:n,color:(t=n,o&&o.find((function(n){return t===n}))?null:a),onClick:i(n)},e);var t}))]})},Qn=z.c.div(v||(v=Object(F.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  align-items: center;\n\n  @media (min-width: ",") {\n    flex-direction: row;\n    align-items: flex-start;\n  }\n"])),(function(n){return n.theme.screen.med})),Sn=function(n){var e=n.dbTopics,t=n.selectedTopics,r=n.getTopicToggler,o=Object(z.d)(),c=function(n){var e=n[0].toUpperCase()+n.slice(1).toLowerCase();return{bg:o.color["bgBtn".concat(e)],text:o.color["textBtn".concat(e)]}};return Object(U.jsx)(Qn,{children:e.map((function(n,e){return Object(U.jsx)(kn,{color:c(n.main),contents:n,selectedTopics:t,getTopicToggler:r},e)}))})},Mn=z.c.main(w||(w=Object(F.a)(["\n  width: 100%;\n  padding-bottom: 8em;\n  margin: 0 auto;\n\n  @media (min-width: ",") {\n    width: 725px;\n  }\n\n  @media (min-width: ",") {\n    width: 990px;\n  }\n\n  @media (min-width: ",") {\n    width: 1320px;\n  }\n"])),(function(n){return n.theme.screen.med}),(function(n){return n.theme.screen.lg}),(function(n){return n.theme.screen.xlg})),Tn=function(n){var e=n.children;return Object(U.jsx)(Mn,{children:e})},zn=t(9),Fn=z.c.output(y||(y=Object(F.a)(["\n  position: absolute;\n  bottom: -3em;\n  background-color: ",";\n  padding: 0.5em 1em;\n"])),(function(n){return n.theme.color.bgAccent})),Jn=Object(z.c)(Fn)(B||(B=Object(F.a)(["\n  color: ",";\n"])),(function(n){return n.theme.color.green})),Un=Object(z.c)(Fn)(E||(E=Object(F.a)(["\n  background-color: ",";\n  color: ",";\n"])),(function(n){return n.theme.color.bgAccent}),(function(n){return n.theme.color.red})),Ln=function(n){var e=n.status,t=n.error,r={htmlFor:"button-start"};if(0===n.selectedTopics.length)return Object(U.jsx)(Un,Object(zn.a)(Object(zn.a)({},r),{},{children:"No topics selected"}));switch(e){case"pending":return Object(U.jsx)(Jn,Object(zn.a)(Object(zn.a)({},r),{},{children:"Making the test..."}));case"rejected":return Object(U.jsx)(Un,Object(zn.a)(Object(zn.a)({},r),{},{children:(null===t||void 0===t?void 0:t.response.data.message)||t.message}));default:return null}},Yn=t(22),Pn=Object(z.c)(Yn.a)(C||(C=Object(F.a)(["\n  margin: 8em 0;\n  position: relative;\n"]))),Rn=function(n){var e=n.children;return Object(U.jsx)(Pn,{children:e})};var Dn=t(34),Hn=t(25),Xn=t(17),Nn=function(){var n=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.serialize,o=void 0===r?JSON.stringify:r,c=t.deserialize,i=void 0===c?JSON.parse:c,a=Object(I.useState)((function(){var t=window.localStorage.getItem(n);return t?i(t):"function"===typeof e?e():e})),s=Object(P.a)(a,2),l=s[0],u=s[1],d=Object(I.useRef)(n);return Object(I.useEffect)((function(){var e=d.current;e!==n&&window.localStorage.removeItem(e),d.current=n,window.localStorage.setItem(n,o(l))}),[n,l,o]),[l,u]}("testTopics",[]),e=Object(P.a)(n,2),t=e[0],r=e[1],o=Object(Dn.a)({status:"idle"}),c=o.data,i=o.status,a=o.run,s=o.error,l=o.setError,u=Object(T.g)();Object(I.useEffect)((function(){"resolved"===i&&(c.forEach((function(n){var e=function(n){if(n){for(var e=n.slice(0),t=e.length-1;t>0;t-=1){var r=Math.floor(Math.random()*(t+1)),o=[e[r],e[t]];e[t]=o[0],e[r]=o[1]}return e.slice(0)}}(n.answers);n.answers=e})),u("/test",{state:c}))}),[u,c,l,i]);return Object(U.jsx)(Tn,{children:Object(U.jsxs)(On,{children:[Object(U.jsxs)(Rn,{children:[Object(U.jsx)(xn.a,{level:1,style:{marginBottom:"50px"},children:"Welcome there fellow believer"}),Object(U.jsx)(wn,{onClick:function(){0!==t.length&&a(Hn.a.get(t,10))},text:"Start the test"}),Object(U.jsx)(Ln,{selectedTopics:t,status:i,error:s,data:c})]}),Object(U.jsx)(xn.a,{level:2,style:{marginBottom:"20px",width:"100%"},children:"Choose your topics"}),Object(U.jsx)(Sn,{dbTopics:Xn.a,selectedTopics:t,getTopicToggler:function(n){var e=Object(Xn.b)(n),o=e.main,c=e.secondary;return n===o?function(){t.includes(n)?r((function(e){return e.filter((function(e){return e!==n}))})):r((function(e){return e.filter((function(n){return!c.includes(n)})).concat(n)}))}:function(){t.includes(n)?r((function(e){return e.filter((function(e){return e!==n}))})):r((function(e){return e.filter((function(n){return n!==o})).concat(n)}))}}})]})})},Kn=function(){var n=Object(T.f)().pathname;return Object(I.useEffect)((function(){window.scrollTo(0,0)}),[n]),null},qn=Object(I.lazy)((function(){return t.e(6).then(t.bind(null,72))})),Wn=Object(I.lazy)((function(){return t.e(3).then(t.bind(null,70))})),Gn=Object(I.lazy)((function(){return t.e(4).then(t.bind(null,71))})),Vn=Object(I.lazy)((function(){return t.e(5).then(t.bind(null,69))})),Zn=Object(I.lazy)((function(){return t.e(7).then(t.bind(null,73))}));S.a.render(Object(U.jsx)(k.a.StrictMode,{children:Object(U.jsxs)(M.a,{children:[Object(U.jsx)(Kn,{}),Object(U.jsx)(T.d,{children:Object(U.jsxs)(T.b,{path:"/",element:Object(U.jsx)(gn,{}),children:[Object(U.jsx)(T.b,{index:!0,element:Object(U.jsx)(Nn,{})}),Object(U.jsx)(T.b,{path:"about",element:Object(U.jsx)(qn,{})}),Object(U.jsx)(T.b,{path:"test",element:Object(U.jsx)(Wn,{})}),Object(U.jsx)(T.b,{path:"results",element:Object(U.jsx)(Gn,{})}),Object(U.jsx)(T.b,{path:"submit",element:Object(U.jsx)(Zn,{})}),Object(U.jsx)(T.b,{path:"*",element:Object(U.jsx)(Vn,{})})]})})]})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.bfdf7bf5.chunk.js.map