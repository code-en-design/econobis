(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{1605:function(e,t,a){"use strict";a.r(t);var n=a(197),r=a.n(n),l=a(10),o=a.n(l),s=a(6),i=a.n(s),c=a(780),u=a.n(c),d=a(0),f=a.n(d),p=a(8),m=a.n(p);var g=function(e){var t=e.createdAt,a=e.value,n=e.jobCategoryName;return f.a.createElement("tr",{className:"border"},f.a.createElement("td",null,m()(t).format("l LTS")),f.a.createElement("td",null,n),f.a.createElement("td",null,a))},v=a(12);function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){i()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var C=function(e,t,a){return v.a.get("jory/jobs-log",{params:{jory:h({fld:["id","value","userId","createdAt","updatedAt","jobCategoryId","jobCategoryName"],srt:t,flt:e},a),meta:["total"]}})},y=a(682),N=a(683),P=a(4),E=a(685);var k=function(e){var t=e.countTotal,a=e.reloadJobslogs;return f.a.createElement("div",{className:"row"},f.a.createElement("div",{className:"col-md-4"},f.a.createElement("div",{className:"btn-group",role:"group"},f.a.createElement(E.a,{iconName:"glyphicon-arrow-left",onClickAction:P.e.goBack}),f.a.createElement(E.a,{iconName:"glyphicon-refresh",onClickAction:a}))),f.a.createElement("div",{className:"col-md-4"},f.a.createElement("h3",{className:"text-center table-title"},"Processen logs")),f.a.createElement("div",{className:"col-md-4"},f.a.createElement("div",{className:"pull-right"},"Resultaten: ",t||0)))},O=a(707),j=a(145),w=a(144),D=a(716),L=a(199),x=a(720),A=[{code:"email",name:"Email"},{code:"participant",name:"Deelnemer rapportage"},{code:"revenue",name:"Opbrengst rapportage"},{code:"create-invoice",name:"Maken facturen"},{code:"create-payment-invoice",name:"Maken uitkeringsnota's"},{code:"sent-invoice",name:"Versturen nota"}];var S=function(e){var t=e.filter,a=e.handleChangeFilter;return f.a.createElement("tr",{className:"thead-filter"},f.a.createElement(x.a,{value:t.createdAt?t.createdAt:null,onChangeAction:function(e){return a("createdAt",e?m()(e).format("YYYY-MM-DD"):null)}}),f.a.createElement("th",null,f.a.createElement("select",{className:"form-control input-sm",value:t.jobCategoryId,onChange:function(e){return a("jobCategoryId",e.target.value)}},f.a.createElement("option",null),A.map((function(e){return f.a.createElement("option",{key:e.code,value:e.code},e.name)})))),f.a.createElement("th",null,f.a.createElement("input",{type:"text",className:"form-control input-sm",value:t.value,onChange:function(e){return a("value",e.target.value)}})))};var M=function(e){var t=Object(d.useState)(!1),a=u()(t,2),n=a[0],r=a[1];function l(t){t.key===e&&r(!0)}function o(t){t.key===e&&r(!1)}return Object(d.useEffect)((function(){return window.addEventListener("keydown",l),window.addEventListener("keyup",o),function(){window.removeEventListener("keydown",l),window.removeEventListener("keyup",o)}}),[]),n};function _(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function R(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_(Object(a),!0).forEach((function(t){i()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var I={createdAt:m()().format("YYYY-MM-DD"),value:"",jobCategoryId:null};t.default=function(){var e=Object(d.useState)([]),t=u()(e,2),a=t[0],n=t[1],l=Object(d.useState)(!0),s=u()(l,2),c=s[0],p=s[1],v=Object(d.useState)({total:0}),b=u()(v,2),h=b[0],P=b[1],E=Object(d.useState)(I),x=u()(E,2),A=x[0],_=x[1],T=Object(d.useState)(["-createdAt","-id"]),Y=u()(T,2),q=Y[0],B=Y[1],J=Object(d.useState)({offset:0,limit:20}),V=u()(J,2),K=V[0],W=V[1],F=M("Enter");function z(){p(!0),C(function(){var e={and:[]};A.createdAt&&e.and.push({field:"createdAt",operator:"like",data:"".concat(m()(A.createdAt).format("YYYY-MM-DD"),"%")});A.value&&e.and.push({field:"value",operator:"like",data:"%".concat(A.value,"%")});A.jobCategoryId&&e.and.push({field:"jobCategoryId",data:A.jobCategoryId});return e}(),q,K).then((function(e){n(e.data.data),P(e.data.meta),p(!1)})).catch((function(e){alert("Er is iets misgegaan met ophalen van de gegevens.")}))}function G(e,t){var a=q;3===a.length&&a.pop(),B("DESC"===t?["-".concat(e)].concat(o()(a)):[e].concat(o()(a)))}return(Object(d.useEffect)((function(){z()}),[K.offset,q,A.createdAt,A.jobCategoryId]),Object(d.useEffect)((function(){F&&z()}),[F]),f.a.createElement(y.a,null,f.a.createElement(N.a,null,f.a.createElement(k,{countTotal:h.total,reloadJobslogs:function(){_(I),z()}}),f.a.createElement("div",{className:"margin-10-top"},f.a.createElement(w.a,null,f.a.createElement(j.a,null,f.a.createElement("tr",{className:"thead-title"},f.a.createElement(D.a,{title:"Datum",width:"20%",setSorts:G,sortColumn:"createdAt"}),f.a.createElement(D.a,{title:"Categorie",width:"20%",setSorts:G,sortColumn:"jobCategoryId"}),f.a.createElement(D.a,{title:"Melding",width:"60%",setSorts:G,sortColumn:"value"})),f.a.createElement(S,{filter:A,handleChangeFilter:function(e,t){_(R({},A,i()({},e,t)))}})),f.a.createElement(L.a,null,c?f.a.createElement("tr",null,f.a.createElement("td",{colSpan:3},"Bezig met gegevens laden")):a.length>0?a.map((function(e){return f.a.createElement(g,r()({key:e.id},e))})):f.a.createElement("tr",null,f.a.createElement("td",{colSpan:3},"Geen resultaten!")))),f.a.createElement("div",{className:"col-md-6 col-md-offset-3"},f.a.createElement(O.a,{onPageChangeAction:function(e){var t=Math.ceil(20*e.selected);W(R({},K,{offset:t}))},totalRecords:h.total,initialPage:0}))))))}},682:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(14),o=a.n(l),s=function(e){var t=e.children,a=e.className,n=e.onMouseEnter,l=e.onMouseLeave;return r.a.createElement("div",{className:"panel panel-default ".concat(a),onMouseEnter:n,onMouseLeave:l},t)};s.defaultProps={className:"",onMouseEnter:function(){},onMouseLeave:function(){}},s.propTypes={className:o.a.string,onMouseEnter:o.a.func,onMouseLeave:o.a.func},t.a=s},683:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(14),o=a.n(l),s=function(e){var t=e.className,a=e.children;return r.a.createElement("div",{className:"panel-body ".concat(t)},a)};s.defaultProps={className:""},s.propTypes={className:o.a.string},t.a=s},685:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(14),o=a.n(l),s=function(e){var t=e.buttonClassName,a=e.iconName,n=e.onClickAction,l=e.title,o=e.disabled;return r.a.createElement("button",{type:"button",className:"btn ".concat(t),onClick:n,disabled:o,title:l},r.a.createElement("span",{className:"glyphicon ".concat(a)}))};s.defaultProps={buttonClassName:"btn-success btn-sm",title:"",disabled:!1},s.propTypes={buttonClassName:o.a.string,iconName:o.a.string.isRequired,onClickAction:o.a.func,title:o.a.string,disabled:o.a.bool},t.a=s},707:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(14),o=a.n(l),s=a(711),i=a.n(s),c=function(e){var t=e.onPageChangeAction,a=e.initialPage,n=e.recordsPerPage,l=e.totalRecords;return r.a.createElement(i.a,{onPageChange:t,pageCount:Math.ceil(l/n)||1,pageRangeDisplayed:5,marginPagesDisplayed:2,breakLabel:r.a.createElement("a",null,"..."),breakClassName:"break-me",containerClassName:"pagination",activeClassName:"active",previousLabel:r.a.createElement("span",{"aria-hidden":"true"},"«"),nextLabel:r.a.createElement("span",{"aria-hidden":"true"},"»"),initialPage:a||0,forcePage:a,disableInitialCallback:!0})};c.defaultProps={recordsPerPage:20},c.propTypes={initialPage:o.a.number.isRequired,recordsPerPage:o.a.number,totalRecords:o.a.number,onPageChangeAction:o.a.func.isRequired},t.a=c},711:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(712),l=(n=r)&&n.__esModule?n:{default:n};t.default=l.default},712:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=a(0),l=c(r),o=c(a(14)),s=c(a(713)),i=c(a(714));function c(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handlePreviousPage=function(e){var t=a.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,t>0&&a.handlePageSelected(t-1,e)},a.handleNextPage=function(e){var t=a.state.selected,n=a.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,t<n-1&&a.handlePageSelected(t+1,e)},a.handlePageSelected=function(e,t){t.preventDefault?t.preventDefault():t.returnValue=!1,a.state.selected!==e&&(a.setState({selected:e}),a.callCallback(e))},a.callCallback=function(e){void 0!==a.props.onPageChange&&"function"==typeof a.props.onPageChange&&a.props.onPageChange({selected:e})},a.pagination=function(){var e=[],t=a.props,n=t.pageRangeDisplayed,r=t.pageCount,o=t.marginPagesDisplayed,s=t.breakLabel,c=t.breakClassName,u=a.state.selected;if(r<=n)for(var d=0;d<r;d++)e.push(a.getPageElement(d));else{var f=n/2,p=n-f;u>r-n/2?f=n-(p=r-u):u<n/2&&(p=n-(f=u));var m=void 0,g=void 0,v=void 0,b=function(e){return a.getPageElement(e)};for(m=0;m<r;m++)(g=m+1)<=o||g>r-o||m>=u-f&&m<=u+p?e.push(b(m)):s&&e[e.length-1]!==v&&(v=l.default.createElement(i.default,{key:m,breakLabel:s,breakClassName:c}),e.push(v))}return e},a.state={selected:e.initialPage?e.initialPage:e.forcePage?e.forcePage:0},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,a=e.disableInitialCallback;void 0===t||a||this.callCallback(t)}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:e.forcePage})}},{key:"hrefBuilder",value:function(e){var t=this.props,a=t.hrefBuilder,n=t.pageCount;if(a&&e!==this.state.selected&&e>=0&&e<n)return a(e+1)}},{key:"getPageElement",value:function(e){var t=this.state.selected,a=this.props,n=a.pageClassName,r=a.pageLinkClassName,o=a.activeClassName,i=a.activeLinkClassName,c=a.extraAriaContext;return l.default.createElement(s.default,{key:e,onClick:this.handlePageSelected.bind(null,e),selected:t===e,pageClassName:n,pageLinkClassName:r,activeClassName:o,activeLinkClassName:i,extraAriaContext:c,href:this.hrefBuilder(e),page:e+1})}},{key:"render",value:function(){var e=this.props,t=e.disabledClassName,a=e.previousClassName,n=e.nextClassName,r=e.pageCount,o=e.containerClassName,s=e.previousLinkClassName,i=e.previousLabel,c=e.nextLinkClassName,u=e.nextLabel,d=this.state.selected,f=a+(0===d?" "+t:""),p=n+(d===r-1?" "+t:"");return l.default.createElement("ul",{className:o},l.default.createElement("li",{className:f},l.default.createElement("a",{onClick:this.handlePreviousPage,className:s,href:this.hrefBuilder(d-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage},i)),this.pagination(),l.default.createElement("li",{className:p},l.default.createElement("a",{onClick:this.handleNextPage,className:c,href:this.hrefBuilder(d+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage},u)))}}]),t}(r.Component);u.propTypes={pageCount:o.default.number.isRequired,pageRangeDisplayed:o.default.number.isRequired,marginPagesDisplayed:o.default.number.isRequired,previousLabel:o.default.node,nextLabel:o.default.node,breakLabel:o.default.node,hrefBuilder:o.default.func,onPageChange:o.default.func,initialPage:o.default.number,forcePage:o.default.number,disableInitialCallback:o.default.bool,containerClassName:o.default.string,pageClassName:o.default.string,pageLinkClassName:o.default.string,activeClassName:o.default.string,activeLinkClassName:o.default.string,previousClassName:o.default.string,nextClassName:o.default.string,previousLinkClassName:o.default.string,nextLinkClassName:o.default.string,disabledClassName:o.default.string,breakClassName:o.default.string},u.defaultProps={pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousClassName:"previous",nextClassName:"next",previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1},t.default=u},713:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),l=(n=r)&&n.__esModule?n:{default:n};t.default=function(e){var t=e.pageClassName,a=e.pageLinkClassName,n=e.onClick,r=e.href,o="Page "+e.page+(e.extraAriaContext?" "+e.extraAriaContext:""),s=null;return e.selected&&(s="page",o="Page "+e.page+" is your current page",t=void 0!==t?t+" "+e.activeClassName:e.activeClassName,void 0!==a?(a=a,void 0!==e.activeLinkClassName&&(a=a+" "+e.activeLinkClassName)):a=e.activeLinkClassName),l.default.createElement("li",{className:t},l.default.createElement("a",{onClick:n,role:"button",className:a,href:r,tabIndex:"0","aria-label":o,"aria-current":s,onKeyPress:n},e.page))}},714:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),l=(n=r)&&n.__esModule?n:{default:n};t.default=function(e){var t=e.breakLabel,a=e.breakClassName||"break";return l.default.createElement("li",{className:a},t)}},716:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(14),o=a.n(l),s=function(e){var t=e.RowClassName,a=e.setSorts,n=e.sortColumn,l=e.title,o=e.width;return r.a.createElement("th",{className:t,width:o},l,r.a.createElement("span",{className:"glyphicon glyphicon-arrow-down pull-right small",role:"button",onClick:a.bind(void 0,n,"ASC")}),r.a.createElement("span",{className:"glyphicon glyphicon-arrow-up pull-right small",role:"button",onClick:a.bind(void 0,n,"DESC")}))};s.defaultProps={RowClassName:""},s.propTypes={setSorts:o.a.func.isRequired,sortColumn:o.a.string.isRequired,title:o.a.string.isRequired,width:o.a.string.isRequired,RowClassName:o.a.string},t.a=s},720:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(14),o=a.n(l),s=a(703),i=a.n(s),c=a(704),u=a.n(c),d=a(8),f=a.n(d);f.a.locale("nl");var p=function(e){var t=e.className,a=e.value,n=e.onChangeAction,l=e.placeholder,o=a?f()(a).format("L"):"";return r.a.createElement("th",{className:"DayPicker-overflow ".concat(t)},r.a.createElement(i.a,{value:o,onDayChange:n,formatDate:c.formatDate,parseDate:c.parseDate,dayPickerProps:{showWeekNumbers:!0,locale:"nl",firstDayOfWeek:1,localeUtils:u.a},inputProps:{className:"form-control input-sm",placeholder:l},placeholder:""}))};p.defaultProps={className:"",value:null,placeholder:""},p.propTypes={className:o.a.string,value:o.a.oneOfType([o.a.string,o.a.object]),onChangeAction:o.a.func,placeholder:o.a.string},t.a=p},780:function(e,t,a){var n=a(838),r=a(839),l=a(840);e.exports=function(e,t){return n(e)||r(e,t)||l()}},838:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},839:function(e,t){e.exports=function(e,t){var a=[],n=!0,r=!1,l=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw l}}return a}},840:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}}}]);