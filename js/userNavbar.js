document.querySelectorAll('.navbar .nav-selection').forEach((navSelection) =>
    navSelection.addEventListener('click', (event) => {
        document.location.hash = event.target.getAttribute('data-page-redirect');
    })
);
