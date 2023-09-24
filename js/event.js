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

const addToCartButtonClicked = async (event) => {
    const classList = event.target.classList;
    let eventDetails = {};

    if (classList.contains('val-1')) {
        eventDetails = {
            name: 'Valorant (Go!Gaming vs TL)',
            price: 60,
            quantity: 1,
            time: '11PM - Saturday, 26 August 2023',
        };
    } else if (classList.contains('val-2')) {
        eventDetails = {
            name: 'Valorant (FUT vs DRX)',
            price: 60,
            quantity: 1,
            time: '8AM - Sunday, 24 September 2023',
        };
    } else if (classList.contains('val-3')) {
        eventDetails = {
            name: 'Valorant (EDG vs T1)',
            price: 60,
            quantity: 1,
            time: '5AM - Sunday, 22 October 2023',
        };
    } else if (classList.contains('cs-1')) {
        eventDetails = {
            name: 'Counter Strike (FUR vs Team Spirit)',
            price: 50,
            quantity: 1,
            time: '7:55AM - Saturday, 26 August 2023',
        };
    } else if (classList.contains('cs-2')) {
        eventDetails = {
            name: 'Counter Strike (NAVI vs C9)',
            price: 50,
            quantity: 1,
            time: '6:35AM - Sunday, 24 September 2023',
        };
    } else if (classList.contains('cs-3')) {
        eventDetails = {
            name: 'Counter Strike (Heroic vs FNC)',
            price: 50,
            quantity: 1,
            time: '9:10AM - Sunday, 22 October 2023',
        };
    } else if (classList.contains('ani-1')) {
        eventDetails = {
            name: 'ANIME MATSURI 2023',
            price: 80,
            quantity: 1,
            time: '28 September 2023 - 30 September 2023',
        };
    } else if (classList.contains('ani-2')) {
        eventDetails = {
            name: 'COSWORLD MALAYSIA',
            price: 40,
            quantity: 1,
            time: '6 October 2023 - 8 October 2023',
        };
    } else if (classList.contains('ani-3')) {
        eventDetails = {
            name: 'ANIME FESTIVAL ASIA',
            price: 50,
            quantity: 1,
            time: '24 November 2023 - 26 November 2023',
        };
    } else if (classList.contains('ani-4')) {
        eventDetails = {
            name: 'COMIC FIESTA 2023',
            price: 120,
            quantity: 1,
            time: '23 December 2023 - 24 December 2023',
        };
    } else if (classList.contains('mus-1')) {
        eventDetails = {
            name: 'Music Live Show Bundle (English)',
            price: 300,
            quantity: 1,
            time: 'Oct30, Nov17, Dec12',
        };
    } else if (classList.contains('mus-2')) {
        eventDetails = {
            name: 'Music Live Show Bundle (Japanese)',
            price: 400,
            quantity: 1,
            time: 'Jul28, Jan17, Jun12',
        };
    } else if (classList.contains('mus-3')) {
        eventDetails = {
            name: 'Music Live Show Bundle (Korean)',
            price: 500,
            quantity: 1,
            time: 'Sep30, Nov01, Dec22',
        };
    } else if (classList.contains('mus-4')) {
        eventDetails = {
            name: 'Music Live Show Bundle (Tamil)',
            price: 300,
            quantity: 1,
            time: 'Feb26, Dec8, May10',
        };
    } else return;

    const addToCartMsg = await ShuSeiGateAPI.userAddToCart(account_email, eventDetails);
    if (!addToCartMsg) return alert('Something went wrong.');
    alert(addToCartMsg);

    if (confirm('Do you want to go to cart?')) window.location.hash = 'cart';
};

document.querySelectorAll('button.add-to-cart').forEach((btn) => btn.addEventListener('click', addToCartButtonClicked));
