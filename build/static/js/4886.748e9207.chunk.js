"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[4886],{55940:function(e,n,t){t.d(n,{Z:function(){return f}});var i=t(1413),a=t(45987),l=(t(47313),t(59491)),c=t(47515),r=t(34491),o=t(24511),d=t(79492),s=t(46417),u=["size","onClick","type"];function f(e){var n=e.size,t=void 0===n?"":n,f=e.onClick,h=e.type,v=void 0===h?"default":h,Z=(0,a.Z)(e,u),m=(0,o.$)().t,x=(0,d.Z)().isDemo;return(0,s.jsx)(l.Z,(0,i.Z)({size:t,icon:(0,s.jsx)(c.Z,{}),onClick:function(e){x?r.Am.warning(m("cannot.work.demo")):f(e)},type:v},Z))}},53233:function(e,n,t){var i=t(1413),a=t(29439),l=t(47313),c=t(56140),r=t(67251),o=t(45705),d=t(86345),s=t(78267),u=t(37388),f=t(59491),h=t(99587),v=t(24511),Z=t(46417),m=c.Z.Text;n.Z=function(e){var n=e.columns,t=void 0===n?[]:n,c=e.setColumns,x=e.style,p=e.size,b=void 0===p?"":p,g=e.iconOnly,j=(0,v.$)().t,y=(0,l.useState)(!1),C=(0,a.Z)(y,2),w=C[0],k=C[1],_=(0,Z.jsx)(r.Z,{children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,Z.jsx)(r.Z.Item,{children:(0,Z.jsxs)(o.Z,{className:"d-flex justify-content-between",children:[(0,Z.jsx)(m,{children:e.title}),(0,Z.jsx)(d.Z,{defaultChecked:!0,onClick:function(){return function(e){var n=null===t||void 0===t?void 0:t.map((function(n){return n.dataIndex===e.dataIndex&&(n.is_show=!(null!==n&&void 0!==n&&n.is_show)),n}));c(n)}(e)}})]})},e+n)}))});return(0,Z.jsx)(s.Z,{overlay:_,trigger:["click"],onVisibleChange:function(e){k(e)},visible:w,children:(0,Z.jsx)(u.Z,{title:j("change.columns"),children:(0,Z.jsx)(f.Z,{style:(0,i.Z)({},x),size:b,icon:(0,Z.jsx)(h.Z,{}),children:g?null:j("Columns")})})})}},48008:function(e,n,t){t(47313);var i=t(84695),a=t(87569),l=t(59491),c=t(24511),r=t(46417);n.Z=function(e){var n=e.open,t=e.handleCancel,o=e.text,d=e.click,s=e.loading,u=e.subTitle,f=(0,c.$)().t;return(0,r.jsxs)(i.Z,{closable:!1,visible:n,footer:null,centered:!0,children:[(0,r.jsx)(a.ZP,{status:"warning",title:o,subTitle:u}),(0,r.jsxs)("div",{className:"d-flex justify-content-end",children:[(0,r.jsx)(l.Z,{type:"primary",className:"mr-2",onClick:d,loading:s,children:f("yes")}),(0,r.jsx)(l.Z,{onClick:function(){return t()},children:f("no")})]})]})}},41481:function(e,n,t){t.d(n,{Z:function(){return f}});var i=t(1413),a=t(29439),l=t(45987),c=t(47313),r=t(66672),o=t(16031),d=t(40765),s=t(46417),u=["handleChange","defaultValue","resetSearch"];function f(e){var n=e.handleChange,t=e.defaultValue,f=e.resetSearch,h=(0,l.Z)(e,u),v=(0,c.useState)(t),Z=(0,a.Z)(v,2),m=Z[0],x=Z[1],p=(0,c.useMemo)((function(){return(0,o.debounce)((function(e){n(e)}),800)}),[]);return(0,c.useEffect)((function(){x(t)}),[f]),(0,s.jsx)(r.Z,(0,i.Z)({value:m,onChange:function(e){x(e.target.value),p(e.target.value)},prefix:(0,s.jsx)(d.Z,{})},h))}},13945:function(e,n,t){function i(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}t.d(n,{Z:function(){return i}})},80314:function(e,n,t){var i=t(47313);n.Z=function(e,n){var t=(0,i.useRef)(!1);(0,i.useEffect)((function(){if(t.current)return e&&e();t.current=!0}),n)}},74886:function(e,n,t){t.r(n);var i=t(4942),a=t(93433),l=t(1413),c=t(29439),r=t(47313),o=t(12019),d=t(66407),s=t(47515),u=t(55768),f=t(73591),h=t(78891),v=t(66204),Z=t(45705),m=t(59491),x=t(77181),p=t(78508),b=t(34491),g=t(97421),j=t(69658),y=t(74580),C=t(2717),w=t(58467),k=t(90954),_=t(11216),S=t(73253),N=t(24511),z=t(55940),V=t(53233),I=t(41481),O=t(80314),E=t(26672),H=t(48008),T=t(3925),A=t(13945),P=t(46417),M=["published","deleted_at"],K=f.Z.TabPane;n.default=function(){var e,n,t,R=(0,N.$)().t,L=(0,C.I0)(),D=(0,w.s0)(),$=(0,r.useState)(!1),F=(0,c.Z)($,2),U=F[0],W=F[1],B=(0,r.useContext)(y._).setIsModalVisible,G=(0,r.useState)(null),Q=(0,c.Z)(G,2),q=Q[0],J=Q[1],X=(0,r.useState)(!1),Y=(0,c.Z)(X,2),ee=Y[0],ne=Y[1],te=(0,r.useState)(null),ie=(0,c.Z)(te,2),ae=ie[0],le=ie[1],ce=(0,r.useState)(null),re=(0,c.Z)(ce,2),oe=re[0],de=re[1],se=(0,C.v9)((function(e){return e.menu}),C.wU).activeMenu,ue=(0,r.useState)("published"),fe=(0,c.Z)(ue,2),he=fe[0],ve=fe[1],Ze=(null===(e=se.data)||void 0===e?void 0:e.role)||he,me=null===se||void 0===se?void 0:se.data,xe={sort:null===me||void 0===me?void 0:me.sort,column:null===me||void 0===me?void 0:me.column,search:null!==me&&void 0!==me&&me.search?me.search:void 0,perPage:null===me||void 0===me?void 0:me.perPage,page:null===me||void 0===me?void 0:me.page,status:"deleted_at"===(null===me||void 0===me?void 0:me.role)?null:(null===me||void 0===me?void 0:me.role)||"published",deleted_at:"deleted_at"===(null===me||void 0===me?void 0:me.role)?null===me||void 0===me?void 0:me.role:null},pe=(0,C.v9)((function(e){return e.brand}),C.wU),be=pe.brands,ge=pe.meta,je=pe.loading,ye=(0,r.useState)([{title:R("id"),dataIndex:"id",key:"id",is_show:!0,sorter:!0},{title:R("title"),dataIndex:"title",key:"title",is_show:!0},{title:R("image"),dataIndex:"img",key:"img",is_show:!0,render:function(e,n){return(0,P.jsx)(h.Z,{src:n.deleted_at?"https://fakeimg.pl/640x360":g.bV+e,alt:"img_gallery",width:100,height:"auto",className:"rounded",preview:!0,placeholder:!0},e+n.id)}},{title:R("active"),dataIndex:"active",key:"active",is_show:!0,render:function(e){return e?(0,P.jsx)(v.Z,{color:"cyan",children:R("active")}):(0,P.jsx)(v.Z,{color:"yellow",children:R("inactive")})}},{title:R("options"),key:"options",dataIndex:"options",is_show:!0,render:function(e,n){return(0,P.jsxs)(Z.Z,{children:[(0,P.jsx)(m.Z,{type:"primary",icon:(0,P.jsx)(o.Z,{}),onClick:function(){return function(e){L((0,k.bL)({url:"brand/".concat(e.id),id:"brand_edit",name:R("edit.brand")})),D("/brand/".concat(e.id),{state:"edit"})}(n)},disabled:n.deleted_at}),(0,P.jsx)(m.Z,{icon:(0,P.jsx)(d.Z,{}),onClick:function(){return function(e){L((0,k.bL)({id:"brand-clone",url:"brand-clone/".concat(e),name:R("brand.clone")})),D("/brand-clone/".concat(e),{state:"clone"})}(n.id)},disabled:n.deleted_at}),(0,P.jsx)(z.Z,{disabled:n.deleted_at,icon:(0,P.jsx)(s.Z,{}),onClick:function(){J([n.id]),B(!0),le(!0)}})]})}}]),Ce=(0,c.Z)(ye,2),we=Ce[0],ke=Ce[1];(0,O.Z)((function(){L((0,S.S0)(xe))}),[se.data]),(0,r.useEffect)((function(){se.refetch&&(L((0,S.S0)(xe)),L((0,k.A_)(se)))}),[se.refetch]);var _e={selectedRowKeys:q,onChange:function(e){J(e)}},Se=function(e){var n=se.data;L((0,k.nc)({activeMenu:se,data:(0,l.Z)((0,l.Z)({},n),e)}))};return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(x.Z,{className:"p-0",children:(0,P.jsxs)(Z.Z,{wrap:!0,children:[(0,P.jsx)(I.Z,{placeholder:R("search"),className:"w-25",handleChange:function(e){Se({search:e})},defaultValue:null===(n=se.data)||void 0===n?void 0:n.search,resetSearch:!(null!==(t=se.data)&&void 0!==t&&t.search),style:{minWidth:300}}),(0,P.jsxs)(m.Z,{onClick:function(){L((0,k.bL)({url:"catalog/brands/import",id:"brand_import",name:R("import.brand")})),D("/catalog/brands/import")},children:[(0,P.jsx)(T.o5r,{className:"mr-2"}),R("import")]}),(0,P.jsxs)(m.Z,{loading:U,onClick:function(){W(!0),_.Z.export().then((function(e){var n=g.S0+e.data.file_name;window.location.href=n})).finally((function(){return W(!1)}))},children:[(0,P.jsx)(T.bwQ,{className:"mr-2"}),R("export")]}),"published"===Ze?(0,P.jsx)(z.Z,{size:"",onClick:function(){return de({delete:!0})},children:R("delete.all")}):(0,P.jsx)(z.Z,{size:"",icon:(0,P.jsx)(E.uOc,{className:"mr-2"}),onClick:function(){return de({restore:!0})},children:R("restore.all")}),(0,P.jsx)(z.Z,{size:"",onClick:function(){null===q||0===q.length?b.Am.warning(R("select.the.product")):(B(!0),le(!1))},children:R("delete.selected")}),(0,P.jsx)(m.Z,{type:"primary",icon:(0,P.jsx)(u.Z,{}),onClick:function(){L((0,k.bL)({id:"brand/add",url:"brand/add",name:R("add.brand")})),D("/brand/add")},children:R("add.brands")}),(0,P.jsx)(V.Z,{columns:we,setColumns:ke})]})}),(0,P.jsxs)(x.Z,{title:R("brands"),children:[(0,P.jsx)(f.Z,{className:"mt-3",activeKey:Ze,onChange:function(e){Se({role:e,page:1}),ve(e)},type:"card",children:M.map((function(e){return(0,P.jsx)(K,{tab:R(e)},e)}))}),(0,P.jsx)(p.Z,{scroll:{x:!0},rowSelection:_e,columns:null===we||void 0===we?void 0:we.filter((function(e){return e.is_show})),dataSource:be,pagination:{pageSize:ge.per_page,page:ge.current_page,total:ge.total},rowKey:function(e){return e.id},onChange:function(e,n,t){var i=e.pageSize,a=e.current,c=t.field,r=t.order,o=(0,A.Z)(r);L((0,k.nc)({activeMenu:se,data:(0,l.Z)((0,l.Z)({},me),{},{perPage:i,page:a,column:c,sort:o})}))},loading:je})]}),(0,P.jsx)(j.Z,{click:function(){ne(!0);var e=(0,l.Z)({},Object.assign.apply(Object,[{}].concat((0,a.Z)(q.map((function(e,n){return(0,i.Z)({},"ids[".concat(n,"]"),e)}))))));_.Z.delete(e).then((function(){b.Am.success(R("successfully.deleted")),L((0,S.S0)(xe)),B(!1),le(null)})).finally((function(){return ne(!1)}))},text:R(ae?"delete":"all.delete"),setText:J,loading:ee}),oe&&(0,P.jsx)(H.Z,{open:oe,handleCancel:function(){return de(null)},click:oe.restore?function(){ne(!0),_.Z.restoreAll().then((function(){b.Am.success(R("successfully.deleted")),L((0,S.S0)()),de(null)})).finally((function(){return ne(!1)}))}:function(){ne(!0),_.Z.dropAll().then((function(){b.Am.success(R("successfully.deleted")),L((0,S.S0)()),de(null)})).finally((function(){return ne(!1)}))},text:oe.restore?R("restore.modal.text"):R("read.carefully"),subTitle:oe.restore?"":R("confirm.deletion"),loading:ee,setText:J})]})}},99587:function(e,n,t){t.d(n,{Z:function(){return o}});var i=t(1413),a=t(47313),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"},c=t(17469),r=function(e,n){return a.createElement(c.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:l}))};r.displayName="TableOutlined";var o=a.forwardRef(r)},86345:function(e,n,t){t.d(n,{Z:function(){return g}});var i=t(87462),a=t(4942),l=t(47313),c=t(29439),r=t(45987),o=t(46123),d=t.n(o),s=t(10288),u=t(49242),f=l.forwardRef((function(e,n){var t,i=e.prefixCls,o=void 0===i?"rc-switch":i,f=e.className,h=e.checked,v=e.defaultChecked,Z=e.disabled,m=e.loadingIcon,x=e.checkedChildren,p=e.unCheckedChildren,b=e.onClick,g=e.onChange,j=e.onKeyDown,y=(0,r.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),C=(0,s.Z)(!1,{value:h,defaultValue:v}),w=(0,c.Z)(C,2),k=w[0],_=w[1];function S(e,n){var t=k;return Z||(_(t=e),null===g||void 0===g||g(t,n)),t}var N=d()(o,f,(t={},(0,a.Z)(t,"".concat(o,"-checked"),k),(0,a.Z)(t,"".concat(o,"-disabled"),Z),t));return l.createElement("button",Object.assign({},y,{type:"button",role:"switch","aria-checked":k,disabled:Z,className:N,ref:n,onKeyDown:function(e){e.which===u.Z.LEFT?S(!1,e):e.which===u.Z.RIGHT&&S(!0,e),null===j||void 0===j||j(e)},onClick:function(e){var n=S(!k,e);null===b||void 0===b||b(n,e)}}),m,l.createElement("span",{className:"".concat(o,"-inner")},k?x:p))}));f.displayName="Switch";var h=f,v=t(82508),Z=t(46479),m=t(91964),x=t(21631),p=function(e,n){var t={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)n.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(t[i[a]]=e[i[a]])}return t},b=l.forwardRef((function(e,n){var t,c=e.prefixCls,r=e.size,o=e.loading,s=e.className,u=void 0===s?"":s,f=e.disabled,b=p(e,["prefixCls","size","loading","className","disabled"]),g=l.useContext(m.E_),j=g.getPrefixCls,y=g.direction,C=l.useContext(x.Z),w=j("switch",c),k=l.createElement("div",{className:"".concat(w,"-handle")},o&&l.createElement(v.Z,{className:"".concat(w,"-loading-icon")})),_=d()((t={},(0,a.Z)(t,"".concat(w,"-small"),"small"===(r||C)),(0,a.Z)(t,"".concat(w,"-loading"),o),(0,a.Z)(t,"".concat(w,"-rtl"),"rtl"===y),t),u);return l.createElement(Z.Z,{insertExtraNode:!0},l.createElement(h,(0,i.Z)({},b,{prefixCls:w,className:_,disabled:f||o,ref:n,loadingIcon:k})))}));b.__ANT_SWITCH=!0,b.displayName="Switch";var g=b}}]);