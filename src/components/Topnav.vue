<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <Grape class="grapes"/>
    </router-link>
    <ul class="menu">
      <li>
      <router-link to="/doc">文档</router-link>
    </li>
    </ul>
    <Menu  v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu"/>      
   
  </div>

  
</template>
<script lang="ts">
import { inject, Ref } from 'vue'


export default {
  props:{
    toggleMenuButtonVisible:{
      type:Boolean,
      default:false
    }
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>
      ('menuVisible')
    const toggleMenu = () => {
      menuVisible!.value = !menuVisible!.value
    }
    return { toggleMenu }
  }
}
</script>
 
<style lang="scss" scoped>
$color:#01928c;

.topnav {
  color: $color;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;

  >.logo {
    max-width: 6em;
    margin-right: auto;
    >.grapes{
    width: 32px;
    height: 32px;
    }
  }

  >.menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    >li {
      margin: 0 1em;
      
    }
  }
  .toggleAside{
      position: absolute;
      top: 25px;
      left: 15px;
      width: 25px; 
      height: 25px;
      margin-right: 8px;
      display: none;
      transform: translateY(-10%); 
 }

  @media(max-width:500px) {
    >.menu {
      display: none;
    }

    >.logo {
      margin: 0 auto;
    }

    >.toggleAside {
      display: inline-block;

    }
  }
}
</style>