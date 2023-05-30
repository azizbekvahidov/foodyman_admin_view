"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[8516],{52008:function(e,l,a){a(47313);l.Z=a.p+"static/media/paystack.6d6a77c8d6bfc75061ec651e5c2e74eb.svg"},89802:function(e,l,a){a.d(l,{q:function(){return o}});var n=a(1413),r=a(29439),t=a(45987),i=a(47313),s=a(74294),c=a(72652),u=a(46417),d=["fetchOptions","refetch"],o=function(e){var l=e.fetchOptions,a=e.refetch,o=void 0!==a&&a,p=(0,t.Z)(e,d),m=(0,i.useState)(!1),h=(0,r.Z)(m,2),f=h[0],x=h[1],Z=(0,i.useState)([]),v=(0,r.Z)(Z,2),y=v[0],j=v[1];return(0,u.jsx)(s.Z,(0,n.Z)((0,n.Z)({labelInValue:!0,filterOption:!1,notFoundContent:f?(0,u.jsx)(c.Z,{size:"small"}):"no results"},p),{},{options:f?[]:y,onFocus:function(){y.length&&!o||(x(!0),l().then((function(e){j(e),x(!1)})))}}))}},58516:function(e,l,a){a.r(l),a.d(l,{default:function(){return P}});var n=a(74165),r=a(15861),t=a(1413),i=a(29439),s=a(47313),c=a(18197),u=a(77181),d=a(68197),o=a(59624),p=a(74294),m=a(72652),h=a(66672),f=a(86345),x=a(59491),Z=a(24511),v=a(90954),y=a(2717),j=a(34491),b=a(58467),g=a(52008),q=a(26672),_=a(92709),k=a(79053),I=a(91260),w=a(26457),C=a(89802),N=a(30554),O=a(6957),F=a(5764),z=a(46417);function P(){var e,l,a,P=(0,Z.$)().t,S=c.Z.useForm(),E=(0,i.Z)(S,1)[0],V=(0,s.useState)(!1),A=(0,i.Z)(V,2),R=A[0],T=A[1],U=(0,s.useState)(!1),W=(0,i.Z)(U,2),D=W[0],K=W[1],L=(0,s.useState)([]),H=(0,i.Z)(L,2),B=H[0],G=H[1],M=(0,s.useState)(null),$=(0,i.Z)(M,2),J=$[0],Q=$[1],X=(0,y.v9)((function(e){return e.formLang}),y.wU).languages,Y=(0,y.v9)((function(e){return e.menu}),y.wU).activeMenu,ee=(0,s.useState)(null!==(e=Y.data)&&void 0!==e&&e.image?[null===(l=Y.data)||void 0===l?void 0:l.image]:[]),le=(0,i.Z)(ee,2),ae=le[0],ne=le[1],re=(0,y.v9)((function(e){return e.currency}),y.wU).defaultCurrency,te=(0,y.I0)(),ie=(0,b.s0)();function se(){return(se=(0,r.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return K(!0),e.abrupt("return",w.Z.getAll().then((function(e){var l=e.data.filter((function(e){return"wallet"!==e.tag})).filter((function(e){return"cash"!==e.tag})).map((function(e){return{label:e.tag[0].toUpperCase()+e.tag.substring(1),value:e.id,key:e.id}}));G(l)})).finally((function(){return K(!1)})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(0,s.useEffect)((function(){!function(){se.apply(this,arguments)}()}),[]);return(0,z.jsx)(u.Z,{title:P("add.payment.payloads"),className:"h-100",children:(0,z.jsxs)(c.Z,{layout:"vertical",name:"user-address",form:E,onFinish:function(e){var l;delete e.payment_id,T(!0),I.x.create({payment_id:J.value,payload:(0,t.Z)((0,t.Z)({},e),{},{logo:ae[0]?ae[0].name:void 0,paypal_currency:null===(l=e.paypal_currency)||void 0===l?void 0:l.label,paypal_validate_ssl:null!==e&&void 0!==e&&e.paypal_validate_ssl?Number(null===e||void 0===e?void 0:e.paypal_validate_ssl):void 0})}).then((function(){var e="payment-payloads";j.Am.success(P("successfully.created")),te((0,v.ph)((0,t.Z)((0,t.Z)({},Y),{},{nextUrl:e}))),ie("/".concat(e)),te((0,k.j)()),te((0,v.xo)(Y))})).catch((function(e){return console.error(e)})).finally((function(){return T(!1)}))},children:[(0,z.jsxs)(d.Z,{gutter:12,children:[(0,z.jsx)(o.Z,{span:"Cash"===(null===J||void 0===J?void 0:J.label)||"Wallet"===(null===J||void 0===J?void 0:J.label)?12:24,children:(0,z.jsx)(c.Z.Item,{label:P("payment"),name:"payment_id",rules:[{required:!0,message:P("required")}],children:(0,z.jsx)(p.Z,{notFoundContent:D?(0,z.jsx)(m.Z,{size:"small"}):"no results",allowClear:!0,options:B,onSelect:function(e){var l=B.find((function(l){return l.value===e}));switch(l.label){case"Paypal":E.setFieldsValue({paypal_validate_ssl:!0,paypal_locale:O.Z.language,paypal_currency:{label:null===re||void 0===re?void 0:re.title,value:null===re||void 0===re?void 0:re.id}});break;case"Stripe":case"Razorpay":case"Paystack":case"FlutterWave":E.setFieldsValue({currency:null===re||void 0===re?void 0:re.title});break;default:E.resetFields()}Q(l)}})})}),"Cash"===(null===J||void 0===J?void 0:J.label)||"Wallet"===(null===J||void 0===J?void 0:J.label)?"":(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(o.Z,{span:24,className:"d-flex justify-content-center mt-4 mb-5",children:function(e){switch(e){case"Paypal":return(0,z.jsx)(q.kD0,{size:80});case"Stripe":return(0,z.jsx)(_.K6C,{size:80});case"Razorpay":return(0,z.jsx)(_.r98,{size:80});case"Paystack":return(0,z.jsx)("img",{src:g.Z,alt:"img",width:"80",height:"80"});case"Flutterwave":return(0,z.jsx)(_.Bq1,{size:80});default:return null}}(null===J||void 0===J?void 0:J.label)}),"Paystack"===(null===J||void 0===J?void 0:J.label)?(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(o.Z,{span:12,children:(0,z.jsx)(c.Z.Item,{label:P("paystack.pk"),name:"paystack_pk",rules:[{required:!0,message:P("required")}],children:(0,z.jsx)(h.Z,{})})}),(0,z.jsx)(o.Z,{span:12,children:(0,z.jsx)(c.Z.Item,{label:P("paystack.sk"),name:"paystack_sk",rules:[{required:!0,message:P("required")}],children:(0,z.jsx)(h.Z,{})})})," ",(0,z.jsx)(o.Z,{span:12,children:(0,z.jsx)(c.Z.Item,{label:P("currency"),name:"currency",rules:[{required:!0,message:P("required")}],children:(0,z.jsx)(C.q,{placeholder:P("select.currency"),valuePropName:"label",defaultValue:{value:re.id,label:re.title},fetchOptions:function(){return N.Z.getAll().then((function(e){return e.data.filter((function(e){return e.active})).map((function(e){return{value:e.id,label:"".concat(e.title),key:e.id}}))}))}})})})]}):"Paypal"===(null===J||void 0===J?void 0:J.label)?(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(o.Z,{span:12,children:(0,z.jsx)(c.Z.Item,{label:P("paypal.mode"),name:"paypal_mode",rules:[{required:!0,message:P("required")}],children:(0,z.jsx)(p.Z,{options:[{value:"live",label:P("live")},{value:"sandbox",label:P("sandbox")}]})})}),(0,z.jsx)(o.Z,{span:12,children:(0,z.jsx)(c.Z.Item,{label:P("paypal.sandbox.client.id"),name:"paypal_sandbox_client_id",rules:[{required:!0,message:P("required")}],children:(0,z.jsx)(h.Z,{})})}),(0,z.jsx)(o.Z,{span:12,children:(0,z.jsx)(c.Z.Item,{label:P("paypal.sandbox.client.secret"),name:"paypal_sandbox_client_secret",rules:[{required:!0,message:P("required")}],children:(0,z.jsx)(h.Z,{})})}),(0,z.jsx)(o.Z,{span:12,children:(0,z.jsx)(c.Z.Item,{label:P("paypal.sandbox.app.id"),name:"paypal_sandbox_app_id",rules:[{required:!0,message:P("required")}],children:(0,z.jsx)(h.Z,{})})}),(0,z.jsx)(o.Z,{span:12,children:(0,z.jsx)(c.Z.Item,{label:P("paypal.live.client.id"),name:"paypal_live_client_id",rules:[{required:!0,message:P("required")}],children:(0,z.jsx)(h.Z,{})})}),(0,z.jsx)(o.Z,{span:12,children:(0,z.jsx)(c.Z.Item,{label:P("paypal.live.client.secret"),name:"paypal_live_client_secret",rules:[{required:!0,message:P("required")}],children:(0,z.jsx)(h.Z,{})})}),(0,z.jsx)(o.Z,{span:12,children:(0,z.jsx)(c.Z.Item,{label:P("paypal.live.app.id"),name:"paypal_live_app_id",rules:[{required:!0,message:P("required")}],children:(0,z.jsx)(h.Z,{})})}),(0,z.jsx)(o.Z,{span:12,children:(0,z.jsx)(c.Z.Item,{label:P("paypal.payment.action"),name:"paypal_payment_action",rules:[{required:!0,message:P("required")}],children:(0,z.jsx)(p.Z,{options:[{value:"Sale",label:P("sale")},{value:"Order",label:P("order")},{value:"Authorization",label:P("authorization")}]})})}),(0,z.jsx)(o.Z,{span:12,children:(0,z.jsx)(c.Z.Item,{label:P("paypal.currency"),name:"paypal_currency",rules:[{required:!0,message:P("required")}],children:(0,z.jsx)(C.q,{placeholder:P("select.currency"),valuePropName:"label",defaultValue:{value:re.id,label:re.title},fetchOptions:function(){return N.Z.getAll().then((function(e){return e.data.filter((function(e){return e.active})).map((function(e){return{value:e.id,label:"".concat(e.title),key:e.id}}))}))}})})}),(0,z.jsx)(o.Z,{span:12,children:(0,z.jsx)(c.Z.Item,{label:P("paypal.locale"),name:"paypal_locale",rules:[{required:!0,message:P("required")}],valuePropName:"value",children:(0,z.jsx)(p.Z,{placeholder:P("select.locale"),defaultValue:{label:null===(a=X.find((function(e){return e.locale===O.Z.language})))||void 0===a?void 0:a.title,value:O.Z.language},options:null===X||void 0===X?void 0:X.map((function(e){return{value:e.locale,label:e.locale}}))})})}),(0,z.jsx)(o.Z,{span:12,children:(0,z.jsx)(c.Z.Item,{label:P("paypal.validate.ssl"),name:"paypal_validate_ssl",valuePropName:"checked",children:(0,z.jsx)(f.Z,{defaultChecked:!0})})})]}):"Stripe"===(null===J||void 0===J?void 0:J.label)?(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(o.Z,{span:12,children:(0,z.jsx)(c.Z.Item,{label:P("stripe.pk"),name:"stripe_pk",rules:[{required:!0,message:P("required")}],children:(0,z.jsx)(h.Z,{})})}),(0,z.jsx)(o.Z,{span:12,children:(0,z.jsx)(c.Z.Item,{label:P("stripe.sk"),name:"stripe_sk",rules:[{required:!0,message:P("required")}],children:(0,z.jsx)(h.Z,{})})})," ",(0,z.jsx)(o.Z,{span:12,children:(0,z.jsx)(c.Z.Item,{label:P("currency"),name:"currency",rules:[{required:!0,message:P("required")}],children:(0,z.jsx)(C.q,{placeholder:P("select.currency"),valuePropName:"label",defaultValue:{value:re.id,label:re.title},fetchOptions:function(){return N.Z.getAll().then((function(e){return e.data.filter((function(e){return e.active})).map((function(e){return{value:e.id,label:"".concat(e.title),key:e.id}}))}))}})})})]}):"Razorpay"===(null===J||void 0===J?void 0:J.label)?(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(o.Z,{span:12,children:(0,z.jsx)(c.Z.Item,{label:P("razorpay.key"),name:"razorpay_key",rules:[{required:!0,message:P("required")}],children:(0,z.jsx)(h.Z,{})})}),(0,z.jsx)(o.Z,{span:12,children:(0,z.jsx)(c.Z.Item,{label:P("razorpay.secret"),name:"razorpay_secret",rules:[{required:!0,message:P("required")}],children:(0,z.jsx)(h.Z,{})})})," ",(0,z.jsx)(o.Z,{span:12,children:(0,z.jsx)(c.Z.Item,{label:P("currency"),name:"currency",rules:[{required:!0,message:P("required")}],children:(0,z.jsx)(C.q,{placeholder:P("select.currency"),valuePropName:"label",defaultValue:{value:re.id,label:re.title},fetchOptions:function(){return N.Z.getAll().then((function(e){return e.data.filter((function(e){return e.active})).map((function(e){return{value:e.id,label:"".concat(e.title),key:e.id}}))}))}})})})]}):"FlutterWave"===(null===J||void 0===J?void 0:J.label)?(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(o.Z,{span:12,children:(0,z.jsx)(c.Z.Item,{label:P("payload.title"),name:"title",rules:[{required:!0,message:P("required")}],children:(0,z.jsx)(h.Z,{})})}),(0,z.jsx)(o.Z,{span:12,children:(0,z.jsx)(c.Z.Item,{label:P("payload.description"),name:"description",rules:[{required:!0,message:P("required")}],children:(0,z.jsx)(h.Z,{})})}),(0,z.jsx)(o.Z,{span:12,children:(0,z.jsx)(c.Z.Item,{label:P("flw_pk"),name:"flw_pk",rules:[{required:!0,message:P("required")}],children:(0,z.jsx)(h.Z,{})})}),(0,z.jsx)(o.Z,{span:12,children:(0,z.jsx)(c.Z.Item,{label:P("flw_sk"),name:"flw_sk",rules:[{required:!0,message:P("required")}],children:(0,z.jsx)(h.Z,{})})})," ",(0,z.jsx)(o.Z,{span:12,children:(0,z.jsx)(c.Z.Item,{label:P("key"),name:"key",rules:[{required:!0,message:P("required")}],children:(0,z.jsx)(h.Z,{})})}),(0,z.jsx)(o.Z,{span:12,children:(0,z.jsx)(c.Z.Item,{label:P("currency"),name:"currency",rules:[{required:!0,message:P("required")}],children:(0,z.jsx)(C.q,{placeholder:P("select.currency"),valuePropName:"label",defaultValue:{value:re.id,label:re.title},fetchOptions:function(){return N.Z.getAll().then((function(e){return e.data.filter((function(e){return e.active})).map((function(e){return{value:e.id,label:"".concat(e.title),key:e.id}}))}))}})})}),(0,z.jsx)(o.Z,{span:6,children:(0,z.jsx)(c.Z.Item,{label:P("logo"),children:(0,z.jsx)(F.Z,{type:"brands",imageList:ae,setImageList:ne,form:E,multiple:!1})})})]}):null]})]}),(0,z.jsx)("div",{className:"flex-grow-1 d-flex flex-column justify-content-end",children:(0,z.jsx)("div",{className:"pb-5",children:(0,z.jsx)(x.Z,{type:"primary",htmlType:"submit",loading:R,disabled:R,children:P("submit")})})})]})})}},86345:function(e,l,a){a.d(l,{Z:function(){return j}});var n=a(87462),r=a(4942),t=a(47313),i=a(29439),s=a(45987),c=a(46123),u=a.n(c),d=a(10288),o=a(49242),p=t.forwardRef((function(e,l){var a,n=e.prefixCls,c=void 0===n?"rc-switch":n,p=e.className,m=e.checked,h=e.defaultChecked,f=e.disabled,x=e.loadingIcon,Z=e.checkedChildren,v=e.unCheckedChildren,y=e.onClick,j=e.onChange,b=e.onKeyDown,g=(0,s.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),q=(0,d.Z)(!1,{value:m,defaultValue:h}),_=(0,i.Z)(q,2),k=_[0],I=_[1];function w(e,l){var a=k;return f||(I(a=e),null===j||void 0===j||j(a,l)),a}var C=u()(c,p,(a={},(0,r.Z)(a,"".concat(c,"-checked"),k),(0,r.Z)(a,"".concat(c,"-disabled"),f),a));return t.createElement("button",Object.assign({},g,{type:"button",role:"switch","aria-checked":k,disabled:f,className:C,ref:l,onKeyDown:function(e){e.which===o.Z.LEFT?w(!1,e):e.which===o.Z.RIGHT&&w(!0,e),null===b||void 0===b||b(e)},onClick:function(e){var l=w(!k,e);null===y||void 0===y||y(l,e)}}),x,t.createElement("span",{className:"".concat(c,"-inner")},k?Z:v))}));p.displayName="Switch";var m=p,h=a(82508),f=a(46479),x=a(91964),Z=a(21631),v=function(e,l){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&l.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)l.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},y=t.forwardRef((function(e,l){var a,i=e.prefixCls,s=e.size,c=e.loading,d=e.className,o=void 0===d?"":d,p=e.disabled,y=v(e,["prefixCls","size","loading","className","disabled"]),j=t.useContext(x.E_),b=j.getPrefixCls,g=j.direction,q=t.useContext(Z.Z),_=b("switch",i),k=t.createElement("div",{className:"".concat(_,"-handle")},c&&t.createElement(h.Z,{className:"".concat(_,"-loading-icon")})),I=u()((a={},(0,r.Z)(a,"".concat(_,"-small"),"small"===(s||q)),(0,r.Z)(a,"".concat(_,"-loading"),c),(0,r.Z)(a,"".concat(_,"-rtl"),"rtl"===g),a),o);return t.createElement(f.Z,{insertExtraNode:!0},t.createElement(m,(0,n.Z)({},y,{prefixCls:_,className:I,disabled:p||c,ref:l,loadingIcon:k})))}));y.__ANT_SWITCH=!0,y.displayName="Switch";var j=y}}]);