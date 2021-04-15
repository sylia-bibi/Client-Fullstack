<template>
    <div class="page__account  mx-auto">
        <TitlePage titleText="Account" />
        <div class="message__error text-center" v-if="!isLogged">
            <p> Veuillez vous connecter !</p>
        </div>
        <div class="user__content text-center" v-else>
            <p><span>Nom : {{user.firstName}}</span></p>
            <p><span>Prenom :{{user.lastName}}</span></p>
            <p><span>Email: {{user.email}}</span></p>
            <p><span>Age: {{user.age}}</span></p>
            <div class="logout__wrapper  mx-auto">
                <span><button @click="logout" style="background-color: #000;
                  color: #fff;
                  border: none;
                  font-weight: 400;
                  padding: 15px 25px;
                  margin-top: 5px;
                  font-size: 15px;">Se Déconnecter</button></span>
            </div>

        </div>
    </div>
</template>

<script>
import TitlePage from "../components/ui/TitlePage"
import VueJwtDecode from "vue-jwt-decode"
    export default {
           components:{ 
            TitlePage
        },
        data: function(){
            return{
                isLogged: false,
                user: {}

            }
        },
       
        methods:{
            logout: function(){
                localStorage.removeItem('token');      
               this.isLogged = false

            }
        },
        beforeMount(){
            const token = localStorage.getItem('token')
            if(token){
            const jwtDecode = this.$decodeJwt(token);
            console.log(jwtDecode)

            this.$getMe(jwtDecode.id, token)
            .then(data => {
                console.log(data)
                this.isLogged = true
                this.user = data
                })
            .catch(err => console.log(err))
            }


        }

    }
</script>

<style>
span {
  display: inline-block;
  height: 50px;
  font-family: 'Suranna', serif;
  font-size: 34px;
}

</style>