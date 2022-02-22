import {
  TypedUseSelectorHook,
  useDispatch as uD,
  useSelector as uS
} from 'react-redux'
import type { State, Dispatch } from './store'

export const useDispatch = () => uD<Dispatch>()
export const useSelector: TypedUseSelectorHook<State> = uS
