"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[358],{55940:function(e,n,t){t.d(n,{Z:function(){return f}});var a=t(1413),c=t(45987),i=(t(47313),t(59491)),r=t(47515),o=t(34491),l=t(24511),s=t(79492),d=t(46417),u=["size","onClick","type"];function f(e){var n=e.size,t=void 0===n?"":n,f=e.onClick,h=e.type,v=void 0===h?"default":h,Z=(0,c.Z)(e,u),m=(0,l.$)().t,p=(0,s.Z)().isDemo;return(0,d.jsx)(i.Z,(0,a.Z)({size:t,icon:(0,d.jsx)(r.Z,{}),onClick:function(e){p?o.Am.warning(m("cannot.work.demo")):f(e)},type:v},Z))}},53233:function(e,n,t){var a=t(1413),c=t(29439),i=t(47313),r=t(56140),o=t(67251),l=t(45705),s=t(86345),d=t(78267),u=t(37388),f=t(59491),h=t(99587),v=t(24511),Z=t(46417),m=r.Z.Text;n.Z=function(e){var n=e.columns,t=void 0===n?[]:n,r=e.setColumns,p=e.style,x=e.size,g=void 0===x?"":x,y=e.iconOnly,C=(0,v.$)().t,j=(0,i.useState)(!1),b=(0,c.Z)(j,2),w=b[0],k=b[1],z=(0,Z.jsx)(o.Z,{children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,Z.jsx)(o.Z.Item,{children:(0,Z.jsxs)(l.Z,{className:"d-flex justify-content-between",children:[(0,Z.jsx)(m,{children:e.title}),(0,Z.jsx)(s.Z,{defaultChecked:!0,onClick:function(){return function(e){var n=null===t||void 0===t?void 0:t.map((function(n){return n.dataIndex===e.dataIndex&&(n.is_show=!(null!==n&&void 0!==n&&n.is_show)),n}));r(n)}(e)}})]})},e+n)}))});return(0,Z.jsx)(d.Z,{overlay:z,trigger:["click"],onVisibleChange:function(e){k(e)},visible:w,children:(0,Z.jsx)(u.Z,{title:C("change.columns"),children:(0,Z.jsx)(f.Z,{style:(0,a.Z)({},p),size:g,icon:(0,Z.jsx)(h.Z,{}),children:y?null:C("Columns")})})})}},51988:function(e,n,t){t.d(n,{Z:function(){return s}});t(47313);var a=t(24511),c=t(66188),i=t.p+"static/media/noproductsfound.1cec73868b5fd048b865.riv",r=t.p+"static/media/noresult.ac4af107751f94856a9c.riv",o=t.p+"static/media/nosell.32cb2c2cc548a15c820d.riv",l=t(46417);var s=function(e){var n=e.id,t=void 0===n?"noresult":n,s=e.text,d=void 0===s?"":s,u=(0,a.$)().t,f={src:{noproductsfound:i,noresult:r,nosell:o}[t],artboard:"New Artboard",autoplay:!0},h=(0,c.useRive)(f).RiveComponent;return(0,l.jsxs)("div",{className:"animation-canvas",children:[(0,l.jsx)("div",{style:{width:"100%",height:200},children:(0,l.jsx)(h,{})}),(0,l.jsx)("div",{className:"text",children:u(d)})]})}},41481:function(e,n,t){t.d(n,{Z:function(){return f}});var a=t(1413),c=t(29439),i=t(45987),r=t(47313),o=t(66672),l=t(16031),s=t(40765),d=t(46417),u=["handleChange","defaultValue","resetSearch"];function f(e){var n=e.handleChange,t=e.defaultValue,f=e.resetSearch,h=(0,i.Z)(e,u),v=(0,r.useState)(t),Z=(0,c.Z)(v,2),m=Z[0],p=Z[1],x=(0,r.useMemo)((function(){return(0,l.debounce)((function(e){n(e)}),800)}),[]);return(0,r.useEffect)((function(){p(t)}),[f]),(0,d.jsx)(o.Z,(0,a.Z)({value:m,onChange:function(e){p(e.target.value),x(e.target.value)},prefix:(0,d.jsx)(s.Z,{})},h))}},13945:function(e,n,t){function a(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}t.d(n,{Z:function(){return a}})},80314:function(e,n,t){var a=t(47313);n.Z=function(e,n){var t=(0,a.useRef)(!1);(0,a.useEffect)((function(){if(t.current)return e&&e();t.current=!0}),n)}},88486:function(e,n,t){t.r(n);var a=t(4942),c=t(93433),i=t(1413),r=t(29439),o=t(47313),l=t(12019),s=t(66407),d=t(47515),u=t(55768),f=t(45705),h=t(66204),v=t(59491),Z=t(77181),m=t(78508),p=t(74580),x=t(58467),g=t(34491),y=t(69658),C=t(2717),j=t(90954),b=t(57481),w=t(85191),k=t(24511),z=t(55940),_=t(53233),N=t(41481),S=t(80314),V=t(13945),I=t(51988),E=t(46417),O=["blue","red","gold","volcano","cyan","lime"];n.default=function(){var e,n,t,H=(0,k.$)().t,M=(0,C.I0)(),R=(0,x.s0)(),T=(0,C.v9)((function(e){return e.menu}),C.wU).activeMenu;var A=(0,o.useState)([{title:H("id"),dataIndex:"id",key:"id",is_show:!0},{title:H("name"),dataIndex:"name",key:"name",is_show:!0,render:function(e,n){var t;return null===n||void 0===n||null===(t=n.translation)||void 0===t?void 0:t.title}},{title:H("translations"),dataIndex:"locales",is_show:!0,render:function(e,n){var t;return(0,E.jsx)(f.Z,{children:null===(t=n.locales)||void 0===t?void 0:t.map((function(e,n){return(0,E.jsx)(h.Z,{className:"text-uppercase",color:[O[n]],children:e})}))})}},{title:H("category"),dataIndex:"category ",key:"category",is_show:!0,render:function(e,n){return n.category.translation.title}},{title:H("status"),dataIndex:"active",key:"active",is_show:!0,render:function(e){return e?(0,E.jsxs)(h.Z,{color:"cyan",children:[" ",H("active")]}):(0,E.jsx)(h.Z,{color:"yellow",children:H("inactive")})}},{title:H("options"),key:"options",dataIndex:"options",is_show:!0,render:function(e,n){return(0,E.jsxs)(f.Z,{children:[(0,E.jsx)(v.Z,{type:"primary",icon:(0,E.jsx)(l.Z,{}),onClick:function(){return function(e){M((0,j.bL)({id:"career_edit",url:"career/".concat(e),name:H("edit.career")})),R("/career/".concat(e))}(n.id)},disabled:n.deleted_at}),(0,E.jsx)(v.Z,{icon:(0,E.jsx)(s.Z,{}),onClick:function(){return function(e){M((0,j.bL)({id:"career-clone",url:"career-clone/".concat(e),name:H("career.clone")})),R("/career-clone/".concat(e))}(n.id)},disabled:n.deleted_at}),(0,E.jsx)(z.Z,{disabled:n.deleted_at,icon:(0,E.jsx)(d.Z,{}),onClick:function(){U([n.id]),L(!0),ee(!0)}})]})}}]),P=(0,r.Z)(A,2),K=P[0],D=P[1],L=(0,o.useContext)(p._).setIsModalVisible,$=(0,o.useState)(null),B=(0,r.Z)($,2),F=B[0],U=B[1],W=(0,o.useState)(!1),G=(0,r.Z)(W,2),q=G[0],J=G[1],Q=(0,o.useState)(null),X=(0,r.Z)(Q,2),Y=X[0],ee=X[1],ne=(0,C.v9)((function(e){return e.career}),C.wU),te=ne.career,ae=ne.meta,ce=(ne.loading,T.data),ie={search:null===ce||void 0===ce?void 0:ce.search,pageSize:ae.per_page,page:(null===ce||void 0===ce?void 0:ce.page)||1};(0,o.useEffect)((function(){T.refetch&&(M((0,w.a)(ie)),M((0,j.A_)(T)))}),[T.refetch]),(0,S.Z)((function(){M((0,w.a)(ie))}),[T.data]);var re={selectedRowKeys:F,onChange:function(e){U(e)}};return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(Z.Z,{className:"p-0",children:(0,E.jsxs)(f.Z,{wrap:!0,size:[14,20],children:[(0,E.jsx)(N.Z,{placeholder:H("search"),className:"w-25",handleChange:function(e){!function(e){var n=T.data;M((0,j.nc)({activeMenu:T,data:(0,i.Z)((0,i.Z)({},n),e)}))}({search:e})},defaultValue:null===(e=T.data)||void 0===e?void 0:e.search,resetSearch:!(null!==(n=T.data)&&void 0!==n&&n.search),style:{minWidth:300}}),(0,E.jsx)(z.Z,{size:"",onClick:function(){null===F||0===F.length?g.Am.warning(H("select.the.product")):(L(!0),ee(!1))},children:H("delete.selected")}),(0,E.jsx)(v.Z,{type:"primary",icon:(0,E.jsx)(u.Z,{}),onClick:function(){M((0,j.bL)({id:"career_add",url:"career/add",name:H("add.career")})),R("/career/add")},children:H("add.career")}),(0,E.jsx)(_.Z,{columns:K,setColumns:D})]})}),(0,E.jsx)(Z.Z,{title:H("career"),children:(0,E.jsx)(m.Z,{locale:{emptyText:(0,E.jsx)(I.Z,{})},scroll:{x:!0},rowSelection:re,columns:null===K||void 0===K?void 0:K.filter((function(e){return e.is_show})),dataSource:te,pagination:{pageSize:ae.per_page,page:(null===ce||void 0===ce?void 0:ce.page)||1,total:ae.total,defaultCurrent:null===ce||void 0===ce?void 0:ce.page,current:null===(t=T.data)||void 0===t?void 0:t.page},rowKey:function(e){return e.id},onChange:function(e,n,t){var a=e.pageSize,c=e.current,r=t.field,o=t.order,l=(0,V.Z)(o);M((0,j.nc)({activeMenu:T,data:(0,i.Z)((0,i.Z)({},T.data),{},{perPage:a,page:c,column:r,sort:l})}))}})}),(0,E.jsx)(y.Z,{click:function(){J(!0);var e=(0,i.Z)({},Object.assign.apply(Object,[{}].concat((0,c.Z)(F.map((function(e,n){return(0,a.Z)({},"ids[".concat(n,"]"),e)}))))));b.Z.delete(e).then((function(){M((0,w.a)(ie)),g.Am.success(H("successfully.deleted"))})).finally((function(){L(!1),J(!1),ee(null)}))},text:H(Y?"delete":"all.delete"),setText:U,loading:q})]})}},55768:function(e,n,t){t.d(n,{Z:function(){return l}});var a=t(1413),c=t(47313),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"},r=t(17469),o=function(e,n){return c.createElement(r.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:n,icon:i}))};o.displayName="PlusCircleOutlined";var l=c.forwardRef(o)},99587:function(e,n,t){t.d(n,{Z:function(){return l}});var a=t(1413),c=t(47313),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"},r=t(17469),o=function(e,n){return c.createElement(r.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:n,icon:i}))};o.displayName="TableOutlined";var l=c.forwardRef(o)},86345:function(e,n,t){t.d(n,{Z:function(){return y}});var a=t(87462),c=t(4942),i=t(47313),r=t(29439),o=t(45987),l=t(46123),s=t.n(l),d=t(10288),u=t(49242),f=i.forwardRef((function(e,n){var t,a=e.prefixCls,l=void 0===a?"rc-switch":a,f=e.className,h=e.checked,v=e.defaultChecked,Z=e.disabled,m=e.loadingIcon,p=e.checkedChildren,x=e.unCheckedChildren,g=e.onClick,y=e.onChange,C=e.onKeyDown,j=(0,o.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),b=(0,d.Z)(!1,{value:h,defaultValue:v}),w=(0,r.Z)(b,2),k=w[0],z=w[1];function _(e,n){var t=k;return Z||(z(t=e),null===y||void 0===y||y(t,n)),t}var N=s()(l,f,(t={},(0,c.Z)(t,"".concat(l,"-checked"),k),(0,c.Z)(t,"".concat(l,"-disabled"),Z),t));return i.createElement("button",Object.assign({},j,{type:"button",role:"switch","aria-checked":k,disabled:Z,className:N,ref:n,onKeyDown:function(e){e.which===u.Z.LEFT?_(!1,e):e.which===u.Z.RIGHT&&_(!0,e),null===C||void 0===C||C(e)},onClick:function(e){var n=_(!k,e);null===g||void 0===g||g(n,e)}}),m,i.createElement("span",{className:"".concat(l,"-inner")},k?p:x))}));f.displayName="Switch";var h=f,v=t(82508),Z=t(46479),m=t(91964),p=t(21631),x=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)n.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(t[a[c]]=e[a[c]])}return t},g=i.forwardRef((function(e,n){var t,r=e.prefixCls,o=e.size,l=e.loading,d=e.className,u=void 0===d?"":d,f=e.disabled,g=x(e,["prefixCls","size","loading","className","disabled"]),y=i.useContext(m.E_),C=y.getPrefixCls,j=y.direction,b=i.useContext(p.Z),w=C("switch",r),k=i.createElement("div",{className:"".concat(w,"-handle")},l&&i.createElement(v.Z,{className:"".concat(w,"-loading-icon")})),z=s()((t={},(0,c.Z)(t,"".concat(w,"-small"),"small"===(o||b)),(0,c.Z)(t,"".concat(w,"-loading"),l),(0,c.Z)(t,"".concat(w,"-rtl"),"rtl"===j),t),u);return i.createElement(Z.Z,{insertExtraNode:!0},i.createElement(h,(0,a.Z)({},g,{prefixCls:w,className:z,disabled:f||l,ref:n,loadingIcon:k})))}));g.__ANT_SWITCH=!0,g.displayName="Switch";var y=g}}]);