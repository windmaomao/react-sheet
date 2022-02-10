const random = (h) => 
  Math.floor(Math.random() * h)

const Consonants = 'bcdfghjklmnpqrstvwxyz'
const Vowels = 'aeiou'

const randCons = () => {
  const i = random(Consonants.length)
  return Consonants[i]
}

const randVowel = () => {
  const i = random(Vowels.length)
  return Vowels[i]
}

const randWord = () => {
  let word = randCons() + randVowel() + randCons()
  if (random(2)) word += 'e'

  return {
    word,
    highlights: [1]
  }
}

export default function nsGen() {
  return () => {
    return randWord()
  }
}
