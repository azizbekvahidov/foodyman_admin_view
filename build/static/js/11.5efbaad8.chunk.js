"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[11],{10011:function(n,e,i){i.r(e);var d=i(29439),l=i(77181),s=i(45705),r=i(59491),t=i(66204),o=i(78508),a=i(47313),c=i(24511),u=i(58467),v=i(7370),h=i(51282),x=i(2717),p=i(70816),j=i.n(p),f=i(84017),y=i(31774),m=i(43295),b=i(46417);e.default=function(){var n,e,i,p,k,_,g,Z=(0,c.$)().t,N=(0,a.useState)(null),I=(0,d.Z)(N,2),w=I[0],Y=I[1],C=(0,a.useState)(null),S=(0,d.Z)(C,2),q=S[0],D=S[1],$=(0,u.UO)().id,R=(0,a.useRef)(),U=(0,u.s0)(),B=(0,x.v9)((function(n){return n.globalSettings})).settings,E=(0,x.v9)((function(n){return n.currency}),x.wU).defaultCurrency,F=[{title:Z("id"),dataIndex:"id",key:"id",render:function(n,e){var i;return null===e||void 0===e||null===(i=e.stock)||void 0===i?void 0:i.id}},{title:Z("product.name"),dataIndex:"product",key:"product",render:function(n,e){var i,d;return null===(i=e.stock)||void 0===i||null===(d=i.product.translation)||void 0===d?void 0:d.title}},{title:Z("price"),dataIndex:"origin_price",key:"origin_price",render:function(n){return(0,f.Z)(n,null===E||void 0===E?void 0:E.symbol)}},{title:Z("quantity"),dataIndex:"quantity",key:"quantity"},{title:Z("tax"),dataIndex:"tax",key:"tax",render:function(n,e){return(0,f.Z)(n,null===E||void 0===E?void 0:E.symbol)}},{title:Z("total.price"),dataIndex:"total_price",key:"total_price",render:function(n){return(0,f.Z)(n,null===E||void 0===E?void 0:E.symbol)}}];(0,a.useEffect)((function(){Y(!0),v.Z.getById($).then((function(n){var e=n.data;D(e)})).finally((function(){Y(!1)}))}),[]);var K=(0,m.useReactToPrint)({content:function(){return R.current}});return(0,b.jsx)(l.Z,{title:Z("invoice"),extra:(0,b.jsxs)(s.Z,{wrap:!0,children:[(0,b.jsx)(r.Z,{type:"primary",onClick:function(){return U(-1)},children:(0,b.jsx)("span",{className:"ml-1",children:Z("back")})}),(0,b.jsxs)(r.Z,{type:"primary",onClick:function(){return K()},ref:R,children:[(0,b.jsx)(y.Z,{type:"printer"}),(0,b.jsx)("span",{className:"ml-1",children:Z("print")})]})]}),children:w?(0,b.jsx)(h.Z,{}):(0,b.jsxs)("div",{className:"container_check",ref:R,children:[(0,b.jsxs)("header",{className:"check_header",children:[(0,b.jsxs)("span",{children:[(0,b.jsx)("img",{src:null===B||void 0===B?void 0:B.favicon,alt:"img",className:"check_icon overflow-hidden w-25 h-25 rounded"}),(0,b.jsx)("h1",{children:"Invoice"})]}),(0,b.jsxs)("span",{className:"check_companyInfo",children:[(0,b.jsx)("h1",{children:null===B||void 0===B?void 0:B.title}),(0,b.jsx)("h5",{children:null===B||void 0===B?void 0:B.address})]})]}),(0,b.jsxs)("main",{children:[(0,b.jsxs)("span",{children:[(0,b.jsxs)("h4",{children:[Z("order.id"),": ",null===q||void 0===q?void 0:q.id]}),(0,b.jsx)("p",{children:j()(null===q||void 0===q?void 0:q.created_at).format("DD/M/YYYY")}),(0,b.jsx)("address",{children:(0,b.jsxs)("p",{children:[(0,b.jsxs)("span",{children:[Z("delivery.type"),": ",null===q||void 0===q?void 0:q.delivery_type]}),(0,b.jsx)("br",{}),(0,b.jsxs)("span",{children:[Z("delivery.address"),": ",null===q||void 0===q?void 0:q.address.city]}),(0,b.jsx)("br",{}),(0,b.jsxs)("span",{children:[Z("delivery.date"),": ",null===q||void 0===q?void 0:q.delivery_date," ",null===q||void 0===q?void 0:q.delivery_time]}),(0,b.jsx)("br",{}),(0,b.jsxs)("span",{children:[Z("delivery.fee"),": ",null===q||void 0===q?void 0:q.delivery_fee," "]}),(0,b.jsx)("br",{}),(0,b.jsxs)("span",{children:[Z("tax"),": ",null===q||void 0===q?void 0:q.tax]}),(0,b.jsx)("br",{}),(0,b.jsxs)("span",{children:[Z("status"),": ",(0,b.jsx)(t.Z,{color:"green",children:null===q||void 0===q?void 0:q.status})]})]})})]}),(0,b.jsxs)("span",{children:[(0,b.jsx)("h3",{className:"shop_data",children:null===q||void 0===q||null===(n=q.shop)||void 0===n?void 0:n.type}),(0,b.jsxs)("span",{children:[Z("title"),": ",null===q||void 0===q||null===(e=q.shop)||void 0===e||null===(i=e.translation)||void 0===i?void 0:i.title]}),(0,b.jsx)("br",{}),(0,b.jsxs)("span",{children:[Z("id"),": ",null===q||void 0===q||null===(p=q.shop)||void 0===p?void 0:p.id]}),(0,b.jsx)("br",{}),(0,b.jsxs)("span",{children:[Z("address"),": ",null===q||void 0===q||null===(k=q.shop)||void 0===k||null===(_=k.translation)||void 0===_?void 0:_.address]}),(0,b.jsx)("br",{}),(0,b.jsxs)("span",{children:[Z("phone"),": ",null===q||void 0===q||null===(g=q.shop)||void 0===g?void 0:g.phone]})]})]}),(0,b.jsx)(o.Z,{scroll:{x:!0},columns:F,dataSource:(null===q||void 0===q?void 0:q.details)||[],loading:w,rowKey:function(n){return n.id},pagination:!1,className:"check_table"}),(0,b.jsxs)("footer",{children:[(0,b.jsxs)("span",{children:[" ",(0,b.jsxs)("span",{children:[Z("note"),": ",null===q||void 0===q?void 0:q.note]})]}),(0,b.jsxs)("span",{children:[(0,b.jsx)("span",{children:Z("total.price")}),(0,b.jsx)("h1",{children:(0,f.Z)(null===q||void 0===q?void 0:q.total_price,null===E||void 0===E?void 0:E.symbol)})]})]}),(0,b.jsxs)("section",{className:"text-center",children:["\xa9 ",j()(new Date).format("YYYY")," ",null===B||void 0===B?void 0:B.title,"."," ",Z("all.rights.reserved")]})]})})}},84017:function(n,e,i){function d(n){return n?(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$")+" "+Number(n).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,"):"0"}i.d(e,{Z:function(){return d}})}}]);