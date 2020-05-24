import React, { useState } from 'react'
import { Sheet, Score, Time } from './components'
import { sheetCreator, arithmeticGen } from './utils'
import AppStyle from './AppStyle'

const gen1 = arithmeticGen({ max: 12, operator: '+' }).gen
const genPlus12 = arithmeticGen({ max: 12, operator: '+' }).gen
const genMinus8 = arithmeticGen({ max: 8, operator: '-' }).gen

const App = () => {
  const [sheet, setSheet] = useState(sheetCreator(gen1).createSheet(100))
  
  const onGenClick = g => () => { 
    const s = sheetCreator(g).createSheet(100)
    setSheet(s)
    setStats(s.utils.stats())
  }

  const { sheetId, questions, answers, handlers, utils } = sheet
  const [stats, setStats] = useState(utils.stats())
  const { total, correct, answered } = stats

  return (
    <AppStyle>
      <h1>&nbsp;</h1>
      <button onClick={onGenClick(genPlus12)}>+12</button>
      <button onClick={onGenClick(genMinus8)}>-8</button>
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
