"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[3654],{55940:function(e,n,t){t.d(n,{Z:function(){return f}});var i=t(1413),c=t(45987),s=(t(47313),t(59491)),r=t(47515),l=t(34491),a=t(24511),o=t(79492),d=t(46417),u=["size","onClick","type"];function f(e){var n=e.size,t=void 0===n?"":n,f=e.onClick,h=e.type,m=void 0===h?"default":h,Z=(0,c.Z)(e,u),v=(0,a.$)().t,b=(0,o.Z)().isDemo;return(0,d.jsx)(s.Z,(0,i.Z)({size:t,icon:(0,d.jsx)(r.Z,{}),onClick:function(e){b?l.Am.warning(v("cannot.work.demo")):f(e)},type:m},Z))}},53233:function(e,n,t){var i=t(1413),c=t(29439),s=t(47313),r=t(56140),l=t(67251),a=t(45705),o=t(86345),d=t(78267),u=t(37388),f=t(59491),h=t(99587),m=t(24511),Z=t(46417),v=r.Z.Text;n.Z=function(e){var n=e.columns,t=void 0===n?[]:n,r=e.setColumns,b=e.style,x=e.size,p=void 0===x?"":x,g=e.iconOnly,y=(0,m.$)().t,C=(0,s.useState)(!1),j=(0,c.Z)(C,2),w=j[0],k=j[1],z=(0,Z.jsx)(l.Z,{children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,Z.jsx)(l.Z.Item,{children:(0,Z.jsxs)(a.Z,{className:"d-flex justify-content-between",children:[(0,Z.jsx)(v,{children:e.title}),(0,Z.jsx)(o.Z,{defaultChecked:!0,onClick:function(){return function(e){var n=null===t||void 0===t?void 0:t.map((function(n){return n.dataIndex===e.dataIndex&&(n.is_show=!(null!==n&&void 0!==n&&n.is_show)),n}));r(n)}(e)}})]})},e+n)}))});return(0,Z.jsx)(d.Z,{overlay:z,trigger:["click"],onVisibleChange:function(e){k(e)},visible:w,children:(0,Z.jsx)(u.Z,{title:y("change.columns"),children:(0,Z.jsx)(f.Z,{style:(0,i.Z)({},b),size:p,icon:(0,Z.jsx)(h.Z,{}),children:g?null:y("Columns")})})})}},48008:function(e,n,t){t(47313);var i=t(84695),c=t(87569),s=t(59491),r=t(24511),l=t(46417);n.Z=function(e){var n=e.open,t=e.handleCancel,a=e.text,o=e.click,d=e.loading,u=e.subTitle,f=(0,r.$)().t;return(0,l.jsxs)(i.Z,{closable:!1,visible:n,footer:null,centered:!0,children:[(0,l.jsx)(c.ZP,{status:"warning",title:a,subTitle:u}),(0,l.jsxs)("div",{className:"d-flex justify-content-end",children:[(0,l.jsx)(s.Z,{type:"primary",className:"mr-2",onClick:o,loading:d,children:f("yes")}),(0,l.jsx)(s.Z,{onClick:function(){return t()},children:f("no")})]})]})}},43654:function(e,n,t){t.r(n);var i=t(4942),c=t(93433),s=t(1413),r=t(29439),l=t(47313),a=t(66204),o=t(45705),d=t(59491),u=t(77181),f=t(78508),h=t(58467),m=t(12019),Z=t(47515),v=t(55768),b=t(69658),x=t(74580),p=t(2717),g=t(90954),y=t(34491),C=t(24511),j=t(55940),w=t(18929),k=t(71274),z=t(70816),_=t.n(z),N=t(53233),S=t(48008),I=t(46417);n.default=function(){var e=(0,C.$)().t,n=(0,p.I0)(),t=(0,h.s0)(),z=(0,l.useState)([{title:e("id"),dataIndex:"id",key:"id",is_show:!0},{title:e("send.to"),dataIndex:"send_to",key:"send_to",is_show:!0,render:function(e){return(0,I.jsx)("div",{children:_()(new Date).isBefore(e)?(0,I.jsx)(a.Z,{color:"blue",children:e}):(0,I.jsx)(a.Z,{color:"error",children:e})})}},{title:e("created.at"),dataIndex:"created_at",key:"created_at",is_show:!0},{title:e("options"),key:"options",dataIndex:"options",is_show:!0,render:function(i,c){return(0,I.jsxs)(o.Z,{children:[(0,I.jsx)(d.Z,{type:"primary",icon:(0,I.jsx)(m.Z,{}),onClick:function(){return function(i){n((0,g.bL)({url:"message/subscriber/".concat(i.id),id:"subciribed_edit",name:e("edit.subscriber")})),t("/message/subscriber/".concat(i.id))}(c)}}),(0,I.jsx)(j.Z,{icon:(0,I.jsx)(Z.Z,{}),onClick:function(){E(!0),F([c.id]),K(!1),J(!0)}})]})}}]),O=(0,r.Z)(z,2),V=O[0],H=O[1],E=(0,l.useContext)(x._).setIsModalVisible,T=(0,l.useState)(null),A=(0,r.Z)(T,2),P=A[0],F=A[1],M=(0,l.useState)(null),R=(0,r.Z)(M,2),D=R[0],K=R[1],$=(0,l.useState)(!1),B=(0,r.Z)($,2),L=B[0],U=B[1],G=(0,l.useState)(null),W=(0,r.Z)(G,2),q=W[0],J=W[1],Q=(0,l.useState)(null),X=(0,r.Z)(Q,2),Y=X[0],ee=X[1],ne=(0,p.v9)((function(e){return e.menu}),p.wU).activeMenu,te=(0,p.v9)((function(e){return e.messageSubscriber}),p.wU),ie=te.subscribers,ce=te.loading;(0,l.useEffect)((function(){ne.refetch&&(n((0,w.F)()),n((0,g.A_)(ne)))}),[ne.refetch]);var se={selectedRowKeys:P,onChange:function(e){F(e)}};return(0,I.jsxs)(u.Z,{title:e("message.subscriber"),extra:(0,I.jsxs)(o.Z,{children:[(0,I.jsx)(d.Z,{icon:(0,I.jsx)(v.Z,{}),type:"primary",onClick:function(){n((0,g.bL)({id:"message_subscriber_add",url:"message/subscriber/add",name:e("add.subciribed")})),t("/message/subscriber/add")},children:e("add.subscriber")}),(0,I.jsx)(j.Z,{size:"",onClick:function(){null===P||0===P.length?y.Am.warning(e("select.the.product")):(E(!0),J(!1))},children:e("delete.selected")}),(0,I.jsx)(N.Z,{columns:V,setColumns:H})]}),children:[(0,I.jsx)(f.Z,{scroll:{x:!0},rowSelection:se,columns:null===V||void 0===V?void 0:V.filter((function(e){return e.is_show})),dataSource:ie,rowKey:function(e){return e.id},loading:ce,onChange:function(e){var t=e.pageSize,i=e.current;n((0,w.F)({perPage:t,page:i}))}}),(0,I.jsx)(b.Z,{click:function(){U(!0);var t=(0,s.Z)({},Object.assign.apply(Object,[{}].concat((0,c.Z)(P.map((function(e,n){return(0,i.Z)({},"ids[".concat(n,"]"),e)}))))));k.Z.delete(t).then((function(){n((0,w.F)()),y.Am.success(e("successfully.deleted"))})).finally((function(){E(!1),U(!1),J(null)}))},text:e(D?"set.active.banner":q?"delete":"all.delete"),loading:L,setText:F}),Y&&(0,I.jsx)(S.Z,{open:Y,handleCancel:function(){return ee(null)},click:Y.restore?function(){U(!0),k.Z.restoreAll().then((function(){y.Am.success(e("successfully.restored")),n((0,w.F)()),ee(null)})).finally((function(){return U(!1)}))}:function(){U(!0),k.Z.dropAll().then((function(){y.Am.success(e("successfully.deleted")),n((0,w.F)()),ee(null)})).finally((function(){return U(!1)}))},text:Y.restore?e("restore.modal.text"):e("read.carefully"),subTitle:Y.restore?"":e("confirm.deletion"),loading:L,setText:F})]})}},55768:function(e,n,t){t.d(n,{Z:function(){return a}});var i=t(1413),c=t(47313),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"},r=t(17469),l=function(e,n){return c.createElement(r.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:s}))};l.displayName="PlusCircleOutlined";var a=c.forwardRef(l)},99587:function(e,n,t){t.d(n,{Z:function(){return a}});var i=t(1413),c=t(47313),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"},r=t(17469),l=function(e,n){return c.createElement(r.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:s}))};l.displayName="TableOutlined";var a=c.forwardRef(l)},86345:function(e,n,t){t.d(n,{Z:function(){return g}});var i=t(87462),c=t(4942),s=t(47313),r=t(29439),l=t(45987),a=t(46123),o=t.n(a),d=t(10288),u=t(49242),f=s.forwardRef((function(e,n){var t,i=e.prefixCls,a=void 0===i?"rc-switch":i,f=e.className,h=e.checked,m=e.defaultChecked,Z=e.disabled,v=e.loadingIcon,b=e.checkedChildren,x=e.unCheckedChildren,p=e.onClick,g=e.onChange,y=e.onKeyDown,C=(0,l.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),j=(0,d.Z)(!1,{value:h,defaultValue:m}),w=(0,r.Z)(j,2),k=w[0],z=w[1];function _(e,n){var t=k;return Z||(z(t=e),null===g||void 0===g||g(t,n)),t}var N=o()(a,f,(t={},(0,c.Z)(t,"".concat(a,"-checked"),k),(0,c.Z)(t,"".concat(a,"-disabled"),Z),t));return s.createElement("button",Object.assign({},C,{type:"button",role:"switch","aria-checked":k,disabled:Z,className:N,ref:n,onKeyDown:function(e){e.which===u.Z.LEFT?_(!1,e):e.which===u.Z.RIGHT&&_(!0,e),null===y||void 0===y||y(e)},onClick:function(e){var n=_(!k,e);null===p||void 0===p||p(n,e)}}),v,s.createElement("span",{className:"".concat(a,"-inner")},k?b:x))}));f.displayName="Switch";var h=f,m=t(82508),Z=t(46479),v=t(91964),b=t(21631),x=function(e,n){var t={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(i=Object.getOwnPropertySymbols(e);c<i.length;c++)n.indexOf(i[c])<0&&Object.prototype.propertyIsEnumerable.call(e,i[c])&&(t[i[c]]=e[i[c]])}return t},p=s.forwardRef((function(e,n){var t,r=e.prefixCls,l=e.size,a=e.loading,d=e.className,u=void 0===d?"":d,f=e.disabled,p=x(e,["prefixCls","size","loading","className","disabled"]),g=s.useContext(v.E_),y=g.getPrefixCls,C=g.direction,j=s.useContext(b.Z),w=y("switch",r),k=s.createElement("div",{className:"".concat(w,"-handle")},a&&s.createElement(m.Z,{className:"".concat(w,"-loading-icon")})),z=o()((t={},(0,c.Z)(t,"".concat(w,"-small"),"small"===(l||j)),(0,c.Z)(t,"".concat(w,"-loading"),a),(0,c.Z)(t,"".concat(w,"-rtl"),"rtl"===C),t),u);return s.createElement(Z.Z,{insertExtraNode:!0},s.createElement(h,(0,i.Z)({},p,{prefixCls:w,className:z,disabled:f||a,ref:n,loadingIcon:k})))}));p.__ANT_SWITCH=!0,p.displayName="Switch";var g=p}}]);