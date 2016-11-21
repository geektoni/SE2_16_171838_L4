//Libraries
var http = require('http');
//general lib
var express = require('express');
//parse URL
var url = require('url');
//inspect variables
var util = require('util');
//html templating module
var bind = require('bind');
//useful to parse POST request
var bodyParser = require('body-parser');

// instantiate express
var app = express();

// Create a virtual path to expose static file
// like css or images
app.use('/statics', express.static('static'))

// Import the controller I need
var indexController = require('./controllers/indexController.js');
var employeesController = require('./controllers/employeesController.js');

// parse the request
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

// Set the application port
app.set('port', (process.env.PORT || 1337));

// Manage get request using the controller
app.get('/', function(request, response)
{
  indexController.index(request, response);
});

// Manage the request to show a user datas
app.get('/employee/show', function(request, response)
{
  employeesController.show(request, response);
});

// Manage the request to create/update a user
app.post('/employee/create', function(request, response) {
  employeesController.create(request, response);
});

// Manage the request to delete a user
app.post('/employee/delete', function(request, response) {
  employeesController.delete_(request, response);
});

// The 404 Route
app.get('*', function(request, response){
  indexController.error(request, response);
});

// Listen in a specific port
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
