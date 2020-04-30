(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{1608:function(e,t,n){"use strict";n.r(t);var a=n(25),o=n.n(a),l=n(24),r=n.n(l),c=n(26),s=n.n(c),i=n(27),m=n.n(i),u=n(21),p=n.n(u),d=n(28),h=n.n(d),f=n(6),E=n.n(f),D=n(0),b=n.n(D),w=n(33),v=n(198),g=n.n(v),T=n(144),y=n(145),N=n(199),O=n(99),I=n(4),k=n(8),j=n.n(k);j.a.locale("nl");var C=function(e){function t(e){var n;return o()(this,t),(n=s()(this,m()(t).call(this,e))).state={showActionButtons:!1,highlightRow:""},n}return h()(t,e),r()(t,[{key:"onRowEnter",value:function(){this.setState({showActionButtons:!0,highlightRow:"highlight-row"})}},{key:"onRowLeave",value:function(){this.setState({showActionButtons:!1,highlightRow:""})}},{key:"openItem",value:function(e){I.f.push("/document-template/".concat(e))}},{key:"render",value:function(){var e=this,t=this.props,n=t.id,a=t.number,o=t.createdAt,l=t.name,r=t.documentGroup,c=t.active;return b.a.createElement("tr",{className:this.state.highlightRow,onDoubleClick:function(){return e.openItem(n)},onMouseEnter:function(){return e.onRowEnter()},onMouseLeave:function(){return e.onRowLeave()}},b.a.createElement("td",null,a),b.a.createElement("td",null,o?j()(o).format("L"):"Onbekend"),b.a.createElement("td",null,l),b.a.createElement("td",null,r?r.name:"Onbekend"),b.a.createElement("td",null,c?"Ja":"Nee"),b.a.createElement("td",null,this.state.showActionButtons?b.a.createElement("a",{role:"button",onClick:function(){return e.openItem(n)}},b.a.createElement("span",{className:"glyphicon glyphicon-pencil mybtn-success"})," "):"",(this.state.showActionButtons&&this.props.permissions.createDocumentTemplate,"")))}}]),t}(D.Component),M=Object(w.b)((function(e){return{permissions:e.meDetails.permissions}}))(C),A=n(98),P=n(102),L=function(e){return b.a.createElement(A.a,{buttonConfirmText:"Verwijder",buttonClassName:"btn-danger",closeModal:e.closeDeleteItemModal,confirmAction:function(){P.a.deleteDocumentTemplate(e.id).then((function(t){e.refreshDocumentTemplatesData(),e.closeDeleteItemModal()})).catch((function(t){alert(t.response.data.message),e.closeDeleteItemModal()}))},title:"Verwijderen"},"Verwijder document template: ",b.a.createElement("strong",null," ",e.name," "))};function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){E()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var B=function(e){function t(e){var n;return o()(this,t),n=s()(this,m()(t).call(this,e)),E()(p()(n),"showDeleteItemModal",(function(e,t){n.setState(S({},n.state,{showDeleteItem:!0,deleteItem:S({},n.state.deleteItem,{id:e,name:t})}))})),E()(p()(n),"closeDeleteItemModal",(function(){n.setState(S({},n.state,{showDeleteItem:!1,deleteItem:S({},n.state.deleteItem,{id:"",name:""})}))})),n.state={showDeleteItem:!1,deleteItem:{id:"",name:""}},n}return h()(t,e),r()(t,[{key:"render",value:function(){var e=this,t="",n=!0;return this.props.hasError?t="Fout bij het ophalen van document templates.":this.props.isLoading?t="Gegevens aan het laden.":0===this.props.documentTemplates.length?t="Geen document templates gevonden!":n=!1,b.a.createElement("div",null,b.a.createElement(T.a,null,b.a.createElement(y.a,null,b.a.createElement("tr",{className:"thead-title"},b.a.createElement(O.a,{title:"Nummer",width:"20%"}),b.a.createElement(O.a,{title:"Datum",width:"30%"}),b.a.createElement(O.a,{title:"Template",width:"30%"}),b.a.createElement(O.a,{title:"Type",width:"8%"}),b.a.createElement(O.a,{title:"Actief",width:"7%"}),b.a.createElement(O.a,{title:"",width:"5%"}))),b.a.createElement(N.a,null,n?b.a.createElement("tr",null,b.a.createElement("td",{colSpan:6},t)):this.props.documentTemplates.map((function(t){return b.a.createElement(M,g()({key:t.id,showDeleteItemModal:e.showDeleteItemModal},t))})))),this.state.showDeleteItem&&b.a.createElement(L,g()({closeDeleteItemModal:this.closeDeleteItemModal,refreshDocumentTemplatesData:this.props.refreshDocumentTemplatesData},this.state.deleteItem)))}}]),t}(D.Component),_=Object(w.b)((function(e){return{isLoading:e.loadingData.isLoading,hasError:e.loadingData.hasError}}))(B),G=n(685),J=Object(w.b)((function(e){return{permissions:e.meDetails.permissions}}))((function(e){var t=e.permissions,n=void 0===t?{}:t;return b.a.createElement("div",{className:"row"},b.a.createElement("div",{className:"col-md-4"},b.a.createElement("div",{className:"btn-group",role:"group"},b.a.createElement(G.a,{iconName:"glyphicon-refresh",onClickAction:e.refreshDocumentTemplatesData}),n.createDocumentTemplate&&b.a.createElement(G.a,{iconName:"glyphicon-plus",onClickAction:function(){I.f.push("/document-template/nieuw")}}))),b.a.createElement("div",{className:"col-md-4"},b.a.createElement("h3",{className:"text-center table-title"},"Document templates")),b.a.createElement("div",{className:"col-md-4"}))})),U=function(e){function t(e){var n;return o()(this,t),n=s()(this,m()(t).call(this,e)),E()(p()(n),"refreshDocumentTemplatesData",(function(){n.props.clearDocumentTemplates(),n.props.fetchDocumentTemplates()})),n}return h()(t,e),r()(t,[{key:"componentDidMount",value:function(){this.props.fetchDocumentTemplates()}},{key:"componentWillUnmount",value:function(){this.props.clearDocumentTemplates()}},{key:"render",value:function(){var e=this;return b.a.createElement("div",null,b.a.createElement("div",{className:"panel panel-default"},b.a.createElement("div",{className:"panel-body"},b.a.createElement("div",{className:"col-md-12 margin-10-top"},b.a.createElement(J,{refreshDocumentTemplatesData:function(){return e.refreshDocumentTemplatesData()}})),b.a.createElement("div",{className:"col-md-12 margin-10-top"},b.a.createElement(_,{documentTemplates:this.props.documentTemplates,refreshDocumentTemplatesData:this.refreshDocumentTemplatesData})))))}}]),t}(D.Component);t.default=Object(w.b)((function(e){return{documentTemplates:e.documentTemplates}}),(function(e){return{fetchDocumentTemplates:function(){e({type:"FETCH_DOCUMENT_TEMPLATES"})},clearDocumentTemplates:function(){e({type:"CLEAR_DOCUMENT_TEMPLATES"})}}}))(U)},685:function(e,t,n){"use strict";var a=n(0),o=n.n(a),l=n(14),r=n.n(l),c=function(e){var t=e.buttonClassName,n=e.iconName,a=e.onClickAction,l=e.title,r=e.disabled;return o.a.createElement("button",{type:"button",className:"btn ".concat(t),onClick:a,disabled:r,title:l},o.a.createElement("span",{className:"glyphicon ".concat(n)}))};c.defaultProps={buttonClassName:"btn-success btn-sm",title:"",disabled:!1},c.propTypes={buttonClassName:r.a.string,iconName:r.a.string.isRequired,onClickAction:r.a.func,title:r.a.string,disabled:r.a.bool},t.a=c}}]);