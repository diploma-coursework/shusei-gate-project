//Javascript function that will toggle the visibility of Password
function showpassFunction() {
    var x = document.getElementById("user_Input");
  if (x.type === "password") {
    x.type = "text";
  } else {
   x.type = "password";
  }
}