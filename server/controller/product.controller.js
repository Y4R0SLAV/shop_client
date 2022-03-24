const sortedByString = require("../utilits/sqlSortedBy")
const db = require('../db')


class ProductController {
  async createProduct(req, res, next) {
    const { title, price, collection_id, subtype_id, description, sale_price, sizing, XXS, XS, S, M, L, XL, XXL } = req.body

    let newProduct

    if (sizing) {
      newProduct = await db.query(
        'INSERT INTO product (title, price, fk_collection_id, fk_subtype_id, description, sale_price, sizing, XXS, XS, S, M, L, XL, XXL) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *',
        [title, price, collection_id, subtype_id, description, sale_price, sizing, XXS, XS, S, M, L, XL, XXL])
    } else {
      newProduct = await db.query(
        'INSERT INTO product (title, price, fk_collection_id, fk_subtype_id, description, sale_price, sizing) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
        [title, price, collection_id, subtype_id, description, sale_price, sizing])
    }

    res.json(newProduct.rows[0])
  }

  async getProducts(req, res) {
    const { subtype_id, collection_id, have_sale, term, sorted } = req.query

    let sorted_by = sortedByString(sorted)
    let where = ""
    let whereArray = []

    if (subtype_id) { whereArray.push(`fk_subtype_id = ${+subtype_id}`) }
    if (collection_id) { whereArray.push(`fk_collection_id IS NOT NULL AND fk_collection_id = ${collection_id}`) }
    if (have_sale) { whereArray.push(`sale_price > 0`) }
    if (term) { whereArray.push(`title LIKE '%${term}%'`) }

    let products
    if (whereArray.length > 0) {
      where += whereArray.join(" AND ")
      if (sorted_by) {
        products = await db.query('SELECT * FROM product WHERE $1 ORDER BY $2', [where, sorted_by])
      } else {
        products = await db.query('SELECT * FROM product WHERE $1', [collection_id])
      }
    } else {
      if (sorted_by) {
        products = await db.query('SELECT * FROM product ORDER BY $1', [sorted_by])
      } else {
        products = await db.query('SELECT * FROM product')
      }
    }


    res.json(products.rows)
  }

  async getOneProduct(req, res) {
    const id = req.params.id
    const product = await db.query('SELECT * FROM product WHERE product_id = $1', [id])

    res.json(product.rows[0])
  }

  async updateProduct(req, res) {
    const { id, title, price, collection_id, subtype_id, description, sale_price, sizing, XXS, XS, S, M, L, XL, XXL } = req.body
    let newProduct

    if (sizing) {
      newProduct = await db.query(
        'INSERT INTO product title, price, fk_collection_id, fk_subtype_id, description, sale_price, sizing, XXS, XS, S, M, L, XL, XXL) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) WHERE product_id = $15 RETURNING *',
        [title, price, collection_id, subtype_id, description, sale_price, sizing, XXS, XS, S, M, L, XL, XXL, id])
    } else {
      newProduct = await db.query(
        'INSERT INTO product title, price, fk_collection_id, fk_subtype_id, description, sale_price, sizing) VALUES ($1, $2, $3, $4, $5, $6, $7) WHERE product_id = $8 RETURNING *',
        [title, price, collection_id, subtype_id, description, sale_price, sizing, id])
    }

    res.json(newProduct.rows[0])
  }

  async deleteProduct(req, res) {
    const id = req.params.id
    const product = await db.query('DELETE FROM product WHERE product_id = $1', [id])

    res.json(product.rows[0])
  }
}

module.exports = new ProductController()