"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[4634],{94634:function(e,a,n){n.r(a);var t=n(1413),i=n(29439),c=n(47313),l=n(58467),r=n(34491),s=n(18197),d=n(77181),o=n(68197),u=n(59624),h=n(66672),m=n(86345),f=n(59491),v=n(2717),Z=n(90954),b=n(11216),p=n(73253),g=n(24511),x=n(5764),C=n(46417);a.default=function(){var e,a,n=(0,g.$)().t,y=(0,v.v9)((function(e){return e.menu}),v.wU).activeMenu,j=(0,v.I0)(),k=s.Z.useForm(),w=(0,i.Z)(k,1)[0],N=(0,l.s0)(),E=(0,c.useState)(null!==(e=y.data)&&void 0!==e&&e.image?[null===(a=y.data)||void 0===a?void 0:a.image]:[]),I=(0,i.Z)(E,2),O=I[0],S=I[1],_=(0,c.useState)(!1),P=(0,i.Z)(_,2),T=P[0],F=P[1];(0,c.useEffect)((function(){return function(){var e=w.getFieldsValue(!0);j((0,Z.nc)({activeMenu:y,data:e}))}}),[]);return(0,C.jsx)(d.Z,{title:n("add.brand"),children:(0,C.jsxs)(s.Z,{name:"basic",layout:"vertical",onFinish:function(e){var a,i=(0,t.Z)((0,t.Z)({},e),{},{active:e.active?1:0,"images[0]":null===(a=O[0])||void 0===a?void 0:a.name});F(!0);var c="catalog/brands";b.Z.create(i).then((function(){r.Am.success(n("successfully.created")),j((0,Z.ph)((0,t.Z)((0,t.Z)({},y),{},{nextUrl:c}))),N("/".concat(c)),j((0,p.S0)({}))})).finally((function(){return F(!1)}))},form:w,initialValues:(0,t.Z)({active:!0},y.data),children:[(0,C.jsxs)(o.Z,{gutter:12,children:[(0,C.jsx)(u.Z,{span:12,children:(0,C.jsx)(s.Z.Item,{label:n("title"),name:"title",rules:[{required:!0,message:n("required")}],children:(0,C.jsx)(h.Z,{})})}),(0,C.jsx)(u.Z,{span:6,children:(0,C.jsx)(s.Z.Item,{label:n("image"),children:(0,C.jsx)(x.Z,{type:"brands",imageList:O,setImageList:S,form:w,multiple:!1})})}),(0,C.jsx)(u.Z,{span:6,children:(0,C.jsx)("div",{className:"col-md-12 col-sm-6",children:(0,C.jsx)(s.Z.Item,{label:n("active"),name:"active",valuePropName:"checked",children:(0,C.jsx)(m.Z,{})})})})]}),(0,C.jsx)(f.Z,{type:"primary",htmlType:"submit",loading:T,children:n("submit")})]})})}},86345:function(e,a,n){n.d(a,{Z:function(){return x}});var t=n(87462),i=n(4942),c=n(47313),l=n(29439),r=n(45987),s=n(46123),d=n.n(s),o=n(10288),u=n(49242),h=c.forwardRef((function(e,a){var n,t=e.prefixCls,s=void 0===t?"rc-switch":t,h=e.className,m=e.checked,f=e.defaultChecked,v=e.disabled,Z=e.loadingIcon,b=e.checkedChildren,p=e.unCheckedChildren,g=e.onClick,x=e.onChange,C=e.onKeyDown,y=(0,r.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),j=(0,o.Z)(!1,{value:m,defaultValue:f}),k=(0,l.Z)(j,2),w=k[0],N=k[1];function E(e,a){var n=w;return v||(N(n=e),null===x||void 0===x||x(n,a)),n}var I=d()(s,h,(n={},(0,i.Z)(n,"".concat(s,"-checked"),w),(0,i.Z)(n,"".concat(s,"-disabled"),v),n));return c.createElement("button",Object.assign({},y,{type:"button",role:"switch","aria-checked":w,disabled:v,className:I,ref:a,onKeyDown:function(e){e.which===u.Z.LEFT?E(!1,e):e.which===u.Z.RIGHT&&E(!0,e),null===C||void 0===C||C(e)},onClick:function(e){var a=E(!w,e);null===g||void 0===g||g(a,e)}}),Z,c.createElement("span",{className:"".concat(s,"-inner")},w?b:p))}));h.displayName="Switch";var m=h,f=n(82508),v=n(46479),Z=n(91964),b=n(21631),p=function(e,a){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(e);i<t.length;i++)a.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(n[t[i]]=e[t[i]])}return n},g=c.forwardRef((function(e,a){var n,l=e.prefixCls,r=e.size,s=e.loading,o=e.className,u=void 0===o?"":o,h=e.disabled,g=p(e,["prefixCls","size","loading","className","disabled"]),x=c.useContext(Z.E_),C=x.getPrefixCls,y=x.direction,j=c.useContext(b.Z),k=C("switch",l),w=c.createElement("div",{className:"".concat(k,"-handle")},s&&c.createElement(f.Z,{className:"".concat(k,"-loading-icon")})),N=d()((n={},(0,i.Z)(n,"".concat(k,"-small"),"small"===(r||j)),(0,i.Z)(n,"".concat(k,"-loading"),s),(0,i.Z)(n,"".concat(k,"-rtl"),"rtl"===y),n),u);return c.createElement(v.Z,{insertExtraNode:!0},c.createElement(m,(0,t.Z)({},g,{prefixCls:k,className:N,disabled:h||s,ref:a,loadingIcon:w})))}));g.__ANT_SWITCH=!0,g.displayName="Switch";var x=g}}]);