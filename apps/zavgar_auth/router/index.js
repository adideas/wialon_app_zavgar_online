import Vue from 'vue'
import Router from 'vue-router'

// routes
import Auth from '@/zavgar_auth/src/views/auth/Auth.vue'
import ErrorAuth from '@/zavgar_auth/src/views/errors/ErrorAuth.vue'
import ZavgarAuth from '@/zavgar_auth/src/views/zavgar/ZavgarAuth.vue'
import ZavgarRegister from '@/zavgar_auth/src/views/zavgar/ZavgarRegister.vue'

Vue.use(Router)

const routes = [
  {
    name: 'Index',
    path: '',
    redirect: 'auth'
  },
  {
    name: 'Auth',
    path: '/auth',
    component: Auth
  },
  {
    name: 'ErrorAuth',
    path: '/error-auth',
    component: ErrorAuth
  },
  {
    name: 'ZavgarAuth',
    path: '/zavgar-auth',
    component: ZavgarAuth
  },
  {
    name: 'ZavgarRegister',
    path: '/zavgar-register',
    component: ZavgarRegister
  },
  { path: '*', beforeEnter: (to, from, next) => { next('/auth') } }
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: routes
})
