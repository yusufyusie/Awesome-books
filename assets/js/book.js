// variables
const form = document.querySelector('.add-book-form');
const titleInput = document.querySelector('.title-book')
const authorInput = document.querySelector('.author-book')
const addButton = document.querySelector('.add-btn');
// Declare Main Class
class Book{
    static arraylist = [];
    constructor(title, author,id){
        this.title = title;
        this.author = author;
        this.id = id;
    }
}

// Checking if localstorage is empty then add an empty array or store data into local storage
// LOCAL STORAGE
class LocalStore {
    static storeBooks(){
        let books = Book.arraylist = [...Book.arraylist, this];
        const storeData = localStorage.getItem('local');
        if(storeData === null) {
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
    }
})