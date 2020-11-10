var express = require('express');
var controler = require('../controller/user.control')
var middleError = require('../middleware/middle.error')
var authMiddle = require('../middleware/auth.middleware')

var router = express.Router();

router.get('/', authMiddle.authMiddleware , controler.home)
// router.get('/cookie', function(req, res, next) {
//     res.cookie('cookie_id', 12345)
//     res.send('hello')
    
// })
router.get('/search', controler.search)
router.get('/create', controler.creat)
router.post('/create', middleError.middleError, controler.creatPost)
router.get('/remove', controler.remove) 
router.post('/remove', controler.removePost)
router.get('/:id', controler.id)
module.exports = router;