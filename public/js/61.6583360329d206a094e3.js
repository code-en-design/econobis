(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{1579:function(e,t,a){"use strict";a.r(t);var n=a(25),r=a.n(n),l=a(24),s=a.n(l),o=a(26),i=a.n(o),c=a(27),u=a.n(c),m=a(21),d=a.n(m),p=a(28),f=a.n(p),h=a(0),g=a.n(h),N=a(33),v=a(15),b=function(e,t,a){return{type:"FETCH_NOTES",filters:e,sorts:t,pagination:a}},E=function(){return{type:"CLEAR_NOTES"}},C=function(e){return{type:"SET_FILTER_NOTE_CREATED_AT",createdAt:e}},y=function(e){return{type:"SET_FILTER_NOTE_TYPE_ID",typeId:e}},P=function(e){return{type:"SET_FILTER_NOTE_NOTE",note:e}},k=function(e){return{type:"SET_FILTER_NOTE_CONTACT_FULL_NAME",contactFullName:e}},D=function(e){return{type:"SET_FILTER_NOTE_DATE_PLANNED_START",datePlannedStart:e}},T=function(e){return{type:"SET_FILTER_NOTE_RESPONSIBLE_NAME",responsibleName:e}},S=function(){return{type:"CLEAR_FILTER_NOTES"}},w=function(e){return{type:"SET_NOTES_PAGINATION",pagination:e}},_=a(197),O=a.n(_),L=a(6),F=a.n(L),A=a(144),I=a(145),R=a(199),j=a(716),M=Object(N.b)(null,(function(e){return{setNotesSortsFilter:function(t,a){e(function(e,t){return{type:"SET_NOTES_SORTS",field:e,order:t}}(t,a))}}}))((function(e){var t=function(t,a){e.setNotesSortsFilter(t,a),setTimeout((function(){e.fetchNotesData()}),100)};return g.a.createElement("tr",{className:"thead-title"},g.a.createElement(j.a,{sortColumn:"createdAt",title:"Datum",width:"8%",setSorts:t}),g.a.createElement(j.a,{sortColumn:"typeName",title:"Type taak",width:"10%",setSorts:t}),g.a.createElement(j.a,{sortColumn:"note",title:"Taak / notitie",width:"20%",setSorts:t}),g.a.createElement(j.a,{sortColumn:"contactFullName",title:"Contact",width:"17%",setSorts:t}),g.a.createElement(j.a,{sortColumn:"datePlannedStart",title:"Datum afhandelen",width:"8%",setSorts:t}),g.a.createElement(j.a,{sortColumn:"responsibleName",title:"Verantwoordelijke",width:"15%",setSorts:t}),g.a.createElement("th",{width:"5%"}))})),x=a(8),B=a.n(x),q=a(720),K=Object(N.b)((function(e){return{filters:e.notes.filters,taskTypes:e.systemData.taskTypes}}),(function(e){return Object(v.b)({setFilterNoteCreatedAt:C,setFilterNoteTypeId:y,setFilterNoteNote:P,setFilterNoteContactFullName:k,setFilterNoteDatePlannedStart:D,setFilterNoteResponsibleName:T},e)}))((function(e){return g.a.createElement("tr",{className:"thead-filter"},g.a.createElement(q.a,{value:e.filters.createdAt.data&&e.filters.createdAt.data,onChangeAction:function(t){void 0===t?e.setFilterNoteCreatedAt(""):e.setFilterNoteCreatedAt(B()(t).format("Y-MM-DD"))}}),g.a.createElement("th",null,g.a.createElement("select",{className:"form-control input-sm",value:e.filters.typeId.data,onChange:function(t){e.setFilterNoteTypeId(t.target.value),setTimeout((function(){e.onSubmitFilter()}),100)}},g.a.createElement("option",null),e.taskTypes.map((function(e){return g.a.createElement("option",{key:e.id,value:e.id},e.name)})))),g.a.createElement("th",null,g.a.createElement("input",{type:"text",className:"form-control input-sm",value:e.filters.note.data,onChange:function(t){e.setFilterNoteNote(t.target.value)}})),g.a.createElement("th",null,g.a.createElement("input",{type:"text",className:"form-control input-sm",value:e.filters.contactFullName.data,onChange:function(t){e.setFilterNoteContactFullName(t.target.value)}})),g.a.createElement(q.a,{value:e.filters.datePlannedStart.data&&e.filters.datePlannedStart.data,onChangeAction:function(t){void 0===t?e.setFilterNoteDatePlannedStart(""):e.setFilterNoteDatePlannedStart(B()(t).format("Y-MM-DD"))}}),g.a.createElement("th",null,g.a.createElement("input",{type:"text",className:"form-control input-sm",value:e.filters.responsibleName.data,onChange:function(t){e.setFilterNoteResponsibleName(t.target.value)}})),g.a.createElement("th",null))})),U=a(4),V=function(e){function t(e){var a;return r()(this,t),(a=i()(this,u()(t).call(this,e))).state={showActionButtons:!1,highlightRow:""},a.openItem=a.openItem.bind(d()(a)),a}return f()(t,e),s()(t,[{key:"onRowEnter",value:function(){this.setState({showActionButtons:!0,highlightRow:"highlight-row"})}},{key:"onRowLeave",value:function(){this.setState({showActionButtons:!1,highlightRow:""})}},{key:"openItem",value:function(){U.f.push("/taak/".concat(this.props.id))}},{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.createdAt,r=t.typeName,l=t.noteSummary,s=t.contactFullName,o=t.datePlannedStart,i=t.responsibleName;return g.a.createElement("tr",{className:this.state.highlightRow,onDoubleClick:function(){return e.openItem(a)},onMouseEnter:function(){return e.onRowEnter()},onMouseLeave:function(){return e.onRowLeave()}},g.a.createElement("td",null,B()(n).format("L")),g.a.createElement("td",null,r),g.a.createElement("td",null,l),g.a.createElement("td",null,s),g.a.createElement("td",null,o&&B()(o).format("L")),g.a.createElement("td",null,i),g.a.createElement("td",null,this.state.showActionButtons?g.a.createElement("a",{role:"button",onClick:this.openItem},g.a.createElement("span",{className:"glyphicon glyphicon-pencil mybtn-success"})," "):"",this.state.showActionButtons&&this.props.permissions.manageNote?g.a.createElement("a",{role:"button",onClick:this.props.showDeleteItemModal.bind(this,a,name)},g.a.createElement("span",{className:"glyphicon glyphicon-trash mybtn-danger"})," "):""))}}]),t}(h.Component),W=Object(N.b)((function(e){return{permissions:e.meDetails.permissions}}),null)(V),G=a(98),Y=a(789),H=Object(N.b)(null,(function(e){return{deleteTask:function(t){e(Object(Y.a)(t))}}}))((function(e){return g.a.createElement(G.a,{buttonConfirmText:"Verwijder",buttonClassName:"btn-danger",closeModal:e.closeDeleteItemModal,confirmAction:function(){return e.deleteTask(e.id),void e.closeDeleteItemModal()},title:"Verwijderen"},"Verwijder taak: ",g.a.createElement("strong",null," ",e.name," "))})),J=a(707);function z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?z(Object(a),!0).forEach((function(t){F()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):z(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var X=function(e){function t(e){var a;return r()(this,t),a=i()(this,u()(t).call(this,e)),F()(d()(a),"handleKeyUp",(function(e){13===e.keyCode&&a.props.onSubmitFilter()})),F()(d()(a),"showDeleteItemModal",(function(e,t){a.setState(Q({},a.state,{showDeleteItem:!0,deleteItem:Q({},a.state.deleteItem,{id:e,name:t})}))})),F()(d()(a),"closeDeleteItemModal",(function(){a.setState(Q({},a.state,{showDeleteItem:!1,deleteItem:Q({},a.state.deleteItem,{id:"",name:""})}))})),a.state={showDeleteItem:!1,deleteItem:{id:"",name:""}},a}return f()(t,e),s()(t,[{key:"render",value:function(){var e=this,t=this.props.notes,a=t.data,n=void 0===a?[]:a,r=t.meta,l=void 0===r?{}:r,s="",o=!0;return this.props.hasError?s="Fout bij het ophalen van notities.":this.props.isLoading?s="Gegevens aan het laden.":0===n.length?s="Geen notities gevonden!":o=!1,g.a.createElement("div",null,g.a.createElement("form",{onKeyUp:this.handleKeyUp},g.a.createElement(A.a,null,g.a.createElement(I.a,null,g.a.createElement(M,{fetchNotesData:function(){return e.props.fetchNotesData()}}),g.a.createElement(K,{onSubmitFilter:this.props.onSubmitFilter})),g.a.createElement(R.a,null,o?g.a.createElement("tr",null,g.a.createElement("td",{colSpan:7},s)):n.map((function(t){return g.a.createElement(W,O()({key:t.id},t,{showDeleteItemModal:e.showDeleteItemModal}))})))),g.a.createElement("div",{className:"col-md-6 col-md-offset-3"},g.a.createElement(J.a,{onPageChangeAction:this.props.handlePageClick,totalRecords:l.total,initialPage:this.props.notesPagination.page}))),this.state.showDeleteItem&&g.a.createElement(H,O()({closeDeleteItemModal:this.closeDeleteItemModal},this.state.deleteItem)))}}]),t}(h.Component),Z=Object(N.b)((function(e){return{isLoading:e.loadingData.isLoading,hasError:e.loadingData.hasError}}))(X),$=a(685),ee=Object(N.b)((function(e){return{permissions:e.meDetails.permissions,notes:e.notes.list}}),null)((function(e){var t=e.permissions,a=void 0===t?{}:t,n=e.notes.meta,r=void 0===n?{}:n;return g.a.createElement("div",{className:"row"},g.a.createElement("div",{className:"col-md-4"},g.a.createElement("div",{className:"btn-group",role:"group"},g.a.createElement($.a,{iconName:"glyphicon-refresh",onClickAction:e.resetNoteFilters}),a.manageNote&&g.a.createElement($.a,{iconName:"glyphicon-plus",onClickAction:function(){U.f.push("taak/nieuw/afgesloten")}}))),g.a.createElement("div",{className:"col-md-4"},g.a.createElement("h3",{className:"text-center table-title"},"Notities")),g.a.createElement("div",{className:"col-md-4"},g.a.createElement("div",{className:"pull-right"},"Resultaten: ",r.total||0)))})),te=a(717),ae=a(682),ne=a(683),re=function(e){function t(e){var a;return r()(this,t),(a=i()(this,u()(t).call(this,e))).fetchNotesData=a.fetchNotesData.bind(d()(a)),a.resetNoteFilters=a.resetNoteFilters.bind(d()(a)),a.handlePageClick=a.handlePageClick.bind(d()(a)),a}return f()(t,e),s()(t,[{key:"componentDidMount",value:function(){this.fetchNotesData()}},{key:"componentWillUnmount",value:function(){this.props.clearNotes()}},{key:"fetchNotesData",value:function(){var e=this;setTimeout((function(){var t=Object(te.a)(e.props.notesFilters),a=e.props.notesSorts,n={limit:20,offset:e.props.notesPagination.offset};e.props.fetchNotes(t,a,n)}),100)}},{key:"resetNoteFilters",value:function(){this.props.clearFilterNotes(),this.fetchNotesData()}},{key:"onSubmitFilter",value:function(){this.props.clearNotes(),this.props.setNotesPagination({page:0,offset:0}),this.fetchNotesData()}},{key:"handlePageClick",value:function(e){var t=e.selected,a=Math.ceil(20*t);this.props.setNotesPagination({page:t,offset:a}),this.fetchNotesData()}},{key:"render",value:function(){var e=this;return g.a.createElement(ae.a,null,g.a.createElement(ne.a,null,g.a.createElement("div",{className:"col-md-12 margin-10-top"},g.a.createElement(ee,{resetNoteFilters:function(){return e.resetNoteFilters()}})),g.a.createElement("div",{className:"col-md-12 margin-10-top"},g.a.createElement(Z,{notes:this.props.notes,notesPagination:this.props.notesPagination,onSubmitFilter:function(){return e.onSubmitFilter()},fetchNotesData:function(){return e.fetchNotesData()},handlePageClick:this.handlePageClick}))))}}]),t}(h.Component);t.default=Object(N.b)((function(e){return{notes:e.notes.list,notesFilters:e.notes.filters,notesSorts:e.notes.sorts,notesPagination:e.notes.pagination}}),(function(e){return Object(v.b)({fetchNotes:b,clearNotes:E,clearFilterNotes:S,setNotesPagination:w},e)}))(re)},682:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(14),s=a.n(l),o=function(e){var t=e.children,a=e.className,n=e.onMouseEnter,l=e.onMouseLeave;return r.a.createElement("div",{className:"panel panel-default ".concat(a),onMouseEnter:n,onMouseLeave:l},t)};o.defaultProps={className:"",onMouseEnter:function(){},onMouseLeave:function(){}},o.propTypes={className:s.a.string,onMouseEnter:s.a.func,onMouseLeave:s.a.func},t.a=o},683:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(14),s=a.n(l),o=function(e){var t=e.className,a=e.children;return r.a.createElement("div",{className:"panel-body ".concat(t)},a)};o.defaultProps={className:""},o.propTypes={className:s.a.string},t.a=o},685:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(14),s=a.n(l),o=function(e){var t=e.buttonClassName,a=e.iconName,n=e.onClickAction,l=e.title,s=e.disabled;return r.a.createElement("button",{type:"button",className:"btn ".concat(t),onClick:n,disabled:s,title:l},r.a.createElement("span",{className:"glyphicon ".concat(a)}))};o.defaultProps={buttonClassName:"btn-success btn-sm",title:"",disabled:!1},o.propTypes={buttonClassName:s.a.string,iconName:s.a.string.isRequired,onClickAction:s.a.func,title:s.a.string,disabled:s.a.bool},t.a=o},707:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(14),s=a.n(l),o=a(711),i=a.n(o),c=function(e){var t=e.onPageChangeAction,a=e.initialPage,n=e.recordsPerPage,l=e.totalRecords;return r.a.createElement(i.a,{onPageChange:t,pageCount:Math.ceil(l/n)||1,pageRangeDisplayed:5,marginPagesDisplayed:2,breakLabel:r.a.createElement("a",null,"..."),breakClassName:"break-me",containerClassName:"pagination",activeClassName:"active",previousLabel:r.a.createElement("span",{"aria-hidden":"true"},"«"),nextLabel:r.a.createElement("span",{"aria-hidden":"true"},"»"),initialPage:a||0,forcePage:a,disableInitialCallback:!0})};c.defaultProps={recordsPerPage:20},c.propTypes={initialPage:s.a.number.isRequired,recordsPerPage:s.a.number,totalRecords:s.a.number,onPageChangeAction:s.a.func.isRequired},t.a=c},711:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(712),l=(n=r)&&n.__esModule?n:{default:n};t.default=l.default},712:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=a(0),l=c(r),s=c(a(14)),o=c(a(713)),i=c(a(714));function c(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handlePreviousPage=function(e){var t=a.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,t>0&&a.handlePageSelected(t-1,e)},a.handleNextPage=function(e){var t=a.state.selected,n=a.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,t<n-1&&a.handlePageSelected(t+1,e)},a.handlePageSelected=function(e,t){t.preventDefault?t.preventDefault():t.returnValue=!1,a.state.selected!==e&&(a.setState({selected:e}),a.callCallback(e))},a.callCallback=function(e){void 0!==a.props.onPageChange&&"function"==typeof a.props.onPageChange&&a.props.onPageChange({selected:e})},a.pagination=function(){var e=[],t=a.props,n=t.pageRangeDisplayed,r=t.pageCount,s=t.marginPagesDisplayed,o=t.breakLabel,c=t.breakClassName,u=a.state.selected;if(r<=n)for(var m=0;m<r;m++)e.push(a.getPageElement(m));else{var d=n/2,p=n-d;u>r-n/2?d=n-(p=r-u):u<n/2&&(p=n-(d=u));var f=void 0,h=void 0,g=void 0,N=function(e){return a.getPageElement(e)};for(f=0;f<r;f++)(h=f+1)<=s||h>r-s||f>=u-d&&f<=u+p?e.push(N(f)):o&&e[e.length-1]!==g&&(g=l.default.createElement(i.default,{key:f,breakLabel:o,breakClassName:c}),e.push(g))}return e},a.state={selected:e.initialPage?e.initialPage:e.forcePage?e.forcePage:0},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,a=e.disableInitialCallback;void 0===t||a||this.callCallback(t)}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:e.forcePage})}},{key:"hrefBuilder",value:function(e){var t=this.props,a=t.hrefBuilder,n=t.pageCount;if(a&&e!==this.state.selected&&e>=0&&e<n)return a(e+1)}},{key:"getPageElement",value:function(e){var t=this.state.selected,a=this.props,n=a.pageClassName,r=a.pageLinkClassName,s=a.activeClassName,i=a.activeLinkClassName,c=a.extraAriaContext;return l.default.createElement(o.default,{key:e,onClick:this.handlePageSelected.bind(null,e),selected:t===e,pageClassName:n,pageLinkClassName:r,activeClassName:s,activeLinkClassName:i,extraAriaContext:c,href:this.hrefBuilder(e),page:e+1})}},{key:"render",value:function(){var e=this.props,t=e.disabledClassName,a=e.previousClassName,n=e.nextClassName,r=e.pageCount,s=e.containerClassName,o=e.previousLinkClassName,i=e.previousLabel,c=e.nextLinkClassName,u=e.nextLabel,m=this.state.selected,d=a+(0===m?" "+t:""),p=n+(m===r-1?" "+t:"");return l.default.createElement("ul",{className:s},l.default.createElement("li",{className:d},l.default.createElement("a",{onClick:this.handlePreviousPage,className:o,href:this.hrefBuilder(m-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage},i)),this.pagination(),l.default.createElement("li",{className:p},l.default.createElement("a",{onClick:this.handleNextPage,className:c,href:this.hrefBuilder(m+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage},u)))}}]),t}(r.Component);u.propTypes={pageCount:s.default.number.isRequired,pageRangeDisplayed:s.default.number.isRequired,marginPagesDisplayed:s.default.number.isRequired,previousLabel:s.default.node,nextLabel:s.default.node,breakLabel:s.default.node,hrefBuilder:s.default.func,onPageChange:s.default.func,initialPage:s.default.number,forcePage:s.default.number,disableInitialCallback:s.default.bool,containerClassName:s.default.string,pageClassName:s.default.string,pageLinkClassName:s.default.string,activeClassName:s.default.string,activeLinkClassName:s.default.string,previousClassName:s.default.string,nextClassName:s.default.string,previousLinkClassName:s.default.string,nextLinkClassName:s.default.string,disabledClassName:s.default.string,breakClassName:s.default.string},u.defaultProps={pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousClassName:"previous",nextClassName:"next",previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1},t.default=u},713:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),l=(n=r)&&n.__esModule?n:{default:n};t.default=function(e){var t=e.pageClassName,a=e.pageLinkClassName,n=e.onClick,r=e.href,s="Page "+e.page+(e.extraAriaContext?" "+e.extraAriaContext:""),o=null;return e.selected&&(o="page",s="Page "+e.page+" is your current page",t=void 0!==t?t+" "+e.activeClassName:e.activeClassName,void 0!==a?(a=a,void 0!==e.activeLinkClassName&&(a=a+" "+e.activeLinkClassName)):a=e.activeLinkClassName),l.default.createElement("li",{className:t},l.default.createElement("a",{onClick:n,role:"button",className:a,href:r,tabIndex:"0","aria-label":s,"aria-current":o,onKeyPress:n},e.page))}},714:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),l=(n=r)&&n.__esModule?n:{default:n};t.default=function(e){var t=e.breakLabel,a=e.breakClassName||"break";return l.default.createElement("li",{className:a},t)}},716:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(14),s=a.n(l),o=function(e){var t=e.RowClassName,a=e.setSorts,n=e.sortColumn,l=e.title,s=e.width;return r.a.createElement("th",{className:t,width:s},l,r.a.createElement("span",{className:"glyphicon glyphicon-arrow-down pull-right small",role:"button",onClick:a.bind(void 0,n,"ASC")}),r.a.createElement("span",{className:"glyphicon glyphicon-arrow-up pull-right small",role:"button",onClick:a.bind(void 0,n,"DESC")}))};o.defaultProps={RowClassName:""},o.propTypes={setSorts:s.a.func.isRequired,sortColumn:s.a.string.isRequired,title:s.a.string.isRequired,width:s.a.string.isRequired,RowClassName:s.a.string},t.a=o},717:function(e,t,a){"use strict";t.a=function(e){var t=[];for(var a in e)""!==e[a].data&&t.push(e[a]);return t}},720:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(14),s=a.n(l),o=a(703),i=a.n(o),c=a(704),u=a.n(c),m=a(8),d=a.n(m);d.a.locale("nl");var p=function(e){var t=e.className,a=e.value,n=e.onChangeAction,l=e.placeholder,s=a?d()(a).format("L"):"";return r.a.createElement("th",{className:"DayPicker-overflow ".concat(t)},r.a.createElement(i.a,{value:s,onDayChange:n,formatDate:c.formatDate,parseDate:c.parseDate,dayPickerProps:{showWeekNumbers:!0,locale:"nl",firstDayOfWeek:1,localeUtils:u.a},inputProps:{className:"form-control input-sm",placeholder:l},placeholder:""}))};p.defaultProps={className:"",value:null,placeholder:""},p.propTypes={className:s.a.string,value:s.a.oneOfType([s.a.string,s.a.object]),onChangeAction:s.a.func,placeholder:s.a.string},t.a=p},789:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return l}));var n=function(e){return{type:"FETCH_TASK_DETAILS",id:e}},r=function(e){return{type:"UPDATE_TASK_DETAILS",task:e}},l=function(e){return{type:"DELETE_TASK",id:e}}}}]);