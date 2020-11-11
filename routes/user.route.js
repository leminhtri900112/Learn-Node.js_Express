var express = require('express');
var multer  = require('multer')

var upload = multer({ dest: './public/uploads/'})

var controler = require('../controller/user.control')
var middleError = require('../middleware/middle.error')
var router = express.Router();



router.get('/', controler.home)
// router.get('/cookie', function(req, res, next) {
//     res.cookie('cookie_id', 12345)
//     res.send('hello')
    
// })
router.get('/search', controler.search)
router.get('/create', controler.creat)
router.post('/create', upload.single('avatar'), middleError.middleError, controler.creatPost)
router.get('/remove', controler.remove) 
router.post('/remove', controler.removePost)
router.get('/:id', controler.id)
module.exports = router;