var playerScore = 0
var computerScore = 0
let roundWinner = ''

// This function returns the choice of the computer at random from the
// selection "ROCK, PAPER, SCISSORS"
function computerPlay(){
    let computerChoices = ["Rock", "Paper", "Scissors"];
    let computerChoice = Math.floor(Math.random() * 3);
    return computerChoices[computerChoice];
}

//This function contains all the logic for a single round of Rock Paper Scissors
function playRound(player, computer){
    
    if (player === computer ){
        roundWinner = "tie"

    }else if(player === "Rock"){
        if(computer === "Paper"){
            roundWinner = "lose";
            computerScore++;
        }else{

            roundWinner = "win";
            playerScore++;
        }
    }else if(player === "Paper"){
        if(computer === "Scissors"){
            roundWinner = "lose";
            computerScore++;
        }else{

            roundWinner = "win";
            playerScore++;
        }
    }else if(player === "Scissors"){
        if(computer === "Rock"){
            roundWinner = "lose";
            computerScore++;
        }else{
            roundWinner = "win";
            playerScore++;
        }
    }
}

function displayResult(playerSelection, computerSelection){

    if(roundWinner == 'tie'){
        document.getElementById("result").innerHTML = `I\'s a Tie. Both chose ${playerSelection}`;
    }
    if(roundWinner == 'lose'){
        document.getElementById("result").innerHTML = `You lost. ${computerSelection} beats ${playerSelection}`;
    }
    if(roundWinner == 'win'){
        document.getElementById("result").innerHTML = `You won. ${playerSelection} beats ${computerSelection}`;
    }
}

function addButton(){
    const btn = document.querySelector("#btn")
    btn.classList.remove('hidden')
}

function updateScore(){
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;
}

function gameOver(){
    if(playerScore === 5 || computerScore === 5){
        addButton()
        if(playerScore > computerScore){
            document.getElementById("result").innerHTML = 'Congratulations, You Win'; 
        }else{
            document.getElementById("result").innerHTML = 'Too bad, You lost';
        }
    }
}

function onClick(playerSelection){

    if(playerScore === 5 || computerScore === 5){
        addButton()
    }else{
        const computerSelection = computerPlay()
        playRound(playerSelection, computerSelection)
        displayResult(playerSelection, computerSelection)
        updateScore()
        gameOver()
    }
}

function resetgame(){
    playerScore = 0
    computerScore = 0
    roundWinner = ''
    updateScore()
    document.getElementById("result").innerHTML = '';
    const btn = document.querySelector("#btn")
    btn.classList.add('hidden')
}

window.onload = () => {
    updateScore()
}

Rock.addEventListener('click', () => onClick("Rock"))
Paper.addEventListener('click', () => onClick("Paper"))
Scissors.addEventListener('click', () => onClick("Scissors"))
btn.addEventListener('click', () => resetgame())
    

