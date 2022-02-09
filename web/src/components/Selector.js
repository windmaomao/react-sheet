import React from 'react'
import { sheetCreator, arithmeticGen as g } from '../utils'
import SelectorStyle from './SelectorStyle'

const gens = [
  // { label: '1+',  gen: g({ max: 12, operator: '+' }) },
  // { label: '1-',  gen: g({ max: 12, operator: '-' }) },
  { label: '1x',  gen: g({ max: 6, operator: 'x', min: 2 }) },
  { label: '2+',  gen: g({ max: 20, operator: '+', min: 5 }) },
  { label: '2-',  gen: g({ max: 20, operator: '-', min: 5 }) },
  { label: '2x',  gen: g({ max: 10, operator: 'x', min: 2 }) },
  { label: '3+-', gen: g({ max: 30, operator: '+-', min: 5 }) },
  { label: '4+-', gen: g({ max: 40, operator: '+-', min: 6 }) },
  { label: '8+-', gen: g({ max: 80, operator: '+-', min: 8 }) },
  { label: '9+-', gen: g({ max: 120, operator: '+-', min: 14 }) },
  { label: '10+-', gen: g({ max: 180, operator: '+-', min: 16 }) },
]

const Selector = ({ onSelect }) => {
  const onClick = g => () => {
    const s = sheetCreator(g).createSheet(100)
    onSelect(s)
  }

  return (
    <SelectorStyle>
      {gens.map(g => (
        <button key={g.label}
          onClick={onClick(g.gen)}
        >
          {g.label}
        </button>
      ))}
    </SelectorStyle>
  )
}

export default Selector
