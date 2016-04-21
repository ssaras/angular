// var connect = require('connect');
// var serveStatic = require('serve-static');

// // var port = normalizePort(process.env.PORT || '3000');
// var port = 8080;

// connect().use(serveStatic(__dirname)).listen(port, function(){
//     console.log('Server running on: ' + port);
// });

var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
// app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/'));

// set the home page route
app.get('/', function(req, res) {

  // ejs render automatically looks in the views folder
  // res.render('index');
});

app.listen(port, function() {
  console.log('Our app is running on http://localhost:' + port);
});