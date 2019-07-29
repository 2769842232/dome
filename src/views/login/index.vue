<template>
  <div class="login-wrap">
    <van-nav-bar title="登录" />
    <form action="/home" method="POST">
      <van-cell-group>
        <van-field
          v-validate="'required|mobile'"
          name="phone"
          :error-message="errors.first('phone')"
          v-model="form.mobile"
          required
          clearable
          label="手机号"
          placeholder="请输入手机号"
        />
        <van-field v-model="form.code" type="password" label="密码" placeholder="请输入密码" required />
      </van-cell-group>
      <van-button type="info" @click.prevent="dengLogin" block>登录</van-button>
    </form>
  </div>
</template>

<script>
// 引入模块
import { login } from '@/api/user'
export default {
  name: 'LoginIndex',
  data () {
    return {
      form: {
        mobile: '18801185985',
        code: '246810'
      }
    }
  },
  methods: {
    async dengLogin () {
      try {
        this.$validator.validate().then(async valid => {
          if (!valid) {
            return
          }
          const data = await login(this.user)
          // 获取token
          console.log(data)
          this.$store.commit('setuser', data)
        })
      } catch (error) {
        console.log(error)
      }
      // this.$router.push('/home')
    }
  }
}

</script>

<style lang='less'>
</style>
