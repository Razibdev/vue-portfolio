import { computed, reactive, readonly } from "vue";

const state = reactive({
    SiteOverlay:false,
    aside_control:false,
    user_options_show:false,
})

const getters = {
    SiteOverlay : () => {
        return computed(() => { return state.SiteOverlay });
    },
    aside_control : () => {
        return computed(() => { return state.aside_control })
    },
    user_options_show : () => {
        return computed(() => { return state.user_options_show })
    },
}

const mutations = {
    ActionAside : () => { 
        document.addEventListener('click', function(e) {
            let container = document.querySelector(".main_sidebar");
            let mobile_overly = document.querySelector("#mobile_overly_site");
            let toggle = document.querySelector(".header_main .toggle");
            let asideItem = document.querySelectorAll("aside ul li");
            if (!container.contains(e.target)) {
                if(toggle.contains(e.target)){
                    if(container.className == "main_sidebar active"){
                        container.classList.remove('active');
                        mobile_overly.classList.remove('show');
                    }else{
                        container.classList.add('active');
                        mobile_overly.classList.add('show');
                    }
                }else {
                    container.classList.remove('active')
                    mobile_overly.classList.remove('show');
                }
            }
            for(let i = 1; i < asideItem.length; i++){
                // console.log(i);
            }
            // if(item.className === "item"){
            //     container.classList.remove('active')
            // }
        });
    }
}

const actions = {
    SiteOverlayHideBtn : () => {
        state.SiteOverlay = false;

        state.aside_control = false;
    },
    AsideToggleClick : () => {
        state.SiteOverlay = true;
        state.aside_control =! state.aside_control;
    },
}

export default () => {
    return {
        state:readonly(state),
        ...getters,
        ...mutations,
        ...actions,
    }
}