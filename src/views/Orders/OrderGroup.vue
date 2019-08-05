<template>
    <v-flex class="container" @click="handleAcknowledgement()">
        <div class="shield" v-if="isBlink" />
        <v-layout
                class="header py-2 px-3"
                :class="{
                    pending,
                    blink: isBlink
                }"
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
            v-for="(order, idx) in orders"
            :key="idx"
        />

        <v-layout row justify-center v-if="pending">
            <v-btn outline color="secondary" @click="acceptReceiptHandler">Accept</v-btn>
            <v-btn outline color="secondary" @click="rejectReceiptHandler">Decline</v-btn>
        </v-layout>
    </v-flex>

</template>

<script>
    import { mapState } from 'vuex'

    import {
        STATUS_TO_BE_PROCESSED,
        STATUS_UNACKNOWLEDGED,
        acceptReceipt,
        rejectReceipt,
        setOrdersStatus
    } from '@/api/orders'

    import OrderInfo from './OrderInfo'

    export default {
        components: {
            OrderInfo
        },

        computed: {
            ...mapState({
                storeId: ({ user }) => user.storeId
            }),

            isBlink() {
                return this.orders.some(
                    (o) => o.statusId === STATUS_UNACKNOWLEDGED
                )
            }
        },

        methods: {
            async acceptReceiptHandler() {
                const {storeId} = this.$store.state.user

                return acceptReceipt(storeId, this.receiptNum)
            },

            async rejectReceiptHandler() {
                const {storeId} = this.$store.state.user

                return rejectReceipt(storeId, this.receiptNum)
            },

            handleAcknowledgement() {
                if (this.isBlink) {
                    setOrdersStatus(
                        this.storeId,
                        this.orders,
                        STATUS_TO_BE_PROCESSED
                    )
                }
            }
        },


        props: {
            pending: {
                type: Boolean,
                default: false
            },
            orders: {
                type: Array,
                default: () => []
            },
            receiptNum: {
                type: Number,
            },
            tableNum: {
                type: Number,
                default: 999
            },
            timestamp: {
                type: String,
                default: '99:99 AM'
            }
        }
    }
</script>

<style scoped>
    @keyframes blinker {
        45% {
            background-color: initial;
        }
        50% {
            background-color: #1565C0;
        }
        95% {
            background-color: #1565C0;
        }
    }

    .blink.header {
        animation: blinker 0.75s linear infinite;
    }

    .container {
        background-color: white;
        border: 1px solid #A8A8A8;
        border-radius: 4px;
        padding: 0;
        position: relative;
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

    .shield {
        height: 100%;
        position: absolute;
        width: 100%;
        z-index: 1;
    }
</style>
