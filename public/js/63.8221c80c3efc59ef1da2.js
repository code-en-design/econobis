(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{1651:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(6),o=t.n(s),l=t(25),i=t.n(l),c=t(24),u=t.n(c),m=t(26),d=t.n(m),p=t(27),f=t.n(p),b=t(21),g=t.n(b),v=t(28),h=t.n(v),y=t(33),E=t(4),N=t(688),C=t.n(N),w=t(976),A=t.n(w),O=t(8),D=t.n(O),k=t(685),q=t(683),x=t(682),S=t(681),M=t(193),P=t(741),T=t(690);function z(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function I(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?z(Object(t),!0).forEach((function(a){o()(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):z(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}D.a.locale("nl");var B=function(e){function a(e){var t;return i()(this,a),(t=d()(this,f()(a).call(this,e))).state={webform:{id:"",name:"",apiKey:A()(),maxRequestsPerMinute:"",dateStart:"",dateEnd:"",responsible:""},errors:{name:!1,maxRequestsPerMinute:!1,responsible:!1}},t.handleInputChange=t.handleInputChange.bind(g()(t)),t.handleInputChangeDate=t.handleInputChangeDate.bind(g()(t)),t.handleSubmit=t.handleSubmit.bind(g()(t)),t}return h()(a,e),u()(a,[{key:"handleInputChange",value:function(e){var a=e.target,t="checkbox"===a.type?a.checked:a.value,n=a.name;this.setState(I({},this.state,{webform:I({},this.state.webform,o()({},n,t))}))}},{key:"handleInputChangeDate",value:function(e,a){this.setState(I({},this.state,{webform:I({},this.state.webform,o()({},a,e))}))}},{key:"handleSubmit",value:function(e){e.preventDefault();var a=this.state.webform,t={},n=!1;C.a.isEmpty(a.name)&&(t.name=!0,n=!0),C.a.isEmpty(a.maxRequestsPerMinute)&&(t.maxRequestsPerMinute=!0,n=!0),C.a.isEmpty(a.responsible)&&(t.responsible=!0,n=!0),a.responsible.search("user")>=0&&(a.responsibleUserId=a.responsible.replace("user",""),a.responsibleTeamId=""),a.responsible.search("team")>=0&&(a.responsibleUserId="",a.responsibleTeamId=a.responsible.replace("team","")),this.setState(I({},this.state,{errors:t})),!n&&M.a.newWebform(a).then((function(e){E.f.push("/webformulier/".concat(e.data.data.id))})).catch((function(e){console.log(e),alert("Er is iets mis gegaan met opslaan!")}))}},{key:"render",value:function(){var e=this.state.webform,a=e.name,t=e.apiKey,n=e.maxRequestsPerMinute,s=e.dateStart,o=e.dateEnd,l=e.responsible;return r.a.createElement("form",{className:"form-horizontal",onSubmit:this.handleSubmit},r.a.createElement(S.a,null,r.a.createElement(x.a,null,r.a.createElement("div",{className:"row"},r.a.createElement(k.a,{label:"Naam",name:"name",value:a,onChangeAction:this.handleInputChange,required:"required",error:this.state.errors.name}),r.a.createElement(k.a,{label:"Sleutel",name:"apiKey",value:t,onChangeAction:this.handleInputChange,readOnly:!0})),r.a.createElement("div",{className:"row"},r.a.createElement(k.a,{label:"Aanvragen per minuut",type:"number",name:"maxRequestsPerMinute",value:n,onChangeAction:this.handleInputChange,required:"required",error:this.state.errors.maxRequestsPerMinute}),r.a.createElement(k.a,{label:"Datum sleutel",name:"apiKeyDate",value:D()().format("L"),onChangeAction:function(){},readOnly:!0})),r.a.createElement("div",{className:"row"},r.a.createElement(T.a,{label:"Startdatum",name:"dateStart",value:s,onChangeAction:this.handleInputChangeDate}),r.a.createElement(T.a,{label:"Einddatum",name:"dateEnd",value:o,onChangeAction:this.handleInputChangeDate})),r.a.createElement("div",{className:"row"},r.a.createElement(P.a,{label:"Verantwoordelijke",size:"col-sm-6",name:"responsible",optionsInGroups:[{name:"user",label:"Gebruikers",options:this.props.users,optionName:"fullName"},{name:"team",label:"Team",options:this.props.teams}],value:l,onChangeAction:this.handleInputChange,required:"required",error:this.state.errors.responsible}))),r.a.createElement(x.a,null,r.a.createElement("div",{className:"pull-right btn-group",role:"group"},r.a.createElement(q.a,{buttonText:"Opslaan",onClickAction:this.handleSubmit,type:"submit",value:"Submit"})))))}}]),a}(n.Component),R=Object(y.b)((function(e){return{teams:e.systemData.teams,users:e.systemData.users}}),null)(B),j=t(684),L=function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"btn-group btn-group-flex margin-small",role:"group"},r.a.createElement(j.a,{iconName:"glyphicon-arrow-left",onClickAction:E.e.goBack}))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("h4",{className:"text-center margin-small"},"Nieuw webformulier")),r.a.createElement("div",{className:"col-md-4"}))};a.default=function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-9"},r.a.createElement("div",{className:"col-md-12 margin-10-top"},r.a.createElement(S.a,null,r.a.createElement(x.a,{className:"panel-small"},r.a.createElement(L,null)))),r.a.createElement("div",{className:"col-md-12 margin-10-top"},r.a.createElement(R,null))),r.a.createElement("div",{className:"col-md-3"}))}},681:function(e,a,t){"use strict";var n=t(0),r=t.n(n),s=t(14),o=t.n(s),l=function(e){var a=e.children,t=e.className,n=e.onMouseEnter,s=e.onMouseLeave;return r.a.createElement("div",{className:"panel panel-default ".concat(t),onMouseEnter:n,onMouseLeave:s},a)};l.defaultProps={className:"",onMouseEnter:function(){},onMouseLeave:function(){}},l.propTypes={className:o.a.string,onMouseEnter:o.a.func,onMouseLeave:o.a.func},a.a=l},682:function(e,a,t){"use strict";var n=t(0),r=t.n(n),s=t(14),o=t.n(s),l=function(e){var a=e.className,t=e.children;return r.a.createElement("div",{className:"panel-body ".concat(a)},t)};l.defaultProps={className:""},l.propTypes={className:o.a.string},a.a=l},683:function(e,a,t){"use strict";var n=t(0),r=t.n(n),s=t(14),o=t.n(s),l=function(e){var a=e.buttonClassName,t=e.buttonText,n=e.onClickAction,s=e.type,o=e.value,l=e.loading,i=e.loadText,c=e.disabled;return l?r.a.createElement("button",{type:s,className:"btn btn-sm btn-loading ".concat(a),value:o,disabled:l},r.a.createElement("span",{className:"glyphicon glyphicon-refresh glyphicon-refresh-animate"})," ",i):r.a.createElement("button",{type:s,className:"btn btn-sm ".concat(a),onClick:n,value:o,disabled:c},t)};l.defaultProps={buttonClassName:"btn-success",type:"button",value:"",loading:!1,loadText:"Aan het laden",disabled:!1},l.propTypes={buttonClassName:o.a.string,buttonText:o.a.string.isRequired,onClickAction:o.a.func,type:o.a.string,value:o.a.string,loading:o.a.bool,loadText:o.a.string,disabled:o.a.bool},a.a=l},684:function(e,a,t){"use strict";var n=t(0),r=t.n(n),s=t(14),o=t.n(s),l=function(e){var a=e.buttonClassName,t=e.iconName,n=e.onClickAction,s=e.title,o=e.disabled;return r.a.createElement("button",{type:"button",className:"btn ".concat(a),onClick:n,disabled:o,title:s},r.a.createElement("span",{className:"glyphicon ".concat(t)}))};l.defaultProps={buttonClassName:"btn-success btn-sm",title:"",disabled:!1},l.propTypes={buttonClassName:o.a.string,iconName:o.a.string.isRequired,onClickAction:o.a.func,title:o.a.string,disabled:o.a.bool},a.a=l},685:function(e,a,t){"use strict";var n=t(0),r=t.n(n),s=t(14),o=t.n(s),l=function(e){var a=e.label,t=e.type,n=e.className,s=e.size,o=e.id,l=e.placeholder,i=e.name,c=e.value,u=e.onClickAction,m=e.onChangeAction,d=e.onBlurAction,p=e.required,f=e.readOnly,b=e.maxLength,g=e.error,v=e.min,h=e.max,y=e.step,E=e.errorMessage,N=e.divSize,C=e.divClassName,w=e.autoComplete;return r.a.createElement("div",{className:"form-group ".concat(N," ").concat(C)},r.a.createElement("label",{htmlFor:o,className:"col-sm-6 ".concat(p)},a),r.a.createElement("div",{className:"".concat(s)},r.a.createElement("input",{type:t,className:"form-control input-sm ".concat(n)+(g?"has-error":""),id:o,placeholder:l,name:i,value:c,onClick:u,onChange:m,onBlur:d,readOnly:f,maxLength:b,min:v,max:h,autoComplete:w,step:y})),g&&r.a.createElement("div",{className:"col-sm-offset-6 col-sm-6"},r.a.createElement("span",{className:"has-error-message"}," ",E)))};l.defaultProps={divClassName:"",className:"",size:"col-sm-6",divSize:"col-sm-6",name:"",type:"text",value:"",required:"",readOnly:!1,maxLength:null,error:!1,min:"",max:"",step:"",errorMessage:"",autoComplete:"off",onBlurAction:function(){},onClickAction:function(){},onChangeAction:function(){}},l.propTypes={label:o.a.oneOfType([o.a.string,o.a.object]).isRequired,type:o.a.string,className:o.a.string,divClassName:o.a.string,size:o.a.string,divSize:o.a.string,id:o.a.string,placeholder:o.a.string,name:o.a.string.isRequired,value:o.a.oneOfType([o.a.string,o.a.number]),onClickAction:o.a.func,onChangeAction:o.a.func,onBlurAction:o.a.func,required:o.a.string,readOnly:o.a.bool,maxLength:o.a.string,error:o.a.bool,min:o.a.string,max:o.a.string,step:o.a.string,errorMessage:o.a.string,autoComplete:o.a.string},a.a=l},690:function(e,a,t){"use strict";var n=t(25),r=t.n(n),s=t(24),o=t.n(s),l=t(26),i=t.n(l),c=t(27),u=t.n(c),m=t(21),d=t.n(m),p=t(28),f=t.n(p),b=t(6),g=t.n(b),v=t(0),h=t.n(v),y=t(14),E=t.n(y),N=t(702),C=t.n(N),w=t(703),A=t.n(w),O=t(8),D=t.n(O);D.a.locale("nl");var k=function(e){function a(e){var t;return r()(this,a),t=i()(this,u()(a).call(this,e)),g()(d()(t),"validateDate",(function(e){var a=D()(e.target.value,"DD-MM-YYYY",!0),n=!1;a.isValid()||""===e.target.value||(n=!0),t.props.disabledBefore&&a.isBefore(t.props.disabledBefore)&&(n=!0),t.props.disabledAfter&&a.isAfter(t.props.disabledAfter)&&(n=!0),t.setState({errorDateFormat:n})})),g()(d()(t),"onDateChange",(function(e){var a=e?D()(e).format("Y-MM-DD"):"",n=!1;a&&t.props.disabledBefore&&D()(a).isBefore(t.props.disabledBefore)&&(n=!0),a&&t.props.disabledAfter&&D()(a).isAfter(t.props.disabledAfter)&&(n=!0),t.setState({errorDateFormat:n}),!n&&t.props.onChangeAction(a,t.props.name)})),t.state={errorDateFormat:!1},t}return f()(a,e),o()(a,[{key:"render",value:function(){var e=this.props,a=e.label,t=e.className,n=e.size,r=e.divSize,s=e.id,o=e.value,l=e.required,i=e.readOnly,c=e.name,u=e.error,m=e.errorMessage,d=e.disabledBefore,p=e.disabledAfter,f=o?D()(o).format("L"):"",b={};return d&&(b.before=new Date(d)),p&&(b.after=new Date(p)),h.a.createElement("div",{className:"form-group ".concat(r)},h.a.createElement("div",null,h.a.createElement("label",{htmlFor:s,className:"col-sm-6 ".concat(l)},a)),h.a.createElement("div",{className:"".concat(n)},h.a.createElement(C.a,{id:s,value:f,formatDate:w.formatDate,parseDate:w.parseDate,onDayChange:this.onDateChange,dayPickerProps:{showWeekNumbers:!0,locale:"nl",firstDayOfWeek:1,localeUtils:A.a,disabledDays:b},inputProps:{className:"form-control input-sm ".concat(t)+(this.state.errorDateFormat||u?" has-error":""),name:c,onBlur:this.validateDate,autoComplete:"off",readOnly:i,disabled:i},required:l,readOnly:i,placeholder:""})),u&&h.a.createElement("div",{className:"col-sm-offset-6 col-sm-6"},h.a.createElement("span",{className:"has-error-message"}," ",m)))}}]),a}(v.Component);k.defaultProps={className:"",size:"col-sm-6",divSize:"col-sm-6",required:"",readOnly:!1,value:null,error:!1,errorMessage:"",disabledBefore:null,disabledAfter:null},k.propTypes={label:E.a.string.isRequired,type:E.a.string,className:E.a.string,size:E.a.string,divSize:E.a.string,id:E.a.string,name:E.a.string,value:E.a.oneOfType([E.a.string,E.a.object]),onChangeAction:E.a.func,required:E.a.string,readOnly:E.a.bool,error:E.a.bool,errorMessage:E.a.string,disabledBefore:E.a.string,disabledAfter:E.a.string},a.a=k},741:function(e,a,t){"use strict";var n=t(0),r=t.n(n),s=t(14),o=t.n(s),l=function(e){var a=e.label,t=e.className,n=e.size,s=e.divSize,o=e.id,l=e.name,i=e.value,c=e.optionsInGroups,u=e.onChangeAction,m=e.onBlurAction,d=e.required,p=e.error,f=e.readOnly;return r.a.createElement("div",{className:"form-group ".concat(s)},r.a.createElement("label",{htmlFor:o,className:"col-sm-6 ".concat(d)},a),r.a.createElement("div",{className:"".concat(n)},r.a.createElement("select",{className:"form-control input-sm ".concat(t)+(p&&" has-error"),id:o,name:l,value:i,onChange:u,onBlur:m,readOnly:f},r.a.createElement("option",{value:""}),c.map((function(e,a){var t=e.optionName||"name";return r.a.createElement("optgroup",{key:a,label:e.label},e.options.map((function(a){return r.a.createElement("option",{key:a.id,value:e.name+a.id},a[t])})))})))))};l.defaultProps={className:"",size:"col-sm-6",divSize:"col-sm-6",readOnly:!1,required:"",error:!1,value:""},l.propTypes={label:o.a.string.isRequired,className:o.a.string,size:o.a.string,divSize:o.a.string,id:o.a.string,name:o.a.string.isRequired,optionsInGroups:o.a.array,value:o.a.oneOfType([o.a.string,o.a.number]),onChangeAction:o.a.func,onBlurAction:o.a.func,required:o.a.string,readOnly:o.a.bool,error:o.a.bool,optionName:o.a.string},a.a=l},845:function(e,a){var t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(t){var n=new Uint8Array(16);e.exports=function(){return t(n),n}}else{var r=new Array(16);e.exports=function(){for(var e,a=0;a<16;a++)0==(3&a)&&(e=4294967296*Math.random()),r[a]=e>>>((3&a)<<3)&255;return r}}},846:function(e,a){for(var t=[],n=0;n<256;++n)t[n]=(n+256).toString(16).substr(1);e.exports=function(e,a){var n=a||0,r=t;return[r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]]].join("")}},976:function(e,a,t){var n=t(977),r=t(978),s=r;s.v1=n,s.v4=r,e.exports=s},977:function(e,a,t){var n,r,s=t(845),o=t(846),l=0,i=0;e.exports=function(e,a,t){var c=a&&t||0,u=a||[],m=(e=e||{}).node||n,d=void 0!==e.clockseq?e.clockseq:r;if(null==m||null==d){var p=s();null==m&&(m=n=[1|p[0],p[1],p[2],p[3],p[4],p[5]]),null==d&&(d=r=16383&(p[6]<<8|p[7]))}var f=void 0!==e.msecs?e.msecs:(new Date).getTime(),b=void 0!==e.nsecs?e.nsecs:i+1,g=f-l+(b-i)/1e4;if(g<0&&void 0===e.clockseq&&(d=d+1&16383),(g<0||f>l)&&void 0===e.nsecs&&(b=0),b>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");l=f,i=b,r=d;var v=(1e4*(268435455&(f+=122192928e5))+b)%4294967296;u[c++]=v>>>24&255,u[c++]=v>>>16&255,u[c++]=v>>>8&255,u[c++]=255&v;var h=f/4294967296*1e4&268435455;u[c++]=h>>>8&255,u[c++]=255&h,u[c++]=h>>>24&15|16,u[c++]=h>>>16&255,u[c++]=d>>>8|128,u[c++]=255&d;for(var y=0;y<6;++y)u[c+y]=m[y];return a||o(u)}},978:function(e,a,t){var n=t(845),r=t(846);e.exports=function(e,a,t){var s=a&&t||0;"string"==typeof e&&(a="binary"===e?new Array(16):null,e=null);var o=(e=e||{}).random||(e.rng||n)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,a)for(var l=0;l<16;++l)a[s+l]=o[l];return a||r(o)}}}]);