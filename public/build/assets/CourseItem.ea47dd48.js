import{N as n}from"./Naira.f3522ddb.js";import{S as r}from"./Swal.81a62e51.js";import{j as t,a as e,L as i,d as l}from"./app.f808fee2.js";import{D as d}from"./Date.da9a6ca2.js";import{p as c}from"./pluralize.376fa04d.js";import"./SweetAlert.8defb5e2.js";const f=({course:s})=>{const a=()=>{l.Inertia.delete(route("admin.courses.delete",{course:s.id}))};return t("tr",{children:[e("td",{children:t("div",{className:"sell-table-group d-flex align-items-center",children:[e("div",{className:"sell-group-img overflow-hidden rounded-3",children:e(i,{href:route("admin.courses.edit",{course:s.slug}),children:e("img",{src:s.image,className:"img-fluid",style:{objectFit:"cover"},alt:""})})}),t("div",{className:"sell-tabel-info",children:[e("p",{children:e(i,{href:route("admin.courses.edit",{course:s.slug}),children:s.name})}),t("div",{className:"course-info d-flex align-items-center border-bottom-0 pb-0",children:[t("div",{className:"rating-img d-flex align-items-center",children:[e("img",{src:"/assets/img/icon/icon-01.svg",alt:""}),t("p",{children:[s.lectures_count," ",c("Lesson",s.lectures_count)]})]}),t("div",{className:"course-view d-flex align-items-center",children:[e("img",{src:"/assets/img/icon/timer-start.svg",alt:""}),e("p",{children:d.secondsToHms(s.course_duration)})]})]})]})]})}),e("td",{children:s.enrollments_count}),t("td",{children:[e(n,{})," ",s.transactions_sum_amount?s.transactions_sum_amount.toLocaleString():0]}),e("td",{children:e("span",{className:"badge info-low",children:s.status.toUpperCase()})}),e("td",{children:t("div",{className:"d-flex gap-2",children:[e(i,{href:route("admin.courses.edit",{slug:s.slug}),className:"btn btn-primary btn-sm btn-icon",children:e("span",{className:"feather-edit-2"})}),e(r,{element:"span",status:"warning",text:"Are you sure you want to delete this Course?",onSuccess:a,className:"btn btn-danger btn-sm btn-icon",children:e("span",{className:"feather-trash-2"})})]})})]})};export{f as CourseItem};
