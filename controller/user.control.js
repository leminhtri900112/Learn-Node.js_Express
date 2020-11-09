var express = require('express');
var shortid = require('shortid');

var db = require('../lowdb')

module.exports.home = function(req, res) {
    res.render('users/index',{
    users: db.get('users').value()
    })
}

module.exports.search = function(req, res) {
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
}

module.exports.creat = function(req, res) {
    // console.log(req.cookies)
    res.render('users/create')
}

module.exports.creatPost =  function(req, res) {
    var newUsers = req.body
    newUsers.id = shortid.generate();
    db.get('users').push(newUsers).write();
    // console.log(newUsers);
    // console.log(users);
    res.redirect('/users')
}

module.exports.remove = function(req, res) {
    res.render('users/remove')
}

module.exports.removePost = function(req, res) {
    var removeUsers = req.body
    // console.log(removeUsers);
    // removeUsers.id = parseInt(removeUsers.id);
    db.get('users')
     .remove({name: removeUsers.name})
     .write()
    res.redirect('/users')
}
module.exports.id = function(req, res) {
    var id = req.params.id;
    var user = db.get('users').find({id: id}).value()
    res.render('users/view',{
        user: user
    })
}