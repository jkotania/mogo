"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[164],{4370:(e,t,s)=>{s.d(t,{A:()=>n});var a=s(5155),l=s(5565),r=s(8173),o=s.n(r);function n(){return(0,a.jsx)("footer",{className:"bg-white text-gray-800 py-8 mt-12 border-t text-center",children:(0,a.jsxs)("div",{className:"mx-auto px-4 sm:px-6 lg:px-4",children:[(0,a.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12",children:[(0,a.jsxs)("div",{className:"flex flex-col items-center order-2 lg:order-1",children:[(0,a.jsx)("h3",{className:"text-xl sm:text-2xl font-bold mb-4 sm:mb-6",children:"Nawigacja"}),(0,a.jsxs)("nav",{className:"flex flex-col space-y-3 sm:space-y-4",children:[(0,a.jsxs)(o(),{href:"/",className:"text-gray-600 hover:text-gray-900 transition-colors relative group",children:["Strona gł\xf3wna",(0,a.jsx)("span",{className:"absolute bottom-0 left-0 w-0 h-0.5 bg-[#121CFF] group-hover:w-full transition-all duration-300"})]}),(0,a.jsxs)(o(),{href:"/projects",className:"text-gray-600 hover:text-gray-900 transition-colors relative group",children:["Projekty",(0,a.jsx)("span",{className:"absolute bottom-0 left-0 w-0 h-0.5 bg-[#121CFF] group-hover:w-full transition-all duration-300"})]}),(0,a.jsxs)(o(),{href:"/offer",className:"text-gray-600 hover:text-gray-900 transition-colors relative group",children:["Oferta",(0,a.jsx)("span",{className:"absolute bottom-0 left-0 w-0 h-0.5 bg-[#121CFF] group-hover:w-full transition-all duration-300"})]}),(0,a.jsxs)(o(),{href:"/",onClick:e=>{e.preventDefault(),window.location.href="/#contact-form",setTimeout(()=>{var e;null===(e=document.getElementById("contact-form"))||void 0===e||e.scrollIntoView({behavior:"smooth",block:"start"})},100)},className:"text-gray-600 hover:text-gray-900 transition-colors relative group",children:["Kontakt",(0,a.jsx)("span",{className:"absolute bottom-0 left-0 w-0 h-0.5 bg-[#121CFF] group-hover:w-full transition-all duration-300"})]})]})]}),(0,a.jsxs)("div",{className:"flex flex-col items-center order-1 lg:order-2 mb-8 sm:mb-0",children:[(0,a.jsx)(l.default,{src:"/logo.svg",alt:"MOGO Logo",width:150,height:40,className:"mb-4 sm:mb-6 w-32 sm:w-40 lg:w-48 h-auto"}),(0,a.jsx)("p",{className:"text-gray-600 text-md sm:text-md max-w-xs sm:max-w-sm lg:max-w-md text-center px-4",children:"Mogo to firma z 24-letnim doświadczeniem w tworzeniu ekskluzywnych mebli na wymiar. Specjalizujemy się w projektowaniu i wykonawstwie mebli dostosowanych do indywidualnych potrzeb klienta."})]}),(0,a.jsxs)("div",{className:"flex flex-col items-center order-3",children:[(0,a.jsx)("h3",{className:"text-xl sm:text-2xl font-bold mb-4 sm:mb-6",children:"Kontakt"}),(0,a.jsxs)("div",{className:"space-y-3 sm:space-y-4 text-center",children:[(0,a.jsxs)("p",{className:"text-gray-600 text-sm sm:text-base",children:[(0,a.jsx)("span",{className:"block font-semibold",children:"Adres:"}),"ul. Drzewna 16, Katowice"]}),(0,a.jsxs)("p",{className:"text-gray-600 text-sm sm:text-base",children:[(0,a.jsx)("span",{className:"block font-semibold",children:"Telefon:"}),"+48 123 456 789"]}),(0,a.jsxs)("p",{className:"text-gray-600 text-sm sm:text-base",children:[(0,a.jsx)("span",{className:"block font-semibold",children:"Email:"}),"contact@mogo.com"]})]})]})]}),(0,a.jsx)("div",{className:"border-gray-200 mt-8 sm:mt-12 pt-4 sm:pt-6 text-center",children:(0,a.jsxs)("p",{className:"text-gray-500 text-xs sm:text-sm",children:["\xa9 ",new Date().getFullYear()," MOGO. Wszelkie prawa zastrzeżone."]})})]})})}},9670:(e,t,s)=>{s.d(t,{A:()=>d});var a=s(5155),l=s(2888),r=s(8173),o=s.n(r),n=s(2115),i=s(5565),c=s(9806),m=s(6046);let x=e=>{let{isOpen:t,onClose:s}=e,[l,r]=(0,n.useState)(""),[o,i]=(0,n.useState)(""),[m,x]=(0,n.useState)(!0),[d,u]=(0,n.useState)(null),h=(0,c.createClientComponentClient)(),g=async e=>{e.preventDefault(),u(null);try{if(m){let{error:e}=await h.auth.signInWithPassword({email:l,password:o});if(e)throw e}else{let{error:e}=await h.auth.signUp({email:l,password:o});if(e)throw e}s(),alert(m?"Zalogowano pomyślnie!":"Zarejestrowano pomyślnie!"),window.location.href="/profile"}catch(e){u(e.message)}};return t?(0,a.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",children:(0,a.jsxs)("div",{className:"bg-white rounded-lg p-8 w-full max-w-md mx-4",children:[(0,a.jsx)("h2",{className:"text-2xl font-bold mb-6",children:m?"Logowanie":"Rejestracja"}),(0,a.jsxs)("form",{onSubmit:g,className:"space-y-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-1",children:"Email"}),(0,a.jsx)("input",{id:"email",type:"email",value:l,onChange:e=>r(e.target.value),required:!0,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700 mb-1",children:"Hasło"}),(0,a.jsx)("input",{id:"password",type:"password",value:o,onChange:e=>i(e.target.value),required:!0,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),d&&(0,a.jsx)("div",{className:"text-red-500 text-sm",children:d}),(0,a.jsx)("button",{type:"submit",className:"w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200",children:m?"Zaloguj się":"Zarejestruj się"}),(0,a.jsx)("div",{className:"text-center mt-4",children:(0,a.jsx)("button",{type:"button",onClick:()=>x(!m),className:"text-blue-600 hover:underline text-sm",children:m?"Nie masz konta? Zarejestruj się":"Masz już konto? Zaloguj się"})})]}),(0,a.jsx)("button",{onClick:s,className:"absolute top-4 right-4 text-gray-500 hover:text-gray-700",children:(0,a.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]})}):null};function d(){let[e,t]=(0,n.useState)(!1),[s,r]=(0,n.useState)(!1),[d,u]=(0,n.useState)(null),h=(0,m.useRouter)(),g=(0,c.createClientComponentClient)();(0,n.useEffect)(()=>{(async()=>{let{data:{user:e}}=await g.auth.getUser();u(e)})();let{data:{subscription:e}}=g.auth.onAuthStateChange((e,t)=>{var s;u(null!==(s=null==t?void 0:t.user)&&void 0!==s?s:null)});return()=>e.unsubscribe()},[g]);let p=()=>{d?h.push("/profile"):r(!0)};return(0,a.jsxs)("nav",{className:"relative w-full bg-white border-b",children:[(0,a.jsx)("div",{className:"mx-auto px-4 sm:px-6 lg:px-8",children:(0,a.jsxs)("div",{className:"flex justify-between h-24 items-center",children:[(0,a.jsx)("div",{className:"flex-shrink-0",children:(0,a.jsx)(o(),{href:"/",className:"flex items-center",children:(0,a.jsx)(i.default,{src:"../logo.svg",alt:"MOGO Logo",width:160,height:40,className:"w-[140px] lg:w-[170px]"})})}),(0,a.jsxs)("div",{className:"hidden sm:flex sm:items-center sm:space-x-8",children:[(0,a.jsxs)(o(),{href:"/projects",className:"text-gray-600 hover:text-gray-900 text-xl font-medium relative group",children:["Projekty",(0,a.jsx)("span",{className:"absolute bottom-0 left-0 w-0 h-0.5 bg-[#121CFF] group-hover:w-full transition-all duration-300"})]}),(0,a.jsxs)(o(),{href:"/offer",className:"text-gray-600 hover:text-gray-900 text-xl font-medium relative group",children:["Oferta",(0,a.jsx)("span",{className:"absolute bottom-0 left-0 w-0 h-0.5 bg-[#121CFF] group-hover:w-full transition-all duration-300"})]}),(0,a.jsxs)(o(),{href:"/",onClick:e=>{e.preventDefault(),window.location.href="/#contact-form",setTimeout(()=>{var e;null===(e=document.getElementById("contact-form"))||void 0===e||e.scrollIntoView({behavior:"smooth",block:"start"})},100)},className:"text-gray-600 hover:text-gray-900 text-xl font-medium relative group",children:["Kontakt",(0,a.jsx)("span",{className:"absolute bottom-0 left-0 w-0 h-0.5 bg-[#121CFF] group-hover:w-full transition-all duration-300"})]}),(0,a.jsxs)("div",{className:"flex items-center space-x-4 ml-6",children:[(0,a.jsx)("button",{onClick:p,className:"text-gray-600 hover:text-gray-900",children:(0,a.jsx)(l.JXP,{className:"h-6 w-6"})}),(0,a.jsx)("button",{className:"text-gray-600 hover:text-gray-900",children:(0,a.jsx)(l.VSk,{className:"h-6 w-6"})})]})]}),(0,a.jsx)("div",{className:"sm:hidden flex items-center justify-center",children:(0,a.jsx)("button",{onClick:()=>t(!e),className:"text-gray-600 hover:text-gray-900 p-2 flex items-center justify-center",children:(0,a.jsx)("svg",{className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e?(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}):(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})})]})}),e&&(0,a.jsx)("div",{className:"sm:hidden",children:(0,a.jsxs)("div",{className:"px-2 pt-2 pb-3 space-y-1 flex flex-col items-center",children:[(0,a.jsxs)(o(),{href:"/projects",className:"block px-3 py-2 text-gray-600 hover:text-gray-900 text-center w-full text-lg font-medium relative group",children:["Projekty",(0,a.jsx)("span",{className:"absolute bottom-0 left-0 w-0 h-0.5 bg-[#121CFF] group-hover:w-full transition-all duration-300"})]}),(0,a.jsxs)(o(),{href:"/offer",className:"block px-3 py-2 text-gray-600 hover:text-gray-900 text-center w-full text-lg font-medium relative group",children:["Oferta",(0,a.jsx)("span",{className:"absolute bottom-0 left-0 w-0 h-0.5 bg-[#121CFF] group-hover:w-full transition-all duration-300"})]}),(0,a.jsxs)(o(),{href:"/",onClick:e=>{e.preventDefault(),window.location.href="/#contact-form",setTimeout(()=>{var e;null===(e=document.getElementById("contact-form"))||void 0===e||e.scrollIntoView({behavior:"smooth",block:"start"})},100)},className:"block px-3 py-2 text-gray-600 hover:text-gray-900 text-center w-full text-lg font-medium relative group",children:["Kontakt",(0,a.jsx)("span",{className:"absolute bottom-0 left-0 w-0 h-0.5 bg-[#121CFF] group-hover:w-full transition-all duration-300"})]}),(0,a.jsxs)("div",{className:"flex items-center justify-center space-x-4 px-3 py-2",children:[(0,a.jsx)("button",{onClick:p,className:"text-gray-600 hover:text-gray-900",children:(0,a.jsx)(l.JXP,{className:"h-5 w-5"})}),(0,a.jsx)("button",{className:"text-gray-600 hover:text-gray-900",children:(0,a.jsx)(l.VSk,{className:"h-5 w-5"})})]})]})}),(0,a.jsx)(x,{isOpen:s,onClose:()=>r(!1)})]})}},1712:(e,t,s)=>{s.d(t,{N:()=>a});let a=(0,s(9806).createPagesBrowserClient)({supabaseUrl:"https://ziscfxqjwhtehqqzqwnx.supabase.co",supabaseKey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inppc2NmeHFqd2h0ZWhxcXpxd254Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAxNzc0NjcsImV4cCI6MjA1NTc1MzQ2N30.bQM7a90ZbmifNkRIQcrIpcfepzxgHJUObC8dQw592NQ"})}}]);