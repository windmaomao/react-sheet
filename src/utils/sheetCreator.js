const n = 20

const randomInt = x => Math.floor(Math.random() * x)

const sheetCreator = () => {
  return {
    createSheet: () => {
      const questions = new Array(n).fill(0).map(i => {
        const first = randomInt(10)
        const second = randomInt(10)
        const answer = first + second
        return { first, second, answer }
      })
      const answers = new Array(n).fill(null)
      const handlers = {
        onAnswer: (i, value) => {
          answers[i] = value
        }
      }

      return { questions, answers, handlers }
    }
  }
}

export default sheetCreator
