(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{1602:function(e,t,n){"use strict";n.r(t);var a=n(25),i=n.n(a),r=n(24),o=n.n(r),s=n(26),l=n.n(s),c=n(27),d=n.n(c),u=n(21),p=n.n(u),m=n(28),f=n.n(m),v=n(6),h=n.n(v),b=n(0),y=n.n(b),g=n(682),E=n(683),N=n(33),w=(n(198),n(9)),C=n.n(w),I=n(4),O=function(e){function t(e){return i()(this,t),l()(this,d()(t).call(this,e))}return f()(t,e),o()(t,[{key:"render",value:function(){var e=this;return y.a.createElement("nav",{className:"invoices-list open sticky"},y.a.createElement("div",{className:"send-invoices-sidebar-menu",style:{color:"$brand-primary"}},y.a.createElement(C.a,{highlightColor:"$brand-primary",highlightBgColor:"#e5e5e5",hoverBgColor:"#F1EFF0",defaultSelected:"invoice"},this.props.invoices.length>0?this.props.invoices.map((function(t,n){return y.a.createElement(w.Nav,{onNavClick:function(){return e.props.changeInvoice(t.id)},key:n,id:"administration-".concat(t.id)},y.a.createElement(w.NavText,null,y.a.createElement(I.b,{className:"".concat("Geen e-mail bekend"===t.emailToAddress?"send-invoices-list-link-error":"send-invoices-list-link")},t.number," - ",t.contactName)))})):y.a.createElement(w.Nav,{id:"invoice"},y.a.createElement(w.NavText,null,y.a.createElement(I.b,{className:"send-invoices-list-link"},"Geen nota's beschikbaar."))))))}}]),t}(b.Component),T=Object(N.b)((function(e){return{administrationDetails:e.administrationDetails}}))(O),k=n(211),D=n(727),S=n(89),j=function(e){function t(e){var n;return i()(this,t),(n=l()(this,d()(t).call(this,e))).state={file:null},n}return f()(t,e),o()(t,[{key:"componentWillReceiveProps",value:function(e){this.props.invoiceId!==e.invoiceId&&e.invoiceId&&this.downloadFile(e.invoiceId)}},{key:"downloadFile",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;S.a.download(e).then((function(e){t.setState({file:e.data})})).catch((function(){n<2&&setTimeout((function(){t.downloadFile(e,n)}),500),n++}))}},{key:"render",value:function(){return this.state.file?y.a.createElement("div",null,y.a.createElement(D.a,{file:this.state.file})):y.a.createElement("div",null,"Geen gegevens gevonden.")}}]),t}(b.Component),P=n(728),A=function(e){function t(e){var n;return i()(this,t),(n=l()(this,d()(t).call(this,e))).state={email:null},n}return f()(t,e),o()(t,[{key:"componentWillReceiveProps",value:function(e){this.props.invoiceId!==e.invoiceId&&e.invoiceId&&this.downloadEmail(e.invoiceId)}},{key:"downloadEmail",value:function(e){var t=this;S.a.getEmailPreview(e).then((function(e){t.setState({email:e})}))}},{key:"render",value:function(){return this.state.email?y.a.createElement("div",null,y.a.createElement("div",{className:"row margin-10-top"},y.a.createElement("div",{className:"col-sm-12"},y.a.createElement("div",{className:"row"},y.a.createElement("div",{className:"col-sm-3"},y.a.createElement("label",{className:"col-sm-12"},"Aan")),y.a.createElement("div",{className:"col-sm-9"},this.state.email.to)))),this.state.email.bcc?y.a.createElement("div",{className:"row margin-10-top"},y.a.createElement("div",{className:"col-sm-12"},y.a.createElement("div",{className:"row"},y.a.createElement("div",{className:"col-sm-3"},y.a.createElement("label",{className:"col-sm-12"},"Bcc")),y.a.createElement("div",{className:"col-sm-9"},this.state.email.bcc)))):null,y.a.createElement("div",{className:"row margin-10-top"},y.a.createElement("div",{className:"col-sm-12"},y.a.createElement("div",{className:"row"},y.a.createElement("div",{className:"col-sm-3"},y.a.createElement("label",{className:"col-sm-12"},"Onderwerp")),y.a.createElement("div",{className:"col-sm-9"},this.state.email.subject)))),y.a.createElement("div",{className:"row"},y.a.createElement(P.a,{label:"Tekst",value:this.state.email.htmlBody}))):y.a.createElement("div",null,"Geen gegevens gevonden.")}}]),t}(b.Component),_=n(685),M=n(98),x=n(706),R=n.n(x),q=n(691),z=n(689),F=n.n(z),B=n(8),L=n.n(B),U=n(203);function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){h()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Y=function(e){function t(e){var n;return i()(this,t),n=l()(this,d()(t).call(this,e)),h()(p()(n),"confirmAction",(function(e){if(e.preventDefault(),n.setState({loading:!0}),!n.props.canCreateInvoices.can)return n.props.setError(412,n.props.canCreateInvoices.message),void n.props.closeModal();var t=!1;if("incasso"===n.props.paymentType){var a=n.state.dateCollection,i={};F.a.isEmpty(a+"")&&(i.dateCollection=!0,t=!0),L()().isAfter(L()(a))&&(i.dateCollection=!0,t=!0),n.setState(W({},n.state,{errors:i})),t||(S.a.sendAll(n.props.invoiceIds,a).then((function(e){e&&e.headers&&e.headers["x-filename"]&&R()(e.data,e.headers["x-filename"])})),I.f.push("/financieel/".concat(n.props.administrationId,"/notas/verzonden")))}else S.a.sendAll(n.props.invoiceIds,null).then((function(e){e&&e.headers&&e.headers["x-filename"]&&R()(e.data,e.headers["x-filename"])})),I.f.push("/financieel/".concat(n.props.administrationId,"/notas/verzonden"))})),h()(p()(n),"handleInputChangeDate",(function(e,t){n.setState(W({},n.state,h()({},t,e)))})),n.state={dateCollection:"",loading:!1,errors:{dateCollection:!1}},n}return f()(t,e),o()(t,[{key:"render",value:function(){var e=this.state.dateCollection;return y.a.createElement(M.a,{closeModal:this.props.closeModal,confirmAction:this.confirmAction,title:"Nota verzenden",buttonConfirmText:"Verzenden",loading:this.state.loading},"incasso"===this.props.paymentType&&y.a.createElement("div",{className:"row"},y.a.createElement(q.a,{divSize:"col-xs-12",label:"Incasso datum",name:"dateCollection",value:e,onChangeAction:this.handleInputChangeDate,required:"required",error:this.state.errors.dateCollection})),"incasso"===this.props.paymentType&&y.a.createElement("div",{className:"row"},y.a.createElement("div",{className:"col-sm-12 margin-10-bottom"},y.a.createElement("span",null,"De incasso datum moet minimaal x dagen later zijn dan de datum waarop je het sepa incasso bestand upload bij je bank. En maximaal x maanden na de upload datum. Informeer bij jou bank welke data zij handhaven.",y.a.createElement("br",null)," ",y.a.createElement("br",null),y.a.createElement("ul",null,y.a.createElement("li",null,"Bij Triodos is dat minimaal 2 werkdagen en maximaal 2 maanden"))))),y.a.createElement("div",{className:"row"},y.a.createElement("div",{className:"col-sm-12 margin-10-bottom"},y.a.createElement("span",null,"Wilt u alle nota's definitief maken en verzenden?"))))}}]),t}(b.Component),G=Object(N.b)((function(e){return{canCreateInvoices:e.administrationDetails.canCreateInvoices}}),(function(e){return{setError:function(t,n){e(Object(U.b)(t,n))}}}))(Y),H=n(684);function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(Object(n),!0).forEach((function(t){h()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var K=function(e){function t(e){var n;return i()(this,t),n=l()(this,d()(t).call(this,e)),h()(p()(n),"confirmAction",(function(e){e.preventDefault();var t=!1;if("incasso"===n.props.paymentType){var a=n.state.dateCollection,i={};F.a.isEmpty(a+"")&&(i.dateCollection=!0,t=!0),L()().isAfter(L()(a))&&(i.dateCollection=!0,t=!0),n.setState($({},n.state,{errors:i})),t||(n.setState({loading:!0}),S.a.sendAllPost(n.props.invoiceIds,a).then((function(e){e&&e.headers&&e.headers["x-filename"]?(R()(e.data,e.headers["x-filename"]),S.a.createSepaForInvoiceIds(n.props.invoiceIds).then((function(e){e&&e.headers&&e.headers["x-filename"]?(R()(e.data,e.headers["x-filename"]),I.f.push("/financieel/".concat(n.props.administrationId,"/notas/verzonden"))):I.f.push("/financieel/".concat(n.props.administrationId,"/notas/verzonden"))}))):I.f.push("/financieel/".concat(n.props.administrationId,"/notas/verzonden"))})))}else n.setState({loading:!0}),S.a.sendAllPost(n.props.invoiceIds,null).then((function(e){e&&e.headers&&e.headers["x-filename"]?(R()(e.data,e.headers["x-filename"]),S.a.createSepaForInvoiceIds(n.props.invoiceIds).then((function(e){e&&e.headers&&e.headers["x-filename"]?(R()(e.data,e.headers["x-filename"]),I.f.push("/financieel/".concat(n.props.administrationId,"/notas/verzonden"))):I.f.push("/financieel/".concat(n.props.administrationId,"/notas/verzonden"))}))):I.f.push("/financieel/".concat(n.props.administrationId,"/notas/verzonden"))}))})),h()(p()(n),"handleInputChangeDate",(function(e,t){n.setState($({},n.state,h()({},t,e)))})),n.state={dateCollection:"",loading:!1,errors:{dateCollection:!1}},n}return f()(t,e),o()(t,[{key:"render",value:function(){var e=this.state.dateCollection;return y.a.createElement(M.a,{closeModal:this.props.closeModal,confirmAction:this.confirmAction,title:"Nota downloaden",buttonConfirmText:"Downloaden",loading:this.state.loading},"incasso"===this.props.paymentType&&y.a.createElement("div",{className:"row"},y.a.createElement(q.a,{divSize:"col-xs-12",label:"Incasso datum",name:"dateCollection",value:e,onChangeAction:this.handleInputChangeDate,required:"required",error:this.state.errors.dateCollection})),y.a.createElement("div",{className:"row"},y.a.createElement("div",{className:"col-sm-12 margin-10-bottom"},y.a.createElement("span",null,"Wilt u alle nota's definitief maken, downloaden en doorzetten naar status verzonden?"))))}}]),t}(b.Component),Q=function(e){function t(e){var n;return i()(this,t),n=l()(this,d()(t).call(this,e)),h()(p()(n),"showSend",(function(){n.setState({showSend:!n.state.showSend})})),n.state={showSend:!1},n}return f()(t,e),o()(t,[{key:"render",value:function(){return y.a.createElement("div",{className:"row"},y.a.createElement("div",{className:"col-md-4"},y.a.createElement("div",{className:"btn-group btn-group-flex margin-small",role:"group"},y.a.createElement(_.a,{iconName:"glyphicon-arrow-left",onClickAction:I.e.goBack}),this.props.amountOfInvoices>0&&"email"===this.props.type&&"incasso"===this.props.paymentType&&y.a.createElement(H.a,{buttonText:"Nota's e-mailen en sepa bestand maken",onClickAction:this.showSend}),this.props.amountOfInvoices>0&&"email"===this.props.type&&"overboeken"===this.props.paymentType&&y.a.createElement(H.a,{buttonText:"Nota's e-mailen",onClickAction:this.showSend}),this.props.amountOfInvoices>0&&"post"===this.props.type&&"incasso"===this.props.paymentType&&y.a.createElement(H.a,{buttonText:"Nota's downloaden en sepa bestand maken",onClickAction:this.showSend}),this.props.amountOfInvoices>0&&"post"===this.props.type&&"overboeken"===this.props.paymentType&&y.a.createElement(H.a,{buttonText:"Nota's downloaden",onClickAction:this.showSend}))),y.a.createElement("div",{className:"col-md-4"},y.a.createElement("h4",{className:"text-center"},"Te verzenden nota's versturen(",this.props.amountOfInvoices,")")),y.a.createElement("div",{className:"col-md-4"}),this.state.showSend&&"email"===this.props.type&&y.a.createElement(G,{type:this.props.type,paymentType:this.props.paymentType,invoiceIds:this.props.invoiceIds,closeModal:this.showSend,administrationId:this.props.administrationId}),this.state.showSend&&"post"===this.props.type&&y.a.createElement(K,{type:this.props.type,paymentType:this.props.paymentType,invoiceIds:this.props.invoiceIds,closeModal:this.showSend,administrationId:this.props.administrationId}))}}]),t}(b.Component),X=n(818),Z=n(745),ee=function(e){function t(e){var n;return i()(this,t),n=l()(this,d()(t).call(this,e)),h()(p()(n),"changeInvoice",(function(e){n.setState({invoiceId:e})})),n.state={invoices:[],invoiceId:""},n}return f()(t,e),o()(t,[{key:"componentWillUnmount",value:function(){this.props.clearPreviewSend()}},{key:"componentDidMount",value:function(){var e=this;this.props.fetchAdministrationDetails(this.props.params.id),k.a.getInvoicesForSending(this.props.invoicePreviewSend).then((function(t){e.setState({invoices:t.data})}))}},{key:"render",value:function(){return y.a.createElement("div",null,y.a.createElement("div",{className:"row"},y.a.createElement("div",{className:"col-md-12 margin-10-top"},y.a.createElement("div",{className:"col-md-12 margin-10-top"},y.a.createElement(g.a,null,y.a.createElement(E.a,{className:"panel-small"},y.a.createElement(Q,{type:this.props.params.type,paymentType:this.props.params.paymentType,invoiceIds:this.props.invoicePreviewSend,amountOfInvoices:this.state.invoices?this.state.invoices.length:0,administrationId:this.props.params.id})))))),y.a.createElement("div",{className:"row"},y.a.createElement("div",{className:"col-md-2"},y.a.createElement("div",{className:"col-md-12 margin-10-top"},y.a.createElement(g.a,null,y.a.createElement(E.a,{className:"panel-invoices-list"},y.a.createElement(T,{invoices:this.state.invoices,changeInvoice:this.changeInvoice}))))),y.a.createElement("div",{className:"col-md-5"},y.a.createElement("div",{className:"col-md-12 margin-10-top"},y.a.createElement(g.a,null,y.a.createElement(E.a,null,y.a.createElement(j,{invoiceId:this.state.invoiceId}))))),y.a.createElement("div",{className:"col-md-5"},y.a.createElement("div",{className:"col-md-12 margin-10-top"},y.a.createElement(g.a,null,y.a.createElement(E.a,null,y.a.createElement(A,{invoiceId:this.state.invoiceId})))))))}}]),t}(b.Component);t.default=Object(N.b)((function(e){return{invoicePreviewSend:e.invoicePreviewSend}}),(function(e){return{clearPreviewSend:function(){e(Object(X.b)())},fetchAdministrationDetails:function(t){e(Object(Z.d)(t))}}}))(ee)},682:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(14),o=n.n(r),s=function(e){var t=e.children,n=e.className,a=e.onMouseEnter,r=e.onMouseLeave;return i.a.createElement("div",{className:"panel panel-default ".concat(n),onMouseEnter:a,onMouseLeave:r},t)};s.defaultProps={className:"",onMouseEnter:function(){},onMouseLeave:function(){}},s.propTypes={className:o.a.string,onMouseEnter:o.a.func,onMouseLeave:o.a.func},t.a=s},683:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(14),o=n.n(r),s=function(e){var t=e.className,n=e.children;return i.a.createElement("div",{className:"panel-body ".concat(t)},n)};s.defaultProps={className:""},s.propTypes={className:o.a.string},t.a=s},684:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(14),o=n.n(r),s=function(e){var t=e.buttonClassName,n=e.buttonText,a=e.onClickAction,r=e.type,o=e.value,s=e.loading,l=e.loadText,c=e.disabled;return s?i.a.createElement("button",{type:r,className:"btn btn-sm btn-loading ".concat(t),value:o,disabled:s},i.a.createElement("span",{className:"glyphicon glyphicon-refresh glyphicon-refresh-animate"})," ",l):i.a.createElement("button",{type:r,className:"btn btn-sm ".concat(t),onClick:a,value:o,disabled:c},n)};s.defaultProps={buttonClassName:"btn-success",type:"button",value:"",loading:!1,loadText:"Aan het laden",disabled:!1},s.propTypes={buttonClassName:o.a.string,buttonText:o.a.string.isRequired,onClickAction:o.a.func,type:o.a.string,value:o.a.string,loading:o.a.bool,loadText:o.a.string,disabled:o.a.bool},t.a=s},685:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(14),o=n.n(r),s=function(e){var t=e.buttonClassName,n=e.iconName,a=e.onClickAction,r=e.title,o=e.disabled;return i.a.createElement("button",{type:"button",className:"btn ".concat(t),onClick:a,disabled:o,title:r},i.a.createElement("span",{className:"glyphicon ".concat(n)}))};s.defaultProps={buttonClassName:"btn-success btn-sm",title:"",disabled:!1},s.propTypes={buttonClassName:o.a.string,iconName:o.a.string.isRequired,onClickAction:o.a.func,title:o.a.string,disabled:o.a.bool},t.a=s},691:function(e,t,n){"use strict";var a=n(25),i=n.n(a),r=n(24),o=n.n(r),s=n(26),l=n.n(s),c=n(27),d=n.n(c),u=n(21),p=n.n(u),m=n(28),f=n.n(m),v=n(6),h=n.n(v),b=n(0),y=n.n(b),g=n(14),E=n.n(g),N=n(703),w=n.n(N),C=n(704),I=n.n(C),O=n(8),T=n.n(O);T.a.locale("nl");var k=function(e){function t(e){var n;return i()(this,t),n=l()(this,d()(t).call(this,e)),h()(p()(n),"validateDate",(function(e){var t=T()(e.target.value,"DD-MM-YYYY",!0),a=!1;t.isValid()||""===e.target.value||(a=!0),n.props.disabledBefore&&t.isBefore(n.props.disabledBefore)&&(a=!0),n.props.disabledAfter&&t.isAfter(n.props.disabledAfter)&&(a=!0),n.setState({errorDateFormat:a})})),h()(p()(n),"onDateChange",(function(e){var t=e?T()(e).format("Y-MM-DD"):"",a=!1;t&&n.props.disabledBefore&&T()(t).isBefore(n.props.disabledBefore)&&(a=!0),t&&n.props.disabledAfter&&T()(t).isAfter(n.props.disabledAfter)&&(a=!0),n.setState({errorDateFormat:a}),!a&&n.props.onChangeAction(t,n.props.name)})),n.state={errorDateFormat:!1},n}return f()(t,e),o()(t,[{key:"render",value:function(){var e=this.props,t=e.label,n=e.className,a=e.size,i=e.divSize,r=e.id,o=e.value,s=e.required,l=e.readOnly,c=e.name,d=e.error,u=e.errorMessage,p=e.disabledBefore,m=e.disabledAfter,f=o?T()(o).format("L"):"",v={};return p&&(v.before=new Date(p)),m&&(v.after=new Date(m)),y.a.createElement("div",{className:"form-group ".concat(i)},y.a.createElement("div",null,y.a.createElement("label",{htmlFor:r,className:"col-sm-6 ".concat(s)},t)),y.a.createElement("div",{className:"".concat(a)},y.a.createElement(w.a,{id:r,value:f,formatDate:C.formatDate,parseDate:C.parseDate,onDayChange:this.onDateChange,dayPickerProps:{showWeekNumbers:!0,locale:"nl",firstDayOfWeek:1,localeUtils:I.a,disabledDays:v},inputProps:{className:"form-control input-sm ".concat(n)+(this.state.errorDateFormat||d?" has-error":""),name:c,onBlur:this.validateDate,autoComplete:"off",readOnly:l,disabled:l},required:s,readOnly:l,placeholder:""})),d&&y.a.createElement("div",{className:"col-sm-offset-6 col-sm-6"},y.a.createElement("span",{className:"has-error-message"}," ",u)))}}]),t}(b.Component);k.defaultProps={className:"",size:"col-sm-6",divSize:"col-sm-6",required:"",readOnly:!1,value:null,error:!1,errorMessage:"",disabledBefore:null,disabledAfter:null},k.propTypes={label:E.a.string.isRequired,type:E.a.string,className:E.a.string,size:E.a.string,divSize:E.a.string,id:E.a.string,name:E.a.string,value:E.a.oneOfType([E.a.string,E.a.object]),onChangeAction:E.a.func,required:E.a.string,readOnly:E.a.bool,error:E.a.bool,errorMessage:E.a.string,disabledBefore:E.a.string,disabledAfter:E.a.string},t.a=k},706:function(e,t){e.exports=function(e,t,n){var a=new Blob([e],{type:n||"application/octet-stream"});if(void 0!==window.navigator.msSaveBlob)window.navigator.msSaveBlob(a,t);else{var i=window.URL.createObjectURL(a),r=document.createElement("a");r.style.display="none",r.href=i,r.setAttribute("download",t),void 0===r.download&&r.setAttribute("target","_blank"),document.body.appendChild(r),r.click(),document.body.removeChild(r),window.URL.revokeObjectURL(i)}}},727:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(14),o=n.n(r),s=n(783),l=n.n(s),c=function(e){var t=e.page,n=(e.pages,e.handlePrevClick);return 1===t?i.a.createElement("div",null):i.a.createElement("h3",{style:{cursor:"pointer",display:"inline-block",marginRight:24,marginTop:0},onClick:n},"<")};c.propTypes={page:o.a.number.isRequired,pages:o.a.number.isRequired,handlePrevClick:o.a.func.isRequired};var d=function(e){var t=e.page,n=e.pages,a=e.handleNextClick;return t===n?i.a.createElement("div",null):i.a.createElement("h3",{style:{cursor:"pointer",display:"inline-block",marginLeft:24,marginTop:0},onClick:a},">")};d.propTypes={page:o.a.number.isRequired,pages:o.a.number.isRequired,handleNextClick:o.a.func.isRequired};var u=function(e){var t=e.page,n=e.pages;return i.a.createElement("h3",{style:{display:"inline-block",marginTop:0}},"Pagina ",t," van ",n)};u.propTypes={page:o.a.number.isRequired,pages:o.a.number.isRequired};var p=function(e){var t=e.page,n=e.pages,a=e.handlePrevClick,r=e.handleNextClick;return i.a.createElement("div",{className:"customWrapper"},i.a.createElement(c,{page:t,pages:n,handlePrevClick:a}),i.a.createElement(u,{page:t,pages:n}),i.a.createElement(d,{page:t,pages:n,handleNextClick:r}))};p.propTypes={page:o.a.number.isRequired,pages:o.a.number.isRequired,handlePrevClick:o.a.func.isRequired,handleNextClick:o.a.func.isRequired};var m=p;l.a.defaultProps={file:"",scale:1},l.a.propTypes={file:o.a.string,scale:o.a.number};t.a=function(e){var t=e.file,n=e.scale;return i.a.createElement("div",{className:"panel-heading"},i.a.createElement(l.a,{document:{file:t},navigation:m,scale:n}))}},728:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(736),o=n.n(r),s=n(14),l=n.n(s),c=n(682),d=n(684),u=function(e){var t=e.label,n=e.className,a=e.id,r=e.value,s=e.switchToEdit;return i.a.createElement("div",{className:n},i.a.createElement("label",{htmlFor:a,className:"col-sm-3"},t,s?i.a.createElement("span",null,i.a.createElement("br",null),i.a.createElement(d.a,{buttonClassName:"btn-success btn-padding-small",buttonText:"Wijzig",onClickAction:s})):""),i.a.createElement(c.a,{className:"col-sm-9"},i.a.createElement(o.a,null,i.a.createElement("div",{id:a,dangerouslySetInnerHTML:{__html:r}}))))};u.defaultProps={className:"col-sm-12",value:""},u.propTypes={label:l.a.string.isRequired,className:l.a.string,id:l.a.string,value:l.a.oneOfType([l.a.string,l.a.number])},t.a=u},736:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,i=n(737),r=(a=i)&&a.__esModule?a:{default:a};t.default=r.default},737:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),o=d(r),s=d(n(79)),l=d(n(14)),c=d(n(738));function d(e){return e&&e.__esModule?e:{default:e}}var u,p="undefined"!=typeof window&&window.console,m=function(){},f=m,v=m;p&&(u=console.error,f=function(){console.error=function(e){/<head>/.test(e)||u.call(console,e)}},v=function(){return console.error=u});var h=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return a._isMounted=!1,a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.renderFrameContents()}},{key:"componentDidUpdate",value:function(){this.renderFrameContents()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1;var e=this.getDoc(),t=this.getMountTarget();e&&t&&s.default.unmountComponentAtNode(t)}},{key:"getDoc",value:function(){return s.default.findDOMNode(this).contentDocument}},{key:"getMountTarget",value:function(){var e=this.getDoc();return this.props.mountTarget?e.querySelector(this.props.mountTarget):e.body.children[0]}},{key:"renderFrameContents",value:function(){if(this._isMounted){var e=this.getDoc();if(e&&"complete"===e.readyState){null===e.querySelector("div")&&(this._setInitialContent=!1);var t=e.defaultView||e.parentView,n=!this._setInitialContent,a=o.default.createElement(c.default,{document:e,window:t},o.default.createElement("div",{className:"frame-content"},this.props.head,this.props.children));n&&(e.open("text/html","replace"),e.write(this.props.initialContent),e.close(),this._setInitialContent=!0),f();var i=n?this.props.contentDidMount:this.props.contentDidUpdate,r=this.getMountTarget();s.default.unstable_renderSubtreeIntoContainer(this,a,r,i),v()}else setTimeout(this.renderFrameContents.bind(this),0)}}},{key:"render",value:function(){var e=a({},this.props,{children:void 0});return delete e.head,delete e.initialContent,delete e.mountTarget,delete e.contentDidMount,delete e.contentDidUpdate,o.default.createElement("iframe",e)}}]),t}(r.Component);h.propTypes={style:l.default.object,head:l.default.node,initialContent:l.default.string,mountTarget:l.default.string,contentDidMount:l.default.func,contentDidUpdate:l.default.func,children:l.default.oneOfType([l.default.element,l.default.arrayOf(l.default.element)])},h.defaultProps={style:{},head:null,children:void 0,mountTarget:void 0,contentDidMount:function(){},contentDidUpdate:function(){},initialContent:'<!DOCTYPE html><html><head></head><body><div class="frame-root"></div></body></html>'},t.default=h},738:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(0),r=(o(i),o(n(14)));function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=function(e){function t(){return s(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"getChildContext",value:function(){return{document:this.props.document,window:this.props.window}}},{key:"render",value:function(){return i.Children.only(this.props.children)}}]),t}(i.Component);c.propTypes={document:r.default.object.isRequired,window:r.default.object.isRequired,children:r.default.element.isRequired},c.childContextTypes={document:r.default.object.isRequired,window:r.default.object.isRequired},t.default=c},745:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return i})),n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return s}));var a=function(e){return{type:"FETCH_ADMINISTRATION_DETAILS",id:e}},i=function(e,t,n){return{type:"UPDATE_ADMINISTRATION",administration:e,administrationId:t,switchToView:n}},r=function(e){return{type:"ADD_ADMINISTRATION_USER",administrationUser:e}},o=function(e,t){return{type:"DELETE_ADMINISTRATION_USER",administrationId:e,userId:t}},s=function(e){return{type:"DELETE_ADMINISTRATION_SEPA",sepaId:e}}},784:function(e,t){},785:function(e,t){},786:function(e,t){},787:function(e,t){},818:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return i})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return s}));var a=function(e,t,n,a,i,r){return{type:"FETCH_INVOICES",filters:e,sorts:t,pagination:n,administrationId:a,onlyEmailInvoices:i,onlyPostInvoices:r}},i=function(e){return{type:"INVOICE_PREVIEW_SEND",data:e}},r=function(){return{type:"CLEAR_INVOICE_PREVIEW_SEND"}},o=function(){return{type:"CLEAR_INVOICES"}},s=function(e){return{type:"DELETE_INVOICE_FROM_GRID",id:e}}}}]);