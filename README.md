# Bookly Views Submodule

This submodule contains the views for the Bookly SPA (Single Page Application). Views in this context refer to HTML structures tied to specific routes and pages. These views are managed through JavaScript classes and are loaded dynamically as needed by the application.

## Folder Structure

```
js/views/
  ├── AbstractView.js
  ├── HomeView.js
  ├── AboutView.js
  └── ...
```

- `AbstractView.js`: A base class that provides common functionality to all views, such as setting the document title and rendering the HTML structure.
- `HomeView.js`, `AboutView.js`, etc.: Each page of the application will have its own class extending `AbstractView` to implement specific behavior for that page.

## Installation

To include this submodule in the main repository, make sure you've added the `js/views` submodule to your project:

```bash
git submodule add https://github.com/Je-Joestar24/Bookly_js--views js/views
git submodule update --init --recursive
```

This ensures the submodule is correctly linked and ready to be used in the main project.

## Usage

### Importing a View

Each view is a JavaScript class that extends `AbstractView`. To use a view, import the class and instantiate it where needed. Each view has a `getHtml()` method that should be called to load the corresponding HTML content.

Example:

```javascript
import HomeView from './views/HomeView.js';

const homeView = new HomeView();
homeView.getHtml().then(html => {
  document.getElementById('app').innerHTML = html;
});
```

### Creating a New View

To create a new view, follow these steps:

1. Create a new JavaScript file in the `js/views/` folder (e.g., `ContactView.js`).
2. Import the `AbstractView` class.
3. Extend `AbstractView` and implement the `getHtml()` method to return the HTML structure for the page.
4. Optionally, you can override the `afterMount()` method to run any code after the view is mounted.

Example:

```javascript
import AbstractView from './AbstractView.js';

export default class ContactView extends AbstractView {
  constructor() {
    super();
    this.setTitle('Bookly | Contact');
  }

  async getHtml() {
    return `
      <div>
        <h1>Contact Us</h1>
        <p>We'd love to hear from you!</p>
      </div>
    `;
  }
}
```

### Lifecycle Methods

- **`setTitle(title)`**: Sets the document title for the current view.
- **`getHtml()`**: This method should be implemented in each view class to return the HTML structure for that page.
- **`afterMount()`**: This lifecycle method is called after the view is mounted, and can be overridden to run additional logic after rendering.

## Example of a View Class

Here is an example of a basic view class for the Home page:

```javascript
import AbstractView from './AbstractView.js';

export default class HomeView extends AbstractView {
  constructor() {
    super();
    this.setTitle('Bookly | Home');
  }

  async getHtml() {
    return `
      <div>
        <h1>Welcome to Bookly</h1>
        <p>Your digital library for discovering, reading, and organizing your favorite books.</p>
      </div>
    `;
  }
}
```

## Notes

- All views should extend `AbstractView` to maintain consistent structure and behavior across the application.
- Views are rendered dynamically based on the route in the SPA and can contain any relevant HTML, CSS, and JavaScript code required for that page.
- You can add specific logic in the `afterMount()` method to handle page initialization tasks such as event listeners or data fetching.

## Contribution

If you would like to contribute to the development of this submodule, please follow the steps below:

1. Fork the repository and create a new branch for your feature or bug fix.
2. Make your changes and ensure all tests pass (if applicable).
3. Create a pull request to the `main` branch of the repository.
