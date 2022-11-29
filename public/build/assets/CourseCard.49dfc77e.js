import{S as a}from"./Symbol.43b767c2.js";import{P as t}from"./PriceDiscounts.6c880fd2.js";import{R as c}from"./Rating.51f09892.js";import{u as d}from"./useCart.66bfafbe.js";import{D as m}from"./Date.da9a6ca2.js";import{u as o,a as e,j as s,L as r,F as h}from"./app.f808fee2.js";import{p as u}from"./pluralize.376fa04d.js";import"./Math.62460fa9.js";const _=({course:i})=>{const n=d(),{auth:l}=o().props;return e("div",{className:"course-box course-design d-flex ",children:s("div",{className:"product",children:[s("div",{className:"product-img overflow-hidden",style:{height:"250px"},children:[e(r,{href:route("courses.single",{course:i.slug}),children:e("img",{className:"img-fluid",style:{objectFit:"cover",minHeight:"100%",minWidth:"100%"},alt:"",src:i.image})}),e("div",{className:"price ",children:e("h3",{children:e(t,{course:i})})})]}),s("div",{className:"product-content",children:[s("div",{className:"course-group d-flex",children:[s("div",{className:"course-group-img d-flex align-items-center",children:[e("div",{className:"me-2",children:e(a,{image:i.instructor.avatar,size:45,name:i.instructor.name})}),s("div",{className:"course-name",children:[e("h4",{className:"mb-0",children:e("p",{children:i.instructor.name})}),e("p",{className:"mb-0",children:"Instructor"})]})]}),l.user&&e("div",{className:"course-share d-flex align-items-center justify-content-center",children:e(r,{href:route("student.wishlist.toggle",{course:i.id}),children:e("i",{className:`fa-heart ${i.wishlist_count?"fa-solid":"fa-regular"}`})})})]}),e("h3",{className:"title",children:e(r,{href:route("courses.single",{course:i.slug}),children:i.name})}),s("div",{className:"course-info d-flex align-items-center",children:[s("div",{className:"rating-img d-flex align-items-center",children:[e("img",{src:"/assets/img/icon/icon-01.svg",alt:""}),s("p",{children:[i.lectures_count,"+ ",u("Lesson",i.lectures_count)]})]}),e("div",{className:"course-view d-flex align-items-center",children:i.course_duration&&s(h,{children:[e("img",{src:"/assets/img/icon/icon-02.svg",alt:""}),e("p",{children:m.secondsToHms(i.course_duration)})]})})]}),e(c,{count:i.reviews_count,rating:i.reviews_sum_rating/i.reviews.length}),s("div",{className:"mt-4 d-flex flex-column gap-3",children:[e("button",{onClick:()=>n==null?void 0:n.add(i),className:"btn btn-lg rounded-pill btn-primary btn-outline btn-outline-primary  w-100",children:"Add To Cart"}),e(r,{href:route("courses.single",{course:i.slug}),className:"btn btn-enroll w-100",children:"Enroll Now"})]})]})]})})};export{_ as CourseCard};
