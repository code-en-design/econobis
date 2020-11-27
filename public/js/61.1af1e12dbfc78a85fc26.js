(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{1570:function(e,t,a){"use strict";a.r(t);var n=a(25),i=a.n(n),l=a(24),r=a.n(l),s=a(26),o=a.n(s),c=a(27),u=a.n(c),d=a(28),m=a.n(d),h=a(0),f=a.n(h),p=a(33),v=function(e){return{type:"FETCH_MAILGUN_DOMAIN_DETAILS",id:e}},g=a(4),b=a(685),y=function(e){function t(e){var a;return i()(this,t),(a=o()(this,u()(t).call(this,e))).state={},a}return m()(t,e),r()(t,[{key:"render",value:function(){return f.a.createElement("div",{className:"row"},f.a.createElement("div",{className:"col-md-4"},f.a.createElement("div",{className:"btn-group btn-group-flex margin-small",role:"group"},f.a.createElement(b.a,{iconName:"glyphicon-arrow-left",onClickAction:g.e.goBack}))),f.a.createElement("div",{className:"col-md-4"},f.a.createElement("h4",{className:"text-center"},"Mailgun domein: ",this.props.domain)),f.a.createElement("div",{className:"col-md-4"}))}}]),t}(h.Component),E=Object(p.b)((function(e){return{domain:e.mailgunDomainDetails.domain,id:e.mailgunDomainDetails.id}}),null)(y),k=a(197),N=a(21),D=a.n(N),C=a(6),w=a.n(C),O=a(689),T=a.n(O),M=a(8),j=a.n(M),S=a(686),x=a(684),P=a(682),A=a(683),_=a(692);function L(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?L(Object(a),!0).forEach((function(t){w()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):L(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}j.a.locale("nl");var F=function(e){function t(e){var a;return i()(this,t),(a=o()(this,u()(t).call(this,e))).state={mailgunDomain:q({},e.mailgunDomainDetails),errors:{domain:!1}},a.handleInputChange=a.handleInputChange.bind(D()(a)),a.handleSubmit=a.handleSubmit.bind(D()(a)),a}return m()(t,e),r()(t,[{key:"handleInputChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;this.setState(q({},this.state,{mailgunDomain:q({},this.state.mailgunDomain,w()({},n,a))}))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state.mailgunDomain,a={},n=!1;T.a.isEmpty(t.domain)&&(a.domain=!0,n=!0),T.a.isEmpty(t.secret)&&(a.secret=!0,n=!0),this.setState(q({},this.state,{errors:a})),!n&&this.props.updateMailgunDomain(t,this.props.switchToView)}},{key:"render",value:function(){var e=this.state.mailgunDomain,t=e.domain,a=e.secret,n=e.isVerified;return f.a.createElement("form",{className:"form-horizontal",onSubmit:this.handleSubmit},f.a.createElement(P.a,null,f.a.createElement(A.a,null,f.a.createElement("div",{className:"row"},f.a.createElement(S.a,{label:"Domesin",name:"domain",value:t,onChangeAction:this.handleInputChange,required:"required",error:this.state.errors.domain}),f.a.createElement(S.a,{label:"Mailgun API Key",name:"secret",value:a,onChangeAction:this.handleInputChange,required:"required",error:this.state.errors.secret})),f.a.createElement("div",{className:"row"},f.a.createElement(_.a,{label:"Geverifieerd",name:"isVerified",value:n,onChangeAction:this.handleInputChange,disabled:!0}))),f.a.createElement(A.a,null,f.a.createElement("div",{className:"pull-right btn-group",role:"group"},f.a.createElement(x.a,{buttonClassName:"btn-default",buttonText:"Sluiten",onClickAction:this.props.switchToView}),f.a.createElement(x.a,{buttonText:"Opslaan",type:"submit",value:"Submit"})))))}}]),t}(h.Component),I=Object(p.b)((function(e){return{mailgunDomainDetails:e.mailgunDomainDetails}}),(function(e){return{updateMailgunDomain:function(t,a){e(function(e,t){return{type:"UPDATE_MAILGUN_DOMAIN",mailgunDomain:e,switchToView:t}}(t,a))}}}))(F),B=a(687),z=Object(p.b)((function(e){return{mailgunDomainDetails:e.mailgunDomainDetails}}))((function(e){var t=e.mailgunDomainDetails,a=t.domain,n=t.secret,i=t.isVerified;return f.a.createElement("div",{onClick:e.switchToEdit},f.a.createElement(P.a,null,f.a.createElement(A.a,null,f.a.createElement("div",{className:"row"},f.a.createElement(B.a,{label:"Domein",value:a}),f.a.createElement(B.a,{label:"Mailgun API Key",value:n})),f.a.createElement("div",{className:"row"},f.a.createElement(B.a,{label:"Geverifieerd",value:i?"Ja":"Nee"})))))})),X=function(e){function t(e){var a;return i()(this,t),a=o()(this,u()(t).call(this,e)),w()(D()(a),"switchToEdit",(function(){a.setState({showEdit:!0})})),w()(D()(a),"switchToView",(function(){a.setState({showEdit:!1,activeDiv:""})})),a.state={showEdit:!1,activeDiv:""},a}return m()(t,e),r()(t,[{key:"onDivEnter",value:function(){this.setState({activeDiv:"panel-grey"})}},{key:"onDivLeave",value:function(){this.state.showEdit||this.setState({activeDiv:""})}},{key:"render",value:function(){var e=this,t=this.props.meDetails.permissions,a=void 0===t?{}:t;return f.a.createElement("div",{className:this.state.activeDiv,onMouseEnter:function(){return e.onDivEnter()},onMouseLeave:function(){return e.onDivLeave()}},this.state.showEdit&&a.manageMailgunDomain?f.a.createElement(I,{switchToView:this.switchToView}):f.a.createElement(z,{switchToEdit:this.switchToEdit}))}}]),t}(h.Component),R=Object(p.b)((function(e){return{mailgunDomainDetails:e.mailgunDomainDetails,meDetails:e.meDetails,permissions:e.meDetails.permissions}}))(X),V=function(e){function t(e){return i()(this,t),o()(this,u()(t).call(this,e))}return m()(t,e),r()(t,[{key:"render",value:function(){var e="",t=!0;return this.props.hasError?e="Fout bij het ophalen van mailgun domein.":this.props.isLoading?e="Gegevens aan het laden.":Object(k.isEmpty)(this.props.mailgunDomainDetails)?e="Geen mailgun domein gevonden!":t=!1,t?f.a.createElement("div",null,e):f.a.createElement("div",null,f.a.createElement(R,null))}}]),t}(h.Component),G=Object(p.b)((function(e){return{mailgunDomainDetails:e.mailgunDomainDetails,isLoading:e.loadingData.isLoading,hasError:e.loadingData.hasError}}),(function(e){return{fetchMailgunDomainDetails:function(t){e(v(t))}}}))(V),J=function(e){function t(e){return i()(this,t),o()(this,u()(t).call(this,e))}return m()(t,e),r()(t,[{key:"componentDidMount",value:function(){this.props.fetchMailgunDomainDetails(this.props.params.id)}},{key:"render",value:function(){return f.a.createElement("div",{className:"row"},f.a.createElement("div",{className:"col-md-9"},f.a.createElement("div",{className:"col-md-12 margin-10-top"},f.a.createElement(P.a,null,f.a.createElement(A.a,{className:"panel-small"},f.a.createElement(E,null)))),f.a.createElement("div",{className:"col-md-12 margin-10-top"},f.a.createElement(G,null))),f.a.createElement("div",{className:"col-md-3"}))}}]),t}(h.Component);t.default=Object(p.b)((function(e){return{mailgunDomainDetails:e.mailgunDomainDetails}}),(function(e){return{fetchMailgunDomainDetails:function(t){e(v(t))}}}))(J)},682:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=a(14),r=a.n(l),s=function(e){var t=e.children,a=e.className,n=e.onMouseEnter,l=e.onMouseLeave;return i.a.createElement("div",{className:"panel panel-default ".concat(a),onMouseEnter:n,onMouseLeave:l},t)};s.defaultProps={className:"",onMouseEnter:function(){},onMouseLeave:function(){}},s.propTypes={className:r.a.string,onMouseEnter:r.a.func,onMouseLeave:r.a.func},t.a=s},683:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=a(14),r=a.n(l),s=function(e){var t=e.className,a=e.children;return i.a.createElement("div",{className:"panel-body ".concat(t)},a)};s.defaultProps={className:""},s.propTypes={className:r.a.string},t.a=s},684:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=a(14),r=a.n(l),s=function(e){var t=e.buttonClassName,a=e.buttonText,n=e.onClickAction,l=e.type,r=e.value,s=e.loading,o=e.loadText,c=e.disabled;return s?i.a.createElement("button",{type:l,className:"btn btn-sm btn-loading ".concat(t),value:r,disabled:s},i.a.createElement("span",{className:"glyphicon glyphicon-refresh glyphicon-refresh-animate"})," ",o):i.a.createElement("button",{type:l,className:"btn btn-sm ".concat(t),onClick:n,value:r,disabled:c},a)};s.defaultProps={buttonClassName:"btn-success",type:"button",value:"",loading:!1,loadText:"Aan het laden",disabled:!1},s.propTypes={buttonClassName:r.a.string,buttonText:r.a.string.isRequired,onClickAction:r.a.func,type:r.a.string,value:r.a.string,loading:r.a.bool,loadText:r.a.string,disabled:r.a.bool},t.a=s},685:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=a(14),r=a.n(l),s=function(e){var t=e.buttonClassName,a=e.iconName,n=e.onClickAction,l=e.title,r=e.disabled;return i.a.createElement("button",{type:"button",className:"btn ".concat(t),onClick:n,disabled:r,title:l},i.a.createElement("span",{className:"glyphicon ".concat(a)}))};s.defaultProps={buttonClassName:"btn-success btn-sm",title:"",disabled:!1},s.propTypes={buttonClassName:r.a.string,iconName:r.a.string.isRequired,onClickAction:r.a.func,title:r.a.string,disabled:r.a.bool},t.a=s},686:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=a(14),r=a.n(l),s=function(e){var t=e.label,a=e.type,n=e.className,l=e.size,r=e.id,s=e.placeholder,o=e.name,c=e.value,u=e.onClickAction,d=e.onChangeAction,m=e.onBlurAction,h=e.required,f=e.readOnly,p=e.maxLength,v=e.error,g=e.min,b=e.max,y=e.step,E=e.errorMessage,k=e.divSize,N=e.divClassName,D=e.autoComplete;return i.a.createElement("div",{className:"form-group ".concat(k," ").concat(N)},i.a.createElement("label",{htmlFor:r,className:"col-sm-6 ".concat(h)},t),i.a.createElement("div",{className:"".concat(l)},i.a.createElement("input",{type:a,className:"form-control input-sm ".concat(n)+(v?"has-error":""),id:r,placeholder:s,name:o,value:c,onClick:u,onChange:d,onBlur:m,readOnly:f,maxLength:p,min:g,max:b,autoComplete:D,step:y})),v&&i.a.createElement("div",{className:"col-sm-offset-6 col-sm-6"},i.a.createElement("span",{className:"has-error-message"}," ",E)))};s.defaultProps={divClassName:"",className:"",size:"col-sm-6",divSize:"col-sm-6",name:"",type:"text",value:"",required:"",readOnly:!1,maxLength:null,error:!1,min:"",max:"",step:"",errorMessage:"",autoComplete:"off",onBlurAction:function(){},onClickAction:function(){},onChangeAction:function(){}},s.propTypes={label:r.a.oneOfType([r.a.string,r.a.object]).isRequired,type:r.a.string,className:r.a.string,divClassName:r.a.string,size:r.a.string,divSize:r.a.string,id:r.a.string,placeholder:r.a.string,name:r.a.string.isRequired,value:r.a.oneOfType([r.a.string,r.a.number]),onClickAction:r.a.func,onChangeAction:r.a.func,onBlurAction:r.a.func,required:r.a.string,readOnly:r.a.bool,maxLength:r.a.string,error:r.a.bool,min:r.a.string,max:r.a.string,step:r.a.string,errorMessage:r.a.string,autoComplete:r.a.string},t.a=s},687:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=a(4),r=a(14),s=a.n(r),o=function(e){var t=e.label,a=e.className,n=e.id,r=e.value,s=e.link,o=e.hidden;return s.length>0?i.a.createElement("div",{className:a,style:o?{display:"none"}:{}},i.a.createElement("label",{htmlFor:n,className:"col-sm-6"},t),i.a.createElement("div",{className:"col-sm-6",id:n,onClick:null},i.a.createElement(l.b,{to:s,className:"link-underline"},r))):i.a.createElement("div",{className:a,style:o?{display:"none"}:{}},i.a.createElement("label",{htmlFor:n,className:"col-sm-6"},t),i.a.createElement("div",{className:"col-sm-6",id:n},r))};o.defaultProps={className:"col-sm-6",value:"",link:"",hidden:!1},o.propTypes={label:s.a.oneOfType([s.a.string,s.a.object]).isRequired,className:s.a.string,id:s.a.string,value:s.a.oneOfType([s.a.string,s.a.number]),link:s.a.string,hidden:s.a.bool},t.a=o},692:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=a(14),r=a.n(l),s=a(696),o=a.n(s),c=function(e){var t=e.label,a=e.size,n=e.id,l=e.name,r=e.value,s=e.onChangeAction,c=e.required,u=e.divSize,d=e.className,m=e.disabled;return i.a.createElement("div",{className:"form-group ".concat(u," ").concat(d)},i.a.createElement("div",null,i.a.createElement("label",{htmlFor:n,className:"col-sm-6 ".concat(c)},t)),i.a.createElement("div",{className:"".concat(a)},i.a.createElement(o.a,{id:n,name:l,onChange:s,checked:r,disabled:m})))};c.defaultProps={className:"",size:"col-sm-6",divSize:"col-sm-6",required:"",disabled:!1,value:null},c.propTypes={label:r.a.string.isRequired,type:r.a.string,size:r.a.string,divSize:r.a.string,id:r.a.string,name:r.a.string.isRequired,value:r.a.bool,onChangeAction:r.a.func,required:r.a.string,disabled:r.a.bool},t.a=c},696:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=a(0),r=m(l),s=m(a(703)),o=m(a(14)),c=m(a(697)),u=m(a(698)),d=a(699);function m(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentWillReceiveProps",value:function(e){"checked"in e&&this.setState({checked:!!e.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,i=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),l=(0,s.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return r.default.createElement("div",{className:l,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},r.default.createElement("div",{className:"react-toggle-track"},r.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),r.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),r.default.createElement("div",{className:"react-toggle-thumb"}),r.default.createElement("input",n({},i,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(l.PureComponent);t.default=h,h.displayName="Toggle",h.defaultProps={icons:{checked:r.default.createElement(c.default,null),unchecked:r.default.createElement(u.default,null)}},h.propTypes={checked:o.default.bool,disabled:o.default.bool,defaultChecked:o.default.bool,onChange:o.default.func,onFocus:o.default.func,onBlur:o.default.func,className:o.default.string,name:o.default.string,value:o.default.string,id:o.default.string,"aria-labelledby":o.default.string,"aria-label":o.default.string,icons:o.default.oneOfType([o.default.bool,o.default.shape({checked:o.default.node,unchecked:o.default.node})])}},697:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,i=a(0),l=(n=i)&&n.__esModule?n:{default:n};t.default=function(){return l.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},l.default.createElement("title",null,"switch-check"),l.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},698:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,i=a(0),l=(n=i)&&n.__esModule?n:{default:n};t.default=function(){return l.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},l.default.createElement("title",null,"switch-x"),l.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},699:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},703:function(e,t,a){var n;
/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var a={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n))e.push(i.apply(null,n));else if("object"===l)for(var r in n)a.call(n,r)&&n[r]&&e.push(r)}}return e.join(" ")}e.exports?e.exports=i:void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()}}]);