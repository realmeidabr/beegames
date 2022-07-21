import { Router } from 'express'
import BalanceController from '../controllers/BalanceController.js'
import OrderController from '../controllers/OrderController.js'

const routes = new Router()

routes.get('/', (req, res) => {
  res.send({ success: true })
})


//App Endpoints

// BALANCE - PASSED_1_2_3
// - [GET] /api/v1/balance/:userId (item_1)
//     get the balance of a user by userId

  routes.get('/balance/:userId', BalanceController.getBalance)

// - [POST] /api/v1/balance/sub (item_2)
// subtract the balance of a user by userId

  routes.post('/balance/sub', BalanceController.subtractBalance)

// - [POST] /api/v1/balance/add (item_3)
// add the balance of a user by userId

  routes.post('/balance/sum', BalanceController.sumBalance)


// ORDER
// - [POST] /api/v1/orders/feed
// recieves a feed of orders' updates

  routes.post('/orders/feed', OrderController.getFeedPing)

export default routes