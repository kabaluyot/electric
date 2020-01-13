import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.config.devtools = process.env.NODE_ENV === 'development'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
