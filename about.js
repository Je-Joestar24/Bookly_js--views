/**
 * About View Class
 * Handles rendering of the About page sections including intro, mission and vision, and steps
 * Extends AbstractView for common view functionality
 */
import AbstractView from './AbstractView.js';
import Intro from './about/intro.js';
import MissionVision from './about/missionvision.js';
import Steps from './about/steps.js';
import { state } from '../util/state.js';

export default class extends AbstractView {

    /**
     * Constructor
     * Initializes the about view and sets the page title
     */
    constructor() {
        super();
        this.setTitle('Bookly | About');
        this.intro = new Intro();
        this.misvis = new MissionVision();
        this.steps = new Steps();
        if(state.user.isLoggedIn){
            window.location.href = window.location.origin + "#/404";
            location.reload();
        }
    }

    /**
     * Asynchronously retrieves the HTML content of the About page
     * @returns {Promise<string>} A promise that resolves to the HTML content of the About page
     */
    async getHtml() {
        return `
          <div id="about" class="app__about">
            <!-- Introduction Section -->
            ${await this.intro.getHtml()}
            <!-- Mission and Vision Section -->
           ${await this.misvis.getHtml()}
            <!-- Steps Section -->
            ${await this.steps.getHtml()}
          </div>
        `;
    }
}

