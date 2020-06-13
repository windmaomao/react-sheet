import React from 'react'
import styled from 'styled-components'
import useTimer from './useTimer'

const TimeStyle = styled.div`
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  opacity: 0.4;
`

const Time = () => {
  const timer = useTimer()
  return <TimeStyle>{timer}</TimeStyle>
}

export default Time
