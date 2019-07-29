import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入lib-flexible用于设置rem基准值也就是设置font-size
import 'amfe-flexible/index.min.js'
// 引入vantui
import Vant from 'vant'
import axios from 'axios'
import 'vant/lib/index.css'

// 引入登录组件的全局样式
import './style/index.less'
Vue.use(Vant)
Vue.prototype.axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
