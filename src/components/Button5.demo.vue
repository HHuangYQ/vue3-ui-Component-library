<demo>
支持显示加载中
</demo>
<template>
<div>
  <Buttons loading>加载中</Buttons>
  <Buttons>加载完毕</Buttons>
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