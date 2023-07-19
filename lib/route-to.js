import { setHashRoute } from './router.js';

/**
 * custom element for changing route and trigger rendering
 */
class RouteTo extends HTMLElement {
    constructor() {
        super();

        /**
         * use custom click event listener (this.click)
         */
        this.addEventListener('click', this.click.bind(this));

        /**
         * css styles
         */
        this.style.display = 'block';
        this.style.cursor = 'pointer';
    }

    click(event) {
        /**
         * allow control-click or cmd-click (mac) to work as usual
         */
        if (event.getModifierState('Control') || event.getModifierState('Meta')) return;
        event?.preventDefault();

        /**
         * change the url to specified route using href attribute value set
         */
        setHashRoute(this.getAttribute('href'));
    }
}

customElements.define('route-to', RouteTo);
