export const calcPoints = (balance, amount, op) => {

  amount = amount.toString().slice(0, -2)
  amount = Number(amount)
  
  if (op === 'sum') {
    balance += amount
    return balance
  } else if (op === 'sub') {
    balance -= amount
    return balance
  } else {
    return 'Invalid operation'
  }
}

/* TEST_CASE_1
console.log(calcPoints(0, 10000, 'sum'))
console.log(calcPoints(100, 5000, 'sub'))
console.log(calcPoints(100, 5000, 'des'))
*/