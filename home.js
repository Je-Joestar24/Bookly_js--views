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

  async getHtml(){
    return `
      <div id="home" class="app__home">
        <!-- Different sections here -->
        <!-- Hero Section -->
        <div class="Hero__wrapper" role="banner" aria-label="Welcome to Bookly">
          <section class="Hero__content">
            <h1 class="Hero__title">Discover, Read, and Organize Your Favorite eBooks</h1>
            <h2 class="Hero__tagline">Your gateway to a world of knowledge and imagination</h2>
            <p class="Hero__description">Find your favorite books, save them for later, and enjoy seamless reading all in one place.</p>
            <button class="Hero__cta" role="button" aria-label="Sign up for Bookly">Get Started</button>
          </section>
        </div>
        <!-- Featured section -->
        <div class="Featured__wrapper" role="region" aria-label="Featured Books Section">
          <section class="Featured__content">
            <header class="Featured__header">
              <h2 class="Featured__title">Explore Popular Picks</h2>
            </header>
            <div class="Featured__grid">
              <!-- Cards -->
              <article class="Featured__card" role="article">
                <div class="Featured__card-image">
                  <img src="#" alt="Book Title Cover" role="img" aria-label="Cover of Book Title">
                </div>
                <div class="Featured__card-content">
                  <h3 class="Featured__card-title">Book Title</h3>
                  <p class="Featured__card-author">by Author Name</p>
                  <div class="Featured__card-buttons">
                    <button class="Featured__card-btn Featured__card-btn--read" aria-label="Read more about Book Title">
                      Read More
                    </button>
                    <button class="Featured__card-btn Featured__card-btn--favorite" aria-label="Add Book Title to favorites">
                      Add to Favorites
                    </button>
                  </div>
                </div>
              </article>
              <article class="Featured__card" role="article">
                <div class="Featured__card-image">
                  <img src="#" alt="Book Title Cover" role="img" aria-label="Cover of Book Title">
                </div>
                <div class="Featured__card-content">
                  <h3 class="Featured__card-title">Book Title</h3>
                  <p class="Featured__card-author">by Author Name</p>
                  <div class="Featured__card-buttons">
                    <button class="Featured__card-btn Featured__card-btn--read" aria-label="Read more about Book Title">
                      Read More
                    </button>
                    <button class="Featured__card-btn Featured__card-btn--favorite" aria-label="Add Book Title to favorites">
                      Add to Favorites
                    </button>
                  </div>
                </div>
              </article>
              <article class="Featured__card" role="article">
                <div class="Featured__card-image">
                  <img src="#" alt="Book Title Cover" role="img" aria-label="Cover of Book Title">
                </div>
                <div class="Featured__card-content">
                  <h3 class="Featured__card-title">Book Title</h3>
                  <p class="Featured__card-author">by Author Name</p>
                  <div class="Featured__card-buttons">
                    <button class="Featured__card-btn Featured__card-btn--read" aria-label="Read more about Book Title">
                      Read More
                    </button>
                    <button class="Featured__card-btn Featured__card-btn--favorite" aria-label="Add Book Title to favorites">
                      Add to Favorites
                    </button>
                  </div>
                </div>
              </article>
              <article class="Featured__card" role="article">
                <div class="Featured__card-image">
                  <img src="#" alt="Book Title Cover" role="img" aria-label="Cover of Book Title">
                </div>
                <div class="Featured__card-content">
                  <h3 class="Featured__card-title">Book Title</h3>
                  <p class="Featured__card-author">by Author Name</p>
                  <div class="Featured__card-buttons">
                    <button class="Featured__card-btn Featured__card-btn--read" aria-label="Read more about Book Title">
                      Read More
                    </button>
                    <button class="Featured__card-btn Featured__card-btn--favorite" aria-label="Add Book Title to favorites">
                      Add to Favorites
                    </button>
                  </div>
                </div>
              </article>
            </div>
            <div class="Featured__cta">
              <a href="#browse" class="Featured__cta-btn" role="button" aria-label="Browse all available books">
                Browse All Books
              </a>
            </div>            
          </section>
        </div>
        
        <!-- Benefits section -->
        <div class="Benefits__wrapper" role="region" aria-label="Platform Benefits Section">
          <section class="Benefits__content">
            <header class="Benefits__header">
              <h2 class="Benefits__title">Why Choose Our Platform?</h2>
              <p class="Benefits__subtitle">Discover the advantages of reading with us</p>
            </header>
            
            <div class="Benefits__container">
              <div class="Benefits__image-area">
                <div class="Benefits__image-circle"></div>
                <div class="Benefits__image-decoration"></div>
              </div>
              
              <div class="Benefits__list-container">
                <ul class="Benefits__list" role="list">
                  <li class="Benefits__item" role="listitem">
                    <span class="Benefits__bullet">•</span>
                    <div class="Benefits__text">
                      <h3>Look Books</h3>
                      <p>Browse through our vast collection of books</p>
                    </div>
                  </li>
                  <li class="Benefits__item" role="listitem">
                    <span class="Benefits__bullet">•</span>
                    <div class="Benefits__text">
                      <h3>Read</h3>
                      <p>Start reading your favorite books instantly</p>
                    </div>
                  </li>
                  <li class="Benefits__item" role="listitem">
                    <span class="Benefits__bullet">•</span>
                    <div class="Benefits__text">
                      <h3>Add to Favorites</h3>
                      <p>Save your favorite books for later</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        
        <!-- CTA Section -->
        <div class="CTA__wrapper" role="complementary" aria-label="Sign up call to action">
          <section class="CTA__content">
            <div class="CTA__background">
              <!-- Animated elements -->
              <div class="CTA__floating-element CTA__floating-element--1" aria-hidden="true">📚</div>
              <div class="CTA__floating-element CTA__floating-element--2" aria-hidden="true">📖</div>
              <div class="CTA__floating-element CTA__floating-element--3" aria-hidden="true">🔖</div>
            </div>
            
            <header class="CTA__header">
              <h2 class="CTA__title">Join Our Community of Book Lovers</h2>
              <p class="CTA__subtitle">Start Your Reading Journey Today!</p>
            </header>
            
            <div class="CTA__body">
              <p class="CTA__description">Sign up now to unlock access to thousands of eBooks and organize your favorites.</p>
              <button class="CTA__button" role="button" aria-label="Sign up for free access">
                Sign Up for Free
                <span class="CTA__button-arrow" aria-hidden="true">→</span>
              </button>
            </div>
          </section>
        </div>
      </div>
    `;
  }
}