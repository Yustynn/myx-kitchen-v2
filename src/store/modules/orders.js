import Vue from 'vue'

export default {
    state: {
        orders: []
    },
    mutations: {
        updateOrders(state, orders) {
            Vue.set(state, 'orders', orders)
        }
    },
    actions: {

    }
}
