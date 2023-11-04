import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './popup.css'
import { WeatherCard } from '../components/WeatherCard'
import 'fontsource-roboto'
import { Box, IconButton, InputBase, Paper, TextField } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

const App: React.FC<{}> = () => {
  const [cities, setCities] = useState<string[]>([
    'London',
    'New York',
    'Tokyo',
    'error',
  ])

  const [cityInput, setCityInput] = useState<string>('')

  const handleCityButtonClick = () => {
    if (cityInput === '') return
    setCities([...cities, cityInput])
    setCityInput('')
  }
  return (
    <Box p={'4px'}>
      <Paper
        component='form'
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder='New city'
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
        />
        <IconButton
          type='button'
          sx={{ p: '10px' }}
          aria-label='add'
          onClick={handleCityButtonClick}
        >
          <AddIcon />
        </IconButton>
      </Paper>

      {cities.map((city, index) => (
        <WeatherCard city={city} key={index} />
      ))}
    </Box>
  )
}

const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.render(<App />, root)
