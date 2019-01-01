let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice(){
    const choices = ['rock','paper','scissors'];
    const randomNumber = Math.floor(Math.random()* 3);
    return choices[randomNumber];
}

function win(userChoice,computerChoice){
    userScore++;
    console.log("WIN");
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${userChoice} beats ${computerChoice}. You WIN`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('green-glow'),500);
}

function lose(userChoice,computerChoice){
    computerScore++;
    console.log("LOSE");
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${userChoice} loses to ${computerChoice}. You LOSE`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow'),500);
}

function draw(userChoice,computerChoice){
    console.log("DRAW")
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${userChoice} equals ${computerChoice}. DRAW`;
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('gray-glow'),500);
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    console.log("userChoice " + userChoice);
    console.log("computerChoice " + computerChoice);
    
    switch (userChoice + computerChoice){
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            //console.log("User Wins");
            win(userChoice,computerChoice);
            break;
        case "scissorsrock":
        case "rockpaper":
        case "paperscissors":
            //console.log("User Loses");
            lose(userChoice,computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            //console.log("Draw");
            draw(userChoice,computerChoice);
            break;        
    }
}


function main() {
rock_div.addEventListener('click',()=>game("rock"));

paper_div.addEventListener('click',()=>game("paper"));

scissors_div.addEventListener('click',()=>game("scissors"));
}
main();