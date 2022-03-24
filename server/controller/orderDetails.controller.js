const db = require('../db')

class OrderDetailsController {
  async createOrderDetails(req, res) {
    const { product_id, quantity, unit_price } = req.body

    const newOrder = await db.query(
      'INSERT INTO order_details (fk_product_id, quantity, unit_price) VALUES ($1, $2, $3) RETURNING *', 
      [product_id, quantity, unit_price])

    res.json(newOrder.rows[0])
  }

  async getOrdersDetails(req, res) {
    const orders = await db.query('SELECT * FROM order_details')

    res.json(orders.rows)
  }

  async getOneOrderDetails(req, res) {
    const id = req.params.id
    const order = await db.query('SELECT * FROM order_details WHERE order_id = $1', [id])

    res.json(order.rows[0])
  }

  async deleteOrderDetails(req, res) {
    const id = req.params.id
    const order = await db.query('DELETE FROM order_details WHERE order_id = $1', [id])

    res.json(order.rows[0])
  }
}

module.exports = new OrderDetailsController()