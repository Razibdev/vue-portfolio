<template>
  <section id="portfolio" class="portfolio-area">
    <div class="row top-row animate__animated">
      <h2 class="portfolio-heading">OUR PORTFOLIO</h2>
      <p class="section-description">
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet
        consectetur, adipisci velit, sed quia non numquam
      </p>
    </div>
    <div class="middle-row portfolio-filter animate__animated">
      <button type="button" data-filter="all" @click="dcomponent('AllApp')">ALL</button>
      <button type="button" data-filter=".web" @click="dcomponent('WebApp')">WEB</button>
      <button type="button" data-filter=".apps" @click="dcomponent('AppApp')">APPS</button>
      <button type="button" data-filter=".icons" @click="dcomponent('GraphicApp')">Graphics</button>
    </div>

      <component :is="showApp" />

  </section>

</template>

<script>
import AllApp from './portfolio/AllApp.vue';
import WebApp from './portfolio/WebApp.vue';
import AppApp from './portfolio/AppApp.vue';
import GraphicApp from './portfolio/GraphicApp.vue';
export default{

    data(){
        return{
            showApp:'AllApp'
        }
    },

    methods:{
        dcomponent(data){
            this.showApp = data;
        }
    },

    components:{
        AllApp,
        WebApp,
        AppApp,
        GraphicApp
    }
}
</script>