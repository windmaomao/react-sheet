import React from 'react'
import { sheetCreator, arithmeticGen } from '../utils'
import SelectorStyle from './SelectorStyle'

const genPlus = arithmeticGen({ max: 12, operator: '+' }).gen
const genMinus = arithmeticGen({ max: 12, operator: '-' }).gen
const genMult = arithmeticGen({ max: 10, operator: '*' }).gen

const Selector = ({ onSelect }) => {
  const onClick = g => () => {
    const s = sheetCreator(g).createSheet(100)
    onSelect(s)
  }

  return (
    <SelectorStyle>
      <button onClick={onClick(genPlus)}>
        +
      </button>
      <button onClick={onClick(genMinus)}>
        -
      </button>
      <button onClick={onClick(genMult)}>
        *
      </button>
    </SelectorStyle>
  )
}

export default Selector
