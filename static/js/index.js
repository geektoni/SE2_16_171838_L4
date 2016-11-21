/*
* @brief This method show and hide the employee form.
* It will also clear all the form value.
*/
function showForm() {
  var form = document.getElementById("new_employee");
  if (form.style.display === "inline") {
    form.style.display = "none";
  } else {
    form.style.display = "inline";
  }
  form.elements["emp_ID"].value = "";
  form.elements["emp_name"].value = "";
  form.elements["emp_surname"].value = "";
  form.elements["emp_salary"].value = "";
  form.elements["emp_level"].value = "";
}
