import React, { useRef, useEffect } from 'react'
import PlusStyle from './PlusStyle'

const keysOnly = [
  8,  // backspace
  9,  // tab
  37, // left arrow
  39, // right arrow
]

/**
 * Plus Component
 * @param {func} onAnswer event upon value submit
 * @param {string} first fist value
 * @param {string} second second value
 * @param {string} operator operator
 * @param {bool} active active
 * @param {bool} error error
 */
const Plus = ({ 
  onAnswer, first, second, operator,
  active, error, onFocus
}) => {
  const inputRef = useRef(null)
  useEffect(() => { 
    if (active) {
      const current = inputRef.current
      if (current) {
        current.focus()
        current.scrollIntoView({ block: "center" })
      }
    }
  }, [active])

  const onKeyDown = e => {
    console.log(e.keyCode)
    if (e.keyCode === 13 || e.keyCode === 32) {
      onAnswer(e.target.value)
    }
    if (e.keyCode >= 48 && e.keyCode <= 57) return
    if (keysOnly.indexOf(e.keyCode) < 0) {
      e.preventDefault()
    }
  }

  return (
    <PlusStyle
      active={active}
      error={error}
    >
      <div>{first}</div>
      <div>{operator} &nbsp;&nbsp;{second}</div>
      <div>
        <input
          ref={inputRef}
          onKeyDown={onKeyDown}
          onFocus={onFocus}
        />
      </div>
    </PlusStyle>
  )
}

export default Plus
