import routeMapping from './routeMapping.js';

/**
 * sets the hash route and calls the handler
 * @param {string} hashRoute name of route to set
 */
export const setHashRoute = (hashRoute) => {
    window.location.hash = hashRoute;
    hashRouteHandler();
};

/**
 * renders content based on hash route & route mapping
 */
const hashRouteHandler = async () => {
    /**
     * if no hash location in url, treat it as #
     */
    let currentHashRoute = window.location.hash.length ? window.location.hash : '#';

    const componentFileLocation = routeMapping[currentHashRoute] ?? routeMapping[404];
    const componentContent = await fetch(componentFileLocation);
    document.getElementById('root').innerHTML = await componentContent.text();
};

/**
 * set event handler to handle hash route change
 */
window.onhashchange = hashRouteHandler;

/**
 * handle route on load
 */
hashRouteHandler();
