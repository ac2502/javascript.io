// Book-luokka
class Book {
  constructor(name, author, publisher, year) {
    this.name = name;
    this.author = author;
    this.publisher = publisher;
    this.year = year;
  }

  toString() {
    return `book: ${this.name} ${this.author} ${this.publisher} ${this.year}`;
  }
}

// Library-luokka
class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
    console.log(`A new book is added to library: ${book.name}`);
  }

  printBooks() {
    console.log("Library has a following books:");
    this.books.forEach(book => {
      console.log(`- ${book.toString()}`);
    });
    console.log(`Library has ${this.books.length} books`);
  }
}

// Testi: luodaan kirjoja ja kirjasto
const library = new Library();

const book1 = new Book("Risto Räppääjä", "Sinikka Nopola", "WSOY", 2020);
const book2 = new Book("Harry Potter ja viisasten kivi", "J.K. Rowling", "Tammi", 1997);
const book3 = new Book("Heinähattu ja Vilttitossu", "Sinikka ja Tiina Nopola", "Otava", 2002);

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.printBooks();
