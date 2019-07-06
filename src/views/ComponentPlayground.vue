<template>
    <v-app id="inspire">
        <v-content>
            <v-container fluid fill-height>
                <v-layout column align-center justify-center>
                    <h1>Component Playground!</h1>
                    <v-flex>
                        <StockTable v-bind:data="stockTableData"></StockTable>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import * as sharedComponents from '@/components/';
    import StockTable from '@/views/Stock/StockTable';
    import stockTableData from '@/views/Stock/_sampleData';

    export default {
        components: {
            ...sharedComponents,
            StockTable
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
