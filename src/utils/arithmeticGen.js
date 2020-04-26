const randomInt = x => Math.floor(Math.random() * x)

const arithmeticGen = ({ max, operator }) => {
  const gen = () => {
    const first = randomInt(max)
    const second = randomInt(max)
    let answer
    switch (operator) {
      case '-':
        answer = first - second
        break
      case 'x':
        answer = first * second
        break
      default:
        answer = first + second
        break
    }
    return { first, second, answer, operator }
  }
  return { gen }
}

export default arithmeticGen
