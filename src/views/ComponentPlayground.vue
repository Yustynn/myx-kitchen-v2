<template>
    <v-app id="inspire">
        <v-content>
            <v-container fluid fill-height>
                <v-layout column align-center justify-center>
                    <h1>Component Playground!</h1>
                    <v-flex md6 sm12>
                        <BtnLargeIcon v-bind:onclick="log" icon="order"></BtnLargeIcon>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import * as components from '@/components/';

    export default {
        components: components,
        methods: {
            log: function() {
                console.log('sup')
            }
        }
    }

</script>
