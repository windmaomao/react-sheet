import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import dictGen from 'services/dictGen'

interface State {
  count: number,
  days: string[],
  day: string,
  gen: Function
}

const initialState: State = {
  count: 0,
  days: ['custom', 'day1', 'day2'],
  day: 'day1',
  gen: dictGen('day1')
}

export const slice = createSlice({
  name: 'dict',
  initialState,
  reducers: {
    increment: (s: State) => { s.count += 1 },
    changeDay: (s: State, action: PayloadAction<string>) => {
      s.day = action.payload
      s.gen = dictGen(s.day)
    }
  }
})

export const {increment, changeDay} = slice.actions
export default slice.reducer
