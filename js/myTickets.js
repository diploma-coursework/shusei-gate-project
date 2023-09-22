import ShuSeiGateAPI from '/lib/publicAPI/ShuSeiGateAPI.js';

/**
 * get user's data
 */
let account_email;
document.cookie.split('; ').forEach((cookie) => {
    if (cookie.startsWith('session=')) {
        // email
        account_email = cookie.split('=')[1];
        return;
    }
});
const userInfo = await ShuSeiGateAPI.getUserInfo(account_email);
const domParser = new DOMParser();
const ticketWrapperElement = document.querySelector('.tickets-wrapper');

/**
 * render out tickets in cart to dom
 */
userInfo.bought_tickets?.forEach((ticket, index) => {
    const ticketElement = domParser.parseFromString(
        `
            <div class="ticket">
                <div class="info-wrapper">
                    <div class="name">${ticket.name}</div>
                    <div class="time">${ticket.time}</div>
                    <div class="quantity-wrapper">
                        <span>Quantity:</span>
                        <div class="quantity">${ticket.quantity}</div>
                    </div>
                    <div class="price">RM${ticket.quantity * ticket.price}</div>
                    <div class="id-wrapper">
                        <span>ID: </span>
                        <div class="id">${ticket.id}</div>
                    </div>
                </div>
                <div class="qr-wrapper">
                    <span>Your Entry QR:</span>
                    <img src="/assets/random_qr.png" alt="entry qr" />
                </div>
            </div>
        `,
        'text/html'
    );
    ticketWrapperElement.appendChild(ticketElement.body);

    if (userInfo.bought_tickets?.length - 1 === index) {
        ticketWrapperElement.removeChild(document.querySelector('.ticket.ticket-temp'));
    }
});

if (!userInfo.bought_tickets?.length) {
    ticketWrapperElement.removeChild(document.querySelector('.ticket.ticket-temp'));
    ticketWrapperElement.appendChild(
        domParser.parseFromString(
            '<h1 style="text-align: center; font-size: 1.3em;">Nothing in inventory</h1>',
            'text/html'
        ).body
    );
}
