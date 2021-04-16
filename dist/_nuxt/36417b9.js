(window.webpackJsonp=window.webpackJsonp||[]).push([[15,7],{321:function(e,r,t){"use strict";t.r(r);var o={name:"TitlePage",props:{titleText:{type:String,required:!0}}},d=t(24),component=Object(d.a)(o,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"title__page my-5"},[t("h1",{staticClass:"text-center text-5xl uppercase font-semibold text-teal-900"},[e._v(e._s(e.titleText))])])}),[],!1,null,"e3b26020",null);r.default=component.exports},333:function(e,r,t){var content=t(345);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(52).default)("283e534c",content,!0,{sourceMap:!1})},344:function(e,r,t){"use strict";t(333)},345:function(e,r,t){var o=t(51)(!1);o.push([e.i,'.page__signup{background-image:linear-gradient(120deg,#e0c3dc,#e2acdb);font-family:"Baloo 2",cursive;display:flex;align-items:center;justify-content:center;font-size:18px;border-radius:10px}.title{font-family:"Lobster",cursive;padding:0 15px;text-shadow:0 0 5px #000;margin:0 auto}.title-1{background-image:linear-gradient(180deg,transparent 0,transparent 68%,#6fcffb 0,#6fcffb 95%,transparent 0);font-size:50px;margin-bottom:30px}.container{width:500px;display:flex;flex-direction:column;border-radius:0}.form__group{margin-bottom:20px;position:relative;padding:20px;width:0}.submitBtn{background-color:#000;color:#fff;border:none;font-weight:400;padding:15px 25px;margin-top:5px;font-size:15px}.submitBtn:hover{transform:scale(1.02) translateY(-2px)}.submitBtn:active{transform:scale(.98) translateY(1px)}',""]),e.exports=o},368:function(e,r,t){"use strict";t.r(r);var o={components:{Title:t(321).default},data:function(){return{firstName:"",lastName:"",email:"",successMessage:"",password:"",mobile:"",age:"",adress:"",isAdmin:""}},methods:{signup:function(){var e=this,body={firstName:this.firstName,lastName:this.lastName,age:this.age,email:this.email,password:this.password,mobile:this.mobile,adress:this.adress,isAdmin:!1};this.$register(body).then((function(data){if(console.log(data),data.auth){var r=data.token;localStorage.setItem("token",r),localStorage.setItem("user",data.user),e.$store.commit("isAuth"),e.$router.push("account")}else e.messageError=data.message})).catch((function(e){return console.log(e)}))}}},d=(t(344),t(24)),component=Object(d.a)(o,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"flex items-center min-h-screen bg-gray-50 dark:bg-gray-900"},[t("div",{staticClass:"container mx-auto"},[t("div",{staticClass:"max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm"},[e._m(0),e._v(" "),t("div",{staticClass:"m-7"},[t("form",[t("input",{attrs:{type:"hidden",name:"apikey",value:"YOUR_ACCESS_KEY_HERE"}}),e._v(" "),t("input",{attrs:{type:"hidden",name:"subject",value:"New Submission from Web3Forms"}}),e._v(" "),t("input",{staticStyle:{display:"none"},attrs:{type:"checkbox",name:"botcheck",id:""}}),e._v(" "),t("div",{staticClass:"mb-6"},[t("label",{staticClass:"block mb-2 text-sm text-gray-600 dark:text-gray-400",attrs:{for:"firstName"}},[e._v("FirstName")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.firstName,expression:"firstName"}],staticClass:"w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500",attrs:{type:"text",name:"name",id:"name",placeholder:"your firstname",required:""},domProps:{value:e.firstName},on:{input:function(r){r.target.composing||(e.firstName=r.target.value)}}})]),e._v(" "),t("div",{staticClass:"mb-6"},[t("label",{staticClass:"block mb-2 text-sm text-gray-600 dark:text-gray-400",attrs:{for:"lastName"}},[e._v("LastName")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.lastName,expression:"lastName"}],staticClass:"w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500",attrs:{type:"text",name:"lastname",id:"lastname",placeholder:" your lastname",required:""},domProps:{value:e.lastName},on:{input:function(r){r.target.composing||(e.lastName=r.target.value)}}})]),e._v(" "),t("div",{staticClass:"mb-6"},[t("label",{staticClass:"block mb-2 text-sm text-gray-600 dark:text-gray-400",attrs:{for:"passWord"}},[e._v("PassWord")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.passWord,expression:"passWord"}],staticClass:"w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500",attrs:{type:"text",name:"passWord",id:"passWord",placeholder:"mot de passe",required:""},domProps:{value:e.passWord},on:{input:function(r){r.target.composing||(e.passWord=r.target.value)}}})]),e._v(" "),t("div",{staticClass:"mb-6"},[t("label",{staticClass:"block mb-2 text-sm text-gray-600 dark:text-gray-400",attrs:{for:"email"}},[e._v("Email Address")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500",attrs:{type:"email",name:"email",id:"email",placeholder:"email",required:""},domProps:{value:e.email},on:{input:function(r){r.target.composing||(e.email=r.target.value)}}})]),e._v(" "),t("div",{staticClass:"mb-6"},[t("label",{staticClass:"block mb-2 text-sm text-gray-600 dark:text-gray-400",attrs:{for:"mobile"}},[e._v("Mobile")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.mobile,expression:"mobile"}],staticClass:"w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500",attrs:{type:"mobile",name:"mobile",id:"email",placeholder:"0987655444",required:""},domProps:{value:e.mobile},on:{input:function(r){r.target.composing||(e.mobile=r.target.value)}}})]),e._v(" "),t("div",{staticClass:"mb-6"},[t("label",{staticClass:"block mb-2 text-sm text-gray-600 dark:text-gray-400",attrs:{for:"adress"}},[e._v("Adress-ville")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.mobile,expression:"mobile"}],staticClass:"w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500",attrs:{type:"adress",name:"adress",id:"adress",placeholder:" 10 rue de la paix 83000",required:""},domProps:{value:e.mobile},on:{input:function(r){r.target.composing||(e.mobile=r.target.value)}}})]),e._v(" "),t("div",{staticClass:"mb-6"},[t("label",{staticClass:"text-sm text-gray-600 dark:text-gray-400",attrs:{for:"age"}},[e._v("Age")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.age,expression:"age"}],staticClass:"w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500",attrs:{type:"number",name:"age",id:"age",placeholder:"votre age",required:""},domProps:{value:e.age},on:{input:function(r){r.target.composing||(e.age=r.target.value)}}})]),e._v(" "),t("div",{staticClass:"mb-6"},[t("button",{staticClass:"w-full px-3 py-4 text-white bg-pink-500 rounded-md focus:bg-orange-600 focus:outline-none",on:{click:function(r){return r.preventDefault(),e.signup(r)}}},[e._v("Sign up")])])]),e._v(" "),e.messageError?t("div",{staticClass:"message__error"},[e._v(" \n                    "+e._s(e.messageError)+"\n                ")]):e._e()])])])])}),[function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"text-center"},[t("h1",{staticClass:"my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200"},[e._v("Inscription")]),e._v(" "),t("p",{staticClass:"text-gray-400 dark:text-gray-400"},[e._v("Remplissez le formulaire suivant afin de vous inscrire")])])}],!1,null,null,null);r.default=component.exports;installComponents(component,{Button:t(150).default})}}]);