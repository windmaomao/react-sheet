import React from 'react'
import { Button, Image } from 'react-native'
import SplashStyle from './SplashStyle'
import mathImg from '../assets/splash.jpg'

const Splash = ({ navigation }) => {
  const onPress = () => {
    navigation.navigate('Home')
  }

  return (
    <SplashStyle>
      <Image
        source={mathImg} 
      />
      <Button 
        onPress={onPress} 
        title="Welcome to QMath" 
      />
    </SplashStyle>
  )
}

export default Splash
