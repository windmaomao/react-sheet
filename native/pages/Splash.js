import React from 'react'
import { Button } from 'react-native'
import SplashStyle, { TextStyle, BackgroundStyle } from './SplashStyle'
import mathImg from '../assets/math.jpg'

const Splash = ({ navigation }) => {
  const onPress = () => {
    navigation.navigate('Home')
  }

  return (
    <SplashStyle>
      <BackgroundStyle source={mathImg} />
      <TextStyle>Welcome to QMath</TextStyle>
      <Button onPress={onPress} title="Start" />
    </SplashStyle>
  )
}

export default Splash
