import React from 'react'
import PlusStyle from './PlusStyle'

/**
 * Plus Component
 * @param {string} value value answer
 * @param {func} onChange event upon value changed
 * @param {string} first fist value
 * @param {string} second second value
 */
const Plus = ({ 
  value, onChange,
  first, second, 
}) => {
  return (
    <PlusStyle>
      <div>{first}</div>
      <div>{second}</div>
      <div>
        <input
          tab="1"
          autoFocus
          onChange={onChange}
        />
      </div>
    </PlusStyle>
  )
}

export default Plus
