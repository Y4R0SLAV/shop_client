const db = require('../db')

class SubtypeController {
  async createSubtype(req, res) {
    const { title, picture, type_id } = req.body
    const type = await db.query(
      'INSERT INTO subtype (title, picture, fk_type_id) VALUES ($1, $2, $3) RETURNING *',
      [title, picture, type_id])

    res.json(type.rows[0])
  }

  async getSubtypesByType(req, res) {
    const id = req.params.id
    const subtypes = await db.query('SELECT * FROM subtype WHERE fk_type_id = $1', [id])

    res.json(subtypes.rows)
  }

  async deleteSubtype(req, res) {
    const id = req.params.id
    const subtype = await db.query('DELETE FROM subtype WHERE subtype_id = $1', [id])

    res.json(type.rows[0])
  }
  async updateSubtype(req, res) {
    const { id, title, type_id, picture } = req.body
    const subtype = await db.query(
      'UPDATE subtype set title = $1, fk_type_id = $2, picture = $3 where subtype_id = $4 RETURNING *',
      [title, type_id, picture, id])
    res.json(subtype.rows[0])
  }
}

module.exports = new SubtypeController()