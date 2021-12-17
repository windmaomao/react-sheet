const randomInt = x => Math.floor(Math.random() * x)

const plus = (a, b) => ({ 
  first: a, second: b, answer: a + b, operator: '+'
})
const minus = (a, b) => {
  if (a < b) {
    const tmp = a
    a = b
    b = tmp
  }
  return { first: a, second: b, answer: a - b, operator: '-' }
}
const multiply = (a, b) => ({
  first: a, second: b, answer: a * b, operator: 'x'
})

const arithmeticGen = ({ max, operator }) => {
  return () => {
    let a = randomInt(max)
    let b = randomInt(max)
    let res
    switch (operator) {
      case '+-':
        if (randomInt(2)) {
          res = plus(a, b)
        } else {
          res = minus(a, b)
        }         
        break
      case 'x':
        res = multiply(a, b)
        break
      case '-':
        res = minus(a, b)
        break
      case '+':
      default:
        res = plus(a, b)
        break
    }

    return res
  }
}

export default arithmeticGen
