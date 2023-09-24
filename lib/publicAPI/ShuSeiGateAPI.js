import { $getQueryParams } from './src/general.js';
import {
    $loginUser,
    $logoutUser,
    $signupUser,
    $getUserInfo,
    $updateUserBio,
    $updateUserCart,
    $userTransact,
    $userAddToCart,
} from './src/userAccount.js';

export default {
    getQueryParams: $getQueryParams,

    signupUser: $signupUser,
    loginUser: $loginUser,
    logoutUser: $logoutUser,

    getUserInfo: $getUserInfo,

    updateUserBio: $updateUserBio,
    updateUserCart: $updateUserCart,

    userTransact: $userTransact,
    userAddToCart: $userAddToCart,
};
