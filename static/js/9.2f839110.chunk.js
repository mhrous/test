(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[9],{750:function(e,a,r){"use strict";r.r(a);var t=r(39),n=r(184),i=r(634),s=r(752),o=r(648),l=r(753),c=r(150),d=r(616),m=r(644),u=r(18),b=r(25),h=r.n(b),j=r(41),x=r(21),p=r(660),O=r(659),g=r(622),y=r(746),f=r(640),v=r(638),w=r(112),S=r(657),N=r(1),k=function(e){var a=Object(S.a)(),r=Object(x.f)(),t=Object(w.a)().register;return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)(O.a,{initialValues:{email:"",password:"",phoneNumber:"",policy:!0,submit:null},validationSchema:p.c().shape({email:p.e().email("Must be a valid email").max(255).required("Email is required"),phoneNumber:p.e().max(255).required("Phone Number is required"),password:p.e().min(7).max(255).required("Password is required"),policy:p.b().oneOf([!0],"This field must be checked")}),onSubmit:function(){var e=Object(j.a)(h.a.mark((function e(n,i){var s,o,l;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=i.setErrors,o=i.setStatus,l=i.setSubmitting,e.prev=1,e.next=4,t(n.email,n.password);case 4:r("/authentication/verify-code",{state:{username:n.email}}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0),a.current&&(o({success:!1}),s({submit:e.t0.message}),l(!1));case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(a,r){return e.apply(this,arguments)}}(),children:function(a){var r=a.errors,t=a.handleBlur,n=a.handleChange,s=a.handleSubmit,o=a.isSubmitting,l=a.touched,d=a.values;return Object(N.jsxs)("form",Object(u.a)(Object(u.a)({noValidate:!0,onSubmit:s},e),{},{children:[Object(N.jsx)(g.a,{error:Boolean(l.email&&r.email),fullWidth:!0,helperText:l.email&&r.email,label:"Email Address",margin:"normal",name:"email",onBlur:t,onChange:n,type:"email",value:d.email,variant:"outlined"}),Object(N.jsx)(g.a,{error:Boolean(l.phoneNumber&&r.phoneNumber),fullWidth:!0,helperText:l.phoneNumber&&r.phoneNumber,label:"Phone Number",margin:"normal",name:"PhoneNumber",onBlur:t,onChange:n,type:"string",value:d.phoneNumber,variant:"outlined"}),Object(N.jsx)(g.a,{error:Boolean(l.password&&r.password),fullWidth:!0,helperText:l.password&&r.password,label:"Password",margin:"normal",name:"password",onBlur:t,onChange:n,type:"password",value:d.password,variant:"outlined"}),Object(N.jsxs)(i.a,{sx:{alignItems:"center",display:"flex",ml:-1,mt:2},children:[Object(N.jsx)(y.a,{checked:d.policy,color:"primary",name:"policy",onChange:n}),Object(N.jsxs)(c.a,{color:"textSecondary",variant:"body2",children:["I have read the"," ",Object(N.jsx)(m.a,{color:"primary",component:"a",href:"#",children:"Terms and Conditions"})]})]}),Boolean(l.policy&&r.policy)&&Object(N.jsx)(f.a,{error:!0,children:r.policy}),r.submit&&Object(N.jsx)(i.a,{sx:{mt:3},children:Object(N.jsx)(f.a,{error:!0,children:r.submit})}),Object(N.jsx)(i.a,{sx:{mt:2},children:Object(N.jsx)(v.a,{color:"primary",disabled:o,fullWidth:!0,size:"large",type:"submit",variant:"contained",children:"Register"})})]}))}})})},B=r(683);a.default=function(){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(n.a,{children:Object(N.jsx)("title",{children:"Register | Material Kit Pro"})}),Object(N.jsxs)(i.a,{sx:{backgroundColor:"background.default",display:"flex",minHeight:"100vh"},children:[Object(N.jsx)(i.a,{children:Object(N.jsx)(s.a,{maxWidth:"sm",sx:{py:"10px"},children:Object(N.jsx)(o.a,{sx:{background:"none !important",boxShadow:"none !important"},children:Object(N.jsxs)(l.a,{sx:{display:"flex",flexDirection:"column",p:4},children:[Object(N.jsxs)(i.a,{sx:{alignItems:"center",display:"flex",justifyContent:"space-between",mb:3},children:[Object(N.jsxs)("div",{children:[Object(N.jsx)(c.a,{color:"textPrimary",gutterBottom:!0,variant:"h4",children:"Register"}),Object(N.jsx)(c.a,{color:"textSecondary",variant:"body2",children:"Register on the internal platform"})]}),Object(N.jsx)(i.a,{sx:{height:32,"& > img":{maxHeight:"100%",width:"auto"}}})]}),Object(N.jsx)(i.a,{sx:{flexGrow:1,mt:3},children:Object(N.jsx)(k,{})}),Object(N.jsx)(d.a,{sx:{my:3}}),Object(N.jsx)(m.a,{color:"textSecondary",component:t.b,to:"/authentication/login",variant:"body2",underline:"none",children:"Having an account"})]})})})}),Object(N.jsx)(i.a,{children:Object(N.jsx)(B.a,{})})]})]})}}}]);
//# sourceMappingURL=9.2f839110.chunk.js.map