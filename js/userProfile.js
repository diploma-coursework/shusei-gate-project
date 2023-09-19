import ShuSeiGateAPI from '/lib/publicAPI/ShuSeiGateAPI.js';

let account_email;

/**
 * display all relavent data
 */
document.cookie.split('; ').forEach((cookie) => {
    if (cookie.startsWith('session=')) {
        account_email = cookie.split('=')[1];
        document.querySelector('td.displayProfileEmail').textContent = account_email;
        return;
    }

    if (cookie.startsWith('username=')) {
        document.querySelector('input#username').value = cookie.split('=')[1];
        return;
    }
});
const userInfo = await ShuSeiGateAPI.getUserInfo(account_email);
document.querySelector('textarea#aboutyourself').value = userInfo.bio.length ? userInfo.bio : '';

/**
 * receive update button click and update to database
 */
document.querySelector('button.updateProfile').addEventListener('click', async (event) => {
    const updateSuccess = await ShuSeiGateAPI.updateUserBio(
        account_email,
        document.querySelector('textarea#aboutyourself').value.replace(/\n+/g, ' ')
    );

    if (updateSuccess) {
        alert('Updated successfully.');
        window.location.reload();
        return;
    }
    alert('Failed to update.');
});
