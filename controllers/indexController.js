var model = require('../models/employees.js');
var bind = require('bind');

var index = function (request, response) {
  bind.toFile("./views/html/index.tpl",
    {},
    function(data)
    {
        //write response
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(data);
    });
}

module.exports.index = index;
