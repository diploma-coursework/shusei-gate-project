import ShuSeiGateAPI from '/lib/publicAPI/ShuSeiGateAPI.js';

/**
 * checkout btn redirect to payment
 */
document.querySelector('.checkout-wrapper').addEventListener('click', () => {
    document.location.hash = 'payment';
});

/**
 * load user's tickets in cart
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
console.log(userInfo);
