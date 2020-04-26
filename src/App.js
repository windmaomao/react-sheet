import React from 'react'
import { Sheet } from './components'
import { sheetCreator } from './utils'

const { questions, answers, handlers } = sheetCreator().createSheet()
const App = () => {
  return (
    <div className="App">
      <h1>Plus Sheet</h1>
      <Sheet 
        questions={questions}
        answers={answers}
        handlers={handlers}
      /> 
    </div>
  )
}

export default App
