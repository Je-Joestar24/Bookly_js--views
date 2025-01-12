/**
 * DataGenerator class for managing book data.
 * Handles fetching, caching, filtering, and sorting of book data.
 */
export default class {
    /**
     * Constructor initializes the storage key for caching book data.
     */
    constructor() {
        this.STORAGE_KEY = 'books_data';
    }

    /**
     * Fetches book data from a JSON file or retrieves it from localStorage if cached.
     * @returns {Promise} A promise that resolves to the fetched book data or an empty array if an error occurs.
     */
    async fetchBooksData() {
        try {
            // Attempt to retrieve cached data from localStorage
            const cachedData = localStorage.getItem(this.STORAGE_KEY);
            if (cachedData) {
                return JSON.parse(cachedData);
            }

            // Fetch book data from the JSON file if not cached
            const response = await fetch('json/books.json');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();

            // Cache the fetched data in localStorage for future use
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
            return data;
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            return []; // Return an empty array if an error occurs
        }
    }

    /**
     * Filters and sorts the book data based on the search term and sort by criteria.
     * @param {Array} books - The array of book objects to filter and sort.
     * @param {String} searchTerm - The search term to filter books by.
     * @param {String} sortBy - The field to sort books by.
     * @returns {Array|null} The filtered and sorted array of books, or null if no results.
     */
    filterAndSortBooks(books, searchTerm, sortBy) {
        // Filter books by the search term
        let filteredBooks = books.filter(book =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        // Sort the filtered books by the specified field
        filteredBooks.sort((a, b) => {
            if (sortBy === 'title') {
                return a.title.localeCompare(b.title);
            } else if (sortBy === 'author') {
                return a.author.localeCompare(b.author);
            } else if (sortBy === 'type') {
                return a.type.localeCompare(b.type);
            }
            return 0; // Default to no sorting if sortBy is not recognized
        });

        // Return the filtered and sorted books, or null if no results
        return filteredBooks.length > 0 ? filteredBooks : null;
    }
}