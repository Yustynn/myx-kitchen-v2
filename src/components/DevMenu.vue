<template>
    <nav>
        <router-link
                v-for="route in routes"
                v-bind:to="route.path"
        >
            {{ route.title }}
        </router-link>
    </nav>
</template>

<script>
    import { routes } from '@/router'

    export default {
        data: function() {
            return {
                routes
            }
        }
    }
</script>