import React, { useRef, useEffect } from 'react'
import PlusStyle from './PlusStyle'

/**
 * Plus Component
 * @param {func} onAnswer event upon value submit
 * @param {string} first fist value
 * @param {string} second second value
 * @param {bool} active active
 * @param {bool} error error
 */
const Plus = ({ 
  onAnswer, first, second, answer,
  active, error
}) => {
  const inputRef = useRef(null)
  useEffect(() => { 
    if (active) {
      inputRef.current.focus()
    }
  }, [active])

  const onKeyDown = e => {
    if (e.keyCode === 13) {
      onAnswer(e.target.value)
    }
  }

  return (
    <PlusStyle
      active={active}
      error={error}
    >
      <div>{first}</div>
      <div>+ &nbsp;&nbsp;{second}</div>
      <div>
        <input
          ref={inputRef}
          placeholder={answer}
          onKeyDown={onKeyDown}
        />
      </div>
    </PlusStyle>
  )
}

export default Plus
