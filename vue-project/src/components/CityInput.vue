<template>
  <div class="flex justify-center items-center gap-4">
    <input 
      type="text" 
      v-model="city"
      placeholder="Enter city name"
      @keyup.enter="onSubmit"
      class="p-3 w-64 border-2 rounded-lg bg-background-light text-text-light placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-light transition duration-200"
    />
    <button 
      @click="onSubmit"
      class="px-6 py-3 bg-primary-light text-white rounded-lg hover:bg-primary-dark transition duration-300"
    >
      Get weather
    </button>
  </div>
</template>


<script setup>
import { ref } from 'vue';

const emit = defineEmits(['fetchWeather']);
const city = ref('');

const onSubmit = () => {
  emit('fetchWeather', city.value);
};
</script>

