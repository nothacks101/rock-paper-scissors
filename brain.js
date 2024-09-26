console.log("Hello World");

function getRandom(){
    return Math.floor(Math.random()*(3-1+1)+1);
}
function playGame()
{
    var humanScore =0;
    var computreScore=0;
    let ans;
    let humanChoice;
    let computreChoice;
    let index = 0;
    while(index<5){
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
        console.log("human score is:"+ humanScore+ ", computre score is" + computreScore);
        console.log("human choose: "+nameofchoice(humanChoice)+ ", computre choose: "+ nameofchoice(computreChoice));
        index++;
    }
}
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
function getComputerChoice(){
    let which = getRandom();
    /*switch(which){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }*/
   return which;
}
function getHumanChoice(){
    let choice = prompt("choose rock - paper - scissors");
    choice = choice.toLowerCase();
    let ans;
    switch (choice){
        case "rock":
            ans=1;
            break;
        case "paper":
            ans=2;
            break;
        default:
            ans=3;
    }
    return ans;
}
function playRound(humanChoice,computreChoice){
    let win = "you win ";
    let lose = "you lost ";
    let draw = "draw! ";
    let paperwin = "paper warp rocks";
    let rockwin = "rock break scissors";
    let scissorswin = "scissors cuts paper"
    let drawtext ="same choice"
    if(humanChoice === computreChoice){
        console.log(draw.concat(drawtext));
        return 1;
    }
    else if(humanChoice === computreChoice + 1  || humanChoice === computreChoice + 2){
        switch (computreChoice){
            case 1:
                console.log(win.concat(paperwin));
                break;
            case 2:
                console.log(win.concat(scissorswin));
                break;
            deafult:
                console.log(win.concat(rockwin));
        }
        return 2;
    }
    else{
        switch (humanChoice){
            case 1:
                console.log(lose.concat(paperwin));
                break;
            case 2:
                console.log(lose.concat(scissorswin));
                break;
            deafult:
                console.log(lose.concat(rockwin));
        }
        return 3;
    }
}

playGame();
/*let check = 0;
while(check<10){
    console.log(getComputerChoice());
    check++;
} 
console.log(getHumanChoice());*/