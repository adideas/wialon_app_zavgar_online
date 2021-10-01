import Vue from 'vue'
import store from './src/store'
import router from './router'
import '@/zavgar_auth/src/lang'
import App from '@/zavgar_auth/src/App.vue'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
