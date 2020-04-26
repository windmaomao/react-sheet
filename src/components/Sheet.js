import React, { useState } from 'react'
import Plus from './Plus'
import SheetStyle from './SheetStyle'

const Sheet = ({ questions, answers, handlers }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const { onAnswer } = handlers

  const onSelect = i => () => { setActiveIndex(i) } 
  const onQuestionAnswer = i => answer => { 
    onAnswer(i, answer)
    setActiveIndex(i+1) 
  }
  const isAnswerCorrect = i => {
    if (answers[i] === null) return true
    return answers[i] === questions[i].answer
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
            error={!isAnswerCorrect(i)}
          />
        </div>
      ))}
    </SheetStyle>
  )
}

export default Sheet
