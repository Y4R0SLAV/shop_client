const Router = require('express')
const router = new Router()
const SubtypeController = require('../controller/subtype.controller')

router.post('/', SubtypeController.createSubtype)
router.get('/:id', SubtypeController.getSubtypesByType)
router.get('/', SubtypeController.getAllSubtypes)
router.delete('/:id', SubtypeController.deleteSubtype)
router.put('/', SubtypeController.updateSubtype)

module.exports = router