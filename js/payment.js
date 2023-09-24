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

document.addEventListener('submit', async (event) => {
    event.preventDefault();

    await ShuSeiGateAPI.userTransact(account_email);
    document.location.hash = 'receipt';
});
