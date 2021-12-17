import React from 'react'
import { sheetCreator, arithmeticGen as g } from '../utils'
import SelectorStyle from './SelectorStyle'

const gens = [
  { label: '1+',  gen: g({ max: 12, operator: '+' }) },
  { label: '1-',  gen: g({ max: 12, operator: '-' }) },
  { label: '2+',  gen: g({ max: 20, operator: '+' }) },
  { label: '2-',  gen: g({ max: 20, operator: '-' }) },
  { label: '1x',  gen: g({ max: 5,  operator: 'x' }) },
  { label: '8+-', gen: g({ max: 80, operator: '+-' }) },
  { label: '2x',  gen: g({ max: 10, operator: 'x' }) },
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
