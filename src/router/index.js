import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Pages/Home'
import Category from '@/components/Pages/Category'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/category/:id',
    name: 'Category',
    component: Category
  }, ]
})
