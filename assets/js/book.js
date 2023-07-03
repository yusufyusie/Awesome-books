// variables
const form = document.querySelector('.add-book-form');
const titleInput = document.querySelector('.title-book')
const authorInput = document.querySelector('.author-book')
const addButton = document.querySelector('.add-btn');
const errorMsg = document.querySelector('.error-message');
// Declare Main Class
class Book {
     static arraylist = [];
    constructor(title, author, id){
        this.title = title;
        this.author = author;
        this.id = id;
    }
}

// Checking if localstorage is empty then add an empty array or store data into local storage
// LOCAL STORAGE
class LocalStore {
    static storeBooks(){
        let books;
        const storeData = localStorage.getItem('local');
        if(!storeData) {
            books = localStorage.setItem('Added Books', JSON.stringify([]));
        } else {
            books = JSON.parse(storeData);
        }
        return books;
    }

    static addBooks(newBook) {
        const books = localStorage.storeBooks();
        if(books){
            books.push(newBook);
            localStorage.setItem('local', JSON.stringify(books));
        }
    }
}

class UI {
    static showBooks() {
      const books = LocalStore.getBooks();
      books.forEach((newBook) => {
        UI.addBookToList(newBook);
      });
    }
  
    static addBookToList(newBook) {
      newBook.id = newId;
      const bookInfo = `
        <div id="${newId}">
          <p class="book-position">"<span class="">${newBook.title}</span>" by <span class="">${newBook.author}</span></p>
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

// Add books
addButton.addEventListener('click', (e) => {
    e.preventDefault();
    const books = LocalStore.storeBooks();
    const newTitle = titleInput.value;
    const newAuthor = authorInput.value;
    let newId;
    const len = books.length;
    if(len === 0 || len === null) {
        newId = 0;
    } else {
        newId = books[len-1].id + 1;
    }
    addNewBook = new Book(newTitle, newAuthor, newId);
    if(newTitle.length !==0 && newAuthor.length !==0){
        localStorage.addBooks(addNewBook);
        UI.addBookToList(newBook);
        errorMsg.style.display = 'none';
    }  else {
        errorMsg.style.display = 'block';
      }
      form.reset();
    });

    document.addEventListener('DOMContentLoaded', UI.showBooks);