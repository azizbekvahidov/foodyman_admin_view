"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[6400],{55940:function(e,n,t){t.d(n,{Z:function(){return f}});var a=t(1413),i=t(45987),r=(t(47313),t(59491)),o=t(47515),c=t(34491),l=t(24511),d=t(79492),u=t(46417),s=["size","onClick","type"];function f(e){var n=e.size,t=void 0===n?"":n,f=e.onClick,h=e.type,v=void 0===h?"default":h,p=(0,i.Z)(e,s),m=(0,l.$)().t,Z=(0,d.Z)().isDemo;return(0,u.jsx)(r.Z,(0,a.Z)({size:t,icon:(0,u.jsx)(o.Z,{}),onClick:function(e){Z?c.Am.warning(m("cannot.work.demo")):f(e)},type:v},p))}},53233:function(e,n,t){var a=t(1413),i=t(29439),r=t(47313),o=t(56140),c=t(67251),l=t(45705),d=t(86345),u=t(78267),s=t(37388),f=t(59491),h=t(99587),v=t(24511),p=t(46417),m=o.Z.Text;n.Z=function(e){var n=e.columns,t=void 0===n?[]:n,o=e.setColumns,Z=e.style,x=e.size,g=void 0===x?"":x,b=e.iconOnly,j=(0,v.$)().t,y=(0,r.useState)(!1),w=(0,i.Z)(y,2),C=w[0],k=w[1],_=(0,p.jsx)(c.Z,{children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,p.jsx)(c.Z.Item,{children:(0,p.jsxs)(l.Z,{className:"d-flex justify-content-between",children:[(0,p.jsx)(m,{children:e.title}),(0,p.jsx)(d.Z,{defaultChecked:!0,onClick:function(){return function(e){var n=null===t||void 0===t?void 0:t.map((function(n){return n.dataIndex===e.dataIndex&&(n.is_show=!(null!==n&&void 0!==n&&n.is_show)),n}));o(n)}(e)}})]})},e+n)}))});return(0,p.jsx)(u.Z,{overlay:_,trigger:["click"],onVisibleChange:function(e){k(e)},visible:C,children:(0,p.jsx)(s.Z,{title:j("change.columns"),children:(0,p.jsx)(f.Z,{style:(0,a.Z)({},Z),size:g,icon:(0,p.jsx)(h.Z,{}),children:b?null:j("Columns")})})})}},51988:function(e,n,t){t.d(n,{Z:function(){return d}});t(47313);var a=t(24511),i=t(66188),r=t.p+"static/media/noproductsfound.1cec73868b5fd048b865.riv",o=t.p+"static/media/noresult.ac4af107751f94856a9c.riv",c=t.p+"static/media/nosell.32cb2c2cc548a15c820d.riv",l=t(46417);var d=function(e){var n=e.id,t=void 0===n?"noresult":n,d=e.text,u=void 0===d?"":d,s=(0,a.$)().t,f={src:{noproductsfound:r,noresult:o,nosell:c}[t],artboard:"New Artboard",autoplay:!0},h=(0,i.useRive)(f).RiveComponent;return(0,l.jsxs)("div",{className:"animation-canvas",children:[(0,l.jsx)("div",{style:{width:"100%",height:200},children:(0,l.jsx)(h,{})}),(0,l.jsx)("div",{className:"text",children:s(u)})]})}},41481:function(e,n,t){t.d(n,{Z:function(){return f}});var a=t(1413),i=t(29439),r=t(45987),o=t(47313),c=t(66672),l=t(16031),d=t(40765),u=t(46417),s=["handleChange","defaultValue","resetSearch"];function f(e){var n=e.handleChange,t=e.defaultValue,f=e.resetSearch,h=(0,r.Z)(e,s),v=(0,o.useState)(t),p=(0,i.Z)(v,2),m=p[0],Z=p[1],x=(0,o.useMemo)((function(){return(0,l.debounce)((function(e){n(e)}),800)}),[]);return(0,o.useEffect)((function(){Z(t)}),[f]),(0,u.jsx)(c.Z,(0,a.Z)({value:m,onChange:function(e){Z(e.target.value),x(e.target.value)},prefix:(0,u.jsx)(d.Z,{})},h))}},89281:function(e,n,t){t.d(n,{h:function(){return h}});var a=t(1413),i=t(29439),r=t(45987),o=t(47313),c=t(12279),l=t.n(c),d=t(74294),u=t(72652),s=t(46417),f=["fetchOptions","debounceTimeout"],h=function(e){var n=e.fetchOptions,t=e.debounceTimeout,c=void 0===t?400:t,h=(0,r.Z)(e,f),v=(0,o.useState)(!1),p=(0,i.Z)(v,2),m=p[0],Z=p[1],x=(0,o.useState)([]),g=(0,i.Z)(x,2),b=g[0],j=g[1],y=(0,o.useMemo)((function(){return l()((function(e){j([]),Z(!0),n(e).then((function(e){j(e),Z(!1)}))}),c)}),[n,c]);return(0,s.jsx)(d.Z,(0,a.Z)((0,a.Z)({showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:y,notFoundContent:m?(0,s.jsx)(u.Z,{size:"small"}):"no results"},h),{},{options:b,onFocus:function(){b.length||y("")}}))}},13945:function(e,n,t){function a(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}t.d(n,{Z:function(){return a}})},80314:function(e,n,t){var a=t(47313);n.Z=function(e,n){var t=(0,a.useRef)(!1);(0,a.useEffect)((function(){if(t.current)return e&&e();t.current=!0}),n)}},11101:function(e,n,t){var a=t(34344),i={getAll:function(e){return a.Z.get("rest/brands/paginate",{params:e})},getById:function(e,n){return a.Z.get("rest/brands/".concat(e),{params:n})}};n.Z=i},29955:function(e,n,t){var a=t(34344),i={getAll:function(e){return a.Z.get("rest/categories/paginate",{params:e})},getById:function(e,n){return a.Z.get("rest/categories/".concat(e),{params:n})},search:function(e){return a.Z.get("rest/categories/search",{params:e})}};n.Z=i},88518:function(e,n,t){t.r(n);var a=t(74165),i=t(15861),r=t(4942),o=t(93433),c=t(1413),l=t(29439),d=t(47313),u=t(12019),s=t(66407),f=t(47515),h=t(55768),v=t(73591),p=t(78891),m=t(66204),Z=t(45705),x=t(86345),g=t(59491),b=t(77181),j=t(78508),y=t(58467),w=t(34491),C=t(97421),k=t(74580),_=t(69658),S=t(2717),N=t(90954),I=t(18333),z=t(95882),O=t(24511),V=t(13945),E=t(80314),A=t(41481),M=t(89281),H=t(11101),T=t(29955),P=t(55940),R=t(53233),W=t(3925),K=t(51988),L=t(46417),D=v.Z.TabPane,F=["blue","red","gold","volcano","cyan","lime"],$=["all","published","pending","unpublished","deleted_at"];n.default=function(){var e,n,t,B,U,G,Q,q,J,X,Y=(0,O.$)().t,ee=(0,S.I0)(),ne=(0,y.s0)(),te=(0,d.useState)(null),ae=(0,l.Z)(te,2),ie=ae[0],re=ae[1],oe=(0,d.useState)("all"),ce=(0,l.Z)(oe,2),le=ce[0],de=ce[1],ue=(0,d.useState)(null),se=(0,l.Z)(ue,2),fe=se[0],he=se[1],ve=function(){ee((0,N.nc)({activeMenu:Ve,data:null}))},pe=(0,d.useState)([{title:Y("id"),dataIndex:"id",is_show:!0,sorter:function(e,n){return e.id-n.id}},{title:Y("image"),dataIndex:"img",is_show:!0,render:function(e,n){return(0,L.jsx)(p.Z,{width:100,src:n.deleted_at?"https://fakeimg.pl/640x360":C.bV+e,placeholder:!0,style:{borderRadius:4}})}},{title:Y("name"),dataIndex:"name",is_show:!0},{title:Y("status"),is_show:!0,dataIndex:"status",key:"status",render:function(e){return(0,L.jsx)("div",{children:"published"===e?(0,L.jsx)(m.Z,{color:"blue",children:Y(e)}):"unpublished"===e?(0,L.jsx)(m.Z,{color:"error",children:Y(e)}):(0,L.jsx)(m.Z,{color:"cyan",children:Y(e)})})}},{title:Y("translations"),dataIndex:"locales",is_show:!0,render:function(e,n){var t;return(0,L.jsx)(Z.Z,{children:null===(t=n.locales)||void 0===t?void 0:t.map((function(e,n){return(0,L.jsx)(m.Z,{className:"text-uppercase",color:[F[n]],children:e})}))})}},{title:Y("shop"),dataIndex:"shop_id",is_show:!0,render:function(e,n){var t;return null===(t=n.shop.translation)||void 0===t?void 0:t.title}},{title:Y("category"),dataIndex:"category_name",is_show:!0},{title:Y("active"),dataIndex:"active",is_show:!0,render:function(e,n){return(0,L.jsx)(x.Z,{onChange:function(){ge(!0),he(n.uuid),re(!0)},disabled:n.deleted_at,checked:e})}},{title:Y("options"),dataIndex:"options",is_show:!0,render:function(e,n){return(0,L.jsxs)(Z.Z,{children:[(0,L.jsx)(g.Z,{type:"primary",icon:(0,L.jsx)(u.Z,{}),onClick:function(){return function(e){ee((0,N.bL)({id:"product-edit",url:"seller/product/".concat(e.uuid),name:Y("edit.food")})),ve(),ne("/seller/product/".concat(e.uuid))}(n)},disabled:n.deleted_at}),(0,L.jsx)(g.Z,{icon:(0,L.jsx)(s.Z,{}),onClick:function(){return function(e){ee((0,N.bL)({id:"product-clone",url:"seller/product-clone/".concat(e.uuid),name:Y("clone.product")})),ve(),ne("/seller/product-clone/".concat(e.uuid))}(n)},disabled:n.deleted_at}),(0,L.jsx)(P.Z,{icon:(0,L.jsx)(f.Z,{}),onClick:function(){ge(!0),he([n.id]),Oe(!0),re(!1)},disabled:n.deleted_at})]})}}]),me=(0,l.Z)(pe,2),Ze=me[0],xe=me[1],ge=(0,d.useContext)(k._).setIsModalVisible,be=(0,d.useState)(!1),je=(0,l.Z)(be,2),ye=je[0],we=je[1],Ce=(0,d.useState)(!1),ke=(0,l.Z)(Ce,2),_e=ke[0],Se=ke[1],Ne=(0,d.useState)(null),Ie=(0,l.Z)(Ne,2),ze=Ie[0],Oe=Ie[1],Ve=(0,S.v9)((function(e){return e.menu}),S.wU).activeMenu,Ee=(0,S.v9)((function(e){return e.product}),S.wU),Ae=Ee.products,Me=Ee.meta,He=Ee.loading,Te=Ee.params,Pe=(0,S.v9)((function(e){return e.myShop}),S.wU).myShop,Re=(null===(e=Ve.data)||void 0===e?void 0:e.role)||le,We=Ve.data,Ke={search:null===We||void 0===We?void 0:We.search,brand_id:null===We||void 0===We||null===(n=We.brand)||void 0===n?void 0:n.value,category_id:null===We||void 0===We||null===(t=We.category)||void 0===t?void 0:t.value,status:"deleted_at"===Re||"all"===Re?void 0:Re,deleted_at:"deleted_at"===Re?Re:void 0,sort:null===We||void 0===We?void 0:We.sort,column:null===We||void 0===We?void 0:We.column,perPage:null===We||void 0===We?void 0:We.perPage,page:null===We||void 0===We?void 0:We.page};(0,E.Z)((function(){ee((0,z.MW)(Ke))}),[Ve.data]),(0,d.useEffect)((function(){Ve.refetch&&(ee((0,z.MW)(Ke)),ee((0,N.A_)(Ve)))}),[Ve.refetch]);function Le(){return Le=(0,i.Z)((0,a.Z)().mark((function e(n){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={shop_id:null===Pe||void 0===Pe?void 0:Pe.id,search:n},e.abrupt("return",H.Z.getAll(t).then((function(e){return e.data.map((function(e){return{label:e.title,value:e.id}}))})));case 2:case"end":return e.stop()}}),e)}))),Le.apply(this,arguments)}function De(){return De=(0,i.Z)((0,a.Z)().mark((function e(n){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={shop_id:null===Pe||void 0===Pe?void 0:Pe.id,search:0===n.length?null:n,type:"main"},e.abrupt("return",T.Z.getAll(t).then((function(e){return e.data.map((function(e){var n;return{label:null===(n=e.translation)||void 0===n?void 0:n.title,value:e.id}}))})));case 2:case"end":return e.stop()}}),e)}))),De.apply(this,arguments)}var Fe=function(e){var n=Ve.data;ee((0,N.nc)({activeMenu:Ve,data:(0,c.Z)((0,c.Z)({},n),e)}))},$e={selectedRowKeys:fe,onChange:function(e){he(e)}};return(0,L.jsxs)(d.Fragment,{children:[(0,L.jsx)(b.Z,{className:"p-0",title:Y("food"),extra:(0,L.jsxs)(Z.Z,{wrap:!0,children:[(0,L.jsx)(M.h,{placeholder:Y("select.category"),fetchOptions:function(e){return De.apply(this,arguments)},style:{minWidth:150},onChange:function(e){return Fe({category:e})},value:null===(B=Ve.data)||void 0===B?void 0:B.category}),(0,L.jsx)(M.h,{placeholder:Y("select.brand"),fetchOptions:function(e){return Le.apply(this,arguments)},style:{minWidth:150},onChange:function(e){return Fe({brand:e})},value:null===(U=Ve.data)||void 0===U?void 0:U.brand}),(0,L.jsx)(g.Z,{icon:(0,L.jsx)(h.Z,{}),type:"primary",onClick:function(){ee((0,N.bL)({id:"product-add",url:"seller/product/add",name:Y("add.food")})),ve(),ne("/seller/product/add")},children:Y("add.food")}),(0,L.jsx)(R.Z,{columns:Ze,setColumns:xe})]}),children:(0,L.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,L.jsx)(A.Z,{placeholder:Y("search"),handleChange:function(e){return Fe({search:e})},defaultValue:null===(G=Ve.data)||void 0===G?void 0:G.search,resetSearch:!(null!==(Q=Ve.data)&&void 0!==Q&&Q.search),className:"w-25"}),(0,L.jsxs)(Z.Z,{wrap:!0,children:[(0,L.jsxs)(g.Z,{onClick:function(){ee((0,N.bL)({id:"seller-product-import",url:"seller/product/import",name:Y("food.import")})),ne("/seller/product/import")},children:[(0,L.jsx)(W.o5r,{className:"mr-2"}),Y("import")]}),(0,L.jsxs)(g.Z,{loading:_e,onClick:function(){Se(!0);var e={shop_id:null===Pe||void 0===Pe?void 0:Pe.id};I.Z.export(e).then((function(e){var n=C.S0+e.data.file_name;window.location.href=n})).finally((function(){return Se(!1)}))},children:[(0,L.jsx)(W.bwQ,{className:"mr-2"}),Y("export")]}),(0,L.jsx)(P.Z,{size:"",onClick:function(){null===fe||0===fe.length?w.Am.warning(Y("select.the.product")):(ge(!0),Oe(!1))},children:Y("delete.selected")})]})]})}),(0,L.jsxs)(b.Z,{children:[(0,L.jsx)(v.Z,{className:"mt-3",activeKey:Re,onChange:function(e){Fe({role:e,page:1}),de(e)},type:"card",children:$.map((function(e){return(0,L.jsx)(D,{tab:Y(e)},e)}))}),(0,L.jsx)(j.Z,{locale:{emptyText:(0,L.jsx)(K.Z,{})},scroll:{x:!0},rowSelection:$e,loading:He,columns:null===Ze||void 0===Ze?void 0:Ze.filter((function(e){return e.is_show})),dataSource:Ae,pagination:{pageSize:Te.perPage,page:(null===(q=Ve.data)||void 0===q?void 0:q.page)||1,total:Me.total,defaultCurrent:null===(J=Ve.data)||void 0===J?void 0:J.page,current:null===(X=Ve.data)||void 0===X?void 0:X.page},onChange:function(e,n,t){var a=e.pageSize,i=e.current,r=t.field,o=t.order,l=(0,V.Z)(o);ee((0,N.nc)({activeMenu:Ve,data:(0,c.Z)((0,c.Z)({},Ve.data),{},{perPage:a,page:i,column:r,sort:l})}))},rowKey:function(e){return e.id}})]}),(0,L.jsx)(_.Z,{click:ie?function(){we(!0),I.Z.setActive(fe).then((function(){ge(!1),ee((0,z.MW)(Ke)),w.Am.success(Y("successfully.updated")),re(!0)})).finally((function(){return we(!1)}))}:function(){we(!0);var e=(0,c.Z)({},Object.assign.apply(Object,[{}].concat((0,o.Z)(fe.map((function(e,n){return(0,r.Z)({},"ids[".concat(n,"]"),e)}))))));I.Z.delete(e).then((function(){ge(!1),w.Am.success(Y("successfully.deleted")),ee((0,z.MW)(e))})).finally((function(){return we(!1)}))},text:Y(ie?"set.active.food":ze?"delete":"all.delete"),loading:ye,setText:he,setActive:re})]})}},99587:function(e,n,t){t.d(n,{Z:function(){return l}});var a=t(1413),i=t(47313),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"},o=t(17469),c=function(e,n){return i.createElement(o.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:n,icon:r}))};c.displayName="TableOutlined";var l=i.forwardRef(c)},86345:function(e,n,t){t.d(n,{Z:function(){return b}});var a=t(87462),i=t(4942),r=t(47313),o=t(29439),c=t(45987),l=t(46123),d=t.n(l),u=t(10288),s=t(49242),f=r.forwardRef((function(e,n){var t,a=e.prefixCls,l=void 0===a?"rc-switch":a,f=e.className,h=e.checked,v=e.defaultChecked,p=e.disabled,m=e.loadingIcon,Z=e.checkedChildren,x=e.unCheckedChildren,g=e.onClick,b=e.onChange,j=e.onKeyDown,y=(0,c.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),w=(0,u.Z)(!1,{value:h,defaultValue:v}),C=(0,o.Z)(w,2),k=C[0],_=C[1];function S(e,n){var t=k;return p||(_(t=e),null===b||void 0===b||b(t,n)),t}var N=d()(l,f,(t={},(0,i.Z)(t,"".concat(l,"-checked"),k),(0,i.Z)(t,"".concat(l,"-disabled"),p),t));return r.createElement("button",Object.assign({},y,{type:"button",role:"switch","aria-checked":k,disabled:p,className:N,ref:n,onKeyDown:function(e){e.which===s.Z.LEFT?S(!1,e):e.which===s.Z.RIGHT&&S(!0,e),null===j||void 0===j||j(e)},onClick:function(e){var n=S(!k,e);null===g||void 0===g||g(n,e)}}),m,r.createElement("span",{className:"".concat(l,"-inner")},k?Z:x))}));f.displayName="Switch";var h=f,v=t(82508),p=t(46479),m=t(91964),Z=t(21631),x=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)n.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]])}return t},g=r.forwardRef((function(e,n){var t,o=e.prefixCls,c=e.size,l=e.loading,u=e.className,s=void 0===u?"":u,f=e.disabled,g=x(e,["prefixCls","size","loading","className","disabled"]),b=r.useContext(m.E_),j=b.getPrefixCls,y=b.direction,w=r.useContext(Z.Z),C=j("switch",o),k=r.createElement("div",{className:"".concat(C,"-handle")},l&&r.createElement(v.Z,{className:"".concat(C,"-loading-icon")})),_=d()((t={},(0,i.Z)(t,"".concat(C,"-small"),"small"===(c||w)),(0,i.Z)(t,"".concat(C,"-loading"),l),(0,i.Z)(t,"".concat(C,"-rtl"),"rtl"===y),t),s);return r.createElement(p.Z,{insertExtraNode:!0},r.createElement(h,(0,a.Z)({},g,{prefixCls:C,className:_,disabled:f||l,ref:n,loadingIcon:k})))}));g.__ANT_SWITCH=!0,g.displayName="Switch";var b=g}}]);