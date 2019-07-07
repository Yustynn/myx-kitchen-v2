<template>
    <nav>
        <v-layout row justify-space-between>
            <BtnIcon icon="logout" to="login" v-show="!noLogout" />
            <h1>{{ text }}</h1>
            <BtnIcon icon="options" to="options" v-show="!noOptions" />
        </v-layout>
    </nav>
</template>

<script>
    import { BtnIcon } from '@/components'

    export default {
        components: {
            BtnIcon
        },
        props: {
            noLogout: {
                type: Boolean,
                default: false
            },
            noOptions: {
                type: Boolean,
                default: false
            },
            text: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style scoped>
    h1 {
        line-height: 50px;
    }
</style>