import {createState, useState} from '@hookstate/core'

const initDictSettings = createState({
  days: ['1', '2'],
  day: '1'
})

export const useDictSettings = () => {
  return useState(initDictSettings)
}