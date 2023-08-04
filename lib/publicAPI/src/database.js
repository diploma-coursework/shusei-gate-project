import { doc, getDoc, setDoc } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js';
import { databaseApp } from '../../firebaseConnection.js';

/**
 * signup a user into the database
 * @param {string} email
 * @param {string} username
 * @param {string} password
 * @returns {boolean | string} true if successful, string if error
 */
export const $signupUser = async (email, username, password) => {
    /**
     * check if email already registered
     */
    const existingAccount = await getDoc(doc(databaseApp, 'users', email));
    if (existingAccount.exists()) {
        return 'User with the email already exists.';
    }

    /**
     * signup the user
     */
    await setDoc(doc(databaseApp, 'users', email), {
        username,
        password,
    });
    return true;
};
