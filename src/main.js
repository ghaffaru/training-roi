import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'popper.js';
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../src/assets/js/sb-admin-2.min.js'
import '../src/assets/css/sb-admin-2.min.css';
import '../src/assets/css/fontawesome-free-5.14.0-web/css/all.min.css';
import Vuelidate from 'vuelidate'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

Vue.use(IconsPlugin)
Vue.use(Vuelidate)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
