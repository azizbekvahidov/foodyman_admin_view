"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[7005],{89802:function(e,n,t){t.d(n,{q:function(){return u}});var r=t(1413),i=t(29439),l=t(45987),s=t(47313),a=t(74294),o=t(72652),d=t(46417),c=["fetchOptions","refetch"],u=function(e){var n=e.fetchOptions,t=e.refetch,u=void 0!==t&&t,v=(0,l.Z)(e,c),f=(0,s.useState)(!1),p=(0,i.Z)(f,2),h=p[0],x=p[1],m=(0,s.useState)([]),Z=(0,i.Z)(m,2),y=Z[0],j=Z[1];return(0,d.jsx)(a.Z,(0,r.Z)((0,r.Z)({labelInValue:!0,filterOption:!1,notFoundContent:h?(0,d.jsx)(o.Z,{size:"small"}):"no results"},v),{},{options:h?[]:y,onFocus:function(){y.length&&!u||(x(!0),n().then((function(e){j(e),x(!1)})))}}))}},51988:function(e,n,t){t.d(n,{Z:function(){return d}});t(47313);var r=t(24511),i=t(66188),l=t.p+"static/media/noproductsfound.1cec73868b5fd048b865.riv",s=t.p+"static/media/noresult.ac4af107751f94856a9c.riv",a=t.p+"static/media/nosell.32cb2c2cc548a15c820d.riv",o=t(46417);var d=function(e){var n=e.id,t=void 0===n?"noresult":n,d=e.text,c=void 0===d?"":d,u=(0,r.$)().t,v={src:{noproductsfound:l,noresult:s,nosell:a}[t],artboard:"New Artboard",autoplay:!0},f=(0,i.useRive)(v).RiveComponent;return(0,o.jsxs)("div",{className:"animation-canvas",children:[(0,o.jsx)("div",{style:{width:"100%",height:200},children:(0,o.jsx)(f,{})}),(0,o.jsx)("div",{className:"text",children:u(c)})]})}},41481:function(e,n,t){t.d(n,{Z:function(){return v}});var r=t(1413),i=t(29439),l=t(45987),s=t(47313),a=t(66672),o=t(16031),d=t(40765),c=t(46417),u=["handleChange","defaultValue","resetSearch"];function v(e){var n=e.handleChange,t=e.defaultValue,v=e.resetSearch,f=(0,l.Z)(e,u),p=(0,s.useState)(t),h=(0,i.Z)(p,2),x=h[0],m=h[1],Z=(0,s.useMemo)((function(){return(0,o.debounce)((function(e){n(e)}),800)}),[]);return(0,s.useEffect)((function(){m(t)}),[v]),(0,c.jsx)(a.Z,(0,r.Z)({value:x,onChange:function(e){m(e.target.value),Z(e.target.value)},prefix:(0,c.jsx)(d.Z,{})},f))}},89281:function(e,n,t){t.d(n,{h:function(){return f}});var r=t(1413),i=t(29439),l=t(45987),s=t(47313),a=t(12279),o=t.n(a),d=t(74294),c=t(72652),u=t(46417),v=["fetchOptions","debounceTimeout"],f=function(e){var n=e.fetchOptions,t=e.debounceTimeout,a=void 0===t?400:t,f=(0,l.Z)(e,v),p=(0,s.useState)(!1),h=(0,i.Z)(p,2),x=h[0],m=h[1],Z=(0,s.useState)([]),y=(0,i.Z)(Z,2),j=y[0],g=y[1],_=(0,s.useMemo)((function(){return o()((function(e){g([]),m(!0),n(e).then((function(e){g(e),m(!1)}))}),a)}),[n,a]);return(0,u.jsx)(d.Z,(0,r.Z)((0,r.Z)({showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:_,notFoundContent:x?(0,u.jsx)(c.Z,{size:"small"}):"no results"},f),{},{options:j,onFocus:function(){j.length||_("")}}))}},85937:function(e,n,t){function r(e){var n=0,t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).find((function(n){return n.shop_id===e.id}));null!==t&&void 0!==t&&t.delivery_fee&&(n=t.delivery_fee);var r=e.products.reduce((function(e,n){return e+n.total_price}),0),i=e.products.reduce((function(e,n){return e+n.tax}),0),l=e.products.reduce((function(e,n){return e+n.shop_tax}),0);return{productTax:i,shopTax:l,total:r+l+n,deliveryFee:n,orderTax:l+i}}t.d(n,{Z:function(){return r}})},77370:function(e,n,t){function r(e,n){for(var t=[],r=[],i="",l=0;l<(null===(s=e.stocks)||void 0===s?void 0:s.length);l++){var s,a;i="";for(var o=0;o<(null===(d=e.stocks[l].extras)||void 0===d?void 0:d.length);o++){var d,c=Object.assign({},e.stocks[l].extras[o]),u=t.findIndex((function(e){return e.id==c.id}));-1==u?(c.level=o,c.up=[i],t.push(c),i+=c.id.toString()):(t[u].up.push(i),i+=c.id.toString())}for(var v={id:e.stocks[l].id,extras:i,price:e.stocks[l].price,quantity:e.stocks[l].quantity,countable_id:e.stocks[l].countable_id,discount:e.stocks[l].discount,tax:e.stocks[l].tax,total_price:e.stocks[l].total_price,bonus:e.stocks[l].bonus,addons:(null===(a=e.stock)||void 0===a?void 0:a.addons)||e.stocks[l].addons},f=0;f<(null===(p=v.addons)||void 0===p?void 0:p.length);f++)for(var p,h=0;h<(null===n||void 0===n?void 0:n.length);h++){var x,m,Z;v.addons[f].addon_id===((null===(x=n[h].stock)||void 0===x||null===(m=x.product)||void 0===m?void 0:m.id)||(null===(Z=n[h].product)||void 0===Z?void 0:Z.id))&&(v.addons[f].product.quantity=n[h].quantity)}r.push(v)}return{stock:r,extras:t}}function i(e,n,t){for(var r=""==e?[]:e.split(","),i=[],l=[],s=0;s<=r.length;s++){s-1>=0&&(l[l.length]=r[s-1].toString()),(a=n.filter((function(e){if(new Set(e.up).has(l.join("")))return e}))).length>0&&i.push(a)}s=0;if(l.length<i.length)for(;s<n.length;){var a;if(l[l.length]=i[i.length-1][0].id.toString(),0==(a=n.filter((function(e){if(new Set(e.up).has(l.join("")))return e}))).length)break;i.push(a),s++}var o=t.findIndex((function(e){return e.extras==l.join("")}));return{stock:t[o],extras:i}}t.d(n,{o:function(){return r},y:function(){return i}})},28939:function(e,n,t){function r(e){var n,t=null===e||void 0===e||null===(n=e.extras)||void 0===n?void 0:n.find((function(e){return"image"===e.group.type}));return t?t.value:""}t.d(n,{Z:function(){return r}})},84017:function(e,n,t){function r(e){return e?(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$")+" "+Number(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,"):"0"}t.d(n,{Z:function(){return r}})},91220:function(e,n,t){function r(e,n){var t,r=(null===n||void 0===n||null===(t=n.translation)||void 0===t?void 0:t.title)||"pcs";if(!e)return 0;switch(null===n||void 0===n?void 0:n.position){case"after":return e+" "+r;case"before":return r+" "+e}}t.d(n,{Z:function(){return r}})},80314:function(e,n,t){var r=t(47313);n.Z=function(e,n){var t=(0,r.useRef)(!1);(0,r.useEffect)((function(){if(t.current)return e&&e();t.current=!0}),n)}},31109:function(e,n,t){function r(e,n){var t=e.reduce((function(e,n){return e+n.delivery_fee}),0),r=n;return t&&(r+=t),r}t.d(n,{G:function(){return r}})},11101:function(e,n,t){var r=t(34344),i={getAll:function(e){return r.Z.get("rest/brands/paginate",{params:e})},getById:function(e,n){return r.Z.get("rest/brands/".concat(e),{params:n})}};n.Z=i},29955:function(e,n,t){var r=t(34344),i={getAll:function(e){return r.Z.get("rest/categories/paginate",{params:e})},getById:function(e,n){return r.Z.get("rest/categories/".concat(e),{params:n})},search:function(e){return r.Z.get("rest/categories/search",{params:e})}};n.Z=i},21448:function(e,n,t){var r=t(34344),i={checkCoupon:function(e){return r.Z.post("rest/coupons/check",e)},checkCashback:function(e){return r.Z.post("rest/cashback/check",e)}};n.Z=i},97357:function(e,n,t){t.r(n),t.d(n,{default:function(){return ye}});var r=t(1413),i=t(29439),l=t(47313),s=t(18197),a=t(256),o=t(59491),d=t(68197),c=t(59624),u=t(72652),v=t(74165),f=t(15861),p=t(77181),h=t(74294),x=t(66672),m=t(16031),Z=t(49986),y=t(89281),j=t(2717),g=t(73270),_=t(24511),b=t(55768),k=t(90954),N=t(58467),w=t(34491),S=t(89802),I=t(26457),C=t(46417),q=function(e){var n=e.form,t=(0,_.$)().t,r=(0,j.I0)(),a=(0,N.s0)(),u=(0,j.v9)((function(e){return e.order}),j.wU).data,q=(0,j.v9)((function(e){return e.currency}),j.wU).currencies,M=(0,l.useState)([]),O=(0,i.Z)(M,2),H=O[0],U=O[1],V=(0,l.useState)(!1),F=(0,i.Z)(V,2),E=F[0],Y=F[1];function P(){return P=(0,f.Z)((0,v.Z)().mark((function e(n){var t;return(0,v.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={search:n,perPage:10},e.abrupt("return",Z.Z.search(t).then((function(e){var n=e.data;return U(n),A(n)})));case 2:case"end":return e.stop()}}),e)}))),P.apply(this,arguments)}function z(){return(z=(0,f.Z)((0,v.Z)().mark((function e(){return(0,v.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",I.Z.getAll({perPage:100}).then((function(e){return e.data.filter((function(e){return"cash"===e.tag||"terminal"===e.tag})).map((function(e){var n;return{label:(null===(n=e.translation)||void 0===n?void 0:n.title)||"no name",value:e.id}}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e){if(e)return(0,m.isArray)(e)?e.map((function(e){return{label:"".concat(e.firstname," ").concat(e.lastname||""),value:e.id}})):{label:"".concat(e.firstname," ").concat(e.lastname||""),value:e.id}}function B(){return(B=(0,f.Z)((0,v.Z)().mark((function e(n){return(0,v.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return",[]);case 2:return Y(!1),e.abrupt("return",Z.Z.getById(n).then((function(e){return e.data.addresses.map((function(e){return{label:e.address,value:e.id}}))})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,C.jsx)(p.Z,{title:t("customer.details"),children:(0,C.jsxs)(d.Z,{gutter:12,children:[(0,C.jsx)(c.Z,{span:16,children:(0,C.jsx)(s.Z.Item,{label:t("client"),name:"user",rules:[{required:!0,message:""}],children:(0,C.jsx)(y.h,{placeholder:t("select.client"),fetchOptions:function(e){return P.apply(this,arguments)},onSelect:function(e){var t=H.find((function(n){return n.id===e.value}));r((0,g.oM)({user:e,userUuid:t.uuid})),n.setFieldsValue({address:null}),Y(!0)}})})}),(0,C.jsx)(c.Z,{span:8,children:(0,C.jsx)(s.Z.Item,{label:"add",className:"label-hidden",children:(0,C.jsx)(o.Z,{icon:(0,C.jsx)(b.Z,{}),onClick:function(){r((0,k.bL)({url:"user/add",id:"user_add",name:"User add"})),a("/user/add")},children:t("add")})})}),(0,C.jsx)(c.Z,{span:16,children:(0,C.jsx)(s.Z.Item,{label:t("address"),name:"address",rules:[{required:!0,message:""}],children:(0,C.jsx)(S.q,{fetchOptions:function(){return function(e){return B.apply(this,arguments)}(u.userUuid)},onSelect:function(e){return r((0,g.oM)({address:e}))},refetch:E,className:"w-100",placeholder:t("select.address")})})}),(0,C.jsx)(c.Z,{span:8,children:(0,C.jsx)(s.Z.Item,{label:"add",className:"label-hidden",children:(0,C.jsx)(o.Z,{icon:(0,C.jsx)(b.Z,{}),onClick:function(){u.userUuid?(r((0,k.bL)({url:"user/".concat(u.userUuid),id:"user_edit",name:"User edit"})),a("/user/".concat(u.userUuid))):w.Am.warning("Please, select client")},children:t("add")})})}),(0,C.jsx)(c.Z,{span:12,children:(0,C.jsx)(s.Z.Item,{label:t("currency"),name:"currency_id",rules:[{required:!0,message:"missing_currency"}],children:(0,C.jsx)(h.Z,{placeholder:t("select.currency"),onSelect:function(e){var n=q.find((function(n){return n.id===e}));r((0,g.dY)(n))},children:q.map((function(e,n){return(0,C.jsxs)(h.Z.Option,{value:e.id,children:[e.title," (",null===e||void 0===e?void 0:e.symbol,")"]},n)}))})})}),(0,C.jsx)(c.Z,{span:12,children:(0,C.jsx)(s.Z.Item,{label:t("payment.type"),name:"payment_type",rules:[{required:!0,message:t("missing.payment.type")}],children:(0,C.jsx)(S.q,{fetchOptions:function(){return z.apply(this,arguments)},className:"w-100",placeholder:t("select.payment.type")})})}),(0,C.jsx)(c.Z,{span:24,children:(0,C.jsx)(s.Z.Item,{label:t("note"),name:"note",children:(0,C.jsx)(x.Z,{})})})]})})},M=t(93433),O=t(4942),H=t(99096),U=t(6289),V=t(49067),F=t(80314),E=t(70816),Y=t.n(E),P=t(51988),z=function(e){var n=e.form,t=(0,_.$)().t,r=(0,j.I0)(),a=(0,j.v9)((function(e){return e.order}),j.wU),o=a.orderShops,v=a.data,f=(0,j.v9)((function(e){return e.menu.activeMenu}),j.wU),x=f.data,m=(0,l.useState)(!1),Z=(0,i.Z)(m,2),y=Z[0],g=Z[1];function b(e){g(!0);var n=function(e){var n=e.map((function(e,n){return(0,O.Z)({},"shops[".concat(n,"]"),e.id)}));return Object.assign.apply(Object,[{}].concat((0,M.Z)(n)))}(e);V.Z.getShopDeliveries(n).then((function(e){return r((0,k.nc)({activeMenu:f,data:e.data}))})).finally((function(){return g(!1)}))}function N(e){if(!e)return[];for(var n=[],t=Y()(e.open_time,"HH:mm").hour(),r=Y()(e.close_time,"HH:mm").hour(),i=t+1;i<r;i++){var l={label:Y()(i,"HH").format("HH:mm"),value:Y()(i,"HH").format("HH:mm")};n.push(l)}return n}return(0,l.useEffect)((function(){if(null!==x&&void 0!==x&&x.length){if(v.deliveries.length)return void n.setFieldsValue({deliveries:(e=x,t=v.deliveries,e.map((function(e){var n=t.find((function(n){return n.shop_id===e.id}));return n?{shop_id:e.id,delivery:n.delivery,delivery_date:Y()(n.delivery_date),delivery_time:n.delivery_time,delivery_fee:n.delivery_fee}:{shop_id:e.id,delivery:"",delivery_date:"",delivery_time:"",delivery_fee:""}})))});n.setFieldsValue({deliveries:x.map((function(e){return{shop_id:e.id,delivery:"",delivery_date:"",delivery_time:"",delivery_fee:""}}))})}else n.setFieldsValue({deliveries:[]});var e,t}),[x]),(0,F.Z)((function(){o.length&&b(o)}),[o]),(0,C.jsxs)(p.Z,{title:t("stores"),children:[y&&(0,C.jsx)("div",{className:"loader",children:(0,C.jsx)(u.Z,{})}),(0,C.jsx)(s.Z.List,{name:"deliveries",children:function(e){return(0,C.jsx)("div",{children:e.length?e.map((function(e,n){var r,i,l,a;return(0,C.jsx)(p.Z,{title:"".concat(null===(r=x[n])||void 0===r||null===(i=r.translation)||void 0===i?void 0:i.title," ").concat(t("shop")),type:"inner",size:"small",children:(0,C.jsxs)(d.Z,{gutter:12,children:[(0,C.jsx)(c.Z,{span:24,children:(0,C.jsx)(s.Z.Item,{name:[n,"delivery"],label:t("delivery"),rules:[{required:!0,message:t("required.field")}],children:(0,C.jsx)(h.Z,{placeholder:t("select.delivery"),options:(a=null===(l=x[n])||void 0===l?void 0:l.deliveries,null!==a&&void 0!==a&&a.length?a.map((function(e){var n;return{label:null===(n=e.translation)||void 0===n?void 0:n.title,value:e.id}})):[]),labelInValue:!0})})}),(0,C.jsx)(c.Z,{span:24,children:(0,C.jsxs)(d.Z,{gutter:12,children:[(0,C.jsx)(c.Z,{span:12,children:(0,C.jsx)(s.Z.Item,{name:[n,"delivery_date"],label:t("delivery.date"),rules:[{required:!0,message:t("required.field")}],children:(0,C.jsx)(H.Z,{className:"w-100"})})}),(0,C.jsx)(c.Z,{span:12,children:(0,C.jsx)(s.Z.Item,{label:"".concat(t("delivery.time")," (").concat(t("up.to"),")"),name:[n,"delivery_time"],rules:[{required:!0,message:t("required.field")}],children:(0,C.jsx)(h.Z,{options:N(x[n])})})}),(0,C.jsx)(c.Z,{span:12,children:(0,C.jsx)(s.Z.Item,{label:t("delivery.fee"),name:[n,"delivery_fee"],hidden:!0,children:(0,C.jsx)(U.Z,{min:0,className:"w-100"})})})]})})]})},e.key)})):(0,C.jsx)(d.Z,{children:(0,C.jsx)(c.Z,{span:24,children:(0,C.jsx)(P.Z,{id:"nosell"})})})})}})]})},A=t(45705),B=t(11101),T=t(29955),$=t(11875),D=t(45464),W=t(82138),R=t(11829),L=t(43681),G=t(83371),Q=t(62412),X=t(85937),J=t(84695),K=t(78891),ee=t(8846),ne=t(84017),te=t(28939),re=t(77370),ie=t(91220);function le(e){var n,t,a,u,v,f=e.extrasModal,p=e.setExtrasModal,h=(0,l.useState)(f.stock),x=(0,i.Z)(h,2),m=x[0],Z=x[1],y=(0,l.useState)(f.quantity||f.min_qty),_=(0,i.Z)(y,2),b=_[0],k=_[1],N=(0,l.useState)([]),S=(0,i.Z)(N,2),I=S[0],q=S[1],O=(0,l.useState)([]),H=(0,i.Z)(O,2),U=H[0],V=H[1],F=(0,l.useState)(null),E=(0,i.Z)(F,2),Y=E[0],P=E[1],z=(0,l.useState)([]),B=(0,i.Z)(z,2),T=B[0],$=B[1],R=(0,j.v9)((function(e){return e.order.data}),j.wU).currency,L=s.Z.useForm(),Q=(0,i.Z)(L,1)[0],X=(0,j.I0)();(0,l.useEffect)((function(){null!==Y&&void 0!==Y&&Y.stock&&Z((0,r.Z)((0,r.Z)({},Y.stock),{},{extras:T}))}),[Y]),(0,l.useEffect)((function(){var e,n=(0,re.o)(f);q(n.extras),V(n.stock),P((0,re.y)("",n.extras,n.stock)),null===(e=(0,re.y)("",n.extras,n.stock).extras)||void 0===e||e.forEach((function(e){$((function(n){return[].concat((0,M.Z)(n),[e[0]])}))}))}),[f]);var le=function(e){var n,t=T.findIndex((function(n){return n.extra_group_id===e.extra_group_id})),r=T;t>-1&&(r=r.slice(0,t)),r.push(e);var i=r.map((function(e){return e.id})).join(","),l=(0,re.y)(i,I,U);P(l),null===(n=l.extras)||void 0===n||n.forEach((function(n){var t=T.findIndex((function(t){return n[0].extra_group_id!=e.extra_group_id?t.extra_group_id===n[0].extra_group_id:t.extra_group_id===e.extra_group_id}));if(n[0].level>=e.level){var i=n[0].extra_group_id!=e.extra_group_id?n[0]:e;-1==t?r.push(i):r[t]=i}})),$(r)},se=function(){p(!1)};return(0,C.jsx)(J.Z,{visible:!!f,title:null===(n=f.translation)||void 0===n?void 0:n.title,onCancel:se,footer:[(0,C.jsx)(o.Z,{type:"primary",onClick:function(){return Q.submit()},children:"Add"}),(0,C.jsx)(o.Z,{type:"default",onClick:se,children:"Cancel"})],children:(0,C.jsxs)(s.Z,{form:Q,layout:"vertical",onFinish:function(e){var n=(0,r.Z)((0,r.Z)({},f),{},{stock:m,quantity:b,id:m.id,img:(0,te.Z)(m)||f.img});n.quantity>m.quantity?w.Am.warning("You cannot order more than ".concat(m.quantity)):(X((0,g.x$)(n)),p(null))},initialValues:{stock:null===(t=f.stock)||void 0===t?void 0:t.id},children:[(0,C.jsxs)(d.Z,{gutter:24,children:[(0,C.jsx)(c.Z,{span:8,children:(0,C.jsx)(K.Z,{src:(0,D.Z)((0,te.Z)(m)||f.img),alt:null===(a=f.translation)||void 0===a?void 0:a.title,height:200,style:{objectFit:"contain"}})}),(0,C.jsx)(c.Z,{span:16,children:(0,C.jsxs)(G.Z,{title:null===(u=f.translation)||void 0===u?void 0:u.title,children:[(0,C.jsxs)(G.Z.Item,{label:"Price",span:3,children:[(0,C.jsx)("div",{className:null!==m&&void 0!==m&&m.discount?"strike":"",children:(0,ne.Z)(null===m||void 0===m?void 0:m.price,R.symbol)}),null!==m&&void 0!==m&&m.discount?(0,C.jsx)("div",{className:"ml-2 font-weight-bold",children:(0,ne.Z)(null===m||void 0===m?void 0:m.total_price,R.symbol)}):""]}),(0,C.jsx)(G.Z.Item,{label:"In stock",span:3,children:(0,ie.Z)(null===m||void 0===m?void 0:m.quantity,f.unit)}),(0,C.jsx)(G.Z.Item,{label:"Tax",span:3,children:(0,ne.Z)(null===m||void 0===m?void 0:m.tax,R.symbol)})]})})]}),null===Y||void 0===Y||null===(v=Y.extras)||void 0===v?void 0:v.map((function(e,n){return(0,C.jsx)("div",{className:"extra-group",children:(0,C.jsx)(A.Z,{className:"extras-select",children:e.map((function(e){return"color"===e.group.type?(0,C.jsx)("span",{className:"extras-color-wrapper ".concat(T.find((function(n){return n.id===e.id}))?"selected":""),onClick:function(){return le(e)},children:(0,C.jsx)("i",{className:"extras-color",style:{backgroundColor:e.value}})}):"text"===e.group.type?(0,C.jsx)("span",{className:"extras-text rounded ".concat(T.find((function(n){return n.id===e.id}))?"selected":""),onClick:function(){return le(e)},children:e.value}):(0,C.jsx)("span",{className:"extras-image rounded ".concat(T.find((function(n){return n.id===e.id}))?"selected":""),onClick:function(){return le(e)},children:(0,C.jsx)("img",{src:(0,D.Z)(e.value),alt:"extra"})})}))},"extra-group"+n)})})),(0,C.jsx)(d.Z,{gutter:12,className:"mt-3",children:(0,C.jsx)(c.Z,{span:24,children:(0,C.jsxs)(A.Z,{children:[(0,C.jsx)(o.Z,{type:"primary",icon:(0,C.jsx)(ee.Z,{}),onClick:function(){1!==b&&(b<=f.min_qty||k((function(e){return e-1})))}}),b,(0,C.jsx)(o.Z,{type:"primary",icon:(0,C.jsx)(W.Z,{}),onClick:function(){b!==(null===m||void 0===m?void 0:m.quantity)&&b!==f.max_qty&&k((function(e){return e+1}))}})]})})})]})})}var se=t(95882),ae=t(21448),oe=t(31109);function de(){var e,n,t,s,a=(0,_.$)().t,v=(0,j.I0)(),f=(0,N.s0)(),h=(0,j.v9)((function(e){return e.order}),j.wU),m=h.orderItems,Z=h.data,y=h.orderShops,b=h.total,w=h.coupons,S=(0,l.useState)(!1),I=(0,i.Z)(S,2),q=I[0],H=I[1],U=(0,l.useState)(null),V=(0,i.Z)(U,2),E=V[0],Y=V[1],P=(0,l.useState)(null),z=(0,i.Z)(P,2),B=z[0],T=z[1];(0,F.Z)((function(){v((0,se.MW)({perPage:12,currency_id:Z.currency.id}))}),[Z.currency]),(0,F.Z)((function(){m.length?function(){var e=function(e){var n=e.map((function(e,n){var t;return t={},(0,O.Z)(t,"products[".concat(n,"][id]"),e.id),(0,O.Z)(t,"products[".concat(n,"][quantity]"),e.quantity),t}));return Object.assign.apply(Object,[{}].concat((0,M.Z)(n)))}(m),n=(0,r.Z)({currency_id:Z.currency.id},e);H(!0),Q.Z.calculate(n).then((function(e){var n=e.data,t=n.products.map((function(e){return(0,r.Z)((0,r.Z)({},m.find((function(n){return n.id===e.id}))),e)}));v((0,g.rU)(t));var i={product_total:n.product_total,product_tax:n.product_tax,order_tax:n.order_tax,order_total:n.order_total};v((0,g.rU)(i))})).finally((function(){return H(!1)}))}():v((0,g.pX)())}),[m,Z.currency]);return(0,C.jsxs)("div",{className:"order-items",children:[q&&(0,C.jsx)("div",{className:"loader",children:(0,C.jsx)(u.Z,{})}),(0,C.jsxs)(d.Z,{gutter:24,className:"mt-4",children:[(0,C.jsx)(c.Z,{span:24,children:y.map((function(e){var n,t,r,i,l,s,d;return(0,C.jsxs)(p.Z,{className:"shop-card",children:[e.products.map((function(e){var n,t;return(0,C.jsxs)(p.Z,{className:"position-relative",children:[(0,C.jsx)(R.Z,{className:"close-order",onClick:function(){return v((0,g.Sg)(e))}}),(0,C.jsxs)(A.Z,{className:"mr-3",children:[(0,C.jsx)("div",{className:"order-item-img",children:(0,C.jsx)("img",{src:(0,D.Z)(e.img),alt:null===(n=e.translation)||void 0===n?void 0:n.title})}),(0,C.jsx)($.Z,{title:(0,C.jsxs)("div",{children:[(0,C.jsx)("div",{className:"cursor-pointer white-space-wrap",onClick:function(){return function(e){v((0,k.bL)({id:"product-".concat(e.uuid),url:"seller/product/".concat(e.uuid),name:"Product edit"})),f("/seller/product/".concat(e.uuid))}(e)},children:null===(t=e.translation)||void 0===t?void 0:t.title}),(0,C.jsx)("div",{className:"product-price",children:(0,ne.Z)(e.price_without_tax,Z.currency.symbol)})]}),description:(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)("div",{children:["Quantity: ",e.quantity]}),(0,C.jsx)(A.Z,{className:"mt-2",children:e.stock.extras.map((function(e){return"color"===e.group.type?(0,C.jsx)("span",{className:"extras-color",style:{backgroundColor:e.value}}):"text"===e.group.type?(0,C.jsx)("span",{className:"extras-text rounded",children:e.value}):(0,C.jsx)("img",{src:(0,D.Z)(e.value),alt:"extra",className:"extras-image rounded"})}))})]})})]})]},e.id)})),(0,C.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[(0,C.jsxs)(A.Z,{children:[(0,C.jsx)("img",{src:(0,D.Z)(e.logo_img),alt:"shop logo",width:40,className:"rounded-circle"}),(0,C.jsx)("div",{children:null===(n=e.translation)||void 0===n?void 0:n.title})]}),(0,C.jsxs)(A.Z,{children:[(0,C.jsx)(x.Z,{placeholder:a("coupon"),addonAfter:null!==(t=w.find((function(n){return n.shop_id===e.id})))&&void 0!==t&&t.verified?(0,C.jsx)(L.Z,{style:{color:"#18a695"}}):null,defaultValue:null===(r=w.find((function(n){return n.shop_id===e.id})))||void 0===r?void 0:r.coupon,onBlur:function(n){var t;return v((0,g.cp)({coupon:n.target.value,user_id:null===(t=Z.user)||void 0===t?void 0:t.value,shop_id:e.id,verified:!1}))}}),(0,C.jsx)(o.Z,{onClick:function(){return function(e){var n=w.find((function(n){return n.shop_id===e}));n&&(T(e),ae.Z.checkCoupon(n).then((function(n){return v((0,g.NS)({shop_id:e,price:n.data.price,verified:!0}))})).catch((function(){return v((0,g.NS)({shop_id:e,price:0,verified:!1}))})).finally((function(){return T(null)})))}(e.id)},loading:B===e.id,children:a("check.coupon")})]}),(0,C.jsxs)("div",{className:"mt-2 text-right shop-total",children:[(0,C.jsxs)(A.Z,{children:[(0,C.jsx)("p",{className:"font-weight-bold",children:"Product tax:"}),(0,C.jsx)("p",{children:(0,ne.Z)((0,X.Z)(e).productTax,null===(i=Z.currency)||void 0===i?void 0:i.symbol)})]}),(0,C.jsx)("div",{}),(0,C.jsxs)(A.Z,{children:[(0,C.jsx)("p",{className:"font-weight-bold",children:"Shop tax:"}),(0,C.jsx)("p",{children:(0,ne.Z)((0,X.Z)(e).shopTax,null===(l=Z.currency)||void 0===l?void 0:l.symbol)})]}),(0,C.jsx)("div",{}),(0,C.jsxs)(A.Z,{children:[(0,C.jsx)("p",{className:"font-weight-bold",children:"Delivery fee:"}),(0,C.jsx)("p",{children:(0,ne.Z)((0,X.Z)(e,Z.deliveries).deliveryFee,null===(s=Z.currency)||void 0===s?void 0:s.symbol)})]}),(0,C.jsx)("div",{}),(0,C.jsxs)(A.Z,{children:[(0,C.jsx)("p",{className:"font-weight-bold",children:"Total:"}),(0,C.jsx)("p",{children:(0,ne.Z)((0,X.Z)(e,Z.deliveries).total,null===(d=Z.currency)||void 0===d?void 0:d.symbol)})]})]})]})]},e.uuid)}))}),(0,C.jsx)(c.Z,{span:24,children:(0,C.jsx)("div",{className:"order-info",children:(0,C.jsxs)(G.Z,{bordered:!0,className:"order-info-container",children:[(0,C.jsx)(G.Z.Item,{label:"Product total",children:(0,ne.Z)(b.product_total,null===(e=Z.currency)||void 0===e?void 0:e.symbol)}),(0,C.jsx)(G.Z.Item,{label:"Product tax",children:(0,ne.Z)(b.product_tax,null===(n=Z.currency)||void 0===n?void 0:n.symbol)}),(0,C.jsx)(G.Z.Item,{label:"Shop tax",children:(0,ne.Z)(b.order_tax,null===(t=Z.currency)||void 0===t?void 0:t.symbol)}),(0,C.jsx)(G.Z.Item,{label:"Order total",labelStyle:{fontWeight:700},children:(0,C.jsx)("span",{style:{fontWeight:700},children:(0,ne.Z)((0,oe.G)(Z.deliveries,b.order_total),null===(s=Z.currency)||void 0===s?void 0:s.symbol)})})]})})})]}),E&&(0,C.jsx)(le,{extrasModal:E,setExtrasModal:Y})]})}var ce=t(41481),ue=function(e){var n=e.form,t=(0,l.useState)(null),r=(0,i.Z)(t,2),s=r[0],a=r[1],o=(0,l.useState)(null),h=(0,i.Z)(o,2),x=h[0],m=h[1],Z=(0,l.useState)(null),g=(0,i.Z)(Z,2),_=g[0],b=g[1],k=(0,l.useState)(null),N=(0,i.Z)(k,2),S=N[0],I=N[1],q=(0,j.I0)(),M=(0,j.v9)((function(e){return e.order}),j.wU).data,O=(0,j.v9)((function(e){return e.product}),j.wU),H=O.products,U=O.loading;function V(){return V=(0,f.Z)((0,v.Z)().mark((function e(n){return(0,v.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",B.Z.search(n).then((function(e){return e.data.map((function(e){return{label:e.title,value:e.id}}))})));case 1:case"end":return e.stop()}}),e)}))),V.apply(this,arguments)}function E(){return E=(0,f.Z)((0,v.Z)().mark((function e(n){var t;return(0,v.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={search:n},e.abrupt("return",T.Z.search(t).then((function(e){return e.data.map((function(e){var n;return{label:null===(n=e.translation)||void 0===n?void 0:n.title,value:e.id}}))})));case 2:case"end":return e.stop()}}),e)}))),E.apply(this,arguments)}(0,F.Z)((function(){var e={perPage:10,page:1,brand_id:null===s||void 0===s?void 0:s.value,category_id:null===x||void 0===x?void 0:x.value,search:_};q((0,se.MW)(e))}),[s,x,_]);return(0,C.jsxs)(p.Z,{title:"Order details",extra:(0,C.jsxs)(A.Z,{children:[(0,C.jsx)(y.h,{placeholder:"Select category",fetchOptions:function(e){return E.apply(this,arguments)},style:{minWidth:150},onChange:function(e){return m(e)},value:x}),(0,C.jsx)(y.h,{placeholder:"Select brand",fetchOptions:function(e){return V.apply(this,arguments)},style:{minWidth:150},onChange:function(e){return a(e)},value:s})]}),children:[(0,C.jsx)("div",{className:"d-flex justify-content-end mb-4",children:(0,C.jsx)(ce.Z,{placeholder:"Search...",handleChange:b})}),(0,C.jsxs)("div",{className:"products-row order-items",children:[H.length?H.map((function(e){var n,t,r;return(0,C.jsxs)(p.Z,{className:"products-col",cover:(0,C.jsx)("img",{alt:null===(n=e.translation)||void 0===n?void 0:n.title,src:(0,D.Z)(e.img)}),onClick:function(){return function(e){M.currency?I(e):w.Am.warning("Please, select currency")}(e)},children:[(0,C.jsx)($.Z,{title:null===(t=e.translation)||void 0===t?void 0:t.title,description:null===(r=e.stock)||void 0===r?void 0:r.price}),(0,C.jsx)("div",{className:"preview",children:(0,C.jsx)(W.Z,{})})]},e.id)})):(0,C.jsx)(d.Z,{children:(0,C.jsx)(c.Z,{span:24,children:(0,C.jsx)(P.Z,{id:"nosell"})})}),U&&(0,C.jsx)("div",{className:"loader",children:(0,C.jsx)(u.Z,{})})]}),S&&(0,C.jsx)(le,{extrasModal:S,setExtrasModal:I}),(0,C.jsx)(de,{form:n})]})},ve=t(78508),fe=t(2337),pe=t(31774),he=function(e){var n,t,s,a,d,c,v,f,h,x,m,Z,y,j,g,b,k=e.orderId,N=e.handleClose,w=(0,_.$)().t,S=(0,l.useState)(!1),I=(0,i.Z)(S,2),q=I[0],M=I[1],O=(0,l.useState)(null),H=(0,i.Z)(O,2),U=H[0],V=H[1],F=(0,l.useState)([]),E=(0,i.Z)(F,2),P=E[0],z=E[1];return(0,l.useEffect)((function(){k&&(M(!0),Q.Z.getById(k).then((function(e){V(e.data);var n=e.data.details.map((function(e){return e.order_stocks.map((function(n){return(0,r.Z)((0,r.Z)((0,r.Z)({},n.stock),n),{},{shop_id:e.shop_id})}))})).flat();z(n)})).finally((function(){return M(!1)})))}),[k]),(0,C.jsx)(J.Z,{visible:!!k,title:"Order created successfully",onOk:N,onCancel:N,footer:[(0,C.jsx)(o.Z,{onClick:N,children:w("back")}),(0,C.jsxs)(o.Z,{type:"primary",onClick:function(){return window.print()},children:[(0,C.jsx)(pe.Z,{type:"printer"}),(0,C.jsx)("span",{className:"ml-1",children:w("print")})]})],style:{minWidth:"80vw"},children:(0,C.jsx)("div",{className:"py-4",children:q?(0,C.jsx)("div",{className:"w-100 text-center",children:(0,C.jsx)(u.Z,{})}):(0,C.jsxs)(p.Z,{children:[(0,C.jsxs)("div",{className:"d-flex justify-content-between mt-3",children:[(0,C.jsxs)("div",{children:[(0,C.jsxs)("h2",{className:"mb-1 font-weight-semibold",children:[w("invoice")," #",null===U||void 0===U?void 0:U.id]}),(0,C.jsx)("p",{children:Y()(null===U||void 0===U?void 0:U.created_at).format("DD/M/YYYY")}),(0,C.jsx)("address",{children:(0,C.jsxs)("p",{children:[(0,C.jsxs)("span",{children:[w("delivery.type"),":"," ",null===U||void 0===U||null===(n=U.details[0])||void 0===n||null===(t=n.delivery_type)||void 0===t||null===(s=t.translation)||void 0===s?void 0:s.title]}),(0,C.jsx)("br",{}),(0,C.jsxs)("span",{children:[w("delivery.address"),":"," ",null===U||void 0===U||null===(a=U.details[0])||void 0===a||null===(d=a.delivery_address)||void 0===d?void 0:d.address]}),(0,C.jsx)("br",{}),(0,C.jsxs)("span",{children:[w("delivery.date"),": ",null===U||void 0===U||null===(c=U.details[0])||void 0===c?void 0:c.delivery_date," ",null===U||void 0===U||null===(v=U.details[0])||void 0===v?void 0:v.delivery_time]}),(0,C.jsx)("br",{}),(0,C.jsxs)("span",{children:[w("note"),": ",null===U||void 0===U?void 0:U.note]})]})})]}),(0,C.jsx)("address",{children:(0,C.jsxs)("p",{children:[(0,C.jsxs)("span",{className:"font-weight-semibold text-dark font-size-md",children:[null===U||void 0===U||null===(f=U.user)||void 0===f?void 0:f.firstname," ",null===U||void 0===U||null===(h=U.user)||void 0===h?void 0:h.lastname]}),(0,C.jsx)("br",{}),(0,C.jsxs)("span",{children:[w("phone"),": ",null===U||void 0===U||null===(x=U.user)||void 0===x?void 0:x.phone]}),(0,C.jsx)("br",{}),(0,C.jsxs)("span",{children:[w("email"),": ",null===U||void 0===U||null===(m=U.user)||void 0===m?void 0:m.email]})]})})]}),(0,C.jsxs)("div",{className:"mt-4",children:[(0,C.jsxs)(ve.Z,{scroll:{x:!0},dataSource:P,pagination:!1,className:"mb-5",children:[(0,C.jsx)(fe.Z,{title:"No.",dataIndex:"id"},"id"),(0,C.jsx)(fe.Z,{title:"Product",dataIndex:"product",render:function(e){var n;return null===e||void 0===e||null===(n=e.translation)||void 0===n?void 0:n.title}},"product"),(0,C.jsx)(fe.Z,{title:w("quantity"),dataIndex:"quantity"},"quantity"),(0,C.jsx)(fe.Z,{title:w("discount"),dataIndex:"discount",render:function(e){var n;return(0,ne.Z)(e,null===U||void 0===U||null===(n=U.currency)||void 0===n?void 0:n.symbol)}},"discount"),(0,C.jsx)(fe.Z,{title:w("price"),dataIndex:"total_price",render:function(e){var n;return(0,ne.Z)(e,null===U||void 0===U||null===(n=U.currency)||void 0===n?void 0:n.symbol)}},"total_price")]}),(0,C.jsx)("div",{className:"d-flex justify-content-end",children:(0,C.jsxs)("div",{className:"text-right ",children:[(0,C.jsxs)("div",{className:"border-bottom",children:[(0,C.jsxs)("p",{className:"mb-2",children:[(0,C.jsxs)("span",{children:[w("sub-total.amount"),": "]}),(0,ne.Z)(null===U||void 0===U?void 0:U.details.reduce((function(e,n){return e+n.price}),0),null===U||void 0===U||null===(Z=U.currency)||void 0===Z?void 0:Z.symbol)]}),(0,C.jsxs)("p",{children:[w("delivery.price"),":"," ",(0,ne.Z)(null===U||void 0===U?void 0:U.details.reduce((function(e,n){return e+n.delivery_fee}),0),null===U||void 0===U||null===(y=U.currency)||void 0===y?void 0:y.symbol)]}),(0,C.jsxs)("p",{children:[w("tax"),":"," ",(0,ne.Z)(null===U||void 0===U?void 0:U.details.reduce((function(e,n){return e+n.tax}),0),null===U||void 0===U||null===(j=U.currency)||void 0===j?void 0:j.symbol)]}),(0,C.jsxs)("p",{children:[w("coupon"),":"," ",(0,ne.Z)(null===U||void 0===U?void 0:U.details.reduce((function(e,n){var t;return e+(null===(t=n.coupon)||void 0===t?void 0:t.price)}),0),null===U||void 0===U||null===(g=U.currency)||void 0===g?void 0:g.symbol)]})]}),(0,C.jsxs)("h2",{className:"font-weight-semibold mt-3",children:[(0,C.jsxs)("span",{className:"mr-1",children:[w("grand.total"),": "]}),(0,ne.Z)(null===U||void 0===U?void 0:U.price,null===U||void 0===U||null===(b=U.currency)||void 0===b?void 0:b.symbol)]})]})})]})]})})})},xe=t(7370),me=t(22054),Ze=t(1003);function ye(){var e=(0,_.$)().t,n=s.Z.useForm(),t=(0,i.Z)(n,1)[0],v=(0,j.I0)(),f=(0,N.UO)().id,p=(0,N.s0)(),h=(0,l.useState)(!1),x=(0,i.Z)(h,2),m=x[0],Z=x[1],y=(0,l.useState)(null),b=(0,i.Z)(y,2),w=b[0],S=b[1],I=(0,l.useState)(!1),M=(0,i.Z)(I,2),O=M[0],H=M[1],U=(0,j.v9)((function(e){return e.order}),j.wU),V=U.orderShops,F=U.data,E=U.total,P=U.coupons,A=(0,j.v9)((function(e){return e.currency}),j.wU).currencies,B=(0,j.v9)((function(e){return e.menu}),j.wU).activeMenu;function T(e){return{label:e.firstname+" "+(e.lastname||""),value:e.id}}function $(e){var n;return e?{label:null===(n=e.translation)||void 0===n?void 0:n.title,value:e.id}:null}(0,l.useEffect)((function(){return function(){var e=t.getFieldsValue(!0),n=(0,r.Z)((0,r.Z)({},e),{},{deliveries:e.deliveries.map((function(e){return(0,r.Z)((0,r.Z)({},e),{},{delivery_date:e.delivery_date?Y()(e.delivery_date).format("YYYY-MM-DD"):void 0})}))});v((0,g.oM)(n))}}),[]),(0,l.useEffect)((function(){B.refetch&&(H(!0),xe.Z.getById(f).then((function(e){var n,i,l=e.data;v((0,g.dY)(l.currency)),v((0,g.oM)({deliveries:(i=l.details,i.map((function(e){return{delivery:{label:e.delivery_type.translation.title,value:e.delivery_type.id},delivery_date:e.delivery_date,delivery_time:e.delivery_time,shop_id:e.delivery_type.shop_id,delivery_fee:e.delivery_fee}})))}));var s,a=l.details.flatMap((function(e){return e.order_stocks.map((function(e){return(0,r.Z)((0,r.Z)((0,r.Z)({},e.stock.product),e.stock),{},{quantity:e.quantity,stock:e.stock,img:(0,te.Z)(e.stock)||e.stock.product.img,product:void 0})}))}));v((0,g.B4)(a)),t.setFieldsValue({user:T(l.user),currency_id:l.currency.id,address:(s=l.details[0].delivery_address,s?{label:s.address,value:s.id}:null),payment_type:$(null===(n=l.details[0].transaction)||void 0===n?void 0:n.payment_system),note:l.note})})).finally((function(){H(!1),v((0,k.A_)(B))})))}),[B.refetch]);var D=function(e){var n={payment_sys_id:e.payment_type};Z(!0),xe.Z.update(f,e).then((function(e){return function(e,n){Ze.Z.create(e,n).then((function(e){S(e.data.id),v((0,g.bn)())})).finally((function(){return Z(!1)}))}(e.data.id,n)})).catch((function(){return Z(!1)}))};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(a.Z,{title:e("edit.order"),extra:(0,C.jsx)(o.Z,{type:"primary",loading:m,onClick:function(){return t.submit()},children:e("save")})}),(0,C.jsxs)(s.Z,{name:"order-form",form:t,layout:"vertical",onFinish:function(e){var n,t,i=e.deliveries.map((function(n){return{delivery_type_id:n.delivery.value,shop_id:n.shop_id,delivery_address_id:e.address.value,delivery_date:Y()(n.delivery_date).format("YYYY-MM-DD"),delivery_time:n.delivery_time,delivery_fee:B.data.find((function(e){return e.id===n.shop_id})).deliveries.find((function(e){return e.id===n.delivery.value})).price}})),l=i.reduce((function(e,n){return e+n.delivery_fee}),0),s=V.map((function(e){var n;return(0,r.Z)((0,r.Z)({},i.find((function(n){return n.shop_id===e.id}))),{},{tax:(0,X.Z)(e).shopTax,coupon:null===(n=P.find((function(n){return n.shop_id===e.id})))||void 0===n?void 0:n.coupon,products:e.products.map((function(e){return{id:e.id,price:e.price,qty:e.qty,tax:e.tax,discount:e.discount,total_price:e.total_price}}))})})),a=l+E.order_total,o={shops:s,user_id:null===(n=e.user)||void 0===n?void 0:n.value,total:a,currency_id:e.currency_id,rate:null===(t=A.find((function(n){return n.id===e.currency_id})))||void 0===t?void 0:t.rate,payment_type:e.payment_type.value,note:e.note};D(o)},className:"order-add",initialValues:{user:F.user||null,address:F.address||null,currency_id:F.currency.id,payment_type:F.payment_type||null,deliveries:F.deliveries.map((function(e){return(0,r.Z)((0,r.Z)({},e),{},{delivery_date:Y()(e.delivery_date)})})),note:F.note},children:[(0,C.jsxs)(d.Z,{gutter:24,hidden:O,children:[(0,C.jsx)(c.Z,{span:16,children:(0,C.jsx)(ue,{form:t})}),(0,C.jsxs)(c.Z,{span:8,children:[(0,C.jsx)(q,{form:t}),(0,C.jsx)(z,{form:t})]})]}),O&&(0,C.jsx)("div",{className:"loader",children:(0,C.jsx)(u.Z,{})})]}),w?(0,C.jsx)(he,{orderId:w,handleClose:function(){S(null);var e="orders";v((0,k.ph)((0,r.Z)((0,r.Z)({},B),{},{nextUrl:e}))),p("/".concat(e)),v((0,me.AU)())}}):""]})}},8846:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(1413),i=t(47313),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"minus",theme:"outlined"},s=t(17469),a=function(e,n){return i.createElement(s.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:l}))};a.displayName="MinusOutlined";var o=i.forwardRef(a)},55768:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(1413),i=t(47313),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"},s=t(17469),a=function(e,n){return i.createElement(s.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:l}))};a.displayName="PlusCircleOutlined";var o=i.forwardRef(a)},31774:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(1413),i=t(47313),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M820 436h-40c-4.4 0-8 3.6-8 8v40c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-40c0-4.4-3.6-8-8-8zm32-104H732V120c0-4.4-3.6-8-8-8H300c-4.4 0-8 3.6-8 8v212H172c-44.2 0-80 35.8-80 80v328c0 17.7 14.3 32 32 32h168v132c0 4.4 3.6 8 8 8h424c4.4 0 8-3.6 8-8V772h168c17.7 0 32-14.3 32-32V412c0-44.2-35.8-80-80-80zM360 180h304v152H360V180zm304 664H360V568h304v276zm200-140H732V500H292v204H160V412c0-6.6 5.4-12 12-12h680c6.6 0 12 5.4 12 12v292z"}}]},name:"printer",theme:"outlined"},s=t(17469),a=function(e,n){return i.createElement(s.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:l}))};a.displayName="PrinterOutlined";var o=i.forwardRef(a)},2337:function(e,n){n.Z=void 0;var t=function(e){return null};n.Z=t}}]);