<template>
    <section id="team">
    <div class="row">
      <h2 class="team-heading">MEET OUR BEAUTIFUL TEAM</h2>
      <p class="section-description">
        We are a small team of designers and developers, who help brands with
        big ideas.
      </p>
    </div>
    <div class="row">

      <div class="col span_1_of_4 team-box" v-for="data in get_team" :key="data._id">
        <img :src="data.feature_image" alt="" class="avatar" />
        <h3>{{data.full_name}}</h3>
        <p class="role">{{data.designation}}</p>
        <p>
         {{data.short_bio}}
        </p>
        <div class="social-icons">
          <a :href="data.fb_link">
           <i class="fa fa-facebook"></i>
          </a>
          <a :href="data.tw_link">
           <i class="fa fa-twitter" aria-hidden="true"></i>
          </a>
          <a :href="data.ln_link">
            <i class="fa fa-linkedin" aria-hidden="true"></i>
          </a>
          <a :href="data.gh_link">
            <i class="fa fa-envelope-open" aria-hidden="true"></i>
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import homeApi from '../comps/home-api.js'
import {ref, onMounted} from 'vue';

export default {
    setup() {
        const get_team = ref([]);

        const getTeam = async() =>{
            const data = await homeApi.getTeamData();
            get_team.value = data.data.data;
            console.log(data.data.data);
        }

        onMounted(()=>{
            getTeam();
        })
        
        return{
            get_team
        }
    },
}
</script>
