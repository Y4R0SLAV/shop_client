const Router = require('express')
const router = new Router()
const TypeController = require('../controller/type.controller')

router.post('/', TypeController.createType)
router.get('/', TypeController.getAllTypes)
router.delete('/:id', TypeController.deleteType)

module.exports = router