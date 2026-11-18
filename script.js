
function Book(title, author, pages, isRead) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

const myLibrary = [];

function addBookToLibrary(title, author, pages, isRead) {
    const newBook = new Book(title, author, pages, isRead);

    myLibrary.push(newBook);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, false);
addBookToLibrary("Atomic Habits", "James Clear", 320, true);
addBookToLibrary("Clean Code", "Robert C. Martin", 464, false);

const libraryContainer = document.querySelector("#library-container");

console.log(libraryContainer);

function displayBooks() {
    libraryContainer.textContent = "";

    for (const book of myLibrary) {
        const bookCard = document.createElement("div");

        const title = document.createElement("h2");
        title.textContent = book.title;

        const author = document.createElement("p");
        author.textContent = `By ${book.author}`;

        bookCard.appendChild(title);
        bookCard.appendChild(author);

        libraryContainer.appendChild(bookCard);
    }
}

displayBooks();
