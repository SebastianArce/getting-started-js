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
  let userName = "tf-" + name;
  return {
    name, userName
  }
}

user1 = createUser("John")
console.log(user1)

// Private variables and functions using factory functions
function createUser(name) {
  let userName = "tf-" + name;

  let reputation = 0;
  const getReputation = () => reputation;
  const giveReputation = () => reputation++;

  return {name, userName, getReputation, giveReputation}
}

user1 = createUser("Nick")
user1.giveReputation()
user1.giveReputation()
console.log(user1.getReputation())

// Prototypal inheritance with factory functions
function createPlayer(name, level) {
  const { getReputation, giveReputation }  = createUser(name);

  const increaseLevel = () => level++;
  const getLevel = () => level;
  return {name, getReputation, giveReputation, increaseLevel, getLevel}
}

player1 = createPlayer("John", 1)
player1.giveReputation()
player1.increaseLevel()
player1.increaseLevel()
console.log(player1.getReputation(), player1.name, player1.getLevel(), player1.userName) // userName is undefined

// Extend objects
function createSecondPlayer(name, level) {
  const user = createUser(name);

  const increaseLevel = () => level++;
  const getLevel = () => level;
  return Object.assign({}, user, {increaseLevel, getLevel});
}

player1 = createSecondPlayer("John", 1)
player1.giveReputation()
player1.increaseLevel()
player1.increaseLevel()
console.log(player1.getReputation(), player1.name, player1.getLevel(), player1.userName) // userName is defined

// Note: function declarations are hoisted, but function expressions are not