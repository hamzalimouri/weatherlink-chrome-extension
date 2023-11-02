import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import './popup.css'
import { getWeather } from '../utils'

const App: React.FC<{}> = () => {
	  useEffect(() => {
	getWeather("London").then((data) => {
		console.log(data)
	}).catch((err) => {
		console.log(err)
	})
  }, [])

  return (
    <div>
      <img src='icon.png' />
    </div>
  )
}

const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.render(<App />, root)
