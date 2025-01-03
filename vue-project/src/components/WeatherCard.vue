<template>
  <div class="weather p-6 bg-background-light rounded-lg shadow-md w-72 mx-auto">
    <p class="text-xl font-semibold">Temperature: {{ temp }} °C</p>
    <p class="text-md">Weather: {{ description }}</p>
  </div>
</template>


<script setup>
defineProps({
  temp: Number,
  description: String,
})
</script>

