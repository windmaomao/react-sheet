import React from 'react'
import { sheetCreator, arithmeticGen } from '../utils'
import SelectorStyle from './SelectorStyle'

const genPlus12 = arithmeticGen({ max: 12, operator: '+' }).gen
const genMinus12 = arithmeticGen({ max: 12, operator: '-' }).gen

const Selector = ({ onSelect }) => {
  const onClick = g => () => {
    const s = sheetCreator(g).createSheet(100)
    onSelect(s)
  }

  return (
    <SelectorStyle>
      <button onClick={onClick(genPlus12)}>
        +
      </button>
      <button onClick={onClick(genMinus12)}>
        -
      </button>
    </SelectorStyle>
  )
}

export default Selector
