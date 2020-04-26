import React, { useState } from 'react'
import Plus from './Plus'
import SheetStyle from './SheetStyle'

const Sheet = ({ questions, answers, handlers, utils }) => {
  console.info('Answer', answers)
  const [activeIndex, setActiveIndex] = useState(0)
  const { onAnswer } = handlers
  const { touched, checked } = utils

  const onSelect = i => () => { setActiveIndex(i) } 
  const onQuestionAnswer = i => answer => { 
    onAnswer(i, answer)
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
        <div
          key={i}
          onClick={onSelect(i)}
        >
          <Plus
            active={i === activeIndex}
            first={q.first}
            second={q.second}
            answer={q.answer}
            onAnswer={onQuestionAnswer(i)}
            error={isQuestionError(i)}
          />
        </div>
      ))}
    </SheetStyle>
  )
}

export default Sheet
