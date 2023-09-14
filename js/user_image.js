const image = document.querySelector('img');
const input = document.querySelector('input');

input.addEvenetListener('change', (e) => {
    image.src = URL.createObjectURL(e.target.files[0]);
});