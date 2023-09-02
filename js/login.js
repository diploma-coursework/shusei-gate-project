import ShuSeiGateAPI from '../lib/publicAPI/ShuSeiGateAPI.js';

/**
 * show error message on page
 * @param {string} msg
 */
const showErrorMessage = (msg) => {
    const formErrorMsgElement = document.querySelector('.container .form-error-msg');
    formErrorMsgElement.textContent = msg;
    formErrorMsgElement.style.color = 'red';
};

document.addEventListener('submit', async (event) => {
    event.preventDefault();

    const loginBtnElement = document.querySelector('button#login-btn');
    loginBtnElement.disabled = true;

    const inputValues = {
        email: document.querySelector('input#email').value,
        password: document.querySelector('input#password').value,
    };

    const signupFailMsg = await ShuSeiGateAPI.loginUser(inputValues.email, inputValues.password);
    if (signupFailMsg === true) {
        document.location.hash = '#user-home';
        return;
    }

    showErrorMessage(signupFailMsg);
    loginBtnElement.disabled = false;
});
