/**
 * Intro View Class
 * Handles rendering of the introduction section on the About page
 * Provides a method to asynchronously retrieve the HTML content of the introduction section
 */
export default class{
    /**
     * Asynchronously retrieves the HTML content of the introduction section
     * @returns {Promise<string>} A promise that resolves to the HTML content of the introduction section
     */
    async getHtml(){
        return `
        <div
            class="about__intro-wrapper"
            role="banner"
            aria-label="Welcome to Bookly"
        >
            <section class="about__intro">
            <h1 class="about__title" aria-label="About Bookly">
                About Bookly
            </h1>
            <div class="about__content">
                <p class="about__description">
                Welcome to Bookly, your digital sanctuary for all things
                literary. We're more than just a platform; we're your personal
                library companion, designed to transform how you discover,
                organize, and enjoy your reading journey.
                </p>
                <div class="about__features">
                <div class="feature__card" role="article">
                    <h3>Discover</h3>
                    <p>
                    Explore countless books across genres, from timeless
                    classics to contemporary gems.
                    </p>
                </div>
                <div class="feature__card" role="article">
                    <h3>Organize</h3>
                    <p>
                    Create your perfect digital library with intuitive
                    collection management tools.
                    </p>
                </div>
                <div class="feature__card" role="article">
                    <h3>Connect</h3>
                    <p>
                    Share your literary journey with a community of passionate
                    readers worldwide.
                    </p>
                </div>
                </div>
                <p class="about__mission">
                Our mission is simple: to make reading more accessible,
                organized, and enjoyable for everyone. Whether you're a casual
                reader or a devoted bookworm, Bookly is crafted with you in
                mind.
                </p>
            </div>
            </section>
        </div>
        `;
    }
}