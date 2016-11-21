var model = require('../models/employees.js');
var bind = require('bind');

var show = function (request, response) {
  var emp;
  if (request.query.search_emp) {
    emp = model.findEmployeeById(parseInt(request.query.emp_id_search));
    emp = { "display": "inline",
    "id": isNaN(emp.id) ? "" : emp.id,
    "name": emp.name,
    "surname": emp.surname,
    "level": isNaN(emp.level) ? "" : emp.level,
    "salary": isNaN(emp.salary) ? "" : emp.salary}
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
  }
}

var create = function (request, response) {
  var emp;
  if (request.body.update_emp) {
    var emp = new model.Employee(
      parseInt(request.body.emp_ID),
      request.body.emp_name,
      request.body.emp_surname,
      parseInt(request.body.emp_level),
      parseInt(request.body.emp_salary)
    )
    if (!model.isValid(emp)){
      emp = {
        "error" : "true",
        "display": "inline",
        "id": isNaN(emp.id) ? "" : emp.id,
        "name": emp.name,
        "surname": emp.surname,
        "level": isNaN(emp.level) ? "" : emp.level,
        "salary": isNaN(emp.salary) ? "" : emp.salary
      }
    } else {
      if(isNaN(emp.id)) {
        emp.id=model.nextVal()+1;
        model.insertEmployee(emp);
      } else {
        var emp_find = model.findEmployeeById(emp.id);
        if (model.isEmpty(emp_find)) {
          model.insertEmployee(emp);
        } else {
          model.updateEmployee(emp);
        }
      }
      emp = {"success":"true"};
    }
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
  }

}

var delete_ = function (request, response) {
  if (request.body.delete_emp) {
    var result = {}
    var id = parseInt(request.body.emp_id_delete);
    if (model.deleteEmployee(id)) {
      result = {"delete":"true"};
    } else {
      result = {"delete_error": "true"};
    }
    bind.toFile("./views/html/index.tpl",
      result,
      function(data)
      {
          //write response
          response.writeHead(200, {'Content-Type': 'text/html'});
          response.end(data);
      });
  } else {
    response.redirect("/");
  }
}

module.exports.show = show;
module.exports.create = create;
module.exports.delete_ = delete_;
