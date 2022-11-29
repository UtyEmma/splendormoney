import{B as f}from"./Button.308c5ec0.js";import{E as g}from"./Editor.cba972ca.js";import{I as o}from"./InputError.85f33561.js";import{S as v}from"./SelectThumbnail.d3d7b039.js";import{S as N}from"./SweetAlert.8defb5e2.js";import{A as b}from"./AdminLayout.83ea1885.js";import{F as w}from"./Form.0fac4ef2.js";import{S as C}from"./Status.0e147aa3.js";import{b as y,r as E,a as e,j as a}from"./app.f808fee2.js";import"./MainLayout.b6911946.js";import"./Symbol.43b767c2.js";import"./Naira.f3522ddb.js";import"./useCart.66bfafbe.js";import"./Math.62460fa9.js";import"./Disclose.a694b962.js";import"./AffiliateContext.48897de1.js";function U({instructor:s}){const{data:i,processing:m,setData:d,errors:l,reset:p,post:u}=y({name:s.name,email:s.email,description:s.description,password:"",password_confirmation:"",status:s.status,avatar:"",instructor_id:s.id}),n=E.exports.useRef(null),r=t=>{d(t.currentTarget.name,w.value(t.currentTarget))},h=t=>{t.preventDefault(),N({title:"Are you sure you wish to update this Instructors's details",status:"warning",text:'Click "Confirm" to continue',onSuccess:()=>{u(route("admin.instructors.update",{user:s.id}),{onSuccess:()=>{var c;(c=n.current)==null||c.reset(),p()}})}})};return e(b,{title:`Edit Instructor - ${s.name}`,children:e("div",{className:"settings-widget profile-details",children:e("form",{onSubmit:h,ref:n,children:e("div",{className:"settings-menu p-0",children:a("div",{className:"checkout-form personal-address add-course-info",children:[a("div",{className:"personal-info-head",children:[e("h4",{children:"Edit Instructor Details"}),e("p",{children:"Edit your personal information and address."})]}),a("div",{className:"row",children:[a("div",{className:"col-12",children:[e("div",{className:"course-group border-0 px-0 mb-0 d-flex",children:e(v,{onChange:r,defaultValue:s.avatar,name:"avatar"})}),e(o,{message:l.avatar})]}),e("div",{className:"col-12",children:a("div",{className:"form-group w-25",children:[a("label",{htmlFor:"",children:["Instructor Status ",e("span",{className:`badge p-2 badge-${C[s.status]}`,children:s.status})," "]}),a("select",{className:"form-select form-control",name:"status",onChange:r,children:[e("option",{selected:s.status==="active",value:"active",children:"Active"}),e("option",{selected:s.status==="inactive",value:"inactive",children:"Inactive"})]})]})}),e("div",{className:"col-lg-6",children:a("div",{className:"form-group",children:[e("label",{className:"form-control-label",children:"Full Name"}),e("input",{type:"text",name:"name",onChange:r,defaultValue:i.name,className:"form-control",placeholder:"Full Name"}),e(o,{message:l.name})]})}),e("div",{className:"col-lg-6",children:a("div",{className:"form-group",children:[e("label",{className:"form-control-label",children:"Email"}),e("input",{type:"text",className:"form-control",onChange:r,defaultValue:i.email,name:"email",placeholder:"Enter your Email"}),e(o,{message:l.email})]})}),e("div",{className:"col-lg-12",children:a("div",{className:"form-group",children:[e("label",{className:"form-control-label",children:"About"}),e(g,{onChange:r,name:"description",defaultValue:i.description}),e(o,{message:l.description})]})}),a("div",{children:[e("h4",{children:"Reset Instructor's Password"}),a("div",{className:"row",children:[e("div",{className:"col-lg-6",children:a("div",{className:"form-group",children:[e("label",{className:"form-control-label",children:"Password"}),e("input",{type:"password",name:"password",onChange:r,className:"form-control",placeholder:"Password"}),e(o,{message:l.password})]})}),e("div",{className:"col-lg-6",children:a("div",{className:"form-group",children:[e("label",{className:"form-control-label",children:"Confirm Password"}),e("input",{type:"password",className:"form-control",onChange:r,name:"password_confirmation",placeholder:"Confirm Password"}),e(o,{message:l.password_confirmation})]})})]})]}),e("div",{className:"update-profile",children:e(f,{type:"submit",className:"btn btn-primary",loading:m,children:"Update Profile"})})]})]})})})})})}export{U as default};