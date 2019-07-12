<template>
    <router-link :to="{ name: to }">
        <v-img
                class="container"
                contain
                height="10"
                v-bind:src="iconSrc"
        />
    </router-link>
</template>

<script>
    import { routes } from '@/router'

    export default {
        computed: {
            iconSrc: function() {
                return `/icons/${this.icon}.svg`
            }
        },
        name: 'BtnIcon',
        props: {
            icon: {
                type: String,
                validator: (icon) => ['logout', 'options', 'orders', 'stock'].includes(icon)
            },
            text: {
                type: String,
                default: 'All praise Corinna'
            },
            to: {
                type: String,
                validator: (name) => routes.map((r) => r.name).includes(name)
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
