import Vue from 'vue'
import store from './src/store'
import router from './router'
import '@/zavgar_auth/src/lang'
import App from '@/zavgar_auth/src/App.vue'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import './index.css'
Vue.use(Vuesax, {
  // options here
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
