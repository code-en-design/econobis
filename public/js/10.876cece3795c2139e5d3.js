(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{684:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(14),o=t.n(r),i=function(e){var a=e.buttonClassName,t=e.buttonText,n=e.onClickAction,r=e.type,o=e.value,i=e.loading,s=e.loadText,c=e.disabled;return i?l.a.createElement("button",{type:r,className:"btn btn-sm btn-loading ".concat(a),value:o,disabled:i},l.a.createElement("span",{className:"glyphicon glyphicon-refresh glyphicon-refresh-animate"})," ",s):l.a.createElement("button",{type:r,className:"btn btn-sm ".concat(a),onClick:n,value:o,disabled:c},t)};i.defaultProps={buttonClassName:"btn-success",type:"button",value:"",loading:!1,loadText:"Aan het laden",disabled:!1},i.propTypes={buttonClassName:o.a.string,buttonText:o.a.string.isRequired,onClickAction:o.a.func,type:o.a.string,value:o.a.string,loading:o.a.bool,loadText:o.a.string,disabled:o.a.bool},a.a=i},685:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(14),o=t.n(r),i=function(e){var a=e.buttonClassName,t=e.iconName,n=e.onClickAction,r=e.title,o=e.disabled;return l.a.createElement("button",{type:"button",className:"btn ".concat(a),onClick:n,disabled:o,title:r},l.a.createElement("span",{className:"glyphicon ".concat(t)}))};i.defaultProps={buttonClassName:"btn-success btn-sm",title:"",disabled:!1},i.propTypes={buttonClassName:o.a.string,iconName:o.a.string.isRequired,onClickAction:o.a.func,title:o.a.string,disabled:o.a.bool},a.a=i},688:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(14),o=t.n(r),i=function(e){var a=e.label,t=e.className,n=e.size,r=e.id,o=e.name,i=e.value,s=e.options,c=e.onChangeAction,u=e.onBlurAction,d=e.required,m=e.error,p=e.errorMessage,f=e.optionValue,g=e.optionName,v=e.readOnly,h=e.placeholder,b=e.divClassName,y=e.emptyOption;return l.a.createElement("div",{className:"form-group ".concat(n," ").concat(b)},l.a.createElement("label",{htmlFor:r,className:"col-sm-6 ".concat(d)},a),l.a.createElement("div",{className:"col-sm-6"},l.a.createElement("select",{className:"form-control input-sm ".concat(t)+(m&&" has-error"),id:r,name:o,value:i,onChange:c,onBlur:u,readOnly:v},y&&l.a.createElement("option",{value:""},h),s.map((function(e){return l.a.createElement("option",{key:e[f],value:e[f]},e[g])})))),m&&l.a.createElement("div",{className:"col-sm-offset-6 col-sm-6"},l.a.createElement("span",{className:"has-error-message"}," ",p)))};i.defaultProps={divClassName:"",className:"",size:"col-sm-6",readOnly:!1,required:"",error:!1,errorMessage:"",value:"",optionValue:"id",optionName:"name",placeholder:"",emptyOption:!0},i.propTypes={label:o.a.string.isRequired,className:o.a.string,size:o.a.string,id:o.a.string,name:o.a.string.isRequired,options:o.a.array,value:o.a.oneOfType([o.a.string,o.a.number]),onChangeAction:o.a.func,onBlurAction:o.a.func,required:o.a.string,readOnly:o.a.bool,error:o.a.bool,errorMessage:o.a.string,emptyOption:o.a.bool,optionValue:o.a.string,optionName:o.a.string,placeholder:o.a.string},a.a=i},706:function(e,a){e.exports=function(e,a,t){var n=new Blob([e],{type:t||"application/octet-stream"});if(void 0!==window.navigator.msSaveBlob)window.navigator.msSaveBlob(n,a);else{var l=window.URL.createObjectURL(n),r=document.createElement("a");r.style.display="none",r.href=l,r.setAttribute("download",a),void 0===r.download&&r.setAttribute("target","_blank"),document.body.appendChild(r),r.click(),document.body.removeChild(r),window.URL.revokeObjectURL(l)}}},707:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(14),o=t.n(r),i=t(711),s=t.n(i),c=function(e){var a=e.onPageChangeAction,t=e.initialPage,n=e.recordsPerPage,r=e.totalRecords;return l.a.createElement(s.a,{onPageChange:a,pageCount:Math.ceil(r/n)||1,pageRangeDisplayed:5,marginPagesDisplayed:2,breakLabel:l.a.createElement("a",null,"..."),breakClassName:"break-me",containerClassName:"pagination",activeClassName:"active",previousLabel:l.a.createElement("span",{"aria-hidden":"true"},"«"),nextLabel:l.a.createElement("span",{"aria-hidden":"true"},"»"),initialPage:t||0,forcePage:t,disableInitialCallback:!0})};c.defaultProps={recordsPerPage:20},c.propTypes={initialPage:o.a.number.isRequired,recordsPerPage:o.a.number,totalRecords:o.a.number,onPageChangeAction:o.a.func.isRequired},a.a=c},711:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n,l=t(712),r=(n=l)&&n.__esModule?n:{default:n};a.default=r.default},712:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=function(){function e(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(a,t,n){return t&&e(a.prototype,t),n&&e(a,n),a}}(),l=t(0),r=c(l),o=c(t(14)),i=c(t(713)),s=c(t(714));function c(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function a(e){!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);var t=function(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return t.handlePreviousPage=function(e){var a=t.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,a>0&&t.handlePageSelected(a-1,e)},t.handleNextPage=function(e){var a=t.state.selected,n=t.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,a<n-1&&t.handlePageSelected(a+1,e)},t.handlePageSelected=function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1,t.state.selected!==e&&(t.setState({selected:e}),t.callCallback(e))},t.callCallback=function(e){void 0!==t.props.onPageChange&&"function"==typeof t.props.onPageChange&&t.props.onPageChange({selected:e})},t.pagination=function(){var e=[],a=t.props,n=a.pageRangeDisplayed,l=a.pageCount,o=a.marginPagesDisplayed,i=a.breakLabel,c=a.breakClassName,u=t.state.selected;if(l<=n)for(var d=0;d<l;d++)e.push(t.getPageElement(d));else{var m=n/2,p=n-m;u>l-n/2?m=n-(p=l-u):u<n/2&&(p=n-(m=u));var f=void 0,g=void 0,v=void 0,h=function(e){return t.getPageElement(e)};for(f=0;f<l;f++)(g=f+1)<=o||g>l-o||f>=u-m&&f<=u+p?e.push(h(f)):i&&e[e.length-1]!==v&&(v=r.default.createElement(s.default,{key:f,breakLabel:i,breakClassName:c}),e.push(v))}return e},t.state={selected:e.initialPage?e.initialPage:e.forcePage?e.forcePage:0},t}return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,e),n(a,[{key:"componentDidMount",value:function(){var e=this.props,a=e.initialPage,t=e.disableInitialCallback;void 0===a||t||this.callCallback(a)}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:e.forcePage})}},{key:"hrefBuilder",value:function(e){var a=this.props,t=a.hrefBuilder,n=a.pageCount;if(t&&e!==this.state.selected&&e>=0&&e<n)return t(e+1)}},{key:"getPageElement",value:function(e){var a=this.state.selected,t=this.props,n=t.pageClassName,l=t.pageLinkClassName,o=t.activeClassName,s=t.activeLinkClassName,c=t.extraAriaContext;return r.default.createElement(i.default,{key:e,onClick:this.handlePageSelected.bind(null,e),selected:a===e,pageClassName:n,pageLinkClassName:l,activeClassName:o,activeLinkClassName:s,extraAriaContext:c,href:this.hrefBuilder(e),page:e+1})}},{key:"render",value:function(){var e=this.props,a=e.disabledClassName,t=e.previousClassName,n=e.nextClassName,l=e.pageCount,o=e.containerClassName,i=e.previousLinkClassName,s=e.previousLabel,c=e.nextLinkClassName,u=e.nextLabel,d=this.state.selected,m=t+(0===d?" "+a:""),p=n+(d===l-1?" "+a:"");return r.default.createElement("ul",{className:o},r.default.createElement("li",{className:m},r.default.createElement("a",{onClick:this.handlePreviousPage,className:i,href:this.hrefBuilder(d-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage},s)),this.pagination(),r.default.createElement("li",{className:p},r.default.createElement("a",{onClick:this.handleNextPage,className:c,href:this.hrefBuilder(d+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage},u)))}}]),a}(l.Component);u.propTypes={pageCount:o.default.number.isRequired,pageRangeDisplayed:o.default.number.isRequired,marginPagesDisplayed:o.default.number.isRequired,previousLabel:o.default.node,nextLabel:o.default.node,breakLabel:o.default.node,hrefBuilder:o.default.func,onPageChange:o.default.func,initialPage:o.default.number,forcePage:o.default.number,disableInitialCallback:o.default.bool,containerClassName:o.default.string,pageClassName:o.default.string,pageLinkClassName:o.default.string,activeClassName:o.default.string,activeLinkClassName:o.default.string,previousClassName:o.default.string,nextClassName:o.default.string,previousLinkClassName:o.default.string,nextLinkClassName:o.default.string,disabledClassName:o.default.string,breakClassName:o.default.string},u.defaultProps={pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousClassName:"previous",nextClassName:"next",previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1},a.default=u},713:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n,l=t(0),r=(n=l)&&n.__esModule?n:{default:n};a.default=function(e){var a=e.pageClassName,t=e.pageLinkClassName,n=e.onClick,l=e.href,o="Page "+e.page+(e.extraAriaContext?" "+e.extraAriaContext:""),i=null;return e.selected&&(i="page",o="Page "+e.page+" is your current page",a=void 0!==a?a+" "+e.activeClassName:e.activeClassName,void 0!==t?(t=t,void 0!==e.activeLinkClassName&&(t=t+" "+e.activeLinkClassName)):t=e.activeLinkClassName),r.default.createElement("li",{className:a},r.default.createElement("a",{onClick:n,role:"button",className:t,href:l,tabIndex:"0","aria-label":o,"aria-current":i,onKeyPress:n},e.page))}},714:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n,l=t(0),r=(n=l)&&n.__esModule?n:{default:n};a.default=function(e){var a=e.breakLabel,t=e.breakClassName||"break";return r.default.createElement("li",{className:t},a)}},716:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(14),o=t.n(r),i=function(e){var a=e.RowClassName,t=e.setSorts,n=e.sortColumn,r=e.title,o=e.width;return l.a.createElement("th",{className:a,width:o},r,l.a.createElement("span",{className:"glyphicon glyphicon-arrow-down pull-right small",role:"button",onClick:t.bind(void 0,n,"ASC")}),l.a.createElement("span",{className:"glyphicon glyphicon-arrow-up pull-right small",role:"button",onClick:t.bind(void 0,n,"DESC")}))};i.defaultProps={RowClassName:""},i.propTypes={setSorts:o.a.func.isRequired,sortColumn:o.a.string.isRequired,title:o.a.string.isRequired,width:o.a.string.isRequired,RowClassName:o.a.string},a.a=i},717:function(e,a,t){"use strict";a.a=function(e){var a=[];for(var t in e)""!==e[t].data&&a.push(e[t]);return a}},720:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(14),o=t.n(r),i=t(703),s=t.n(i),c=t(704),u=t.n(c),d=t(8),m=t.n(d);m.a.locale("nl");var p=function(e){var a=e.className,t=e.value,n=e.onChangeAction,r=e.placeholder,o=t?m()(t).format("L"):"";return l.a.createElement("th",{className:"DayPicker-overflow ".concat(a)},l.a.createElement(s.a,{value:o,onDayChange:n,formatDate:c.formatDate,parseDate:c.parseDate,dayPickerProps:{showWeekNumbers:!0,locale:"nl",firstDayOfWeek:1,localeUtils:u.a},inputProps:{className:"form-control input-sm",placeholder:r},placeholder:""}))};p.defaultProps={className:"",value:null,placeholder:""},p.propTypes={className:o.a.string,value:o.a.oneOfType([o.a.string,o.a.object]),onChangeAction:o.a.func,placeholder:o.a.string},a.a=p},723:function(e,a,t){"use strict";t.d(a,"a",(function(){return n})),t.d(a,"b",(function(){return l}));var n=function(){return{type:"BLOCK_UI"}},l=function(){return{type:"UNBLOCK_UI"}}},780:function(e,a,t){var n=t(838),l=t(839),r=t(840);e.exports=function(e,a){return n(e)||l(e,a)||r()}},838:function(e,a){e.exports=function(e){if(Array.isArray(e))return e}},839:function(e,a){e.exports=function(e,a){var t=[],n=!0,l=!1,r=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(t.push(o.value),!a||t.length!==a);n=!0);}catch(e){l=!0,r=e}finally{try{n||null==i.return||i.return()}finally{if(l)throw r}}return t}},840:function(e,a){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},981:function(e,a,t){"use strict";var n=t(780),l=t.n(n),r=t(0),o=t.n(r),i=t(14),s=t.n(i),c=function(e){return o.a.createElement("select",{disabled:e.readOnly,className:"form-control input-sm",name:"type",value:e.type,onChange:e.handleInputChange},o.a.createElement("option",{value:"eq"},"gelijk aan"),o.a.createElement("option",{value:"neq"},"niet gelijk aan"),o.a.createElement("option",{value:"ct"},"bevat"),o.a.createElement("option",{value:"nct"},"bevat niet"),o.a.createElement("option",{value:"bw"},"begint met"),o.a.createElement("option",{value:"nbw"},"begint niet met"),o.a.createElement("option",{value:"ew"},"eindigt met"),o.a.createElement("option",{value:"new"},"eindigt niet met"),o.a.createElement("option",{value:"nl"},"is leeg"),o.a.createElement("option",{value:"nnl"},"is niet leeg"))},u=function(e){return o.a.createElement("select",{disabled:e.readOnly,className:"form-control input-sm",name:"type",value:e.type,onChange:e.handleInputChange},o.a.createElement("option",{value:"eq"},"gelijk aan"),o.a.createElement("option",{value:"neq"},"niet gelijk aan"),o.a.createElement("option",{value:"lt"},"kleiner dan"),o.a.createElement("option",{value:"lte"},"kleiner of gelijk aan"),o.a.createElement("option",{value:"gt"},"groter dan"),o.a.createElement("option",{value:"gte"},"groter dan of gelijk aan"),o.a.createElement("option",{value:"is0"},"is 0 of leeg"),o.a.createElement("option",{value:"isn0"},"is niet 0 of leeg"))},d=function(e){return o.a.createElement("select",{disabled:e.readOnly,className:"form-control input-sm",name:"type",value:e.type,onChange:e.handleInputChange},o.a.createElement("option",{value:"eq"},"gelijk aan"),o.a.createElement("option",{value:"neq"},"niet gelijk aan"),o.a.createElement("option",{value:"nl"},"is leeg"),o.a.createElement("option",{value:"nnl"},"is niet leeg"))},m=function(e){return o.a.createElement("select",{className:"form-control input-sm",name:"type",value:e.type,onChange:e.handleInputChange},o.a.createElement("option",{value:"eq"},"gelijk aan"),o.a.createElement("option",{value:"neq"},"niet gelijk aan"),o.a.createElement("option",{value:"lt"},"kleiner dan"),o.a.createElement("option",{value:"lte"},"kleiner of gelijk aan"),o.a.createElement("option",{value:"gt"},"groter dan"),o.a.createElement("option",{value:"gte"},"groter dan of gelijk aan"),o.a.createElement("option",{value:"nl"},"is leeg"),o.a.createElement("option",{value:"nnl"},"is niet leeg"))},p=t(8),f=t.n(p),g=t(25),v=t.n(g),h=t(24),b=t.n(h),y=t(26),C=t.n(y),N=t(27),E=t.n(N),k=t(21),P=t.n(k),O=t(28),w=t.n(O),D=t(6),x=t.n(D),L=t(703),R=t.n(L),q=t(704),j=t.n(q);f.a.locale("nl");var _=function(e){function a(e){var t;return v()(this,a),t=C()(this,E()(a).call(this,e)),x()(P()(t),"validateDate",(function(e){f()(e.target.value,"DD-MM-YYYY",!0).isValid()||""===e.target.value?t.setState({errorDateFormat:!1}):t.setState({errorDateFormat:!0})})),x()(P()(t),"onDateChange",(function(e){var a=e?f()(e).format("Y-MM-DD"):"";t.props.onChangeAction(a,t.props.name)})),t.state={errorDateFormat:!1},t}return w()(a,e),b()(a,[{key:"render",value:function(){var e=this.props,a=e.className,t=e.id,n=e.value,l=e.readOnly,r=e.name,i=n?f()(n).format("L"):"";return o.a.createElement("div",{className:"DataTableDateFilter"},o.a.createElement(R.a,{id:t,value:i,formatDate:q.formatDate,parseDate:q.parseDate,onDayChange:this.onDateChange,dayPickerProps:{showWeekNumbers:!0,locale:"nl",firstDayOfWeek:1,localeUtils:j.a},inputProps:{className:"form-control input-sm ".concat(a)+(this.state.errorDateFormat?" has-error":""),name:r,onBlur:this.validateDate},readOnly:l,placeholder:""}))}}]),a}(r.Component);_.defaultProps={className:"",readOnly:!1,value:null},_.propTypes={type:s.a.string,className:s.a.string,id:s.a.string,name:s.a.string,value:s.a.oneOfType([s.a.string,s.a.object]),onChangeAction:s.a.func,readOnly:s.a.bool};var A=_,I=function(e){return o.a.createElement("select",{disabled:e.readOnly,className:"form-control input-sm",name:"type",value:e.type,onChange:e.handleInputChange},o.a.createElement("option",{value:"eq"},"heeft"),o.a.createElement("option",{value:"neq"},"heeft geen"))},T=function(e){return o.a.createElement("select",{disabled:e.readOnly,className:"form-control input-sm",name:"type",value:e.type,onChange:e.handleInputChange},o.a.createElement("option",{value:"rel"},"heeft"),o.a.createElement("option",{value:"nrel"},"heeft geen"),o.a.createElement("option",{value:"eq"},"is"),o.a.createElement("option",{value:"neq"},"is geen"))};f.a.locale("nl");var S=function(e){var a=function(a){var t=a.target,n=t.value,l=t.name;e.handleFilterValueChange(l,n,e.filterNumber)},t=e.fields,n=e.filter.field,r=e.filter.type,i=Object.entries(t).map((function(e,a){var t=l()(e,2),n=t[0],r=t[1];if("dateStart"!==n&&"dateFinish"!==n&&"orderStatus"!==n)return o.a.createElement("option",{key:a,value:n},r.name)})),s="dateStart"==n||"dateFinish"==n||"orderStatus"==n,p=e.fields[e.filter.field].type,f=e.fields[e.filter.field].optionName?e.fields[e.filter.field].optionName:"name";return o.a.createElement("tr",null,o.a.createElement("td",{className:"col-md-4"},s?o.a.createElement("select",{disabled:!0,className:"form-control input-sm",name:"field",value:n},o.a.createElement("option",{key:0,value:n},t[n].name)):o.a.createElement("select",{disabled:e.filter.readOnly,className:"form-control input-sm",name:"field",value:n,onChange:function(a){var t=a.target.value;e.handleFilterFieldChange(t,e.filterNumber)}},i)),o.a.createElement("td",{className:"col-md-3"},"string"===p&&o.a.createElement(c,{handleInputChange:a,type:r,readOnly:e.filter.readOnly}),"number"===p&&o.a.createElement(u,{handleInputChange:a,type:r,readOnly:e.filter.readOnly}),"dropdown"===p&&o.a.createElement(d,{handleInputChange:a,type:r,readOnly:e.filter.readOnly}),"dropdownHas"===p&&o.a.createElement(I,{handleInputChange:a,type:r,readOnly:e.filter.readOnly}),"dropdownRelations"===p&&o.a.createElement(T,{handleInputChange:a,type:r,readOnly:e.filter.readOnly}),"date"===p&&o.a.createElement(m,{handleInputChange:a,type:r,readOnly:e.filter.readOnly})),"nl"!==e.filter.comperator&&"nnl"!==e.filter.comperator&&o.a.createElement("td",{className:"col-md-4"},("number"===p||"string"===p)&&o.a.createElement("input",{className:"form-control input-sm",type:"text",id:"data",name:"data",value:e.filter.data,onChange:a,readOnly:e.filter.readOnly}),("dropdown"===p||"dropdownHas"===p||"dropdownRelations"===p)&&o.a.createElement("select",{className:"form-control input-sm",id:"data",name:"data",value:e.filter.data,onChange:a,disabled:e.filter.readOnly},o.a.createElement("option",null),e.fields[e.filter.field].dropDownOptions.map((function(e){return o.a.createElement("option",{key:e.id,value:e.id},e[f])}))),"date"===p&&o.a.createElement(A,{id:"data",value:e.filter.data,onChangeAction:function(a){e.handleFilterValueChange("data",a,e.filterNumber)},readOnly:e.filter.readOnly})),s||e.filter.readOnly?o.a.createElement("td",null):o.a.createElement("td",{className:"col-md-1"},o.a.createElement("span",{className:"glyphicon glyphicon-trash mybtn-danger",role:"button",onClick:function(){e.deleteFilterRow(e.filterNumber)}})))};S.propTypes={fields:s.a.object.isRequired,filter:s.a.object.isRequired};a.a=S}}]);