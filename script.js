// Global Declarations
const library = [];
const shelf = document.querySelector(".bookShelf");
const button = document.querySelector(".btn");
const addBook = document.querySelector(".addBook");
const title = document.querySelector("#bookTitle");
const author = document.querySelector("#bookAuthor");
const pages = document.querySelector("#numberOfPages");
const readYes = document.querySelector("#readYes");
const readNo = document.querySelector("#readNo");
const submit = document.querySelector(".submit");

class Books {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

button.addEventListener("click", () => {
  addBook.classList.toggle("active");
});

addBook.addEventListener("submit", (e) => {
  e.preventDefault();
  addBook.classList.toggle("active");
  createBook(title.value, author.value, pages.value, readYes.checked);
  displayBooks();
  addBook.reset();
});

function createBook(bookTitle, bookAuthor, numOfPages, read) {
  const book = new Books(bookTitle, bookAuthor, numOfPages, read);
  book.id = crypto.randomUUID();

  library.push(book);
  return library;
}

const displayBooks = function () {
  shelf.innerHTML = "";
  library.forEach(function (book) {
    const individualBooks = document.createElement("div");
    const bookText = document.createElement("p");
    individualBooks.setAttribute("class", "book");
    bookText.setAttribute("class", "bookTitle");
    bookText.textContent = `${book.title}, ${book.author}`;
    individualBooks.appendChild(bookText);

    // Place listener INSIDE the loop, targeting the DOM element
    individualBooks.addEventListener("click", () => {
      individualBooks.classList.toggle("active");
    });

    shelf.appendChild(individualBooks);
  });
};

displayBooks();
