import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'

import router from './router'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuetify, {
  theme: {
    primary: '#1565C0',
    secondary: '#414141'
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
