
function Book(title, author, pages, isRead) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

Book.prototype.toggleRead = function () {
    this.isRead = !this.isRead;
};

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
        bookCard.classList.add("book-card");

        const title = document.createElement("h2");
        title.textContent = book.title;

        const author = document.createElement("p");
        author.textContent = `By ${book.author}`;

        const pages = document.createElement("p");
        pages.textContent = `${book.pages} pages`;

        const readStatus = document.createElement("p");
        readStatus.textContent = book.isRead ? "Read" : "Not read";

        const toggleReadButton = document.createElement("button");
        toggleReadButton.textContent = book.isRead ? "Mark as unread" : "Mark as read";
        toggleReadButton.dataset.id = book.id;
        toggleReadButton.dataset.action = "toggle-read";

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.dataset.id = book.id;
        removeButton.dataset.action = "remove";

        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(removeButton);
        bookCard.appendChild(pages);
        bookCard.appendChild(readStatus);
        bookCard.appendChild(toggleReadButton);

        libraryContainer.appendChild(bookCard);
    }
}

libraryContainer.addEventListener("click", (event) => {
    const button = event.target.closest("button");

    if (!button) {
        return;
    }

    const bookId = button.dataset.id;
    const action = button.dataset.action;

    const bookIndex = myLibrary.findIndex((book) => {
        return book.id === bookId;
    });

    if (bookIndex === -1) {
        return;
    }

    if (action === "remove") {
        myLibrary.splice(bookIndex, 1);
    }

    if (action === "toggle-read") {
        const book = myLibrary[bookIndex];
        book.toggleRead();
    }

    displayBooks();
});

displayBooks();
const newBookBtn = document.querySelector("#new-book-btn");
const bookDialog = document.querySelector("#book-dialog");

newBookBtn.addEventListener("click", () => {
    bookDialog.showModal();
});

const bookForm = document.querySelector("#book-form");

bookForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = Number(document.querySelector("#pages").value);
    const isRead = document.querySelector("#is-read").checked;
    addBookToLibrary(title, author, pages, isRead);

    displayBooks();

    bookDialog.close();

    bookForm.reset();

    console.log(myLibrary);
});