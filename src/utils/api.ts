const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

export interface OpenWeatherData {
  name: string
  main: {
    feels_like: number
    humidity: number
    pressure: number
    temp: number
    temp_max: number
    temp_min: number
  }
  weather: {
    description: string
    icon: string
    id: number
    main: string
  }[]
  wind: {
    deg: number
    speed: number
  }
}

export const getWeather = async (city: string) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}`
  )
   if (!response.ok) {
     throw new Error('City not found')
   }
  const data: OpenWeatherData = await response.json()
  return data
}
