const buyButtonClick = (event) => {
    let eventId;

    if (event.target.classList.contains('event-1')) eventId = 1;
    if (event.target.classList.contains('event-2')) eventId = 2;
    if (event.target.classList.contains('event-3')) eventId = 3;
};

document.querySelectorAll('button.buy-tickets-btn').forEach((buyTicketsBtn) => {
    buyTicketsBtn.addEventListener('click', buyButtonClick);
});

`
<div class="popup-wrapper">
<div class="popup">
    <div class="popup-window">
        <h1 class="title">Add Tickets to Cart</h1>
        <input type="number" min="1" />
        <button>Add to Cart</button>
    </div>
</div>
`;
