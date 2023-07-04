const form = document.querySelector('.add-book-form');
const titleInput = document.querySelector('.title-book');
const authorInput = document.querySelector('.author-book');
const addButton = document.querySelector('.add-btn');
const bookDetail = document.querySelector('.books-detail');
const errorMsg = document.querySelector('.error-message');
let newId = 0;

class Book {
  static arraylist = [];

  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }

  static showBooks() {
    const books = Book.storeBooks();
    books.forEach((addNewBook) => {
      Book.addBookToList(addNewBook);
    });
  }

  static addBookToList(addNewBook) {
    addNewBook.id = newId;
    const bookInfo = `
      <div id="${newId}">
        <p class="book-position">"<span class="">${addNewBook.title}</span>" by <span class="">${addNewBook.author}</span></p>
        <button id="${newId}" class="btn-remove">Remove</button>
      </div>
    `;
    bookDetail.innerHTML += bookInfo;
    newId += 1;
  }

  static deleteBookFromList(e) {
    e.parentElement.remove();
  }
}

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  const books = Book.storeBooks();
  const newTitle = titleInput.value;
  const newAuthor = authorInput.value;
  let newId;
  const len = books.length;
  if (len === 0 || len === null) {
    newId = 0;
  } else {
    newId = books[len - 1].id + 1;
  }
  const addNewBook = new Book(newTitle, newAuthor, newId);
  if (newTitle.length !== 0 && newAuthor.length !== 0) {
    Book.addBooks(addNewBook);
    Book.addBookToList(addNewBook);
    errorMsg.style.display = 'none';
  } else {
    errorMsg.style.display = 'block';
  }
  form.reset();
});

document.addEventListener('DOMContentLoaded', Book.showBooks);