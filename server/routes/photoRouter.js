const Router = require('express')
const router = new Router()
const PhotoController = require("../controller/photo.controller")

router.post('/', PhotoController.createPhoto)
router.get('/:id', PhotoController.getAllPhotosById)
router.get('/main/:id', PhotoController.getBackAndFrontPhotos)
router.delete('/:id', PhotoController.deletePhoto)

module.exports = router