"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[192],{9192:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var r=n(9439),a=n(9434),o=n(4165),c=n(5861),s=n(719),i=n(1267),u=n(4227),l=n(6351),d=n(1830),m=n.n(d),f=n(184),h=function(e){var t=e.contact,n=t.id,r=t.name,d=t.number,h=(0,a.v9)(l.xU),p=(0,a.I0)(),x=function(){var e=(0,c.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m().fire({icon:"warning",title:"Are you sure?",text:"You are about to delete ".concat(r),showCancelButton:!0,confirmButtonText:"Delete ".concat(r),confirmButtonColor:"red"});case 3:if(!e.sent.isConfirmed){e.next=10;break}return e.next=7,p((0,u.ku)(n));case 7:return e.next=9,p((0,u.m$)());case 9:m().fire({title:"".concat(r," has been deleted!"),icon:"success",confirmButtonColor:"#4289fe"});case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return(0,f.jsxs)(i.ContactItem,{children:[(0,f.jsx)(i.Name,{children:r}),(0,f.jsxs)(i.ContactWrapper,{children:[(0,f.jsxs)(i.PhoneWrapper,{href:"tel:".concat(d),children:[(0,f.jsx)(s.a54,{color:"rgba(66, 137, 254, 255)"}),d]}),(0,f.jsx)(s.SW4,{type:"button",name:"delete",value:n,onClick:x,disabled:h,cursor:"pointer",color:"red"})]})]})},p=n(2791),x=function(){var e=(0,a.v9)(l.hF),t=(0,a.I0)();return(0,p.useEffect)((function(){t((0,u.m$)())}),[t]),(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(i.List,{children:e.length?e.map((function(e){var t=e.id,n=e.name,r=e.number;return(0,f.jsx)(h,{contact:{id:t,name:n,number:r}},t)})):(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(i.Info,{children:"No contacts"})})})})},v=n(5145),b=function(){var e=(0,a.v9)(l.AD),t=(0,a.I0)();return(0,f.jsx)(i.FilterInput,{type:"text",name:"filter",placeholder:"Search contacts by name",value:e,onChange:function(e){t((0,v.T)(e.target.value))}})},j=n(4164);function C(e){var t=e.onClose,n=(0,p.useState)(""),s=(0,r.Z)(n,2),d=s[0],h=s[1],x=(0,p.useState)(""),v=(0,r.Z)(x,2),b=v[0],j=v[1],C=(0,a.v9)(l.Af),g=(0,a.v9)(l.Uv),k=(0,a.I0)(),y=function(e){var t=e.target,n=t.value;"name"===t.name?h(n):j(n)},w=function(){var e=(0,c.Z)((0,o.Z)().mark((function e(n){var r,a;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=d.toLowerCase().trim(),!C.find((function(e){return e.name.toLowerCase().trim()===r}))){e.next=7;break}return m().fire({icon:"info",title:"".concat(d," is already in contacts"),confirmButtonColor:"#4289fe"}),e.abrupt("return");case 7:return a={name:d,number:b},t(),e.next=11,k((0,u.G3)(a));case 11:return e.next=13,k((0,u.m$)());case 13:if(h(""),j(""),!g){e.next=20;break}return m().fire({icon:"error",position:"top-center",title:"Error!",text:"".concat(g),showConfirmButton:!1,timer:2e3}),e.abrupt("return");case 20:m().fire({icon:"success",position:"top-center",title:"Success!",text:"".concat(d," has been successfully added!"),showConfirmButton:!1,timer:2e3});case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i.SectionTitle,{children:"Add contact"}),(0,f.jsxs)(i.Form,{onSubmit:w,autoComplete:"off",children:[(0,f.jsxs)(i.FormLabel,{children:["Name",(0,f.jsx)(i.Input,{type:"text",name:"name",value:d,onChange:y,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,f.jsxs)(i.FormLabel,{children:["Number",(0,f.jsx)(i.Input,{type:"tel",name:"number",value:b,onChange:y,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,f.jsx)(i.FormBtn,{type:"submit",disabled:!d||!b,children:"Add contact"})]})]})}var g=document.querySelector("#modal-root");function k(e){var t=e.onClose;(0,p.useEffect)((function(){return document.addEventListener("keydown",n),function(){document.removeEventListener("keydown",n)}}));var n=function(e){"Escape"===e.code&&t()};return(0,j.createPortal)((0,f.jsx)(i.Overlay,{onClick:function(e){e.currentTarget===e.target&&t()},children:(0,f.jsx)(i.ModalLayer,{children:(0,f.jsx)(C,{onClose:t})})}),g)}var y=n(8439),w=n(3768),Z=function(){var e=(0,p.useState)(!1),t=(0,r.Z)(e,2),n=t[0],a=t[1],o=function(){a(!n)};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(i.ContactsSectionWrapper,{children:[(0,f.jsx)(i.SectionTitle,{children:"Contacts"}),(0,f.jsx)(w.Z,{title:"Add contact",children:(0,f.jsx)(y.Z,{fontSize:"large","aria-label":"Add contact",onClick:o,sx:{fill:"rgba(66, 137, 254, 255)"}})})]}),(0,f.jsx)(b,{}),(0,f.jsx)(x,{}),n&&(0,f.jsx)(k,{onClose:o})]})}}}]);
//# sourceMappingURL=192.d569c8ae.chunk.js.map