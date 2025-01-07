/**
 * About View Class
 * Handles rendering of the About page sections including intro, mission and why choose us
 * Extends AbstractView for common view functionality
 */
import AbstractView from './AbstractView.js';

export default class extends AbstractView {

    /**
     * Constructor
     * Initializes the about view and sets the page title
     */
    constructor() {
        super();
        this.setTitle('Bookly | About');
    }

}

