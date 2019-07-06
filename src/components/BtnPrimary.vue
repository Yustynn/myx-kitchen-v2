<template>
    <v-btn
            color="primary"
            class="btn"
            @click="onclick"
    >
        {{ text }}

        </v-btn>
</template>

<script>
    export default {
        props: {
            onclick: Function,
            text: String
        }
    }
</script>

<style scoped>
    .btn {

    }
</style>