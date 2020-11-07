var express = require('express');
var shortid = require('shortid');

var db = require('../lowdb')

var router = express.Router();

router.get('/', function(req, res) {
    res.render('users/index',{
    users: db.get('users').value()
    })
});
router.get('/search', function(req, res) {
    // console.log(req.query.q);
    // console.log(db.get('users').value());
    var q = req.query.q;
    var elementFilter = db.get('users').value().filter(function(element) {
        return element.name.toLowerCase().indexOf(q) !== -1;
    })
    console.log(elementFilter)
    res.render('users/search',{
        users: elementFilter
        
    })
});
router.get('/create', function(req, res) {
    res.render('users/create')
});
router.post('/create', function(req, res) {
    var newUsers = req.body
    newUsers.id = shortid.generate();
    db.get('users').push(newUsers).write();
    // console.log(newUsers);
    // console.log(users);
    res.redirect('/users')
});
router.get('/remove', function(req, res) {
    res.render('users/remove')
})
router.post('/remove', function(req, res) {
    var removeUsers = req.body
    // console.log(removeUsers);
    // removeUsers.id = parseInt(removeUsers.id);
    db.get('users')
     .remove({name: removeUsers.name})
     .write()
    res.redirect('/users')
});

router.get('/:id', function(req, res) {
    var id = req.params.id;
    var user = db.get('users').find({id: id}).value()
    res.render('users/view',{
        user: user
    })
});

module.exports = router;