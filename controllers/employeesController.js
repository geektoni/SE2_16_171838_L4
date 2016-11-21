// This controller require the employee's model and
// bind (to generate views)
var model = require('../models/employees.js');
var bind = require('bind');

/*
* @brief This method show an employee's data given his/her id.
* If the employee doesn't exists, an empty form is displayed.
* @param request HTTP request
* @param response HTTP response
*/
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

/*
* @brief This method create a new employee or update an
* existing one.
* @param request HTTP request
* @param response HTTP response
*/
var create = function (request, response) {
  var emp;
  if (request.body.update_emp) {

    // Generate a new employee with the value submitted
    var emp = new model.Employee(
      parseInt(request.body.emp_ID),
      request.body.emp_name,
      request.body.emp_surname,
      parseInt(request.body.emp_level),
      parseInt(request.body.emp_salary)
    )

    // Check if the employee's datas are valid
    if (!model.isValid(emp)){

      // The emp will be passed to the bind
      // method to display an incomplete form
      // with an error message
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

      // If the id is empty then we must assign a new one.
      if(isNaN(emp.id)) {
        emp.id=model.nextVal()+1;
        model.insertEmployee(emp);
      } else {

        // If the ID is not empty and is valid, we need to
        // check if exist a user with that ID
        var emp_find = model.findEmployeeById(emp.id);

        // If we found an existing employee then we update him.
        if (model.isEmpty(emp_find)) {
          model.insertEmployee(emp);
        } else {
          model.updateEmployee(emp);
        }

      }
      emp = {"success":"true"};
    }

    // Render the view
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

/*
* @brief This method delete an existing user. An error will be displayed
* if the user doesn't exist.
* @param request HTTP request
* @param response HTTP response
*/
var delete_ = function (request, response) {
  if (request.body.delete_emp) {

    var result = {}
    var id = parseInt(request.body.emp_id_delete);

    // We try to find that employee.
    // If we find anything we report an error;
    if (model.isEmpty(model.findEmployeeById(id))) {
      result = {"delete_error": "true"};
    } else {
      model.deleteEmployee(id)
      result = {"delete":"true"};
    }

    // Render the view
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

// Exports controller methods outside
module.exports.show = show;
module.exports.create = create;
module.exports.delete_ = delete_;
