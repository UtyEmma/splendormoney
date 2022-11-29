import{B as g}from"./Button.308c5ec0.js";import{I as o}from"./InputError.85f33561.js";import{M as d}from"./Modal.203f954f.js";import{P as v}from"./Pagination.1bbd12f0.js";import{S as F}from"./Swal.81a62e51.js";import{A as f}from"./AdminLayout.83ea1885.js";import{F as w}from"./Form.0fac4ef2.js";import{j as t,a as e,d as y,b as x,F as k}from"./app.f808fee2.js";import"./SweetAlert.8defb5e2.js";import"./MainLayout.b6911946.js";import"./Symbol.43b767c2.js";import"./Naira.f3522ddb.js";import"./useCart.66bfafbe.js";import"./Math.62460fa9.js";import"./Disclose.a694b962.js";import"./AffiliateContext.48897de1.js";function G({faqs:s}){return console.log(s),t(f,{title:"Frequently Asked Questions",children:[e("div",{className:"mb-4"}),t("div",{className:"card",children:[t("div",{className:"card-header align-items-center justify-content-between",children:[e("div",{}),e("div",{className:"",children:e(m,{className:"btn-enroll"})})]}),t("div",{className:"card-body",children:[s.total?s.data.map(a=>t("div",{className:"faq-card",children:[e("h6",{className:"faq-title",children:e("a",{className:"collapsed","data-bs-toggle":"collapse",href:`#faqone-${a.id}`,"aria-expanded":"false",children:e("div",{className:"d-flex justify-content-between",children:e("span",{className:"me-3",children:a.question})})})}),e("div",{id:`faqone-${a.id}`,className:"collapse",children:t("div",{className:"faq-detail pb-3",children:[t("div",{children:[e(m,{className:"btn btn-sm btn-primary me-3 ",id:`faq-moda-${a.id}`,faq:a,title:"Edit Faq"}),e(F,{className:"btn btn-sm btn-danger",element:"button",text:"Are you sure you wish to delete this Faq",onSuccess:()=>y.Inertia.delete(route("admin.faq.delete",{faq:a.id})),status:"warning",children:"Delete Faq"})]}),e("div",{className:"mt-3",children:a.answer})]})})]})):e("div",{className:"border p-4",children:e("h4",{className:"mb-0",children:"No Frequently Asked Questions Added"})}),e(v,{pagination:s})]})]})]})}const m=({id:s="faq-modal",faq:a,title:c="Add Faq",className:h})=>{const{data:r,setData:u,errors:l,processing:p,post:b}=x({answer:a==null?void 0:a.answer,question:a==null?void 0:a.question,status:(a==null?void 0:a.status)||!0}),i=n=>{u(n.currentTarget.name,w.value(n.currentTarget))},N=n=>{n.preventDefault(),b(route("admin.faq.update",{faq:a==null?void 0:a.id}))};return t(k,{children:[e(d.Button,{className:h,id:s,children:c}),e(d,{id:s,title:c,children:t("form",{onSubmit:N,children:[t("div",{className:"form-group",children:[t("label",{htmlFor:"",children:["FAQ Status ",e("span",{className:`badge p-2 badge-${r.status?"primary":"warning"}`,children:r.status?"Active":"Inactive"})," "]}),t("div",{className:"form-check form-switch",children:[e("input",{className:"form-check-input",type:"checkbox",name:"status",role:"switch",id:"flexSwitchCheckChecked",onChange:i,defaultChecked:r.status}),e("label",{className:"form-check-label",htmlFor:"flexSwitchCheckChecked",children:"Status"})]}),e(o,{message:l.status})]}),t("div",{className:"form-group",children:[e("label",{htmlFor:"",className:"form-label",children:"Question"}),e("input",{type:"text",onChange:i,className:"form-control",defaultValue:r==null?void 0:r.question,name:"question"}),e(o,{message:l.question})]}),t("div",{className:"form-group",children:[e("label",{htmlFor:"",className:"form-label",children:"Answer"}),e("textarea",{className:"form-control",onChange:i,name:"answer",children:r.answer}),e(o,{message:l.answer})]}),t("div",{className:"d-flex gap-4 justify-content-end",children:[e("button",{type:"button","data-bs-target":s,"data-bs-toggle":"modal",className:"btn btn-light",children:"Cancel"}),e(g,{type:"submit",className:"btn btn-primary",loading:p,children:"Submit"})]})]})})]})};export{G as default};