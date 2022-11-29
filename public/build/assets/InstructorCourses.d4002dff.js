import{N as r}from"./Naira.f3522ddb.js";import{P as l}from"./Pagination.1bbd12f0.js";import{I as t}from"./InstructorLayout.84f0adc2.js";import{D as c}from"./Date.da9a6ca2.js";import{a as e,j as i,L as n}from"./app.f808fee2.js";import{p as d}from"./pluralize.376fa04d.js";import"./MainLayout.b6911946.js";import"./Symbol.43b767c2.js";import"./useCart.66bfafbe.js";import"./Math.62460fa9.js";import"./Disclose.a694b962.js";import"./AffiliateContext.48897de1.js";function k({courses:s}){return e(t,{title:"Courses",children:e("div",{className:"row",children:e("div",{className:"col-md-12",children:e("div",{className:"settings-widget",children:i("div",{className:"settings-inner-blk p-0",children:[i("div",{className:"sell-course-head comman-space",children:[e("h3",{children:"Courses"}),e("p",{children:"Manage your courses and its update like live, draft and insight."})]}),i("div",{className:"comman-space",children:[e("div",{className:"instruct-search-blk",children:e("div",{className:"show-filter choose-search-blk",children:e("form",{action:"#",children:i("div",{className:"row gx-2 align-items-center",children:[e("div",{className:"col-md-6 col-item",children:i("div",{className:" search-group",children:[e("i",{className:"feather-search"}),e("input",{type:"text",className:"form-control",placeholder:"Search our courses"})]})}),e("div",{className:"col-md-6 col-lg-6 col-item"})]})})})}),e("div",{className:"settings-tickets-blk course-instruct-blk table-responsive",children:i("table",{className:"table table-nowrap mb-2",children:[e("thead",{children:i("tr",{children:[e("th",{className:"px-2",children:"Courses"}),e("th",{children:"Students"}),e("th",{children:"Earnings"}),e("th",{children:"Status"}),e("th",{})]})}),e("tbody",{children:s.total>0?s.data.map(a=>i("tr",{children:[e("td",{children:i("div",{className:"sell-table-group d-flex align-items-center",children:[e("div",{className:"sell-group-img overflow-hidden rounded-3",children:e("a",{href:"course-details.html",children:e("img",{src:a.image,className:"img-fluid",style:{objectFit:"cover"},alt:""})})}),i("div",{className:"sell-tabel-info",children:[e("p",{children:e("a",{href:"course-details.html",children:a.name})}),i("div",{className:"course-info d-flex align-items-center border-bottom-0 pb-0",children:[i("div",{className:"rating-img d-flex align-items-center",children:[e("img",{src:"/assets/img/icon/icon-01.svg",alt:""}),i("p",{children:[a.lectures_count," ",d("Lesson",a.lectures_count)]})]}),i("div",{className:"course-view d-flex align-items-center",children:[e("img",{src:"/assets/img/icon/timer-start.svg",alt:""}),e("p",{children:c.secondsToHms(a.course_duration)})]})]})]})]})}),e("td",{children:a.enrollments_count}),i("td",{children:[e(r,{})," ",a.transactions_sum_amount?a.transactions_sum_amount.toLocaleString():0]}),e("td",{children:e("span",{className:"badge info-low",children:a.status.toUpperCase()})})]})):e("tr",{children:e("td",{colSpan:5,className:"text-center",children:i("div",{className:"border p-4",children:[e("h3",{children:"Nothing to Display"}),e("p",{children:"There are no Courses available! Click the button below to create a new Course"}),e("div",{className:"py-3",children:e(n,{href:route("admin.courses.create"),className:"btn btn-primary",children:"Add New Course"})})]})})})})]})}),e(l,{pagination:s})]})]})})})})})}export{k as default};
