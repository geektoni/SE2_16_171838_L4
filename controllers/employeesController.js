var model = require('../models/employees.js');
var bind = require('bind');

var show = function (request, response) {
  var emp;
  if (request.query.search_emp) {
    emp = model.findEmployeeById(parseInt(request.query.emp_id_search));
    emp = { "display": "inline",
      "id": emp.id,
      "name": emp.name,
      "surname": emp.surname,
      "level": emp.level,
      "salary": emp.salary}
      // Update the view with the new information
      bind.toFile("./views/html/index.tpl",
        emp,
        function(data)
        {
            //write response
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(data);
        });

  } else {
    response.redirect("/");
    emp = {}
  }
}

var create = function (request, response) {

}

var delete_ = function (request, response) {

}

module.exports.show = show;
module.exports.create = create;
module.exports.delete = delete_;
