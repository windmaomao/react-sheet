const randomInt = (min, max) => (
  Math.floor(Math.random() * (max - min)) + min
)

const questionGen = (op = '+', min = 0, max = 10) => {
  const gen = (id) => {
    const nums = [
      randomInt(min, max), 
      randomInt(min, max)
    ]
    let answer, tmp
    let first = nums[0]
    let second = nums[1]
    switch (op) {
      case '+':
        answer = first + second
        break
      case '-':
        if (first < second) {
          tmp = first; first = second; second = tmp
        }
        answer = first - second
        break
      case 'x':
        answer = first * second
        break
    }
    return { id, first, second, answer, op }
  }
  return gen
}

export default questionGen
