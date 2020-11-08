var express = require('express');
var controler = require('../controller/user.control')
var router = express.Router();

router.get('/', controler.home)
router.get('/search', controler.search)
router.get('/create', controler.creat)
router.post('/create', controler.creatPost)
router.get('/remove', controler.remove) 
router.post('/remove', controler.removePost)
router.get('/:id', controler.id)
module.exports = router;