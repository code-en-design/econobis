(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{1639:function(e,a,t){"use strict";t.r(a);var n=t(25),r=t.n(n),o=t(24),s=t.n(o),i=t(26),l=t.n(i),c=t(27),d=t.n(c),u=t(21),m=t.n(u),p=t(28),g=t.n(p),h=t(6),y=t.n(h),f=t(0),v=t.n(f),E=t(689),b=t.n(E),w=t(4),k=t(682),N=t(683),C=t(685),A=function(e){function a(e){return r()(this,a),l()(this,d()(a).call(this,e))}return g()(a,e),s()(a,[{key:"render",value:function(){return v.a.createElement("div",{className:"row"},v.a.createElement("div",{className:"col-sm-12"},v.a.createElement(k.a,null,v.a.createElement(N.a,{className:"panel-small"},v.a.createElement("div",{className:"col-md-4"},v.a.createElement("div",{className:"btn-group btn-group-flex margin-small",role:"group"},v.a.createElement(C.a,{iconName:"glyphicon-arrow-left",onClickAction:w.e.goBack}))),v.a.createElement("div",{className:"col-md-4"},v.a.createElement("h3",{className:"text-center table-title"},"Nieuwe opbrengst")),v.a.createElement("div",{className:"col-md-4"})))))}}]),a}(f.Component),j=t(788),I=t.n(j),P=t(33),T=t(8),R=t.n(T),D=t(688),B=t(691),O=t(684),S=t(696),M=t(686),F=t(790),L=t(687);function q(){var e=I()(["\n    font-weight: normal;\n"]);return q=function(){return e},e}R.a.locale("nl");var x=F.a.em(q()),H=Object(P.b)((function(e){return{projectRevenueTypes:e.systemData.projectRevenueTypes,projectRevenueCategories:e.systemData.projectRevenueCategories,projectRevenueDistributionTypes:e.systemData.projectRevenueDistributionTypes,participantProjectPayoutTypes:e.systemData.participantProjectPayoutTypes}}))((function(e){var a=e.revenue,t=a.distributionTypeId,n=a.confirmed,r=a.dateBegin,o=a.dateEnd,s=a.dateReference,i=(a.dateConfirmed,a.payoutTypeId),l=a.kwhStart,c=a.kwhEnd,d=a.kwhStartHigh,u=a.kwhEndHigh,m=a.kwhStartLow,p=a.kwhEndLow,g=a.revenue,h=a.payPercentage,y=a.payAmount,f=a.keyAmountFirstPercentage,E=a.payPercentageValidFromKeyAmount,b=a.categoryId,w=a.payoutKwh,k=e.projectRevenueCategories.find((function(e){return e.id==b})),N="";return e.project&&e.project.projectType&&e.project.projectType.codeRef&&(N=e.project.projectType.codeRef),v.a.createElement("form",{className:"form-horizontal col-md-12",onSubmit:e.handleSubmit},v.a.createElement("div",{className:"row"},v.a.createElement("div",{className:"panel-heading"},v.a.createElement("span",{className:"h5 text-bold"},"Algemeen"))),v.a.createElement("div",{className:"row"},v.a.createElement(L.a,{label:"Soort",value:k?k.name:"",className:"form-group col-sm-6"}),v.a.createElement(L.a,{label:"Definitief",value:n?"Ja":"Nee",className:"form-group col-sm-6"})),"revenueEuro"===k.codeRef?v.a.createElement("div",{className:"row"},"obligation"===N?v.a.createElement(D.a,{label:"Type opbrengst verdeling",name:"distributionTypeId",options:e.projectRevenueDistributionTypes,value:t,onChangeAction:e.handleInputChange,error:e.errors.distributionTypeId}):null,"inPossessionOf"===t?v.a.createElement(B.a,{label:"Peildatum",name:"dateReference",value:s,onChangeAction:e.handleInputChangeDate,required:"required",error:e.errors.dateReference}):null):null,"redemptionEuro"===k.codeRef?v.a.createElement("div",{className:"row"},"inPossessionOf"===t?v.a.createElement(B.a,{label:"Peildatum",name:"dateReference",value:s,onChangeAction:e.handleInputChangeDate,required:"required",error:e.errors.dateReference}):null):null,v.a.createElement("div",{className:"row"},v.a.createElement(B.a,{label:"Begin periode",name:"dateBegin",value:r,onChangeAction:e.handleInputChangeDate,required:"required",error:e.errors.dateBegin,errorMessage:e.errorMessage.dateBegin,disabledBefore:"revenueEuro"!==k.codeRef||"loan"!==N&&"obligation"!==N?"redemptionEuro"===k.codeRef?e.project.dateInterestBearingRedemption:"revenueKwh"===k.codeRef?e.project.dateInterestBearingKwh:"":e.project.dateInterestBearing}),v.a.createElement(B.a,{label:"Eind periode",name:"dateEnd",value:o,onChangeAction:e.handleInputChangeDate,required:"required",error:e.errors.dateEnd,errorMessage:e.errorMessage.dateEnd,disabledBefore:r,disabledAfter:"revenueKwh"===k.codeRef?R()(r).add(1,"year").add(6,"month").format("Y-MM-DD"):R()(r).endOf("year").format("Y-MM-DD")})),v.a.createElement("div",{className:"row"},v.a.createElement("div",{className:"form-group col-sm-6"}),"revenueEuro"!==k.codeRef||"capital"!==N&&"postalcode_link_capital"!==N?null:v.a.createElement(D.a,{label:"Uitkeren op",name:"payoutTypeId",id:"payoutTypeId",options:e.participantProjectPayoutTypes,value:i,onChangeAction:e.handleInputChange,required:"required",error:e.errors.payoutTypeId,errorMessage:e.errorMessage.payoutTypeId})),"revenueKwh"===k.codeRef?v.a.createElement(v.a.Fragment,null,v.a.createElement("div",{className:"row"},v.a.createElement("div",{className:"panel-part panel-heading"},v.a.createElement("span",{className:"h5 text-bold"},"Opbrengst kWh"))),v.a.createElement("div",{className:"row"},e.project.kwhStartHighNextRevenue>0?v.a.createElement(M.a,{type:"number",label:"Beginstand kWh hoog",name:"kwhStartHigh",value:d,readOnly:!0}):v.a.createElement(M.a,{type:"number",label:"Beginstand kWh hoog",name:"kwhStartHigh",value:d,onChangeAction:e.handleInputChange}),v.a.createElement(M.a,{type:"number",label:"Eindstand kWh hoog",name:"kwhEndHigh",value:u,onChangeAction:e.handleInputChange,error:e.errors.kwhEndHigh,errorMessage:e.errorMessage.kwhEndHigh})),v.a.createElement("div",{className:"row"},e.project.kwhStartHighNextRevenue>0?v.a.createElement(M.a,{type:"number",label:"Beginstand kWh laag",name:"kwhStartLow",value:m,readOnly:!0}):v.a.createElement(M.a,{type:"number",label:"Beginstand kWh laag",name:"kwhStartLow",value:m,onChangeAction:e.handleInputChange}),v.a.createElement(M.a,{type:"number",label:"Eindstand kWh laag",name:"kwhEndLow",value:p,onChangeAction:e.handleInputChange,error:e.errors.kwhEndLow,errorMessage:e.errorMessage.kwhEndLow})),v.a.createElement("div",{className:"row"},v.a.createElement(M.a,{type:"number",label:"Beginstand kWh",name:"kwhStart",value:l,readOnly:!0}),v.a.createElement(M.a,{type:"number",label:"Eindstand kWh",name:"kwhEnd",value:c,readOnly:!0})),v.a.createElement("div",{className:"row"},v.a.createElement(M.a,{type:"number",label:"Opbrengst kWh €",name:"payoutKwh",value:w&&w.toLocaleString("nl",{minimumFractionDigits:3,maximumFractionDigits:3}),onChangeAction:e.handleInputChange}))):null,"revenueEuro"===k.codeRef?v.a.createElement(v.a.Fragment,null,v.a.createElement("div",{className:"row"},v.a.createElement("div",{className:"panel-part panel-heading"},v.a.createElement("span",{className:"h5 text-bold"},"Opbrengst euro"))),"loan"===N||"obligation"===N?v.a.createElement(v.a.Fragment,null,v.a.createElement("div",{className:"row"},v.a.createElement(M.a,{type:"number",label:"Uitkering %",name:"payPercentage",value:h,onChangeAction:e.handleInputChange,error:e.errors.payPercentage}),v.a.createElement(M.a,{type:"number",label:"loan"===N?"of uitkeringsbedrag (per deelnemer)":"of uitkeringsbedrag (per participatie)",name:"payAmount",value:y,onChangeAction:e.handleInputChange,error:e.errors.payAmount,errorMessage:e.errorMessage.payAmount})),v.a.createElement("div",{className:"row"},v.a.createElement(M.a,{label:v.a.createElement(v.a.Fragment,null,"Bedrag ",v.a.createElement(x,null,"(uitkering % geldig tot en met)")),name:"keyAmountFirstPercentage",value:f,onChangeAction:e.handleInputChange,error:e.errors.keyAmountFirstPercentage})),f?v.a.createElement("div",{className:"row"},v.a.createElement(M.a,{type:"number",label:v.a.createElement(v.a.Fragment,null,"Uitkering % vanaf bedrag"),name:"payPercentageValidFromKeyAmount",value:E,onChangeAction:e.handleInputChange,error:e.errors.payPercentageValidFromKeyAmount})):null):null,"capital"===N||"postalcode_link_capital"===N?v.a.createElement(v.a.Fragment,null,v.a.createElement("div",{className:"row"},v.a.createElement(M.a,{type:"number",label:"Resultaat",name:"revenue",value:g,onChangeAction:e.handleInputChange}))):null):null,"redemptionEuro"===k.codeRef?v.a.createElement(v.a.Fragment,null,v.a.createElement("div",{className:"row"},v.a.createElement("div",{className:"panel-part panel-heading"},v.a.createElement("span",{className:"h5 text-bold"},"Aflossing euro"))),"loan"===N||"obligation"===N?v.a.createElement(v.a.Fragment,null,v.a.createElement("div",{className:"row"},v.a.createElement(M.a,{type:"number",label:"Aflossing %",name:"payPercentage",value:h,onChangeAction:e.handleInputChange}),v.a.createElement(M.a,{type:"number",label:"loan"===N?"of aflossingsbedrag (per deelname)":"of aflossingsbedrag (per participatie)",name:"payAmount",value:y,onChangeAction:e.handleInputChange,error:e.errors.payAmount,errorMessage:e.errorMessage.payAmount}))):null):null,v.a.createElement(S.a,null,v.a.createElement("div",{className:"pull-right btn-group",role:"group"},v.a.createElement(O.a,{buttonText:"Opslaan",onClickAction:e.handleSubmit,type:"submit",value:"Submit",loading:e.isLoading}))))})),z=t(91),K=t(151);function V(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function W(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?V(Object(t),!0).forEach((function(a){y()(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):V(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var Y=function(e){function a(e){var t;return r()(this,a),t=l()(this,d()(a).call(this,e)),y()(m()(t),"fetchProject",(function(e){K.a.fetchProject(e).then((function(e){var a=t.props.projectRevenueCategories.find((function(e){return e.id==t.state.revenue.categoryId})),n=t.state.revenue;if("redemptionEuro"===a.codeRef){var r=t.props.participantProjectPayoutTypes.find((function(e){return"account"===e.codeRef})).id;n.payoutTypeId=r,n.distributionTypeId="inPossessionOf"}else if("loan"!==e.projectType.codeRef)n.distributionTypeId="inPossessionOf";else if("obligation"===e.projectType.codeRef){var o=t.props.participantProjectPayoutTypes.find((function(e){return"account"===e.codeRef})).id;n.payoutTypeId=o}"revenueEuro"===a.codeRef&&(n.dateBegin=e.dateInterestBearing,n.dateEnd=e.dateInterestBearing?R()(e.dateInterestBearing).endOf("year").format("Y-MM-DD"):""),"redemptionEuro"===a.codeRef&&(n.dateBegin=e.dateInterestBearingRedemption,n.dateEnd=e.dateInterestBearingRedemption?R()(e.dateInterestBearingRedemption).endOf("year").format("Y-MM-DD"):""),"revenueKwh"===a.codeRef&&(n.dateBegin=e.dateInterestBearingKwh,n.dateEnd=e.dateInterestBearingKwh?R()(e.dateInterestBearingKwh).endOf("year").format("Y-MM-DD"):"",n.kwhStartHigh=e.kwhStartHighNextRevenue,n.kwhStartLow=e.kwhStartLowNextRevenue),t.setState(W({},t.state,{project:e,revenue:n}))}))})),y()(m()(t),"handleInputChange",(function(e){var a=e.target,n="checkbox"===a.type?a.checked:a.value,r=a.name;t.setState(W({},t.state,{revenue:W({},t.state.revenue,y()({},r,n))}),(function(){return t.linkedValueAdjustment(r)})),setTimeout((function(){var e=(t.state.revenue.kwhStartLow?parseFloat(t.state.revenue.kwhStartLow):0)+(t.state.revenue.kwhStartHigh?parseFloat(t.state.revenue.kwhStartHigh):0),a=(t.state.revenue.kwhEndLow?parseFloat(t.state.revenue.kwhEndLow):0)+(t.state.revenue.kwhEndHigh?parseFloat(t.state.revenue.kwhEndHigh):0);t.setState(W({},t.state,{revenue:W({},t.state.revenue,{kwhStart:e,kwhEnd:a})}))}),200)})),y()(m()(t),"linkedValueAdjustment",(function(e){"keyAmountFirstPercentage"===e&&(t.state.revenue.keyAmountFirstPercentage&&0!=t.state.revenue.keyAmountFirstPercentage||t.setState(W({},t.state,{revenue:W({},t.state.revenue,{payPercentageValidFromKeyAmount:""})})))})),y()(m()(t),"handleSubmit",(function(e){e.preventDefault();var a=t.state.revenue,n=t.props.projectRevenueCategories.find((function(e){return e.id==a.categoryId})),r={},o={},s=!1;if(b.a.isEmpty(a.categoryId+"")&&(r.categoryId=!0,s=!0),a.dateBegin||(r.dateBegin=!0,o.dateBegin="Verplicht",s=!0),a.dateEnd||(r.dateEnd=!0,o.dateEnd="Verplicht",s=!0),!s&&a.dateEnd<a.dateBegin&&(r.dateEnd=!0,o.dateEnd="Eind periode mag niet voor Begin periode liggen.",s=!0),s||"revenueKwh"===n.codeRef||R()(a.dateBegin).year()===R()(a.dateEnd).year()||(r.dateBegin=!0,o.dateBegin="Jaaroverschrijdende perioden niet toegestaan.",r.dateEnd=!0,o.dateEnd="Jaaroverschrijdende perioden niet toegestaan.",s=!0),"inPossessionOf"===a.distributionTypeId&&b.a.isEmpty(a.dateReference+"")&&(r.dateReference=!0,s=!0),b.a.isEmpty(a.payAmount+"")||("inPossessionOf"!==a.distributionTypeId&&(r.payAmount=!0,o.payAmount='Bedrag mag alleen bij type opbrengst verdeling "In bezit op" ingevuld zijn.',s=!0),a.payAmount+""<0&&(r.payAmount=!0,o.payAmount="Bedrag mag niet negatief zijn.",s=!0)),"revenueKwh"===n.codeRef&&(a.kwhEndHigh<a.kwhStartHigh&&(r.kwhEndHigh=!0,o.kwhEndHigh="Eindstand kWh hoog mag niet lager zijn dan Beginstand kWh hoog.",s=!0),a.kwhEndLow<a.kwhStartLow&&(r.kwhEndLow=!0,o.kwhEndLow="Eindstand kWh laag mag niet lager zijn dan Beginstand kWh laag.",s=!0)),"revenueEuro"===n.codeRef&&("capital"===t.state.project.projectType.codeRef||"postalcode_link_capital"===t.state.project.projectType.codeRef)){b.a.isEmpty(a.payoutTypeId+"")&&(r.payoutTypeId=!0,s=!0);var i=t.props.participantProjectPayoutTypes.find((function(e){return"account"===e.codeRef})).id;a.revenue<0&&a.payoutTypeId==i&&(r.payoutTypeId=!0,o.payoutTypeId="Als je een negatief resultaat wilt verdelen dan kan dat niet uitgekeerd worden op een rekening. Kies voor bijschrijven.",s=!0)}b.a.isEmpty(a.payPercentage+"")&&0==a.keyAmountFirstPercentage&&b.a.isEmpty(a.payPercentageValidFromKeyAmount+"")||b.a.isEmpty(a.payAmount+"")||(r.payAmount=!0,r.payPercentage=!0,r.keyAmountFirstPercentage=!0,r.payPercentageValidFromKeyAmount=!0,o.payAmount="Percentage(s) en Bedrag mogen niet allebei ingevuld zijn.",s=!0),t.setState(W({},t.state,{errors:r,errorMessage:o})),s||(t.setState({isLoading:!0}),z.a.storeProjectRevenue(a).then((function(e){t.setState({isLoading:!1}),w.f.replace("/project/details/".concat(t.props.params.projectId)),w.f.push("/project/opbrengst/".concat(e.data.data.id))})).catch((function(e){console.log(e),alert("Er is iets misgegaan bij opslaan. Probeer nogmaals een nieuwe opbrengstverdeling te maken vanuit het project."),w.f.goBack()})))})),t.state={revenue:{projectId:e.params.projectId,categoryId:e.params.categoryId,distributionTypeId:"",confirmed:!1,dateBegin:"",dateEnd:"",dateReference:R()(),dateConfirmed:"",payoutTypeId:"",kwhStart:0,kwhEnd:0,kwhStartHigh:"",kwhEndHigh:"",kwhStartLow:"",kwhEndLow:"",revenue:"",datePayed:"",payPercentage:"",payAmount:"",keyAmountFirstPercentage:"",payPercentageValidFromKeyAmount:"",payoutKwh:""},errors:{categoryId:!1,dateBegin:!1,dateEnd:!1,dateReference:!1,payoutTypeId:!1,kwhEndHigh:!1,kwhEndLow:!1,payAmount:!1,payPercentage:!1,keyAmountFirstPercentage:!1,payPercentageValidFromKeyAmount:!1},errorMessage:{payoutTypeId:"",dateBegin:"",dateEnd:"",kwhEndHigh:"",kwhEndLow:"",payAmount:""},project:{},isLoading:!1},t.handleInputChangeDate=t.handleInputChangeDate.bind(m()(t)),t.handleInputChangeDateConfirmed=t.handleInputChangeDateConfirmed.bind(m()(t)),t}return g()(a,e),s()(a,[{key:"componentDidMount",value:function(){this.fetchProject(this.props.params.projectId)}},{key:"componentDidUpdate",value:function(e){this.props.params.projectId!==e.params.projectId&&this.fetchProject(this.props.params.projectId)}},{key:"handleInputChangeDate",value:function(e,a){this.setState(W({},this.state,{revenue:W({},this.state.revenue,y()({},a,e))}))}},{key:"handleInputChangeDateConfirmed",value:function(e,a){var t,n;e?this.setState(W({},this.state,{revenue:W({},this.state.revenue,(t={},y()(t,a,e),y()(t,"confirmed",!0),t))})):this.setState(W({},this.state,{revenue:W({},this.state.revenue,(n={},y()(n,a,e),y()(n,"confirmed",!1),n))}))}},{key:"render",value:function(){return v.a.createElement("div",{className:"row"},v.a.createElement("div",{className:"col-md-9"},v.a.createElement("div",{className:"col-md-12"},v.a.createElement(A,null)),v.a.createElement("div",{className:"col-md-12"},v.a.createElement(k.a,null,v.a.createElement(N.a,null,v.a.createElement("div",{className:"col-md-12"},v.a.createElement(H,{revenue:this.state.revenue,errors:this.state.errors,errorMessage:this.state.errorMessage,handleInputChange:this.handleInputChange,handleInputChangeDate:this.handleInputChangeDate,handleInputChangeDateConfirmed:this.handleInputChangeDateConfirmed,handleSubmit:this.handleSubmit,project:this.state.project,isLoading:this.state.isLoading})))))),v.a.createElement("div",{className:"col-md-3"}))}}]),a}(f.Component);a.default=Object(P.b)((function(e){return{projectRevenueCategories:e.systemData.projectRevenueCategories,participantProjectPayoutTypes:e.systemData.participantProjectPayoutTypes}}))(Y)},682:function(e,a,t){"use strict";var n=t(0),r=t.n(n),o=t(14),s=t.n(o),i=function(e){var a=e.children,t=e.className,n=e.onMouseEnter,o=e.onMouseLeave;return r.a.createElement("div",{className:"panel panel-default ".concat(t),onMouseEnter:n,onMouseLeave:o},a)};i.defaultProps={className:"",onMouseEnter:function(){},onMouseLeave:function(){}},i.propTypes={className:s.a.string,onMouseEnter:s.a.func,onMouseLeave:s.a.func},a.a=i},683:function(e,a,t){"use strict";var n=t(0),r=t.n(n),o=t(14),s=t.n(o),i=function(e){var a=e.className,t=e.children;return r.a.createElement("div",{className:"panel-body ".concat(a)},t)};i.defaultProps={className:""},i.propTypes={className:s.a.string},a.a=i},684:function(e,a,t){"use strict";var n=t(0),r=t.n(n),o=t(14),s=t.n(o),i=function(e){var a=e.buttonClassName,t=e.buttonText,n=e.onClickAction,o=e.type,s=e.value,i=e.loading,l=e.loadText,c=e.disabled;return i?r.a.createElement("button",{type:o,className:"btn btn-sm btn-loading ".concat(a),value:s,disabled:i},r.a.createElement("span",{className:"glyphicon glyphicon-refresh glyphicon-refresh-animate"})," ",l):r.a.createElement("button",{type:o,className:"btn btn-sm ".concat(a),onClick:n,value:s,disabled:c},t)};i.defaultProps={buttonClassName:"btn-success",type:"button",value:"",loading:!1,loadText:"Aan het laden",disabled:!1},i.propTypes={buttonClassName:s.a.string,buttonText:s.a.string.isRequired,onClickAction:s.a.func,type:s.a.string,value:s.a.string,loading:s.a.bool,loadText:s.a.string,disabled:s.a.bool},a.a=i},685:function(e,a,t){"use strict";var n=t(0),r=t.n(n),o=t(14),s=t.n(o),i=function(e){var a=e.buttonClassName,t=e.iconName,n=e.onClickAction,o=e.title,s=e.disabled;return r.a.createElement("button",{type:"button",className:"btn ".concat(a),onClick:n,disabled:s,title:o},r.a.createElement("span",{className:"glyphicon ".concat(t)}))};i.defaultProps={buttonClassName:"btn-success btn-sm",title:"",disabled:!1},i.propTypes={buttonClassName:s.a.string,iconName:s.a.string.isRequired,onClickAction:s.a.func,title:s.a.string,disabled:s.a.bool},a.a=i},686:function(e,a,t){"use strict";var n=t(0),r=t.n(n),o=t(14),s=t.n(o),i=function(e){var a=e.label,t=e.type,n=e.className,o=e.size,s=e.id,i=e.placeholder,l=e.name,c=e.value,d=e.onClickAction,u=e.onChangeAction,m=e.onBlurAction,p=e.required,g=e.readOnly,h=e.maxLength,y=e.error,f=e.min,v=e.max,E=e.step,b=e.errorMessage,w=e.divSize,k=e.divClassName,N=e.autoComplete;return r.a.createElement("div",{className:"form-group ".concat(w," ").concat(k)},r.a.createElement("label",{htmlFor:s,className:"col-sm-6 ".concat(p)},a),r.a.createElement("div",{className:"".concat(o)},r.a.createElement("input",{type:t,className:"form-control input-sm ".concat(n)+(y?"has-error":""),id:s,placeholder:i,name:l,value:c,onClick:d,onChange:u,onBlur:m,readOnly:g,maxLength:h,min:f,max:v,autoComplete:N,step:E})),y&&r.a.createElement("div",{className:"col-sm-offset-6 col-sm-6"},r.a.createElement("span",{className:"has-error-message"}," ",b)))};i.defaultProps={divClassName:"",className:"",size:"col-sm-6",divSize:"col-sm-6",name:"",type:"text",value:"",required:"",readOnly:!1,maxLength:null,error:!1,min:"",max:"",step:"",errorMessage:"",autoComplete:"off",onBlurAction:function(){},onClickAction:function(){},onChangeAction:function(){}},i.propTypes={label:s.a.oneOfType([s.a.string,s.a.object]).isRequired,type:s.a.string,className:s.a.string,divClassName:s.a.string,size:s.a.string,divSize:s.a.string,id:s.a.string,placeholder:s.a.string,name:s.a.string.isRequired,value:s.a.oneOfType([s.a.string,s.a.number]),onClickAction:s.a.func,onChangeAction:s.a.func,onBlurAction:s.a.func,required:s.a.string,readOnly:s.a.bool,maxLength:s.a.string,error:s.a.bool,min:s.a.string,max:s.a.string,step:s.a.string,errorMessage:s.a.string,autoComplete:s.a.string},a.a=i},687:function(e,a,t){"use strict";var n=t(0),r=t.n(n),o=t(4),s=t(14),i=t.n(s),l=function(e){var a=e.label,t=e.className,n=e.id,s=e.value,i=e.link,l=e.hidden;return i.length>0?r.a.createElement("div",{className:t,style:l?{display:"none"}:{}},r.a.createElement("label",{htmlFor:n,className:"col-sm-6"},a),r.a.createElement("div",{className:"col-sm-6",id:n,onClick:null},r.a.createElement(o.b,{to:i,className:"link-underline"},s))):r.a.createElement("div",{className:t,style:l?{display:"none"}:{}},r.a.createElement("label",{htmlFor:n,className:"col-sm-6"},a),r.a.createElement("div",{className:"col-sm-6",id:n},s))};l.defaultProps={className:"col-sm-6",value:"",link:"",hidden:!1},l.propTypes={label:i.a.oneOfType([i.a.string,i.a.object]).isRequired,className:i.a.string,id:i.a.string,value:i.a.oneOfType([i.a.string,i.a.number]),link:i.a.string,hidden:i.a.bool},a.a=l},688:function(e,a,t){"use strict";var n=t(0),r=t.n(n),o=t(14),s=t.n(o),i=function(e){var a=e.label,t=e.className,n=e.size,o=e.id,s=e.name,i=e.value,l=e.options,c=e.onChangeAction,d=e.onBlurAction,u=e.required,m=e.error,p=e.errorMessage,g=e.optionValue,h=e.optionName,y=e.readOnly,f=e.placeholder,v=e.divClassName,E=e.emptyOption;return r.a.createElement("div",{className:"form-group ".concat(n," ").concat(v)},r.a.createElement("label",{htmlFor:o,className:"col-sm-6 ".concat(u)},a),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("select",{className:"form-control input-sm ".concat(t)+(m&&" has-error"),id:o,name:s,value:i,onChange:c,onBlur:d,readOnly:y},E&&r.a.createElement("option",{value:""},f),l.map((function(e){return r.a.createElement("option",{key:e[g],value:e[g]},e[h])})))),m&&r.a.createElement("div",{className:"col-sm-offset-6 col-sm-6"},r.a.createElement("span",{className:"has-error-message"}," ",p)))};i.defaultProps={divClassName:"",className:"",size:"col-sm-6",readOnly:!1,required:"",error:!1,errorMessage:"",value:"",optionValue:"id",optionName:"name",placeholder:"",emptyOption:!0},i.propTypes={label:s.a.string.isRequired,className:s.a.string,size:s.a.string,id:s.a.string,name:s.a.string.isRequired,options:s.a.array,value:s.a.oneOfType([s.a.string,s.a.number]),onChangeAction:s.a.func,onBlurAction:s.a.func,required:s.a.string,readOnly:s.a.bool,error:s.a.bool,errorMessage:s.a.string,emptyOption:s.a.bool,optionValue:s.a.string,optionName:s.a.string,placeholder:s.a.string},a.a=i},691:function(e,a,t){"use strict";var n=t(25),r=t.n(n),o=t(24),s=t.n(o),i=t(26),l=t.n(i),c=t(27),d=t.n(c),u=t(21),m=t.n(u),p=t(28),g=t.n(p),h=t(6),y=t.n(h),f=t(0),v=t.n(f),E=t(14),b=t.n(E),w=t(703),k=t.n(w),N=t(704),C=t.n(N),A=t(8),j=t.n(A);j.a.locale("nl");var I=function(e){function a(e){var t;return r()(this,a),t=l()(this,d()(a).call(this,e)),y()(m()(t),"validateDate",(function(e){var a=j()(e.target.value,"DD-MM-YYYY",!0),n=!1;a.isValid()||""===e.target.value||(n=!0),t.props.disabledBefore&&a.isBefore(t.props.disabledBefore)&&(n=!0),t.props.disabledAfter&&a.isAfter(t.props.disabledAfter)&&(n=!0),t.setState({errorDateFormat:n})})),y()(m()(t),"onDateChange",(function(e){var a=e?j()(e).format("Y-MM-DD"):"",n=!1;a&&t.props.disabledBefore&&j()(a).isBefore(t.props.disabledBefore)&&(n=!0),a&&t.props.disabledAfter&&j()(a).isAfter(t.props.disabledAfter)&&(n=!0),t.setState({errorDateFormat:n}),!n&&t.props.onChangeAction(a,t.props.name)})),t.state={errorDateFormat:!1},t}return g()(a,e),s()(a,[{key:"render",value:function(){var e=this.props,a=e.label,t=e.className,n=e.size,r=e.divSize,o=e.id,s=e.value,i=e.required,l=e.readOnly,c=e.name,d=e.error,u=e.errorMessage,m=e.disabledBefore,p=e.disabledAfter,g=s?j()(s).format("L"):"",h={};return m&&(h.before=new Date(m)),p&&(h.after=new Date(p)),v.a.createElement("div",{className:"form-group ".concat(r)},v.a.createElement("div",null,v.a.createElement("label",{htmlFor:o,className:"col-sm-6 ".concat(i)},a)),v.a.createElement("div",{className:"".concat(n)},v.a.createElement(k.a,{id:o,value:g,formatDate:N.formatDate,parseDate:N.parseDate,onDayChange:this.onDateChange,dayPickerProps:{showWeekNumbers:!0,locale:"nl",firstDayOfWeek:1,localeUtils:C.a,disabledDays:h},inputProps:{className:"form-control input-sm ".concat(t)+(this.state.errorDateFormat||d?" has-error":""),name:c,onBlur:this.validateDate,autoComplete:"off",readOnly:l,disabled:l},required:i,readOnly:l,placeholder:""})),d&&v.a.createElement("div",{className:"col-sm-offset-6 col-sm-6"},v.a.createElement("span",{className:"has-error-message"}," ",u)))}}]),a}(f.Component);I.defaultProps={className:"",size:"col-sm-6",divSize:"col-sm-6",required:"",readOnly:!1,value:null,error:!1,errorMessage:"",disabledBefore:null,disabledAfter:null},I.propTypes={label:b.a.string.isRequired,type:b.a.string,className:b.a.string,size:b.a.string,divSize:b.a.string,id:b.a.string,name:b.a.string,value:b.a.oneOfType([b.a.string,b.a.object]),onChangeAction:b.a.func,required:b.a.string,readOnly:b.a.bool,error:b.a.bool,errorMessage:b.a.string,disabledBefore:b.a.string,disabledAfter:b.a.string},a.a=I},696:function(e,a,t){"use strict";var n=t(0),r=t.n(n),o=t(14),s=t.n(o),i=function(e){var a=e.className,t=e.children;return r.a.createElement("div",{className:"panel-footer ".concat(a)},t)};i.defaultProps={className:""},i.propTypes={className:s.a.string},a.a=i}}]);