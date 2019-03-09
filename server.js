var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var port = 3000;

var routes = require('./routes/index');
var register = require('./routes/user');
var login = require('./routes/user');
var user = require('./routes/user');
var localchat = require('./routes/localchat');
var user = require('./routes/user')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('public', path.join(__dirname, 'public'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));
app.use(session({secret:'key'}));

app.use('/', routes);
app.use('/user', user)
app.use('/localchat', localchat)

app.listen(port, function() {
  console.log('Listening in on port' + port);
});

module.exports = app;