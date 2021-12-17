import React, { useState } from 'react'
import { Selector, Sheet, Score, Time } from './components'
import { sheetCreator, arithmeticGen } from './utils'
import AppStyle from './AppStyle'

const gen1 = arithmeticGen({ max: 10, operator: '+' })

const App = () => {
  const [sheet, setSheet] = useState(sheetCreator(gen1).createSheet(100))
  
  const onSelect = s => {
    setSheet(s)
    setStats(s.utils.stats())
  }

  const { sheetId, questions, answers, handlers, utils } = sheet
  const [stats, setStats] = useState(utils.stats())
  const { total, correct, answered } = stats

  return (
    <AppStyle>
      <h1>&nbsp;</h1>
      <Selector
        onSelect={onSelect} 
      />
      <Score
        total={total}
        correct={correct}
        answered={answered}
      />
      <Sheet 
        key={sheetId}
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
