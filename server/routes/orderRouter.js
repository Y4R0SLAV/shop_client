const Router = require('express')
const router = new Router()
const OrderController = require("../controller/order.controller")

router.post('/', OrderController.createOrder)
router.get('/', OrderController.getOrders)
router.get('/:id', OrderController.getOneOrder)
router.delete('/:id', OrderController.deleteOrder)

module.exports = router