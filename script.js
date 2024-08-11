let message = "this is a global variable"

function showMessage(name='Travi', age) {
    let message = `Hello *everyone*! ${name} ${age}`
    console.log(message);

    let birth_year = 2024 - age
    return birth_year
}

travi_birth_year = showMessage("Travieso", 5)
issac_birth_year = showMessage("Issac", 3)
console.log(message)
console.log(travi_birth_year)
console.log(issac_birth_year)


function add7(number) {
    return number + 7;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function capitalize(text) {
    text = text.toLowerCase()
    text = text.charAt(0).toUpperCase() + text.slice(1)
    return text
}

function lastLetter(text) {
    return text.slice(-1)
}

console.log("add7: " + add7(7))
console.log("multiply: " + multiply(7, 7))
console.log("capitalize: " + capitalize("BoTh"))
console.log("lastLetter: " + lastLetter("abcd"))