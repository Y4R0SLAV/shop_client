const db = require('../db')

class OrderController {
  async createOrder(req, res) {
    
  }

  async getOrders(req, res) {
    
  }

  async getOneOrder(req, res) {
    const id = req.params.id
    const order = await db.query('SELECT * FROM order WHERE order_id = $1', [id])

    res.json(order.rows[0])
  }

  async deleteOrder(req, res) {
    const id = req.params.id
    const order = await db.query('DELETE FROM order WHERE order_id = $1', [id])

    res.json(order.rows[0])
  }
}

module.exports = new OrderController()