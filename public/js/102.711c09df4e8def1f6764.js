(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{1598:function(e,t,n){"use strict";n.r(t);var a=n(25),r=n.n(a),o=n(24),s=n.n(o),i=n(26),l=n.n(i),c=n(27),u=n.n(c),m=n(21),f=n.n(m),p=n(28),d=n.n(p),h=n(6),b=n.n(h),E=n(0),w=n.n(E),v=n(33),g=n(995),y=n(198),N=n.n(y),D=n(144),M=n(145),O=n(199),j=n(99),I=n(4),k=n(8),C=n.n(k),A=function(e){function t(e){var n;return r()(this,t),(n=l()(this,u()(t).call(this,e))).state={showActionButtons:!1,highlightRow:""},n}return d()(t,e),s()(t,[{key:"onRowEnter",value:function(){this.setState({showActionButtons:!0,highlightRow:"highlight-row"})}},{key:"onRowLeave",value:function(){this.setState({showActionButtons:!1,highlightRow:""})}},{key:"openItem",value:function(e){I.f.push("/webformulier/".concat(e))}},{key:"render",value:function(){var e=this,t=this.props,n=t.id,a=t.name,r=t.apiKey,o=t.maxRequestsPerMinute,s=t.createdAt,i=void 0===s?[]:s;return w.a.createElement("tr",{className:this.state.highlightRow,onDoubleClick:function(){return e.openItem(n)},onMouseEnter:function(){return e.onRowEnter()},onMouseLeave:function(){return e.onRowLeave()}},w.a.createElement("td",null,a),w.a.createElement("td",null,r),w.a.createElement("td",null,o),w.a.createElement("td",null,i&&C()(i).format("DD-MM-Y")),w.a.createElement("td",null,this.state.showActionButtons?w.a.createElement("a",{role:"button",onClick:function(){return e.openItem(n)}},w.a.createElement("span",{className:"glyphicon glyphicon-pencil mybtn-success"})," "):"",this.state.showActionButtons&&this.props.permissions.createWebform?w.a.createElement("a",{role:"button",onClick:this.props.showDeleteItemModal.bind(this,n,a)},w.a.createElement("span",{className:"glyphicon glyphicon-trash mybtn-danger"})," "):""))}}]),t}(E.Component),W=Object(v.b)((function(e){return{permissions:e.meDetails.permissions}}),null)(A),R=n(98),L=n(815),T=Object(v.b)(null,(function(e){return{deleteTeam:function(t){e(Object(L.b)(t))}}}))((function(e){return w.a.createElement(R.a,{buttonConfirmText:"Verwijder",buttonClassName:"btn-danger",closeModal:e.closeDeleteItemModal,confirmAction:function(){return e.deleteTeam(e.id),void e.closeDeleteItemModal()},title:"Verwijderen"},"Verwijder team: ",w.a.createElement("strong",null," ",e.name," "))}));function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){b()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var B=function(e){function t(e){var n;return r()(this,t),n=l()(this,u()(t).call(this,e)),b()(f()(n),"showDeleteItemModal",(function(e,t){n.setState(S({},n.state,{showDeleteItem:!0,deleteItem:S({},n.state.deleteItem,{id:e,name:t})}))})),b()(f()(n),"closeDeleteItemModal",(function(){n.setState(S({},n.state,{showDeleteItem:!1,deleteItem:S({},n.state.deleteItem,{id:"",name:""})}))})),n.state={showDeleteItem:!1,deleteItem:{id:"",name:""}},n}return d()(t,e),s()(t,[{key:"render",value:function(){var e=this,t="",n=!0;return this.props.hasError?t="Fout bij het ophalen van webformulieren.":this.props.isLoading?t="Gegevens aan het laden.":0===this.props.webforms.length?t="Geen webformulieren gevonden!":n=!1,w.a.createElement("div",null,w.a.createElement(D.a,null,w.a.createElement(M.a,null,w.a.createElement("tr",{className:"thead-title"},w.a.createElement(j.a,{title:"Naam",width:"30%"}),w.a.createElement(j.a,{title:"Sleutel",width:"30%"}),w.a.createElement(j.a,{title:"Aanvragen per minuut",width:"20%"}),w.a.createElement(j.a,{title:"Gemaakt op",width:"15%"}),w.a.createElement(j.a,{title:"",width:"5%"}))),w.a.createElement(O.a,null,n?w.a.createElement("tr",null,w.a.createElement("td",{colSpan:5},t)):this.props.webforms.map((function(t){return w.a.createElement(W,N()({key:t.id,showDeleteItemModal:e.showDeleteItemModal},t))})))),this.state.showDeleteItem&&w.a.createElement(T,N()({closeDeleteItemModal:this.closeDeleteItemModal},this.state.deleteItem)))}}]),t}(E.Component),F=Object(v.b)((function(e){return{isLoading:e.loadingData.isLoading,hasError:e.loadingData.hasError}}))(B),_=n(685),x=Object(v.b)((function(e){return{permissions:e.meDetails.permissions,webforms:e.webforms}}),null)((function(e){return w.a.createElement("div",{className:"row"},w.a.createElement("div",{className:"col-md-4"},w.a.createElement("div",{className:"btn-group",role:"group"},w.a.createElement(_.a,{iconName:"glyphicon-refresh",onClickAction:e.refreshWebformsData}),e.permissions.manageWebform&&w.a.createElement(_.a,{iconName:"glyphicon-plus",onClickAction:function(){I.f.push("/webformulier/nieuw")}}))),w.a.createElement("div",{className:"col-md-4"},w.a.createElement("h3",{className:"text-center table-title"},"Webformulieren")),w.a.createElement("div",{className:"col-md-4"},w.a.createElement("div",{className:"pull-right"},"Resultaten: ",e.webforms?e.webforms.length:0)))})),G=n(682),V=n(683),q=function(e){function t(e){var n;return r()(this,t),n=l()(this,u()(t).call(this,e)),b()(f()(n),"refreshWebformsData",(function(){n.props.clearWebforms(),n.props.fetchWebforms()})),n}return d()(t,e),s()(t,[{key:"componentDidMount",value:function(){this.props.fetchWebforms()}},{key:"componentWillUnmount",value:function(){this.props.clearWebforms()}},{key:"render",value:function(){var e=this;return w.a.createElement(G.a,null,w.a.createElement(V.a,null,w.a.createElement("div",{className:"col-md-12 margin-10-top"},w.a.createElement(x,{refreshWebformsData:function(){return e.refreshWebformsData()}})),w.a.createElement("div",{className:"col-md-12 margin-10-top"},w.a.createElement(F,{webforms:this.props.webforms}))))}}]),t}(E.Component);t.default=Object(v.b)((function(e){return{webforms:e.webforms}}),(function(e){return{fetchWebforms:function(){e(Object(g.c)())},clearWebforms:function(){e(Object(g.a)())}}}))(q)},682:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(14),s=n.n(o),i=function(e){var t=e.children,n=e.className,a=e.onMouseEnter,o=e.onMouseLeave;return r.a.createElement("div",{className:"panel panel-default ".concat(n),onMouseEnter:a,onMouseLeave:o},t)};i.defaultProps={className:"",onMouseEnter:function(){},onMouseLeave:function(){}},i.propTypes={className:s.a.string,onMouseEnter:s.a.func,onMouseLeave:s.a.func},t.a=i},683:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(14),s=n.n(o),i=function(e){var t=e.className,n=e.children;return r.a.createElement("div",{className:"panel-body ".concat(t)},n)};i.defaultProps={className:""},i.propTypes={className:s.a.string},t.a=i},685:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(14),s=n.n(o),i=function(e){var t=e.buttonClassName,n=e.iconName,a=e.onClickAction,o=e.title,s=e.disabled;return r.a.createElement("button",{type:"button",className:"btn ".concat(t),onClick:a,disabled:s,title:o},r.a.createElement("span",{className:"glyphicon ".concat(n)}))};i.defaultProps={buttonClassName:"btn-success btn-sm",title:"",disabled:!1},i.propTypes={buttonClassName:s.a.string,iconName:s.a.string.isRequired,onClickAction:s.a.func,title:s.a.string,disabled:s.a.bool},t.a=i},815:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var a=function(){return{type:"FETCH_TEAMS"}},r=function(){return{type:"CLEAR_TEAMS"}},o=function(e){return{type:"DELETE_TEAM",id:e}}},995:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var a=function(){return{type:"FETCH_WEBFORMS"}},r=function(){return{type:"CLEAR_WEBFORMS"}},o=function(e){return{type:"DELETE_WEBFORM",id:e}}}}]);