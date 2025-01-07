/**
 * Home View Class
 * Extends AbstractView to handle the home page rendering
 */
import AbstractView from './AbstractView.js';


export default class extends AbstractView {



  /**
   * Constructor
   * Initializes the home view and sets the page title
   */
  constructor() {
    super();
    this.setTitle('Bookly | Home');
  }
}