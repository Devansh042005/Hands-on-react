import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordian from './components/Accordian'
import RandomColor from './components/random-color'

function App() {
  

  return (
    <div className='App'>
      <Accordian/>
      <RandomColor/>
    </div>
  )
}

export default App
