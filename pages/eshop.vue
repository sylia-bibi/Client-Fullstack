<template>
    <div>
        <TitlePage titleText="Eshop" />
        <div class="loader" v-if="loading">
        En cours de chanrgement...
        </div>
        <ProductGrid :productsArray="productsArray"/>
    </div>
</template>

<script>
    import TitlePage from "../components/ui/TitlePage"
    import ProductGrid from "../components/ProductGrid"
    import Products from "../apollo/queries/products.gql"
    import Feed from "../apollo/queries/feed.gql"

   
    export default {
        components:{
        TitlePage,
        ProductGrid
     
        },
        data: function() {
            return {
                productsArray:[],
                loading:0,
                feedArray:[],
                search:""
            }
        },
       apollo: {
           $loadingKey: "loading",
           productsArray:{
               query: Products,
               update(data){
                   console.log(data.products)
                   return data.products
               }

           },
           feedArray:{
               query: Feed,
                variables(){
                return {
                    filter: this.$route.params.id
                }
            },
               update(data){
                   console.log(data.products)
                   return data.products
               }

           }


       }

    }
</script>

<style lang="scss" scoped>

</style>