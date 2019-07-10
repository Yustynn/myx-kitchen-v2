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
                <Logo />
                <EnterStallCodeForm class="form" />
            </v-layout>
        </v-content>
    </v-app>
</template>

<script>
    import EnterStallCodeForm from './EnterStallCodeForm';
    import { Logo } from '@/components';

    export default {
        components: {
            EnterStallCodeForm,
            Logo
        }
    }
</script>

<style scoped>
    .form {
        min-width: 350px;
    }
</style>
