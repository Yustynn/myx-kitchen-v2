<template>
    <v-layout column fill-height fill-width>
        <DevMenu />
        <router-view />
    </v-layout>
</template>

<script>
    import { DevMenu } from '@/components'

    export default {
        components: {
            DevMenu
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
        color: #414141;
        font-family: Noah;

        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    h1 {
        color: #414141;
        font-family: Arciform;
        font-size: 48px;
        font-weight: 400;
    }

    html, body {
        height: 100%;
        margin: 0;
        padding: 0;
        width: 100%;
    }
</style>
