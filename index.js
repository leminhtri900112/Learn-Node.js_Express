var express = require('express')
var app = require('express')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')

var usersProduct = require('./routes/product.route.js')
var usersRouter = require('./routes/user.route.js')
var authRouter = require('./routes/auth.route.js')
var authMiddle = require('./middleware/auth.middleware')


var app = express()
var port = 3000

app.set('view engine', 'pug')
app.set('views', './views')
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static('public'))
app.use(cookieParser('thfgfbfbf344556'))
// main
app.get('/', function(req, res) {
    res.render('index', {
        name: 'Tri'
    })
});

app.use('/users', authMiddle.authMiddleware, usersRouter);
app.use('/auth' , authRouter);
app.use('/product' , usersProduct);


app.listen(port, () => {
  console.log(`Webserver listening ${port}`)
})