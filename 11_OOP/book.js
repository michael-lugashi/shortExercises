'use strict';
class BookList {
  constructor(nextBook, currentBook, lastBook, allBooks) {
    this.nextBook = nextBook;
    this.currentBook = currentBook;
    this.lastBook = lastBook;
    this.allBooks = allBooks;
    this.numRead = allBooks.filter((book) => book.read).length;
    this.numNotRead =  allBooks.filter((book) => !book.read).length
  }
  add(book) {
      this.allBooks.push(book)
      if (book.read) {
          this.numRead += 1
      } else {
          this.numNotRead +=1
      }
  }
}

class Book {
  constructor(title, genre, auther, read, readDate) {
    this.title = title;
    this.genre = genre;
    this.auther = auther;
    this.read = read;
    this.readDate = readDate;
  }
}

const peakyBlinders = new Book(
  'Peaky Blinders',
  'Historical Fiction',
  'Lawerence Scott',
  true,
  new Date('1/4/21')
);
console.log(peakyBlinders);
const hungerGames = new Book(
  'Hunger Games',
  'Distopian',
  'Philip Dune',
  true,
  new Date('7/8/22')
);

const lalaLand = new Book('LaLa Land', 'Fiction', 'Ryan Renolds', false, null);

const time = new Book('Time', 'Fantasy', 'CeCe Hemings', false, null);

const braveHeart = new Book(
  'Brave Heart',
  'Fiction',
  'Boch Jones',
  false,
  null
);
const done = new Book(
    'Done',
    'Fiction',
    'Done Jones',
    false,
    null
  );

const myBooks = new BookList(braveHeart, time, hungerGames, [
  braveHeart,
  time,
  hungerGames,
  lalaLand,
  peakyBlinders,
]);

console.log(myBooks);

myBooks.add(done)

console.log(myBooks);
