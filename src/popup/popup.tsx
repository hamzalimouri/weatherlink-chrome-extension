import React from 'react'
import ReactDOM from 'react-dom'
import './popup.css'
import { WeatherCard } from '../components/WeatherCard'
import 'fontsource-roboto'

const App: React.FC<{}> = () => {
  return (
    <div>
      <WeatherCard city="Lodon" />
	  <WeatherCard city="New York" />
	  <WeatherCard city="Tokyo" />
    </div>
  )
}

const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.render(<App />, root)
