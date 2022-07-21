import IOClient from '../services/index.js'

class OrderController {

  getFeedPing = async (req, res) => {
    //console.log(req.body)
    const feedData = req.body
    console.log(feedData)
    const orderId = feedData.OrderId
    console.log(orderId)
    const orderData = await IOClient.getOrderData(orderId)
    //console.log(orderData)
    res.send({ success: true })
  }
}

export default new OrderController

