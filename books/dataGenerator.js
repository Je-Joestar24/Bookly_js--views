

export default class {
    constructor() {
        this.STORAGE_KEY = 'books_data';
    }

    async fetchBooksData() {
        try {
            const cachedData = localStorage.getItem(this.STORAGE_KEY);
            if (cachedData) {
                return JSON.parse(cachedData);
            }

            const response = await fetch('json/books.json');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();

            // Store in localStorage for future use
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
            return data;
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            return [];
        }
    }

    filterAndSortBooks(books, searchTerm, sortBy) {
        // Filter by search term
        let filteredBooks = books.filter(book =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        // Sort by specified field
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

        // Return filtered and sorted books, or null if no results
        return filteredBooks.length > 0 ? filteredBooks : null;
    }
}