"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[5279,1318,6265,5152],{73431:function(e,n,t){var a=t(47313),l=t(39180),r=t(2717),o=t(28830),c=t(60535),i=t(46417);n.Z=function(){var e=(0,r.I0)(),n=(0,r.v9)((function(e){return e.formLang}),r.wU),t=n.languages,u=n.defaultLang;(0,a.useEffect)((function(){c.Z.getAllActive().then((function(n){var t=n.data;e((0,o.dc)(t)),e((0,o.mh)(t.find((function(e){return 1===e.default})).locale))}))}),[]);return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(l.ZP.Group,{value:u,onChange:function(n){var t=n.target.value;e((0,o.mh)(t))},className:"float-right",buttonStyle:"solid",children:null===t||void 0===t?void 0:t.map((function(e){return(0,i.jsx)(l.ZP.Button,{value:e.locale,children:e.title},e.id)}))})})}},89281:function(e,n,t){t.d(n,{h:function(){return p}});var a=t(1413),l=t(29439),r=t(45987),o=t(47313),c=t(12279),i=t.n(c),u=t(74294),s=t(72652),d=t(46417),f=["fetchOptions","debounceTimeout"],p=function(e){var n=e.fetchOptions,t=e.debounceTimeout,c=void 0===t?400:t,p=(0,r.Z)(e,f),v=(0,o.useState)(!1),h=(0,l.Z)(v,2),m=h[0],b=h[1],Z=(0,o.useState)([]),x=(0,l.Z)(Z,2),y=x[0],g=x[1],C=(0,o.useMemo)((function(){return i()((function(e){g([]),b(!0),n(e).then((function(e){g(e),b(!1)}))}),c)}),[n,c]);return(0,d.jsx)(u.Z,(0,a.Z)((0,a.Z)({showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:C,notFoundContent:m?(0,d.jsx)(s.Z,{size:"small"}):"no results"},p),{},{options:y,onFocus:function(){y.length||C("")}}))}},75336:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(93433),l=t(4942);function r(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"title",r=e.map((function(e){return(0,l.Z)({},e.locale,""===n["".concat(t,"[").concat(e.locale,"]")]?void 0:n["".concat(t,"[").concat(e.locale,"]")])}));return Object.assign.apply(Object,[{}].concat((0,a.Z)(r)))}},55279:function(e,n,t){t.r(n);var a=t(1413),l=t(93433),r=t(4942),o=t(29439),c=t(47313),i=t(58467),u=t(34491),s=t(18197),d=t(77181),f=t(68197),p=t(59624),v=t(66672),h=t(86345),m=t(59491),b=t(72652),Z=t(2717),x=t(90954),y=t(32447),g=t(89281),C=t(54872),j=t(24511),k=t(73431),w=t(75336),O=t(53149),E=t(5764),N=t(46417);n.default=function(){var e,n,t=(0,j.$)().t,P=(0,Z.v9)((function(e){return e.menu}),Z.wU).activeMenu,I=(0,Z.I0)(),S=s.Z.useForm(),F=(0,o.Z)(S,1)[0],_=(0,i.s0)(),q=(0,i.UO)().id,K=(0,c.useState)(null!==(e=P.data)&&void 0!==e&&e.img?null===(n=P.data)||void 0===n?void 0:n.img:[]),M=(0,o.Z)(K,2),L=M[0],T=M[1],D=(0,c.useState)(!1),U=(0,o.Z)(D,2),R=U[0],B=U[1],A=(0,c.useState)(!1),V=(0,o.Z)(A,2),z=V[0],G=V[1],H=(0,Z.v9)((function(e){return e.formLang}),Z.wU),Q=H.languages,W=H.defaultLang;(0,c.useEffect)((function(){return function(){var e=F.getFieldsValue(!0);I((0,x.nc)({activeMenu:P,data:e}))}}),[]);var $=function(e){return e.map((function(e){return{uid:e.id,name:e.path,url:e.path}}))};var J=function(e){G(!0),C.Z.getById(e).then((function(e){var n,t=e.data,o=(0,a.Z)((0,a.Z)({},t),{},{img:$(t.galleries),shops:null===(n=t.shops)||void 0===n?void 0:n.map((function(e){var n;return{label:null===(n=e.translation)||void 0===n?void 0:n.title,value:e.id}}))},function(e){if(!e)return{};var n=e.translations,t=Q.map((function(e){var t,a,l,o;return o={},(0,r.Z)(o,"title[".concat(e.locale,"]"),null===(t=n.find((function(n){return n.locale===e.locale})))||void 0===t?void 0:t.title),(0,r.Z)(o,"description[".concat(e.locale,"]"),null===(a=n.find((function(n){return n.locale===e.locale})))||void 0===a?void 0:a.description),(0,r.Z)(o,"button_text[".concat(e.locale,"]"),null===(l=n.find((function(n){return n.locale===e.locale})))||void 0===l?void 0:l.button_text),o}));return Object.assign.apply(Object,[{}].concat((0,l.Z)(t)))}(t));F.setFieldsValue(o),T($(t.galleries)),I((0,x.nc)({activeMenu:P,data:o}))})).finally((function(){I((0,x.A_)(P)),G(!1)}))};return(0,c.useEffect)((function(){P.refetch&&J(q)}),[P.refetch]),(0,N.jsx)(d.Z,{title:t("clone.banner"),className:"h-100",extra:(0,N.jsx)(k.Z,{}),children:z?(0,N.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,N.jsx)(b.Z,{size:"large",className:"py-5"})}):(0,N.jsxs)(s.Z,{name:"banner-add",layout:"vertical",onFinish:function(e){var n;B(!0);var l={url:e.url,shops:null===(n=e.shops)||void 0===n?void 0:n.map((function(e){return e.value})),images:L.map((function(e){return e.name})),clickable:e.clickable,title:(0,w.Z)(Q,e,"title"),description:(0,w.Z)(Q,e,"description"),button_text:(0,w.Z)(Q,e,"button_text")};C.Z.create(l).then((function(){var e="banners";u.Am.success(t("successfully.updated")),I((0,x.ph)((0,a.Z)((0,a.Z)({},P),{},{nextUrl:e}))),_("/".concat(e)),I((0,y.f)())})).finally((function(){return B(!1)}))},form:F,initialValues:(0,a.Z)({active:!0},P.data),className:"d-flex flex-column h-100",children:[(0,N.jsxs)(f.Z,{gutter:12,children:[(0,N.jsx)(p.Z,{span:12,children:Q.map((function(e){return(0,N.jsx)(s.Z.Item,{label:t("title"),name:"title[".concat(e.locale,"]"),rules:[{required:e.locale===W,message:t("required")}],hidden:e.locale!==W,children:(0,N.jsx)(v.Z,{})},"title"+e.locale)}))}),(0,N.jsx)(p.Z,{span:12,children:Q.map((function(e){return(0,N.jsx)(s.Z.Item,{label:t("description"),name:"description[".concat(e.locale,"]"),rules:[{required:e.locale===W,message:t("required")}],hidden:e.locale!==W,children:(0,N.jsx)(v.Z,{})},"description"+e.locale)}))}),(0,N.jsx)(p.Z,{span:12,children:Q.map((function(e){return(0,N.jsx)(s.Z.Item,{label:t("button_text"),name:"button_text[".concat(e.locale,"]"),rules:[{required:e.locale===W,message:t("required")}],hidden:e.locale!==W,children:(0,N.jsx)(v.Z,{})},"button_text"+e.locale)}))}),(0,N.jsx)(p.Z,{span:12,children:(0,N.jsx)(s.Z.Item,{rules:[{required:!0,message:t("required")}],label:t("url"),name:"url",children:(0,N.jsx)(v.Z,{})})}),(0,N.jsx)(p.Z,{span:12,children:(0,N.jsx)(s.Z.Item,{label:t("shop"),name:"shops",rules:[{required:!0,message:t("required")}],children:(0,N.jsx)(g.h,{mode:"multiple",fetchOptions:function(e){var n={search:e,perPage:10,status:"approved"};return O.Z.getAll(n).then((function(e){return e.data.map((function(e){var n;return{label:null===(n=e.translation)||void 0===n?void 0:n.title,value:e.id}}))}))},debounceTimeout:200})})}),(0,N.jsx)(p.Z,{span:12,children:(0,N.jsx)(s.Z.Item,{label:t("clickable"),name:"clickable",valuePropName:"checked",children:(0,N.jsx)(h.Z,{})})}),(0,N.jsx)(p.Z,{span:24,children:(0,N.jsx)(s.Z.Item,{label:t("image"),name:"img",rules:[{required:!0,message:t("required")}],children:(0,N.jsx)(E.Z,{type:"products",imageList:L,setImageList:T,form:F,length:"1",multiple:!1})})})]}),(0,N.jsx)("div",{className:"flex-grow-1 d-flex flex-column justify-content-end",children:(0,N.jsx)("div",{className:"pb-5",children:(0,N.jsx)(m.Z,{type:"primary",htmlType:"submit",loading:R,disabled:R,children:t("submit")})})})]})})}},39180:function(e,n,t){t.d(n,{ZP:function(){return S}});var a=t(4942),l=t(87462),r=t(47313),o=t(56482),c=t(46123),i=t.n(c),u=t(16945),s=t(4431),d=t(91964),f=r.createContext(null),p=f.Provider,v=f,h=r.createContext(null),m=h.Provider,b=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)n.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(t[a[l]]=e[a[l]])}return t},Z=function(e,n){var t,c=r.useContext(v),f=r.useContext(h),p=r.useContext(d.E_),m=p.getPrefixCls,Z=p.direction,x=r.useRef(),y=(0,u.sQ)(n,x),g=(0,r.useContext)(s.aM).isFormItemInput,C=e.prefixCls,j=e.className,k=e.children,w=e.style,O=b(e,["prefixCls","className","children","style"]),E=m("radio",C),N="button"===((null===c||void 0===c?void 0:c.optionType)||f)?"".concat(E,"-button"):E,P=(0,l.Z)({},O);c&&(P.name=c.name,P.onChange=function(n){var t,a;null===(t=e.onChange)||void 0===t||t.call(e,n),null===(a=null===c||void 0===c?void 0:c.onChange)||void 0===a||a.call(c,n)},P.checked=e.value===c.value,P.disabled=e.disabled||c.disabled);var I=i()("".concat(N,"-wrapper"),(t={},(0,a.Z)(t,"".concat(N,"-wrapper-checked"),P.checked),(0,a.Z)(t,"".concat(N,"-wrapper-disabled"),P.disabled),(0,a.Z)(t,"".concat(N,"-wrapper-rtl"),"rtl"===Z),(0,a.Z)(t,"".concat(N,"-wrapper-in-form-item"),g),t),j);return r.createElement("label",{className:I,style:w,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},r.createElement(o.Z,(0,l.Z)({},P,{type:"radio",prefixCls:N,ref:y})),void 0!==k?r.createElement("span",null,k):null)},x=r.forwardRef(Z);x.displayName="Radio";var y=x,g=t(29439),C=t(10288),j=t(21631),k=t(81176),w=r.forwardRef((function(e,n){var t=r.useContext(d.E_),o=t.getPrefixCls,c=t.direction,u=r.useContext(j.Z),s=(0,C.Z)(e.defaultValue,{value:e.value}),f=(0,g.Z)(s,2),v=f[0],h=f[1];return r.createElement(p,{value:{onChange:function(n){var t=v,a=n.target.value;"value"in e||h(a);var l=e.onChange;l&&a!==t&&l(n)},value:v,disabled:e.disabled,name:e.name,optionType:e.optionType}},function(){var t,s=e.prefixCls,d=e.className,f=void 0===d?"":d,p=e.options,h=e.buttonStyle,m=void 0===h?"outline":h,b=e.disabled,Z=e.children,x=e.size,g=e.style,C=e.id,j=e.onMouseEnter,w=e.onMouseLeave,O=o("radio",s),E="".concat(O,"-group"),N=Z;p&&p.length>0&&(N=p.map((function(e){return"string"===typeof e||"number"===typeof e?r.createElement(y,{key:e.toString(),prefixCls:O,disabled:b,value:e,checked:v===e},e):r.createElement(y,{key:"radio-group-value-options-".concat(e.value),prefixCls:O,disabled:e.disabled||b,value:e.value,checked:v===e.value,style:e.style},e.label)})));var P=x||u,I=i()(E,"".concat(E,"-").concat(m),(t={},(0,a.Z)(t,"".concat(E,"-").concat(P),P),(0,a.Z)(t,"".concat(E,"-rtl"),"rtl"===c),t),f);return r.createElement("div",(0,l.Z)({},(0,k.Z)(e),{className:I,style:g,onMouseEnter:j,onMouseLeave:w,id:C,ref:n}),N)}())})),O=r.memo(w),E=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)n.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(t[a[l]]=e[a[l]])}return t},N=function(e,n){var t=r.useContext(d.E_).getPrefixCls,a=e.prefixCls,o=E(e,["prefixCls"]),c=t("radio",a);return r.createElement(m,{value:"button"},r.createElement(y,(0,l.Z)({prefixCls:c},o,{type:"radio",ref:n})))},P=r.forwardRef(N),I=y;I.Button=P,I.Group=O;var S=I},86345:function(e,n,t){t.d(n,{Z:function(){return y}});var a=t(87462),l=t(4942),r=t(47313),o=t(29439),c=t(45987),i=t(46123),u=t.n(i),s=t(10288),d=t(49242),f=r.forwardRef((function(e,n){var t,a=e.prefixCls,i=void 0===a?"rc-switch":a,f=e.className,p=e.checked,v=e.defaultChecked,h=e.disabled,m=e.loadingIcon,b=e.checkedChildren,Z=e.unCheckedChildren,x=e.onClick,y=e.onChange,g=e.onKeyDown,C=(0,c.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),j=(0,s.Z)(!1,{value:p,defaultValue:v}),k=(0,o.Z)(j,2),w=k[0],O=k[1];function E(e,n){var t=w;return h||(O(t=e),null===y||void 0===y||y(t,n)),t}var N=u()(i,f,(t={},(0,l.Z)(t,"".concat(i,"-checked"),w),(0,l.Z)(t,"".concat(i,"-disabled"),h),t));return r.createElement("button",Object.assign({},C,{type:"button",role:"switch","aria-checked":w,disabled:h,className:N,ref:n,onKeyDown:function(e){e.which===d.Z.LEFT?E(!1,e):e.which===d.Z.RIGHT&&E(!0,e),null===g||void 0===g||g(e)},onClick:function(e){var n=E(!w,e);null===x||void 0===x||x(n,e)}}),m,r.createElement("span",{className:"".concat(i,"-inner")},w?b:Z))}));f.displayName="Switch";var p=f,v=t(82508),h=t(46479),m=t(91964),b=t(21631),Z=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)n.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(t[a[l]]=e[a[l]])}return t},x=r.forwardRef((function(e,n){var t,o=e.prefixCls,c=e.size,i=e.loading,s=e.className,d=void 0===s?"":s,f=e.disabled,x=Z(e,["prefixCls","size","loading","className","disabled"]),y=r.useContext(m.E_),g=y.getPrefixCls,C=y.direction,j=r.useContext(b.Z),k=g("switch",o),w=r.createElement("div",{className:"".concat(k,"-handle")},i&&r.createElement(v.Z,{className:"".concat(k,"-loading-icon")})),O=u()((t={},(0,l.Z)(t,"".concat(k,"-small"),"small"===(c||j)),(0,l.Z)(t,"".concat(k,"-loading"),i),(0,l.Z)(t,"".concat(k,"-rtl"),"rtl"===C),t),d);return r.createElement(h.Z,{insertExtraNode:!0},r.createElement(p,(0,a.Z)({},x,{prefixCls:k,className:O,disabled:f||i,ref:n,loadingIcon:w})))}));x.__ANT_SWITCH=!0,x.displayName="Switch";var y=x},56482:function(e,n,t){var a=t(87462),l=t(4942),r=t(45987),o=t(1413),c=t(15671),i=t(43144),u=t(60136),s=t(29388),d=t(47313),f=t(46123),p=t.n(f),v=function(e){(0,u.Z)(t,e);var n=(0,s.Z)(t);function t(e){var a;(0,c.Z)(this,t),(a=n.call(this,e)).handleChange=function(e){var n=a.props,t=n.disabled,l=n.onChange;t||("checked"in a.props||a.setState({checked:e.target.checked}),l&&l({target:(0,o.Z)((0,o.Z)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var l="checked"in e?e.checked:e.defaultChecked;return a.state={checked:l},a}return(0,i.Z)(t,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,n=this.props,t=n.prefixCls,o=n.className,c=n.style,i=n.name,u=n.id,s=n.type,f=n.disabled,v=n.readOnly,h=n.tabIndex,m=n.onClick,b=n.onFocus,Z=n.onBlur,x=n.onKeyDown,y=n.onKeyPress,g=n.onKeyUp,C=n.autoFocus,j=n.value,k=n.required,w=(0,r.Z)(n,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),O=Object.keys(w).reduce((function(e,n){return"aria-"!==n.substr(0,5)&&"data-"!==n.substr(0,5)&&"role"!==n||(e[n]=w[n]),e}),{}),E=this.state.checked,N=p()(t,o,(e={},(0,l.Z)(e,"".concat(t,"-checked"),E),(0,l.Z)(e,"".concat(t,"-disabled"),f),e));return d.createElement("span",{className:N,style:c},d.createElement("input",(0,a.Z)({name:i,id:u,type:s,required:k,readOnly:v,disabled:f,tabIndex:h,className:"".concat(t,"-input"),checked:!!E,onClick:m,onFocus:b,onBlur:Z,onKeyUp:g,onKeyDown:x,onKeyPress:y,onChange:this.handleChange,autoFocus:C,ref:this.saveInput,value:j},O)),d.createElement("span",{className:"".concat(t,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,n){return"checked"in e?(0,o.Z)((0,o.Z)({},n),{},{checked:e.checked}):null}}]),t}(d.Component);v.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}},n.Z=v}}]);