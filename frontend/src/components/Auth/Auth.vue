<template>
  <div class="auth">
    <img alt="" class="wave" src="../../assets/auth/wave.png">
    <div class="container">
      <div class="img">
        <img alt="" src="../../assets/auth/bg.svg">
      </div>
      <div class="login-content">
        <div class="login__wrapper">
          <img alt="" src="../../assets/auth/avatar.svg">
          <h2 class="title">Welcome</h2>
          <transition name="fade">
            <div class="input-div one" v-if="this.$route.fullPath=='/sign_up'">
              <div class="i">
                <i class="fas fa-user"></i>
              </div>
              <div class="div">
                <h5>User</h5>
                <input class="input" type="text" v-model="user.email">
              </div>
            </div>
          </transition>
          <div class="input-div one">
            <div class="i">
              <i class="fas fa-envelope"></i>
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
          <div class="form_extend">
            <router-link to="/sign_up">Sign Up</router-link>
            <router-link to="/">Forgot Password?</router-link>
          </div>
          <div class="test">
          <input @click="login" class="btn" type="submit" value="Login">
          </div>
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
      input.addEventListener('focus', () => {
        input.parentNode.parentNode.classList.add('focus')
      })
      input.addEventListener('blur', () => {
        if (input.value == '')
          input.parentNode.parentNode.classList.remove('focus')
      })
    })
  }

  async login(e) {
    e.preventDefault()
    if (this.user.password.length > 5) {
      try {
        const result = await this.$API.user.login(this.user.email, this.user.password)
        // const isAdmin = result.data.user.isAdmin
        console.log(result)
        localStorage.setItem('user',JSON.stringify(result.data.user))
        localStorage.setItem('jwt',result.data.token)
        if (localStorage.getItem('jwt') != null){
          this.$emit('loggedIn')
          if(this.$route.params.nextUrl != null){
            this.$router.push(this.$route.params.nextUrl)
          }
          // else {
          //   if(is_admin== 1){
          //     this.$router.push('admin')
          //   }
            else {
              this.$router.push('test')
            }
          // }
        }
      }
      catch (err) {
        console.error(err)
      }
    }
    // const result = await this.$API.user.login(this.user.email, this.user.password)
    // console.log(result.data.token)
  }

}
</script>
<style lang="scss" src="./_Auth.scss"></style>
