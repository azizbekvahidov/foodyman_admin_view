"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[7994],{55940:function(e,n,t){t.d(n,{Z:function(){return f}});var a=t(1413),c=t(45987),i=(t(47313),t(59491)),r=t(47515),l=t(34491),o=t(24511),s=t(79492),d=t(46417),u=["size","onClick","type"];function f(e){var n=e.size,t=void 0===n?"":n,f=e.onClick,h=e.type,v=void 0===h?"default":h,Z=(0,c.Z)(e,u),m=(0,o.$)().t,g=(0,s.Z)().isDemo;return(0,d.jsx)(i.Z,(0,a.Z)({size:t,icon:(0,d.jsx)(r.Z,{}),onClick:function(e){g?l.Am.warning(m("cannot.work.demo")):f(e)},type:v},Z))}},53233:function(e,n,t){var a=t(1413),c=t(29439),i=t(47313),r=t(56140),l=t(67251),o=t(45705),s=t(86345),d=t(78267),u=t(37388),f=t(59491),h=t(99587),v=t(24511),Z=t(46417),m=r.Z.Text;n.Z=function(e){var n=e.columns,t=void 0===n?[]:n,r=e.setColumns,g=e.style,p=e.size,x=void 0===p?"":p,C=e.iconOnly,y=(0,v.$)().t,j=(0,i.useState)(!1),b=(0,c.Z)(j,2),w=b[0],k=b[1],_=(0,Z.jsx)(l.Z,{children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,Z.jsx)(l.Z.Item,{children:(0,Z.jsxs)(o.Z,{className:"d-flex justify-content-between",children:[(0,Z.jsx)(m,{children:e.title}),(0,Z.jsx)(s.Z,{defaultChecked:!0,onClick:function(){return function(e){var n=null===t||void 0===t?void 0:t.map((function(n){return n.dataIndex===e.dataIndex&&(n.is_show=!(null!==n&&void 0!==n&&n.is_show)),n}));r(n)}(e)}})]})},e+n)}))});return(0,Z.jsx)(d.Z,{overlay:_,trigger:["click"],onVisibleChange:function(e){k(e)},visible:w,children:(0,Z.jsx)(u.Z,{title:y("change.columns"),children:(0,Z.jsx)(f.Z,{style:(0,a.Z)({},g),size:x,icon:(0,Z.jsx)(h.Z,{}),children:C?null:y("Columns")})})})}},48008:function(e,n,t){t(47313);var a=t(84695),c=t(87569),i=t(59491),r=t(24511),l=t(46417);n.Z=function(e){var n=e.open,t=e.handleCancel,o=e.text,s=e.click,d=e.loading,u=e.subTitle,f=(0,r.$)().t;return(0,l.jsxs)(a.Z,{closable:!1,visible:n,footer:null,centered:!0,children:[(0,l.jsx)(c.ZP,{status:"warning",title:o,subTitle:u}),(0,l.jsxs)("div",{className:"d-flex justify-content-end",children:[(0,l.jsx)(i.Z,{type:"primary",className:"mr-2",onClick:s,loading:d,children:f("yes")}),(0,l.jsx)(i.Z,{onClick:function(){return t()},children:f("no")})]})]})}},41481:function(e,n,t){t.d(n,{Z:function(){return f}});var a=t(1413),c=t(29439),i=t(45987),r=t(47313),l=t(66672),o=t(16031),s=t(40765),d=t(46417),u=["handleChange","defaultValue","resetSearch"];function f(e){var n=e.handleChange,t=e.defaultValue,f=e.resetSearch,h=(0,i.Z)(e,u),v=(0,r.useState)(t),Z=(0,c.Z)(v,2),m=Z[0],g=Z[1],p=(0,r.useMemo)((function(){return(0,o.debounce)((function(e){n(e)}),800)}),[]);return(0,r.useEffect)((function(){g(t)}),[f]),(0,d.jsx)(l.Z,(0,a.Z)({value:m,onChange:function(e){g(e.target.value),p(e.target.value)},prefix:(0,d.jsx)(s.Z,{})},h))}},13945:function(e,n,t){function a(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}t.d(n,{Z:function(){return a}})},80314:function(e,n,t){var a=t(47313);n.Z=function(e,n){var t=(0,a.useRef)(!1);(0,a.useEffect)((function(){if(t.current)return e&&e();t.current=!0}),n)}},57994:function(e,n,t){t.r(n);var a=t(4942),c=t(93433),i=t(1413),r=t(29439),l=t(47313),o=t(12019),s=t(66407),d=t(47515),u=t(55768),f=t(73591),h=t(45705),v=t(66204),Z=t(78891),m=t(59491),g=t(77181),p=t(78508),x=t(74580),C=t(58467),y=t(34491),j=t(69658),b=t(2717),w=t(90954),k=t(30763),_=t(80349),z=t(24511),N=t(55940),S=t(53233),V=t(41481),I=t(80314),E=(t(48008),t(13945)),O=t(46417),H=["blue","red","gold","volcano","cyan","lime"];f.Z.TabPane;n.default=function(){var e,n,t,f,T=(0,z.$)().t,M=(0,b.I0)(),P=(0,C.s0)(),R=(0,b.v9)((function(e){return e.menu}),b.wU).activeMenu,A=(0,l.useState)(null),K=(0,r.Z)(A,2),D=(K[0],K[1],(0,l.useState)("published")),L=(0,r.Z)(D,2),$=L[0],X=(L[1],(null===(e=R.data)||void 0===e?void 0:e.role)||$);var B=(0,l.useState)([{title:T("id"),dataIndex:"id",key:"id",is_show:!0},{title:T("name"),dataIndex:"name",key:"name",is_show:!0,render:function(e,n){var t;return null===(t=n.translation)||void 0===t?void 0:t.title}},{title:T("translations"),dataIndex:"locales",is_show:!0,render:function(e,n){var t;return(0,O.jsx)(h.Z,{children:null===(t=n.locales)||void 0===t?void 0:t.map((function(e,n){return(0,O.jsx)(v.Z,{className:"text-uppercase",color:[H[n]],children:e})}))})}},{title:T("image"),dataIndex:"img",key:"img",is_show:!0,render:function(e,n){return(0,O.jsx)(Z.Z,{src:n.deleted_at?"https://via.placeholder.com/150":e,alt:"img_gallery",width:100,className:"rounded",preview:!0,placeholder:!0},e+n.id)}},{title:T("status"),dataIndex:"active",key:"active",is_show:!0,render:function(e){return e?(0,O.jsxs)(v.Z,{color:"cyan",children:[" ",T("active")]}):(0,O.jsx)(v.Z,{color:"yellow",children:T("inactive")})}},{title:T("options"),key:"options",dataIndex:"options",is_show:!0,render:function(e,n){return(0,O.jsxs)(h.Z,{children:[(0,O.jsx)(m.Z,{type:"primary",icon:(0,O.jsx)(o.Z,{}),onClick:function(){return e=n.uuid,M((0,w.bL)({url:"career-categories/".concat(e),id:"career-categories-edit",name:T("edit.career.categories")})),void P("/career-categories/".concat(e));var e},disabled:n.deleted_at}),(0,O.jsx)(m.Z,{icon:(0,O.jsx)(s.Z,{}),onClick:function(){return e=n.uuid,M((0,w.bL)({id:"career-categories-clone",url:"career-categories-clone/".concat(e),name:T("career.categories.clone")})),void P("/career-categories-clone/".concat(e));var e},disabled:n.deleted_at}),(0,O.jsx)(N.Z,{disabled:n.deleted_at,icon:(0,O.jsx)(d.Z,{}),onClick:function(){Y([n.id]),G(!0),le(!0)}})]})}}]),F=(0,r.Z)(B,2),U=F[0],W=F[1],G=(0,l.useContext)(x._).setIsModalVisible,q=(0,l.useState)(null),J=(0,r.Z)(q,2),Q=J[0],Y=J[1],ee=(0,l.useState)(!1),ne=(0,r.Z)(ee,2),te=ne[0],ae=ne[1],ce=(0,l.useState)(null),ie=(0,r.Z)(ce,2),re=ie[0],le=ie[1],oe=(0,b.v9)((function(e){return e.careerCategory}),b.wU),se=oe.careerCategory,de=oe.meta,ue=oe.loading,fe=R.data,he={search:null===fe||void 0===fe?void 0:fe.search,pageSize:de.per_page,page:(null===fe||void 0===fe?void 0:fe.page)||1,status:X?void 0:X,deleted_at:"deleted_at"===X?X:void 0};(0,l.useEffect)((function(){R.refetch&&(M((0,_.X)(he)),M((0,w.A_)(R)))}),[R.refetch]),(0,I.Z)((function(){M((0,_.X)(he))}),[R.data]);var ve={selectedRowKeys:Q,onChange:function(e){Y(e)}};return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(g.Z,{className:"p-0",children:(0,O.jsxs)(h.Z,{wrap:!0,size:[14,20],children:[(0,O.jsx)(V.Z,{placeholder:T("search"),className:"w-25",handleChange:function(e){!function(e){var n=R.data;M((0,w.nc)({activeMenu:R,data:(0,i.Z)((0,i.Z)({},n),e)}))}({search:e})},defaultValue:null===(n=R.data)||void 0===n?void 0:n.search,resetSearch:!(null!==(t=R.data)&&void 0!==t&&t.search),style:{minWidth:300}}),(0,O.jsx)(N.Z,{size:"",onClick:function(){null===Q||0===Q.length?y.Am.warning(T("select.the.product")):(G(!0),le(!1))},children:T("delete.selected")}),(0,O.jsx)(m.Z,{type:"primary",icon:(0,O.jsx)(u.Z,{}),onClick:function(){M((0,w.bL)({id:"career-categories-add",url:"career-categories/add",name:T("add.career.categories")})),P("/career-categories/add")},children:T("add.career.category")}),(0,O.jsx)(S.Z,{columns:U,setColumns:W})]})}),(0,O.jsx)(g.Z,{title:T("career.categories"),children:(0,O.jsx)(p.Z,{scroll:{x:!0},rowSelection:ve,columns:null===U||void 0===U?void 0:U.filter((function(e){return e.is_show})),dataSource:se,pagination:{pageSize:de.per_page,page:(null===fe||void 0===fe?void 0:fe.page)||1,total:de.total,defaultCurrent:null===fe||void 0===fe?void 0:fe.page,current:null===(f=R.data)||void 0===f?void 0:f.page},rowKey:function(e){return e.id},onChange:function(e,n,t){var a=e.pageSize,c=e.current,r=t.field,l=t.order,o=(0,E.Z)(l);M((0,w.nc)({activeMenu:R,data:(0,i.Z)((0,i.Z)({},R.data),{},{perPage:a,page:c,column:r,sort:o})}))},loading:ue})}),(0,O.jsx)(j.Z,{click:function(){ae(!0);var e=(0,i.Z)({},Object.assign.apply(Object,[{}].concat((0,c.Z)(Q.map((function(e,n){return(0,a.Z)({},"ids[".concat(n,"]"),e)}))))));k.Z.delete(e).then((function(){M((0,_.X)(he)),y.Am.success(T("successfully.deleted"))})).finally((function(){G(!1),ae(!1),le(null)}))},text:T(re?"delete":"all.delete"),setText:Y,loading:te})]})}},55768:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(1413),c=t(47313),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"},r=t(17469),l=function(e,n){return c.createElement(r.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:n,icon:i}))};l.displayName="PlusCircleOutlined";var o=c.forwardRef(l)},99587:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(1413),c=t(47313),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"},r=t(17469),l=function(e,n){return c.createElement(r.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:n,icon:i}))};l.displayName="TableOutlined";var o=c.forwardRef(l)},86345:function(e,n,t){t.d(n,{Z:function(){return C}});var a=t(87462),c=t(4942),i=t(47313),r=t(29439),l=t(45987),o=t(46123),s=t.n(o),d=t(10288),u=t(49242),f=i.forwardRef((function(e,n){var t,a=e.prefixCls,o=void 0===a?"rc-switch":a,f=e.className,h=e.checked,v=e.defaultChecked,Z=e.disabled,m=e.loadingIcon,g=e.checkedChildren,p=e.unCheckedChildren,x=e.onClick,C=e.onChange,y=e.onKeyDown,j=(0,l.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),b=(0,d.Z)(!1,{value:h,defaultValue:v}),w=(0,r.Z)(b,2),k=w[0],_=w[1];function z(e,n){var t=k;return Z||(_(t=e),null===C||void 0===C||C(t,n)),t}var N=s()(o,f,(t={},(0,c.Z)(t,"".concat(o,"-checked"),k),(0,c.Z)(t,"".concat(o,"-disabled"),Z),t));return i.createElement("button",Object.assign({},j,{type:"button",role:"switch","aria-checked":k,disabled:Z,className:N,ref:n,onKeyDown:function(e){e.which===u.Z.LEFT?z(!1,e):e.which===u.Z.RIGHT&&z(!0,e),null===y||void 0===y||y(e)},onClick:function(e){var n=z(!k,e);null===x||void 0===x||x(n,e)}}),m,i.createElement("span",{className:"".concat(o,"-inner")},k?g:p))}));f.displayName="Switch";var h=f,v=t(82508),Z=t(46479),m=t(91964),g=t(21631),p=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)n.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(t[a[c]]=e[a[c]])}return t},x=i.forwardRef((function(e,n){var t,r=e.prefixCls,l=e.size,o=e.loading,d=e.className,u=void 0===d?"":d,f=e.disabled,x=p(e,["prefixCls","size","loading","className","disabled"]),C=i.useContext(m.E_),y=C.getPrefixCls,j=C.direction,b=i.useContext(g.Z),w=y("switch",r),k=i.createElement("div",{className:"".concat(w,"-handle")},o&&i.createElement(v.Z,{className:"".concat(w,"-loading-icon")})),_=s()((t={},(0,c.Z)(t,"".concat(w,"-small"),"small"===(l||b)),(0,c.Z)(t,"".concat(w,"-loading"),o),(0,c.Z)(t,"".concat(w,"-rtl"),"rtl"===j),t),u);return i.createElement(Z.Z,{insertExtraNode:!0},i.createElement(h,(0,a.Z)({},x,{prefixCls:w,className:_,disabled:f||o,ref:n,loadingIcon:k})))}));x.__ANT_SWITCH=!0,x.displayName="Switch";var C=x}}]);