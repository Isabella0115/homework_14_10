// Objects:

// 1. Create a User object that contains properties for name, age, and email. Include methods to greet (returns a greeting message) and updateEmail.

function CreateUser(name, age, email) {
  this.name = name;
  this.age = age;
  this.email = email;

  this.greet = function () {
    return `Hello, my name is ${this.name}`;
  };

  this.updateEmail = function (newEmail) {
    this.email = newEmail;
  };
}

const user = new CreateUser('Iza',29,'isa@gmail.com');

console.log(user.greet());
user.updateEmail("newalice@example.com");
console.log(user.email);



//———————————————————————————————————————————————————————————————




// 2. Create an array of workers objects with properties for name and age. Write a function that takes an age as a parameter and returns an array of users older than that age.

const workers = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 22 },
  { name: 'Max', age: 47 },
];

//version 1

// function filterUsersByAge(minAge) {
//   let filterUsers = [];
//   for (let worker of workers) {
//     if (worker.age > minAge) {
//       filterUsers.push(worker);
//     }
//   }
//   return filterUsers;
// }

//version 2
function filterUsersByAge(minAge) {
    return workers.filter(workers => workers.age>minAge);
}

const olderUsers = filterUsersByAge(24);
console.log(olderUsers);


//———————————————————————————————————————————————————————————————



// 3. Modify the book objects to include a pagesRead property. Write a function that calculates and returns the total number of pages read from all books.

const collection = [
  { title: 'The Great Gatsby', pages: 180, pagesRead: 100 },
  { title: '1984', pages: 328, pagesRead: 50 },
  { title: 'To Kill a Mockingbird', pages: 281, pagesRead: 281 },
];

// //version 1
// // function countTotalPagesRead() {
// //   let sum = 0;
// //   for (let book of collection) {
// //     sum += book.pagesRead;
// //   }
// //   return sum;
// // }


//version 2
function countTotalPagesRead() {
  return collection.reduce((sum, book) => (sum += book.pagesRead), 0);
}

const totalRead = countTotalPagesRead();
console.log(totalRead);



//———————————————————————————————————————————————————————————————



// 4. Create an array of book objects, where each book has properties such as title, author, pages, and isRead.
//    Write a function to add a new book and a function to list all books with their read status.

const library = [];

function AddNewBook(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;

  library.push(this);
}

function listBooks() {
  for (let book of library) {
    const readStatus = book.isRead ? 'has been read' : 'not read yet';
    console.log(`${book.title} by ${book.author}, ${book.pages} pages, ${readStatus}`);
  }
}

new AddNewBook('The Great Gatsby', 'F. Scott Fitzgerald', 180);
new AddNewBook('1984', 'George Orwell', 328, true);
listBooks()


//———————————————————————————————————————————————————————————————

// 5. Extra: Grouping Library Functions into One Object


const librarySystem = {
    books: [],
  
    addNewBook(book) {
      this.books.push(book);
    },
  
    listBooks() {
      for (let book of this.books) {
        const readStatus = book.isAvailable ? 'available' : 'not available';
        console.log(`${book.title} by ${book.author}, ${book.pages} pages, ${readStatus}`);
      }
    },
  
    getBookById(bookId) {
      return this.books.find((book) => book.bookId === bookId);
    },
  
    updateBook(bookId, updatedBook) {
      const index = this.books.findIndex((book) => book.bookId === bookId);
      if (index !== -1) {
        this.books[index] = updatedBook;
        return updatedBook;
      }
      return 'Book not found';
    },
  
    deleteBook(bookId) {
      const index = this.books.findIndex((book) => book.bookId === bookId);
      if (index !== -1) {
        this.books.splice(index, 1);
        return 'The book has been removed';
      }
      return 'Book not found';
    },
  
    getBooksByAvailableStatus(status) {
      return this.books.filter(book => book.isAvailable === status);
    }
  };
  

// Example usage:
// librarySystem.books // book[]
// librarySystem.listBooks(); :print in console: 'Title: string, Author: string, Pages: number, Read: true/false || yes/no'
// librarySystem.addNewBook(book); // :newBook
// librarySystem.getBookById(bookId); // :book | undefined
// librarySystem.updateBook(bookId, book); // :book
// librarySystem.deleteBook(bookId); // :true/false
// librarySystem.getBooksByAvailableStatus(status); // :book[] returns all available or unavailable books according to the filter

// Book Entity (shape of a book)
// book {
//   title: string;
//   author: string;
//   year: number;
//   genre: string;
//   isAvailable: boolean;
// }
