const Router = require('express')
const router = new Router()
const collectionController = require('../controller/collection.controller')

router.post('/', collectionController.createCollection)
router.get('/', collectionController.getCollections)
router.get('/:id', collectionController.getOneCollection)
router.put('/', collectionController.updateCollection)
router.delete('/:id', collectionController.deleteCollection)

module.exports = router