"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[5883,1318,6265,5152],{73431:function(e,n,t){var a=t(47313),r=t(39180),o=t(2717),l=t(28830),c=t(60535),i=t(46417);n.Z=function(){var e=(0,o.I0)(),n=(0,o.v9)((function(e){return e.formLang}),o.wU),t=n.languages,s=n.defaultLang;(0,a.useEffect)((function(){c.Z.getAllActive().then((function(n){var t=n.data;e((0,l.dc)(t)),e((0,l.mh)(t.find((function(e){return 1===e.default})).locale))}))}),[]);return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(r.ZP.Group,{value:s,onChange:function(n){var t=n.target.value;e((0,l.mh)(t))},className:"float-right",buttonStyle:"solid",children:null===t||void 0===t?void 0:t.map((function(e){return(0,i.jsx)(r.ZP.Button,{value:e.locale,children:e.title},e.id)}))})})}},55883:function(e,n,t){t.r(n);var a=t(1413),r=t(29439),o=t(47313),l=t(18197),c=t(77181),i=t(68197),s=t(59624),u=t(66672),d=t(74294),f=t(86345),p=t(59491),v=t(34491),h=t(58467),m=t(73431),y=t(52421),b=t(2717),Z=t(90954),g=t(30763),x=t(24511),C=t(5764),k=t(74380),w=t(46417);n.default=function(){var e,n,t=(0,x.$)().t,j=(0,h.s0)(),E=(0,b.I0)(),O=(0,b.v9)((function(e){return e.menu}),b.wU).activeMenu,P=(0,o.useState)(null!==(e=O.data)&&void 0!==e&&e.image?[null===(n=O.data)||void 0===n?void 0:n.image]:[]),N=(0,r.Z)(P,2),I=N[0],S=N[1],K=l.Z.useForm(),F=(0,r.Z)(K,1)[0],L=(0,o.useState)(!1),M=(0,r.Z)(L,2),_=M[0],D=M[1],q=(0,o.useState)(null),R=(0,r.Z)(q,2),T=R[0],U=R[1],B=(0,b.v9)((function(e){return e.formLang}),b.wU),A=B.defaultLang,V=B.languages;(0,o.useEffect)((function(){return function(){var e=F.getFieldsValue(!0);E((0,Z.nc)({activeMenu:O,data:e}))}}),[]);return(0,w.jsx)(c.Z,{title:t("add.category"),extra:(0,w.jsx)(m.Z,{}),children:(0,w.jsxs)(l.Z,{name:"basic",layout:"vertical",onFinish:function(e){var n;D(!0);var r=(0,a.Z)((0,a.Z)({},e),{},{type:"receipt",active:e.active?1:0,keywords:e.keywords.join(","),parent_id:null,"images[0]":null===(n=I[0])||void 0===n?void 0:n.name}),o="catalog/recipe-categories";g.Z.create(r).then((function(){v.Am.success(t("successfully.created")),E((0,k.P2)()),j("/".concat(o)),E((0,Z.ph)((0,a.Z)((0,a.Z)({},O),{},{nextUrl:o})))})).catch((function(e){return U(e.response.data.params)})).finally((function(){return D(!1)}))},initialValues:(0,a.Z)({parent_id:{title:"---",value:0,key:0},active:!0},O.data),form:F,children:[(0,w.jsxs)(i.Z,{gutter:12,children:[(0,w.jsx)(s.Z,{span:12,children:V.map((function(e,n){return(0,w.jsx)(l.Z.Item,{label:t("name"),name:"title[".concat(e.locale,"]"),help:T&&T["title.".concat(A)]?T["title.".concat(A)][0]:null,validateStatus:T?"error":"success",rules:[{required:e.locale===A,message:t("required")}],hidden:e.locale!==A,children:(0,w.jsx)(u.Z,{placeholder:t("name")})},e.title+n)}))}),(0,w.jsx)(s.Z,{span:12,children:V.map((function(e,n){return(0,w.jsx)(l.Z.Item,{label:t("description"),name:"description[".concat(e.locale,"]"),rules:[{required:e.locale===A,message:t("required")}],hidden:e.locale!==A,children:(0,w.jsx)(y.Z,{rows:4})},e.locale+n)}))}),(0,w.jsx)(s.Z,{span:12,children:(0,w.jsx)(l.Z.Item,{label:t("keywords"),name:"keywords",rules:[{required:!0,message:t("required")}],children:(0,w.jsx)(d.Z,{mode:"tags",style:{width:"100%"}})})}),(0,w.jsx)(s.Z,{span:4,children:(0,w.jsx)(l.Z.Item,{label:t("image"),children:(0,w.jsx)(C.Z,{type:"categories",imageList:I,setImageList:S,form:F,multiple:!1})})}),(0,w.jsx)(s.Z,{span:2,children:(0,w.jsx)(l.Z.Item,{label:t("active"),name:"active",valuePropName:"checked",children:(0,w.jsx)(f.Z,{})})})]}),(0,w.jsx)(p.Z,{type:"primary",htmlType:"submit",loading:_,children:t("submit")})]})})}},39180:function(e,n,t){t.d(n,{ZP:function(){return S}});var a=t(4942),r=t(87462),o=t(47313),l=t(56482),c=t(46123),i=t.n(c),s=t(16945),u=t(4431),d=t(91964),f=o.createContext(null),p=f.Provider,v=f,h=o.createContext(null),m=h.Provider,y=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t},b=function(e,n){var t,c=o.useContext(v),f=o.useContext(h),p=o.useContext(d.E_),m=p.getPrefixCls,b=p.direction,Z=o.useRef(),g=(0,s.sQ)(n,Z),x=(0,o.useContext)(u.aM).isFormItemInput,C=e.prefixCls,k=e.className,w=e.children,j=e.style,E=y(e,["prefixCls","className","children","style"]),O=m("radio",C),P="button"===((null===c||void 0===c?void 0:c.optionType)||f)?"".concat(O,"-button"):O,N=(0,r.Z)({},E);c&&(N.name=c.name,N.onChange=function(n){var t,a;null===(t=e.onChange)||void 0===t||t.call(e,n),null===(a=null===c||void 0===c?void 0:c.onChange)||void 0===a||a.call(c,n)},N.checked=e.value===c.value,N.disabled=e.disabled||c.disabled);var I=i()("".concat(P,"-wrapper"),(t={},(0,a.Z)(t,"".concat(P,"-wrapper-checked"),N.checked),(0,a.Z)(t,"".concat(P,"-wrapper-disabled"),N.disabled),(0,a.Z)(t,"".concat(P,"-wrapper-rtl"),"rtl"===b),(0,a.Z)(t,"".concat(P,"-wrapper-in-form-item"),x),t),k);return o.createElement("label",{className:I,style:j,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},o.createElement(l.Z,(0,r.Z)({},N,{type:"radio",prefixCls:P,ref:g})),void 0!==w?o.createElement("span",null,w):null)},Z=o.forwardRef(b);Z.displayName="Radio";var g=Z,x=t(29439),C=t(10288),k=t(21631),w=t(81176),j=o.forwardRef((function(e,n){var t=o.useContext(d.E_),l=t.getPrefixCls,c=t.direction,s=o.useContext(k.Z),u=(0,C.Z)(e.defaultValue,{value:e.value}),f=(0,x.Z)(u,2),v=f[0],h=f[1];return o.createElement(p,{value:{onChange:function(n){var t=v,a=n.target.value;"value"in e||h(a);var r=e.onChange;r&&a!==t&&r(n)},value:v,disabled:e.disabled,name:e.name,optionType:e.optionType}},function(){var t,u=e.prefixCls,d=e.className,f=void 0===d?"":d,p=e.options,h=e.buttonStyle,m=void 0===h?"outline":h,y=e.disabled,b=e.children,Z=e.size,x=e.style,C=e.id,k=e.onMouseEnter,j=e.onMouseLeave,E=l("radio",u),O="".concat(E,"-group"),P=b;p&&p.length>0&&(P=p.map((function(e){return"string"===typeof e||"number"===typeof e?o.createElement(g,{key:e.toString(),prefixCls:E,disabled:y,value:e,checked:v===e},e):o.createElement(g,{key:"radio-group-value-options-".concat(e.value),prefixCls:E,disabled:e.disabled||y,value:e.value,checked:v===e.value,style:e.style},e.label)})));var N=Z||s,I=i()(O,"".concat(O,"-").concat(m),(t={},(0,a.Z)(t,"".concat(O,"-").concat(N),N),(0,a.Z)(t,"".concat(O,"-rtl"),"rtl"===c),t),f);return o.createElement("div",(0,r.Z)({},(0,w.Z)(e),{className:I,style:x,onMouseEnter:k,onMouseLeave:j,id:C,ref:n}),P)}())})),E=o.memo(j),O=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t},P=function(e,n){var t=o.useContext(d.E_).getPrefixCls,a=e.prefixCls,l=O(e,["prefixCls"]),c=t("radio",a);return o.createElement(m,{value:"button"},o.createElement(g,(0,r.Z)({prefixCls:c},l,{type:"radio",ref:n})))},N=o.forwardRef(P),I=g;I.Button=N,I.Group=E;var S=I},86345:function(e,n,t){t.d(n,{Z:function(){return g}});var a=t(87462),r=t(4942),o=t(47313),l=t(29439),c=t(45987),i=t(46123),s=t.n(i),u=t(10288),d=t(49242),f=o.forwardRef((function(e,n){var t,a=e.prefixCls,i=void 0===a?"rc-switch":a,f=e.className,p=e.checked,v=e.defaultChecked,h=e.disabled,m=e.loadingIcon,y=e.checkedChildren,b=e.unCheckedChildren,Z=e.onClick,g=e.onChange,x=e.onKeyDown,C=(0,c.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),k=(0,u.Z)(!1,{value:p,defaultValue:v}),w=(0,l.Z)(k,2),j=w[0],E=w[1];function O(e,n){var t=j;return h||(E(t=e),null===g||void 0===g||g(t,n)),t}var P=s()(i,f,(t={},(0,r.Z)(t,"".concat(i,"-checked"),j),(0,r.Z)(t,"".concat(i,"-disabled"),h),t));return o.createElement("button",Object.assign({},C,{type:"button",role:"switch","aria-checked":j,disabled:h,className:P,ref:n,onKeyDown:function(e){e.which===d.Z.LEFT?O(!1,e):e.which===d.Z.RIGHT&&O(!0,e),null===x||void 0===x||x(e)},onClick:function(e){var n=O(!j,e);null===Z||void 0===Z||Z(n,e)}}),m,o.createElement("span",{className:"".concat(i,"-inner")},j?y:b))}));f.displayName="Switch";var p=f,v=t(82508),h=t(46479),m=t(91964),y=t(21631),b=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t},Z=o.forwardRef((function(e,n){var t,l=e.prefixCls,c=e.size,i=e.loading,u=e.className,d=void 0===u?"":u,f=e.disabled,Z=b(e,["prefixCls","size","loading","className","disabled"]),g=o.useContext(m.E_),x=g.getPrefixCls,C=g.direction,k=o.useContext(y.Z),w=x("switch",l),j=o.createElement("div",{className:"".concat(w,"-handle")},i&&o.createElement(v.Z,{className:"".concat(w,"-loading-icon")})),E=s()((t={},(0,r.Z)(t,"".concat(w,"-small"),"small"===(c||k)),(0,r.Z)(t,"".concat(w,"-loading"),i),(0,r.Z)(t,"".concat(w,"-rtl"),"rtl"===C),t),d);return o.createElement(h.Z,{insertExtraNode:!0},o.createElement(p,(0,a.Z)({},Z,{prefixCls:w,className:E,disabled:f||i,ref:n,loadingIcon:j})))}));Z.__ANT_SWITCH=!0,Z.displayName="Switch";var g=Z},56482:function(e,n,t){var a=t(87462),r=t(4942),o=t(45987),l=t(1413),c=t(15671),i=t(43144),s=t(60136),u=t(29388),d=t(47313),f=t(46123),p=t.n(f),v=function(e){(0,s.Z)(t,e);var n=(0,u.Z)(t);function t(e){var a;(0,c.Z)(this,t),(a=n.call(this,e)).handleChange=function(e){var n=a.props,t=n.disabled,r=n.onChange;t||("checked"in a.props||a.setState({checked:e.target.checked}),r&&r({target:(0,l.Z)((0,l.Z)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var r="checked"in e?e.checked:e.defaultChecked;return a.state={checked:r},a}return(0,i.Z)(t,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,n=this.props,t=n.prefixCls,l=n.className,c=n.style,i=n.name,s=n.id,u=n.type,f=n.disabled,v=n.readOnly,h=n.tabIndex,m=n.onClick,y=n.onFocus,b=n.onBlur,Z=n.onKeyDown,g=n.onKeyPress,x=n.onKeyUp,C=n.autoFocus,k=n.value,w=n.required,j=(0,o.Z)(n,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),E=Object.keys(j).reduce((function(e,n){return"aria-"!==n.substr(0,5)&&"data-"!==n.substr(0,5)&&"role"!==n||(e[n]=j[n]),e}),{}),O=this.state.checked,P=p()(t,l,(e={},(0,r.Z)(e,"".concat(t,"-checked"),O),(0,r.Z)(e,"".concat(t,"-disabled"),f),e));return d.createElement("span",{className:P,style:c},d.createElement("input",(0,a.Z)({name:i,id:s,type:u,required:w,readOnly:v,disabled:f,tabIndex:h,className:"".concat(t,"-input"),checked:!!O,onClick:m,onFocus:y,onBlur:b,onKeyUp:x,onKeyDown:Z,onKeyPress:g,onChange:this.handleChange,autoFocus:C,ref:this.saveInput,value:k},E)),d.createElement("span",{className:"".concat(t,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,n){return"checked"in e?(0,l.Z)((0,l.Z)({},n),{},{checked:e.checked}):null}}]),t}(d.Component);v.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}},n.Z=v}}]);