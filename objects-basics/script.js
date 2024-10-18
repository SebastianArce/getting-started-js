function sumAllNumbers(total, currentItem) {
  return total + currentItem;
}

function tripleNumber(num) {
  return num * 3;
}

function isEven(num) {
  return num % 2 == 0;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8];

filterArray = array.filter(isEven).map(tripleNumber).reduce(sumAllNumbers);

console.log(filterArray);

// Object constructors
function Player(name, team) {
  this.name = name;
  this.team = team;
  this.sayName = function() {
    console.log(`My name is ${this.name}`);
  }
}

// Instance of the player object
let player1 = new Player('RonaldoJ', 'Juventus');
console.log(player1.sayName());

// Exercise of book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    infoMessage = `${this.title} by ${this.author}, ${this.pages} pages`
    if (this.read) {
      infoMessage += ", already read"
    } else {
      infoMessage += ", not read yet"
    }
    return infoMessage
  }
}

// Instances of the book object
let book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, true)
let book2 = new Book("Man's Search for Meaning", "Viktor Frankl", 200, true)
console.log(book1.info())
console.log(book2.info())

// Prototype inheritance
console.log(Object.getPrototypeOf(book1) === Book.prototype)

// We can also use object literals, but obviously is not as flexible
book1 = {
  "title": "The Hobbit",
  author: "J.R.R. Tolkien",
  "pages": 295,
  "read": true,
  "info": function() {
    infoMessage = `${this.title} by ${this.author}, ${this.pages} pages`
    if (this.read) {
      infoMessage += ", already read"
    } else {
      infoMessage += ", not read yet"
    }
    return infoMessage
  }
};

console.log(book1.info())
console.log(book1.title)

// We can also use factory functions
function createUser(name) {
  userName = "tf-" + name;
  return {
    name, userName
  }
}

user1 = createUser("John")
console.log(user1)