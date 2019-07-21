<template>
    <nav>
        <router-link
                v-for="(route, idx) in routes"
                :to="route.path"
                :key="idx"
        >
            {{ route.title }}
        </router-link>
    </nav>
</template>

<script>
    import routesConfig from '@/router/routesConfig'

    export default {
        data: function() {
            return {
                routes: Object.values(routesConfig)
            }
        },
        name: 'DevMenu'
    }
</script>