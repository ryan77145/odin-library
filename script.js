// Global Declarations
const library = [];
const shelf = document.querySelector('.shelf');

class Books {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

function createBook(bookTitle, bookAuthor) {
    const book = new Books(bookTitle, bookAuthor);
    book.id = crypto.randomUUID();
    book.title = bookTitle;
    book.author = bookAuthor;
    
    library.push(book);
    return library
}

const displayBooks = function() {
    shelf.innerHTML = '';
    library.forEach(function(book) {
        const individualBooks = document.createElement('div');
        individualBooks.setAttribute("class", "books");
        individualBooks.textContent = `${book.title}, ${book.author}`;
    shelf.appendChild(individualBooks);
})}

createBook('Harry Potter', 'JK Rowling');
createBook('Green Eggs and Ham', 'Dr. Suess');
displayBooks();



