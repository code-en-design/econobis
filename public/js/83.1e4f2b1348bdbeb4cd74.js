(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{1659:function(e,a,n){"use strict";n.r(a);var t=n(25),r=n.n(t),i=n(24),c=n.n(i),l=n(26),s=n.n(l),o=n(27),u=n.n(o),m=n(21),d=n.n(m),p=n(28),f=n.n(p),v=n(6),g=n.n(v),h=n(0),E=n.n(h),b=n(33),N=n(751),k=n(682),y=n(683),C=n(198),R=n(727),w=n(90),T=function(e){function a(e){var n;return r()(this,a),(n=s()(this,u()(a).call(this,e))).state={file:null},n}return f()(a,e),c()(a,[{key:"componentDidMount",value:function(){this.downloadFile()}},{key:"downloadFile",value:function(){var e=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;w.a.downloadPreview(this.props.orderId).then((function(a){e.setState({file:a.data})})).catch((function(){a<2&&setTimeout((function(){e.downloadFile(a)}),500),a++}))}},{key:"render",value:function(){return Object(C.isEmpty)(this.props.orderDetails)||!this.state.file?E.a.createElement("div",null,"Geen gegevens gevonden."):E.a.createElement("div",null,E.a.createElement(R.a,{file:this.state.file,scale:this.props.scale}))}}]),a}(h.Component),D=Object(b.b)((function(e){return{orderDetails:e.orderDetails}}),null)(T),O=n(4),q=n(685),P=Object(b.b)((function(e){return{orderDetails:e.orderDetails}}))((function(e){return E.a.createElement("div",{className:"row"},E.a.createElement("div",{className:"col-md-4"},E.a.createElement("div",{className:"btn-group",role:"group"},E.a.createElement(q.a,{iconName:"glyphicon-arrow-left",onClickAction:O.e.goBack}),E.a.createElement(q.a,{iconName:"glyphicon-zoom-in",onClickAction:e.zoomIn}),E.a.createElement(q.a,{iconName:"glyphicon-zoom-out",onClickAction:e.zoomOut}))),E.a.createElement("div",{className:"col-md-4"},E.a.createElement("h4",{className:"text-center"},"Order: "+(e.orderDetails.number?e.orderDetails.number:""))),E.a.createElement("div",{className:"col-md-4"}))})),z=function(e){function a(e){var n;return r()(this,a),n=s()(this,u()(a).call(this,e)),g()(d()(n),"zoomIn",(function(){n.setState({scale:n.state.scale+.2})})),g()(d()(n),"zoomOut",(function(){n.setState({scale:n.state.scale-.2})})),n.state={scale:1},n}return f()(a,e),c()(a,[{key:"componentDidMount",value:function(){this.props.fetchOrderDetails(this.props.params.id)}},{key:"render",value:function(){return E.a.createElement("div",{className:"row"},E.a.createElement("div",{className:"col-md-12"},E.a.createElement("div",{className:"col-md-12 margin-10-top"},E.a.createElement(k.a,null,E.a.createElement(y.a,{className:"panel-small"},E.a.createElement(P,{zoomIn:this.zoomIn,zoomOut:this.zoomOut})))),E.a.createElement("div",{className:"col-md-12 margin-10-top"},E.a.createElement(D,{orderId:this.props.params.id,scale:this.state.scale}))))}}]),a}(h.Component);a.default=Object(b.b)(null,(function(e){return{fetchOrderDetails:function(a){e(Object(N.a)(a))}}}))(z)},682:function(e,a,n){"use strict";var t=n(0),r=n.n(t),i=n(14),c=n.n(i),l=function(e){var a=e.children,n=e.className,t=e.onMouseEnter,i=e.onMouseLeave;return r.a.createElement("div",{className:"panel panel-default ".concat(n),onMouseEnter:t,onMouseLeave:i},a)};l.defaultProps={className:"",onMouseEnter:function(){},onMouseLeave:function(){}},l.propTypes={className:c.a.string,onMouseEnter:c.a.func,onMouseLeave:c.a.func},a.a=l},683:function(e,a,n){"use strict";var t=n(0),r=n.n(t),i=n(14),c=n.n(i),l=function(e){var a=e.className,n=e.children;return r.a.createElement("div",{className:"panel-body ".concat(a)},n)};l.defaultProps={className:""},l.propTypes={className:c.a.string},a.a=l},685:function(e,a,n){"use strict";var t=n(0),r=n.n(t),i=n(14),c=n.n(i),l=function(e){var a=e.buttonClassName,n=e.iconName,t=e.onClickAction,i=e.title,c=e.disabled;return r.a.createElement("button",{type:"button",className:"btn ".concat(a),onClick:t,disabled:c,title:i},r.a.createElement("span",{className:"glyphicon ".concat(n)}))};l.defaultProps={buttonClassName:"btn-success btn-sm",title:"",disabled:!1},l.propTypes={buttonClassName:c.a.string,iconName:c.a.string.isRequired,onClickAction:c.a.func,title:c.a.string,disabled:c.a.bool},a.a=l},727:function(e,a,n){"use strict";var t=n(0),r=n.n(t),i=n(14),c=n.n(i),l=n(783),s=n.n(l),o=function(e){var a=e.page,n=(e.pages,e.handlePrevClick);return 1===a?r.a.createElement("div",null):r.a.createElement("h3",{style:{cursor:"pointer",display:"inline-block",marginRight:24,marginTop:0},onClick:n},"<")};o.propTypes={page:c.a.number.isRequired,pages:c.a.number.isRequired,handlePrevClick:c.a.func.isRequired};var u=function(e){var a=e.page,n=e.pages,t=e.handleNextClick;return a===n?r.a.createElement("div",null):r.a.createElement("h3",{style:{cursor:"pointer",display:"inline-block",marginLeft:24,marginTop:0},onClick:t},">")};u.propTypes={page:c.a.number.isRequired,pages:c.a.number.isRequired,handleNextClick:c.a.func.isRequired};var m=function(e){var a=e.page,n=e.pages;return r.a.createElement("h3",{style:{display:"inline-block",marginTop:0}},"Pagina ",a," van ",n)};m.propTypes={page:c.a.number.isRequired,pages:c.a.number.isRequired};var d=function(e){var a=e.page,n=e.pages,t=e.handlePrevClick,i=e.handleNextClick;return r.a.createElement("div",{className:"customWrapper"},r.a.createElement(o,{page:a,pages:n,handlePrevClick:t}),r.a.createElement(m,{page:a,pages:n}),r.a.createElement(u,{page:a,pages:n,handleNextClick:i}))};d.propTypes={page:c.a.number.isRequired,pages:c.a.number.isRequired,handlePrevClick:c.a.func.isRequired,handleNextClick:c.a.func.isRequired};var p=d;s.a.defaultProps={file:"",scale:1},s.a.propTypes={file:c.a.string,scale:c.a.number};a.a=function(e){var a=e.file,n=e.scale;return r.a.createElement("div",{className:"panel-heading"},r.a.createElement(s.a,{document:{file:a},navigation:p,scale:n}))}},751:function(e,a,n){"use strict";n.d(a,"a",(function(){return t})),n.d(a,"b",(function(){return r}));var t=function(e){return{type:"FETCH_ORDER_DETAILS",id:e}},r=function(e,a){return{type:"UPDATE_ORDER",order:e,switchToView:a}}},784:function(e,a){},785:function(e,a){},786:function(e,a){},787:function(e,a){}}]);