<template>
    <v-layout fill-width class="px-3 py-2">
        <v-flex sm1 xs3>{{ itemNum }}.</v-flex>
        <v-flex sm9 xs6 column>
            <h3 class="pb-1">{{ name }}</h3>
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
        <v-flex sm2 xs3>
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
                default: false
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
    h3 {
        color: black;
    }

    .container {
        padding: 100px;
    }

    .quantity {
        border-radius: 50%;
        border: 1px solid #979797;
        font-weight: 700;
        height: 30px;
        line-height: 30px;
        text-align: center;
        width: 30px;
    }

    .special-requests {
        margin: 0;
    }
</style>