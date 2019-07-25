<template>
    <v-layout column>
        <Header text="Stock" />
        <v-container>
            <v-text-field
                    class="search-field"
                    v-model="searchTerm"
                    append-icon="search"
                    placeholder="Search for menu item by name or tag"
            ></v-text-field>
            <StockTable class="stock-table mb-2" :data="processedData" />

            <v-dialog fullscreen v-model="showUpdateSuccessModal">
                <template v-slot:activator="{ on }">
                    <v-layout column align-center>
                        <BtnPrimary @click="showUpdateSuccessModal = true">Update</BtnPrimary>
                    </v-layout>
                </template>
                <v-layout column style="height: 100%; background-color: white;" justify-center>
                    <v-card flat class="text-xs-center py-5">
                        <v-layout column justify-center align-center>
                            <h1 class="pb-2">Update Success</h1>
                            <v-flex class="modal-content pa-5 color-border-primary">
                                <p class="pb-2">The availability of your menu has been updated and synced successfully. Click the button below to return to the home page.</p>
                                <v-layout row align-center justify-center>
                                    <router-link :to="{ name: optionsName }">
                                        <BtnPrimary>Return to Home</BtnPrimary>
                                    </router-link>
                                </v-layout>
                            </v-flex>
                        </v-layout>
                    </v-card>
                </v-layout>
            </v-dialog>
        </v-container>
    </v-layout>
</template>

<script>
    import StockTable from './StockTable'
    import { BtnPrimary, Header } from '@/components'

    import routesConfig from '@/router/routesConfig'

    export default {
        components: {
            BtnPrimary,
            Header,
            StockTable
        },
        computed: {
            data() {
                return this.$store.state.menu.menu
            },
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
                optionsName: routesConfig.OPTIONS.name,
                searchTerm: '',
                showUpdateSuccessModal: false
            }
        },
        name: 'Stock',
    }
</script>

<style scoped>
    .stock-table {
        border: 3px solid #1565C0;
        height: 300px;
        overflow-y: scroll;
    }

    .modal-content {
        border-style: solid;
        border-width: 3px;
        width: 600px;
    }

    .search-field {
        width: 100%;
    }
</style>
