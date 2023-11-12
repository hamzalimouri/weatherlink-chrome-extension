import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import './popup.css'
import { WeatherCard } from '../components/WeatherCard'
import 'fontsource-roboto'
import { Box, IconButton, InputBase, Paper, TextField } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

import { getStoredCities, setStoredCities } from '../utils'

const App: React.FC<{}> = () => {
  const [cities, setCities] = useState<string[]>([])

  const [cityInput, setCityInput] = useState<string>('')

  useEffect(() => {
    getStoredCities().then((cities) => setCities(cities))
  }, [])

  const handleAddCityButtonClick = () => {
    if (cityInput === '') return
    const updateStoredCities = [...cities, cityInput]
    setStoredCities(updateStoredCities).then(() => {
      setCities(updateStoredCities), setCityInput('')
    })
  }

  const handleCityDeleteButtonClick = (index: number) => {
    const updateStoredCities = cities.filter((_, i) => i !== index)
    setStoredCities(updateStoredCities).then(() => {
      setCities(updateStoredCities)
    })
  }

  return (
    <Box p={'4px'}>
      <Paper
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder='New city'
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
          onKeyPress={(e) => {
            console.log(e.key, cityInput)
            if (e.key === 'Enter') {
              handleAddCityButtonClick()
            }
          }}
        />
        <IconButton
          type='button'
          sx={{ p: '10px' }}
          aria-label='add'
          onClick={handleAddCityButtonClick}
        >
          <AddIcon />
        </IconButton>
      </Paper>

      {cities.map((city, index) => (
        <WeatherCard
          city={city}
          key={index}
          onDelete={() => handleCityDeleteButtonClick(index)}
        />
      ))}
    </Box>
  )
}

const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.render(<App />, root)
