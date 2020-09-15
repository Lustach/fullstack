<template>
  <div class="home">
    <Login/>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Auth/Auth'

export default {
  name: 'Home',
  components: {
    Login
  }
}
</script>
