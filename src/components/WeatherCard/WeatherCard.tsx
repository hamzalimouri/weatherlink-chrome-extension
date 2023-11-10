import React, { useEffect, useState } from 'react'
import { getWeather, OpenWeatherData } from '../../utils'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material'

const WeatherContainer: React.FC<{
  children: React.ReactNode
  onDelete?: () => void
}> = ({ children, onDelete }) => {
  return (
    <Box mx={'4px'} my={'16px'}>
      <Card>
        <CardContent>{children}</CardContent>
        <CardActions>
          {onDelete && <Button variant='contained' color='error' size='small' onClick={onDelete}>
            Remove
          </Button>}
        </CardActions>
      </Card>
    </Box>
  )
}

type WeatherCardState = 'loading' | 'error' | 'success'

const WeatherCard: React.FC<{ city: string; onDelete: () => void }> = ({
  city,
  onDelete,
}) => {
  const [weather, setWeather] = useState<OpenWeatherData>(null)
  const [state, setState] = useState<WeatherCardState>('loading')

  useEffect(() => {
    getWeather(city)
      .then((data) => {
        setWeather(data)
        setState('success')
      })
      .catch((err) => {
        console.error(err)
        setState('error')
      })
  }, [city])
  if (state === 'loading' || state === 'error') {
    return (
      <WeatherContainer onDelete={onDelete}>
        <Typography variant='h5' component='div'>
          {city}
        </Typography>
        <Typography
          variant='body1'
          component='div'
          color={state === 'loading' ? 'blue' : 'red'}
        >
          {state === 'loading'
            ? 'Loading...'
            : 'Error: Could not load weather data'}
        </Typography>
      </WeatherContainer>
    )
  }

  return (
    <WeatherContainer onDelete={onDelete}>
      <Typography variant='h5' component='div'>
        {city}
      </Typography>
      <Typography variant='body1' component='div'>
        {Math.round(weather?.main.temp)}°F
      </Typography>
      <Typography variant='body1' component='div'>
        {weather?.weather[0].description.charAt(0).toUpperCase() +
          weather?.weather[0].description.slice(1)}
      </Typography>
    </WeatherContainer>
  )
}

export { WeatherCard }
