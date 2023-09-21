var questions = document.querySelectorAll('.question');
var audio = document.getElementById("myAudio");

var questionArray = Array.from(questions);

Array.from(questions).forEach(function (question) {
    question.addEventListener('click', function () {

        audio.currentTime = 0; audio.play();
    });
    
});

document.getElementById('goback').addEventListener('click', function() {
    window.history.back();
  });