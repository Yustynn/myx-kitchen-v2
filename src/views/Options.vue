<template>
    <v-container>
        <Header no-options />
        <Logo class="text-xs-center mb-4" />
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
    import { BtnLargeIcon, Header, Logo } from '@/components'

    export default {
        components: {
            BtnLargeIcon,
            Header,
            Logo
        }
    }
</script>
