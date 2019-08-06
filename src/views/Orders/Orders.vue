<template>
    <v-layout column fill-height>
        <v-layout row fill-height fill-width>
            <v-flex sm8 class="confirmed-ordes">
                <v-container>
                <Header text="Orders" />
                    <v-layout row>
                        <v-flex
                                sm6
                                class="order-group-container"
                        >
                            <OrderGroup
                                    v-for="receiptGroup in processingOrdersRow1"
                                    :key="receiptGroup.receiptId"
                                    class="order-group"
                                    :orders="receiptGroup.orders"
                                    :timestamp="receiptGroup.timestamp"
                                    :receipt-num="receiptGroup.receiptId"
                            />
                        </v-flex>
                        <v-flex
                                sm6
                                class="order-group-container"
                        >
                            <OrderGroup
                                    v-for="receiptGroup in processingOrdersRow2"
                                    :key="receiptGroup.receiptId"
                                    class="order-group"
                                    :orders="receiptGroup.orders"
                                    :timestamp="receiptGroup.timestamp"
                                    :receipt-num="receiptGroup.receiptId"
                            />
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
            <v-flex class="unconfirmed-orders" sm4>
                <v-container>
                    <h1 class="text-xs-center">Pending</h1>
                        <v-flex
                                v-for="receiptGroup in pendingOrders"
                                :key="receiptGroup.receiptId"
                                class="order-group-container"
                        >
                            <OrderGroup
                                    pending
                                    class="order-group"
                                    :orders="receiptGroup.orders"
                                    :timestamp="receiptGroup.timestamp"
                                    :receipt-num="receiptGroup.receiptId"
                            />
                        </v-flex>
                </v-container>
            </v-flex>
        </v-layout>
    </v-layout>
</template>

<script>
    import OrderGroup from "./OrderGroup";
    import { Header } from "@/components";

    import { mapState } from 'vuex'

    export default {
        components: {
            Header,
            OrderGroup
        },
        computed: mapState({
            processingOrders() {
                return this.$store.state.orders.orders.filter((group) => !group.isPending)
            },
            processingOrdersRow1() {
                return this.processingOrders.filter((_, idx) => idx % 2 === 0)
            },
            processingOrdersRow2() {
                return this.processingOrders.filter((_, idx) => idx % 2 === 1)
            },
            pendingOrders() {
                return this.$store.state.orders.orders.filter((group) => group.isPending)
            }
        }),
        name: 'Orders'
    }
</script>

<style scoped>
    .order-group {
        margin-bottom: 20px;
    }

    .order-group-container {
        padding: 0 20px;
    }

    .unconfirmed-orders {
        background-color: #ECEDEF;
    }
</style>
