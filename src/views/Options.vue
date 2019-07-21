<template>
    <v-container>
        <Header no-options />
        <h1 class="pb-2 text-xs-center">myx</h1>
        <v-layout row wrap fill-width align-center justify-center>
            <BtnLargeIcon
                    class="mx-3"
                    icon="stock"
                    text="Stock"
                    :to="stockName"
            />

            <BtnLargeIcon
                    class="mx-3"
                    icon="orders"
                    text="Orders"
                    :to="ordersName"
            />
        </v-layout>
    </v-container>
</template>

<script>
    import { BtnLargeIcon, Header } from '@/components'
    import routesConfig from '@/router/routesConfig'

    const { STOCK, ORDERS } = routesConfig

    export default {
        components: {
            BtnLargeIcon,
            Header,
        },
        name: 'Options',
        data() {
            return {
                stockName: STOCK.name,
                ordersName: ORDERS.name
            }
        }
    }
</script>
