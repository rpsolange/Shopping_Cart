import Vue from 'vue'
import App from './App.vue'

import store from './store/index'
import axios from 'axios'

Vue.use( axios)

export const HTTP = axios.create({
  baseURL: `https://randomuser.me/api/`
})

Vue.config.productionTip = false

new Vue({
  created() {
    debugger
    this.$store.dispatch("getData");
  },
  store,
  render: h => h(App),
}).$mount('#app')
