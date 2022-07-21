import IOClient from '../services/index.js'
import { calcPoints } from '../functions/calc.js'

class BalanceController {

  getBalance = async (req, res) => {
    const { userId } = req.params
    const balance = await IOClient.getUserPointsBalance(userId)
    res.send({ balance })
  }
  //TODO: implement req.body validations
  subtractBalance = async (req, res) => {
    const { userId, amount } = req.body
    const balance = await IOClient.getUserPointsBalance(userId)
    const newBalance = calcPoints(balance, amount, 'sub')
    if(newBalance < 0) {
      res.send({ error: 'Insufficient balance' })
    } else {
      await IOClient.updateUserPointsBalance(userId, newBalance)
      res.send({ newBalance })
    }
  }

  //TODO: implement req.body validations
  //TODO: refactor to reuse balance functions
  sumBalance = async (req, res) => {
    const { userId, amount } = req.body
    const balance = await IOClient.getUserPointsBalance(userId)
    const newBalance = calcPoints(balance, amount, 'sum')
    await IOClient.updateUserPointsBalance(userId, newBalance)
    res.send({ newBalance })
  }
}

export default new BalanceController()

/* TEST_CASE_1
let userId = '35a37b17-a514-48b1-9d08-d4d6f83f0dc8'
let balance = new BalanceController()
balance.getBalance()
*/

/* TEST_CASE_2
let userId = '35a37b17-a514-48b1-9d08-d4d6f83f0dc8'
let amount = 10000
let balance = new BalanceController()
balance.subtractBalance(userId, amount)
*/