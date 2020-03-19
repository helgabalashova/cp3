import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock-data.js'

//Vue.config.productionTip = false

let data = {
  products: mock,
  cart: [],
  total: 0,
}

new Vue({
  router,
  data,
  render: function (h) { return h(App) }
}).$mount('#app')
