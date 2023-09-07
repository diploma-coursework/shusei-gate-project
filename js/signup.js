import ShuSeiGateAPI from '../lib/publicAPI/ShuSeiGateAPI.js';

/**
 * show error message on page
 * @param {string} msg
 */
const showErrorMessage = (msg) => {
    const formErrorMsgPElement = document.querySelector('form.Information p.form-error-msg');
    formErrorMsgPElement.textContent = msg;
    formErrorMsgPElement.style.color = 'red';
};

document.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!document.querySelector('input.agreechk').checked) {
        showErrorMessage('Please agree to our Terms & Privacy.');
        return;
    }

    const signupButtonElement = document.querySelector('button.signupbutton[type="submit"]');
    signupButtonElement.disabled = true;

    const inputValues = {
        username: document.querySelector('input[name="username"]').value,
        email: document.querySelector('input[name="email"]').value,
        password: document.querySelector('input[name="password"]').value,
    };

    const signupFailMsg = await ShuSeiGateAPI.signupUser(inputValues.email, inputValues.username, inputValues.password);
    if (signupFailMsg === true) {
        alert('Successfully signed up.');
        document.location.hash = '#login';
        return;
    }

    showErrorMessage(signupFailMsg);
    signupButtonElement.disabled = false;
});

                    
                
