"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[6161],{48567:function(e,n,t){var l=t(1413),a=t(29439),i=t(18197),r=t(75649),o=t(68197),c=t(59624),s=t(59491),u=t(74294),d=(t(47313),t(24511)),h=t(2717),f=t(46417);n.Z=function(e){var n,t=e.handleClose,v=e.openDrower,Z=e.setMenuData,m=(0,d.$)().t,p=(0,h.v9)((function(e){return e.theme.theme}),h.wU).direction,x=(0,h.v9)((function(e){return e.formLang}),h.wU).languages,g=i.Z.useForm(),j=(0,a.Z)(g,1)[0],C=(0,h.I0)(),b=(0,h.v9)((function(e){return e.menu}),h.wU).activeMenu;return(0,f.jsx)(r.Z,{title:m("filter"),placement:"rtl"===p?"left":"right",closable:!0,onClose:t,visible:v,footer:(0,f.jsxs)(o.Z,{gutter:12,children:[(0,f.jsx)(c.Z,{span:12,children:(0,f.jsx)(s.Z,{className:"w-100",type:"primary",onClick:function(){return j.submit()},children:m("result")})}),(0,f.jsx)(c.Z,{span:12,children:(0,f.jsx)(s.Z,{className:"w-100",onClick:function(){return function(){var e=b.data;C(Z({activeMenu:b,data:(0,l.Z)((0,l.Z)({},e),{},{filter:void 0})})),t()}()},children:m("clear")})})]}),children:(0,f.jsxs)(i.Z,{form:j,name:"basic",layout:"vertical",onFinish:function(e){var n=b.data;C(Z({activeMenu:b,data:(0,l.Z)((0,l.Z)({},n),{},{filter:e})})),t()},initialValues:(0,l.Z)({},null===(n=b.data)||void 0===n?void 0:n.filter),children:[(0,f.jsx)(i.Z.Item,{label:m("language"),rules:[{required:!0,message:m("requared")}],name:"equal",children:(0,f.jsxs)(u.Z,{children:[(0,f.jsx)(u.Z.Option,{value:"equal",children:m("equal")}),(0,f.jsx)(u.Z.Option,{value:"not_equal",children:m("not.equal")})]})}),(0,f.jsx)(i.Z.Item,{label:m("locale"),rules:[{required:!0,message:m("requared")}],name:"lang",children:(0,f.jsx)(u.Z,{children:x.map((function(e,n){return(0,f.jsx)(u.Z.Option,{value:e.locale,children:e.title},e.locale+n)}))})})]})},"left")}},55940:function(e,n,t){t.d(n,{Z:function(){return h}});var l=t(1413),a=t(45987),i=(t(47313),t(59491)),r=t(47515),o=t(34491),c=t(24511),s=t(79492),u=t(46417),d=["size","onClick","type"];function h(e){var n=e.size,t=void 0===n?"":n,h=e.onClick,f=e.type,v=void 0===f?"default":f,Z=(0,a.Z)(e,d),m=(0,c.$)().t,p=(0,s.Z)().isDemo;return(0,u.jsx)(i.Z,(0,l.Z)({size:t,icon:(0,u.jsx)(r.Z,{}),onClick:function(e){p?o.Am.warning(m("cannot.work.demo")):h(e)},type:v},Z))}},53233:function(e,n,t){var l=t(1413),a=t(29439),i=t(47313),r=t(56140),o=t(67251),c=t(45705),s=t(86345),u=t(78267),d=t(37388),h=t(59491),f=t(99587),v=t(24511),Z=t(46417),m=r.Z.Text;n.Z=function(e){var n=e.columns,t=void 0===n?[]:n,r=e.setColumns,p=e.style,x=e.size,g=void 0===x?"":x,j=e.iconOnly,C=(0,v.$)().t,b=(0,i.useState)(!1),w=(0,a.Z)(b,2),y=w[0],k=w[1],_=(0,Z.jsx)(o.Z,{children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,Z.jsx)(o.Z.Item,{children:(0,Z.jsxs)(c.Z,{className:"d-flex justify-content-between",children:[(0,Z.jsx)(m,{children:e.title}),(0,Z.jsx)(s.Z,{defaultChecked:!0,onClick:function(){return function(e){var n=null===t||void 0===t?void 0:t.map((function(n){return n.dataIndex===e.dataIndex&&(n.is_show=!(null!==n&&void 0!==n&&n.is_show)),n}));r(n)}(e)}})]})},e+n)}))});return(0,Z.jsx)(u.Z,{overlay:_,trigger:["click"],onVisibleChange:function(e){k(e)},visible:y,children:(0,Z.jsx)(d.Z,{title:C("change.columns"),children:(0,Z.jsx)(h.Z,{style:(0,l.Z)({},p),size:g,icon:(0,Z.jsx)(f.Z,{}),children:j?null:C("Columns")})})})}},48008:function(e,n,t){t(47313);var l=t(84695),a=t(87569),i=t(59491),r=t(24511),o=t(46417);n.Z=function(e){var n=e.open,t=e.handleCancel,c=e.text,s=e.click,u=e.loading,d=e.subTitle,h=(0,r.$)().t;return(0,o.jsxs)(l.Z,{closable:!1,visible:n,footer:null,centered:!0,children:[(0,o.jsx)(a.ZP,{status:"warning",title:c,subTitle:d}),(0,o.jsxs)("div",{className:"d-flex justify-content-end",children:[(0,o.jsx)(i.Z,{type:"primary",className:"mr-2",onClick:s,loading:u,children:h("yes")}),(0,o.jsx)(i.Z,{onClick:function(){return t()},children:h("no")})]})]})}},41481:function(e,n,t){t.d(n,{Z:function(){return h}});var l=t(1413),a=t(29439),i=t(45987),r=t(47313),o=t(66672),c=t(16031),s=t(40765),u=t(46417),d=["handleChange","defaultValue","resetSearch"];function h(e){var n=e.handleChange,t=e.defaultValue,h=e.resetSearch,f=(0,i.Z)(e,d),v=(0,r.useState)(t),Z=(0,a.Z)(v,2),m=Z[0],p=Z[1],x=(0,r.useMemo)((function(){return(0,c.debounce)((function(e){n(e)}),800)}),[]);return(0,r.useEffect)((function(){p(t)}),[h]),(0,u.jsx)(o.Z,(0,l.Z)({value:m,onChange:function(e){p(e.target.value),x(e.target.value)},prefix:(0,u.jsx)(s.Z,{})},f))}},13945:function(e,n,t){function l(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}t.d(n,{Z:function(){return l}})},80314:function(e,n,t){var l=t(47313);n.Z=function(e,n){var t=(0,l.useRef)(!1);(0,l.useEffect)((function(){if(t.current)return e&&e();t.current=!0}),n)}},56161:function(e,n,t){t.r(n),t.d(n,{default:function(){return W}});var l=t(4942),a=t(93433),i=t(1413),r=t(29439),o=t(47313),c=t(12019),s=t(66407),u=t(47515),d=t(55768),h=t(73591),f=t(45705),v=t(66204),Z=t(78891),m=t(59491),p=t(77181),x=t(78508),g=t(58467),j=t(34491),C=t(74580),b=t(69658),w=t(2717),y=t(90954),k=t(49067),_=t(44528),N=t(24511),I=t(18197),z=t(84695),S=t(68197),O=t(59624),V=t(74294),q=t(46417),E=["new","approved","rejected"];function M(e){var n=e.data,t=e.handleCancel,l=e.paramsData,a=(0,N.$)().t,c=(0,w.v9)((function(e){return e.menu}),w.wU).activeMenu,s=I.Z.useForm(),u=(0,r.Z)(s,1)[0],d=(0,w.I0)(),h=(0,o.useState)(!1),f=(0,r.Z)(h,2),v=f[0],Z=f[1];return(0,q.jsx)(z.Z,{visible:!!n,title:a(n.name),onCancel:t,footer:[(0,q.jsx)(m.Z,{type:"primary",onClick:function(){return u.submit()},loading:v,children:a("save")}),(0,q.jsx)(m.Z,{type:"default",onClick:t,children:a("cancel")})],children:(0,q.jsx)(I.Z,{form:u,layout:"vertical",onFinish:function(e){Z(!0);var a=(0,i.Z)({},e);k.Z.statusChange(n.uuid,a).then((function(){t(),d((0,_.N)(l)),d((0,y.A_)(c))})).finally((function(){return Z(!1)}))},initialValues:{status:n.status},children:(0,q.jsx)(S.Z,{gutter:12,children:(0,q.jsx)(O.Z,{span:24,children:(0,q.jsx)(I.Z.Item,{label:a("status"),name:"status",rules:[{required:!0,message:a("required")}],children:(0,q.jsx)(V.Z,{children:E.map((function(e,n){return(0,q.jsx)(V.Z.Option,{value:e,children:a(e)},e+n)}))})})})})})})}var H=t(55940),T=t(41481),P=t(80314),A=t(48567),D=t(6957),R=t(5958),U=t(53233),$=t(26672),K=t(48008),F=t(13945),L=h.Z.TabPane,B=["blue","red","gold","volcano","cyan","lime"],G=["all","new","approved","rejected","deleted_at"],W=function(){var e,n,t,I,z,S,O,V,E,W,J=(0,N.$)().t,Q=(0,w.I0)(),X=(0,g.s0)(),Y=(0,o.useState)(null),ee=(0,r.Z)(Y,2),ne=ee[0],te=ee[1],le=(0,w.v9)((function(e){return e.auth}),w.wU).user,ae=(0,o.useState)(!1),ie=(0,r.Z)(ae,2),re=ie[0],oe=ie[1],ce=(0,o.useState)(null),se=(0,r.Z)(ce,2),ue=se[0],de=se[1],he=(0,o.useState)(null),fe=(0,r.Z)(he,2),ve=fe[0],Ze=fe[1],me=(0,o.useState)("all"),pe=(0,r.Z)(me,2),xe=pe[0],ge=pe[1],je=(0,w.v9)((function(e){return e.menu}),w.wU).activeMenu,Ce=(null===(e=je.data)||void 0===e?void 0:e.role)||xe,be=(0,o.useContext)(C._).setIsModalVisible,we=(0,o.useState)(null),ye=(0,r.Z)(we,2),ke=ye[0],_e=ye[1],Ne=(0,o.useState)(!1),Ie=(0,r.Z)(Ne,2),ze=Ie[0],Se=Ie[1],Oe=(0,w.v9)((function(e){return e.shop}),w.wU),Ve=Oe.shops,qe=Oe.meta,Ee=Oe.loading,Me=Oe.params,He=(0,o.useState)([{title:J("id"),dataIndex:"id",is_show:!0,sorter:!0,key:"id"},{title:J("title"),dataIndex:"name",is_show:!0,key:"title"},{title:J("translations"),dataIndex:"locales",is_show:!0,key:"locales",render:function(e,n){var t;return(0,q.jsx)(f.Z,{children:null===(t=n.locales)||void 0===t?void 0:t.map((function(e,n){return(0,q.jsx)(v.Z,{className:"text-uppercase",color:[B[n]],children:e})}))})}},{title:J("logo"),dataIndex:"logo_img",is_show:!0,key:"logo",render:function(e){return(0,q.jsx)(Z.Z,{alt:"images",className:"img rounded",src:e||"https://via.placeholder.com/150",effect:"blur",width:50,height:50,preview:!0,placeholder:!0})}},{title:J("background"),dataIndex:"back",is_show:!0,render:function(e,n){return(0,q.jsx)(Z.Z,{alt:"images background",className:"img rounded",src:n.deleted_at?"https://via.placeholder.com/150":e||"https://via.placeholder.com/150",effect:"blur",width:50,height:50,preview:!0,placeholder:!0})}},{title:J("seller"),dataIndex:"seller",is_show:!0,key:"seller"},{title:J("open.time"),dataIndex:"open",is_show:!0,key:"open.time",render:function(e,n){return n.open?(0,q.jsxs)(v.Z,{color:"blue",children:[" ",J("open")," "]}):(0,q.jsxs)(v.Z,{color:"red",children:[" ",J("closed")," "]})}},{title:J("tax"),is_show:!0,dataIndex:"tax",key:"tax",render:function(e){return"".concat(e," %")}},{title:J("status"),dataIndex:"status",key:"status",is_show:!0,render:function(e,n){return(0,q.jsxs)("div",{children:["new"===e?(0,q.jsx)(v.Z,{color:"blue",children:J(e)}):"rejected"===e?(0,q.jsx)(v.Z,{color:"error",children:J(e)}):(0,q.jsx)(v.Z,{color:"cyan",children:J(e)}),!n.deleted_at&&(0,q.jsx)(c.Z,{onClick:function(){return te(n)}})]})}},{title:J("options"),dataIndex:"options",key:"options",is_show:!0,render:function(e,n){return(0,q.jsxs)(f.Z,{children:[(0,q.jsx)(m.Z,{type:"primary",icon:(0,q.jsx)(c.Z,{}),disabled:null===n||void 0===n?void 0:n.deleted_at,onClick:function(){return function(e){Q((0,y.bL)({id:"edit-shop",url:"shop/".concat(e.uuid),name:J("edit.shop")})),X("/shop/".concat(e.uuid),{state:"edit"})}(n)}}),(0,q.jsx)(m.Z,{icon:(0,q.jsx)(s.Z,{}),onClick:function(){return function(e){Q((0,y.bL)({id:"shop-clone",url:"shop-clone/".concat(e.uuid),name:J("shop.clone")})),X("/shop-clone/".concat(e.uuid),{state:"clone"})}(n)},disabled:n.deleted_at}),"manager"!==(null===le||void 0===le?void 0:le.role)?(0,q.jsx)(H.Z,{disabled:n.deleted_at,icon:(0,q.jsx)(u.Z,{}),onClick:function(){_e([n.id]),be(!0),de(!0)}}):""]})}}]),Te=(0,r.Z)(He,2),Pe=Te[0],Ae=Te[1],De=null===je||void 0===je?void 0:je.data,Re={search:null===De||void 0===De?void 0:De.search,lang:"equal"===(null===De||void 0===De||null===(n=De.filter)||void 0===n?void 0:n.equal)?null===De||void 0===De||null===(t=De.filter)||void 0===t?void 0:t.lang:D.Z.language,not_lang:"not_equal"===(null===De||void 0===De||null===(I=De.filter)||void 0===I?void 0:I.equal)?null===De||void 0===De||null===(z=De.filter)||void 0===z?void 0:z.lang:null,status:"deleted_at"===Ce||"all"===Ce?void 0:Ce,deleted_at:"deleted_at"===Ce?Ce:void 0,page:null===De||void 0===De?void 0:De.page,perPage:null===De||void 0===De?void 0:De.perPage,sort:null===De||void 0===De?void 0:De.sort,column:null===De||void 0===De?void 0:De.column};(0,o.useEffect)((function(){je.refetch&&(Q((0,_.N)(Re)),Q((0,y.A_)(je)))}),[je.refetch]),(0,P.Z)((function(){Q((0,_.N)(Re))}),[De]);var Ue=function(e){var n=je.data;Q((0,y.nc)({activeMenu:je,data:(0,i.Z)((0,i.Z)({},n),e)}))},$e={selectedRowKeys:ke,onChange:function(e){_e(e)}};return(0,q.jsxs)(p.Z,{title:J("shops"),extra:(0,q.jsxs)(f.Z,{wrap:!0,children:[(0,q.jsx)(m.Z,{icon:(0,q.jsx)(d.Z,{}),type:"primary",onClick:function(){Q((0,y.bL)({id:"add-shop",url:"shop/add",name:J("add.shop")})),X("/shop/add")},children:J("add.shop")}),"deleted_at"!==Ce?(0,q.jsxs)(f.Z,{wrap:!0,children:[(0,q.jsx)(H.Z,{size:"",onClick:function(){null===ke||0===ke.length?j.Am.warning(J("select.the.product")):(be(!0),de(!1))},children:J("delete.selected")}),(0,q.jsx)(H.Z,{size:"",onClick:function(){return Ze({delete:!0})},children:J("delete.all")})]}):(0,q.jsx)(H.Z,{icon:(0,q.jsx)($.uOc,{className:"mr-2"}),onClick:function(){return Ze({restore:!0})},children:J("restore.all")}),(0,q.jsx)(m.Z,{className:"settings-button",onClick:function(){return oe(!0)},children:(0,q.jsx)(R.Ol$,{className:"icon"})}),(0,q.jsx)(U.Z,{columns:Pe,setColumns:Ae})]}),children:[(0,q.jsx)("div",{className:"d-flex justify-content-between",children:(0,q.jsx)(T.Z,{placeholder:J("search"),handleChange:function(e){return Ue({search:e})},defaultValue:null===(S=je.data)||void 0===S?void 0:S.search,resetSearch:!(null!==(O=je.data)&&void 0!==O&&O.search),className:"w-25"})}),(0,q.jsx)(h.Z,{className:"mt-3",activeKey:Ce,onChange:function(e){Ue({role:e,page:1}),ge(e)},type:"card",children:G.map((function(e){return(0,q.jsx)(L,{tab:J(e)},e)}))}),(0,q.jsx)(x.Z,{scroll:{x:!0},rowSelection:$e,columns:null===Pe||void 0===Pe?void 0:Pe.filter((function(e){return e.is_show})),dataSource:Ve,loading:Ee,pagination:{pageSize:Me.perPage,page:(null===(V=je.data)||void 0===V?void 0:V.page)||1,total:qe.total,defaultCurrent:null===(E=je.data)||void 0===E?void 0:E.page,current:null===(W=je.data)||void 0===W?void 0:W.page},rowKey:function(e){return e.id},onChange:function(e,n,t){var l=e.pageSize,a=e.current,r=t.field,o=t.order,c=(0,F.Z)(o);Q((0,y.nc)({activeMenu:je,data:(0,i.Z)((0,i.Z)({},je.data),{},{perPage:l,page:a,column:r,sort:c})}))}}),ne&&(0,q.jsx)(M,{data:ne,handleCancel:function(){return te(null)},paramsData:Re}),(0,q.jsx)(b.Z,{click:function(){Se(!0);var e=(0,i.Z)({},Object.assign.apply(Object,[{}].concat((0,a.Z)(ke.map((function(e,n){return(0,l.Z)({},"ids[".concat(n,"]"),e)}))))));k.Z.delete(e).then((function(){j.Am.success(J("successfully.deleted")),be(!1),Q((0,_.N)(Re)),de(null)})).finally((function(){return Se(!1)}))},text:J(ue?"delete":"all.delete"),loading:ze,setText:_e}),re&&(0,q.jsx)(A.Z,{handleClose:function(){return oe(!1)},openDrower:re,setMenuData:y.nc}),ve&&(0,q.jsx)(K.Z,{open:ve,handleCancel:function(){return Ze(null)},click:ve.restore?function(){Se(!0),k.Z.restoreAll().then((function(){j.Am.success(J("successfully.restored")),Q((0,_.N)(Re)),Ze(null)})).finally((function(){return Se(!1)}))}:function(){Se(!0),k.Z.dropAll().then((function(){j.Am.success(J("successfully.deleted")),Q((0,_.N)()),Ze(null)})).finally((function(){return Se(!1)}))},text:ve.restore?J("restore.modal.text"):J("read.carefully"),subTitle:ve.restore?"":J("confirm.deletion"),loading:ze,setText:_e})]})}},55768:function(e,n,t){t.d(n,{Z:function(){return c}});var l=t(1413),a=t(47313),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"},r=t(17469),o=function(e,n){return a.createElement(r.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:n,icon:i}))};o.displayName="PlusCircleOutlined";var c=a.forwardRef(o)},99587:function(e,n,t){t.d(n,{Z:function(){return c}});var l=t(1413),a=t(47313),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"},r=t(17469),o=function(e,n){return a.createElement(r.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:n,icon:i}))};o.displayName="TableOutlined";var c=a.forwardRef(o)},86345:function(e,n,t){t.d(n,{Z:function(){return j}});var l=t(87462),a=t(4942),i=t(47313),r=t(29439),o=t(45987),c=t(46123),s=t.n(c),u=t(10288),d=t(49242),h=i.forwardRef((function(e,n){var t,l=e.prefixCls,c=void 0===l?"rc-switch":l,h=e.className,f=e.checked,v=e.defaultChecked,Z=e.disabled,m=e.loadingIcon,p=e.checkedChildren,x=e.unCheckedChildren,g=e.onClick,j=e.onChange,C=e.onKeyDown,b=(0,o.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),w=(0,u.Z)(!1,{value:f,defaultValue:v}),y=(0,r.Z)(w,2),k=y[0],_=y[1];function N(e,n){var t=k;return Z||(_(t=e),null===j||void 0===j||j(t,n)),t}var I=s()(c,h,(t={},(0,a.Z)(t,"".concat(c,"-checked"),k),(0,a.Z)(t,"".concat(c,"-disabled"),Z),t));return i.createElement("button",Object.assign({},b,{type:"button",role:"switch","aria-checked":k,disabled:Z,className:I,ref:n,onKeyDown:function(e){e.which===d.Z.LEFT?N(!1,e):e.which===d.Z.RIGHT&&N(!0,e),null===C||void 0===C||C(e)},onClick:function(e){var n=N(!k,e);null===g||void 0===g||g(n,e)}}),m,i.createElement("span",{className:"".concat(c,"-inner")},k?p:x))}));h.displayName="Switch";var f=h,v=t(82508),Z=t(46479),m=t(91964),p=t(21631),x=function(e,n){var t={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&n.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(l=Object.getOwnPropertySymbols(e);a<l.length;a++)n.indexOf(l[a])<0&&Object.prototype.propertyIsEnumerable.call(e,l[a])&&(t[l[a]]=e[l[a]])}return t},g=i.forwardRef((function(e,n){var t,r=e.prefixCls,o=e.size,c=e.loading,u=e.className,d=void 0===u?"":u,h=e.disabled,g=x(e,["prefixCls","size","loading","className","disabled"]),j=i.useContext(m.E_),C=j.getPrefixCls,b=j.direction,w=i.useContext(p.Z),y=C("switch",r),k=i.createElement("div",{className:"".concat(y,"-handle")},c&&i.createElement(v.Z,{className:"".concat(y,"-loading-icon")})),_=s()((t={},(0,a.Z)(t,"".concat(y,"-small"),"small"===(o||w)),(0,a.Z)(t,"".concat(y,"-loading"),c),(0,a.Z)(t,"".concat(y,"-rtl"),"rtl"===b),t),d);return i.createElement(Z.Z,{insertExtraNode:!0},i.createElement(f,(0,l.Z)({},g,{prefixCls:y,className:_,disabled:h||c,ref:n,loadingIcon:k})))}));g.__ANT_SWITCH=!0,g.displayName="Switch";var j=g}}]);