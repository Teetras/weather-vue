<template>
    <div class="home flex justify-center items-center flex-1  w-full">
      <div class="flex flex-col items-center gap-8 w-full max-w-lg px-4">
        <h2 class="text-2xl font-semibold text-heading text-center">Enter city name to get weather</h2>
        <CityInput @fetchWeather="fetchWeather" />
        <ErrorMessage :error="error" />
        <WeatherCard v-if="weather" :temp="weather.temp" :description="weather.description" />
        <router-link to="/cities" class="text-primary-light hover:underline">See list of cities</router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { fetchWeather as fetchWeatherService } from '../api/weatherService.js'
  import { saveCityToLocalStorage } from '../api/storage.js'
  import WeatherCard from '../components/WeatherCard.vue'
  import CityInput from '../components/CityInput.vue'
  import ErrorMessage from '../components/ErrorMessage.vue'
  
//   const city = ref('')
  const weather = ref(null)
  const error = ref(null)
  
  const citiesList = ref([])
  
  const fetchWeather = async (cityName) => {
    if (!cityName) {
      error.value = 'Please enter a city name.'
      weather.value = null
      return
    }
  
    try {
      const data = await fetchWeatherService(cityName)
      weather.value = data
      error.value = null
      citiesList.value.push({ city: cityName, ...data })
      saveCityToLocalStorage(citiesList.value)
    } catch (err) {
      console.error('Error:', err)
      error.value = err.message || 'An error occurred'
      weather.value = null
    }
  }
  </script>
  
  <style scoped>

  </style>
  