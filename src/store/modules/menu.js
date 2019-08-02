import Vue from 'vue'
import { getMenu, setItemStockStatus } from '@/api/menu'

export default {
    state: {
        menu: []
    },
    mutations: {
        setMenu(state, menu) {
            Vue.set(state, 'menu', menu)
        },

        setItemStockStatus({ menu }, { itemId, inStock }) {
            let item;

            for (let { items } of menu) {
                for (let _item of items) {
                    if (_item.itemNum === itemId) item = _item
                }
            }

            Vue.set(item, 'inStock', inStock)
        }
    },
    actions: {
        async updateMenu({commit, rootState}) {
            const menu = await getMenu(rootState.user.storeId);
            commit('setMenu', menu)
        },

        async updateItemStockStatus({commit, rootState}, { itemId, inStock }) {
            const {storeId} = rootState.user

            await setItemStockStatus(storeId, itemId, inStock)
            commit('setItemStockStatus', { itemId, inStock })
        }
    }
}
