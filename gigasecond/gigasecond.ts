class Gigasecond {
  private initialDate: Date

    constructor(date: Date) {
      this.initialDate = date
    }

    date = (): Date => {
      let newDate = new Date(this.initialDate.getTime())
      newDate.setSeconds(this.initialDate.getSeconds() + 1000000000)
      return newDate
    }
}

export default Gigasecond