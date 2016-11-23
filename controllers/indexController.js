// This controller require the employee's model and
// bind (to generate views)
var model = require('../models/employees.js');
var bind = require('bind');

/*
* @brief Index method, it shows the landing page
* @param request HTTP request
* @param response HTTP response
*/
var index = function (request, response) {

  // Generate the view (given a template file)
  bind.toFile("./views/html/index.tpl",
    {},
    function(data)
    {
        //write response
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(data);
    });
}

/* @brief Error method, it shows a 404 page if a user try to
/* access a non-existent page (by taking a non-existent route).
* @param request HTTP request
* @param response HTTP response
*/
var error = function (request, response) {
  bind.toFile("./views/html/error.tpl",
    {},
    function(data)
    {
        //write response sending also a 404 status message
        response.writeHead(404, {'Content-Type': 'text/html'});
        response.end(data);
    });
}

// Export methods that will be used outside
module.exports.index = index;
module.exports.error = error;
