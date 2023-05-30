"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[4741],{4014:function(i,s,e){function l(i){var s,e,l=null===i||void 0===i?void 0:i.slice(0,1),d=null===i||void 0===i?void 0:i.lastIndexOf("@"),n=null===i||void 0===i?void 0:i.slice(1,d-1);n=null===(s=n)||void 0===s?void 0:s.replace(/./g,"*");var o=null===i||void 0===i?void 0:i.slice(d-1,i.length);return null===l||void 0===l||null===(e=l.concat(n))||void 0===e?void 0:e.concat(o)}e.d(s,{Z:function(){return l}})},84017:function(i,s,e){function l(i){return i?(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$")+" "+Number(i).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,"):"0"}e.d(s,{Z:function(){return l}})},24741:function(i,s,e){e.r(s),e.d(s,{default:function(){return A}});var l=e(29439),d=e(47313),n=e(45705),o=e(66204),r=e(78891),a=e(77181),t=e(68197),c=e(59624),u=e(56140),v=e(14133),x=e(83999),j=e(72652),m=e(78508),h=e(45334),p=e(41068),f=e(89720),Z=e(58467),y=e(19742),N=e(2717),b=e(90954),g=e(24511),_=e(84017),w=e(32916),k=e(5958),z=e(58821),q=e(22539),I=e(3394),Y=e(70816),B=e.n(Y),C=e(45464),D=e(4014),T=e(79492),M=e(46417);function A(){var i,s,e,Y,A,F,S,U,G,$,J,O,Q,E,H,K,L,P,R,V,W,X,ii,si,ei,li,di,ni,oi,ri,ai,ti,ci,ui,vi,xi,ji=(0,N.v9)((function(i){return i.menu}),N.wU).activeMenu,mi=(0,T.Z)().isDemo,hi=(0,N.v9)((function(i){return i.currency}),N.wU).defaultCurrency,pi=ji.data,fi=(0,g.$)().t,Zi=(0,Z.UO)().id,yi=(0,N.I0)(),Ni=(0,d.useState)(!1),bi=(0,l.Z)(Ni,2),gi=bi[0],_i=bi[1],wi=(0,N.v9)((function(i){return i.orderStatus}),N.wU).statusList,ki=[{title:fi("id"),dataIndex:"id",key:"id",render:function(i,s){var e;return null===(e=s.stock)||void 0===e?void 0:e.id}},{title:fi("product.name"),dataIndex:"product",key:"product",render:function(i,s){var e,l,d,r;return(0,M.jsxs)(n.Z,{direction:"vertical",children:[null===(e=s.stock)||void 0===e||null===(l=e.product)||void 0===l||null===(d=l.translation)||void 0===d?void 0:d.title," ",null===(r=s.addons)||void 0===r?void 0:r.map((function(i){var s,e,l;return(0,M.jsxs)(o.Z,{children:[null===(s=i.stock)||void 0===s||null===(e=s.product)||void 0===e||null===(l=e.translation)||void 0===l?void 0:l.title," x ",i.quantity]},i.id)}))]})}},{title:fi("image"),dataIndex:"img",key:"img",render:function(i,s){var e,l;return(0,M.jsx)(r.Z,{src:(0,C.Z)(null===(e=s.stock)||void 0===e||null===(l=e.product)||void 0===l?void 0:l.img),alt:"product",width:100,height:"auto",className:"rounded",preview:!0,placeholder:!0})}},{title:fi("price"),dataIndex:"origin_price",key:"origin_price",render:function(i){return(0,_.Z)(i,null===hi||void 0===hi?void 0:hi.symbol)}},{title:fi("quantity"),dataIndex:"quantity",key:"quantity"},{title:fi("discount"),dataIndex:"discount",key:"discount",render:function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,s=arguments.length>1?arguments[1]:void 0;return(0,_.Z)(i/s.quantity,null===hi||void 0===hi?void 0:hi.symbol)}},{title:fi("tax"),dataIndex:"tax",key:"tax",render:function(i,s){return(0,_.Z)(i/s.quantity,null===hi||void 0===hi?void 0:hi.symbol)}},{title:fi("total.price"),dataIndex:"total_price",key:"total_price",render:function(i){return(0,_.Z)(i,null===hi||void 0===hi?void 0:hi.symbol)}}];return(0,d.useEffect)((function(){ji.refetch&&(_i(!0),y.Z.getById(Zi).then((function(i){var s=i.data;yi((0,b.nc)({activeMenu:ji,data:s}))})).finally((function(){_i(!1),yi((0,b.A_)(ji))})))}),[ji.refetch]),(0,M.jsxs)("div",{className:"order_details",children:[(0,M.jsx)(a.Z,{className:"order-details-info",title:(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(w.Qyq,{className:"mr-2 icon"}),"".concat(fi("order")," ").concat(null!==pi&&void 0!==pi&&pi.id?"#".concat(null===pi||void 0===pi?void 0:pi.id," "):"")," ",fi("from.order")," ",null===pi||void 0===pi||null===(i=pi.user)||void 0===i?void 0:i.firstname," ",(null===pi||void 0===pi||null===(s=pi.user)||void 0===s?void 0:s.lastname)||""]})}),(0,M.jsxs)(t.Z,{gutter:24,children:[(0,M.jsx)(c.Z,{span:24,children:(0,M.jsx)(a.Z,{children:(0,M.jsxs)(n.Z,{className:"justify-content-between w-100",children:[(0,M.jsxs)(n.Z,{className:"align-items-start",children:[(0,M.jsx)(f.Z,{className:"order-card-icon"}),(0,M.jsxs)("div",{className:"d-flex flex-column",children:[(0,M.jsx)(u.Z.Text,{children:fi("delivery.date")}),gi?(0,M.jsx)(v.Z.Button,{size:16}):(0,M.jsxs)(u.Z.Text,{className:"order-card-title",children:[null===pi||void 0===pi?void 0:pi.delivery_date," ",null===pi||void 0===pi?void 0:pi.delivery_time]})]})]}),(0,M.jsxs)(n.Z,{className:"align-items-start",children:[(0,M.jsx)(k.iFN,{className:"order-card-icon"}),(0,M.jsxs)("div",{className:"d-flex flex-column",children:[(0,M.jsx)(u.Z.Text,{children:fi("total.price")}),gi?(0,M.jsx)(v.Z.Button,{size:16,loading:gi}):(0,M.jsx)(u.Z.Text,{className:"order-card-title",children:(0,_.Z)(null===pi||void 0===pi?void 0:pi.total_price,null===hi||void 0===hi?void 0:hi.symbol)})]})]}),(0,M.jsxs)(n.Z,{className:"align-items-start",children:[(0,M.jsx)(k.Dij,{className:"order-card-icon"}),(0,M.jsxs)("div",{className:"d-flex flex-column",children:[(0,M.jsx)(u.Z.Text,{children:fi("messages")}),gi?(0,M.jsx)(v.Z.Button,{size:16}):(0,M.jsx)(u.Z.Text,{className:"order-card-title",children:null!==pi&&void 0!==pi&&pi.review?1:0})]})]}),(0,M.jsxs)(n.Z,{className:"align-items-start",children:[(0,M.jsx)(w.Qyq,{className:"order-card-icon"}),(0,M.jsxs)("div",{className:"d-flex flex-column",children:[(0,M.jsx)(u.Z.Text,{children:fi("products")}),gi?(0,M.jsx)(v.Z.Button,{size:16}):(0,M.jsx)(u.Z.Text,{className:"order-card-title",children:null===pi||void 0===pi||null===(e=pi.details)||void 0===e?void 0:e.reduce((function(i,s){return i+s.quantity}),0)})]})]})]})})}),"canceled"!==(null===pi||void 0===pi?void 0:pi.status)&&(0,M.jsx)(c.Z,{span:24,children:(0,M.jsx)(a.Z,{children:(0,M.jsx)(x.Z,{current:null===wi||void 0===wi?void 0:wi.findIndex((function(i){return i.name===(null===pi||void 0===pi?void 0:pi.status)})),children:null===wi||void 0===wi?void 0:wi.slice(0,-1).map((function(i){return(0,M.jsx)(x.Z.Step,{title:fi(i.name)},i.id)}))})})}),(0,M.jsxs)(c.Z,{span:16,children:[(0,M.jsx)(j.Z,{spinning:gi,children:(0,M.jsx)(a.Z,{style:{minHeight:"200px"},children:(0,M.jsxs)(t.Z,{hidden:gi,className:"mb-3 order_detail",children:[(0,M.jsxs)(c.Z,{span:12,children:[(0,M.jsxs)("div",{children:[fi("created.date.&.time"),":",(0,M.jsxs)("span",{className:"ml-2",children:[(0,M.jsx)(z.yoA,{className:"mr-1"})," ",B()(null===pi||void 0===pi?void 0:pi.created_at).format("YYYY-MM-DD hh:mm")," "]})]}),(0,M.jsx)("br",{}),(0,M.jsxs)("div",{children:[fi("delivery.date.&.time"),":",(0,M.jsxs)("span",{className:"ml-2",children:[(0,M.jsx)(z.yoA,{className:"mr-1"})," ",null===pi||void 0===pi?void 0:pi.delivery_date," ",null===pi||void 0===pi?void 0:pi.delivery_time]})]}),(0,M.jsx)("br",{}),(0,M.jsxs)("div",{children:[fi("payment.status"),":",(0,M.jsx)("span",{className:"ml-2",children:fi(null===pi||void 0===pi||null===(Y=pi.transaction)||void 0===Y?void 0:Y.status)})]}),(0,M.jsx)("br",{}),(0,M.jsxs)("div",{children:[fi("house"),":",(0,M.jsx)("span",{className:"ml-2",children:fi(null===pi||void 0===pi||null===(A=pi.address)||void 0===A?void 0:A.house)})]}),(0,M.jsx)("br",{}),(0,M.jsxs)("div",{children:[fi("floor"),":",(0,M.jsx)("span",{className:"ml-2",children:fi(null===pi||void 0===pi||null===(F=pi.address)||void 0===F?void 0:F.floor)})]})]}),(0,M.jsxs)(c.Z,{span:12,children:[(0,M.jsxs)("div",{children:[fi("status"),":",(0,M.jsx)("span",{className:"ml-2",children:"new"===(null===pi||void 0===pi?void 0:pi.status)?(0,M.jsx)(o.Z,{color:"blue",children:fi(null===pi||void 0===pi?void 0:pi.status)}):"canceled"===(null===pi||void 0===pi?void 0:pi.status)?(0,M.jsx)(o.Z,{color:"error",children:fi(null===pi||void 0===pi?void 0:pi.status)}):(0,M.jsx)(o.Z,{color:"cyan",children:fi(null===pi||void 0===pi?void 0:pi.status)})})]}),(0,M.jsx)("br",{}),(0,M.jsxs)("div",{children:[fi("delivery.type"),":",(0,M.jsx)("span",{className:"ml-2",children:null===pi||void 0===pi?void 0:pi.delivery_type})]}),(0,M.jsx)("br",{}),(0,M.jsxs)("div",{children:[fi("payment.type"),":",(0,M.jsx)("span",{className:"ml-2",children:fi(null===pi||void 0===pi||null===(S=pi.transaction)||void 0===S||null===(U=S.payment_system)||void 0===U?void 0:U.tag)})]}),(0,M.jsx)("br",{}),(0,M.jsxs)("div",{children:[fi("address"),":",(0,M.jsx)("span",{className:"ml-2",children:null===pi||void 0===pi||null===(G=pi.address)||void 0===G?void 0:G.address})]}),(0,M.jsx)("br",{}),(0,M.jsxs)("div",{children:[fi("office"),":",(0,M.jsx)("span",{className:"ml-2",children:null===pi||void 0===pi||null===($=pi.address)||void 0===$?void 0:$.office})]}),(0,M.jsx)("br",{})]})]})})}),(0,M.jsxs)(a.Z,{className:"w-100 order-table",children:[(0,M.jsx)(m.Z,{scroll:{x:!0},columns:ki,dataSource:(null===(J=ji.data)||void 0===J?void 0:J.details)||[],loading:gi,rowKey:function(i){return i.id},pagination:!1}),(0,M.jsxs)(n.Z,{size:100,className:"d-flex justify-content-end w-100 order-table__summary",children:[(0,M.jsxs)("div",{children:[(0,M.jsxs)("span",{children:[fi("delivery.fee"),":"]}),(0,M.jsx)("br",{}),(0,M.jsxs)("span",{children:[fi("order.tax"),":"]}),(0,M.jsx)("br",{}),(0,M.jsxs)("span",{children:[fi("product"),":"]}),(0,M.jsx)("br",{}),(0,M.jsxs)("span",{children:[fi("coupon"),":"]}),(0,M.jsx)("br",{}),(0,M.jsxs)("span",{children:[fi("discount"),":"]}),(0,M.jsx)("br",{}),(0,M.jsxs)("h3",{children:[fi("total.price"),":"]})]}),(0,M.jsxs)("div",{children:[(0,M.jsx)("span",{children:(0,_.Z)(null===pi||void 0===pi?void 0:pi.delivery_fee,null===hi||void 0===hi?void 0:hi.symbol)}),(0,M.jsx)("br",{}),(0,M.jsx)("span",{children:(0,_.Z)(null===pi||void 0===pi?void 0:pi.tax,null===hi||void 0===hi?void 0:hi.symbol)}),(0,M.jsx)("br",{}),(0,M.jsx)("span",{children:(0,_.Z)(null===pi||void 0===pi||null===(O=pi.details)||void 0===O?void 0:O.reduce((function(i,s){return i+s.total_price}),0),null===hi||void 0===hi?void 0:hi.symbol)}),(0,M.jsx)("br",{}),(0,M.jsx)("span",{children:(0,_.Z)(null===pi||void 0===pi||null===(Q=pi.coupon)||void 0===Q?void 0:Q.price,null===hi||void 0===hi?void 0:hi.symbol)}),(0,M.jsx)("br",{}),(0,M.jsx)("span",{children:(0,_.Z)(null===pi||void 0===pi?void 0:pi.total_discount,hi.symbol)}),(0,M.jsx)("br",{}),(0,M.jsx)("h3",{children:(0,_.Z)(null===pi||void 0===pi?void 0:pi.total_price,hi.symbol)})]})]})]})]}),(0,M.jsxs)(c.Z,{span:8,className:"order_info",children:["ready"===(null===pi||void 0===pi?void 0:pi.status)&&"pickup"!==(null===pi||void 0===pi?void 0:pi.delivery_type)&&(0,M.jsx)(a.Z,{title:fi("deliveryman"),children:(null===pi||void 0===pi?void 0:pi.deliveryman)&&(0,M.jsxs)(n.Z,{children:[(0,M.jsx)(h.C,{shape:"square",size:64,src:null===pi||void 0===pi||null===(E=pi.deliveryman)||void 0===E?void 0:E.img}),(0,M.jsxs)("div",{children:[(0,M.jsxs)("h5",{children:[null===pi||void 0===pi||null===(H=pi.deliveryman)||void 0===H?void 0:H.firstname," ",(null===pi||void 0===pi||null===(K=pi.deliveryman)||void 0===K?void 0:K.lastname)||""]}),(0,M.jsxs)("span",{className:"delivery-info",children:[(0,M.jsx)(z.lfG,{}),null===pi||void 0===pi||null===(L=pi.deliveryman)||void 0===L?void 0:L.phone]}),(0,M.jsxs)("div",{className:"delivery-info",children:[(0,M.jsx)("b",{children:(0,M.jsx)(q.ixJ,{size:16})}),(0,M.jsx)("span",{children:mi?(0,D.Z)(null===pi||void 0===pi||null===(P=pi.deliveryman)||void 0===P?void 0:P.email):null===pi||void 0===pi||null===(R=pi.deliveryman)||void 0===R?void 0:R.email})]})]})]})}),(0,M.jsx)(a.Z,{children:(0,M.jsxs)("div",{className:"d-flex w-100 customer-info-container",children:[gi?(0,M.jsx)(v.Z.Avatar,{size:64,shape:"square"}):(0,M.jsx)(h.C,{shape:"square",size:64,src:null===pi||void 0===pi||null===(V=pi.user)||void 0===V?void 0:V.img}),(0,M.jsx)("h5",{className:"customer-name",children:gi?(0,M.jsx)(v.Z.Button,{size:20,style:{width:70}}):(null===pi||void 0===pi||null===(W=pi.user)||void 0===W?void 0:W.firstname)+" "+((null===pi||void 0===pi||null===(X=pi.user)||void 0===X?void 0:X.lastname)||"")}),(0,M.jsxs)("div",{className:"customer-info-detail",children:[(0,M.jsxs)("div",{className:"customer-info",children:[(0,M.jsx)("span",{className:"title",children:fi("phone")}),(0,M.jsxs)("span",{className:"description",children:[(0,M.jsx)(z.lfG,{}),gi?(0,M.jsx)(v.Z.Button,{size:16}):(null===pi||void 0===pi||null===(ii=pi.user)||void 0===ii?void 0:ii.phone)||"none"]})]}),(0,M.jsxs)("div",{className:"customer-info",children:[(0,M.jsx)("span",{className:"title",children:fi("email")}),(0,M.jsxs)("span",{className:"description",children:[(0,M.jsx)(q.ixJ,{}),gi?(0,M.jsx)(v.Z.Button,{size:16}):(0,M.jsx)(M.Fragment,{children:mi?(0,D.Z)(null===pi||void 0===pi||null===(si=pi.user)||void 0===si?void 0:si.email):null===pi||void 0===pi||null===(ei=pi.user)||void 0===ei?void 0:ei.email})]})]}),(0,M.jsxs)("div",{className:"customer-info",children:[(0,M.jsx)("span",{className:"title",children:fi("registration.date")}),(0,M.jsxs)("span",{className:"description",children:[(0,M.jsx)(z.yoA,{}),gi?(0,M.jsx)(v.Z.Button,{size:16}):B()(null===pi||void 0===pi||null===(li=pi.user)||void 0===li?void 0:li.created_at).format("DD-MM-YYYY, hh:mm")]})]}),(0,M.jsxs)("div",{className:"customer-info",children:[(0,M.jsx)("span",{className:"title",children:fi("orders.count")}),(0,M.jsx)("span",{className:"description",children:gi?(0,M.jsx)(v.Z.Button,{size:16}):(0,M.jsx)(p.Z,{showZero:!0,style:{backgroundColor:"#3d7de3"},count:(null===pi||void 0===pi||null===(di=pi.user)||void 0===di?void 0:di.orders_count)||0})})]}),(0,M.jsxs)("div",{className:"customer-info",children:[(0,M.jsx)("span",{className:"title",children:fi("spent.since.registration")}),(0,M.jsx)("span",{className:"description",children:gi?(0,M.jsx)(v.Z.Button,{size:16}):(0,M.jsx)(p.Z,{showZero:!0,style:{backgroundColor:"#48e33d"},count:(0,_.Z)(null===pi||void 0===pi||null===(ni=pi.user)||void 0===ni?void 0:ni.orders_sum_price,hi.symbol)})})]})]})]})}),(null===pi||void 0===pi?void 0:pi.review)&&!gi&&(0,M.jsx)(a.Z,{title:fi("messages"),children:(0,M.jsxs)("div",{className:"order-message",children:[(0,M.jsx)("span",{className:"message",children:null===pi||void 0===pi?void 0:pi.review.comment}),(0,M.jsx)(n.Z,{className:"w-100 justify-content-end",children:(0,M.jsx)("span",{className:"date",children:B()(null===pi||void 0===pi?void 0:pi.review.created_at).format("YYYY-MM-DD hh:mm")})})]})}),(0,M.jsx)(a.Z,{title:fi("store.information"),children:gi?(0,M.jsx)(v.Z,{avatar:!0,shape:"square",paragraph:{rows:2}}):(0,M.jsxs)(n.Z,{className:"w-100",children:[(0,M.jsx)(h.C,{shape:"square",size:64,src:null===pi||void 0===pi||null===(oi=pi.shop)||void 0===oi?void 0:oi.logo_img}),(0,M.jsxs)("div",{children:[(0,M.jsx)("h5",{children:null===pi||void 0===pi||null===(ri=pi.shop)||void 0===ri||null===(ai=ri.translation)||void 0===ai?void 0:ai.title}),(null===pi||void 0===pi||null===(ti=pi.shop)||void 0===ti?void 0:ti.phone)&&(0,M.jsxs)("div",{className:"delivery-info",children:[(0,M.jsx)("b",{children:(0,M.jsx)(z.lfG,{})}),(0,M.jsx)("span",{children:null===pi||void 0===pi||null===(ci=pi.shop)||void 0===ci?void 0:ci.phone})]}),(0,M.jsxs)("div",{className:"delivery-info",children:[(0,M.jsx)("b",{children:(0,M.jsx)(k.pu9,{size:16})}),(0,M.jsx)("span",{children:null===pi||void 0===pi||null===(ui=pi.shop)||void 0===ui?void 0:ui.price})]}),(0,M.jsxs)("div",{className:"delivery-info",children:[(0,M.jsx)("b",{children:(0,M.jsx)(I.CDT,{size:16})}),(0,M.jsx)("span",{children:null===pi||void 0===pi||null===(vi=pi.shop)||void 0===vi||null===(xi=vi.translation)||void 0===xi?void 0:xi.address})]})]})]})})]})]})]})}}}]);