(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{1660:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(6),l=t.n(s),i=t(25),o=t.n(i),c=t(24),m=t.n(c),u=t(26),d=t.n(u),p=t(27),g=t.n(p),h=t(21),b=t.n(h),f=t(28),v=t.n(f),N=t(33),y=t(15),E=t(4),C=t(689),O=t.n(C),k=t(8),x=t.n(k),A=t(686),D=t(684),w=t(683),S=t(682),P=t(193),j=t(202);function M(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function T(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?M(Object(t),!0).forEach((function(a){l()(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):M(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}x.a.locale("nl");var q=function(e){function a(e){var t;return o()(this,a),(t=d()(this,g()(a).call(this,e))).state={mailgunDomain:{id:"",domain:"",secret:""},errors:{name:!1,maxRequestsPerMinute:!1,responsible:!1}},t.handleInputChange=t.handleInputChange.bind(b()(t)),t.handleInputChangeDate=t.handleInputChangeDate.bind(b()(t)),t.handleSubmit=t.handleSubmit.bind(b()(t)),t}return v()(a,e),m()(a,[{key:"handleInputChange",value:function(e){var a=e.target,t="checkbox"===a.type?a.checked:a.value,n=a.name;this.setState(T({},this.state,{mailgunDomain:T({},this.state.mailgunDomain,l()({},n,t))}))}},{key:"handleInputChangeDate",value:function(e,a){this.setState(T({},this.state,{mailgunDomain:T({},this.state.mailgunDomain,l()({},a,e))}))}},{key:"handleSubmit",value:function(e){var a=this;e.preventDefault();var t=this.state.mailgunDomain,n={},r=!1;O.a.isEmpty(t.domain)&&(n.domain=!0,r=!0),O.a.isEmpty(t.secret)&&(n.secret=!0,r=!0),this.setState(T({},this.state,{errors:n})),!r&&P.a.newMailgunDomain(t).then((function(e){a.props.fetchSystemData(),E.f.push("/mailgun-domein/".concat(e.data.data.id))})).catch((function(e){alert("Er is iets mis gegaan met opslaan!")}))}},{key:"render",value:function(){var e=this.state.mailgunDomain,a=e.domain,t=e.secret;e.isVerified;return r.a.createElement("form",{className:"form-horizontal",onSubmit:this.handleSubmit},r.a.createElement(S.a,null,r.a.createElement(w.a,null,r.a.createElement("div",{className:"row"},r.a.createElement(A.a,{label:"Domein",name:"domain",value:a,onChangeAction:this.handleInputChange,required:"required",error:this.state.errors.domain}),r.a.createElement(A.a,{label:"Mailgun API Key",name:"secret",value:t,onChangeAction:this.handleInputChange,required:"required",error:this.state.errors.secret}))),r.a.createElement(w.a,null,r.a.createElement("div",{className:"pull-right btn-group",role:"group"},r.a.createElement(D.a,{buttonText:"Opslaan",onClickAction:this.handleSubmit,type:"submit",value:"Submit"})))))}}]),a}(n.Component),I=Object(N.b)(null,(function(e){return Object(y.b)({fetchSystemData:j.a},e)}))(q),L=t(685),z=function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"btn-group btn-group-flex margin-small",role:"group"},r.a.createElement(L.a,{iconName:"glyphicon-arrow-left",onClickAction:E.e.goBack}))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("h4",{className:"text-center margin-small"},"Nieuw mailgun domein")),r.a.createElement("div",{className:"col-md-4"}))};a.default=function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-9"},r.a.createElement("div",{className:"col-md-12 margin-10-top"},r.a.createElement(S.a,null,r.a.createElement(w.a,{className:"panel-small"},r.a.createElement(z,null)))),r.a.createElement("div",{className:"col-md-12 margin-10-top"},r.a.createElement(I,null))),r.a.createElement("div",{className:"col-md-3"}))}},682:function(e,a,t){"use strict";var n=t(0),r=t.n(n),s=t(14),l=t.n(s),i=function(e){var a=e.children,t=e.className,n=e.onMouseEnter,s=e.onMouseLeave;return r.a.createElement("div",{className:"panel panel-default ".concat(t),onMouseEnter:n,onMouseLeave:s},a)};i.defaultProps={className:"",onMouseEnter:function(){},onMouseLeave:function(){}},i.propTypes={className:l.a.string,onMouseEnter:l.a.func,onMouseLeave:l.a.func},a.a=i},683:function(e,a,t){"use strict";var n=t(0),r=t.n(n),s=t(14),l=t.n(s),i=function(e){var a=e.className,t=e.children;return r.a.createElement("div",{className:"panel-body ".concat(a)},t)};i.defaultProps={className:""},i.propTypes={className:l.a.string},a.a=i},684:function(e,a,t){"use strict";var n=t(0),r=t.n(n),s=t(14),l=t.n(s),i=function(e){var a=e.buttonClassName,t=e.buttonText,n=e.onClickAction,s=e.type,l=e.value,i=e.loading,o=e.loadText,c=e.disabled;return i?r.a.createElement("button",{type:s,className:"btn btn-sm btn-loading ".concat(a),value:l,disabled:i},r.a.createElement("span",{className:"glyphicon glyphicon-refresh glyphicon-refresh-animate"})," ",o):r.a.createElement("button",{type:s,className:"btn btn-sm ".concat(a),onClick:n,value:l,disabled:c},t)};i.defaultProps={buttonClassName:"btn-success",type:"button",value:"",loading:!1,loadText:"Aan het laden",disabled:!1},i.propTypes={buttonClassName:l.a.string,buttonText:l.a.string.isRequired,onClickAction:l.a.func,type:l.a.string,value:l.a.string,loading:l.a.bool,loadText:l.a.string,disabled:l.a.bool},a.a=i},685:function(e,a,t){"use strict";var n=t(0),r=t.n(n),s=t(14),l=t.n(s),i=function(e){var a=e.buttonClassName,t=e.iconName,n=e.onClickAction,s=e.title,l=e.disabled;return r.a.createElement("button",{type:"button",className:"btn ".concat(a),onClick:n,disabled:l,title:s},r.a.createElement("span",{className:"glyphicon ".concat(t)}))};i.defaultProps={buttonClassName:"btn-success btn-sm",title:"",disabled:!1},i.propTypes={buttonClassName:l.a.string,iconName:l.a.string.isRequired,onClickAction:l.a.func,title:l.a.string,disabled:l.a.bool},a.a=i},686:function(e,a,t){"use strict";var n=t(0),r=t.n(n),s=t(14),l=t.n(s),i=function(e){var a=e.label,t=e.type,n=e.className,s=e.size,l=e.id,i=e.placeholder,o=e.name,c=e.value,m=e.onClickAction,u=e.onChangeAction,d=e.onBlurAction,p=e.required,g=e.readOnly,h=e.maxLength,b=e.error,f=e.min,v=e.max,N=e.step,y=e.errorMessage,E=e.divSize,C=e.divClassName,O=e.autoComplete;return r.a.createElement("div",{className:"form-group ".concat(E," ").concat(C)},r.a.createElement("label",{htmlFor:l,className:"col-sm-6 ".concat(p)},a),r.a.createElement("div",{className:"".concat(s)},r.a.createElement("input",{type:t,className:"form-control input-sm ".concat(n)+(b?"has-error":""),id:l,placeholder:i,name:o,value:c,onClick:m,onChange:u,onBlur:d,readOnly:g,maxLength:h,min:f,max:v,autoComplete:O,step:N})),b&&r.a.createElement("div",{className:"col-sm-offset-6 col-sm-6"},r.a.createElement("span",{className:"has-error-message"}," ",y)))};i.defaultProps={divClassName:"",className:"",size:"col-sm-6",divSize:"col-sm-6",name:"",type:"text",value:"",required:"",readOnly:!1,maxLength:null,error:!1,min:"",max:"",step:"",errorMessage:"",autoComplete:"off",onBlurAction:function(){},onClickAction:function(){},onChangeAction:function(){}},i.propTypes={label:l.a.oneOfType([l.a.string,l.a.object]).isRequired,type:l.a.string,className:l.a.string,divClassName:l.a.string,size:l.a.string,divSize:l.a.string,id:l.a.string,placeholder:l.a.string,name:l.a.string.isRequired,value:l.a.oneOfType([l.a.string,l.a.number]),onClickAction:l.a.func,onChangeAction:l.a.func,onBlurAction:l.a.func,required:l.a.string,readOnly:l.a.bool,maxLength:l.a.string,error:l.a.bool,min:l.a.string,max:l.a.string,step:l.a.string,errorMessage:l.a.string,autoComplete:l.a.string},a.a=i}}]);