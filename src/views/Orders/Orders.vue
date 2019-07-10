<template>
    <v-layout column fill-height>
        <v-layout row fill-height fill-width>
            <v-flex md8 class="confirmed-ordes">
                <v-container>
                <Header text="Orders" />
                    <v-layout row>
                        <v-flex md6 class="order-group-container">
                            <OrderGroup class="order-group" />
                            <OrderGroup class="order-group"/>
                        </v-flex>
                        <v-flex md6 class="order-group-container">
                            <OrderGroup class="order-group" />
                            <OrderGroup class="order-group" />
                            <OrderGroup class="order-group" />
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
            <v-flex class="unconfirmed-orders" md4>
                <v-container>
                    <h1 class="text-xs-center">Pending</h1>
                    <OrderGroup pending />
                </v-container>
            </v-flex>
        </v-layout>
    </v-layout>
</template>

<script>
    import OrderGroup from "./OrderGroup";
    import { Header } from "@/components";

    export default {
        components: {
            Header,
            OrderGroup
        }
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
