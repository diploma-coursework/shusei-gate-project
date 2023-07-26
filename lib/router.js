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

    /**
     * fetch the mapped file directory
     */
    const componentFileLocation = routeMapping[currentHashRoute] ?? routeMapping[404];
    let componentContent = await fetch(componentFileLocation);
    const componentContentText = await componentContent.text();

    /**
     * parse it into html object using the the built-in DOMParser class
     */
    const parser = new DOMParser();
    const componentContentObject = parser.parseFromString(componentContentText, 'text/html');

    const componentContentBody = componentContentObject.querySelector('body');
    const componentContentHead = componentContentObject.querySelector('head');

    /**
     * inject into root
     */
    document.getElementById('root').innerHTML = componentContentBody.outerHTML;

    /**
     * inject stylesheet links into index.html head
     */
    for (let i = 0; i < componentContentHead.childElementCount; i++) {
        const currentElement = componentContentHead.children[i];

        if (currentElement.tagName === 'LINK' && currentElement.getAttribute('rel') === 'stylesheet') {
            document.head.appendChild(currentElement);
        }
    }
};

/**
 * set event handler to handle hash route change
 */
window.onhashchange = hashRouteHandler;

/**
 * handle route on load
 */
hashRouteHandler();
