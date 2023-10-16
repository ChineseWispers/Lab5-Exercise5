const Calculator = require("../library/Calculator");
let myCalc = new Calculator();

const addNumbers = (req, res) => {
  let sum = +req.query.num1 + +req.query.num2
  console.log(sum)
  res.status(200)
  res.json({result:sum})
}

const subtractNumbers = (req, res) => {
  let subtraction = +req.query.num1 - +req.query.num2
  console.log(subtraction)
  res.status(200)
  res.json({result:subtraction})
}

const multiplyNumbers = (req, res) => {
  let multiplication = +req.query.num1 * +req.query.num2
  console.log(multiplication)
  res.status(200)
  res.json({result:multiplication})
}

const divideNumbers = (req, res) => {
  let division = +req.query.num1 / +req.query.num2
  console.log(division)
  res.status(200)
  res.json({result:division})
}

exports.addNumbers = addNumbers;
exports.subtractNumbers = subtractNumbers;
exports.multiplyNumbers = multiplyNumbers;
exports.divideNumbers = divideNumbers;
