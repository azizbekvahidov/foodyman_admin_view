"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[4462],{52008:function(e,n,a){a(47313);n.Z=a.p+"static/media/paystack.6d6a77c8d6bfc75061ec651e5c2e74eb.svg"},24462:function(e,n,a){a.r(n),a.d(n,{default:function(){return E}});var t=a(74165),r=a(15861),l=a(1413),s=a(29439),i=a(47313),c=a(18197),d=a(77181),o=a(68197),u=a(59624),h=a(74294),m=a(72652),f=a(66672),p=a(86345),Z=a(59491),x=a(24511),b=a(90954),v=a(2717),j=a(42111),y=a(78520),g=a(34491),C=a(58467),k=a(52008),w=a(26672),N=a(92709),I=a(46417);function E(){var e=(0,x.$)().t,n=c.Z.useForm(),a=(0,s.Z)(n,1)[0],E=(0,i.useState)(!1),S=(0,s.Z)(E,2),_=S[0],q=S[1],O=(0,i.useState)(!1),P=(0,s.Z)(O,2),z=P[0],F=P[1],T=(0,i.useState)([]),D=(0,s.Z)(T,2),K=D[0],R=D[1],U=(0,i.useState)(null),W=(0,s.Z)(U,2),A=W[0],H=W[1],V=(0,v.v9)((function(e){return e.menu}),v.wU).activeMenu,B=(0,v.I0)(),G=(0,C.s0)();function L(){return(L=(0,r.Z)((0,t.Z)().mark((function e(){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F(!0),e.abrupt("return",y.Z.allPayment().then((function(e){var n=e.data.map((function(e){return{label:e.tag[0].toUpperCase()+e.tag.substring(1),value:e.id,key:e.id}}));R(n)})).finally((function(){return F(!1)})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(0,i.useEffect)((function(){!function(){L.apply(this,arguments)}()}),[]);return(0,I.jsx)(d.Z,{title:e("add.payment"),className:"h-100",children:(0,I.jsxs)(c.Z,{layout:"vertical",name:"user-address",form:a,onFinish:function(n){q(!0),y.Z.create(n).then((function(){var n="seller/payments";g.Am.success(e("successfully.created")),B((0,b.ph)((0,l.Z)((0,l.Z)({},V),{},{nextUrl:n}))),G("/".concat(n)),B((0,j.BN)()),B((0,b.xo)(V))})).catch((function(e){return console.error(e)})).finally((function(){return q(!1)}))},initialValues:{status:!0},children:[(0,I.jsxs)(o.Z,{gutter:12,children:[(0,I.jsx)(u.Z,{span:"Cash"===(null===A||void 0===A?void 0:A.label)||"Wallet"===(null===A||void 0===A?void 0:A.label)?12:24,children:(0,I.jsx)(c.Z.Item,{label:e("payment"),name:"payment_id",rules:[{required:!0,message:e("required")}],children:(0,I.jsx)(h.Z,{notFoundContent:z?(0,I.jsx)(m.Z,{size:"small"}):"no results",allowClear:!0,options:K,onSelect:function(e){return H(K.find((function(n){return n.value===e})))}})})}),"Cash"===(null===A||void 0===A?void 0:A.label)||"Wallet"===(null===A||void 0===A?void 0:A.label)?"":(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(u.Z,{span:24,offset:10,children:(0,I.jsx)(I.Fragment,{children:function(e){switch(e){case"Paypal":return(0,I.jsx)(w.kD0,{size:80});case"Stripe":return(0,I.jsx)(N.K6C,{size:80});case"Razorpay":return(0,I.jsx)(N.r98,{size:80});case"Paystack":return(0,I.jsx)("img",{src:k.Z,alt:"img",width:"80",height:"80"})}}(null===A||void 0===A?void 0:A.label)})}),(0,I.jsx)(u.Z,{span:12,children:(0,I.jsx)(c.Z.Item,{label:e("client.id"),name:"client_id",rules:[{required:!0,message:e("required")}],children:(0,I.jsx)(f.Z,{})})}),(0,I.jsx)(u.Z,{span:12,children:(0,I.jsx)(c.Z.Item,{label:e("secret.id"),name:"secret_id",rules:[{required:!0,message:e("required")}],children:(0,I.jsx)(f.Z,{})})}),"Paystack"===(null===A||void 0===A?void 0:A.label)?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(u.Z,{span:12,children:(0,I.jsx)(c.Z.Item,{label:e("payment.id"),name:"payment_key",rules:[{required:!0,message:e("required")}],children:(0,I.jsx)(f.Z,{})})}),(0,I.jsx)(u.Z,{span:12,children:(0,I.jsx)(c.Z.Item,{label:e("merchant.email"),name:"merchant_email",rules:[{required:!0,message:e("required")}],children:(0,I.jsx)(f.Z,{})})})]}):""]}),(0,I.jsx)(u.Z,{span:12,children:(0,I.jsx)(c.Z.Item,{label:e("status"),name:"status",valuePropName:"checked",children:(0,I.jsx)(p.Z,{})})})]}),(0,I.jsx)("div",{className:"flex-grow-1 d-flex flex-column justify-content-end",children:(0,I.jsx)("div",{className:"pb-5",children:(0,I.jsx)(Z.Z,{type:"primary",htmlType:"submit",loading:_,disabled:_,children:e("submit")})})})]})})}},86345:function(e,n,a){a.d(n,{Z:function(){return j}});var t=a(87462),r=a(4942),l=a(47313),s=a(29439),i=a(45987),c=a(46123),d=a.n(c),o=a(10288),u=a(49242),h=l.forwardRef((function(e,n){var a,t=e.prefixCls,c=void 0===t?"rc-switch":t,h=e.className,m=e.checked,f=e.defaultChecked,p=e.disabled,Z=e.loadingIcon,x=e.checkedChildren,b=e.unCheckedChildren,v=e.onClick,j=e.onChange,y=e.onKeyDown,g=(0,i.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),C=(0,o.Z)(!1,{value:m,defaultValue:f}),k=(0,s.Z)(C,2),w=k[0],N=k[1];function I(e,n){var a=w;return p||(N(a=e),null===j||void 0===j||j(a,n)),a}var E=d()(c,h,(a={},(0,r.Z)(a,"".concat(c,"-checked"),w),(0,r.Z)(a,"".concat(c,"-disabled"),p),a));return l.createElement("button",Object.assign({},g,{type:"button",role:"switch","aria-checked":w,disabled:p,className:E,ref:n,onKeyDown:function(e){e.which===u.Z.LEFT?I(!1,e):e.which===u.Z.RIGHT&&I(!0,e),null===y||void 0===y||y(e)},onClick:function(e){var n=I(!w,e);null===v||void 0===v||v(n,e)}}),Z,l.createElement("span",{className:"".concat(c,"-inner")},w?x:b))}));h.displayName="Switch";var m=h,f=a(82508),p=a(46479),Z=a(91964),x=a(21631),b=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]])}return a},v=l.forwardRef((function(e,n){var a,s=e.prefixCls,i=e.size,c=e.loading,o=e.className,u=void 0===o?"":o,h=e.disabled,v=b(e,["prefixCls","size","loading","className","disabled"]),j=l.useContext(Z.E_),y=j.getPrefixCls,g=j.direction,C=l.useContext(x.Z),k=y("switch",s),w=l.createElement("div",{className:"".concat(k,"-handle")},c&&l.createElement(f.Z,{className:"".concat(k,"-loading-icon")})),N=d()((a={},(0,r.Z)(a,"".concat(k,"-small"),"small"===(i||C)),(0,r.Z)(a,"".concat(k,"-loading"),c),(0,r.Z)(a,"".concat(k,"-rtl"),"rtl"===g),a),u);return l.createElement(p.Z,{insertExtraNode:!0},l.createElement(m,(0,t.Z)({},v,{prefixCls:k,className:N,disabled:h||c,ref:n,loadingIcon:w})))}));v.__ANT_SWITCH=!0,v.displayName="Switch";var j=v}}]);