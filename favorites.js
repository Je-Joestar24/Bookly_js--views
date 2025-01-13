import { state, mutations } from '../util/state.js';
import AbstractView from './AbstractView.js';

/**
 * Represents the Favorites view, responsible for displaying and managing favorite books.
 * Extends the AbstractView class to inherit common view functionality.
 */
export default class extends AbstractView {
    /**
     * Initializes the Favorites view.
     * Sets the title of the view, checks if the user is logged in, and prepares the view for rendering.
     */
    constructor (){
        super();
        this.setTitle('Bookly | Favorites');
        if(!state.user.isLoggedIn){
            window.location.href = window.location.origin + "#/404";
            location.reload();
        }
    }

    /**
     * Fetches and renders the HTML template for the Favorites view.
     * @returns {Promise} A promise that resolves to the rendered HTML of the view.
     */
    async getHtml(){
        // Example favorites data
        const favorites = state.user.favorites;

        return `
            <div class="favorites-container" role="main">
                <div class="favorites-header">
                    <h1 class="favorites-title">My Favorites</h1>
                    <p class="favorites-count">${favorites.length} books</p>
                </div>

                <div class="favorites-list" role="list">
                    ${favorites.map(book => `
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
                    `).join('')}
                </div>
            </div>
        `;
    }

    /**
     * Binds event listeners to the remove buttons for each favorite book.
     * Handles the removal of a book from the user's favorites when the remove button is clicked.
     */
    async bindAll() {
        const removeButtons = document.querySelectorAll('.remove-btn');
        removeButtons.forEach(button => {
            button.addEventListener('click', async (e) => {
                const bookId = parseInt(e.target.dataset.bookId);
                const book = state.user.favorites.find(fav => fav.id === bookId);
                if (book) {
                    await mutations.removeFavorite(book);
                    // Update the UI after removing the book from favorites
                    e.target.closest('.favorite-item').remove();
                }
            });
        });
    }
}