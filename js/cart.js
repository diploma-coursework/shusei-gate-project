import ShuSeiGateAPI from '/lib/publicAPI/ShuSeiGateAPI.js';

/**
 * checkout btn redirect to payment
 */
document.querySelector('.checkout-wrapper').addEventListener('click', () => {
    document.location.hash = 'payment';
});

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
userInfo.cart = [];
userInfo.cart.forEach((ticket, index) => {
    const ticketElement = domParser.parseFromString(
        `
        <div class="ticket">
        <div class="top-info">
        <div class="left">
        <div class="ticket-name">${ticket.name}</div>
        <div class="ticket-quantity">x${ticket.quantity}</div>
        </div>
        
        <div class="ticket-price">RM${ticket.price * ticket.quantity}</div>
        </div>
        <div class="ticket-time">${ticket.time}</div>
        </div>
        `,
        'text/html'
    );
    ticketWrapperElement.appendChild(ticketElement.body);

    if (userInfo.cart.length - 1 === index) {
        ticketWrapperElement.removeChild(document.querySelector('.ticket.ticket-temp'));
    }
});

if (!userInfo.cart.length) {
    ticketWrapperElement.removeChild(document.querySelector('.ticket.ticket-temp'));
    ticketWrapperElement.appendChild(
        domParser.parseFromString('<h1 style="text-align: center; font-size: 1.3em;">Nothing in cart</h1>', 'text/html')
            .body
    );
}
