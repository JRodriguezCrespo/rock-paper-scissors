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

function playRound(player, computer,obj){
    let result
    let resultScore

    if (player === computer ){
        result = "It's a Tie. Both chose " + player 
        return result
    }else if(player === "ROCK"){
        if(computer === "PAPER"){
            result = "You lose! Paper beats Rock!"
            gameScore(resultScore = "lose", obj)
            return result
        }else{
            gameScore(resultScore = "win", obj)
            return "You win! Rock beats Scissors!"
        }
    }else if(player === "PAPER"){
        if(computer === "SCISSORS"){
            result = "You lose! Scissors beats Paper!"
            gameScore(resultScore = "lose", obj)
            return result
        }else{
            gameScore(resultScore = "win", obj)
            return "You win! Paper beats Rock!"
        }
    }else if(player === "SCISSORS"){
        if(computer === "ROCK"){
            result = "You lose! Rock beats Scissors!"
            gameScore(resultScore = "lose", obj)
            return result
        }else{
            gameScore(resultScore = "win", obj)
            return "You win! Scissors beats Paper!"
        }
    }else return "ERROR! Enter a valid choise: Rock, Paper, Scissors"

}

function gameScore(resultScore, obj){
    
    if(resultScore === "win"){
        obj.playerScore++
    }else if(resultScore === "lose"){
        obj.computerScore++
    }
}

function game(){
    
    var obj = {
        playerScore: 0, 
        computerScore: 0
    };
    
    do{
       console.log(playRound(playerInput(), computerPlay(),obj))
       console.log(obj)
    } while(obj.playerScore < 5 && obj.computerScore < 5)

    if(obj.playerScore === 5){
        console.log("Congratulations! You Won ")
    }else{
        console.log("Too bad. You lost ")
    }
}

game()
