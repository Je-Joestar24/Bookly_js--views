/**
 * Steps View Class
 * Handles rendering of the steps section on the About page
 * Provides a method to asynchronously retrieve the HTML content of the steps section
 */
export default class{
    /**
     * Asynchronously retrieves the HTML content of the steps section
     * @returns {Promise<string>} A promise that resolves to the HTML content of the steps section
     */
    async getHtml(){
        return `
        <div
            class="steps__wrapper"
            role="region"
            aria-label="How Bookly Works"
        >
            <section class="steps">
            <h2 class="steps__title">How Bookly Works</h2>
            <div class="steps__container">
                <div class="step__card" data-step="1">
                <div class="step__icon">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                    </svg>
                </div>
                <h3>Create Your Profile</h3>
                <p>
                    Sign up and personalize your reading preferences to get
                    started on your literary journey.
                </p>
                <div class="step__number">1</div>
                </div>

                <div class="step__card" data-step="2">
                <div class="step__icon">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                    </svg>
                </div>
                <h3>Discover Books</h3>
                <p>
                    Explore our vast library and find your next favorite read
                    through our smart recommendation system.
                </p>
                <div class="step__number">2</div>
                </div>

                <div class="step__card" data-step="3">
                <div class="step__icon">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    >
                    <path
                        d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"
                    />
                    </svg>
                </div>
                <h3>Build Your Library</h3>
                <p>
                    Add books to your collection and organize them into custom
                    shelves and categories.
                </p>
                <div class="step__number">3</div>
                </div>

                <div class="step__card" data-step="4">
                <div class="step__icon">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    >
                    <path
                        d="M12 20.5c4.8 0 7.5-2.7 7.5-7.5S16.8 5.5 12 5.5 4.5 8.2 4.5 13s2.7 7.5 7.5 7.5Z"
                    />
                    <path d="M12 9.5v7" />
                    <path d="M9 13h6" />
                    </svg>
                </div>
                <h3>Track & Share</h3>
                <p>
                    Keep track of your reading progress and share your thoughts
                    with the community.
                </p>
                <div class="step__number">4</div>
                </div>
            </div>
            </section>
        </div>
        `;
    }
}