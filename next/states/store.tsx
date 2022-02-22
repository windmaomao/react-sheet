import {configureStore} from '@reduxjs/toolkit'
import dict from './dict'

const store = configureStore({
  reducer: {
    dict: dict
  },
  // middleware: (getDefaultMiddleware) => {
  //   return getDefaultMiddleware({
  //     serializableCheck: false,
  //   })
  // }
})

export type State = ReturnType<typeof store.getState>
export type Dispatch = typeof store.dispatch
export default store
