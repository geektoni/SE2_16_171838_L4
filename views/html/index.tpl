<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8">
      <title> Employees Manager </title>
      <link rel="stylesheet" type="text/css" href="statics/css/style.css" />
   </head>
   <body>
     <h2>Empolyees Manager</h2>
     <form id="search_employee" method="POST" action="http://localhost:1337/">
       <input type="text" placeholder="Search by ID" />
       <button>Search</button>
     </form>
     <br/>
     <form id="new_employee" method="POST" action="http://localhost:1337/create">
       <label>Employee ID</label>
       <input type="text" placeholder="Employee ID" name="emp_ID" /><br />
       <label>Employee Name</label>
       <input type="text" placeholder="Employee Name" name="emp_name" /><br />
       <label>Employee Surname</label>
       <input type="text" placeholder="Employee Surname" name="emp_surname" /><br />
       <label>Employee Level</label>
       <input type="text" placeholder="Employee Level" name="emp_level" /><br />
       <label>Employee Salary</label>
       <input type="text" placeholder="Employee Salary" name="emp_salary" /><br />
       <button type="button" value="Update/Create Employee" onclick="" />Update Employee</button>
       <button type="button">Delete Employee</button>
     </form>
   </hr>
   <button type="button">Show Employee manager</button>
   </body>
</html>
