import React from 'react'
import { Sheet } from './components'
import { sheetCreator } from './utils'

const {
  questions, answers, handlers, utils 
} = sheetCreator().createSheet()
const App = () => {
  return (
    <div className="App">
      <h1>Plus Sheet</h1>
      <Sheet 
        questions={questions}
        answers={answers}
        handlers={handlers}
        utils={utils}
      /> 
    </div>
  )
}

export default App
