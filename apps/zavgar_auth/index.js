import Vue from 'vue'
import router from './router'
import '@/zavgar_auth/src/lang'
import App from '@/zavgar_auth/src/app.vue'
import 'wialonjs'

var sess = window.wialon.core.Session.getInstance()
sess.initSession('https://hst-api.wialon.com')
sess.loginToken('5dce19710a5e26ab8b7b8986cb3c49e58C291791B7F0A7AEB8AFBFCEED7DC03BC48FF5F8', '', // trying login
  function(code) { // login callback
    console.error(code)
  }
)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
