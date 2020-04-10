(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{1595:function(e,t,a){"use strict";a.r(t);var n=a(25),l=a.n(n),r=a(24),o=a.n(r),i=a(26),s=a.n(i),c=a(27),u=a.n(c),m=a(28),d=a.n(m),p=a(0),f=a.n(p),h=a(33),v=function(e){return{type:"FETCH_EMAIL_TEMPLATE",id:e}},b=a(21),E=a.n(b),g=a(6),y=a.n(g),N=a(4),w=a(685),T=a(98),C=Object(h.b)(null,(function(e){return{deleteEmailTemplate:function(t){e(function(e){return{type:"DELETE_EMAIL_TEMPLATE",id:e}}(t))}}}))((function(e){return f.a.createElement(T.a,{buttonConfirmText:"Verwijder",buttonClassName:"btn-danger",closeModal:e.closeDeleteItemModal,confirmAction:function(){return e.deleteEmailTemplate(e.templateId),void e.closeDeleteItemModal()},title:"Verwijderen"},"Verwijder e-mail template: ",f.a.createElement("strong",null," ",e.templateName," "))})),k=function(e){function t(e){var a;return l()(this,t),a=s()(this,u()(t).call(this,e)),y()(E()(a),"toggleDelete",(function(){a.setState({showDelete:!a.state.showDelete})})),a.state={showDelete:!1},a}return d()(t,e),o()(t,[{key:"render",value:function(){return f.a.createElement("div",{className:"row"},f.a.createElement("div",{className:"col-md-4"},f.a.createElement("div",{className:"btn-group",role:"group"},f.a.createElement(w.a,{iconName:"glyphicon-arrow-left",onClickAction:N.e.goBack}),f.a.createElement(w.a,{iconName:"glyphicon-trash",onClickAction:this.toggleDelete}))),f.a.createElement("div",{className:"col-md-4"},f.a.createElement("h4",{className:"text-center"},"E-mail template: "+this.props.templateName)),f.a.createElement("div",{className:"col-md-4"}),this.state.showDelete&&f.a.createElement(C,{closeDeleteItemModal:this.toggleDelete,templateName:this.props.templateName,templateId:this.props.templateId}))}}]),t}(p.Component),O=Object(h.b)((function(e){return{templateName:e.emailTemplate.name,templateId:e.emailTemplate.id}}),null)(k),j=a(198),D=a(682),_=a(683),M=a(684),P=a(696),x=a(733),S=a(689),A=a.n(S),I=a(101);function L(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?L(Object(a),!0).forEach((function(t){y()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):L(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var R=function(e){function t(e){var a;l()(this,t),a=s()(this,u()(t).call(this,e)),y()(E()(a),"handleInputChange",(function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,l=t.name;a.setState(q({},a.state,{emailTemplate:q({},a.state.emailTemplate,y()({},l,n))}))})),y()(E()(a),"handleSubmit",(function(e){e.preventDefault();var t=a.state.emailTemplate,n={},l=!1;A.a.isEmpty(t.name)&&(n.name=!0,l=!0),a.setState(q({},a.state,{errors:n})),!l&&I.a.updateEmailTemplate(t).then((function(e){a.props.fetchEmailTemplate(e.id),a.props.switchToView()}))}));var n=e.emailTemplate,r=n.id,o=n.name,i=n.subject,c=n.htmlBody;return a.state={emailTemplate:{id:r,name:o,subject:i||"",htmlBody:c||""},errors:{name:!1}},a.handleTextChange=a.handleTextChange.bind(E()(a)),a}return d()(t,e),o()(t,[{key:"handleTextChange",value:function(e){this.setState(q({},this.state,{emailTemplate:q({},this.state.emailTemplate,{htmlBody:e.target.getContent({format:"raw"})})}))}},{key:"render",value:function(){var e=this.state.emailTemplate,t=e.name,a=e.subject,n=e.htmlBody,l=this.props.emailTemplate.createdBy;return f.a.createElement("div",null,f.a.createElement("div",{className:"row"},f.a.createElement("div",{className:"form-group col-sm-12"},f.a.createElement("div",{className:"row"},f.a.createElement("div",{className:"col-sm-3"},f.a.createElement("label",{className:"col-sm-12 required"},"Naam")),f.a.createElement("div",{className:"col-sm-9"},f.a.createElement("input",{type:"text",className:"form-control input-sm "+(this.state.errors.name?"has-error":""),name:"name",value:t,onChange:this.handleInputChange}))))),f.a.createElement("div",{className:"row"},f.a.createElement("div",{className:"form-group col-sm-12"},f.a.createElement("div",{className:"row"},f.a.createElement("div",{className:"col-sm-3"},f.a.createElement("label",{className:"col-sm-12"},"Standaard onderwerp")),f.a.createElement("div",{className:"col-sm-9"},f.a.createElement("input",{type:"text",className:"form-control input-sm",name:"subject",value:a,onChange:this.handleInputChange}))))),f.a.createElement("div",{className:"row"},f.a.createElement("div",{className:"form-group col-sm-12"},f.a.createElement("div",{className:"row"},f.a.createElement(x.a,{label:"Tekst",value:n,onChangeAction:this.handleTextChange})))),f.a.createElement("div",{className:"row margin-10-top",onClick:this.props.switchToEdit},f.a.createElement("div",{className:"col-sm-12"},f.a.createElement("div",{className:"row"},f.a.createElement("div",{className:"col-sm-3"},f.a.createElement("label",{className:"col-sm-12"},"Gemaakt door")),f.a.createElement("div",{className:"col-sm-9"},f.a.createElement(N.b,{to:l?"gebruiker/"+l.id:"",className:"link-underline"},l?l.fullName:""))))),f.a.createElement(P.a,null,f.a.createElement("div",{className:"pull-right btn-group",role:"group"},f.a.createElement(M.a,{buttonClassName:"btn-default",buttonText:"Annuleren",onClickAction:this.props.switchToView}),f.a.createElement(M.a,{buttonText:"Opslaan",onClickAction:this.handleSubmit,type:"submit",value:"Submit"}))))}}]),t}(p.Component),V=Object(h.b)((function(e){return{emailTemplate:e.emailTemplate}}),(function(e){return{fetchEmailTemplate:function(t){e(v(t))}}}))(R),B=a(8),F=a.n(B),U=a(728);F.a.locale("nl");var G=Object(h.b)((function(e){return{emailTemplate:e.emailTemplate}}))((function(e){var t=e.emailTemplate,a=t.name,n=t.subject,l=t.htmlBody,r=t.createdBy;return f.a.createElement("div",null,f.a.createElement("div",{className:"row margin-10-top",onClick:e.switchToEdit},f.a.createElement("div",{className:"col-sm-12"},f.a.createElement("div",{className:"row"},f.a.createElement("div",{className:"col-sm-3"},f.a.createElement("label",{className:"col-sm-12"},"Naam")),f.a.createElement("div",{className:"col-sm-9"},a)))),f.a.createElement("div",{className:"row margin-10-top",onClick:e.switchToEdit},f.a.createElement("div",{className:"col-sm-12"},f.a.createElement("div",{className:"row"},f.a.createElement("div",{className:"col-sm-3"},f.a.createElement("label",{className:"col-sm-12"},"Standaard onderwerp")),f.a.createElement("div",{className:"col-sm-9"},n)))),f.a.createElement("div",{className:"row",onClick:e.switchToEdit},f.a.createElement(U.a,{label:"Tekst",value:l,switchToEdit:e.switchToEdit})),f.a.createElement("div",{className:"row margin-10-top",onClick:e.switchToEdit},f.a.createElement("div",{className:"col-sm-12"},f.a.createElement("div",{className:"row"},f.a.createElement("div",{className:"col-sm-3"},f.a.createElement("label",{className:"col-sm-12"},"Gemaakt door")),f.a.createElement("div",{className:"col-sm-9"},f.a.createElement(N.b,{to:r?"gebruiker/"+r.id:"",className:"link-underline"},r?r.fullName:""))))))})),H=function(e){function t(e){var a;return l()(this,t),a=s()(this,u()(t).call(this,e)),y()(E()(a),"switchToEdit",(function(){a.setState({showEdit:!0})})),y()(E()(a),"switchToView",(function(){a.setState({showEdit:!1,activeDiv:""})})),a.state={showEdit:!1,activeDiv:""},a}return d()(t,e),o()(t,[{key:"onDivEnter",value:function(){this.setState({activeDiv:"panel-grey"})}},{key:"onDivLeave",value:function(){this.state.showEdit||this.setState({activeDiv:""})}},{key:"render",value:function(){var e=this;return f.a.createElement(D.a,{className:this.state.activeDiv,onMouseEnter:function(){return e.onDivEnter()},onMouseLeave:function(){return e.onDivLeave()}},f.a.createElement(_.a,null,this.state.showEdit?f.a.createElement(V,{switchToView:this.switchToView}):f.a.createElement(G,{switchToEdit:this.switchToEdit})))}}]),t}(p.Component),J=Object(h.b)((function(e){return{emailTemplate:e.emailTemplate}}))(H),W=function(e){function t(e){return l()(this,t),s()(this,u()(t).call(this,e))}return d()(t,e),o()(t,[{key:"render",value:function(){var e="",t=!0;return this.props.hasError?e="Fout bij het ophalen van e-mailtemplate.":this.props.isLoading?e="Gegevens aan het laden.":Object(j.isEmpty)(this.props.emailTemplate)?e="Geen e-mailtemplate gevonden!":t=!1,t?f.a.createElement("div",null,e):f.a.createElement("div",null,f.a.createElement(J,null))}}]),t}(p.Component),z=Object(h.b)((function(e){return{emailTemplate:e.emailTemplate,isLoading:e.loadingData.isLoading,hasError:e.loadingData.hasError}}),(function(e){return{fetchEmailTemplate:function(t){e(v(t))}}}))(W),Y=function(e){function t(e){return l()(this,t),s()(this,u()(t).call(this,e))}return d()(t,e),o()(t,[{key:"componentDidMount",value:function(){this.props.fetchEmailTemplate(this.props.params.id)}},{key:"render",value:function(){return f.a.createElement("div",{className:"row"},f.a.createElement("div",{className:"col-md-9"},f.a.createElement("div",{className:"col-md-12 margin-10-top"},f.a.createElement(D.a,null,f.a.createElement(_.a,{className:"panel-small"},f.a.createElement(O,null)))),f.a.createElement("div",{className:"col-md-12 margin-10-top"},f.a.createElement(z,null))),f.a.createElement("div",{className:"col-md-3"}))}}]),t}(p.Component);t.default=Object(h.b)((function(e){return{emailTemplateDetails:e.emailTemplateDetails}}),(function(e){return{fetchEmailTemplate:function(t){e(v(t))}}}))(Y)},682:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(14),o=a.n(r),i=function(e){var t=e.children,a=e.className,n=e.onMouseEnter,r=e.onMouseLeave;return l.a.createElement("div",{className:"panel panel-default ".concat(a),onMouseEnter:n,onMouseLeave:r},t)};i.defaultProps={className:"",onMouseEnter:function(){},onMouseLeave:function(){}},i.propTypes={className:o.a.string,onMouseEnter:o.a.func,onMouseLeave:o.a.func},t.a=i},683:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(14),o=a.n(r),i=function(e){var t=e.className,a=e.children;return l.a.createElement("div",{className:"panel-body ".concat(t)},a)};i.defaultProps={className:""},i.propTypes={className:o.a.string},t.a=i},684:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(14),o=a.n(r),i=function(e){var t=e.buttonClassName,a=e.buttonText,n=e.onClickAction,r=e.type,o=e.value,i=e.loading,s=e.loadText,c=e.disabled;return i?l.a.createElement("button",{type:r,className:"btn btn-sm btn-loading ".concat(t),value:o,disabled:i},l.a.createElement("span",{className:"glyphicon glyphicon-refresh glyphicon-refresh-animate"})," ",s):l.a.createElement("button",{type:r,className:"btn btn-sm ".concat(t),onClick:n,value:o,disabled:c},a)};i.defaultProps={buttonClassName:"btn-success",type:"button",value:"",loading:!1,loadText:"Aan het laden",disabled:!1},i.propTypes={buttonClassName:o.a.string,buttonText:o.a.string.isRequired,onClickAction:o.a.func,type:o.a.string,value:o.a.string,loading:o.a.bool,loadText:o.a.string,disabled:o.a.bool},t.a=i},685:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(14),o=a.n(r),i=function(e){var t=e.buttonClassName,a=e.iconName,n=e.onClickAction,r=e.title,o=e.disabled;return l.a.createElement("button",{type:"button",className:"btn ".concat(t),onClick:n,disabled:o,title:r},l.a.createElement("span",{className:"glyphicon ".concat(a)}))};i.defaultProps={buttonClassName:"btn-success btn-sm",title:"",disabled:!1},i.propTypes={buttonClassName:o.a.string,iconName:o.a.string.isRequired,onClickAction:o.a.func,title:o.a.string,disabled:o.a.bool},t.a=i},696:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(14),o=a.n(r),i=function(e){var t=e.className,a=e.children;return l.a.createElement("div",{className:"panel-footer ".concat(t)},a)};i.defaultProps={className:""},i.propTypes={className:o.a.string},t.a=i},728:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(736),o=a.n(r),i=a(14),s=a.n(i),c=a(682),u=a(684),m=function(e){var t=e.label,a=e.className,n=e.id,r=e.value,i=e.switchToEdit;return l.a.createElement("div",{className:a},l.a.createElement("label",{htmlFor:n,className:"col-sm-3"},t,i?l.a.createElement("span",null,l.a.createElement("br",null),l.a.createElement(u.a,{buttonClassName:"btn-success btn-padding-small",buttonText:"Wijzig",onClickAction:i})):""),l.a.createElement(c.a,{className:"col-sm-9"},l.a.createElement(o.a,null,l.a.createElement("div",{id:n,dangerouslySetInnerHTML:{__html:r}}))))};m.defaultProps={className:"col-sm-12",value:""},m.propTypes={label:s.a.string.isRequired,className:s.a.string,id:s.a.string,value:s.a.oneOfType([s.a.string,s.a.number])},t.a=m},733:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(14),o=a.n(r),i=(a(753),a(754),a(755),a(756),a(757),a(758),a(759),a(760),a(761),a(762),a(763),a(768)),s=function(e){var t=e.label,a=e.value,n=e.onChangeAction;return l.a.createElement("div",null,l.a.createElement("div",{className:"col-sm-3"},l.a.createElement("label",{htmlFor:"quotationText",className:"col-sm-12"},t)),l.a.createElement("div",{className:"col-sm-9"},l.a.createElement(i.a,{initialValue:a,init:{branding:!1,language:"nl",menubar:!1,plugins:"paste lists advlist link image code table textcolor pagebreak",toolbar:"undo redo | formatselect fontselect | bold italic forecolor | alignleft aligncenter alignright | pagebreak | bullist numlist outdent indent | table | link image | code",height:"300",browser_spellcheck:!0,font_formats:"Courier New=courier new;Tahoma=tahoma;Times New Roman=times new roman;Verdana=verdana;"},onChange:n})))};s.defaultProps={value:"",errorMessage:""},s.propTypes={label:o.a.string.isRequired,type:o.a.string,id:o.a.string,placeholder:o.a.string,value:o.a.string,onChangeAction:o.a.func},t.a=s},736:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,l=a(737),r=(n=l)&&n.__esModule?n:{default:n};t.default=r.default},737:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=a(0),o=u(r),i=u(a(79)),s=u(a(14)),c=u(a(738));function u(e){return e&&e.__esModule?e:{default:e}}var m,d="undefined"!=typeof window&&window.console,p=function(){},f=p,h=p;d&&(m=console.error,f=function(){console.error=function(e){/<head>/.test(e)||m.call(console,e)}},h=function(){return console.error=m});var v=function(e){function t(e,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,a));return n._isMounted=!1,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),l(t,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.renderFrameContents()}},{key:"componentDidUpdate",value:function(){this.renderFrameContents()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1;var e=this.getDoc(),t=this.getMountTarget();e&&t&&i.default.unmountComponentAtNode(t)}},{key:"getDoc",value:function(){return i.default.findDOMNode(this).contentDocument}},{key:"getMountTarget",value:function(){var e=this.getDoc();return this.props.mountTarget?e.querySelector(this.props.mountTarget):e.body.children[0]}},{key:"renderFrameContents",value:function(){if(this._isMounted){var e=this.getDoc();if(e&&"complete"===e.readyState){null===e.querySelector("div")&&(this._setInitialContent=!1);var t=e.defaultView||e.parentView,a=!this._setInitialContent,n=o.default.createElement(c.default,{document:e,window:t},o.default.createElement("div",{className:"frame-content"},this.props.head,this.props.children));a&&(e.open("text/html","replace"),e.write(this.props.initialContent),e.close(),this._setInitialContent=!0),f();var l=a?this.props.contentDidMount:this.props.contentDidUpdate,r=this.getMountTarget();i.default.unstable_renderSubtreeIntoContainer(this,n,r,l),h()}else setTimeout(this.renderFrameContents.bind(this),0)}}},{key:"render",value:function(){var e=n({},this.props,{children:void 0});return delete e.head,delete e.initialContent,delete e.mountTarget,delete e.contentDidMount,delete e.contentDidUpdate,o.default.createElement("iframe",e)}}]),t}(r.Component);v.propTypes={style:s.default.object,head:s.default.node,initialContent:s.default.string,mountTarget:s.default.string,contentDidMount:s.default.func,contentDidUpdate:s.default.func,children:s.default.oneOfType([s.default.element,s.default.arrayOf(s.default.element)])},v.defaultProps={style:{},head:null,children:void 0,mountTarget:void 0,contentDidMount:function(){},contentDidUpdate:function(){},initialContent:'<!DOCTYPE html><html><head></head><body><div class="frame-root"></div></body></html>'},t.default=v},738:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=a(0),r=(o(l),o(a(14)));function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=function(e){function t(){return i(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"getChildContext",value:function(){return{document:this.props.document,window:this.props.window}}},{key:"render",value:function(){return l.Children.only(this.props.children)}}]),t}(l.Component);c.propTypes={document:r.default.object.isRequired,window:r.default.object.isRequired,children:r.default.element.isRequired},c.childContextTypes={document:r.default.object.isRequired,window:r.default.object.isRequired},t.default=c}}]);