<template>
    <v-app>
        <v-content>
            <v-layout
                    align-center
                    column
                    fill-height
                    fill-width
                    justify-center
            >
                <h1 class="pb-2 text-xs-center">myx</h1>
                <EnterStallCodeForm class="form" />
            </v-layout>
        </v-content>
    </v-app>
</template>

<script>
    import EnterStallCodeForm from './EnterStallCodeForm';

    export default {
        components: {
            EnterStallCodeForm
        },
        name: 'Login'
    }
</script>

<style scoped>
    .form {
        min-width: 350px;
    }
</style>
