"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[753],{6081:function(t,e,r){r.d(e,{x:function(){return x}});var n,c=r(7689),a=r(2791),o=["title","titleId"];function l(){return l=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},l.apply(this,arguments)}function i(t,e){if(null==t)return{};var r,n,c=function(t,e){if(null==t)return{};var r,n,c={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(c[r]=t[r]);return c}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(c[r]=t[r])}return c}function s(t,e){var r=t.title,c=t.titleId,s=i(t,o);return a.createElement("svg",l({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":c},s),r?a.createElement("title",{id:c},r):null,n||(n=a.createElement("g",{id:"Icons/Chevron (Arrow Right)"},a.createElement("path",{id:"Vector (Stroke)",fillRule:"evenodd",clipRule:"evenodd",d:"M10.4717 3.52861C10.2114 3.26826 9.78927 3.26826 9.52892 3.52861L5.52892 7.52861C5.26857 7.78896 5.26857 8.21107 5.52892 8.47141L9.52892 12.4714C9.78927 12.7318 10.2114 12.7318 10.4717 12.4714C10.7321 12.2111 10.7321 11.789 10.4717 11.5286L6.94313 8.00001L10.4717 4.47141C10.7321 4.21107 10.7321 3.78896 10.4717 3.52861Z",fill:"#313237"}))))}var u,d=a.forwardRef(s),_=(r.p,["title","titleId"]);function h(){return h=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},h.apply(this,arguments)}function f(t,e){if(null==t)return{};var r,n,c=function(t,e){if(null==t)return{};var r,n,c={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(c[r]=t[r]);return c}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(c[r]=t[r])}return c}function p(t,e){var r=t.title,n=t.titleId,c=f(t,_);return a.createElement("svg",h({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":n},c),r?a.createElement("title",{id:n},r):null,u||(u=a.createElement("g",{id:"Icons/Chevron (Arrow Right)"},a.createElement("path",{id:"Vector (Stroke)",fillRule:"evenodd",clipRule:"evenodd",d:"M10.4717 3.52861C10.2114 3.26826 9.78927 3.26826 9.52892 3.52861L5.52892 7.52861C5.26857 7.78896 5.26857 8.21107 5.52892 8.47141L9.52892 12.4714C9.78927 12.7318 10.2114 12.7318 10.4717 12.4714C10.7321 12.2111 10.7321 11.789 10.4717 11.5286L6.94313 8.00001L10.4717 4.47141C10.7321 4.21107 10.7321 3.78896 10.4717 3.52861Z",fill:"#fff"}))))}var m=a.forwardRef(p),b=(r.p,r(773)),v=r(184),x=function(){var t=(0,c.s0)(),e=a.useContext(b.T).darkTheme;return(0,v.jsx)("button",{type:"button",className:"back-button",onClick:function(){return t(-1)},children:e?(0,v.jsx)(m,{}):(0,v.jsx)(d,{})})}},3753:function(t,e,r){r.r(e),r.d(e,{CartPage:function(){return p}});var n=r(9439),c=r(6081),a=r(2791),o=r(7689),l=r(1087),i=r(3601),s=r(3427),u=r(3963),d=r(6591),_=r(1694),h=r.n(_),f=r(184),p=function(){var t=(0,a.useContext)(i.Vo),e=t.user,r=t.isAuth,_=(0,a.useContext)(i.Tr),p=_.darkTheme,m=_.notifyCartDelete,b=(0,o.s0)();console.log("user",e,"isAuth",r);var v=(0,a.useContext)(i.A9),x=v.cart,g=v.handleAdd,j=v.handleDelete,y=v.handleRemove,k=(0,a.useState)(0),N=(0,n.Z)(k,2),w=N[0],C=N[1],O=(0,a.useState)(0),E=(0,n.Z)(O,2),P=E[0],I=E[1];return(0,a.useEffect)((function(){var t=x.reduce((function(t,e){return t+e.count*(e.discountPrice||e.fullPrice)}),0),e=x.reduce((function(t,e){return t+e.count}),0);I(e),C(t)}),[x]),console.log(x),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(c.x,{}),(0,f.jsxs)("div",{className:"cart__page",children:[(0,f.jsx)("h1",{className:"cart__title",children:"Cart"}),0===x.length?(0,f.jsxs)("div",{className:"cart__block",children:[(0,f.jsx)("h1",{className:"cart__title",children:"Your cart is empty..."}),(0,f.jsx)("p",{className:"cart__subtitle",children:"But it's never too late to fix it!"}),(0,f.jsx)("a",{className:"back-home",href:"#/",children:"Go main page"})]}):(0,f.jsxs)("div",{className:"cart__content",children:[(0,f.jsx)("section",{className:"cart__products",children:x.map((function(t){return(0,f.jsxs)("li",{className:"box cart__product",children:[(0,f.jsxs)("div",{className:"cart__product__main",children:[(0,f.jsx)("button",{className:"delete cart__product__button",type:"button",onClick:function(){y(t),m()},children:"x"}),(0,f.jsxs)(l.rU,{to:"/".concat((0,u.O)(t.category_id,d.cr),"/").concat(t.productId),relative:"path",className:"cart__product__link",children:[(0,f.jsx)("div",{className:"cart__product__image-block",children:(0,f.jsx)("img",{src:"".concat("https://res.cloudinary.com/myfinance/image/upload/v1693416024/syncwave/","/").concat(t.image),alt:t.name,className:"cart__product__image"})}),(0,f.jsx)("h2",{className:"cart__product__title",children:"".concat(t.name," (XXXXX)")})]})]}),(0,f.jsxs)("div",{className:"cart__product__info",children:[(0,f.jsxs)("div",{className:"cart__product__quantity",children:[(0,f.jsx)("button",{type:"button",className:h()("cart__product__counter-button",{"cart__product__counter-button__active":1!==t.count&&p}),disabled:1===t.count,onClick:function(){return j(t)},children:"-"}),(0,f.jsx)("p",{className:"cart__product__counter",children:t.count}),(0,f.jsx)("button",{type:"button",className:h()("cart__product__counter-button",{"cart__product__counter-button__active":p}),onClick:function(){return g(t)},children:"+"})]}),(0,f.jsx)("p",{className:"cart__product__price",children:"$".concat((t.discountPrice||t.fullPrice)*t.count)})]})]},t.itemId)}))}),(0,f.jsxs)("section",{className:"box cart__checkout",children:[(0,f.jsx)("h3",{className:"cart__checkout__full-price",children:"$".concat(w)}),(0,f.jsx)("p",{className:"cart__checkout__total-count",children:"Total for ".concat(P," items")}),(0,f.jsx)("hr",{className:"cart__checkout__line"}),(0,f.jsx)("button",{type:"button",className:"cart__checkout__button",onClick:function(){b(e?s.i.Users:s.i.Login,{replace:!0})},children:"Checkout"})]})]})]})]})}},6591:function(t,e,r){r.d(e,{NV:function(){return a},cr:function(){return c},rW:function(){return n}});var n={1:"32GB",2:"64GB",3:"128GB",4:"256GB",5:"512GB"},c={1:"phones",2:"tablets",3:"accessories"},a={1:"black",2:"gold",3:"yellow",4:"green",5:"silver",6:"spacegray",7:"red",8:"white",9:"purple",10:"midnightgreen",11:"coral",12:"rosegold",13:"gray",14:"blue",15:"pink"}},3963:function(t,e,r){function n(t,e){return e[t]}r.d(e,{O:function(){return n}})}}]);
//# sourceMappingURL=753.b4a0bd7c.chunk.js.map