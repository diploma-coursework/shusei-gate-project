import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyA-rF0F7cABTfExBcPpT5P_gNKOx9gtodI',
    authDomain: 'shusei-gate-project.firebaseapp.com',
    projectId: 'shusei-gate-project',
    storageBucket: 'shusei-gate-project.appspot.com',
    messagingSenderId: '267381296598',
    appId: '1:267381296598:web:a9cb6f04fb7abbe555a877',
    measurementId: 'G-BZR51M1JWZ',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const databaseApp = getFirestore(firebaseApp);

/*************************************************************************
 * docs: https://firebase.google.com/docs/firestore/manage-data/add-data *
 *************************************************************************/
