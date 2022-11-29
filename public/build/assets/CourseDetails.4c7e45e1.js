import{B as b}from"./Button.308c5ec0.js";import{E as C}from"./Editor.cba972ca.js";import{I as c}from"./InputError.85f33561.js";import{r as g,j as l,F as p,a as e,b as y}from"./app.f808fee2.js";import{g as x}from"./Youtube.399c6be6.js";import{u as V}from"./Stepper.0286bb12.js";import{u as w}from"./CourseContext.c4a3e5a3.js";import{F as S}from"./Form.0fac4ef2.js";const I=({children:u,...r})=>{const[i,d]=g.exports.useState(r.defaultValue||""),a=t=>{const m=URL.createObjectURL(t.currentTarget.files[0]);m&&d(m),r.onChange&&r.onChange(t)};return l(p,{children:[e("div",{className:"form-group",children:e("div",{children:l("label",{className:"btn btn-block border mb-0",children:[e("input",{type:"file",name:r.name,onChange:a,hidden:!0}),u]})})}),e("div",{className:"form-group",children:e("div",{className:"add-image-box position-relative overflow-hidden",style:{height:"40px"},children:i&&e("img",{src:i,alt:"",className:"w-100 h-100",style:{objectFit:"cover"}})})})]})},F=({children:u,...r})=>{const[i,d]=g.exports.useState(""),a=t=>{const m=x(t.currentTarget.value);m&&d(`https://www.youtube.com/embed/${m}`),r.onChange&&r.onChange(t)};return g.exports.useEffect(()=>{r.defaultValue&&d(r.defaultValue)},[]),l(p,{children:[e("div",{className:"form-group",children:e("input",{type:"text",className:"form-control",name:r.name,placeholder:"https://",defaultValue:r.defaultValue,onChange:a})}),e("div",{className:"form-group p-0",children:e("div",{className:"add-image-box p-0 position-relative overflow-hidden",style:{height:"40px"},children:e("iframe",{width:"560",height:"100%",src:i,title:"YouTube video player",frameBorder:0,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})})]})},W=({instructors:u,categories:r})=>{const i=V(),{setCourse:d,course:a}=w(),{data:t,setData:m,post:f,errors:s,processing:v,put:N}=y({name:(a==null?void 0:a.name)||"",instructor:(a==null?void 0:a.instructor.id)||"",description:(a==null?void 0:a.description)||"",price:(a==null?void 0:a.price)||0,discount:(a==null?void 0:a.discount)||0,image:"",video:(a==null?void 0:a.video)||"",category:a==null?void 0:a.category,status:(a==null?void 0:a.status)||"active"}),o=n=>{m(n.currentTarget.name,S.value(n.currentTarget))};return e("fieldset",{id:"first",children:l("div",{className:"add-course-info",children:[e("div",{className:"add-course-inner-header",children:e("h4",{children:"Basic Information"})}),e("div",{className:"add-course-form",children:l("form",{onSubmit:n=>{n.preventDefault(),a?N(route("admin.courses.update",{course:a==null?void 0:a.id}),{onSuccess:h=>{d(h.props.course),i==null||i.next()}}):f(route("admin.courses.store"),{onSuccess:h=>{d(h.props.course),i==null||i.next()}})},children:[l("div",{className:"row",children:[e("div",{className:"col-md-8",children:l("div",{className:"form-group",children:[e("label",{className:"add-course-label",children:"Course Title"}),e("input",{type:"text",name:"name",value:t.name,onChange:o,className:"form-control",placeholder:"Course Title"}),e(c,{message:s.name})]})}),e("div",{className:"col-md-4",children:l("div",{className:"form-group",children:[e("label",{className:"add-course-label",children:"Course Status"}),l("select",{onChange:o,defaultValue:t.status,className:"form-select form-control",name:"instructor",children:[e("option",{value:"active",children:"Active"}),e("option",{value:"pending",children:"Pending"}),e("option",{value:"inactive",children:"Inactive"})]}),e(c,{message:s.category})]})}),e("div",{className:"col-md-6",children:l("div",{className:"form-group",children:[e("label",{className:"add-course-label",children:"Select Category"}),l("select",{onChange:o,defaultValue:t.category,className:"form-select form-control",name:"instructor",children:[e("option",{value:"",children:"Select Category"}),r.map(n=>e("option",{value:n.id,children:n.name}))]}),e(c,{message:s.category})]})}),e("div",{className:"col-md-6",children:l("div",{className:"form-group",children:[e("label",{className:"add-course-label",children:"Instructor"}),l("select",{onChange:o,defaultValue:t.instructor,className:"form-select form-control",name:"instructor",children:[e("option",{value:"",children:"Select Instructor"}),u.map(n=>e("option",{value:n.id,children:n.name}))]}),e(c,{message:s.instructor})]})})]}),l("div",{className:"form-group mb-4",children:[e("label",{className:"add-course-label",children:"Course Description"}),e(C,{name:"description",defaultValue:t.description,onChange:o}),e(c,{message:s.description})]}),l("div",{className:"row",children:[e("div",{className:"col-md-6",children:l("div",{className:"form-group",children:[e("label",{className:"add-course-label",children:"Price"}),e("input",{type:"number",onChange:o,defaultValue:a==null?void 0:a.price,placeholder:"0.00",name:"price",className:"form-control"}),e(c,{message:s.price})]})}),e("div",{className:"col-md-6",children:l("div",{className:"form-group",children:[e("label",{className:"add-course-label",children:"Discount"}),e("input",{type:"number",onChange:o,defaultValue:a==null?void 0:a.discount,placeholder:"0.00",max:100,min:0,name:"discount",className:"form-control"}),e(c,{message:s.discount})]})})]}),l("div",{className:"row",children:[l("div",{className:"col-md-6",children:[e("label",{className:"add-course-label",children:"Course cover image"}),e(I,{onChange:o,defaultValue:a==null?void 0:a.image,name:"image",children:"Select Course Image"}),e(c,{message:s.image})]}),l("div",{className:"col-md-6",children:[e("label",{className:"add-course-label",children:"Promotional Video URL (Youtube) "}),e(F,{name:"video",defaultValue:a==null?void 0:a.video,onChange:o}),e(c,{message:s.video})]})]}),e("div",{className:"widget-btn justify-content-end d-flex px-0",children:e(b,{type:"submit",loading:v,className:"btn btn-info-light next_btn",children:"Save and Proceed"})})]})})]})})};export{W as CourseDetails};