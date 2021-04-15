<template>
<div class="flex items-center min-h-screen bg-gray-50 dark:bg-gray-900">
    <div class="page__login mx-auto">
        <TitlePage titleText="Login" class="title title-1"/>
        <form class="form__login">
    
            <div class="form__group">
                <label >Email</label>
                <input type="email" v-model="email" name="email"/>
            </div>
            
            <div class="form__group">
                <label>Password</label>
                <input type="password" v-model="password" name="password"/>
            </div>

            <div class="form__group">
                <button class="submitBtn" type="submit" @click.prevent="login">LogIn </button>
            </div>

            <div class="message__error" v-if="messageError">
                {{messageError}}
            </div>
        </form>
    </div>
</div>
    
</template>

<script>
    
    import FormGroup from "../components/ui/FormGroup";
    import TitlePage from "../components/ui/TitlePage";

    export default {
        components:{
            FormGroup, TitlePage
        },
        data: function () {
            return {
                email:"",
                password:"",
                messageError:""
            }
        },
        methods: {
            login: function () {
                const body = {
                    email:this.email,
                    password: this.password
                }
                this.$login(body)
                .then((data) => {
                    console.log(data);
                    if(!data.auth) {
                        this.messageError = data.message;
                    }
                    else {
                        let token = data.token;
                        localStorage.setItem('token',token);
                        this.$store.commit('isAuth');
                        this.$router.push('account');
                    }
                }
                )
                .catch(err => console.log(err))
            }
        }
    }
</script>

<style>
.page__login {
    background-color: thistle;
    height: 80vh;
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
    border-radius: 5px;
    margin-block: 5px;
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