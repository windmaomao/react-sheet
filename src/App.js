import React, { useState } from 'react'
import { Sheet, Score, Time } from './components'
import { sheetCreator, arithmeticGen } from './utils'
import AppStyle from './AppStyle'

const gen = arithmeticGen({ max: 12, operator: '+' }).gen

const App = () => {
  const [sheet, setSheet] = useState(sheetCreator(gen).createSheet(100))
  const { questions, answers, handlers, utils } = sheet
  
  const [stats, setStats] = useState(utils.stats())
  const { total, correct, answered } = stats

  const onGen = () => {
    setSheet(sheetCreator(gen).createSheet(100))
  }

  return (
    <AppStyle>
      <h1>&nbsp;</h1>
      <button
        onClick={onGen}
      >+</button>
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
      <Time />
    </AppStyle>
  )
}

export default App
