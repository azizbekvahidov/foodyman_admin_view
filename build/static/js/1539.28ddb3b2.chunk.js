"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[1539],{81449:function(e,n,l){l.d(n,{Z:function(){return r}});l(47313);var i=l(84697),t=l(2717),s=l(97421),a=l(46417);function r(e){var n=e.center,l=e.handleLoadMap,r=e.children,d=(0,t.v9)((function(e){return e.globalSettings.settings}),t.wU).google_map_key;return(0,a.jsx)(i.ZP,{bootstrapURLKeys:{key:d||s.kr},defaultZoom:12,center:n,options:{fullscreenControl:!1},yesIWantToUseGoogleMapApiInternals:!0,onGoogleApiLoaded:function(e){var n=e.map,i=e.maps;return l(n,i)},children:r})}},17649:function(e,n,l){l.d(n,{Z:function(){return i}});l(97421);function i(e){if(null===e||void 0===e||!e.location)return{lat:47.4143302506288,lng:8.532059477976883};var n=e.location.split(", ");return{lat:Number(null===n||void 0===n?void 0:n[0]),lng:Number(null===n||void 0===n?void 0:n[1])}}},29242:function(e,n,l){function i(e,n){var l=[{value:1,symbol:""},{value:1e3,symbol:"k"},{value:1e6,symbol:"M"},{value:1e9,symbol:"G"},{value:1e12,symbol:"T"},{value:1e15,symbol:"P"},{value:1e18,symbol:"E"}].slice().reverse().find((function(n){return e>=n.value}));return l?"$"+(e/l.value).toFixed(n).replace(/\.0+$|(\.[0-9]*[1-9])0+$/,"$1")+l.symbol:"0"}l.d(n,{p:function(){return i}})},80314:function(e,n,l){var i=l(47313);n.Z=function(e,n){var l=(0,i.useRef)(!1);(0,i.useEffect)((function(){if(l.current)return e&&e();l.current=!0}),n)}},33118:function(e,n,l){l.d(n,{Z:function(){return a}});var i=l(70816),t=l.n(i),s=l(24511);function a(e){var n=(0,s.$)().t,l=t()(),i=t()(e),a=l.diff(i,"hours"),r=l.diff(i,"minutes");return a>23?t()(e).format("Do MMM, H:mm"):a>0?a+" "+n("hours.ago"):r+" "+n("minutes.ago")}},81539:function(e,n,l){l.r(n),l.d(n,{default:function(){return L}});var i=l(29439),t=l(47313),s=l(45334),a=l(77181),r=l(74294),d=l(68197),o=l(59624),u=l(24511),c=l(2717),v=l(17649),m=l(97421),f=l(81566),h=l(90954),x=l(51282),g=l(80314),p=l(11829),j=l(55613),_=l(29242),y=l(33118),b=l(46417),Z=function(e){var n,l=e.data,i=e.handleClose,t=(0,u.$)().t,a=(0,y.Z)(null===l||void 0===l||null===(n=l.delivery_man_setting)||void 0===n?void 0:n.updated_at),r=null===l||void 0===l?void 0:l.assign_reviews_avg_rating,c=null===l||void 0===l?void 0:l.phone,v=null===l||void 0===l?void 0:l.delivery_man_orders_count,f=null===l||void 0===l?void 0:l.delivery_man_orders_sum_total_price;return(0,b.jsxs)(d.Z,{gutter:12,align:"middle",children:[(0,b.jsx)(o.Z,{span:7,children:(0,b.jsxs)("div",{className:"d-flex align-items-center",children:[(0,b.jsx)(s.C,{src:m.bV+(null===l||void 0===l?void 0:l.img)}),(0,b.jsxs)("div",{className:"ml-2",children:[(0,b.jsx)("div",{className:"title",children:(null===l||void 0===l?void 0:l.firstname)+" "+(null===l||void 0===l?void 0:l.lastname)}),(0,b.jsx)(j.Z,{disabled:!0,allowHalf:!0,value:r||0})]})]})}),(0,b.jsxs)(o.Z,{span:4,children:[(0,b.jsx)("div",{className:"title",children:c}),(0,b.jsx)("div",{className:"label",children:t("phone")})]}),(0,b.jsxs)(o.Z,{span:4,children:[(0,b.jsx)("div",{className:"title",children:a}),(0,b.jsx)("div",{className:"label",children:t("last.activity")})]}),(0,b.jsxs)(o.Z,{span:4,children:[(0,b.jsx)("div",{className:"title",children:v}),(0,b.jsx)("div",{className:"label",children:t("total.orders")})]}),(0,b.jsxs)(o.Z,{span:4,children:[(0,b.jsx)("div",{className:"title",children:(0,_.p)(f)}),(0,b.jsxs)("div",{className:"label",children:[" ",t("total.earning")]})]}),(0,b.jsx)(o.Z,{span:1,children:(0,b.jsx)("button",{type:"button",className:"close-btn",onClick:i,children:(0,b.jsx)(p.Z,{})})})]})},N=l(45705),k=l(58467),w=l(39548);function C(e){var n,l,i,t,r=e.data,d=(0,u.$)().t,o=(0,k.s0)(),v=(0,c.I0)(),f=(0,c.v9)((function(e){return e.menu}),c.wU).menuItems,x=(null===r||void 0===r?void 0:r.deliveryman_orders)||[],g=(0,y.Z)(null===r||void 0===r||null===(n=r.delivery_man_setting)||void 0===n?void 0:n.updated_at);return(0,b.jsxs)(a.Z,{className:"user-card",onClick:function(){return function(e){!!f.find((function(e){return"delivery_map_orders"===e.id}))&&v((0,h.ph)({id:"delivery_map_orders",nextUrl:"deliveries/map"})),v((0,h.bL)({url:"deliveries/map/".concat(e.id),id:"delivery_map_orders",name:d("delivery.orders"),data:{list:x,item:x[0],deliveryman:r}})),o("/deliveries/map/".concat(e.id))}(r)},children:[(0,b.jsxs)(N.Z,{children:[(0,b.jsx)(s.C,{src:m.bV+(null===r||void 0===r?void 0:r.img),icon:(0,b.jsx)(w.Z,{}),style:{color:"#1a3353"}}),(0,b.jsxs)("div",{children:[(0,b.jsxs)("h4",{className:"title",children:[null===r||void 0===r?void 0:r.firstname," ",null===r||void 0===r||null===(l=r.lastname)||void 0===l?void 0:l.charAt(0),"."]}),(0,b.jsx)("div",{className:"last-seen ".concat(null!==r&&void 0!==r&&null!==(i=r.delivery_man_setting)&&void 0!==i&&i.online?"online":"text-muted"),children:null!==r&&void 0!==r&&null!==(t=r.delivery_man_setting)&&void 0!==t&&t.online?d("online"):g})]})]}),(0,b.jsx)("div",{className:"mt-2"}),(0,b.jsxs)(N.Z,{children:[(0,b.jsxs)("div",{children:[d("active_orders"),":"]}),(0,b.jsx)("div",{children:x.length})]})]})}var M=l(81449),U=[{label:"All",value:"all",key:1},{label:"Online",value:"1",key:2},{label:"Offline",value:"0",key:3}],$=function(e){return(0,b.jsx)(s.C,{src:e.url,icon:(0,b.jsx)(w.Z,{}),style:{color:"#1a3353"},onClick:e.onClick})};function L(){var e=(0,u.$)().t,n=(0,c.v9)((function(e){return e.menu}),c.wU).activeMenu,l=(0,c.I0)(),s=(0,t.useState)(void 0),p=(0,i.Z)(s,2),j=p[0],_=p[1],y=(0,t.useState)(null),N=(0,i.Z)(y,2),k=N[0],w=N[1],L=(0,c.v9)((function(e){return e.globalSettings}),c.wU).settings,A=(0,v.Z)(L),I=(0,c.v9)((function(e){return e.deliveries}),c.wU),P=I.delivery,S=I.loading;(0,g.Z)((function(){var e={page:1,perPage:100,online:"all"===j?void 0:j,"statuses[0]":"new","statuses[1]":"accepted","statuses[2]":"ready","statuses[3]":"on_a_way"};l((0,f.W)(e))}),[j]);return(0,t.useEffect)((function(){null!==n&&void 0!==n&&n.refetch&&(l((0,f.W)({perPage:100,"statuses[0]":"new","statuses[1]":"accepted","statuses[2]":"ready","statuses[3]":"on_a_way"})),l((0,h.A_)(n)))}),[null===n||void 0===n?void 0:n.refetch]),(0,b.jsx)(a.Z,{title:e("deliveries"),className:"delivery",extra:(0,b.jsx)(r.Z,{options:U,defaultValue:"all",loading:S,onChange:function(e){return _(e)},style:{width:"200px"}}),children:S?(0,b.jsx)(x.Z,{}):(0,b.jsxs)(d.Z,{gutter:8,children:[(0,b.jsx)(o.Z,{span:18,children:(0,b.jsxs)("div",{className:"map-container",style:{height:"73vh",width:"100%"},children:[!!k&&(0,b.jsx)(a.Z,{className:"map-user-card",children:(0,b.jsx)(Z,{data:k,handleClose:function(){w(null)}})}),(0,b.jsx)(M.Z,{center:A,handleLoadMap:function(e,n){for(var l=P.map((function(e){var n,l;return{lat:Number((null===(n=e.delivery_man_setting)||void 0===n?void 0:n.location.latitude)||"0"),lng:Number((null===(l=e.delivery_man_setting)||void 0===l?void 0:l.location.longitude)||"0")}})),i=new n.LatLngBounds,t=0;t<l.length;t++)i.extend(l[t]);e.fitBounds(i)},children:P.map((function(e){var n,l,i,t;return(0,b.jsx)($,{lat:Number((null===e||void 0===e||null===(n=e.delivery_man_setting)||void 0===n||null===(l=n.location)||void 0===l?void 0:l.latitude)||"0"),lng:Number((null===e||void 0===e||null===(i=e.delivery_man_setting)||void 0===i||null===(t=i.location)||void 0===t?void 0:t.longitude)||"0"),url:m.bV+e.img,onClick:function(){w(e)}},e.id)}))})]})}),(0,b.jsx)(o.Z,{span:6,children:(0,b.jsx)("div",{className:"order-list",style:{height:"75vh"},children:P.map((function(e,n){return(0,b.jsx)(C,{data:e},e.id+n)}))})})]})})}}}]);