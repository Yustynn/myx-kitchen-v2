<template>
    <v-container>
        <Header no-options />
        <h1 class="pb-2 text-xs-center">myx</h1>
        <v-layout row wrap fill-width align-center justify-center>
            <BtnLargeIcon
                    class="mx-3"
                    icon="stock"
                    text="Stock"
                    to="stock"
            />
            <BtnLargeIcon
                    class="mx-3"
                    icon="orders"
                    text="Orders"
                    to="orders"
            />
        </v-layout>
    </v-container>
</template>

<script>
    import { BtnLargeIcon, Header } from '@/components'

    export default {
        components: {
            BtnLargeIcon,
            Header,
        },
        name: 'Options'
    }
</script>
