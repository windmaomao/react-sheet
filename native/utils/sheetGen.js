let sheetId = 0
const sheetGen = (gen) => {
  return {
    createSheet: n => {
      const inputs = new Array(n).fill(null)
      const questions = inputs.map((_, i) => gen(i + 1))
      const stat = { total: n, touched: 0, correct: 0 }
      const onInput = (i, value) => {
        inputs[i] = value
        updateStat()
      }
      const isAnswered = i => inputs[i] !== null
      const isCorrect = i => questions[i].answer === inputs[i]

      function updateStat() {
        const res = questions.reduce((acc, _, i) => {
          if (isAnswered(i)) {
            acc.touched++
            if (isCorrect(i)) {
              acc.correct++
            }
          }
          return acc
        }, { correct: 0, touched: 0 })
        stat.correct = res.correct
        stat.touched = res.touched
      }

      sheetId++
      return { 
        sheetId, 
        questions,
        inputs,
        stat, 
        onInput, 
        isAnswered, 
        isCorrect
      }
    }
  }
}

export default sheetGen
