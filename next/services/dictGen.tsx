import rand from './random'

const Dicts = [
  ['coup'],
  ['forevermore'],
  ['perilous'],
  ['surfeit'],
  ['epitomize'],
  ['leeway'],
  ['opaque'],
  ['unmistakably'],
  ['prominent'],
  ['judicious'],
  ['pique'],
  ['judiciously'],
  ['pillory'],
  ['embrace'],
  ['fertile'],
  ['heuristic'],
  ['intractable'],
  ['invariant'],
  ['hindsight'],
  ['reap'], 
].map(([word]) => ({
  word
}))

export default function dictGen() {
  const n = Dicts.length
  let i = rand(n)
  return () => {
    i++
    if (i == Dicts.length) {
      i = 0
    }
    return Dicts[i]
  }
}
