function computerPlay(){
    let computerChoices = ["ROCK", "PAPER", "SCISSORS"]
    let computerChoice = Math.floor(Math.random() * 3)
    return computerChoices[computerChoice]
}

function playerInput(){
    let playerSelection = prompt("Enter Rock, Paper, Scissors")
    if(playerSelection === null){
        return "NONE"
    }
    return playerSelection.toUpperCase()
}

function playRound(player, computer){
    let result
    let resultScore

    if (player === computer ){
        result = "It's a Tie. Both chose " + player 
        return result
    }else if(player === "ROCK"){
        if(computer === "PAPER"){
            result = "You lose! Paper beats Rock!"
            return result
        }else{
            return "You win! Rock beats Scissors!"
        }
    }else if(player === "PAPER"){
        if(computer === "SCISSORS"){
            result = "You lose! Scissors beats Paper!"
            return result
        }else{
            return "You win! Paper beats Rock!"
        }
    }else if(player === "SCISSORS"){
        if(computer === "ROCK"){
            result = "You lose! Rock beats Scissors!"
            return result
        }else{
            return "You win! Scissors beats Paper!"
        }
    }else return "ERROR! Enter a valid choise: Rock, Paper, Scissors"

}

function gameScore(resultScore){
    
    if(resultScore === "win"){
        playerScore =+ 1
    }else if(resultScore === "lose"){
        computerScore =+ 1
    }
}

function game(playerScore, computerScore){
    
    for(i = 1; i <= 5; i++){
       console.log(playRound(playerInput(), computerPlay()))

    }
}

let playerScore = 0
let computerScore = 0

game(playerScore, computerScore)
