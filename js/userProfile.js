
var usernameInput = document.getElementById("username");
var displayUsername = document.getElementById("displayUsername");

usernameInput.addEventListener("input", function() {

    var username = usernameInput.value;

    displayUsername.textContent = "Username: " + username;
});

var emailInput = document.getElementById("emailInput");
var displayEmail = document.getElementById("displayEmail");

emailInput.addEventListener("input", function() {

    var email = emailInput.value;

    displayEmail.textContent = "Email: " + username;
});
