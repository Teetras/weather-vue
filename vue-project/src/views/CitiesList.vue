<template>
  <div
    class="cities-list bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark p-4 flex justify-center"
  >
    <div class="w-full max-w-2xl"> 
      <h1 class="text-2xl mb-4 text-center">Recent Cities</h1>

      <p v-if="cities.length === 0" class="text-center">List is empty</p>

      <ul v-else class="space-y-4">
        <li
          v-for="(city, index) in cities"
          :key="index"
          class="city-item bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4"
        >
        <!-- <WeatherCard v-if="city" :temp="city.temp" :description="city.description" /> -->
          <div class="city-info flex justify-between items-center">
            <span class="city-name font-bold text-xl text-primary-light dark:text-primary-dark">{{
              city.city
            }}</span>
            <span v-if="city.temp" class="weather-temp text-secondary-light dark:text-secondary-dark"
              >{{ city.temp }} °C</span
            >
          </div>
          <p
            v-if="city.description"
            class="weather-description text-sm text-gray-600 dark:text-gray-300"
          >
            {{ city.description }}
          </p>
        </li>
      </ul>

      <div class="back-to-home mt-6 text-center">
        <router-link
          to="/"
          class="back-button inline-block py-2 px-4 bg-primary-light dark:bg-primary-dark text-white rounded-md"
          >Back to Home</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getCitiesFromLocalStorage } from '../api/storage.js'
// import WeatherCard from '../components/WeatherCard.vue'

const cities = ref(getCitiesFromLocalStorage())
</script>

<style scoped>
.city-item {
  border-radius: 8px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.city-name {
  font-weight: bold;
  font-size: 1.2rem;
  color: #4caf50;
}

.weather-temp {
  font-size: 1rem;
  color: #ff9800;
}

.weather-description {
  font-size: 0.9rem;
  color: #777;
}

.back-button {
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  text-decoration: none;
}

.back-button:hover {
  background-color: #45a049;
}
</style>