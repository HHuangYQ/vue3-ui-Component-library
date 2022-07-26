<demo>
支持 disabled
</demo>
<template>
<Buttons disabled>禁用按钮</Buttons>
<Buttons theme="link" disabled>禁用链接按钮</Buttons>
<Buttons theme="text" disabled>禁用按钮</Buttons>
</template>

<script lang="ts">
import Buttons from "../lib/Buttons.vue";
export default {
  components: {
    Buttons
  }
}
</script>