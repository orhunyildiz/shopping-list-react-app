# Shopping List React App

A simple and interactive shopping list application built with React. This project allows users to add items with a specified quantity, mark items as completed, delete individual items, and clear the entire list.

## Table of Contents

-   [Shopping List React App](#shopping-list-react-app)
    -   [Table of Contents](#table-of-contents)
    -   [Introduction](#introduction)
    -   [Features](#features)
    -   [Live Demo](#live-demo)
    -   [Installation](#installation)
    -   [Usage](#usage)
    -   [Project Structure](#project-structure)
    -   [Contributing](#contributing)
    -   [License](#license)

## Introduction

The Shopping List React App is a minimal and user-friendly application designed to help you manage your shopping items. It demonstrates the use of React functional components and hooks (such as `useState`) to handle dynamic state and interactivity.

## Features

-   **Add Items:** Users can add a product by entering its name and selecting a quantity.
-   **Mark as Completed:** Each item can be marked as completed using a checkbox.
-   **Delete Items:** Remove individual items from the shopping list.
-   **Clear List:** Clear all items from the list with a single action.
-   **Responsive Design:** Styled with a modern and clean CSS layout.

## Live Demo

The project is deployed on Vercel and can be viewed here: [https://shopping-list-react-app-test.vercel.app/](https://shopping-list-react-app-test.vercel.app/)

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/orhunyildiz/shopping-list-react-app.git
    ```

2. **Change into the project directory:**

    ```bash
    cd shopping-list-react-app
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

    or

    ```bash
    yarn install
    ```

## Usage

To run the application in development mode, use:

```bash
npm start
```

or

```bash
yarn start
```

The app will run at [http://localhost:5173](http://localhost:5173/).

To build the project for production, run:

```bash
npm run build
```

or

```bash
yarn build
```

This will create an optimized production build in the `build` folder.

## Project Structure

The main project structure is as follows:

```
├── index.html
├── src
│   ├── components
│   │   ├── Form.jsx
│   │   ├── Header.jsx
│   │   ├── Item.jsx
│   │   ├── List.jsx
│   │   └── Summary.jsx
│   ├── App.jsx
│   ├── data.js
│   ├── index.css
│   └── main.jsx
└── package.json
```

-   **index.html:** The main HTML file that serves the React app, located at the root level.
-   **Form.jsx:** Contains the form to add new shopping items and a button to clear the list.
-   **Header.jsx:** Displays the header of the application.
-   **Item.jsx:** Renders individual shopping items with options to mark as completed or delete.
-   **List.jsx:** Displays the list of shopping items.
-   **Summary.jsx:** Provides a summary of the shopping list status.
-   **App.jsx:** Main component that ties all components together and manages the application state.
-   **data.js:** Initializes the list of items.
-   **index.css:** Contains the styles for the application.
-   **main.jsx:** Entry point that renders the App component into the DOM.

## Contributing

Contributions are welcome! If you have suggestions, improvements, or bug fixes, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
