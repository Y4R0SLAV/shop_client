const db = require('../db')

class PhotoController {
  async createPhoto(req, res) {
    const { is_front, is_back, product_id, url } = req.body

    const newPhoto = await db.query(
      'INSERT INTO photo (is_front, is_back, product_id, url) VALUES ($1, $2, $3, $4) RETURNING *',
      [is_front, is_back, product_id, url])

    res.json(newPhoto.rows[0])
  }

  async getPhotosByProduct(req, res) {
    const product_id = req.params.id

    const photos = await db.query(
      'SELECT * FROM photo WHERE fk_product_id = $1 AND is_front = false AND is_back = false', [product_id]
    )
    const frontPhoto = await db.query(
      'SELECT * FROM photo WHERE fk_product_id = $1 AND is_front = true', [product_id]
    )
    const backPhoto = await db.query(
      'SELECT * FROM photo WHERE fk_product_id = $1 AND is_back = true', [product_id]
    )

    res.json({ photos: photos.rows, back: backPhoto.rows[0], front: frontPhoto.rows[0] })
  }

  async deletePhoto(req, res) {
    const id = req.params.id
    const photo = await db.query('DELETE FROM photo WHERE photo_id = $1', [id])

    res.json(photo.rows[0])
  }
}

module.exports = new PhotoController()