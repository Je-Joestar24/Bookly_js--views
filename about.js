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

    async getHtml() {
        return `
          <div id="about" class="app__about">
            <!-- Introduction Section -->
            <div
              class="about__intro-wrapper"
              role="banner"
              aria-label="Welcome to Bookly"
            >
              <section class="about__intro">
                <h1 class="about__title" aria-label="About Bookly">
                  About Bookly
                </h1>
                <div class="about__content">
                  <p class="about__description">
                    Welcome to Bookly, your digital sanctuary for all things
                    literary. We're more than just a platform; we're your personal
                    library companion, designed to transform how you discover,
                    organize, and enjoy your reading journey.
                  </p>
                  <div class="about__features">
                    <div class="feature__card" role="article">
                      <h3>Discover</h3>
                      <p>
                        Explore countless books across genres, from timeless
                        classics to contemporary gems.
                      </p>
                    </div>
                    <div class="feature__card" role="article">
                      <h3>Organize</h3>
                      <p>
                        Create your perfect digital library with intuitive
                        collection management tools.
                      </p>
                    </div>
                    <div class="feature__card" role="article">
                      <h3>Connect</h3>
                      <p>
                        Share your literary journey with a community of passionate
                        readers worldwide.
                      </p>
                    </div>
                  </div>
                  <p class="about__mission">
                    Our mission is simple: to make reading more accessible,
                    organized, and enjoyable for everyone. Whether you're a casual
                    reader or a devoted bookworm, Bookly is crafted with you in
                    mind.
                  </p>
                </div>
              </section>
            </div>
            <!-- Mission and Vision Section -->
            <div
              class="mission-vision__wrapper"
              role="region"
              aria-label="Our Mission and Vision"
            >
              <section class="mission-vision">
                <div class="mission-vision__content">
                  <h2 class="mission-vision__title">Our Mission & Vision</h2>
    
                  <div class="mission-vision__grid">
                    <div class="mission-vision__text">
                      <div class="mission-vision__section">
                        <h3>Our Mission</h3>
                        <p>
                          At Bookly, we're committed to revolutionizing how people
                          interact with books in the digital age. Our mission is
                          to create an inclusive, intuitive platform that makes
                          reading more accessible, organized, and enjoyable for
                          everyone.
                        </p>
                        <ul class="mission-vision__list">
                          <li>
                            Empowering readers to discover their next favorite
                            book
                          </li>
                          <li>Creating personalized reading experiences</li>
                          <li>Building a vibrant community of book lovers</li>
                        </ul>
                      </div>
    
                      <div class="mission-vision__section">
                        <h3>Our Vision</h3>
                        <p>
                          We envision Bookly as the ultimate destination for book
                          enthusiasts worldwide. A place where:
                        </p>
                        <ul class="mission-vision__list">
                          <li>
                            Every reader finds their perfect reading companion
                          </li>
                          <li>
                            Literature becomes more accessible and organized
                          </li>
                          <li>Reading habits flourish in our digital world</li>
                        </ul>
                      </div>
                    </div>
    
                    <div
                      class="mission-vision__image"
                      role="img"
                      aria-label="Illustration of a person reading surrounded by floating books"
                    >
                      <div class="floating-books">
                        <span class="book book-1"></span>
                        <span class="book book-2"></span>
                        <span class="book book-3"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <!-- Steps Section -->
            <div
              class="steps__wrapper"
              role="region"
              aria-label="How Bookly Works"
            >
              <section class="steps">
                <h2 class="steps__title">How Bookly Works</h2>
                <div class="steps__container">
                  <div class="step__card" data-step="1">
                    <div class="step__icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                    <h3>Create Your Profile</h3>
                    <p>
                      Sign up and personalize your reading preferences to get
                      started on your literary journey.
                    </p>
                    <div class="step__number">1</div>
                  </div>
    
                  <div class="step__card" data-step="2">
                    <div class="step__icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.3-4.3" />
                      </svg>
                    </div>
                    <h3>Discover Books</h3>
                    <p>
                      Explore our vast library and find your next favorite read
                      through our smart recommendation system.
                    </p>
                    <div class="step__number">2</div>
                  </div>
    
                  <div class="step__card" data-step="3">
                    <div class="step__icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"
                        />
                      </svg>
                    </div>
                    <h3>Build Your Library</h3>
                    <p>
                      Add books to your collection and organize them into custom
                      shelves and categories.
                    </p>
                    <div class="step__number">3</div>
                  </div>
    
                  <div class="step__card" data-step="4">
                    <div class="step__icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          d="M12 20.5c4.8 0 7.5-2.7 7.5-7.5S16.8 5.5 12 5.5 4.5 8.2 4.5 13s2.7 7.5 7.5 7.5Z"
                        />
                        <path d="M12 9.5v7" />
                        <path d="M9 13h6" />
                      </svg>
                    </div>
                    <h3>Track & Share</h3>
                    <p>
                      Keep track of your reading progress and share your thoughts
                      with the community.
                    </p>
                    <div class="step__number">4</div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        `;
    }
}

