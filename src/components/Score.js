import React from 'react'
import ScoreStyle from './ScoreStyle'

const Score = ({ total, correct, answered }) => {
  return (
    <ScoreStyle>
      <div>
        <div>Total: &nbsp; {total}</div>
        <div>Correct: &nbsp; {correct}</div>
        <div>Error: &nbsp; 
          <span className="error">{answered - correct}</span>
        </div>
      </div>
    </ScoreStyle>
  )
}

export default Score
