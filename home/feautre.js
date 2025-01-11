/**
 * Featured View Class
 * Handles rendering of the Featured section on the home page
 * Provides a method to asynchronously retrieve the HTML content of the section
 */
export default class{
    /**
     * Asynchronously retrieves the HTML content of the Featured section
     * @returns {Promise<string>} A promise that resolves to the HTML content of the Featured section
     */
    async getHtml(){
        const cards = [
            { title: "Book Title", author: "Author Name", image: "#" },
            { title: "Book Title", author: "Author Name", image: "#" },
            { title: "Book Title", author: "Author Name", image: "#" },
            { title: "Book Title", author: "Author Name", image: "#" }
        ];

        return `
        <div class="Featured__wrapper" role="region" aria-label="Featured Books Section">
          <section class="Featured__content">
            <header class="Featured__header">
              <h2 class="Featured__title">Explore Popular Picks</h2>
            </header>
            <div class="Featured__grid">
              ${cards.map(card => `
              <article class="Featured__card" role="article">
                <div class="Featured__card-image">
                  <img src="${card.image}" alt="${card.title} Cover" role="img" aria-label="Cover of ${card.title}">
                </div>
                <div class="Featured__card-content">
                  <h3 class="Featured__card-title">${card.title}</h3>
                  <p class="Featured__card-author">by ${card.author}</p>
                  <div class="Featured__card-buttons">
                    <button class="Featured__card-btn Featured__card-btn--read" aria-label="Read more about ${card.title}"  data-auth-login>
                      Read More
                    </button>
                    <button class="Featured__card-btn Featured__card-btn--favorite" aria-label="Add ${card.title} to favorites" data-auth-login>
                      Add to Favorites
                    </button>
                  </div>
                </div>
              </article>
              `).join('')}
            </div>
            <div class="Featured__cta">
              <button class="Featured__cta-btn" role="button" aria-label="Browse all available books"  data-auth-login>
                Browse All Books
              </button>
            </div>            
          </section>
        </div>
        `;
    }
}