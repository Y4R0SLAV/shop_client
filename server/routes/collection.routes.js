const Router = require('express')
const router = new Router()
const collectionController = require('../controller/collection.controller')

router.post('/collection', collectionController.createCollection)
router.get('/collection', collectionController.getCollections)
router.get('/collection/:id', collectionController.getOneCollection)
router.put('/collection', collectionController.updateCollection)
router.delete('/collection/:id', collectionController.deleteCollection)




module.exports = router