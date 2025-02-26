import { state, mutations } from '../util/state.js';
import AbstractView from './AbstractView.js';
import DataGenerator from './books/dataGenerator.js';

/**
 * Represents the Books view, responsible for displaying and managing book data.
 * Extends the AbstractView class to inherit common view functionality.
 */
export default class extends AbstractView {
    /**
     * Initializes the Books view.
     * Sets the title of the view, checks if the user is logged in, and initializes the DataGenerator.
     * Also sets default values for searchTerm and sortBy.
     */
    constructor() {
        super();
        this.setTitle('Bookly | Books');
        if (!state.user.isLoggedIn) {
            window.location.href = window.location.origin + "#/404";
            location.reload();
        }
        this.dataGen = new DataGenerator();
        this.searchTerm = '';
        this.sortBy = 'title'; // Default sort by title
    }

    /**
     * Fetches book data and renders the view.
     * @returns {Promise} A promise that resolves to the rendered HTML of the view.
     */
    async getHtml() {
        this.data = await this.dataGen.fetchBooksData();
        state.books.books = await this.data;
        return this.render();
    }

    /**
     * Renders the HTML template for the Books view.
     * @returns {String} The rendered HTML template as a string.
     */
    async render() {
        return `
            <div class="books-container" role="main">
                <div class="books-header">
                    <h1 class="books-title">Explore Books</h1>
                    <div class="books-controls">
                        <div class="search-container">
                            <input  
                                id="search-input"
                                type="search" 
                                class="search-input" 
                                placeholder="Search books..." 
                                aria-label="Search books"
                            >
                            <span class="search-icon" aria-hidden="true">🔍</span>
                        </div>
                        <div class="sort-container">
                            <select id="sort-select" class="sort-select" aria-label="Sort books by">
                                <option value="title">Sort by Title</option>
                                <option value="author">Sort by Author</option>
                                <option value="type">Sort by Type</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div id="books_grid" class="books-grid" role="list">
                    ${await this.getBooks()}
                </div>
            </div>
        `;
    }

    /**
     * Fetches and renders the books based on the current searchTerm and sortBy.
     * @returns {String} The rendered HTML of the books as a string.
     */
    async getBooks() {
        const filteredBooks = this.dataGen.filterAndSortBooks(
            this.data,
            this.searchTerm,
            this.sortBy
        );

        if (!filteredBooks) {
            return `
                <div class="no-results" style="margin: auto; grid-column: span 4;">
                    No Books found matching "${this.searchTerm}"
                </div>
            `;
        }
        return `
            ${filteredBooks.map(book => {
                const isFavorite = state.user.favorites.some(fav => fav.id === book.id);
                return `
                    <article class="book-card" role="listitem">
                        <div class="book-card__cover">
                            <img src="${book.cover}" alt="${book.title} cover" loading="lazy">
                            <div class="book-card__actions">
                                <button 
                                    class="action-btn favorite-btn ${isFavorite ? 'active' : ''}" 
                                    aria-label="${isFavorite ? 'Remove from' : 'Add to'} favorites"
                                    data-book-id="${book.id}"
                                >
                                    <svg class="heart-icon" viewBox="0 0 24 24" fill="${isFavorite ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                                    </svg>
                                </button>
                                <button class="action-btn read-btn" aria-label="Read ${book.title}">
                                    <svg class="book-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="book-card__content">
                            <h2 class="book-card__title">${book.title}</h2>
                            <p class="book-card__author">by ${book.author}</p>
                            <span class="book-card__type">${book.type}</span>
                        </div>
                    </article>
                `;
            }).join('')}
        `;
    }
    /**
     * Binds event listeners to the search input and sort select elements.
     * Updates the searchTerm and sortBy state based on user input and re-renders the books.
     */
    async bindAll() {
        const searchInput = document.querySelector('#search-input');
        const sortSelect = document.querySelector('#sort-select');
        const booksGrid = document.querySelector('#books_grid');

        // Handle search
        searchInput.addEventListener('input', async (e) => {
            this.searchTerm = e.target.value;
            booksGrid.innerHTML = await this.getBooks();
            this.bindFavoriteButtons(); // Rebind after updating content
        });

        // Handle sort
        sortSelect?.addEventListener('change', async (e) => {
            this.sortBy = e.target.value;
            booksGrid.innerHTML = await this.getBooks();
            this.bindFavoriteButtons(); // Rebind after updating content
        });

        // Initial binding of favorite buttons
        this.bindFavoriteButtons();
    }

    bindFavoriteButtons() {
        const favoriteButtons = document.querySelectorAll('.favorite-btn');
        favoriteButtons.forEach(button => {
            button.addEventListener('click', async (e) => {
                const bookId = parseInt(button.dataset.bookId);
                const book = this.data.find(b => b.id === bookId);
                if (book) {
                    await mutations.toggleFavorite(book);
                    // Update the button state
                    const isFavorite = state.user.favorites.some(fav => fav.id === bookId);
                    button.classList.toggle('active', isFavorite);
                    button.setAttribute('aria-label', `${isFavorite ? 'Remove from' : 'Add to'} favorites`);
                    const heartIcon = button.querySelector('.heart-icon');
                    heartIcon.setAttribute('fill', isFavorite ? 'currentColor' : 'none');
                }
            });
        });
    }
}