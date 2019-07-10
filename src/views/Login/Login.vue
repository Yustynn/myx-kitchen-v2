<template>
    <v-app>
        <v-content>
            <v-container fluid fill-height>
                <v-layout column align-center justify-center>
                    <Logo />
                    <EnterStallCode />
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import EnterStallCode from './EnterStallCodeForm';
    import { Logo } from '@/components';

    export default {
        components: {
            EnterStallCode,
            Logo
        }
    }

</script>
