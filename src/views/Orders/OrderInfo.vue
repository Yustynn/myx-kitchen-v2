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
            <v-flex class="quantity-container" sm2 xs3>
                <p
                        class="quantity"
                        :class="{ rejected }"
                >
                    x{{ quantity }}
                </p>
                <p v-if="showPrice">${{ price }}</p>
                <p class="decline-text" v-if="rejected">Decline</p>
                <p class="undo-text" v-if="showUndoText">Tap to undo</p>
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

    const CANCEL_DELAY = 1500 // ms

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
            },

            showUndoText() {
                return this.state.isCancellableProcessed && this.statusId === STATUS_TO_BE_PROCESSED
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
                default: '(name missing)'
            },
            price: {
                type: String,
                default: '(price missing)'
            },
            quantity: {
                type: Number,
                default: 999
            },
            rejected: {
                type: Boolean
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

    .decline-text {
        color: #D4615C;
        font-size: 14px;
        font-weight: 700;
        margin-top: 10px;
        text-transform: uppercase;
    }

    .quantity {
        border-radius: 50%;
        border: 2px solid #A2D48F;
        font-weight: 700;
        height: 30px;
        line-height: 30px;
        margin: 0 auto;
        text-align: center;
        width: 30px;
    }

    .quantity-container {
        min-width: 65px;
    }

    .quantity.rejected {
        border-color: #D4615C;
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