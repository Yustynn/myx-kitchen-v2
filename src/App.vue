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
        <v-layout column fill-height fill-width>
            <router-view />

        </v-layout>
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

<style lang="scss">
    $PRIMARY: '#1565C0';
    $SECONDARY: '#CFCFCF';

    @font-face {
        font-family: "Arciform";
        src: url("/fonts/Arciform.otf");
    }

    @font-face {
        font-family: "Astronaut";
        src: url("/fonts/Astronaut.otf");
    }

    @font-face {
        font-family: "Noah";
        src: url("/fonts/Noah.otf");
    }

    * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        font-family: Noah;
    }

    html, body {
        height: 100%;
        margin: 0;
        padding: 0;
        width: 100%;
    }
</style>
