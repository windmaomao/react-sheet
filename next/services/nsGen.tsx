import {randPick, randMinMax} from './random'

const Consonants = 'bcdfghjklmnpqrstvwxyz'
const Vowels = 'aeiou'

const randCons = () => randPick(Consonants)

const randVowel = () => randPick(Vowels) 

const randWord = (min, max) => {
  let word = ""
  let highlights = []

  const len = randMinMax(min, max)
  let v = false
  for (let i = 0; i < len; i++) {
    word += !v ? randCons() : randVowel()
    v && highlights.push(i)
    v = !v
  }

  return { word, highlights }
}

export default function nsGen() {
  return () => {
    return randWord(3, 3)
  }
}
