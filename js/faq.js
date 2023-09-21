// Get all question elements
var questions = document.querySelectorAll('.question');
var audio = document.getElementById("myAudio");

var questionArray = Array.from(questions);
// Add click event listeners to each question
Array.from(questions).forEach(function (question) {
    question.addEventListener('click', function () {
        // Find the corresponding answer element
        var answer = question.nextElementSibling;

        audio.currentTime = 0; audio.play();
        
        // Toggle the 'hidden' class to show/hide the answer
        if (answer.classList.contains('hidden')) {
            answer.classList.remove('hidden');
            question.parentElement.classList.add('border');
        } else {
            answer.classList.add('hidden');
            question.parentElement.classList.remove('border');
        }
    // question.addEventListener('click', function () {audio.currentTime = 0; audio.play()});
    // audio.play().catch(function(error) {
    //     console.error("Error playing audio: " + error.message);
    // });
    });
    
});



// querySelectorAll accepts Id and name, .name #ID
// foreach, gives each element a function and loop through array
// function(parameter)
// in this case, questions is an Array, known as nodelist
// classlist is an object that can do add,remove,toggle,contains,item(index),length to an element class
// nextelementsibling, do something to the next element under the same parent
