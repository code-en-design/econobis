(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{1586:function(e,t,a){"use strict";a.r(t);var n=a(10),l=a.n(n),o=a(25),i=a.n(o),c=a(24),r=a.n(c),s=a(26),d=a.n(s),m=a(27),u=a.n(m),p=a(21),h=a.n(p),b=a(28),g=a.n(b),f=a(6),v=a.n(f),S=a(0),x=a.n(S),E=a(689),w=a.n(E),N=a(198),y=a(682),k=a(33),C=a(146),A=a(706),I=a.n(A),j=Object(k.b)((function(e){return{permissions:e.meDetails.permissions}}))((function(e){var t=e.attachment,a=t.id,n=t.name;return x.a.createElement("div",{className:"row border ".concat(e.highlightLine),onMouseEnter:function(){return e.onLineEnter()},onMouseLeave:function(){return e.onLineLeave()}},x.a.createElement("div",{onClick:function(){return function(e,t){C.a.downloadAttachment(e).then((function(e){I()(e.data,t)}))}(a,n)},className:"col-sm-11"},n),x.a.createElement("div",{className:"col-sm-1"},e.showActionButtons?x.a.createElement("a",{role:"button",onClick:e.toggleDelete},x.a.createElement("span",{className:"glyphicon glyphicon-trash mybtn-danger"})," "):""))})),T=a(98),L=function(e){return x.a.createElement(T.a,{buttonConfirmText:"Verwijder",buttonClassName:"btn-danger",closeModal:e.toggleDelete,confirmAction:function(){return e.deleteAttachment(e.attachment.name,e.attachment.id),void e.toggleDelete()},title:"Verwijderen"},x.a.createElement("p",null,"Wil je deze bijlage verwijderen?"))},z=function(e){function t(e){var a;return i()(this,t),a=d()(this,u()(t).call(this,e)),v()(h()(a),"onLineEnter",(function(){a.setState({showActionButtons:!0,highlightLine:"highlight-line"})})),v()(h()(a),"onLineLeave",(function(){a.setState({showActionButtons:!1,highlightLine:""})})),v()(h()(a),"toggleDelete",(function(){a.setState({showDelete:!a.state.showDelete})})),a.state={showActionButtons:!1,highlightLine:"",showDelete:!1},a}return g()(t,e),r()(t,[{key:"render",value:function(){return x.a.createElement("div",null,x.a.createElement(j,{highlightLine:this.state.highlightLine,showActionButtons:this.state.showActionButtons,onLineEnter:this.onLineEnter,onLineLeave:this.onLineLeave,toggleDelete:this.toggleDelete,attachment:this.props.attachment}),this.state.showDelete&&x.a.createElement(L,{toggleDelete:this.toggleDelete,attachment:this.props.attachment,deleteAttachment:this.props.deleteAttachment}))}}]),t}(S.Component),B=function(e){var t=e.attachments;return x.a.createElement("div",null,x.a.createElement("div",{className:"row border header"},x.a.createElement("div",{className:"col-sm-11"},"Naam"),x.a.createElement("div",{className:"col-sm-1"})),t.length>0?t.map((function(t){return x.a.createElement(z,{key:t.name,attachment:t,deleteAttachment:e.deleteAttachment})})):x.a.createElement("div",null,"Geen bijlages bekend."))},O=a(769).default,D=function(e){function t(e){var a;return i()(this,t),(a=d()(this,u()(t).call(this,e))).state={error:!1,errorMaxSize:!1},a}return g()(t,e),r()(t,[{key:"onDropAccepted",value:function(e){this.props.addAttachment(e),this.props.toggleShowNew()}},{key:"onDropRejected",value:function(){this.setState({errorMaxSize:!0})}},{key:"render",value:function(){return x.a.createElement(T.a,{closeModal:this.props.toggleShowNew,showConfirmAction:!1,title:"Upload bestand"},x.a.createElement("div",{className:"upload-file-content"},x.a.createElement(O,{className:"dropzone",onDropAccepted:this.onDropAccepted.bind(this),onDropRejected:this.onDropRejected.bind(this),maxSize:6e6},x.a.createElement("p",null,"Klik hier voor het uploaden van een bestand"),x.a.createElement("p",null,x.a.createElement("strong",null,"of")," sleep het bestand hierheen"))),this.state.error&&x.a.createElement("p",{className:"has-error-message"},"Uploaden mislukt. Probeer nogmaals een bestand te uploaden."),this.state.errorMaxSize&&x.a.createElement("p",{className:"has-error-message"},"Uploaden mislukt. Het bestand mag maximaal 6MB groot zijn."))}}]),t}(S.Component),M=a(683),P=a(690),R=function(e){function t(e){var a;return i()(this,t),a=d()(this,u()(t).call(this,e)),v()(h()(a),"toggleShowNew",(function(){a.setState({showNew:!a.state.showNew})})),a.state={showNew:!1},a}return g()(t,e),r()(t,[{key:"render",value:function(){return x.a.createElement("div",null,x.a.createElement(P.a,null,x.a.createElement("span",{className:"h5 text-bold"},"Bijlages"),x.a.createElement("a",{role:"button",className:"pull-right",onClick:this.toggleShowNew},x.a.createElement("span",{className:"glyphicon glyphicon-plus"}))),x.a.createElement(M.a,null,x.a.createElement("div",{className:"col-md-12"},x.a.createElement(B,{attachments:this.props.attachments,deleteAttachment:this.props.deleteAttachment})),x.a.createElement("div",{className:"col-md-12 margin-10-top"},this.state.showNew&&x.a.createElement(D,{toggleShowNew:this.toggleShowNew,addAttachment:this.props.addAttachment}))))}}]),t}(S.Component),q=Object(k.b)((function(e){return{permissions:e.meDetails.permissions}}))(R),F=a(733),G=a(833),U=(a(687),a(8),function(e){var t=e.email,a=e.emailAddresses,n=e.errors,l=e.hasLoaded,o=(e.handleSubmit,e.handleToIds),i=e.handleCcIds,c=e.handleBccIds,r=e.handleInputChange,s=e.handleTextChange,d=t.from,m=t.to,u=t.cc,p=t.bcc,h=t.subject,b=t.htmlBody;return x.a.createElement(M.a,null,x.a.createElement("div",{className:"row"},x.a.createElement("div",{className:"row margin-10-bottom"},x.a.createElement("div",{className:"col-sm-3"},x.a.createElement("label",{htmlFor:"description",className:"col-sm-12"},"Van")),x.a.createElement("div",{className:"col-sm-9",id:"from"},d))),x.a.createElement("div",{className:"row"},x.a.createElement(G.a,{label:"Aan selecteren",name:"to",value:m,options:a,optionName:"name",onChangeAction:o,allowCreate:!0,required:"required",error:n.to})),x.a.createElement("div",{className:"row"},x.a.createElement(G.a,{label:"Cc selecteren",name:"cc",value:u,options:a,optionName:"name",onChangeAction:i,error:n.to})),x.a.createElement("div",{className:"row"},x.a.createElement(G.a,{label:"Bcc selecteren",name:"bcc",value:p,options:a,optionName:"name",onChangeAction:c,error:n.to})),x.a.createElement("div",{className:"row"},x.a.createElement("div",{className:"form-group col-sm-12"},x.a.createElement("div",{className:"row"},x.a.createElement("div",{className:"col-sm-3"},x.a.createElement("label",{className:"col-sm-12 required"},"Onderwerp")),x.a.createElement("div",{className:"col-sm-9"},x.a.createElement("input",{type:"text",className:"form-control input-sm ".concat(n.subject?"has-error":""),name:"subject",value:h,onChange:r}))))),x.a.createElement("div",{className:"row"},x.a.createElement("div",{className:"form-group col-sm-12"},x.a.createElement("div",{className:"row"},l&&x.a.createElement(F.a,{label:"Tekst",value:b,onChangeAction:s})))))}),V=function(e){var t=e.email,a=e.emailAddresses,n=e.errors,l=e.hasLoaded,o=e.handleSubmit,i=e.handleToIds,c=e.handleCcIds,r=e.handleBccIds,s=e.handleInputChange,d=e.handleTextChange,m=e.addAttachment,u=e.deleteAttachment;return x.a.createElement("form",{className:"form-horizontal",onSubmit:o},x.a.createElement(y.a,null,x.a.createElement(U,{email:t,emailAddresses:a,errors:n,hasLoaded:l,handleSubmit:o,handleToIds:i,handleCcIds:c,handleBccIds:r,handleInputChange:s,handleTextChange:d}),x.a.createElement(q,{attachments:t.attachments,deleteAttachment:u,addAttachment:m})))},J=a(4),_=a(685),K=a(684),H=function(e){var t=e.handleSubmit,a=e.loading,n=e.removeEmail;return x.a.createElement("div",{className:"row"},x.a.createElement("div",{className:"col-md-4"},x.a.createElement("div",{className:"btn-group margin-small margin-10-right",role:"group"},x.a.createElement(_.a,{iconName:"glyphicon-arrow-left",onClickAction:J.e.goBack})),x.a.createElement("div",{className:"btn-group margin-small",role:"group"},x.a.createElement(K.a,{buttonText:"Opslaan",onClickAction:function(e){t(e,!0)}}),x.a.createElement(K.a,{buttonText:"Verstuur e-mail",onClickAction:t,loading:a,loadText:"E-mail verzenden"})),x.a.createElement("div",{className:"btn-group margin-small margin-10-left",role:"group"},x.a.createElement(_.a,{iconName:"glyphicon-trash",onClickAction:n}))),x.a.createElement("div",{className:"col-md-4"},x.a.createElement("h4",{className:"text-center margin-small"},"Concept bewerken")),x.a.createElement("div",{className:"col-md-4"}))},W=a(213);function Q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function X(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(a),!0).forEach((function(t){v()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Q(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Y=function(e){function t(e){var a;return i()(this,t),a=d()(this,u()(t).call(this,e)),v()(h()(a),"setButtonLoading",(function(){a.setState({buttonLoading:!0})})),a.state={buttonLoading:!1,emailAddresses:[],email:{from:"",mailboxId:"",to:"",cc:"",bcc:"",subject:"",htmlBody:"",attachments:[]},errors:{to:!1,subject:!1},hasLoaded:!1},a.handleInputChange=a.handleInputChange.bind(h()(a)),a.handleToIds=a.handleToIds.bind(h()(a)),a.handleCcIds=a.handleCcIds.bind(h()(a)),a.handleBccIds=a.handleBccIds.bind(h()(a)),a.handleTextChange=a.handleTextChange.bind(h()(a)),a.addAttachment=a.addAttachment.bind(h()(a)),a.deleteAttachment=a.deleteAttachment.bind(h()(a)),a.handleSubmit=a.handleSubmit.bind(h()(a)),a.removeEmail=a.removeEmail.bind(h()(a)),a}return g()(t,e),r()(t,[{key:"componentDidMount",value:function(){var e=this;W.a.fetchEmailAddressessPeek().then((function(t){e.setState({emailAddresses:[].concat(l()(e.state.emailAddresses),l()(t))})})),C.a.fetchEmail(this.props.params.id).then((function(t){var a=e.createExtraOptions(t.to,t.cc,t.bcc);e.setState(X({},e.state,{email:{id:t.id,from:t.from,mailboxId:t.mailboxId,to:t.to?t.to.join(","):"",cc:t.cc?t.cc.join(","):"",bcc:t.bcc?t.bcc.join(","):"",subject:t.subject?t.subject:"",htmlBody:t.htmlBody?t.htmlBody:"",attachments:t.attachments?t.attachments:""},emailAddresses:[].concat(l()(e.state.emailAddresses),l()(a)),hasLoaded:!0}),(function(){t.contactGroupId&&C.a.fetchEmailGroup(t.contactGroupId).then((function(a){var n=e.state.emailAddresses;n.push({id:"@group_"+t.contactGroupId,name:a});var l="@group_"+t.contactGroupId;t.to.length>0&&(l=l+","+t.to.join(",")),e.setState(X({},e.state,{emailAddresses:n,email:X({},e.state.email,{to:l})}))}))}))}))}},{key:"createExtraOptions",value:function(e,t,a){var n=Object(N.union)(e,t,a),l=[];return n.map((function(e){l.push({id:e,name:e})})),l}},{key:"handleInputChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;this.setState(X({},this.state,{email:X({},this.state.email,v()({},n,a))}))}},{key:"handleToIds",value:function(e){this.setState(X({},this.state,{email:X({},this.state.email,{to:e})}))}},{key:"handleCcIds",value:function(e){this.setState(X({},this.state,{email:X({},this.state.email,{cc:e})}))}},{key:"handleBccIds",value:function(e){this.setState(X({},this.state,{email:X({},this.state.email,{bcc:e})}))}},{key:"handleTextChange",value:function(e){this.setState(X({},this.state,{email:X({},this.state.email,{htmlBody:e.target.getContent({format:"raw"})})}))}},{key:"addAttachment",value:function(e){var t=this,a=new FormData;e.map((function(e,t){a.append("attachments["+t+"]",e)})),C.a.storeAttachment(this.state.email.id,a).then((function(e){t.setState(X({},t.state,{email:X({},t.state.email,{attachments:e.data.data})}))}))}},{key:"deleteAttachment",value:function(e,t){var a=this;C.a.deleteAttachment(t).then((function(){a.setState(X({},a.state,{email:X({},a.state.email,{attachments:a.state.email.attachments.filter((function(t){return t.name!==e}))})}))}))}},{key:"handleSubmit",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.preventDefault();var a=this.state.email,n={},l=!1;if(w.a.isEmpty(a.to)&&(n.to=!0,l=!0),w.a.isEmpty(""+a.from)&&(n.from=!0,l=!0),w.a.isEmpty(""+a.subject)&&(n.subject=!0,l=!0),this.setState(X({},this.state,{errors:n})),!l){a.to.length>0&&(a.to=a.to.split(",")),a.cc.length>0&&(a.cc=a.cc.split(",")),a.bcc.length>0&&(a.bcc=a.bcc.split(","));var o=new FormData;o.append("to",JSON.stringify(a.to)),o.append("cc",JSON.stringify(a.cc)),o.append("bcc",JSON.stringify(a.bcc)),o.append("subject",a.subject),o.append("htmlBody",a.htmlBody),t?C.a.updateConcept(o,this.props.params.id).then((function(){J.f.push("/emails/concept")})).catch((function(e){console.log(e)})):(this.setButtonLoading(),C.a.sendConcept(o,this.props.params.id).then((function(){J.f.push("/emails/sent")})).catch((function(e){console.log(e)})))}}},{key:"removeEmail",value:function(){C.a.deleteEmail(this.props.params.id).then((function(){J.e.goBack()}))}},{key:"render",value:function(){return x.a.createElement("div",{className:"row"},x.a.createElement("div",{className:"col-md-9"},x.a.createElement("div",{className:"col-md-12 margin-10-top"},x.a.createElement(y.a,null,x.a.createElement(M.a,{className:"panel-small"},x.a.createElement(H,{loading:this.state.buttonLoading,handleSubmit:this.handleSubmit,removeEmail:this.removeEmail})))),x.a.createElement("div",{className:"col-md-12 margin-10-top"},x.a.createElement(V,{email:this.state.email,emailAddresses:this.state.emailAddresses,errors:this.state.errors,hasLoaded:this.state.hasLoaded,handleSubmit:this.handleSubmit,handleToIds:this.handleToIds,handleCcIds:this.handleCcIds,handleBccIds:this.handleBccIds,handleInputChange:this.handleInputChange,handleTextChange:this.handleTextChange,addAttachment:this.addAttachment,deleteAttachment:this.deleteAttachment}))),x.a.createElement("div",{className:"col-md-3"}))}}]),t}(S.Component);t.default=Y},682:function(e,t,a){"use strict";var n=a(0),l=a.n(n),o=a(14),i=a.n(o),c=function(e){var t=e.children,a=e.className,n=e.onMouseEnter,o=e.onMouseLeave;return l.a.createElement("div",{className:"panel panel-default ".concat(a),onMouseEnter:n,onMouseLeave:o},t)};c.defaultProps={className:"",onMouseEnter:function(){},onMouseLeave:function(){}},c.propTypes={className:i.a.string,onMouseEnter:i.a.func,onMouseLeave:i.a.func},t.a=c},683:function(e,t,a){"use strict";var n=a(0),l=a.n(n),o=a(14),i=a.n(o),c=function(e){var t=e.className,a=e.children;return l.a.createElement("div",{className:"panel-body ".concat(t)},a)};c.defaultProps={className:""},c.propTypes={className:i.a.string},t.a=c},684:function(e,t,a){"use strict";var n=a(0),l=a.n(n),o=a(14),i=a.n(o),c=function(e){var t=e.buttonClassName,a=e.buttonText,n=e.onClickAction,o=e.type,i=e.value,c=e.loading,r=e.loadText,s=e.disabled;return c?l.a.createElement("button",{type:o,className:"btn btn-sm btn-loading ".concat(t),value:i,disabled:c},l.a.createElement("span",{className:"glyphicon glyphicon-refresh glyphicon-refresh-animate"})," ",r):l.a.createElement("button",{type:o,className:"btn btn-sm ".concat(t),onClick:n,value:i,disabled:s},a)};c.defaultProps={buttonClassName:"btn-success",type:"button",value:"",loading:!1,loadText:"Aan het laden",disabled:!1},c.propTypes={buttonClassName:i.a.string,buttonText:i.a.string.isRequired,onClickAction:i.a.func,type:i.a.string,value:i.a.string,loading:i.a.bool,loadText:i.a.string,disabled:i.a.bool},t.a=c},685:function(e,t,a){"use strict";var n=a(0),l=a.n(n),o=a(14),i=a.n(o),c=function(e){var t=e.buttonClassName,a=e.iconName,n=e.onClickAction,o=e.title,i=e.disabled;return l.a.createElement("button",{type:"button",className:"btn ".concat(t),onClick:n,disabled:i,title:o},l.a.createElement("span",{className:"glyphicon ".concat(a)}))};c.defaultProps={buttonClassName:"btn-success btn-sm",title:"",disabled:!1},c.propTypes={buttonClassName:i.a.string,iconName:i.a.string.isRequired,onClickAction:i.a.func,title:i.a.string,disabled:i.a.bool},t.a=c},687:function(e,t,a){"use strict";var n=a(0),l=a.n(n),o=a(4),i=a(14),c=a.n(i),r=function(e){var t=e.label,a=e.className,n=e.id,i=e.value,c=e.link,r=e.hidden;return c.length>0?l.a.createElement("div",{className:a,style:r?{display:"none"}:{}},l.a.createElement("label",{htmlFor:n,className:"col-sm-6"},t),l.a.createElement("div",{className:"col-sm-6",id:n,onClick:null},l.a.createElement(o.b,{to:c,className:"link-underline"},i))):l.a.createElement("div",{className:a,style:r?{display:"none"}:{}},l.a.createElement("label",{htmlFor:n,className:"col-sm-6"},t),l.a.createElement("div",{className:"col-sm-6",id:n},i))};r.defaultProps={className:"col-sm-6",value:"",link:"",hidden:!1},r.propTypes={label:c.a.oneOfType([c.a.string,c.a.object]).isRequired,className:c.a.string,id:c.a.string,value:c.a.oneOfType([c.a.string,c.a.number]),link:c.a.string,hidden:c.a.bool},t.a=r},690:function(e,t,a){"use strict";var n=a(0),l=a.n(n),o=a(14),i=a.n(o),c=function(e){var t=e.className,a=e.children;return l.a.createElement("div",{className:"panel-heading ".concat(t)},a)};c.defaultProps={className:""},c.propTypes={className:i.a.string},t.a=c},695:function(e,t,a){var n=a(697);"string"==typeof n&&(n=[[e.i,n,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};a(201)(n,l);n.locals&&(e.exports=n.locals)},697:function(e,t,a){(e.exports=a(200)(!1)).push([e.i,".Select{position:relative}.Select input::-webkit-contacts-auto-fill-button,.Select input::-webkit-credentials-auto-fill-button{display:none!important}.Select input::-ms-clear,.Select input::-ms-reveal{display:none!important}.Select,.Select div,.Select input,.Select span{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.Select.is-disabled .Select-arrow-zone{cursor:default;pointer-events:none;opacity:.35}.Select.is-disabled>.Select-control{background-color:#f9f9f9}.Select.is-disabled>.Select-control:hover{box-shadow:none}.Select.is-open>.Select-control{border-bottom-right-radius:0;border-bottom-left-radius:0;background:#fff;border-color:#b3b3b3 #ccc #d9d9d9}.Select.is-open>.Select-control .Select-arrow{top:-2px;border-color:transparent transparent #999;border-width:0 5px 5px}.Select.is-searchable.is-focused:not(.is-open)>.Select-control,.Select.is-searchable.is-open>.Select-control{cursor:text}.Select.is-focused>.Select-control{background:#fff}.Select.is-focused:not(.is-open)>.Select-control{border-color:#007eff;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 0 3px rgba(0,126,255,.1);background:#fff}.Select.has-value.is-clearable.Select--single>.Select-control .Select-value{padding-right:42px}.Select.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value .Select-value-label,.Select.has-value.Select--single>.Select-control .Select-value .Select-value-label{color:#333}.Select.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value a.Select-value-label,.Select.has-value.Select--single>.Select-control .Select-value a.Select-value-label{cursor:pointer;text-decoration:none}.Select.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value a.Select-value-label:focus,.Select.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value a.Select-value-label:hover,.Select.has-value.Select--single>.Select-control .Select-value a.Select-value-label:focus,.Select.has-value.Select--single>.Select-control .Select-value a.Select-value-label:hover{color:#007eff;outline:none;text-decoration:underline}.Select.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value a.Select-value-label:focus,.Select.has-value.Select--single>.Select-control .Select-value a.Select-value-label:focus{background:#fff}.Select.has-value.is-pseudo-focused .Select-input{opacity:0}.Select.is-open .Select-arrow,.Select .Select-arrow-zone:hover>.Select-arrow{border-top-color:#666}.Select.Select--rtl{direction:rtl;text-align:right}.Select-control{background-color:#fff;border-color:#d9d9d9 #ccc #b3b3b3;border-radius:4px;border:1px solid #ccc;color:#333;cursor:default;display:table;border-spacing:0;border-collapse:separate;height:36px;outline:none;overflow:hidden;position:relative;width:100%}.Select-control:hover{box-shadow:0 1px 0 rgba(0,0,0,.06)}.Select-control .Select-input:focus{outline:none;background:#fff}.Select--single>.Select-control .Select-value,.Select-placeholder{bottom:0;color:#aaa;left:0;line-height:34px;padding-left:10px;padding-right:10px;position:absolute;right:0;top:0;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.Select-input{height:34px;padding-left:10px;padding-right:10px;vertical-align:middle}.Select-input>input{width:100%;background:none transparent;border:0 none;box-shadow:none;cursor:default;display:inline-block;font-family:inherit;font-size:inherit;margin:0;outline:none;line-height:17px;padding:8px 0 12px;-webkit-appearance:none}.is-focused .Select-input>input{cursor:text}.has-value.is-pseudo-focused .Select-input{opacity:0}.Select-control:not(.is-searchable)>.Select-input{outline:none}.Select-loading-zone{cursor:pointer;display:table-cell;text-align:center}.Select-loading,.Select-loading-zone{position:relative;vertical-align:middle;width:16px}.Select-loading{-webkit-animation:Select-animation-spin .4s infinite linear;-o-animation:Select-animation-spin .4s infinite linear;animation:Select-animation-spin .4s infinite linear;height:16px;box-sizing:border-box;border-radius:50%;border:2px solid #ccc;border-right-color:#333;display:inline-block}.Select-clear-zone{-webkit-animation:Select-animation-fadeIn .2s;-o-animation:Select-animation-fadeIn .2s;animation:Select-animation-fadeIn .2s;color:#999;cursor:pointer;display:table-cell;position:relative;text-align:center;vertical-align:middle;width:17px}.Select-clear-zone:hover{color:#d0021b}.Select-clear{display:inline-block;font-size:18px;line-height:1}.Select--multi .Select-clear-zone{width:17px}.Select-arrow-zone{cursor:pointer;display:table-cell;position:relative;text-align:center;vertical-align:middle;width:25px;padding-right:5px}.Select--rtl .Select-arrow-zone{padding-right:0;padding-left:5px}.Select-arrow{border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 2.5px;display:inline-block;height:0;width:0;position:relative}.Select-control>:last-child{padding-right:5px}.Select--multi .Select-multi-value-wrapper{display:inline-block}.Select .Select-aria-only{position:absolute;display:inline-block;height:1px;width:1px;margin:-1px;clip:rect(0,0,0,0);overflow:hidden;float:left}@-webkit-keyframes Select-animation-fadeIn{0%{opacity:0}to{opacity:1}}@keyframes Select-animation-fadeIn{0%{opacity:0}to{opacity:1}}.Select-menu-outer{border-bottom-right-radius:4px;border-bottom-left-radius:4px;background-color:#fff;border:1px solid #ccc;border-top-color:#e6e6e6;box-shadow:0 1px 0 rgba(0,0,0,.06);box-sizing:border-box;margin-top:-1px;max-height:200px;position:absolute;left:0;top:100%;width:100%;z-index:1;-webkit-overflow-scrolling:touch}.Select-menu{max-height:198px;overflow-y:auto}.Select-option{box-sizing:border-box;background-color:#fff;color:#666;cursor:pointer;display:block;padding:8px 10px}.Select-option:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.Select-option.is-selected{background-color:#f5faff;background-color:rgba(0,126,255,.04);color:#333}.Select-option.is-focused{background-color:#ebf5ff;background-color:rgba(0,126,255,.08);color:#333}.Select-option.is-disabled{color:#ccc;cursor:default}.Select-noresults{box-sizing:border-box;color:#999;cursor:default;display:block;padding:8px 10px}.Select--multi .Select-input{vertical-align:middle;margin-left:10px;padding:0}.Select--multi.Select--rtl .Select-input{margin-left:0;margin-right:10px}.Select--multi.has-value .Select-input{margin-left:5px}.Select--multi .Select-value{background-color:#ebf5ff;background-color:rgba(0,126,255,.08);border-radius:2px;border:1px solid #c2e0ff;border:1px solid rgba(0,126,255,.24);color:#007eff;display:inline-block;font-size:.9em;line-height:1.4;margin-left:5px;margin-top:5px;vertical-align:top}.Select--multi .Select-value-icon,.Select--multi .Select-value-label{display:inline-block;vertical-align:middle}.Select--multi .Select-value-label{border-bottom-right-radius:2px;border-top-right-radius:2px;cursor:default;padding:2px 5px}.Select--multi a.Select-value-label{color:#007eff;cursor:pointer;text-decoration:none}.Select--multi a.Select-value-label:hover{text-decoration:underline}.Select--multi .Select-value-icon{cursor:pointer;border-bottom-left-radius:2px;border-top-left-radius:2px;border-right:1px solid #c2e0ff;border-right:1px solid rgba(0,126,255,.24);padding:1px 5px 3px}.Select--multi .Select-value-icon:focus,.Select--multi .Select-value-icon:hover{background-color:#d8eafd;background-color:rgba(0,113,230,.08);color:#0071e6}.Select--multi .Select-value-icon:active{background-color:#c2e0ff;background-color:rgba(0,126,255,.24)}.Select--multi.Select--rtl .Select-value{margin-left:0;margin-right:5px}.Select--multi.Select--rtl .Select-value-icon{border-right:none;border-left:1px solid #c2e0ff;border-left:1px solid rgba(0,126,255,.24)}.Select--multi.is-disabled .Select-value{background-color:#fcfcfc;border:1px solid #e3e3e3;color:#333}.Select--multi.is-disabled .Select-value-icon{cursor:not-allowed;border-right:1px solid #e3e3e3}.Select--multi.is-disabled .Select-value-icon:active,.Select--multi.is-disabled .Select-value-icon:focus,.Select--multi.is-disabled .Select-value-icon:hover{background-color:#fcfcfc}@keyframes Select-animation-spin{to{transform:rotate(1turn)}}@-webkit-keyframes Select-animation-spin{to{-webkit-transform:rotate(1turn)}}",""])},706:function(e,t){e.exports=function(e,t,a){var n=new Blob([e],{type:a||"application/octet-stream"});if(void 0!==window.navigator.msSaveBlob)window.navigator.msSaveBlob(n,t);else{var l=window.URL.createObjectURL(n),o=document.createElement("a");o.style.display="none",o.href=l,o.setAttribute("download",t),void 0===o.download&&o.setAttribute("target","_blank"),document.body.appendChild(o),o.click(),document.body.removeChild(o),window.URL.revokeObjectURL(l)}}},733:function(e,t,a){"use strict";var n=a(0),l=a.n(n),o=a(14),i=a.n(o),c=(a(753),a(754),a(755),a(756),a(757),a(758),a(759),a(760),a(761),a(762),a(763),a(768)),r=function(e){var t=e.label,a=e.value,n=e.onChangeAction;return l.a.createElement("div",null,l.a.createElement("div",{className:"col-sm-3"},l.a.createElement("label",{htmlFor:"quotationText",className:"col-sm-12"},t)),l.a.createElement("div",{className:"col-sm-9"},l.a.createElement(c.a,{initialValue:a,init:{branding:!1,language:"nl",menubar:!1,plugins:"paste lists advlist link image code table textcolor pagebreak",toolbar:"undo redo | formatselect fontselect | bold italic forecolor | alignleft aligncenter alignright | pagebreak | bullist numlist outdent indent | table | link image | code",height:"300",browser_spellcheck:!0,font_formats:"Courier New=courier new;Tahoma=tahoma;Times New Roman=times new roman;Verdana=verdana;"},onChange:n})))};r.defaultProps={value:"",errorMessage:""},r.propTypes={label:i.a.string.isRequired,type:i.a.string,id:i.a.string,placeholder:i.a.string,value:i.a.string,onChangeAction:i.a.func},t.a=r},833:function(e,t,a){"use strict";var n=a(0),l=a.n(n),o=a(14),i=a.n(o),c=a(708),r=(a(695),function(e){var t=e.label,a=(e.className,e.size),n=e.id,o=e.name,i=e.value,r=e.options,s=e.optionId,d=e.optionName,m=e.onChangeAction,u=e.required,p=(e.allowCreate,e.error);return l.a.createElement("div",{className:"form-group col-sm-12"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-3"},l.a.createElement("label",{htmlFor:n,className:"col-sm-12 ".concat(u)},t)),l.a.createElement("div",{className:"".concat(a)},l.a.createElement(c.default.Creatable,{id:n,name:o,value:i,onChange:m,options:r,valueKey:s,labelKey:d,placeholder:"",noResultsText:"Geen resultaat gevonden",multi:!0,simpleValue:!0,removeSelected:!0,promptTextCreator:function(e){return'Maak optie "'.concat(e,'" aan')},className:p?" has-error":""}))))});r.defaultProps={allowCreate:!1,className:"",size:"col-sm-6",optionId:"id",optionName:"name",readOnly:!1,required:"",error:!1,value:""},r.propTypes={allowCreate:i.a.bool,label:i.a.string.isRequired,className:i.a.string,size:i.a.string,id:i.a.string,name:i.a.string.isRequired,options:i.a.array,optionId:i.a.string,optionName:i.a.string,value:i.a.string,onChangeAction:i.a.func,onBlurAction:i.a.func,required:i.a.string,readOnly:i.a.bool,error:i.a.bool},t.a=r}}]);