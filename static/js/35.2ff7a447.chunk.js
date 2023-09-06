"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[35],{1812:function(e,t,n){n.d(t,{Bg:function(){return s},vN:function(){return o},Ct:function(){return i},zb:function(){return l},Uk:function(){return u},Xp:function(){return a}});function r(e){var t,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r={method:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET"};return n&&(r.body=JSON.stringify(n),r.headers={"Content-Type":"application/json; charset=UTF-8"}),(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch("https://fe-may23-syncwave-product-catalog.onrender.com/"+e,r)})).then((function(e){if(!e.ok)throw new Error;return e.json()}))}var c={get:function(e){return r(e)},post:function(e,t){return r(e,"POST",t)},delete:function(e){return r(e,"DELETE")}},a=function(e){return c.get(e)},s=function(e){return c.get(e)},i=function(){return c.get("home/hightPrice")},o=function(){return c.get("home/bestDiscount")},l=function(){return c.get("home/newest")};function u(e){var t=e;return c.get(t)}},8867:function(e,t,n){n.d(t,{b:function(){return h}});var r=n(2791),c=n(1694),a=n.n(c),s=n(7689),i=n(1087);var o=n.p+"static/media/arrow_right.a374b573155c92815583d44daaae0b60.svg";var l=n.p+"static/media/home.f28213b9be758981c8705a9683373e55.svg";var u=n.p+"static/media/home-light.d40a6ec0aedc5381abe10dc4187f816c.svg",d=n(9075),p=n(184),h=function(){var e=(0,s.TH)().pathname.split("/").filter((function(e){return""!==e})),t=r.useContext(d.T).darkTheme;return(0,p.jsx)("nav",{className:"breadcrumbs",children:(0,p.jsxs)("ul",{className:"breadcrumbs__list",children:[(0,p.jsx)("li",{className:"breadcrumbs__item",children:(0,p.jsx)(i.rU,{to:"/",className:"breadcrumbs__home-link",children:(0,p.jsx)("img",{src:t?u:l,alt:"home",className:"breadcrumbs__image"})})}),e.map((function(t,n){var r=t.split("-").join(" ");return(0,p.jsxs)("li",{className:"breadcrumbs__item",children:[(0,p.jsx)("img",{src:o,alt:"arrow",className:"breadcrumbs__image"}),(0,p.jsx)(i.rU,{to:"/".concat(t),className:a()("breadcrumbs__link",{"breadcrumbs__link--disabled":n===e.length-1}),children:r})]},t)}))]})})}},2615:function(e,t,n){n.d(t,{a:function(){return l},w:function(){return d}});var r=n(4942),c=n(1694),a=n.n(c),s=n(3863),i=n(2791),o=n(184),l=function(e){var t,n=e.product,c=e.styles,l=(0,i.useContext)(s.A9),u=l.saveToCart,d=l.cart,p=(0,i.useContext)(s.Tr),h=p.darkTheme,_=p.notifyCart,m=d.some((function(e){return e.itemId===n.itemId}));return(0,o.jsx)("div",{className:"cart-button",children:(0,o.jsx)("button",{type:"button",className:a()(c[0],(t={},(0,r.Z)(t,c[1],m),(0,r.Z)(t,"product__add--dark",h&&m),t)),onClick:function(){u(n),_()},disabled:m,children:m?"Added to cart":"Add to cart"})})},u=n(9075),d=function(e){var t,n=e.product,c=e.styles,s=i.useContext(u.T),l=s.favProducts,d=s.handleLike,p=s.darkTheme,h=s.notifyFavs,_=s.notifyFavsDelete,m=l.find((function(e){return e.productId===n.productId})),f=void 0!==m;return(0,o.jsx)("div",{className:"favourites-button",children:(0,o.jsx)("button",{type:"button",className:a()(c[0],c[2],(t={},(0,r.Z)(t,c[1],m),(0,r.Z)(t,"product__favourites-dark",p),t)),onClick:function(){d(n),f?_():h()},children:(0,o.jsx)("p",{hidden:!0,children:"add to favourites"})})})}},6994:function(e,t,n){n.d(t,{I:function(){return l}});n(2791),n(9386);var r=n(1087),c=n(3963),a=n(6591),s=n(6910),i=n(2615),o=n(184),l=function(e){var t=e.product,n=(0,s.M)(t.itemId),l=[["Screen",t.screen],["Capacity",(0,c.O)(t.capacity_id||0,a.rW)],["RAM",t.ram]],u=[["Color",(0,c.O)(t.color_id||0,a.NV)],["Made in","USA"]];return(0,o.jsx)("li",{className:"product",children:(0,o.jsxs)("div",{className:"product__container",children:[(0,o.jsxs)(r.rU,{to:"/".concat((0,c.O)(t.category_id,a.cr),"/").concat(t.productId),relative:"path",className:"product__link",children:[(0,o.jsx)("div",{className:"product__image-block",children:(0,o.jsx)("img",{src:"".concat("https://res.cloudinary.com/myfinance/image/upload/v1693416024/syncwave/","/").concat(t.image),alt:t.name,className:"product__image"})}),(0,o.jsx)("h2",{className:"product__title",children:"".concat(t.name," (").concat(n,")")})]}),(0,o.jsxs)("div",{className:"product__prices",children:[(0,o.jsx)("p",{className:"product__price",children:t.discountPrice?"$".concat(t.discountPrice):"$".concat(t.fullPrice)}),t.discountPrice&&(0,o.jsx)("p",{className:"product__price-full",children:"$".concat(t.fullPrice)})]}),(0,o.jsx)("div",{className:"product__techspecs",children:1===t.category_id||2===t.category_id?l.map((function(e){return(0,o.jsxs)("div",{className:"product__techspecs-block",children:[(0,o.jsx)("p",{className:"product__techspecs-title",children:e[0]}),(0,o.jsx)("p",{className:"product__techspecs-data",children:e[1]})]},e[0])})):u.map((function(e){return(0,o.jsxs)("div",{className:"product__techspecs-block",children:[(0,o.jsx)("p",{className:"product__techspecs-title",children:e[0]}),(0,o.jsx)("p",{className:"product__techspecs-data",children:e[1]})]},e[0])}))}),(0,o.jsxs)("div",{className:"product__buttons",children:[(0,o.jsx)(i.a,{product:t,styles:["product__add","product__add--active"]}),(0,o.jsx)(i.w,{product:t,styles:["product__favourites","product__favourites--active"]})]})]})})}},2035:function(e,t,n){n.r(t),n.d(t,{CatalogPage:function(){return N}});var r=n(9439),c=n(2791),a=n(6909),s=n(1694),i=n.n(s),o=n(1087),l=n(7596),u=n(184),d=function(e){var t=e.currentPage,n=e.totalPages,c=e.onPageChange,a=(0,o.lr)(),s=(0,r.Z)(a,1)[0];return(0,u.jsxs)("ul",{className:"pagination",children:[(0,u.jsx)("li",{className:i()("page__item page__item__arrow",{page__item__disabled:1===t}),children:(0,u.jsx)(o.rU,{to:{search:(0,l.N)(s,{page:String(t-1)})},className:"page__link","aria-disabled":1!==t?"false":"true",onClick:function(){return 1!==t&&c(t-1)},children:(0,u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:(0,u.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.4712 3.52851C10.2109 3.26816 9.78878 3.26816 9.52843 3.52851L5.52843 7.52851C5.26808 7.78886 5.26808 8.21097 5.52843 8.47132L9.52843 12.4713C9.78878 12.7317 10.2109 12.7317 10.4712 12.4713C10.7316 12.211 10.7316 11.7889 10.4712 11.5285L6.94265 7.99992L10.4712 4.47132C10.7316 4.21097 10.7316 3.78886 10.4712 3.52851Z",fill:1!==t?"#313237":"#e2e6e9"})})})}),n.map((function(e){return(0,u.jsx)("li",{className:i()("page__item",{page__item__active:t===e}),children:(0,u.jsx)(o.rU,{to:{search:(0,l.N)(s,{page:String(e)})},className:"page__link",onClick:function(){return c(e)},children:e})},e)})),(0,u.jsx)("li",{className:i()("page__item page__item__arrow",{page__item__disabled:t===n.length}),children:(0,u.jsx)(o.rU,{to:{search:(0,l.N)(s,{page:String(t+1)})},className:"page__link","aria-disabled":t!==n.length?"false":"true",onClick:function(){return t!==n.length&&c(t+1)},children:(0,u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:(0,u.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.52876 3.52851C5.78911 3.26816 6.21122 3.26816 6.47157 3.52851L10.4716 7.52851C10.7319 7.78886 10.7319 8.21097 10.4716 8.47132L6.47157 12.4713C6.21122 12.7317 5.78911 12.7317 5.52876 12.4713C5.26841 12.211 5.26841 11.7889 5.52876 11.5285L9.05735 7.99992L5.52876 4.47132C5.26841 4.21097 5.26841 3.78886 5.52876 3.52851Z",fill:t!==n.length?"#313237":"#e2e6e9"})})})})]})},p=n(8867),h="Dropdowns_Dropdowns__QMYXJ",_="Dropdowns_Dropdowns__dropdown__tIYbD",m="Dropdowns_Dropdowns__description__QZTwk",f="Dropdowns_Dropdowns__selector__sort__irsQ0",g="Dropdowns_Dropdowns__selector__items__5TAuC",v=function(e){var t=e.handleDropdownChange,n=e.perPage,r=e.sortBy;return(0,u.jsxs)("div",{className:h,children:[(0,u.jsxs)("div",{className:_,children:[(0,u.jsx)("p",{className:m,children:"Sort By"}),(0,u.jsx)("div",{className:"select is-normal",children:(0,u.jsxs)("select",{className:f,value:r,onChange:function(e){return t(e,"sort")},children:[(0,u.jsx)("option",{value:"age",children:"Newest"}),(0,u.jsx)("option",{value:"title",children:"Alphabetically"}),(0,u.jsx)("option",{value:"price",children:"Cheapest"})]})})]}),(0,u.jsxs)("div",{className:_,children:[(0,u.jsx)("p",{className:m,children:"Items on page"}),(0,u.jsx)("div",{className:"select is-normal",children:(0,u.jsxs)("select",{className:g,value:n,onChange:function(e){return t(e,"perPage")},children:[(0,u.jsx)("option",{value:"4",children:"4"}),(0,u.jsx)("option",{value:"8",children:"8"}),(0,u.jsx)("option",{value:"16",children:"16"}),(0,u.jsx)("option",{value:"all",children:"All"})]})})]})]})};var x=n(7689),j=n(1812),N=function(e){var t,n=e.title,s=e.type,i=(0,x.TH)(),o=(0,x.s0)(),l=new URLSearchParams(i.search),h=l.get("perPage")||"4",_=l.get("sort"),m=(0,c.useState)([]),f=(0,r.Z)(m,2),g=f[0],N=f[1],b=(0,c.useState)(!1),w=(0,r.Z)(b,2),C=w[0],y=w[1],k=(0,c.useState)(h||"4"),P=(0,r.Z)(k,2),S=P[0],T=P[1],D=(0,c.useState)(_||"age"),Z=(0,r.Z)(D,2),B=Z[0],L=Z[1];t="all"===h?1e3:+h;var U=(0,c.useState)(t),A=(0,r.Z)(U,2),I=A[0],E=A[1],R=(0,c.useState)(1),M=(0,r.Z)(R,2),O=M[0],G=M[1],F=(0,c.useState)(0),Q=(0,r.Z)(F,2),X=Q[0],$=Q[1];(0,c.useEffect)((function(){(0,j.Bg)("home/productCounts").then((function(e){return $(e.counts[s])})).catch((function(){return y(!0)}))}),[s]),(0,c.useEffect)((function(){(0,j.Xp)("products?category=".concat(s,"&page=").concat(O,"&perPage=").concat(S,"&sortBy=").concat(B)).then(N).catch((function(){return y(!0)}))}),[s,S,B,O]);var H,J,V=(H=I,J=X,function(e,t){for(var n=[],r=e;r<=t;r+=1)n.push(r);return n}(1,Math.ceil(J/H)));return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(p.b,{}),(0,u.jsxs)("div",{className:"catalog__page",children:[(0,u.jsx)("h1",{className:"catalog__title",children:n}),!C&&(0,u.jsx)("p",{className:"catalog__subtitle",children:"".concat(X," models")}),C&&(0,u.jsx)("h2",{className:"catalog__title",children:"There is some problems"}),g.length>0&&!C&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(v,{handleDropdownChange:function(e,t){var n,r=e.target.value;"sort"===t?L(r):(T(r),E(+r),n=r,G(1),"all"!==n?l.set("page","1"):l.delete("page")),l.set(t,r),o("".concat(i.pathname,"?").concat(l.toString()))},perPage:S,sortBy:B}),(0,u.jsx)(a.R,{products:g}),V.length>1&&(0,u.jsx)(d,{currentPage:O,totalPages:V,onPageChange:function(e){return G(e)}})]})]})]})}},6909:function(e,t,n){n.d(t,{R:function(){return a}});n(2791);var r=n(6994),c=n(184),a=function(e){var t=e.products;return(0,c.jsx)("section",{className:"products",children:t.map((function(e){return(0,c.jsx)(r.I,{product:e},e.id)}))})}},6591:function(e,t,n){n.d(t,{NV:function(){return a},cr:function(){return c},rW:function(){return r}});var r={1:"32GB",2:"64GB",3:"128GB",4:"256GB",5:"512GB"},c={1:"phones",2:"tablets",3:"accessories"},a={1:"black",2:"gold",3:"yellow",4:"green",5:"silver",6:"spacegray",7:"red",8:"white",9:"purple",10:"midnightgreen",11:"coral",12:"rosegold",13:"gray",14:"blue",15:"pink"}},6910:function(e,t,n){function r(e){return e.split("-").map((function(e){return e[0].toUpperCase()})).join("")}n.d(t,{M:function(){return r}})},3963:function(e,t,n){function r(e,t){return t[e]}n.d(t,{O:function(){return r}})},7596:function(e,t,n){n.d(t,{N:function(){return c}});var r=n(9439);function c(e,t){var n=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=(0,r.Z)(e,2),c=t[0],a=t[1];null===a?n.delete(c):Array.isArray(a)?(n.delete(c),a.forEach((function(e){n.append(c,e)}))):n.set(c,a)})),n.toString()}},9386:function(){}}]);
//# sourceMappingURL=35.2ff7a447.chunk.js.map