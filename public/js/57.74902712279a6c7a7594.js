(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{1662:function(e,t,a){"use strict";a.r(t);var n=a(25),r=a.n(n),l=a(24),o=a.n(l),i=a(26),s=a.n(i),c=a(27),u=a.n(c),d=a(21),p=a.n(d),m=a(28),b=a.n(m),g=a(6),f=a.n(g),v=a(0),h=a.n(v),S=(a(198),a(4)),y=a(682),x=a(683),N=a(685),k=function(e){function t(e){var a;return r()(this,t),(a=s()(this,u()(t).call(this,e))).state={showDelete:!1},a}return b()(t,e),o()(t,[{key:"render",value:function(){return h.a.createElement("div",{className:"row"},h.a.createElement("div",{className:"col-sm-12"},h.a.createElement("div",{className:"col-md-4"},h.a.createElement("div",{className:"btn-group btn-group-flex margin-small",role:"group"},h.a.createElement(N.a,{iconName:"glyphicon-arrow-left",onClickAction:S.e.goBack}))),h.a.createElement("div",{className:"col-md-4"},h.a.createElement("h3",{className:"text-center margin-small"},"Nieuwe kans")),h.a.createElement("div",{className:"col-md-4"})))}}]),t}(v.Component),E=a(33),C=a(688),w=a(691),D=a(684),I=a(696),z=a(686),O=a(729),A=a(845),q=a(718),M=Object(E.b)((function(e){return{status:e.systemData.opportunityStatus,measures:e.systemData.measures,measureCategories:e.systemData.measureCategories}}))((function(e){var t=e.opportunity,a=t.statusId,n=t.quotationText,r=t.evaluationAgreedDate,l=t.desiredDate,o=t.measureCategoryId,i=t.measureIds,s=Object(A.a)(e.measures,o),c=e.measureCategories.find((function(e){return e.id==o}));return h.a.createElement("form",{className:"form-horizontal col-md-12",onSubmit:e.handleSubmit},h.a.createElement("div",{className:"row"},h.a.createElement(z.a,{label:"Contact",name:"contact",value:e.intake.contact?e.intake.contact.fullName:"",readOnly:!0}),h.a.createElement(z.a,{label:"Adres",name:"address",value:e.intake?e.intake.fullAddress:"",readOnly:!0})),h.a.createElement("div",{className:"row"},h.a.createElement(z.a,{label:"Maatregel - categorie",name:"measureCategory",value:c?c.name:"",readOnly:!0}),h.a.createElement(z.a,{label:"Campagne",name:"campaign",value:e.intake.campaign?e.intake.campaign.name:"",readOnly:!0})),h.a.createElement("div",{className:"row"},h.a.createElement(q.a,{label:"Maatregel - specifiek",name:"measureIds",options:s,value:i,onChangeAction:e.handleMeasureIds}),h.a.createElement(C.a,{label:"Status",size:"col-sm-6",name:"statusId",options:e.status.filter((function(e){return 1==e.active})),value:a,onChangeAction:e.handleInputChange,required:"required",error:e.errors.statusId})),h.a.createElement("div",{className:"row"},h.a.createElement(O.a,{label:"Toelichting op maatregel",name:"quotationText",value:n,onChangeAction:e.handleInputChange})),h.a.createElement("div",{className:"row"},h.a.createElement(w.a,{label:"Datum uitvoering",name:"desiredDate",value:l,onChangeAction:e.handleInputChangeDate,error:e.errors.desiredDate}),h.a.createElement(w.a,{label:"Datum evaluatie",name:"evaluationAgreedDate",value:r,onChangeAction:e.handleInputChangeDate})),h.a.createElement(I.a,null,h.a.createElement("div",{className:"pull-right btn-group",role:"group"},h.a.createElement(D.a,{buttonText:"Opslaan",onClickAction:e.handleSubmit,type:"submit",value:"Submit"}))))})),T=a(107),P=a(105),B=a(689),j=a.n(B);function L(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function R(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?L(Object(a),!0).forEach((function(t){f()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):L(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var F=function(e){function t(e){var a;return r()(this,t),a=s()(this,u()(t).call(this,e)),f()(p()(a),"handleInputChange",(function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,r=t.name;a.setState(R({},a.state,{opportunity:R({},a.state.opportunity,f()({},r,n))}))})),f()(p()(a),"handleSubmit",(function(e){e.preventDefault();var t=a.state.opportunity,n={},r=!1;j.a.isEmpty(t.statusId)?(n.statusId=!0,r=!0):"Uitvoering"===a.state.status.find((function(e){return e.id==t.statusId})).name&&j.a.isEmpty(t.desiredDate)&&(n.desiredDate=!0,r=!0);a.setState(R({},a.state,{errors:n})),!r&&T.a.storeOpportunity(t).then((function(e){S.f.push("/kans/"+e.id)}))})),f()(p()(a),"handleMeasureIds",(function(e){a.setState(R({},a.state,{opportunity:R({},a.state.opportunity,{measureIds:e})}))})),a.state={measure:[],intake:[],status:e.status,opportunity:{intakeId:"",measureCategoryId:e.params.measureCategoryId,measureIds:"",statusId:"1",quotationText:"",evaluationAgreedDate:"",desiredDate:""},errors:{statusId:!1,desiredDate:!1}},a.handleInputChangeDate=a.handleInputChangeDate.bind(p()(a)),a}return b()(t,e),o()(t,[{key:"componentWillMount",value:function(){var e=this;P.a.fetchIntakeDetails(this.props.params.intakeId).then((function(t){e.setState(R({},e.state,{intake:t,opportunity:R({},e.state.opportunity,{intakeId:t.id})}))}))}},{key:"handleInputChangeDate",value:function(e,t){this.setState(R({},this.state,{opportunity:R({},this.state.opportunity,f()({},t,e))}))}},{key:"render",value:function(){return h.a.createElement("div",{className:"row"},h.a.createElement("div",{className:"col-md-9"},h.a.createElement("div",{className:"col-md-12"},h.a.createElement(y.a,null,h.a.createElement(x.a,{className:"panel-small"},h.a.createElement(k,null)))),h.a.createElement("div",{className:"col-md-12"},h.a.createElement(y.a,null,h.a.createElement(x.a,null,h.a.createElement(M,{handleInputChange:this.handleInputChange,handleInputChangeDate:this.handleInputChangeDate,handleMeasureIds:this.handleMeasureIds,intake:this.state.intake,measureCategoryId:this.state.measureCategoryId,opportunity:this.state.opportunity,handleSubmit:this.handleSubmit,errors:this.state.errors}))))),h.a.createElement("div",{className:"col-md-3"}))}}]),t}(v.Component);t.default=Object(E.b)((function(e){return{status:e.systemData.opportunityStatus}}))(F)},682:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(14),o=a.n(l),i=function(e){var t=e.children,a=e.className,n=e.onMouseEnter,l=e.onMouseLeave;return r.a.createElement("div",{className:"panel panel-default ".concat(a),onMouseEnter:n,onMouseLeave:l},t)};i.defaultProps={className:"",onMouseEnter:function(){},onMouseLeave:function(){}},i.propTypes={className:o.a.string,onMouseEnter:o.a.func,onMouseLeave:o.a.func},t.a=i},683:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(14),o=a.n(l),i=function(e){var t=e.className,a=e.children;return r.a.createElement("div",{className:"panel-body ".concat(t)},a)};i.defaultProps={className:""},i.propTypes={className:o.a.string},t.a=i},684:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(14),o=a.n(l),i=function(e){var t=e.buttonClassName,a=e.buttonText,n=e.onClickAction,l=e.type,o=e.value,i=e.loading,s=e.loadText,c=e.disabled;return i?r.a.createElement("button",{type:l,className:"btn btn-sm btn-loading ".concat(t),value:o,disabled:i},r.a.createElement("span",{className:"glyphicon glyphicon-refresh glyphicon-refresh-animate"})," ",s):r.a.createElement("button",{type:l,className:"btn btn-sm ".concat(t),onClick:n,value:o,disabled:c},a)};i.defaultProps={buttonClassName:"btn-success",type:"button",value:"",loading:!1,loadText:"Aan het laden",disabled:!1},i.propTypes={buttonClassName:o.a.string,buttonText:o.a.string.isRequired,onClickAction:o.a.func,type:o.a.string,value:o.a.string,loading:o.a.bool,loadText:o.a.string,disabled:o.a.bool},t.a=i},685:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(14),o=a.n(l),i=function(e){var t=e.buttonClassName,a=e.iconName,n=e.onClickAction,l=e.title,o=e.disabled;return r.a.createElement("button",{type:"button",className:"btn ".concat(t),onClick:n,disabled:o,title:l},r.a.createElement("span",{className:"glyphicon ".concat(a)}))};i.defaultProps={buttonClassName:"btn-success btn-sm",title:"",disabled:!1},i.propTypes={buttonClassName:o.a.string,iconName:o.a.string.isRequired,onClickAction:o.a.func,title:o.a.string,disabled:o.a.bool},t.a=i},686:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(14),o=a.n(l),i=function(e){var t=e.label,a=e.type,n=e.className,l=e.size,o=e.id,i=e.placeholder,s=e.name,c=e.value,u=e.onClickAction,d=e.onChangeAction,p=e.onBlurAction,m=e.required,b=e.readOnly,g=e.maxLength,f=e.error,v=e.min,h=e.max,S=e.step,y=e.errorMessage,x=e.divSize,N=e.divClassName,k=e.autoComplete;return r.a.createElement("div",{className:"form-group ".concat(x," ").concat(N)},r.a.createElement("label",{htmlFor:o,className:"col-sm-6 ".concat(m)},t),r.a.createElement("div",{className:"".concat(l)},r.a.createElement("input",{type:a,className:"form-control input-sm ".concat(n)+(f?"has-error":""),id:o,placeholder:i,name:s,value:c,onClick:u,onChange:d,onBlur:p,readOnly:b,maxLength:g,min:v,max:h,autoComplete:k,step:S})),f&&r.a.createElement("div",{className:"col-sm-offset-6 col-sm-6"},r.a.createElement("span",{className:"has-error-message"}," ",y)))};i.defaultProps={divClassName:"",className:"",size:"col-sm-6",divSize:"col-sm-6",name:"",type:"text",value:"",required:"",readOnly:!1,maxLength:null,error:!1,min:"",max:"",step:"",errorMessage:"",autoComplete:"off",onBlurAction:function(){},onClickAction:function(){},onChangeAction:function(){}},i.propTypes={label:o.a.oneOfType([o.a.string,o.a.object]).isRequired,type:o.a.string,className:o.a.string,divClassName:o.a.string,size:o.a.string,divSize:o.a.string,id:o.a.string,placeholder:o.a.string,name:o.a.string.isRequired,value:o.a.oneOfType([o.a.string,o.a.number]),onClickAction:o.a.func,onChangeAction:o.a.func,onBlurAction:o.a.func,required:o.a.string,readOnly:o.a.bool,maxLength:o.a.string,error:o.a.bool,min:o.a.string,max:o.a.string,step:o.a.string,errorMessage:o.a.string,autoComplete:o.a.string},t.a=i},688:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(14),o=a.n(l),i=function(e){var t=e.label,a=e.className,n=e.size,l=e.id,o=e.name,i=e.value,s=e.options,c=e.onChangeAction,u=e.onBlurAction,d=e.required,p=e.error,m=e.errorMessage,b=e.optionValue,g=e.optionName,f=e.readOnly,v=e.placeholder,h=e.divClassName,S=e.emptyOption;return r.a.createElement("div",{className:"form-group ".concat(n," ").concat(h)},r.a.createElement("label",{htmlFor:l,className:"col-sm-6 ".concat(d)},t),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("select",{className:"form-control input-sm ".concat(a)+(p&&" has-error"),id:l,name:o,value:i,onChange:c,onBlur:u,readOnly:f},S&&r.a.createElement("option",{value:""},v),s.map((function(e){return r.a.createElement("option",{key:e[b],value:e[b]},e[g])})))),p&&r.a.createElement("div",{className:"col-sm-offset-6 col-sm-6"},r.a.createElement("span",{className:"has-error-message"}," ",m)))};i.defaultProps={divClassName:"",className:"",size:"col-sm-6",readOnly:!1,required:"",error:!1,errorMessage:"",value:"",optionValue:"id",optionName:"name",placeholder:"",emptyOption:!0},i.propTypes={label:o.a.string.isRequired,className:o.a.string,size:o.a.string,id:o.a.string,name:o.a.string.isRequired,options:o.a.array,value:o.a.oneOfType([o.a.string,o.a.number]),onChangeAction:o.a.func,onBlurAction:o.a.func,required:o.a.string,readOnly:o.a.bool,error:o.a.bool,errorMessage:o.a.string,emptyOption:o.a.bool,optionValue:o.a.string,optionName:o.a.string,placeholder:o.a.string},t.a=i},691:function(e,t,a){"use strict";var n=a(25),r=a.n(n),l=a(24),o=a.n(l),i=a(26),s=a.n(i),c=a(27),u=a.n(c),d=a(21),p=a.n(d),m=a(28),b=a.n(m),g=a(6),f=a.n(g),v=a(0),h=a.n(v),S=a(14),y=a.n(S),x=a(703),N=a.n(x),k=a(704),E=a.n(k),C=a(8),w=a.n(C);w.a.locale("nl");var D=function(e){function t(e){var a;return r()(this,t),a=s()(this,u()(t).call(this,e)),f()(p()(a),"validateDate",(function(e){var t=w()(e.target.value,"DD-MM-YYYY",!0),n=!1;t.isValid()||""===e.target.value||(n=!0),a.props.disabledBefore&&t.isBefore(a.props.disabledBefore)&&(n=!0),a.props.disabledAfter&&t.isAfter(a.props.disabledAfter)&&(n=!0),a.setState({errorDateFormat:n})})),f()(p()(a),"onDateChange",(function(e){var t=e?w()(e).format("Y-MM-DD"):"",n=!1;t&&a.props.disabledBefore&&w()(t).isBefore(a.props.disabledBefore)&&(n=!0),t&&a.props.disabledAfter&&w()(t).isAfter(a.props.disabledAfter)&&(n=!0),a.setState({errorDateFormat:n}),!n&&a.props.onChangeAction(t,a.props.name)})),a.state={errorDateFormat:!1},a}return b()(t,e),o()(t,[{key:"render",value:function(){var e=this.props,t=e.label,a=e.className,n=e.size,r=e.divSize,l=e.id,o=e.value,i=e.required,s=e.readOnly,c=e.name,u=e.error,d=e.errorMessage,p=e.disabledBefore,m=e.disabledAfter,b=o?w()(o).format("L"):"",g={};return p&&(g.before=new Date(p)),m&&(g.after=new Date(m)),h.a.createElement("div",{className:"form-group ".concat(r)},h.a.createElement("div",null,h.a.createElement("label",{htmlFor:l,className:"col-sm-6 ".concat(i)},t)),h.a.createElement("div",{className:"".concat(n)},h.a.createElement(N.a,{id:l,value:b,formatDate:k.formatDate,parseDate:k.parseDate,onDayChange:this.onDateChange,dayPickerProps:{showWeekNumbers:!0,locale:"nl",firstDayOfWeek:1,localeUtils:E.a,disabledDays:g},inputProps:{className:"form-control input-sm ".concat(a)+(this.state.errorDateFormat||u?" has-error":""),name:c,onBlur:this.validateDate,autoComplete:"off",readOnly:s,disabled:s},required:i,readOnly:s,placeholder:""})),u&&h.a.createElement("div",{className:"col-sm-offset-6 col-sm-6"},h.a.createElement("span",{className:"has-error-message"}," ",d)))}}]),t}(v.Component);D.defaultProps={className:"",size:"col-sm-6",divSize:"col-sm-6",required:"",readOnly:!1,value:null,error:!1,errorMessage:"",disabledBefore:null,disabledAfter:null},D.propTypes={label:y.a.string.isRequired,type:y.a.string,className:y.a.string,size:y.a.string,divSize:y.a.string,id:y.a.string,name:y.a.string,value:y.a.oneOfType([y.a.string,y.a.object]),onChangeAction:y.a.func,required:y.a.string,readOnly:y.a.bool,error:y.a.bool,errorMessage:y.a.string,disabledBefore:y.a.string,disabledAfter:y.a.string},t.a=D},695:function(e,t,a){var n=a(697);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(201)(n,r);n.locals&&(e.exports=n.locals)},696:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(14),o=a.n(l),i=function(e){var t=e.className,a=e.children;return r.a.createElement("div",{className:"panel-footer ".concat(t)},a)};i.defaultProps={className:""},i.propTypes={className:o.a.string},t.a=i},697:function(e,t,a){(e.exports=a(200)(!1)).push([e.i,".Select{position:relative}.Select input::-webkit-contacts-auto-fill-button,.Select input::-webkit-credentials-auto-fill-button{display:none!important}.Select input::-ms-clear,.Select input::-ms-reveal{display:none!important}.Select,.Select div,.Select input,.Select span{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.Select.is-disabled .Select-arrow-zone{cursor:default;pointer-events:none;opacity:.35}.Select.is-disabled>.Select-control{background-color:#f9f9f9}.Select.is-disabled>.Select-control:hover{box-shadow:none}.Select.is-open>.Select-control{border-bottom-right-radius:0;border-bottom-left-radius:0;background:#fff;border-color:#b3b3b3 #ccc #d9d9d9}.Select.is-open>.Select-control .Select-arrow{top:-2px;border-color:transparent transparent #999;border-width:0 5px 5px}.Select.is-searchable.is-focused:not(.is-open)>.Select-control,.Select.is-searchable.is-open>.Select-control{cursor:text}.Select.is-focused>.Select-control{background:#fff}.Select.is-focused:not(.is-open)>.Select-control{border-color:#007eff;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 0 3px rgba(0,126,255,.1);background:#fff}.Select.has-value.is-clearable.Select--single>.Select-control .Select-value{padding-right:42px}.Select.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value .Select-value-label,.Select.has-value.Select--single>.Select-control .Select-value .Select-value-label{color:#333}.Select.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value a.Select-value-label,.Select.has-value.Select--single>.Select-control .Select-value a.Select-value-label{cursor:pointer;text-decoration:none}.Select.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value a.Select-value-label:focus,.Select.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value a.Select-value-label:hover,.Select.has-value.Select--single>.Select-control .Select-value a.Select-value-label:focus,.Select.has-value.Select--single>.Select-control .Select-value a.Select-value-label:hover{color:#007eff;outline:none;text-decoration:underline}.Select.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value a.Select-value-label:focus,.Select.has-value.Select--single>.Select-control .Select-value a.Select-value-label:focus{background:#fff}.Select.has-value.is-pseudo-focused .Select-input{opacity:0}.Select.is-open .Select-arrow,.Select .Select-arrow-zone:hover>.Select-arrow{border-top-color:#666}.Select.Select--rtl{direction:rtl;text-align:right}.Select-control{background-color:#fff;border-color:#d9d9d9 #ccc #b3b3b3;border-radius:4px;border:1px solid #ccc;color:#333;cursor:default;display:table;border-spacing:0;border-collapse:separate;height:36px;outline:none;overflow:hidden;position:relative;width:100%}.Select-control:hover{box-shadow:0 1px 0 rgba(0,0,0,.06)}.Select-control .Select-input:focus{outline:none;background:#fff}.Select--single>.Select-control .Select-value,.Select-placeholder{bottom:0;color:#aaa;left:0;line-height:34px;padding-left:10px;padding-right:10px;position:absolute;right:0;top:0;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.Select-input{height:34px;padding-left:10px;padding-right:10px;vertical-align:middle}.Select-input>input{width:100%;background:none transparent;border:0 none;box-shadow:none;cursor:default;display:inline-block;font-family:inherit;font-size:inherit;margin:0;outline:none;line-height:17px;padding:8px 0 12px;-webkit-appearance:none}.is-focused .Select-input>input{cursor:text}.has-value.is-pseudo-focused .Select-input{opacity:0}.Select-control:not(.is-searchable)>.Select-input{outline:none}.Select-loading-zone{cursor:pointer;display:table-cell;text-align:center}.Select-loading,.Select-loading-zone{position:relative;vertical-align:middle;width:16px}.Select-loading{-webkit-animation:Select-animation-spin .4s infinite linear;-o-animation:Select-animation-spin .4s infinite linear;animation:Select-animation-spin .4s infinite linear;height:16px;box-sizing:border-box;border-radius:50%;border:2px solid #ccc;border-right-color:#333;display:inline-block}.Select-clear-zone{-webkit-animation:Select-animation-fadeIn .2s;-o-animation:Select-animation-fadeIn .2s;animation:Select-animation-fadeIn .2s;color:#999;cursor:pointer;display:table-cell;position:relative;text-align:center;vertical-align:middle;width:17px}.Select-clear-zone:hover{color:#d0021b}.Select-clear{display:inline-block;font-size:18px;line-height:1}.Select--multi .Select-clear-zone{width:17px}.Select-arrow-zone{cursor:pointer;display:table-cell;position:relative;text-align:center;vertical-align:middle;width:25px;padding-right:5px}.Select--rtl .Select-arrow-zone{padding-right:0;padding-left:5px}.Select-arrow{border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 2.5px;display:inline-block;height:0;width:0;position:relative}.Select-control>:last-child{padding-right:5px}.Select--multi .Select-multi-value-wrapper{display:inline-block}.Select .Select-aria-only{position:absolute;display:inline-block;height:1px;width:1px;margin:-1px;clip:rect(0,0,0,0);overflow:hidden;float:left}@-webkit-keyframes Select-animation-fadeIn{0%{opacity:0}to{opacity:1}}@keyframes Select-animation-fadeIn{0%{opacity:0}to{opacity:1}}.Select-menu-outer{border-bottom-right-radius:4px;border-bottom-left-radius:4px;background-color:#fff;border:1px solid #ccc;border-top-color:#e6e6e6;box-shadow:0 1px 0 rgba(0,0,0,.06);box-sizing:border-box;margin-top:-1px;max-height:200px;position:absolute;left:0;top:100%;width:100%;z-index:1;-webkit-overflow-scrolling:touch}.Select-menu{max-height:198px;overflow-y:auto}.Select-option{box-sizing:border-box;background-color:#fff;color:#666;cursor:pointer;display:block;padding:8px 10px}.Select-option:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.Select-option.is-selected{background-color:#f5faff;background-color:rgba(0,126,255,.04);color:#333}.Select-option.is-focused{background-color:#ebf5ff;background-color:rgba(0,126,255,.08);color:#333}.Select-option.is-disabled{color:#ccc;cursor:default}.Select-noresults{box-sizing:border-box;color:#999;cursor:default;display:block;padding:8px 10px}.Select--multi .Select-input{vertical-align:middle;margin-left:10px;padding:0}.Select--multi.Select--rtl .Select-input{margin-left:0;margin-right:10px}.Select--multi.has-value .Select-input{margin-left:5px}.Select--multi .Select-value{background-color:#ebf5ff;background-color:rgba(0,126,255,.08);border-radius:2px;border:1px solid #c2e0ff;border:1px solid rgba(0,126,255,.24);color:#007eff;display:inline-block;font-size:.9em;line-height:1.4;margin-left:5px;margin-top:5px;vertical-align:top}.Select--multi .Select-value-icon,.Select--multi .Select-value-label{display:inline-block;vertical-align:middle}.Select--multi .Select-value-label{border-bottom-right-radius:2px;border-top-right-radius:2px;cursor:default;padding:2px 5px}.Select--multi a.Select-value-label{color:#007eff;cursor:pointer;text-decoration:none}.Select--multi a.Select-value-label:hover{text-decoration:underline}.Select--multi .Select-value-icon{cursor:pointer;border-bottom-left-radius:2px;border-top-left-radius:2px;border-right:1px solid #c2e0ff;border-right:1px solid rgba(0,126,255,.24);padding:1px 5px 3px}.Select--multi .Select-value-icon:focus,.Select--multi .Select-value-icon:hover{background-color:#d8eafd;background-color:rgba(0,113,230,.08);color:#0071e6}.Select--multi .Select-value-icon:active{background-color:#c2e0ff;background-color:rgba(0,126,255,.24)}.Select--multi.Select--rtl .Select-value{margin-left:0;margin-right:5px}.Select--multi.Select--rtl .Select-value-icon{border-right:none;border-left:1px solid #c2e0ff;border-left:1px solid rgba(0,126,255,.24)}.Select--multi.is-disabled .Select-value{background-color:#fcfcfc;border:1px solid #e3e3e3;color:#333}.Select--multi.is-disabled .Select-value-icon{cursor:not-allowed;border-right:1px solid #e3e3e3}.Select--multi.is-disabled .Select-value-icon:active,.Select--multi.is-disabled .Select-value-icon:focus,.Select--multi.is-disabled .Select-value-icon:hover{background-color:#fcfcfc}@keyframes Select-animation-spin{to{transform:rotate(1turn)}}@-webkit-keyframes Select-animation-spin{to{-webkit-transform:rotate(1turn)}}",""])},718:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(14),o=a.n(l),i=a(709),s=(a(695),function(e){var t=e.label,a=(e.className,e.size),n=e.id,l=e.name,o=e.value,s=e.options,c=e.optionId,u=e.optionName,d=e.onChangeAction,p=e.required,m=e.multi,b=e.error;return r.a.createElement("div",{className:"form-group col-sm-6"},r.a.createElement("label",{htmlFor:n,className:"col-sm-6 ".concat(p)},t),r.a.createElement("div",{className:"".concat(a)},r.a.createElement(i.default,{id:n,name:l,value:o,onChange:d,options:s,valueKey:c,labelKey:u,placeholder:"",noResultsText:"Geen resultaat gevonden",multi:m,simpleValue:!0,removeSelected:!0,className:b?" has-error":""})))});s.defaultProps={className:"",size:"col-sm-6",optionId:"id",optionName:"name",readOnly:!1,required:"",error:!1,value:"",multi:!0},s.propTypes={label:o.a.string.isRequired,className:o.a.string,size:o.a.string,id:o.a.string,name:o.a.string.isRequired,options:o.a.array,optionId:o.a.string,optionName:o.a.string,value:o.a.string,onChangeAction:o.a.func,onBlurAction:o.a.func,required:o.a.string,readOnly:o.a.bool,error:o.a.bool,multi:o.a.bool},t.a=s},729:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(14),o=a.n(l),i=function(e){var t=e.label,a=e.size,n=e.sizeLabel,l=e.sizeInput,o=e.id,i=e.name,s=e.value,c=e.onChangeAction,u=e.required,d=e.error,p=e.rows;return r.a.createElement("div",{className:"form-group ".concat(a)},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:n},r.a.createElement("label",{htmlFor:o,className:"col-sm-12 ".concat(u)},t)),r.a.createElement("div",{className:l},r.a.createElement("textarea",{name:i,value:s,onChange:c,className:"form-control input-sm "+(d?"has-error":""),rows:p}))))};i.defaultProps={size:"col-sm-12",sizeLabel:"col-sm-3",sizeInput:"col-sm-9",value:"",required:"",error:!1,rows:"5"},i.propTypes={label:o.a.string.isRequired,type:o.a.string,size:o.a.string,sizeLabel:o.a.string,sizeInput:o.a.string,id:o.a.string,name:o.a.string.isRequired,value:o.a.oneOfType([o.a.string,o.a.number]),onChangeAction:o.a.func,required:o.a.string,error:o.a.bool},t.a=i},845:function(e,t,a){"use strict";t.a=function(e,t){return e.filter((function(e){return t?Number(e.measureCategoryId)===Number(t):e.measureCategoryId}))}}}]);