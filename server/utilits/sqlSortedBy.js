require('dotenv').config()

module.exports = function (sorted) {
  switch (sorted) {
    case process.env.relevance:
      return sorted_by = ""

    case process.env.date:
      return sorted_by = "product_id"

    case process.env.date_desc:
      return sorted_by = "product_id DESC"

    case process.env.price:
      return sorted_by = "price"

    case process.env.price_desc:
      return sorted_by = "price DESC"

    case process.env.title:
      return sorted_by = "title"

    case process.env.title_desc:
      return sorted_by = "title DESC"

    default:
      // return ошибка
      return
  }
}