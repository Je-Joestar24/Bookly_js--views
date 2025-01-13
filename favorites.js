import { state, mutations } from '../util/state.js';
import AbstractView from './AbstractView.js';

import ListGenerator from './favorites/listGenerator.js';

/**
 * Represents the Favorites view, responsible for displaying and managing favorite books.
 * Extends the AbstractView class to inherit common view functionality.
 */
export default class extends AbstractView {
    /**
     * Initializes the Favorites view.
     * Sets the title of the view, checks if the user is logged in, and prepares the view for rendering.
     */
    constructor() {
        super();
        this.setTitle('Bookly | Favorites');
        if (!state.user.isLoggedIn) {
            window.location.href = window.location.origin + "#/404";
            location.reload();
        }
        this.lGen = new ListGenerator();
    }

    /**
     * Fetches and renders the HTML template for the Favorites view.
     * @returns {Promise} A promise that resolves to the rendered HTML of the view.
     */
    async getHtml() {
        // Example favorites data
        const favorites = state.user.favorites;

        return `
            <div class="favorites-container" role="main">
                <div class="favorites-header">
                    <h1 class="favorites-title">My Favorites</h1>
                    <p class="favorites-count">${favorites.length} books</p>
                </div>

                <div class="favorites-list" role="list">
                    ${await this.lGen.getList(favorites)}
                </div>
            </div>
        `;
    }

    /**
     * Binds event listeners to the remove buttons for each favorite book.
     * Handles the removal of a book from the user's favorites when the remove button is clicked.
     * Updates the favorites count in the UI after removing a book.
     */
    async bindAll() {
        const removeButtons = document.querySelectorAll('.remove-btn');
        const favoritesCountElement = document.querySelector('.favorites-count');
        removeButtons.forEach(button => {
            button.addEventListener('click', async (e) => {
                const bookId = parseInt(e.target.dataset.bookId);
                const book = state.user.favorites.find(fav => fav.id === bookId);
                if (book) {
                    await mutations.removeFavorite(book);
                    // Update the UI after removing the book from favorites
                    e.target.closest('.favorite-item').remove();
                    // Update the favorites count in the UI
                    const updatedFavoritesCount = state.user.favorites.length;
                    favoritesCountElement.textContent = `${updatedFavoritesCount} books`;
                }
            });
        });
    }
}