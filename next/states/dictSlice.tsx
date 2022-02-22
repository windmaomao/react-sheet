import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import dictGen, {Dict} from 'services/dictGen'
import State, {initialState} from './dictState'

const genWords = (day: string, count: number): Dict[] => {
  const gen = dictGen(day)
  return new Array(count).fill(0).map(gen)
}

const setDay = (s: State, action: PayloadAction<string>) => {
  s.day = action.payload
  s.words = genWords(s.day, s.count)
}

const slice = createSlice({
  name: 'dict',
  initialState,
  reducers: { setDay }
})

export default slice
