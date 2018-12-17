// Core
import Vue from 'vue'
// UX plugin
import Vuetify from 'vuetify'
// router files
import router from './router'
import App from './App'

// styles
import 'vuetify/dist/vuetify.min.css'
// Icons
import '@fortawesome/fontawesome-free/css/all.css'
import store from '@/store' // Ensure you are using css-loader
// Custom config
Vue.config.productionTip = false // Ensure you are using css-loader

// use
Vue.use(Vuetify, {
  iconfont: 'mdi'
})

// clear console every time
window.addEventListener('message', e => {
  if (process.env.NODE_ENV !== 'production') {
    Vue.config.devtools = true
    console.clear()
  }
})

export default new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
