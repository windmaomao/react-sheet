import React, { useState } from 'react'
import Plus from './Plus'
import SheetStyle from './SheetStyle'

const Sheet = ({ 
  questions, handlers, utils,
  onStats,
}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const { onAnswer } = handlers
  const { touched, checked } = utils

  const onSelect = i => () => { setActiveIndex(i) } 
  const onQuestionAnswer = i => answer => { 
    onAnswer(i, answer)
    onStats(utils.stats())
    setActiveIndex(i+1)
  }
  const isQuestionError = i => {
    if (touched(i)) {
      return !checked(i)
    }
    return false
  }

  return (
    <SheetStyle>
      {questions.map((q, i) => (
        <Plus
          key={i}
          onFocus={onSelect(i)}
          active={i === activeIndex}
          first={q.first}
          second={q.second}
          operator={q.operator}
          answer={q.answer}
          onAnswer={onQuestionAnswer(i)}
          error={isQuestionError(i)}
        />
      ))}
    </SheetStyle>
  )
}

export default Sheet
