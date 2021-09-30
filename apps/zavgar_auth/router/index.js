import Vue from 'vue'
import Router from 'vue-router'
import HelloWord from '@/zavgar_auth/src/views/HelloWord.vue'

Vue.use(Router)

const routes = [
  {
    name: 'HelloWord',
    path: '/test',
    component: HelloWord
  }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: routes
})
