
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

console.log(myLibrary);
console.log(myLibrary.length);

for (const book of myLibrary) {
    console.log(book.title);
}
