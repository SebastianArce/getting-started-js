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
