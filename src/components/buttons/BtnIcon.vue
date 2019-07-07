<template>
    <v-img
            @click="onclick"
            class="container"
            contain
            height="50"
            v-bind:src="iconSrc"
    />
</template>

<script>
    export default {
        computed: {
            iconSrc: function() {
                return `/icons/${this.icon}.svg`
            }
        },
        props: {
            icon: {
                type: String,
                validator: (icon) => ['logout', 'options', 'orders', 'stock'].includes(icon)
            },
            onclick: Function,
            text: {
                type: String,
                default: 'All praise Corinna'
            }
        }
    }
</script>

<style scoped>
    .container {
        height: 300px;
        opacity: 0.5;
    }

    .container:hover {
        opacity: 1;
    }
</style>
