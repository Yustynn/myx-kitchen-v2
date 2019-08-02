import Vue from 'vue'
import { getMenu, setItemStockStatus } from '@/api/menu'

export default {
    state: {
        menu: []
    },
    mutations: {
        setMenu(state, menu) {
            Vue.set(state, 'menu', menu)
        }
    },
    actions: {
        async updateMenu({commit, rootState}) {
            const menu = await getMenu(rootState.user.storeId);
            commit('setMenu', menu)
        },

        async updateItemStockStatus({dispatch, rootState}, itemId, inStock) {
            const {storeId} = rootState.user
            await setItemStockStatus(storeId, itemId, inStock)
        }
    }
}
