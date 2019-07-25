<template>
    <v-app id="inspire">
        <v-content>
            <v-container fluid fill-height>
                <v-layout column align-center justify-center>
                    <h1>Component Playground!</h1>
                    <v-flex class="component-container pa-3 text-xs-center">
                        <h2>BtnPrimary</h2>
                        <BtnPrimary>Test Button</BtnPrimary>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import * as sharedComponents from '@/components/';
    import EnterStallCodeForm from '@/views/Login/EnterStallCodeForm';
    import OrderInfo from '@/views/Orders/OrderInfo';
    import OrderGroup from '@/views/Orders/OrderGroup';
    import StockTable from '@/views/Stock/StockTable';

    import stockTableData from '@/views/Stock/_sampleData';

    export default {
        components: {
            ...sharedComponents,
            EnterStallCodeForm,
            OrderGroup,
            OrderInfo,
            StockTable,
        },
        data: function() {
            return {
                stockTableData,
            }
        },
        methods: {
            clicky() {
                console.log('clack')
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
