const Router = require('express')
const router = new Router()
const SubtypeController = require('../controller/subtype.controller')

router.post('/subtype', SubtypeController.createSubtype)
router.get('/subtype/:id', SubtypeController.getSubtypesByType)
router.delete('/subtype/:id', SubtypeController.deleteSubtype)
router.put('/subtype', SubtypeController.updateSubtype)

module.exports = router