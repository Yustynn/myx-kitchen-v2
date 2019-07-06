<template>
    <v-app id="inspire">
        <v-content>
            <v-container fluid fill-height>
                <v-layout column align-center justify-center>
                    <h1>Component Playground!</h1>
                    <Component />
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import BtnPrimary from '@/components/BtnPrimary';

    export default {
        components: {
            Component: BtnPrimary
        }
    }

</script>
