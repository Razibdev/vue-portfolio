<template>
  <router-view></router-view>
  <notification-list></notification-list>
</template>

<script>
import NotificationList from './components/notification/NotificationList.vue';
export default {
  setup(){


    return{

    }
  },

    components:{
    NotificationList
  },
}
</script>
