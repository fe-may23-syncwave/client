"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[35],{8867:function(e,a,t){t.d(a,{b:function(){return _}});var n=t(2791),r=t(1694),c=t.n(r),s=t(7689),i=t(1087);var l=t.p+"static/media/arrow_right.a374b573155c92815583d44daaae0b60.svg";var o=t.p+"static/media/home.f28213b9be758981c8705a9683373e55.svg";var d=t.p+"static/media/home-light.d40a6ec0aedc5381abe10dc4187f816c.svg",u=t(5790),p=t(184),_=function(){var e=(0,s.TH)().pathname.split("/").filter((function(e){return""!==e})),a=n.useContext(u.T).darkTheme;return(0,p.jsx)("nav",{className:"breadcrumbs",children:(0,p.jsxs)("ul",{className:"breadcrumbs__list",children:[(0,p.jsx)("li",{className:"breadcrumbs__item",children:(0,p.jsx)(i.rU,{to:"/",className:"breadcrumbs__home-link",children:(0,p.jsx)("img",{src:a?d:o,alt:"home",className:"breadcrumbs__image"})})}),e.map((function(a,t){var n=a.split("-").join(" ");return(0,p.jsxs)("li",{className:"breadcrumbs__item",children:[(0,p.jsx)("img",{src:l,alt:"arrow",className:"breadcrumbs__image"}),(0,p.jsx)(i.rU,{to:"/".concat(a),className:c()("breadcrumbs__link",{"breadcrumbs__link--disabled":t===e.length-1}),children:n})]},a)}))]})})}},2615:function(e,a,t){t.d(a,{a:function(){return o},w:function(){return u}});var n=t(4942),r=t(1694),c=t.n(r),s=t(2434),i=t(2791),l=t(184),o=function(e){var a,t=e.product,r=e.styles,o=(0,i.useContext)(s.A9),d=o.saveToCart,u=o.cart,p=(0,i.useContext)(s.Tr),_=p.darkTheme,h=p.notifyCart,m=u.some((function(e){return e.itemId===t.itemId}));return(0,l.jsx)("div",{className:"cart-button",children:(0,l.jsx)("button",{type:"button",className:c()(r[0],(a={},(0,n.Z)(a,r[1],m),(0,n.Z)(a,"product__add--dark",_&&m),a)),onClick:function(){d(t),h()},disabled:m,children:m?"Added to cart":"Add to cart"})})},d=t(5790),u=function(e){var a,t=e.product,r=e.styles,s=i.useContext(d.T),o=s.products,u=s.handleLike,p=s.darkTheme,_=s.notifyFavs,h=s.notifyFavsDelete,m=o.find((function(e){return e.productId===t.productId})),g=void 0!==m;return(0,l.jsx)("div",{className:"favourites-button",children:(0,l.jsx)("button",{type:"button",className:c()(r[0],r[2],(a={},(0,n.Z)(a,r[1],m),(0,n.Z)(a,"product__favourites-dark",p),a)),onClick:function(){u(t),g?h():_()},children:(0,l.jsx)("p",{hidden:!0,children:"add to favourites"})})})}},6994:function(e,a,t){t.d(a,{I:function(){return l}});t(2791),t(9386);var n=t(1087),r=t(3963),c=t(6591),s=t(2615),i=t(184),l=function(e){var a=e.product;return(0,i.jsx)("li",{className:"product",children:(0,i.jsxs)("div",{className:"product__container",children:[(0,i.jsxs)(n.rU,{to:"/".concat((0,r.O)(a.category_id,c.c),"/").concat(a.productId),relative:"path",className:"product__link",children:[(0,i.jsx)("div",{className:"product__image-block",children:(0,i.jsx)("img",{src:"".concat("https://res.cloudinary.com/myfinance/image/upload/v1693416024/syncwave/","/").concat(a.image),alt:a.name,className:"product__image"})}),(0,i.jsx)("h2",{className:"product__title",children:"".concat(a.name," XXXX")})]}),(0,i.jsxs)("div",{className:"product__prices",children:[(0,i.jsx)("p",{className:"product__price",children:a.discountPrice?"$".concat(a.discountPrice):"$".concat(a.fullPrice)}),a.discountPrice&&(0,i.jsx)("p",{className:"product__price-full",children:"$".concat(a.fullPrice)})]}),(0,i.jsxs)("div",{className:"product__info",children:[(0,i.jsxs)("div",{className:"product__info-block",children:[(0,i.jsx)("p",{className:"product__info-title",children:"Screen"}),(0,i.jsx)("p",{className:"product__info-data",children:a.screen})]}),(0,i.jsxs)("div",{className:"product__info-block",children:[(0,i.jsx)("p",{className:"product__info-title",children:"Capacity"}),void 0!==a.capacity_id?(0,r.O)(a.capacity_id,c.r):""]}),(0,i.jsxs)("div",{className:"product__info-block",children:[(0,i.jsx)("p",{className:"product__info-title",children:"RAM"}),(0,i.jsx)("p",{className:"product__info-data",children:a.ram})]})]}),(0,i.jsxs)("div",{className:"product__buttons",children:[(0,i.jsx)(s.a,{product:a,styles:["product__add","product__add--active"]}),(0,i.jsx)(s.w,{product:a,styles:["product__favourites","product__favourites--active"]})]})]})})}},2035:function(e,a,t){t.r(a),t.d(a,{CatalogPage:function(){return b}});var n=t(9439),r=t(2791),c=t(6909),s=t(1694),i=t.n(s),l=t(1087),o=t(7596),d=t(184),u=function(e){var a=e.currentPage,t=e.totalPages,r=e.onPageChange,c=(0,l.lr)(),s=(0,n.Z)(c,1)[0];return(0,d.jsxs)("ul",{className:"pagination",children:[(0,d.jsx)("li",{className:i()("page__item page__item__arrow",{page__item__disabled:1===a}),children:(0,d.jsx)(l.rU,{to:{search:(0,o.N)(s,{page:String(a-1)})},className:"page__link","aria-disabled":1!==a?"false":"true",onClick:function(){return 1!==a&&r(a-1)},children:(0,d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:(0,d.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.4712 3.52851C10.2109 3.26816 9.78878 3.26816 9.52843 3.52851L5.52843 7.52851C5.26808 7.78886 5.26808 8.21097 5.52843 8.47132L9.52843 12.4713C9.78878 12.7317 10.2109 12.7317 10.4712 12.4713C10.7316 12.211 10.7316 11.7889 10.4712 11.5285L6.94265 7.99992L10.4712 4.47132C10.7316 4.21097 10.7316 3.78886 10.4712 3.52851Z",fill:1!==a?"#313237":"#e2e6e9"})})})}),t.map((function(e){return(0,d.jsx)("li",{className:i()("page__item",{page__item__active:a===e}),children:(0,d.jsx)(l.rU,{to:{search:(0,o.N)(s,{page:String(e)})},className:"page__link",onClick:function(){return r(e)},children:e})},e)})),(0,d.jsx)("li",{className:i()("page__item page__item__arrow",{page__item__disabled:a===t.length}),children:(0,d.jsx)(l.rU,{to:{search:(0,o.N)(s,{page:String(a+1)})},className:"page__link","aria-disabled":a!==t.length?"false":"true",onClick:function(){return a!==t.length&&r(a+1)},children:(0,d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:(0,d.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.52876 3.52851C5.78911 3.26816 6.21122 3.26816 6.47157 3.52851L10.4716 7.52851C10.7319 7.78886 10.7319 8.21097 10.4716 8.47132L6.47157 12.4713C6.21122 12.7317 5.78911 12.7317 5.52876 12.4713C5.26841 12.211 5.26841 11.7889 5.52876 11.5285L9.05735 7.99992L5.52876 4.47132C5.26841 4.21097 5.26841 3.78886 5.52876 3.52851Z",fill:a!==t.length?"#313237":"#e2e6e9"})})})})]})},p=t(8867),_="Dropdowns_Dropdowns__QMYXJ",h="Dropdowns_Dropdowns__dropdown__tIYbD",m="Dropdowns_Dropdowns__description__QZTwk",g="Dropdowns_Dropdowns__selector__sort__irsQ0",f="Dropdowns_Dropdowns__selector__items__5TAuC",v=function(e){var a=e.handleDropdownChange,t=e.perPage,n=e.sortBy;return(0,d.jsxs)("div",{className:_,children:[(0,d.jsxs)("div",{className:h,children:[(0,d.jsx)("p",{className:m,children:"Sort By"}),(0,d.jsx)("div",{className:"select is-normal",children:(0,d.jsxs)("select",{className:g,value:n,onChange:function(e){return a(e,"sort")},children:[(0,d.jsx)("option",{value:"age",children:"Newest"}),(0,d.jsx)("option",{value:"title",children:"Alphabetically"}),(0,d.jsx)("option",{value:"price",children:"Cheapest"})]})})]}),(0,d.jsxs)("div",{className:h,children:[(0,d.jsx)("p",{className:m,children:"Items on page"}),(0,d.jsx)("div",{className:"select is-normal",children:(0,d.jsxs)("select",{className:f,value:t,onChange:function(e){return a(e,"perPage")},children:[(0,d.jsx)("option",{value:"4",children:"4"}),(0,d.jsx)("option",{value:"8",children:"8"}),(0,d.jsx)("option",{value:"16",children:"16"}),(0,d.jsx)("option",{value:"all",children:"All"})]})})]})]})};var x=t(7689),j=[{id:"1",category_id:1,productId:"apple-iphone-7-32gb-black",itemId:"apple-iphone-7-32gb-black",name:"Apple iPhone 7 32GB Black",fullPrice:400,discountPrice:375,screen:"4.7' IPS",capacity_id:1,color_id:1,ram:"2GB",year:2016,image:"img/phones/apple-iphone-7/black/00.jpg"},{id:"2",category_id:1,productId:"apple-iphone-11-128gb-yellow",itemId:"apple-iphone-11-128gb-yellow",name:"Apple iPhone 11 128GB Yellow",fullPrice:1100,discountPrice:1050,screen:"6.1' IPS",capacity_id:3,color_id:3,ram:"4GB",year:2019,image:"img/phones/apple-iphone-11/yellow/00.jpg"},{id:"3",category_id:1,productId:"apple-iphone-8-32gb-black",itemId:"apple-iphone-8-32gb-black",name:"Apple iPhone 7 32GB Black",fullPrice:400,discountPrice:375,screen:"4.7' IPS",capacity_id:1,color_id:1,ram:"2GB",year:2016,image:"img/phones/apple-iphone-7/black/00.jpg"}],b=function(e){var a,t=e.title,s=(0,x.TH)(),i=(0,x.s0)(),l=new URLSearchParams(s.search),o=l.get("perPage")||"4",_=l.get("sort");a="all"===o?1e3:+o;var h,m,g=(0,r.useState)(o||"4"),f=(0,n.Z)(g,2),b=f[0],N=f[1],w=(0,r.useState)(_||"age"),k=(0,n.Z)(w,2),y=k[0],C=k[1],P=(0,r.useState)(!1),S=(0,n.Z)(P,1)[0],I=(0,r.useState)(a),B=(0,n.Z)(I,2),Z=B[0],D=B[1],A=(0,r.useState)(1),T=(0,n.Z)(A,2),G=T[0],L=T[1],R=(0,r.useState)(1),U=(0,n.Z)(R,2),M=U[0],X=U[1],F=(0,r.useState)(Z),O=(0,n.Z)(F,2),Q=O[0],Y=O[1],$=(h=Z,m=j.length,function(e,a){for(var t=[],n=e;n<=a;n+=1)t.push(n);return t}(1,Math.ceil(m/h))),E=j.slice(M-1,Q);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(p.b,{}),(0,d.jsxs)("div",{className:"catalog__page",children:[(0,d.jsx)("h1",{className:"catalog__title",children:t}),!S&&(0,d.jsx)("p",{className:"catalog__subtitle",children:"".concat(j.length," models")}),S&&(0,d.jsx)("h2",{className:"catalog__title",children:"There is some problems"}),j.length>0&&!S&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(v,{handleDropdownChange:function(e,a){var t=e.target.value;"sort"===a?C(t):(N(t),D(+t),function(e){if(L(1),X(1),"all"===e)return Y(1e3),void l.delete("page");Y(1*+e),l.set("page","1")}(t)),l.set(a,t),i("".concat(s.pathname,"?").concat(l.toString()))},perPage:b,sortBy:y}),(0,d.jsx)(c.R,{products:E}),$.length>1&&(0,d.jsx)(u,{currentPage:G,totalPages:$,onPageChange:function(e){return function(e){L(e),X(e*Z-Z+1),Y(e*Z)}(e)}})]})]})]})}},6909:function(e,a,t){t.d(a,{R:function(){return c}});t(2791);var n=t(6994),r=t(184),c=function(e){var a=e.products;return(0,r.jsx)("section",{className:"products",children:a.map((function(e){return(0,r.jsx)(n.I,{product:e},e.productId)}))})}},6591:function(e,a,t){t.d(a,{c:function(){return r},r:function(){return n}});var n={1:"32GB",2:"64GB",3:"128GB",4:"256GB",5:"512GB"},r={1:"phones",2:"tablets",3:"accessories"}},3963:function(e,a,t){function n(e,a){return a[e]}t.d(a,{O:function(){return n}})},7596:function(e,a,t){t.d(a,{N:function(){return r}});var n=t(9439);function r(e,a){var t=new URLSearchParams(e.toString());return Object.entries(a).forEach((function(e){var a=(0,n.Z)(e,2),r=a[0],c=a[1];null===c?t.delete(r):Array.isArray(c)?(t.delete(r),c.forEach((function(e){t.append(r,e)}))):t.set(r,c)})),t.toString()}},9386:function(){}}]);
//# sourceMappingURL=35.054fbd20.chunk.js.map