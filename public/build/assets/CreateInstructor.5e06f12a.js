import{B as p}from"./Button.9b9201ed.js";import{E as u}from"./Editor.1ce85276.js";import{I as o}from"./InputError.2613fea2.js";import{S as h}from"./SelectThumbnail.b0017a0a.js";import{A as f}from"./AdminLayout.0370dad7.js";import{F as N}from"./Form.0fac4ef2.js";import{r as g,b as v,j as e,a}from"./app.1ed4ea61.js";import"./MainLayout.84dad613.js";import"./Symbol.49d534b8.js";import"./Naira.4325f9c0.js";import"./useCart.b40fb3e3.js";import"./Math.62460fa9.js";import"./AffiliateContext.6ca6173d.js";function B(){const n=g.exports.useRef(null),{data:b,processing:t,setData:m,errors:r,post:c,reset:d}=v({name:"",email:"",description:"",password:"",password_confirmation:"",avatar:null}),s=l=>{m(l.currentTarget.name,N.value(l.currentTarget))};return e(f,{title:"New Instructor",children:e("div",{className:"settings-widget profile-details",children:e("form",{onSubmit:l=>{l.preventDefault(),c(route("admin.instructors.store"),{onSuccess:()=>{var i;(i=n.current)==null||i.reset(),d()}})},ref:n,children:e("div",{className:"settings-menu p-0",children:a("div",{className:"checkout-form personal-address add-course-info",children:[a("div",{className:"personal-info-head",children:[e("h4",{children:"Upload Instructor Details"}),e("p",{children:"Edit your personal information and address."})]}),a("div",{className:"row",children:[a("div",{className:"col-12",children:[e("div",{className:"course-group border-0 px-0 mb-0 d-flex",children:e(h,{onChange:s,name:"avatar"})}),e(o,{message:r.avatar})]}),e("div",{className:"col-lg-6",children:a("div",{className:"form-group",children:[e("label",{className:"form-control-label",children:"Full Name"}),e("input",{type:"text",name:"name",onChange:s,className:"form-control",placeholder:"Full Name"}),e(o,{message:r.name})]})}),e("div",{className:"col-lg-6",children:a("div",{className:"form-group",children:[e("label",{className:"form-control-label",children:"Email"}),e("input",{type:"text",className:"form-control",onChange:s,name:"email",placeholder:"Enter your Email"}),e(o,{message:r.email})]})}),e("div",{className:"col-lg-12",children:a("div",{className:"form-group",children:[e("label",{className:"form-control-label",children:"About"}),e(u,{onChange:s,name:"description"}),e(o,{message:r.description})]})}),a("div",{className:"row",children:[e("div",{className:"col-lg-6",children:a("div",{className:"form-group",children:[e("label",{className:"form-control-label",children:"Password"}),e("input",{type:"password",name:"password",onChange:s,className:"form-control",placeholder:"Password"}),e(o,{message:r.password})]})}),e("div",{className:"col-lg-6",children:a("div",{className:"form-group",children:[e("label",{className:"form-control-label",children:"Confirm Password"}),e("input",{type:"password",className:"form-control",onChange:s,name:"password_confirmation",placeholder:"Confirm Password"}),e(o,{message:r.password_confirmation})]})})]}),e("div",{className:"update-profile",children:e(p,{type:"submit",className:"btn btn-primary",loading:t,children:"Update Profile"})})]})]})})})})})}export{B as default};
