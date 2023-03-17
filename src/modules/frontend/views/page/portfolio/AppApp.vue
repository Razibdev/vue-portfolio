<template>
      <div class="row portfolio-items">
      <div class="col span_1_of_2 mix apps" v-for="data in allapp" :key="data._id">
        <img :src="data.feature_image" class="portfolio-image" />
        <h4><router-link to="#">{{data.project_name}}</router-link></h4>
      </div>

    </div>

    <div class="row">
      <span
        href="#"
        target="_blank"
        class="btn more-btn"
        @click="loadmoreData"
        >LOAD MORE PROJECTS</span
      >
    </div>

</template>

<script>
import {ref, onMounted} from 'vue';
import portfolioApi from './api/portfolio-api.js';
    export default{

        setup(){
            const page = ref(1)
            const allapp = ref([]);
            const limit = 2;
            const all_length = ref(0);
            const getallApp = async() =>{
                const data = await portfolioApi.getAppAppData(page.value, limit);
                   
                    allapp.value =  allapp.value.concat(data.data.data);
                    all_length.value = data.data.allresult/limit;
                    page.value++;
                     console.log(allapp.value);

            }

            const loadmoreData = () =>{
                if(page.value <= all_length.value){
                    getallApp()
                }
            }
            
            onMounted(()=>{
                getallApp();
            });


            return{
                allapp,
                page,
                all_length,
                loadmoreData

            }
        }
    }
</script>