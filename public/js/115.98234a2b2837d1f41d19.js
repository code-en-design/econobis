(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{1629:function(t,e,a){"use strict";a.r(e);var n=a(25),r=a.n(n),o=a(24),s=a.n(o),l=a(26),i=a.n(l),c=a(27),u=a.n(c),d=a(28),m=a.n(d),h=a(0),p=a.n(h),v=a(797),f=a(798),b=a(682),g=a(683),E=a(204),k=a(952),D=function(t){function e(t){var a;return r()(this,e),(a=i()(this,u()(e).call(this,t))).state={chartData:[],amountOfDataPoints:[],code:""},a}return m()(e,t),s()(e,[{key:"componentDidMount",value:function(){var t=this;E.a.getChartData(this.props.id).then((function(e){for(var a=0,n=0;n<e.data.length;n++)a+=parseInt(e.data[n].count);t.setState({chartData:e.data,amountOfDataPoints:a,code:e.code})}))}},{key:"renderChartsData",value:function(){var t=[],e=this.state.chartData,a=void 0===e?[]:e,n=a.map((function(t){return t.name})),r=a.map((function(t){return t.count}));return t.data={labels:n,datasets:[{data:r,backgroundColor:["rgba(48, 129, 95, 0.8)","rgba(39, 174, 96, 0.8)","rgba(41, 128, 185, 0.8)","rgba(142, 68, 173, 0.8)","rgba(203, 185, 86, 0.8)","rgba(230, 74, 74, 0.8)"],hoverBackgroundColor:["rgba(48, 129, 95,1)","rgba(39, 174, 96, 1)","rgba(41, 128, 185, 1)","rgba(142, 68, 173, 1)","rgba(203, 185, 86,  1)","rgba(230, 74, 74, 1)"]}]},t.options={legend:{display:!0,position:"right"},maintainAspectRatio:!1,responsive:!0,tooltips:{mode:"label",callbacks:{label:function(t,e){var a=e.datasets[t.datasetIndex],n=a._meta[Object.keys(a._meta)[0]].total,r=a.data[t.index];return r+" ("+parseFloat((r/n*100).toFixed(1))+"%)"},title:function(t,e){return e.labels[t[0].index]}}},tooltipTemplate:"'<%=label%>: <%= numeral(value).format('($00[.]00)') %> - <%= numeral(circumference / 6.283).format('(0[.][00]%)') %>'"},t}},{key:"render",value:function(){var t=this.renderChartsData(),e=t.data,a=t.options,n=this.state.amountOfDataPoints;return p.a.createElement("div",null,p.a.createElement("h4",null,"Deelnemers status in project ",this.state.code),p.a.createElement("div",null,0===n?p.a.createElement("span",null,"Geen deelnemers gevonden."):p.a.createElement(k.a,{data:e,options:a,width:250,height:250})))}}]),e}(h.Component),y=function(t){function e(t){var a;return r()(this,e),(a=i()(this,u()(e).call(this,t))).state={chartData:[],amountOfDataPoints:[],code:""},a}return m()(e,t),s()(e,[{key:"componentDidMount",value:function(){var t=this;E.a.getChartContactStatusData(this.props.id).then((function(e){for(var a=0,n=0;n<e.data.length;n++)a+=parseInt(e.data[n].count);t.setState({chartData:e.data,amountOfDataPoints:a,code:e.code})}))}},{key:"renderChartsData",value:function(){var t=[],e=this.state.chartData,a=void 0===e?[]:e,n=a.map((function(t){return t.name})),r=a.map((function(t){return t.count}));return t.data={labels:n,datasets:[{data:r,backgroundColor:["rgba(48, 129, 95, 0.8)","rgba(39, 174, 96, 0.8)","rgba(41, 128, 185, 0.8)","rgba(142, 68, 173, 0.8)","rgba(203, 185, 86, 0.8)","rgba(230, 74, 74, 0.8)"],hoverBackgroundColor:["rgba(48, 129, 95,1)","rgba(39, 174, 96, 1)","rgba(41, 128, 185, 1)","rgba(142, 68, 173, 1)","rgba(203, 185, 86,  1)","rgba(230, 74, 74, 1)"]}]},t.options={legend:{display:!0,position:"right"},maintainAspectRatio:!1,responsive:!0,tooltips:{mode:"label",callbacks:{label:function(t,e){var a=e.datasets[t.datasetIndex],n=a._meta[Object.keys(a._meta)[0]].total,r=a.data[t.index];return r+" ("+parseFloat((r/n*100).toFixed(1))+"%)"},title:function(t,e){return e.labels[t[0].index]}}},tooltipTemplate:"'<%=label%>: <%= numeral(value).format('($00[.]00)') %> - <%= numeral(circumference / 6.283).format('(0[.][00]%)') %>'"},t}},{key:"render",value:function(){var t=this.renderChartsData(),e=t.data,a=t.options,n=this.state.amountOfDataPoints;return p.a.createElement("div",null,p.a.createElement("h4",null,"Deelnemers contact status in project ",this.state.code),p.a.createElement("div",null,0===n?p.a.createElement("span",null,"Geen contacten gevonden."):p.a.createElement(k.a,{data:e,options:a,width:250,height:250})))}}]),e}(h.Component),C=function(t){function e(t){var a;return r()(this,e),(a=i()(this,u()(e).call(this,t))).state={chartData:[],amountOfDataPoints:[],code:""},a}return m()(e,t),s()(e,[{key:"componentDidMount",value:function(){var t=this;E.a.getChartParticipationsData(this.props.id).then((function(e){for(var a=0,n=0;n<e.data.length;n++)a+=parseInt(e.data[n].count);t.setState({chartData:e.data,amountOfDataPoints:a,code:e.code})}))}},{key:"renderChartsData",value:function(){var t=[],e=this.state.chartData,a=void 0===e?[]:e,n=a.map((function(t){return t.name})),r=a.map((function(t){return t.count}));return t.data={labels:n,datasets:[{data:r,backgroundColor:["rgba(48, 129, 95, 0.8)","rgba(39, 174, 96, 0.8)","rgba(41, 128, 185, 0.8)","rgba(142, 68, 173, 0.8)","rgba(203, 185, 86, 0.8)","rgba(230, 74, 74, 0.8)"],hoverBackgroundColor:["rgba(48, 129, 95,1)","rgba(39, 174, 96, 1)","rgba(41, 128, 185, 1)","rgba(142, 68, 173, 1)","rgba(203, 185, 86,  1)","rgba(230, 74, 74, 1)"]}]},t.options={legend:{display:!0,position:"right"},maintainAspectRatio:!1,responsive:!0,tooltips:{mode:"label",callbacks:{label:function(t,e){var a=e.datasets[t.datasetIndex],n=a._meta[Object.keys(a._meta)[0]].total,r=a.data[t.index];return r+" ("+parseFloat((r/n*100).toFixed(1))+"%)"},title:function(t,e){return e.labels[t[0].index]}}},tooltipTemplate:"'<%=label%>: <%= numeral(value).format('($00[.]00)') %> - <%= numeral(circumference / 6.283).format('(0[.][00]%)') %>'"},t}},{key:"render",value:function(){var t=this.renderChartsData(),e=t.data,a=t.options,n=this.state.amountOfDataPoints;return p.a.createElement("div",null,p.a.createElement("h4",null,"Deelnames status in project ",this.state.code),p.a.createElement("div",null,0===n?p.a.createElement("span",null,"Geen deelnames gevonden."):p.a.createElement(k.a,{data:e,options:a,width:250,height:250})))}}]),e}(h.Component),N=function(t){function e(t){var a;return r()(this,e),(a=i()(this,u()(e).call(this,t))).state={activeProjectsIds:[]},a}return m()(e,t),s()(e,[{key:"componentWillMount",value:function(){var t=this;E.a.getActive().then((function(e){t.setState({activeProjectsIds:e})}))}},{key:"render",value:function(){var t=this.state.activeProjectsIds;return p.a.createElement("div",{className:"row"},t.map((function(t){return p.a.createElement("div",null,p.a.createElement("div",{className:"col-md-4"},p.a.createElement(b.a,null,p.a.createElement(g.a,null,p.a.createElement(D,{id:t})))),p.a.createElement("div",{className:"col-md-4"},p.a.createElement(b.a,null,p.a.createElement(g.a,null,p.a.createElement(C,{id:t})))),p.a.createElement("div",{className:"col-md-4"},p.a.createElement(b.a,null,p.a.createElement(g.a,null,p.a.createElement(y,{id:t})))))})))}}]),e}(h.Component),x=function(t){function e(t){return r()(this,e),i()(this,u()(e).call(this,t))}return m()(e,t),s()(e,[{key:"render",value:function(){return p.a.createElement("div",null,p.a.createElement("div",{className:"row"},p.a.createElement(v.a,{size:"col-xs-2"}),p.a.createElement(f.a,{size:"col-xs-2"})),p.a.createElement(N,null))}}]),e}(h.Component);e.default=x},682:function(t,e,a){"use strict";var n=a(0),r=a.n(n),o=a(14),s=a.n(o),l=function(t){var e=t.children,a=t.className,n=t.onMouseEnter,o=t.onMouseLeave;return r.a.createElement("div",{className:"panel panel-default ".concat(a),onMouseEnter:n,onMouseLeave:o},e)};l.defaultProps={className:"",onMouseEnter:function(){},onMouseLeave:function(){}},l.propTypes={className:s.a.string,onMouseEnter:s.a.func,onMouseLeave:s.a.func},e.a=l},683:function(t,e,a){"use strict";var n=a(0),r=a.n(n),o=a(14),s=a.n(o),l=function(t){var e=t.className,a=t.children;return r.a.createElement("div",{className:"panel-body ".concat(e)},a)};l.defaultProps={className:""},l.propTypes={className:s.a.string},e.a=l},797:function(t,e,a){"use strict";var n=a(25),r=a.n(n),o=a(24),s=a.n(o),l=a(26),i=a.n(l),c=a(27),u=a.n(c),d=a(28),m=a.n(d),h=a(0),p=a.n(h),v=a(4),f=a(146),b=function(t){function e(t){var a;return r()(this,e),(a=i()(this,u()(e).call(this,t))).state={amountOpenEmails:"-"},a}return m()(e,t),s()(e,[{key:"componentWillMount",value:function(){var t=this;f.a.getAmountOpen().then((function(e){t.setState({amountOpenEmails:e})}))}},{key:"render",value:function(){return p.a.createElement("div",{className:this.props.size,onClick:function(){return v.f.push("/emails/inbox/eigen")}},p.a.createElement("div",{className:"panel panel-default",id:"dashboardbutton-1"},p.a.createElement("div",{className:"panel-body"},p.a.createElement("h4",{className:"text-center text-bold"},"E-MAIL"),p.a.createElement("h4",{className:"text-center text-bold"},this.state.amountOpenEmails))))}}]),e}(h.Component);e.a=b},798:function(t,e,a){"use strict";var n=a(25),r=a.n(n),o=a(24),s=a.n(o),l=a(26),i=a.n(l),c=a(27),u=a.n(c),d=a(28),m=a.n(d),h=a(0),p=a.n(h),v=a(4),f=a(104),b=function(t){function e(t){var a;return r()(this,e),(a=i()(this,u()(e).call(this,t))).state={amountActiveTasks:"-"},a}return m()(e,t),s()(e,[{key:"componentWillMount",value:function(){var t=this;f.a.getAmountActive().then((function(e){t.setState({amountActiveTasks:e})}))}},{key:"render",value:function(){return p.a.createElement("div",{className:this.props.size,onClick:function(){return v.f.push("/taken/eigen")}},p.a.createElement("div",{className:"panel panel-default",id:"dashboardbutton-4"},p.a.createElement("div",{className:"panel-body"},p.a.createElement("h4",{className:"text-center text-bold"},"OPEN TAKEN"),p.a.createElement("h4",{className:"text-center text-bold"},this.state.amountActiveTasks))))}}]),e}(h.Component);e.a=b}}]);