import{r as m,u as b,b as v,j as a,F as f,a as e,H as w,L as r}from"./app.f808fee2.js";import{I as n}from"./InputError.85f33561.js";import{B as L}from"./Button.308c5ec0.js";function S({status:x,canResetPassword:k}){const[c,t]=m.exports.useState("password"),{app:d}=b().props,{data:i,setData:g,post:u,processing:h,errors:o,reset:p}=v({email:"",password:"",remember:!1});m.exports.useEffect(()=>()=>{p("password")},[]);const l=s=>{g(s.currentTarget.name,s.currentTarget.type==="checkbox"?s.currentTarget.checked:s.currentTarget.value)},N=s=>{s.preventDefault(),u(route("login"))};return a(f,{children:[e(w,{title:"Log in"}),e("div",{className:"main-wrapper log-wrap",children:a("div",{className:"row",children:[e("div",{className:"col-md-6 login-bg",children:a("div",{className:"owl-carousel login-slide owl-theme",children:[a("div",{className:"welcome-login",children:[e("div",{className:"login-banner",children:e("img",{src:"/assets/img/login-img.png",className:"img-fluid",alt:"Logo"})}),a("div",{className:"mentor-course text-center",children:[a("h2",{children:["Welcome to ",e("br",{}),"DreamsLMS Courses."]}),e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."})]})]}),a("div",{className:"welcome-login",children:[e("div",{className:"login-banner",children:e("img",{src:"/assets/img/login-img.png",className:"img-fluid",alt:"Logo"})}),a("div",{className:"mentor-course text-center",children:[a("h2",{children:["Welcome to ",e("br",{}),"DreamsLMS Courses."]}),e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."})]})]}),a("div",{className:"welcome-login",children:[e("div",{className:"login-banner",children:e("img",{src:"/assets/img/login-img.png",className:"img-fluid",alt:"Logo"})}),a("div",{className:"mentor-course text-center",children:[a("h2",{children:["Welcome to ",e("br",{}),"DreamsLMS Courses."]}),e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."})]})]})]})}),e("div",{className:"col-md-6 login-wrap-bg",children:a("div",{className:"login-wrapper",children:[e("div",{className:"loginbox",children:a("div",{className:"w-100",children:[a("div",{className:"img-logo",children:[e(r,{href:route("pages.home"),children:e("img",{src:d.logo,className:"img-fluid",alt:"Logo"})}),e("div",{className:"back-home",children:e(r,{href:route("pages.home"),children:"Back to Home"})})]}),e("h1",{children:"Sign into Your Account"}),a("form",{onSubmit:N,children:[a("div",{className:"form-group",children:[e("label",{className:"form-control-label",children:"Email"}),e("input",{type:"email",className:"form-control",name:"email",value:i.email,onChange:l,placeholder:"Enter your email address"}),e(n,{message:o.email})]}),a("div",{className:"form-group",children:[e("label",{className:"form-control-label",children:"Password"}),a("div",{className:"pass-group",children:[e("input",{type:c,className:"form-control pass-input",name:"password",value:i.password,onChange:l,placeholder:"Enter your password"}),e("span",{role:"button",onClick:()=>t(c==="password"?"text":"password"),className:"feather-eye toggle-password"})]}),e(n,{message:o.password})]}),e("div",{className:"forgot",children:e("span",{children:e(r,{className:"forgot-link",href:route("password.request"),children:"Forgot Password ?"})})}),a("div",{className:"remember-me",children:[a("label",{className:"custom_check mr-2 mb-0 d-inline-flex remember-me",children:[" Remember me",e("input",{type:"checkbox",name:"remember",checked:i.remember,onChange:l}),e("span",{className:"checkmark"})]}),e(n,{message:o.remember})]}),e("div",{className:"d-grid",children:e(L,{type:"submit",loading:h,children:"Login"})})]})]})}),e("div",{className:"google-bg text-center",children:a("p",{className:"mb-0",children:["Do not have an account? ",e(r,{href:"/register",children:"Create an Account"})]})})]})})]})})]})}export{S as default};
