(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{1546:function(e,t,a){"use strict";a.r(t);var n=a(10),l=a.n(n),s=a(25),o=a.n(s),r=a(24),i=a.n(r),c=a(26),m=a.n(c),d=a(27),u=a.n(d),h=a(21),p=a.n(h),g=a(28),f=a.n(g),b=a(6),v=a.n(b),E=a(0),N=a.n(E),y=a(4),C=a(689),I=a.n(C),A=a(33),w=Object(A.b)((function(e){return{permissions:e.meDetails.permissions}}))((function(e){var t=e.attachment.name;return N.a.createElement("div",{className:"row border ".concat(e.highlightLine),onMouseEnter:function(){return e.onLineEnter()},onMouseLeave:function(){return e.onLineLeave()}},N.a.createElement("div",{className:"col-sm-11"},t),N.a.createElement("div",{className:"col-sm-1"},e.showActionButtons?N.a.createElement("a",{role:"button",onClick:e.toggleDelete},N.a.createElement("span",{className:"glyphicon glyphicon-trash mybtn-danger"})," "):""))})),T=a(98),k=(a(741),function(e){return N.a.createElement(T.a,{buttonConfirmText:"Verwijder",buttonClassName:"btn-danger",closeModal:e.toggleDelete,confirmAction:function(){return e.deleteAttachment(e.attachment.name),void e.toggleDelete()},title:"Verwijderen"},N.a.createElement("p",null,"Wil je deze bijlage verwijderen?"))}),S=function(e){function t(e){var a;return o()(this,t),a=m()(this,u()(t).call(this,e)),v()(p()(a),"onLineEnter",(function(){a.setState({showActionButtons:!0,highlightLine:"highlight-line"})})),v()(p()(a),"onLineLeave",(function(){a.setState({showActionButtons:!1,highlightLine:""})})),v()(p()(a),"toggleDelete",(function(){a.setState({showDelete:!a.state.showDelete})})),a.state={showActionButtons:!1,highlightLine:"",showDelete:!1},a}return f()(t,e),i()(t,[{key:"render",value:function(){return N.a.createElement("div",null,N.a.createElement(w,{highlightLine:this.state.highlightLine,showActionButtons:this.state.showActionButtons,onLineEnter:this.onLineEnter,onLineLeave:this.onLineLeave,toggleDelete:this.toggleDelete,attachment:this.props.attachment}),this.state.showDelete&&N.a.createElement(k,{toggleDelete:this.toggleDelete,attachment:this.props.attachment,deleteAttachment:this.props.deleteAttachment}))}}]),t}(E.Component),x=function(e){var t=e.attachments,a=e.deleteAttachment;return N.a.createElement("div",null,N.a.createElement("div",{className:"row border header"},N.a.createElement("div",{className:"col-sm-11"},"Bestand"),N.a.createElement("div",{className:"col-sm-1"})),t.length>0?t.map((function(e){return N.a.createElement(S,{key:e.name,attachment:e,deleteAttachment:a})})):N.a.createElement("div",null,"Geen bijlagen bekend."))},B=a(770).default,j=function(e){function t(e){var a;return o()(this,t),(a=m()(this,u()(t).call(this,e))).state={error:!1,errorMaxSize:!1},a}return f()(t,e),i()(t,[{key:"onDropAccepted",value:function(e){var t=this;this.props.addAttachment(e),setTimeout((function(){t.props.toggleShowNew()}),500)}},{key:"onDropRejected",value:function(){this.setState({errorMaxSize:!0})}},{key:"render",value:function(){return N.a.createElement(T.a,{closeModal:this.props.toggleShowNew,showConfirmAction:!1,title:"Upload bestand"},N.a.createElement("div",{className:"upload-file-content"},N.a.createElement(B,{className:"dropzone",onDropAccepted:this.onDropAccepted.bind(this),onDropRejected:this.onDropRejected.bind(this),maxSize:6e6},N.a.createElement("p",null,"Klik hier voor het uploaden van een bestand"),N.a.createElement("p",null,N.a.createElement("strong",null,"of")," sleep het bestand hierheen"))),this.state.error&&N.a.createElement("p",{className:"has-error-message"},"Uploaden mislukt. Probeer nogmaals een bestand te uploaden."),this.state.errorMaxSize&&N.a.createElement("p",{className:"has-error-message"},"Uploaden mislukt. Het bestand mag maximaal 6MB groot zijn."))}}]),t}(E.Component),O=a(683),L=a(690),M=a(682),q=function(e){function t(e){var a;return o()(this,t),a=m()(this,u()(t).call(this,e)),v()(p()(a),"toggleShowNew",(function(){a.setState({showNew:!a.state.showNew})})),a.state={showNew:!1},a}return f()(t,e),i()(t,[{key:"render",value:function(){return N.a.createElement(M.a,null,N.a.createElement(L.a,null,N.a.createElement("span",{className:"h5 text-bold"},"Bijlagen"),N.a.createElement("a",{role:"button",className:"pull-right",onClick:this.toggleShowNew},N.a.createElement("span",{className:"glyphicon glyphicon-plus"}))),N.a.createElement(O.a,null,N.a.createElement("div",{className:"col-md-12"},N.a.createElement(x,{attachments:this.props.attachments,deleteAttachment:this.props.deleteAttachment})),N.a.createElement("div",{className:"col-md-12 margin-10-top"},this.state.showNew&&N.a.createElement(j,{toggleShowNew:this.toggleShowNew,addAttachment:this.props.addAttachment}))))}}]),t}(E.Component),D=Object(A.b)((function(e){return{permissions:e.meDetails.permissions}}))(q),P=(a(733),a(831)),R=a(717),z=a(954),G=a(686),F=function(e){var t=e.email,a=e.contactGroupName,n=e.emailAddresses,l=e.mailboxAddresses,s=e.emailTemplates,o=e.errors,r=e.handleFromIds,i=e.handleToIds,c=e.handleEmailTemplates,m=e.handleCcIds,d=e.handleBccIds,u=e.handleInputChange,h=e.handleTextChange,p=t.from,g=t.to,f=t.cc,b=t.bcc,v=t.subject,E=t.htmlBody,y=t.emailTemplateId,C=t.contactGroupId;return N.a.createElement(M.a,null,N.a.createElement(O.a,null,N.a.createElement("div",{className:"row"},N.a.createElement(R.a,{label:"Van selecteren",name:"from",value:p,options:l,optionName:"email",onChangeAction:r,required:"required",error:o.from,multi:!1})),N.a.createElement("div",{className:"row"},C?N.a.createElement(G.a,{label:N.a.createElement("span",null,"Groep",N.a.createElement("br",null),N.a.createElement("small",{style:{color:"red",fontWeight:"normal"}},"Contacten in groep krijgen elk een aparte email")),name:"contactGroupName",value:a,readOnly:!0}):N.a.createElement(P.a,{label:N.a.createElement("span",null,"Aan selecteren",(g+"").split(",").length>1?N.a.createElement(N.a.Fragment,null,N.a.createElement("br",null),N.a.createElement("small",{style:{color:"red",fontWeight:"normal"}},"Meer dan 1 geselecteerd."),N.a.createElement("br",null),N.a.createElement("small",{style:{color:"red",fontWeight:"normal"}},"Samenvoegvelden contact niet mogelijk.")):""),name:"to",value:g,options:n,optionName:"name",onChangeAction:i,allowCreate:!0,required:"required",error:o.to})),N.a.createElement("div",{className:"row"},N.a.createElement(P.a,{label:"Cc selecteren",name:"cc",value:f,options:n,optionName:"name",onChangeAction:m})),N.a.createElement("div",{className:"row"},N.a.createElement(P.a,{label:"Bcc selecteren",name:"bcc",value:b,options:n,optionName:"name",onChangeAction:d})),N.a.createElement("div",{className:"row"},N.a.createElement(R.a,{label:"Template",name:"emailTemplateId",value:y,options:s,onChangeAction:c,multi:!1})),N.a.createElement("div",{className:"row"},N.a.createElement("div",{className:"form-group col-sm-12"},N.a.createElement("div",{className:"row"},N.a.createElement("div",{className:"col-sm-3"},N.a.createElement("label",{className:"col-sm-12 required"},"Onderwerp")),N.a.createElement("div",{className:"col-sm-9"},N.a.createElement("input",{type:"text",className:"form-control input-sm ".concat(o.subject?"has-error":""),name:"subject",value:v,onChange:u}))))),N.a.createElement("div",{className:"row"},N.a.createElement("div",{className:"form-group col-sm-12"},N.a.createElement("div",{className:"row"},N.a.createElement(z.a,{label:"Tekst",value:E,onChangeAction:h}))))))},_=function(e){var t=e.email,a=e.contactGroupName,n=e.mailboxAddresses,l=e.emailAddresses,s=e.emailTemplates,o=e.errors,r=e.handleSubmit,i=e.handleFromIds,c=e.handleEmailTemplates,m=e.handleToIds,d=e.handleCcIds,u=e.handleBccIds,h=e.handleInputChange,p=e.handleTextChange,g=e.addAttachment,f=e.deleteAttachment;return N.a.createElement("form",{className:"form-horizontal",onSubmit:r},N.a.createElement(F,{email:t,contactGroupName:a,emailAddresses:l,mailboxAddresses:n,emailTemplates:s,errors:o,handleSubmit:r,handleFromIds:i,handleEmailTemplates:c,handleToIds:m,handleCcIds:d,handleBccIds:u,handleInputChange:h,handleTextChange:p}),N.a.createElement(D,{attachments:t.attachments,addAttachment:g,deleteAttachment:f}))},U=a(685),V=a(684),W=function(e){var t=e.handleSubmit,a=e.loading,n=e.goBack;return N.a.createElement("div",{className:"row"},N.a.createElement("div",{className:"col-md-4"},N.a.createElement("div",{className:"btn-group margin-small margin-10-right",role:"group"},N.a.createElement(U.a,{iconName:"glyphicon-arrow-left",onClickAction:n})),N.a.createElement("div",{className:"btn-group margin-small",role:"group"},N.a.createElement(V.a,{buttonText:"Opslaan als concept",onClickAction:function(e){t(e,!0)}}),N.a.createElement(V.a,{buttonText:"Verstuur e-mail",onClickAction:t,loading:a,loadText:"E-mail verzenden"}))),N.a.createElement("div",{className:"col-md-4"},N.a.createElement("h4",{className:"text-center margin-small"},"Nieuwe e-mail")),N.a.createElement("div",{className:"col-md-4"}))},X=a(146),J=a(213),K=a(66),H=a(101),Q=(a(197),a(149));function Y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Z(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(a),!0).forEach((function(t){v()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Y(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var $=function(e){function t(e){var a;return o()(this,t),a=m()(this,u()(t).call(this,e)),v()(p()(a),"setButtonLoading",(function(){a.setState({buttonLoading:!0})})),v()(p()(a),"goBack",(function(){""!==a.state.email.htmlBody||""!==a.state.email.subject?a.toggleShowModal():y.e.goBack()})),v()(p()(a),"toggleShowModal",(function(){a.setState({showModal:!a.state.showModal})})),a.state={showModal:!1,buttonLoading:!1,emailAddresses:[],mailboxAddresses:[],emailTemplates:[],email:{from:"",to:"",cc:"",bcc:"",templateId:"",subject:"",htmlBody:"",attachments:[],quotationRequestId:e.params.quotationRequestId?e.params.quotationRequestId:"",intakeId:e.params.intakeId?e.params.intakeId:"",replyTypeId:e.params.replyTypeId?e.params.replyTypeId:"",oldEmailId:"",contactGroupId:e.params.contactGroupId?e.params.contactGroupId:""},contactGroupName:"",errors:{from:!1,to:!1,subject:!1}},a.handleInputChange=a.handleInputChange.bind(p()(a)),a.handleFromIds=a.handleFromIds.bind(p()(a)),a.handleEmailTemplates=a.handleEmailTemplates.bind(p()(a)),a.handleToIds=a.handleToIds.bind(p()(a)),a.handleCcIds=a.handleCcIds.bind(p()(a)),a.handleBccIds=a.handleBccIds.bind(p()(a)),a.handleTextChange=a.handleTextChange.bind(p()(a)),a.addAttachment=a.addAttachment.bind(p()(a)),a.deleteAttachment=a.deleteAttachment.bind(p()(a)),a.handleSubmit=a.handleSubmit.bind(p()(a)),a}return f()(t,e),i()(t,[{key:"componentDidMount",value:function(){var e=this;this.props.params.contactId&&J.a.fetchPrimaryEmailAddressId(this.props.params.contactId).then((function(t){e.setState(Z({},e.state,{email:Z({},e.state.email,{to:t.join(",")})}))})),this.props.params.contactGroupId&&X.a.fetchEmailGroup(this.props.params.contactGroupId).then((function(t){e.setState({contactGroupName:t})})),J.a.fetchEmailAddressessPeek().then((function(t){e.setState({emailAddresses:t})})),K.a.fetchMailboxesLoggedInUserPeek().then((function(t){e.setState({mailboxAddresses:t})})),H.a.fetchEmailTemplatesPeek().then((function(t){e.setState({emailTemplates:t})})),"bulk"===this.props.params.type&&this.props.toIds&&J.a.fetchPrimaryEmailAddressId(this.props.toIds).then((function(t){e.setState(Z({},e.state,{email:Z({},e.state.email,{to:t.join(",")})}))})),this.props.params.documentId&&Q.a.fetchDocumentDetails(this.props.params.documentId).then((function(t){t.data.data.contact&&J.a.fetchPrimaryEmailAddressId(t.data.data.contact.id).then((function(t){e.setState(Z({},e.state,{email:Z({},e.state.email,{to:t.join(",")})}))}));var a=t.data.data.filename?t.data.data.filename:"bijlage.pdf";Q.a.download(e.props.params.documentId).then((function(t){e.addAttachment([new File([t.data],a)])}))}))}},{key:"handleInputChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;this.setState(Z({},this.state,{email:Z({},this.state.email,v()({},n,a))}))}},{key:"handleFromIds",value:function(e){this.setState(Z({},this.state,{email:Z({},this.state.email,{from:e})}))}},{key:"handleToIds",value:function(e){this.setState(Z({},this.state,{email:Z({},this.state.email,{to:e})}))}},{key:"handleEmailTemplates",value:function(e){var t=this;this.setState(Z({},this.state,{email:Z({},this.state.email,{emailTemplateId:e})})),H.a.fetchEmailTemplateWithUser(e).then((function(e){t.setState(Z({},t.state,{email:Z({},t.state.email,{subject:e.subject?e.subject:t.state.email.subject,htmlBody:e.htmlBody?e.htmlBody:t.state.email.htmlBody})}))}))}},{key:"handleCcIds",value:function(e){this.setState(Z({},this.state,{email:Z({},this.state.email,{cc:e})}))}},{key:"handleBccIds",value:function(e){this.setState(Z({},this.state,{email:Z({},this.state.email,{bcc:e})}))}},{key:"handleTextChange",value:function(e){this.setState(Z({},this.state,{email:Z({},this.state.email,{htmlBody:e.target.getContent({format:"raw"})})}))}},{key:"addAttachment",value:function(e){this.setState(Z({},this.state,{email:Z({},this.state.email,{attachments:[].concat(l()(this.state.email.attachments),l()(e))})}))}},{key:"deleteAttachment",value:function(e){this.setState(Z({},this.state,{email:Z({},this.state.email,{attachments:this.state.email.attachments.filter((function(t){return t.name!==e}))})}))}},{key:"handleSubmit",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.preventDefault();var a=this.state.email,n={},l=!1;function s(e,t,a){X.a.newConcept2(e,t,a).then((function(){y.f.push("/emails/concept")})).catch((function(e){}))}function o(e,t,a){X.a.newEmail(e,t,a).then((function(){y.e.goBack()})).catch((function(e){}))}if(I.a.isEmpty(""+a.contactGroupId)&&I.a.isEmpty(""+a.to)&&(n.to=!0,l=!0),I.a.isEmpty(""+a.from)&&(n.from=!0,l=!0),I.a.isEmpty(""+a.subject)&&(n.subject=!0,l=!0),this.setState(Z({},this.state,{errors:n})),!l){a.to.length>0&&(a.to=a.to.split(",")),a.cc.length>0&&(a.cc=a.cc.split(",")),a.bcc.length>0&&(a.bcc=a.bcc.split(","));var r=new FormData;r.append("to",JSON.stringify(a.to)),r.append("cc",JSON.stringify(a.cc)),r.append("bcc",JSON.stringify(a.bcc)),r.append("quotationRequestId",a.quotationRequestId),r.append("intakeId",a.intakeId),r.append("contactGroupId",a.contactGroupId),a.attachments.map((function(e,t){r.append("attachments["+t+"]",e)})),t?X.a.newConcept(a,a.from).then((function(e){s(r,a.from,e.data)})).catch((function(e){console.log(e)})):(this.setButtonLoading(),X.a.newConcept(a,a.from).then((function(e){o(r,a.from,e.data)})).catch((function(e){console.log(e)})))}}},{key:"render",value:function(){return N.a.createElement("div",{className:"row"},N.a.createElement("div",{className:"col-md-9"},N.a.createElement("div",{className:"col-md-12"},N.a.createElement(M.a,null,N.a.createElement(O.a,{className:"panel-small"},N.a.createElement(W,{loading:this.state.buttonLoading,handleSubmit:this.handleSubmit,goBack:this.goBack})))),N.a.createElement("div",{className:"col-md-12"},N.a.createElement(_,{email:this.state.email,contactGroupName:this.state.contactGroupName,emailAddresses:this.state.emailAddresses,mailboxAddresses:this.state.mailboxAddresses,emailTemplates:this.state.emailTemplates,errors:this.state.errors,handleSubmit:this.handleSubmit,handleFromIds:this.handleFromIds,handleEmailTemplates:this.handleEmailTemplates,handleToIds:this.handleToIds,handleCcIds:this.handleCcIds,handleBccIds:this.handleBccIds,handleInputChange:this.handleInputChange,handleTextChange:this.handleTextChange,addAttachment:this.addAttachment,deleteAttachment:this.deleteAttachment}))),N.a.createElement("div",{className:"col-md-3"}),this.state.showModal&&N.a.createElement(T.a,{buttonConfirmText:"Verlaten",closeModal:this.toggleShowModal,confirmAction:y.e.goBack,title:"Bevestigen"},N.a.createElement("p",null,"Weet u zeker dat u deze pagina wilt verlaten zonder deze e-mail op te slaan als concept?")))}}]),t}(E.Component);t.default=Object(A.b)((function(e){return{toIds:e.bulkMailTo.toIds}}))($)},682:function(e,t,a){"use strict";var n=a(0),l=a.n(n),s=a(14),o=a.n(s),r=function(e){var t=e.children,a=e.className,n=e.onMouseEnter,s=e.onMouseLeave;return l.a.createElement("div",{className:"panel panel-default ".concat(a),onMouseEnter:n,onMouseLeave:s},t)};r.defaultProps={className:"",onMouseEnter:function(){},onMouseLeave:function(){}},r.propTypes={className:o.a.string,onMouseEnter:o.a.func,onMouseLeave:o.a.func},t.a=r},683:function(e,t,a){"use strict";var n=a(0),l=a.n(n),s=a(14),o=a.n(s),r=function(e){var t=e.className,a=e.children;return l.a.createElement("div",{className:"panel-body ".concat(t)},a)};r.defaultProps={className:""},r.propTypes={className:o.a.string},t.a=r},684:function(e,t,a){"use strict";var n=a(0),l=a.n(n),s=a(14),o=a.n(s),r=function(e){var t=e.buttonClassName,a=e.buttonText,n=e.onClickAction,s=e.type,o=e.value,r=e.loading,i=e.loadText,c=e.disabled;return r?l.a.createElement("button",{type:s,className:"btn btn-sm btn-loading ".concat(t),value:o,disabled:r},l.a.createElement("span",{className:"glyphicon glyphicon-refresh glyphicon-refresh-animate"})," ",i):l.a.createElement("button",{type:s,className:"btn btn-sm ".concat(t),onClick:n,value:o,disabled:c},a)};r.defaultProps={buttonClassName:"btn-success",type:"button",value:"",loading:!1,loadText:"Aan het laden",disabled:!1},r.propTypes={buttonClassName:o.a.string,buttonText:o.a.string.isRequired,onClickAction:o.a.func,type:o.a.string,value:o.a.string,loading:o.a.bool,loadText:o.a.string,disabled:o.a.bool},t.a=r},685:function(e,t,a){"use strict";var n=a(0),l=a.n(n),s=a(14),o=a.n(s),r=function(e){var t=e.buttonClassName,a=e.iconName,n=e.onClickAction,s=e.title,o=e.disabled;return l.a.createElement("button",{type:"button",className:"btn ".concat(t),onClick:n,disabled:o,title:s},l.a.createElement("span",{className:"glyphicon ".concat(a)}))};r.defaultProps={buttonClassName:"btn-success btn-sm",title:"",disabled:!1},r.propTypes={buttonClassName:o.a.string,iconName:o.a.string.isRequired,onClickAction:o.a.func,title:o.a.string,disabled:o.a.bool},t.a=r},686:function(e,t,a){"use strict";var n=a(0),l=a.n(n),s=a(14),o=a.n(s),r=function(e){var t=e.label,a=e.type,n=e.className,s=e.size,o=e.id,r=e.placeholder,i=e.name,c=e.value,m=e.onClickAction,d=e.onChangeAction,u=e.onBlurAction,h=e.required,p=e.readOnly,g=e.maxLength,f=e.error,b=e.min,v=e.max,E=e.step,N=e.errorMessage,y=e.divSize,C=e.divClassName,I=e.autoComplete;return l.a.createElement("div",{className:"form-group ".concat(y," ").concat(C)},l.a.createElement("label",{htmlFor:o,className:"col-sm-6 ".concat(h)},t),l.a.createElement("div",{className:"".concat(s)},l.a.createElement("input",{type:a,className:"form-control input-sm ".concat(n)+(f?"has-error":""),id:o,placeholder:r,name:i,value:c,onClick:m,onChange:d,onBlur:u,readOnly:p,maxLength:g,min:b,max:v,autoComplete:I,step:E})),f&&l.a.createElement("div",{className:"col-sm-offset-6 col-sm-6"},l.a.createElement("span",{className:"has-error-message"}," ",N)))};r.defaultProps={divClassName:"",className:"",size:"col-sm-6",divSize:"col-sm-6",name:"",type:"text",value:"",required:"",readOnly:!1,maxLength:null,error:!1,min:"",max:"",step:"",errorMessage:"",autoComplete:"off",onBlurAction:function(){},onClickAction:function(){},onChangeAction:function(){}},r.propTypes={label:o.a.oneOfType([o.a.string,o.a.object]).isRequired,type:o.a.string,className:o.a.string,divClassName:o.a.string,size:o.a.string,divSize:o.a.string,id:o.a.string,placeholder:o.a.string,name:o.a.string.isRequired,value:o.a.oneOfType([o.a.string,o.a.number]),onClickAction:o.a.func,onChangeAction:o.a.func,onBlurAction:o.a.func,required:o.a.string,readOnly:o.a.bool,maxLength:o.a.string,error:o.a.bool,min:o.a.string,max:o.a.string,step:o.a.string,errorMessage:o.a.string,autoComplete:o.a.string},t.a=r},690:function(e,t,a){"use strict";var n=a(0),l=a.n(n),s=a(14),o=a.n(s),r=function(e){var t=e.className,a=e.children;return l.a.createElement("div",{className:"panel-heading ".concat(t)},a)};r.defaultProps={className:""},r.propTypes={className:o.a.string},t.a=r},717:function(e,t,a){"use strict";var n=a(0),l=a.n(n),s=a(14),o=a.n(s),r=a(707),i=(a(708),function(e){var t=e.label,a=(e.className,e.size),n=e.id,s=e.name,o=e.value,i=e.options,c=e.optionId,m=e.optionName,d=e.onChangeAction,u=e.required,h=e.multi,p=e.error;return l.a.createElement("div",{className:"form-group col-sm-6"},l.a.createElement("label",{htmlFor:n,className:"col-sm-6 ".concat(u)},t),l.a.createElement("div",{className:"".concat(a)},l.a.createElement(r.a,{id:n,name:s,value:o,onChange:d,options:i,valueKey:c,labelKey:m,placeholder:"",noResultsText:"Geen resultaat gevonden",multi:h,simpleValue:!0,removeSelected:!0,className:p?" has-error":""})))});i.defaultProps={className:"",size:"col-sm-6",optionId:"id",optionName:"name",readOnly:!1,required:"",error:!1,value:"",multi:!0},i.propTypes={label:o.a.string.isRequired,className:o.a.string,size:o.a.string,id:o.a.string,name:o.a.string.isRequired,options:o.a.array,optionId:o.a.string,optionName:o.a.string,value:o.a.string,onChangeAction:o.a.func,onBlurAction:o.a.func,required:o.a.string,readOnly:o.a.bool,error:o.a.bool,multi:o.a.bool},t.a=i},733:function(e,t,a){"use strict";var n=a(0),l=a.n(n),s=a(14),o=a.n(s),r=(a(750),a(751),a(752),a(753),a(754),a(755),a(756),a(757),a(758),a(759),a(760),a(769)),i=function(e){var t=e.label,a=e.value,n=e.onChangeAction;return l.a.createElement("div",null,l.a.createElement("div",{className:"col-sm-3"},l.a.createElement("label",{htmlFor:"quotationText",className:"col-sm-12"},t)),l.a.createElement("div",{className:"col-sm-9"},l.a.createElement(r.a,{initialValue:a,init:{branding:!1,language:"nl",menubar:!1,plugins:"paste lists advlist link image code table textcolor pagebreak",toolbar:"undo redo | formatselect fontselect | bold italic forecolor | alignleft aligncenter alignright | pagebreak | bullist numlist outdent indent | table | link image | code",height:"300",browser_spellcheck:!0,font_formats:"Courier New=courier new;Tahoma=tahoma;Times New Roman=times new roman;Verdana=verdana;"},onChange:n})))};i.defaultProps={value:"",errorMessage:""},i.propTypes={label:o.a.string.isRequired,type:o.a.string,id:o.a.string,placeholder:o.a.string,value:o.a.string,onChangeAction:o.a.func},t.a=i},741:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"f",(function(){return l})),a.d(t,"e",(function(){return s})),a.d(t,"b",(function(){return o})),a.d(t,"d",(function(){return r})),a.d(t,"a",(function(){return i}));var n=function(e){return{type:"FETCH_MAILBOX_DETAILS",id:e}},l=function(e){return{type:"UPDATE_MAILBOX_DETAILS",mailbox:e}},s=function(e){return{type:"NEW_MAILBOX_USER",mailboxUser:e}},o=function(e,t){return{type:"DELETE_MAILBOX_USER",mailboxId:e,userId:t}},r=function(e){return{type:"NEW_MAILBOX_IGNORE",ignore:e}},i=function(e){return{type:"DELETE_MAILBOX_IGNORE",ignoreId:e}}},831:function(e,t,a){"use strict";var n=a(0),l=a.n(n),s=a(14),o=a.n(s),r=a(707),i=(a(708),function(e){var t=e.label,a=(e.className,e.size),n=e.id,s=e.name,o=e.value,i=e.options,c=e.optionId,m=e.optionName,d=e.onChangeAction,u=e.required,h=(e.allowCreate,e.error);return l.a.createElement("div",{className:"form-group col-sm-12"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-3"},l.a.createElement("label",{htmlFor:n,className:"col-sm-12 ".concat(u)},t)),l.a.createElement("div",{className:"".concat(a)},l.a.createElement(r.a.Creatable,{id:n,name:s,value:o,onChange:d,options:i,valueKey:c,labelKey:m,placeholder:"",noResultsText:"Geen resultaat gevonden",multi:!0,simpleValue:!0,removeSelected:!0,promptTextCreator:function(e){return'Maak optie "'.concat(e,'" aan')},className:h?" has-error":""}))))});i.defaultProps={allowCreate:!1,className:"",size:"col-sm-6",optionId:"id",optionName:"name",readOnly:!1,required:"",error:!1,value:""},i.propTypes={allowCreate:o.a.bool,label:o.a.string.isRequired,className:o.a.string,size:o.a.string,id:o.a.string,name:o.a.string.isRequired,options:o.a.array,optionId:o.a.string,optionName:o.a.string,value:o.a.string,onChangeAction:o.a.func,onBlurAction:o.a.func,required:o.a.string,readOnly:o.a.bool,error:o.a.bool},t.a=i},954:function(e,t,a){"use strict";var n=a(25),l=a.n(n),s=a(24),o=a.n(s),r=a(26),i=a.n(r),c=a(27),m=a.n(c),d=a(28),u=a.n(d),h=a(0),p=a.n(h),g=a(14),f=a.n(g),b=(a(750),a(751),a(752),a(753),a(754),a(755),a(756),a(757),a(758),a(759),a(760),a(769)),v=a(197),E=function(e){function t(){return l()(this,t),i()(this,m()(t).apply(this,arguments))}return u()(t,e),o()(t,[{key:"componentDidUpdate",value:function(e){if(this.props.value!==e.value){var t=window.tinymce.EditorManager.get("tinyMCEUpdateable");this.props.value&&!Object(v.isEqual)(t.getContent({format:"raw"}),this.props.value)&&(t.setContent(this.props.value),t.selection.select(t.getBody(),!0),t.selection.collapse(!1))}}},{key:"render",value:function(){var e=this.props,t=e.label,a=e.value,n=e.onChangeAction;return p.a.createElement("div",null,p.a.createElement("div",{className:"col-sm-3"},p.a.createElement("label",{htmlFor:"quotationText",className:"col-sm-12"},t)),p.a.createElement("div",{className:"col-sm-9"},p.a.createElement(b.a,{id:"tinyMCEUpdateable",initialValue:a,init:{branding:!1,language:"nl",menubar:!1,plugins:"paste lists advlist link image code table textcolor pagebreak",toolbar:"undo redo | formatselect fontselect | bold italic forecolor | alignleft aligncenter alignright | pagebreak | bullist numlist outdent indent | table | link image | code",height:"300",browser_spellcheck:!0,font_formats:"Courier New=courier new;Tahoma=tahoma;Times New Roman=times new roman;Verdana=verdana;"},onChange:n})))}}]),t}(h.Component);E.defaultProps={value:"",errorMessage:""},E.propTypes={label:f.a.string.isRequired,type:f.a.string,id:f.a.string,placeholder:f.a.string,value:f.a.string,onChangeAction:f.a.func},t.a=E}}]);