import{S as m}from"./Swal.81a62e51.js";import{D as d}from"./Disclose.a694b962.js";import{r as p,j as a,a as e}from"./app.f808fee2.js";import{CourseLecture as h}from"./CourseLecture.4c0bbdf7.js";import{NewLecture as b}from"./NewLecture.9c60349f.js";import"./SweetAlert.8defb5e2.js";import"./Button.308c5ec0.js";import"./InputError.85f33561.js";import"./CourseContext.c4a3e5a3.js";import"./Form.0fac4ef2.js";const O=({module:t,index:s})=>{var l;const[c,r]=p.exports.useState(t.lectures.length<1),n=()=>{};return a("div",{className:"bg-light rounded-3 mb-4 py-0 px-4",children:[a("div",{className:"d-flex justify-content-between align-items-center py-3",children:[a("a",{style:{fontWeight:"500"},className:"mb-0 fs-5 fw-medium text-black","data-bs-toggle":"collapse",href:"#collapseOne-"+s,children:["Section ",s,": ",t.title]}),a("div",{className:"d-flex align-items-center gap-3",children:[e("a",{onClick:()=>r(!0),"data-bs-toggle":"collapse",href:"#collapseOne-"+s,className:"btn btn-primary",children:"Add Lecture"}),a("div",{className:"d-flex gap-3",children:[e(m,{element:"span",onSuccess:n,text:"Are you sure you wish to delete this module and its contents?",status:"warning",className:"btn-sm btn btn-danger btn-icon",children:e("i",{className:"feather-trash"})}),e("a",{"data-bs-toggle":"collapse",href:"#collapseOne-"+s,className:"btn btn-sm btn-icon btn-light",children:e("span",{className:"feather-chevron-down fs-4"})})]})]})]}),a("div",{className:"curriculum-info collapse pb-3",id:"collapseOne-"+s,"data-bs-parent":"#module-accordion",children:[e("div",{id:"lecture-accordion",children:(l=t==null?void 0:t.lectures)==null?void 0:l.map((o,i)=>e(h,{lecture:o,index:i+1,module_no:s}))}),e(d,{show:c,children:e(b,{module:t,setShowNew:r})})]})]})};export{O as CourseModule};
