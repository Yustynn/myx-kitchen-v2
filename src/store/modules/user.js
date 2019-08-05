import io from 'socket.io-client';

import { JOIN_STORE, RECEIVE_ORDERS } from "@/api/socket";
import routesConfig from '@/router/routesConfig'
import { translateRawOrdersToReceiptGroups } from '@/api/socket/translators'
import { SOCKET_URL } from '@/api/'
import { setOrdersStatus, STATUS_COMPLETED, STATUS_PROCESSED } from "@/api/orders";

export default {
    state: {
        storeId: ''
    },
    mutations: {
        setSocket(state, socket) {
            state.socket = socket
        },

        setStoreId(state, storeId) {
            state.storeId = storeId
        }
    },
    actions: {
        disconnectSocket({ state }) {
            if (state.socket) state.socket.disconnect()
        },

        login({ commit, dispatch, rootState }, storeId) {
            const reconnect = () => {
                dispatch('login', storeId)
            }

            const processOrders = (raw) => {
                const orders = translateRawOrdersToReceiptGroups(raw)

                const validOrders = orders.filter((r) => {
                    return r.orders.every((o) => o.statusId !== STATUS_COMPLETED)
                })

                commit('updateOrders', validOrders)

                console.log('valid', validOrders)
                console.log('processed', orders)
                console.log('raw', raw)
                const completed = validOrders.filter(({ orders }) => {
                    return orders.every((o) => o.statusId === STATUS_PROCESSED)
                })

                console.log('completed', completed)

                completed.forEach(({ orders }) => setOrdersStatus(storeId, orders, STATUS_COMPLETED))

            }

            dispatch('disconnectSocket')

            const socket = io(SOCKET_URL);

            socket.on('disconnect', reconnect)
            socket.emit(JOIN_STORE, storeId)
            socket.on(RECEIVE_ORDERS, processOrders)

            // @TODO only do this after store room join is confirmed
            commit('setStoreId', storeId);
            commit('setSocket', socket);
            dispatch('updateMenu')

            rootState.router.push(routesConfig.OPTIONS)
        }

    }
}
