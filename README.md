

# Library

A simple browser-based library application built with HTML, CSS, and JavaScript.

## Features

- Add books with a title, author, page count, and read status.
- Display books dynamically.
- Remove books from the library.
- Toggle a book's read status.
- Responsive card-based layout.

## Technologies

- HTML5
- CSS3
- JavaScript (Vanilla)

## Getting Started

1. Clone the repository:

   ```bash
   git clone git@github.com:kshitijtoshniwal/Library.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Library
   ```

3. Open `index.html` in your browser.

No additional dependencies or installation steps are required.

## Implementation Notes

- Book objects are created using a constructor function.
- Each book receives a unique ID using `crypto.randomUUID()`.
- An array manages the library's book collection.
- DOM manipulation dynamically renders and updates book cards.
- Event delegation handles book actions.

## Limitations

Book data is stored in memory and is not persisted after the page is refreshed.

## Project

Built as part of [The Odin Project](https://www.theodinproject.com/), JavaScript course — Project: Library.