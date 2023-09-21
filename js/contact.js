document.addEventListener('submit', (event) => {
    event.preventDefault();

    alert("Submitted your feedback, thank you for your support.");
})

document.getElementById('goback').addEventListener('click', function() {
    window.history.back();
  });