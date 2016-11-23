<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8">
      <title> Employees Manager </title>
      <link rel="stylesheet" type="text/css" href="/statics/css/style.css" />
   </head>
   <body>
     <h2>Empolyees Manager</h2>

     (: if[success] ~
     [: then ~ <p style="color: green;">Employee modified/created correctly!</p> :]
     :)

     (: if[error] ~
     [: then ~ <p style="color: red;">At least one of the values submitted is invalid!</p> :]
     :)

     (: if[delete] ~
      [: then ~ <p style="color: green;">Employee deleted correctly!</p>:]
     :)

     (: if[delete_error] ~
      [: then ~ <p style="color: red;">Employee does not exist. Done nothing.</p>:]
     :)


     <form id="search_employee" method="GET" action="http://localhost:1337/employee/show">
       <input type="text" placeholder="Search by ID"  name="emp_id_search"/>
       <button name="search_emp" value="1">Search</button>
     </form>
     <form id="delete_employee" method="POST" action="http://localhost:1337/employee/delete">
       <input type="text" placeholder="Employee's ID"  name="emp_id_delete"/>
       <button name="delete_emp" value="1">Delete Employee</button>
     </form>
     <hr />
     <br/>
     <form id="new_employee" method="POST" action="http://localhost:1337/employee/create" style="display: (: display ~ none :)">
       <label>Employee ID</label>
       <input type="text" placeholder="Employee ID" name="emp_ID" value="(: id :)" /><br />
       <label>Employee Name</label>
       <input type="text" placeholder="Employee Name" name="emp_name" value="(: name :)" /><br />
       <label>Employee Surname</label>
       <input type="text" placeholder="Employee Surname" name="emp_surname" value="(: surname :)" /><br />
       <label>Employee Level</label>
       <input type="text" placeholder="Employee Level" name="emp_level" value="(: level :)" /><br />
       <label>Employee Salary</label>
       <input type="text" placeholder="Employee Salary" name="emp_salary" value="(: salary :)" /><br />
       <button name="update_emp" value="1">Create/Update Employee</button>
       <br/>
     </form>
     <br/>
     <button type="button" onclick="showForm()">Show Employee manager</button>
     <script type="text/javascript" src="/statics/js/index.js"></script>
   </body>
</html>
