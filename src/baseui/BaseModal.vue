<template>
<teleport to='body'>
    <div @click="$emit('close')"></div>
    <dialog open>
        <section class="header">
            <slot name="header">
                <h2>{{title}}</h2>
            </slot>
        </section>
        <section>
            <slot>

            </slot>
        </section>
        <menu>
            <slot name="actions">
               
            </slot>
        </menu>
    </dialog>
</teleport>
</template>

<script>
export default {
    props:{
        title:{
            type: String,
            required: false
        }
    },
    emits:['close']
}
</script>

<style scoped>
    div{
        position: fixed;
        top: 0;left: 0;
        height: 100vh;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.75);
        z-index: 10;
    }
    dialog{
        position: fixed;
        top: 1vh;
        left: 0%;
        width: 90%;
        z-index: 100;
        border-radius: 12px;
        border: none;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .26);
        padding: 0;
        margin: 0 auto;
        overflow: hidden;
        background: transparent;
        text-align: left;
    }
    .header{
        background-color: #052c41;
        color: white;
        width: 100%;
        padding: 1rem;
        text-align: center;
    }
    .header h2{
        margin: 0;
    }
    section{
        padding: 1rem;
        background: white;
    }
    menu{
        padding: 1rem;
        display: flex;
        justify-content: flex-end;
        margin: 0;
        background: white;
    }
    
    @media (min-width: 768px) {
        dialog{
            left: calc(50% - 42rem);
            max-width: 32rem;
            width: 100%;
        }
    }
</style>