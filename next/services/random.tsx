const rand = (n: number) => Math.floor(Math.random() * n)
const randSign = () => Math.random() - 0.5
const randMinMax = (min: number, max: number) =>
  rand(max - min + 1) + min

function randPick<T>(arr: T[]): T {
  return arr[rand(arr.length)]
}

function randShuffle<T>(arr: T[]): T[] {
  return [...arr].sort(randSign)
}

export { 
  rand, randSign, randMinMax,
  randPick, randShuffle 
}

