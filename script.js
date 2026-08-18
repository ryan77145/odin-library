const library = [];

class Books {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}


function createBook(bookTitle, bookAuthor) {
    const book = {};
    book.id = crypto.randomUUID();
    book.title = bookTitle;
    book.author = bookAuthor;

    library.push(book);
    return library
}

console.log(createBook("Harry Potter", "JK Rowling"));
console.log(library);

library.forEach(function(book) {
    console.log(book.title, book.author)
})