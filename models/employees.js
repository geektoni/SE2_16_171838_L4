
// \brief Employee Database
var database = [];
database.push (new Employee(1, "test", "test", 1, 10));

// \brief An auto-increment value
var nextId = 1;

// \brief Employee Object
function Employee(id, name, surname, level, salary) {
  this.id = parseInt(id);
  this.name = name;
  this.surname = surname;
  this.level = parseInt(level);
  this.salary = parseInt(salary);
}

/*
* \brief Check if an employee is valid
* \param Employee I want to check
* \return True if the employee is valid, false otherwise
*/
function isValid(emp) {
  if (emp.id < 0) return false;
  if (emp.level < 0 || isNaN(emp.level)) return false;
  if (emp.salary < 0 || isNaN(emp.salary)) return false;
  if (emp.name == "" || !/^[a-zA-Z]+$/.test(emp.name)) return false;
  if (emp.surname == "" || !/^[a-zA-Z]+$/.test(emp.surname) ) return false;
  return true;
}

function isEmpty(emp) {
  if (emp.id==0 && emp.name=="" && emp.surname=="" && emp.salary==0
  && emp.level==0) return true;
  return false;
}

/*
* \brief Method to find an employee by id.
* \param id: the employee's id I want to find
* \return The employee or if there is
* no such employee, the method will return an empty one.
*/
var findEmployeeById = function (id) {
  for (var i=0; i<database.length; i++) {
    if (database[i].id===id) {
      return database[i];
    }
  }
  return new Employee();
}

/*
* \brief Method that adds an employee inside the database
* \param emp: The new employee
*/
var insertEmployee = function (emp) {
  database.push(emp);

  var max=-1
  for (var i=0; i<database.length; i++) {
    if (database[i].id > max) {
      max = database[i].id;
    }
  }
  nextId = max;

}

/*
* \brief Update an Employee overwriting his data
* \param The updated employee
* \param The index of the employee in the database
*/
var updateEmployee = function (emp) {
  var status = true;
  for (var i=0; i< database.length && status; i++) {
    if (database[i].id === emp.id)
    {
      database[i] = emp;
      status = false;
    }
  }
}

var deleteEmployee = function(id) {
  var status = false;

  for (var i=0; i<database.length && !status; i++) {
    if (database[i].id === id) {
      database.splice(i, 1);
      status = true;
    }
  }

  // I need to update the nextId of the database.
  // For example, if I delete the last element I've
  // pushed, when I submit a new employee he will
  // be given the id equals to nextId+1, but this is wrong.
  var max=-1
  for (var i=0; i<database.length; i++) {
    if (database[i].id > max) {
      max = database[i].id;
    }
  }
  nextId = max;

  return status;

}

var nextVal = function()
{
  return nextId;
}

// Expose methods which will be used in the controller
module.exports.findEmployeeById = findEmployeeById;
module.exports.insertEmployee = insertEmployee;
module.exports.updateEmployee = updateEmployee;
module.exports.deleteEmployee = deleteEmployee;
module.exports.isValid = isValid;
module.exports.isEmpty = isEmpty;
module.exports.nextVal = nextVal;
module.exports.Employee = Employee;
