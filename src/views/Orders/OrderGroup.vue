<template>
    <v-flex class="container">
        <v-layout row justify-space-between>
            <p>Table {{ tableNum }}</p>
            <p>#{{ receiptNum }}</p>
            <p>{{ timestamp }}</p>
        </v-layout>

        <OrderInfo
                v-bind="order"
                v-for="order in orders"
                class="order"
        />

        <v-layout row justify-center v-if="pending">
            <v-btn outline color="secondary">Accept</v-btn>
            <v-btn outline color="secondary">Decline</v-btn>
        </v-layout>
    </v-flex>

</template>

<script>
    import OrderInfo from './OrderInfo'

    export default {
        components: {
            OrderInfo
        },
        props: {
            pending: {
                type: Boolean,
                default: false
            },
            orders: {
                type: Array,
                default: () => [
                    {
                        itemNum: 1,
                        name: "Thing that's edible",
                        quantity: 4,
                        price: "7.50"
                    },
                    {
                        itemNum: 5,
                        name: "Edible that's thing",
                        quantity: 12,
                        price: "12.50"
                    }
                ]
            },
            receiptNum: {
                type: Number,
                default: 156
            },
            tableNum: {
                type: Number,
                default: 14
            },
            timestamp: {
                type: String,
                default: '11:24 AM'
            }
        }
    }
</script>

<style scoped>

    .container {
        border: 1px solid grey;
        padding: 0;
    }

    .order {
        border: 1px solid grey;
    }
</style>
