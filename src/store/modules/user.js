import io from 'socket.io-client';

import { JOIN_STORE, RECEIVE_ORDERS } from "@/api/socket";
import routesConfig from '@/router/routesConfig'
import { translateRawOrdersToReceiptGroups } from '@/api/socket/translators'
import { SOCKET_URL } from '@/api/'

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
                console.log('processed', orders)
                console.log('raw', raw)
                commit('updateOrders', orders)
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
