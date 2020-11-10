var db = require('../lowdb')
module.exports.authMiddleware = function(req, res, next) {
   if (!req.cookies.auth_id) {
    res.redirect('/auth/login')
       return
   }
    var user = db.get('users').find({id: req.cookies.auth_id}).value();
    if(!user) {
        res.redirect('/auth/login')
        return
    }
    console.log(user)
   next();
}