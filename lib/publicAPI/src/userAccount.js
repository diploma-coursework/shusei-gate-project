import {
    collection,
    doc,
    getDoc,
    getDocs,
    query,
    setDoc,
    where,
} from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js';
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
     * check if email is valid with regex
     */
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
        return 'Invalid email address, please check and try again.';
    }
    /**
     * check if email already registered
     */
    let _existingAccount = await getDoc(doc(databaseApp, 'users', email));
    if (_existingAccount.exists()) {
        return 'User with the email already exists.';
    }
    /**
     * check if username is already taken
     */
    _existingAccount = await getDocs(query(collection(databaseApp, 'users'), where('username', '==', username)));
    if (_existingAccount.size) {
        return 'Username is already taken.';
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
