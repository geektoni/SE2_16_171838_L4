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

//instantiate express
var app = express();

// create a virtual path to expose static file
// like css or images
app.use('/statics', express.static('static'))

//listen in a specific port
app.set('port', (process.env.PORT || 1337));

//create a server
app.get('/', function(request, response)
{
  bind.toFile("./views/html/index.tpl",
    {},
    function(data)
    {
        //write response
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(data);
    });
});

//create a server
app.post('/', function(request, response)
{
	var text = '';
	response.writeHead(200, {'Content-Type': 'text/html'});
  response.end(text);

});

//listen in a specific port
app.listen(1337, '127.0.0.1');

//check status
console.log('Server running at http://127.0.0.1:1337/');
