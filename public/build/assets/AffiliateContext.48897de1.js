import{r,a as n}from"./app.f808fee2.js";const c=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},t=r.exports.createContext({getReferrer:()=>{},setReferrer:()=>{}}),i=()=>r.exports.useContext(t),l=({children:e})=>{const{ref:s}=c(),a=()=>{localStorage.setItem("referrer",s||"")},o=()=>localStorage.getItem("referrer");return n(t.Provider,{value:{setReferrer:a,getReferrer:o},children:e})};export{l as A,i as a,c as u};