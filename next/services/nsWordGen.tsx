import {randPick, randMinMax} from './random'

const Cons = [
  'b', 'c', 'd', 'f', 'g',
  'j', 'k', 'l', 'm', 'n',
  'p', 'q', 's', 't', 'v',
  'x', 'z', 'h', 'r', 'w', 'y',
  'bl', 'cl', 'fl', 'gl',
  'pl', 'sl', 'br', 'cr',
  'dr', 'fr', 'gr', 'pr',
  'tr', 'sc', 'sk', 'sm',
  'sn', 'sp', 'st', 'sw',
  'ch', 'sh', 'ph', 'th',
  'wh', 'wr', 'kn'
]
const Vows = [
  'a', 'e', 'i', 'o', 'u',
  'aw', 'au', 'ow', 'ew',
  'ar', 'or', 'er', 'ir',
  'ur', 'air', 'ear', 'ai',
  'ay', 'ee', 'ea', 'ie',
  'oa', 'ue',
  'ate', 'ake', 'ape',
  'ene', 'ete',
  'ide', 'ime', 'ike', 'ite', 'ice',
  'ose', 'ope', 'one', 'oke',
  'ute', 'ume', 'ube',
  'oy', 'oi', 'oo', 'y',
  'all',

]
const Cons2 = [
  'ck', 'ng', 'ch', 'sh',
  'ph', 'th', 'ight',
  's', 'dy', 've', 'ce',
  'tion', 'ture', 'ful',
  'ble', 'pple', 'ttle', 'zzle',
  'ving', 'cing', 'ding', 'ting', 'king',
  'tted', 'ned', 'pped', 'ted', 'ved', 'ked',
]
const ConsComb = [
  'ce', 'ci', 'cy',
  'ge', 'gi', 'gy',
]

const randCon = () => randPick(Cons)
const randVow = () => randPick(Vows) 

const randParts = () => {
  const rounds = 1
  let parts = []
  for (let i = 0; i < rounds; i++) {
    parts.push(randPick(Cons))
    parts.push(randPick(Vows))
  }
  parts.push(randPick(Cons2))
  return parts
}

export default function wordGen() {
  return randParts
}
