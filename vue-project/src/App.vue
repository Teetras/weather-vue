<script setup>
import HeaderCard from './components/HeaderCard.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app-container flex flex-col">
    <HeaderCard />
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
.app-container {
  position: relative;
  min-height: 100vh;
}

.app-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: -1;  
}
</style>
