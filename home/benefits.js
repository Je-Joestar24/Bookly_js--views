/**
 * Benefits View Class
 * Handles rendering of the Benefits section on the home page
 * Provides a method to asynchronously retrieve the HTML content of the section
 */
export default class{
    /**
     * Asynchronously retrieves the HTML content of the Benefits section
     * @returns {Promise<string>} A promise that resolves to the HTML content of the Benefits section
     */
    async getHtml(){
        return `
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
        `;
    }
}