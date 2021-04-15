<template>
    <div class="detail">
        <span><h1 class="text-center">Détails sur {{product.title}}</h1></span>
        <div class="product__content text-center" v-if="product">
            <p><button class="bouton">{{product.price}} €</button>
            <button class="bouton">Ajouter au panier</button></p>
            <span><p> {{product.title}}</p></span>
            <span><p> {{product.description}}</p></span>
            <div class="product-img">
            <p><img v-bind:src='product.imageUrl' alt="" height="400" width="400" /></p>
            </div>           
        </div>
    </div>
</template>

<script>
import Product from "../../apollo/queries/product.gql"
    export default {
        data:function(){
            return{
                product:{}
            }
        },
        apollo: {
            product: {
            query: Product,
            variables(){
                return {
                    id: this.$route.params.id
                }
            },
              update(data){
                    console.log(data.product)
                    return data.product
                },
                error(){
                    return this.$root.error({'statusCode': 404, message: "id not found"})

                }
            }

        }
      
        
    }
</script>

<style>
.detail{
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 50px;
    font-size: 150%;
}
.detail img{
    max-width: 400px;
    width: 100%;
    margin: 20px;
    height: 450px;
    object-fit: cover;
    display: block;
}
.bouton{
    background-color: #000;
    color: #fff;
    border: none;
    font-weight: 400;
    padding: 15px 25px;
    margin-top: 5px;
    font-size: 15px;
}
</style>