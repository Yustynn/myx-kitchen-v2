<template>
    <v-layout class="container">
        <v-flex xs2>{{ itemNum }}.</v-flex>
        <v-flex xs8 column>
            <h3>{{ name }}</h3>
            <p
                   class="special-requests"
                    v-for="(specialRequest, idx) in specialRequests"
                    :key="idx"
            >
                • {{ specialRequest }}

            </p>
            <p
                    class="special-requests"
                    v-if="!specialRequests || !specialRequests.length"
            >
                No special requests
            </p>
        </v-flex>
        <v-flex xs2>
            <p class="quantity">x{{ quantity }}</p>
            <p v-if="showPrice">${{ price }}</p>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        props: {
            itemNum: {
                type: Number,
                default: 12
            },
            name: {
                type: String,
                default: 'Chicken Cutlet'
            },
            price: {
                type: String,
                default: '7.50'
            },
            quantity: {
                type: Number,
                default: 2
            },
            showPrice: {
                type: Boolean,
                // default: false
                default: true
            },
            specialRequests: {
                type: Array,
                default: () => ['Fried Rice add-on', 'Chicken wings add-on']
            }
        },
        data: function() {
            return {
            }
        }
    }
</script>

<style scoped>
    .container {
        width: 350px;
    }

    .quantity {
        border-radius: 50%;
        border: 1px solid black;
        height: 30px;
        line-height: 30px;
        text-align: center;
        width: 30px;
    }

    .special-requests {
        margin: 0;
    }
</style>