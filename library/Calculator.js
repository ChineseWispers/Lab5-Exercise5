class Calculator {
  constructor() {
    this.id = Date.now()
  }

  #log = (value) => {
    console.log(`[Calculator :${this.id}]:${value}`)
  }

}

module.exports = Calculator