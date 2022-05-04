import React, { useRef, useEffect } from 'react'
import PlusStyle from './PlusStyle'

const disabledKeys = [
  32, // spacebar
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
  i, onAnswer, first, second, operator,
  active, error, onFocus, onPrevNext
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
    if (e.keyCode === 13) {
      onAnswer(e.target.value)
      return
    }
    if (e.keyCode >= 48 && e.keyCode <= 57) return
    if (e.keyCode === 37) {
      onPrevNext(-1)
      return
    }
    if (e.keyCode === 39) {
      onPrevNext(1)
      return
    }

    if (disabledKeys.indexOf(e.keyCode) >= 0) {
      e.preventDefault()
    }
  }

  return (
    <div>
      <div className="index">{i + 1})</div>
      <PlusStyle
        active={active}
        error={error}
      >
        <div>{first}</div>
        <div>{operator} &nbsp;{second}</div>
        <div>
          <input
            ref={inputRef}
            onKeyDown={onKeyDown}
            onFocus={onFocus}
          />
        </div>
      </PlusStyle>
    </div>
  )
}

export default Plus
