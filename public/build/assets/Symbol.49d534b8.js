import{j as e,F as o}from"./app.1ed4ea61.js";const a=({image:r,name:t,size:c=50,className:i})=>{const l=()=>{if(r||!t)return;if(t.length<=2)return t;const[s,n]=t.split(" ");return n?`${s.charAt(0)}${n.charAt(0)}`:`${s.charAt(0)}${s.charAt(1)}`};return e(o,{children:r?e("img",{src:r,className:"img-fluid",style:{objectFit:"cover"}}):e("span",{className:`rounded-circle overflow-hidden p-2 bg-secondary d-flex align-items-center justify-content-center ${i}`,style:{width:`${c}px`,height:`${c}px`},children:e("h4",{className:"my-0 text-white",style:{fontSize:`${c/2}px`},children:l()})})})};export{a as S};
