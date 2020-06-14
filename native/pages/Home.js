import React from 'react'
import { FlatList } from 'react-native'
import Question from './Question'

const Home = ({ sheet }) => {
  return (
    <FlatList
      data={sheet.questions}
      renderItem={({ item }) => <Question {...item} />}
      keyExtractor={(item, index) => index.toString()}
    />
  )
}

export default Home
