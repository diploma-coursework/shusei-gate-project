import { doc, getDoc } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js';
import { databaseApp } from '../../firebaseConnection.js';

/**
 *
 * @param {string} eventId
 * @returns {bool | {title: string, description: string}} false if error, object if found
 */
export const $getEvent = async (eventId) => {
    if (!eventId) return false;

    const event = await getDoc(doc(databaseApp, 'events', eventId));
    if (!event.exists()) return false;
    return event.data();
};
