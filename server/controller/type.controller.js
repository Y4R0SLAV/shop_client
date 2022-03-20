const db = require('../db')

class TypeController {
  async createType(req, res) {
    const { title } = req.body
    const type = await db.query('INSERT INTO type (title) VALUES ($1) RETURNING *', [title])

    res.json(type.rows[0])
  }

  async deleteType(req, res) {
    const id = req.params.id
    const type = await db.query('DELETE FROM type WHERE type_id = $1', [id])

    res.json(type.rows[0])
  }

}

module.exports = new TypeController()