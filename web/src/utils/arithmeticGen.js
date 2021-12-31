const { floor, random } = Math

const randomInt = (h, l = 0) => 
  floor(random() * (h-l+1)) + l

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

const arithmeticGen = ({ min, max, operator }) => {
  console.log(min)
  return () => {
    let a = randomInt(max, min)
    let b = randomInt(max, min)
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
