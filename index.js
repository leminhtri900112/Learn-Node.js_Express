var express = require('express')
var app = require('express')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')

var usersRouter = require('./routes/user.route.js')
var authRouter = require('./routes/auth.route.js')

var app = express()
var port = 3000

app.set('view engine', 'pug')
app.set('views', './views')
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static('public'))
app.use(cookieParser())
// main
app.get('/', function(req, res) {
    res.render('index', {
        name: 'Tri'
    })
});

app.use('/users', usersRouter);
app.use('/auth' , authRouter)

app.listen(port, () => {
  console.log(`Webserver listening ${port}`)
})