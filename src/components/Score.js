import React from 'react'
import ScoreStyle from './ScoreStyle'

const Score = ({ total, correct, answered }) => {
  return (
    <ScoreStyle>
      <div>
        <div>Total: {total}</div>
        <div>Correct: {correct}</div>
        <div>Answered: {answered}</div>
      </div>
    </ScoreStyle>
  )
}

export default Score
