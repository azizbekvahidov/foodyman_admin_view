"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[9456],{53233:function(e,n,t){var a=t(1413),r=t(29439),i=t(47313),l=t(56140),c=t(67251),o=t(45705),u=t(86345),d=t(78267),s=t(37388),f=t(59491),h=t(99587),v=t(24511),m=t(46417),Z=l.Z.Text;n.Z=function(e){var n=e.columns,t=void 0===n?[]:n,l=e.setColumns,p=e.style,g=e.size,x=void 0===g?"":g,w=e.iconOnly,C=(0,v.$)().t,b=(0,i.useState)(!1),y=(0,r.Z)(b,2),k=y[0],j=y[1],z=(0,m.jsx)(c.Z,{children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,m.jsx)(c.Z.Item,{children:(0,m.jsxs)(o.Z,{className:"d-flex justify-content-between",children:[(0,m.jsx)(Z,{children:e.title}),(0,m.jsx)(u.Z,{defaultChecked:!0,onClick:function(){return function(e){var n=null===t||void 0===t?void 0:t.map((function(n){return n.dataIndex===e.dataIndex&&(n.is_show=!(null!==n&&void 0!==n&&n.is_show)),n}));l(n)}(e)}})]})},e+n)}))});return(0,m.jsx)(d.Z,{overlay:z,trigger:["click"],onVisibleChange:function(e){j(e)},visible:k,children:(0,m.jsx)(s.Z,{title:C("change.columns"),children:(0,m.jsx)(f.Z,{style:(0,a.Z)({},p),size:x,icon:(0,m.jsx)(h.Z,{}),children:w?null:C("Columns")})})})}},41481:function(e,n,t){t.d(n,{Z:function(){return f}});var a=t(1413),r=t(29439),i=t(45987),l=t(47313),c=t(66672),o=t(16031),u=t(40765),d=t(46417),s=["handleChange","defaultValue","resetSearch"];function f(e){var n=e.handleChange,t=e.defaultValue,f=e.resetSearch,h=(0,i.Z)(e,s),v=(0,l.useState)(t),m=(0,r.Z)(v,2),Z=m[0],p=m[1],g=(0,l.useMemo)((function(){return(0,o.debounce)((function(e){n(e)}),800)}),[]);return(0,l.useEffect)((function(){p(t)}),[f]),(0,d.jsx)(c.Z,(0,a.Z)({value:Z,onChange:function(e){p(e.target.value),g(e.target.value)},prefix:(0,d.jsx)(u.Z,{})},h))}},13945:function(e,n,t){function a(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}t.d(n,{Z:function(){return a}})},84017:function(e,n,t){function a(e){return e?(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$")+" "+Number(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,"):"0"}t.d(n,{Z:function(){return a}})},80314:function(e,n,t){var a=t(47313);n.Z=function(e,n){var t=(0,a.useRef)(!1);(0,a.useEffect)((function(){if(t.current)return e&&e();t.current=!0}),n)}},39456:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var a=t(4942),r=t(1413),i=t(29439),l=t(47313),c=t(77181),o=t(45705),u=t(78508),d=t(2717),s=t(90954),f=t(24511),h=t(13945),v=t(80314),m=t(84017),Z=t(48418),p=t(41481),g=t(53233),x=t(46417);function w(){var e,n,t=(0,f.$)().t,w=(0,d.I0)(),C=(0,d.v9)((function(e){return e.menu}),d.wU).activeMenu,b=(0,d.v9)((function(e){return e.wallet}),d.wU),y=b.wallets,k=b.loading,j=b.meta,z=b.params,I=(0,d.v9)((function(e){return e.currency}),d.wU).defaultCurrency,N=(0,l.useState)([{title:t("id"),dataIndex:"id",key:"id",sorter:!0,is_show:!0},{title:t("firstname"),dataIndex:"firstname",key:"firstname",is_show:!0},{title:t("lastname"),dataIndex:"lastname",key:"lastname",is_show:!0},{title:t("wallet"),dataIndex:"wallet",key:"wallet",is_show:!0,render:function(e){return(0,m.Z)(null===e||void 0===e?void 0:e.price,I.symbol)}},{title:t("phone"),dataIndex:"phone",key:"phone",is_show:!0},{title:t("role"),dataIndex:"role",key:"role",is_show:!0}]),_=(0,i.Z)(N,2),V=_[0],E=_[1];(0,l.useEffect)((function(){C.refetch&&(w((0,Z.uJ)()),w((0,s.A_)(C)))}),[C.refetch]),(0,v.Z)((function(){var e=C.data,n={sort:null===e||void 0===e?void 0:e.sort,column:null===e||void 0===e?void 0:e.column,perPage:null===e||void 0===e?void 0:e.perPage,page:null===e||void 0===e?void 0:e.page,search:null===e||void 0===e?void 0:e.search};w((0,Z.uJ)(n))}),[C.data]);return(0,x.jsx)(c.Z,{title:t("wallets"),extra:(0,x.jsxs)(o.Z,{wrap:!0,children:[(0,x.jsx)(p.Z,{placeholder:t("search"),handleChange:function(e){return function(e,n){var t=C.data;w((0,s.nc)({activeMenu:C,data:(0,r.Z)((0,r.Z)({},t),{},(0,a.Z)({},n,e))}))}(e,"search")},defaultValue:null===(e=C.data)||void 0===e?void 0:e.search,resetSearch:!(null!==(n=C.data)&&void 0!==n&&n.search)}),(0,x.jsx)(g.Z,{columns:V,setColumns:E})]}),children:(0,x.jsx)(u.Z,{scroll:{x:!0},columns:null===V||void 0===V?void 0:V.filter((function(e){return e.is_show})),dataSource:y,loading:k,pagination:{pageSize:z.perPage,page:z.page,total:j.total,defaultCurrent:z.page},rowKey:function(e){return e.id},onChange:function(e,n,t){var a=e.pageSize,r=e.current,i=t.field,l=t.order,c=(0,h.Z)(l);w((0,s.nc)({activeMenu:C,data:{perPage:a,page:r,column:i,sort:c}}))}})})}},99587:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(1413),r=t(47313),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"},l=t(17469),c=function(e,n){return r.createElement(l.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:n,icon:i}))};c.displayName="TableOutlined";var o=r.forwardRef(c)},86345:function(e,n,t){t.d(n,{Z:function(){return w}});var a=t(87462),r=t(4942),i=t(47313),l=t(29439),c=t(45987),o=t(46123),u=t.n(o),d=t(10288),s=t(49242),f=i.forwardRef((function(e,n){var t,a=e.prefixCls,o=void 0===a?"rc-switch":a,f=e.className,h=e.checked,v=e.defaultChecked,m=e.disabled,Z=e.loadingIcon,p=e.checkedChildren,g=e.unCheckedChildren,x=e.onClick,w=e.onChange,C=e.onKeyDown,b=(0,c.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),y=(0,d.Z)(!1,{value:h,defaultValue:v}),k=(0,l.Z)(y,2),j=k[0],z=k[1];function I(e,n){var t=j;return m||(z(t=e),null===w||void 0===w||w(t,n)),t}var N=u()(o,f,(t={},(0,r.Z)(t,"".concat(o,"-checked"),j),(0,r.Z)(t,"".concat(o,"-disabled"),m),t));return i.createElement("button",Object.assign({},b,{type:"button",role:"switch","aria-checked":j,disabled:m,className:N,ref:n,onKeyDown:function(e){e.which===s.Z.LEFT?I(!1,e):e.which===s.Z.RIGHT&&I(!0,e),null===C||void 0===C||C(e)},onClick:function(e){var n=I(!j,e);null===x||void 0===x||x(n,e)}}),Z,i.createElement("span",{className:"".concat(o,"-inner")},j?p:g))}));f.displayName="Switch";var h=f,v=t(82508),m=t(46479),Z=t(91964),p=t(21631),g=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t},x=i.forwardRef((function(e,n){var t,l=e.prefixCls,c=e.size,o=e.loading,d=e.className,s=void 0===d?"":d,f=e.disabled,x=g(e,["prefixCls","size","loading","className","disabled"]),w=i.useContext(Z.E_),C=w.getPrefixCls,b=w.direction,y=i.useContext(p.Z),k=C("switch",l),j=i.createElement("div",{className:"".concat(k,"-handle")},o&&i.createElement(v.Z,{className:"".concat(k,"-loading-icon")})),z=u()((t={},(0,r.Z)(t,"".concat(k,"-small"),"small"===(c||y)),(0,r.Z)(t,"".concat(k,"-loading"),o),(0,r.Z)(t,"".concat(k,"-rtl"),"rtl"===b),t),s);return i.createElement(m.Z,{insertExtraNode:!0},i.createElement(h,(0,a.Z)({},x,{prefixCls:k,className:z,disabled:f||o,ref:n,loadingIcon:j})))}));x.__ANT_SWITCH=!0,x.displayName="Switch";var w=x}}]);