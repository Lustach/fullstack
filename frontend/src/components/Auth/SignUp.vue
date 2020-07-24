<!--<template>-->
<!--  <div class="test">-->
<!--      <div class="input-div one" v-if="this.$route.fullPath=='/sign_up'">-->
<!--        <div class="i">-->
<!--          <i class="fas fa-user"></i>-->
<!--        </div>-->
<!--        <div class="div">-->
<!--          <h5>User</h5>-->
<!--          <input class="input" type="text" v-model="user.username">-->
<!--        </div>-->
<!--      </div>-->
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
<!--      <router-link to="/sign_up">Login</router-link>-->
<!--      <router-link to="/">Forgot Password?</router-link>-->
<!--    </div>-->
<!--    <input @click="signUp()" class="btn" type="submit" value="Sign Up">-->
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
<!--  name:'SignUp'-->
<!--})-->
<!--export default class SignUp extends Vue {-->
<!--  user: User = {-->
<!--    email: '',-->
<!--    password: '',-->
<!--    userName: '',-->
<!--  }-->
<!--  signUp(){-->
<!--    console.log('signUp')-->
<!--  }-->
<!--}-->
<!--</script>-->
