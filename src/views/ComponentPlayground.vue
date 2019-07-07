<template>
    <v-app id="inspire">
        <v-content>
            <v-container fluid fill-height>
                <v-layout column align-center justify-center>
                    <h1>Component Playground!</h1>
                    <v-flex class="component-container""">
                        <Header />
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import * as sharedComponents from '@/components/';
    import OrderInfo from '@/views/Orders/OrderInfo';
    import StockTable from '@/views/Stock/StockTable';
    import stockTableData from '@/views/Stock/_sampleData';
    import Stock from "./Stock/Stock";

    export default {
        components: {
            Stock,
            ...sharedComponents,
            StockTable,
            OrderInfo
        },
        data: function() {
            return {
                stockTableData
            }
        },
        methods: {
            log: function() {
                console.log('sup')
            }
        }
    }

</script>

<style scoped>
    .component-container {
        border: 1px solid grey;
        width: 100%;
    }
</style>
