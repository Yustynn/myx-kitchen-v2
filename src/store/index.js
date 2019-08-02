import Vue from 'vue'
import Vuex from 'vuex'

import router from '@/router'
import modules from './modules'

Vue.use(Vuex)

const state = { router }

export default new Vuex.Store(
    {
        modules,
        state
    }
)
