(this["webpackJsonpgiphy-client"]=this["webpackJsonpgiphy-client"]||[]).push([[0],{11:function(t,e,n){t.exports={root:"Details_root__2Mojx",descriptionContainer:"Details_descriptionContainer__24f29",imageContainer:"Details_imageContainer__2acbJ",detailsList:"Details_detailsList__184BK",listItem:"Details_listItem__1X8q5"}},18:function(t,e,n){t.exports={form:"SearchForm_form__3ic_m",controlGroup:"SearchForm_controlGroup__35YPR",nativeInput:"SearchForm_nativeInput__3rwT1",button:"SearchForm_button__3rU3S"}},20:function(t,e,n){t.exports={root:"Card_root__3Uy6V",img:"Card_img__qr-qd",title:"Card_title__2pVhP",loader:"Card_loader__cbGdK"}},26:function(t,e,n){t.exports={grid:"Grid_grid__3-ZqL",grid_column:"Grid_grid_column___OS6X"}},38:function(t,e,n){t.exports={backButton:"BackButton_backButton__18SxD"}},44:function(t,e,n){},45:function(t,e,n){},75:function(t,e,n){},76:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(35),i=n.n(r),o=n(12),s=(n(44),n(45),n(21)),u=n(2),l=n(4),j=n.n(l),b=n(15),d=n(10),h=n(7),f=n(14),p=n.n(f),O="P5BfhvrL0E7b66u7IgP7v9n7eYPlphau",m=function(){var t=Object(d.a)(j.a.mark((function t(){var e,n,c,a,r=arguments;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:25,n=r.length>1&&void 0!==r[1]?r[1]:0,c="https://api.giphy.com/v1/gifs/trending?api_key=".concat(O,"&limit=").concat(e,"}&offset=").concat(n,"&rating=g"),t.next=5,p.a.get(c);case 5:if(!((a=t.sent).status>=400)){t.next=8;break}throw Error("Something goes wrong");case 8:return t.abrupt("return",a.data);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),g=n(39),x=n(20),v=n.n(x),_=n(1),y=function(t){var e=t.previewUrl,n=t.id,a=t.className,r=Object(c.useState)(!1),i=Object(h.a)(r,2),s=i[0],u=i[1],l={opacity:s?1:0},j={opacity:s?0:1};return Object(_.jsxs)(o.b,{className:[v.a.root,a].join(" "),to:"".concat("/giphy-youtube-client","/gif/").concat(n),children:[Object(_.jsx)("img",{src:e,style:l,onLoad:function(t){u(!0)},alt:"",className:v.a.imgGif}),Object(_.jsx)("div",{className:v.a.loader,style:j,children:"Loading"})]})},k=n(26),w=n.n(k),S=function(t){var e=t.items;return Object(_.jsx)(g.a,{breakpointCols:{default:6,1100:3,700:2,500:1},columnClassName:w.a.grid_column,className:w.a.grid,children:e.map((function(t){var e=t.id,n=t.url,c=t.images,a=t.title;return Object(_.jsx)("div",{children:Object(_.jsx)(y,{id:e,url:n,previewUrl:c.preview_gif.url,title:a})})}))})},N=function(t){var e=t.onClick;return Object(_.jsx)("button",{onClick:e,children:"Load more"})},C=function(){var t=Object(c.useState)(void 0),e=Object(h.a)(t,2),n=e[0],a=e[1],r=Object(c.useState)(0),i=Object(h.a)(r,2),o=i[0],s=i[1],u=function(){var t=Object(d.a)(j.a.mark((function t(){var e,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m(50,o);case 2:e=t.sent,c=e.data,a(n?[].concat(Object(b.a)(n),Object(b.a)(c)):c);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){u()}),[o]),Object(_.jsxs)("div",{children:[n?Object(_.jsx)(S,{items:n}):"Loading...",Object(_.jsx)(N,{onClick:function(){s(o+50)}})]})},L="P5BfhvrL0E7b66u7IgP7v9n7eYPlphau",I=function(t,e,n){var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return"https://api.giphy.com/v1/gifs/search?q=".concat(t,"&limit=").concat(e,"&offset=").concat(n,"&api_key=").concat(c)},P=function(){var t=Object(d.a)(j.a.mark((function t(e){var n,c,a,r=arguments;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:25,c=r.length>2&&void 0!==r[2]?r[2]:0,t.next=4,p.a.get(I(e,n,c,L));case 4:if(!((a=t.sent).status>=400)){t.next=7;break}throw new Error(a.statusText);case 7:return t.abrupt("return",a.data);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),B=function(t){var e=t.location,n=Object(c.useState)(void 0),a=Object(h.a)(n,2),r=a[0],i=a[1],o=Object(c.useState)(e.search),s=Object(h.a)(o,2),u=s[0],l=s[1],f=Object(c.useState)(0),p=Object(h.a)(f,2),O=p[0],m=p[1],g=function(){var t=Object(d.a)(j.a.mark((function t(e){var n,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P(e,25,O);case 2:n=t.sent,c=n.data,i(r?[].concat(Object(b.a)(r),Object(b.a)(c)):c);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){var t=function(t,e){return new URLSearchParams(t.search).get(e)||null}(e,"q");l(t)}),[e.search]),Object(c.useEffect)((function(){g(u)}),[u,O]),Object(_.jsxs)("div",{children:[r?Object(_.jsx)(S,{items:r}):"Loading","  ",Object(_.jsx)(N,{onClick:function(){m(O+25)}})]})},E=function(){var t=Object(d.a)(j.a.mark((function t(e){var n,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/".concat(e,"?api_key=").concat("P5BfhvrL0E7b66u7IgP7v9n7eYPlphau"),t.next=3,p.a.get(n);case 3:if(!((c=t.sent).status>=400)){t.next=6;break}throw Error("Something goes wrong");case 6:return t.abrupt("return",c.data);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),q=n(11),G=n.n(q),D=n(38),F=n.n(D),U=function(){var t=Object(u.f)();return Object(_.jsx)("button",{className:F.a.backButton,onClick:function(){return t.goBack()},title:"go back",children:"<"})},Y=function(t){var e=t.location,n=t.history,a=t.match;console.log(e,n,a);var r=Object(c.useState)(void 0),i=Object(h.a)(r,2),o=i[0],s=i[1],u=function(){var t=Object(d.a)(j.a.mark((function t(){var e,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E(a.params.id);case 2:e=t.sent,n=e.data,console.log(n),s(n);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){u()}),[a.params.id]),Object(_.jsxs)("div",{className:G.a.root,children:[Object(_.jsx)(U,{}),o?Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("div",{className:G.a.imageContainer,children:Object(_.jsx)("img",{src:o.images.original.url,alt:""})}),Object(_.jsx)("div",{className:G.a.descriptionContainer,children:Object(_.jsxs)("ul",{className:G.a.detailsList,children:[Object(_.jsx)("li",{className:G.a.listItem,children:o.title}),Object(_.jsx)("li",{className:G.a.listItem,children:Object(_.jsx)("a",{href:o.url,target:"blank",rel:"noopener",children:"Open on GIPHY.COM"})}),Object(_.jsx)("li",{className:G.a.listItem,children:Object(_.jsx)("button",{children:"Copy link"})})]})})]}):"Loading"]})},J=n(18),M=n.n(J),T=function(t){var e=t.onSubmit,n=Object(c.useState)(""),a=Object(h.a)(n,2),r=a[0],i=a[1];return Object(_.jsx)("form",{onSubmit:function(t){t.preventDefault(),r&&e(r)},className:M.a.form,children:Object(_.jsxs)("div",{className:M.a.controlGroup,children:[Object(_.jsx)("input",{className:M.a.nativeInput,type:"text",onChange:function(t){i(t.currentTarget.value)},placeholder:"Search",value:r,name:"search",title:"enter search query"}),Object(_.jsx)("button",{className:M.a.button,children:"Search"})]})})};n(75);var H=Object(u.g)((function(t){var e=t.history;return Object(_.jsxs)("div",{className:"App",children:[Object(_.jsxs)("header",{className:"header",children:[Object(_.jsx)(o.b,{className:"link",to:"".concat("/giphy-youtube-client","/"),children:"Home"}),Object(_.jsx)(T,{onSubmit:function(t){console.log(t),e.push("".concat("/giphy-youtube-client","/search?q=").concat(t))}})]}),Object(_.jsxs)(u.c,{children:[Object(_.jsx)(u.a,{exact:!0,path:"".concat("/giphy-youtube-client","/"),render:function(t){return Object(_.jsx)(C,Object(s.a)({},t))}}),Object(_.jsx)(u.a,{path:"".concat("/giphy-youtube-client","/search"),render:function(t){return Object(_.jsx)(B,Object(s.a)({},t))}}),Object(_.jsx)(u.a,{path:"".concat("/giphy-youtube-client","/gif/:id"),render:function(t){return Object(_.jsx)(Y,Object(s.a)({},t))}})]})]})}));i.a.render(Object(_.jsx)(a.a.StrictMode,{children:Object(_.jsx)(o.a,{children:Object(_.jsx)(H,{})})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.36b24124.chunk.js.map