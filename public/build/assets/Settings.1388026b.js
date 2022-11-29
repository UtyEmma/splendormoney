import{B as p}from"./Button.308c5ec0.js";import{I as s}from"./InputError.85f33561.js";import{S as h}from"./SelectThumbnail.d3d7b039.js";import{A as f}from"./AdminLayout.83ea1885.js";import{F as v}from"./Form.0fac4ef2.js";import{b as g,r as N,a as e,j as l}from"./app.f808fee2.js";import"./MainLayout.b6911946.js";import"./Symbol.43b767c2.js";import"./Naira.f3522ddb.js";import"./useCart.66bfafbe.js";import"./Math.62460fa9.js";import"./Disclose.a694b962.js";import"./AffiliateContext.48897de1.js";function E({settings:c}){const{data:a,setData:m,errors:r,post:i,processing:n}=g({...c,logo:""}),d=N.exports.useRef(null);function o(t){m(t.currentTarget.name,v.value(t.currentTarget))}function u(t){t.preventDefault(),console.log(a),i(route("admin.settings.update",{setting:c.id}))}return e(f,{title:"Site Settings",children:e("div",{className:"settings-widget profile-details",children:e("form",{onSubmit:u,autoComplete:"off",ref:d,children:e("div",{className:"settings-menu p-0",children:l("div",{className:"checkout-form personal-address add-course-info",children:[l("div",{className:"personal-info-head",children:[e("h4",{children:"Update Profile"}),e("p",{children:"Edit your personal information and address."})]}),l("div",{className:"row",children:[l("div",{className:"col-12",children:[e("div",{className:"course-group border-0 px-0 mb-0 d-flex",children:e(h,{onChange:o,defaultValue:c.logo,name:"logo"})}),e(s,{message:r.logo})]}),e("div",{className:"col-lg-6",children:l("div",{className:"form-group",children:[e("label",{className:"form-control-label",children:"App Name"}),e("input",{type:"text",name:"name",onChange:o,defaultValue:a.name,className:"form-control",placeholder:"App Name"}),e(s,{message:r.name})]})}),e("div",{className:"col-lg-6",children:l("div",{className:"form-group",children:[e("label",{className:"form-control-label",children:"Email"}),e("input",{type:"text",className:"form-control",onChange:o,defaultValue:a.email,name:"email",placeholder:"Enter your Email"}),e(s,{message:r.email})]})}),e("div",{className:"col-lg-6",children:l("div",{className:"form-group",children:[e("label",{className:"form-control-label",children:"Phone Number"}),e("input",{type:"text",className:"form-control",onChange:o,defaultValue:a.phone,name:"phone",placeholder:"Enter Phone Number"}),e(s,{message:r.phone})]})}),e("div",{className:"col-lg-6",children:l("div",{className:"form-group",children:[e("label",{className:"form-control-label",children:"Address"}),e("input",{type:"text",className:"form-control",onChange:o,defaultValue:a.address,name:"address",placeholder:"Enter Address"}),e(s,{message:r.address})]})}),l("div",{children:[e("h3",{className:"mb-3",children:"Payment Keys"}),l("div",{children:[l("div",{className:"form-group checkbox-toggle",children:[e("input",{type:"checkbox",defaultChecked:a.test_mode,name:"test_mode",className:"checkbox-toggle",id:""}),e("span",{className:"ms-2",children:"Test Mode"})]}),e(s,{message:r.test_mode})]})]}),e("div",{children:l("div",{className:"row",children:[e("div",{className:"col-md-6",children:l("div",{className:"form-group",children:[e("label",{className:"form-control-label",children:"Flutterwave Public Test Key"}),e("input",{type:"password",name:"flutterwave_test_public_key",onChange:o,defaultValue:a.flutterwave_test_public_key,autoComplete:"off",className:"form-control",placeholder:"Flutterwave Public Test Key"}),e(s,{message:r.flutterwave_test_public_key})]})}),e("div",{className:"col-md-6",children:l("div",{className:"form-group",children:[e("label",{className:"form-control-label",children:"Flutterwave Secret Test Key"}),e("input",{type:"password",name:"flutterwave_test_secret_key",defaultValue:a.flutterwave_test_secret_key,autoComplete:"off",onChange:o,className:"form-control",placeholder:"Flutterwave Secret Test Key"}),e(s,{message:r.flutterwave_test_secret_key})]})})]})}),e("div",{children:l("div",{className:"row",children:[e("div",{className:"col-md-6",children:l("div",{className:"form-group",children:[e("label",{className:"form-control-label",children:"Flutterwave Public Live Keys"}),e("input",{type:"password",name:"oldpassword",defaultValue:a.flutterwave_live_public_key,onChange:o,autoComplete:"off",className:"form-control",placeholder:"Flutterwave Public Live Keys"}),e(s,{message:r.flutterwave_live_public_key})]})}),e("div",{className:"col-md-6",children:l("div",{className:"form-group",children:[e("label",{className:"form-control-label",children:"Flutterwave Secret Live Keys"}),e("input",{type:"password",name:"flutterwave_live_secret_key",defaultValue:a.flutterwave_live_secret_key,autoComplete:"off",onChange:o,className:"form-control",placeholder:"Flutterwave Private Live Keys"}),e(s,{message:r.flutterwave_live_secret_key})]})})]})}),e("h3",{className:"mb-3",children:"Referral Settings"}),e("div",{className:"row",children:e("div",{className:"col-md-6",children:l("div",{className:"form-group",children:[e("label",{htmlFor:"",className:"form-label",children:"Referral Commission"}),e("input",{type:"number",name:"commission",className:"form-control",placeholder:"Comission",defaultValue:a.commission}),e(s,{message:r.commission})]})})}),e("div",{className:"update-profile",children:e(p,{type:"submit",className:"btn btn-primary",loading:n,children:"Update Settings"})})]})]})})})})})}export{E as default};