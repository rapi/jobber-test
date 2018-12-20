// Core
import Vue from 'vue'
// UX plugin
import Vuetify from 'vuetify'
import infiniteScroll from 'vue-infinite-scroll'
// router files
import router from './router'
import App from './App'

// styles
import 'vuetify/dist/vuetify.min.css'
// Icons
import '@fortawesome/fontawesome-free/css/all.css'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
// Custom config
Vue.config.productionTip = false // Ensure you are using css-loader

// use
Vue.use(Vuetify, {
  iconfont: 'mdi'
})
Vue.use(infiniteScroll)
//Store
import store from '@/store' // Ensure you are using css-loader


export default new Vue({
  el: '#app',
  router,
  store,
  directives: {
    infiniteScroll
  },
  components: {
    App
  },
  template: '<App/>'
})
