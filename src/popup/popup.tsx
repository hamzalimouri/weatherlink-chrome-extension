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

  const handleAddCityButtonClick = () => {
    if (cityInput === '') return
    setCities([...cities, cityInput])
    setCityInput('')
  }

  const handleCityDeleteButtonClick = (index: number) => {
    setCities(cities.filter((_, i) => i !== index))
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
