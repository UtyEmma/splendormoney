import{P as o}from"./Pagination.d31e8215.js";import{u as d}from"./AffiliateContext.6ca6173d.js";import{M as n}from"./MainLayout.84dad613.js";import{j as e,a as r,L as t,F as m,d as h}from"./app.1ed4ea61.js";import{CourseCard as u}from"./CourseCard.b9b8dc8c.js";import"./Symbol.49d534b8.js";import"./Naira.4325f9c0.js";import"./useCart.b40fb3e3.js";import"./Math.62460fa9.js";import"./PriceDiscounts.b4179d29.js";import"./Rating.b97422ea.js";import"./Date.da9a6ca2.js";import"./pluralize.0e158798.js";function P({courses:a}){const{keyword:i}=d(),l=s=>{const c=s.currentTarget.value;h.Inertia.get(route("courses.list",{keyword:c}))};return e(n,{title:"Courses",children:r("section",{className:"course-content pt-4",children:[e("div",{className:"breadcrumb-bar bg-transparent",children:e("div",{className:"container",children:e("div",{className:"row",children:e("div",{className:"col-md-12 col-12",children:e("div",{className:"breadcrumb-list",children:e("nav",{"aria-label":"breadcrumb",className:"page-breadcrumb",children:r("ol",{className:"breadcrumb",children:[e("li",{className:"breadcrumb-item",children:e(t,{href:route("pages.home"),children:"Home"})}),e("li",{className:"breadcrumb-item","aria-current":"page",children:"Courses"})]})})})})})})}),r("div",{className:"container",children:[e("div",{className:"row",children:r("div",{className:"col-lg-12",children:[e("div",{className:"showing-list",children:r("div",{className:"row",children:[e("div",{className:"col-lg-6",children:e("div",{className:"d-flex align-items-center",children:e("div",{className:"show-filter add-course-info w-100",children:e("form",{action:"#",children:r("div",{className:" search-group w-75",children:[e("i",{className:"feather-search"}),e("input",{type:"text",defaultValue:i,onChange:l,name:"search",className:"w-100 form-control",placeholder:"Search our courses"})]})})})})}),e("div",{className:"col-lg-6",children:e("div",{className:"col-md-8 offset-md-4",children:e("div",{className:"form-group select-form mb-0",children:r("select",{className:"form-select select",id:"sel1",name:"sellist1",children:[e("option",{children:"Newly published "}),e("option",{children:"published 1"}),e("option",{children:"published 2"}),e("option",{children:"published 3"})]})})})})]})}),a.total>0?e(m,{children:e("div",{className:"row",children:a.data.map(s=>e(u,{course:s}))})}):e("div",{})]})}),e(o,{pagination:a})]})]})})}export{P as default};
