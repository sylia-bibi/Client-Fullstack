(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{374:function(e,r,t){"use strict";t.r(r);t(63),t(25);var o={data:function(){return{firstName:"",lastName:"",passWord:"",email:"",age:"",messageError:"",change:!1}},methods:{sendSub:function(){var e=this,r=localStorage.getItem("token");if(r){var t=this.$decodeJwt(r),body={_id:t.id,firstName:this.firstName,lastName:this.lastName,passWord:this.passWord,email:this.email,isAdmin:!1,age:this.age};console.log(this.firstName,this.lastName,this.passWord,this.email,this.age),fetch("".concat("http://localhost:3030/api/v1","/updateUser/").concat(t.id),{method:"PUT",headers:{"Content-type":"Application/json"},body:JSON.stringify(body)}).then((function(e){return e.json()})).then((function(data){console.log(data),e.change=!0,data.auth?e.$router.push("account"):e.messageError=data.message})).catch((function(e){return console.log(e)}))}else this.messageError=" Veuillez vous connecter a nouveau s'il vous plait"}}},n=t(24),component=Object(n.a)(o,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"flex items-center min-h-screen bg-gray-50 dark:bg-gray-900"},[t("div",{staticClass:"container mx-auto"},[t("div",{staticClass:"max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm"},[e._m(0),e._v(" "),t("div",{staticClass:"m-7"},[t("form",[t("input",{attrs:{type:"hidden",name:"apikey",value:"YOUR_ACCESS_KEY_HERE"}}),e._v(" "),t("input",{attrs:{type:"hidden",name:"subject",value:"New Submission from Web3Forms"}}),e._v(" "),t("input",{staticStyle:{display:"none"},attrs:{type:"checkbox",name:"botcheck",id:""}}),e._v(" "),t("div",{staticClass:"mb-6"},[t("label",{staticClass:"block mb-2 text-sm text-gray-600 dark:text-gray-400",attrs:{for:"firstName"}},[e._v("FirstName")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.firstName,expression:"firstName"}],staticClass:"w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500",attrs:{type:"text",name:"name",id:"name",placeholder:"your firstname",required:""},domProps:{value:e.firstName},on:{input:function(r){r.target.composing||(e.firstName=r.target.value)}}})]),e._v(" "),t("div",{staticClass:"mb-6"},[t("label",{staticClass:"block mb-2 text-sm text-gray-600 dark:text-gray-400",attrs:{for:"lastName"}},[e._v("LastName")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.lastName,expression:"lastName"}],staticClass:"w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500",attrs:{type:"text",name:"lastname",id:"lastname",placeholder:" your lastname",required:""},domProps:{value:e.lastName},on:{input:function(r){r.target.composing||(e.lastName=r.target.value)}}})]),e._v(" "),t("div",{staticClass:"mb-6"},[t("label",{staticClass:"block mb-2 text-sm text-gray-600 dark:text-gray-400",attrs:{for:"passWord"}},[e._v("PassWord")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.passWord,expression:"passWord"}],staticClass:"w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500",attrs:{type:"text",name:"passWord",id:"passWord",placeholder:"mot de passe",required:""},domProps:{value:e.passWord},on:{input:function(r){r.target.composing||(e.passWord=r.target.value)}}})]),e._v(" "),t("div",{staticClass:"mb-6"},[t("label",{staticClass:"block mb-2 text-sm text-gray-600 dark:text-gray-400",attrs:{for:"email"}},[e._v("Email Address")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500",attrs:{type:"email",name:"email",id:"email",placeholder:"email",required:""},domProps:{value:e.email},on:{input:function(r){r.target.composing||(e.email=r.target.value)}}})]),e._v(" "),t("div",{staticClass:"mb-6"},[t("label",{staticClass:"text-sm text-gray-600 dark:text-gray-400",attrs:{for:"age"}},[e._v("Age")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.age,expression:"age"}],staticClass:"w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500",attrs:{type:"number",name:"age",id:"age",placeholder:"votre age",required:""},domProps:{value:e.age},on:{input:function(r){r.target.composing||(e.age=r.target.value)}}})]),e._v(" "),t("div",{staticClass:"mb-6"},[t("button",{staticClass:"w-full px-3 py-4 text-white bg-pink-500 rounded-md focus:bg-orange-600 focus:outline-none",on:{click:function(r){return r.preventDefault(),e.sendSub(r)}}},[e._v("Mettre à jour")])]),e._v(" "),1==e.change?t("div",{staticClass:"message__error"},[t("p",[e._v("Vos informations ont bien été mises jour! ")]),e._v(" "),t("p",[e._v("Nom : "+e._s(this.firstName))]),e._v(" "),t("p",[e._v("Prenom :"+e._s(this.lastName))]),e._v(" "),t("p",[e._v("Email: "+e._s(this.email))]),e._v(" "),t("p",[e._v("Age: "+e._s(this.age))])]):e._e()]),e._v(" "),e.messageError?t("div",{staticClass:"message__error"},[e._v(" \n                    "+e._s(e.messageError)+"\n                ")]):e._e()])])])])}),[function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"text-center"},[t("h1",{staticClass:"my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200"},[e._v("Modifier mon compte")]),e._v(" "),t("p",{staticClass:"text-gray-400 dark:text-gray-400"},[e._v("Remplissez le formulaire suivant afin de mettre à jour vos informations")])])}],!1,null,"0902aaf4",null);r.default=component.exports;installComponents(component,{Button:t(150).default})}}]);