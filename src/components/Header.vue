<template>
    <nav>
        <v-layout row justify-space-between>
            <BtnIcon icon="logout" to="login" v-show="!noLogout" />
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
            }
        }
    }
</script>