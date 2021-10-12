import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import vuelayers from "./plugins/vuelayers";

Vue.config.productionTip = false

new Vue({
  vuetify,
  vuelayers,
  render: h => h(App)
}).$mount('#app')
