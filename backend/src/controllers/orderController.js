import IOClient from '../services/index.js'
import { calcPoints } from '../functions/calc.js'
class OrderController {

  getFeedPing = async (req, res) => {
    const feedData = req.body
    const orderId = feedData.OrderId
    this.dispatchFlowUpdates(orderId)
    res.send({ success: true })
  }

  dispatchFlowUpdates = async (orderId) => {
    const orderData = await IOClient.getOrderData(orderId)
    const clientId = orderData.clientProfileData.userProfileId
    const orderValue = orderData.totals[0].value
    const balance = await IOClient.getUserPointsBalance(clientId)
    const newBalance = calcPoints(balance, orderValue, 'sum')
    await IOClient.updateUserPointsBalance(clientId, newBalance)
  }
}

export default new OrderController

// Tested via API client only (FeedV3 Order Hook dependent)