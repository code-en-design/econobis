(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{1569:function(e,a,t){"use strict";t.r(a);var n=t(25),o=t.n(n),r=t(24),s=t.n(r),l=t(26),i=t.n(l),c=t(27),p=t.n(c),m=t(21),d=t.n(m),u=t(28),h=t.n(u),g=t(6),b=t.n(g),v=t(0),f=t.n(v),k=t(198),N=t(197),E=t.n(N),S=t(33),y=t(689),C=t.n(y),w=t(8),T=t.n(w),x=t(684),R=t(682),P=t(683),I=t(12),O=function(e){var a="".concat("setting","/multiple").concat(e);return I.a.get(a)},A=function(e){var a="".concat("setting");return I.a.post(a,e)},z=t(15),L=t(202),U=t(686),q=t(742),j=t(705),D=t(692),F=t(98),M=t(769).default,B=function(e){function a(e){var t;return o()(this,a),(t=i()(this,p()(a).call(this,e))).state={error:!1,errorMaxSize:!1},t}return h()(a,e),s()(a,[{key:"onDropAccepted",value:function(e){var a=this;this.props.addLogo(e),setTimeout((function(){a.props.toggleShowNewLogo()}),500)}},{key:"onDropRejected",value:function(){this.setState({errorMaxSize:!0})}},{key:"render",value:function(){return f.a.createElement(F.a,{closeModal:this.props.toggleShowNewLogo,showConfirmAction:!1,title:"Upload logo bestand (PNG)"},f.a.createElement("div",{className:"upload-file-content"},f.a.createElement(M,{accept:"image/png",multiple:!1,className:"dropzone",onDropAccepted:this.onDropAccepted.bind(this),onDropRejected:this.onDropRejected.bind(this),maxSize:6e6},f.a.createElement("p",null,"Klik hier voor het uploaden van een bestand"),f.a.createElement("p",null,f.a.createElement("strong",null,"of")," sleep het bestand hierheen"))),this.state.error&&f.a.createElement("p",{className:"has-error-message"},"Uploaden mislukt. Probeer nogmaals een bestand te uploaden."),this.state.errorMaxSize&&f.a.createElement("p",{className:"has-error-message"},"Uploaden mislukt. Het bestand moet bestandstype PNG zijn en mag maximaal 6MB groot zijn."))}}]),a}(v.Component),H=t(769).default,V=function(e){function a(e){var t;return o()(this,a),(t=i()(this,p()(a).call(this,e))).state={error:!1,errorMaxSize:!1},t}return h()(a,e),s()(a,[{key:"onDropAccepted",value:function(e){var a=this;this.props.addFavicon(e),setTimeout((function(){a.props.toggleShowNewFavicon()}),500)}},{key:"onDropRejected",value:function(){this.setState({errorMaxSize:!0})}},{key:"render",value:function(){return f.a.createElement(F.a,{closeModal:this.props.toggleShowNewFavicon,showConfirmAction:!1,title:"Upload favicon bestand (ICO)"},f.a.createElement("div",{className:"upload-file-content"},f.a.createElement(H,{accept:".ico",multiple:!1,className:"dropzone",onDropAccepted:this.onDropAccepted.bind(this),onDropRejected:this.onDropRejected.bind(this),maxSize:1e6},f.a.createElement("p",null,"Klik hier voor het uploaden van een bestand"),f.a.createElement("p",null,f.a.createElement("strong",null,"of")," sleep het bestand hierheen"))),this.state.error&&f.a.createElement("p",{className:"has-error-message"},"Uploaden mislukt. Probeer nogmaals een bestand te uploaden."),this.state.errorMaxSize&&f.a.createElement("p",{className:"has-error-message"},"Uploaden mislukt. Het bestand moet bestandstype ICO zijn en mag maximaal 1MB groot zijn."))}}]),a}(v.Component),W=t(964),_=t.n(W);function G(){return(G=_.a||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var K=t(968),J=t.n(K);var Y=t(969),Z=t.n(Y);var Q=t(699),X=t.n(Q),$=t(14),ee=t.n($),ae=t(972),te=t.n(ae),ne=t(973),oe=t.n(ne),re={large:"lg",medium:"md",small:"sm",xsmall:"xs",lg:"lg",md:"md",sm:"sm",xs:"xs"};function se(e){return function(){for(var a=arguments.length,t=new Array(a),n=0;n<a;n++)t[n]=arguments[n];var o=t[t.length-1];return"function"==typeof o?e.apply(void 0,t):function(a){return e.apply(void 0,t.concat([a]))}}}function le(e,a){var t=(e.bsClass||"").trim();return null==t&&oe()(!1),t+(a?"-"+a:"")}var ie=se((function(e,a){var t=a.propTypes||(a.propTypes={}),n=a.defaultProps||(a.defaultProps={});return t.bsClass=ee.a.string,n.bsClass=e,a}));se((function(e,a,t){"string"!=typeof a&&(t=a,a=void 0);var n=t.STYLES||[],o=t.propTypes||{};e.forEach((function(e){-1===n.indexOf(e)&&n.push(e)}));var r=ee.a.oneOf(n);(t.STYLES=n,r._values=n,t.propTypes=G({},o,{bsStyle:r}),void 0!==a)&&((t.defaultProps||(t.defaultProps={})).bsStyle=a);return t})),se((function(e,a,t){"string"!=typeof a&&(t=a,a=void 0);var n=t.SIZES||[],o=t.propTypes||{};e.forEach((function(e){-1===n.indexOf(e)&&n.push(e)}));var r=[];n.forEach((function(e){var a=re[e];a&&a!==e&&r.push(a),r.push(e)}));var s=ee.a.oneOf(r);return s._values=r,t.SIZES=n,t.propTypes=G({},o,{bsSize:s}),void 0!==a&&(t.defaultProps||(t.defaultProps={}),t.defaultProps.bsSize=a),t}));function ce(e){return{bsClass:e.bsClass,bsSize:e.bsSize,bsStyle:e.bsStyle,bsRole:e.bsRole}}function pe(e){return"bsClass"===e||"bsSize"===e||"bsStyle"===e||"bsRole"===e}var me={responsive:ee.a.bool,rounded:ee.a.bool,circle:ee.a.bool,thumbnail:ee.a.bool},de=function(e){var a,t;function n(){return e.apply(this,arguments)||this}return t=e,(a=n).prototype=Z()(t.prototype),a.prototype.constructor=a,a.__proto__=t,n.prototype.render=function(){var e,a=this.props,t=a.responsive,n=a.rounded,o=a.circle,r=a.thumbnail,s=a.className,l=function(e){var a={};return te()(e).forEach((function(e){var t=e[0],n=e[1];pe(t)||(a[t]=n)})),[ce(e),a]}(function(e,a){if(null==e)return{};var t,n,o={},r=J()(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(a,["responsive","rounded","circle","thumbnail","className"])),i=l[0],c=l[1],p=((e={})[le(i,"responsive")]=t,e[le(i,"rounded")]=n,e[le(i,"circle")]=o,e[le(i,"thumbnail")]=r,e);return f.a.createElement("img",G({},c,{className:X()(s,p)}))},n}(f.a.Component);de.propTypes=me,de.defaultProps={responsive:!1,rounded:!1,circle:!1,thumbnail:!1};var ue=ie("img",de);function he(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function ge(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?he(Object(t),!0).forEach((function(a){b()(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):he(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}T.a.locale("nl");var be=function(e){function a(e){var t;return o()(this,a),t=i()(this,p()(a).call(this,e)),b()(d()(t),"toggleNewLogo",(function(){t.manageTechnicalPortalSettings&&t.setState({newLogo:!t.state.newLogo})})),b()(d()(t),"toggleNewFavicon",(function(){t.manageTechnicalPortalSettings&&t.setState({newFavicon:!t.state.newFavicon})})),b()(d()(t),"addLogo",(function(e){t.setState(ge({},t.state,{attachmentLogo:e[0],filenameLogo:e[0].name}))})),b()(d()(t),"addFavicon",(function(e){t.setState(ge({},t.state,{attachmentFavicon:e[0],filenameFavicon:e[0].name}))})),b()(d()(t),"handleInputChange",(function(e){var a=e.target,n="checkbox"===a.type?a.checked:a.value,o=a.name;t.setState(ge({},t.state,{portalSettings:ge({},t.state.portalSettings,b()({},o,n))}))})),b()(d()(t),"handleSubmit",(function(e){e.preventDefault();var a=t.state,n=a.portalSettings,o=a.attachmentLogo,r=a.attachmentFavicon,s={},l=!1;C.a.isEmpty(n.portalUrl)&&(s.portalUrl=!0,l=!0),C.a.isEmpty(n.backgroundColor)&&(s.backgroundColor=!0,l=!0),C.a.isEmpty(n.backgroundImageColor)&&(s.backgroundImageColor=!0,l=!0),C.a.isEmpty(n.backgroundSecondaryColor)&&(s.backgroundSecondaryColor=!0,l=!0),C.a.isEmpty(n.buttonColor)&&(s.buttonColor=!0,l=!0),!t.manageTechnicalPortalSettings&&C.a.isEmpty(n.responsibleUserId)&&(s.responsibleUserId=!0,l=!0),!t.manageTechnicalPortalSettings&&C.a.isEmpty(n.contactResponsibleOwnerUserId)&&(s.contactResponsibleOwnerUserId=!0,l=!0),!t.manageTechnicalPortalSettings&&C.a.isEmpty(n.checkContactTaskResponsible)&&(s.checkContactTaskResponsible=!0,l=!0),!t.manageTechnicalPortalSettings&&C.a.isEmpty(n.linkPrivacyPolicy)&&(s.linkPrivacyPolicy=!0,l=!0),!t.manageTechnicalPortalSettings&&C.a.isEmpty(n.emailTemplateNewAccountId)&&(s.emailTemplateNewAccountId=!0,l=!0),!t.manageTechnicalPortalSettings&&C.a.isEmpty(n.portalName)&&(s.portalName=!0,l=!0),!t.manageTechnicalPortalSettings&&C.a.isEmpty(n.cooperativeName)&&(s.cooperativeName=!0,l=!0),!t.manageTechnicalPortalSettings&&C.a.isEmpty(n.portalWebsite)&&(s.portalWebsite=!0,l=!0),n.checkContactTaskResponsible.search("user")>=0&&(n.checkContactTaskResponsibleUserId=n.checkContactTaskResponsible.replace("user",""),n.checkContactTaskResponsibleTeamId=""),n.checkContactTaskResponsible.search("team")>=0&&(n.checkContactTaskResponsibleUserId="",n.checkContactTaskResponsibleTeamId=n.checkContactTaskResponsible.replace("team",""));var i=new FormData;i.append("portalName",n.portalName),i.append("cooperativeName",n.cooperativeName),i.append("portalWebsite",n.portalWebsite),i.append("portalUrl",n.portalUrl),i.append("backgroundColor",n.backgroundColor),i.append("backgroundImageColor",n.backgroundImageColor),i.append("backgroundSecondaryColor",n.backgroundSecondaryColor),i.append("buttonColor",n.buttonColor),i.append("responsibleUserId",n.responsibleUserId),i.append("checkContactTaskResponsibleUserId",n.checkContactTaskResponsibleUserId),i.append("checkContactTaskResponsibleTeamId",n.checkContactTaskResponsibleTeamId),i.append("contactResponsibleOwnerUserId",n.contactResponsibleOwnerUserId),i.append("emailTemplateNewAccountId",n.emailTemplateNewAccountId),i.append("linkPrivacyPolicy",n.linkPrivacyPolicy),i.append("showNewAtCooperativeLink",n.showNewAtCooperativeLink),i.append("attachmentLogo",o),i.append("attachmentFavicon",r),t.setState(ge({},t.state,{errors:s})),!l&&A(i).then((function(e){t.props.updateState(n),t.props.fetchSystemData(),t.props.switchToView()})).catch((function(e){alert("Er is iets misgegaan bij opslaan. Herlaad de pagina en probeer het nogmaals.")}))})),t.manageTechnicalPortalSettings="support@econobis.nl"==t.props.meDetails.email||"info@xaris.nl"==t.props.meDetails.email,t.state={portalSettings:ge({},e.portalSettings),emailTemplates:ge({},e.emailTemplates),attachmentLogo:"",filenameLogo:"logo.png",newLogo:!1,attachmentFavicon:"",filenameFavicon:"favicon.ico",newFavicon:!1,errors:{portalName:!1,cooperativeName:!1,portalWebsite:!1,portalUrl:!1,backgroundColor:!1,backgroundImageColor:!1,backgroundSecondaryColor:!1,buttonColor:!1,responsibleUserId:!1,checkContactTaskResponsibleUserId:!1,checkContactTaskResponsibleTeamId:!1,checkContactTaskResponsible:!1,contactResponsibleOwnerUserId:!1,emailTemplateNewAccountId:!1,linkPrivacyPolicy:!1,showNewAtCooperativeLink:!1}},t.handleReactSelectChange=t.handleReactSelectChange.bind(d()(t)),t}return h()(a,e),s()(a,[{key:"handleReactSelectChange",value:function(e,a){this.setState(ge({},this.state,{portalSettings:ge({},this.state.portalSettings,b()({},a,e))}))}},{key:"render",value:function(){var e=this.state.portalSettings,a=e.portalName,t=e.cooperativeName,n=e.portalWebsite,o=e.portalUrl,r=e.backgroundColor,s=e.backgroundImageColor,l=e.backgroundSecondaryColor,i=e.buttonColor,c=e.responsibleUserId,p=e.checkContactTaskResponsible,m=e.contactResponsibleOwnerUserId,d=e.emailTemplateNewAccountId,u=e.linkPrivacyPolicy,h=e.showNewAtCooperativeLink,g="".concat(URL_API,"/portal/images/logo.png?").concat(this.props.imageHash),b="".concat(URL_API,"/portal/favicon.ico?").concat(this.props.imageHash);return f.a.createElement("form",{className:"form-horizontal",onSubmit:this.handleSubmit},f.a.createElement(R.a,null,f.a.createElement(P.a,null,f.a.createElement("div",{className:"row"},f.a.createElement(U.a,{label:"Contacten portal URL",divSize:"col-sm-8",name:"portalUrl",value:o,onChangeAction:this.handleInputChange,readOnly:!this.manageTechnicalPortalSettings,required:"required",error:this.state.errors.portalUrl})),f.a.createElement("div",{className:"row"},f.a.createElement(U.a,{label:"Logo",divSize:"col-sm-8",value:this.state.attachmentLogo.name?this.state.attachmentLogo.name:"logo.png",onClickAction:this.toggleNewLogo,onChangeaction:function(){},readOnly:!this.manageTechnicalPortalSettings,required:"required"}),f.a.createElement(ue,{src:this.state.attachmentLogo&&this.state.attachmentLogo.preview?this.state.attachmentLogo.preview:g,style:{backgroundColor:s,border:"1px solid #999",display:"inline-block",padding:"1px",borderRadius:"1px",height:"50px",boxShadow:"0 0 0 1px #fff inset"}})),this.state.newLogo&&f.a.createElement(B,{toggleShowNewLogo:this.toggleNewLogo,addLogo:this.addLogo}),f.a.createElement("div",{className:"row"},f.a.createElement(U.a,{label:"Favicon",divSize:"col-sm-8",value:"favicon.ico",onClickAction:this.toggleNewFavicon,onChangeaction:function(){},readOnly:!this.manageTechnicalPortalSettings,required:"required"}),f.a.createElement(ue,{src:this.state.attachmentFavicon&&this.state.attachmentFavicon.preview?this.state.attachmentFavicon.preview:b,style:{border:"1px solid #999",display:"inline-block",padding:"1px",borderRadius:"1px",height:"20px",boxShadow:"0 0 0 1px #fff inset"}})),this.state.newFavicon&&f.a.createElement(V,{toggleShowNewFavicon:this.toggleNewFavicon,addFavicon:this.addFavicon}),f.a.createElement("div",{className:"row"},f.a.createElement(U.a,{label:"Achtergrond kleur",divSize:"col-sm-8",name:"backgroundColor",value:r,onChangeAction:this.handleInputChange,readOnly:!this.manageTechnicalPortalSettings,required:"required",error:this.state.errors.backgroundColor}),f.a.createElement("span",{className:"rc-color-picker-trigger",unselectable:"unselectable",style:{backgroundColor:r,border:"1px solid #999",display:"inline-block",padding:"2px",borderRadius:"2px",width:"20px",height:"20px",boxShadow:"0 0 0 2px #fff inset"}})),f.a.createElement("div",{className:"row"},f.a.createElement(U.a,{label:"Achtergrond afbeelding kleur",divSize:"col-sm-8",name:"backgroundImageColor",value:s,readOnly:!this.manageTechnicalPortalSettings,required:"required",onChangeAction:this.handleInputChange,error:this.state.errors.backgroundImageColor}),f.a.createElement("span",{className:"rc-color-picker-trigger",unselectable:"unselectable",style:{backgroundColor:s,border:"1px solid #999",display:"inline-block",padding:"2px",borderRadius:"2px",width:"20px",height:"20px",boxShadow:"0 0 0 2px #fff inset"}})),f.a.createElement("div",{className:"row"},f.a.createElement(U.a,{label:"Tweede achtergrondkleur",divSize:"col-sm-8",name:"backgroundSecondaryColor",value:l,onChangeAction:this.handleInputChange,readOnly:!this.manageTechnicalPortalSettings,required:"required",error:this.state.errors.backgroundSecondaryColor}),f.a.createElement("span",{className:"rc-color-picker-trigger",unselectable:"unselectable",style:{backgroundColor:l,border:"1px solid #999",display:"inline-block",padding:"2px",borderRadius:"2px",width:"20px",height:"20px",boxShadow:"0 0 0 2px #fff inset"}})),f.a.createElement("div",{className:"row"},f.a.createElement(U.a,{label:"Buttonknop kleur",divSize:"col-sm-8",name:"buttonColor",value:i,onChangeAction:this.handleInputChange,readOnly:!this.manageTechnicalPortalSettings,required:"required",error:this.state.errors.buttonColor}),f.a.createElement("span",{className:"rc-color-picker-trigger",unselectable:"unselectable",style:{backgroundColor:i,border:"1px solid #999",display:"inline-block",padding:"2px",borderRadius:"2px",width:"20px",height:"20px",boxShadow:"0 0 0 2px #fff inset"}})),f.a.createElement("hr",null),f.a.createElement("div",{className:"row"},f.a.createElement(j.a,{label:"Verantwoordelijke portal",divSize:"col-sm-8",name:"responsibleUserId",value:c,options:this.props.users,optionName:"fullName",onChangeAction:this.handleReactSelectChange,required:this.manageTechnicalPortalSettings?"":"required",error:this.state.errors.responsibleUserId,multi:!1})),f.a.createElement("div",{className:"row"},f.a.createElement(j.a,{label:"Eigenaar nieuwe contacten",divSize:"col-sm-8",name:"contactResponsibleOwnerUserId",value:m,options:this.props.users,optionName:"fullName",onChangeAction:this.handleReactSelectChange,required:this.manageTechnicalPortalSettings?"":"required",error:this.state.errors.contactResponsibleOwnerUserId,multi:!1})),f.a.createElement("div",{className:"row"},f.a.createElement(q.a,{label:"Verantwoordelijke uitvoeren taak",divSize:"col-sm-8",name:"checkContactTaskResponsible",optionsInGroups:[{name:"user",label:"Gebruikers",options:this.props.users,optionName:"fullName"},{name:"team",label:"Teams",options:this.props.teams}],value:p,onChangeAction:this.handleInputChange,required:this.manageTechnicalPortalSettings?"":"required",error:this.state.errors.checkContactTaskResponsible})),f.a.createElement("div",{className:"row"},f.a.createElement(D.a,{label:"Nieuw bij, aanmelden mogelijk",divSize:"col-sm-8",name:"showNewAtCooperativeLink",value:h,onChangeAction:this.handleInputChange})),f.a.createElement("div",{className:"row"},f.a.createElement(U.a,{label:"Privacybeleid link",divSize:"col-sm-8",name:"linkPrivacyPolicy",value:u,onChangeAction:this.handleInputChange,required:this.manageTechnicalPortalSettings?"":"required",error:this.state.errors.linkPrivacyPolicy})),f.a.createElement("div",{className:"row"},f.a.createElement(j.a,{label:"E-mail template Nieuwe account activeren",divSize:"col-sm-8",name:"emailTemplateNewAccountId",value:d,options:this.props.emailTemplates,onChangeAction:this.handleReactSelectChange,required:this.manageTechnicalPortalSettings?"":"required",error:this.state.errors.emailTemplateNewAccountId,multi:!1})),f.a.createElement("div",{className:"row"},f.a.createElement(U.a,{label:"Coöperatie portal naam",divSize:"col-sm-8",name:"portalName",value:a,onChangeAction:this.handleInputChange,required:this.manageTechnicalPortalSettings?"":"required",error:this.state.errors.portalName})),f.a.createElement("div",{className:"row"},f.a.createElement(U.a,{label:"Coöperatie naam",divSize:"col-sm-8",name:"cooperativeName",value:t,onChangeAction:this.handleInputChange,required:this.manageTechnicalPortalSettings?"":"required",error:this.state.errors.cooperativeName})),f.a.createElement("div",{className:"row"},f.a.createElement(U.a,{label:"Coöperatie website",divSize:"col-sm-8",name:"portalWebsite",value:n,onChangeAction:this.handleInputChange,required:this.manageTechnicalPortalSettings?"":"required",error:this.state.errors.portalWebsite}))),f.a.createElement(P.a,null,f.a.createElement("div",{className:"pull-right btn-group",role:"group"},f.a.createElement(x.a,{buttonClassName:"btn-default",buttonText:"Sluiten",onClickAction:this.props.switchToView}),f.a.createElement(x.a,{buttonText:"Opslaan",type:"submit",value:"Submit"})))))}}]),a}(v.Component),ve=Object(S.b)(null,(function(e){return Object(z.b)({fetchSystemData:L.a},e)}))(be),fe=t(687),ke=function(e){var a=e.portalName,t=e.cooperativeName,n=e.portalWebsite,o=e.portalUrl,r=e.backgroundColor,s=e.backgroundImageColor,l=e.backgroundSecondaryColor,i=e.buttonColor,c=e.responsibleUser,p=e.checkContactTaskResponsibleUser,m=e.checkContactTaskResponsibleTeam,d=(e.checkContactTaskResponsible,e.contactResponsibleOwnerUser),u=e.emailTemplateNewAccount,h=e.linkPrivacyPolicy,g=e.showNewAtCooperativeLink,b=e.switchToEdit,v=e.imageHash;return f.a.createElement("div",{onClick:b},f.a.createElement(R.a,null,f.a.createElement(P.a,null,f.a.createElement("div",{className:"row"},f.a.createElement(fe.a,{label:"Contacten portal URL",divSize:"col-sm-8",value:o,className:"col-sm-8 form-group"})),f.a.createElement("div",{className:"row"},f.a.createElement(fe.a,{label:"Logo",divSize:"col-sm-8",value:"logo.png",className:"col-sm-8 form-group"}),f.a.createElement(ue,{src:"".concat(URL_API,"/portal/images/logo.png?").concat(v),style:{backgroundColor:s,border:"1px solid #999",display:"inline-block",padding:"1px",borderRadius:"1px",height:"50px",boxShadow:"0 0 0 1px #fff inset"}})),f.a.createElement("div",{className:"row"},f.a.createElement(fe.a,{label:"Favicon",divSize:"col-sm-8",value:"favicon.ico",className:"col-sm-8 form-group"}),f.a.createElement(ue,{src:"".concat(URL_API,"/portal/favicon.ico?").concat(v),style:{border:"1px solid #999",display:"inline-block",padding:"1px",borderRadius:"1px",height:"20px",boxShadow:"0 0 0 1px #fff inset"}})),f.a.createElement("div",{className:"row"},f.a.createElement(fe.a,{label:"Achtergrond kleur",divSize:"col-sm-8",value:r,className:"col-sm-8 form-group"}),f.a.createElement("span",{className:"rc-color-picker-trigger",unselectable:"unselectable",style:{backgroundColor:r,border:"1px solid #999",display:"inline-block",padding:"2px",borderRadius:"2px",width:"20px",height:"20px",boxShadow:"0 0 0 2px #fff inset"}})),f.a.createElement("div",{className:"row"},f.a.createElement(fe.a,{label:"Achtergrond afbeelding kleur",divSize:"col-sm-8",value:s,className:"col-sm-8 form-group"}),f.a.createElement("span",{className:"rc-color-picker-trigger",unselectable:"unselectable",style:{backgroundColor:s,border:"1px solid #999",display:"inline-block",padding:"2px",borderRadius:"2px",width:"20px",height:"20px",boxShadow:"0 0 0 2px #fff inset"}})),f.a.createElement("div",{className:"row"},f.a.createElement(fe.a,{label:"Tweede achtergrond kleur",divSize:"col-sm-8",value:l,className:"col-sm-8 form-group"}),f.a.createElement("span",{className:"rc-color-picker-trigger",unselectable:"unselectable",style:{backgroundColor:l,border:"1px solid #999",display:"inline-block",padding:"2px",borderRadius:"2px",width:"20px",height:"20px",boxShadow:"0 0 0 2px #fff inset"}})),f.a.createElement("div",{className:"row"},f.a.createElement(fe.a,{label:"Buttonknop kleur",divSize:"col-sm-8",value:i,className:"col-sm-8 form-group"}),f.a.createElement("span",{className:"rc-color-picker-trigger",unselectable:"unselectable",style:{backgroundColor:i,border:"1px solid #999",display:"inline-block",padding:"2px",borderRadius:"2px",width:"20px",height:"20px",boxShadow:"0 0 0 2px #fff inset"}})),f.a.createElement("hr",null),f.a.createElement("div",{className:"row"},f.a.createElement(fe.a,{label:"Verantwoordelijke portal",divSize:"col-sm-8",value:c?c.fullName:"",className:"col-sm-8 form-group"})),f.a.createElement("div",{className:"row"},f.a.createElement(fe.a,{label:"Eigenaar nieuwe contacten",divSize:"col-sm-8",value:d?d.fullName:"",className:"col-sm-8 form-group"})),f.a.createElement("div",{className:"row"},f.a.createElement(fe.a,{label:"Verantwoordelijke uitvoeren taak",divSize:"col-sm-8",value:p?p.fullName:m?m.name:"",className:"col-sm-8 form-group"})),f.a.createElement("div",{className:"row"},f.a.createElement(fe.a,{label:"Nieuw bij, aanmelden mogelijk",divSize:"col-sm-8",value:g?"Ja":"Nee",className:"col-sm-8 form-group"})),f.a.createElement("div",{className:"row"},f.a.createElement(fe.a,{label:"Privacybeleid link",divSize:"col-sm-8",value:h,className:"col-sm-8 form-group"})),f.a.createElement("div",{className:"row"},f.a.createElement(fe.a,{label:"Email template Nieuwe account activeren",divSize:"col-sm-8",value:u?u.name:"",className:"col-sm-8 form-group"})),f.a.createElement("div",{className:"row"},f.a.createElement(fe.a,{label:"Coöperatie portal naam",divSize:"col-sm-8",value:a,className:"col-sm-8 form-group"})),f.a.createElement("div",{className:"row"},f.a.createElement(fe.a,{label:"Coöperatie naam",divSize:"col-sm-8",value:t,className:"col-sm-8 form-group"})),f.a.createElement("div",{className:"row"},f.a.createElement(fe.a,{label:"Coöperatie website",divSize:"col-sm-8",value:n,className:"col-sm-8 form-group"})))))},Ne=t(101),Ee=function(e){function a(e){var t;return o()(this,a),t=i()(this,p()(a).call(this,e)),b()(d()(t),"switchToEdit",(function(){t.setState({showEdit:!0})})),b()(d()(t),"switchToView",(function(){t.setState({imageHash:Date.now(),showEdit:!1,activeDiv:""})})),t.state={emailTemplates:[],imageHash:Date.now(),showEdit:!1,activeDiv:""},t}return h()(a,e),s()(a,[{key:"componentDidMount",value:function(){var e=this;Ne.a.fetchEmailTemplatesPeek().then((function(a){e.setState({emailTemplates:a})}))}},{key:"onDivEnter",value:function(){this.setState({activeDiv:"panel-grey"})}},{key:"onDivLeave",value:function(){this.state.showEdit||this.setState({activeDiv:""})}},{key:"render",value:function(){var e=this,a=this.props.meDetails.permissions,t=void 0===a?{}:a;return this.props.portalSettings.responsibleUser="",this.props.portalSettings.responsibleUserId&&0!=this.props.portalSettings.responsibleUserId&&(this.props.portalSettings.responsibleUser=this.props.users.find((function(a){return a.id==e.props.portalSettings.responsibleUserId}))),this.props.portalSettings.contactResponsibleOwnerUser="",this.props.portalSettings.contactResponsibleOwnerUserId&&0!=this.props.portalSettings.contactResponsibleOwnerUserId&&(this.props.portalSettings.contactResponsibleOwnerUser=this.props.users.find((function(a){return a.id==e.props.portalSettings.contactResponsibleOwnerUserId}))),this.props.portalSettings.emailTemplateNewAccount="",this.props.portalSettings.emailTemplateNewAccountId&&0!=this.props.portalSettings.emailTemplateNewAccountId&&(this.props.portalSettings.emailTemplateNewAccount=this.state.emailTemplates.find((function(a){return a.id==e.props.portalSettings.emailTemplateNewAccountId}))),this.props.portalSettings.checkContactTaskResponsible="",this.props.portalSettings.checkContactTaskResponsibleUser=null,this.props.portalSettings.checkContactTaskResponsibleTeam=null,this.props.portalSettings.checkContactTaskResponsibleUserId&&0!=this.props.portalSettings.checkContactTaskResponsibleUserId&&(this.props.portalSettings.checkContactTaskResponsible="user"+this.props.portalSettings.checkContactTaskResponsibleUserId,this.props.portalSettings.checkContactTaskResponsibleUser=this.props.users.find((function(a){return a.id==e.props.portalSettings.checkContactTaskResponsibleUserId}))),this.props.portalSettings.checkContactTaskResponsibleTeamId&&0!=this.props.portalSettings.checkContactTaskResponsibleTeamId&&(this.props.portalSettings.checkContactTaskResponsible="team"+this.props.portalSettings.checkContactTaskResponsibleTeamId,this.props.portalSettings.checkContactTaskResponsibleTeam=this.props.teams.find((function(a){return a.id==e.props.portalSettings.checkContactTaskResponsibleTeamId}))),f.a.createElement("div",{className:this.state.activeDiv,onMouseEnter:function(){return e.onDivEnter()},onMouseLeave:function(){return e.onDivLeave()}},this.state.showEdit&&t.managePortalSettings?f.a.createElement(ve,{portalSettings:this.props.portalSettings,emailTemplates:this.state.emailTemplates,switchToView:this.switchToView,imageHash:this.state.imageHash,updateState:this.props.updateState,users:this.props.users,teams:this.props.teams,meDetails:this.props.meDetails}):f.a.createElement(ke,E()({},this.props.portalSettings,{switchToEdit:this.switchToEdit,imageHash:this.state.imageHash})))}}]),a}(v.Component),Se=Object(S.b)((function(e){return{meDetails:e.meDetails,permissions:e.meDetails.permissions,teams:e.systemData.teams,users:e.systemData.users}}))(Ee),ye=function(e){var a=e.portalSettings,t=e.hasError,n=e.isLoading,o=e.updateState,r=(e.emailTemplates,""),s=!0;return t?r="Fout bij het ophalen van portal instellingen.":n?r="Gegevens aan het laden.":Object(k.isEmpty)(a)?r="Geen portal instellingen gevonden!":s=!1,s?f.a.createElement("div",null,r):f.a.createElement("div",null,f.a.createElement(Se,{portalSettings:a,updateState:o}))},Ce=t(4),we=t(685),Te=function(){return f.a.createElement("div",{className:"row"},f.a.createElement("div",{className:"col-md-4"},f.a.createElement("div",{className:"btn-group btn-group-flex margin-small",role:"group"},f.a.createElement(we.a,{iconName:"glyphicon-arrow-left",onClickAction:Ce.e.goBack}))),f.a.createElement("div",{className:"col-md-4"},f.a.createElement("h4",{className:"text-center"},"Portal instellingen")),f.a.createElement("div",{className:"col-md-4"}))};function xe(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function Re(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?xe(Object(t),!0).forEach((function(a){b()(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):xe(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var Pe=function(e){function a(e){var t;return o()(this,a),t=i()(this,p()(a).call(this,e)),b()(d()(t),"callFetchPortalSettings",(function(){t.setState({isLoading:!0,hasError:!1});O("?keys[]=portalName&keys[]=cooperativeName&keys[]=portalWebsite&keys[]=portalUrl&keys[]=backgroundColor&keys[]=backgroundImageColor&keys[]=backgroundSecondaryColor&keys[]=buttonColor&keys[]=responsibleUserId&keys[]=checkContactTaskResponsibleUserId&keys[]=checkContactTaskResponsibleTeamId&keys[]=contactResponsibleOwnerUserId&keys[]=emailTemplateNewAccountId&keys[]=linkPrivacyPolicy&keys[]=showNewAtCooperativeLink").then((function(e){t.setState({isLoading:!1,portalSettings:Re({},e.data,{showNewAtCooperativeLink:"true"==e.data.showNewAtCooperativeLink})})})).catch((function(e){t.setState({isLoading:!1,hasError:!0})}))})),b()(d()(t),"updateState",(function(e){t.setState({portalSettings:e})})),t.state={portalSettings:{},isLoading:!1,hasError:!1},t}return h()(a,e),s()(a,[{key:"componentDidMount",value:function(){this.callFetchPortalSettings()}},{key:"render",value:function(){return f.a.createElement("div",{className:"row"},f.a.createElement("div",{className:"col-md-9"},f.a.createElement("div",{className:"col-md-12 margin-10-top"},f.a.createElement(R.a,null,f.a.createElement(P.a,{className:"panel-small"},f.a.createElement(Te,null)))),f.a.createElement("div",{className:"col-md-12 margin-10-top"},f.a.createElement(ye,{portalSettings:this.state.portalSettings,isLoading:this.state.isLoading,hasError:this.state.hasError,updateState:this.updateState}))),f.a.createElement("div",{className:"col-md-3"}))}}]),a}(v.Component);a.default=Pe},682:function(e,a,t){"use strict";var n=t(0),o=t.n(n),r=t(14),s=t.n(r),l=function(e){var a=e.children,t=e.className,n=e.onMouseEnter,r=e.onMouseLeave;return o.a.createElement("div",{className:"panel panel-default ".concat(t),onMouseEnter:n,onMouseLeave:r},a)};l.defaultProps={className:"",onMouseEnter:function(){},onMouseLeave:function(){}},l.propTypes={className:s.a.string,onMouseEnter:s.a.func,onMouseLeave:s.a.func},a.a=l},683:function(e,a,t){"use strict";var n=t(0),o=t.n(n),r=t(14),s=t.n(r),l=function(e){var a=e.className,t=e.children;return o.a.createElement("div",{className:"panel-body ".concat(a)},t)};l.defaultProps={className:""},l.propTypes={className:s.a.string},a.a=l},684:function(e,a,t){"use strict";var n=t(0),o=t.n(n),r=t(14),s=t.n(r),l=function(e){var a=e.buttonClassName,t=e.buttonText,n=e.onClickAction,r=e.type,s=e.value,l=e.loading,i=e.loadText,c=e.disabled;return l?o.a.createElement("button",{type:r,className:"btn btn-sm btn-loading ".concat(a),value:s,disabled:l},o.a.createElement("span",{className:"glyphicon glyphicon-refresh glyphicon-refresh-animate"})," ",i):o.a.createElement("button",{type:r,className:"btn btn-sm ".concat(a),onClick:n,value:s,disabled:c},t)};l.defaultProps={buttonClassName:"btn-success",type:"button",value:"",loading:!1,loadText:"Aan het laden",disabled:!1},l.propTypes={buttonClassName:s.a.string,buttonText:s.a.string.isRequired,onClickAction:s.a.func,type:s.a.string,value:s.a.string,loading:s.a.bool,loadText:s.a.string,disabled:s.a.bool},a.a=l},685:function(e,a,t){"use strict";var n=t(0),o=t.n(n),r=t(14),s=t.n(r),l=function(e){var a=e.buttonClassName,t=e.iconName,n=e.onClickAction,r=e.title,s=e.disabled;return o.a.createElement("button",{type:"button",className:"btn ".concat(a),onClick:n,disabled:s,title:r},o.a.createElement("span",{className:"glyphicon ".concat(t)}))};l.defaultProps={buttonClassName:"btn-success btn-sm",title:"",disabled:!1},l.propTypes={buttonClassName:s.a.string,iconName:s.a.string.isRequired,onClickAction:s.a.func,title:s.a.string,disabled:s.a.bool},a.a=l},686:function(e,a,t){"use strict";var n=t(0),o=t.n(n),r=t(14),s=t.n(r),l=function(e){var a=e.label,t=e.type,n=e.className,r=e.size,s=e.id,l=e.placeholder,i=e.name,c=e.value,p=e.onClickAction,m=e.onChangeAction,d=e.onBlurAction,u=e.required,h=e.readOnly,g=e.maxLength,b=e.error,v=e.min,f=e.max,k=e.step,N=e.errorMessage,E=e.divSize,S=e.divClassName,y=e.autoComplete;return o.a.createElement("div",{className:"form-group ".concat(E," ").concat(S)},o.a.createElement("label",{htmlFor:s,className:"col-sm-6 ".concat(u)},a),o.a.createElement("div",{className:"".concat(r)},o.a.createElement("input",{type:t,className:"form-control input-sm ".concat(n)+(b?"has-error":""),id:s,placeholder:l,name:i,value:c,onClick:p,onChange:m,onBlur:d,readOnly:h,maxLength:g,min:v,max:f,autoComplete:y,step:k})),b&&o.a.createElement("div",{className:"col-sm-offset-6 col-sm-6"},o.a.createElement("span",{className:"has-error-message"}," ",N)))};l.defaultProps={divClassName:"",className:"",size:"col-sm-6",divSize:"col-sm-6",name:"",type:"text",value:"",required:"",readOnly:!1,maxLength:null,error:!1,min:"",max:"",step:"",errorMessage:"",autoComplete:"off",onBlurAction:function(){},onClickAction:function(){},onChangeAction:function(){}},l.propTypes={label:s.a.oneOfType([s.a.string,s.a.object]).isRequired,type:s.a.string,className:s.a.string,divClassName:s.a.string,size:s.a.string,divSize:s.a.string,id:s.a.string,placeholder:s.a.string,name:s.a.string.isRequired,value:s.a.oneOfType([s.a.string,s.a.number]),onClickAction:s.a.func,onChangeAction:s.a.func,onBlurAction:s.a.func,required:s.a.string,readOnly:s.a.bool,maxLength:s.a.string,error:s.a.bool,min:s.a.string,max:s.a.string,step:s.a.string,errorMessage:s.a.string,autoComplete:s.a.string},a.a=l},687:function(e,a,t){"use strict";var n=t(0),o=t.n(n),r=t(4),s=t(14),l=t.n(s),i=function(e){var a=e.label,t=e.className,n=e.id,s=e.value,l=e.link,i=e.hidden;return l.length>0?o.a.createElement("div",{className:t,style:i?{display:"none"}:{}},o.a.createElement("label",{htmlFor:n,className:"col-sm-6"},a),o.a.createElement("div",{className:"col-sm-6",id:n,onClick:null},o.a.createElement(r.b,{to:l,className:"link-underline"},s))):o.a.createElement("div",{className:t,style:i?{display:"none"}:{}},o.a.createElement("label",{htmlFor:n,className:"col-sm-6"},a),o.a.createElement("div",{className:"col-sm-6",id:n},s))};i.defaultProps={className:"col-sm-6",value:"",link:"",hidden:!1},i.propTypes={label:l.a.oneOfType([l.a.string,l.a.object]).isRequired,className:l.a.string,id:l.a.string,value:l.a.oneOfType([l.a.string,l.a.number]),link:l.a.string,hidden:l.a.bool},a.a=i},692:function(e,a,t){"use strict";var n=t(0),o=t.n(n),r=t(14),s=t.n(r),l=t(698),i=t.n(l),c=function(e){var a=e.label,t=e.size,n=e.id,r=e.name,s=e.value,l=e.onChangeAction,c=e.required,p=e.divSize,m=e.className,d=e.disabled;return o.a.createElement("div",{className:"form-group ".concat(p," ").concat(m)},o.a.createElement("div",null,o.a.createElement("label",{htmlFor:n,className:"col-sm-6 ".concat(c)},a)),o.a.createElement("div",{className:"".concat(t)},o.a.createElement(i.a,{id:n,name:r,onChange:l,checked:s,disabled:d})))};c.defaultProps={className:"",size:"col-sm-6",divSize:"col-sm-6",required:"",disabled:!1,value:null},c.propTypes={label:s.a.string.isRequired,type:s.a.string,size:s.a.string,divSize:s.a.string,id:s.a.string,name:s.a.string.isRequired,value:s.a.bool,onChangeAction:s.a.func,required:s.a.string,disabled:s.a.bool},a.a=c},705:function(e,a,t){"use strict";var n=t(0),o=t.n(n),r=t(14),s=t.n(r),l=t(708),i=(t(695),function(e){var a=e.label,t=e.divSize,n=e.size,r=e.id,s=e.name,i=e.value,c=e.options,p=e.optionId,m=e.optionName,d=e.onChangeAction,u=e.required,h=e.multi,g=e.error,b=e.isLoading;return o.a.createElement("div",{className:"form-group ".concat(t)},o.a.createElement("label",{htmlFor:r,className:"col-sm-6 ".concat(u)},a),o.a.createElement("div",{className:"".concat(n)},o.a.createElement(l.default,{id:r,name:s,value:i,onChange:function(e){d(e||"",s)},options:c,valueKey:p,labelKey:m,placeholder:"",noResultsText:"Geen resultaat gevonden",multi:h,simpleValue:!0,removeSelected:!0,className:g?" has-error":"",isLoading:b})))});i.defaultProps={className:"",size:"col-sm-6",divSize:"col-sm-6",optionId:"id",optionName:"name",readOnly:!1,required:"",error:!1,value:"",multi:!0,isLoading:!1},i.propTypes={label:s.a.string.isRequired,className:s.a.string,size:s.a.string,divSize:s.a.string,id:s.a.string,name:s.a.string.isRequired,options:s.a.array.isRequired,optionId:s.a.string,optionName:s.a.string,value:s.a.oneOfType([s.a.string,s.a.number]),onChangeAction:s.a.func,onBlurAction:s.a.func,required:s.a.string,readOnly:s.a.bool,error:s.a.bool,multi:s.a.bool,isLoading:s.a.bool},a.a=i},742:function(e,a,t){"use strict";var n=t(0),o=t.n(n),r=t(14),s=t.n(r),l=function(e){var a=e.label,t=e.className,n=e.size,r=e.divSize,s=e.id,l=e.name,i=e.value,c=e.optionsInGroups,p=e.onChangeAction,m=e.onBlurAction,d=e.required,u=e.error,h=e.readOnly;return o.a.createElement("div",{className:"form-group ".concat(r)},o.a.createElement("label",{htmlFor:s,className:"col-sm-6 ".concat(d)},a),o.a.createElement("div",{className:"".concat(n)},o.a.createElement("select",{className:"form-control input-sm ".concat(t)+(u&&" has-error"),id:s,name:l,value:i,onChange:p,onBlur:m,readOnly:h},o.a.createElement("option",{value:""}),c.map((function(e,a){var t=e.optionName||"name";return o.a.createElement("optgroup",{key:a,label:e.label},e.options.map((function(a){return o.a.createElement("option",{key:a.id,value:e.name+a.id},a[t])})))})))))};l.defaultProps={className:"",size:"col-sm-6",divSize:"col-sm-6",readOnly:!1,required:"",error:!1,value:""},l.propTypes={label:s.a.string.isRequired,className:s.a.string,size:s.a.string,divSize:s.a.string,id:s.a.string,name:s.a.string.isRequired,optionsInGroups:s.a.array,value:s.a.oneOfType([s.a.string,s.a.number]),onChangeAction:s.a.func,onBlurAction:s.a.func,required:s.a.string,readOnly:s.a.bool,error:s.a.bool,optionName:s.a.string},a.a=l}}]);