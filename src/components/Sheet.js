import React, { useState } from 'react'
import Plus from './Plus'
import SheetStyle from './SheetStyle'

const Sheet = ({ questions }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const onSelect = i => () => { setActiveIndex(i) } 
  const onAnswer = i => () => { setActiveIndex(i+1) }

  return (
    <SheetStyle>
      {questions.map((q, i) => (
        <div
          key={i}
          onClick={onSelect(i)}
        >
          <Plus
            active={i === activeIndex}
            first={q.first}
            second={q.second}
            answer={q.answer}
            onAnswer={onAnswer(i)}
          />
        </div>
      ))}
    </SheetStyle>
  )
}

export default Sheet
