<!--<template>-->
<!--  <div class="test">-->
<!--    <div class="input-div one">-->
<!--      <div class="i">-->
<!--        <i class="fas fa-envelope"></i>-->
<!--      </div>-->
<!--      <div class="div">-->
<!--        <h5>Email</h5>-->
<!--        <input class="input" type="text" v-model="user.email">-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="input-div pass">-->
<!--      <div class="i">-->
<!--        <i class="fas fa-lock"></i>-->
<!--      </div>-->
<!--      <div class="div">-->
<!--        <h5>Password</h5>-->
<!--        <input class="input" type="password" v-model="user.password">-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="form_extend">-->
<!--      <router-link to="/sign_up">Sign Up</router-link>-->
<!--      <router-link to="/">Forgot Password?</router-link>-->
<!--    </div>-->
<!--    <input @click="login" class="btn" type="submit" value="Login">-->
<!--  </div>-->
<!--</template>-->
<!--<script lang="ts">-->
<!--import { Component, Vue } from 'vue-property-decorator'-->
<!--interface User {-->
<!--  email: string;-->
<!--  password: string;-->
<!--  userName: string;-->
<!--}-->
<!--@Component({-->
<!--  name:'Login'-->
<!--})-->
<!--export default class Login extends Vue {-->
<!--  user: User = {-->
<!--    email: '',-->
<!--    password: '',-->
<!--    userName: '',-->
<!--  }-->
<!--  $API: any-->
<!--  async login(e) {-->
<!--    console.log(this.user.password.length,'login')-->
<!--    e.preventDefault()-->
<!--    if (this.user.password.length > 5) {-->
<!--      try {-->
<!--        const result = await this.$API.user.login(this.user.email, this.user.password)-->
<!--        // const isAdmin = result.data.user.isAdmin-->
<!--        console.log(result)-->
<!--        localStorage.setItem('user', JSON.stringify(result.data.user))-->
<!--        localStorage.setItem('jwt', result.data.token)-->
<!--        if (localStorage.getItem('jwt') != null) {-->
<!--          this.$emit('loggedIn')-->
<!--          if (this.$route.params.nextUrl != null) {-->
<!--            this.$router.push(this.$route.params.nextUrl)-->
<!--          }-->
<!--            // else {-->
<!--            //   if(is_admin== 1){-->
<!--            //     this.$router.push('admin')-->
<!--          //   }-->
<!--          else {-->
<!--            this.$router.push('test')-->
<!--          }-->
<!--          // }-->
<!--        }-->
<!--      } catch (err) {-->
<!--        console.error(err)-->
<!--      }-->
<!--    }-->
<!--    // const result = await this.$API.user.login(this.user.email, this.user.password)-->
<!--    // console.log(result.data.token)-->
<!--  }-->
<!--}-->
<!--</script>-->
