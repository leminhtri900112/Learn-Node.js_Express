var express = require('express')
var app = express()
var port = 3000
var app = require('express')()
var bodyParser = require('body-parser')

// Lowdb
app.set('view engine', 'pug')
app.set('views', './views')
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

var low = require('lowdb')
var FileSync = require('lowdb/adapters/FileSync')
var Lowdb = require('lowdb')
 
var adapter = new FileSync('db.json')
 db = low(adapter)
 
// Set some defaults
db.defaults({users:[] })
  .write()

// main
app.get('/', function(req, res) {
    res.render('index', {
        name: 'Tri'
    })
});
app.get('/users', function(req, res) {
    res.render('users/index',{
    users: db.get('users').value()
    })
});
app.get('/users/search', function(req, res) {
    // console.log(req.query.q);
    var q = req.query.q;
    var elementFilter = users.filter(function(element) {
        return element.name.toLowerCase().indexOf(q) !== -1;
    })
    res.render('users/index',{
        users: elementFilter
    })
});
app.get('/users/create', function(req, res) {
    res.render('users/create')
});
app.post('/users/create', function(req, res) {
    var newUsers = req.body
    newUsers.id = parseInt(newUsers.id);
    db.get('users').push(newUsers).write();
    // console.log(newUsers);
    // console.log(users);
    res.redirect('/users')
});
app.get('/users/remove', function(req, res) {
    res.render('users/remove')
})
app.post('/users/remove', function(req, res) {
    var removeUsers = req.body
    removeUsers.id = parseInt(removeUsers.id);
    db.get('users')
     .remove(removeUsers)
     .write()
    res.redirect('/users')
});

app.listen(port, () => {
  console.log(`Webserver listening ${port}`)
})