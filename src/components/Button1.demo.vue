<demo>
常规使用
</demo>
<template>
<div>
  <Buttons>你好</Buttons>
  <Buttons theme="link">你好</Buttons>
  <Buttons theme="text">你好</Buttons>
</div>
</template>

<script lang="ts">
import Buttons from "../lib/Buttons.vue";
export default {
  components: {
    Buttons
  }
}
</script>