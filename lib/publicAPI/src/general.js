/**
 * get every query params of the current url formatted into an object
 * @returns {null | Object.<string, string>} null if none, param name to value object if any
 */
export const $getQueryParams = () => {
    const currentURL = document.location.href;
    const urlParamsPart = currentURL.match(/(?<=\?).*(?=#)/)?.shift();
    if (!urlParamsPart) return null;

    const params = urlParamsPart.split('&');
    const paramsObject = {};

    params.forEach((param) => {
        const [key, value] = param.split('=');
        paramsObject[key] = value;
    });
    return paramsObject;
};
