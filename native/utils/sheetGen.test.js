import sheetGen from './sheetGen'
const gen = (i) => ({ answer: i })

describe('Sheet gen', () => {
  let creator
  beforeEach(() => {
    creator = sheetGen(gen)
  })

  it('should gen sheet id', () => {
    const q = creator.createSheet(1)
    expect(typeof q.sheetId).toEqual('number')
  })
  it('should gen questions', () => {
    const q = creator.createSheet(10)
    expect(q.questions.length).toEqual(10)
  })
  it('should gen inputs', () => {
    const q = creator.createSheet(10)
    expect(q.inputs.length).toEqual(10)
  })
  it('should gen stat', () => {
    const q = creator.createSheet(10)
    expect(q.stat.total).toEqual(10)
  })
  it('should input answer', () => {
    const q = creator.createSheet(1)
    q.onInput(0, 5)
    expect(q.inputs[0]).toEqual(5)
  })
  it('should check if answered', () => {
    const q = creator.createSheet(1)
    q.onInput(0, 5)
    expect(q.isAnswered(0)).toEqual(true)
  })
  it('should check if correct', () => {
    const q = creator.createSheet(1)
    q.onInput(0, -1)
    expect(q.isCorrect(0)).toEqual(false)
  })
  it('should update touched stat', () => {
    const q = creator.createSheet(10)
    q.onInput(0, -1)
    expect(q.stat.touched).toEqual(1)
  })
  it('should update correct stat', () => {
    const q = creator.createSheet(10)
    q.onInput(0, -1)
    expect(q.stat.correct).toEqual(0)
  })
})