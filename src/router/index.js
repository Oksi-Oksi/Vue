import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Myaccount',
    name: 'Myaccount',
    // route level code-splitting
    // this generates a separate chunk (Myaccount.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Myaccount" */ '../views/Myaccount.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
