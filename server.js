
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

var port = process.env.PORT || 9090;    // Set out port

/**
 *  ROUTES FOR THE API
 * =================================================
 */
var router = express.Router();        // Start express router and set to router

// Test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
  res.json({ message: 'it works!' });
});

/**
 * REGISTER ROUTES
 * All routes will be prefixed with /api
 */
app.use('/api', router);

/**
 * START SERVER
 * ==================================================
 */
app.listen(port);
console.log("Server running at port " + port);