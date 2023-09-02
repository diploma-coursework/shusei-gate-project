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
     * remove route specific stylesheet links from index.html head
     * &
     * every dynamically injected script elements in head (injected scripts)
     */
    Array.from(document.head.children).forEach((element) => {
        if (element.getAttribute('data-temporary') || element.tagName === 'SCRIPT') {
            document.head.removeChild(element);
        }
    });

    /**
     * inject stylesheet links into index.html head
     */
    for (let i = 0; i < componentContentHead.childElementCount; i++) {
        const currentElement = componentContentHead.children[i];

        if (currentElement.tagName === 'LINK' && currentElement.getAttribute('rel') === 'stylesheet') {
            currentElement.setAttribute('data-temporary', 'true');
            document.head.appendChild(currentElement);
        }
    }

    /**
     * inject html into root
     */
    document.getElementById('root').innerHTML = componentContentBody.outerHTML;

    /**
     * load and execute external script in the component
     */
    const scriptElements = componentContentBody.querySelectorAll('script[src]');
    Array.from(scriptElements).map((scriptElement) => {
        /**
         * create new script element to avoid DOM not recognizing append
         */
        const newScriptElement = document.createElement('script');
        newScriptElement.src = scriptElement.getAttribute('src');
        if (scriptElement.getAttribute('type') === 'module') newScriptElement.type = 'module';

        document.head.appendChild(newScriptElement);
    });
};

/**
 * set event handler to handle hash route change
 */
window.onhashchange = hashRouteHandler;

/**
 * handle route on load
 */
hashRouteHandler();
