/**
 * Represents a list generator for favorite books.
 * This class is responsible for generating HTML lists of favorite books.
 */
export default class {
    /**
     * Generates an HTML list of favorite books.
     * 
     * @param {Array} favorites - An array of favorite book objects.
     * @returns {String} The HTML list of favorite books as a string.
     */
    async getList(favorites) {
        if (!favorites || favorites.length === 0) {
            return `
                <div class="favorites-empty" role="status" aria-label="No favorites added">
                    <div class="favorites-empty__icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                        </svg>
                    </div>
                    <h2 class="favorites-empty__title">No Favorites Yet</h2>
                    <p class="favorites-empty__text">Start exploring our collection and add books you love to your favorites!</p>
                    <a href="#/books" class="favorites-empty__button" aria-label="Browse books">
                        <svg class="button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                        </svg>
                        Browse Books
                    </a>
                </div>
            `;
        }

        return `${favorites.map(book => `
            <article class="favorite-item" role="listitem">
                <div class="favorite-item__cover">
                    <img src="${book.cover}" alt="${book.title} cover" loading="lazy">
                </div>
                <div class="favorite-item__content">
                    <div class="favorite-item__info">
                        <h2 class="favorite-item__title">${book.title}</h2>
                        <p class="favorite-item__author">by ${book.author}</p>
                        <div class="favorite-item__meta">
                            <span class="favorite-item__type">${book.type}</span>
                        </div>
                    </div>
                    <div class="favorite-item__actions">
                        <button class="action-btn read-btn" aria-label="Read ${book.title}">
                            <svg class="action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                            </svg>
                            Read
                        </button>
                        <button class="action-btn remove-btn" aria-label="Remove ${book.title} from favorites" data-book-id="${book.id}">
                            <svg class="action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                            </svg>
                            Remove
                        </button>
                    </div>
                </div>
            </article>
        `).join('')}`;
    }
}