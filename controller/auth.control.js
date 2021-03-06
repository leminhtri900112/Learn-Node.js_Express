var md5 = require('md5')
var db = require('../lowdb')

module.exports.login = function(req, res) {
    res.render('auth/login',{
    })
}
module.exports.loginPost =  function(req, res) {
    var email = req.body.email
    var password = req.body.password
    var user = db.get('users').find({email: email}).value()
    if (!user) {
        res.render('auth/login',{
            errors: ['User does not exist'],
            value: req.body
        });
        return
    }
    var md5Password = md5(password)
    if (user.password !== md5Password) {
        res.render('auth/login',{
            errors: ['Wrong password'],
            value: req.body
        });
        return
    }
    res.cookie('auth_id', user.id, {
        signed: true
    })
    res.redirect('/users')
}

