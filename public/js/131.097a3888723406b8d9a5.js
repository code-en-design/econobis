(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{1547:function(e,a,t){"use strict";t.r(a);var l=t(25),n=t.n(l),r=t(24),s=t.n(r),m=t(26),i=t.n(m),c=t(27),o=t.n(c),d=t(28),u=t.n(d),f=t(0),v=t.n(f),h=t(2),p=t.n(h),E=function(e){function a(e){var t;return n()(this,a),(t=i()(this,o()(a).call(this,e))).state={email:""},t}return u()(a,e),s()(a,[{key:"onSubmit",value:function(e){var a=this;e.preventDefault();var t=this.state.email;p.a.post("".concat(URL_API,"/api/password/email"),{email:t}).then((function(e){a.refs.email.value="",a.setState({err:!1})})).catch((function(e){a.setState({err:!0}),a.refs.email.value=""}))}},{key:"onChange",value:function(e){var a=e.target.value;this.setState({email:a})}},{key:"render",value:function(){var e=this.state.err,a=e?"E-mail bestaat niet.":"We hebben je een e-mail gestuurd met een wachtwoord reset link!",t=e?"alert alert-danger":"alert alert-success";return v.a.createElement("div",null,v.a.createElement("div",{className:"container"},v.a.createElement("div",{className:"row"},v.a.createElement("div",{className:"col-md-8 col-md-offset-2"},v.a.createElement("div",{className:"panel panel-default"},v.a.createElement("div",{className:"panel-heading"},"Reset wachtwoord"),v.a.createElement("div",{className:"panel-body"},v.a.createElement("div",{className:"col-md-offset-2 col-md-8 col-md-offset-2"},null!=e&&v.a.createElement("div",{className:t,role:"alert"},a)),v.a.createElement("form",{className:"form-horizontal",role:"form",method:"POST",onSubmit:this.onSubmit.bind(this)},v.a.createElement("div",{className:"form-group"},v.a.createElement("label",{htmlFor:"email",className:"col-md-4 control-label"},"E-mailadres"),v.a.createElement("div",{className:"col-md-6"},v.a.createElement("input",{id:"email",type:"email",ref:"email",className:"form-control",name:"email",onChange:this.onChange.bind(this),required:!0}))),v.a.createElement("div",{className:"form-group"},v.a.createElement("div",{className:"col-md-6 col-md-offset-4"},v.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Verstuur wachtwoord reset link"))))))))))}}]),a}(f.Component);a.default=E}}]);