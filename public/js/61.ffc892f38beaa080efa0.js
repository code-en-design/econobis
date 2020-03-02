(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{1577:function(e,t,a){"use strict";a.r(t);var n=a(25),s=a.n(n),r=a(24),l=a.n(r),i=a(26),o=a.n(i),c=a(27),u=a.n(c),m=a(21),p=a.n(m),d=a(28),f=a.n(d),h=a(0),g=a.n(h),k=a(33),v=a(15),b=function(e,t,a){return{type:"FETCH_TASKS",filters:e,sorts:t,pagination:a}},E=function(){return{type:"CLEAR_TASKS"}},y=function(e){return{type:"SET_FILTER_TASK_CREATED_AT",createdAt:e}},C=function(e){return{type:"SET_FILTER_TASK_TYPE_ID",typeId:e}},T=function(e){return{type:"SET_FILTER_TASK_NOTE",note:e}},N=function(e){return{type:"SET_FILTER_TASK_CONTACT_FULL_NAME",contactFullName:e}},P=function(e){return{type:"SET_FILTER_TASK_DATE_PLANNED_START",datePlannedStart:e}},S=function(e){return{type:"SET_FILTER_TASK_RESPONSIBLE_NAME",responsibleName:e}},D=function(e){return{type:"SET_FILTER_TASK_ME",me:e}},w=function(){return{type:"CLEAR_FILTER_TASKS"}},_=function(e){return{type:"SET_TASKS_PAGINATION",pagination:e}},F=a(197),A=a.n(F),L=a(6),I=a.n(L),O=a(143),R=a(144),M=a(198),j=a(716),x=a(99),K=Object(k.b)(null,(function(e){return{setTasksSortsFilter:function(t,a){e(function(e,t){return{type:"SET_TASKS_SORTS",field:e,order:t}}(t,a))}}}))((function(e){var t=function(t,a){e.setTasksSortsFilter(t,a),setTimeout((function(){e.fetchTasksData()}),100)};return g.a.createElement("tr",{className:"thead-title"},g.a.createElement(j.a,{sortColumn:"createdAt",title:"Datum",width:"8%",setSorts:t}),g.a.createElement(j.a,{sortColumn:"typeName",title:"Type taak",width:"10%",setSorts:t}),g.a.createElement(j.a,{sortColumn:"note",title:"Taak / notitie",width:"20%",setSorts:t}),g.a.createElement(j.a,{sortColumn:"contactFullName",title:"Contact",width:"17%",setSorts:t}),g.a.createElement(j.a,{sortColumn:"datePlannedStart",title:"Datum afhandelen",width:"8%",setSorts:t}),g.a.createElement(x.a,{title:"Verantwoordelijke",width:"15%"}),g.a.createElement("th",{width:"5%"}))})),B=a(8),q=a.n(B),U=a(719),V=Object(k.b)((function(e){return{filters:e.tasks.filters,taskTypes:e.systemData.taskTypes}}),(function(e){return Object(v.b)({setFilterTaskCreatedAt:y,setFilterTaskTypeId:C,setFilterTaskNote:T,setFilterTaskContactFullName:N,setFilterTaskDatePlannedStart:P,setFilterTaskResponsibleName:S},e)}))((function(e){return g.a.createElement("tr",{className:"thead-filter"},g.a.createElement(U.a,{value:e.filters.createdAt.data&&e.filters.createdAt.data,onChangeAction:function(t){void 0===t?e.setFilterTaskCreatedAt(""):e.setFilterTaskCreatedAt(q()(t).format("Y-MM-DD"))}}),g.a.createElement("th",null,g.a.createElement("select",{className:"form-control input-sm",value:e.filters.typeId.data,onChange:function(t){e.setFilterTaskTypeId(t.target.value),setTimeout((function(){e.onSubmitFilter()}),100)}},g.a.createElement("option",null),e.taskTypes.map((function(e){return g.a.createElement("option",{key:e.id,value:e.id},e.name)})))),g.a.createElement("th",null,g.a.createElement("input",{type:"text",className:"form-control input-sm",value:e.filters.note.data,onChange:function(t){e.setFilterTaskNote(t.target.value)}})),g.a.createElement("th",null,g.a.createElement("input",{type:"text",className:"form-control input-sm",value:e.filters.contactFullName.data,onChange:function(t){e.setFilterTaskContactFullName(t.target.value)}})),g.a.createElement(U.a,{value:e.filters.datePlannedStart.data&&e.filters.datePlannedStart.data,onChangeAction:function(t){void 0===t?e.setFilterTaskDatePlannedStart(""):e.setFilterTaskDatePlannedStart(q()(t).format("Y-MM-DD"))}}),g.a.createElement("th",null,g.a.createElement("input",{type:"text",className:"form-control input-sm",value:e.filters.responsibleName.data,onChange:function(t){e.setFilterTaskResponsibleName(t.target.value)}})),g.a.createElement("th",null))})),W=a(4),G=function(e){function t(e){var a;return s()(this,t),(a=o()(this,u()(t).call(this,e))).state={showActionButtons:!1,highlightRow:""},a.openItem=a.openItem.bind(p()(a)),a.setItemFinished=a.setItemFinished.bind(p()(a)),a}return f()(t,e),l()(t,[{key:"onRowEnter",value:function(){this.setState({showActionButtons:!0,highlightRow:"highlight-row"})}},{key:"onRowLeave",value:function(){this.setState({showActionButtons:!1,highlightRow:""})}},{key:"openItem",value:function(){W.f.push("/taak/".concat(this.props.id))}},{key:"setItemFinished",value:function(){var e={id:this.props.id,finished:!0};this.props.setTaskFinished(e)}},{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.createdAt,s=t.typeName,r=t.noteSummary,l=t.contactFullName,i=t.datePlannedStart,o=t.responsibleName;return g.a.createElement("tr",{className:this.state.highlightRow,onDoubleClick:function(){return e.openItem(a)},onMouseEnter:function(){return e.onRowEnter()},onMouseLeave:function(){return e.onRowLeave()}},g.a.createElement("td",null,q()(n).format("L")),g.a.createElement("td",null,s),g.a.createElement("td",null,r),g.a.createElement("td",null,l),g.a.createElement("td",null,i&&q()(i).format("L")),g.a.createElement("td",null,o),g.a.createElement("td",null,this.state.showActionButtons?g.a.createElement("a",{role:"button",onClick:this.openItem},g.a.createElement("span",{className:"glyphicon glyphicon-pencil mybtn-success"})," "):"",this.state.showActionButtons&&this.props.permissions.manageTask?g.a.createElement("a",{role:"button",onClick:this.props.showDeleteItemModal.bind(this,a,name)},g.a.createElement("span",{className:"glyphicon glyphicon-trash mybtn-danger"})," "):"",this.state.showActionButtons?g.a.createElement("a",{role:"button",onClick:this.setItemFinished},g.a.createElement("span",{className:"glyphicon glyphicon-ok mybtn-success"})," "):""))}}]),t}(h.Component),H=Object(k.b)((function(e){return{permissions:e.meDetails.permissions}}),(function(e){return{setTaskFinished:function(t){e({type:"SET_TASK_FINISHED",task:t})}}}))(G),Y=a(98),J=a(788),z=Object(k.b)(null,(function(e){return{deleteTask:function(t){e(Object(J.a)(t))}}}))((function(e){return g.a.createElement(Y.a,{buttonConfirmText:"Verwijder",buttonClassName:"btn-danger",closeModal:e.closeDeleteItemModal,confirmAction:function(){return e.deleteTask(e.id),void e.closeDeleteItemModal()},title:"Verwijderen"},"Verwijder taak: ",g.a.createElement("strong",null," ",e.name," "))})),Q=a(706);function X(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Z(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?X(Object(a),!0).forEach((function(t){I()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):X(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var $=function(e){function t(e){var a;return s()(this,t),a=o()(this,u()(t).call(this,e)),I()(p()(a),"handleKeyUp",(function(e){13===e.keyCode&&a.props.onSubmitFilter()})),I()(p()(a),"showDeleteItemModal",(function(e,t){a.setState(Z({},a.state,{showDeleteItem:!0,deleteItem:Z({},a.state.deleteItem,{id:e,name:t})}))})),I()(p()(a),"closeDeleteItemModal",(function(){a.setState(Z({},a.state,{showDeleteItem:!1,deleteItem:Z({},a.state.deleteItem,{id:"",name:""})}))})),a.state={showDeleteItem:!1,deleteItem:{id:"",name:""}},a}return f()(t,e),l()(t,[{key:"render",value:function(){var e=this,t=this.props.tasks,a=t.data,n=void 0===a?[]:a,s=t.meta,r=void 0===s?{}:s,l="",i=!0;return this.props.hasError?l="Fout bij het ophalen van taken.":this.props.isLoading?l="Gegevens aan het laden.":0===n.length?l="Geen taken gevonden!":i=!1,g.a.createElement("div",null,g.a.createElement("form",{onKeyUp:this.handleKeyUp},g.a.createElement(O.a,null,g.a.createElement(R.a,null,g.a.createElement(K,{fetchTasksData:function(){return e.props.fetchTasksData()}}),g.a.createElement(V,{onSubmitFilter:this.props.onSubmitFilter})),g.a.createElement(M.a,null,i?g.a.createElement("tr",null,g.a.createElement("td",{colSpan:7},l)):n.map((function(t){return g.a.createElement(H,A()({key:t.id},t,{showDeleteItemModal:e.showDeleteItemModal}))})))),g.a.createElement("div",{className:"col-md-6 col-md-offset-3"},g.a.createElement(Q.a,{onPageChangeAction:this.props.handlePageClick,totalRecords:r.total,initialPage:this.props.tasksPagination.page}))),this.state.showDeleteItem&&g.a.createElement(z,A()({closeDeleteItemModal:this.closeDeleteItemModal},this.state.deleteItem)))}}]),t}(h.Component),ee=Object(k.b)((function(e){return{isLoading:e.loadingData.isLoading,hasError:e.loadingData.hasError}}))($),te=a(684),ae=Object(k.b)((function(e){return{permissions:e.meDetails.permissions,tasks:e.tasks.list}}),null)((function(e){var t=e.permissions,a=void 0===t?{}:t,n=e.tasks.meta,s=void 0===n?{}:n;return g.a.createElement("div",{className:"row"},g.a.createElement("div",{className:"col-md-4"},g.a.createElement("div",{className:"btn-group",role:"group"},g.a.createElement(te.a,{iconName:"glyphicon-refresh",onClickAction:e.resetTaskFilters}),a.manageTask&&g.a.createElement(te.a,{iconName:"glyphicon-plus",onClickAction:function(){W.f.push("taak/nieuw")}}))),g.a.createElement("div",{className:"col-md-4"},g.a.createElement("h3",{className:"text-center table-title"},e.me?"Eigen taken":"Taken")),g.a.createElement("div",{className:"col-md-4"},g.a.createElement("div",{className:"pull-right"},"Resultaten: ",s.total||0)))})),ne=a(715),se=a(681),re=a(682),le=a(196),ie=function(e){function t(e){var a;return s()(this,t),a=o()(this,u()(t).call(this,e)),Object(le.isEmpty)(e.params)?a.props.clearFilterTask():"eigen"===e.params.type&&a.props.setFilterTaskMe(!0),a.fetchTasksData=a.fetchTasksData.bind(p()(a)),a.resetTaskFilters=a.resetTaskFilters.bind(p()(a)),a.handlePageClick=a.handlePageClick.bind(p()(a)),a}return f()(t,e),l()(t,[{key:"componentDidMount",value:function(){this.fetchTasksData()}},{key:"componentWillUnmount",value:function(){this.props.clearTasks()}},{key:"componentWillReceiveProps",value:function(e){var t=this;this.props.params.type!==e.params.type&&(Object(le.isEmpty)(e.params)?this.props.clearFilterTask():"eigen"===e.params.type&&this.props.setFilterTaskMe(!0),setTimeout((function(){t.fetchTasksData()}),100))}},{key:"fetchTasksData",value:function(){var e=this;setTimeout((function(){var t=Object(ne.a)(e.props.tasksFilters),a=e.props.tasksSorts,n={limit:20,offset:e.props.tasksPagination.offset};e.props.fetchTasks(t,a,n)}),100)}},{key:"resetTaskFilters",value:function(){this.props.clearFilterTask(),this.fetchTasksData()}},{key:"onSubmitFilter",value:function(){this.props.clearTasks(),this.props.setTasksPagination({page:0,offset:0}),this.fetchTasksData()}},{key:"handlePageClick",value:function(e){var t=e.selected,a=Math.ceil(20*t);this.props.setTasksPagination({page:t,offset:a}),this.fetchTasksData()}},{key:"render",value:function(){var e=this,t=!1;return"eigen"==this.props.params.type&&(t=!0),g.a.createElement(se.a,null,g.a.createElement(re.a,null,g.a.createElement("div",{className:"col-md-12 margin-10-top"},g.a.createElement(ae,{resetTaskFilters:function(){return e.resetTaskFilters()},me:t})),g.a.createElement("div",{className:"col-md-12 margin-10-top"},g.a.createElement(ee,{tasks:this.props.tasks,tasksPagination:this.props.tasksPagination,onSubmitFilter:function(){return e.onSubmitFilter()},fetchTasksData:function(){return e.fetchTasksData()},handlePageClick:this.handlePageClick}))))}}]),t}(h.Component);t.default=Object(k.b)((function(e){return{tasks:e.tasks.list,tasksFilters:e.tasks.filters,tasksSorts:e.tasks.sorts,tasksPagination:e.tasks.pagination}}),(function(e){return Object(v.b)({fetchTasks:b,clearTasks:E,clearFilterTask:w,setTasksPagination:_,setFilterTaskMe:D},e)}))(ie)},681:function(e,t,a){"use strict";var n=a(0),s=a.n(n),r=a(14),l=a.n(r),i=function(e){var t=e.children,a=e.className,n=e.onMouseEnter,r=e.onMouseLeave;return s.a.createElement("div",{className:"panel panel-default ".concat(a),onMouseEnter:n,onMouseLeave:r},t)};i.defaultProps={className:"",onMouseEnter:function(){},onMouseLeave:function(){}},i.propTypes={className:l.a.string,onMouseEnter:l.a.func,onMouseLeave:l.a.func},t.a=i},682:function(e,t,a){"use strict";var n=a(0),s=a.n(n),r=a(14),l=a.n(r),i=function(e){var t=e.className,a=e.children;return s.a.createElement("div",{className:"panel-body ".concat(t)},a)};i.defaultProps={className:""},i.propTypes={className:l.a.string},t.a=i},684:function(e,t,a){"use strict";var n=a(0),s=a.n(n),r=a(14),l=a.n(r),i=function(e){var t=e.buttonClassName,a=e.iconName,n=e.onClickAction,r=e.title,l=e.disabled;return s.a.createElement("button",{type:"button",className:"btn ".concat(t),onClick:n,disabled:l,title:r},s.a.createElement("span",{className:"glyphicon ".concat(a)}))};i.defaultProps={buttonClassName:"btn-success btn-sm",title:"",disabled:!1},i.propTypes={buttonClassName:l.a.string,iconName:l.a.string.isRequired,onClickAction:l.a.func,title:l.a.string,disabled:l.a.bool},t.a=i},706:function(e,t,a){"use strict";var n=a(0),s=a.n(n),r=a(14),l=a.n(r),i=a(711),o=a.n(i),c=function(e){var t=e.onPageChangeAction,a=e.initialPage,n=e.recordsPerPage,r=e.totalRecords;return s.a.createElement(o.a,{onPageChange:t,pageCount:Math.ceil(r/n)||1,pageRangeDisplayed:5,marginPagesDisplayed:2,breakLabel:s.a.createElement("a",null,"..."),breakClassName:"break-me",containerClassName:"pagination",activeClassName:"active",previousLabel:s.a.createElement("span",{"aria-hidden":"true"},"«"),nextLabel:s.a.createElement("span",{"aria-hidden":"true"},"»"),initialPage:a||0,forcePage:a,disableInitialCallback:!0})};c.defaultProps={recordsPerPage:20},c.propTypes={initialPage:l.a.number.isRequired,recordsPerPage:l.a.number,totalRecords:l.a.number,onPageChangeAction:l.a.func.isRequired},t.a=c},711:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,s=a(712),r=(n=s)&&n.__esModule?n:{default:n};t.default=r.default},712:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=a(0),r=c(s),l=c(a(14)),i=c(a(713)),o=c(a(714));function c(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handlePreviousPage=function(e){var t=a.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,t>0&&a.handlePageSelected(t-1,e)},a.handleNextPage=function(e){var t=a.state.selected,n=a.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,t<n-1&&a.handlePageSelected(t+1,e)},a.handlePageSelected=function(e,t){t.preventDefault?t.preventDefault():t.returnValue=!1,a.state.selected!==e&&(a.setState({selected:e}),a.callCallback(e))},a.callCallback=function(e){void 0!==a.props.onPageChange&&"function"==typeof a.props.onPageChange&&a.props.onPageChange({selected:e})},a.pagination=function(){var e=[],t=a.props,n=t.pageRangeDisplayed,s=t.pageCount,l=t.marginPagesDisplayed,i=t.breakLabel,c=t.breakClassName,u=a.state.selected;if(s<=n)for(var m=0;m<s;m++)e.push(a.getPageElement(m));else{var p=n/2,d=n-p;u>s-n/2?p=n-(d=s-u):u<n/2&&(d=n-(p=u));var f=void 0,h=void 0,g=void 0,k=function(e){return a.getPageElement(e)};for(f=0;f<s;f++)(h=f+1)<=l||h>s-l||f>=u-p&&f<=u+d?e.push(k(f)):i&&e[e.length-1]!==g&&(g=r.default.createElement(o.default,{key:f,breakLabel:i,breakClassName:c}),e.push(g))}return e},a.state={selected:e.initialPage?e.initialPage:e.forcePage?e.forcePage:0},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,a=e.disableInitialCallback;void 0===t||a||this.callCallback(t)}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:e.forcePage})}},{key:"hrefBuilder",value:function(e){var t=this.props,a=t.hrefBuilder,n=t.pageCount;if(a&&e!==this.state.selected&&e>=0&&e<n)return a(e+1)}},{key:"getPageElement",value:function(e){var t=this.state.selected,a=this.props,n=a.pageClassName,s=a.pageLinkClassName,l=a.activeClassName,o=a.activeLinkClassName,c=a.extraAriaContext;return r.default.createElement(i.default,{key:e,onClick:this.handlePageSelected.bind(null,e),selected:t===e,pageClassName:n,pageLinkClassName:s,activeClassName:l,activeLinkClassName:o,extraAriaContext:c,href:this.hrefBuilder(e),page:e+1})}},{key:"render",value:function(){var e=this.props,t=e.disabledClassName,a=e.previousClassName,n=e.nextClassName,s=e.pageCount,l=e.containerClassName,i=e.previousLinkClassName,o=e.previousLabel,c=e.nextLinkClassName,u=e.nextLabel,m=this.state.selected,p=a+(0===m?" "+t:""),d=n+(m===s-1?" "+t:"");return r.default.createElement("ul",{className:l},r.default.createElement("li",{className:p},r.default.createElement("a",{onClick:this.handlePreviousPage,className:i,href:this.hrefBuilder(m-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage},o)),this.pagination(),r.default.createElement("li",{className:d},r.default.createElement("a",{onClick:this.handleNextPage,className:c,href:this.hrefBuilder(m+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage},u)))}}]),t}(s.Component);u.propTypes={pageCount:l.default.number.isRequired,pageRangeDisplayed:l.default.number.isRequired,marginPagesDisplayed:l.default.number.isRequired,previousLabel:l.default.node,nextLabel:l.default.node,breakLabel:l.default.node,hrefBuilder:l.default.func,onPageChange:l.default.func,initialPage:l.default.number,forcePage:l.default.number,disableInitialCallback:l.default.bool,containerClassName:l.default.string,pageClassName:l.default.string,pageLinkClassName:l.default.string,activeClassName:l.default.string,activeLinkClassName:l.default.string,previousClassName:l.default.string,nextClassName:l.default.string,previousLinkClassName:l.default.string,nextLinkClassName:l.default.string,disabledClassName:l.default.string,breakClassName:l.default.string},u.defaultProps={pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousClassName:"previous",nextClassName:"next",previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1},t.default=u},713:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,s=a(0),r=(n=s)&&n.__esModule?n:{default:n};t.default=function(e){var t=e.pageClassName,a=e.pageLinkClassName,n=e.onClick,s=e.href,l="Page "+e.page+(e.extraAriaContext?" "+e.extraAriaContext:""),i=null;return e.selected&&(i="page",l="Page "+e.page+" is your current page",t=void 0!==t?t+" "+e.activeClassName:e.activeClassName,void 0!==a?(a=a,void 0!==e.activeLinkClassName&&(a=a+" "+e.activeLinkClassName)):a=e.activeLinkClassName),r.default.createElement("li",{className:t},r.default.createElement("a",{onClick:n,role:"button",className:a,href:s,tabIndex:"0","aria-label":l,"aria-current":i,onKeyPress:n},e.page))}},714:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,s=a(0),r=(n=s)&&n.__esModule?n:{default:n};t.default=function(e){var t=e.breakLabel,a=e.breakClassName||"break";return r.default.createElement("li",{className:a},t)}},715:function(e,t,a){"use strict";t.a=function(e){var t=[];for(var a in e)""!==e[a].data&&t.push(e[a]);return t}},716:function(e,t,a){"use strict";var n=a(0),s=a.n(n),r=a(14),l=a.n(r),i=function(e){var t=e.RowClassName,a=e.setSorts,n=e.sortColumn,r=e.title,l=e.width;return s.a.createElement("th",{className:t,width:l},r,s.a.createElement("span",{className:"glyphicon glyphicon-arrow-down pull-right small",role:"button",onClick:a.bind(void 0,n,"ASC")}),s.a.createElement("span",{className:"glyphicon glyphicon-arrow-up pull-right small",role:"button",onClick:a.bind(void 0,n,"DESC")}))};i.defaultProps={RowClassName:""},i.propTypes={setSorts:l.a.func.isRequired,sortColumn:l.a.string.isRequired,title:l.a.string.isRequired,width:l.a.string.isRequired,RowClassName:l.a.string},t.a=i},719:function(e,t,a){"use strict";var n=a(0),s=a.n(n),r=a(14),l=a.n(r),i=a(702),o=a.n(i),c=a(703),u=a.n(c),m=a(8),p=a.n(m);p.a.locale("nl");var d=function(e){var t=e.className,a=e.value,n=e.onChangeAction,r=e.placeholder,l=a?p()(a).format("L"):"";return s.a.createElement("th",{className:"DayPicker-overflow ".concat(t)},s.a.createElement(o.a,{value:l,onDayChange:n,formatDate:c.formatDate,parseDate:c.parseDate,dayPickerProps:{showWeekNumbers:!0,locale:"nl",firstDayOfWeek:1,localeUtils:u.a},inputProps:{className:"form-control input-sm",placeholder:r},placeholder:""}))};d.defaultProps={className:"",value:null,placeholder:""},d.propTypes={className:l.a.string,value:l.a.oneOfType([l.a.string,l.a.object]),onChangeAction:l.a.func,placeholder:l.a.string},t.a=d},788:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return r}));var n=function(e){return{type:"FETCH_TASK_DETAILS",id:e}},s=function(e){return{type:"UPDATE_TASK_DETAILS",task:e}},r=function(e){return{type:"DELETE_TASK",id:e}}}}]);