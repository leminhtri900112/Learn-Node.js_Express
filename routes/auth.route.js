var express = require('express');
var controler = require('../controller/auth.control')
var router = express.Router();

router.get('/login', controler.login)
router.post('/login', controler.loginPost)
module.exports = router;
