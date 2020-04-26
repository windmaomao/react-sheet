const n = 20

const randomInt = x => Math.floor(Math.random() * x)

const sheetCreator = () => {
  return {
    createSheet: () => {
      return new Array(n).fill(0).map(i => ({
        first: randomInt(10), 
        second: randomInt(10), 
      }))
    }
  }
}

export default sheetCreator
