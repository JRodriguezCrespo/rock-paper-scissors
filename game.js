// This function returns the choice of the computer at random from the
// selection "ROCK, PAPER, SCISSORS"
function computerPlay(){
    let computerChoices = ["ROCK", "PAPER", "SCISSORS"];
    let computerChoice = Math.floor(Math.random() * 3);
    return computerChoices[computerChoice];
}

//This function sends a prompt to the user to enter "ROCK, PAPER, SCISSORS"
// If the user dosent enter nothing (null) it changes it to a string so the program dosent give an error
function playerInput(playerSelection){
    
    if(playerSelection === null){
        return "NONE";
    }
    return playerSelection.toUpperCase();
}

//This function contains all the logic for a single round of Rock Paper Scissors
function playRound(player, computer,obj){
    let result
    let resultScore

    if (player === computer ){
        result = "It's a Tie. Both chose " + player;
        displayResult(result);
    }else if(player === "ROCK"){
        if(computer === "PAPER"){
            result = "You lose! Paper beats Rock!";
            gameScore(resultScore = "lose", obj)
            displayResult(result);
        }else{
            gameScore(resultScore = "win", obj)
            result = "You win! Rock beats Scissors!";
            displayResult(result);
        }
    }else if(player === "PAPER"){
        if(computer === "SCISSORS"){
            result = "You lose! Scissors beats Paper!";
            gameScore(resultScore = "lose", obj)
            displayResult(result);
        }else{
            gameScore(resultScore = "win", obj)
            result = "You win! Paper beats Rock!";
            displayResult(result);
        }
    }else if(player === "SCISSORS"){
        if(computer === "ROCK"){
            result = "You lose! Rock beats Scissors!";
            gameScore(resultScore = "lose", obj)
            displayResult(result);
        }else{
            gameScore(resultScore = "win", obj)
            result =  "You win! Scissors beats Paper!";
            displayResult(result);
        }
    }else return "ERROR! Enter a valid choise: Rock, Paper, Scissors";

}

function displayResult(result){
    document.getElementById("result").innerHTML = result;
}

// This section keeps count of the score of the player and computer
function gameScore(resultScore, obj){
    
    if(resultScore === "win"){
        obj.playerScore++;
        document.getElementById("playerScore").innerHTML = obj.playerScore;
    }else if(resultScore === "lose"){
        obj.computerScore++;
        document.getElementById("computerScore").innerHTML = obj.computerScore;
    }
    console.log(obj)
}

function gameOver(obj){
    if(obj.playerScore === 5){
        console.log("Congratulations! You Won ")
    }else if(obj.computerScore ===5){
        console.log("Too bad. You lost ")
    }
}

function onClick(obj){
    const imgs = document.querySelectorAll('img');
    imgs.forEach(img => img.addEventListener('click', function(e) {
    
        console.log(e.target.alt)
        console.log(playRound(playerInput(e.target.alt), computerPlay(),obj))
        gameOver(obj)
    }));

}

// This function loops the rounds until the player or the computer reaches 5 points
// and then prints who won.
function game(){

    var obj = {
        playerScore: 0, 
        computerScore: 0
    };
    onClick(obj);

    window.onload = () => {
        document.getElementById("playerScore").innerHTML = obj.playerScore;
        document.getElementById("computerScore").innerHTML = obj.computerScore;
    }
}

game();
