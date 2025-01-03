export const saveCityToLocalStorage = (city) => {
  const cities = getCitiesFromLocalStorage()
  if (!cities.find((item) => item.city === city.city)) {
    cities.push(city[0])
    localStorage.setItem('cities', JSON.stringify(cities))
  }
}

export const getCitiesFromLocalStorage = () => {
  const savedCities = localStorage.getItem('cities')
  return savedCities ? JSON.parse(savedCities) : []
}
