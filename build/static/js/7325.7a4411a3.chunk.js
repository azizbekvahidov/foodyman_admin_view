"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[7325],{55940:function(e,n,t){t.d(n,{Z:function(){return f}});var i=t(1413),a=t(45987),c=(t(47313),t(59491)),o=t(47515),l=t(34491),d=t(24511),r=t(79492),s=t(46417),u=["size","onClick","type"];function f(e){var n=e.size,t=void 0===n?"":n,f=e.onClick,h=e.type,v=void 0===h?"default":h,Z=(0,a.Z)(e,u),g=(0,d.$)().t,m=(0,r.Z)().isDemo;return(0,s.jsx)(c.Z,(0,i.Z)({size:t,icon:(0,s.jsx)(o.Z,{}),onClick:function(e){m?l.Am.warning(g("cannot.work.demo")):f(e)},type:v},Z))}},53233:function(e,n,t){var i=t(1413),a=t(29439),c=t(47313),o=t(56140),l=t(67251),d=t(45705),r=t(86345),s=t(78267),u=t(37388),f=t(59491),h=t(99587),v=t(24511),Z=t(46417),g=o.Z.Text;n.Z=function(e){var n=e.columns,t=void 0===n?[]:n,o=e.setColumns,m=e.style,p=e.size,b=void 0===p?"":p,x=e.iconOnly,y=(0,v.$)().t,C=(0,c.useState)(!1),w=(0,a.Z)(C,2),j=w[0],k=w[1],_=(0,Z.jsx)(l.Z,{children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,Z.jsx)(l.Z.Item,{children:(0,Z.jsxs)(d.Z,{className:"d-flex justify-content-between",children:[(0,Z.jsx)(g,{children:e.title}),(0,Z.jsx)(r.Z,{defaultChecked:!0,onClick:function(){return function(e){var n=null===t||void 0===t?void 0:t.map((function(n){return n.dataIndex===e.dataIndex&&(n.is_show=!(null!==n&&void 0!==n&&n.is_show)),n}));o(n)}(e)}})]})},e+n)}))});return(0,Z.jsx)(s.Z,{overlay:_,trigger:["click"],onVisibleChange:function(e){k(e)},visible:j,children:(0,Z.jsx)(u.Z,{title:y("change.columns"),children:(0,Z.jsx)(f.Z,{style:(0,i.Z)({},m),size:b,icon:(0,Z.jsx)(h.Z,{}),children:x?null:y("Columns")})})})}},13945:function(e,n,t){function i(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}t.d(n,{Z:function(){return i}})},80314:function(e,n,t){var i=t(47313);n.Z=function(e,n){var t=(0,i.useRef)(!1);(0,i.useEffect)((function(){if(t.current)return e&&e();t.current=!0}),n)}},37325:function(e,n,t){t.r(n),t.d(n,{default:function(){return R}});var i=t(4942),a=t(93433),c=t(1413),o=t(29439),l=t(47313),d=t(34632),r=t(12019),s=t(66407),u=t(47515),f=t(55768),h=t(73591),v=t(78891),Z=t(86345),g=t(45705),m=t(37388),p=t(59491),b=t(77181),x=t(78508),y=t(34491),C=t(69658),w=t(74580),j=t(2717),k=t(58467),_=t(90954),z=t(94843),I=t(80314),N=t(13945),S=t(56078),V=t(24511),O=t(55940),E=t(53233),H=t(97421),P=t(46417),A=["published","deleted_at"],M=h.Z.TabPane;function R(){var e,n,t,R,T=(0,V.$)().t,K=(0,j.I0)(),J=(0,k.s0)(),D=(0,l.useState)([{title:T("id"),dataIndex:"id",key:"id",sorter:!0,is_show:!0},{title:T("title"),dataIndex:"translation",key:"translation",render:function(e){return null===e||void 0===e?void 0:e.title},is_show:!0},{title:T("image"),dataIndex:"img",render:function(e,n){return(0,P.jsx)(v.Z,{width:150,height:100,src:n.deleted_at?"https://fakeimg.pl/640x360":H.bV+e,placeholder:!0,className:"rounded",style:{objectFit:"contain"}})},is_show:!0},{title:T("created.at"),dataIndex:"created_at",key:"created_at",is_show:!0},{title:T("published.at"),dataIndex:"published_at",key:"published_at",is_show:!0},{title:T("active"),dataIndex:"active",key:"active",render:function(e,n){return(0,P.jsx)(Z.Z,{disabled:n.deleted_at,checked:e,onChange:function(){q(n.uuid),ee(!1),ae(!1),F(!0)}})},is_show:!0},{title:T("options"),key:"options",dataIndex:"options",render:function(e,n){return(0,P.jsxs)(g.Z,{children:[(0,P.jsx)(m.Z,{title:T("publish"),children:(0,P.jsx)(p.Z,{disabled:n.deleted_at,icon:(0,P.jsx)(d.Z,{}),onClick:function(){q(n.uuid),ee(!1),ae(!0),F(!0)}})}),(0,P.jsx)(p.Z,{disabled:n.deleted_at,type:"primary",icon:(0,P.jsx)(r.Z,{}),onClick:function(){return function(e){K((0,_.bL)({url:"blog/".concat(e.uuid),id:"blog_edit",name:T("edit.blog")})),J("/blog/".concat(e.uuid))}(n)}}),(0,P.jsx)(p.Z,{icon:(0,P.jsx)(s.Z,{}),onClick:function(){return function(e){K((0,_.bL)({url:"blog/clone/".concat(e.uuid),id:"blog_clone",name:T("clone.blog")})),J("/blog/clone/".concat(e.uuid))}(n)},disabled:n.deleted_at}),(0,P.jsx)(O.Z,{disabled:n.deleted_at,icon:(0,P.jsx)(u.Z,{}),onClick:function(){q([n.id]),ee(!0),ae(!1),F(!0)}})]})},is_show:!0}]),L=(0,o.Z)(D,2),$=L[0],B=L[1],F=(0,l.useContext)(w._).setIsModalVisible,U=(0,l.useState)(null),G=(0,o.Z)(U,2),W=G[0],q=G[1],Q=(0,l.useState)(!1),X=(0,o.Z)(Q,2),Y=X[0],ee=X[1],ne=(0,l.useState)(!1),te=(0,o.Z)(ne,2),ie=te[0],ae=te[1],ce=(0,l.useState)(!1),oe=(0,o.Z)(ce,2),le=oe[0],de=oe[1],re=(0,l.useState)("published"),se=(0,o.Z)(re,2),ue=se[0],fe=se[1],he=(0,j.v9)((function(e){return e.menu}),j.wU).activeMenu,ve=(null===(e=he.data)||void 0===e?void 0:e.role)||ue,Ze=(0,j.v9)((function(e){return e.blog}),j.wU),ge=Ze.blogs,me=Ze.meta,pe=Ze.loading,be=Ze.params,xe=he.data,ye={sort:null===xe||void 0===xe?void 0:xe.sort,column:null===xe||void 0===xe?void 0:xe.column,perPage:null===xe||void 0===xe?void 0:xe.perPage,page:null===xe||void 0===xe?void 0:xe.page,status:"deleted_at"===ve?void 0:ve,deleted_at:"deleted_at"===ve?ve:void 0};(0,l.useEffect)((function(){he.refetch&&(K((0,z.J)(ye)),K((0,_.A_)(he)))}),[he.refetch]),(0,I.Z)((function(){K((0,z.J)(ye))}),[he.data]);var Ce={selectedRowKeys:W,onChange:function(e){q(e)}};return(0,P.jsxs)(b.Z,{title:T("blogs"),extra:(0,P.jsxs)(g.Z,{wrap:!0,children:[(0,P.jsx)(p.Z,{type:"primary",icon:(0,P.jsx)(f.Z,{}),onClick:function(){K((0,_.bL)({id:"blogs",url:"blog/add",name:T("add.blog")})),J("/blog/add")},children:T("add.blog")}),(0,P.jsx)(O.Z,{size:"",onClick:function(){null===W||0===W.length?y.Am.warning(T("select.the.product")):F(!0)},children:T("delete.selected")}),(0,P.jsx)(E.Z,{setColumns:B,columns:$})]}),children:[(0,P.jsx)(h.Z,{className:"mt-3",activeKey:ve,onChange:function(e){!function(e){var n=he.data;K((0,_.nc)({activeMenu:he,data:(0,c.Z)((0,c.Z)({},n),e)}))}({role:e,page:1}),fe(e)},type:"card",children:A.map((function(e){return(0,P.jsx)(M,{tab:T(e)},e)}))}),(0,P.jsx)(x.Z,{scroll:{x:!0},rowSelection:Ce,columns:$.filter((function(e){return e.is_show})),dataSource:ge,pagination:{pageSize:be.perPage,page:(null===(n=he.data)||void 0===n?void 0:n.page)||1,total:me.total,defaultCurrent:null===(t=he.data)||void 0===t?void 0:t.page,current:null===(R=he.data)||void 0===R?void 0:R.page},rowKey:function(e){return e.id},onChange:function(e,n,t){var i=e.pageSize,a=e.current,o=t.field,l=t.order,d=(0,N.Z)(l);K((0,_.nc)({activeMenu:he,data:(0,c.Z)((0,c.Z)({},he.data),{},{perPage:i,page:a,column:o,sort:d})}))},loading:pe}),(0,P.jsx)(C.Z,{click:ie?function(){de(!0),S.Z.publish(W).then((function(){y.Am.success(T("successfully.updated")),K((0,z.J)()),F(!1)})).finally((function(){return de(!1)}))}:Y?function(){de(!0);var e=(0,c.Z)({},Object.assign.apply(Object,[{}].concat((0,a.Z)(W.map((function(e,n){return(0,i.Z)({},"ids[".concat(n,"]"),e)}))))));S.Z.delete(e).then((function(){y.Am.success(T("successfully.deleted")),K((0,z.J)()),F(!1)})).finally((function(){return de(!1)}))}:function(){de(!0),S.Z.setActive(W).then((function(){y.Am.success(T("successfully.updated")),K((0,z.J)()),F(!1)})).finally((function(){return de(!1)}))},text:T(ie?"publish.blog":Y?"delete.blog":"set.active.blog"),loading:le})]})}},55768:function(e,n,t){t.d(n,{Z:function(){return d}});var i=t(1413),a=t(47313),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"},o=t(17469),l=function(e,n){return a.createElement(o.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:c}))};l.displayName="PlusCircleOutlined";var d=a.forwardRef(l)},99587:function(e,n,t){t.d(n,{Z:function(){return d}});var i=t(1413),a=t(47313),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"},o=t(17469),l=function(e,n){return a.createElement(o.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:c}))};l.displayName="TableOutlined";var d=a.forwardRef(l)},86345:function(e,n,t){t.d(n,{Z:function(){return x}});var i=t(87462),a=t(4942),c=t(47313),o=t(29439),l=t(45987),d=t(46123),r=t.n(d),s=t(10288),u=t(49242),f=c.forwardRef((function(e,n){var t,i=e.prefixCls,d=void 0===i?"rc-switch":i,f=e.className,h=e.checked,v=e.defaultChecked,Z=e.disabled,g=e.loadingIcon,m=e.checkedChildren,p=e.unCheckedChildren,b=e.onClick,x=e.onChange,y=e.onKeyDown,C=(0,l.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),w=(0,s.Z)(!1,{value:h,defaultValue:v}),j=(0,o.Z)(w,2),k=j[0],_=j[1];function z(e,n){var t=k;return Z||(_(t=e),null===x||void 0===x||x(t,n)),t}var I=r()(d,f,(t={},(0,a.Z)(t,"".concat(d,"-checked"),k),(0,a.Z)(t,"".concat(d,"-disabled"),Z),t));return c.createElement("button",Object.assign({},C,{type:"button",role:"switch","aria-checked":k,disabled:Z,className:I,ref:n,onKeyDown:function(e){e.which===u.Z.LEFT?z(!1,e):e.which===u.Z.RIGHT&&z(!0,e),null===y||void 0===y||y(e)},onClick:function(e){var n=z(!k,e);null===b||void 0===b||b(n,e)}}),g,c.createElement("span",{className:"".concat(d,"-inner")},k?m:p))}));f.displayName="Switch";var h=f,v=t(82508),Z=t(46479),g=t(91964),m=t(21631),p=function(e,n){var t={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)n.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(t[i[a]]=e[i[a]])}return t},b=c.forwardRef((function(e,n){var t,o=e.prefixCls,l=e.size,d=e.loading,s=e.className,u=void 0===s?"":s,f=e.disabled,b=p(e,["prefixCls","size","loading","className","disabled"]),x=c.useContext(g.E_),y=x.getPrefixCls,C=x.direction,w=c.useContext(m.Z),j=y("switch",o),k=c.createElement("div",{className:"".concat(j,"-handle")},d&&c.createElement(v.Z,{className:"".concat(j,"-loading-icon")})),_=r()((t={},(0,a.Z)(t,"".concat(j,"-small"),"small"===(l||w)),(0,a.Z)(t,"".concat(j,"-loading"),d),(0,a.Z)(t,"".concat(j,"-rtl"),"rtl"===C),t),u);return c.createElement(Z.Z,{insertExtraNode:!0},c.createElement(h,(0,i.Z)({},b,{prefixCls:j,className:_,disabled:f||d,ref:n,loadingIcon:k})))}));b.__ANT_SWITCH=!0,b.displayName="Switch";var x=b}}]);