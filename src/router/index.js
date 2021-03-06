import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Dashboard from '../views/dashboard/Dashboard.vue'
import CreateTraining from '../views/dashboard/CreateTraining.vue'
import AddTrainer from '../views/dashboard/AddTrainer.vue'

import AddTrainee from '../views/dashboard/AddTrainee.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
    
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/create-training',
    name: 'CreateTraining',
    component: CreateTraining
  },
  {
    path: '/add-trainer',
    name: 'AddTrainer',
    component: AddTrainer
  },
  {
    path: '/add-trainee',
    name: 'AddTrainee',
    component: AddTrainee
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
