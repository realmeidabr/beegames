import IOClient from '../services/index.js'

class OrderController {

  getFeedPing = async (req, res) => {
    //console.log(req.body)
    const { domain, orderId, state, lastChange, origin } = req.body
    console.log(req.body)
    res.send({ success: true })
  }
}

export default new OrderController

/* TEST_CASE_1
let userId = '35a37b17-a514-48b1-9d08-d4d6f83f0dc8'
let balance = new BalanceController()
balance.getBalance()
*/

// (req, res) => {
//   const { orders } = req.body
//   const newOrders = feedOrders(orders)
//   res.send({ newOrders })
// }