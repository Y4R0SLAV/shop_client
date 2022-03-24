const Router = require('express')
const router = new Router()
const OrderDetailsController = require("../controller/orderDetails.controller")

router.post('/', OrderDetailsController.createOrderDetails)
router.get('/', OrderDetailsController.getOrdersDetails)
router.get('/:id', OrderDetailsController.getOneOrderDetails)
router.delete('/:id', OrderDetailsController.deleteOrderDetails)

module.exports = router