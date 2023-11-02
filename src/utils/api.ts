const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

export const getWeather = async (city: string) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}`
  )
  const data = await response.json()
  return data
}
