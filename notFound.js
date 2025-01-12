import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor (){
        super();
        this.setTitle('Bookly | Not Found');
    }

    async getHtml(){
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