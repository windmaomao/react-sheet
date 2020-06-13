import React from 'react'
import { FlatList } from 'react-native'
import Question from './Question'

const questions = [
  { i: 1, first: 2, second: 8, op: '+' },
  { i: 2, first: 6, second: 18, op: '+' },
  { i: 3, first: 8, second: 2, op: '+' },
  { i: 4, first: 9, second: 3, op: '+' },
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
