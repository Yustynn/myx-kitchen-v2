<template>
    <v-app>
        <v-layout column fill-height fill-width>
            <DevMenu />
            <router-view />
        </v-layout>
    </v-app>
</template>

<script>
    import { DevMenu } from '@/components'

    export default {
        components: {
            DevMenu
        },
        name: 'App'
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
        color: #414141;
        font-family: Noah;

        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    html, body {
        height: 100%;
        margin: 0;
        padding: 0;
        width: 100%;
    }

    h1 {
        color: #414141;
        font-family: Arciform;
        font-size: 48px;
        font-weight: 400;
    }

    p {
        font-size: 18px;
    }

    .color-primary {
        color: #1565C0;
    }

    .color-bg-primary {
        background-color: #1565C0;
    }

    .color-border-primary {
        border-color: #1565C0;
    }


    .color-secondary {
        color: #CFCFCF;
    }

    .color-bg-secondary {
        background-color: #CFCFCF;
    }

    .color-border-secondary {
        border-color: #CFCFCF;
    }
</style>
