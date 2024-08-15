console.log("Welcome to the rock-paper-scissors game! :)")

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]
    let random_idx = Math.floor(Math.random() * 3) // values between 0 and 2
    return choices[random_idx]
}

let computerChoice = getComputerChoice()
console.log(computerChoice)