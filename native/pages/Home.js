import React from 'react'
import { FlatList } from 'react-native'
import Question from './Question'

const questions = [
  { i: 1, first: 2, second: 8, op: '+', answered: true, correct: true },
  { i: 2, first: 6, second: 18, op: '+', answered: false, correct: false },
  { i: 3, first: 8, second: 2, op: '+', answered: false, correct: false },
  { i: 4, first: 9, second: 3, op: '+', answered: false, correct: false },
]

export default function Home() {
  return (
    <FlatList
      data={questions}
      renderItem={({ item }) => <Question {...item} />}
      keyExtractor={(item, index) => index.toString()}
    />
  )
}
