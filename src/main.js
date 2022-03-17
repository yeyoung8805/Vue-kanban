// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'es6-promise/auto' //Promise 폴리필
import App from './App'
import router from './router'
import store from './store' //Vuex 스토어 인스턴스 임포트

Vue.config.productionTip = process.env.MODE_ENV === 'production'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
