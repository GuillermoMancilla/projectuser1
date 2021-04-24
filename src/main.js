import Vue from 'vue'
import App from './App.vue'
import store from './store'

import router from "@/router";
import {VueSpinners} from '@saeris/vue-spinners'; 

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BSpinner } from 'bootstrap-vue'

Vue.component('b-spinner', BSpinner)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.use(VueSpinners);
Vue.config.productionTip = false

new Vue({
  router,
  store:store,
  render: h => h(App),
}).$mount('#app')
