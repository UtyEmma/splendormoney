import{P as t}from"./Pagination.d31e8215.js";import{R as s}from"./Rating.b97422ea.js";import{A as n}from"./AdminLayout.0370dad7.js";import{ReviewModal as l}from"./ReviewModal.12e189a5.js";import{j as e,a as r,L as c}from"./app.1ed4ea61.js";import"./MainLayout.84dad613.js";import"./Symbol.49d534b8.js";import"./Naira.4325f9c0.js";import"./useCart.b40fb3e3.js";import"./Math.62460fa9.js";import"./AffiliateContext.6ca6173d.js";import"./Button.9b9201ed.js";import"./InputError.2613fea2.js";function x({reviews:a}){return e(n,{title:"Reviews",children:e("div",{className:"settings-widget",children:r("div",{className:"settings-inner-blk p-0",children:[r("div",{className:"sell-course-head comman-space",children:[e("h3",{children:"Reviews"}),e("p",{children:"View your Reviews."})]}),a.total>0?a.data.map(i=>e("div",{className:"comman-space bdr-bottom-line",children:e("div",{className:"instruct-review-blk ",children:r("div",{className:"review-item",children:[r("div",{className:"instructor-wrap border-0 m-0",children:[e("div",{className:"about-instructor",children:r("div",{className:"instructor-detail",children:[e("h5",{children:e("a",{href:"instructor-profile.html",children:i.course.name})}),e("p",{children:i.course.instructor.name})]})}),e(s,{rating:i.rating})]}),e("p",{className:"rev-info",children:i.review}),r("div",{className:"d-flex gap-3",children:[e(l,{course:i.course,review:i,children:r("span",{className:"btn btn-reply",children:[e("i",{className:"feather-edit-alt"})," Edit Review"]})}),e(c,{href:route("admin.reviews.delete",{review:i.id}),className:"btn btn-reply text-danger",children:"Delete Review"})]})]})})})):e("div",{className:"p-4",children:e("div",{className:"border text-center p-5 rounded-3",children:e("h2",{children:"There are no reviews to show at the moment!"})})}),e(t,{pagination:a})]})})})}export{x as default};
