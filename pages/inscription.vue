<template>
  <div class="flex items-center min-h-screen bg-gray-50 dark:bg-gray-900">
    <div class="page__signup mx-auto">
    <TitlePage titleText="contact" class="title title-1"/>
    <form class="contact__form">
      <div class="form__group">
        <label htmlFor="firstName">FirstName</label>
        <input type="text" v-model="firstName" />
      </div>
      <div class="form__group">
        <label htmlFor="lastName">LastName</label>
        <input type="text" v-model="lastName" />
      </div>
     <div class="form__group">
        <label htmlFor="adress">Adress</label>
        <input type="adress" v-model="adress" />
      </div>
    
      <div class="form__group">
        <label htmlFor="email">Email</label>
        <input type="email" v-model="email" />
      </div>
      <div class="form__group">
        <label htmlFor="mobile">Mobile</label>
        <input type="mobile" v-model="mobile" />
      </div>
      <div class="form__group">
        <label htmlFor="password">Password</label>
        <input type="text" v-model="password" />
      </div>    
      <div class="form__group">
        <button class="submitBtn" type="button" @click.prevent="signup">SignUp</button>
      </div>
      <div class="success__message" v-if="successMessage">
        {{successMessage}}
      </div>
      </form>
    </div>
  </div>
</template>

<script>

import Title from '../components/ui/TitlePage'

export default {
  components:{
    Title
  },
  data: function() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      successMessage:"",
      password:"",
      mobile:"",
      age:"",
      adress:"",
      isAdmin:"",
    };
  },
  methods: {
    signup: function () {
                const body = {
                    firstName:this.firstName,
                    lastName:this.lastName,
                    age:this.age,
                    email:this.email,
                    password: this.password,
                    mobile:this.mobile,
                    adress:this.adress,
                    isAdmin:false,
                }
                this.$register(body)
                .then((data) => {
                    console.log(data);
                    if(!data.auth) {
                        this.messageError = data.message;
                    }
                    else {
                        let token = data.token;
                        localStorage.setItem('token',token);
                        localStorage.setItem("user",data.user);
                        this.$store.commit('isAuth');
                        this.$router.push('account');
                    }
                }
                )
                .catch(err => console.log(err))
            }
  }
};
</script>

<style>
.page__signup {
    background-image: linear-gradient(120deg, #e0c3dc 0%, #e2acdb 100%);
    font-family: "Baloo 2", cursive;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    border-radius: 10px;
}
.title {
    font-family: "Lobster", cursive;
    padding: 0 15px;
    text-shadow: 0 0 5px rgba(0, 0, 0, 1);
    margin: 0 auto;
}

.title-1 {
    background-image: linear-gradient(
        to bottom,
        transparent 0%,
        transparent 68%,
        #6fcffb 68%,
        #6fcffb 95%,
        transparent 95%
    );
    font-size: 50px;
    margin-bottom: 30px;
}
.container {
    width: 500px;
    display: flex;
    flex-direction: column;
    border-radius: 0px;
}
.form__group {
    margin-bottom: 20px;
    position: relative;
    padding : 20px 20px;
    width: 0%;
}
.submitBtn {
     background-color: #000;
    color: #fff;
    border: none;
    font-weight: 400;
    padding: 15px 25px;
    margin-top: 5px;
    font-size: 15px;
}

.submitBtn:hover {
    transform: scale(1.02) translateY(-2px);
}
.submitBtn:active {
    transform: scale(0.98) translateY(1px);
}
</style>
