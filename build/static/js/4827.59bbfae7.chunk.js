(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[4827],{55940:function(e,n,t){"use strict";t.d(n,{Z:function(){return v}});var i=t(1413),r=t(45987),a=(t(47313),t(59491)),l=t(47515),c=t(34491),o=t(24511),s=t(79492),u=t(46417),d=["size","onClick","type"];function v(e){var n=e.size,t=void 0===n?"":n,v=e.onClick,f=e.type,h=void 0===f?"default":f,Z=(0,r.Z)(e,d),m=(0,o.$)().t,p=(0,s.Z)().isDemo;return(0,u.jsx)(a.Z,(0,i.Z)({size:t,icon:(0,u.jsx)(l.Z,{}),onClick:function(e){p?c.Am.warning(m("cannot.work.demo")):v(e)},type:h},Z))}},53233:function(e,n,t){"use strict";var i=t(1413),r=t(29439),a=t(47313),l=t(56140),c=t(67251),o=t(45705),s=t(86345),u=t(78267),d=t(37388),v=t(59491),f=t(99587),h=t(24511),Z=t(46417),m=l.Z.Text;n.Z=function(e){var n=e.columns,t=void 0===n?[]:n,l=e.setColumns,p=e.style,x=e.size,y=void 0===x?"":x,g=e.iconOnly,j=(0,h.$)().t,w=(0,a.useState)(!1),b=(0,r.Z)(w,2),C=b[0],_=b[1],k=(0,Z.jsx)(c.Z,{children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,Z.jsx)(c.Z.Item,{children:(0,Z.jsxs)(o.Z,{className:"d-flex justify-content-between",children:[(0,Z.jsx)(m,{children:e.title}),(0,Z.jsx)(s.Z,{defaultChecked:!0,onClick:function(){return function(e){var n=null===t||void 0===t?void 0:t.map((function(n){return n.dataIndex===e.dataIndex&&(n.is_show=!(null!==n&&void 0!==n&&n.is_show)),n}));l(n)}(e)}})]})},e+n)}))});return(0,Z.jsx)(u.Z,{overlay:k,trigger:["click"],onVisibleChange:function(e){_(e)},visible:C,children:(0,Z.jsx)(d.Z,{title:j("change.columns"),children:(0,Z.jsx)(v.Z,{style:(0,i.Z)({},p),size:y,icon:(0,Z.jsx)(f.Z,{}),children:g?null:j("Columns")})})})}},51988:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});t(47313);var i=t(24511),r=t(66188),a=t.p+"static/media/noproductsfound.1cec73868b5fd048b865.riv",l=t.p+"static/media/noresult.ac4af107751f94856a9c.riv",c=t.p+"static/media/nosell.32cb2c2cc548a15c820d.riv",o=t(46417);var s=function(e){var n=e.id,t=void 0===n?"noresult":n,s=e.text,u=void 0===s?"":s,d=(0,i.$)().t,v={src:{noproductsfound:a,noresult:l,nosell:c}[t],artboard:"New Artboard",autoplay:!0},f=(0,r.useRive)(v).RiveComponent;return(0,o.jsxs)("div",{className:"animation-canvas",children:[(0,o.jsx)("div",{style:{width:"100%",height:200},children:(0,o.jsx)(f,{})}),(0,o.jsx)("div",{className:"text",children:d(u)})]})}},41481:function(e,n,t){"use strict";t.d(n,{Z:function(){return v}});var i=t(1413),r=t(29439),a=t(45987),l=t(47313),c=t(66672),o=t(16031),s=t(40765),u=t(46417),d=["handleChange","defaultValue","resetSearch"];function v(e){var n=e.handleChange,t=e.defaultValue,v=e.resetSearch,f=(0,a.Z)(e,d),h=(0,l.useState)(t),Z=(0,r.Z)(h,2),m=Z[0],p=Z[1],x=(0,l.useMemo)((function(){return(0,o.debounce)((function(e){n(e)}),800)}),[]);return(0,l.useEffect)((function(){p(t)}),[v]),(0,u.jsx)(c.Z,(0,i.Z)({value:m,onChange:function(e){p(e.target.value),x(e.target.value)},prefix:(0,u.jsx)(s.Z,{})},f))}},89281:function(e,n,t){"use strict";t.d(n,{h:function(){return f}});var i=t(1413),r=t(29439),a=t(45987),l=t(47313),c=t(12279),o=t.n(c),s=t(74294),u=t(72652),d=t(46417),v=["fetchOptions","debounceTimeout"],f=function(e){var n=e.fetchOptions,t=e.debounceTimeout,c=void 0===t?400:t,f=(0,a.Z)(e,v),h=(0,l.useState)(!1),Z=(0,r.Z)(h,2),m=Z[0],p=Z[1],x=(0,l.useState)([]),y=(0,r.Z)(x,2),g=y[0],j=y[1],w=(0,l.useMemo)((function(){return o()((function(e){j([]),p(!0),n(e).then((function(e){j(e),p(!1)}))}),c)}),[n,c]);return(0,d.jsx)(s.Z,(0,i.Z)((0,i.Z)({showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:w,notFoundContent:m?(0,d.jsx)(u.Z,{size:"small"}):"no results"},f),{},{options:g,onFocus:function(){g.length||w("")}}))}},13945:function(e,n,t){"use strict";function i(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}t.d(n,{Z:function(){return i}})},84017:function(e,n,t){"use strict";function i(e){return e?(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$")+" "+Number(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,"):"0"}t.d(n,{Z:function(){return i}})},80314:function(e,n,t){"use strict";var i=t(47313);n.Z=function(e,n){var t=(0,i.useRef)(!1);(0,i.useEffect)((function(){if(t.current)return e&&e();t.current=!0}),n)}},33834:function(e,n,t){"use strict";t.d(n,{K:function(){return o}});var i=t(4942),r=t(1413),a=t(58467),l=t(74776),c=t.n(l),o=function(){var e=(0,a.s0)(),n=(0,a.TH)(),t=c().parse(n.search,{ignoreQueryPrefix:!0});return{values:t,set:function(n,a){return e({search:c().stringify((0,r.Z)((0,r.Z)({},t),{},(0,i.Z)({},n,a)))})},reset:function(n){var i=(0,r.Z)({},t);i[n]&&delete i[n],e({search:c().stringify((0,r.Z)({},i))})},clear:function(){return e({search:c().stringify({})})},merge:function(n){return e({search:c().stringify((0,r.Z)((0,r.Z)({},t),n))})}}}},48101:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return G}});var i=t(74165),r=t(15861),a=t(4942),l=t(1413),c=t(93433),o=t(29439),s=t(47313),u=t(73591),d=t(66204),v=t(59491),f=t(45705),h=t(77181),Z=t(74294),m=t(78508),p=t(58467),x=t(12019),y=t(31741),g=t(47515),j=t(55768),w=t(15386),b=t(2717),C=t(90954),_=t(74580),k=t(34491),S=t(24511),z=t(73270),N=t(89281),V=t(33834),I=t(40197),H=t(77242),O=t(80314),E=t(13945),P=t(41481),M=t(84017),T=t(58328),U=t(53233),A=t(55940),D=t(69658),R=t(90046),F=t(75052),K=t(23310),$=t(5964),L=t(51988),B=t(46417),q=u.Z.TabPane;function G(){var e,n,t,G,W,Q,J,X,Y,ee=(0,b.I0)(),ne=(0,p.s0)(),te=(0,S.$)().t,ie=(0,s.useState)(null),re=(0,o.Z)(ie,2),ae=re[0],le=re[1],ce=(0,s.useState)(null),oe=(0,o.Z)(ce,2),se=oe[0],ue=oe[1],de=(0,s.useContext)(_._).setIsModalVisible,ve=(0,s.useState)(!1),fe=(0,o.Z)(ve,2),he=fe[0],Ze=fe[1],me=(0,b.v9)((function(e){return e.currency}),b.wU).defaultCurrency,pe=(0,b.v9)((function(e){return e.orderStatus}),b.wU).statusList,xe=[{name:"all",id:"7",active:!0}].concat((0,c.Z)(pe),[{name:"deleted_at",id:"8",active:!0}]),ye=(0,s.useState)(null),ge=(0,o.Z)(ye,2),je=ge[0],we=ge[1],be=(0,s.useState)(null),Ce=(0,o.Z)(be,2),_e=Ce[0],ke=Ce[1],Se=(0,s.useState)([{title:te("id"),dataIndex:"id",key:"id",sorter:!0,is_show:!0},{title:te("client"),dataIndex:"user",key:"user",is_show:!0,render:function(e){return(0,B.jsxs)("div",{children:[e.firstname," ",e.lastname||""]})}},{title:te("status"),is_show:!0,dataIndex:"status",key:"status",render:function(e,n){return(0,B.jsxs)("div",{onClick:function(e){e.stopPropagation(),ke(n)},className:"cursor-pointer",children:["new"===e?(0,B.jsx)(d.Z,{color:"blue",children:te(e)}):"canceled"===e?(0,B.jsx)(d.Z,{color:"error",children:te(e)}):(0,B.jsx)(d.Z,{color:"cyan",children:te(e)}),"delivered"===e||"canceled"===e||n.deleted_at?"":(0,B.jsx)(x.Z,{disabled:n.deleted_at})]})}},{title:te("deliveryman"),is_show:!0,dataIndex:"deliveryman",key:"deliveryman",render:function(e,n){return(0,B.jsx)("div",{children:"ready"===n.status&&"pickup"!==n.delivery_type?(0,B.jsx)(v.Z,{disabled:n.deleted_at,type:"link",onClick:function(){return we(n)},children:(0,B.jsxs)(f.Z,{children:[e?"".concat(e.firstname," ").concat(e.lastname||""):te("add.deliveryman"),(0,B.jsx)(x.Z,{})]})}):(0,B.jsxs)("div",{children:[null===e||void 0===e?void 0:e.firstname," ",(null===e||void 0===e?void 0:e.lastname)||""]})})}},{title:te("number.of.products"),dataIndex:"order_details_count",key:"order_details_count",is_show:!0,render:function(e){return(0,B.jsxs)("div",{className:"text-lowercase",children:[e||0," ",te("products")]})}},{title:te("amount"),dataIndex:"total_price",key:"total_price",is_show:!0,render:function(e){return(0,M.Z)(e,null===me||void 0===me?void 0:me.symbol)}},{title:te("payment.type"),dataIndex:"transaction",key:"transaction",is_show:!0,render:function(e){var n;return te(null===e||void 0===e||null===(n=e.payment_system)||void 0===n?void 0:n.tag)||"-"}},{title:te("created.at"),is_show:!0,dataIndex:"created_at",key:"created_at"},{title:te("delivery.date"),is_show:!0,dataIndex:"delivery_date",key:"delivery_date"},{title:te("options"),key:"options",is_show:!0,render:function(e,n){return(0,B.jsxs)(f.Z,{children:[(0,B.jsx)(v.Z,{icon:(0,B.jsx)(y.Z,{}),onClick:function(){return function(e){ee((0,C.bL)({url:"waiter/order/details/".concat(e.id),id:"order_details",name:te("order.details")})),ne("/waiter/order/details/".concat(e.id))}(n)}}),(0,B.jsx)(A.Z,{icon:(0,B.jsx)(g.Z,{}),onClick:function(){le([n.id]),de(!0),ue(!0)}})]})}}]),ze=(0,o.Z)(Se,2),Ne=ze[0],Ve=ze[1],Ie=(0,b.v9)((function(e){return e.menu}),b.wU).activeMenu,He=(0,V.K)(),Oe=(0,s.useState)(He.values.status||"all"),Ee=(0,o.Z)(Oe,2),Pe=Ee[0],Me=Ee[1],Te=(null===(e=Ie.data)||void 0===e?void 0:e.role)||Pe,Ue=(0,b.v9)((function(e){return e.waiterOrder}),b.wU),Ae=Ue.orders,De=Ue.meta,Re=Ue.loading,Fe=Ue.params,Ke=null===Ie||void 0===Ie?void 0:Ie.data,$e={search:null===Ke||void 0===Ke?void 0:Ke.search,sort:null===Ke||void 0===Ke?void 0:Ke.sort,column:null===Ke||void 0===Ke?void 0:Ke.column,perPage:null===Ke||void 0===Ke?void 0:Ke.perPage,page:null===Ke||void 0===Ke?void 0:Ke.page,user_id:null===Ke||void 0===Ke?void 0:Ke.user_id,status:"deleted_at"!==Te&&Te,deleted_at:"deleted_at"===Te?"deleted_at":void 0,shop_id:null!==(null===(n=Ie.data)||void 0===n?void 0:n.shop_id)?null===(t=Ie.data)||void 0===t?void 0:t.shop_id:null,delivery_type:null!==(null===(G=Ie.data)||void 0===G?void 0:G.delivery_type)?null===(W=Ie.data)||void 0===W?void 0:W.delivery_type:null};(0,O.Z)((function(){ee((0,H.AU)($e))}),[null===Ie||void 0===Ie?void 0:Ie.data]),(0,s.useEffect)((function(){null!==Ie&&void 0!==Ie&&Ie.refetch&&(ee((0,H.AU)($e)),ee((0,I.ZL)()),ee((0,C.A_)(Ie)))}),[null===Ie||void 0===Ie?void 0:Ie.refetch]);var Le=function(e,n){ee((0,C.nc)({activeMenu:Ie,data:(0,l.Z)((0,l.Z)({},Ke),{},(0,a.Z)({},n,e))}))};function Be(){return Be=(0,r.Z)((0,i.Z)().mark((function e(n){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={search:n,perPage:10},e.abrupt("return",T.Z.getAll(t).then((function(e){return e.data.map((function(e){return{label:"".concat(e.firstname," ").concat(e.lastname),value:e.id}}))})));case 2:case"end":return e.stop()}}),e)}))),Be.apply(this,arguments)}var qe={selectedRowKeys:ae,onChange:function(e){le(e)}},Ge=function(){we(null),ke(null)};return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(f.Z,{className:"justify-content-end w-100 mb-3",children:[(0,B.jsx)($.Z,{listType:"waiter/orders"}),(0,B.jsx)(v.Z,{type:"primary",icon:(0,B.jsx)(j.Z,{}),onClick:function(){ee((0,z.bn)()),ee((0,C.bL)({id:"pos.system",url:"waiter/pos-system",name:te("add.order")})),ne("/waiter/pos-system")},style:{width:"100%"},children:te("add.order")})]}),(0,B.jsx)(h.Z,{children:(0,B.jsxs)(f.Z,{wrap:!0,className:"p-0 mb-0",children:[(0,B.jsx)(P.Z,{placeholder:te("search"),handleChange:function(e){return Le(e,"search")},defaultValue:null===(Q=Ie.data)||void 0===Q?void 0:Q.search}),(0,B.jsx)(N.h,{placeholder:te("select.client"),fetchOptions:function(e){return Be.apply(this,arguments)},onSelect:function(e){return Le(e.value,"search")},onDeselect:function(){return Le(null,"search")},style:{minWidth:200}}),(0,B.jsx)(Z.Z,{value:null===Ke||void 0===Ke?void 0:Ke.delivery_type,placeholder:te("order.type"),onSelect:function(e){return Le(e,"delivery_type")},options:[{label:te("pickup"),value:"pickup"},{label:te("delivery"),value:"delivery"}],allowClear:!0,style:{width:"100%"}}),(0,B.jsx)(v.Z,{icon:(0,B.jsx)(w.Z,{}),onClick:function(){(0,b.dC)((function(){ee((0,H.H5)()),ee((0,C.nc)({activeMenu:Ie,data:null}))})),ee((0,H.AU)({status:"all",page:null===Ke||void 0===Ke?void 0:Ke.page,perPage:10}))},children:te("clear")}),(0,B.jsx)(A.Z,{size:"",onClick:function(){null===ae||0===ae.length?k.Am.warning(te("select.the.product")):(de(!0),ue(!1))},children:te("delete.selected")}),(0,B.jsx)(U.Z,{columns:Ne,setColumns:Ve})]})}),(0,B.jsxs)(h.Z,{children:[(0,B.jsx)(u.Z,{onChange:function(e){var n=e;ee((0,C.nc)({activeMenu:Ie,data:{role:n,page:1}})),Me(e),ne("?status=".concat(n))},type:"card",activeKey:Te,children:xe.filter((function(e){return!0===e.active})).map((function(e){return(0,B.jsx)(q,{tab:te(e.name)},e.name)}))}),(0,B.jsx)(m.Z,{locale:{emptyText:(0,B.jsx)(L.Z,{})},scroll:{x:!0},rowSelection:qe,columns:null===Ne||void 0===Ne?void 0:Ne.filter((function(e){return e.is_show})),dataSource:Ae,loading:Re,pagination:{pageSize:Fe.perPage,page:(null===(J=Ie.data)||void 0===J?void 0:J.page)||1,total:null===De||void 0===De?void 0:De.total,defaultCurrent:null===(X=Ie.data)||void 0===X?void 0:X.page,current:null===(Y=Ie.data)||void 0===Y?void 0:Y.page},rowKey:function(e){return e.id},onChange:function(e,n,t){var i=e.pageSize,r=e.current,a=t.field,c=t.order,o=(0,E.Z)(c);ee((0,C.nc)({activeMenu:Ie,data:(0,l.Z)((0,l.Z)({},Ke),{},{perPage:i,page:r,column:a,sort:o})}))}}),(0,B.jsx)(D.Z,{click:function(){Ze(!0);var e=(0,l.Z)({},Object.assign.apply(Object,[{}].concat((0,c.Z)(ae.map((function(e,n){return(0,a.Z)({},"ids[".concat(n,"]"),e)}))))));R.Z.delete(e).then((function(){k.Am.success(te("successfully.deleted")),de(!1),ee((0,H.AU)($e)),ue(null)})).finally((function(){return Ze(!1)}))},text:te(se?"delete":"all.delete"),loading:he,setText:le})]}),_e&&(0,B.jsx)(K.Z,{orderDetails:_e,handleCancel:Ge,status:pe,paramsData:$e}),je&&(0,B.jsx)(F.Z,{orderDetails:je,handleCancel:Ge})]})}},5964:function(e,n,t){"use strict";var i=t(39180),r=(t(47313),t(58821)),a=t(54972),l=t(58467),c=t(46417),o=[{value:"waiter/orders-board",title:"Board",icon:(0,c.jsx)(a.Ez2,{size:20})},{value:"waiter/orders",title:"List",icon:(0,c.jsx)(r.Ps6,{size:20})}];n.Z=function(e){var n=e.listType,t=(0,l.UO)().type,r=(0,l.s0)();return(0,c.jsx)(i.ZP.Group,{value:n,onChange:function(e){r("/".concat(e.target.value).concat(t?"/".concat(t):""))},className:"float-right",buttonStyle:"solid",children:null===o||void 0===o?void 0:o.map((function(e){return(0,c.jsx)(i.ZP.Button,{value:e.value,children:(0,c.jsxs)("div",{className:"d-flex align-items-center",style:{gap:"10px"},children:[e.icon,e.title]})},e.value)}))})}},75052:function(e,n,t){"use strict";t.d(n,{Z:function(){return p}});var i=t(1413),r=t(29439),a=t(47313),l=t(18197),c=t(84695),o=t(59491),s=t(68197),u=t(59624),d=t(74294),v=t(2717),f=t(90046),h=t(90954),Z=t(24511),m=t(46417);function p(e){var n,t=e.orderDetails,p=e.handleCancel,x=(0,Z.$)().t,y=(0,v.v9)((function(e){return e.menu}),v.wU).activeMenu,g=(0,v.v9)((function(e){return e.deliveryman}),v.wU).deliverymans,j=l.Z.useForm(),w=(0,r.Z)(j,1)[0],b=(0,v.I0)(),C=(0,a.useState)(!1),_=(0,r.Z)(C,2),k=_[0],S=_[1];return(0,m.jsx)(c.Z,{visible:!!t,title:t.title,onCancel:p,footer:[(0,m.jsx)(o.Z,{type:"primary",onClick:function(){return w.submit()},loading:k,children:x("save")}),(0,m.jsx)(o.Z,{type:"default",onClick:p,children:x("cancel")})],children:(0,m.jsx)(l.Z,{form:w,layout:"vertical",onFinish:function(e){var n=(0,i.Z)({},e);S(!0),f.Z.updateDelivery(t.id,n).then((function(){p(),b((0,h.xo)(y))})).finally((function(){return S(!1)}))},initialValues:{deliveryman:null===(n=t.deliveryman)||void 0===n?void 0:n.id},children:(0,m.jsx)(s.Z,{gutter:12,children:(0,m.jsx)(u.Z,{span:24,children:(0,m.jsx)(l.Z.Item,{label:x("deliveryman"),name:"deliveryman",rules:[{required:!0,message:x("required")}],children:(0,m.jsx)(d.Z,{children:g.map((function(e,n){return(0,m.jsxs)(d.Z.Option,{value:e.id,className:"d-block",children:[e.firstname," ",e.lastname||""]},e.id)}))})})})})})})}},23310:function(e,n,t){"use strict";t.d(n,{Z:function(){return x}});var i=t(1413),r=t(29439),a=t(47313),l=t(18197),c=t(84695),o=t(59491),s=t(68197),u=t(59624),d=t(74294),v=t(2717),f=t(24511),h=t(90046),Z=t(90954),m=t(46417),p=["new","accepted","ready","on_a_way","delivered"];function x(e){var n=e.orderDetails,t=e.handleCancel,x=(0,v.v9)((function(e){return e.menu}),v.wU).activeMenu,y=l.Z.useForm(),g=(0,r.Z)(y,1)[0],j=(0,v.I0)(),w=(0,f.$)().t,b=(0,a.useState)(!1),C=(0,r.Z)(b,2),_=C[0],k=C[1],S=(0,a.useState)(p),z=(0,r.Z)(S,2),N=z[0],V=z[1];(0,a.useEffect)((function(){var e=p.findIndex((function(e){return e===n.status})),t=[p[e],p[e+1],"canceled"];e<0&&(t=[p[e+1],"canceled"]),V(t)}),[n]);return(0,m.jsx)(c.Z,{visible:!!n,title:n.title,onCancel:t,footer:[(0,m.jsx)(o.Z,{type:"primary",onClick:function(){return g.submit()},loading:_,children:w("save")}),(0,m.jsx)(o.Z,{type:"default",onClick:t,children:w("cancel")})],children:(0,m.jsx)(l.Z,{form:g,layout:"vertical",onFinish:function(e){k(!0);var r=(0,i.Z)({},e);h.Z.updateStatus(n.id,r).then((function(){t(),j((0,Z.xo)(x))})).finally((function(){return k(!1)}))},initialValues:{status:n.status},children:(0,m.jsx)(s.Z,{gutter:12,children:(0,m.jsx)(u.Z,{span:24,children:(0,m.jsx)(l.Z.Item,{label:w("status"),name:"status",rules:[{required:!0,message:w("required")}],children:(0,m.jsx)(d.Z,{children:N.map((function(e,n){return(0,m.jsx)(d.Z.Option,{value:e,children:w(e)},e+n)}))})})})})})})}},15386:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var i=t(1413),r=t(47313),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M899.1 869.6l-53-305.6H864c14.4 0 26-11.6 26-26V346c0-14.4-11.6-26-26-26H618V138c0-14.4-11.6-26-26-26H432c-14.4 0-26 11.6-26 26v182H160c-14.4 0-26 11.6-26 26v192c0 14.4 11.6 26 26 26h17.9l-53 305.6a25.95 25.95 0 0025.6 30.4h723c1.5 0 3-.1 4.4-.4a25.88 25.88 0 0021.2-30zM204 390h272V182h72v208h272v104H204V390zm468 440V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H416V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H202.8l45.1-260H776l45.1 260H672z"}}]},name:"clear",theme:"outlined"},l=t(17469),c=function(e,n){return r.createElement(l.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:a}))};c.displayName="ClearOutlined";var o=r.forwardRef(c)},55768:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var i=t(1413),r=t(47313),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"},l=t(17469),c=function(e,n){return r.createElement(l.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:a}))};c.displayName="PlusCircleOutlined";var o=r.forwardRef(c)},99587:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var i=t(1413),r=t(47313),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"},l=t(17469),c=function(e,n){return r.createElement(l.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:a}))};c.displayName="TableOutlined";var o=r.forwardRef(c)},86345:function(e,n,t){"use strict";t.d(n,{Z:function(){return g}});var i=t(87462),r=t(4942),a=t(47313),l=t(29439),c=t(45987),o=t(46123),s=t.n(o),u=t(10288),d=t(49242),v=a.forwardRef((function(e,n){var t,i=e.prefixCls,o=void 0===i?"rc-switch":i,v=e.className,f=e.checked,h=e.defaultChecked,Z=e.disabled,m=e.loadingIcon,p=e.checkedChildren,x=e.unCheckedChildren,y=e.onClick,g=e.onChange,j=e.onKeyDown,w=(0,c.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),b=(0,u.Z)(!1,{value:f,defaultValue:h}),C=(0,l.Z)(b,2),_=C[0],k=C[1];function S(e,n){var t=_;return Z||(k(t=e),null===g||void 0===g||g(t,n)),t}var z=s()(o,v,(t={},(0,r.Z)(t,"".concat(o,"-checked"),_),(0,r.Z)(t,"".concat(o,"-disabled"),Z),t));return a.createElement("button",Object.assign({},w,{type:"button",role:"switch","aria-checked":_,disabled:Z,className:z,ref:n,onKeyDown:function(e){e.which===d.Z.LEFT?S(!1,e):e.which===d.Z.RIGHT&&S(!0,e),null===j||void 0===j||j(e)},onClick:function(e){var n=S(!_,e);null===y||void 0===y||y(n,e)}}),m,a.createElement("span",{className:"".concat(o,"-inner")},_?p:x))}));v.displayName="Switch";var f=v,h=t(82508),Z=t(46479),m=t(91964),p=t(21631),x=function(e,n){var t={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)n.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(t[i[r]]=e[i[r]])}return t},y=a.forwardRef((function(e,n){var t,l=e.prefixCls,c=e.size,o=e.loading,u=e.className,d=void 0===u?"":u,v=e.disabled,y=x(e,["prefixCls","size","loading","className","disabled"]),g=a.useContext(m.E_),j=g.getPrefixCls,w=g.direction,b=a.useContext(p.Z),C=j("switch",l),_=a.createElement("div",{className:"".concat(C,"-handle")},o&&a.createElement(h.Z,{className:"".concat(C,"-loading-icon")})),k=s()((t={},(0,r.Z)(t,"".concat(C,"-small"),"small"===(c||b)),(0,r.Z)(t,"".concat(C,"-loading"),o),(0,r.Z)(t,"".concat(C,"-rtl"),"rtl"===w),t),d);return a.createElement(Z.Z,{insertExtraNode:!0},a.createElement(f,(0,i.Z)({},y,{prefixCls:C,className:k,disabled:v||o,ref:n,loadingIcon:_})))}));y.__ANT_SWITCH=!0,y.displayName="Switch";var g=y},24654:function(){}}]);