(this["webpackJsonpgiphy-client"]=this["webpackJsonpgiphy-client"]||[]).push([[0],{11:function(t,e,n){t.exports={root:"Details_root__2Mojx",descriptionContainer:"Details_descriptionContainer__24f29",imageContainer:"Details_imageContainer__2acbJ",detailsList:"Details_detailsList__184BK",listItem:"Details_listItem__1X8q5"}},18:function(t,e,n){t.exports={form:"SearchForm_form__3ic_m",controlGroup:"SearchForm_controlGroup__35YPR",nativeInput:"SearchForm_nativeInput__3rwT1",button:"SearchForm_button__3rU3S"}},20:function(t,e,n){t.exports={root:"Card_root__3Uy6V",img:"Card_img__qr-qd",title:"Card_title__2pVhP",loader:"Card_loader__cbGdK"}},26:function(t,e,n){t.exports={grid:"Grid_grid__3-ZqL",grid_column:"Grid_grid_column___OS6X"}},38:function(t,e,n){t.exports={backButton:"BackButton_backButton__18SxD"}},44:function(t,e,n){},45:function(t,e,n){},75:function(t,e,n){},76:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(35),i=n.n(c),s=n(12),o=(n(44),n(45),n(21)),u=n(2),l=n(4),j=n.n(l),b=n(15),d=n(10),f=n(7),h=n(14),p=n.n(h),O="P5BfhvrL0E7b66u7IgP7v9n7eYPlphau",m=function(){var t=Object(d.a)(j.a.mark((function t(){var e,n,a,r,c=arguments;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:25,n=c.length>1&&void 0!==c[1]?c[1]:0,a="https://api.giphy.com/v1/gifs/trending?api_key=".concat(O,"&limit=").concat(e,"}&offset=").concat(n,"&rating=g"),t.next=5,p.a.get(a);case 5:if(!((r=t.sent).status>=400)){t.next=8;break}throw Error("Something goes wrong");case 8:return t.abrupt("return",r.data);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),x=n(39),v=n(20),g=n.n(v),_=n(1),k=function(t){var e=t.previewUrl,n=t.id,r=t.className,c=Object(a.useState)(!1),i=Object(f.a)(c,2),o=i[0],u=i[1],l={opacity:o?1:0},j={opacity:o?0:1};return Object(_.jsxs)(s.b,{className:[g.a.root,r].join(" "),to:"/gif/".concat(n),children:[Object(_.jsx)("img",{src:e,style:l,onLoad:function(t){u(!0)},alt:"",className:g.a.imgGif}),Object(_.jsx)("div",{className:g.a.loader,style:j,children:"Loading"})]})},w=n(26),y=n.n(w),S=function(t){var e=t.items;return Object(_.jsx)(x.a,{breakpointCols:{default:6,1100:3,700:2,500:1},columnClassName:y.a.grid_column,className:y.a.grid,children:e.map((function(t){var e=t.id,n=t.url,a=t.images,r=t.title;return Object(_.jsx)("div",{children:Object(_.jsx)(k,{id:e,url:n,previewUrl:a.preview_gif.url,title:r})})}))})},N=function(t){var e=t.onClick;return Object(_.jsx)("button",{onClick:e,children:"Load more"})},C=function(){var t=Object(a.useState)(void 0),e=Object(f.a)(t,2),n=e[0],r=e[1],c=Object(a.useState)(0),i=Object(f.a)(c,2),s=i[0],o=i[1],u=function(){var t=Object(d.a)(j.a.mark((function t(){var e,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m(50,s);case 2:e=t.sent,a=e.data,r(n?[].concat(Object(b.a)(n),Object(b.a)(a)):a);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){u()}),[s]),Object(_.jsxs)("div",{children:[n?Object(_.jsx)(S,{items:n}):"Loading...",Object(_.jsx)(N,{onClick:function(){o(s+50)}})]})},L="P5BfhvrL0E7b66u7IgP7v9n7eYPlphau",I=function(t,e,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return"https://api.giphy.com/v1/gifs/search?q=".concat(t,"&limit=").concat(e,"&offset=").concat(n,"&api_key=").concat(a)},P=function(){var t=Object(d.a)(j.a.mark((function t(e){var n,a,r,c=arguments;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:25,a=c.length>2&&void 0!==c[2]?c[2]:0,t.next=4,p.a.get(I(e,n,a,L));case 4:if(!((r=t.sent).status>=400)){t.next=7;break}throw new Error(r.statusText);case 7:return t.abrupt("return",r.data);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),B=function(t){var e=t.location,n=Object(a.useState)(void 0),r=Object(f.a)(n,2),c=r[0],i=r[1],s=Object(a.useState)(e.search),o=Object(f.a)(s,2),u=o[0],l=o[1],h=Object(a.useState)(0),p=Object(f.a)(h,2),O=p[0],m=p[1],x=function(){var t=Object(d.a)(j.a.mark((function t(e){var n,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P(e,25,O);case 2:n=t.sent,a=n.data,i(c?[].concat(Object(b.a)(c),Object(b.a)(a)):a);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){var t=function(t,e){return new URLSearchParams(t.search).get(e)||null}(e,"q");l(t)}),[e.search]),Object(a.useEffect)((function(){x(u)}),[u,O]),Object(_.jsxs)("div",{children:[c?Object(_.jsx)(S,{items:c}):"Loading","  ",Object(_.jsx)(N,{onClick:function(){m(O+25)}})]})},E=function(){var t=Object(d.a)(j.a.mark((function t(e){var n,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/".concat(e,"?api_key=").concat("P5BfhvrL0E7b66u7IgP7v9n7eYPlphau"),t.next=3,p.a.get(n);case 3:if(!((a=t.sent).status>=400)){t.next=6;break}throw Error("Something goes wrong");case 6:return t.abrupt("return",a.data);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),q=n(11),G=n.n(q),D=n(38),F=n.n(D),U=function(){var t=Object(u.f)();return Object(_.jsx)("button",{className:F.a.backButton,onClick:function(){return t.goBack()},title:"go back",children:"<"})},Y=function(t){var e=t.location,n=t.history,r=t.match;console.log(e,n,r);var c=Object(a.useState)(void 0),i=Object(f.a)(c,2),s=i[0],o=i[1],u=function(){var t=Object(d.a)(j.a.mark((function t(){var e,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E(r.params.id);case 2:e=t.sent,n=e.data,console.log(n),o(n);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){u()}),[r.params.id]),Object(_.jsxs)("div",{className:G.a.root,children:[Object(_.jsx)(U,{}),s?Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("div",{className:G.a.imageContainer,children:Object(_.jsx)("img",{src:s.images.original.url,alt:""})}),Object(_.jsx)("div",{className:G.a.descriptionContainer,children:Object(_.jsxs)("ul",{className:G.a.detailsList,children:[Object(_.jsx)("li",{className:G.a.listItem,children:s.title}),Object(_.jsx)("li",{className:G.a.listItem,children:Object(_.jsx)("a",{href:s.url,target:"blank",rel:"noopener",children:"Open on GIPHY.COM"})}),Object(_.jsx)("li",{className:G.a.listItem,children:Object(_.jsx)("button",{children:"Copy link"})})]})})]}):"Loading"]})},J=n(18),M=n.n(J),T=function(t){var e=t.onSubmit,n=Object(a.useState)(""),r=Object(f.a)(n,2),c=r[0],i=r[1];return Object(_.jsx)("form",{onSubmit:function(t){t.preventDefault(),c&&e(c)},className:M.a.form,children:Object(_.jsxs)("div",{className:M.a.controlGroup,children:[Object(_.jsx)("input",{className:M.a.nativeInput,type:"text",onChange:function(t){i(t.currentTarget.value)},placeholder:"Search",value:c,name:"search",title:"enter search query"}),Object(_.jsx)("button",{className:M.a.button,children:"Search"})]})})};n(75);var H=Object(u.g)((function(t){var e=t.history;return Object(_.jsxs)("div",{className:"App",children:[Object(_.jsxs)("header",{className:"header",children:[Object(_.jsx)(s.b,{className:"link",to:"/",children:"Home"}),Object(_.jsx)(T,{onSubmit:function(t){console.log(t),e.push("/search?q=".concat(t))}})]}),Object(_.jsxs)(u.c,{children:[Object(_.jsx)(u.a,{exact:!0,path:"/",render:function(t){return Object(_.jsx)(C,Object(o.a)({},t))}}),Object(_.jsx)(u.a,{path:"/search",render:function(t){return Object(_.jsx)(B,Object(o.a)({},t))}}),Object(_.jsx)(u.a,{path:"/gif/:id",render:function(t){return Object(_.jsx)(Y,Object(o.a)({},t))}})]})]})}));i.a.render(Object(_.jsx)(r.a.StrictMode,{children:Object(_.jsx)(s.a,{children:Object(_.jsx)(H,{})})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.dc98d5a7.chunk.js.map