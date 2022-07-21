import axios from 'axios'
import {config} from 'dotenv'

config()

class IOClient {
  //TODO: refactor to allows path builder and avoid hardcoded paths
  constructor(
    baseUrl,
    apiDataEntitiesPath,
    apiOmsPath,
    dataEntityName,
    routeSearch,
    routeUpdateDocument,
    routeOrders,
    queryString,
    ) {
    this.baseUrl = process.env.VTEX_API_BASE_URL
    this.apiDataEntitiesPath = 'api/dataentities/'
    this.apiOmsPath = 'api/oms/pvt/'
    this.dataEntityName = 'CL'
    this.routeSearch = '/search'
    this.routeDocuments = '/documents/'
    this.routeOrders = 'orders/'
    //TODO: refactor to allows query string builder and avoid 'all fields' query
    //this.queryString = '?_fields=userPointsBalance&_where=userId%3D'
    this.queryStringSearch = '?_fields=_all&_where=userId='
    }
  // Auxiliary methods
  getKeyByValue(object, value) {
    const obj = object[0]
    return obj[value]
  }
  
  getValueByKey(object, key) {
    const obj = object[0]
    return obj[key]
  }

  // CRUD methods
  async getUserData(userId) {
    const url = `${this.baseUrl}${this.apiDataEntitiesPath}${this.dataEntityName}${this.routeSearch}${this.queryStringSearch}${userId}`

    // https://controll.vtexcommercestable.com.br/api/dataentities/CL/search?_fields=userPointsBalance&_where=userId%3D{userId}

    const options = {
      method: 'GET',
      url: url,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'X-VTEX-API-AppKey': process.env.VTEX_APP_KEY,
        'X-VTEX-API-AppToken': process.env.VTEX_APP_TOKEN,
      },
    }

    try {
      const response = await axios(options)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  async getUserPointsBalance(userId) {

    try {
      const response = await this.getUserData(userId)
      const balance = this.getValueByKey(response, 'userPointsBalance')
      return balance
    } catch (error) {
      console.error(error)
    }
  }

  async updateUserData(documentId, key, value){
    const url = `${this.baseUrl}${this.apiDataEntitiesPath}${this.dataEntityName}${this.routeDocuments}${documentId}`
    
    //https://controll.vtexcommercestable.com.br/api/dataentities/{dataEntityName}/documents/{id}

    const options = {
      method: 'PATCH',
      url: url,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'X-VTEX-API-AppKey': process.env.VTEX_APP_KEY,
        'X-VTEX-API-AppToken': process.env.VTEX_APP_TOKEN
      },
      data: {
        [key]: value,
      }
    }

    try {
      const response = await axios.request(options)
      return console.log(response.status)
    } catch (error) {
      console.error(error)
    }
  }

  async updateUserPointsBalance(userId, newBalance) {

    try {
      const userData = await this.getUserData(userId)
      const documentId = this.getValueByKey(userData, 'id')
      await this.updateUserData(documentId, 'userPointsBalance', newBalance)
    } catch (error) {
      console.error(error)
    }
  }

  async getOrderData(orderId) {
    const url = `${this.baseUrl}${this.apiOmsPath}${this.routeOrders}${orderId}`

    // https://controll.vtexcommercestable.com.br/api/oms/pvt/orders/{orderId}

    const options = {
      method: 'GET',
      url: url,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'X-VTEX-API-AppKey': process.env.VTEX_APP_KEY,
        'X-VTEX-API-AppToken': process.env.VTEX_APP_TOKEN,
      },
    }

    try {
      const response = await axios(options)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
}

export default new IOClient()

/* TEST_CASE_1
const ioClient = new IOClient()
ioClient.getUserPointsBalance('35a37b17-a514-48b1-9d08-d4d6f83f0dc8')
ioClient.updateUserPointsBalance('35a37b17-a514-48b1-9d08-d4d6f83f0dc8', 10000)
ioClient.getUserPointsBalance('35a37b17-a514-48b1-9d08-d4d6f83f0dc8')
ioClient.getOrderData('1247782603363-01')
*/