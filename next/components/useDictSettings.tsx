import {createState, useState} from '@hookstate/core'

const initDictSettings = createState({
  days: ['custom', 'day1', 'day2'],
  day: 'day1'
})

export const useDictSettings = () => {
  return useState(initDictSettings)
}