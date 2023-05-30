"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[9838],{53233:function(e,n,t){var a=t(1413),r=t(29439),i=t(47313),o=t(56140),l=t(67251),c=t(45705),s=t(86345),d=t(78267),u=t(37388),f=t(59491),h=t(99587),v=t(24511),p=t(46417),m=o.Z.Text;n.Z=function(e){var n=e.columns,t=void 0===n?[]:n,o=e.setColumns,Z=e.style,x=e.size,y=void 0===x?"":x,g=e.iconOnly,b=(0,v.$)().t,j=(0,i.useState)(!1),C=(0,r.Z)(j,2),w=C[0],k=C[1],I=(0,p.jsx)(l.Z,{children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,p.jsx)(l.Z.Item,{children:(0,p.jsxs)(c.Z,{className:"d-flex justify-content-between",children:[(0,p.jsx)(m,{children:e.title}),(0,p.jsx)(s.Z,{defaultChecked:!0,onClick:function(){return function(e){var n=null===t||void 0===t?void 0:t.map((function(n){return n.dataIndex===e.dataIndex&&(n.is_show=!(null!==n&&void 0!==n&&n.is_show)),n}));o(n)}(e)}})]})},e+n)}))});return(0,p.jsx)(d.Z,{overlay:I,trigger:["click"],onVisibleChange:function(e){k(e)},visible:w,children:(0,p.jsx)(u.Z,{title:b("change.columns"),children:(0,p.jsx)(f.Z,{style:(0,a.Z)({},Z),size:y,icon:(0,p.jsx)(h.Z,{}),children:g?null:b("Columns")})})})}},89281:function(e,n,t){t.d(n,{h:function(){return h}});var a=t(1413),r=t(29439),i=t(45987),o=t(47313),l=t(12279),c=t.n(l),s=t(74294),d=t(72652),u=t(46417),f=["fetchOptions","debounceTimeout"],h=function(e){var n=e.fetchOptions,t=e.debounceTimeout,l=void 0===t?400:t,h=(0,i.Z)(e,f),v=(0,o.useState)(!1),p=(0,r.Z)(v,2),m=p[0],Z=p[1],x=(0,o.useState)([]),y=(0,r.Z)(x,2),g=y[0],b=y[1],j=(0,o.useMemo)((function(){return c()((function(e){b([]),Z(!0),n(e).then((function(e){b(e),Z(!1)}))}),l)}),[n,l]);return(0,u.jsx)(s.Z,(0,a.Z)((0,a.Z)({showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:j,notFoundContent:m?(0,u.jsx)(d.Z,{size:"small"}):"no results"},h),{},{options:g,onFocus:function(){g.length||j("")}}))}},13945:function(e,n,t){function a(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}t.d(n,{Z:function(){return a}})},84017:function(e,n,t){function a(e){return e?(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$")+" "+Number(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,"):"0"}t.d(n,{Z:function(){return a}})},80314:function(e,n,t){var a=t(47313);n.Z=function(e,n){var t=(0,a.useRef)(!1);(0,a.useEffect)((function(){if(t.current)return e&&e();t.current=!0}),n)}},49838:function(e,n,t){t.r(n),t.d(n,{default:function(){return V}});var a=t(74165),r=t(15861),i=t(1413),o=t(29439),l=t(47313),c=t(73591),s=t(66204),d=t(59491),u=t(77181),f=t(45705),h=t(78508),v=t(31741),p=t(2717),m=t(90954),Z=t(24511),x=t(80314),y=t(13945),g=t(89281),b=t(49986),j=t(93655),C=t(84695),w=t(83371),k=t(51282),I=t(1003),_=t(84017),S=t(46417);function z(e){var n,t,a,r,i,c,u=e.id,f=e.handleCancel,h=(0,l.useState)({}),v=(0,o.Z)(h,2),p=v[0],m=v[1],x=(0,l.useState)(!1),y=(0,o.Z)(x,2),g=y[0],b=y[1],j=(0,Z.$)().t;return(0,l.useEffect)((function(){!function(e){b(!0),I.Z.getById(e).then((function(e){return m(e.data)})).finally((function(){return b(!1)}))}(u)}),[u]),(0,S.jsx)(C.Z,{visible:!!u,title:j("transaction"),onCancel:f,footer:(0,S.jsx)(d.Z,{type:"default",onClick:f,children:j("cancel")}),children:g?(0,S.jsx)(k.Z,{}):(0,S.jsxs)(w.Z,{bordered:!0,children:[(0,S.jsx)(w.Z.Item,{span:3,label:j("transaction.id"),children:p.id}),(0,S.jsxs)(w.Z.Item,{span:3,label:j("client"),children:[null===(n=p.user)||void 0===n?void 0:n.firstname," ",(null===(t=p.user)||void 0===t?void 0:t.lastname)||""]}),(0,S.jsx)(w.Z.Item,{span:3,label:j("price"),children:(0,_.Z)(p.price,null===(a=p.payable)||void 0===a||null===(r=a.order)||void 0===r||null===(i=r.currency)||void 0===i?void 0:i.symbol)}),(0,S.jsx)(w.Z.Item,{span:3,label:j("payment.type"),children:j(null===(c=p.payment_system)||void 0===c?void 0:c.tag)}),(0,S.jsx)(w.Z.Item,{span:3,label:j("created.at"),children:p.created_at}),(0,S.jsx)(w.Z.Item,{span:3,label:j("status"),children:"progress"===p.status?(0,S.jsx)(s.Z,{color:"gold",children:j(p.status)}):"rejected"===p.status?(0,S.jsx)(s.Z,{color:"error",children:j(p.status)}):(0,S.jsx)(s.Z,{color:"cyan",children:j(p.status)})}),(0,S.jsx)(w.Z.Item,{span:3,label:j("status.description"),children:p.status_description}),(0,S.jsx)(w.Z.Item,{span:3,label:j("note"),children:p.note})]})})}var N=t(53233),O=c.Z.TabPane,E=["all","progress","paid","rejected"];function V(){var e,n,t,C,w=(0,p.I0)(),k=(0,Z.$)().t,I=(0,l.useState)(null),V=(0,o.Z)(I,2),H=V[0],P=V[1],T=(0,l.useState)([{title:k("id"),dataIndex:"id",key:"id",sorter:!0,is_show:!0},{title:k("client"),dataIndex:"user",key:"user",is_show:!0,render:function(e){return(0,S.jsxs)("div",{children:[null===e||void 0===e?void 0:e.firstname," ",(null===e||void 0===e?void 0:e.lastname)||""]})}},{title:k("amount"),dataIndex:"price",key:"price",is_show:!0,render:function(e,n){var t,a,r;return(0,_.Z)(e,null===(t=n.payable)||void 0===t||null===(a=t.order)||void 0===a||null===(r=a.currency)||void 0===r?void 0:r.symbol)}},{title:k("payment.type"),dataIndex:"payment_system",key:"payment_system",is_show:!0,render:function(e){return null===e||void 0===e?void 0:e.tag}},{title:k("status"),dataIndex:"status",key:"status",is_show:!0,render:function(e){return(0,S.jsx)("div",{children:"progress"===e?(0,S.jsx)(s.Z,{color:"gold",children:k(e)}):"rejected"===e?(0,S.jsx)(s.Z,{color:"error",children:k(e)}):(0,S.jsx)(s.Z,{color:"cyan",children:k(e)})})}},{title:k("status.note"),dataIndex:"status_description",key:"status_description",is_show:!0},{title:k("created.at"),dataIndex:"created_at",key:"created_at",is_show:!0},{title:k("options"),key:"options",is_show:!0,render:function(e,n){return(0,S.jsx)(d.Z,{icon:(0,S.jsx)(v.Z,{}),onClick:function(){return function(e){P(e.id)}(n)}})}}]),M=(0,o.Z)(T,2),K=M[0],R=M[1],$=(0,p.v9)((function(e){return e.menu}),p.wU).activeMenu,D=(0,l.useState)("all"),F=(0,o.Z)(D,2),A=F[0],B=F[1],U=(0,p.v9)((function(e){return e.transaction}),p.wU),W=U.transactions,G=U.meta,L=U.loading,q=U.params,J=(null===(e=$.data)||void 0===e?void 0:e.role)||A,Q=$.data,X={sort:null===Q||void 0===Q?void 0:Q.sort,column:null===Q||void 0===Q?void 0:Q.column,perPage:null===Q||void 0===Q?void 0:Q.perPage,page:null===Q||void 0===Q?void 0:Q.page,user_id:null===Q||void 0===Q?void 0:Q.userId,status:"all"===(null===Q||void 0===Q?void 0:Q.role)||null===Q||void 0===Q?void 0:Q.role};(0,x.Z)((function(){w((0,j.mC)(X))}),[$.data]),(0,l.useEffect)((function(){$.refetch&&(w((0,j.mC)(q)),w((0,m.A_)($)))}),[$.refetch]);var Y=function(e){var n=$.data;w((0,m.nc)({activeMenu:$,data:(0,i.Z)((0,i.Z)({},n),e)}))};function ee(){return ee=(0,r.Z)((0,a.Z)().mark((function e(n){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={search:n,perPage:10},e.abrupt("return",b.Z.search(t).then((function(e){return e.data.map((function(e){return{label:"".concat(e.firstname," ").concat(e.lastname),value:e.id}}))})));case 2:case"end":return e.stop()}}),e)}))),ee.apply(this,arguments)}return(0,S.jsxs)(u.Z,{title:k("transactions"),extra:(0,S.jsxs)(f.Z,{wrap:!0,children:[(0,S.jsx)(g.h,{placeholder:k("select.client"),fetchOptions:function(e){return ee.apply(this,arguments)},onSelect:function(e){return Y({userId:e.value})},onDeselect:function(){return Y({userId:null})},style:{minWidth:200}}),(0,S.jsx)(N.Z,{columns:K,setColumns:R})]}),children:[(0,S.jsx)(c.Z,{onChange:function(e){Y({role:e,page:1}),B(e)},type:"card",activeKey:J,children:E.map((function(e){return(0,S.jsx)(O,{tab:k(e)},e)}))}),(0,S.jsx)(h.Z,{scroll:{x:!0},columns:null===K||void 0===K?void 0:K.filter((function(e){return e.is_show})),dataSource:W,loading:L,pagination:{pageSize:q.perPage,page:(null===(n=$.data)||void 0===n?void 0:n.page)||1,total:G.total,defaultCurrent:null===(t=$.data)||void 0===t?void 0:t.page,current:null===(C=$.data)||void 0===C?void 0:C.page},rowKey:function(e){return e.id},onChange:function(e,n,t){var a=e.pageSize,r=e.current,o=t.field,l=t.order,c=(0,y.Z)(l);w((0,m.nc)({activeMenu:$,data:(0,i.Z)((0,i.Z)({},Q),{},{perPage:a,page:r,column:o,sort:c})}))}}),H&&(0,S.jsx)(z,{id:H,handleCancel:function(){return P(null)}})]})}},99587:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(1413),r=t(47313),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"},o=t(17469),l=function(e,n){return r.createElement(o.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:n,icon:i}))};l.displayName="TableOutlined";var c=r.forwardRef(l)},86345:function(e,n,t){t.d(n,{Z:function(){return g}});var a=t(87462),r=t(4942),i=t(47313),o=t(29439),l=t(45987),c=t(46123),s=t.n(c),d=t(10288),u=t(49242),f=i.forwardRef((function(e,n){var t,a=e.prefixCls,c=void 0===a?"rc-switch":a,f=e.className,h=e.checked,v=e.defaultChecked,p=e.disabled,m=e.loadingIcon,Z=e.checkedChildren,x=e.unCheckedChildren,y=e.onClick,g=e.onChange,b=e.onKeyDown,j=(0,l.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),C=(0,d.Z)(!1,{value:h,defaultValue:v}),w=(0,o.Z)(C,2),k=w[0],I=w[1];function _(e,n){var t=k;return p||(I(t=e),null===g||void 0===g||g(t,n)),t}var S=s()(c,f,(t={},(0,r.Z)(t,"".concat(c,"-checked"),k),(0,r.Z)(t,"".concat(c,"-disabled"),p),t));return i.createElement("button",Object.assign({},j,{type:"button",role:"switch","aria-checked":k,disabled:p,className:S,ref:n,onKeyDown:function(e){e.which===u.Z.LEFT?_(!1,e):e.which===u.Z.RIGHT&&_(!0,e),null===b||void 0===b||b(e)},onClick:function(e){var n=_(!k,e);null===y||void 0===y||y(n,e)}}),m,i.createElement("span",{className:"".concat(c,"-inner")},k?Z:x))}));f.displayName="Switch";var h=f,v=t(82508),p=t(46479),m=t(91964),Z=t(21631),x=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t},y=i.forwardRef((function(e,n){var t,o=e.prefixCls,l=e.size,c=e.loading,d=e.className,u=void 0===d?"":d,f=e.disabled,y=x(e,["prefixCls","size","loading","className","disabled"]),g=i.useContext(m.E_),b=g.getPrefixCls,j=g.direction,C=i.useContext(Z.Z),w=b("switch",o),k=i.createElement("div",{className:"".concat(w,"-handle")},c&&i.createElement(v.Z,{className:"".concat(w,"-loading-icon")})),I=s()((t={},(0,r.Z)(t,"".concat(w,"-small"),"small"===(l||C)),(0,r.Z)(t,"".concat(w,"-loading"),c),(0,r.Z)(t,"".concat(w,"-rtl"),"rtl"===j),t),u);return i.createElement(p.Z,{insertExtraNode:!0},i.createElement(h,(0,a.Z)({},y,{prefixCls:w,className:I,disabled:f||c,ref:n,loadingIcon:k})))}));y.__ANT_SWITCH=!0,y.displayName="Switch";var g=y}}]);