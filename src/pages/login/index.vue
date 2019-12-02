<template>
  <div class="zj-login">
    <div style="height: 50px;"></div>
    <div class="login-box">
      <h1 class="login-title">用户登录</h1>
      <div class="login-box-input">
        <i class="iconfont iconxingmingyonghumingnicheng login-icon"></i>
        <input type="text" v-model="form.username" />
      </div>
      <div class="login-box-input">
        <i class="iconfont iconmima login-icon"></i>
        <input type="password" v-model="form.password" />
      </div>
      <Button type="error" class="login-button" long @click="login">登录</Button>
      <router-link to="/" class="login-forget">忘记密码?</router-link>
    </div>
  </div>
</template>

<script>
import {login} from '@/api/login'
import {mapActions} from 'vuex'

export default {
  name: 'LoginIndex',
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions('User', {
      UserInfo: 'login'
    }),
    login () {
      login(this.form).then(res => {
        if (res.success && res.code === 200) {
          this.UserInfo(res.result)
        } else {
          this.$Message.error(res.message)
        }
      })
    }
  }
}
</script>

<style lang="less">
  .zj-login {
    margin-top: 80px;
    width: 100%;
    padding-bottom: 100px;
    background-color: #f6f6f6;
    background-image: url('../../assets/images/login-bg.jpeg');
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    .login-box {
      background-color: #fff;
      width: 35%;
      border: 1px solid #eee;
      padding: 50px 50px 60px;
      margin: 50px auto;
      -webkit-border-radius: 6px;
      -moz-border-radius: 6px;
      border-radius: 6px;
      .login-title {
        font-size: 20px;
        margin-bottom: 50px;
        color: rgb(153, 153, 153);;
      }
      .login-box-input {
        border: 1px solid #eee;
        height: 50px;
        text-align: left;
        display: flex;
        margin: 30px auto;
        .login-icon {
          line-height: 50px;
          padding: 0 20px;
          font-size: 20px;
        }
        input {
          border: none;
          width: 100%;
          height: 100%;
          border-left: 1px solid #eee;
          padding-left: 10px;
        }
      }
      .login-button {
        height: 50px;
        background-color: #f95d59;
      }
      .login-forget {
        text-align: left;
        display: block;
        color: rgb(153, 153, 153);
        margin-top: 20px;
      }
    }
  }
</style>
