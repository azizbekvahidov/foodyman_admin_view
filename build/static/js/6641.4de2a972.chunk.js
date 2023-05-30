"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[6641],{4014:function(e,i,n){function l(e){var i,n,l=null===e||void 0===e?void 0:e.slice(0,1),s=null===e||void 0===e?void 0:e.lastIndexOf("@"),d=null===e||void 0===e?void 0:e.slice(1,s-1);d=null===(i=d)||void 0===i?void 0:i.replace(/./g,"*");var t=null===e||void 0===e?void 0:e.slice(s-1,e.length);return null===l||void 0===l||null===(n=l.concat(d))||void 0===n?void 0:n.concat(t)}n.d(i,{Z:function(){return l}})},17649:function(e,i,n){n.d(i,{Z:function(){return l}});n(97421);function l(e){if(null===e||void 0===e||!e.location)return{lat:47.4143302506288,lng:8.532059477976883};var i=e.location.split(", ");return{lat:Number(null===i||void 0===i?void 0:i[0]),lng:Number(null===i||void 0===i?void 0:i[1])}}},84017:function(e,i,n){function l(e){return e?(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$")+" "+Number(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,"):"0"}n.d(i,{Z:function(){return l}})},46641:function(e,i,n){n.r(i),n.d(i,{default:function(){return P}});var l=n(1413),s=n(29439),d=n(47313),t=n(78891),o=n(77181),r=n(45705),a=n(59491),c=n(68197),u=n(59624),v=n(56140),x=n(14133),m=n(83999),h=n(72652),j=n(66204),p=n(78508),f=n(45334),Z=n(41068),y=n(89720),g=n(12019),b=n(58467),N=n(2135),_=n(90046),w=n(45464),k=n(2717),C=n(90954),I=n(23310),S=n(75052),z=n(94291),q=n(24511),B=n(84017),D=n(40197),U=n(36967),Y=n(58821),T=n(22539),M=n(97421),F=n(5958),A=n(32916),V=n(3394),$=n(70816),L=n.n($),G=n(79492),E=n(4014),O=n(46417);function P(){var e,i,n,$,P,Q,R,H,J,K,W,X,ee,ie,ne,le,se,de,te,oe,re,ae,ce,ue,ve,xe,me,he,je,pe,fe,Ze,ye,ge,be,Ne,_e,we=(0,k.v9)((function(e){return e.menu}),k.wU).activeMenu,ke=(0,k.v9)((function(e){return e.currency}),k.wU).defaultCurrency,Ce=(0,k.v9)((function(e){return e.orderStatus}),k.wU).statusList,Ie=null===we||void 0===we||null===(e=we.data)||void 0===e?void 0:e.data,Se=(0,q.$)().t,ze=(0,b.UO)().id,qe=(0,k.I0)(),Be=(0,d.useRef)(),De=(0,d.useRef)(),Ue=(0,G.Z)().isDemo,Ye=(0,d.useState)(null),Te=(0,s.Z)(Ye,2),Me=Te[0],Fe=Te[1],Ae=(0,d.useState)(!1),Ve=(0,s.Z)(Ae,2),$e=Ve[0],Le=Ve[1],Ge=(0,d.useState)(null),Ee=(0,s.Z)(Ge,2),Oe=Ee[0],Pe=Ee[1],Qe=(0,d.useState)(null),Re=(0,s.Z)(Qe,2),He=Re[0],Je=Re[1],Ke=(0,d.useState)(null),We=(0,s.Z)(Ke,2),Xe=We[0],ei=We[1],ii=[{title:Se("id"),dataIndex:"id",key:"id",render:function(e,i){var n;return null===(n=i.stock)||void 0===n?void 0:n.id}},{title:Se("product.name"),dataIndex:"product",key:"product",render:function(e,i){var n,l;return null===(n=i.stock)||void 0===n||null===(l=n.product.translation)||void 0===l?void 0:l.title}},{title:Se("image"),dataIndex:"img",key:"img",render:function(e,i){var n;return(0,O.jsx)(t.Z,{src:(0,w.Z)(null===(n=i.stock)||void 0===n?void 0:n.product.img),alt:"product",width:100,height:"auto",className:"rounded",preview:!0,placeholder:!0})}},{title:Se("price"),dataIndex:"origin_price",key:"origin_price",render:function(e){return(0,B.Z)(e,null===ke||void 0===ke?void 0:ke.symbol)}},{title:Se("quantity"),dataIndex:"quantity",key:"quantity"},{title:Se("discount"),dataIndex:"discount",key:"discount",render:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1?arguments[1]:void 0;return(0,B.Z)(e/i.quantity,null===ke||void 0===ke?void 0:ke.symbol)}},{title:Se("tax"),dataIndex:"tax",key:"tax",render:function(e,i){return(0,B.Z)(e/i.quantity,null===ke||void 0===ke?void 0:ke.symbol)}},{title:Se("total.price"),dataIndex:"total_price",key:"total_price",render:function(e,i){var n,l=e+(null===i||void 0===i||null===(n=i.addons)||void 0===n?void 0:n.reduce((function(e,i){return e+i.total_price}),0));return Fe(l),(0,B.Z)(l,null===ke||void 0===ke?void 0:ke.symbol)}}],ni=[{title:Se("date"),dataIndex:"date",key:"date"},{title:Se("document"),dataIndex:"document",key:"document"},{title:Se("number"),dataIndex:"number",key:"number"},{title:Se("total.price"),dataIndex:"price",key:"price"}],li=[{price:(0,B.Z)(null===Ie||void 0===Ie?void 0:Ie.total_price,ke.symbol),number:(0,O.jsxs)(N.rU,{to:"/orders/generate-invoice/".concat(null===Ie||void 0===Ie?void 0:Ie.id),children:["#",null===Ie||void 0===Ie?void 0:Ie.id]}),document:Se("invoice"),date:null===Ie||void 0===Ie?void 0:Ie.delivery_date},{price:"-",number:(0,O.jsxs)(N.rU,{to:"/orders/generate-invoice/".concat(null===Ie||void 0===Ie?void 0:Ie.id),children:["#",null===Ie||void 0===Ie?void 0:Ie.id]}),document:Se("delivery.reciept"),date:null===Ie||void 0===Ie?void 0:Ie.delivery_date}],si=function(){Pe(null),Je(null),ei(null)};(0,d.useEffect)((function(){we.refetch&&(Le(!0),_.Z.getById(ze).then((function(e){var i=e.data,n=i.currency,s=i.user,d=i.id,t=i.price,o=i.created_at,r=i.details.map((function(e){var i,n;return(0,l.Z)((0,l.Z)({},e),{},{title:null===(i=e.shop)||void 0===i||null===(n=i.translation)||void 0===n?void 0:n.title})}));qe((0,C.nc)({activeMenu:we,data:{details:r,currency:n,user:s,id:d,createdAt:o,price:t,data:i}}))})).finally((function(){Le(!1),qe((0,C.A_)(we))})),qe((0,D.ZL)()),qe((0,z.EH)()))}),[we.refetch]);return(0,O.jsxs)("div",{className:"order_details",children:[(0,O.jsx)(o.Z,{className:"order-details-info",title:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(A.Qyq,{className:"mr-2 icon"}),"".concat(Se("order")," ").concat(null!==Ie&&void 0!==Ie&&Ie.id?"#".concat(null===Ie||void 0===Ie?void 0:Ie.id," "):"")," ",Se("from.order")," ",null===Ie||void 0===Ie||null===(i=Ie.user)||void 0===i?void 0:i.firstname," ",(null===Ie||void 0===Ie||null===(n=Ie.user)||void 0===n?void 0:n.lastname)||""]}),extra:"delivered"!==(null===Ie||void 0===Ie?void 0:Ie.status)&&"canceled"!==(null===Ie||void 0===Ie?void 0:Ie.status)?(0,O.jsx)(r.Z,{children:"delivered"!==(null===Ie||void 0===Ie?void 0:Ie.status)&&"canceled"!==(null===Ie||void 0===Ie?void 0:Ie.status)?(0,O.jsx)(a.Z,{type:"primary",onClick:function(){return Pe(Ie)},children:Se("change.status")}):null}):""}),(0,O.jsxs)(c.Z,{gutter:24,children:[(0,O.jsx)(u.Z,{span:24,children:(0,O.jsx)(o.Z,{children:(0,O.jsxs)(r.Z,{className:"justify-content-between w-100",children:[(0,O.jsxs)(r.Z,{className:"align-items-start",children:[(0,O.jsx)(y.Z,{className:"order-card-icon"}),(0,O.jsxs)("div",{className:"d-flex flex-column",children:[(0,O.jsx)(v.Z.Text,{children:Se("delivery.date")}),$e?(0,O.jsx)(x.Z.Button,{size:16}):(0,O.jsxs)(v.Z.Text,{className:"order-card-title",children:[null===Ie||void 0===Ie?void 0:Ie.delivery_date," ",null===Ie||void 0===Ie?void 0:Ie.delivery_time]})]})]}),(0,O.jsxs)(r.Z,{className:"align-items-start",onClick:function(){return Be.current.scrollIntoView({behavior:"smooth"})},children:[(0,O.jsx)(F.iFN,{className:"order-card-icon"}),(0,O.jsxs)("div",{className:"d-flex flex-column",children:[(0,O.jsx)(v.Z.Text,{children:Se("total.price")}),$e?(0,O.jsx)(x.Z.Button,{size:16,loading:$e}):(0,O.jsx)(v.Z.Text,{className:"order-card-title",children:(0,B.Z)(null===Ie||void 0===Ie?void 0:Ie.total_price,null===ke||void 0===ke?void 0:ke.symbol)})]})]}),(0,O.jsxs)(r.Z,{className:"align-items-start",children:[(0,O.jsx)(F.Dij,{className:"order-card-icon"}),(0,O.jsxs)("div",{className:"d-flex flex-column",children:[(0,O.jsx)(v.Z.Text,{children:Se("messages")}),$e?(0,O.jsx)(x.Z.Button,{size:16}):(0,O.jsx)(v.Z.Text,{className:"order-card-title",children:null!==Ie&&void 0!==Ie&&Ie.review?1:0})]})]}),(0,O.jsxs)(r.Z,{className:"align-items-start",onClick:function(){return De.current.scrollIntoView({behavior:"smooth"})},children:[(0,O.jsx)(A.Qyq,{className:"order-card-icon"}),(0,O.jsxs)("div",{className:"d-flex flex-column",children:[(0,O.jsx)(v.Z.Text,{children:Se("products")}),$e?(0,O.jsx)(x.Z.Button,{size:16}):(0,O.jsx)(v.Z.Text,{className:"order-card-title",children:null===Ie||void 0===Ie||null===($=Ie.details)||void 0===$?void 0:$.reduce((function(e,i){return e+i.quantity}),0)})]})]})]})})}),"canceled"!==(null===Ie||void 0===Ie?void 0:Ie.status)&&(0,O.jsx)(u.Z,{span:24,children:(0,O.jsx)(o.Z,{children:(0,O.jsx)(m.Z,{current:null===Ce||void 0===Ce?void 0:Ce.findIndex((function(e){return e.name===(null===Ie||void 0===Ie?void 0:Ie.status)})),children:null===Ce||void 0===Ce?void 0:Ce.slice(0,-1).map((function(e){return(0,O.jsx)(m.Z.Step,{title:Se(e.name)},e.id)}))})})}),(0,O.jsxs)(u.Z,{span:16,children:[(0,O.jsx)(h.Z,{spinning:$e,children:(0,O.jsx)(o.Z,{style:{minHeight:"200px"},children:(0,O.jsxs)(c.Z,{hidden:$e,className:"mb-3 order_detail",children:[(0,O.jsxs)(u.Z,{span:12,children:[(0,O.jsxs)("div",{children:[Se("created.date.&.time"),":",(0,O.jsxs)("span",{className:"ml-2",children:[(0,O.jsx)(Y.yoA,{className:"mr-1"})," ",L()(null===Ie||void 0===Ie?void 0:Ie.created_at).format("YYYY-MM-DD hh:mm")," "]})]}),(0,O.jsx)("br",{}),(0,O.jsxs)("div",{children:[Se("delivery.date.&.time"),":",(0,O.jsxs)("span",{className:"ml-2",children:[(0,O.jsx)(Y.yoA,{className:"mr-1"})," ",null===Ie||void 0===Ie?void 0:Ie.delivery_date," ",null===Ie||void 0===Ie?void 0:Ie.delivery_time]})]}),(0,O.jsx)("br",{}),(0,O.jsxs)("div",{children:[Se("payment.status"),":",(0,O.jsx)("span",{className:"ml-2",children:Se(null===Ie||void 0===Ie||null===(P=Ie.transaction)||void 0===P?void 0:P.status)})]}),(0,O.jsx)("br",{}),(0,O.jsxs)("div",{children:[Se("house"),":",(0,O.jsx)("span",{className:"ml-2",children:Se(null===Ie||void 0===Ie||null===(Q=Ie.address)||void 0===Q?void 0:Q.house)})]}),(0,O.jsx)("br",{}),(0,O.jsxs)("div",{children:[Se("floor"),":",(0,O.jsx)("span",{className:"ml-2",children:Se(null===Ie||void 0===Ie||null===(R=Ie.address)||void 0===R?void 0:R.floor)})]}),(0,O.jsxs)(j.Z,{className:"map_show mt-3",onClick:function(){return ei(ze)},children:[(0,O.jsx)(T.$0r,{})," ",Se("show.locations")]})]}),(0,O.jsxs)(u.Z,{span:12,children:[(0,O.jsxs)("div",{children:[Se("status"),":",(0,O.jsx)("span",{className:"ml-2",children:"new"===(null===Ie||void 0===Ie?void 0:Ie.status)?(0,O.jsx)(j.Z,{color:"blue",children:Se(null===Ie||void 0===Ie?void 0:Ie.status)}):"canceled"===(null===Ie||void 0===Ie?void 0:Ie.status)?(0,O.jsx)(j.Z,{color:"error",children:Se(null===Ie||void 0===Ie?void 0:Ie.status)}):(0,O.jsx)(j.Z,{color:"cyan",children:Se(null===Ie||void 0===Ie?void 0:Ie.status)})})]}),(0,O.jsx)("br",{}),(0,O.jsxs)("div",{children:[Se("delivery.type"),":",(0,O.jsx)("span",{className:"ml-2",children:null===Ie||void 0===Ie?void 0:Ie.delivery_type})]}),(0,O.jsx)("br",{}),(0,O.jsxs)("div",{children:[Se("payment.type"),":",(0,O.jsx)("span",{className:"ml-2",children:Se(null===Ie||void 0===Ie||null===(H=Ie.transaction)||void 0===H||null===(J=H.payment_system)||void 0===J?void 0:J.tag)})]}),(0,O.jsx)("br",{}),(0,O.jsxs)("div",{children:[Se("address"),":",(0,O.jsx)("span",{className:"ml-2",children:null===Ie||void 0===Ie||null===(K=Ie.address)||void 0===K?void 0:K.address})]}),(0,O.jsx)("br",{}),(0,O.jsxs)("div",{children:[Se("office"),":",(0,O.jsx)("span",{className:"ml-2",children:null===Ie||void 0===Ie||null===(W=Ie.address)||void 0===W?void 0:W.office})]}),(0,O.jsx)("br",{})]})]})})}),(0,O.jsx)(o.Z,{title:Se("documents"),children:(0,O.jsx)(p.Z,{columns:ni,dataSource:li,pagination:!1,loading:$e})}),(0,O.jsxs)(o.Z,{className:"w-100 order-table",children:[(0,O.jsx)(p.Z,{ref:De,scroll:{x:!0},columns:ii,dataSource:(null===(X=we.data)||void 0===X?void 0:X.details)||[],loading:$e,rowKey:function(e){return e.id},pagination:!1}),(0,O.jsxs)(r.Z,{size:100,className:"d-flex justify-content-end w-100 order-table__summary",children:[(0,O.jsxs)("div",{children:[(0,O.jsxs)("span",{children:[Se("delivery.fee"),":"]}),(0,O.jsx)("br",{}),(0,O.jsxs)("span",{children:[Se("order.tax"),":"]}),(0,O.jsx)("br",{}),(0,O.jsxs)("span",{children:[Se("product"),":"]}),(0,O.jsx)("br",{}),(0,O.jsxs)("span",{children:[Se("discount"),":"]}),(0,O.jsx)("br",{}),(0,O.jsxs)("h3",{children:[Se("total.price"),":"]})]}),(0,O.jsxs)("div",{children:[(0,O.jsx)("span",{children:(0,B.Z)(null===Ie||void 0===Ie?void 0:Ie.delivery_fee,null===ke||void 0===ke?void 0:ke.symbol)}),(0,O.jsx)("br",{}),(0,O.jsx)("span",{children:(0,B.Z)(null===Ie||void 0===Ie?void 0:Ie.tax,null===ke||void 0===ke?void 0:ke.symbol)}),(0,O.jsx)("br",{}),(0,O.jsx)("span",{children:(0,B.Z)(Me,null===ke||void 0===ke?void 0:ke.symbol)}),(0,O.jsx)("br",{}),(0,O.jsx)("span",{children:(0,B.Z)(null===Ie||void 0===Ie?void 0:Ie.total_discount,null===ke||void 0===ke?void 0:ke.symbol)}),(0,O.jsx)("br",{}),(0,O.jsx)("h3",{ref:Be,children:(0,B.Z)(null===Ie||void 0===Ie?void 0:Ie.total_price,null===ke||void 0===ke?void 0:ke.symbol)})]})]})]})]}),(0,O.jsxs)(u.Z,{span:8,className:"order_info",children:[(0,O.jsxs)(o.Z,{title:Se("deliveryman"),extra:"ready"===(null===Ie||void 0===Ie?void 0:Ie.status)&&"pickup"!==(null===Ie||void 0===Ie?void 0:Ie.delivery_type)&&(0,O.jsxs)(a.Z,{onClick:function(){return Je(Ie)},children:[Se("change"),(0,O.jsx)(g.Z,{})]}),children:["new"===(null===Ie||void 0===Ie?void 0:Ie.status)||"accepted"===(null===Ie||void 0===Ie?void 0:Ie.status)?(0,O.jsx)("p",{children:Se("order_status_ready")}):"","new"===(null===Ie||void 0===Ie?void 0:Ie.status)||"accepted"===(null===Ie||void 0===Ie?void 0:Ie.status)||null!==Ie&&void 0!==Ie&&Ie.deliveryman?"":(0,O.jsx)("p",{children:Se("The supplier is not assigned or delivery type pickup")}),(null===Ie||void 0===Ie?void 0:Ie.deliveryman)&&(0,O.jsxs)(r.Z,{children:[(0,O.jsx)(f.C,{shape:"square",size:64,src:M.bV+(null===Ie||void 0===Ie||null===(ee=Ie.deliveryman)||void 0===ee?void 0:ee.img)}),(0,O.jsxs)("div",{children:[(0,O.jsx)("h5",{children:(null===Ie||void 0===Ie||null===(ie=Ie.deliveryman)||void 0===ie?void 0:ie.firstname)+" "+(null===Ie||void 0===Ie||null===(ne=Ie.deliveryman)||void 0===ne?void 0:ne.lastname)}),(0,O.jsxs)("span",{className:"delivery-info",children:[(0,O.jsx)(Y.lfG,{}),null===Ie||void 0===Ie||null===(le=Ie.deliveryman)||void 0===le?void 0:le.phone]}),(0,O.jsxs)("div",{className:"delivery-info",children:[(0,O.jsx)("b",{children:(0,O.jsx)(T.ixJ,{size:16})}),(0,O.jsx)("span",{children:Ue?(0,E.Z)(null===Ie||void 0===Ie||null===(se=Ie.deliveryman)||void 0===se?void 0:se.email):null===Ie||void 0===Ie||null===(de=Ie.deliveryman)||void 0===de?void 0:de.email})]})]})]})]}),(0,O.jsx)(o.Z,{children:(0,O.jsxs)("div",{className:"d-flex w-100 customer-info-container",children:[$e?(0,O.jsx)(x.Z.Avatar,{size:64,shape:"square"}):(0,O.jsx)(f.C,{shape:"square",size:64,src:null===Ie||void 0===Ie||null===(te=Ie.user)||void 0===te?void 0:te.img}),(0,O.jsx)("h5",{className:"customer-name",children:$e?(0,O.jsx)(x.Z.Button,{size:20,style:{width:70}}):(null===Ie||void 0===Ie||null===(oe=Ie.user)||void 0===oe?void 0:oe.firstname)+" "+((null===Ie||void 0===Ie||null===(re=Ie.user)||void 0===re?void 0:re.lastname)||"")}),(0,O.jsxs)("div",{className:"customer-info-detail",children:[(0,O.jsxs)("div",{className:"customer-info",children:[(0,O.jsx)("span",{className:"title",children:Se("phone")}),(0,O.jsxs)("span",{className:"description",children:[(0,O.jsx)(Y.lfG,{}),$e?(0,O.jsx)(x.Z.Button,{size:16}):(null===Ie||void 0===Ie||null===(ae=Ie.user)||void 0===ae?void 0:ae.phone)||"none"]})]}),(0,O.jsxs)("div",{className:"customer-info",children:[(0,O.jsx)("span",{className:"title",children:Se("email")}),(0,O.jsxs)("span",{className:"description",children:[(0,O.jsx)(T.ixJ,{}),$e?(0,O.jsx)(x.Z.Button,{size:16}):Ue?(0,E.Z)(null===Ie||void 0===Ie||null===(ce=Ie.user)||void 0===ce?void 0:ce.email):null===Ie||void 0===Ie||null===(ue=Ie.user)||void 0===ue?void 0:ue.email]})]}),(0,O.jsxs)("div",{className:"customer-info",children:[(0,O.jsx)("span",{className:"title",children:Se("registration.date")}),(0,O.jsxs)("span",{className:"description",children:[(0,O.jsx)(Y.yoA,{}),$e?(0,O.jsx)(x.Z.Button,{size:16}):L()(null===Ie||void 0===Ie||null===(ve=Ie.user)||void 0===ve?void 0:ve.created_at).format("DD-MM-YYYY, hh:mm")]})]}),(0,O.jsxs)("div",{className:"customer-info",children:[(0,O.jsx)("span",{className:"title",children:Se("orders.count")}),(0,O.jsx)("span",{className:"description",children:$e?(0,O.jsx)(x.Z.Button,{size:16}):(0,O.jsx)(Z.Z,{showZero:!0,style:{backgroundColor:"#3d7de3"},count:(null===Ie||void 0===Ie||null===(xe=Ie.user)||void 0===xe?void 0:xe.orders_count)||0})})]}),(0,O.jsxs)("div",{className:"customer-info",children:[(0,O.jsx)("span",{className:"title",children:Se("spent.since.registration")}),(0,O.jsx)("span",{className:"description",children:$e?(0,O.jsx)(x.Z.Button,{size:16}):(0,O.jsx)(Z.Z,{showZero:!0,style:{backgroundColor:"#48e33d"},count:(0,B.Z)(null===Ie||void 0===Ie||null===(me=Ie.user)||void 0===me?void 0:me.orders_sum_price,null===ke||void 0===ke?void 0:ke.symbol)})})]})]})]})}),(null===Ie||void 0===Ie?void 0:Ie.review)&&!$e&&(0,O.jsx)(o.Z,{title:Se("messages"),children:(0,O.jsxs)("div",{className:"order-message",children:[(0,O.jsx)("span",{className:"message",children:null===Ie||void 0===Ie||null===(he=Ie.review)||void 0===he?void 0:he.comment}),(0,O.jsx)(r.Z,{className:"w-100 justify-content-end",children:(0,O.jsx)("span",{className:"date",children:L()(null===Ie||void 0===Ie||null===(je=Ie.review)||void 0===je?void 0:je.created_at).format("YYYY-MM-DD hh:mm")})})]})}),(0,O.jsx)(o.Z,{title:Se("store.information"),children:$e?(0,O.jsx)(x.Z,{avatar:!0,shape:"square",paragraph:{rows:2}}):(0,O.jsxs)(r.Z,{className:"w-100",children:[(0,O.jsx)(f.C,{shape:"square",size:64,src:M.bV+(null===Ie||void 0===Ie||null===(pe=Ie.shop)||void 0===pe?void 0:pe.logo_img)}),(0,O.jsxs)("div",{children:[(0,O.jsx)("h5",{children:null===Ie||void 0===Ie||null===(fe=Ie.shop)||void 0===fe||null===(Ze=fe.translation)||void 0===Ze?void 0:Ze.title}),(null===Ie||void 0===Ie||null===(ye=Ie.shop)||void 0===ye?void 0:ye.phone)&&(0,O.jsxs)("div",{className:"delivery-info",children:[(0,O.jsx)("b",{children:(0,O.jsx)(Y.lfG,{})}),(0,O.jsx)("span",{children:null===Ie||void 0===Ie||null===(ge=Ie.shop)||void 0===ge?void 0:ge.phone})]}),(0,O.jsxs)("div",{className:"delivery-info",children:[(0,O.jsx)("b",{children:(0,O.jsx)(F.pu9,{size:16})}),(0,O.jsx)("span",{children:null===Ie||void 0===Ie||null===(be=Ie.shop)||void 0===be?void 0:be.price})]}),(0,O.jsxs)("div",{className:"delivery-info",children:[(0,O.jsx)("b",{children:(0,O.jsx)(V.CDT,{size:16})}),(0,O.jsx)("span",{children:null===Ie||void 0===Ie||null===(Ne=Ie.shop)||void 0===Ne||null===(_e=Ne.translation)||void 0===_e?void 0:_e.address})]})]})]})})]})]}),Oe&&(0,O.jsx)(I.Z,{orderDetails:Oe,handleCancel:si,status:Ce}),He&&(0,O.jsx)(S.Z,{orderDetails:He,handleCancel:si}),Xe&&(0,O.jsx)(U.Z,{id:Xe,handleCancel:si})]})}},75052:function(e,i,n){n.d(i,{Z:function(){return p}});var l=n(1413),s=n(29439),d=n(47313),t=n(18197),o=n(84695),r=n(59491),a=n(68197),c=n(59624),u=n(74294),v=n(2717),x=n(90046),m=n(90954),h=n(24511),j=n(46417);function p(e){var i,n=e.orderDetails,p=e.handleCancel,f=(0,h.$)().t,Z=(0,v.v9)((function(e){return e.menu}),v.wU).activeMenu,y=(0,v.v9)((function(e){return e.deliveryman}),v.wU).deliverymans,g=t.Z.useForm(),b=(0,s.Z)(g,1)[0],N=(0,v.I0)(),_=(0,d.useState)(!1),w=(0,s.Z)(_,2),k=w[0],C=w[1];return(0,j.jsx)(o.Z,{visible:!!n,title:n.title,onCancel:p,footer:[(0,j.jsx)(r.Z,{type:"primary",onClick:function(){return b.submit()},loading:k,children:f("save")}),(0,j.jsx)(r.Z,{type:"default",onClick:p,children:f("cancel")})],children:(0,j.jsx)(t.Z,{form:b,layout:"vertical",onFinish:function(e){var i=(0,l.Z)({},e);C(!0),x.Z.updateDelivery(n.id,i).then((function(){p(),N((0,m.xo)(Z))})).finally((function(){return C(!1)}))},initialValues:{deliveryman:null===(i=n.deliveryman)||void 0===i?void 0:i.id},children:(0,j.jsx)(a.Z,{gutter:12,children:(0,j.jsx)(c.Z,{span:24,children:(0,j.jsx)(t.Z.Item,{label:f("deliveryman"),name:"deliveryman",rules:[{required:!0,message:f("required")}],children:(0,j.jsx)(u.Z,{children:y.map((function(e,i){return(0,j.jsxs)(u.Z.Option,{value:e.id,className:"d-block",children:[e.firstname," ",e.lastname||""]},e.id)}))})})})})})})}},23310:function(e,i,n){n.d(i,{Z:function(){return f}});var l=n(1413),s=n(29439),d=n(47313),t=n(18197),o=n(84695),r=n(59491),a=n(68197),c=n(59624),u=n(74294),v=n(2717),x=n(24511),m=n(90046),h=n(90954),j=n(46417),p=["new","accepted","ready","on_a_way","delivered"];function f(e){var i=e.orderDetails,n=e.handleCancel,f=(0,v.v9)((function(e){return e.menu}),v.wU).activeMenu,Z=t.Z.useForm(),y=(0,s.Z)(Z,1)[0],g=(0,v.I0)(),b=(0,x.$)().t,N=(0,d.useState)(!1),_=(0,s.Z)(N,2),w=_[0],k=_[1],C=(0,d.useState)(p),I=(0,s.Z)(C,2),S=I[0],z=I[1];(0,d.useEffect)((function(){var e=p.findIndex((function(e){return e===i.status})),n=[p[e],p[e+1],"canceled"];e<0&&(n=[p[e+1],"canceled"]),z(n)}),[i]);return(0,j.jsx)(o.Z,{visible:!!i,title:i.title,onCancel:n,footer:[(0,j.jsx)(r.Z,{type:"primary",onClick:function(){return y.submit()},loading:w,children:b("save")}),(0,j.jsx)(r.Z,{type:"default",onClick:n,children:b("cancel")})],children:(0,j.jsx)(t.Z,{form:y,layout:"vertical",onFinish:function(e){k(!0);var s=(0,l.Z)({},e);m.Z.updateStatus(i.id,s).then((function(){n(),g((0,h.xo)(f))})).finally((function(){return k(!1)}))},initialValues:{status:i.status},children:(0,j.jsx)(a.Z,{gutter:12,children:(0,j.jsx)(c.Z,{span:24,children:(0,j.jsx)(t.Z.Item,{label:b("status"),name:"status",rules:[{required:!0,message:b("required")}],children:(0,j.jsx)(u.Z,{children:S.map((function(e,i){return(0,j.jsx)(u.Z.Option,{value:e,children:b(e)},e+i)}))})})})})})})}},36967:function(e,i,n){var l=n(29439),s=n(84697),d=n(83999),t=n(84695),o=n(59491),r=n(77181),a=n(68197),c=n(59624),u=n(66204),v=n(47313),x=n(24511),m=n(90046),h=n(51282),j=n(58821),p=n(2717),f=n(97421),Z=n(18478),y=n(84618),g=n(17649),b=n(66461),N=n(22539),_=n(3394),w=n(57864),k=n(46417),C=d.Z.Step,I=function(){return(0,k.jsx)("img",{src:Z,width:"50",alt:"Pin"})},S=function(){return(0,k.jsx)("img",{src:y,width:"50",alt:"Pin"})},z=["blue","red","gold","volcano","cyan","lime"];i.Z=function(e){var i,n,Z,y,q,B,D=e.id,U=e.handleCancel,Y=(0,x.$)().t,T=(0,v.useState)(null),M=(0,l.Z)(T,2),F=M[0],A=M[1],V=(0,v.useState)(null),$=(0,l.Z)(V,2),L=$[0],G=$[1],E=(0,v.useState)(null),O=(0,l.Z)(E,2),P=O[0],Q=O[1],R=(0,p.v9)((function(e){return e.globalSettings}),p.wU).settings,H=(0,g.Z)(R),J=(0,v.useState)(0),K=(0,l.Z)(J,2),W=K[0],X=K[1],ee=(0,v.useState)((0,g.Z)(R)),ie=(0,l.Z)(ee,2),ne=ie[0],le=ie[1],se=(0,v.useState)((0,g.Z)(R)),de=(0,l.Z)(se,2),te=de[0],oe=de[1],re=(0,v.useState)([{id:0,name:"new",icon:(0,k.jsx)(b.Z,{})},{id:1,name:"accepted",icon:(0,k.jsx)(j.IQF,{})},{id:2,name:"ready",icon:(0,k.jsx)(N.TkG,{})},{id:3,name:"on_a_way",icon:(0,k.jsx)(_.Akc,{})},{id:4,name:"delivered",icon:(0,k.jsx)(_.kme,{})}]),ae=(0,l.Z)(re,2),ce=ae[0],ue=ae[1];var ve=(0,p.v9)((function(e){return e.globalSettings.settings}),p.wU).google_map_key;(0,v.useEffect)((function(){A(!0),m.Z.getById(D).then((function(e){var i,n=e.data;ue("canceled"===n.status?[{id:1,name:"new",icon:(0,k.jsx)(b.Z,{})},{id:5,name:"canceled",icon:(0,k.jsx)(w.SV5,{})}]:ce),X("canceled"===n.status?1:null===(i=ce.find((function(e){return e.name===n.status})))||void 0===i?void 0:i.id),Q("canceled"===n.status?"error":"success"),G(n),oe({lat:n.location.latitude,lng:n.location.longitude}),le({lat:n.shop.location.latitude,lng:n.shop.location.longitude})})).finally((function(){A(!1)}))}),[]);return(0,k.jsx)(k.Fragment,{children:(0,k.jsx)(t.Z,{visible:!!D,title:Y("show.locations"),closable:!0,onCancel:U,style:{minWidth:"80vw"},footer:[(0,k.jsx)(o.Z,{type:"default",onClick:U,children:Y("cancel")},"cancelBtn")],children:F?(0,k.jsx)(h.Z,{}):(0,k.jsxs)(r.Z,{children:[(0,k.jsx)(d.Z,{current:W,status:P,className:"mb-5",children:null===ce||void 0===ce?void 0:ce.map((function(e,i){return(0,k.jsx)(C,{title:Y(e.name),icon:null===e||void 0===e?void 0:e.icon},e.id+i)}))}),(0,k.jsxs)(a.Z,{gutter:12,children:[(0,k.jsxs)(c.Z,{span:12,children:[(0,k.jsxs)("h3",{children:[Y("order.id")," #",null===L||void 0===L?void 0:L.id]}),(0,k.jsxs)("p",{children:[(0,k.jsx)(j.D73,{})," ",null===L||void 0===L?void 0:L.created_at]}),(0,k.jsxs)("p",{children:[Y("schedulet.at")," ",null===L||void 0===L?void 0:L.delivery_date]}),(0,k.jsxs)("span",{children:[(0,k.jsx)("strong",{children:null===L||void 0===L||null===(i=L.shop)||void 0===i||null===(n=i.translation)||void 0===n?void 0:n.title})," ",null===L||void 0===L||null===(Z=L.details)||void 0===Z?void 0:Z.map((function(e,i){var n;return(0,k.jsx)(u.Z,{className:"mb-2",color:z[i],children:null===e||void 0===e||null===(n=e.stock)||void 0===n?void 0:n.product.translation.title})}))]})]}),(0,k.jsxs)(c.Z,{span:12,children:[(0,k.jsxs)("p",{children:[Y("status")," ","new"===(null===L||void 0===L?void 0:L.status)?(0,k.jsx)(u.Z,{color:"blue",children:Y(null===L||void 0===L?void 0:L.status)}):"canceled"===(null===L||void 0===L?void 0:L.status)?(0,k.jsx)(u.Z,{color:"error",children:Y(null===L||void 0===L?void 0:L.status)}):(0,k.jsx)(u.Z,{color:"cyan",children:Y(null===L||void 0===L?void 0:L.status)})]}),(0,k.jsxs)("p",{children:[Y("payment.method")," ",(0,k.jsx)("strong",{children:null===L||void 0===L||null===(y=L.transaction)||void 0===y||null===(q=y.payment_system)||void 0===q?void 0:q.tag})]}),(0,k.jsxs)("p",{children:[Y("order.type")," ",(0,k.jsx)("strong",{children:null===L||void 0===L?void 0:L.delivery_type})]}),(0,k.jsxs)("p",{children:[Y("payment.type")," ",(0,k.jsx)("strong",{children:null===L||void 0===L||null===(B=L.transaction)||void 0===B?void 0:B.status})]})]}),(0,k.jsxs)(c.Z,{span:24,className:"mt-5",children:[(0,k.jsx)("h4",{children:Y("map")}),(0,k.jsx)("div",{className:"map-container",style:{height:400,width:"100%"},children:(0,k.jsxs)(s.ZP,{bootstrapURLKeys:{key:ve||f.kr},defaultZoom:14,center:H,options:{fullscreenControl:!1},onGoogleApiLoaded:function(e){for(var i=e.map,n=e.maps,l=[ne,te].map((function(e){return{lat:Number(e.lat||"0"),lng:Number(e.lng||"0")}})),s=new n.LatLngBounds,d=0;d<l.length;d++)s.extend(l[d]);i.fitBounds(s)},children:[(0,k.jsx)(S,{lat:null===ne||void 0===ne?void 0:ne.lat,lng:null===ne||void 0===ne?void 0:ne.lng}),(0,k.jsx)(I,{lat:null===te||void 0===te?void 0:te.lat,lng:null===te||void 0===te?void 0:te.lng})]})})]})]})]})})})}},84618:function(e,i,n){e.exports=n.p+"static/media/shop.46d7a94ca800c711764a.png"},18478:function(e,i,n){e.exports=n.p+"static/media/user.fbe7078c52acde79652d.jpg"}}]);