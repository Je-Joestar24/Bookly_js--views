import AbstractView from './AbstractView.js';

/**
 * NotFoundView Class
 * Handles rendering of the 404 error page
 * Extends the AbstractView class for common view functionality
 */
export default class extends AbstractView {
    /**
     * Constructor for the NotFoundView class
     * Sets the title of the page to 'Bookly | Not Found'
     */
    constructor() {
        super();
        this.setTitle('Bookly | Not Found');
    }

    /**
     * Asynchronously retrieves the HTML content of the 404 error page
     * @returns {Promise<string>} A promise that resolves to the HTML content of the 404 error page
     */
    async getHtml() {
        return `
            <div class="not-found" role="main" aria-label="404 Page Not Found">
                <div class="not-found__content">
                    <h1 class="not-found__title">404</h1>
                    <div class="not-found__book">
                        <div class="book__page"></div>
                        <div class="book__page"></div>
                        <div class="book__page"></div>
                    </div>
                    <p class="not-found__text">Oops! This page seems to be missing from our library</p>
                    <a href="#/" class="not-found__button" aria-label="Return to homepage">
                        Return to Homepage
                    </a>
                </div>
            </div>
        `
    }
}