"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[9566],{99566:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var r=n(1413),a=n(93433),i=n(4942),s=n(29439),u=n(47313),c=n(18197),l=n(77181),d=n(59491),o=n(68197),f=n(59624),Z=n(66672),h=n(24511),m=n(852),j=n(34491),b=n(2717),g=n(90954),x=n(99638),p=n(51282),v=n(46417);function k(){var e=(0,h.$)().t,t=c.Z.useForm(),n=(0,s.Z)(t,1)[0],k=(0,b.v9)((function(e){return e.menu}),b.wU).activeMenu,y=(0,b.I0)(),q=(0,u.useState)(!1),w=(0,s.Z)(q,2),F=w[0],I=w[1],C=(0,u.useState)(!1),V=(0,s.Z)(C,2),_=V[0],A=V[1];(0,u.useEffect)((function(){return function(){var e=n.getFieldsValue(!0);y((0,g.nc)({activeMenu:k,data:e}))}}),[]);function E(){I(!0),m.Z.get().then((function(e){var t=function(e){var t=e.map((function(e){return(0,i.Z)({},e.key,e.value)}));return Object.assign.apply(Object,[{}].concat((0,a.Z)(t)))}(e.data);n.setFieldsValue(t)})).finally((function(){I(!1),y((0,g.A_)(k))}))}(0,u.useEffect)((function(){k.refetch&&E()}),[k.refetch]);return(0,v.jsx)(c.Z,{layout:"vertical",form:n,name:"global-settings",onFinish:function(t){var n;n=t,A(!0),m.Z.update(n).then((function(){j.Am.success(e("successfully.updated")),y((0,x.wv)())})).finally((function(){return A(!1)}))},initialValues:(0,r.Z)({},k.data),children:F?(0,v.jsx)(p.Z,{}):(0,v.jsx)(l.Z,{title:e("social.settings"),extra:(0,v.jsx)(d.Z,{type:"primary",onClick:function(){return n.submit()},loading:_,children:e("save")}),children:(0,v.jsxs)(o.Z,{gutter:12,children:[(0,v.jsx)(f.Z,{span:12,children:(0,v.jsx)(c.Z.Item,{label:"Instagram",name:"instagram",rules:[{required:!0,message:e("required")}],children:(0,v.jsx)(Z.Z,{})})}),(0,v.jsx)(f.Z,{span:12,children:(0,v.jsx)(c.Z.Item,{label:"Facebook",name:"facebook",rules:[{required:!0,message:e("required")}],children:(0,v.jsx)(Z.Z,{})})}),(0,v.jsx)(f.Z,{span:12,children:(0,v.jsx)(c.Z.Item,{label:"Twitter",name:"twitter",rules:[{required:!0,message:e("required")}],children:(0,v.jsx)(Z.Z,{})})})]})})})}}}]);