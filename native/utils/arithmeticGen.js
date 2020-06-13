const randomInt = x => Math.floor(Math.random() * x)

const arithmeticGen = (max, op) => {
  const gen = (id) => {
    const nums = [randomInt(max), randomInt(max)]
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
      default:
        answer = first + second
        break
    }
    return { id, first, second, answer, op}
  }
  return gen
}

export default arithmeticGen
