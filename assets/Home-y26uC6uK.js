import{u as b,g as x,r as d,a as v,s as f,B as m,m as h,j as n,T as w}from"./index-CmMLkjMR.js";function k(e,i,t,r,a){const[s,u]=d.useState(()=>a&&t?t(e).matches:r?r(e).matches:i);return v(()=>{let c=!0;if(!t)return;const o=t(e),l=()=>{c&&u(o.matches)};return l(),o.addListener(l),()=>{c=!1,o.removeListener(l)}},[e,t]),s}const y=d.useSyncExternalStore;function S(e,i,t,r,a){const s=d.useCallback(()=>i,[i]),u=d.useMemo(()=>{if(a&&t)return()=>t(e).matches;if(r!==null){const{matches:p}=r(e);return()=>p}return s},[s,e,r,a,t]),[c,o]=d.useMemo(()=>{if(t===null)return[s,()=>()=>{}];const p=t(e);return[()=>p.matches,g=>(p.addListener(g),()=>{p.removeListener(g)})]},[s,t,e]);return y(o,c,u)}function j(e,i={}){const t=b(),r=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:a=!1,matchMedia:s=r?window.matchMedia:null,ssrMatchMedia:u=null,noSsr:c=!1}=x({name:"MuiUseMediaQuery",props:i,theme:t});let o=typeof e=="function"?e(t):e;return o=o.replace(/^@media( ?)/m,""),(y!==void 0?S:k)(o,a,s,u,c)}const T=[{title:"Effective Time Management",description:"Manage your time effectively with our website! Track tasks, set priorities, and achieve your goals without unnecessary stress.",imageUrl:"https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_1280.jpg"},{title:"Increase Productivity",description:"Be more productive every day! Our website will help you organize your life by providing tools for planning, tracking, and completing tasks.",imageUrl:"https://cdn.pixabay.com/photo/2016/03/26/13/09/workspace-1280538_1280.jpg"},{title:"Convenience and Ease of Use",description:"Let's make your life easier and more convenient! The helper site offers a wide range of features to help you organize your work and increase your efficiency.",imageUrl:"https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg"}],_=f(m)`
  width: 90%;
  overflow-y: auto;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: ${({theme:e})=>e.palette.mode==="dark"?"#000000bb":"#ffffffbb"};
  padding: 15px;
  border-radius: 5px;
  scrollbar-width: thin;
`,E=h(_),M=f(m)`
  height: ${({matches400:e})=>e==="false"?"70px":"none"};
  overflow-y: auto;
  position: absolute;
  bottom: 0;
  width: 100%;
  background: ${({theme:e})=>e.palette.mode==="dark"?"#000000bb":"#ffffffbb"};
  padding: 15px;
  scrollbar-width: thin;
`,L=h(M),Q=f(m)`
  width: 100%;
  position: relative;
  background-image: ${({imageurl:e})=>`url(${e})`};
  height: ${({matches400:e})=>e==="true"?"400px":"300px"};
  max-width: ${({matches400:e})=>e==="true"?"700px":""};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 5px;
`,U=h(Q);function $(){const e=j("(min-width:400px)");return n.jsx(n.Fragment,{children:n.jsx(m,{sx:{marginTop:6,marginBottom:6,display:"flex",alignItems:"center",flexDirection:"column",gap:5},children:T.map(({title:i,description:t,imageUrl:r},a)=>n.jsxs(U,{initial:{y:70},whileInView:{y:0},transition:{type:"spring",bounce:.4,duration:.8},viewport:{once:!0},imageurl:r,matches400:String(e),children:[n.jsx(E,{initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.8},viewport:{once:!0,amount:1},children:n.jsx(w,{textAlign:"center",whiteSpace:e?"nowrap":"wrap",variant:"h5",children:i})}),n.jsx(L,{matches400:String(e),initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.8},viewport:{once:!0,amount:.8},children:n.jsx(w,{textAlign:"center",variant:"subtitle2",component:"p",children:t})})]},a))})})}const I=()=>n.jsx(n.Fragment,{children:n.jsx($,{})});export{I as default};
