(window.webpackJsonp=window.webpackJsonp||[]).push([[14,3,4,6,7],{321:function(t,e,o){"use strict";o.r(e);var r={name:"TitlePage",props:{titleText:{type:String,required:!0}}},l=o(24),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"title__page my-5"},[o("h1",{staticClass:"text-center text-5xl uppercase font-semibold text-teal-900"},[t._v(t._s(t.titleText))])])}),[],!1,null,"e3b26020",null);e.default=component.exports},322:function(t,e,o){"use strict";o.r(e);var r={components:{Button:o(150).default},name:"ProductCard",props:{productObject:Object},methods:{addToCart:function(t){this.$store.commit("addToCart",t)},addToCartFav:function(t){this.$store.commit("addToCartFav",t)}}},l=o(24),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"max-w-xs rounded overflow-hidden shadow-lg my-2"},[o("img",{attrs:{src:t.productObject.imageUrl,alt:""}}),t._v(" "),o("div",{staticClass:"px-6 py-4"},[o("NuxtLink",{attrs:{to:"product/"+t.productObject.id}},[o("div",{staticClass:"font-bold text-xl mb-2"},[t._v(" \n      "+t._s(t.productObject.title)+"\n     ")]),t._v(" "),o("p",{staticClass:"text-grey-darker font-bold text-base mb-3"},[t._v(t._s(t.productObject.price)+" €")]),t._v(" "),o("p",{staticClass:"text-grey-darker text-base"},[t._v(t._s(t.productObject.description))])])],1),t._v(" "),o("button",{staticClass:"flex-no-shrink p-2 border-2 bg-blue-500 rounded text-teal border-teal hover:text-white hover:bg-teal",on:{click:function(){return t.addToCart(t.productObject)}}},[t._v("Ajouter au panier")]),t._v(" "),o("button",{staticClass:"flex-no-shrink p-2 bg-red-500 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal",on:{click:function(){return t.addToCartFav(t.productObject)}}},[o("span",[t._v("♥")])]),t._v(" "),o("button",{staticClass:"flex-no-shrink p-2 bg-pink-500 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"},[o("NuxtLink",{attrs:{to:"product/"+t.productObject.id}},[t._v(" "+t._s(t.product))]),t._v("Voir le produit  ")],1)])}),[],!1,null,"b5a65d52",null);e.default=component.exports;installComponents(component,{Button:o(150).default})},323:function(t,e,o){var content=o(326);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(52).default)("17a05048",content,!0,{sourceMap:!1})},324:function(t,e,o){"use strict";o.r(e);var r=o(322),l={name:"ProductGrid",props:{productsArray:Array},components:{ProductCard:r.default}},c=(o(325),o(24)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"products__list"},[o("section",{staticClass:"px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-20"},[o("ul",{staticClass:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4",attrs:{role:"list"}},t._l(t.productsArray,(function(e){return o("ProductCard",{key:e.id,attrs:{productObject:e}},[o("li",{staticClass:"relative"},[o("div",{staticClass:"block overflow-hidden w-full group aspect-w-10 aspect-h-7"},[t._v("\n          "+t._s(e)+"\n      ")])])])})),1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductCard:o(322).default})},325:function(t,e,o){"use strict";o(323)},326:function(t,e,o){var r=o(51)(!1);r.push([t.i,".carousel-open:checked+.carousel-item{position:static;opacity:1}.carousel-item{transition:opacity .6s ease-out}#carousel-1:checked~.control-1,#carousel-2:checked~.control-2,#carousel-3:checked~.control-3{display:block}.carousel-indicators{list-style:none;margin:0;padding:0;position:absolute;bottom:2%;left:0;right:0;text-align:center;z-index:10}#carousel-1:checked~.control-1~.carousel-indicators li:first-child .carousel-bullet,#carousel-2:checked~.control-2~.carousel-indicators li:nth-child(2) .carousel-bullet,#carousel-3:checked~.control-3~.carousel-indicators li:nth-child(3) .carousel-bullet{color:#ffb317}",""]),t.exports=r},328:function(t,e,o){"use strict";o.r(e);var r={name:"TitleBloc",props:{titleText:{type:String,required:!0}}},l=o(24),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"title__page my-5"},[o("h1",{staticClass:"text-center text-2xl uppercase font-semibold text-teal-900"},[t._v(t._s(t.titleText))])])}),[],!1,null,"5f06b775",null);e.default=component.exports},339:function(t,e,o){var content=o(360);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(52).default)("1b7833da",content,!0,{sourceMap:!1})},359:function(t,e,o){"use strict";o(339)},360:function(t,e,o){var r=o(51)(!1);r.push([t.i,'.container{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.title{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}span{display:inline-block;height:50px;font-family:"Suranna",serif;font-size:34px}',""]),t.exports=r},377:function(t,e,o){"use strict";o.r(e);var r=o(321),l=o(328),c=o(324),n={components:{TitlePage:r.default,TitleBloc:l.default,ProductGrid:c.default},data:function(){return{isLogged:!1,categories:Array}},methods:{},beforeMount:function(){var t=this;this.$getCategories().then((function(data){console.log(data),t.categories=data})).catch((function(t){return console.log(t)}))}},d=(o(359),o(24)),component=Object(d.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"categiers "},t._l(t.categories,(function(e){return o("div",{key:e.id,attrs:{categoryObject:e}},[o("TitleBloc",{attrs:{titleText:e.title}}),t._v(" "),o("ProductGrid",{attrs:{productsArray:e.products}})],1)})),0)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductGrid:o(324).default})}}]);