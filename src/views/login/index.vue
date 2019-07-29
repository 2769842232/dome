<template>
<div class="login-wrap">
  <van-nav-bar title="登录" />
  <form action="/home" method="POST">
    <van-cell-group>
      <van-field v-model="user.mobile" required clearable label="手机号"  placeholder="请输入手机号"  />
      <van-field v-model="user.code" type="password" label="密码" placeholder="请输入密码" required />
    </van-cell-group>
    <van-button type="info" @click.prevent="dengLogin" block>登录</van-button>
  </form>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '18801185985',
        code: '246810'
      }
    }
  },
  methods: {
    async dengLogin () {
      const res = await axios({
        method: 'POST',
        url: `http://ttapi.research.itcast.cn/app/v1_0/authorizations`,
        data: this.user
      })
      console.log(res)
      this.$router.push('/home')
    }
  }
}

</script>

<style lang='less'>

</style>
