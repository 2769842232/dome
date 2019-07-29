import Vue from 'vue'
import Router from 'vue-router'
// 引入登录页
import Login from './views/login/index.vue'
import Home from './views/home/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // 重定向
    { name: 'zoo', path: '/', redirect: '/login' },
    { name: 'Login', path: '/login', component: Login },
    { name: 'home', path: '/home', component: Home }
  ]
})
