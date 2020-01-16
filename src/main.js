import Vue from 'vue'
import App from './App.vue'

import './scss/default.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
