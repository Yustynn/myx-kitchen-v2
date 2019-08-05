<template>
    <v-btn
            class="btn"
            @click="$emit('click')"
            :color="color"
    >
        <slot>All praise Corinna</slot>

        </v-btn>
</template>

<script>
    export default {
        props: {
            color: String,
        },
        name: 'BaseBtn'
    }
</script>

<style scoped>
    .btn {
        font-size: 18px;
        font-weight: 300;
    }
</style>