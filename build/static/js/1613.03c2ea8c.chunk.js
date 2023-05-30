"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[1613],{89281:function(e,n,t){t.d(n,{h:function(){return m}});var r=t(1413),s=t(29439),a=t(45987),i=t(47313),u=t(12279),l=t.n(u),o=t(74294),c=t(72652),d=t(46417),f=["fetchOptions","debounceTimeout"],m=function(e){var n=e.fetchOptions,t=e.debounceTimeout,u=void 0===t?400:t,m=(0,a.Z)(e,f),h=(0,i.useState)(!1),b=(0,s.Z)(h,2),Z=b[0],g=b[1],p=(0,i.useState)([]),x=(0,s.Z)(p,2),v=x[0],j=x[1],y=(0,i.useMemo)((function(){return l()((function(e){j([]),g(!0),n(e).then((function(e){j(e),g(!1)}))}),u)}),[n,u]);return(0,d.jsx)(o.Z,(0,r.Z)((0,r.Z)({showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:y,notFoundContent:Z?(0,d.jsx)(c.Z,{size:"small"}):"no results"},m),{},{options:v,onFocus:function(){v.length||y("")}}))}},31613:function(e,n,t){t.r(n);var r=t(1413),s=t(29439),a=t(47313),i=t(58467),u=t(34491),l=t(18197),o=t(77181),c=t(68197),d=t(59624),f=t(66672),m=t(74294),h=t(99096),b=t(59491),Z=t(2717),g=t(90954),p=t(24511),x=t(7004),v=t(70816),j=t.n(v),y=t(71274),w=t(18929),_=t(38758),q=t(89281),F=t(46417),N=[{title:"order",value:"order"},{title:"subscribe",value:"subscribe"},{title:"verify",value:"verify"}];n.default=function(){var e=(0,p.$)().t,n=(0,Z.v9)((function(e){return e.menu}),Z.wU).activeMenu,t=(0,Z.I0)(),v=l.Z.useForm(),D=(0,s.Z)(v,1)[0],I=(0,i.s0)(),Y=(0,a.useState)(!1),M=(0,s.Z)(Y,2),C=M[0],S=M[1],V=(0,Z.v9)((function(e){return e.formLang}),Z.wU),U=V.defaultLang,k=V.languages,E=(0,Z.v9)((function(e){return e.messageSubscriber}),Z.wU).subscribers;(0,a.useEffect)((function(){return function(){var e=D.getFieldsValue(!0);t((0,g.nc)({activeMenu:n,data:e}))}}),[]);return(0,F.jsx)(o.Z,{title:e("add.subscriber"),className:"h-100",children:(0,F.jsxs)(l.Z,{name:"subscriber-add",layout:"vertical",onFinish:function(s){var a=(0,r.Z)((0,r.Z)({},s),{},{type:"subscribe",email_setting_id:s.email_setting_id.value,send_to:j()(s.send_to).format("YYYY-MM-DD HH:mm:ss")});S(!0);var i="message/subscriber";y.Z.create(a).then((function(){u.Am.success(e("successfully.created")),t((0,g.ph)((0,r.Z)((0,r.Z)({},n),{},{nextUrl:i}))),I("/".concat(i)),t((0,w.F)())})).finally((function(){return S(!1)}))},form:D,initialValues:(0,r.Z)((0,r.Z)({},n.data),function(){var e=n.data;if(null===e||void 0===e||!e.send_to)return e;var t=e.send_to;return(0,r.Z)((0,r.Z)({},e),{},{send_to:j()(t,"YYYY-MM-DD")})}()),className:"d-flex flex-column h-100",children:[(0,F.jsxs)(c.Z,{gutter:12,children:[(0,F.jsx)(d.Z,{span:12,children:(0,F.jsx)(l.Z.Item,{label:e("subject"),name:"subject",rules:[{required:!0,message:e("required")}],children:(0,F.jsx)(f.Z,{})})}),(0,F.jsx)(d.Z,{span:12,children:(0,F.jsx)(l.Z.Item,{label:e("type"),name:"type",rules:[{required:!0,message:e("required")}],children:(0,F.jsx)(m.Z,{options:N.filter((function(e){return!E.some((function(n){return n.type===e.value}))})),className:"w-100"})})}),(0,F.jsx)(d.Z,{span:12,children:(0,F.jsx)(l.Z.Item,{label:e("email.setting.id"),name:"email_setting_id",rules:[{required:!0,message:e("required")}],children:(0,F.jsx)(q.h,{fetchOptions:function(){return _.Z.get().then((function(e){return e.data.map((function(e){return{label:e.host,value:e.id}}))}))},className:"w-100",placeholder:e("email.setting.id")})})}),(0,F.jsx)(d.Z,{span:24,children:(0,F.jsx)(x.Z,{languages:k,form:D,lang:U})}),(0,F.jsx)(d.Z,{span:12,children:(0,F.jsx)(l.Z.Item,{label:e("alt.body"),name:"alt_body",rules:[{required:!0,message:e("required")}],children:(0,F.jsx)(f.Z,{})})}),(0,F.jsx)(d.Z,{span:12,children:(0,F.jsx)(l.Z.Item,{label:e("send.to"),name:"send_to",rules:[{required:!0,message:e("required")}],children:(0,F.jsx)(h.Z,{showTime:!0,className:"w-100",disabledDate:function(e){return j()().add(-1,"days")>=e}})})})]}),(0,F.jsx)("div",{className:"flex-grow-1 d-flex flex-column justify-content-end",children:(0,F.jsx)("div",{className:"pb-5",children:(0,F.jsx)(b.Z,{type:"primary",htmlType:"submit",loading:C,children:e("send")})})})]})})}},7004:function(e,n,t){t.d(n,{Z:function(){return d}});t(47313);var r=t(18197),s=t(24511),a=t(68144),i=t(76733),u=t.n(i),l=t(97421),o=t(36104),c=t(46417);function d(e){var n=e.form,t=(e.lang,e.languages,(0,s.$)().t);return(0,c.jsx)("div",{className:"textEditor",children:(0,c.jsx)(r.Z.Item,{label:t("newsletter.content"),name:"body",valuePropName:"data",getValueFromEvent:function(e,n){return n.getData()},rules:[{required:!0,message:t("required")}],className:"description-editor",children:(0,c.jsx)(a.CKEditor,{editor:u(),config:{extraPlugins:[function(e){e.plugins.get("FileRepository").createUploadAdapter=function(e){return function(e){return{upload:function(){return new Promise((function(n,t){var r=new FormData;e.file.then((function(e){r.append("image",e),r.append("type","blogs"),o.Z.upload(r).then((function(e){var t=e.data;n({default:"".concat(l.bV+t.title)})})).catch((function(e){t(e)}))}))}))}}}(e)}}]},onChange:function(e,n){n.getData()},onBlur:function(e,t){var r=t.getData();n.setFieldsValue({body:r})}})})})}}}]);