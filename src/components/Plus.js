import React from 'react'
import PlusStyle from './PlusStyle'

/**
 * Plus Component
 * @param {string} value value answer
 * @param {func} onChange event upon value changed
 * @param {string} first fist value
 * @param {string} second second value
 * @param {string} error error
 */
const Plus = ({ 
  value, onChange,
  first, second, 
  error
}) => {
  return (
    <PlusStyle error={error}>
      <div>{first}</div>
      <div>+ &nbsp;&nbsp;{second}</div>
      <div>
        <input
          autoFocus
          onChange={onChange}
        />
      </div>
    </PlusStyle>
  )
}

export default Plus
