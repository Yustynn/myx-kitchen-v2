import Vue from 'vue'

export default {
    state: {
        orders: [],
        acknowledged: {}
    },
    mutations: {
        acknowledgeOrder({ acknowledged }, receiptId) {
            Vue.set(acknowledged, receiptId, true)
        },

        updateOrders(state, orders) {
            Vue.set(state, 'orders', orders)
        }
    },
    actions: {

    }
}
