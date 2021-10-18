import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import vuelayers from "./plugins/vuelayers";
import router from './router'

Vue.config.productionTip = false

new Vue({
  vuetify,
  vuelayers,
  router,
  render: h => h(App)
}).$mount('#app')
