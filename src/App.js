import React from 'react'
import { Plus } from './components'

const App = () => {
  return (
    <div className="App">
      Hello Sheet
      <Plus 
        first="2"
        second="32"
        value=""
      />
    </div>
  )
}

export default App
