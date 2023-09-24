
setTimeout(function() {
    window.location.href = "/";
}, 6000);


let countdownTime = 5;

const countdownTimer = setInterval(function() {
    if (countdownTime === 0) {
        clearInterval(countdownTimer);
        document.getElementById('timer').innerHTML = '0';
    } else {
        document.getElementById('timer').innerHTML = countdownTime;
        countdownTime--;
    }
}, 1000);