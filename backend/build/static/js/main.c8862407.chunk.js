(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{15:function(n,e,t){"use strict";var r,c=t(3),o=t(2),i=t(1),a=o.c.h1(r||(r=Object(c.a)(["\n  background: ",";\n  text-align: center;\n  display: block;\n  font-size: 2em;\n  font-weight: 700;\n  padding: 20px 10px;\n"])),(function(n){return n.theme.color.bgAccent}));e.a=function(n){var e=n.level,t=n.style,r=n.children,c="h".concat(e);return Object(i.jsx)(a,{style:t,as:c,children:r})}},17:function(n,e,t){"use strict";t.d(e,"a",(function(){return r})),t.d(e,"b",(function(){return c}));var r=[{main:"internet",secondary:["websites","http","security"],inactive:["internet","websites","http","security"],colorText:"#fff",colorBg:"#2DD4A0"},{main:"html",secondary:["general","tags","attributes","forms","accessibility"],inactive:[]},{main:"css",secondary:["selectors","properties","values","layout"],inactive:[]},{main:"javascript",secondary:["internals","objects","functions","dom","web data"],inactive:["javascript","internals","objects","functions","dom","web data"]},{main:"react",secondary:["concepts","classes","hooks","cra"],inactive:["react","concepts","classes","hooks","cra"]}],c=function(n){return r.find((function(e){return e.main===n||e.secondary.includes(n)}))}},22:function(n,e,t){"use strict";t.d(e,"a",(function(){return a}));var r,c=t(3),o=t(2),i=t(1),a=o.c.header(r||(r=Object(c.a)(["\n  margin-bottom: 5em;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: ",";\n"])),(function(n){return n.theme.colorBg}));e.b=function(n){var e=n.children,t=n.style;return Object(i.jsx)(a,{style:t,children:e})}},24:function(n,e,t){"use strict";var r,c=t(3),o=t(2),i=t(1),a=o.c.div(r||(r=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"])));e.a=function(n){var e=n.children;return Object(i.jsx)(a,{children:e})}},25:function(n,e,t){"use strict";t.d(e,"a",(function(){return s}));var r,c=t(3),o=t(9),i=t(2),a=t(1),s=i.c.button(r||(r=Object(c.a)(["\n  padding: 0;\n  border: 0;\n  border-radius: 2px;\n  font-size: 1em;\n  font-family: inherit;\n  font-weight: 700;\n  text-align: center;\n  overflow: hidden;\n  cursor: pointer;\n  opacity: var(--btn-opacity, 0.5);\n  background-color: ",";\n  color: ",";\n\n  @media (min-width: ",") {\n    font-weight: 400;\n  }\n\n  // fixes sticky hover on mobile\n  @media (hover: hover) {\n    &:hover {\n      opacity: ",";\n    }\n  }\n"])),(function(n){return n.color.bg}),(function(n){return n.color.text}),(function(n){return n.theme.screen.med}),(function(n){return n.theme.isTouch?"none":"1"}));e.b=function(n){var e=n.text,t=n.color,r=n.pressed,c={pressed:r,onClick:n.onClick,style:{"--btn-opacity":r?"1":"0.5"},color:t||{bg:"#ddd",text:"#000"},type:"button"};return Object(a.jsx)(s,Object(o.a)(Object(o.a)({},c),{},{children:e}))}},26:function(n,e,t){"use strict";var r=t(19),c=t.n(r),o={get:function(){return c.a.get("".concat("")).then((function(n){return n.data}))},send:function(n){return c.a.post("",n).then((function(n){return n.data}))}};e.a=o},35:function(n,e,t){"use strict";t.d(e,"a",(function(){return a}));var r=t(9),c=t(5),o=t(0),i=function(n,e){switch(e.type){case"pending":return{status:"pending",data:null,error:null};case"resolved":return{status:"resolved",data:e.data,error:null};case"rejected":return{status:"rejected",data:null,error:e.error};default:throw new Error("Unhandled action type: ".concat(e.type))}},a=function(n){var e=Object(o.useReducer)(i,Object(r.a)({status:"idle",data:null,error:null},n)),t=Object(c.a)(e,2),a=t[0],s=function(n){var e=Object(o.useRef)(!1);return Object(o.useLayoutEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),Object(o.useCallback)((function(){return e.current?n.apply(void 0,arguments):void 0}),[n])}(t[1]),u=a.data,l=a.error,d=a.status,b=Object(o.useCallback)((function(n){s({type:"pending"}),n.then((function(n){s({type:"resolved",data:n})}),(function(n){s({type:"rejected",error:n})}))}),[s]),f=Object(o.useCallback)((function(n){return s({type:"resolved",data:n})}),[s]),j=Object(o.useCallback)((function(n){return s({type:"rejected",error:n})}),[s]);return{setData:f,setError:j,error:l,status:d,data:u,run:b}}},68:function(n,e,t){"use strict";t.r(e);var r,c,o,i,a,s,u,l,d,b,f,j,h,m,g,p,x,A,O,v,y,w,B,E=t(0),C=t.n(E),k=t(36),I=t.n(k),Q=t(8),S=t(4),T=t(2),z=t(3),F=Object(T.b)(r||(r=Object(z.a)(["\n  ","\n  ","\n"])),"\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n  }\n  ol, ul {\n    list-style: none;\n  }\n  blockquote, q {\n    quotes: none;\n  }\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n    content: '';\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n","\n\n  html {\n    box-sizing: border-box;\n  }\n\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n\n  img {\n    max-height: 100%;\n  }\n\n  button,\n  input,\n  select,\n  textarea {\n    font-family : inherit;\n    font-size : 100%;\n  }\n\n\n  body {\n    font-family: 'IBM Plex Mono', monospace;\n    color: #fff;\n    background: #545E75;\n  }\n\n  html, body, #root {\n    height: 100%;\n  }\n"),M=t(1),J=T.c.div(c||(c=Object(z.a)(["\n  min-height: 100%;\n  position: relative;\n\n  @media (min-width: ",") {\n    font-size: 20px;\n  }\n\n  @media (min-width: ",") {\n    font-size: 22px;\n  }\n\n  @media (min-width: ",") {\n    font-size: 24px;\n  }\n"])),(function(n){return n.theme.screen.med}),(function(n){return n.theme.screen.lg}),(function(n){return n.theme.screen.xlg})),U=function(n){var e=n.children;return Object(M.jsx)(J,{children:e})},L=t(5),Y=T.c.nav(o||(o=Object(z.a)(["\n  position: fixed;\n  z-index: 100;\n  padding: 16px 6%;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: ",";\n  opacity: var(--nav-opacity);\n  pointer-events: var(--nav-pointer-events);\n  transition: opacity 100ms ease-in-out;\n"])),(function(n){return n.theme.color.bg})),D=function(n){var e=n.children,t=function(n){var e=Object(E.useRef)(0),t=Object(E.useState)(n),r=Object(L.a)(t,2),c=r[0],o=r[1];return Object(E.useEffect)((function(){var n=function(){var n=window.pageYOffset||document.documentElement.scrollTop;n>e.current?(e.current=n<=0?0:n,o("down")):(e.current=n<=0?0:n,o("up"))};return window.addEventListener("scroll",n),function(){window.removeEventListener("scroll",n)}}),[]),c}("up");return Object(M.jsx)(Y,{style:{"--nav-opacity":"down"===t?"0":"1","--nav-pointer-events":"down"===t?"none":"auto"},children:e})},R=T.c.img(i||(i=Object(z.a)(["\n  cursor: pointer;\n\n  @media (min-width: ",") {\n    width: 60px;\n    height: 60px;\n  }\n"])),(function(n){return n.theme.screen.xlg})),H=function(){return Object(M.jsx)(Q.b,{to:"/",children:Object(M.jsx)(R,{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},width:"50px",height:"50px",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOTSURBVHgB7d3BbRtXFEDRP3TaCLxLkCrEDgLv1YvpXrgX3IFchrMTXIfJiEGWyU2+YBIjzTnrISBRczV/8fBmWT5/Ow/gH+0G8K8EAkEgEAQCQSAQBAJBIBAEAkEgEAQCQSAQfhprtIzH8/fTl8FmLO92d+M89mNlVhnIX3F8eH8YbMb54emw7Hb7sTKOWBAEAkEgEAQCQSAQBAJBIBAEAkEgEAQCQSAQllssjjv//vMyVubr/f3h+Yf6OPhPzzfIp1+Px8NYmVvcu54gEAQCQSAQBAJBIBAEAkEgEAQCQSAQBAJBIBDm92JZ6rY5yxh3l9m1mc/cYnbrfDp9mrn+JcvppgOx1G2T9s+R7Mecw7i2yfvwJcvpHLEgCASCQCAIBIJAIAgEgkAgCASCQCAIBIJAIKzzLbcv8Mf9/dWXiM1a68K1NX5Xa+UJAkEgEAQCQSAQBAJBIBAEAkEgEAQCQSAQBALhzcxi3cJltmrm+tMYj4NXTSAT1jh4yHU5YkEQCASBQBAIBIFAEAgEgUAQCASBQBAIBIFAEAgEgUAQCASBQBAIBIFAEAgEgUAQCASBQBAIBIFAEAgEgUAQCASBQBAIBIFAEAgEgUAQCASBQBAIBIFAEAiEN/MSz1+Ox2Xm+q/394fnD3wcr9wtfo/L2323+gJTTxAIAoEgEAgCgSAQCAKBIBAIAoEgEAgCgSAQCG9mFmvWaYzHNf53uMxWzVy/jHE3Jl1mq2auv3xXY6M2G8hvx+PjWOEf/hYDlFsdPHwJRywIAoEgEAgCgSAQCAKBIBAIAoEgEAgCgSAQCJudxboFS91eP08QCAKBIBAIAoEgEAgCgSAQCAKBIBAIAoEgEAhmsa7oFsvptrzU7RYEckVrXU7H/+eIBUEgEAQCQSAQBAJBIBAEAkEgEAQCQSAQBALBLNYVWRz3+nmCQBAIBIFAEAgEgUAQCASBQBAIBIFAEAgEgUCYnsVa3u3uzg9Ph5nPjA/vDwN+tMn78HLvXobXZswPK57Hftnt9nMfGYcBP9jzfTg3CDoZx4UjFgSBQBAIBIFAEAgEgUAQCASBQBAIBIFAEAiEZfn87QUTKtd1Pp0+GXDcmIenw/Rs1Q14gkAQCASBQBAIBIFAEAgEgUAQCASBQBAIBIFAWOUs1ljG4/n76ctgM/5e6rYfK7POQGAlHLEgCASCQCAIBIJAIAgEgkAgCASCQCAIBIJAIPwJ+nCONSj/SXkAAAAASUVORK5CYII=",alt:"logo"})})},X=T.c.footer(a||(a=Object(z.a)(["\n  background: ",";\n  padding: 1em;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n\n  address {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n"])),(function(n){return n.theme.color.bgAccent})),P=function(n){var e=n.children;return Object(M.jsx)(X,{children:e})},K=t(20),N=T.c.ul(s||(s=Object(z.a)(["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n\n  li {\n    margin-left: 20px;\n  }\n\n  a:link,\n  a:visited,\n  a:active {\n    color: white;\n  }\n\n  a:hover {\n    opacity: 0.5;\n  }\n"]))),q=function(){return Object(M.jsxs)(N,{children:[Object(M.jsx)("li",{children:Object(M.jsx)("a",{href:"https://github.com/Dan-Lucian",children:Object(M.jsx)(K.a,{size:30})})}),Object(M.jsx)("li",{children:Object(M.jsx)("a",{href:"https://www.linkedin.com/in/dan-lucian-gaina-74789b226/",children:Object(M.jsx)(K.b,{size:30})})})]})},W=T.c.ul(u||(u=Object(z.a)(["\n  justify-content: flex-end;\n  display: none;\n\n  @media (min-width: ",") {\n    display: flex;\n  }\n\n  a {\n    margin-left: 60px;\n    padding: 2px;\n  }\n\n  a:link,\n  a:visited {\n    color: ",";\n    text-decoration: none;\n  }\n\n  a:hover {\n    color: ",";\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.screen.med}),(function(n){return n.theme.color.text}),(function(n){return n.theme.color.bgAccent}),(function(n){return n.theme.color.text})),G=function(){return Object(M.jsxs)(W,{children:[Object(M.jsx)("li",{children:Object(M.jsx)(Q.b,{to:"/",children:"_Home"})}),Object(M.jsx)("li",{children:Object(M.jsx)(Q.b,{to:"/about",children:"_About"})})]})},V=T.c.div(l||(l=Object(z.a)(["\n  width: 36px;\n  height: 3px;\n  background-color: ",";\n  position: relative;\n  transition: transform 0.075s ease;\n\n  &::before,\n  &::after {\n    content: '';\n    display: block;\n    width: 36px;\n    height: 3px;\n    background-color: ",";\n    position: absolute;\n  }\n\n  &::before {\n    bottom: 10px;\n    transition: bottom 0.075s 0.12s ease;\n  }\n\n  &::after {\n    bottom: -10px;\n    transition: bottom 0.075s 0.12s ease, transform 0.075s ease;\n  }\n\n  ","\n"])),(function(n){return n.theme.color.hamburger}),(function(n){return n.theme.color.hamburger}),(function(n){return n.isMenuOpen&&"\n    transform: rotate(45deg);\n    transition-delay: 0.12s;\n\n    &::before {\n      bottom: 0;\n      transition: bottom 0.075s ease;\n    }\n\n    &::after {\n      bottom: 0;\n      transform: rotate(-90deg);\n      transition: bottom 0.075s ease, transform 0.075s 0.12s ease;\n    }\n  "})),Z=T.c.button(d||(d=Object(z.a)(["\n  height: 40px;\n  width: 50px;\n  background: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  cursor: pointer;\n"]))),_=function(n){var e=n.isMenuOpen,t=n.onClick;return Object(M.jsx)(Z,{onClick:t,children:Object(M.jsx)(V,{isMenuOpen:e})})},$=T.c.div(b||(b=Object(z.a)(["\n  background-color: ",";\n  color: ",";\n  position: absolute;\n  right: 0.5em;\n  top: 80%;\n  display: var(--display-menu, none);\n  flex-direction: column;\n  padding: 1.5em;\n  font-size: 1.3em;\n\n  a {\n    padding: 5px 2px;\n  }\n\n  a:first-child {\n    margin-bottom: 0.8em;\n  }\n\n  a:link,\n  a:visited {\n    color: ",";\n    text-decoration: none;\n  }\n\n  a:hover {\n    color: ",";\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.color.text}),(function(n){return n.theme.color.bgAccent}),(function(n){return n.theme.color.bgAccent}),(function(n){return n.theme.color.text}),(function(n){return n.theme.color.bgAccent})),nn=function(n){var e=n.children,t=n.isMenuOpen;return Object(M.jsx)($,{style:{"--display-menu":t?"flex":"none"},children:e})},en=T.c.div(f||(f=Object(z.a)(["\n  @media (min-width: ",") {\n    display: none;\n  }\n"])),(function(n){return n.theme.screen.med})),tn=function(){var n=function(n){var e=Object(E.useState)(n),t=Object(L.a)(e,2),r=t[0],c=t[1];return[r,function(n){c((function(e){return"boolean"===typeof n?n:!e}))}]}(!1),e=Object(L.a)(n,2),t=e[0],r=e[1],c=function(){var n=Object(E.useState)(!1),e=Object(L.a)(n,2),t=e[0],r=e[1],c=Object(E.useRef)(null);return Object(E.useEffect)((function(){if(c.current){var n=function(n){c.current&&!c.current.contains(n.target)?r(!0):r(!1)};return document.addEventListener("pointerdown",n),function(){document.removeEventListener("pointerdown",n)}}}),[c.current]),[c,t]}(),o=Object(L.a)(c,2),i=o[0],a=o[1];return Object(E.useEffect)((function(){a&&r(!1)}),[a,r]),Object(M.jsxs)(en,{ref:i,children:[Object(M.jsx)(_,{isMenuOpen:t,onClick:r}),Object(M.jsxs)(nn,{isMenuOpen:t,toggleMenuOpen:r,children:[Object(M.jsx)(Q.b,{onClick:r,to:"/",children:"Home"}),Object(M.jsx)(Q.b,{onClick:r,to:"/about",children:"About"})]})]})},rn=t(40),cn=t(41),on=t(44),an=t(42),sn=function(n){Object(on.a)(t,n);var e=Object(an.a)(t);function t(n){var r;return Object(rn.a)(this,t),(r=e.call(this,n)).state={error:null},r}return Object(cn.a)(t,[{key:"componentDidCatch",value:function(n){this.setState({error:n})}},{key:"render",value:function(){var n=this.state.error,e=this.props,t=e.children,r=e.FallbackComponent;if(null!==n){if(r)return Object(M.jsx)(r,{error:n});throw new Error("The Error boundary requires a FallbackComponent prop")}return t}}]),t}(C.a.Component),un=T.c.div(j||(j=Object(z.a)(["\n  line-height: 1.5;\n  color: ",";\n"])),(function(n){return n.theme.color.red})),ln=function(n){var e=n.error;return Object(M.jsxs)(un,{role:"alert",children:[Object(M.jsx)("p",{children:"Something went wrong:"}),Object(M.jsx)("pre",{children:e.message})]})},dn=T.c.div(h||(h=Object(z.a)(["\n  padding-top: 8em;\n  display: flex;\n  justify-content: center;\n"]))),bn=T.c.main(m||(m=Object(z.a)(["\n  color: ",";\n  background-color: ",";\n  font-size: 1.3em;\n  padding: 0.5em 1em;\n  animation-name: blink;\n  animation-duration: 2s;\n  animation-iteration-count: infinite;\n\n  @keyframes blink {\n    0% {\n      opacity: 1;\n    }\n    50% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n"])),(function(n){return n.theme.color.green}),(function(n){return n.theme.color.bgAccent})),fn=function(){return Object(M.jsx)(dn,{children:Object(M.jsx)(bn,{children:"Loading the page..."})})},jn={color:{bg:"#545E75",bgAccent:"#364057",hamburger:"#1b202b",text:"#fff",red:"#DA5C5C",green:"#21A179",bgBtnInternet:"#2DD4A0",textBtnInternet:"#fff",bgBtnHtml:"#F16529",textBtnHtml:"#fff",bgBtnCss:"#2965F1",textBtnCss:"#fff",bgBtnJavascript:"#F7DF1E",textBtnJavascript:"#000",bgBtnReact:"#61DAFB",textBtnReact:"#000"},screen:{med:"768px",lg:"1200px",xlg:"1800px"},isTouch:!1},hn=function(){return Object(E.useEffect)((function(){jn.isTouch=!!("ontouchstart"in window)||window.navigator.msMaxTouchPoints>0})),Object(M.jsxs)(T.a,{theme:jn,children:[Object(M.jsx)(F,{}),Object(M.jsxs)(U,{children:[Object(M.jsxs)(D,{children:[Object(M.jsx)(H,{}),Object(M.jsx)(G,{}),Object(M.jsx)(tn,{})]}),Object(M.jsx)(sn,{FallbackComponent:ln,children:Object(M.jsx)(E.Suspense,{fallback:Object(M.jsx)(fn,{}),children:Object(M.jsx)(S.a,{})})}),Object(M.jsx)(P,{children:Object(M.jsxs)("address",{children:[Object(M.jsx)("p",{children:"Author: "}),Object(M.jsx)(q,{})]})})]})]})},mn=t(15),gn=t(24),pn=T.c.button(g||(g=Object(z.a)(["\n  padding: 10px 30px;\n  text-align: center;\n  font-family: inherit;\n  border: 3px solid ",";\n  color: ",";\n  font-size: 1.5em;\n  background: ",";\n  box-shadow: 0 5px 0 0 rgba(0, 0, 0, 0.25);\n  cursor: pointer;\n\n  @media (hover: hover) {\n    &:hover {\n      background: ",";\n      border: 3px solid ",";\n      color: ",";\n    }\n  }\n\n  &:active {\n    transform: translateY(2px);\n    box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.25);\n  }\n"])),(function(n){return n.theme.color.text}),(function(n){return n.theme.color.text}),(function(n){return n.theme.color.bg}),(function(n){return n.theme.color.text}),(function(n){return n.theme.color.bg}),(function(n){return n.theme.color.bg})),xn=function(n){var e=n.text,t=n.onClick;return Object(M.jsx)(pn,{id:"button-start",onClick:t,children:e})},An=t(43),On=t(25),vn=T.c.h3(p||(p=Object(z.a)(["\n  position: absolute;\n  top: -9999px;\n  left: -9999px;\n"]))),yn=function(n){var e=n.children;return Object(M.jsx)(vn,{children:e})},wn=T.c.section(x||(x=Object(z.a)(["\n  padding: 10px;\n  display: grid;\n  grid-template-columns: 98px 98px 98px;\n  grid-template-rows: 40px 40px;\n  grid-gap: 20px;\n  flex-grow: 1;\n\n  @media (min-width: ",") {\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(6, 45px);\n  }\n\n  @media (min-width: ",") {\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(6, 60px);\n  }\n\n  @media (min-width: ",") {\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(6, 60px);\n  }\n"])),(function(n){return n.theme.screen.med}),(function(n){return n.theme.screen.lg}),(function(n){return n.theme.screen.xlg})),Bn=function(n){var e=n.contents,t=e.main,r=e.secondary,c=e.inactive,o=n.selectedTopics,i=n.getTopicToggler,a=n.color,s=[t].concat(Object(An.a)(r));return Object(M.jsxs)(wn,{children:[Object(M.jsxs)(yn,{children:["Topics related to ",t]}),s.map((function(n,e){return Object(M.jsx)(On.b,{pressed:o.includes(n.toLowerCase()),text:n,color:(t=n,c&&c.find((function(n){return t===n}))?null:a),onClick:i(n)},e);var t}))]})},En=T.c.div(A||(A=Object(z.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  align-items: center;\n\n  @media (min-width: ",") {\n    flex-direction: row;\n    align-items: flex-start;\n  }\n"])),(function(n){return n.theme.screen.med})),Cn=function(n){var e=n.dbTopics,t=n.selectedTopics,r=n.getTopicToggler,c=Object(T.d)(),o=function(n){var e=n[0].toUpperCase()+n.slice(1).toLowerCase();return{bg:c.color["bgBtn".concat(e)],text:c.color["textBtn".concat(e)]}};return Object(M.jsx)(En,{children:e.map((function(n,e){return Object(M.jsx)(Bn,{color:o(n.main),contents:n,selectedTopics:t,getTopicToggler:r},e)}))})},kn=T.c.main(O||(O=Object(z.a)(["\n  width: 100%;\n  padding-bottom: 8em;\n  margin: 0 auto;\n\n  @media (min-width: ",") {\n    width: 725px;\n  }\n\n  @media (min-width: ",") {\n    width: 990px;\n  }\n\n  @media (min-width: ",") {\n    width: 1320px;\n  }\n"])),(function(n){return n.theme.screen.med}),(function(n){return n.theme.screen.lg}),(function(n){return n.theme.screen.xlg})),In=function(n){var e=n.children;return Object(M.jsx)(kn,{children:e})},Qn=t(9),Sn=T.c.output(v||(v=Object(z.a)(["\n  position: absolute;\n  bottom: -3em;\n  background-color: ",";\n  padding: 0.5em 1em;\n"])),(function(n){return n.theme.color.bgAccent})),Tn=Object(T.c)(Sn)(y||(y=Object(z.a)(["\n  color: ",";\n"])),(function(n){return n.theme.color.green})),zn=Object(T.c)(Sn)(w||(w=Object(z.a)(["\n  background-color: ",";\n  color: ",";\n"])),(function(n){return n.theme.color.bgAccent}),(function(n){return n.theme.color.red})),Fn=function(n){var e=n.status,t=n.error,r={htmlFor:"button-start"};if(0===n.selectedTopics.length)return Object(M.jsx)(zn,Object(Qn.a)(Object(Qn.a)({},r),{},{children:"No topics selected"}));switch(e){case"pending":return Object(M.jsx)(Tn,Object(Qn.a)(Object(Qn.a)({},r),{},{children:"Making the test..."}));case"rejected":return Object(M.jsx)(zn,Object(Qn.a)(Object(Qn.a)({},r),{},{children:(null===t||void 0===t?void 0:t.response.data)||t.message}));default:return null}},Mn=t(22),Jn=Object(T.c)(Mn.a)(B||(B=Object(z.a)(["\n  margin: 8em 0;\n  position: relative;\n"]))),Un=function(n){var e=n.children;return Object(M.jsx)(Jn,{children:e})};var Ln=t(35),Yn=t(26),Dn=t(17),Rn=function(){var n=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.serialize,c=void 0===r?JSON.stringify:r,o=t.deserialize,i=void 0===o?JSON.parse:o,a=Object(E.useState)((function(){var t=window.localStorage.getItem(n);return t?i(t):"function"===typeof e?e():e})),s=Object(L.a)(a,2),u=s[0],l=s[1],d=Object(E.useRef)(n);return Object(E.useEffect)((function(){var e=d.current;e!==n&&window.localStorage.removeItem(e),d.current=n,window.localStorage.setItem(n,c(u))}),[n,u,c]),[u,l]}("testTopics",[]),e=Object(L.a)(n,2),t=e[0],r=e[1],c=Object(Ln.a)({status:"idle"}),o=c.data,i=c.status,a=c.run,s=c.error,u=c.setError,l=Object(S.g)();Object(E.useEffect)((function(){"resolved"===i&&(o.forEach((function(n){var e=function(n){if(n){for(var e=n.slice(0),t=e.length-1;t>0;t-=1){var r=Math.floor(Math.random()*(t+1)),c=[e[r],e[t]];e[t]=c[0],e[r]=c[1]}return e.slice(0)}}(n.answers);n.answers=e})),l("/test",{state:o}))}),[l,o,u,i]);return Object(M.jsx)(In,{children:Object(M.jsxs)(gn.a,{children:[Object(M.jsxs)(Un,{children:[Object(M.jsx)(mn.a,{level:1,style:{marginBottom:"50px"},children:"Welcome there fellow believer"}),Object(M.jsx)(xn,{onClick:function(){0!==t.length&&a(Yn.a.send(t))},text:"Start the test"}),Object(M.jsx)(Fn,{selectedTopics:t,status:i,error:s,data:o})]}),Object(M.jsx)(mn.a,{level:2,style:{marginBottom:"20px",width:"100%"},children:"Choose your topics"}),Object(M.jsx)(Cn,{dbTopics:Dn.a,selectedTopics:t,getTopicToggler:function(n){var e=Object(Dn.b)(n),c=e.main,o=e.secondary;return n===c?function(){t.includes(n)?r((function(e){return e.filter((function(e){return e!==n}))})):r((function(e){return e.filter((function(n){return!o.includes(n)})).concat(n)}))}:function(){t.includes(n)?r((function(e){return e.filter((function(e){return e!==n}))})):r((function(e){return e.filter((function(n){return n!==c})).concat(n)}))}}})]})})},Hn=function(){var n=Object(S.f)().pathname;return Object(E.useEffect)((function(){window.scrollTo(0,0)}),[n]),null},Xn=Object(E.lazy)((function(){return t.e(6).then(t.bind(null,73))})),Pn=Object(E.lazy)((function(){return t.e(3).then(t.bind(null,71))})),Kn=Object(E.lazy)((function(){return t.e(4).then(t.bind(null,72))})),Nn=Object(E.lazy)((function(){return t.e(5).then(t.bind(null,70))})),qn=Object(E.lazy)((function(){return t.e(7).then(t.bind(null,74))}));I.a.render(Object(M.jsxs)(Q.a,{children:[Object(M.jsx)(Hn,{}),Object(M.jsx)(S.d,{children:Object(M.jsxs)(S.b,{path:"/",element:Object(M.jsx)(hn,{}),children:[Object(M.jsx)(S.b,{index:!0,element:Object(M.jsx)(Rn,{})}),Object(M.jsx)(S.b,{path:"about",element:Object(M.jsx)(Xn,{})}),Object(M.jsx)(S.b,{path:"test",element:Object(M.jsx)(Pn,{})}),Object(M.jsx)(S.b,{path:"results",element:Object(M.jsx)(Kn,{})}),Object(M.jsx)(S.b,{path:"submit",element:Object(M.jsx)(qn,{})}),Object(M.jsx)(S.b,{path:"*",element:Object(M.jsx)(Nn,{})})]})})]}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.c8862407.chunk.js.map