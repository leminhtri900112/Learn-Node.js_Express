var express = require('express');
var controler = require('../controller/product.control')
var router = express.Router();

router.get('/', controler.product)
module.exports = router;