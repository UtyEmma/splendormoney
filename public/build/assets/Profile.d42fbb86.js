import{B as N}from"./Button.308c5ec0.js";import{I as s}from"./InputError.85f33561.js";import{S as v}from"./SelectThumbnail.d3d7b039.js";import{S as w}from"./StudentLayout.6072a573.js";import{F as b}from"./Form.0fac4ef2.js";import{u as C,r as P,b as y,a as e,j as a}from"./app.f808fee2.js";import"./MainLayout.b6911946.js";import"./Symbol.43b767c2.js";import"./Naira.f3522ddb.js";import"./useCart.66bfafbe.js";import"./Math.62460fa9.js";import"./Disclose.a694b962.js";import"./AffiliateContext.48897de1.js";function R(){var t,i,d,c;const{auth:l}=C().props,u=P.exports.useRef(null),{data:n,processing:f,setData:h,errors:r,post:g,reset:x}=y({name:(t=l.user)==null?void 0:t.name,email:(i=l.user)==null?void 0:i.email,description:(d=l.user)==null?void 0:d.description,password:"",password_confirmation:"",oldpassword:"",avatar:""}),o=m=>{h(m.currentTarget.name,b.value(m.currentTarget))};return e(w,{title:"Profile",children:e("div",{className:"settings-widget profile-details",children:e("form",{onSubmit:m=>{var p;m.preventDefault(),g(route("student.profile.update",{user:(p=l.user)==null?void 0:p.id}))},autoComplete:"off",ref:u,children:e("div",{className:"settings-menu p-0",children:a("div",{className:"checkout-form personal-address add-course-info",children:[a("div",{className:"personal-info-head",children:[e("h4",{children:"Update Profile"}),e("p",{children:"Edit your personal information and address."})]}),a("div",{className:"row",children:[a("div",{className:"col-12",children:[e("div",{className:"course-group border-0 px-0 mb-0 d-flex",children:e(v,{onChange:o,defaultValue:(c=l.user)==null?void 0:c.avatar,name:"avatar"})}),e(s,{message:r.avatar})]}),e("div",{className:"col-lg-6",children:a("div",{className:"form-group",children:[e("label",{className:"form-control-label",children:"Full Name"}),e("input",{type:"text",name:"name",onChange:o,defaultValue:n.name,className:"form-control",placeholder:"Full Name"}),e(s,{message:r.name})]})}),e("div",{className:"col-lg-6",children:a("div",{className:"form-group",children:[e("label",{className:"form-control-label",children:"Email"}),e("input",{type:"text",className:"form-control",onChange:o,defaultValue:n.email,name:"email",placeholder:"Enter your Email"}),e(s,{message:r.email})]})}),a("div",{className:"row",children:[e("div",{className:"col-lg-4 col-md-6",children:a("div",{className:"form-group",children:[e("label",{className:"form-control-label",children:"Old Password"}),e("input",{type:"password",name:"oldpassword",onChange:o,autoComplete:"off",className:"form-control",placeholder:"Old Password"}),e(s,{message:r.password})]})}),e("div",{className:"col-lg-4 col-md-6",children:a("div",{className:"form-group",children:[e("label",{className:"form-control-label",children:"Password"}),e("input",{type:"password",name:"password",autoComplete:"off",onChange:o,className:"form-control",placeholder:"Password"}),e(s,{message:r.password})]})}),e("div",{className:"col-lg-4 col-md-6",children:a("div",{className:"form-group",children:[e("label",{className:"form-control-label",children:"Confirm Password"}),e("input",{type:"password",className:"form-control",autoComplete:"off",onChange:o,name:"password_confirmation",placeholder:"Confirm Password"}),e(s,{message:r.password_confirmation})]})})]}),e("div",{className:"update-profile",children:e(N,{type:"submit",className:"btn btn-primary",loading:f,children:"Update Profile"})})]})]})})})})})}export{R as default};
