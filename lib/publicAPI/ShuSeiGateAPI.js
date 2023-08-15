import { $getEvent } from './src/event.js';
import { $getQueryParams } from './src/general.js';
import { $loginUser, $logoutUser, $signupUser } from './src/userAccount.js';

export default {
    getEvent: $getEvent,

    getQueryParams: $getQueryParams,

    signupUser: $signupUser,
    loginUser: $loginUser,
    logoutUser: $logoutUser,
};
