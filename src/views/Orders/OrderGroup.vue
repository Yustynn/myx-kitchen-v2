<template>
    <v-flex class="container">
        <v-layout
                class="header py-2 px-3"
                :class="{ pending }"
                row
                justify-space-between
                justify-content-center
        >
            <span>Table {{ tableNum }}</span>
            <span class="receipt-num">#{{ receiptNum }}</span>
            <span>{{ timestamp }}</span>
        </v-layout>

        <OrderInfo
                class="order"
                :class="{ pending }"
                v-bind="order"
                v-for="order in orders"
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
        background-color: white;
        border: 1px solid #A8A8A8;
        border-radius: 4px;
        padding: 0;
    }

    .header {
        border-bottom: 1px solid #707070;
        background-color: #D0DFEF;
        letter-spacing: 1.5px;
        line-height: 22px;
        text-transform: uppercase;
    }

    .header.pending {
        background-color: white;
        border-bottom: none;
    }

    .header.pending span {
        color: #B1B1B1;
    }

    .order {
        border-bottom: 1px solid grey;
    }

    .order:last-of-type {
        border-bottom: none;
    }

    .order.pending {
        border-bottom: none;
    }

    .header span.receipt-num {
        color: #1565C0;
        font-size: 22px;
        font-weight: bold;
    }
</style>