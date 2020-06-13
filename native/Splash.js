import React from 'react'
import AppStyle, { TextStyle, BackgroundStyle } from './AppStyle'
import mathImg from './assets/math.jpg'

export default function App() {
  return (
    <AppStyle>
      <BackgroundStyle source={mathImg} />
      <TextStyle>Welcome to QMath</TextStyle>
    </AppStyle>
  )
}
