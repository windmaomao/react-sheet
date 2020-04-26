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
        },
      }
      const utils = {
        touched: i => answers[i] !== null,
        checked: i => {
          const correct = questions[i].answer
          return `${correct}` === answers[i]
        },
      }

      return { questions, answers, handlers, utils }
    }
  }
}

export default sheetCreator
