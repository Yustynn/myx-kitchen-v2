<template>
    <v-layout column>
        <h1>Options</h1>
        <v-layout row wrap align-center justify-center>
            <BtnLargeIcon icon="stock" text="Stock" to="stock"/>
            <BtnLargeIcon icon="orders" text="Orders" to="orders"/>
        </v-layout>
    </v-layout>
</template>

<script>
    import { BtnLargeIcon } from '@/components'

    export default {
        components: {
            BtnLargeIcon
        }
    }
</script>
