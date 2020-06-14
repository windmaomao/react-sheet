import 'react-native-gesture-handler'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Splash from './pages/Splash'
import Home from './pages/Home'
import questionGen from './utils/questionGen'
import sheetGen from './utils/sheetGen'

const gen = questionGen()
const defaultSheet = sheetGen(gen).createSheet(100)

const Stack = createStackNavigator()

export default () => {
  const [sheet, setSheet] = useState(defaultSheet)
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Home">
          {props => <Home {...props} sheet={sheet} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
