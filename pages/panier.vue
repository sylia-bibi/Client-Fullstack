<template>
    <div class="cart__page text-center">
        <TitlePage titleText="Mon panier"/>
        <Button classList="btn btn-red px-12 py-4 text-white bg-blue-400 rounded-md focus:bg-blue-600 focus:outline-none"  btnTitle="Vider le panier" @click.prevent="clearCartAndRefresh"/>
        <div class="card__content content-center ">
            <div v-if="cardArray">
              
            <table>
                <thead>
                    <tr>
                       
                        <th>Produit</th>
                        <th>Prix</th>
                        <th>Quantité</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <client-only>
                    <tr v-for="product in cardArray" :key="product.id">
                       
                        <td>
                            {{product.title}}
                        </td>
                        <td>
                            {{product.price}}
                        </td>
                        <td>
                            <button @click="()=>removeQty(product)">-</button>
                            {{product.qty}}
                            <button @click="()=>addQty(product)">+</button>
                        </td>
                        <td>
                            {{ product.price * product.qty }}
                        </td>
                        <td>
                            <button @click="() => deleteItem(product)">Supprimer</button>
                        </td>
                    </tr>
                    </client-only>
                </tbody>
                <tfoot>
                    <tr>
                        <th>Total</th>
                        <th></th>
                        <th></th>
                        <th>{{calcQty}}</th>
                        <th>{{calcTotal }}</th>
                    </tr>
                </tfoot>
             </table> 
            
            
            <button  @click="() => order()" class="px-12 py-4 text-white bg-pink-500 rounded-md focus:bg-blue-600 focus:outline-none">Commander</button>            
            <div v-if="orderPass == true" > 
                <p>Commande validée, veuillez vous rendre sur votre espace client afin de suivre la livraison !  A bientot :*</p>
            </div>
            
            </div>
            <div v-else> 
                <p>Votre panier est vide :(</p>
                <img src="https://tse1.mm.bing.net/th?id=OIP.A6YW2otKAai-cLPWE0FxuwAAAA&pid=Api&P=0&w=300&h=300" style="width: 500px; height: 300px;"/>
            </div>

        </div>
    </div>
</template>

<script>
    
 
    import TitlePage from "../components/ui/TitlePage";
    import Button from "../components/Button";
   

    export default {
        name:"panier",
        components:{
            TitlePage,
            Button,
            
        },
        data: function () {
            return {
                cardArray:[],
               orderPass: false,
                products: []
            }
        },
        created() {
            this.cardArray = this.$getCart();
        },
        // updated() {
        //     this.cartTotal = this.getCartTotal(this.cardArray)
        // },
        computed: {
            calcTotal: function() {
                return this.$getCartTotal(this.cardArray)
            },
            calcQty: function() {
                return this.$getCartCount(this.cardArray);
            }
        },
        filters: {
            formatNumber: function(value) {
                return value.toFixed(2);
            }
        },
        methods: {
            clearCartAndRefresh: function() {
                this.$clearCart();
                this.cardArray=this.$getCart();
            },
            removeQty: function(product) {
                this.$removeOneQty(product);
                this.cardArray=this.$getCart();
            },
            addQty: function(product) {
                this.$addOneQty(product);
                this.cardArray=this.$getCart();
            },
            deleteItem: function(product) {
                this.$removeItemCart(product);
                this.cardArray=this.$getCart();
            },
            order: function() {

            const token = localStorage.getItem('token')
            if(token){
            const jwtDecode = this.$decodeJwt(token);

                (this.cardArray).forEach(element => {
                    this.products = element.id
                    
                });

               const body = {
                amountNumber: this.calcQty,
                totalAmount: this.calcTotal,
                user:jwtDecode.id,
                products: this.products
               }
   
               this.$order(body).then((data) =>{
                     console.log(data)
                     if(data){
                         this.orderPass = true
                     }


                }
                )
                .catch(err => console.log(err))
 
            }
               
            }

        },
    }

</script>

<style>
table {
    margin: 30px auto;
}

</style>