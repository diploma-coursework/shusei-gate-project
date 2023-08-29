import ShuSeiGateAPI from '/lib/publicAPI/ShuSeiGateAPI.js';

const setDOMEventDetail = (data) => {
    document.querySelector('.event-page-wrapper .event-title').textContent = data.title;
    document.querySelector('.event-page-wrapper .event-description').textContent = data.description;
    document.querySelector('.event-page-wrapper .event-banner').style.background = `url(${data.banner})`;
};

const eventId = ShuSeiGateAPI.getQueryParams()['event-id'];
const eventData = await ShuSeiGateAPI.getEvent(eventId);

setDOMEventDetail(eventData);
