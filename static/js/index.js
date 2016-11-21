/* @brief This method show and hide the employee form.
*/
function showForm() {
  var form = document.getElementById("new_employee");
  if (form.style.display === "inline") {
    form.style.display = "none";
  } else {
    form.style.display = "inline";
  }
  for (var i=0; i<form.elements.length; i++){
    form.elements[i].value = "";
  }
}
