var db = require('../lowdb')

module.exports.product = function(req, res) {
    res.render('users/product',{
        products: db.get('products').value()
    })
}