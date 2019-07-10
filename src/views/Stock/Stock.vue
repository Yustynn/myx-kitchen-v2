<template>
    <v-layout column>
        <Header />
        <v-container>
            <h1 class="text-xs-center">Stock</h1>
            <v-text-field
                    v-model="searchTerm"
                    append-icon="search"
                    placeholder="Search for menu item by name or tag"
            ></v-text-field>
            <StockTable class='stock-table' :data="processedData" />

        </v-container>
    </v-layout>
</template>

<script>
    import StockTable from './StockTable'
    import { Header } from '@/components'

    import sampleData from './_sampleData'

    export default {
        components: {
            Header,
            StockTable
        },
        computed: {
            processedData() {
                const { data, searchTerm } = this;

                if (searchTerm === '') return data;

                const isMatch = (item) => {
                    const isNameMatch = item.name.toLowerCase().includes( searchTerm.toLowerCase() )
                    const isNumMatch = item.itemNum.toString() === searchTerm

                    return isNameMatch || isNumMatch
                }

                // can optimize here by looping once instead of twice, but I don't think it's necessary
                const validCategoriesInfo = data.filter( (ci) => ci.items.some(isMatch) )
                return validCategoriesInfo.map( (ci) => ({...ci, items: ci.items.filter(isMatch)}) )
            }
        },
        data() {
            return {
                searchTerm: ''
            }
        },
        props: {
            data: {
                type: Array,
                default: () => ([...sampleData])
            }
        }
    }
</script>

<style lang="scss" scoped>
    .stock-table {
        border: 3px solid #1565C0;
        height: 350px;
        overflow-y: scroll;
    }
</style>
