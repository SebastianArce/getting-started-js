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