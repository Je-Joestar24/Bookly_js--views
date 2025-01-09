/**
 * MissionVision View Class
 * Handles rendering of the mission and vision section on the About page
 * Provides a method to asynchronously retrieve the HTML content of the mission and vision section
 */
export default class{
    /**
     * Asynchronously retrieves the HTML content of the mission and vision section
     * @returns {Promise<string>} A promise that resolves to the HTML content of the mission and vision section
     */
    async getHtml(){
        return `
         <div
            class="mission-vision__wrapper"
            role="region"
            aria-label="Our Mission and Vision"
        >
            <section class="mission-vision">
            <div class="mission-vision__content">
                <h2 class="mission-vision__title">Our Mission & Vision</h2>

                <div class="mission-vision__grid">
                <div class="mission-vision__text">
                    <div class="mission-vision__section">
                    <h3>Our Mission</h3>
                    <p>
                        At Bookly, we're committed to revolutionizing how people
                        interact with books in the digital age. Our mission is
                        to create an inclusive, intuitive platform that makes
                        reading more accessible, organized, and enjoyable for
                        everyone.
                    </p>
                    <ul class="mission-vision__list">
                        <li>
                        Empowering readers to discover their next favorite
                        book
                        </li>
                        <li>Creating personalized reading experiences</li>
                        <li>Building a vibrant community of book lovers</li>
                    </ul>
                    </div>

                    <div class="mission-vision__section">
                    <h3>Our Vision</h3>
                    <p>
                        We envision Bookly as the ultimate destination for book
                        enthusiasts worldwide. A place where:
                    </p>
                    <ul class="mission-vision__list">
                        <li>
                        Every reader finds their perfect reading companion
                        </li>
                        <li>
                        Literature becomes more accessible and organized
                        </li>
                        <li>Reading habits flourish in our digital world</li>
                    </ul>
                    </div>
                </div>

                <div
                    class="mission-vision__image"
                    role="img"
                    aria-label="Illustration of a person reading surrounded by floating books"
                >
                    <div class="floating-books">
                    <span class="book book-1"></span>
                    <span class="book book-2"></span>
                    <span class="book book-3"></span>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </div>
        `;
    }
}