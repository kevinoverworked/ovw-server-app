(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{20:function(e,t,n){e.exports={header:"header_header__1k4Oa",logoWrapper:"header_logoWrapper__1Nwbv",brand:"header_brand__WT4d7"}},38:function(e,t,n){e.exports={navigation:"navigation_navigation__3t7N6"}},4:function(e,t,n){e.exports={container:"dashboard_container__dJcQQ","col-4":"dashboard_col-4__9iNxo",card:"dashboard_card__OTU04",content:"dashboard_content__3Vtbx",title:"dashboard_title__33ZQY",copy:"dashboard_copy__2gVmB",footer:"dashboard_footer__3HAgj"}},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){e.exports={bar:"login_bar__3v8vS",highlight:"login_highlight__3g2Bv",inputHighlighter:"login_inputHighlighter__2dske"}},77:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(36),i=n.n(c),s=n(5),o=n(2),r=(n(24),n(60),n(61),n(8)),j=(n(21),function(){return console.log("common -> getToken"),console.log(localStorage.getItem("token")),localStorage.getItem("token")||null}),l=(n(62),n(0));var d=n(16),b=function(){var e=Object(d.b)().loginWithRedirect;return Object(l.jsx)("button",{onClick:function(){return e()},children:"Log In"})},h=n(11),O=n(12),m=n(14),u=n(13),v=n(38),x=n.n(v),g=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).navigation=a.props,a}return Object(O.a)(n,[{key:"handleLogout",value:function(){localStorage.removeItem("token"),localStorage.removeItem("user"),this.props.history.push("/login")}},{key:"render",value:function(){var e=this.navigation;return Object(l.jsx)("div",{className:x.a.navigation,children:Object(l.jsx)("nav",{className:"navbar navbar-expand navbar-dark bg-dark",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(l.jsx)("li",{className:"nav-item  ".concat("/"===e.location.pathname?"active":""),children:Object(l.jsx)(s.b,{className:"nav-link",to:"/",children:"Login"})}),Object(l.jsx)("li",{className:"nav-item  ".concat("/dashboard"===e.location.pathname?"active":""),children:Object(l.jsx)(s.b,{className:"nav-link",to:"dashboard",children:"Dashboard"})}),Object(l.jsx)("li",{className:"nav-item  ".concat("/editor"===e.location.pathname?"active":""),children:Object(l.jsx)(s.b,{className:"nav-link",to:"/ovw-manager/editor",children:"Editor"})}),Object(l.jsx)("li",{className:"nav-item  ".concat("/"===e.location.pathname?"active":""),children:Object(l.jsx)(s.b,{className:"nav-link",onClick:this.handleLogout,children:"Logout"})})]})})})})}}]),n}(a.Component),p=Object(o.h)(g),_=n(20),f=n.n(_),N=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(O.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("header",{className:f.a.header,children:[Object(l.jsx)("div",{className:f.a.logoWrapper,children:Object(l.jsxs)(s.b,{className:f.a.brand,to:"/",children:["Overworked ",Object(l.jsx)("span",{children:"Solutions"})]})}),Object(l.jsx)(p,{})]})}}]),n}(a.Component),k=Object(o.h)(N),y=(a.Component,a.Component,n(4)),C=n.n(y);var w=Object(o.h)((function(e){var t=Object(d.b)(),n=t.user,a=t.isAuthenticated;return t.isLoading?Object(l.jsx)("div",{children:"Loading ..."}):a&&Object(l.jsxs)("div",{children:[Object(l.jsxs)("h1",{children:["Welcome ",n?n.name:"","!"]}),Object(l.jsxs)("div",{className:" ".concat(C.a.container," ").concat(C.a["col-4"]," "),children:[Object(l.jsxs)("section",{className:C.a.card,children:[Object(l.jsxs)("div",{className:C.a.content,children:[Object(l.jsxs)("div",{className:C.a.title,children:[Object(l.jsx)("h2",{children:"Website Editor"}),Object(l.jsx)("p",{className:C.a.subTitle})]}),Object(l.jsx)("div",{className:C.a.media,children:Object(l.jsx)("figure",{})}),Object(l.jsx)("div",{className:C.a.copy,children:"Edit your website using a custom built editor."})]}),Object(l.jsxs)("div",{className:C.a.footer,children:[Object(l.jsx)("div",{className:C.a.link,children:Object(l.jsx)(s.b,{to:"/editor",children:"Edit Website"})}),Object(l.jsx)("div",{className:"icons"})]}),Object(l.jsx)("div",{role:"navigation"}),Object(l.jsx)("div",{className:"deck"})]}),Object(l.jsxs)("section",{className:C.a.card,children:[Object(l.jsxs)("div",{className:C.a.content,children:[Object(l.jsxs)("div",{className:C.a.title,children:[Object(l.jsx)("h2",{children:"Content Management"}),Object(l.jsx)("p",{className:C.a.subTitle})]}),Object(l.jsx)("div",{className:C.a.media,children:Object(l.jsx)("figure",{})}),Object(l.jsx)("div",{className:C.a.copy,children:"Manage the content of your website with our custom built Content Management System."})]}),Object(l.jsxs)("div",{className:C.a.footer,children:[Object(l.jsx)("div",{className:C.a.link,children:Object(l.jsx)(s.b,{to:"/content-management",children:"Manage Content"})}),Object(l.jsx)("div",{className:"icons"})]}),Object(l.jsx)("div",{role:"navigation"}),Object(l.jsx)("div",{className:"deck"})]})]})]})})),L=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(O.a)(n,[{key:"render",value:function(){return Object(l.jsx)("div",{className:"editor"})}}]),n}(a.Component),I=n(19),S=["component"];var W=function(e){var t=e.component,n=Object(I.a)(e,S);return Object(l.jsx)(o.b,Object(r.a)(Object(r.a)({},n),{},{render:function(e){return j()?Object(l.jsx)(t,Object(r.a)({},e)):Object(l.jsx)(o.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},T=["component"];var E=function(e){var t=e.component,n=Object(I.a)(e,T);return Object(l.jsx)(o.b,Object(r.a)(Object(r.a)({},n),{},{render:function(e){return j()?Object(l.jsx)(o.a,{to:{pathname:"/dashboard"}}):Object(l.jsx)(t,Object(r.a)({},e))}}))};var A=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(s.a,{children:[Object(l.jsx)(k,{}),Object(l.jsx)("main",{children:Object(l.jsxs)(o.d,{children:[Object(l.jsx)(E,{path:"/",exact:!0,component:function(){return Object(l.jsx)(b,{})}}),Object(l.jsx)(W,{path:"/dashboard",exact:!0,component:function(){return Object(l.jsx)(w,{})}}),Object(l.jsx)(W,{path:"/editor",exact:!0,component:function(){return Object(l.jsx)(L,{})}})]})})]})})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,78)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};i.a.render(Object(l.jsx)(d.a,{domain:"dev-za07lx1j.us.auth0.com",clientId:"rm7fve3H9MekYpE2c1lA8VnxABGev7Lp",redirectUri:window.location.origin,children:Object(l.jsx)(A,{})}),document.getElementById("root")),B()}},[[77,1,2]]]);
//# sourceMappingURL=main.027e29d3.chunk.js.map