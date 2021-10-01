import Vue from 'vue'
import Vuex from 'vuex'
import wialon_store from 'wialon_store'
Vue.use(Vuex)

import user from './modules/user'
import custom_property from './modules/custom_property'

const store = new Vuex.Store({
  modules: {
    user,
    custom_property
  },
  getters: {},
  plugins: [wialon_store]
})

export default store
