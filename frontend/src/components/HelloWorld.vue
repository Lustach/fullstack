<template>
  <div>
    <div class="header">Header HelloWorld</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  $API: any
  async getDat(){
    const result = await this.$API.record.getData()
  }
  async login(){
    const result = await this.$API.user.login("lusta.vlad2001@gmail.com","123456")
  }
  exit(){
    localStorage.removeItem('jwt')
    localStorage.removeItem('user')
    this.$router.push('/login')
  }
}
</script>
