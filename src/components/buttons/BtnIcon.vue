<template>
    <router-link :to="{ name: to }">
        <v-img
                class="container"
                contain
                height="10"
                :src="iconSrc"
                @click="$emit('click')"
        />
    </router-link>
</template>

<script>
    import routesConfig from '@/router/routesConfig'

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
                validator: (name) => Object.values(routesConfig)
                    .map((r) => r.name)
                    .includes(name)
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
