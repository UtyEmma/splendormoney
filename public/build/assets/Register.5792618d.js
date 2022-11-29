import{r as n,u as v,b,j as a,F as w,a as e,H as y,L as t}from"./app.f808fee2.js";import{F as x}from"./Form.0fac4ef2.js";import{B as L}from"./Button.308c5ec0.js";import{I as o}from"./InputError.85f33561.js";import{a as C}from"./AffiliateContext.48897de1.js";function P(){const{getReferrer:d}=C(),[m,g]=n.exports.useState("password"),{app:p}=v().props,{data:r,setData:c,post:u,processing:h,errors:s,reset:N}=b({name:"",email:"",password:"",terms:"",referrer:""}),l=i=>{c(i.currentTarget.name,x.value(i.currentTarget))},f=i=>{i.preventDefault(),u(route("register"))};return n.exports.useEffect(()=>()=>{N("password")},[]),n.exports.useEffect(()=>{c("referrer",d())},[]),a(w,{children:[e(y,{title:"Register"}),e("div",{className:"main-wrapper log-wrap",children:a("div",{className:"row",children:[e("div",{className:"col-md-6 login-bg",children:a("div",{className:"owl-carousel login-slide owl-theme",children:[a("div",{className:"welcome-login",children:[e("div",{className:"login-banner",children:e("img",{src:"/assets/img/login-img.png",className:"img-fluid",alt:"Logo"})}),a("div",{className:"mentor-course text-center",children:[a("h2",{children:["Welcome to ",e("br",{}),"DreamsLMS Courses."]}),e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."})]})]}),a("div",{className:"welcome-login",children:[e("div",{className:"login-banner",children:e("img",{src:"assets/img/login-img.png",className:"img-fluid",alt:"Logo"})}),a("div",{className:"mentor-course text-center",children:[a("h2",{children:["Welcome to ",e("br",{}),"DreamsLMS Courses."]}),e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."})]})]}),a("div",{className:"welcome-login",children:[e("div",{className:"login-banner",children:e("img",{src:"assets/img/login-img.png",className:"img-fluid",alt:"Logo"})}),a("div",{className:"mentor-course text-center",children:[a("h2",{children:["Welcome to ",e("br",{}),"DreamsLMS Courses."]}),e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."})]})]})]})}),e("div",{className:"col-md-6 login-wrap-bg",children:a("div",{className:"login-wrapper",children:[a("div",{className:"loginbox pb-5",children:[a("div",{className:"img-logo",children:[e("img",{src:p.logo,className:"img-fluid",alt:"Logo"}),e("div",{className:"back-home",children:e("a",{href:"/",children:"Back to Home"})})]}),e("h1",{children:"Sign up"}),a("form",{onSubmit:f,children:[a("div",{className:"form-group",children:[e("label",{className:"form-control-label",children:"Full Name"}),e("input",{type:"text",className:"form-control",value:r.name,onChange:l,name:"name",placeholder:"Enter your Full Name"}),e(o,{message:s.name})]}),a("div",{className:"form-group",children:[e("label",{className:"form-control-label",children:"Email"}),e("input",{type:"email",className:"form-control",value:r.email,onChange:l,name:"email",placeholder:"Enter your email address"}),e(o,{message:s.email})]}),a("div",{className:"form-group",children:[e("label",{className:"form-control-label",children:"Password"}),a("div",{className:"pass-group",id:"passwordInput",children:[e("input",{type:m,name:"password",value:r.password,onChange:l,className:"form-control pass-input",placeholder:"Enter your password"}),e("span",{role:"button",onClick:()=>g(m==="password"?"text":"password"),className:"toggle-password feather-eye"})]}),e(o,{message:s.password})]}),a("div",{className:"form-check remember-me",children:[a("label",{className:"form-check-label mb-0",children:[e("input",{className:"form-check-input",value:r.terms,onChange:l,type:"checkbox",name:"terms"})," I agree to the ",e(t,{href:"/terms",children:"Terms of Service"})," and ",e("a",{href:"privacy-policy.html",children:"Privacy Policy."})]}),e(o,{message:s.terms})]}),e("div",{className:"d-grid",children:e(L,{loading:h,children:"Create Account"})})]})]}),e("div",{className:"google-bg text-center",children:a("p",{className:"mb-0",children:["Already have an account? ",e(t,{href:"/login",children:"Sign in"})]})})]})})]})})]})}export{P as default};