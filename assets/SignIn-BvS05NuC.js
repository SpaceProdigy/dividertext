import{s as S,a as l,j as e,T as f}from"./index-BSW4_OFU.js";import{u as j,o as I,l as b}from"./authShema-D40QNxvo.js";import{F as u,I as m,O as d,a as g}from"./OutlinedInput-BpdbBATF.js";import{B as v}from"./Button-Cewlq9IY.js";const y=S("form")`
  width: 90%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,J=()=>{var n,i;const[t,s]=l.useState(JSON.parse(localStorage.getItem("signin"))&&JSON.parse(localStorage.getItem("signin"))),{register:a,handleSubmit:c,formState:{errors:o},reset:p}=j({resolver:I(b),mode:"onBlur",defaultValues:t&&t}),x=r=>{console.log(r),p(),s(),localStorage.removeItem("signin")};return l.useEffect(()=>{(JSON.parse(localStorage.getItem("signin"))||t)&&localStorage.setItem("signin",JSON.stringify(t))},[t]),e.jsx(e.Fragment,{children:e.jsxs(y,{onSubmit:c(x),children:[e.jsx(f,{variant:"h5",sx:{mb:3},children:"Sing in"}),e.jsxs(u,{variant:"outlined",fullWidth:!0,children:[e.jsx(m,{variant:"outlined",children:"Login"}),e.jsx(d,{label:"Login",placeholder:"Enter your login or email",onInput:r=>s(h=>({...h,login:r.target.value})),...a("login")}),e.jsx(g,{sx:{minHeight:40},error:!0,children:(n=o.login)==null?void 0:n.message})]}),e.jsxs(u,{variant:"outlined",fullWidth:!0,children:[e.jsx(m,{variant:"outlined",children:"Password"}),e.jsx(d,{label:"Password",type:"password",placeholder:"Enter your password",...a("password")}),e.jsx(g,{sx:{minHeight:40},error:!0,children:(i=o.password)==null?void 0:i.message})]}),e.jsx(v,{type:"submit",variant:"contained",fullWidth:!0,size:"large",children:"Submit"})]})})};export{J as default};
