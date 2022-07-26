<demo>
支持 size
</demo>
<template>
<div>
  <div>
    <Buttons size="big">大大大</Buttons>
    <Buttons>普普通</Buttons>
    <Buttons size="small">小小小</Buttons>
  </div>
  <div>
    <Buttons theme="link" size="big">大大大</Buttons>
    <Buttons theme="link">普普通</Buttons>
    <Buttons size="small" theme="link">小小小</Buttons>
  </div>
  <div>
    <Buttons size="big" theme="text">大大大</Buttons>
    <Buttons theme="text">普普通</Buttons>
    <Buttons size="small" theme="text">小小小</Buttons>
  </div>
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