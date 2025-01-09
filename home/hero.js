/**
 * Hero View Class
 * Handles rendering of the Hero section on the home page
 * Provides a method to asynchronously retrieve the HTML content of the section
 */
export default class {
    /**
     * Asynchronously retrieves the HTML content of the Hero section
     * @returns {Promise<string>} A promise that resolves to the HTML content of the Hero section
     */
    async getHtml() {
        return `
        <div class="Hero__wrapper" role="banner" aria-label="Welcome to Bookly">
          <section class="Hero__content">
            <h1 class="Hero__title">Discover, Read, and Organize Your Favorite eBooks</h1>
            <h2 class="Hero__tagline">Your gateway to a world of knowledge and imagination</h2>
            <p class="Hero__description">Find your favorite books, save them for later, and enjoy seamless reading all in one place.</p>
            <button class="Hero__cta" role="button" aria-label="Sign up for Bookly">Get Started</button>
          </section>
        </div>
        `;
    }
}