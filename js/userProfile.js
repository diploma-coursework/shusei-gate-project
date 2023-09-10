// Get the input element by its ID
var usernameInput = document.getElementById("username");

// Get the <p> element where you want to display the username
var displayUsername = document.getElementById("displayUsername");

// Add an event listener to the input field to update the displayed username
usernameInput.addEventListener("input", function() {
    // Get the current value from the input field
    var username = usernameInput.value;

    // Update the content of the <p> element to display the username
    displayUsername.textContent = "Username: " + username;
});