/**
 * Home View Class
 * Extends AbstractView to handle the home page rendering
 * This class is responsible for orchestrating the rendering of the home page sections,
 * including the Hero, Featured, Benefits, and Call-to-Action sections.
 */
import AbstractView from './AbstractView.js';
import Hero from './home/hero.js';
import Feautre from './home/feautre.js';
import Benefits from './home/benefits.js';
import Cta from './home/cta.js';
import { state } from '../util/state.js';

export default class extends AbstractView {

  /**
   * Constructor
   * Initializes the home view and sets the page title
   * This method initializes the home view by calling the superclass constructor,
   * setting the page title, and instantiating the sections that make up the home page.
   */
  constructor() {
    super();
    this.setTitle('Bookly | Home');
    this.hero = new Hero();
    this.feature = new Feautre();
    this.benefits = new Benefits();
    this.cta = new Cta();
    if(state.user.isLoggedIn){
        window.location.href = window.location.origin + "#/404";
        location.reload();
    }
  }

  /**
   * Asynchronously retrieves the HTML content of the home page
   * This method asynchronously retrieves the HTML content of the home page by
   * calling the getHtml method on each of the sections and concatenating the results.
   * @returns {Promise<string>} A promise that resolves to the HTML content of the home page
   */
  async getHtml(){
    return `
      <div id="home" class="app__home">
        <!-- Hero Section -->
        ${await this.hero.getHtml()}
        <!-- Featured section -->
        ${await this.feature.getHtml()}
        
        <!-- Benefits section -->
        ${await this.benefits.getHtml()}
        
        <!-- CTA Section -->
        ${await this.cta.getHtml()}
      </div>
    `;
  }
}