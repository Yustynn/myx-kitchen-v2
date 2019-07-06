<template>
    <div id="app">
        <nav>
            <router-link
                    v-for="route in routes"
                    v-bind:to="route.path"
            >
                {{ route.title }}
            </router-link>
        </nav>
        <router-view />
    </div>
</template>

<script>
    import { routes } from '@/router'
    console.log(routes)

    export default {
        data: function() {
            return {
                routes
            }
        }
    }
</script>
