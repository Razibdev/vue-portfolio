<template>
    <div>
        <div class="notifications-list">
            <NotificationMessage v-for="notification in notifications" :key="notification.id" :notification="notification" />
        </div>
    </div>
</template>

<script>
 import NotificationMessage from "./NotificationMessage.vue";
import { mapState } from "vuex";
 export default{
    components:{
        NotificationMessage
    },
    created(){
    },
    computed: mapState(['notifications'])
 }
</script>

<style scoped>
.notifications-list{
      z-index: 10002;
    position: fixed;
    right: 0;
    top: 0;
    /* margin-right:15px; */
     width: 250px;
}
</style>