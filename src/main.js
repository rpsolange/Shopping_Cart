import Vue from 'vue'
import App from './App.vue'
import router from './router/routes'
import axios from 'axios'
import store from './store/index'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use( axios)

export const HTTP = axios.create({
  baseURL: `https://randomuser.me/api/`
})

Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  created() {
    this.$store.dispatch("getData");
  },
  store,
  router,
  render: h => h(App),
}).$mount('#app')
