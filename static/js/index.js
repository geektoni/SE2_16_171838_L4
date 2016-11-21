/* @brief This method show and hide the employee form.
*/
function showForm() {
  var form = document.getElementById("new_employee");
  if (form.style.display === "inline") {
    form.style.display = "none";
  } else {
    form.style.display = "inline";
  }
}
