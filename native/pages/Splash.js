import React from 'react'
import SplashStyle, { TextStyle, BackgroundStyle } from './SplashStyle'
import mathImg from '../assets/math.jpg'

export default function App() {
  return (
    <SplashStyle>
      <BackgroundStyle source={mathImg} />
      <TextStyle>Welcome to QMath</TextStyle>
    </SplashStyle>
  )
}
