<template>
    <div class="container mx-auto">
        <div class="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
            <div class="text-center">
                <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Se connecter</h1>
            <div class="m-7">
                <form >

                    <input type="hidden" name="apikey" value="YOUR_ACCESS_KEY_HERE">
                    <input type="hidden" name="subject" value="New Submission from Web3Forms">
                    <input type="checkbox" name="botcheck" id="" style="display: none;">

                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                        <input v-model="email" type="email" name="email" id="email" placeholder="email" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                    </div>

                    <div class="mb-6">
                        <label for="passWord" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">PassWord</label>
                        <input type="text" v-model="passWord" name="passWord" id="passWord" placeholder="mot de passe" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                    </div>
                    
                   
                    <div class="mb-6">
                        <button @click.prevent="login" class="w-full px-3 py-4 text-white bg-pink-500 rounded-md focus:bg-orange-600 focus:outline-none">LogIn</button>
                    </div>
                     
                </form>
                  <div class="message__error" v-if="messageError"> 
                    {{ messageError }}
                </div>
            </div>
        </div>
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