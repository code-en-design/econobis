(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{1550:function(e,t,a){"use strict";a.r(t);var n=a(10),l=a.n(n),s=a(25),o=a.n(s),i=a(24),r=a.n(i),c=a(26),m=a.n(c),d=a(27),u=a.n(d),h=a(21),p=a.n(h),g=a(28),b=a.n(g),f=a(6),v=a.n(f),E=a(0),N=a.n(E),y=a(689),w=a.n(y),A=a(197),C=a(682),I=a(33),T=a(146),k=a(704),x=a.n(k),S=Object(I.b)((function(e){return{permissions:e.meDetails.permissions}}))((function(e){var t=e.attachment,a=t.id,n=t.name;return N.a.createElement("div",{className:"row border ".concat(e.highlightLine),onMouseEnter:function(){return e.onLineEnter()},onMouseLeave:function(){return e.onLineLeave()}},N.a.createElement("div",{onClick:function(){return function(e,t){T.a.downloadAttachment(e).then((function(e){x()(e.data,t)}))}(a,n)},className:"col-sm-11"},n),N.a.createElement("div",{className:"col-sm-1"},e.showActionButtons?N.a.createElement("a",{role:"button",onClick:e.toggleDelete},N.a.createElement("span",{className:"glyphicon glyphicon-trash mybtn-danger"})," "):""))})),B=a(98),L=(a(741),function(e){return N.a.createElement(B.a,{buttonConfirmText:"Verwijder",buttonClassName:"btn-danger",closeModal:e.toggleDelete,confirmAction:function(){return e.deleteAttachment(e.attachment.name),void e.toggleDelete()},title:"Verwijderen"},N.a.createElement("p",null,"Wil je deze bijlage verwijderen?"))}),j=function(e){function t(e){var a;return o()(this,t),a=m()(this,u()(t).call(this,e)),v()(p()(a),"onLineEnter",(function(){a.setState({showActionButtons:!0,highlightLine:"highlight-line"})})),v()(p()(a),"onLineLeave",(function(){a.setState({showActionButtons:!1,highlightLine:""})})),v()(p()(a),"toggleDelete",(function(){a.setState({showDelete:!a.state.showDelete})})),a.state={showActionButtons:!1,highlightLine:"",showDelete:!1},a}return b()(t,e),r()(t,[{key:"render",value:function(){return N.a.createElement("div",null,N.a.createElement(S,{highlightLine:this.state.highlightLine,showActionButtons:this.state.showActionButtons,onLineEnter:this.onLineEnter,onLineLeave:this.onLineLeave,toggleDelete:this.toggleDelete,attachment:this.props.attachment}),this.state.showDelete&&N.a.createElement(L,{toggleDelete:this.toggleDelete,attachment:this.props.attachment,deleteAttachment:this.props.deleteAttachment}))}}]),t}(E.Component),O=function(e){var t=e.attachments,a=e.deleteAttachment;return N.a.createElement("div",null,N.a.createElement("div",{className:"row border header"},N.a.createElement("div",{className:"col-sm-11"},"Naam"),N.a.createElement("div",{className:"col-sm-1"})),t.length>0?t.map((function(e){return N.a.createElement(j,{key:e.name,attachment:e,deleteAttachment:a})})):N.a.createElement("div",null,"Geen bijlages bekend."))},D=a(769).default,M=function(e){function t(e){var a;return o()(this,t),(a=m()(this,u()(t).call(this,e))).state={error:!1,errorMaxSize:!1},a}return b()(t,e),r()(t,[{key:"onDropAccepted",value:function(e){this.props.addAttachment(e),this.props.toggleShowNew()}},{key:"onDropRejected",value:function(){this.setState({errorMaxSize:!0})}},{key:"render",value:function(){return N.a.createElement(B.a,{closeModal:this.props.toggleShowNew,showConfirmAction:!1,title:"Upload bestand"},N.a.createElement("div",{className:"upload-file-content"},N.a.createElement(D,{className:"dropzone",onDropAccepted:this.onDropAccepted.bind(this),onDropRejected:this.onDropRejected.bind(this),maxSize:6e6},N.a.createElement("p",null,"Klik hier voor het uploaden van een bestand"),N.a.createElement("p",null,N.a.createElement("strong",null,"of")," sleep het bestand hierheen"))),this.state.error&&N.a.createElement("p",{className:"has-error-message"},"Uploaden mislukt. Probeer nogmaals een bestand te uploaden."),this.state.errorMaxSize&&N.a.createElement("p",{className:"has-error-message"},"Uploaden mislukt. Het bestand mag maximaal 6MB groot zijn."))}}]),t}(E.Component),P=a(683),R=a(690),q=function(e){function t(e){var a;return o()(this,t),a=m()(this,u()(t).call(this,e)),v()(p()(a),"toggleShowNew",(function(){a.setState({showNew:!a.state.showNew})})),a.state={showNew:!1},a}return b()(t,e),r()(t,[{key:"render",value:function(){return N.a.createElement("div",null,N.a.createElement(R.a,null,N.a.createElement("span",{className:"h5 text-bold"},"Bijlages"),N.a.createElement("a",{role:"button",className:"pull-right",onClick:this.toggleShowNew},N.a.createElement("span",{className:"glyphicon glyphicon-plus"}))),N.a.createElement(P.a,null,N.a.createElement("div",{className:"col-md-12"},N.a.createElement(O,{attachments:this.props.attachments,deleteAttachment:this.props.deleteAttachment})),N.a.createElement("div",{className:"col-md-12 margin-10-top"},this.state.showNew&&N.a.createElement(M,{toggleShowNew:this.toggleShowNew,addAttachment:this.props.addAttachment}))))}}]),t}(E.Component),U=Object(I.b)((function(e){return{permissions:e.meDetails.permissions}}))(q),z=a(831),_=a(717),F=a(954),V=function(e){var t=e.email,a=e.emailAddresses,n=e.mailboxAddresses,l=e.errors,s=e.hasLoaded,o=e.handleToIds,i=e.handleCcIds,r=e.handleBccIds,c=e.handleInputChange,m=e.handleTextChange,d=e.emailTemplates,u=e.handleEmailTemplates,h=e.handleFromIds,p=t.mailboxId,g=t.to,b=t.cc,f=t.bcc,v=t.subject,E=t.htmlBody,y=t.emailTemplateId;return N.a.createElement(P.a,null,N.a.createElement("div",{className:"row"},N.a.createElement(_.a,{label:"Van selecteren",name:"mailboxId",value:p,options:n,optionName:"email",onChangeAction:h,required:"required",error:l.mailboxId,multi:!1})),N.a.createElement("div",{className:"row"},N.a.createElement(z.a,{label:"Aan selecteren",name:"to",value:g,options:a,optionName:"name",onChangeAction:o,allowCreate:!0,required:"required",error:l.to})),N.a.createElement("div",{className:"row"},N.a.createElement(z.a,{label:"Cc selecteren",name:"cc",value:b,options:a,optionName:"name",onChangeAction:i,error:l.to})),N.a.createElement("div",{className:"row"},N.a.createElement(z.a,{label:"Bcc selecteren",name:"bcc",value:f,options:a,optionName:"name",onChangeAction:r,error:l.to})),N.a.createElement("div",{className:"row"},N.a.createElement(_.a,{label:"Template",name:"emailTemplateId",value:y,options:d,onChangeAction:u,multi:!1})),N.a.createElement("div",{className:"row"},N.a.createElement("div",{className:"form-group col-sm-12"},N.a.createElement("div",{className:"row"},N.a.createElement("div",{className:"col-sm-3"},N.a.createElement("label",{className:"col-sm-12 required"},"Onderwerp")),N.a.createElement("div",{className:"col-sm-9"},N.a.createElement("input",{type:"text",className:"form-control input-sm ".concat(l.subject?"has-error":""),name:"subject",value:v,onChange:c}))))),N.a.createElement("div",{className:"row"},N.a.createElement("div",{className:"form-group col-sm-12"},N.a.createElement("div",{className:"row"},s&&N.a.createElement(F.a,{label:"Tekst",value:E,onChangeAction:m})))))},J=function(e){var t=e.emailTemplates,a=e.mailboxAddresses,n=e.handleFromIds,l=e.handleEmailTemplates,s=e.email,o=e.emailAddresses,i=e.errors,r=e.hasLoaded,c=e.handleSubmit,m=e.handleToIds,d=e.handleCcIds,u=e.handleBccIds,h=e.handleInputChange,p=e.handleTextChange,g=e.addAttachment,b=e.deleteAttachment;return N.a.createElement("form",{className:"form-horizontal",onSubmit:c},N.a.createElement(C.a,null,N.a.createElement(V,{email:s,emailAddresses:o,errors:i,hasLoaded:r,handleSubmit:c,handleToIds:m,handleCcIds:d,handleBccIds:u,handleInputChange:h,handleTextChange:p,emailTemplates:t,handleEmailTemplates:l,handleFromIds:n,mailboxAddresses:a}),N.a.createElement(U,{attachments:s.attachments,addAttachment:g,deleteAttachment:b})))},X=a(4),G=a(685),H=a(684),K=function(e){var t=e.handleSubmit,a=e.loading;return N.a.createElement("div",{className:"row"},N.a.createElement("div",{className:"col-md-4"},N.a.createElement("div",{className:"btn-group margin-small margin-10-right",role:"group"},N.a.createElement(G.a,{iconName:"glyphicon-arrow-left",onClickAction:X.e.goBack})),N.a.createElement("div",{className:"btn-group margin-small",role:"group"},N.a.createElement(H.a,{buttonText:"Opslaan als concept",onClickAction:function(e){t(e,!0)}}),N.a.createElement(H.a,{buttonText:"Verstuur e-mail",onClickAction:t,loading:a,loadText:"E-mail verzenden"}))),N.a.createElement("div",{className:"col-md-4"},N.a.createElement("h4",{className:"text-center margin-small"},"E-mail versturen")),N.a.createElement("div",{className:"col-md-4"}))},W=a(213),Q=a(101),Y=a(66);function Z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function $(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(a),!0).forEach((function(t){v()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Z(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ee=function(e){function t(e){var a;return o()(this,t),a=m()(this,u()(t).call(this,e)),v()(p()(a),"setButtonLoading",(function(){a.setState({buttonLoading:!0})})),a.state={buttonLoading:!1,oldEmailId:null,emailAddresses:[],mailboxAddresses:[],originalHtmlBody:"",emailTemplates:[],email:{from:"",mailboxId:"",to:"",cc:"",bcc:"",subject:"",htmlBody:"",attachments:[]},errors:{to:!1,subject:!1},hasLoaded:!1},a.handleInputChange=a.handleInputChange.bind(p()(a)),a.handleFromIds=a.handleFromIds.bind(p()(a)),a.handleEmailTemplates=a.handleEmailTemplates.bind(p()(a)),a.handleToIds=a.handleToIds.bind(p()(a)),a.handleCcIds=a.handleCcIds.bind(p()(a)),a.handleBccIds=a.handleBccIds.bind(p()(a)),a.handleTextChange=a.handleTextChange.bind(p()(a)),a.addAttachment=a.addAttachment.bind(p()(a)),a.deleteAttachment=a.deleteAttachment.bind(p()(a)),a.handleSubmit=a.handleSubmit.bind(p()(a)),a}return b()(t,e),r()(t,[{key:"componentDidMount",value:function(){var e=this;W.a.fetchEmailAddressessPeek().then((function(t){e.setState({emailAddresses:[].concat(l()(e.state.emailAddresses),l()(t))})}));var t="";switch(this.props.params.type){case"beantwoorden":t="reply";break;case"allenbeantwoorden":t="reply-all";break;case"doorsturen":t="forward";break;case"groep":t="group";break;default:t="reply"}Q.a.fetchEmailTemplatesPeek().then((function(t){e.setState({emailTemplates:t})})),T.a.fetchEmailByType(this.props.params.id,t).then((function(t){var a=e.createExtraOptions(t.to,t.cc,t.bcc);e.setState($({},e.state,{oldEmailId:t.id,originalHtmlBody:t.htmlBody?t.htmlBody:"",email:{mailboxId:t.mailboxId,to:t.to?t.to.join(","):"",cc:t.cc?t.cc.join(","):"",bcc:t.bcc?t.bcc.join(","):"",subject:t.subject?t.subject:"",htmlBody:t.htmlBody?t.htmlBody:"",attachments:t.attachments?t.attachments:""},emailAddresses:[].concat(l()(e.state.emailAddresses),l()(a)),hasLoaded:!0}))})),Y.a.fetchMailboxesLoggedInUserPeek().then((function(t){e.setState({mailboxAddresses:t})}))}},{key:"handleFromIds",value:function(e){this.setState($({},this.state,{email:$({},this.state.email,{mailboxId:e})}))}},{key:"handleEmailTemplates",value:function(e){var t=this;this.setState($({},this.state,{email:$({},this.state.email,{emailTemplateId:e})})),Q.a.fetchEmailTemplateWithUser(e).then((function(e){t.setState($({},t.state,{email:$({},t.state.email,{htmlBody:e.htmlBody?e.htmlBody+t.state.originalHtmlBody:t.state.email.htmlBody})}))}))}},{key:"createExtraOptions",value:function(e,t,a){var n=Object(A.union)(e,t,a),l=[];return n.map((function(e){l.push({id:e,name:e})})),l}},{key:"handleInputChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;this.setState($({},this.state,{email:$({},this.state.email,v()({},n,a))}))}},{key:"handleToIds",value:function(e){this.setState($({},this.state,{email:$({},this.state.email,{to:e})}))}},{key:"handleCcIds",value:function(e){this.setState($({},this.state,{email:$({},this.state.email,{cc:e})}))}},{key:"handleBccIds",value:function(e){this.setState($({},this.state,{email:$({},this.state.email,{bcc:e})}))}},{key:"handleTextChange",value:function(e){this.setState($({},this.state,{email:$({},this.state.email,{htmlBody:e.target.getContent({format:"raw"})})}))}},{key:"addAttachment",value:function(e){this.setState($({},this.state,{email:$({},this.state.email,{attachments:[].concat(l()(this.state.email.attachments),l()(e))})}))}},{key:"deleteAttachment",value:function(e){this.setState($({},this.state,{email:$({},this.state.email,{attachments:this.state.email.attachments.filter((function(t){return t.name!==e}))})}))}},{key:"handleSubmit",value:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.preventDefault();var n=this.state.email,l={},s=!1;if(w.a.isEmpty(n.to)&&(l.to=!0,s=!0),(w.a.isEmpty(""+n.mailboxId)||null===n.mailboxId)&&(l.mailboxId=!0,s=!0),w.a.isEmpty(""+n.subject)&&(l.subject=!0,s=!0),this.setState($({},this.state,{errors:l})),!s){n.to.length>0&&(n.to=n.to.split(",")),n.cc.length>0&&(n.cc=n.cc.split(",")),n.bcc.length>0&&(n.bcc=n.bcc.split(","));var o=new FormData;o.append("to",JSON.stringify(n.to)),o.append("cc",JSON.stringify(n.cc)),o.append("bcc",JSON.stringify(n.bcc)),o.append("subject",n.subject),o.append("htmlBody",n.htmlBody),o.append("oldEmailId",this.state.oldEmailId),n.attachments&&n.attachments.map((function(e,t){e.id?o.append("oldAttachments["+t+"]",JSON.stringify(e)):o.append("attachments["+t+"]",e)})),a?T.a.newConcept(o,n.mailboxId).then((function(){X.f.push("/emails/concept")})).catch((function(e){})):(this.setButtonLoading(),T.a.newEmail(o,n.mailboxId).then((function(){t.state.oldEmailId?T.a.setStatus(t.state.oldEmailId,"closed").then((function(){X.f.push("/emails/inbox")})):X.f.push("/emails/inbox")})).catch((function(e){console.log(e)})))}}},{key:"render",value:function(){return N.a.createElement("div",{className:"row"},N.a.createElement("div",{className:"col-md-9"},N.a.createElement("div",{className:"col-md-12 margin-10-top"},N.a.createElement(C.a,null,N.a.createElement(P.a,{className:"panel-small"},N.a.createElement(K,{loading:this.state.buttonLoading,handleSubmit:this.handleSubmit,type:this.props.params.type})))),N.a.createElement("div",{className:"col-md-12 margin-10-top"},N.a.createElement(J,{email:this.state.email,emailAddresses:this.state.emailAddresses,errors:this.state.errors,hasLoaded:this.state.hasLoaded,handleSubmit:this.handleSubmit,handleToIds:this.handleToIds,handleCcIds:this.handleCcIds,handleBccIds:this.handleBccIds,handleInputChange:this.handleInputChange,handleTextChange:this.handleTextChange,addAttachment:this.addAttachment,emailTemplates:this.state.emailTemplates,handleEmailTemplates:this.handleEmailTemplates,deleteAttachment:this.deleteAttachment,mailboxAddresses:this.state.mailboxAddresses,handleFromIds:this.handleFromIds}))),N.a.createElement("div",{className:"col-md-3"}))}}]),t}(E.Component);t.default=ee},682:function(e,t,a){"use strict";var n=a(0),l=a.n(n),s=a(14),o=a.n(s),i=function(e){var t=e.children,a=e.className,n=e.onMouseEnter,s=e.onMouseLeave;return l.a.createElement("div",{className:"panel panel-default ".concat(a),onMouseEnter:n,onMouseLeave:s},t)};i.defaultProps={className:"",onMouseEnter:function(){},onMouseLeave:function(){}},i.propTypes={className:o.a.string,onMouseEnter:o.a.func,onMouseLeave:o.a.func},t.a=i},683:function(e,t,a){"use strict";var n=a(0),l=a.n(n),s=a(14),o=a.n(s),i=function(e){var t=e.className,a=e.children;return l.a.createElement("div",{className:"panel-body ".concat(t)},a)};i.defaultProps={className:""},i.propTypes={className:o.a.string},t.a=i},684:function(e,t,a){"use strict";var n=a(0),l=a.n(n),s=a(14),o=a.n(s),i=function(e){var t=e.buttonClassName,a=e.buttonText,n=e.onClickAction,s=e.type,o=e.value,i=e.loading,r=e.loadText,c=e.disabled;return i?l.a.createElement("button",{type:s,className:"btn btn-sm btn-loading ".concat(t),value:o,disabled:i},l.a.createElement("span",{className:"glyphicon glyphicon-refresh glyphicon-refresh-animate"})," ",r):l.a.createElement("button",{type:s,className:"btn btn-sm ".concat(t),onClick:n,value:o,disabled:c},a)};i.defaultProps={buttonClassName:"btn-success",type:"button",value:"",loading:!1,loadText:"Aan het laden",disabled:!1},i.propTypes={buttonClassName:o.a.string,buttonText:o.a.string.isRequired,onClickAction:o.a.func,type:o.a.string,value:o.a.string,loading:o.a.bool,loadText:o.a.string,disabled:o.a.bool},t.a=i},685:function(e,t,a){"use strict";var n=a(0),l=a.n(n),s=a(14),o=a.n(s),i=function(e){var t=e.buttonClassName,a=e.iconName,n=e.onClickAction,s=e.title,o=e.disabled;return l.a.createElement("button",{type:"button",className:"btn ".concat(t),onClick:n,disabled:o,title:s},l.a.createElement("span",{className:"glyphicon ".concat(a)}))};i.defaultProps={buttonClassName:"btn-success btn-sm",title:"",disabled:!1},i.propTypes={buttonClassName:o.a.string,iconName:o.a.string.isRequired,onClickAction:o.a.func,title:o.a.string,disabled:o.a.bool},t.a=i},690:function(e,t,a){"use strict";var n=a(0),l=a.n(n),s=a(14),o=a.n(s),i=function(e){var t=e.className,a=e.children;return l.a.createElement("div",{className:"panel-heading ".concat(t)},a)};i.defaultProps={className:""},i.propTypes={className:o.a.string},t.a=i},704:function(e,t){e.exports=function(e,t,a){var n=new Blob([e],{type:a||"application/octet-stream"});if(void 0!==window.navigator.msSaveBlob)window.navigator.msSaveBlob(n,t);else{var l=window.URL.createObjectURL(n),s=document.createElement("a");s.style.display="none",s.href=l,s.setAttribute("download",t),void 0===s.download&&s.setAttribute("target","_blank"),document.body.appendChild(s),s.click(),document.body.removeChild(s),window.URL.revokeObjectURL(l)}}},717:function(e,t,a){"use strict";var n=a(0),l=a.n(n),s=a(14),o=a.n(s),i=a(707),r=(a(708),function(e){var t=e.label,a=(e.className,e.size),n=e.id,s=e.name,o=e.value,r=e.options,c=e.optionId,m=e.optionName,d=e.onChangeAction,u=e.required,h=e.multi,p=e.error;return l.a.createElement("div",{className:"form-group col-sm-6"},l.a.createElement("label",{htmlFor:n,className:"col-sm-6 ".concat(u)},t),l.a.createElement("div",{className:"".concat(a)},l.a.createElement(i.a,{id:n,name:s,value:o,onChange:d,options:r,valueKey:c,labelKey:m,placeholder:"",noResultsText:"Geen resultaat gevonden",multi:h,simpleValue:!0,removeSelected:!0,className:p?" has-error":""})))});r.defaultProps={className:"",size:"col-sm-6",optionId:"id",optionName:"name",readOnly:!1,required:"",error:!1,value:"",multi:!0},r.propTypes={label:o.a.string.isRequired,className:o.a.string,size:o.a.string,id:o.a.string,name:o.a.string.isRequired,options:o.a.array,optionId:o.a.string,optionName:o.a.string,value:o.a.string,onChangeAction:o.a.func,onBlurAction:o.a.func,required:o.a.string,readOnly:o.a.bool,error:o.a.bool,multi:o.a.bool},t.a=r},741:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"f",(function(){return l})),a.d(t,"e",(function(){return s})),a.d(t,"b",(function(){return o})),a.d(t,"d",(function(){return i})),a.d(t,"a",(function(){return r}));var n=function(e){return{type:"FETCH_MAILBOX_DETAILS",id:e}},l=function(e){return{type:"UPDATE_MAILBOX_DETAILS",mailbox:e}},s=function(e){return{type:"NEW_MAILBOX_USER",mailboxUser:e}},o=function(e,t){return{type:"DELETE_MAILBOX_USER",mailboxId:e,userId:t}},i=function(e){return{type:"NEW_MAILBOX_IGNORE",ignore:e}},r=function(e){return{type:"DELETE_MAILBOX_IGNORE",ignoreId:e}}},831:function(e,t,a){"use strict";var n=a(0),l=a.n(n),s=a(14),o=a.n(s),i=a(707),r=(a(708),function(e){var t=e.label,a=(e.className,e.size),n=e.id,s=e.name,o=e.value,r=e.options,c=e.optionId,m=e.optionName,d=e.onChangeAction,u=e.required,h=(e.allowCreate,e.error);return l.a.createElement("div",{className:"form-group col-sm-12"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-3"},l.a.createElement("label",{htmlFor:n,className:"col-sm-12 ".concat(u)},t)),l.a.createElement("div",{className:"".concat(a)},l.a.createElement(i.a.Creatable,{id:n,name:s,value:o,onChange:d,options:r,valueKey:c,labelKey:m,placeholder:"",noResultsText:"Geen resultaat gevonden",multi:!0,simpleValue:!0,removeSelected:!0,promptTextCreator:function(e){return'Maak optie "'.concat(e,'" aan')},className:h?" has-error":""}))))});r.defaultProps={allowCreate:!1,className:"",size:"col-sm-6",optionId:"id",optionName:"name",readOnly:!1,required:"",error:!1,value:""},r.propTypes={allowCreate:o.a.bool,label:o.a.string.isRequired,className:o.a.string,size:o.a.string,id:o.a.string,name:o.a.string.isRequired,options:o.a.array,optionId:o.a.string,optionName:o.a.string,value:o.a.string,onChangeAction:o.a.func,onBlurAction:o.a.func,required:o.a.string,readOnly:o.a.bool,error:o.a.bool},t.a=r},954:function(e,t,a){"use strict";var n=a(25),l=a.n(n),s=a(24),o=a.n(s),i=a(26),r=a.n(i),c=a(27),m=a.n(c),d=a(28),u=a.n(d),h=a(0),p=a.n(h),g=a(14),b=a.n(g),f=(a(750),a(751),a(752),a(753),a(754),a(755),a(756),a(757),a(758),a(759),a(760),a(768)),v=a(197),E=function(e){function t(){return l()(this,t),r()(this,m()(t).apply(this,arguments))}return u()(t,e),o()(t,[{key:"componentDidUpdate",value:function(e){if(this.props.value!==e.value){var t=window.tinymce.EditorManager.get("tinyMCEUpdateable");this.props.value&&!Object(v.isEqual)(t.getContent({format:"raw"}),this.props.value)&&(t.setContent(this.props.value),t.selection.select(t.getBody(),!0),t.selection.collapse(!1))}}},{key:"render",value:function(){var e=this.props,t=e.label,a=e.value,n=e.onChangeAction;return p.a.createElement("div",null,p.a.createElement("div",{className:"col-sm-3"},p.a.createElement("label",{htmlFor:"quotationText",className:"col-sm-12"},t)),p.a.createElement("div",{className:"col-sm-9"},p.a.createElement(f.a,{id:"tinyMCEUpdateable",initialValue:a,init:{branding:!1,language:"nl",menubar:!1,plugins:"paste lists advlist link image code table textcolor pagebreak",toolbar:"undo redo | formatselect fontselect | bold italic forecolor | alignleft aligncenter alignright | pagebreak | bullist numlist outdent indent | table | link image | code",height:"300",browser_spellcheck:!0,font_formats:"Courier New=courier new;Tahoma=tahoma;Times New Roman=times new roman;Verdana=verdana;"},onChange:n})))}}]),t}(h.Component);E.defaultProps={value:"",errorMessage:""},E.propTypes={label:b.a.string.isRequired,type:b.a.string,id:b.a.string,placeholder:b.a.string,value:b.a.string,onChangeAction:b.a.func},t.a=E}}]);