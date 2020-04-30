(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{1632:function(e,t,a){"use strict";a.r(t);var n=a(25),o=a.n(n),l=a(24),r=a.n(l),i=a(26),c=a.n(i),s=a(27),u=a.n(s),d=a(28),p=a.n(d),m=a(0),f=a.n(m),b=a(33),g=a(197),S=a(710),h=a(21),v=a.n(h),E=a(6),y=a.n(E),x=a(4),N=a(8),k=a.n(N),C=a(105),I=a(688),w=a(718),A=a(684),O=a(686);function T(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function D(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?T(Object(a),!0).forEach((function(t){y()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}k.a.locale("nl");var R=function(e){function t(e){var a;return o()(this,t),a=c()(this,u()(t).call(this,e)),y()(v()(a),"handleInputChange",(function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,o=t.name;a.setState(D({},a.state,{intake:D({},a.state.intake,y()({},o,n))}))})),y()(v()(a),"handleSourceIds",(function(e){a.setState(D({},a.state,{intake:D({},a.state.intake,{sourceIds:e})}))})),y()(v()(a),"handleIntakeReasonsIds",(function(e){a.setState(D({},a.state,{intake:D({},a.state.intake,{intakeReasonIds:e})}))})),y()(v()(a),"handleSubmit",(function(e){e.preventDefault();var t=a.state.intake;t.intakeReasonIds.length>0&&(t.intakeReasonIds=t.intakeReasonIds.split(",")),t.sourceIds.length>0&&(t.sourceIds=t.sourceIds.split(",")),C.a.newIntake(t).then((function(e){x.f.push("/intake/".concat(e.data.id))}))})),a.state={intake:{contactId:e.contactId,addressId:e.addressId,campaignId:e.campaigns[0].id,statusId:"1",sourceIds:"",intakeReasonIds:"",note:""}},a}return p()(t,e),r()(t,[{key:"render",value:function(){var e=this.state.intake,t=e.addressId,a=e.statusId,n=e.sourceIds,o=e.campaignId,l=e.intakeReasonIds,r=e.note,i=this.props.contactDetails,c=i.addresses,s=void 0===c?[]:c,u=i.fullName;return f.a.createElement("form",{className:"form-horizontal",onSubmit:this.handleSubmit},f.a.createElement("div",{className:"row"},f.a.createElement(O.a,{name:"contact",label:"Contact",value:u,readOnly:!0}),f.a.createElement("div",{className:"form-group col-sm-6"},f.a.createElement("label",{htmlFor:"addressId",className:"col-sm-6"},"Adres"),f.a.createElement("div",{className:"col-sm-6"},f.a.createElement("select",{className:"form-control input-sm",id:"addressId",name:"addressId",value:t,onChange:this.handleInputChange},s.map((function(e,t){return f.a.createElement("option",{key:t,value:e.id},e.street+" "+e.number+", "+e.city)})))))),f.a.createElement("div",{className:"row"},f.a.createElement(I.a,{label:"Campagne",name:"campaignId",value:o,options:this.props.campaigns,onChangeAction:this.handleInputChange,required:!0,emptyOption:!1}),f.a.createElement(I.a,{label:"Status",size:"col-sm-6",name:"statusId",value:a,options:this.props.intakeStatuses,onChangeAction:this.handleInputChange})),f.a.createElement("div",{className:"row"},f.a.createElement(w.a,{label:"Aanmeldingsbron",name:"sourceIds",value:n,options:this.props.intakeSources.sort((function(e,t){var a=e.name.toLowerCase(),n=t.name.toLowerCase(),o=0;return a>n?o=1:a<n&&(o=-1),o})),onChangeAction:this.handleSourceIds}),f.a.createElement(w.a,{label:"Wat is belangrijk",name:"intakeReasonIds",value:l,options:this.props.intakeReasons,onChangeAction:this.handleIntakeReasonsIds})),f.a.createElement("div",{className:"row"},f.a.createElement("div",{className:"form-group col-sm-12"},f.a.createElement("div",{className:"row"},f.a.createElement("div",{className:"col-sm-3"},f.a.createElement("label",{htmlFor:"note",className:"col-sm-12"},"Opmerking van bewoner")),f.a.createElement("div",{className:"col-sm-8"},f.a.createElement("textarea",{name:"note",value:r,onChange:this.handleInputChange,className:"form-control input-sm"}))))),f.a.createElement("div",{className:"panel-footer"},f.a.createElement("div",{className:"pull-right btn-group",role:"group"},f.a.createElement(A.a,{buttonText:"Opslaan",onClickAction:this.handleSubmit}))))}}]),t}(m.Component),_=Object(b.b)((function(e){return{intakeStatuses:e.systemData.intakeStatuses,intakeSources:e.systemData.intakeSources,intakeReasons:e.systemData.intakeReasons,campaigns:e.systemData.campaigns,buildingTypes:e.systemData.buildingTypes,contactDetails:e.contactDetails}}),null)(R),P=a(682),z=a(683),L=function(e){return f.a.createElement("div",null,f.a.createElement(P.a,null,f.a.createElement(z.a,null,f.a.createElement(_,{contactId:e.contactId,addressId:e.addressId}))))},M=a(685),U=function(e){return f.a.createElement("div",{className:"row"},f.a.createElement("div",{className:"col-md-4"},f.a.createElement("div",{className:"btn-group",role:"group"},f.a.createElement(M.a,{iconName:"glyphicon-arrow-left",onClickAction:x.e.goBack}))),f.a.createElement("div",{className:"col-md-4"},f.a.createElement("h4",{className:"text-center"},"Nieuwe intake")),f.a.createElement("div",{className:"col-md-4"}))},q=function(e){function t(e){return o()(this,t),c()(this,u()(t).call(this,e))}return p()(t,e),r()(t,[{key:"componentDidMount",value:function(){Object(g.isEmpty)(this.props.contactDetails)&&this.props.fetchContactDetails(this.props.params.contactId)}},{key:"render",value:function(){return f.a.createElement("div",{className:"row"},f.a.createElement("div",{className:"col-md-9"},f.a.createElement("div",{className:"col-md-12 margin-10-top"},f.a.createElement(U,{contactId:this.props.params.contactId})),f.a.createElement("div",{className:"col-md-12 margin-10-top"},f.a.createElement(L,{contactId:this.props.params.contactId,addressId:this.props.params.addressId}))),f.a.createElement("div",{className:"col-md-3"}))}}]),t}(m.Component);t.default=Object(b.b)((function(e){return{contactDetails:e.contactDetails}}),(function(e){return{fetchContactDetails:function(t){e(Object(S.h)(t))}}}))(q)},682:function(e,t,a){"use strict";var n=a(0),o=a.n(n),l=a(14),r=a.n(l),i=function(e){var t=e.children,a=e.className,n=e.onMouseEnter,l=e.onMouseLeave;return o.a.createElement("div",{className:"panel panel-default ".concat(a),onMouseEnter:n,onMouseLeave:l},t)};i.defaultProps={className:"",onMouseEnter:function(){},onMouseLeave:function(){}},i.propTypes={className:r.a.string,onMouseEnter:r.a.func,onMouseLeave:r.a.func},t.a=i},683:function(e,t,a){"use strict";var n=a(0),o=a.n(n),l=a(14),r=a.n(l),i=function(e){var t=e.className,a=e.children;return o.a.createElement("div",{className:"panel-body ".concat(t)},a)};i.defaultProps={className:""},i.propTypes={className:r.a.string},t.a=i},684:function(e,t,a){"use strict";var n=a(0),o=a.n(n),l=a(14),r=a.n(l),i=function(e){var t=e.buttonClassName,a=e.buttonText,n=e.onClickAction,l=e.type,r=e.value,i=e.loading,c=e.loadText,s=e.disabled;return i?o.a.createElement("button",{type:l,className:"btn btn-sm btn-loading ".concat(t),value:r,disabled:i},o.a.createElement("span",{className:"glyphicon glyphicon-refresh glyphicon-refresh-animate"})," ",c):o.a.createElement("button",{type:l,className:"btn btn-sm ".concat(t),onClick:n,value:r,disabled:s},a)};i.defaultProps={buttonClassName:"btn-success",type:"button",value:"",loading:!1,loadText:"Aan het laden",disabled:!1},i.propTypes={buttonClassName:r.a.string,buttonText:r.a.string.isRequired,onClickAction:r.a.func,type:r.a.string,value:r.a.string,loading:r.a.bool,loadText:r.a.string,disabled:r.a.bool},t.a=i},685:function(e,t,a){"use strict";var n=a(0),o=a.n(n),l=a(14),r=a.n(l),i=function(e){var t=e.buttonClassName,a=e.iconName,n=e.onClickAction,l=e.title,r=e.disabled;return o.a.createElement("button",{type:"button",className:"btn ".concat(t),onClick:n,disabled:r,title:l},o.a.createElement("span",{className:"glyphicon ".concat(a)}))};i.defaultProps={buttonClassName:"btn-success btn-sm",title:"",disabled:!1},i.propTypes={buttonClassName:r.a.string,iconName:r.a.string.isRequired,onClickAction:r.a.func,title:r.a.string,disabled:r.a.bool},t.a=i},686:function(e,t,a){"use strict";var n=a(0),o=a.n(n),l=a(14),r=a.n(l),i=function(e){var t=e.label,a=e.type,n=e.className,l=e.size,r=e.id,i=e.placeholder,c=e.name,s=e.value,u=e.onClickAction,d=e.onChangeAction,p=e.onBlurAction,m=e.required,f=e.readOnly,b=e.maxLength,g=e.error,S=e.min,h=e.max,v=e.step,E=e.errorMessage,y=e.divSize,x=e.divClassName,N=e.autoComplete;return o.a.createElement("div",{className:"form-group ".concat(y," ").concat(x)},o.a.createElement("label",{htmlFor:r,className:"col-sm-6 ".concat(m)},t),o.a.createElement("div",{className:"".concat(l)},o.a.createElement("input",{type:a,className:"form-control input-sm ".concat(n)+(g?"has-error":""),id:r,placeholder:i,name:c,value:s,onClick:u,onChange:d,onBlur:p,readOnly:f,maxLength:b,min:S,max:h,autoComplete:N,step:v})),g&&o.a.createElement("div",{className:"col-sm-offset-6 col-sm-6"},o.a.createElement("span",{className:"has-error-message"}," ",E)))};i.defaultProps={divClassName:"",className:"",size:"col-sm-6",divSize:"col-sm-6",name:"",type:"text",value:"",required:"",readOnly:!1,maxLength:null,error:!1,min:"",max:"",step:"",errorMessage:"",autoComplete:"off",onBlurAction:function(){},onClickAction:function(){},onChangeAction:function(){}},i.propTypes={label:r.a.oneOfType([r.a.string,r.a.object]).isRequired,type:r.a.string,className:r.a.string,divClassName:r.a.string,size:r.a.string,divSize:r.a.string,id:r.a.string,placeholder:r.a.string,name:r.a.string.isRequired,value:r.a.oneOfType([r.a.string,r.a.number]),onClickAction:r.a.func,onChangeAction:r.a.func,onBlurAction:r.a.func,required:r.a.string,readOnly:r.a.bool,maxLength:r.a.string,error:r.a.bool,min:r.a.string,max:r.a.string,step:r.a.string,errorMessage:r.a.string,autoComplete:r.a.string},t.a=i},688:function(e,t,a){"use strict";var n=a(0),o=a.n(n),l=a(14),r=a.n(l),i=function(e){var t=e.label,a=e.className,n=e.size,l=e.id,r=e.name,i=e.value,c=e.options,s=e.onChangeAction,u=e.onBlurAction,d=e.required,p=e.error,m=e.errorMessage,f=e.optionValue,b=e.optionName,g=e.readOnly,S=e.placeholder,h=e.divClassName,v=e.emptyOption;return o.a.createElement("div",{className:"form-group ".concat(n," ").concat(h)},o.a.createElement("label",{htmlFor:l,className:"col-sm-6 ".concat(d)},t),o.a.createElement("div",{className:"col-sm-6"},o.a.createElement("select",{className:"form-control input-sm ".concat(a)+(p&&" has-error"),id:l,name:r,value:i,onChange:s,onBlur:u,readOnly:g},v&&o.a.createElement("option",{value:""},S),c.map((function(e){return o.a.createElement("option",{key:e[f],value:e[f]},e[b])})))),p&&o.a.createElement("div",{className:"col-sm-offset-6 col-sm-6"},o.a.createElement("span",{className:"has-error-message"}," ",m)))};i.defaultProps={divClassName:"",className:"",size:"col-sm-6",readOnly:!1,required:"",error:!1,errorMessage:"",value:"",optionValue:"id",optionName:"name",placeholder:"",emptyOption:!0},i.propTypes={label:r.a.string.isRequired,className:r.a.string,size:r.a.string,id:r.a.string,name:r.a.string.isRequired,options:r.a.array,value:r.a.oneOfType([r.a.string,r.a.number]),onChangeAction:r.a.func,onBlurAction:r.a.func,required:r.a.string,readOnly:r.a.bool,error:r.a.bool,errorMessage:r.a.string,emptyOption:r.a.bool,optionValue:r.a.string,optionName:r.a.string,placeholder:r.a.string},t.a=i},695:function(e,t,a){var n=a(697);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a(201)(n,o);n.locals&&(e.exports=n.locals)},697:function(e,t,a){(e.exports=a(200)(!1)).push([e.i,".Select{position:relative}.Select input::-webkit-contacts-auto-fill-button,.Select input::-webkit-credentials-auto-fill-button{display:none!important}.Select input::-ms-clear,.Select input::-ms-reveal{display:none!important}.Select,.Select div,.Select input,.Select span{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.Select.is-disabled .Select-arrow-zone{cursor:default;pointer-events:none;opacity:.35}.Select.is-disabled>.Select-control{background-color:#f9f9f9}.Select.is-disabled>.Select-control:hover{box-shadow:none}.Select.is-open>.Select-control{border-bottom-right-radius:0;border-bottom-left-radius:0;background:#fff;border-color:#b3b3b3 #ccc #d9d9d9}.Select.is-open>.Select-control .Select-arrow{top:-2px;border-color:transparent transparent #999;border-width:0 5px 5px}.Select.is-searchable.is-focused:not(.is-open)>.Select-control,.Select.is-searchable.is-open>.Select-control{cursor:text}.Select.is-focused>.Select-control{background:#fff}.Select.is-focused:not(.is-open)>.Select-control{border-color:#007eff;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 0 3px rgba(0,126,255,.1);background:#fff}.Select.has-value.is-clearable.Select--single>.Select-control .Select-value{padding-right:42px}.Select.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value .Select-value-label,.Select.has-value.Select--single>.Select-control .Select-value .Select-value-label{color:#333}.Select.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value a.Select-value-label,.Select.has-value.Select--single>.Select-control .Select-value a.Select-value-label{cursor:pointer;text-decoration:none}.Select.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value a.Select-value-label:focus,.Select.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value a.Select-value-label:hover,.Select.has-value.Select--single>.Select-control .Select-value a.Select-value-label:focus,.Select.has-value.Select--single>.Select-control .Select-value a.Select-value-label:hover{color:#007eff;outline:none;text-decoration:underline}.Select.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value a.Select-value-label:focus,.Select.has-value.Select--single>.Select-control .Select-value a.Select-value-label:focus{background:#fff}.Select.has-value.is-pseudo-focused .Select-input{opacity:0}.Select.is-open .Select-arrow,.Select .Select-arrow-zone:hover>.Select-arrow{border-top-color:#666}.Select.Select--rtl{direction:rtl;text-align:right}.Select-control{background-color:#fff;border-color:#d9d9d9 #ccc #b3b3b3;border-radius:4px;border:1px solid #ccc;color:#333;cursor:default;display:table;border-spacing:0;border-collapse:separate;height:36px;outline:none;overflow:hidden;position:relative;width:100%}.Select-control:hover{box-shadow:0 1px 0 rgba(0,0,0,.06)}.Select-control .Select-input:focus{outline:none;background:#fff}.Select--single>.Select-control .Select-value,.Select-placeholder{bottom:0;color:#aaa;left:0;line-height:34px;padding-left:10px;padding-right:10px;position:absolute;right:0;top:0;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.Select-input{height:34px;padding-left:10px;padding-right:10px;vertical-align:middle}.Select-input>input{width:100%;background:none transparent;border:0 none;box-shadow:none;cursor:default;display:inline-block;font-family:inherit;font-size:inherit;margin:0;outline:none;line-height:17px;padding:8px 0 12px;-webkit-appearance:none}.is-focused .Select-input>input{cursor:text}.has-value.is-pseudo-focused .Select-input{opacity:0}.Select-control:not(.is-searchable)>.Select-input{outline:none}.Select-loading-zone{cursor:pointer;display:table-cell;text-align:center}.Select-loading,.Select-loading-zone{position:relative;vertical-align:middle;width:16px}.Select-loading{-webkit-animation:Select-animation-spin .4s infinite linear;-o-animation:Select-animation-spin .4s infinite linear;animation:Select-animation-spin .4s infinite linear;height:16px;box-sizing:border-box;border-radius:50%;border:2px solid #ccc;border-right-color:#333;display:inline-block}.Select-clear-zone{-webkit-animation:Select-animation-fadeIn .2s;-o-animation:Select-animation-fadeIn .2s;animation:Select-animation-fadeIn .2s;color:#999;cursor:pointer;display:table-cell;position:relative;text-align:center;vertical-align:middle;width:17px}.Select-clear-zone:hover{color:#d0021b}.Select-clear{display:inline-block;font-size:18px;line-height:1}.Select--multi .Select-clear-zone{width:17px}.Select-arrow-zone{cursor:pointer;display:table-cell;position:relative;text-align:center;vertical-align:middle;width:25px;padding-right:5px}.Select--rtl .Select-arrow-zone{padding-right:0;padding-left:5px}.Select-arrow{border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 2.5px;display:inline-block;height:0;width:0;position:relative}.Select-control>:last-child{padding-right:5px}.Select--multi .Select-multi-value-wrapper{display:inline-block}.Select .Select-aria-only{position:absolute;display:inline-block;height:1px;width:1px;margin:-1px;clip:rect(0,0,0,0);overflow:hidden;float:left}@-webkit-keyframes Select-animation-fadeIn{0%{opacity:0}to{opacity:1}}@keyframes Select-animation-fadeIn{0%{opacity:0}to{opacity:1}}.Select-menu-outer{border-bottom-right-radius:4px;border-bottom-left-radius:4px;background-color:#fff;border:1px solid #ccc;border-top-color:#e6e6e6;box-shadow:0 1px 0 rgba(0,0,0,.06);box-sizing:border-box;margin-top:-1px;max-height:200px;position:absolute;left:0;top:100%;width:100%;z-index:1;-webkit-overflow-scrolling:touch}.Select-menu{max-height:198px;overflow-y:auto}.Select-option{box-sizing:border-box;background-color:#fff;color:#666;cursor:pointer;display:block;padding:8px 10px}.Select-option:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.Select-option.is-selected{background-color:#f5faff;background-color:rgba(0,126,255,.04);color:#333}.Select-option.is-focused{background-color:#ebf5ff;background-color:rgba(0,126,255,.08);color:#333}.Select-option.is-disabled{color:#ccc;cursor:default}.Select-noresults{box-sizing:border-box;color:#999;cursor:default;display:block;padding:8px 10px}.Select--multi .Select-input{vertical-align:middle;margin-left:10px;padding:0}.Select--multi.Select--rtl .Select-input{margin-left:0;margin-right:10px}.Select--multi.has-value .Select-input{margin-left:5px}.Select--multi .Select-value{background-color:#ebf5ff;background-color:rgba(0,126,255,.08);border-radius:2px;border:1px solid #c2e0ff;border:1px solid rgba(0,126,255,.24);color:#007eff;display:inline-block;font-size:.9em;line-height:1.4;margin-left:5px;margin-top:5px;vertical-align:top}.Select--multi .Select-value-icon,.Select--multi .Select-value-label{display:inline-block;vertical-align:middle}.Select--multi .Select-value-label{border-bottom-right-radius:2px;border-top-right-radius:2px;cursor:default;padding:2px 5px}.Select--multi a.Select-value-label{color:#007eff;cursor:pointer;text-decoration:none}.Select--multi a.Select-value-label:hover{text-decoration:underline}.Select--multi .Select-value-icon{cursor:pointer;border-bottom-left-radius:2px;border-top-left-radius:2px;border-right:1px solid #c2e0ff;border-right:1px solid rgba(0,126,255,.24);padding:1px 5px 3px}.Select--multi .Select-value-icon:focus,.Select--multi .Select-value-icon:hover{background-color:#d8eafd;background-color:rgba(0,113,230,.08);color:#0071e6}.Select--multi .Select-value-icon:active{background-color:#c2e0ff;background-color:rgba(0,126,255,.24)}.Select--multi.Select--rtl .Select-value{margin-left:0;margin-right:5px}.Select--multi.Select--rtl .Select-value-icon{border-right:none;border-left:1px solid #c2e0ff;border-left:1px solid rgba(0,126,255,.24)}.Select--multi.is-disabled .Select-value{background-color:#fcfcfc;border:1px solid #e3e3e3;color:#333}.Select--multi.is-disabled .Select-value-icon{cursor:not-allowed;border-right:1px solid #e3e3e3}.Select--multi.is-disabled .Select-value-icon:active,.Select--multi.is-disabled .Select-value-icon:focus,.Select--multi.is-disabled .Select-value-icon:hover{background-color:#fcfcfc}@keyframes Select-animation-spin{to{transform:rotate(1turn)}}@-webkit-keyframes Select-animation-spin{to{-webkit-transform:rotate(1turn)}}",""])},710:function(e,t,a){"use strict";a.d(t,"h",(function(){return n})),a.d(t,"b",(function(){return o})),a.d(t,"v",(function(){return l})),a.d(t,"u",(function(){return r})),a.d(t,"x",(function(){return i})),a.d(t,"g",(function(){return c})),a.d(t,"i",(function(){return s})),a.d(t,"q",(function(){return u})),a.d(t,"a",(function(){return d})),a.d(t,"m",(function(){return p})),a.d(t,"w",(function(){return m})),a.d(t,"f",(function(){return f})),a.d(t,"k",(function(){return b})),a.d(t,"s",(function(){return g})),a.d(t,"d",(function(){return S})),a.d(t,"l",(function(){return h})),a.d(t,"t",(function(){return v})),a.d(t,"e",(function(){return E})),a.d(t,"n",(function(){return y})),a.d(t,"p",(function(){return x})),a.d(t,"o",(function(){return N})),a.d(t,"j",(function(){return k})),a.d(t,"r",(function(){return C})),a.d(t,"c",(function(){return I}));var n=function(e){return{type:"FETCH_CONTACT_DETAILS",payload:e}},o=function(e){return{type:"DELETE_CONTACT",id:e}},l=function(e){return{type:"UPDATE_PERSON",contactDetails:e}},r=function(e){return{type:"UPDATE_ORGANISATION",contactDetails:e}},i=function(e){return{type:"UPDATE_PORTAL_USER",portalUser:e}},c=function(e){return{type:"DELETE_PORTAL_USER",id:e}},s=function(e){return{type:"NEW_ADDRESS",address:e}},u=function(e){return{type:"UPDATE_ADDRESS",address:e}},d=function(e){return{type:"DELETE_ADDRESS",id:e}},p=function(e){return{type:"NEW_PHONE_NUMBER",phoneNumber:e}},m=function(e){return{type:"UPDATE_PHONE_NUMBER",phoneNumber:e}},f=function(e){return{type:"DELETE_PHONE_NUMBER",id:e}},b=function(e){return{type:"NEW_EMAIL_ADDRESS",emailAddress:e}},g=function(e){return{type:"UPDATE_EMAIL_ADDRESS",emailAddress:e}},S=function(e){return{type:"DELETE_EMAIL_ADDRESS",id:e}},h=function(e){return{type:"NEW_CONTACT_NOTE",note:e}},v=function(e){return{type:"UPDATE_CONTACT_NOTE",note:e}},E=function(e){return{type:"DELETE_CONTACT_NOTE",id:e}},y=function(){return{type:"UNSET_PRIMARY_ADDRESSES"}},x=function(){return{type:"UNSET_PRIMARY_PHONE_NUMBERS"}},N=function(){return{type:"UNSET_PRIMARY_EMAIL_ADDRESSES"}},k=function(e){return{type:"NEW_CONTACT_ENERGY_SUPPLIER",contactEnergySupplier:e}},C=function(e){return{type:"UPDATE_CONTACT_ENERGY_SUPPLIER",contactEnergySupplier:e}},I=function(e){return{type:"DELETE_CONTACT_ENERGY_SUPPLIER",id:e}}},718:function(e,t,a){"use strict";var n=a(0),o=a.n(n),l=a(14),r=a.n(l),i=a(709),c=(a(695),function(e){var t=e.label,a=(e.className,e.size),n=e.id,l=e.name,r=e.value,c=e.options,s=e.optionId,u=e.optionName,d=e.onChangeAction,p=e.required,m=e.multi,f=e.error;return o.a.createElement("div",{className:"form-group col-sm-6"},o.a.createElement("label",{htmlFor:n,className:"col-sm-6 ".concat(p)},t),o.a.createElement("div",{className:"".concat(a)},o.a.createElement(i.default,{id:n,name:l,value:r,onChange:d,options:c,valueKey:s,labelKey:u,placeholder:"",noResultsText:"Geen resultaat gevonden",multi:m,simpleValue:!0,removeSelected:!0,className:f?" has-error":""})))});c.defaultProps={className:"",size:"col-sm-6",optionId:"id",optionName:"name",readOnly:!1,required:"",error:!1,value:"",multi:!0},c.propTypes={label:r.a.string.isRequired,className:r.a.string,size:r.a.string,id:r.a.string,name:r.a.string.isRequired,options:r.a.array,optionId:r.a.string,optionName:r.a.string,value:r.a.string,onChangeAction:r.a.func,onBlurAction:r.a.func,required:r.a.string,readOnly:r.a.bool,error:r.a.bool,multi:r.a.bool},t.a=c}}]);