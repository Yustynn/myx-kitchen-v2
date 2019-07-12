<template>
    <v-btn
            class="btn"
            @click="onclick"
            v-bind:color="color"
    >
        <slot>All praise Corinna</slot>

        </v-btn>
</template>

<script>
    export default {
        props: {
            color: String,
            onclick: Function
        },
        name: '_Btn'
    }
</script>

<style scoped>
    .btn {
        font-weight: 300;
    }
</style>