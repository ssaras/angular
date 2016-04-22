// server.js

/** 
 * BASE SETUP
 * =================================================
 */
// Call packages we need
var express    = require('express');    // Get express
var app        = express();         // Call express and set it to our app
var bodyParser = require('body-parser');  // Get body-parser

/**
 * Configure app to use bodyParser()
 * This lets us get data from a POST request
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/'));

// set the home page route
app.get('/', function(req, res) { });

/**
 * START SERVER
 * ==================================================
 */
app.listen(port, function() {
  console.log('Our app is running on http://localhost:' + port);
});

/**
 * CONNECT TO MONGO
 *====================================================
 */
var mongoose = require('mongoose').connect('mongodb://localhost/test');
var db = mongoose.connection;
var isConnected = false;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  isConnected = true;
  console.log("Connected to Database: " + isConnected);
});

/**
 *  ROUTES FOR THE API
 * =================================================
 */
var router = express.Router(); // Start express router and set to router

// Test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
  res.json({ message: 'it works!' });
});

/**
 * REGISTER ROUTES
 * All routes will be prefixed with /api
 */
app.use('/api', router);

app.use('/products', function(){
  res.json({ products: 'here'});
});