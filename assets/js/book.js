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

// 