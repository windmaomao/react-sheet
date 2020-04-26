import React from 'react'
import { Sheet } from './components'
import { sheetCreator } from './utils'

const sheet = sheetCreator().createSheet()
const App = () => {
  return (
    <div className="App">
      <h1>Plus Sheet</h1>
      <Sheet questions={sheet} /> 
    </div>
  )
}

export default App
