const rand = n => Math.floor(Math.random() * n)

export default rand

const randPick = (arr) => arr[rand(arr.length)]
const randMinMax = (min, max) => rand(max - min + 1) + min

export { randMinMax, randPick }

