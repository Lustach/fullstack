<template>
  <div class="auth">

    <input type="text" id="test"><label for="test"></label>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  $record: any
}
</script>
