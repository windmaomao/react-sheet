import React from 'react'
import { Text } from 'react-native'
import QuestionStyle from './QuestionStyle'

const Question = ({ 
  i, first, second, op,
  answered, 
}) => {
  return (
    <QuestionStyle>
      <Text>{i})</Text>
      <Text>{first}</Text>
      <Text>{op}</Text>
      <Text>{second}</Text>
      <Text>=</Text>
      <Text>?</Text>
    </QuestionStyle>
  )
}

export default Question