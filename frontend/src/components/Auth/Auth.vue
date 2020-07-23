<template>
  <div class="auth">
    <img class="wave" src="../../assets/auth/wave.png" alt="">
    <div class="container">
      <div class="img">
        <img src="../../assets/auth/bg.svg" alt="">
      </div>
      <div class="login-content">
        <div class="login__wrapper">
          <img src="../../assets/auth/avatar.svg" alt="">
          <h2 class="title">Welcome</h2>
          <div class="input-div one">
            <div class="i">
              <i class="fas fa-user"></i>
            </div>
            <div class="div">
              <h5>Email</h5>
              <input class="input" type="text" v-model="user.email">
            </div>
          </div>
          <div class="input-div pass">
            <div class="i">
              <i class="fas fa-lock"></i>
            </div>
            <div class="div">
              <h5>Password</h5>
              <input class="input" type="password" v-model="user.password">
            </div>
          </div>
          <a href="#">Forgot Password?</a>
          <input @click="login" class="btn" type="submit" value="Login">
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

interface User {
  email: string;
  password: string;
}

@Component
export default class HelloWorld extends Vue {
  user: User = {
    email: '',
    password: '',
  }
  $API: any
  @Prop() private msg!: string

  mounted() {
    const inputs = document.querySelectorAll('.input')
    inputs.forEach(input => {
      input.addEventListener('focus', ()=>{
          input.parentNode.parentNode.classList.add('focus')
      })
      input.addEventListener('blur', ()=>{
        if (input.value=='')
          input.parentNode.parentNode.classList.remove('focus')
      })
    })
  }

  async login() {
    const result = await this.$API.user.login(this.user.email, this.user.password)
    console.log(result.data.token)
  }

}
</script>
<style lang="scss" src="./_Auth.scss"></style>
