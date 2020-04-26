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

      const touched = i => answers[i] !== null
      const checked = i => {
        const correct = questions[i].answer
        return `${correct}` === answers[i]
      }
      const stats = () => {
        return questions.reduce((acc, _, i) => {
          if (touched(i)) {
            acc.answered++
            if (checked(i)) {
              acc.correct++
            }
          }
          return acc
        }, { correct: 0, answered: 0, total: n })
      }

      const utils = { touched, checked, stats }

      return { questions, answers, handlers, utils }
    }
  }
}

export default sheetCreator
