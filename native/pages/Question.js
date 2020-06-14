import React, { useState } from 'react'
import { Text, TextInput } from 'react-native'
import QuestionStyle from './QuestionStyle'

const Question = ({ 
  id, first, second, op
}) => {
  const [entered, setEntered] = useState('')
  return (
    <QuestionStyle>
      <Text>{id})</Text>
      <Text>{first} {op} {second}</Text>
      <Text>=</Text>
      <TextInput
        onChangeText={setEntered}
        defaultValue={entered}
        keyboardType="decimal-pad"
      />
    </QuestionStyle>
  )
}

export default Question