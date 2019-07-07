<template>
    <v-layout column>
        <Header no-options />
        <h1>Options</h1>
        <v-layout row wrap fill-width align-center justify-center>
            <BtnLargeIcon icon="stock" text="Stock" to="stock"/>
            <BtnLargeIcon icon="orders" text="Orders" to="orders"/>
        </v-layout>
    </v-layout>
</template>

<script>
    import { BtnLargeIcon, Header } from '@/components'

    export default {
        components: {
            BtnLargeIcon,
            Header
        }
    }
</script>
