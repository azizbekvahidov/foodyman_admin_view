(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[6192],{89802:function(t,e,n){"use strict";n.d(e,{q:function(){return s}});var r=n(1413),a=n(29439),o=n(45987),i=n(47313),l=n(74294),u=n(72652),c=n(46417),d=["fetchOptions","refetch"],s=function(t){var e=t.fetchOptions,n=t.refetch,s=void 0!==n&&n,f=(0,o.Z)(t,d),v=(0,i.useState)(!1),h=(0,a.Z)(v,2),p=h[0],x=h[1],Z=(0,i.useState)([]),g=(0,a.Z)(Z,2),y=g[0],m=g[1];return(0,c.jsx)(l.Z,(0,r.Z)((0,r.Z)({labelInValue:!0,filterOption:!1,notFoundContent:p?(0,c.jsx)(u.Z,{size:"small"}):"no results"},f),{},{options:p?[]:y,onFocus:function(){y.length&&!s||(x(!0),e().then((function(t){m(t),x(!1)})))}}))}},41481:function(t,e,n){"use strict";n.d(e,{Z:function(){return f}});var r=n(1413),a=n(29439),o=n(45987),i=n(47313),l=n(66672),u=n(16031),c=n(40765),d=n(46417),s=["handleChange","defaultValue","resetSearch"];function f(t){var e=t.handleChange,n=t.defaultValue,f=t.resetSearch,v=(0,o.Z)(t,s),h=(0,i.useState)(n),p=(0,a.Z)(h,2),x=p[0],Z=p[1],g=(0,i.useMemo)((function(){return(0,u.debounce)((function(t){e(t)}),800)}),[]);return(0,i.useEffect)((function(){Z(n)}),[f]),(0,d.jsx)(l.Z,(0,r.Z)({value:x,onChange:function(t){Z(t.target.value),g(t.target.value)},prefix:(0,d.jsx)(c.Z,{})},v))}},61105:function(t,e,n){"use strict";n.r(e);var r=n(29439),a=n(56140),o=n(99096),i=n(74294),l=n(78508),u=n(66204),c=n(72652),d=n(68197),s=n(59624),f=n(45705),v=n(77181),h=n(59491),p=n(47313),x=n(41481),Z=n(63243),g=n(26441),y=n(90954),m=n(2717),j=n(22133),_=(n(89802),n(70816)),b=n.n(_),w=n(93131),C=n(53233),k=n(8061),S=n(80314),q=n(58467),I=n(2135),N=n(74776),R=n.n(N),z=n(23885),E=n(84017),P=n(49067),V=n(46417),B=a.Z.Text,D=a.Z.Title,F=o.Z.RangePicker,M=i.Z.Option;e.default=function(){var t,e,n,o=(0,m.I0)(),_=(0,q.TH)(),N=(0,q.s0)(),O=R().parse(_.search,[])["?category_id"],T=R().parse(_.search,[])["?product_id"],U=(0,p.useState)(),H=(0,r.Z)(U,2),K=H[0],A=H[1],L=(0,p.useState)(),G=(0,r.Z)(L,2),W=G[0],J=G[1],Q=(0,p.useState)(!1),X=(0,r.Z)(Q,2),Y=X[0],$=X[1],tt=(0,p.useContext)(w.G),et=tt.date_from,nt=tt.date_to,rt=tt.by_time,at=tt.chart,ot=tt.handleChart,it=tt.handleDateRange,lt=(0,m.v9)((function(t){return t.menu}),m.wU).activeMenu,ut=(0,m.v9)((function(t){return t.productReport}),m.wU),ct=ut.loading,dt=ut.chartData,st=ut.productList,ft=(0,p.useState)([]),vt=(0,r.Z)(ft,2),ht=vt[0],pt=vt[1],xt=(0,p.useState)(!1),Zt=(0,r.Z)(xt,2),gt=Zt[0],yt=Zt[1],mt=(0,p.useState)(""),jt=(0,r.Z)(mt,2),_t=jt[0],bt=jt[1],wt=(0,m.v9)((function(t){return t.currency}),m.wU).defaultCurrency,Ct=(0,p.useState)([{title:(0,z.t)("product.title"),dataIndex:"translation_title",key:"translation_title",render:function(t,e){return(0,V.jsx)(I.rU,{to:"/report/products?product_id=".concat(e.id),children:null===e||void 0===e?void 0:e.translation.title})},is_show:!0,sorter:function(t,e){var n,r;return null===t||void 0===t||null===(n=t.translation)||void 0===n?void 0:n.title.localeCompare(null===e||void 0===e||null===(r=e.translation)||void 0===r?void 0:r.title)}},{title:(0,z.t)("bar.code"),dataIndex:"bar_code",key:"bar_code",is_show:!0,render:function(t,e){return(0,V.jsx)(V.Fragment,{children:(null===e||void 0===e?void 0:e.bar_code)||"-"})}},{title:(0,z.t)("item.sold"),dataIndex:"quantity",key:"quantity",sorter:function(t,e){return t.quantity-e.quantity},is_show:!0},{title:(0,z.t)("net.sales"),dataIndex:"price",key:"price",is_show:!0,render:function(t){return(0,E.Z)(t,null===wt||void 0===wt?void 0:wt.symbol)},sorter:function(t,e){return t.price-e.price}},{title:(0,z.t)("orders"),key:"count",dataIndex:"count",is_show:!0,sorter:function(t,e){return t.count-e.count}},{title:(0,z.t)("category"),key:"category",dataIndex:"category",is_show:!0,render:function(t,e){var n,r,a;return(0,V.jsx)(I.rU,{to:"/report/products?category_id=".concat(null===(n=e.category)||void 0===n?void 0:n.id),children:null===e||void 0===e||null===(r=e.category)||void 0===r||null===(a=r.translation)||void 0===a?void 0:a.title})}},{title:(0,z.t)("status"),key:"active",dataIndex:"active",render:function(t,e){var n=Boolean(null===e||void 0===e?void 0:e.active);return(0,V.jsx)(u.Z,{color:n?"green":"red",children:n?"Active":"Inactive"},e.id)},is_show:!0}]),kt=(0,r.Z)(Ct,2),St=kt[0],qt=kt[1],It=(0,p.useMemo)((function(){return[{label:"item.sold",value:"quantity",qty:"quantity",price:!1},{label:"net.sales",value:"price",qty:"price",price:!0},{label:"orders",value:"count",qty:"count",price:!1}]}),[]),Nt=function(){var t={date_from:et,date_to:nt,type:rt,chart:at};O&&(t.categories=[O]),T&&(t.products=[T]),It.find((function(t){return t.value===at}))&&o((0,k.VT)(t))},Rt=function(t,e){var n={date_from:et,date_to:nt,type:rt,page:t,perPage:e,search:_t||null};O&&(n.categories=[O]),T&&(n.products=[T]),K&&(n.shop_id=K),o((0,k.Iy)(n))};(0,p.useEffect)((function(){ot(It[0].value)}),[]),(0,p.useEffect)((function(){lt.refetch&&(Rt(),Nt(),o((0,y.A_)(lt)))}),[lt.refetch]),(0,S.Z)((function(){Rt()}),[nt,_t,O,T,rt,et,K]),(0,S.Z)((function(){Nt()}),[nt,rt,at,O,T,et]);var zt={selectedRowKeys:ht,onChange:function(t){pt(t)}};return(0,V.jsxs)(c.Z,{size:"large",spinning:ct,children:[(0,V.jsx)(d.Z,{gutter:24,className:"mb-3",children:(0,V.jsx)(s.Z,{span:12,children:(0,V.jsx)(f.Z,{children:(0,V.jsx)(F,{defaultValue:[b()(et),b()(nt)],onChange:it})})})}),(0,V.jsx)(d.Z,{gutter:24,className:"report-products",children:null===It||void 0===It?void 0:It.map((function(t){return(0,V.jsx)(s.Z,{span:8,onClick:function(){return ot(t.value)},children:(0,V.jsxs)(v.Z,{className:at===t.value&&"active",children:[(0,V.jsx)(d.Z,{className:"mb-5",children:(0,V.jsx)(s.Z,{children:(0,V.jsx)(B,{children:(0,z.t)(t.label)})})}),(0,V.jsx)(d.Z,{gutter:24,children:(0,V.jsx)(s.Z,{span:12,children:(0,V.jsx)(D,{level:2,children:null!==t&&void 0!==t&&t.price?(0,E.Z)(dt[t.qty],null===wt||void 0===wt?void 0:wt.symbol):dt[t.qty]})})})]})},t.label)}))}),(0,V.jsx)(j.Z,{reportData:dt,chart_data:"quantities_sum"}),(0,V.jsxs)(v.Z,{children:[(0,V.jsxs)(f.Z,{className:"d-flex justify-content-between align-center",children:[(0,V.jsx)(a.Z.Text,{strong:!0,level:3,children:"Products"}),(0,V.jsxs)(f.Z,{className:"d-flex justify-content-between",children:[(0,V.jsx)(x.Z,{style:{minWidth:"300px"},handleChange:function(t){return bt(t)}}),(0,V.jsx)(i.Z,{notFoundContent:Y?(0,V.jsx)(c.Z,{size:"small"}):null,onFocus:function(){W||($(!0),P.Z.selectPaginate({perPage:30}).then((function(t){$(!1),J(t)})))},value:K,placeholder:"Select shop",onSelect:function(t){return A(t)},style:{width:"200px"},children:null===W||void 0===W?void 0:W.map((function(t){return(0,V.jsx)(M,{value:t.id,children:t.translation.title},t.id)}))}),(0,V.jsx)(h.Z,{color:"geekblue",onClick:function(){o((0,k.jD)(ht))},disabled:Boolean(!ht.length),children:(0,z.t)("compare")}),(0,V.jsx)(h.Z,{type:Boolean(ht.length)||O||T||K?"primary":"default",danger:Boolean(ht.length)||!!O||!!T||!!K,onClick:function(){o((0,k._Z)()),A(void 0),pt([]),Rt(),Nt(),N("/report/products")},children:(0,z.t)("clear")}),(0,V.jsx)(h.Z,{icon:(0,V.jsx)(Z.Z,{}),loading:gt,onClick:function(){yt(!0),g.Z.getReportProductList({date_from:et,date_to:nt,type:rt,export:"excel"}).then((function(t){var e=t.data.data.link;e&&(window.location.href=e)})).finally((function(){return yt(!1)}))},children:(0,z.t)("download")}),(0,V.jsx)(C.Z,{columns:St,setColumns:qt})]})]}),(0,V.jsx)(l.Z,{expandable:{expandedRowRender:function(t){var e=[{title:(0,z.t)("extras.name"),dataIndex:"Extras name",render:function(t,e){var n;return null===(n=e.extras)||void 0===n?void 0:n.map((function(t){var e;return null===(e=t.group.translation)||void 0===e?void 0:e.title})).join(",")},key:"Extras name"},{title:(0,z.t)("item.sold"),dataIndex:"order_quantity",key:"order_quantity"},{title:(0,z.t)("net.sales"),dataIndex:"upgradeNum",render:function(t,e){return(0,E.Z)(e.price,null===wt||void 0===wt?void 0:wt.symbol)},key:"upgradeNum"},{title:(0,z.t)("orders"),dataIndex:"count",key:"count"},{title:(0,z.t)("stock"),dataIndex:"quantity",key:"quantity"}];return(0,V.jsx)(l.Z,{scroll:{x:!0},columns:e,dataSource:t.stocks,pagination:!1})},defaultExpandedRowKeys:["0"]},rowSelection:zt,columns:null===St||void 0===St?void 0:St.filter((function(t){return t.is_show})),dataSource:null===(t=st.data)||void 0===t?void 0:t.data,rowKey:function(t){return t.id},loading:ct,pagination:{pageSize:10,page:(null===st||void 0===st||null===(e=st.data)||void 0===e?void 0:e.meta.page)||1,total:null===st||void 0===st||null===(n=st.data)||void 0===n?void 0:n.meta.total,defaultCurrent:1},onChange:function(t){var e=t.pageSize,n=t.current;Rt(n,e)},scroll:{x:1500}})]})]})}},63243:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});var r=n(1413),a=n(47313),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M624 706.3h-74.1V464c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v242.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.7a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9z"}},{tag:"path",attrs:{d:"M811.4 366.7C765.6 245.9 648.9 160 512.2 160S258.8 245.8 213 366.6C127.3 389.1 64 467.2 64 560c0 110.5 89.5 200 199.9 200H304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8h-40.1c-33.7 0-65.4-13.4-89-37.7-23.5-24.2-36-56.8-34.9-90.6.9-26.4 9.9-51.2 26.2-72.1 16.7-21.3 40.1-36.8 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0152.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10C846.1 454.5 884 503.8 884 560c0 33.1-12.9 64.3-36.3 87.7a123.07 123.07 0 01-87.6 36.3H720c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h40.1C870.5 760 960 670.5 960 560c0-92.7-63.1-170.7-148.6-193.3z"}}]},name:"cloud-download",theme:"outlined"},i=n(17469),l=function(t,e){return a.createElement(i.Z,(0,r.Z)((0,r.Z)({},t),{},{ref:e,icon:o}))};l.displayName="CloudDownloadOutlined";var u=a.forwardRef(l)},24654:function(){}}]);