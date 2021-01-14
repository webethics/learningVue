import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import './assets/css/custom.css'


new Vue({
  el: '#app',
  render: h => h(App)
})
