import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入lib-flexible用于设置rem基准值也就是设置font-size
import 'amfe-flexible/index.min.js'
// 引入vantui
import Vant from 'vant'
// import axios from 'axios'
import 'vant/lib/index.css'

// 引入登录组件的全局样式
import './style/index.less'
import './utils/request'
import VeeValidate, { Validator } from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'
Validator.localize('zh_CN', zh_CN)
Vue.use(VeeValidate)
// 自定义规则
Validator.extend('mobile', {
  getMessage: field => '请输入正确的手机号码',
  validate: value =>
    value.length === 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
})
Vue.use(Vant)
// Vue.prototype.axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
