<template>
    <v-app>
        <v-content>
            <v-container fluid fill-height>
                <v-layout column align-center justify-center>
                    <h1>Myx</h1>
                    <EnterStallCode />
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import EnterStallCode from './EnterStallCodeForm';

    export default {
        components: {
            EnterStallCode
        }
    }

</script>
