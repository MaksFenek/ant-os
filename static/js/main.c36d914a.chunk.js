(this["webpackJsonpant-os"]=this["webpackJsonpant-os"]||[]).push([[0],{210:function(e,n,t){},212:function(e,n,t){},213:function(e,n,t){},283:function(e,n,t){},369:function(e,n,t){},370:function(e,n,t){},371:function(e,n,t){},372:function(e,n,t){},378:function(e,n,t){},379:function(e,n,t){},380:function(e,n,t){},381:function(e,n,t){"use strict";t.r(n);var c=t(23),i=t.n(c),a=t(104),o=t(89),s=t(195),r=Object(o.b)({name:"common",initialState:{value:0},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,n){e.value+=n.payload}}}),l=r.actions,d=(l.increment,l.decrement,l.incrementByAmount,r.reducer),j=Object(o.b)({name:"apps",initialState:{allApps:{}},reducers:{addApp:function(e,n){var t=n.payload;e.allApps[t.name]=t},openApp:function(e,n){var t,c=null===(t=e.allApps)||void 0===t?void 0:t[n.payload];c&&(c.hidden=!1,c.isOpen=!0)},closeApp:function(e,n){var t,c=null===(t=e.allApps)||void 0===t?void 0:t[n.payload];c&&(c.isOpen=!1)},toggleApp:function(e,n){var t,c=null===(t=e.allApps)||void 0===t?void 0:t[n.payload];c&&(c.hidden=!c.hidden)}}}),u=j.actions,b=u.addApp,O=u.openApp,p=u.closeApp,f=u.toggleApp,m=j.reducer,h=t(51),x=t.n(h),v=t(197),g=x.a.mark(y);function y(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.a)([]);case 2:case"end":return e.stop()}}),g)}var w=Object(s.a)(),k=Object(o.a)({reducer:{common:d,apps:m},devTools:!0,middleware:[w]});w.run(y);var S=t(0),C=t.n(S),N=t(383),_=t(60),z=t(90),A=t(388),P=t(194),E=t(198),H=t(117),F=t.n(H),I=t(106),T=t(389),W=t(59),B=t(43),D=(t(210),t(7)),M=["children","isOpen","hidden","onClose","onHide","className"],R=N.a.Header,G=N.a.Content,J=Object(S.memo)((function(e){var n=e.children,t=e.isOpen,c=void 0!==t&&t,i=e.hidden,a=void 0!==i&&i,o=e.onClose,s=e.onHide,r=e.className,l=Object(z.a)(e,M),d=Object(W.useSpring)({from:{transform:"scale(0)",opacity:0},to:{transform:"scale(1)",opacity:1},config:B.config.gentle,reverse:!c}),j=Object(W.useSpring)({from:{transform:"translateY(100vh) scale(1.5)",opacity:.5},to:{transform:"translateY(0vh) scale(1)",opacity:1},reverse:a});return Object(D.jsx)("div",{className:"",style:{position:"relative",zIndex:3},children:Object(D.jsx)(B.animated.div,{style:j,children:Object(D.jsx)(B.animated.div,{style:d,children:Object(D.jsx)(F.a,{handle:".handle",cancel:".non-draggable",bounds:".desktop",defaultClassName:"app-window",defaultPosition:{x:window.innerWidth/2-300,y:window.innerHeight/2-200},children:Object(D.jsx)(E.a,{minWidth:"300",minHeight:"300",defaultSize:{height:400,width:500},children:Object(D.jsxs)(N.a,Object(_.a)(Object(_.a)({className:"app-window__layout ".concat(r)},l),{},{children:[Object(D.jsx)(R,{className:"handle app-window__header",children:Object(D.jsxs)(A.b,{align:"center",children:[Object(D.jsx)(P.a,{className:"non-draggable",onClick:o,size:"small",type:"primary",icon:Object(D.jsx)(I.a,{})}),Object(D.jsx)(P.a,{className:"non-draggable",onClick:s,size:"small",type:"primary",icon:Object(D.jsx)(T.a,{})})]})}),Object(D.jsx)(G,{className:"app-window__content",children:n})]}))})})})})})})),L=(t(212),["children","defaultPosition","bounds","name"]),Y=Object(S.memo)((function(e){var n=e.children,t=e.defaultPosition,c=e.bounds,i=void 0===c?".desktop-content":c,a=e.name,o=Object(z.a)(e,L);return Object(D.jsx)(F.a,{defaultPosition:t,handle:".app-icon__handle",bounds:i,children:Object(D.jsxs)("div",{className:"app-icon__handle",children:[Object(D.jsx)("div",Object(_.a)(Object(_.a)({className:"app-icon"},o),{},{children:n})),Object(D.jsx)("span",{className:"app-icon__name",children:a})]})})})),K=t(27),q=t(36),Q=t(37),U=t(39),V=t(387),X=(t(213),V.a.Title),Z=function(e){Object(Q.a)(t,e);var n=Object(U.a)(t);function t(e){var c;return Object(K.a)(this,t),(c=n.call(this,e)).state=void 0,c.state={hasError:!1},c}return Object(q.a)(t,[{key:"render",value:function(){return this.state.hasError?Object(D.jsx)("div",{className:"fallback",children:Object(D.jsxs)(X,{level:2,children:["\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. ",Object(D.jsx)("br",{})," \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443."]})}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}]),t}(C.a.Component),$=t(385),ee=function(){return Object(a.b)()},ne=a.c,te=Object(S.memo)((function(){var e=ee(),n=ne((function(e){return e.apps.allApps})),t=Object(S.useMemo)((function(){var e=[];for(var t in n){var c=n[t];c&&e.push(c)}return e}),[n]),c=Object(S.useCallback)((function(n){e(f(n))}),[e]);return Object(D.jsx)(Ce,{apps:t,onClick:c})})),ce=t(31),ie=t(384),ae=t(151),oe=t(52),se=t.n(oe),re=function(){var e=Object(S.useState)(),n=Object(ce.a)(e,2),t=n[0],c=n[1],i=Object(S.useState)(),a=Object(ce.a)(i,2),o=a[0],s=a[1];Object(S.useEffect)((function(){c(se()()),s(se()());var e=setInterval((function(){c(se()())}),1e3);return function(){clearInterval(e)}}),[]);var r=Object(S.useCallback)((function(e){s(e)}),[]);return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(ie.a,{bordered:!1,allowClear:!1,value:t}),Object(D.jsx)(ae.a,{onChange:r,bordered:!1,allowClear:!1,value:o})]})},le=(t(283),N.a.Footer),de=function(){return Object(D.jsxs)(le,{className:"desktop-footer",children:[Object(D.jsx)(we,{}),Object(D.jsx)($.a,{type:"vertical",style:{height:"auto"}}),Object(D.jsxs)(A.b,{align:"start",className:"desktop-footer__bar",children:[Object(D.jsx)(A.b,{children:Object(D.jsx)(te,{})}),Object(D.jsx)(A.b,{children:Object(D.jsx)(re,{})})]})]})},je=t(392),ue=t(129),be=t.n(ue),Oe=t(390),pe=t(391),fe=t.p+"static/media/tg.28141391.svg",me=t.p+"static/media/gmail.9aa7d0bb.svg",he=be.a.SubMenu,xe=be.a.Item,ve=function(){return Object(D.jsx)(be.a,{defaultOpenKeys:["contacts"],mode:"inline",children:Object(D.jsxs)(he,{title:"Contacts",children:[Object(D.jsx)(xe,{icon:Object(D.jsx)(Oe.a,{style:{fontSize:"30px"}}),children:Object(D.jsx)("a",{target:"_blank",rel:"nofollow noopener",href:"https://github.com/MaksFenek",children:"GitHub"})},"github"),Object(D.jsx)(xe,{icon:Object(D.jsx)("img",{src:fe,style:{height:30}}),children:Object(D.jsx)("a",{target:"_blank",href:"https://t.me/m_fenek",rel:"nofollow noopener",children:"Telegram"})},"tg"),Object(D.jsx)(xe,{icon:Object(D.jsx)(pe.a,{style:{fontSize:"30px"}}),children:Object(D.jsx)("a",{target:"_blank",href:"https://hh.ru/resume/1bb48cb7ff08c91eb20039ed1f3356576a3478",rel:"nofollow noopener",children:"Resume"})},"resume"),Object(D.jsx)(xe,{icon:Object(D.jsx)("img",{src:me,style:{height:30}}),children:Object(D.jsx)("a",{target:"_blank",href:"mailto:maksteonin@gmail.com",rel:"nofollow noopener",children:"Gmail"})},"mail")]},"contacts")})},ge=t(114),ye=(t(369),function(e){var n=e.closing,t=void 0===n||n,c=Object(ge.useSpring)({from:{height:"0vh",borderWidth:0,opacity:0},to:{height:"60vh",borderWidth:1,opacity:1},config:ge.config.gentle,reverse:t});return Object(D.jsx)(ge.animated.div,{style:c,className:"menu-window",children:Object(D.jsx)(ve,{})})}),we=(t(370),function(){var e=Object(S.useState)(!1),n=Object(ce.a)(e,2),t=n[0],c=n[1],i=Object(S.useState)(!0),a=Object(ce.a)(i,2),o=a[0],s=a[1],r=function(e){var n=Object(S.useRef)(null);return Object(S.useEffect)((function(){var t=function(t){n.current&&!n.current.contains(t.target)&&e()};return document.addEventListener("mousedown",t),function(){document.removeEventListener("mousedown",t)}}),[e]),function(e){var t=e.children;return Object(D.jsx)("div",{className:"outside-click-wrapper",style:{display:"inline-flex",flexDirection:"column"},ref:n,children:t})}}((function(){o||s(!0)}));return Object(D.jsxs)(r,{children:[Object(D.jsx)(P.a,{onClick:function(){t||c(!0),s((function(e){return!e}))},className:"menu-button",size:"middle",type:"text",children:Object(D.jsx)(je.a,{style:{fontSize:"30px"}})}),t&&Object(D.jsx)(ye,{closing:o})]})}),ke=(t(371),["children","isOpen"]),Se=Object(S.memo)((function(e){var n=e.children,t=e.isOpen,c=Object(z.a)(e,ke),i=Object(W.useSpring)({from:{transform:"scale(0)",padding:"0px",width:"0px"},to:{transform:"scale(1)",padding:"4px",width:"38px"},reverse:!t,config:B.config.gentle});return Object(D.jsx)(B.animated.div,{style:i,children:Object(D.jsx)(P.a,Object(_.a)(Object(_.a)({className:"app-bar-icon",size:"middle",type:"text"},c),{},{children:n}))})})),Ce=Object(S.memo)((function(e){var n=e.apps,t=e.onClick;return Object(D.jsx)("div",{style:{display:"flex"},children:n.map((function(e){return Object(D.jsx)(Se,{isOpen:e.isOpen,onClick:function(){return t(e.name)},children:e.icon},e.name)}))})})),Ne=t(386),_e=(t(372),function(e){var n=e.children,t=Object(B.useSpring)({from:{transform:"scale(0)",opacity:.5},to:{transform:"scale(1)",opacity:1},config:B.config.gentle,delay:450});return Object(D.jsx)(S.Suspense,{fallback:Object(D.jsx)(B.animated.div,{className:"loader",style:t,children:Object(D.jsx)(Ne.a,{size:"large"})}),children:n})}),ze=(t(378),N.a.Content),Ae=function(e){var n=e.children;return Object(D.jsxs)(N.a,{className:"desktop",children:[Object(D.jsx)(ze,{className:"desktop-content",children:n}),Object(D.jsx)(de,{})]})},Pe=(t(379),Object(S.memo)((function(e){var n=e.name,t=e.icon,c=e.window,i=e.defaultPosition,a=ne((function(e){var t;return null===(t=e.apps.allApps)||void 0===t?void 0:t[n]})),o=ee(),s=Object(S.useState)(!1),r=Object(ce.a)(s,2),l=r[0],d=r[1];Object(S.useEffect)((function(){o(b({name:n,icon:t,defaultPosition:i,position:i,isOpen:!1,hidden:!1}))}),[]);var j=function(){d(!1)},u=Object(S.useCallback)((function(){d(!0),o(O(n))}),[o,n]),m=Object(S.useCallback)((function(){o(f(n))}),[o,n]),h=Object(S.useCallback)((function(){o(p(n)),function(e,n){var t=setTimeout((function(){n(),clearTimeout(t)}),e)}(500,j)}),[o,n]);return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(Y,{name:null===a||void 0===a?void 0:a.name,defaultPosition:i,onDoubleClick:u,children:t}),l&&Object(D.jsx)(J,{isOpen:null===a||void 0===a?void 0:a.isOpen,hidden:null===a||void 0===a?void 0:a.hidden,onClose:h,onHide:m,children:Object(D.jsx)(Z,{children:Object(D.jsx)(_e,{children:c})})})]})}))),Ee=t(393),He=C.a.lazy((function(){return Promise.all([t.e(7),t.e(9)]).then(t.bind(null,405))})),Fe=function(){return Object(D.jsx)(Pe,{name:"Resume",icon:Object(D.jsx)(Ee.a,{style:{fontSize:"30px"}}),window:Object(D.jsx)(He,{}),defaultPosition:{x:10,y:80}})},Ie=t(394),Te=C.a.lazy((function(){return Promise.all([t.e(3),t.e(10)]).then(t.bind(null,412))})),We=function(){return Object(D.jsx)(Pe,{name:"Skills",icon:Object(D.jsx)(Ie.a,{style:{fontSize:"30px"}}),window:Object(D.jsx)(Te,{}),defaultPosition:{x:10,y:160}})},Be=t(395),De=C.a.lazy((function(){return Promise.all([t.e(5),t.e(6)]).then(t.bind(null,408))})),Me=function(){return Object(D.jsx)(Pe,{name:"Portfolio",icon:Object(D.jsx)(Be.a,{style:{fontSize:"30px"}}),window:Object(D.jsx)(De,{}),defaultPosition:{x:10,y:0}})},Re=t(396),Ge=C.a.lazy((function(){return Promise.all([t.e(4),t.e(8)]).then(t.bind(null,411))})),Je=function(){return Object(D.jsx)(Pe,{name:"Help",icon:Object(D.jsx)(Re.a,{style:{fontSize:"30px"}}),window:Object(D.jsx)(Ge,{}),defaultPosition:{x:10,y:300}})},Le=function(){return Object(D.jsx)("section",{children:Object(D.jsxs)(Ae,{children:[Object(D.jsx)(Je,{}),Object(D.jsx)(Me,{}),Object(D.jsx)(Fe,{}),Object(D.jsx)(We,{})]})})};t(380);i.a.render(Object(D.jsx)(a.a,{store:k,children:Object(D.jsx)(Le,{})}),document.getElementById("root"))}},[[381,1,2]]]);
//# sourceMappingURL=main.c36d914a.chunk.js.map