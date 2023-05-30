"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[3445],{63445:function(e,a,s){s.r(a),s.d(a,{default:function(){return k}});var n=s(1413),r=s(29439),l=s(47313),i=s(18197),t=s(77181),d=s(68197),c=s(59624),u=s(74294),o=s(66672),m=s(86345),h=s(45705),Z=s(59491),p=s(24511),x=s(33234),f=s(26747),j=s(2717),b=s(34491),y=s(90954),_=s(58467),w=s(51282),g=s(46417),v=[{title:"firebase",value:"firebase"},{title:"twilio",value:"twilio"}];function k(){var e=i.Z.useForm(),a=(0,r.Z)(e,1)[0],s=(0,p.$)().t,k=(0,l.useState)(!1),N=(0,r.Z)(k,2),q=N[0],C=N[1],I=(0,l.useState)(!1),E=(0,r.Z)(I,2),O=E[0],S=E[1],F=(0,j.I0)(),P=(0,_.s0)(),T=(0,j.v9)((function(e){return e.menu}),j.wU).activeMenu,U=(0,_.UO)().type,z=(0,l.useState)(null),A=(0,r.Z)(z,2),D=A[0],K=A[1],R=(0,j.v9)((function(e){return e.sms}),j.wU).smsGatewaysList;(0,l.useEffect)((function(){T.refetch&&function(e){S(!0),x.Z.getById(e).then((function(e){console.log("res",e.data);var s=e.data;a.setFieldsValue((0,n.Z)({default:Boolean(s.default)},s.payload)),K(s.type)})).finally((function(){S(!1),F((0,y.A_)(T))}))}(U)}),[T.refetch]);return(0,g.jsx)(t.Z,{title:s("edit.sms.payload"),className:"h-100",children:O?(0,g.jsx)(w.Z,{}):(0,g.jsx)(i.Z,{form:a,layout:"vertical",onFinish:function(e){C(!0);var a={type:D,default:Number(e.default),payload:(0,n.Z)({type:void 0,default:void 0},e)},r="settings/sms-payload";x.Z.update(U,a).then((function(){F((0,f.z)()),b.Am.success(s("successfully.updated")),F((0,y.ph)((0,n.Z)((0,n.Z)({},T),{},{nextUrl:r}))),P("/".concat(r))})).finally((function(){return C(!1)}))},children:(0,g.jsxs)(t.Z,{title:s("add.sms.payload"),children:[(0,g.jsxs)(d.Z,{gutter:12,children:[(0,g.jsx)(c.Z,{span:12,children:(0,g.jsx)(i.Z.Item,{label:s("select.type"),rules:[{required:!0,message:s("required")}],children:(0,g.jsx)(u.Z,{disabled:!0,className:"w-100",onChange:function(e){return K(e)},value:D,options:v.filter((function(e){return!R.some((function(a){return a.type===e.value}))}))})})}),"firebase"===U&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(c.Z,{span:12,children:(0,g.jsx)(i.Z.Item,{label:s("android_api_key"),name:"android_api_key",rules:[{required:!0,message:s("required")}],children:(0,g.jsx)(o.Z,{className:"w-100"})})}),(0,g.jsx)(c.Z,{span:12,children:(0,g.jsx)(i.Z.Item,{label:s("api_key"),name:"api_key",rules:[{required:!0,message:s("required")}],children:(0,g.jsx)(o.Z,{className:"w-100"})})}),(0,g.jsx)(c.Z,{span:12,children:(0,g.jsx)(i.Z.Item,{label:s("app_id"),name:"app_id",rules:[{required:!0,message:s("required")}],children:(0,g.jsx)(o.Z,{className:"w-100"})})}),(0,g.jsx)(c.Z,{span:12,children:(0,g.jsx)(i.Z.Item,{label:s("auth_domain"),name:"auth_domain",rules:[{required:!0,message:s("required")}],children:(0,g.jsx)(o.Z,{className:"w-100"})})}),(0,g.jsx)(c.Z,{span:12,children:(0,g.jsx)(i.Z.Item,{label:s("ios_api_key"),name:"ios_api_key",rules:[{required:!0,message:s("required")}],children:(0,g.jsx)(o.Z,{className:"w-100"})})}),(0,g.jsx)(c.Z,{span:12,children:(0,g.jsx)(i.Z.Item,{label:s("measurement_id"),name:"measurement_id",rules:[{required:!0,message:s("required")}],children:(0,g.jsx)(o.Z,{className:"w-100"})})}),(0,g.jsx)(c.Z,{span:12,children:(0,g.jsx)(i.Z.Item,{label:s("message_sender_id"),name:"message_sender_id",rules:[{required:!0,message:s("required")}],children:(0,g.jsx)(o.Z,{className:"w-100"})})}),(0,g.jsx)(c.Z,{span:12,children:(0,g.jsx)(i.Z.Item,{label:s("project_id"),name:"project_id",rules:[{required:!0,message:s("required")}],children:(0,g.jsx)(o.Z,{className:"w-100"})})}),(0,g.jsx)(c.Z,{span:12,children:(0,g.jsx)(i.Z.Item,{label:s("server_key"),name:"server_key",rules:[{required:!0,message:s("required")}],children:(0,g.jsx)(o.Z,{className:"w-100"})})}),(0,g.jsx)(c.Z,{span:12,children:(0,g.jsx)(i.Z.Item,{label:s("storage_bucket"),name:"storage_bucket",rules:[{required:!0,message:s("required")}],children:(0,g.jsx)(o.Z,{className:"w-100"})})}),(0,g.jsx)(c.Z,{span:12,children:(0,g.jsx)(i.Z.Item,{label:s("vapid_key"),name:"vapid_key",rules:[{required:!0,message:s("required")}],children:(0,g.jsx)(o.Z,{className:"w-100"})})}),(0,g.jsx)(c.Z,{span:12,children:(0,g.jsx)(i.Z.Item,{label:s("default"),name:"default",valuePropName:"checked",children:(0,g.jsx)(m.Z,{})})})]}),"twilio"===U&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(c.Z,{span:12,children:(0,g.jsx)(i.Z.Item,{label:s("twilio_auth_token"),name:"twilio_auth_token",rules:[{required:!0,message:s("required")}],children:(0,g.jsx)(o.Z,{min:0,className:"w-100"})})}),(0,g.jsx)(c.Z,{span:12,children:(0,g.jsx)(i.Z.Item,{label:s("twilio_account_id"),name:"twilio_account_id",rules:[{required:!0,message:s("required")}],children:(0,g.jsx)(o.Z,{className:"w-100"})})}),(0,g.jsx)(c.Z,{span:12,children:(0,g.jsx)(i.Z.Item,{label:s("twilio_number"),name:"twilio_number",rules:[{required:!0,message:s("required")}],children:(0,g.jsx)(o.Z,{className:"w-100"})})}),(0,g.jsx)(c.Z,{span:12,children:(0,g.jsx)(i.Z.Item,{label:s("default"),name:"default",valuePropName:"checked",children:(0,g.jsx)(m.Z,{})})})]})]}),(0,g.jsx)(h.Z,{children:(0,g.jsx)(Z.Z,{type:"primary",htmlType:"submit",loading:q,children:s("submit")})})]})})})}},86345:function(e,a,s){s.d(a,{Z:function(){return y}});var n=s(87462),r=s(4942),l=s(47313),i=s(29439),t=s(45987),d=s(46123),c=s.n(d),u=s(10288),o=s(49242),m=l.forwardRef((function(e,a){var s,n=e.prefixCls,d=void 0===n?"rc-switch":n,m=e.className,h=e.checked,Z=e.defaultChecked,p=e.disabled,x=e.loadingIcon,f=e.checkedChildren,j=e.unCheckedChildren,b=e.onClick,y=e.onChange,_=e.onKeyDown,w=(0,t.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),g=(0,u.Z)(!1,{value:h,defaultValue:Z}),v=(0,i.Z)(g,2),k=v[0],N=v[1];function q(e,a){var s=k;return p||(N(s=e),null===y||void 0===y||y(s,a)),s}var C=c()(d,m,(s={},(0,r.Z)(s,"".concat(d,"-checked"),k),(0,r.Z)(s,"".concat(d,"-disabled"),p),s));return l.createElement("button",Object.assign({},w,{type:"button",role:"switch","aria-checked":k,disabled:p,className:C,ref:a,onKeyDown:function(e){e.which===o.Z.LEFT?q(!1,e):e.which===o.Z.RIGHT&&q(!0,e),null===_||void 0===_||_(e)},onClick:function(e){var a=q(!k,e);null===b||void 0===b||b(a,e)}}),x,l.createElement("span",{className:"".concat(d,"-inner")},k?f:j))}));m.displayName="Switch";var h=m,Z=s(82508),p=s(46479),x=s(91964),f=s(21631),j=function(e,a){var s={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(s[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(s[n[r]]=e[n[r]])}return s},b=l.forwardRef((function(e,a){var s,i=e.prefixCls,t=e.size,d=e.loading,u=e.className,o=void 0===u?"":u,m=e.disabled,b=j(e,["prefixCls","size","loading","className","disabled"]),y=l.useContext(x.E_),_=y.getPrefixCls,w=y.direction,g=l.useContext(f.Z),v=_("switch",i),k=l.createElement("div",{className:"".concat(v,"-handle")},d&&l.createElement(Z.Z,{className:"".concat(v,"-loading-icon")})),N=c()((s={},(0,r.Z)(s,"".concat(v,"-small"),"small"===(t||g)),(0,r.Z)(s,"".concat(v,"-loading"),d),(0,r.Z)(s,"".concat(v,"-rtl"),"rtl"===w),s),o);return l.createElement(p.Z,{insertExtraNode:!0},l.createElement(h,(0,n.Z)({},b,{prefixCls:v,className:N,disabled:m||d,ref:a,loadingIcon:k})))}));b.__ANT_SWITCH=!0,b.displayName="Switch";var y=b}}]);