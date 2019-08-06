<template>
    <v-flex class="container" @click="handleAcknowledgement()">
        <div class="receipt-shield" v-if="isBlink" />
        <v-layout
                class="header py-2 px-3"
                :class="{
                    pending,
                    blink: isBlink
                }"
                row
                justify-space-between
                justify-content-center
        >
            <span>Table {{ tableNum }}</span>
            <span class="receipt-num">#{{ receiptNum }}</span>
            <span>{{ timestamp }}</span>
        </v-layout>
        <v-flex
                class="order-container"
                v-for="(order, idx) in orders"
                :key="idx"
        >
            <div
                    @click="toggleRejection(order.id)"
                    class="order-shield"
                    v-if="isNotYetAccepted"
            />
            <OrderInfo
                    class="order"
                    :class="{ pending }"
                    v-bind="order"
                    :rejected="rejects[order.id]"
            />
        </v-flex>

        <v-layout row justify-center v-if="pending">
            <v-btn
                    outline
                    color="darkgrey"
                    @click="acceptReceiptHandler"
                    v-if="!isRejected"
            >
                Accept
            </v-btn>
            <v-btn
                    outline
                    color="darkgrey"
                    @click="showRejectionModal = true"
                    v-if="isRejected"
            >
                Decline
            </v-btn>
        </v-layout>

        <v-dialog v-model="showRejectionModal" style="width: 300px;">
                <v-layout row style="display: flex; flex-direction: column; background: white;" align-center justify-center>
                        <v-card flat class="text-xs-center py-5">
                            <v-layout column justify-center align-center>
                                <h2>Provide reason for declining</h2>
                                <v-layout row justify-center align-center>
                                    <v-btn
                                            outline
                                            class="modal-btn"
                                            :class="{ active: reasonChoice === reason }"
                                            @click="toggleReason(reason)"
                                            v-for="reason in reasons"
                                            :key="reason"
                                    >{{ reason }}</v-btn>

                                </v-layout>

                                <h2>Do you want to remove declined main dish from menu?</h2>
                                <v-layout row justify-center align-center>
                                    <v-btn
                                            @click="toggleRemovalChoice(true)"
                                            outline
                                            class="modal-btn"
                                            :class="{ active: removalChoice === true }"
                                    >Yes
                                    </v-btn>
                                    <v-btn
                                            @click="toggleRemovalChoice(false)"
                                            outline
                                            class="modal-btn"
                                            :class="{ active: removalChoice === false }"
                                    >No
                                    </v-btn>
                                </v-layout>
                            </v-layout>
                        </v-card>
                        <v-btn
                                @click="rejectReceiptHandler"
                                class="modal-submit-btn"
                                :class="{ 'modal-submit-active': isModalSubmittable }"
                        >
                            Confirm
                        </v-btn>
                </v-layout>
        </v-dialog>
    </v-flex>

</template>

<script>
    import { mapState } from 'vuex'

    import {
        STATUS_REJECTED,
        STATUS_TO_BE_ACCEPTED,
        STATUS_TO_BE_PROCESSED,
        STATUS_UNACKNOWLEDGED,
        acceptReceipt,
        setOrdersStatus
    } from '@/api/orders'

    import OrderInfo from './OrderInfo'

    export default {
        components: {
            OrderInfo
        },

        computed: {
            ...mapState({
                storeId: ({ user }) => user.storeId
            }),

            isNotYetAccepted() {
                return this.orders.some((o) => o.statusId === STATUS_TO_BE_ACCEPTED)
            },

            isBlink() {
                return this.orders.some(
                    (o) => o.statusId === STATUS_UNACKNOWLEDGED
                )
            },

            isModalSubmittable() {
                return this.reasonChoice !== null && this.removalChoice !== null
            },

            isRejected() {
                const { isNotYetAccepted } = this
                const hasRejects = Object.values(this.rejects).some((isRejected) => isRejected)

                return isNotYetAccepted && hasRejects
            }
        },

        data() {
            return {
                rejects: {},
                reasons: [
                    'Out of stock',
                    'Kitchen busy',
                    'Custom Message'
                ],
                reasonChoice: null,
                removalChoice: null,
                showRejectionModal: false,
            }
        },

        methods: {
            async acceptReceiptHandler() {
                const {storeId} = this.$store.state.user

                return acceptReceipt(storeId, this.receiptNum)
            },

            async rejectReceiptHandler() {
                const {storeId} = this.$store.state.user

                setOrdersStatus(storeId, this.orders, STATUS_REJECTED)
            },

            handleAcknowledgement() {
                if (this.isBlink) {
                    setOrdersStatus(
                        this.storeId,
                        this.orders,
                        STATUS_TO_BE_PROCESSED
                    )
                }
            },

            toggleRemovalChoice(choice) {
                this.removalChoice = (this.removalChoice === choice) ? null : choice
            },

            toggleReason(reason) {
                this.reasonChoice = (this.reasonChoice === reason) ? null : reason
            },

            toggleRejection(id) {
                this.$set(this.rejects, id, !this.rejects[id])
            }
        },

        props: {
            pending: {
                type: Boolean,
                default: false
            },
            orders: {
                type: Array,
                default: () => []
            },
            receiptNum: {
                type: Number,
            },
            tableNum: {
                type: Number,
                default: 999
            },
            timestamp: {
                type: String,
                default: '99:99 AM'
            }
        }
    }
</script>

<style scoped>
    @keyframes blinker {
        45% {
            background-color: initial;
        }
        50% {
            background-color: #1565C0;
        }
        95% {
            background-color: #1565C0;
        }
    }

    .blink.header {
        animation: blinker 0.75s linear infinite;
    }

    .container {
        background-color: white;
        border: 1px solid #A8A8A8;
        border-radius: 4px;
        padding: 0;
        position: relative;
    }

    .header {
        border-bottom: 1px solid #707070;
        background-color: #D0DFEF;
        letter-spacing: 1.5px;
        line-height: 22px;
        text-transform: uppercase;
    }

    .header.pending {
        background-color: white;
        border-bottom: none;
    }

    .header span.receipt-num {
        color: #1565C0;
        font-size: 22px;
        font-weight: bold;
    }

    .header.pending span {
        color: #B1B1B1;
    }

    .modal-btn {
        border-radius: 8px;
        border: 2px solid darkgrey;
        font-size: 18px;
        height: 80px;
        text-align: center;
        text-transform: none;
        width: 180px;
    }

    .modal-btn.active {
        border-color: #1565C0;
    }
    .modal-submit-btn {
        background-color: #9fa0a0 !important;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        color: white;
        font-size: 18px;
        font-weight: bold;
        height: 50px;
        width: 100%;
    }

    .modal-submit-btn.modal-submit-active {
        background-color: #1565C0 !important;
    }

    .order {
        border-bottom: 1px solid grey;
    }

    .order:last-of-type {
        border-bottom: none;
    }

    .order.pending {
        border-bottom: none;
    }

    .order-container {
        position: relative;
    }

    .order-shield {
        height: 100%;
        position: absolute;
        width: 100%;
    }

    .receipt-shield {
        height: 100%;
        position: absolute;
        width: 100%;
        z-index: 1;
    }


</style>
