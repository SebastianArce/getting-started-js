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


// Instance of the object
function Player(name, team) {
  this.name = name;
  this.team = team;
  this.sayName = function() {
    console.log(`My name is ${this.name}`);
  }
}

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

let book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, true)
console.log(book1.info())
