import Vue from 'vue'
import io from 'socket.io-client';

import { JOIN_STORE, RECEIVE_ORDERS } from "@/api/socket";

export default {
    state: {
        store_id: ''
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

        login({ commit, dispatch }, storeId) {
            const reconnect = () => {
                dispatch('login', storeId)
            }
            const processOrders = console.log // @TODO

            dispatch('disconnectSocket')

            const socket = io('http://10.12.254.221:11236/');

            socket.on('disconnect', reconnect)
            socket.emit(JOIN_STORE, storeId)
            socket.on(RECEIVE_ORDERS, processOrders)

            // @TODO only do this after store room join is confirmed
            commit('setStoreId', storeId);
            commit('setSocket', socket);
            dispatch('updateMenu')
        }

    }
}
