"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[8674],{48567:function(e,n,t){var a=t(1413),l=t(29439),r=t(18197),i=t(75649),c=t(68197),o=t(59624),s=t(59491),u=t(74294),d=(t(47313),t(24511)),f=t(2717),h=t(46417);n.Z=function(e){var n,t=e.handleClose,v=e.openDrower,Z=e.setMenuData,m=(0,d.$)().t,x=(0,f.v9)((function(e){return e.theme.theme}),f.wU).direction,p=(0,f.v9)((function(e){return e.formLang}),f.wU).languages,g=r.Z.useForm(),j=(0,l.Z)(g,1)[0],b=(0,f.I0)(),C=(0,f.v9)((function(e){return e.menu}),f.wU).activeMenu;return(0,h.jsx)(i.Z,{title:m("filter"),placement:"rtl"===x?"left":"right",closable:!0,onClose:t,visible:v,footer:(0,h.jsxs)(c.Z,{gutter:12,children:[(0,h.jsx)(o.Z,{span:12,children:(0,h.jsx)(s.Z,{className:"w-100",type:"primary",onClick:function(){return j.submit()},children:m("result")})}),(0,h.jsx)(o.Z,{span:12,children:(0,h.jsx)(s.Z,{className:"w-100",onClick:function(){return function(){var e=C.data;b(Z({activeMenu:C,data:(0,a.Z)((0,a.Z)({},e),{},{filter:void 0})})),t()}()},children:m("clear")})})]}),children:(0,h.jsxs)(r.Z,{form:j,name:"basic",layout:"vertical",onFinish:function(e){var n=C.data;b(Z({activeMenu:C,data:(0,a.Z)((0,a.Z)({},n),{},{filter:e})})),t()},initialValues:(0,a.Z)({},null===(n=C.data)||void 0===n?void 0:n.filter),children:[(0,h.jsx)(r.Z.Item,{label:m("language"),rules:[{required:!0,message:m("requared")}],name:"equal",children:(0,h.jsxs)(u.Z,{children:[(0,h.jsx)(u.Z.Option,{value:"equal",children:m("equal")}),(0,h.jsx)(u.Z.Option,{value:"not_equal",children:m("not.equal")})]})}),(0,h.jsx)(r.Z.Item,{label:m("locale"),rules:[{required:!0,message:m("requared")}],name:"lang",children:(0,h.jsx)(u.Z,{children:p.map((function(e,n){return(0,h.jsx)(u.Z.Option,{value:e.locale,children:e.title},e.locale+n)}))})})]})},"left")}},55940:function(e,n,t){t.d(n,{Z:function(){return f}});var a=t(1413),l=t(45987),r=(t(47313),t(59491)),i=t(47515),c=t(34491),o=t(24511),s=t(79492),u=t(46417),d=["size","onClick","type"];function f(e){var n=e.size,t=void 0===n?"":n,f=e.onClick,h=e.type,v=void 0===h?"default":h,Z=(0,l.Z)(e,d),m=(0,o.$)().t,x=(0,s.Z)().isDemo;return(0,u.jsx)(r.Z,(0,a.Z)({size:t,icon:(0,u.jsx)(i.Z,{}),onClick:function(e){x?c.Am.warning(m("cannot.work.demo")):f(e)},type:v},Z))}},53233:function(e,n,t){var a=t(1413),l=t(29439),r=t(47313),i=t(56140),c=t(67251),o=t(45705),s=t(86345),u=t(78267),d=t(37388),f=t(59491),h=t(99587),v=t(24511),Z=t(46417),m=i.Z.Text;n.Z=function(e){var n=e.columns,t=void 0===n?[]:n,i=e.setColumns,x=e.style,p=e.size,g=void 0===p?"":p,j=e.iconOnly,b=(0,v.$)().t,C=(0,r.useState)(!1),w=(0,l.Z)(C,2),y=w[0],k=w[1],_=(0,Z.jsx)(c.Z,{children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,Z.jsx)(c.Z.Item,{children:(0,Z.jsxs)(o.Z,{className:"d-flex justify-content-between",children:[(0,Z.jsx)(m,{children:e.title}),(0,Z.jsx)(s.Z,{defaultChecked:!0,onClick:function(){return function(e){var n=null===t||void 0===t?void 0:t.map((function(n){return n.dataIndex===e.dataIndex&&(n.is_show=!(null!==n&&void 0!==n&&n.is_show)),n}));i(n)}(e)}})]})},e+n)}))});return(0,Z.jsx)(u.Z,{overlay:_,trigger:["click"],onVisibleChange:function(e){k(e)},visible:y,children:(0,Z.jsx)(d.Z,{title:b("change.columns"),children:(0,Z.jsx)(f.Z,{style:(0,a.Z)({},x),size:g,icon:(0,Z.jsx)(h.Z,{}),children:j?null:b("Columns")})})})}},48008:function(e,n,t){t(47313);var a=t(84695),l=t(87569),r=t(59491),i=t(24511),c=t(46417);n.Z=function(e){var n=e.open,t=e.handleCancel,o=e.text,s=e.click,u=e.loading,d=e.subTitle,f=(0,i.$)().t;return(0,c.jsxs)(a.Z,{closable:!1,visible:n,footer:null,centered:!0,children:[(0,c.jsx)(l.ZP,{status:"warning",title:o,subTitle:d}),(0,c.jsxs)("div",{className:"d-flex justify-content-end",children:[(0,c.jsx)(r.Z,{type:"primary",className:"mr-2",onClick:s,loading:u,children:f("yes")}),(0,c.jsx)(r.Z,{onClick:function(){return t()},children:f("no")})]})]})}},41481:function(e,n,t){t.d(n,{Z:function(){return f}});var a=t(1413),l=t(29439),r=t(45987),i=t(47313),c=t(66672),o=t(16031),s=t(40765),u=t(46417),d=["handleChange","defaultValue","resetSearch"];function f(e){var n=e.handleChange,t=e.defaultValue,f=e.resetSearch,h=(0,r.Z)(e,d),v=(0,i.useState)(t),Z=(0,l.Z)(v,2),m=Z[0],x=Z[1],p=(0,i.useMemo)((function(){return(0,o.debounce)((function(e){n(e)}),800)}),[]);return(0,i.useEffect)((function(){x(t)}),[f]),(0,u.jsx)(c.Z,(0,a.Z)({value:m,onChange:function(e){x(e.target.value),p(e.target.value)},prefix:(0,u.jsx)(s.Z,{})},h))}},13945:function(e,n,t){function a(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}t.d(n,{Z:function(){return a}})},80314:function(e,n,t){var a=t(47313);n.Z=function(e,n){var t=(0,a.useRef)(!1);(0,a.useEffect)((function(){if(t.current)return e&&e();t.current=!0}),n)}},18674:function(e,n,t){t.r(n),t.d(n,{default:function(){return Q}});var a=t(4942),l=t(93433),r=t(1413),i=t(29439),c=t(47313),o=t(12019),s=t(66407),u=t(47515),d=t(55768),f=t(73591),h=t(45705),v=t(66204),Z=t(78891),m=t(59491),x=t(77181),p=t(78508),g=t(58467),j=t(34491),b=t(97421),C=t(74580),w=t(69658),y=t(2717),k=t(90954),_=t(53149),N=t(80636),I=t(24511),S=t(18197),z=t(84695),O=t(68197),V=t(59624),q=t(74294),E=t(79492),M=t(46417),H=["new","approved","rejected"];function T(e){var n=e.data,t=e.handleCancel,a=e.paramsData,l=(0,I.$)().t,o=(0,y.v9)((function(e){return e.menu}),y.wU).activeMenu,s=S.Z.useForm(),u=(0,i.Z)(s,1)[0],d=(0,y.I0)(),f=(0,c.useState)(!1),h=(0,i.Z)(f,2),v=h[0],Z=h[1],x=(0,E.Z)(),p=x.isDemo,g=x.demoShop;return(0,M.jsx)(z.Z,{visible:!!n,title:l(n.name),onCancel:t,footer:[(0,M.jsx)(m.Z,{type:"primary",onClick:function(){return u.submit()},loading:v,disabled:p&&n.id==g,children:l("save")}),(0,M.jsx)(m.Z,{type:"default",onClick:t,children:l("cancel")})],children:(0,M.jsx)(S.Z,{form:u,layout:"vertical",onFinish:function(e){Z(!0);var l=(0,r.Z)({},e);_.Z.statusChange(n.uuid,l).then((function(){t(),d((0,N.L)(a)),d((0,k.xo)(o))})).finally((function(){return Z(!1)}))},initialValues:{status:n.status},children:(0,M.jsx)(O.Z,{gutter:12,children:(0,M.jsx)(V.Z,{span:24,children:(0,M.jsx)(S.Z.Item,{label:l("status"),name:"status",rules:[{required:!0,message:l("required")}],children:(0,M.jsx)(q.Z,{children:H.map((function(e,n){return(0,M.jsx)(q.Z.Option,{value:e,children:l(e)},e+n)}))})})})})})})}var D=t(55940),L=t(48567),P=t(41481),A=t(80314),R=t(6957),U=t(5958),$=t(53233),K=t(48008),F=t(13945),B=t(26672),G=f.Z.TabPane,W=["blue","red","gold","volcano","cyan","lime"],J=["all","new","approved","rejected","deleted_at"],Q=function(){var e,n,t,S,z,O,V,q,E,H,Q=(0,I.$)().t,X=(0,y.I0)(),Y=(0,g.s0)(),ee=(0,c.useState)(null),ne=(0,i.Z)(ee,2),te=ne[0],ae=ne[1],le=(0,y.v9)((function(e){return e.auth}),y.wU).user,re=(0,c.useState)(!1),ie=(0,i.Z)(re,2),ce=ie[0],oe=ie[1],se=(0,c.useState)(null),ue=(0,i.Z)(se,2),de=ue[0],fe=ue[1],he=(0,c.useState)(null),ve=(0,i.Z)(he,2),Ze=ve[0],me=ve[1],xe=(0,c.useState)([{title:Q("id"),dataIndex:"id",is_show:!0,sorter:!0},{title:Q("title"),dataIndex:"name",is_show:!0},{title:Q("translations"),dataIndex:"locales",is_show:!0,render:function(e,n){var t;return(0,M.jsx)(h.Z,{children:null===(t=n.locales)||void 0===t?void 0:t.map((function(e,n){return(0,M.jsx)(v.Z,{className:"text-uppercase",color:[W[n]],children:e})}))})}},{title:Q("logo"),dataIndex:"logo_img",is_show:!0,render:function(e,n){return(0,M.jsx)(Z.Z,{alt:"images",className:"img rounded",src:n.deleted_at?"https://via.placeholder.com/150":e||"https://via.placeholder.com/150",effect:"blur",width:50,height:50,preview:!0,placeholder:!0})}},{title:Q("background"),dataIndex:"back",is_show:!0,render:function(e){return(0,M.jsx)(Z.Z,{alt:"images background",className:"img rounded",src:e?b.bV+e:"https://via.placeholder.com/150",effect:"blur",width:50,height:50,preview:!0,placeholder:!0})}},{title:Q("seller"),dataIndex:"seller",is_show:!0},{title:Q("open.time"),dataIndex:"open",is_show:!0,render:function(e,n){return n.open?(0,M.jsxs)(v.Z,{color:"blue",children:[" ",Q("open")," "]}):(0,M.jsxs)(v.Z,{color:"red",children:[" ",Q("closed")," "]})}},{title:Q("tax"),is_show:!0,dataIndex:"tax",render:function(e){return"".concat(e," %")}},{title:Q("status"),dataIndex:"status",is_show:!0,render:function(e,n){return(0,M.jsxs)("div",{children:["new"===e?(0,M.jsx)(v.Z,{color:"blue",children:Q(e)}):"rejected"===e?(0,M.jsx)(v.Z,{color:"error",children:Q(e)}):(0,M.jsx)(v.Z,{color:"cyan",children:Q(e)}),!n.deleted_at&&(0,M.jsx)(o.Z,{onClick:function(){return ae(n)}})]})}},{title:Q("options"),dataIndex:"options",is_show:!0,render:function(e,n){return(0,M.jsxs)(h.Z,{children:[(0,M.jsx)(m.Z,{type:"primary",icon:(0,M.jsx)(o.Z,{}),disabled:n.deleted_at,onClick:function(){return function(e){X((0,k.bL)({id:"edit-restaurant",url:"restaurant/".concat(e.uuid),name:Q("edit.restaurant")})),Y("/restaurant/".concat(e.uuid))}(n)}}),(0,M.jsx)(m.Z,{icon:(0,M.jsx)(s.Z,{}),onClick:function(){return function(e){X((0,k.bL)({id:"restaurant-clone",url:"restaurant-clone/".concat(e.uuid),name:Q("restaurant.clone")})),Y("/restaurant-clone/".concat(e.uuid))}(n)},disabled:n.deleted_at}),"manager"!==(null===le||void 0===le?void 0:le.role)?(0,M.jsx)(D.Z,{disabled:n.deleted_at,icon:(0,M.jsx)(u.Z,{}),onClick:function(){ke([n.id]),be(!0),fe(!0)}}):""]})}}]),pe=(0,i.Z)(xe,2),ge=pe[0],je=pe[1],be=(0,c.useContext)(C._).setIsModalVisible,Ce=(0,c.useState)(null),we=(0,i.Z)(Ce,2),ye=we[0],ke=we[1],_e=(0,c.useState)("all"),Ne=(0,i.Z)(_e,2),Ie=Ne[0],Se=Ne[1],ze=(0,c.useState)(!1),Oe=(0,i.Z)(ze,2),Ve=Oe[0],qe=Oe[1],Ee=(0,y.v9)((function(e){return e.menu}),y.wU).activeMenu,Me=(0,y.v9)((function(e){return e.restourant}),y.wU),He=Me.restourants,Te=Me.meta,De=Me.loading,Le=Me.params,Pe=(null===(e=Ee.data)||void 0===e?void 0:e.role)||Ie,Ae=null===Ee||void 0===Ee?void 0:Ee.data,Re={search:null===Ae||void 0===Ae?void 0:Ae.search,lang:"equal"===(null===Ae||void 0===Ae||null===(n=Ae.filter)||void 0===n?void 0:n.equal)?null===Ae||void 0===Ae||null===(t=Ae.filter)||void 0===t?void 0:t.lang:R.Z.language,not_lang:"not_equal"===(null===Ae||void 0===Ae||null===(S=Ae.filter)||void 0===S?void 0:S.equal)?null===Ae||void 0===Ae||null===(z=Ae.filter)||void 0===z?void 0:z.lang:null,status:"deleted_at"===Pe?null:"all"===Pe?void 0:Pe||void 0,deleted_at:"deleted_at"===Pe?Pe:void 0,page:null===Ae||void 0===Ae?void 0:Ae.page,perPage:null===Ae||void 0===Ae?void 0:Ae.perPage,sort:null===Ae||void 0===Ae?void 0:Ae.sort,column:null===Ae||void 0===Ae?void 0:Ae.column};(0,c.useEffect)((function(){Ee.refetch&&(X((0,N.L)(Re)),X((0,k.A_)(Ee)),Se("all"))}),[Ee.refetch]);var Ue=function(e){var n=Ee.data;X((0,k.nc)({activeMenu:Ee,data:(0,r.Z)((0,r.Z)({},n),e)}))};(0,A.Z)((function(){X((0,N.L)(Re))}),[Ee.data]);var $e={selectedRowKeys:ye,onChange:function(e){ke(e)}};return(0,M.jsxs)(x.Z,{title:Q("restaurants"),extra:(0,M.jsxs)(h.Z,{wrap:!0,children:[(0,M.jsx)(m.Z,{icon:(0,M.jsx)(d.Z,{}),type:"primary",onClick:function(){X((0,k.bL)({id:"add-restaurant",url:"restaurant/add",name:Q("add.restaurant")})),Y("/restaurant/add")},children:Q("add.restaurant")}),"deleted_at"!==Pe?(0,M.jsxs)(h.Z,{wrap:!0,children:[(0,M.jsx)(D.Z,{size:"",onClick:function(){null===ye||0===ye.length?j.Am.warning(Q("select.the.product")):(be(!0),fe(!1))},children:Q("delete.selected")}),(0,M.jsx)(D.Z,{size:"",onClick:function(){return me({delete:!0})},children:Q("delete.all")})]}):(0,M.jsx)(D.Z,{icon:(0,M.jsx)(B.uOc,{className:"mr-2"}),onClick:function(){return me({restore:!0})},children:Q("restore.all")}),(0,M.jsx)(m.Z,{className:"settings-button",onClick:function(){return oe(!0)},children:(0,M.jsx)(U.Ol$,{className:"icon"})}),(0,M.jsx)($.Z,{columns:ge,setColumns:je})]}),children:[(0,M.jsx)("div",{className:"d-flex justify-content-between",children:(0,M.jsx)(P.Z,{placeholder:Q("search"),handleChange:function(e){return Ue({search:e})},defaultValue:null===(O=Ee.data)||void 0===O?void 0:O.search,resetSearch:!(null!==(V=Ee.data)&&void 0!==V&&V.search),className:"w-25"})}),(0,M.jsx)(f.Z,{className:"mt-3",activeKey:Pe,onChange:function(e){Ue({role:e,page:1}),Se(e)},type:"card",children:J.map((function(e){return(0,M.jsx)(G,{tab:Q(e)},e)}))}),(0,M.jsx)(p.Z,{scroll:{x:!0},rowSelection:$e,columns:null===ge||void 0===ge?void 0:ge.filter((function(e){return e.is_show})),dataSource:He,loading:De,pagination:{pageSize:Le.perPage,page:(null===(q=Ee.data)||void 0===q?void 0:q.page)||1,total:Te.total,defaultCurrent:null===(E=Ee.data)||void 0===E?void 0:E.page,current:null===(H=Ee.data)||void 0===H?void 0:H.page},rowKey:function(e){return e.id},onChange:function(e,n,t){var a=e.pageSize,l=e.current,i=t.field,c=t.order,o=(0,F.Z)(c);X((0,k.nc)({activeMenu:Ee,data:(0,r.Z)((0,r.Z)({},Ee.data),{},{perPage:a,page:l,column:i,sort:o})}))}}),te&&(0,M.jsx)(T,{data:te,handleCancel:function(){return ae(null)},paramsData:Re}),(0,M.jsx)(w.Z,{click:function(){qe(!0);var e=(0,r.Z)({},Object.assign.apply(Object,[{}].concat((0,l.Z)(ye.map((function(e,n){return(0,a.Z)({},"ids[".concat(n,"]"),e)}))))));_.Z.delete(e).then((function(){j.Am.success(Q("successfully.deleted")),be(!1),X((0,N.L)(Re)),fe(null)})).finally((function(){return qe(!1)}))},text:Q(de?"delete":"all.delete"),setText:ke,loading:Ve}),ce&&(0,M.jsx)(L.Z,{handleClose:function(){return oe(!1)},openDrower:ce,setMenuData:k.nc}),Ze&&(0,M.jsx)(K.Z,{open:Ze,handleCancel:function(){return me(null)},click:Ze.restore?function(){qe(!0),_.Z.restoreAll().then((function(){j.Am.success(Q("successfully.restored")),X((0,N.L)(Re)),me(null)})).finally((function(){return qe(!1)}))}:function(){qe(!0),_.Z.dropAll().then((function(){j.Am.success(Q("successfully.deleted")),X((0,N.L)()),me(null)})).finally((function(){return qe(!1)}))},text:Ze.restore?Q("restore.modal.text"):Q("read.carefully"),subTitle:Ze.restore?"":Q("confirm.deletion"),loading:Ve,setText:ke})]})}},55768:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(1413),l=t(47313),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"},i=t(17469),c=function(e,n){return l.createElement(i.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:n,icon:r}))};c.displayName="PlusCircleOutlined";var o=l.forwardRef(c)},99587:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(1413),l=t(47313),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"},i=t(17469),c=function(e,n){return l.createElement(i.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:n,icon:r}))};c.displayName="TableOutlined";var o=l.forwardRef(c)},86345:function(e,n,t){t.d(n,{Z:function(){return j}});var a=t(87462),l=t(4942),r=t(47313),i=t(29439),c=t(45987),o=t(46123),s=t.n(o),u=t(10288),d=t(49242),f=r.forwardRef((function(e,n){var t,a=e.prefixCls,o=void 0===a?"rc-switch":a,f=e.className,h=e.checked,v=e.defaultChecked,Z=e.disabled,m=e.loadingIcon,x=e.checkedChildren,p=e.unCheckedChildren,g=e.onClick,j=e.onChange,b=e.onKeyDown,C=(0,c.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),w=(0,u.Z)(!1,{value:h,defaultValue:v}),y=(0,i.Z)(w,2),k=y[0],_=y[1];function N(e,n){var t=k;return Z||(_(t=e),null===j||void 0===j||j(t,n)),t}var I=s()(o,f,(t={},(0,l.Z)(t,"".concat(o,"-checked"),k),(0,l.Z)(t,"".concat(o,"-disabled"),Z),t));return r.createElement("button",Object.assign({},C,{type:"button",role:"switch","aria-checked":k,disabled:Z,className:I,ref:n,onKeyDown:function(e){e.which===d.Z.LEFT?N(!1,e):e.which===d.Z.RIGHT&&N(!0,e),null===b||void 0===b||b(e)},onClick:function(e){var n=N(!k,e);null===g||void 0===g||g(n,e)}}),m,r.createElement("span",{className:"".concat(o,"-inner")},k?x:p))}));f.displayName="Switch";var h=f,v=t(82508),Z=t(46479),m=t(91964),x=t(21631),p=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)n.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(t[a[l]]=e[a[l]])}return t},g=r.forwardRef((function(e,n){var t,i=e.prefixCls,c=e.size,o=e.loading,u=e.className,d=void 0===u?"":u,f=e.disabled,g=p(e,["prefixCls","size","loading","className","disabled"]),j=r.useContext(m.E_),b=j.getPrefixCls,C=j.direction,w=r.useContext(x.Z),y=b("switch",i),k=r.createElement("div",{className:"".concat(y,"-handle")},o&&r.createElement(v.Z,{className:"".concat(y,"-loading-icon")})),_=s()((t={},(0,l.Z)(t,"".concat(y,"-small"),"small"===(c||w)),(0,l.Z)(t,"".concat(y,"-loading"),o),(0,l.Z)(t,"".concat(y,"-rtl"),"rtl"===C),t),d);return r.createElement(Z.Z,{insertExtraNode:!0},r.createElement(h,(0,a.Z)({},g,{prefixCls:y,className:_,disabled:f||o,ref:n,loadingIcon:k})))}));g.__ANT_SWITCH=!0,g.displayName="Switch";var j=g}}]);