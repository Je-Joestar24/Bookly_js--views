/**
 * CTA View Class
 * Handles rendering of the Call-to-Action section on the home page
 * Provides a method to asynchronously retrieve the HTML content of the section
 */
export default class {
    /**
     * Asynchronously retrieves the HTML content of the Call-to-Action section
     * @returns {Promise<string>} A promise that resolves to the HTML content of the Call-to-Action section
     */
    async getHtml(){
        return `
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
        `
    }
}