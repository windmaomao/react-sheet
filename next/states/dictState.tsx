import {Dict} from 'services/dictGen'

interface State {
  count: number,
  days: string[],
  day: string,
  words: Dict[],
}

export const initialState: State = {
  count: 50,
  days: ['custom', 'day1', 'day2'],
  day: 'day1',
  words: [] 
}

export default State