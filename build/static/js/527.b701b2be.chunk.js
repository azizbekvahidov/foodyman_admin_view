(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[527],{73431:function(t,e,n){"use strict";var a=n(47313),i=n(39180),r=n(2717),c=n(28830),l=n(60535),u=n(46417);e.Z=function(){var t=(0,r.I0)(),e=(0,r.v9)((function(t){return t.formLang}),r.wU),n=e.languages,s=e.defaultLang;(0,a.useEffect)((function(){l.Z.getAllActive().then((function(e){var n=e.data;t((0,c.dc)(n)),t((0,c.mh)(n.find((function(t){return 1===t.default})).locale))}))}),[]);return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(i.ZP.Group,{value:s,onChange:function(e){var n=e.target.value;t((0,c.mh)(n))},className:"float-right",buttonStyle:"solid",children:null===n||void 0===n?void 0:n.map((function(t){return(0,u.jsx)(i.ZP.Button,{value:t.locale,children:t.title},t.id)}))})})}},89281:function(t,e,n){"use strict";n.d(e,{h:function(){return v}});var a=n(1413),i=n(29439),r=n(45987),c=n(47313),l=n(12279),u=n.n(l),s=n(74294),o=n(72652),d=n(46417),f=["fetchOptions","debounceTimeout"],v=function(t){var e=t.fetchOptions,n=t.debounceTimeout,l=void 0===n?400:n,v=(0,r.Z)(t,f),p=(0,c.useState)(!1),Z=(0,i.Z)(p,2),m=Z[0],h=Z[1],x=(0,c.useState)([]),j=(0,i.Z)(x,2),g=j[0],y=j[1],b=(0,c.useMemo)((function(){return u()((function(t){y([]),h(!0),e(t).then((function(t){y(t),h(!1)}))}),l)}),[e,l]);return(0,d.jsx)(s.Z,(0,a.Z)((0,a.Z)({showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:b,notFoundContent:m?(0,d.jsx)(o.Z,{size:"small"}):"no results"},v),{},{options:g,onFocus:function(){g.length||b("")}}))}},33834:function(t,e,n){"use strict";n.d(e,{K:function(){return u}});var a=n(4942),i=n(1413),r=n(58467),c=n(74776),l=n.n(c),u=function(){var t=(0,r.s0)(),e=(0,r.TH)(),n=l().parse(e.search,{ignoreQueryPrefix:!0});return{values:n,set:function(e,r){return t({search:l().stringify((0,i.Z)((0,i.Z)({},n),{},(0,a.Z)({},e,r)))})},reset:function(e){var a=(0,i.Z)({},n);a[e]&&delete a[e],t({search:l().stringify((0,i.Z)({},a))})},clear:function(){return t({search:l().stringify({})})},merge:function(e){return t({search:l().stringify((0,i.Z)((0,i.Z)({},n),e))})}}}},72592:function(t,e,n){"use strict";n.r(e);var a=n(4942),i=n(93433),r=n(1413),c=n(29439),l=n(47313),u=n(43205),s=n(83999),o=n(77181),d=n(72652),f=n(39088),v=n(74911),p=n(18325),Z=n(73431),m=n(58467),h=n(17101),x=n(2717),j=n(90954),g=n(24511),y=n(33834),b=n(46417),q=s.Z.Step;e.default=function(){var t,e=(0,g.$)().t,n=(0,m.UO)().uuid,I=(0,y.K)(),k=(0,x.v9)((function(t){return t.menu}),x.wU).activeMenu,w=(0,x.v9)((function(t){return t.formLang}),x.wU).languages,S=(0,x.I0)(),N=Number((null===(t=I.values)||void 0===t?void 0:t.step)||0),_=(0,l.useState)(k.refetch),O=(0,c.Z)(_,2),F=O[0],U=O[1],C=function(){var t=N+1;I.set("step",t)},M=function(){var t=N-1;I.set("step",t)},L=function(t){return t?{label:t.translation?t.translation.title:t.title,value:t.id}:null};function T(t){U(!0),h.Z.getById(t).then((function(t){var e,n,c=(0,r.Z)((0,r.Z)((0,r.Z)({},t.data),function(t){if(null===t||void 0===t||!t.translations)return{};var e=t.translations,n=w.map((function(t){var n,i,r;return r={},(0,a.Z)(r,"title[".concat(t.locale,"]"),null===(n=e.find((function(e){return e.locale===t.locale})))||void 0===n?void 0:n.title),(0,a.Z)(r,"description[".concat(t.locale,"]"),null===(i=e.find((function(e){return e.locale===t.locale})))||void 0===i?void 0:i.description),r}));return Object.assign.apply(Object,[{}].concat((0,i.Z)(n)))}(t.data)),{},{shop:L(t.data.shop),category:L(t.data.category),brand:L(t.data.brand),unit:L(t.data.unit),images:(n=t.data.galleries,n.map((function(t){return{uid:t.id,name:t.path,url:t.path}}))),extras:null===(e=t.data.stocks[0])||void 0===e?void 0:e.extras.map((function(t){return t.extra_group_id})),stocks:t.data.stocks.map((function(t){return(0,r.Z)((0,r.Z)((0,r.Z)({},t),Object.assign.apply(Object,[{}].concat((0,i.Z)(t.extras.map((function(t,e){return(0,a.Z)({},"extras[".concat(e,"]"),t.id)})))))),{},{quantity:t.quantity||0,extras:void 0})})),properties:t.data.properties.map((function(t,e){var n;return n={id:e},(0,a.Z)(n,"key[".concat(t.locale,"]"),t.key),(0,a.Z)(n,"value[".concat(t.locale,"]"),t.value),n})),translation:void 0,translations:void 0});S((0,j.nc)({activeMenu:k,data:c}))})).finally((function(){U(!1),S((0,j.A_)(k))}))}(0,l.useEffect)((function(){k.refetch&&T(n)}),[k.refetch]);return(0,b.jsxs)(o.Z,{title:e("addon.edit"),extra:(0,b.jsx)(Z.Z,{}),children:[(0,b.jsx)(s.Z,{current:N,onChange:function(t){S((0,j.nc)({activeMenu:k,data:(0,r.Z)((0,r.Z)({},k.data),{},{step:t})})),I.set("step",t)},children:u.S.map((function(t){return(0,b.jsx)(q,{title:e(t.title)},t.title)}))}),F?(0,b.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,b.jsx)(d.Z,{size:"large",className:"py-5"})}):(0,b.jsxs)("div",{className:"steps-content",children:["First-content"===u.S[N].content&&(0,b.jsx)(p.Z,{next:C,action_type:"edit"}),"Third-content"===u.S[N].content&&(0,b.jsx)(v.Z,{next:C,prev:M,current:N}),"Finish-content"===u.S[N].content&&(0,b.jsx)(f.Z,{prev:M})]})]})}},39088:function(t,e,n){"use strict";var a=n(1413),i=n(93433),r=n(4942),c=n(29439),l=n(47313),u=n(83371),s=n(45705),o=n(59491),d=n(72652),f=n(2717),v=n(58467),p=n(90954),Z=n(24511),m=n(17101),h=n(81890),x=n(46417);e.Z=function(t){var e,n,j,g=t.prev,y=(0,Z.$)().t,b=(0,f.v9)((function(t){return t.menu}),f.wU).activeMenu,q=(0,f.v9)((function(t){return t.formLang}),f.wU),I=q.defaultLang,k=q.languages,w=(0,v.s0)(),S=(0,f.I0)(),N=(0,l.useState)({}),_=(0,c.Z)(N,2),O=_[0],F=_[1],U=(0,l.useState)(null),C=(0,c.Z)(U,2),M=C[0],L=C[1],T=(0,v.UO)().uuid,A=(0,f.v9)((function(t){return t.addons}),f.wU).params;function E(t){L(!0),m.Z.getById(t).then((function(t){var e=(0,a.Z)((0,a.Z)((0,a.Z)({},t.data),function(t){if(null===t||void 0===t||!t.translations)return{};var e=t.translations,n=k.map((function(t){var n,a,i;return i={},(0,r.Z)(i,"title[".concat(t.locale,"]"),null===(n=e.find((function(e){return e.locale===t.locale})))||void 0===n?void 0:n.title),(0,r.Z)(i,"description[".concat(t.locale,"]"),null===(a=e.find((function(e){return e.locale===t.locale})))||void 0===a?void 0:a.description),i}));return Object.assign.apply(Object,[{}].concat((0,i.Z)(n)))}(t.data)),{},{properties:t.data.properties.map((function(t,e){var n;return n={id:e},(0,r.Z)(n,"key[".concat(t.locale,"]"),t.key),(0,r.Z)(n,"value[".concat(t.locale,"]"),t.value),n})),translation:void 0,translations:void 0});F(e)})).finally((function(){return L(!1)}))}return(0,l.useEffect)((function(){E(T)}),[]),M?(0,x.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,x.jsx)(d.Z,{size:"large",className:"py-5"})}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(u.Z,{title:y("product.info"),bordered:!0,children:[(0,x.jsx)(u.Z.Item,{label:"".concat(y("title")," (").concat(I,")"),span:3,children:O["title[".concat(I,"]")]}),(0,x.jsx)(u.Z.Item,{label:"".concat(y("description")," (").concat(I,")"),span:3,children:O["description[".concat(I,"]")]}),(0,x.jsx)(u.Z.Item,{label:y("shop"),span:1.5,children:null===(e=O.shop)||void 0===e?void 0:e.translation.title}),(0,x.jsx)(u.Z.Item,{label:y("unit"),span:1.5,children:null===(n=O.unit)||void 0===n?void 0:n.translation.title}),(0,x.jsx)(u.Z.Item,{label:y("tax"),children:O.tax}),(0,x.jsx)(u.Z.Item,{label:y("min.quantity"),children:O.min_qty}),(0,x.jsx)(u.Z.Item,{label:y("max.quantity"),children:O.max_qty})]}),null===(j=O.stocks)||void 0===j?void 0:j.map((function(t,e){return t?(0,x.jsxs)(u.Z,{bordered:!0,className:"mt-4",children:[(0,x.jsx)(u.Z.Item,{label:y("price"),span:2,children:t.price}),(0,x.jsx)(u.Z.Item,{label:y("quantity"),span:2,children:t.quantity}),t.extras.map((function(t,e){var n,a;return(0,x.jsx)(u.Z.Item,{label:null===t||void 0===t||null===(n=t.group)||void 0===n||null===(a=n.translation)||void 0===a?void 0:a.title,children:null===t||void 0===t?void 0:t.value},"extra"+e)}))]},"desc"+e):""})),(0,x.jsx)("div",{className:"d-flex justify-content-end mt-4",children:(0,x.jsxs)(s.Z,{wrap:!0,children:[(0,x.jsx)(o.Z,{onClick:g,children:y("prev")}),(0,x.jsx)(o.Z,{type:"primary",onClick:function(){var t=(0,a.Z)({status:void 0},A),e="catalog/addons";S((0,p.ph)((0,a.Z)((0,a.Z)({},b),{},{nextUrl:e}))),S((0,h.QA)(t)),w("/".concat(e))},children:y("finish")})]})})]})}},18325:function(t,e,n){"use strict";var a=n(74165),i=n(15861),r=n(1413),c=n(29439),l=n(47313),u=n(18197),s=n(68197),o=n(59624),d=n(77181),f=n(66672),v=n(6289),p=n(86345),Z=n(74294),m=n(59491),h=n(89281),x=n(53149),j=n(2717),g=n(17101),y=n(90954),b=n(31055),q=n(58467),I=n(24511),k=n(49080),w=n(46417);e.Z=function(t){var e=t.next,n=t.action_type,S=void 0===n?"":n,N=(0,I.$)().t,_=u.Z.useForm(),O=(0,c.Z)(_,1)[0],F=(0,j.I0)(),U=(0,q.UO)().uuid,C=(0,q.s0)(),M=(0,l.useState)(null),L=(0,c.Z)(M,2),T=L[0],A=L[1],E=(0,j.v9)((function(t){return t.menu}),j.wU).activeMenu,P=(0,j.v9)((function(t){return t.formLang}),j.wU),V=P.defaultLang,$=P.languages,z=(0,l.useState)(!1),B=(0,c.Z)(z,2),W=B[0],K=B[1],Q=(0,l.useState)([]),G=(0,c.Z)(Q,2),H=G[0],X=G[1];function D(){return(D=(0,i.Z)((0,a.Z)().mark((function t(e){var n;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={search:e},t.abrupt("return",x.Z.get(n).then((function(t){return t.data.map((function(t){return{label:t.translation?t.translation.title:"no name",value:t.id}}))})));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}(0,l.useEffect)((function(){return function(){var t=O.getFieldsValue(!0);F((0,y.nc)({activeMenu:E,data:(0,r.Z)((0,r.Z)({},E.data),t)}))}}),[]);return(0,l.useEffect)((function(){b.Z.getAll({perPage:100,page:1,active:1}).then((function(t){var e=t.data;return X(function(t){return t.map((function(t){var e;return{label:null===(e=t.translation)||void 0===e?void 0:e.title,value:t.id}}))}(e))}))}),[]),(0,w.jsxs)(u.Z,{layout:"vertical",form:O,initialValues:(0,r.Z)({active:!0},E.data),onFinish:function(t){var n,a;K(!0);var i=(0,r.Z)((0,r.Z)({},t),{},{min_qty:1,max_qty:1e3,active:Number(t.active),shop_id:null===(n=t.shop)||void 0===n?void 0:n.value,unit_id:null===(a=t.unit)||void 0===a?void 0:a.value,unit:void 0,addon:Number(1),shop:void 0});"edit"===S?function(t,n){g.Z.update(U,n).then((function(){F((0,y.nc)({activeMenu:E,data:t})),e()})).catch((function(t){return A(t.response.data.params)})).finally((function(){return K(!1)}))}(t,i):function(t,e){g.Z.create(e).then((function(e){var n=e.data;F((0,y.SS)({id:"product-".concat(n.uuid),url:"product/".concat(n.uuid),name:N("add.product"),data:t,refetch:!1})),C("/addon/".concat(n.uuid,"?step=1"))})).catch((function(t){return A(t.response.data.params)})).finally((function(){return K(!1)}))}(t,i)},className:"addon-menu",children:[(0,w.jsxs)(s.Z,{gutter:12,children:[(0,w.jsx)(o.Z,{xs:24,sm:24,md:16,children:(0,w.jsx)(d.Z,{title:N("basic.info"),children:(0,w.jsxs)(s.Z,{gutter:24,children:[(0,w.jsx)(o.Z,{span:24,children:$.map((function(t){return(0,w.jsx)(u.Z.Item,{label:N("name"),name:"title[".concat(t.locale,"]"),rules:[{required:t.locale===V,message:N("required")}],hidden:t.locale!==V,children:(0,w.jsx)(f.Z,{})},"name"+t.id)}))}),(0,w.jsx)(o.Z,{span:24,children:$.map((function(t){return(0,w.jsx)(u.Z.Item,{label:N("description"),name:"description[".concat(t.locale,"]"),rules:[{required:t.locale===V,message:N("required")}],hidden:t.locale!==V,children:(0,w.jsx)(k.Z,{rows:4,span:4})},"description"+t.id)}))}),(0,w.jsx)(o.Z,{span:12,children:(0,w.jsx)(u.Z.Item,{label:N("tax"),name:"tax",rules:[{required:!0,message:N("required")}],children:(0,w.jsx)(v.Z,{min:0,className:"w-100",addonAfter:"%"})})}),(0,w.jsx)(o.Z,{span:12,children:(0,w.jsx)(u.Z.Item,{label:N("active"),name:"active",valuePropName:"checked",children:(0,w.jsx)(p.Z,{})})})]})})}),(0,w.jsxs)(o.Z,{xs:24,sm:24,md:8,children:[(0,w.jsx)(d.Z,{title:N("shop/restaurant"),children:(0,w.jsx)(u.Z.Item,{name:"shop",rules:[{required:!0,message:N("required")}],children:(0,w.jsx)(h.h,{fetchOptions:function(t){return D.apply(this,arguments)},disabled:"edit"===S})})}),(0,w.jsxs)(d.Z,{title:N("addition"),children:[(0,w.jsx)(u.Z.Item,{label:N("unit"),name:"unit",rules:[{required:!0,message:N("required")}],children:(0,w.jsx)(Z.Z,{labelInValue:!0,filterOption:!1,options:H})}),(0,w.jsx)(u.Z.Item,{label:N("qr.code"),name:"bar_code",rules:[{required:!0,message:N("required")}],help:null!==T&&void 0!==T&&T.bar_code?T.bar_code[0]:null,validateStatus:null!==T&&void 0!==T&&T.bar_code?"error":"success",children:(0,w.jsx)(f.Z,{className:"w-100"})})]})]})]}),(0,w.jsx)(m.Z,{type:"primary",htmlType:"submit",loading:W,children:N("next")})]})}},74911:function(t,e,n){"use strict";var a=n(29439),i=n(47313),r=n(18197),c=n(68197),l=n(59624),u=n(6289),s=n(45705),o=n(59491),d=n(2717),f=n(17101),v=n(24511),p=n(58467),Z=n(90954),m=n(46417);e.Z=function(t){var e=t.prev,n=t.next,h=(t.current,(0,v.$)().t),x=r.Z.useForm(),j=(0,a.Z)(x,1)[0],g=(0,p.UO)().uuid,y=(0,d.v9)((function(t){return t.menu}),d.wU).activeMenu,b=(0,i.useState)(null),q=(0,a.Z)(b,2),I=q[0],k=q[1],w=(0,d.I0)();return(0,i.useEffect)((function(){var t,e,n,a;w((0,Z.xo)(y)),j.setFieldsValue({price:null!==(t=y.data)&&void 0!==t&&null!==(e=t.stocks)&&void 0!==e&&e.length?y.data.stocks[0].price:[""],quantity:null!==(n=y.data)&&void 0!==n&&null!==(a=n.stocks)&&void 0!==a&&a.length?y.data.stocks[0].quantity:[""]})}),[]),(0,m.jsxs)(r.Z,{layout:"vertical",form:j,onFinish:function(t){var e;k(!0),e=[{price:t.price,quantity:t.quantity}],f.Z.stocks(g,{extras:e}).then((function(){return n()})).finally((function(){return k(!1)}))},children:[(0,m.jsxs)(c.Z,{gutter:12,align:"middle",style:{flexWrap:"nowrap",overflowX:"auto"},children:[(0,m.jsx)(l.Z,{children:(0,m.jsx)(r.Z.Item,{label:h("price"),name:"price",rules:[{required:!0,message:h("required")}],children:(0,m.jsx)(u.Z,{min:0,className:"w-100",style:{minWidth:200}})})}),(0,m.jsx)(l.Z,{children:(0,m.jsx)(r.Z.Item,{label:h("quantity"),name:"quantity",rules:[{required:!0,message:h("required")}],children:(0,m.jsx)(u.Z,{min:0,className:"w-100",style:{minWidth:200}})})})]}),(0,m.jsxs)(s.Z,{className:"mt-4",children:[(0,m.jsx)(o.Z,{onClick:e,children:h("prev")}),(0,m.jsx)(o.Z,{type:"primary",htmlType:"submit",loading:!!I,children:h("next")})]})]})}},43205:function(t,e,n){"use strict";n.d(e,{S:function(){return a}});var a=[{title:"addons",content:"First-content"},{title:"stocks",content:"Third-content"},{title:"finish",content:"Finish-content"}]},24654:function(){}}]);