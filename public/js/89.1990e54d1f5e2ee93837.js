(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{1610:function(e,t,a){"use strict";a.r(t);var n=a(25),r=a.n(n),s=a(24),o=a.n(s),i=a(26),l=a.n(i),c=a(27),d=a.n(c),u=a(21),m=a.n(u),p=a(28),v=a.n(p),f=a(6),h=a.n(f),g=a(0),b=a.n(g),E=a(4),y=a(685),C=function(e){var t=e.description;return b.a.createElement("div",{className:"row"},b.a.createElement("div",{className:"col-md-4"},b.a.createElement("div",{className:"btn-group btn-group-flex margin-small",role:"group"},b.a.createElement(y.a,{iconName:"glyphicon-arrow-left",onClickAction:E.e.goBack}))),b.a.createElement("div",{className:"col-md-4"},b.a.createElement("h4",{className:"text-center"},"BTW code: ",t)),b.a.createElement("div",{className:"col-md-4"}))},N=a(198),D=a(197),w=a.n(D),O=a(33),S=a(689),k=a.n(S),j=a(8),T=a.n(j),A=a(686),P=a(684),L=a(682),M=a(683),q=a(820),x=a(691),B=a(15),z=a(202);function V(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function F(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?V(Object(a),!0).forEach((function(t){h()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):V(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}T.a.locale("nl");var I=function(e){function t(e){var a;return r()(this,t),a=l()(this,d()(t).call(this,e)),h()(m()(a),"handleInputChange",(function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,r=t.name;a.setState(F({},a.state,{vatCode:F({},a.state.vatCode,h()({},r,n))}))})),h()(m()(a),"handleInputChangeDate",(function(e,t){a.setState(F({},a.state,{vatCode:F({},a.state.vatCode,h()({},t,e))}))})),h()(m()(a),"handleSubmit",(function(e){e.preventDefault();var t=a.state.vatCode,n={},r=!1;k.a.isEmpty(t.startDate)&&(n.startDate=!0,r=!0),k.a.isEmpty(t.description)&&(n.description=!0,r=!0),k.a.isEmpty(t.percentage.toString())&&(n.percentage=!0,r=!0),a.setState(F({},a.state,{errors:n})),!r&&q.a.updateVatCode(t).then((function(e){a.props.updateState(t),a.props.fetchSystemData(),a.props.switchToView()})).catch((function(e){alert("Er is iets misgegaan bij opslaan. Herlaad de pagina en probeer het nogmaals.")}))})),a.state={vatCode:F({},e.vatCode),errors:{startDate:!1,description:!1,percentage:!1}},a}return v()(t,e),o()(t,[{key:"render",value:function(){var e=this.state.vatCode,t=e.startDate,a=e.description,n=e.percentage,r=e.twinfieldCode,s=e.twinfieldLedgerCode;return b.a.createElement("form",{className:"form-horizontal",onSubmit:this.handleSubmit},b.a.createElement(L.a,null,b.a.createElement(M.a,null,b.a.createElement("div",{className:"row"},b.a.createElement(x.a,{label:"Startdatum",name:"startDate",value:t,onChangeAction:this.handleInputChangeDate,required:"required",error:this.state.errors.startDate}),b.a.createElement(A.a,{label:"Omschrijving",name:"description",value:a,onChangeAction:this.handleInputChange,required:"required",error:this.state.errors.description})),b.a.createElement("div",{className:"row"},b.a.createElement(A.a,{type:"number",label:"Percentage",name:"percentage",value:n,onChangeAction:this.handleInputChange,required:"required",error:this.state.errors.percentage}),b.a.createElement(A.a,{label:"Twinfield code",name:"twinfieldCode",value:r,onChangeAction:this.handleInputChange})),b.a.createElement("div",{className:"row"},b.a.createElement(A.a,{label:"Twinfield grootboek code",name:"twinfieldLedgerCode",value:s,onChangeAction:this.handleInputChange}))),b.a.createElement(M.a,null,b.a.createElement("div",{className:"pull-right btn-group",role:"group"},b.a.createElement(P.a,{buttonClassName:"btn-default",buttonText:"Sluiten",onClickAction:this.props.switchToView}),b.a.createElement(P.a,{buttonText:"Opslaan",type:"submit",value:"Submit"})))))}}]),t}(g.Component),R=Object(O.b)(null,(function(e){return Object(B.b)({fetchSystemData:z.a},e)}))(I),Y=a(687),W=function(e){var t=e.startDate,a=e.description,n=e.percentage,r=e.twinfieldCode,s=e.twinfieldLedgerCode,o=e.switchToEdit;return b.a.createElement("div",{onClick:o},b.a.createElement(L.a,null,b.a.createElement(M.a,null,b.a.createElement("div",{className:"row"},b.a.createElement(Y.a,{label:"Startdatum",value:t&&T()(t).format("L")}),b.a.createElement(Y.a,{label:"Omschrijving",value:a})),b.a.createElement("div",{className:"row"},b.a.createElement(Y.a,{label:"Percentage",value:"".concat(n,"%")}),b.a.createElement(Y.a,{label:"Twinfield code",value:r})),b.a.createElement("div",{className:"row"},b.a.createElement(Y.a,{label:"Twinfield grootboek code",value:s})))))},J=function(e){function t(e){var a;return r()(this,t),a=l()(this,d()(t).call(this,e)),h()(m()(a),"switchToEdit",(function(){a.setState({})})),h()(m()(a),"switchToView",(function(){a.setState({showEdit:!1,activeDiv:""})})),a.state={showEdit:!1,activeDiv:""},a}return v()(t,e),o()(t,[{key:"onDivEnter",value:function(){this.setState({activeDiv:"panel-grey"})}},{key:"onDivLeave",value:function(){this.state.showEdit||this.setState({activeDiv:""})}},{key:"render",value:function(){var e=this,t=this.props.meDetails.permissions,a=void 0===t?{}:t;return b.a.createElement("div",{className:this.state.activeDiv,onMouseEnter:function(){return e.onDivEnter()},onMouseLeave:function(){return e.onDivLeave()}},this.state.showEdit&&a.manageFinancial?b.a.createElement(R,{vatCode:this.props.vatCode,switchToView:this.switchToView,updateState:this.props.updateState}):b.a.createElement(W,w()({},this.props.vatCode,{switchToEdit:this.switchToEdit})))}}]),t}(g.Component),G=Object(O.b)((function(e){return{meDetails:e.meDetails,permissions:e.meDetails.permissions}}))(J),H=function(e){var t=e.vatCode,a=e.hasError,n=e.isLoading,r=e.updateState,s="",o=!0;return a?s="Fout bij het ophalen van BTW code.":n?s="Gegevens aan het laden.":Object(N.isEmpty)(t)?s="Geen BTW code gevonden!":o=!1,o?b.a.createElement("div",null,s):b.a.createElement("div",null,b.a.createElement(G,{vatCode:t,updateState:r}))};function U(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function K(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?U(Object(a),!0).forEach((function(t){h()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):U(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Q=function(e){function t(e){var a;return r()(this,t),a=l()(this,d()(t).call(this,e)),h()(m()(a),"callFetchVatCodeDetails",(function(){a.setState({isLoading:!0,hasError:!1}),q.a.fetchVatCodeDetails(a.props.params.id).then((function(e){a.setState({isLoading:!1,vatCode:K({},e.data.data,{startDate:e.data.data.startDate?T()(e.data.data.startDate).format("Y-MM-DD"):""})})})).catch((function(e){a.setState({isLoading:!1,hasError:!0})}))})),h()(m()(a),"updateState",(function(e){a.setState({vatCode:e})})),a.state={vatCode:{},isLoading:!1,hasError:!1},a}return v()(t,e),o()(t,[{key:"componentDidMount",value:function(){this.callFetchVatCodeDetails()}},{key:"render",value:function(){return b.a.createElement("div",{className:"row"},b.a.createElement("div",{className:"col-md-9"},b.a.createElement("div",{className:"col-md-12 margin-10-top"},b.a.createElement(L.a,null,b.a.createElement(M.a,{className:"panel-small"},b.a.createElement(C,{description:this.state.vatCode.description||""})))),b.a.createElement("div",{className:"col-md-12 margin-10-top"},b.a.createElement(H,{vatCode:this.state.vatCode,isLoading:this.state.isLoading,hasError:this.state.hasError,updateState:this.updateState}))),b.a.createElement("div",{className:"col-md-3"}))}}]),t}(g.Component);t.default=Q},682:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(14),o=a.n(s),i=function(e){var t=e.children,a=e.className,n=e.onMouseEnter,s=e.onMouseLeave;return r.a.createElement("div",{className:"panel panel-default ".concat(a),onMouseEnter:n,onMouseLeave:s},t)};i.defaultProps={className:"",onMouseEnter:function(){},onMouseLeave:function(){}},i.propTypes={className:o.a.string,onMouseEnter:o.a.func,onMouseLeave:o.a.func},t.a=i},683:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(14),o=a.n(s),i=function(e){var t=e.className,a=e.children;return r.a.createElement("div",{className:"panel-body ".concat(t)},a)};i.defaultProps={className:""},i.propTypes={className:o.a.string},t.a=i},684:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(14),o=a.n(s),i=function(e){var t=e.buttonClassName,a=e.buttonText,n=e.onClickAction,s=e.type,o=e.value,i=e.loading,l=e.loadText,c=e.disabled;return i?r.a.createElement("button",{type:s,className:"btn btn-sm btn-loading ".concat(t),value:o,disabled:i},r.a.createElement("span",{className:"glyphicon glyphicon-refresh glyphicon-refresh-animate"})," ",l):r.a.createElement("button",{type:s,className:"btn btn-sm ".concat(t),onClick:n,value:o,disabled:c},a)};i.defaultProps={buttonClassName:"btn-success",type:"button",value:"",loading:!1,loadText:"Aan het laden",disabled:!1},i.propTypes={buttonClassName:o.a.string,buttonText:o.a.string.isRequired,onClickAction:o.a.func,type:o.a.string,value:o.a.string,loading:o.a.bool,loadText:o.a.string,disabled:o.a.bool},t.a=i},685:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(14),o=a.n(s),i=function(e){var t=e.buttonClassName,a=e.iconName,n=e.onClickAction,s=e.title,o=e.disabled;return r.a.createElement("button",{type:"button",className:"btn ".concat(t),onClick:n,disabled:o,title:s},r.a.createElement("span",{className:"glyphicon ".concat(a)}))};i.defaultProps={buttonClassName:"btn-success btn-sm",title:"",disabled:!1},i.propTypes={buttonClassName:o.a.string,iconName:o.a.string.isRequired,onClickAction:o.a.func,title:o.a.string,disabled:o.a.bool},t.a=i},686:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(14),o=a.n(s),i=function(e){var t=e.label,a=e.type,n=e.className,s=e.size,o=e.id,i=e.placeholder,l=e.name,c=e.value,d=e.onClickAction,u=e.onChangeAction,m=e.onBlurAction,p=e.required,v=e.readOnly,f=e.maxLength,h=e.error,g=e.min,b=e.max,E=e.step,y=e.errorMessage,C=e.divSize,N=e.divClassName,D=e.autoComplete;return r.a.createElement("div",{className:"form-group ".concat(C," ").concat(N)},r.a.createElement("label",{htmlFor:o,className:"col-sm-6 ".concat(p)},t),r.a.createElement("div",{className:"".concat(s)},r.a.createElement("input",{type:a,className:"form-control input-sm ".concat(n)+(h?"has-error":""),id:o,placeholder:i,name:l,value:c,onClick:d,onChange:u,onBlur:m,readOnly:v,maxLength:f,min:g,max:b,autoComplete:D,step:E})),h&&r.a.createElement("div",{className:"col-sm-offset-6 col-sm-6"},r.a.createElement("span",{className:"has-error-message"}," ",y)))};i.defaultProps={divClassName:"",className:"",size:"col-sm-6",divSize:"col-sm-6",name:"",type:"text",value:"",required:"",readOnly:!1,maxLength:null,error:!1,min:"",max:"",step:"",errorMessage:"",autoComplete:"off",onBlurAction:function(){},onClickAction:function(){},onChangeAction:function(){}},i.propTypes={label:o.a.oneOfType([o.a.string,o.a.object]).isRequired,type:o.a.string,className:o.a.string,divClassName:o.a.string,size:o.a.string,divSize:o.a.string,id:o.a.string,placeholder:o.a.string,name:o.a.string.isRequired,value:o.a.oneOfType([o.a.string,o.a.number]),onClickAction:o.a.func,onChangeAction:o.a.func,onBlurAction:o.a.func,required:o.a.string,readOnly:o.a.bool,maxLength:o.a.string,error:o.a.bool,min:o.a.string,max:o.a.string,step:o.a.string,errorMessage:o.a.string,autoComplete:o.a.string},t.a=i},687:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(4),o=a(14),i=a.n(o),l=function(e){var t=e.label,a=e.className,n=e.id,o=e.value,i=e.link,l=e.hidden;return i.length>0?r.a.createElement("div",{className:a,style:l?{display:"none"}:{}},r.a.createElement("label",{htmlFor:n,className:"col-sm-6"},t),r.a.createElement("div",{className:"col-sm-6",id:n,onClick:null},r.a.createElement(s.b,{to:i,className:"link-underline"},o))):r.a.createElement("div",{className:a,style:l?{display:"none"}:{}},r.a.createElement("label",{htmlFor:n,className:"col-sm-6"},t),r.a.createElement("div",{className:"col-sm-6",id:n},o))};l.defaultProps={className:"col-sm-6",value:"",link:"",hidden:!1},l.propTypes={label:i.a.oneOfType([i.a.string,i.a.object]).isRequired,className:i.a.string,id:i.a.string,value:i.a.oneOfType([i.a.string,i.a.number]),link:i.a.string,hidden:i.a.bool},t.a=l},691:function(e,t,a){"use strict";var n=a(25),r=a.n(n),s=a(24),o=a.n(s),i=a(26),l=a.n(i),c=a(27),d=a.n(c),u=a(21),m=a.n(u),p=a(28),v=a.n(p),f=a(6),h=a.n(f),g=a(0),b=a.n(g),E=a(14),y=a.n(E),C=a(703),N=a.n(C),D=a(704),w=a.n(D),O=a(8),S=a.n(O);S.a.locale("nl");var k=function(e){function t(e){var a;return r()(this,t),a=l()(this,d()(t).call(this,e)),h()(m()(a),"validateDate",(function(e){var t=S()(e.target.value,"DD-MM-YYYY",!0),n=!1;t.isValid()||""===e.target.value||(n=!0),a.props.disabledBefore&&t.isBefore(a.props.disabledBefore)&&(n=!0),a.props.disabledAfter&&t.isAfter(a.props.disabledAfter)&&(n=!0),a.setState({errorDateFormat:n})})),h()(m()(a),"onDateChange",(function(e){var t=e?S()(e).format("Y-MM-DD"):"",n=!1;t&&a.props.disabledBefore&&S()(t).isBefore(a.props.disabledBefore)&&(n=!0),t&&a.props.disabledAfter&&S()(t).isAfter(a.props.disabledAfter)&&(n=!0),a.setState({errorDateFormat:n}),!n&&a.props.onChangeAction(t,a.props.name)})),a.state={errorDateFormat:!1},a}return v()(t,e),o()(t,[{key:"render",value:function(){var e=this.props,t=e.label,a=e.className,n=e.size,r=e.divSize,s=e.id,o=e.value,i=e.required,l=e.readOnly,c=e.name,d=e.error,u=e.errorMessage,m=e.disabledBefore,p=e.disabledAfter,v=o?S()(o).format("L"):"",f={};return m&&(f.before=new Date(m)),p&&(f.after=new Date(p)),b.a.createElement("div",{className:"form-group ".concat(r)},b.a.createElement("div",null,b.a.createElement("label",{htmlFor:s,className:"col-sm-6 ".concat(i)},t)),b.a.createElement("div",{className:"".concat(n)},b.a.createElement(N.a,{id:s,value:v,formatDate:D.formatDate,parseDate:D.parseDate,onDayChange:this.onDateChange,dayPickerProps:{showWeekNumbers:!0,locale:"nl",firstDayOfWeek:1,localeUtils:w.a,disabledDays:f},inputProps:{className:"form-control input-sm ".concat(a)+(this.state.errorDateFormat||d?" has-error":""),name:c,onBlur:this.validateDate,autoComplete:"off",readOnly:l,disabled:l},required:i,readOnly:l,placeholder:""})),d&&b.a.createElement("div",{className:"col-sm-offset-6 col-sm-6"},b.a.createElement("span",{className:"has-error-message"}," ",u)))}}]),t}(g.Component);k.defaultProps={className:"",size:"col-sm-6",divSize:"col-sm-6",required:"",readOnly:!1,value:null,error:!1,errorMessage:"",disabledBefore:null,disabledAfter:null},k.propTypes={label:y.a.string.isRequired,type:y.a.string,className:y.a.string,size:y.a.string,divSize:y.a.string,id:y.a.string,name:y.a.string,value:y.a.oneOfType([y.a.string,y.a.object]),onChangeAction:y.a.func,required:y.a.string,readOnly:y.a.bool,error:y.a.bool,errorMessage:y.a.string,disabledBefore:y.a.string,disabledAfter:y.a.string},t.a=k},820:function(e,t,a){"use strict";var n=a(12);t.a={fetchVatCodeDetails:function(e){var t="jory/vat-code/".concat(e);return n.a.get(t,{params:{jory:{fld:["id","startDate","description","percentage","twinfieldCode","twinfieldLedgerCode"]}}})},newVatCode:function(e){return e.jory=JSON.stringify({fld:["id"]}),n.a.post("vat-code",e)},updateVatCode:function(e){var t="".concat("vat-code","/").concat(e.id);return n.a.post(t,e)}}}}]);