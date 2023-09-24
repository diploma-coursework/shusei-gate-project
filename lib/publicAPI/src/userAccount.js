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
    let existingAccount = await getDoc(doc(databaseApp, 'users', email));
    if (existingAccount.exists()) {
        return 'User with the email already exists.';
    }
    /**
     * check if username is already taken
     */
    existingAccount = await getDocs(query(collection(databaseApp, 'users'), where('username', '==', username)));
    if (existingAccount.size) {
        return 'Username is already taken.';
    }

    /**
     * signup the user
     */
    await setDoc(doc(databaseApp, 'users', email), {
        username,
        password,
        member_since: Date.now(),
        bio: '',
    });
    return true;
};

/**
 * login client into account
 * @param {string} email
 * @param {string} password
 * @returns {boolean | string} true if successful, string if error
 */
export const $loginUser = async (email, password) => {
    /**
     * query account with credentials and validate
     */
    const existingAccount = await getDoc(doc(databaseApp, 'users', email));
    if (!existingAccount.exists()) {
        return 'Account with the email does not exists, please create an account first.';
    }
    if (existingAccount.data().password !== password) {
        return 'Incorrect password, please try again.';
    }

    /**
     * assign session token and return true
     */
    document.cookie = `session=${email}`;
    document.cookie = `username=${existingAccount.data().username}`;
    return true;
};

/**
 * logout the user by deleting the session cookie
 * @returns {boolean} true if successful
 */
export const $logoutUser = async () => {
    document.cookie.split('; ').forEach((cookie) => {
        if (cookie.startsWith('session=') || cookie.startsWith('username=')) {
            document.cookie = `${cookie};expires=Sat, 01 Jan 2000 00:00:00 GMT`;
        }
    });
    return true;
};

/**
 * get all user's account info
 * @param {string} email
 * @returns {*} user's data
 */
export const $getUserInfo = async (email) => {
    /**
     * check if email already registered
     */
    let existingAccount = await getDoc(doc(databaseApp, 'users', email));
    if (!existingAccount.exists()) {
        return 'User does not exist.';
    }

    return existingAccount.data();
};

export const $updateUserBio = async (email, newBio) => {
    let existingAccount = await getDoc(doc(databaseApp, 'users', email));
    if (!existingAccount.exists()) {
        return false;
    }
    const oldUserInfo = existingAccount.data();
    oldUserInfo.bio = newBio;

    await setDoc(doc(databaseApp, 'users', email), oldUserInfo);
    return true;
};

/**
 * update the user's cart properties
 * @param {string} email
 * @param {{}} newCartObject
 * @returns
 */
export const $updateUserCart = async (email, newCartObject) => {
    let existingAccount = await getDoc(doc(databaseApp, 'users', email));
    if (!existingAccount.exists()) {
        return false;
    }
    const oldUserInfo = existingAccount.data();
    oldUserInfo.cart = newCartObject;

    await setDoc(doc(databaseApp, 'users', email), oldUserInfo);
    return true;
};

export const $userTransact = async (email) => {
    /**
     * get user cart data
     */
    let existingAccount = await getDoc(doc(databaseApp, 'users', email));
    if (!existingAccount.exists()) {
        return false;
    }
    const existingAccountData = existingAccount.data();

    /**
     * generate transaction id
     */
    const transactionId = `${new Date().getTime()}${email}`;

    /**
     * define same id for each ticket
     */
    existingAccountData.cart.forEach((eventTickets, index) => {
        existingAccountData.cart[index].id = transactionId;
    });
    /**
     * copy over cart to bought tickets
     */
    if (!existingAccountData.bought_tickets) existingAccountData.bought_tickets = existingAccountData.cart;
    else existingAccountData.cart.forEach((ticket) => existingAccountData.bought_tickets.push(ticket));
    existingAccountData.cart = [];

    await setDoc(doc(databaseApp, 'users', email), existingAccountData);
    return true;
};

export const $userAddToCart = async (email, metadata) => {
    /**
     * get user cart data
     */
    let existingAccount = await getDoc(doc(databaseApp, 'users', email));
    if (!existingAccount.exists()) {
        return false;
    }
    const existingAccountData = existingAccount.data();

    let ticketAfterQuantity = 1;

    if (!existingAccountData.cart) {
        existingAccountData.cart = [metadata];
    } else {
        let alreadyInCart = false;
        const sameEvent = existingAccountData.cart.forEach((ticket) => {
            if (ticket.name === metadata.name) {
                ticket.quantity++;
                ticketAfterQuantity = ticket.quantity;
                alreadyInCart = true;
            }
        });
        if (!alreadyInCart) existingAccountData.cart.push(metadata);
    }

    await setDoc(doc(databaseApp, 'users', email), existingAccountData);
    return `Name: ${metadata.name}\nQuantity: ${ticketAfterQuantity}\nAdded to your cart.`;
};
