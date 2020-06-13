import React from 'react'
import { View, Text } from 'react-native'

const Question = ({ i, first, second, op }) => {
  return (
    <View>
      <Text>{i})</Text>
      <Text>{first}</Text>
      <Text>{op}</Text>
      <Text>{second}</Text>
    </View>
  )
}

export default Question