<script setup>
import { ref, onMounted } from 'vue'
import { toggleTheme, initializeTheme } from '../api/theme.js'

const isDarkMode = ref(false)

const toggleThemeHandler = () => {
  isDarkMode.value = toggleTheme(); 
}

onMounted(() => {
  isDarkMode.value = initializeTheme(); 
})
</script>

<template>
  <header class="p-4 flex justify-between items-center">
    <button @click="toggleThemeHandler" class="p-2 rounded-md transition-colors">
      <i v-if="isDarkMode" class="fas fa-moon text-white dark:text-primary-dark"></i>
      <i v-else class="fas fa-sun text-primary-light dark:text-white"></i>
    </button>
  </header>
</template>

<style scoped>
button i {
  font-size: 1.5rem;
}

.bg-background-dark {
  background-color: #121212;
}

.text-primary-light {
  color: #ffb62d;
}

.text-primary-dark {
  color: #60dbe6;
}
</style>