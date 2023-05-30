"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[5602],{15602:function(e,n,t){t.r(n),t.d(n,{default:function(){return F}});var l=t(4942),i=t(93433),a=t(1413),o=t(29439),r=t(47313),u=t(47548),d=t(31741),s=t(12019),c=t(66407),f=t(47515),v=t(55768),h=t(73591),m=t(45705),x=t(59491),Z=t(77181),j=t(78508),p=t(58467),g=t(2717),y=t(84304),C=t(13945),b=t(90954),w=t(80314),_=t(91405),k=t(24511),S=t(10310),A=t(41481),I=t(53233),M=t(55940),P=t(74580),L=t(34491),N=t(45321),T=t(69658),U=t(48008),z=t(26672),K=t(49986),O=t(79492),D=t(46417),V=h.Z.TabPane,E=["admin","seller","moderator","manager","deliveryman","deleted_at"];function F(){var e,n,t,F,R,$,q,B=(0,k.$)().t,G=(0,g.I0)(),H=(0,p.s0)(),J=(0,r.useState)(null),Q=(0,o.Z)(J,2),W=Q[0],X=Q[1],Y=(0,r.useState)(null),ee=(0,o.Z)(Y,2),ne=ee[0],te=ee[1],le=(0,r.useContext)(P._).setIsModalVisible,ie=(0,r.useState)(!1),ae=(0,o.Z)(ie,2),oe=ae[0],re=ae[1],ue=(0,g.v9)((function(e){return e.menu}),g.wU).activeMenu,de=(0,g.v9)((function(e){return e.user}),g.wU),se=de.users,ce=de.loading,fe=de.meta,ve=de.params,he=(0,r.useState)(null),me=(0,o.Z)(he,2),xe=me[0],Ze=me[1],je=(0,r.useState)(null),pe=(0,o.Z)(je,2),ge=pe[0],ye=pe[1],Ce=(0,r.useState)("admin"),be=(0,o.Z)(Ce,2),we=be[0],_e=be[1],ke=(0,r.useState)(null),Se=(0,o.Z)(ke,2),Ae=Se[0],Ie=Se[1],Me=(null===(e=ue.data)||void 0===e?void 0:e.role)||we,Pe=(0,g.v9)((function(e){return e.auth}),g.wU).user,Le=(0,O.Z)(),Ne=Le.isDemo,Te=Le.demoDeliveryman,Ue=Le.demoSeller,ze=Le.demoAdmin,Ke=Le.demoModerator,Oe=Le.demoMeneger,De=ue.data,Ve={sort:null===De||void 0===De?void 0:De.sort,column:null===De||void 0===De?void 0:De.column,role:Me,perPage:null===De||void 0===De?void 0:De.perPage,page:null===De||void 0===De?void 0:De.page,search:null===De||void 0===De?void 0:De.search},Ee=(0,r.useState)([{title:B("id"),dataIndex:"id",sorter:!0,is_show:!0},{title:B("firstname"),dataIndex:"firstname",is_show:!0},{title:B("lastname"),dataIndex:"lastname",is_show:!0},{title:B("email"),dataIndex:"email",is_show:!0,render:function(e){return(0,D.jsx)("div",{children:Ne?"":e})}},{title:B("role"),dataIndex:"role",is_show:!0},{title:B("options"),dataIndex:"options",is_show:!0,render:function(e,n){return(0,D.jsxs)(m.Z,{children:[(0,D.jsx)(x.Z,{icon:(0,D.jsx)(u.Z,{}),onClick:function(){return Ze(n.uuid)}}),"manager"===Pe.role&&"admin"===n.role?void 0:(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(x.Z,{icon:(0,D.jsx)(d.Z,{}),onClick:function(){return function(e){G((0,b.bL)({url:"/users/user/".concat(e.uuid),id:"user_info",name:B("user.info")})),H("/users/user/".concat(e.uuid),{state:{user_id:e.id}})}(n)}}),(0,D.jsx)(x.Z,{type:"primary",icon:(0,D.jsx)(s.Z,{}),onClick:function(){return function(e){G((0,b.bL)({url:"user/".concat(e.uuid),id:"user_edit",name:"User edit"})),H("/user/".concat(e.uuid))}(n)},disabled:Ne&&(null===n||void 0===n?void 0:n.id)==Te||Ne&&(null===n||void 0===n?void 0:n.id)==Ke||Ne&&(null===n||void 0===n?void 0:n.id)==Oe||Ne&&(null===n||void 0===n?void 0:n.id)==Ue||Ne&&(null===n||void 0===n?void 0:n.id)==ze})]}),"admin"!==(null===n||void 0===n?void 0:n.role)&&(0,D.jsxs)(m.Z,{children:[(0,D.jsx)(x.Z,{icon:(0,D.jsx)(c.Z,{}),onClick:function(){return function(e){G((0,b.bL)({url:"user-clone/".concat(e.uuid),id:"user-clone",name:"user.clone"})),H("/user-clone/".concat(e.uuid))}(n)}}),(0,D.jsx)(M.Z,{icon:(0,D.jsx)(f.Z,{}),onClick:function(){X([n.id]),le(!0),te(!0)}})]})]})}}]),Fe=(0,o.Z)(Ee,2),Re=Fe[0],$e=Fe[1];(0,r.useEffect)((function(){ue.refetch&&(G((0,y.uh)(Ve)),G((0,b.A_)(ue)))}),[ue.refetch]),(0,w.Z)((function(){G((0,y.uh)(Ve))}),[ue.data]);var qe=function(e){var n=ue.data;G((0,b.nc)({activeMenu:ue,data:(0,a.Z)((0,a.Z)({},n),e)}))},Be={selectedRowKeys:W,onChange:function(e){X(e)}};return(0,D.jsxs)(Z.Z,{title:B("users"),extra:(0,D.jsxs)(m.Z,{wrap:!0,children:["deleted_at"!==(null===(n=ue.data)||void 0===n?void 0:n.role)?(0,D.jsxs)(m.Z,{children:[(0,D.jsx)(M.Z,{size:"",onClick:function(){null===W||0===W.length?L.Am.warning(B("select.the.product")):(le(!0),te(!1))},children:B("delete.selected")}),(0,D.jsx)(M.Z,{onClick:function(){return Ie({delete:!0})},children:B("delete.all")})]}):(0,D.jsx)(M.Z,{icon:(0,D.jsx)(z.uOc,{className:"mr-2"}),onClick:function(){return Ie({restore:!0})},children:B("restore.all")}),(0,D.jsx)(I.Z,{columns:Re,setColumns:$e})]}),children:[(0,D.jsx)("div",{className:"d-flex justify-content-between mb-3",children:(0,D.jsx)(A.Z,{placeholder:B("search"),className:"w-25",handleChange:function(e){qe({search:e})},defaultValue:null===(t=ue.data)||void 0===t?void 0:t.search,resetSearch:!(null!==(F=ue.data)&&void 0!==F&&F.search)})}),(0,D.jsx)(h.Z,{scroll:{x:!0},activeKey:Me,onChange:function(e){qe({role:e,page:1}),_e(e)},type:"card",children:E.map((function(e){return(0,D.jsx)(V,{tab:B(e)},e)}))}),"admin"!=Me&&"seller"!=Me&&"deleted_at"!=Me?(0,D.jsx)("div",{style:{display:"flex",justifyContent:"flex-end"},children:(0,D.jsx)(x.Z,{type:"primary",icon:(0,D.jsx)(v.Z,{}),onClick:function(){return e=Me,G((0,b.bL)({id:"user-add-role",url:"user/add/".concat(e),name:B("add.".concat(e))})),void H("/user/add/".concat(e));var e},className:"mr-2",children:B("add.".concat(Me))})}):null,(0,D.jsx)(j.Z,{scroll:{x:!0},rowSelection:Be,columns:null===Re||void 0===Re?void 0:Re.filter((function(e){return e.is_show})),dataSource:se,loading:ce,pagination:{pageSize:ve.perPage,page:(null===(R=ue.data)||void 0===R?void 0:R.page)||1,total:fe.total,defaultCurrent:null===($=ue.data)||void 0===$?void 0:$.page,current:null===(q=ue.data)||void 0===q?void 0:q.page},rowKey:function(e){return e.id},onChange:function(e,n,t){var l=e.pageSize,i=e.current,o=t.field,r=t.order,u=(0,C.Z)(r);G((0,b.nc)({activeMenu:ue,data:(0,a.Z)((0,a.Z)({},ue.data),{},{perPage:l,page:i,column:o,sort:u})}))}}),(0,D.jsx)(T.Z,{click:function(){re(!0);var e=(0,a.Z)({},Object.assign.apply(Object,[{}].concat((0,i.Z)(W.map((function(e,n){return(0,l.Z)({},"ids[".concat(n,"]"),e)}))))));N.Z.delete(e).then((function(){L.Am.success(B("successfully.deleted")),G((0,y.uh)(Ve)),le(!1),te([])})).finally((function(){return re(!1)}))},text:B(ne?"delete":"all.delete"),loading:oe,setText:X}),xe&&(0,D.jsx)(_.Z,{uuid:xe,handleCancel:function(){return Ze(null)}}),ge&&(0,D.jsx)(S.Z,{data:ge,handleCancel:function(){return ye(null)}}),Ae&&(0,D.jsx)(U.Z,{open:Ae,handleCancel:function(){return Ie(null)},click:Ae.restore?function(){re(!0),K.Z.restoreAll().then((function(){L.Am.success(B("successfully.restored")),G((0,y.uh)(Ve)),Ie(null)})).finally((function(){return re(!1)}))}:function(){re(!0),K.Z.dropAll().then((function(){L.Am.success(B("successfully.deleted")),G((0,y.uh)()),Ie(null)})).finally((function(){return re(!1)}))},text:Ae.restore?B("restore.modal.text"):B("read.carefully"),subTitle:Ae.restore?"":B("confirm.deletion"),loading:oe,setText:te})]})}}}]);