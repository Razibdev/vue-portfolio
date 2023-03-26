<template>
    <div class="row bottom-row portfolio-items animate__animated">
      <div class="mix apps" v-for="data in allapp" :key="data._id">
        <div class="mix-top">
            <div class="thumb">
                <div class="_item">
                    <span><img :src="data.feature_image" class="portfolio-image" /></span>
                </div>
            </div>
            <!-- <div class="arrow" v-if="data.images.length > 1">
                <div class="left_arrow"><i class="fa fa-angle-left"></i></div>
                <div class="right_arrow"><i class="fa fa-angle-right"></i></div>
            </div> -->
        </div>
        <h4><router-link to="#">{{data.project_name}}</router-link></h4>
      </div>
    </div>

    <div class="row btn-row animate__animated animate__bounceIn">
      <span
        href="#"
        target="_blank"
        class="action-btn port-more-btn"
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
                const data = await portfolioApi.getWebAppData(page.value, limit);
                   
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
        },
        mounted(){
            let portfolioItems = document.querySelector('.portfolio-items');
            let portItem = document.querySelectorAll('.portfolio-items .apps');
            for (let i = 0; i < portItem.length; i++) {
                let pdtPageLimit;
                if(window.innerWidth > 991){
                    pdtPageLimit = 3;
                }else if(window.innerWidth > 767){
                    pdtPageLimit = 2;
                }else if(window.innerWidth > 375){
                    pdtPageLimit = 1;
                }
                let tabPdtItems = portItem[i].querySelector('.thumb');
                let tabPdtItem = portItem[i].querySelectorAll('.thumb ._item');
                let perPdtWidth = portfolioItems.clientWidth / pdtPageLimit;
                let allPdtWidth = perPdtWidth * tabPdtItem.length;
                tabPdtItems.style.width = allPdtWidth+'px';
                for(let j = 0; j < tabPdtItem.length; j++){
                    tabPdtItem[j].style.width = perPdtWidth+'px';
                }

                let inc = 0;
                let PerPdtWidthLeft = 0;
                let LeftBtn = portItem[i].querySelector('.arrow .left_arrow');
                let rightBtn = portItem[i].querySelector('.arrow .right_arrow');
                rightBtn.addEventListener("click", function(){
                    if(inc < tabPdtItem.length-1){
                        PerPdtWidthLeft += perPdtWidth;
                        tabPdtItems.style.marginLeft = '-'+ PerPdtWidthLeft + 'px';
                        inc++;
                    }
                })
                LeftBtn.addEventListener("click", function(){
                    if(inc > 0){
                        PerPdtWidthLeft -= perPdtWidth;
                        tabPdtItems.style.marginLeft = '-'+ PerPdtWidthLeft + 'px';
                        inc--;
                    }
                })
            }
        }
    }
</script>