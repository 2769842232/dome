import Vue from 'vue'
import Vuex from 'vuex'
// 使用vuex将token保存 方便再对歌组件内共享使用

// 导入auth模块
import * as auth from './utils/auth'
Vue.use(Vuex)

export default new Vuex.Store({
  state: { // 申明多个组件共享的数据
    // 初始化时从本地存储中获取数据 防止刷新丢失token
    user: auth.getuser()
  },
  mutations: { // 接收actions传递的新数据 修改state
    // 登录成功,调用mutations更新容器中的user的状态
    setuser (state, data) {
      // 修改state
      state.user = data
      // 将数据放到本地存储
      auth.setuser(state.user)
    }
  },
  actions: { // 和后台交互发送请求获取新数据

  }
})
