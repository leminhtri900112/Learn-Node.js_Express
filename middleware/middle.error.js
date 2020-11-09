module.exports.middleError = function(req,res,next) {
    var newUsers = req.body
    var errors = [];
    if (!newUsers.name) {
        errors.push('Name is required');
    }
    if (!newUsers.phone) {
        errors.push('Phone is required');
    }
    if (errors.length) {
        res.render('users/create',{
            errors: errors,
            value: newUsers
        });
        // console.log(errors)
        return;
    }
    next();
}