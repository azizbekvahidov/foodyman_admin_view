"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[5600],{89802:function(e,n,t){t.d(n,{q:function(){return d}});var r=t(1413),a=t(29439),i=t(45987),s=t(47313),l=t(74294),o=t(72652),c=t(46417),u=["fetchOptions","refetch"],d=function(e){var n=e.fetchOptions,t=e.refetch,d=void 0!==t&&t,p=(0,i.Z)(e,u),m=(0,s.useState)(!1),h=(0,a.Z)(m,2),f=h[0],Z=h[1],v=(0,s.useState)([]),x=(0,a.Z)(v,2),g=x[0],j=x[1];return(0,c.jsx)(l.Z,(0,r.Z)((0,r.Z)({labelInValue:!0,filterOption:!1,notFoundContent:f?(0,c.jsx)(o.Z,{size:"small"}):"no results"},p),{},{options:f?[]:g,onFocus:function(){g.length&&!d||(Z(!0),n().then((function(e){j(e),Z(!1)})))}}))}},49655:function(e,n,t){t.d(n,{_:function(){return Z}});var r=t(1413),a=t(74165),i=t(93433),s=t(15861),l=t(29439),o=t(45987),c=t(47313),u=t(12279),d=t.n(u),p=t(74294),m=t(72652),h=t(46417),f=["fetchOptions","debounceTimeout","hasMore"],Z=function(e){var n=e.fetchOptions,t=e.debounceTimeout,u=void 0===t?400:t,Z=e.hasMore,v=(0,o.Z)(e,f),x=(0,c.useState)(!1),g=(0,l.Z)(x,2),j=g[0],y=g[1],b=(0,c.useState)([]),k=(0,l.Z)(b,2),C=k[0],w=k[1],q=(0,c.useState)(!1),I=(0,l.Z)(q,2),O=I[0],F=I[1],_=(0,c.useState)(null),E=(0,l.Z)(_,2),N=E[0],S=E[1],P=(0,c.useState)(1),T=(0,l.Z)(P,2),L=T[0],M=T[1],K=(0,c.useMemo)((function(){return d()((function(e){w([]),S(e),y(!0),n({search:e}).then((function(e){w(e),M(2),y(!1)})).finally((function(){return F(!1)}))}),u)}),[n,u,L]),D=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(t){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.target,O||r.scrollTop+r.offsetHeight!==r.scrollHeight||Z&&(F(!0),r.scrollTo(0,r.scrollHeight),n({search:N,page:L}).then((function(e){M((function(e){return e+1})),w([].concat((0,i.Z)(C),(0,i.Z)(e)))})).finally((function(){return F(!1)})));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,h.jsxs)(p.Z,(0,r.Z)((0,r.Z)({showSearch:!0,allowClear:!0,onPopupScroll:D,labelInValue:!0,filterOption:!1,onSearch:K,notFoundContent:j?(0,h.jsx)(m.Z,{size:"small"}):"no results",onFocus:function(){C.length||K("")}},v),{},{children:[C.map((function(e,n){return(0,h.jsx)(p.Z.Option,{value:e.value,children:e.label},n)})),O&&(0,h.jsx)(p.Z.Option,{children:(0,h.jsx)(m.Z,{size:"small"})})]}))}},73431:function(e,n,t){var r=t(47313),a=t(39180),i=t(2717),s=t(28830),l=t(60535),o=t(46417);n.Z=function(){var e=(0,i.I0)(),n=(0,i.v9)((function(e){return e.formLang}),i.wU),t=n.languages,c=n.defaultLang;(0,r.useEffect)((function(){l.Z.getAllActive().then((function(n){var t=n.data;e((0,s.dc)(t)),e((0,s.mh)(t.find((function(e){return 1===e.default})).locale))}))}),[]);return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(a.ZP.Group,{value:c,onChange:function(n){var t=n.target.value;e((0,s.mh)(t))},className:"float-right",buttonStyle:"solid",children:null===t||void 0===t?void 0:t.map((function(e){return(0,o.jsx)(a.ZP.Button,{value:e.locale,children:e.title},e.id)}))})})}},89281:function(e,n,t){t.d(n,{h:function(){return m}});var r=t(1413),a=t(29439),i=t(45987),s=t(47313),l=t(12279),o=t.n(l),c=t(74294),u=t(72652),d=t(46417),p=["fetchOptions","debounceTimeout"],m=function(e){var n=e.fetchOptions,t=e.debounceTimeout,l=void 0===t?400:t,m=(0,i.Z)(e,p),h=(0,s.useState)(!1),f=(0,a.Z)(h,2),Z=f[0],v=f[1],x=(0,s.useState)([]),g=(0,a.Z)(x,2),j=g[0],y=g[1],b=(0,s.useMemo)((function(){return o()((function(e){y([]),v(!0),n(e).then((function(e){y(e),v(!1)}))}),l)}),[n,l]);return(0,d.jsx)(c.Z,(0,r.Z)((0,r.Z)({showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:b,notFoundContent:Z?(0,d.jsx)(u.Z,{size:"small"}):"no results"},m),{},{options:j,onFocus:function(){j.length||b("")}}))}},10596:function(e,n,t){t.d(n,{S:function(){return U}});var r=t(18197),a=t(68197),i=t(59624),s=t(45705),l=t(59491),o=t(47313),c=t(2717),u=t(68144),d=t(76733),p=t.n(d),m=t(24511),h=t(46417),f=function(e){var n=e.next,t=e.prev,o=(0,m.$)().t,d=r.Z.useFormInstance(),f=(0,c.v9)((function(e){return e.formLang}),c.wU),Z=f.defaultLang,v=f.languages;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a.Z,{gutter:12,children:(0,h.jsx)(i.Z,{span:24,children:v.map((function(e){return(0,h.jsx)(r.Z.Item,{label:o("ingredients"),name:["ingredient",e.locale],valuePropName:"data",getValueFromEvent:function(e,n){return n.getData()},rules:[{required:e.locale===Z,message:o("required")}],hidden:e.locale!==Z,children:(0,h.jsx)(u.CKEditor,{editor:p()})})}))})}),(0,h.jsxs)(s.Z,{children:[(0,h.jsx)(l.Z,{type:"primary",htmlType:"button",onClick:function(){return t()},children:o("prev")}),(0,h.jsx)(l.Z,{type:"primary",htmlType:"button",onClick:function(){d.validateFields([["ingredient",Z]]).then((function(){n()}))},children:o("next")})]})]})},Z=function(e){var n=e.next,t=e.prev,o=(0,m.$)().t,d=r.Z.useFormInstance(),f=(0,c.v9)((function(e){return e.formLang}),c.wU),Z=f.defaultLang,v=f.languages;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a.Z,{gutter:12,children:(0,h.jsx)(i.Z,{span:24,children:v.map((function(e){return(0,h.jsx)(r.Z.Item,{label:o("instructions"),name:["instruction",e.locale],valuePropName:"data",getValueFromEvent:function(e,n){return n.getData()},rules:[{required:e.locale===Z,message:o("required")}],hidden:e.locale!==Z,children:(0,h.jsx)(u.CKEditor,{editor:p()})})}))})}),(0,h.jsxs)(s.Z,{children:[(0,h.jsx)(l.Z,{type:"primary",htmlType:"button",onClick:function(){return t()},children:o("prev")}),(0,h.jsx)(l.Z,{type:"primary",htmlType:"button",onClick:function(){d.validateFields([["instruction",Z]]).then((function(){n()}))},children:o("next")})]})]})},v=t(74165),x=t(15861),g=t(66672),j=t(6289),y=t(74294),b=t(5764),k=t(89802),C=t(53149),w=t(89281),q=t(30763),I=g.Z.TextArea,O=function(e){var n=e.next,t=e.image,s=e.setImage,o=e.back,u=e.setBack,d=(0,m.$)().t,p=r.Z.useFormInstance(),f=(0,c.v9)((function(e){return e.formLang}),c.wU),Z=f.defaultLang,O=f.languages;function F(){return F=(0,x.Z)((0,v.Z)().mark((function e(n){var t;return(0,v.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={search:n,status:"approved"},e.abrupt("return",C.Z.getAll(t).then((function(e){return e.data.map((function(e){var n;return{label:null===(n=e.translation)||void 0===n?void 0:n.title,value:e.id}}))})));case 2:case"end":return e.stop()}}),e)}))),F.apply(this,arguments)}return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(a.Z,{gutter:12,children:[(0,h.jsx)(i.Z,{span:8,children:O.map((function(e){return(0,h.jsx)(r.Z.Item,{label:d("name"),name:["title",e.locale],rules:[{required:e.locale===Z,message:d("required")}],hidden:e.locale!==Z,children:(0,h.jsx)(g.Z,{})},"name"+e.id)}))}),(0,h.jsx)(i.Z,{span:8,children:(0,h.jsx)(r.Z.Item,{label:d("shop/restaurant"),name:"shop_id",rules:[{required:!0,message:d("required")}],children:(0,h.jsx)(w.h,{placeholder:d("select.shop"),fetchOptions:function(e){return F.apply(this,arguments)},style:{minWidth:150},allowClear:!1})})}),(0,h.jsx)(i.Z,{span:8,children:(0,h.jsx)(r.Z.Item,{label:d("category"),name:"category_id",rules:[{required:!0,message:d("required")}],children:(0,h.jsx)(k.q,{fetchOptions:function(){return q.Z.getAll({active:1,type:"receipt"}).then((function(e){return e.data.map((function(e){return{label:e.translation.title,value:e.id}}))}))},debounceTimeout:200})},"category_id")}),(0,h.jsx)(i.Z,{span:24,children:O.map((function(e){return(0,h.jsx)(r.Z.Item,{label:d("description"),name:["description",e.locale],rules:[{required:e.locale===Z,message:d("required")}],hidden:e.locale!==Z,children:(0,h.jsx)(I,{rows:3})},"description"+e.id)}))}),(0,h.jsx)(i.Z,{span:6,children:(0,h.jsx)(r.Z.Item,{label:d("calories"),name:"calories",rules:[{required:!0,message:d("required")}],children:(0,h.jsx)(j.Z,{className:"w-100",min:0})},"calories")}),(0,h.jsx)(i.Z,{span:6,children:(0,h.jsx)(r.Z.Item,{label:d("servings"),name:"servings",rules:[{required:!0,message:d("required")}],children:(0,h.jsx)(j.Z,{className:"w-100",min:0})},"servings")}),(0,h.jsx)(i.Z,{span:6,children:(0,h.jsx)(r.Z.Item,{label:d("active.time"),name:"active_time",rules:[{required:!0,message:d("required")}],children:(0,h.jsx)(g.Z,{className:"w-100"})},"active_time")}),(0,h.jsx)(i.Z,{span:6,children:(0,h.jsx)(r.Z.Item,{label:d("total.time"),name:"total_time",rules:[{required:!0,message:d("required")}],children:(0,h.jsx)(g.Z,{className:"w-100"})},"total_time")}),(0,h.jsx)(i.Z,{span:12,children:(0,h.jsx)(r.Z.Item,{label:d("discount.type"),name:"discount_type",rules:[{required:!0,message:d("required")}],children:(0,h.jsx)(y.Z,{options:[{label:d("fix"),value:"fix"},{label:d("percent"),value:"percent"}]})})}),(0,h.jsx)(i.Z,{span:12,children:(0,h.jsx)(r.Z.Item,{label:d("discount.price"),name:"discount_price",rules:[{required:!0,message:d("required")}],children:(0,h.jsx)(j.Z,{className:"w-100",min:0})})}),(0,h.jsx)(i.Z,{span:12,children:(0,h.jsx)(r.Z.Item,{label:d("background"),children:(0,h.jsx)(b.Z,{type:"receipts",imageList:o,setImageList:u,form:p,multiple:!1})})}),(0,h.jsx)(i.Z,{span:12,children:(0,h.jsx)(r.Z.Item,{label:d("image"),children:(0,h.jsx)(b.Z,{type:"receipts",imageList:t,setImageList:s,form:p,multiple:!1})})})]}),(0,h.jsx)(l.Z,{type:"primary",htmlType:"button",onClick:function(){p.validateFields([["title",Z],["description",Z],"calories","servings","active_time","total_time","discount_type","discount_price","category_id","shop_id"]).then((function(e){n()}))},children:d("next")})]})},F=t(1413),_=t(45987),E=t(47515),N=t(82138),S=["key","name"],P=(y.Z.Option,function(e){var n=e.prev,t=e.loading,o=(0,m.$)().t,u=(0,c.v9)((function(e){return e.formLang}),c.wU),d=u.defaultLang,p=u.languages;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a.Z,{gutter:12,children:(0,h.jsx)(i.Z,{span:24,children:(0,h.jsx)(r.Z.List,{name:"nutrition",initialValue:[{weight:void 0,percentage:void 0,en:void 0,ru:void 0}],children:function(e,n){var t=n.add,s=n.remove;return(0,h.jsxs)(h.Fragment,{children:[e.map((function(e,n){e.key;var t=e.name,c=(0,_.Z)(e,S);return(0,h.jsxs)(a.Z,{gutter:12,align:"middle",children:[(0,h.jsx)(i.Z,{span:7,children:p.map((function(e){return(0,h.jsx)(r.Z.Item,{label:o("name"),name:[t,e.locale],rules:[{required:e.locale===d,message:o("required")}],hidden:e.locale!==d,children:(0,h.jsx)(g.Z,{})},"name"+e.id)}))}),(0,h.jsx)(i.Z,{span:7,children:(0,h.jsx)(r.Z.Item,(0,F.Z)((0,F.Z)({},c),{},{label:o("weight"),name:[t,"weight"],rules:[{required:!0,message:o("required")}],children:(0,h.jsx)(j.Z,{max:191,enterButton:!0,className:"w-100"})}))}),(0,h.jsx)(i.Z,{span:7,children:(0,h.jsx)(r.Z.Item,(0,F.Z)((0,F.Z)({},c),{},{label:o("percentage"),name:[t,"percentage"],rules:[{required:!0,message:o("required")}],children:(0,h.jsx)(j.Z,{addonAfter:"%",max:100,className:"w-100"})}))}),0!==n&&(0,h.jsx)(i.Z,{span:3,className:"d-flex justify-content-end",children:(0,h.jsx)(l.Z,{onClick:function(){return s(t)},danger:!0,className:"w-100",type:"primary",icon:(0,h.jsx)(E.Z,{})})})]})})),(0,h.jsx)(r.Z.Item,{children:(0,h.jsx)(l.Z,{onClick:function(){return t()},block:!0,icon:(0,h.jsx)(N.Z,{}),children:o("add.nutrition")})})]})}})})}),(0,h.jsxs)(s.Z,{children:[(0,h.jsx)(l.Z,{type:"primary",htmlType:"button",onClick:function(){return n()},children:o("prev")}),(0,h.jsx)(l.Z,{type:"primary",htmlType:"submit",loading:t,children:o("submit")})]})]})}),T=t(29439),L=t(17101),M=t(49655),K=["key","name"],D=function(e){var n=e.next,t=e.prev,c=(0,m.$)().t,u=r.Z.useFormInstance(),d=r.Z.useWatch("stocks",u),p=r.Z.useWatch("shop_id",u),f=(0,o.useState)(null),Z=(0,T.Z)(f,2),v=Z[0],x=Z[1];function g(e){var n=e.search,t=e.page,r={search:0===(null===n||void 0===n?void 0:n.length)?void 0:n,shop_id:p.value,page:t,status:"published"};return L.Z.getStock(r).then((function(e){return x(e.links),e.data.filter((function(e){return!d.map((function(e){var n;return null===e||void 0===e||null===(n=e.stock_id)||void 0===n?void 0:n.value})).includes(e.id)})).map((function(e){return{label:e.product.translation.title+" "+e.extras.map((function(e){return e.value})).join(", "),value:e.id}}))}))}return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a.Z,{gutter:12,children:(0,h.jsx)(i.Z,{span:24,children:(0,h.jsx)(r.Z.List,{name:"stocks",initialValue:[{stock_id:void 0,min_quantity:void 0}],children:function(e,n){var t=n.add,s=n.remove;return(0,h.jsxs)(h.Fragment,{children:[e.map((function(e,n){e.key;var t=e.name,o=(0,_.Z)(e,K);return(0,h.jsxs)(a.Z,{gutter:12,align:"middle",children:[(0,h.jsx)(i.Z,{span:11,children:(0,h.jsx)(r.Z.Item,(0,F.Z)((0,F.Z)({},o),{},{label:c("stock"),name:[t,"stock_id"],rules:[{required:!0,message:c("required")}],children:(0,h.jsx)(M._,{fetchOptions:g,debounceTimeout:200,hasMore:null===v||void 0===v?void 0:v.next})}))}),(0,h.jsx)(i.Z,{span:11,children:(0,h.jsx)(r.Z.Item,(0,F.Z)((0,F.Z)({},o),{},{label:c("min.quantity"),name:[t,"min_quantity"],rules:[{required:!0,message:c("required")}],children:(0,h.jsx)(j.Z,{min:0,className:"w-100"})}))}),0!==n&&(0,h.jsx)(i.Z,{span:2,className:"d-flex justify-content-end",children:(0,h.jsx)(l.Z,{onClick:function(){return s(t)},danger:!0,className:"w-100",type:"primary",icon:(0,h.jsx)(E.Z,{})})})]})})),(0,h.jsx)(r.Z.Item,{children:(0,h.jsx)(l.Z,{onClick:function(){return t()},block:!0,icon:(0,h.jsx)(N.Z,{}),children:c("add.stock")})})]})}})})}),(0,h.jsxs)(s.Z,{children:[(0,h.jsx)(l.Z,{type:"primary",htmlType:"button",onClick:function(){return t()},children:c("prev")}),(0,h.jsx)(l.Z,{type:"primary",htmlType:"button",onClick:function(){u.validateFields(d.flatMap((function(e,n){return[["stocks",n,"stock_id"],["stocks",n,"min_quantity"]]}))).then((function(){n()}))},children:c("next")})]})]})},U=[{step:1,title:"recipe",content:O},{step:2,title:"instructions",content:Z},{step:3,title:"ingredients",content:f},{step:4,title:"stocks",content:D},{step:5,title:"nutritions",content:P}]},39180:function(e,n,t){t.d(n,{ZP:function(){return E}});var r=t(4942),a=t(87462),i=t(47313),s=t(56482),l=t(46123),o=t.n(l),c=t(16945),u=t(4431),d=t(91964),p=i.createContext(null),m=p.Provider,h=p,f=i.createContext(null),Z=f.Provider,v=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},x=function(e,n){var t,l=i.useContext(h),p=i.useContext(f),m=i.useContext(d.E_),Z=m.getPrefixCls,x=m.direction,g=i.useRef(),j=(0,c.sQ)(n,g),y=(0,i.useContext)(u.aM).isFormItemInput,b=e.prefixCls,k=e.className,C=e.children,w=e.style,q=v(e,["prefixCls","className","children","style"]),I=Z("radio",b),O="button"===((null===l||void 0===l?void 0:l.optionType)||p)?"".concat(I,"-button"):I,F=(0,a.Z)({},q);l&&(F.name=l.name,F.onChange=function(n){var t,r;null===(t=e.onChange)||void 0===t||t.call(e,n),null===(r=null===l||void 0===l?void 0:l.onChange)||void 0===r||r.call(l,n)},F.checked=e.value===l.value,F.disabled=e.disabled||l.disabled);var _=o()("".concat(O,"-wrapper"),(t={},(0,r.Z)(t,"".concat(O,"-wrapper-checked"),F.checked),(0,r.Z)(t,"".concat(O,"-wrapper-disabled"),F.disabled),(0,r.Z)(t,"".concat(O,"-wrapper-rtl"),"rtl"===x),(0,r.Z)(t,"".concat(O,"-wrapper-in-form-item"),y),t),k);return i.createElement("label",{className:_,style:w,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},i.createElement(s.Z,(0,a.Z)({},F,{type:"radio",prefixCls:O,ref:j})),void 0!==C?i.createElement("span",null,C):null)},g=i.forwardRef(x);g.displayName="Radio";var j=g,y=t(29439),b=t(10288),k=t(21631),C=t(81176),w=i.forwardRef((function(e,n){var t=i.useContext(d.E_),s=t.getPrefixCls,l=t.direction,c=i.useContext(k.Z),u=(0,b.Z)(e.defaultValue,{value:e.value}),p=(0,y.Z)(u,2),h=p[0],f=p[1];return i.createElement(m,{value:{onChange:function(n){var t=h,r=n.target.value;"value"in e||f(r);var a=e.onChange;a&&r!==t&&a(n)},value:h,disabled:e.disabled,name:e.name,optionType:e.optionType}},function(){var t,u=e.prefixCls,d=e.className,p=void 0===d?"":d,m=e.options,f=e.buttonStyle,Z=void 0===f?"outline":f,v=e.disabled,x=e.children,g=e.size,y=e.style,b=e.id,k=e.onMouseEnter,w=e.onMouseLeave,q=s("radio",u),I="".concat(q,"-group"),O=x;m&&m.length>0&&(O=m.map((function(e){return"string"===typeof e||"number"===typeof e?i.createElement(j,{key:e.toString(),prefixCls:q,disabled:v,value:e,checked:h===e},e):i.createElement(j,{key:"radio-group-value-options-".concat(e.value),prefixCls:q,disabled:e.disabled||v,value:e.value,checked:h===e.value,style:e.style},e.label)})));var F=g||c,_=o()(I,"".concat(I,"-").concat(Z),(t={},(0,r.Z)(t,"".concat(I,"-").concat(F),F),(0,r.Z)(t,"".concat(I,"-rtl"),"rtl"===l),t),p);return i.createElement("div",(0,a.Z)({},(0,C.Z)(e),{className:_,style:y,onMouseEnter:k,onMouseLeave:w,id:b,ref:n}),O)}())})),q=i.memo(w),I=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},O=function(e,n){var t=i.useContext(d.E_).getPrefixCls,r=e.prefixCls,s=I(e,["prefixCls"]),l=t("radio",r);return i.createElement(Z,{value:"button"},i.createElement(j,(0,a.Z)({prefixCls:l},s,{type:"radio",ref:n})))},F=i.forwardRef(O),_=j;_.Button=F,_.Group=q;var E=_},56482:function(e,n,t){var r=t(87462),a=t(4942),i=t(45987),s=t(1413),l=t(15671),o=t(43144),c=t(60136),u=t(29388),d=t(47313),p=t(46123),m=t.n(p),h=function(e){(0,c.Z)(t,e);var n=(0,u.Z)(t);function t(e){var r;(0,l.Z)(this,t),(r=n.call(this,e)).handleChange=function(e){var n=r.props,t=n.disabled,a=n.onChange;t||("checked"in r.props||r.setState({checked:e.target.checked}),a&&a({target:(0,s.Z)((0,s.Z)({},r.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},r.saveInput=function(e){r.input=e};var a="checked"in e?e.checked:e.defaultChecked;return r.state={checked:a},r}return(0,o.Z)(t,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,n=this.props,t=n.prefixCls,s=n.className,l=n.style,o=n.name,c=n.id,u=n.type,p=n.disabled,h=n.readOnly,f=n.tabIndex,Z=n.onClick,v=n.onFocus,x=n.onBlur,g=n.onKeyDown,j=n.onKeyPress,y=n.onKeyUp,b=n.autoFocus,k=n.value,C=n.required,w=(0,i.Z)(n,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),q=Object.keys(w).reduce((function(e,n){return"aria-"!==n.substr(0,5)&&"data-"!==n.substr(0,5)&&"role"!==n||(e[n]=w[n]),e}),{}),I=this.state.checked,O=m()(t,s,(e={},(0,a.Z)(e,"".concat(t,"-checked"),I),(0,a.Z)(e,"".concat(t,"-disabled"),p),e));return d.createElement("span",{className:O,style:l},d.createElement("input",(0,r.Z)({name:o,id:c,type:u,required:C,readOnly:h,disabled:p,tabIndex:f,className:"".concat(t,"-input"),checked:!!I,onClick:Z,onFocus:v,onBlur:x,onKeyUp:y,onKeyDown:g,onKeyPress:j,onChange:this.handleChange,autoFocus:b,ref:this.saveInput,value:k},q)),d.createElement("span",{className:"".concat(t,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,n){return"checked"in e?(0,s.Z)((0,s.Z)({},n),{},{checked:e.checked}):null}}]),t}(d.Component);h.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}},n.Z=h}}]);