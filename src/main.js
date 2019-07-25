import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'

import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuetify, {
  theme: {
    primary: '#1565C0',
    secondary: '#CFCFCF'
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
