import questionGen from './questionGen'

describe('Question gen', () => {
  it('should gen question id', () => {
    const gen = questionGen()
    const q = gen(1)
    expect(q.id).toEqual(1)
  })
  it('should gen question operator', () => {
    const gen = questionGen('+')
    const q = gen(1)
    expect(q.op).toEqual('+')
  })
  it('should gen question first number', () => {
    const gen = questionGen('+')
    const q = gen(1)
    expect(typeof q.first).toBe('number')
  })
  it('should gen question second number', () => {
    const gen = questionGen('+')
    const q = gen(1)
    expect(typeof q.second).toBe('number')
  })
  it('should gen question answer', () => {
    const gen = questionGen('+')
    const q = gen(1)
    expect(typeof q.answer).toBe('number')
  })
  it('should gen question number greater than min', () => {
    const gen = questionGen('+', 1)
    const q = gen(1)
    expect(q.first).toBeGreaterThanOrEqual(1)
  })
  it('should gen question number less than min', () => {
    const gen = questionGen('+', 10)
    const q = gen(1)
    expect(q.first).toBeLessThanOrEqual(10)
  })
  it('should gen + answer', () => {
    const gen = questionGen('+')
    const q = gen(1)
    expect(q.first + q.second).toBe(q.answer)
  })
  it('should gen - answer', () => {
    const gen = questionGen('-')
    const q = gen(1)
    expect(q.first - q.second).toBe(q.answer)
  })
  it('should gen * answer', () => {
    const gen = questionGen('x')
    const q = gen(1)
    expect(q.first * q.second).toBe(q.answer)
  })

})
