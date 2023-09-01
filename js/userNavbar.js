document.querySelectorAll('.navbar .nav-selection').forEach((navSelection) =>
    navSelection.addEventListener('click', (event) => {
        document.location.hash = event.target.getAttribute('data-page-redirect');
    })
);

document.querySelector('h1 span.username').textContent = document.cookie.match(/(?<=username=)[^;|\s|\n]+/)[0];
