

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const myconsole = document.querySelector("#console");
const buttons = document.querySelectorAll("button");
var humanScore =0;
var computreScore=0;




function nameofchoice(num){
    switch(num){
        case 1:
            return "rock";
        case 2: 
            return "paper";
        case 3:
            return "scissors";
    }
}
function getRandom(){
    return Math.floor(Math.random()*(3-1+1)+1);
}
function getComputerChoice(){
    let which = getRandom();
   return which;
}


rock.addEventListener("click", () => playRound(1));
paper.addEventListener("click", () => playRound(2));
scissors.addEventListener("click", () => playRound(3));



function playRound(humanChoice){
    if(humanScore == 5||computreScore==5){
        let winner ="the game have ended ";
        if(humanScore==5){
            winner += "and the winner is the player";
        }
        else{
             winner += "and the winner is the computre";
        }
        const message = document.createElement("p");
        message.textContent = winner;
        myconsole.appendChild(message);
        buttons.forEach(button => button.disabled = true); // Disable all buttons here
        return;
    }
    let win = "you win ";
    let lose = "you lost ";
    let draw = "draw! ";
    let paperwin = "paper warp rocks, ";
    let rockwin = "rock break scissors, ";
    let scissorswin = "scissors cuts paper, "
    let drawtext ="same choice, "
    let final = "";
    let computreChoice = getComputerChoice();
    console.log(humanChoice);
    console.log("human " + humanChoice + " computre " + computreChoice);
    console.log();
    if(humanChoice === computreChoice){
        final = (draw.concat(drawtext));
        final += "and score human " + humanScore + " computre " + computreScore;
        const message = document.createElement("p");
        message.textContent = final;
        myconsole.appendChild(message);
        return 1;
    }
    else if(humanChoice === (computreChoice + 1)  || humanChoice === (computreChoice -2) ){
       
        switch (computreChoice){
            case 1:
                final=(win.concat(paperwin));
                break;
            case 2:
               final =(win.concat(scissorswin));
                break;
            default:
                final =(win.concat(rockwin));
        }
        humanScore++;
        final += "and score human " + humanScore + " computre " + computreScore;
        const message = document.createElement("p");
        message.textContent = final;
        myconsole.appendChild(message);
        return 2;
    }
    else{
        switch (humanChoice){
            case 1:
                final =(lose.concat(paperwin));
                break;
            case 2:
                final =(lose.concat(scissorswin));
                break;
            default:
                final =(lose.concat(rockwin));
        }
        computreScore++;
        final += "and score human " + humanScore + " computre " + computreScore;
        const message = document.createElement("p");
        message.textContent = final;
        myconsole.appendChild(message);
        return 3;
    }
}



/*let check = 0;
while(check<10){
    console.log(getComputerChoice());
    check++;
} 
console.log(getHumanChoice());*/
/*function playGame()
{
    var humanScore =0;
    var computreScore=0;
    let ans;
    let humanChoice;
    let computreChoice;
    let index = 0;
    while(humanScore < 5 || computreScore <5){
        humanChoice = getHumanChoice();
        computreChoice = getComputerChoice();
        ans = playRound(humanChoice,computreChoice);
        switch(ans){
            case 2:
                humanScore++;
                break;
            case 3:
                computreScore++;
                break;
        }
        document.myconsole.appendChild("human score is:"+ humanScore+ ", computre score is" + computreScore);
        document.myconsole.appendChild("human choose: "+nameofchoice(humanChoice)+ ", computre choose: "+ nameofchoice(computreChoice));

    }
} */