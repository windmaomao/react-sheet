import {createState, useState} from '@hookstate/core'
import dictGen from 'services/dictGen'

const initDictSettings = createState({
  days: ['custom', 'day1', 'day2'],
  day: 'day1',
  gen: dictGen('day1') 
})

export const useDictSettings = () => {
  return useState(initDictSettings)
}