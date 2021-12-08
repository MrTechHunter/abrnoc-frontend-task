import Vue from 'vue'
import VueRouter from 'vue-router'
import Account from '../components/Account'
import Dashboard from '../components/Dashboard'
import Servers from '../components/Servers'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/account',
    name: 'account',
    component: Account
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    props: {}
  },
  {
    path: '/servers',
    name: 'servers',
    component: Servers,
    props: {}
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
