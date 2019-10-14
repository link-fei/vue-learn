// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from '@/components/layout'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(Vuex)
Vue.use(router)


new Vue({
  el: '#app',
  router,
  components: { Layout },//Layout为根节点
  template: '<Layout/>'
})
