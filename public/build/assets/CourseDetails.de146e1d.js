import{B as b}from"./Button.9b9201ed.js";import{E as N}from"./Editor.1ce85276.js";import{I as m}from"./InputError.2613fea2.js";import{r as f,a as r,F as g,j as e,b as C}from"./app.1ed4ea61.js";import{g as x}from"./Youtube.399c6be6.js";import{u as w}from"./Stepper.27eb05a6.js";import{u as y}from"./CourseContext.54a3a102.js";import{F as V}from"./Form.0fac4ef2.js";const S=({children:u,...l})=>{const[i,a]=f.exports.useState(l.defaultValue||""),n=t=>{const s=URL.createObjectURL(t.currentTarget.files[0]);s&&a(s),l.onChange&&l.onChange(t)};return r(g,{children:[e("div",{className:"form-group",children:e("div",{children:r("label",{className:"btn btn-block border mb-0",children:[e("input",{type:"file",name:l.name,onChange:n,hidden:!0}),u]})})}),e("div",{className:"form-group",children:e("div",{className:"add-image-box position-relative overflow-hidden",style:{height:"40px"},children:i&&e("img",{src:i,alt:"",className:"w-100 h-100",style:{objectFit:"cover"}})})})]})},I=({children:u,...l})=>{const[i,a]=f.exports.useState(""),n=t=>{const s=x(t.currentTarget.value);s&&a(`https://www.youtube.com/embed/${s}`),l.onChange&&l.onChange(t)};return f.exports.useEffect(()=>{l.defaultValue&&a(l.defaultValue)},[]),r(g,{children:[e("div",{className:"form-group",children:e("input",{type:"text",className:"form-control",name:l.name,placeholder:"https://",defaultValue:l.defaultValue,onChange:n})}),e("div",{className:"form-group p-0",children:e("div",{className:"add-image-box p-0 position-relative overflow-hidden",style:{height:"40px"},children:e("iframe",{width:"560",height:"100%",src:i,title:"YouTube video player",frameBorder:0,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})})]})},U=({instructors:u})=>{const l=w(),{setCourse:i,course:a}=y(),{data:n,setData:t,post:s,errors:o,processing:p,put:v}=C({name:(a==null?void 0:a.name)||"",instructor:(a==null?void 0:a.instructor.id)||"",description:(a==null?void 0:a.description)||"",price:(a==null?void 0:a.price)||0,discount:(a==null?void 0:a.discount)||0,image:"",video:(a==null?void 0:a.video)||""}),d=c=>{t(c.currentTarget.name,V.value(c.currentTarget))};return e("fieldset",{id:"first",children:r("div",{className:"add-course-info",children:[e("div",{className:"add-course-inner-header",children:e("h4",{children:"Basic Information"})}),e("div",{className:"add-course-form",children:r("form",{onSubmit:c=>{c.preventDefault(),a?v(route("admin.courses.update",{course:a==null?void 0:a.id}),{onSuccess:h=>{i(h.props.course),l==null||l.next()}}):s(route("admin.courses.store"),{onSuccess:h=>{i(h.props.course),l==null||l.next()}})},children:[r("div",{className:"row",children:[e("div",{className:"col-md-8",children:r("div",{className:"form-group",children:[e("label",{className:"add-course-label",children:"Course Title"}),e("input",{type:"text",name:"name",value:n.name,onChange:d,className:"form-control",placeholder:"Course Title"}),e(m,{message:o.name})]})}),e("div",{className:"col-md-4",children:r("div",{className:"form-group",children:[e("label",{className:"add-course-label",children:"Instructor"}),r("select",{onChange:d,defaultValue:n.instructor,className:"form-select form-control",name:"instructor",children:[e("option",{value:"",children:"Select Instructor"}),u.map(c=>e("option",{value:c.id,children:c.name}))]}),e(m,{message:o.instructor})]})})]}),r("div",{className:"form-group mb-4",children:[e("label",{className:"add-course-label",children:"Course Description"}),e(N,{name:"description",defaultValue:n.description,onChange:d}),e(m,{message:o.description})]}),r("div",{className:"row",children:[e("div",{className:"col-md-6",children:r("div",{className:"form-group",children:[e("label",{className:"add-course-label",children:"Price"}),e("input",{type:"number",onChange:d,defaultValue:a==null?void 0:a.price,placeholder:"0.00",name:"price",className:"form-control"}),e(m,{message:o.price})]})}),e("div",{className:"col-md-6",children:r("div",{className:"form-group",children:[e("label",{className:"add-course-label",children:"Discount"}),e("input",{type:"number",onChange:d,defaultValue:a==null?void 0:a.discount,placeholder:"0.00",max:100,min:0,name:"discount",className:"form-control"}),e(m,{message:o.discount})]})})]}),r("div",{className:"row",children:[r("div",{className:"col-md-6",children:[e("label",{className:"add-course-label",children:"Course cover image"}),e(S,{onChange:d,defaultValue:a==null?void 0:a.image,name:"image",children:"Select Course Image"}),e(m,{message:o.image})]}),r("div",{className:"col-md-6",children:[e("label",{className:"add-course-label",children:"Promotional Video URL (Youtube) "}),e(I,{name:"video",defaultValue:a==null?void 0:a.video,onChange:d}),e(m,{message:o.video})]})]}),e("div",{className:"widget-btn justify-content-end d-flex px-0",children:e(b,{type:"submit",loading:p,className:"btn btn-info-light next_btn",children:"Save and Proceed"})})]})})]})})};export{U as CourseDetails};
