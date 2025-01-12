import { state } from '../util/state.js';
import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor (){
        super();
        this.setTitle('Bookly | Books');
        if(!state.user.isLoggedIn){
            window.location.href = window.location.origin + "#/404";
            location.reload();
        }
    }

    async getHtml(){
        // Example books data
        const books = [
            { id: 1, title: "The Silent Echo", author: "Sarah Mitchell", type: "Mystery", cover: "https://picsum.photos/200/300" },
            { id: 2, title: "Beyond the Code", author: "James Chen", type: "Technology", cover: "https://picsum.photos/200/300" },
            { id: 3, title: "Whispers of Spring", author: "Emily Rose", type: "Romance", cover: "https://picsum.photos/200/300" },
            { id: 4, title: "Digital Dreams", author: "Alex Turner", type: "Science Fiction", cover: "https://picsum.photos/200/300" },
            { id: 5, title: "The Art of Simplicity", author: "Marie Lee", type: "Self-Help", cover: "https://picsum.photos/200/300" },
            { id: 6, title: "Cosmic Journeys", author: "David Star", type: "Science Fiction", cover: "https://picsum.photos/200/300" },
            { id: 7, title: "Hidden Patterns", author: "Lisa Wong", type: "Mystery", cover: "https://picsum.photos/200/300" },
            { id: 8, title: "Garden of Memories", author: "Robert Green", type: "Romance", cover: "https://picsum.photos/200/300" }
        ];

        return `
            <div class="books-container" role="main">
                <div class="books-header">
                    <h1 class="books-title">Explore Books</h1>
                    <div class="books-controls">
                        <div class="search-container">
                            <input 
                                type="search" 
                                class="search-input" 
                                placeholder="Search books..." 
                                aria-label="Search books"
                            >
                            <span class="search-icon" aria-hidden="true">🔍</span>
                        </div>
                        <div class="sort-container">
                            <select class="sort-select" aria-label="Sort books by">
                                <option value="title">Sort by Title</option>
                                <option value="author">Sort by Author</option>
                                <option value="type">Sort by Type</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="books-grid" role="list">
                    ${books.map(book => `
                        <article class="book-card" role="listitem">
                            <div class="book-card__cover">
                                <img src="${book.cover}" alt="${book.title} cover" loading="lazy">
                                <div class="book-card__actions">
                                    <button class="action-btn favorite-btn" aria-label="Add ${book.title} to favorites">
                                        <svg class="heart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
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
                    `).join('')}
                </div>
            </div>
        `;
    }
}