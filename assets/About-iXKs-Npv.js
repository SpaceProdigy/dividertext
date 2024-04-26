import{u as x,g as y,a as d,d as v,s as f,B as h,m,P as S,j as s,T as g}from"./index-Deoqgdu7.js";function k(e,n,t,r,a){const[o,p]=d.useState(()=>a&&t?t(e).matches:r?r(e).matches:n);return v(()=>{let c=!0;if(!t)return;const i=t(e),l=()=>{c&&p(i.matches)};return l(),i.addListener(l),()=>{c=!1,i.removeListener(l)}},[e,t]),o}const w=d.useSyncExternalStore;function j(e,n,t,r,a){const o=d.useCallback(()=>n,[n]),p=d.useMemo(()=>{if(a&&t)return()=>t(e).matches;if(r!==null){const{matches:u}=r(e);return()=>u}return o},[o,e,r,a,t]),[c,i]=d.useMemo(()=>{if(t===null)return[o,()=>()=>{}];const u=t(e);return[()=>u.matches,b=>(u.addListener(b),()=>{u.removeListener(b)})]},[o,t,e]);return w(i,c,p)}function T(e,n={}){const t=x(),r=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:a=!1,matchMedia:o=r?window.matchMedia:null,ssrMatchMedia:p=null,noSsr:c=!1}=y({name:"MuiUseMediaQuery",props:n,theme:t});let i=typeof e=="function"?e(t):e;return i=i.replace(/^@media( ?)/m,""),(w!==void 0?j:k)(i,a,o,p,c)}const Q=f(h)`
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
`,E=m(Q),L=f(h)`
  height: ${({matches400:e})=>e==="false"?"70px":"none"};

  overflow-y: auto;
  position: absolute;
  bottom: 0;
  width: 100%;
  background: ${({theme:e})=>e.palette.mode==="dark"?"#000000bb":"#ffffffbb"};
  padding: 15px;
  scrollbar-width: thin;
`,M=m(L),W=f(h)(({theme:e,imageurl:n})=>({width:"100%",position:"relative",backgroundImage:`url(${n})`,[e.breakpoints.up("lg")]:{height:"600px"},[e.breakpoints.between(900,1200)]:{height:"500px"},[e.breakpoints.between(400,900)]:{height:"400px"},[e.breakpoints.down(400)]:{height:"300px"},backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",borderRadius:"5px"})),_=m(W);function I({arr:e}){const n=T("(min-width:400px)");return s.jsx(s.Fragment,{children:s.jsx(h,{sx:{width:"100%",marginTop:6,marginBottom:6,display:"flex",alignItems:"center",flexDirection:"column",gap:5},children:e.map(({title:t,description:r,imageUrl:a,id:o},p)=>s.jsxs(_,{id:o,initial:{y:70},whileInView:{y:0},transition:{type:"spring",bounce:.4,duration:.8},viewport:{once:!0},imageurl:a,children:[s.jsx(E,{initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.8},viewport:{once:!0,amount:1},children:s.jsx(g,{textAlign:"center",whiteSpace:n?"nowrap":"wrap",variant:"h5",children:t})}),s.jsx(M,{matches400:String(n),initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.8},viewport:{once:!0,amount:.8},children:s.jsx(g,{textAlign:"center",variant:"subtitle2",component:"p",children:r})})]},p))})})}I.propTypes={arr:S.array};export{I as A};
