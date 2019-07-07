<template>
    <div class="container">
        <v-expansion-panel
                v-model="panel"
                expand
        >
            <v-expansion-panel-content
                    v-for="(categoryInfo, idx) in data"
                    :key="idx"
            >
                <template v-slot:header>
                    <div>{{ categoryInfo.category }}</div>
                </template>
                <v-data-table
                        :items="categoryInfo.items"
                        :headers="headers"
                        class="elevation-1"
                        hide-actions
                        hide-headers
                >
                    <template v-slot:items="props">
                        <tr @click="rowOnClickHandler(props.item)">
                            <td :class="props.item.inStock ? '' : 'no-stock'">{{ props.item.itemNum }}.</td>
                            <td :class="props.item.inStock ? '' : 'no-stock'">{{ props.item.name }}.</td>
                            <td :class="props.item.inStock ? '' : 'no-stock'">{{ props.item.price }}.</td>
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
    .no-stock {
        color: #C5C5C5;
        text-decoration: line-through;
    }
    
    .container {
        cursor: pointer;
    }
</style>