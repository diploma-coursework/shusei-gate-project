import ShuSeiGateAPI from '/lib/publicAPI/ShuSeiGateAPI.js';

const addToCartButtonClicked = async (event) => {
    const classList = event.target.classList;
    let eventDetails = {};

    if (classList.contains('val-1')) {
        eventDetails = {
            name: 'Valorant (Go!Gaming vs TL)',
            price: 'RM60',
            quantity: 1,
            time: '11PM - Saturday, 26 August 2023',
        };
    } else if (classList.contains('val-2')) {
        eventDetails = {
            name: 'Valorant (FUT vs DRX)',
            price: 'RM60',
            quantity: 1,
            time: '8AM - Sunday, 24 September 2023',
        };
    } else if (classList.contains('val-3')) {
        eventDetails = {
            name: 'Valorant (EDG vs T1)',
            price: 'RM60',
            quantity: 1,
            time: '5AM - Sunday, 22 October 2023',
        };
    } else if (classList.contains('cs-1')) {
        eventDetails = {
            name: 'Counter Strike (FUR vs Team Spirit)',
            price: 'RM50',
            quantity: 1,
            time: '7:55AM - Saturday, 26 August 2023',
        };
    } else if (classList.contains('cs-2')) {
        eventDetails = {
            name: 'Counter Strike (NAVI vs C9)',
            price: 'RM50',
            quantity: 1,
            time: '6:35AM - Sunday, 24 September 2023',
        };
    } else if (classList.contains('cs-3')) {
        eventDetails = {
            name: 'Counter Strike (Heroic vs FNC)',
            price: 'RM50',
            quantity: 1,
            time: '9:10AM - Sunday, 22 October 2023',
        };
    } else if (classList.contains('ani-1')) {
        eventDetails = {
            name: 'ANIME MATSURI 2023',
            price: 'RM80',
            quantity: 1,
            time: '28 September 2023 - 30 September 2023',
        };
    } else if (classList.contains('ani-2')) {
        eventDetails = {
            name: 'COSWORLD MALAYSIA',
            price: 'RM40',
            quantity: 1,
            time: '6 October 2023 - 8 October 2023',
        };
    } else if (classList.contains('ani-3')) {
        eventDetails = {
            name: 'ANIME FESTIVAL ASIA',
            price: 'RM50',
            quantity: 1,
            time: '24 November 2023 - 26 November 2023',
        };
    } else if (classList.contains('ani-4')) {
        eventDetails = {
            name: 'COMIC FIESTA 2023',
            price: 'RM120',
            quantity: 1,
            time: '23 December 2023 - 24 December 2023',
        };
    }
    console.log(eventDetails);
};

document.querySelectorAll('button.add-to-cart').forEach((btn) => btn.addEventListener('click', addToCartButtonClicked));
