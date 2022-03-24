const Router = require('express')
const router = new Router()
const TypeController = require('../controller/type.controller')

router.post('/type', TypeController.createType)
router.delete('/type/:id', TypeController.deleteType)

module.exports = router