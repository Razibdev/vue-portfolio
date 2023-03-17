<template >
    <div class="home_page admin">
        <aside-slide ></aside-slide>
        <div class="wrapper">
            <header-main></header-main>
            <div class="body_content">
                <div class="content">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import AsideSlide from './layout/AdminSideBar.vue';
import HeaderMain from './layout/AdminHeader.vue';

// import AdminSetupStore from './store/AdminSetupStore.js';

export default {
    components:{
        AsideSlide,
        HeaderMain,
    },
    // setup() {
    //     const { aside_control } = AdminSetupStore();

    //     return {
    //         aside_control:aside_control(),
    //     }
    // },
    // data(){
    //     return {
    //         footerPosition:false,
    //     }
    // },
    // mounted() {
    //     let height = document.querySelector('.body_content .content').clientHeight;
    //     if(height < 650){
    //         this.footerPosition = true;
    //     }else {
    //         this.footerPosition = false;
    //     }
    // }
}
</script>
<style lang="scss" scoped>
.home_page{
  position:relative;

}
.body_content {
    width: 100%;
    height: calc(100% - 110px);
    background-color: #fff;
    &.is_free {
        height: auto;
    }
    .content{
        height: 100%;
        position: relative;
        padding: 16px;
    }
    .footer_area{
        position: relative;
        right: 0;
        bottom: 0px;
        transition: all 0.3s ease 0s;
        -webkit-transition: all 0.3s ease 0s;
        &.fixed {
            position: absolute;
            width: calc(100% - 243px);
        }
        &.isNormal {
            width: calc(100% - 0px);
        }
    }
}




$phone-width-small: 360px;
$phone-width: 575px;
$tablet-width: 767px;
$custom-width: 991px;
$desktop-width: 1023px;

@media (max-width: #{$desktop-width}) { 
}
@media (max-width: #{$custom-width}) { 
}
@media (max-width: #{$tablet-width}) {
    .body_content {
        .footer_area{
            &.fixed {
                width: calc(100% - 0px);
            }
            &.isNormal {
                width: calc(100% - 0px);
            }
        }
    }
}
@media (max-width: #{$phone-width}) {
}
@media (max-width: #{$phone-width-small}) {
}
</style>