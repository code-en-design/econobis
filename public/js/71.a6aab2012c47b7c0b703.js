(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{1627:function(e,n,a){"use strict";a.r(n);var t=a(25),i=a.n(t),o=a(24),c=a.n(o),l=a(26),r=a.n(l),s=a(27),u=a.n(s),d=a(21),m=a.n(d),p=a(28),v=a.n(p),f=a(6),h=a.n(f),g=a(0),b=a.n(g),E=a(33),N=a(724),y=a(682),k=a(683),w=a(4),C=a(685),R=Object(E.b)((function(e){return{invoiceDetails:e.invoiceDetails}}),null)((function(e){var n=e.invoiceDetails.document,a=void 0===n?{}:n;return b.a.createElement("div",{className:"row"},b.a.createElement("div",{className:"col-md-4"},b.a.createElement("div",{className:"btn-group",role:"group"},b.a.createElement(C.a,{iconName:"glyphicon-arrow-left",onClickAction:w.e.goBack}),b.a.createElement(C.a,{iconName:"glyphicon-download-alt",onClickAction:e.download}),b.a.createElement(C.a,{iconName:"glyphicon-zoom-in",onClickAction:e.zoomIn}),b.a.createElement(C.a,{iconName:"glyphicon-zoom-out",onClickAction:e.zoomOut}))),b.a.createElement("div",{className:"col-md-4"},b.a.createElement("h4",{className:"text-center"},"Nota: "+(a?a.name:"Preview"))),b.a.createElement("div",{className:"col-md-4"}))})),D=a(197),T=a(726),q=a(89),I=function(e){function n(e){var a;return i()(this,n),(a=r()(this,u()(n).call(this,e))).state={file:null},a}return v()(n,e),c()(n,[{key:"componentDidMount",value:function(){this.downloadFile()}},{key:"downloadFile",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;q.a.download(this.props.invoiceId).then((function(n){e.setState({file:n.data})})).catch((function(){n<2&&setTimeout((function(){e.downloadFile(n)}),500),n++}))}},{key:"render",value:function(){return Object(D.isEmpty)(this.props.invoiceDetails)||!this.state.file?b.a.createElement("div",null,"Geen gegevens gevonden."):b.a.createElement("div",null,b.a.createElement(T.a,{file:this.state.file,scale:this.props.scale}))}}]),n}(g.Component),O=Object(E.b)((function(e){return{invoiceDetails:e.invoiceDetails}}),null)(I),L=a(704),P=a.n(L),z=function(e){function n(e){var a;return i()(this,n),a=r()(this,u()(n).call(this,e)),h()(m()(a),"zoomIn",(function(){a.setState({scale:a.state.scale+.2})})),h()(m()(a),"zoomOut",(function(){a.setState({scale:a.state.scale-.2})})),a.state={scale:1},a.download=a.download.bind(m()(a)),a}return v()(n,e),c()(n,[{key:"componentDidMount",value:function(){this.props.fetchInvoiceDetails(this.props.params.id)}},{key:"download",value:function(){q.a.download(this.props.invoiceDetails.id).then((function(e){P()(e.data,e.headers["x-filename"])}))}},{key:"render",value:function(){return b.a.createElement("div",{className:"row"},b.a.createElement("div",{className:"col-md-12"},b.a.createElement("div",{className:"col-md-12 margin-10-top"},b.a.createElement(y.a,null,b.a.createElement(k.a,{className:"panel-small"},b.a.createElement(R,{zoomIn:this.zoomIn,zoomOut:this.zoomOut,download:this.download})))),b.a.createElement("div",{className:"col-md-12 margin-10-top"},b.a.createElement(O,{invoiceId:this.props.params.id,scale:this.state.scale}))))}}]),n}(g.Component);n.default=Object(E.b)((function(e){return{invoiceDetails:e.invoiceDetails}}),(function(e){return{fetchInvoiceDetails:function(n){e(Object(N.b)(n))}}}))(z)},682:function(e,n,a){"use strict";var t=a(0),i=a.n(t),o=a(14),c=a.n(o),l=function(e){var n=e.children,a=e.className,t=e.onMouseEnter,o=e.onMouseLeave;return i.a.createElement("div",{className:"panel panel-default ".concat(a),onMouseEnter:t,onMouseLeave:o},n)};l.defaultProps={className:"",onMouseEnter:function(){},onMouseLeave:function(){}},l.propTypes={className:c.a.string,onMouseEnter:c.a.func,onMouseLeave:c.a.func},n.a=l},683:function(e,n,a){"use strict";var t=a(0),i=a.n(t),o=a(14),c=a.n(o),l=function(e){var n=e.className,a=e.children;return i.a.createElement("div",{className:"panel-body ".concat(n)},a)};l.defaultProps={className:""},l.propTypes={className:c.a.string},n.a=l},685:function(e,n,a){"use strict";var t=a(0),i=a.n(t),o=a(14),c=a.n(o),l=function(e){var n=e.buttonClassName,a=e.iconName,t=e.onClickAction,o=e.title,c=e.disabled;return i.a.createElement("button",{type:"button",className:"btn ".concat(n),onClick:t,disabled:c,title:o},i.a.createElement("span",{className:"glyphicon ".concat(a)}))};l.defaultProps={buttonClassName:"btn-success btn-sm",title:"",disabled:!1},l.propTypes={buttonClassName:c.a.string,iconName:c.a.string.isRequired,onClickAction:c.a.func,title:c.a.string,disabled:c.a.bool},n.a=l},704:function(e,n){e.exports=function(e,n,a){var t=new Blob([e],{type:a||"application/octet-stream"});if(void 0!==window.navigator.msSaveBlob)window.navigator.msSaveBlob(t,n);else{var i=window.URL.createObjectURL(t),o=document.createElement("a");o.style.display="none",o.href=i,o.setAttribute("download",n),void 0===o.download&&o.setAttribute("target","_blank"),document.body.appendChild(o),o.click(),document.body.removeChild(o),window.URL.revokeObjectURL(i)}}},724:function(e,n,a){"use strict";a.d(n,"b",(function(){return t})),a.d(n,"a",(function(){return i}));var t=function(e){return{type:"FETCH_INVOICE_DETAILS",id:e}},i=function(e){return{type:"DELETE_INVOICE",id:e}}},726:function(e,n,a){"use strict";var t=a(0),i=a.n(t),o=a(14),c=a.n(o),l=a(778),r=a.n(l),s=function(e){var n=e.page,a=(e.pages,e.handlePrevClick);return 1===n?i.a.createElement("div",null):i.a.createElement("h3",{style:{cursor:"pointer",display:"inline-block",marginRight:24,marginTop:0},onClick:a},"<")};s.propTypes={page:c.a.number.isRequired,pages:c.a.number.isRequired,handlePrevClick:c.a.func.isRequired};var u=function(e){var n=e.page,a=e.pages,t=e.handleNextClick;return n===a?i.a.createElement("div",null):i.a.createElement("h3",{style:{cursor:"pointer",display:"inline-block",marginLeft:24,marginTop:0},onClick:t},">")};u.propTypes={page:c.a.number.isRequired,pages:c.a.number.isRequired,handleNextClick:c.a.func.isRequired};var d=function(e){var n=e.page,a=e.pages;return i.a.createElement("h3",{style:{display:"inline-block",marginTop:0}},"Pagina ",n," van ",a)};d.propTypes={page:c.a.number.isRequired,pages:c.a.number.isRequired};var m=function(e){var n=e.page,a=e.pages,t=e.handlePrevClick,o=e.handleNextClick;return i.a.createElement("div",{className:"customWrapper"},i.a.createElement(s,{page:n,pages:a,handlePrevClick:t}),i.a.createElement(d,{page:n,pages:a}),i.a.createElement(u,{page:n,pages:a,handleNextClick:o}))};m.propTypes={page:c.a.number.isRequired,pages:c.a.number.isRequired,handlePrevClick:c.a.func.isRequired,handleNextClick:c.a.func.isRequired};var p=m;r.a.defaultProps={file:"",scale:1},r.a.propTypes={file:c.a.string,scale:c.a.number};n.a=function(e){var n=e.file,a=e.scale;return i.a.createElement("div",{className:"panel-heading"},i.a.createElement(r.a,{document:{file:n},navigation:p,scale:a}))}},782:function(e,n){},783:function(e,n){},784:function(e,n){},785:function(e,n){}}]);