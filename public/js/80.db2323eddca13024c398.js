(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{1602:function(e,a,t){"use strict";t.r(a);var n=t(25),r=t.n(n),o=t(24),s=t.n(o),i=t(26),l=t.n(i),c=t(27),u=t.n(c),m=t(28),d=t.n(m),p=t(0),g=t.n(p),f=t(21),h=t.n(f),v=t(6),b=t.n(v),N=t(33),y=t(4),E=t(8),C=t.n(E),q=t(189),O=t(740),A=t(688),k=t(684),z=t(686),D=t(691),I=t(729),w=t(689),R=t.n(w);function S(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function T(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?S(Object(t),!0).forEach((function(a){b()(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}C.a.locale("nl");var x=function(e){function a(e){var t;return r()(this,a),t=l()(this,u()(a).call(this,e)),b()(h()(t),"handleInputChange",(function(e){var a=e.target,n="checkbox"===a.type?a.checked:a.value,r=a.name;t.setState(T({},t.state,{quotationRequest:T({},t.state.quotationRequest,b()({},r,n))}))})),b()(h()(t),"handleSubmit",(function(e){e.preventDefault();var a=t.state.quotationRequest,n={},r=!1;R.a.isEmpty(a.statusId)&&(n.status=!0,r=!0),R.a.isEmpty(a.organisationId)&&(n.organisation=!0,r=!0),t.setState(T({},t.state,{errors:n})),!r&&q.a.newQuotationRequest(a).then((function(e){y.f.push("/offerteverzoek/".concat(e.data.id))}))})),t.state={opportunity:{fullName:"",fullAddress:"",measureName:""},organisations:[],quotationRequest:{opportunityId:"",organisationId:"",dateRecorded:"",statusId:"5",dateReleased:"",quotationText:""},errors:{organisation:!1,status:!1}},t.handleInputChangeDate=t.handleInputChangeDate.bind(h()(t)),t}return d()(a,e),s()(a,[{key:"componentWillMount",value:function(){var e=this;q.a.fetchNewQuotationRequest(this.props.opportunityId).then((function(a){e.setState({opportunity:{fullName:a.intake.contact.fullName,fullAddress:a.intake.fullAddress,measureNames:a.measures&&a.measures.map((function(e){return e.name})).join(", "),measureCategoryName:a.measureCategory.name},quotationRequest:{opportunityId:a.id,organisationId:"",dateRecorded:"",statusId:"5",dateReleased:"",quotationText:a.quotationText?a.quotationText:""}})})),O.a.getOrganisationPeek().then((function(a){e.setState({organisations:a})}))}},{key:"handleInputChangeDate",value:function(e,a){this.setState(T({},this.state,{quotationRequest:T({},this.state.quotationRequest,b()({},a,e))}))}},{key:"render",value:function(){var e=this.state.quotationRequest,a=e.organisationId,t=e.dateRecorded,n=e.statusId,r=e.dateReleased,o=e.quotationText,s=this.state.opportunity,i=s.fullName,l=s.fullAddress,c=s.measureNames,u=s.measureCategoryName;return g.a.createElement("form",{className:"form-horizontal",onSubmit:this.handleSubmit},g.a.createElement("div",{className:"row"},g.a.createElement(A.a,{label:"Organisatie",size:"col-sm-6",name:"organisationId",value:a,options:this.state.organisations,onChangeAction:this.handleInputChange,required:"required",error:this.state.errors.organisation}),g.a.createElement(z.a,{label:"Verzoek voor",name:"fullName",value:i,onChange:function(){},readOnly:!0})),g.a.createElement("div",{className:"row"},g.a.createElement(z.a,{label:"Adres voor",name:"address",value:l,onChange:function(){},readOnly:!0}),g.a.createElement(z.a,{label:"Maatregel - categorie",name:"measureCategory",value:u,onChange:function(){},readOnly:!0})),g.a.createElement("div",{className:"row"},g.a.createElement(z.a,{label:"Maatregel - specifiek",name:"measure",value:c,onChange:function(){},readOnly:!0}),g.a.createElement(D.a,{label:"Datum opname",size:"col-sm-6",name:"dateRecorded",value:t,onChangeAction:this.handleInputChangeDate})),g.a.createElement("div",{className:"row"},g.a.createElement(A.a,{label:"Offerte status",size:"col-sm-6",name:"statusId",value:n,options:this.props.quotationRequestStatus,onChangeAction:this.handleInputChange,required:"required",error:this.state.errors.status}),g.a.createElement(D.a,{label:"Offerte uitgebracht",size:"col-sm-6",name:"dateReleased",value:r,onChangeAction:this.handleInputChangeDate})),g.a.createElement("div",{className:"row"},g.a.createElement(I.a,{label:"Offerte omschrijving",name:"quotationText",value:o,onChangeAction:this.handleInputChange})),g.a.createElement("div",{className:"panel-footer"},g.a.createElement("div",{className:"pull-right btn-group",role:"group"},g.a.createElement(k.a,{buttonText:"Opslaan",onClickAction:this.handleSubmit}))))}}]),a}(p.Component),M=Object(N.b)((function(e){return{quotationRequestStatus:e.systemData.quotationRequestStatus}}),null)(x),P=t(682),B=t(683),j=function(e){return g.a.createElement("div",null,g.a.createElement(P.a,null,g.a.createElement(B.a,null,g.a.createElement(M,{opportunityId:e.opportunityId}))))},L=t(685),F=function(e){return g.a.createElement("div",{className:"row"},g.a.createElement("div",{className:"col-md-4"},g.a.createElement("div",{className:"btn-group",role:"group"},g.a.createElement(L.a,{iconName:"glyphicon-arrow-left",onClickAction:y.e.goBack}))),g.a.createElement("div",{className:"col-md-4"},g.a.createElement("h4",{className:"text-center"},"Nieuw offerteverzoek")),g.a.createElement("div",{className:"col-md-4"}))},V=function(e){function a(e){return r()(this,a),l()(this,u()(a).call(this,e))}return d()(a,e),s()(a,[{key:"render",value:function(){return g.a.createElement("div",{className:"row"},g.a.createElement("div",{className:"col-md-9"},g.a.createElement("div",{className:"col-md-12 margin-10-top"},g.a.createElement(F,null)),g.a.createElement("div",{className:"col-md-12 margin-10-top"},g.a.createElement(j,{opportunityId:this.props.params.opportunityId}))),g.a.createElement("div",{className:"col-md-3"}))}}]),a}(p.Component);a.default=V},682:function(e,a,t){"use strict";var n=t(0),r=t.n(n),o=t(14),s=t.n(o),i=function(e){var a=e.children,t=e.className,n=e.onMouseEnter,o=e.onMouseLeave;return r.a.createElement("div",{className:"panel panel-default ".concat(t),onMouseEnter:n,onMouseLeave:o},a)};i.defaultProps={className:"",onMouseEnter:function(){},onMouseLeave:function(){}},i.propTypes={className:s.a.string,onMouseEnter:s.a.func,onMouseLeave:s.a.func},a.a=i},683:function(e,a,t){"use strict";var n=t(0),r=t.n(n),o=t(14),s=t.n(o),i=function(e){var a=e.className,t=e.children;return r.a.createElement("div",{className:"panel-body ".concat(a)},t)};i.defaultProps={className:""},i.propTypes={className:s.a.string},a.a=i},684:function(e,a,t){"use strict";var n=t(0),r=t.n(n),o=t(14),s=t.n(o),i=function(e){var a=e.buttonClassName,t=e.buttonText,n=e.onClickAction,o=e.type,s=e.value,i=e.loading,l=e.loadText,c=e.disabled;return i?r.a.createElement("button",{type:o,className:"btn btn-sm btn-loading ".concat(a),value:s,disabled:i},r.a.createElement("span",{className:"glyphicon glyphicon-refresh glyphicon-refresh-animate"})," ",l):r.a.createElement("button",{type:o,className:"btn btn-sm ".concat(a),onClick:n,value:s,disabled:c},t)};i.defaultProps={buttonClassName:"btn-success",type:"button",value:"",loading:!1,loadText:"Aan het laden",disabled:!1},i.propTypes={buttonClassName:s.a.string,buttonText:s.a.string.isRequired,onClickAction:s.a.func,type:s.a.string,value:s.a.string,loading:s.a.bool,loadText:s.a.string,disabled:s.a.bool},a.a=i},685:function(e,a,t){"use strict";var n=t(0),r=t.n(n),o=t(14),s=t.n(o),i=function(e){var a=e.buttonClassName,t=e.iconName,n=e.onClickAction,o=e.title,s=e.disabled;return r.a.createElement("button",{type:"button",className:"btn ".concat(a),onClick:n,disabled:s,title:o},r.a.createElement("span",{className:"glyphicon ".concat(t)}))};i.defaultProps={buttonClassName:"btn-success btn-sm",title:"",disabled:!1},i.propTypes={buttonClassName:s.a.string,iconName:s.a.string.isRequired,onClickAction:s.a.func,title:s.a.string,disabled:s.a.bool},a.a=i},686:function(e,a,t){"use strict";var n=t(0),r=t.n(n),o=t(14),s=t.n(o),i=function(e){var a=e.label,t=e.type,n=e.className,o=e.size,s=e.id,i=e.placeholder,l=e.name,c=e.value,u=e.onClickAction,m=e.onChangeAction,d=e.onBlurAction,p=e.required,g=e.readOnly,f=e.maxLength,h=e.error,v=e.min,b=e.max,N=e.step,y=e.errorMessage,E=e.divSize,C=e.divClassName,q=e.autoComplete;return r.a.createElement("div",{className:"form-group ".concat(E," ").concat(C)},r.a.createElement("label",{htmlFor:s,className:"col-sm-6 ".concat(p)},a),r.a.createElement("div",{className:"".concat(o)},r.a.createElement("input",{type:t,className:"form-control input-sm ".concat(n)+(h?"has-error":""),id:s,placeholder:i,name:l,value:c,onClick:u,onChange:m,onBlur:d,readOnly:g,maxLength:f,min:v,max:b,autoComplete:q,step:N})),h&&r.a.createElement("div",{className:"col-sm-offset-6 col-sm-6"},r.a.createElement("span",{className:"has-error-message"}," ",y)))};i.defaultProps={divClassName:"",className:"",size:"col-sm-6",divSize:"col-sm-6",name:"",type:"text",value:"",required:"",readOnly:!1,maxLength:null,error:!1,min:"",max:"",step:"",errorMessage:"",autoComplete:"off",onBlurAction:function(){},onClickAction:function(){},onChangeAction:function(){}},i.propTypes={label:s.a.oneOfType([s.a.string,s.a.object]).isRequired,type:s.a.string,className:s.a.string,divClassName:s.a.string,size:s.a.string,divSize:s.a.string,id:s.a.string,placeholder:s.a.string,name:s.a.string.isRequired,value:s.a.oneOfType([s.a.string,s.a.number]),onClickAction:s.a.func,onChangeAction:s.a.func,onBlurAction:s.a.func,required:s.a.string,readOnly:s.a.bool,maxLength:s.a.string,error:s.a.bool,min:s.a.string,max:s.a.string,step:s.a.string,errorMessage:s.a.string,autoComplete:s.a.string},a.a=i},688:function(e,a,t){"use strict";var n=t(0),r=t.n(n),o=t(14),s=t.n(o),i=function(e){var a=e.label,t=e.className,n=e.size,o=e.id,s=e.name,i=e.value,l=e.options,c=e.onChangeAction,u=e.onBlurAction,m=e.required,d=e.error,p=e.errorMessage,g=e.optionValue,f=e.optionName,h=e.readOnly,v=e.placeholder,b=e.divClassName,N=e.emptyOption;return r.a.createElement("div",{className:"form-group ".concat(n," ").concat(b)},r.a.createElement("label",{htmlFor:o,className:"col-sm-6 ".concat(m)},a),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("select",{className:"form-control input-sm ".concat(t)+(d&&" has-error"),id:o,name:s,value:i,onChange:c,onBlur:u,readOnly:h},N&&r.a.createElement("option",{value:""},v),l.map((function(e){return r.a.createElement("option",{key:e[g],value:e[g]},e[f])})))),d&&r.a.createElement("div",{className:"col-sm-offset-6 col-sm-6"},r.a.createElement("span",{className:"has-error-message"}," ",p)))};i.defaultProps={divClassName:"",className:"",size:"col-sm-6",readOnly:!1,required:"",error:!1,errorMessage:"",value:"",optionValue:"id",optionName:"name",placeholder:"",emptyOption:!0},i.propTypes={label:s.a.string.isRequired,className:s.a.string,size:s.a.string,id:s.a.string,name:s.a.string.isRequired,options:s.a.array,value:s.a.oneOfType([s.a.string,s.a.number]),onChangeAction:s.a.func,onBlurAction:s.a.func,required:s.a.string,readOnly:s.a.bool,error:s.a.bool,errorMessage:s.a.string,emptyOption:s.a.bool,optionValue:s.a.string,optionName:s.a.string,placeholder:s.a.string},a.a=i},691:function(e,a,t){"use strict";var n=t(25),r=t.n(n),o=t(24),s=t.n(o),i=t(26),l=t.n(i),c=t(27),u=t.n(c),m=t(21),d=t.n(m),p=t(28),g=t.n(p),f=t(6),h=t.n(f),v=t(0),b=t.n(v),N=t(14),y=t.n(N),E=t(700),C=t.n(E),q=t(701),O=t.n(q),A=t(8),k=t.n(A);k.a.locale("nl");var z=function(e){function a(e){var t;return r()(this,a),t=l()(this,u()(a).call(this,e)),h()(d()(t),"validateDate",(function(e){var a=k()(e.target.value,"DD-MM-YYYY",!0),n=!1;a.isValid()||""===e.target.value||(n=!0),t.props.disabledBefore&&a.isBefore(t.props.disabledBefore)&&(n=!0),t.props.disabledAfter&&a.isAfter(t.props.disabledAfter)&&(n=!0),t.setState({errorDateFormat:n})})),h()(d()(t),"onDateChange",(function(e){var a=e?k()(e).format("Y-MM-DD"):"",n=!1;a&&t.props.disabledBefore&&k()(a).isBefore(t.props.disabledBefore)&&(n=!0),a&&t.props.disabledAfter&&k()(a).isAfter(t.props.disabledAfter)&&(n=!0),t.setState({errorDateFormat:n}),!n&&t.props.onChangeAction(a,t.props.name)})),t.state={errorDateFormat:!1},t}return g()(a,e),s()(a,[{key:"render",value:function(){var e=this.props,a=e.label,t=e.className,n=e.size,r=e.divSize,o=e.id,s=e.value,i=e.required,l=e.readOnly,c=e.name,u=e.error,m=e.errorMessage,d=e.disabledBefore,p=e.disabledAfter,g=s?k()(s).format("L"):"",f={};return d&&(f.before=new Date(d)),p&&(f.after=new Date(p)),b.a.createElement("div",{className:"form-group ".concat(r)},b.a.createElement("div",null,b.a.createElement("label",{htmlFor:o,className:"col-sm-6 ".concat(i)},a)),b.a.createElement("div",{className:"".concat(n)},b.a.createElement(C.a,{id:o,value:g,formatDate:q.formatDate,parseDate:q.parseDate,onDayChange:this.onDateChange,dayPickerProps:{showWeekNumbers:!0,locale:"nl",firstDayOfWeek:1,localeUtils:O.a,disabledDays:f},inputProps:{className:"form-control input-sm ".concat(t)+(this.state.errorDateFormat||u?" has-error":""),name:c,onBlur:this.validateDate,autoComplete:"off",readOnly:l,disabled:l},required:i,readOnly:l,placeholder:""})),u&&b.a.createElement("div",{className:"col-sm-offset-6 col-sm-6"},b.a.createElement("span",{className:"has-error-message"}," ",m)))}}]),a}(v.Component);z.defaultProps={className:"",size:"col-sm-6",divSize:"col-sm-6",required:"",readOnly:!1,value:null,error:!1,errorMessage:"",disabledBefore:null,disabledAfter:null},z.propTypes={label:y.a.string.isRequired,type:y.a.string,className:y.a.string,size:y.a.string,divSize:y.a.string,id:y.a.string,name:y.a.string,value:y.a.oneOfType([y.a.string,y.a.object]),onChangeAction:y.a.func,required:y.a.string,readOnly:y.a.bool,error:y.a.bool,errorMessage:y.a.string,disabledBefore:y.a.string,disabledAfter:y.a.string},a.a=z},729:function(e,a,t){"use strict";var n=t(0),r=t.n(n),o=t(14),s=t.n(o),i=function(e){var a=e.label,t=e.size,n=e.sizeLabel,o=e.sizeInput,s=e.id,i=e.name,l=e.value,c=e.onChangeAction,u=e.required,m=e.error,d=e.rows;return r.a.createElement("div",{className:"form-group ".concat(t)},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:n},r.a.createElement("label",{htmlFor:s,className:"col-sm-12 ".concat(u)},a)),r.a.createElement("div",{className:o},r.a.createElement("textarea",{name:i,value:l,onChange:c,className:"form-control input-sm "+(m?"has-error":""),rows:d}))))};i.defaultProps={size:"col-sm-12",sizeLabel:"col-sm-3",sizeInput:"col-sm-9",value:"",required:"",error:!1,rows:"5"},i.propTypes={label:s.a.string.isRequired,type:s.a.string,size:s.a.string,sizeLabel:s.a.string,sizeInput:s.a.string,id:s.a.string,name:s.a.string.isRequired,value:s.a.oneOfType([s.a.string,s.a.number]),onChangeAction:s.a.func,required:s.a.string,error:s.a.bool},a.a=i},740:function(e,a,t){"use strict";var n=t(2),r=t.n(n),o="".concat(URL_API,"/api/organisation");a.a={newOrganisation:function(e){var a="".concat(o),t="Bearer "+localStorage.getItem("access_token");return r.a.defaults.headers.common.Authorization=t,r.a.post(a,e).then((function(e){return e.data.data})).catch((function(e){console.log(e)}))},updateOrganisation:function(e){var a="".concat(o,"/").concat(e.id),t="Bearer "+localStorage.getItem("access_token");return r.a.defaults.headers.common.Authorization=t,r.a.post(a,e)},getOrganisationPeek:function(){var e="".concat(o,"/peek"),a="Bearer "+localStorage.getItem("access_token");return r.a.defaults.headers.common.Authorization=a,r.a.get(e).then((function(e){return e.data.data})).catch((function(e){console.log(e)}))}}}}]);