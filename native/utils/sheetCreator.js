let sheetId = 0
const sheetCreator = (gen) => {
  return {
    createSheet: n => {
      const answers = new Array(n).fill(null)
      const questions = answers.map((_, i) => gen(i+1))
      const onAnswer = (i, value) => {
        answers[i] = value
      }
      const handlers = { onAnswer }

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

      sheetId++
      console.log(questions)
      return { sheetId, questions, answers, handlers, utils }
    }
  }
}

export default sheetCreator
