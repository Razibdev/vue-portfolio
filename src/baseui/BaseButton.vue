<template>
    <button class="button" :disabled="disabled" :type="type" :class="[mode, radius, small]">
        <slot></slot>
    </button>
</template>
<script>
export default {
    props: ['type', 'mode', 'radius', 'small', 'disabled']
}
</script>
<style lang="scss" scoped>
button {
    display: flex;
    column-gap: 12px;;
    justify-content: center;
    padding: 0.8em 3em;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 500;
    color: #ffffff;
    background-color: #23c483;

    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
}

button:hover {
    background-color: #23c483;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
}

button:active {
    transform: translateY(-1px);
}
.full_with{
    width: 100%;
}
</style>