console.log("Welcome to the rock-paper-scissors game! :)")

let choices = ["rock", "paper", "scissors"]
let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let random_idx = Math.floor(Math.random() * 3) // values between 0 and 2
    return choices[random_idx]
}

function getHumanChoice() {
    console.log()
    let human_idx = prompt("Enter the number of your choice: \n0 for rock, 1 for paper, 2 for scissors", 0)
    return choices[human_idx]
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock") {
        if (computerChoice == "rock") {
            console.log("It's a tie!")
        } else if (computerChoice == "paper") {
            console.log("You lose! Paper beats rock.")
            computerScore += 1
        } else if (computerChoice == "scissors") {
            console.log("You win! Rock beats scissors.")
            humanScore += 1
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "paper") {
            console.log("It's a tie!")
        } else if (computerChoice == "scissors") {
            console.log("You lose! Scissors beat paper.")
            computerScore += 1
        } else if (computerChoice == "rock") {
            console.log("You win! Paper beats rock.")
            humanScore += 1
        }
    } else if (humanChoice == "scissors") {
        if (computerChoice == "scissors") {
            console.log("It's a tie!")
        } else if (computerChoice == "rock") {
            console.log("You lose! Rock beats scissors.")
            computerScore += 1
        } else if (computerChoice == "paper") {
            console.log("You win! Scissors beat paper.")
            humanScore += 1
        }
    }
}

function playGame(e) {
    let humanChoice = e.target.id
    let computerChoice = getComputerChoice()

    playRound(humanChoice, computerChoice)
    console.log(`Marker: Computer: ${computerScore}, You: ${humanScore}`)
}


let rock = document.querySelector("#rock")
let scissors = document.querySelector("#scissors")
let paper = document.querySelector("#paper")

rock.addEventListener("click", playGame)
scissors.addEventListener("click", playGame)
paper.addEventListener("click", playGame)


