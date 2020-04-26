import React, { useState } from 'react'
import { Sheet, Score } from './components'
import { sheetCreator, arithmeticGen } from './utils'
import AppStyle from './AppStyle'

const gen = arithmeticGen({ max: 10, operator: '+' }).gen
const {
  questions, answers, handlers, utils 
} = sheetCreator(gen).createSheet(20)

const App = () => {
  const [stats, setStats] = useState(utils.stats())
  const { total, correct, answered } = stats
  return (
    <AppStyle>
      <h1>&nbsp;</h1>
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
    </AppStyle>
  )
}

export default App
