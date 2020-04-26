import React, { useRef, useEffect } from 'react'
import PlusStyle from './PlusStyle'

/**
 * Plus Component
 * @param {string} value value answer
 * @param {func} onChange event upon value change
 * @param {func} onAnswer event upon value submit
 * @param {string} first fist value
 * @param {string} second second value
 * @param {bool} active active
 * @param {bool} error error
 */
const Plus = ({ 
  value, onChange, onAnswer,
  first, second, answer,
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
      console.log('ddd')
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
          onChange={onChange}
          placeholder={answer}
          onKeyDown={onKeyDown}
        />
      </div>
    </PlusStyle>
  )
}

export default Plus
