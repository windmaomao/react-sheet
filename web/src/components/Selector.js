import React from 'react'
import { sheetCreator, arithmeticGen } from '../utils'
import SelectorStyle from './SelectorStyle'

const gens = [
  { label: '+', gen: arithmeticGen({ max: 12, operator: '+' }) },
  { label: '-', gen: arithmeticGen({ max: 12, operator: '-' }) },
  { label: '+', gen: arithmeticGen({ max: 20, operator: '+' }) },
  { label: '-', gen: arithmeticGen({ max: 20, operator: '-' }) },
  { label: '2-', gen: arithmeticGen({ max: 20, operator: '-' }) }
  // { label: '*', gen: arithmeticGen({ max: 12, operator: 'x' }) }
]

const Selector = ({ onSelect }) => {
  const onClick = g => () => {
    const s = sheetCreator(g).createSheet(100)
    onSelect(s)
  }

  return (
    <SelectorStyle>
      {gens.map(g => (
        <button 
          onClick={onClick(g.gen)}
        >
          {g.label}
        </button>
      ))}
    </SelectorStyle>
  )
}

export default Selector
