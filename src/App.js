import React, { useState } from 'react'
import { Sheet, Score } from './components'
import { sheetCreator } from './utils'

const {
  questions, answers, handlers, utils 
} = sheetCreator().createSheet()
const App = () => {
  const [stats, setStats] = useState(utils.stats())
  const { total, correct, answered } = stats
  return (
    <div className="App">
      <h1>Plus Sheet</h1>
      <Score
        total={total}
        correct={correct}
        answered={answered}
      />
      <Sheet 
        questions={questions}
        answers={answers}
        handlers={handlers}
        utils={utils}
        onStats={setStats}
      /> 
    </div>
  )
}

export default App
