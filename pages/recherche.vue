<template>
<div>
      <form class="form__login w-1/3 mx-auto">
        <TitlePage titleText="Recherche" />
         <div class="form__group">
            <span>Que souhaitez-vous rechercher?</span>
            <form action="" class="formulaire">
            <input v-model="search" id="search" type="search" placeholder="Rechercher..." autocomplete="off" :name="search"/>
            <span v-if="searchKey && feedArray.length >= 1 ">
          {{feedArray.length}} resultat<span v-if="feedArray.length >= 2">s</span>
        </span>
            </form>
        </div>
        <div class="form__group">
            <button type="submit" @click.prevent="searchFunction" class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-8">Recherche</button>
        </div>
        </form>
        <div v-if="feedArray.length > 0">
          
            <ProductGrid :productsArray="feedArray"/>
       
        </div>
  
        <div class="message__error text-center" v-if="feedArray.length == 0"> 
            <h3>Désolé</h3>
            <p>Aucun résultat trouvé!</p>
        </div>
    </div>
    
</template>

<script>
    import TitlePage from "../components/ui/TitlePage"
    import ProductGrid from "../components/ProductGrid"
    import Feed from "../apollo/queries/feed.gql"
   
    export default {
        components:{
        TitlePage,
        ProductGrid 
     
        },
        data: function() {
            return {
         
                loading:0,
                feedArray:[],
                search:"",
                searchEl:""
            }
        },
       apollo: {
           $loadingKey: "loading",
      
           feedArray:{
               query: Feed,
                variables(){
                return {
                    filter: this.searchEl
                }
            },
               update(data){
                   console.log(data)
                   return data.feed
               }

           }

       },
     methods: {
            searchFunction: function () {
              
                this.searchEl = this.search
            }
        }

    }
</script>

<style>
.form__group {
  position:relative; 
  width:2040px;
  height:auto;
  }
.formulaire {
  display:inline-block;
  }
.formulaire .champ {
  width:600px; 
  height:35px;
  }

</style>