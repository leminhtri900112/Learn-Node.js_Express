var db = require('../lowdb')
module.exports.authMiddleware = function(req, res, next) {
   if (!req.signedCookies.auth_id) {
    res.redirect('/auth/login')
       return
   }
    var user = db.get('users').find({id: req.signedCookies.auth_id}).value();
    if(!user) {
        res.redirect('/auth/login')
        return
    }
    res.locals.user = user
   next();
}