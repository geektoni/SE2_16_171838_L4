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
var bodyParser = require('body-parser');

//instantiate express
var app = express();

// create a virtual path to expose static file
// like css or images
app.use('/statics', express.static('static'))

var indexController = require('./controllers/indexController.js');
var employeesController = require('./controllers/employeesController.js');

// parse the request
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

//listen in a specific port
app.set('port', (process.env.PORT || 1337));

// Manage get request using the controller
app.get('/', function(request, response)
{
  indexController.index(request, response);
});

// Manage post request using the controller
app.get('/employee/show', function(request, response)
{
  employeesController.show(request, response);
});

app.post('/employee/create', function(request, response) {
  employeesController.create(request, response);
});

app.post('/employee/delete', function(request, response) {
  employeesController.delete_(request, response);
});

//The 404 Route
app.get('*', function(request, response){
  indexController.error(request, response);
});

//listen in a specific port
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
