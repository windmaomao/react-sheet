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
  const onPrevNext = delta => {
    let i = activeIndex + delta
    if (i < 0) i = 0
    setActiveIndex(i)
  }

  return (
    <SheetStyle>
      {questions.map((q, i) => (
        <Plus
          i={i}
          key={i}
          onFocus={onSelect(i)}
          active={i === activeIndex}
          first={q.first}
          second={q.second}
          operator={q.operator}
          answer={q.answer}
          onAnswer={onQuestionAnswer(i)}
          error={isQuestionError(i)}
          onPrevNext={onPrevNext}
        />
      ))}
    </SheetStyle>
  )
}

export default Sheet
