<template>
    <div class="container">
        <v-expansion-panel
                v-model="panel"
                expand
                class="expansion-panels-container"
        >
            <v-expansion-panel-content
                    v-for="(categoryInfo, idx) in data"
                    :key="idx"
                    class="expansion-panel-item"
            >
                <template v-slot:header>
                    <div>{{ categoryInfo.category }}</div>
                </template>
                <v-data-table
                        :items="categoryInfo.items"
                        :headers="headers"
                        hide-actions
                        hide-headers
                >
                    <template v-slot:items="props">
                        <tr style="margin: 0 200px !important;" @click="rowOnClickHandler(props.item)">
                            <td class="test" :class="props.item.inStock ? '' : 'no-stock'">{{ props.item.itemNum }}.</td>
                            <td :class="props.item.inStock ? '' : 'no-stock'">{{ props.item.name }}</td>
                            <td :class="props.item.inStock ? '' : 'no-stock'">${{ props.item.price }}</td>
                            <td>
                                <v-flex row>
                                    <span>
                                        <v-icon :color="props.item.inStock ? 'green' : '#C5C5C5'">done</v-icon>
                                        <v-icon :color="props.item.inStock ? '#C5C5C5' : 'red'">clear</v-icon>
                                     </span>
                                </v-flex>
                            </td>
                        </tr>
                    </template>
                </v-data-table>
            </v-expansion-panel-content>
        </v-expansion-panel>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                headers: [
                    {
                        text: '#',
                        value: 'itemNum'
                    },
                    {
                        text: 'Name',
                        value: 'name'
                    },
                    {
                        text: '$',
                        value: 'price'
                    },
                    {
                        text: 'In Stock',
                        value: 'inStock'
                    }
                ],
                panel: Array(this.data.length).fill(false)
            }
        },
        methods: {
          rowOnClickHandler(item) {
              item.inStock = !item.inStock
          },
        },
        props: {
            data: Array
        }
    }
</script>

<style scoped>
    td {
        text-transform: none;
    }

    .container {
        cursor: pointer;
    }

    .expansion-panel-item {
        font-size: 18px;
        font-weight: 700;
        text-transform: uppercase;
    }

    .expansion-panels-container {
        box-shadow: none;
    }

    .no-stock {
        color: #C5C5C5;
        text-decoration: line-through;
    }
    
    .test {
        margin-left: 30px !important;
    }
</style>