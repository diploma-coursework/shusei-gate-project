
setTimeout(function() {
    window.location.href = "/";
}, 50000);

// document.addEventListener("DOMContentLoaded", function() {
//     let countdown = 5;
//     const timerElement = document.getElementById("timer");

//     function updateTimer() {
//         timerElement.textContent = countdown;

//         if (countdown === 0) {
//             window.location.href = "/";
//         } else {
//             countdown--;
//             setTimeout(updateTimer, 1000);
//         }
//     }
//     updateTimer();
// });