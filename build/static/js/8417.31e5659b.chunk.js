"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[8417],{55940:function(e,n,t){t.d(n,{Z:function(){return f}});var i=t(1413),c=t(45987),a=(t(47313),t(59491)),r=t(47515),o=t(34491),l=t(24511),d=t(79492),s=t(46417),u=["size","onClick","type"];function f(e){var n=e.size,t=void 0===n?"":n,f=e.onClick,h=e.type,v=void 0===h?"default":h,p=(0,c.Z)(e,u),m=(0,l.$)().t,Z=(0,d.Z)().isDemo;return(0,s.jsx)(a.Z,(0,i.Z)({size:t,icon:(0,s.jsx)(r.Z,{}),onClick:function(e){Z?o.Am.warning(m("cannot.work.demo")):f(e)},type:v},p))}},53233:function(e,n,t){var i=t(1413),c=t(29439),a=t(47313),r=t(56140),o=t(67251),l=t(45705),d=t(86345),s=t(78267),u=t(37388),f=t(59491),h=t(99587),v=t(24511),p=t(46417),m=r.Z.Text;n.Z=function(e){var n=e.columns,t=void 0===n?[]:n,r=e.setColumns,Z=e.style,x=e.size,g=void 0===x?"":x,y=e.iconOnly,w=(0,v.$)().t,b=(0,a.useState)(!1),C=(0,c.Z)(b,2),j=C[0],k=C[1],_=(0,p.jsx)(o.Z,{children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,p.jsx)(o.Z.Item,{children:(0,p.jsxs)(l.Z,{className:"d-flex justify-content-between",children:[(0,p.jsx)(m,{children:e.title}),(0,p.jsx)(d.Z,{defaultChecked:!0,onClick:function(){return function(e){var n=null===t||void 0===t?void 0:t.map((function(n){return n.dataIndex===e.dataIndex&&(n.is_show=!(null!==n&&void 0!==n&&n.is_show)),n}));r(n)}(e)}})]})},e+n)}))});return(0,p.jsx)(s.Z,{overlay:_,trigger:["click"],onVisibleChange:function(e){k(e)},visible:j,children:(0,p.jsx)(u.Z,{title:w("change.columns"),children:(0,p.jsx)(f.Z,{style:(0,i.Z)({},Z),size:g,icon:(0,p.jsx)(h.Z,{}),children:y?null:w("Columns")})})})}},13945:function(e,n,t){function i(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}t.d(n,{Z:function(){return i}})},84017:function(e,n,t){function i(e){return e?(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$")+" "+Number(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,"):"0"}t.d(n,{Z:function(){return i}})},80314:function(e,n,t){var i=t(47313);n.Z=function(e,n){var t=(0,i.useRef)(!1);(0,i.useEffect)((function(){if(t.current)return e&&e();t.current=!0}),n)}},28417:function(e,n,t){t.r(n);var i=t(4942),c=t(93433),a=t(1413),r=t(29439),o=t(47313),l=t(12019),d=t(47515),s=t(55768),u=t(73591),f=t(45705),h=t(78891),v=t(56140),p=t(59491),m=t(77181),Z=t(78508),x=t(34491),g=t(69658),y=t(74580),w=t(2717),b=t(58467),C=t(90954),j=t(24511),k=t(55940),_=t(53233),z=t(80314),N=t(13945),I=t(84017),V=t(64441),S=t(97421),O=t(12545),E=t(46417),H=["published","deleted_at"],T=u.Z.TabPane;n.default=function(){var e,n=(0,j.$)().t,t=(0,w.I0)(),P=(0,b.s0)(),M=(0,o.useContext)(y._).setIsModalVisible,R=(0,o.useState)(null),K=(0,r.Z)(R,2),A=K[0],$=K[1],D=(0,o.useState)(!1),L=(0,r.Z)(D,2),F=L[0],U=L[1],B=(0,o.useState)(null),G=(0,r.Z)(B,2),W=G[0],q=G[1],J=(0,w.v9)((function(e){return e.menu}),w.wU).activeMenu,Q=(0,o.useState)("published"),X=(0,r.Z)(Q,2),Y=X[0],ee=X[1],ne=(null===(e=J.data)||void 0===e?void 0:e.role)||Y,te=null===J||void 0===J?void 0:J.data,ie=(0,w.v9)((function(e){return e.currency}),w.wU).defaultCurrency,ce={sort:null===te||void 0===te?void 0:te.sort,column:null===te||void 0===te?void 0:te.column,search:null!==te&&void 0!==te&&te.search?te.search:void 0,perPage:null===te||void 0===te?void 0:te.perPage,page:null===te||void 0===te?void 0:te.page,deleted_at:"deleted_at"===(null===te||void 0===te?void 0:te.role)?null===te||void 0===te?void 0:te.role:null},ae=(0,w.v9)((function(e){return e.reciept}),w.wU),re=ae.recepts,oe=ae.meta,le=ae.loading,de=(0,o.useState)([{title:n("id"),dataIndex:"id",key:"id",is_show:!0,sorter:!0},{title:n("title"),dataIndex:"title",key:"title",render:function(e,n){var t;return null===(t=n.translation)||void 0===t?void 0:t.title},is_show:!0},{title:n("shop/restaurant"),dataIndex:"shop",key:"shop",is_show:!0,render:function(e,i){var c,a;return(0,E.jsxs)(f.Z,{children:[(0,E.jsx)(h.Z,{width:100,src:i.deleted_at?"https://fakeimg.pl/640x360":S.bV+e.logo_img,alt:null===(c=e.translation)||void 0===c?void 0:c.title,preview:!0,placeholder:!0,className:"rounded"}),(0,E.jsx)(v.Z.Text,{className:"text-hover",onClick:function(){return function(e){t((0,C.bL)({id:"edit-shop",url:"shop/".concat(e.uuid),name:n("edit.shop")})),P("/shop/".concat(e.uuid))}(e)},children:null===(a=e.translation)||void 0===a?void 0:a.title})]})}},{title:n("image"),dataIndex:"img",key:"img",is_show:!0,render:function(e,n){return(0,E.jsx)(h.Z,{width:100,src:n.deleted_at?"https://fakeimg.pl/640x360":S.bV+e,preview:!0,placeholder:!0,className:"rounded"})}},{title:n("recipe.category"),dataIndex:"category",key:"category",is_show:!0,render:function(e){var n;return null===e||void 0===e||null===(n=e.translation)||void 0===n?void 0:n.title}},{title:n("discount"),dataIndex:"discount",key:"discount",is_show:!0,render:function(e,n){return"fix"===n.discount_type?(0,I.Z)(n.discount_price,ie.symbol):"".concat(n.discount_price," %")}},{title:n("options"),key:"options",dataIndex:"options",is_show:!0,render:function(e,i){return(0,E.jsxs)(f.Z,{children:[(0,E.jsx)(p.Z,{type:"primary",icon:(0,E.jsx)(l.Z,{}),onClick:function(){return function(e){t((0,C.bL)({url:"recept/edit/".concat(e.id),id:"recepe_edit",name:n("edit.recepe")})),P("/recept/edit/".concat(e.id),{state:"edit"})}(i)},disabled:i.deleted_at}),(0,E.jsx)(k.Z,{disabled:i.deleted_at,icon:(0,E.jsx)(d.Z,{}),onClick:function(){$([i.id]),M(!0),q(!0)}})]})}}]),se=(0,r.Z)(de,2),ue=se[0],fe=se[1];(0,z.Z)((function(){t((0,V.Tc)(ce))}),[J.data]),(0,o.useEffect)((function(){J.refetch&&(t((0,V.Tc)(ce)),t((0,C.A_)(J)))}),[J.refetch]);var he={selectedRowKeys:A,onChange:function(e){$(e)}};return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(m.Z,{className:"p-0",children:(0,E.jsxs)(f.Z,{wrap:!0,className:"justify-content-end w-100",children:[(0,E.jsx)(k.Z,{size:"",onClick:function(){null===A||0===A.length?x.Am.warning(n("select.the.product")):(M(!0),q(!1))},children:n("delete.selected")}),(0,E.jsx)(p.Z,{type:"primary",icon:(0,E.jsx)(s.Z,{}),onClick:function(){t((0,C.bL)({id:"recepe_add",url:"recept/add",name:n("add.recepe")})),P("/recept/add")},children:n("add.recepe")}),(0,E.jsx)(_.Z,{columns:ue,setColumns:fe})]})}),(0,E.jsxs)(m.Z,{title:n("recepes"),children:[(0,E.jsx)(u.Z,{className:"mt-3",activeKey:ne,onChange:function(e){!function(e){var n=J.data;t((0,C.nc)({activeMenu:J,data:(0,a.Z)((0,a.Z)({},n),e)}))}({role:e,page:1}),ee(e)},type:"card",children:H.map((function(e){return(0,E.jsx)(T,{tab:n(e)},e)}))}),(0,E.jsx)(Z.Z,{scroll:{x:!0},rowSelection:he,columns:null===ue||void 0===ue?void 0:ue.filter((function(e){return e.is_show})),dataSource:re,pagination:{pageSize:oe.per_page,page:oe.current_page,total:oe.total},rowKey:function(e){return e.id},onChange:function(e,n,i){var c=e.pageSize,r=e.current,o=i.field,l=i.order,d=(0,N.Z)(l);t((0,C.nc)({activeMenu:J,data:(0,a.Z)((0,a.Z)({},te),{},{perPage:c,page:r,column:o,sort:d})}))},loading:le})]}),(0,E.jsx)(g.Z,{click:function(){U(!0);var e=(0,a.Z)({},Object.assign.apply(Object,[{}].concat((0,c.Z)(A.map((function(e,n){return(0,i.Z)({},"ids[".concat(n,"]"),e)}))))));O.Z.delete(e).then((function(){x.Am.success(n("successfully.deleted")),t((0,V.Tc)(ce)),M(!1),q(null)})).finally((function(){return U(!1)}))},text:n(W?"delete":"all.delete"),setText:$,loading:F})]})}},55768:function(e,n,t){t.d(n,{Z:function(){return l}});var i=t(1413),c=t(47313),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"},r=t(17469),o=function(e,n){return c.createElement(r.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:a}))};o.displayName="PlusCircleOutlined";var l=c.forwardRef(o)},99587:function(e,n,t){t.d(n,{Z:function(){return l}});var i=t(1413),c=t(47313),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"},r=t(17469),o=function(e,n){return c.createElement(r.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:a}))};o.displayName="TableOutlined";var l=c.forwardRef(o)},86345:function(e,n,t){t.d(n,{Z:function(){return y}});var i=t(87462),c=t(4942),a=t(47313),r=t(29439),o=t(45987),l=t(46123),d=t.n(l),s=t(10288),u=t(49242),f=a.forwardRef((function(e,n){var t,i=e.prefixCls,l=void 0===i?"rc-switch":i,f=e.className,h=e.checked,v=e.defaultChecked,p=e.disabled,m=e.loadingIcon,Z=e.checkedChildren,x=e.unCheckedChildren,g=e.onClick,y=e.onChange,w=e.onKeyDown,b=(0,o.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),C=(0,s.Z)(!1,{value:h,defaultValue:v}),j=(0,r.Z)(C,2),k=j[0],_=j[1];function z(e,n){var t=k;return p||(_(t=e),null===y||void 0===y||y(t,n)),t}var N=d()(l,f,(t={},(0,c.Z)(t,"".concat(l,"-checked"),k),(0,c.Z)(t,"".concat(l,"-disabled"),p),t));return a.createElement("button",Object.assign({},b,{type:"button",role:"switch","aria-checked":k,disabled:p,className:N,ref:n,onKeyDown:function(e){e.which===u.Z.LEFT?z(!1,e):e.which===u.Z.RIGHT&&z(!0,e),null===w||void 0===w||w(e)},onClick:function(e){var n=z(!k,e);null===g||void 0===g||g(n,e)}}),m,a.createElement("span",{className:"".concat(l,"-inner")},k?Z:x))}));f.displayName="Switch";var h=f,v=t(82508),p=t(46479),m=t(91964),Z=t(21631),x=function(e,n){var t={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(i=Object.getOwnPropertySymbols(e);c<i.length;c++)n.indexOf(i[c])<0&&Object.prototype.propertyIsEnumerable.call(e,i[c])&&(t[i[c]]=e[i[c]])}return t},g=a.forwardRef((function(e,n){var t,r=e.prefixCls,o=e.size,l=e.loading,s=e.className,u=void 0===s?"":s,f=e.disabled,g=x(e,["prefixCls","size","loading","className","disabled"]),y=a.useContext(m.E_),w=y.getPrefixCls,b=y.direction,C=a.useContext(Z.Z),j=w("switch",r),k=a.createElement("div",{className:"".concat(j,"-handle")},l&&a.createElement(v.Z,{className:"".concat(j,"-loading-icon")})),_=d()((t={},(0,c.Z)(t,"".concat(j,"-small"),"small"===(o||C)),(0,c.Z)(t,"".concat(j,"-loading"),l),(0,c.Z)(t,"".concat(j,"-rtl"),"rtl"===b),t),u);return a.createElement(p.Z,{insertExtraNode:!0},a.createElement(h,(0,i.Z)({},g,{prefixCls:j,className:_,disabled:f||l,ref:n,loadingIcon:k})))}));g.__ANT_SWITCH=!0,g.displayName="Switch";var y=g}}]);