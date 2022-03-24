const db = require('../db')

class OrderController {
  async createOrder(req, res) {
    const { email, country, is_delivery, fullname, index, phone_number, region, adress } = req.body

    if (is_delivery !== true && is_delivery !== false) {
      // return ошибка
    }

    const newOrder = await db.query(
      'INSERT INTO order (email, country, is_delivery, fullname, index, phone_number, region, adress) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *', [email, country, is_delivery, fullname, index, phone_number, region, adress])

    res.json(newOrder.rows[0])
  }

  async getOrders(req, res) {
    const orders = await db.query('SELECT * FROM order')

    res.json(orders.rows)
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