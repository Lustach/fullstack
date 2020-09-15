<template>
  <div class="auth">
    <img alt="" class="wave" src="../../assets/auth/wave.png">
    <div class="container">
      <div class="img">
        <img alt="" src="../../assets/auth/undraw_electric_car_b7hl.svg">
      </div>
      <div class="login-content">
        <div class="login__wrapper">
          <img alt="" src="../../assets/auth/avatar.svg">
          <h2 class="title">Welcome</h2>
          <transition name="fade">
            <div class="input-div one" v-show="getRoute">
              <div class="i">
                <i class="fas fa-user"></i>
              </div>
              <div class="div">
                <h5>User</h5>
                <input class="input" type="text" v-model="user.userName">
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
            <router-link to="/sign_up" v-if="!getRoute">Sign Up</router-link>
            <router-link to="/login" v-if="getRoute">Login</router-link>
            <router-link to="/">Forgot Password?</router-link>
          </div>
          <input @click="login" class="btn" type="submit" v-if="!getRoute" value="Login">
          <input @click="signUp" class="btn" type="submit" v-if="getRoute" value="Sign Up">
          <!--          <component v-bind:is="component" class="test"></component>-->
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import user from '../../store/modules/auth'
interface User {
  email: string;
  password: string;
  userName: string;
}

@Component({
  name: 'Auth',
  components: {
    Login: () => import('./Login.vue'),
    SignUp: () => import('./SignUp.vue'),
  }
})
export default class HelloWorld extends Vue {
  user: User = {
    email: '',
    password: '',
    userName: '',
  }
  // component = 'Login'
  $API: any
  @Prop() private msg!: string

  get getRoute() {
    return this.$route.fullPath == '/sign_up'
  }

  mounted() {
    this.setInputStyle()
    // if (this.$route.fullPath == '/sign_up') {
    //   this.component = 'SignUp'
    // } else {
    //   this.component = 'Login'
    // }
  }

  setInputStyle() {
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
    inputs.forEach((input)=>{
      if (input.value!=='')
      input.parentNode.parentNode.classList.add('focus')
    })
  }

  async login() {
    if (this.user.password.length > 5) {
      try {
        const result = await this.$API.user.login(this.user.email, this.user.password)
        // const result = await user.login(this.user)
        console.log('test')
        // const isAdmin = result.data.user.isAdmin
        this.setLcStore(result.data)
        this.getLcJwt()
      } catch (err) {
        console.error(err)
      }
    }
  }
  getLcJwt(){
    if (localStorage.getItem('jwt') != null) {
      if (this.$route.params.nextUrl != null) {
        this.$router.push(this.$route.params.nextUrl)
      }
        // else {
        //   if(is_admin== 1){
        //     this.$router.push('admin')
      //   }
      else {
        this.$router.push('test')
      }
    }
  }
  setLcStore(result: any) {
    console.warn(result)
    localStorage.setItem('user', JSON.stringify(result.username))
    localStorage.setItem('jwt', result.token)
  }

  async signUp(e) {
    console.log(this.user,'SUKAAAA')
    e.preventDefault()
    try {
      const result = await this.$API.user.signUp(this.user.userName, this.user.email, this.user.password)
      this.setLcStore(result.data)
      this.getLcJwt()

    } catch (e) {
      console.log(e)
    }
  }
}
</script>
<style lang="scss" src="./_Auth.scss" scoped></style>
