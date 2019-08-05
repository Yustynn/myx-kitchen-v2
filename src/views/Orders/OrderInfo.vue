<template>
    <a @click.stop="handleNextState">
        <v-layout :class="{ processed: processedClass }" fill-width class="px-3 py-2 container">
            <v-flex sm1 xs3>{{ itemNum }}.</v-flex>
            <v-flex sm9 xs6 column>
                <h3 class="pb-1">{{ name }}</h3>
                <p
                        class="modifications"
                        v-for="(modification, idx) in modifications"
                        :key="idx"
                >
                    • {{ modification }}

                </p>
                <p
                        class="modifications"
                        v-if="!modifications || !modifications.length"
                >
                    No special requests
                </p>
            </v-flex>
            <v-flex sm2 xs3>
                <p class="quantity">x{{ quantity }}</p>
                <p v-if="showPrice">${{ price }}</p>
                <p class="undo-text" v-if="state.isCancellableProcessed">Tap to undo</p>
            </v-flex>
        </v-layout>
    </a>
</template>

<script>
    import { mapState } from 'vuex'
    import {
        STATUS_TO_BE_ACCEPTED,
        STATUS_TO_BE_PROCESSED,
        STATUS_PROCESSED,
        setOrderStatus
    } from "@/api/orders";

    const CANCEL_DELAY = 5000 // ms

    export default {
        computed: {
            ...mapState({
               storeId: ({ user }) => user.storeId
            }),

            modifications() {
                return [...this.compulsoryOptions, ...this.optionalOptions]
            },

            processedClass() {
                return this.state.isCancellableProcessed || this.statusId === STATUS_PROCESSED
            }
        },

        data() {
            return {
                state: {
                    isCancellableProcessed: false,
                    timeout: null,
                }
            }
        },

        methods: {
            handleNextState() {
                console.log(this.statusId)
                switch (this.statusId) {
                    case STATUS_TO_BE_ACCEPTED:
                        break;

                    case STATUS_TO_BE_PROCESSED:
                        if (this.state.isCancellableProcessed) {
                            clearTimeout(this.state.timeout)

                            this.state.timeout = null
                            this.$set(this.state, 'isCancellableProcessed', false)
                        }
                        else {
                            this.$set(this.state, 'isCancellableProcessed', true)
                            this.state.timeout = setTimeout(
                                async () => {
                                    await setOrderStatus(this.storeId, this.id, STATUS_PROCESSED)
                                    this.$set(this.state, 'isCancellableProcessed', false)
                                },
                                CANCEL_DELAY
                            )
                        }

                        break;
                }


            }
        },

        props: {
            id: {
                type: Number
            },
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
            statusId: {
                type: Number,
            },
            optionalOptions: {
                type: Array,
                default: () => []
            },
            compulsoryOptions: {
                type: Array,
                default: () => []
            },
        },
    }
</script>

<style scoped>
    h3 {
        color: black;
    }

    .container {
        min-height: 100px;
    }

    .quantity {
        border-radius: 50%;
        border: 1px solid #979797;
        font-weight: 700;
        height: 30px;
        line-height: 30px;
        margin: 0;
        text-align: center;
        width: 30px;
    }

    .modifications {
        margin: 0;
        font-size: 14px;
    }

    .processed {
        background-color: #C8C8C8;
    }

    .undo-text {
        font-size: 14px;
        margin: 0;
    }
</style>