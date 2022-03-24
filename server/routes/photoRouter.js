const Router = require('express')
const router = new Router()
const PhotoController = require("../controller/photo.controller")

router.post('/', PhotoController.createPhoto)
router.get('/:id', PhotoController.getPhotosByProduct)
router.delete('/:id', PhotoController.deletePhoto)

module.exports = router