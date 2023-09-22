
var div = document.querySelectorAll('.div');

var questions = document.querySelectorAll('.question');

var questionArray = Array.from(questions);
var divArray = Array.from(div);

Array.from(questions).forEach(function (question) {
    var div = question.parentElement;

    div.addEventListener('click', function () {
        
        var answer = question.nextElementSibling;
        
        if (answer.classList.contains('hidden')) {
            answer.classList.remove('hidden');
            question.parentElement.classList.add('border');
        } else {
            answer.classList.add('hidden');
            question.parentElement.classList.remove('border');
        }
    
    });
    
});



// querySelectorAll accepts Id and name, .name #ID
// foreach, gives each element a function and loop through array
// function(parameter)
// in this case, questions is an Array, known as nodelist
// classlist is an object that can do add,remove,toggle,contains,item(index),length to an element class
// nextelementsibling, do something to the next element under the same parent
