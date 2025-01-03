const apiKey = import.meta.env.VITE_API_KEY
const apiUrlSearch = import.meta.env.VITE_API_URL

export const fetchWeather = async (city) => {
  const url = `${apiUrlSearch}?q=${city}&appid=${apiKey}`

  try {
    const response = await fetch(url)
    const data = await response.json()

    if (data.cod === '404') {
      throw new Error('City not found')
    }

    const tempCelsius = data.main.temp - 273.15
    return {
      temp: parseFloat(tempCelsius.toFixed(2)),
      description: data.weather[0].description,
    }
  } catch (error) {
    throw new Error(error.message || 'An error occurred')
  }
}
