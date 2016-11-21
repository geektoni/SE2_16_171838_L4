
// \brief Employee Database
var database = [];
database.push (new Employee(0, "test", "test", 1, 10));

// \brief An auto-increment value
var nextId = 0;

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
  if (emp.id >= 0 && !isNaN(parseInt(id))) return false;
  if (emp.level > 0 && !isNaN(parseInt(level))) return false;
  if (emp.salary > 0 && !isNaN(parseInt(salary))) return false;
  if (emp.name == "") return false;
  if (emp.surname == "") return false;
  return true;
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
  return new Employee(0, "", "", 0, 0);
}

/*
* \brief Method that adds an employee inside the database
* \param emp: The new employee
*/
var insertEmployee = function (emp) {
  if (isValid(emp)) {
    if (emp.id == 0) {
      emp.id = nextId;
      nextId++;
    }
    database.push(emp);
  }
}

/*
* \brief Update an Employee overwriting his data
* \param The updated employee
* \param The index of the employee in the database
*/
var updateEmployee = function (emp, i) {
  database[i] = emp;
}

// Expose methods which will be used in the controller
module.exports.findEmployeeById = findEmployeeById;
module.exports.insertEmployee = insertEmployee;
module.exports.updateEmployee = updateEmployee;
