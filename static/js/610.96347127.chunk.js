"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[610],{6081:function(t,e,r){r.d(e,{x:function(){return j}});var n,c=r(7689),i=r(2791),a=["title","titleId"];function o(){return o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o.apply(this,arguments)}function s(t,e){if(null==t)return{};var r,n,c=function(t,e){if(null==t)return{};var r,n,c={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(c[r]=t[r]);return c}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(c[r]=t[r])}return c}function l(t,e){var r=t.title,c=t.titleId,l=s(t,a);return i.createElement("svg",o({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":c},l),r?i.createElement("title",{id:c},r):null,n||(n=i.createElement("g",{id:"Icons/Chevron (Arrow Right)"},i.createElement("path",{id:"Vector (Stroke)",fillRule:"evenodd",clipRule:"evenodd",d:"M10.4717 3.52861C10.2114 3.26826 9.78927 3.26826 9.52892 3.52861L5.52892 7.52861C5.26857 7.78896 5.26857 8.21107 5.52892 8.47141L9.52892 12.4714C9.78927 12.7318 10.2114 12.7318 10.4717 12.4714C10.7321 12.2111 10.7321 11.789 10.4717 11.5286L6.94313 8.00001L10.4717 4.47141C10.7321 4.21107 10.7321 3.78896 10.4717 3.52861Z",fill:"#313237"}))))}var u,d=i.forwardRef(l),p=(r.p,["title","titleId"]);function f(){return f=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},f.apply(this,arguments)}function h(t,e){if(null==t)return{};var r,n,c=function(t,e){if(null==t)return{};var r,n,c={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(c[r]=t[r]);return c}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(c[r]=t[r])}return c}function v(t,e){var r=t.title,n=t.titleId,c=h(t,p);return i.createElement("svg",f({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":n},c),r?i.createElement("title",{id:n},r):null,u||(u=i.createElement("g",{id:"Icons/Chevron (Arrow Right)"},i.createElement("path",{id:"Vector (Stroke)",fillRule:"evenodd",clipRule:"evenodd",d:"M10.4717 3.52861C10.2114 3.26826 9.78927 3.26826 9.52892 3.52861L5.52892 7.52861C5.26857 7.78896 5.26857 8.21107 5.52892 8.47141L9.52892 12.4714C9.78927 12.7318 10.2114 12.7318 10.4717 12.4714C10.7321 12.2111 10.7321 11.789 10.4717 11.5286L6.94313 8.00001L10.4717 4.47141C10.7321 4.21107 10.7321 3.78896 10.4717 3.52861Z",fill:"#fff"}))))}var m=i.forwardRef(v),_=(r.p,r(9075)),x=r(184),j=function(){var t=(0,c.s0)(),e=i.useContext(_.T).darkTheme;return(0,x.jsx)("button",{type:"button",className:"back-button",onClick:function(){return t(-1)},children:e?(0,x.jsx)(m,{}):(0,x.jsx)(d,{})})}},8272:function(t,e,r){r.d(e,{n:function(){return c}});r(2791);var n=r(184),c=function(t){var e=t.title;return(0,n.jsxs)("div",{className:"cart__block",children:[(0,n.jsx)("h1",{className:"cart__title",children:"Your ".concat(e," is empty...")}),(0,n.jsx)("p",{className:"cart__subtitle",children:"But it's never too late to fix it!"}),(0,n.jsx)("a",{className:"back-home",href:"#/",children:"Go main page"})]})}},2615:function(t,e,r){r.d(e,{a:function(){return l},w:function(){return d}});var n=r(4942),c=r(1694),i=r.n(c),a=r(3863),o=r(2791),s=r(184),l=function(t){var e,r=t.product,c=t.styles,l=(0,o.useContext)(a.A9),u=l.saveToCart,d=l.cart,p=(0,o.useContext)(a.Tr),f=p.darkTheme,h=p.notifyCart,v=d.some((function(t){return t.itemId===r.itemId}));return(0,s.jsx)("div",{className:"cart-button",children:(0,s.jsx)("button",{type:"button",className:i()(c[0],(e={},(0,n.Z)(e,c[1],v),(0,n.Z)(e,"product__add--dark",f&&v),e)),onClick:function(){u(r),h()},disabled:v,children:v?"Added to cart":"Add to cart"})})},u=r(9075),d=function(t){var e,r=t.product,c=t.styles,a=o.useContext(u.T),l=a.favProducts,d=a.handleLike,p=a.darkTheme,f=a.notifyFavs,h=a.notifyFavsDelete,v=l.find((function(t){return t.productId===r.productId})),m=void 0!==v;return(0,s.jsx)("div",{className:"favourites-button",children:(0,s.jsx)("button",{type:"button",className:i()(c[0],c[2],(e={},(0,n.Z)(e,c[1],v),(0,n.Z)(e,"product__favourites-dark",p),e)),onClick:function(){d(r),m?h():f()},children:(0,s.jsx)("p",{hidden:!0,children:"add to favourites"})})})}},6994:function(t,e,r){r.d(e,{I:function(){return l}});r(2791),r(9386);var n=r(1087),c=r(3963),i=r(6591),a=r(6910),o=r(2615),s=r(184),l=function(t){var e=t.product,r=(0,a.M)(e.itemId),l=[["Screen",e.screen],["Capacity",(0,c.O)(e.capacity_id||0,i.rW)],["RAM",e.ram]],u=[["Color",(0,c.O)(e.color_id||0,i.NV)],["Made in","USA"]];return(0,s.jsx)("li",{className:"product",children:(0,s.jsxs)("div",{className:"product__container",children:[(0,s.jsxs)(n.rU,{to:"/".concat((0,c.O)(e.category_id,i.cr),"/").concat(e.itemId),relative:"path",className:"product__link",children:[(0,s.jsx)("div",{className:"product__image-block",children:(0,s.jsx)("img",{src:"".concat("https://res.cloudinary.com/myfinance/image/upload/v1693416024/syncwave/","/").concat(e.image),alt:e.name,className:"product__image"})}),(0,s.jsx)("h2",{className:"product__title",children:"".concat(e.name," (").concat(r,")")})]}),(0,s.jsxs)("div",{className:"product__prices",children:[(0,s.jsx)("p",{className:"product__price",children:e.discountPrice?"$".concat(e.discountPrice):"$".concat(e.fullPrice)}),e.discountPrice&&(0,s.jsx)("p",{className:"product__price-full",children:"$".concat(e.fullPrice)})]}),(0,s.jsx)("div",{className:"product__techspecs",children:1===e.category_id||2===e.category_id?l.map((function(t){return(0,s.jsxs)("div",{className:"product__techspecs-block",children:[(0,s.jsx)("p",{className:"product__techspecs-title",children:t[0]}),(0,s.jsx)("p",{className:"product__techspecs-data",children:t[1]})]},t[0])})):u.map((function(t){return(0,s.jsxs)("div",{className:"product__techspecs-block",children:[(0,s.jsx)("p",{className:"product__techspecs-title",children:t[0]}),(0,s.jsx)("p",{className:"product__techspecs-data",children:t[1]})]},t[0])}))}),(0,s.jsxs)("div",{className:"product__buttons",children:[(0,s.jsx)(o.a,{product:e,styles:["product__add","product__add--active"]}),(0,s.jsx)(o.w,{product:e,styles:["product__favourites","product__favourites--active"]})]})]})})}},7610:function(t,e,r){r.r(e),r.d(e,{FavoritesPage:function(){return l}});var n=r(9075),c=r(6909),i=r(2791),a=r(8272),o=r(6081),s=r(184),l=function(){var t=i.useContext(n.T).favProducts;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.x,{}),(0,s.jsxs)("div",{className:"favourites__page",children:[(0,s.jsx)("h1",{className:"favourites__title",children:"Favourites"}),t.length>0?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("p",{className:"favourites__subtitle",children:"".concat(t.length," models")}),(0,s.jsx)(c.R,{products:t})]}):(0,s.jsx)(a.n,{title:"favourites page"})]})]})}},6909:function(t,e,r){r.d(e,{R:function(){return i}});r(2791);var n=r(6994),c=r(184),i=function(t){var e=t.products;return(0,c.jsx)("section",{className:"products",children:e.map((function(t){return(0,c.jsx)(n.I,{product:t},t.id)}))})}},6591:function(t,e,r){r.d(e,{NV:function(){return i},cr:function(){return c},rW:function(){return n}});var n={1:"32GB",2:"64GB",3:"128GB",4:"256GB",5:"512GB"},c={1:"phones",2:"tablets",3:"accessories"},i={1:"black",2:"gold",3:"yellow",4:"green",5:"silver",6:"spacegray",7:"red",8:"white",9:"purple",10:"midnightgreen",11:"coral",12:"rosegold",13:"gray",14:"blue",15:"pink"}},6910:function(t,e,r){function n(t){return t.split("-").map((function(t){return t[0].toUpperCase()})).join("")}r.d(e,{M:function(){return n}})},3963:function(t,e,r){function n(t,e){return e[t]}r.d(e,{O:function(){return n}})},9386:function(){}}]);
//# sourceMappingURL=610.96347127.chunk.js.map