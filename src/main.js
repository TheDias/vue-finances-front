import App from '@/App.vue'
import '@/plugins/moment'
import '@/plugins/vuelidate'
import vuetify from '@/plugins/vuetify'
import router from '@/router'
import store from '@/store'
import { errorHandler } from '@/utils'
import Vue from 'vue'

Vue.config.productionTip = false
Vue.config.errorHandler = errorHandler

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
