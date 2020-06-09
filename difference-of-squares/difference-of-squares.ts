
class Squares {

  private n: number

  constructor(n: number) {
    this.n = n
  }

  get squareOfSum(): number {
    const range = rangeGenerator(this.n)
    let sum = 0
    for (let i = 0; i <= this.n; ++i) {
      sum += i
    }
    return Math.pow(sum, 2)
  }

  get sumOfSquares(): number {
    const range = rangeGenerator(this.n)
    let sum = 0
    for (let i = 0; i <= this.n; ++i) {
      sum += Math.pow(i, 2)
    }
    return sum
  }

  get difference(): number {
    return this.squareOfSum - this.sumOfSquares
  }
}

function* rangeGenerator(n: number) {
  for (let i = 1; i <= n; ++i) yield i
}

export default Squares